/**
 * Export every visible Romanian text of the main site into a Word document
 * (.docx) the clinic can rewrite — upload it to Google Drive and it opens as
 * a Google Doc. One table per page: where the text shows · current text ·
 * an empty "new text" column. Each row carries an ID (the content path) so
 * the returned document maps back to the right field.
 *
 *   node scripts/copy/export.mjs [out.docx]      (default: texte-site-emmanuel-clinix.docx)
 *
 * Skips what the visitor never reads (links, slugs, image/video keys), the
 * small uppercase labels no longer shown, and the home FAQ (only the chat
 * assistant uses it). Landing pages, tests, articles and legal pages are
 * left out on purpose — export them separately if they get rewritten too.
 */
import { createJiti } from "jiti";
import { writeFileSync } from "node:fs";
import { deflateRawSync, crc32 } from "node:zlib";

const root = new URL("../../", import.meta.url).pathname;
const jiti = createJiti(root, { alias: { "@": root.replace(/\/$/, "") } });
const load = async (file, name) => (await jiti.import(root + file))[name];

const SERVICE_NAMES = { brainmap: "BrainMap", tavns: "taVNS", tpbm: "tPBM", ces: "CES", psihoterapie: "Psihoterapie", psihiatrie: "Psihiatrie", neurofeedback: "Neurofeedback", emsella: "EmSella" };
const services = await load("content/services/ro.ts", "SERVICES_RO");
const dict = await load("content/i18n/ro.ts", "ro");
const home = await load("content/pages/ro/home.ts", "HOME_RO");
// The home FAQ is not on the page any more (only the chat assistant reads it).
const homeVisible = Object.fromEntries(Object.entries(home).filter(([k]) => k !== "faq"));

const PAGES = [
  ["Acasă", "home", homeVisible],
  ["Cum funcționează", "cum-functioneaza", await load("content/pages/ro/how-it-works.ts", "howItWorks")],
  ["Servicii — pagina generală", "servicii", services.index],
  ...Object.entries(services.items).map(([slug, item]) => [`Serviciu: ${SERVICE_NAMES[slug] ?? slug}`, `servicii.${slug}`, item]),
  ["Servicii — texte comune", "servicii.ui", services.ui],
  ["Afecțiuni tratate", "afectiuni", await load("content/conditions/ro.ts", "CONDITIONS_RO")],
  ["Pentru copii", "copii", await load("content/children/ro.ts", "CHILDREN_RO")],
  ["Despre clinică", "despre", await load("content/pages/ro/about.ts", "about")],
  ["Servicii & Prețuri", "tarife", await load("content/pages/ro/pricing.ts", "pricing")],
  ["Echipă", "echipa", await load("content/pages/ro/team.ts", "team")],
  ["Testimoniale", "testimoniale", await load("content/testimonials/ro.ts", "TESTIMONIALS_PAGE_RO")],
  ["Contact", "contact", await load("content/pages/ro/contact.ts", "CONTACT_RO")],
  ["Cariere", "cariere", await load("content/careers/ro.ts", "CAREERS_RO")],
  ["Meniu și subsol (footer)", "dict", { nav: dict.nav, footer: dict.footer }],
];

/** Keys whose values are not reader-facing text. */
const SKIP = new Set(["eyebrow", "kicker", "slug", "href", "image", "video", "src", "id", "conditions", "icon", "services", "category", "photo", "photos", "videoTitle", "ariaLabel", "schemaType", "quiz", "placeholderLabel", "photoPlaceholder", "suffix", "phoneLabel", "playLabel"]);
const LABEL = {
  title: "Titlu",
  lead: "Subtitlu",
  subtitle: "Subtitlu",
  text: "Text",
  note: "Notă mică",
  cta: "Buton",
  label: "Etichetă / buton",
  q: "Întrebare",
  a: "Răspuns",
  name: "Nume",
  role: "Rol",
  quote: "Citat",
  description: "Descriere",
  paragraphs: "Paragraf",
  items: "Element",
  benefits: "Avantaj",
  steps: "Pas",
};

