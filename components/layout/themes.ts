/** The five design directions (values live in app/globals.css). */
export const THEMES = [
  { id: "ivory", name: "Ink & Ivory", swatch: ["#14243d", "#9a7642", "#faf7f2"] },
  { id: "mono", name: "Mono (Hormozi)", swatch: ["#0b0b0c", "#0d5b6b", "#ffffff"] },
  { id: "petrol", name: "Petrol & Copper", swatch: ["#0e3b43", "#a85a2c", "#f6f3ee"] },
  { id: "forest", name: "Forest & Brass", swatch: ["#1e3d33", "#8f6f35", "#f7f5ee"] },
  { id: "midnight", name: "Midnight", swatch: ["#0e1218", "#d9bc82", "#19202a"] },
] as const;

export const THEME_STORAGE_KEY = "ecx-theme";

/** Inline script (runs before paint) — applies ?theme= / saved / default theme. */
export function themeBootScript(defaultTheme: string) {
  const ids = JSON.stringify(THEMES.map((t) => t.id));
  return `(function(){try{var ids=${ids};var q=new URLSearchParams(location.search).get("theme");var s=null;try{s=localStorage.getItem("${THEME_STORAGE_KEY}")}catch(e){}var t=ids.indexOf(q)>-1?q:(${process.env.NEXT_PUBLIC_DESIGN_PREVIEW !== "0"}&&ids.indexOf(s)>-1?s:"${defaultTheme}");if(q&&ids.indexOf(q)>-1){try{localStorage.setItem("${THEME_STORAGE_KEY}",q)}catch(e){}}document.documentElement.dataset.theme=t}catch(e){}})();`;
}