function rows(value, path, out) {
  if (typeof value === "string") {
    const s = value.trim();
    if (!s || /^(\/|https?:|#)/.test(s)) return out;
    out.push({ id: path.join("."), where: describe(path), text: s });
  } else if (Array.isArray(value)) {
    value.forEach((v, i) => rows(v, [...path, String(i + 1)], out));
  } else if (value && typeof value === "object") {
    for (const [k, v] of Object.entries(value)) if (!SKIP.has(k)) rows(v, [...path, k], out);
  }
  return out;
}

/** Plain-Romanian names for the sections (objects); leaves use LABEL. */
const SECTION = {
  hero: "Partea de sus",
  stats: "Cifre",
  services: "Servicii",
  quiz: "Test",
  final: "Final",
  cta: "Final",
  faq: "Întrebări",
  items: "Element",
  session: "Ședința",
  helps: "Cui îi e util",
  safety: "Siguranță",
  steps: "Pași",
  primary: "Buton principal",
  secondary: "Buton secundar",
  nav: "Meniu",
  footer: "Subsol",
};

function describe(path) {
  const p = path.slice(1);
  if (p[0] === "seo") return p[1] === "title" ? "Google — titlu (max 60 caractere)" : "Google — descriere (max 155 caractere)";
  return p
    .map((k, i) => (/^\d+$/.test(k) ? `#${k}` : i === p.length - 1 ? (LABEL[k] ?? k) : (SECTION[k] ?? LABEL[k] ?? k)))
    .join(" › ");
}

// ── Minimal .docx writer (WordprocessingML in a zip, no dependencies) ──────
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const run = (text, { bold, size, color, italic } = {}) =>
  `<w:r><w:rPr>${bold ? "<w:b/>" : ""}${italic ? "<w:i/>" : ""}${color ? `<w:color w:val="${color}"/>` : ""}${size ? `<w:sz w:val="${size}"/>` : ""}</w:rPr><w:t xml:space="preserve">${esc(text)}</w:t></w:r>`;
const para = (content, style) => `<w:p>${style ? `<w:pPr><w:pStyle w:val="${style}"/></w:pPr>` : ""}${content}</w:p>`;
const cell = (content, width, fill) =>
  `<w:tc><w:tcPr><w:tcW w:w="${width}" w:type="dxa"/>${fill ? `<w:shd w:val="clear" w:color="auto" w:fill="${fill}"/>` : ""}</w:tcPr>${content}</w:tc>`;
const W = [2300, 3900, 3900];
const header = `<w:tr><w:trPr><w:tblHeader/></w:trPr>${["Unde apare", "Text actual", "Text nou (gol = rămâne la fel)"].map((h, i) => cell(para(run(h, { bold: true })), W[i], "D9EEF2")).join("")}</w:tr>`;
const table = (list) =>
  `<w:tbl><w:tblPr><w:tblStyle w:val="TableGrid"/><w:tblW w:w="10100" w:type="dxa"/><w:tblLayout w:type="fixed"/></w:tblPr><w:tblGrid>${W.map((w) => `<w:gridCol w:w="${w}"/>`).join("")}</w:tblGrid>${header}${list
    .map(
      (r) =>
        `<w:tr><w:trPr><w:cantSplit/></w:trPr>${cell(para(run(r.where, { bold: true, size: 18 })) + para(run(r.id, { size: 14, color: "8A9AA3" })), W[0])}${cell(para(run(r.text, { size: 20 })) + para(run(`${r.text.length} caractere`, { size: 14, color: "8A9AA3", italic: true })), W[1])}${cell(para(""), W[2], "FBFEFF")}</w:tr>`,
    )
    .join("")}</w:tbl>`;

const intro = [
  para(run("Textele site-ului Emmanuel CliniX"), "Title"),
  para(run("Cum completezi:", { bold: true })),
  ...[
    "Scrie textul nou în coloana din dreapta. Dacă un text rămâne la fel, lasă căsuța goală.",
    "Nu modifica coloana „Unde apare” — codul gri ne spune exact unde punem textul pe site.",
    "Scurt și cu impact: titlurile ideal sub 40 de caractere, textele de sub titlu o singură frază. Numărul de caractere al textului actual e trecut sub el, ca reper.",
    "Dacă vrei să scoți complet un text de pe site, scrie în căsuță: ȘTERGE.",
    "Scrie doar în română. Varianta în engleză o traducem noi după textele tale.",
    "Textele pentru Google (titlu max 60, descriere max 155 caractere) sunt ce apare în rezultatele căutării și ce citesc asistenții AI.",
  ].map((t) => para(run(`•  ${t}`))),
  para(""),
];

let total = 0;
const body = PAGES.map(([title, id, data]) => {
  const list = rows(data, [id], []);
  total += list.length;
  return para(run(title), "Heading1") + table(list) + para("");
}).join("");

const documentXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:body>${intro.join("")}${body}<w:sectPr><w:pgSz w:w="11906" w:h="16838"/><w:pgMar w:top="900" w:right="900" w:bottom="900" w:left="900" w:header="500" w:footer="500" w:gutter="0"/></w:sectPr></w:body></w:document>`;
const stylesXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/><w:sz w:val="21"/><w:lang w:val="ro-RO"/></w:rPr></w:rPrDefault><w:pPrDefault><w:pPr><w:spacing w:after="80"/></w:pPr></w:pPrDefault></w:docDefaults><w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/></w:style><w:style w:type="paragraph" w:styleId="Title"><w:name w:val="Title"/><w:pPr><w:spacing w:after="240"/></w:pPr><w:rPr><w:b/><w:color w:val="0C2F38"/><w:sz w:val="40"/></w:rPr></w:style><w:style w:type="paragraph" w:styleId="Heading1"><w:name w:val="heading 1"/><w:pPr><w:keepNext/><w:spacing w:before="360" w:after="160"/><w:outlineLvl w:val="0"/></w:pPr><w:rPr><w:b/><w:color w:val="00788F"/><w:sz w:val="30"/></w:rPr></w:style><w:style w:type="table" w:styleId="TableGrid"><w:name w:val="Table Grid"/><w:tblPr><w:tblBorders><w:top w:val="single" w:sz="4" w:color="C9DDE2"/><w:left w:val="single" w:sz="4" w:color="C9DDE2"/><w:bottom w:val="single" w:sz="4" w:color="C9DDE2"/><w:right w:val="single" w:sz="4" w:color="C9DDE2"/><w:insideH w:val="single" w:sz="4" w:color="C9DDE2"/><w:insideV w:val="single" w:sz="4" w:color="C9DDE2"/></w:tblBorders><w:tblCellMar><w:top w:w="80" w:type="dxa"/><w:left w:w="100" w:type="dxa"/><w:bottom w:w="80" w:type="dxa"/><w:right w:w="100" w:type="dxa"/></w:tblCellMar></w:tblPr></w:style></w:styles>`;
const files = {
  "[Content_Types].xml": `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/><Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/></Types>`,
  "_rels/.rels": `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>`,
  "word/_rels/document.xml.rels": `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>`,
  "word/document.xml": documentXml,
  "word/styles.xml": stylesXml,
};

/** Store-and-deflate zip writer (enough for a .docx). */
function zip(entries) {
  const local = [];
  const central = [];
  let offset = 0;
  for (const [name, content] of Object.entries(entries)) {
    const data = Buffer.from(content, "utf8");
    const comp = deflateRawSync(data);
    const n = Buffer.from(name, "utf8");
    const crc = crc32(data);
    const h = Buffer.alloc(30);
    h.writeUInt32LE(0x04034b50, 0); h.writeUInt16LE(20, 4); h.writeUInt16LE(0x0800, 6); h.writeUInt16LE(8, 8);
    h.writeUInt32LE(0, 10); h.writeUInt32LE(crc, 14); h.writeUInt32LE(comp.length, 18); h.writeUInt32LE(data.length, 22);
    h.writeUInt16LE(n.length, 26); h.writeUInt16LE(0, 28);
    local.push(h, n, comp);
    const c = Buffer.alloc(46);
    c.writeUInt32LE(0x02014b50, 0); c.writeUInt16LE(20, 4); c.writeUInt16LE(20, 6); c.writeUInt16LE(0x0800, 8); c.writeUInt16LE(8, 10);
    c.writeUInt32LE(0, 12); c.writeUInt32LE(crc, 16); c.writeUInt32LE(comp.length, 20); c.writeUInt32LE(data.length, 24);
    c.writeUInt16LE(n.length, 28); c.writeUInt32LE(offset, 42);
    central.push(c, n);
    offset += 30 + n.length + comp.length;
  }
  const cd = Buffer.concat(central);
  const end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50, 0); end.writeUInt16LE(Object.keys(entries).length, 8); end.writeUInt16LE(Object.keys(entries).length, 10);
  end.writeUInt32LE(cd.length, 12); end.writeUInt32LE(offset, 16);
  return Buffer.concat([...local, cd, end]);
}

const out = process.argv[2] ?? "texte-site-emmanuel-clinix.docx";
writeFileSync(out, zip(files));
console.log(`${out}: ${PAGES.length} pages, ${total} texts`);
