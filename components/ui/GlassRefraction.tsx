"use client";

import { useEffect, useId, useRef, useState } from "react";

/**
 * Real refraction for a liquid-glass button: the backdrop bends at the rim,
 * with a faint chromatic split, like Apple's iOS 26 glass.
 *
 * Ported (trimmed to the SVG path) from React Bits "Glass Surface" by David
 * Haz — https://reactbits.dev/components/glass-surface (MIT). A displacement
 * map is drawn for the button's exact size (red = x, blue = y, neutral grey
 * centre), and three feDisplacementMap passes (R/G/B at slightly different
 * strengths) run as a `backdrop-filter: url(#…)`.
 *
 * Only Chromium supports SVG filters in backdrop-filter. Elsewhere (Safari,
 * Firefox), with reduced transparency, Save-Data or few CPU cores this
 * renders nothing and the button keeps its frosted `.lg` glass. Place it as
 * the FIRST child of an element with the `.lg` class; it marks the parent
 * with `data-refract` so the parent hands its fill and blur to this layer.
 */
export function GlassRefraction({
  strength = -64,
  chroma = 7,
  edge = 0.16,
  softness = 7,
}: {
  /** Displacement scale; negative pulls the backdrop inward like a lens. */
  strength?: number;
  /** Extra displacement per colour channel (chromatic aberration). */
  chroma?: number;
  /** Width of the bending rim, as a share of the shorter side. */
  edge?: number;
  /** Blur of the map's neutral centre — the softness of the rim. */
  softness?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const mapRef = useRef<SVGFEImageElement>(null);
  const filterId = `lgr-${useId().replace(/[^a-zA-Z0-9]/g, "")}`;
  const [on, setOn] = useState(false);

  useEffect(() => {
    const layer = ref.current;
    const host = layer?.parentElement;
    if (!layer || !host || !supportsSvgBackdrop(filterId)) return;

    const draw = () => {
      const { width, height } = host.getBoundingClientRect();
      if (!width || !height) return;
      mapRef.current?.setAttribute("href", displacementMap(width, height, edge, softness, filterId));
    };
    draw();
    const ro = new ResizeObserver(draw);
    ro.observe(host);
    host.setAttribute("data-refract", "");
    // Feature detection needs the browser, so the effect turns itself on after mount.
    setOn(true);
    return () => {
      ro.disconnect();
      host.removeAttribute("data-refract");
    };
  }, [filterId, edge, softness]);

  return (
    <span
      ref={ref}
      aria-hidden="true"
      className="lg-refract"
      style={on ? { backdropFilter: `url(#${filterId}) blur(1.5px) saturate(1.7)` } : undefined}
    >
      {on && (
        <svg width="0" height="0" className="absolute" focusable="false">
          <defs>
            <filter id={filterId} colorInterpolationFilters="sRGB" x="0%" y="0%" width="100%" height="100%">
              <feImage ref={mapRef} x="0" y="0" width="100%" height="100%" preserveAspectRatio="none" result="map" />
              {(["R", "G", "B"] as const).map((ch, i) => (
                <g key={ch}>
                  <feDisplacementMap
                    in="SourceGraphic"
                    in2="map"
                    scale={strength + i * chroma * Math.sign(strength || -1)}
                    xChannelSelector="R"
                    yChannelSelector="B"
                    result={`d${ch}`}
                  />
                  <feColorMatrix
                    in={`d${ch}`}
                    type="matrix"
                    values={CHANNEL[ch]}
                    result={`c${ch}`}
                  />
                </g>
              ))}
              <feBlend in="cR" in2="cG" mode="screen" result="rg" />
              <feBlend in="rg" in2="cB" mode="screen" />
            </filter>
          </defs>
        </svg>
      )}
    </span>
  );
}

const CHANNEL = {
  R: "1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0",
  G: "0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0",
  B: "0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0",
};

function supportsSvgBackdrop(id: string) {
  if (typeof window === "undefined") return false;
  const ua = navigator.userAgent;
  const webkit = /Safari/.test(ua) && !/Chrome|Chromium|Edg/.test(ua);
  if (webkit || /Firefox|FxiOS/.test(ua) || /CriOS/.test(ua)) return false;
  if (window.matchMedia("(prefers-reduced-transparency: reduce)").matches) return false;
  const nav = navigator as Navigator & { connection?: { saveData?: boolean } };
  if (nav.connection?.saveData) return false;
  if ((navigator.hardwareConcurrency ?? 8) < 4) return false;
  const probe = document.createElement("div");
  probe.style.backdropFilter = `url(#${id})`;
  return probe.style.backdropFilter !== "";
}

/**
 * Map for a w×h pill: red ramps right→left, blue top→bottom (blended with
 * "difference"), then a blurred neutral grey (no shift) fills the centre, so
 * only the rim displaces.
 */
function displacementMap(w: number, h: number, edge: number, softness: number, id: string) {
  const r = h / 2;
  const inset = Math.min(w, h) * edge;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><defs><linearGradient id="${id}r" x1="100%" y1="0%" x2="0%" y2="0%"><stop offset="0%" stop-color="#0000"/><stop offset="100%" stop-color="red"/></linearGradient><linearGradient id="${id}b" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#0000"/><stop offset="100%" stop-color="blue"/></linearGradient><filter id="${id}s" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="${softness}"/></filter></defs><rect width="${w}" height="${h}" fill="black"/><rect width="${w}" height="${h}" rx="${r}" fill="url(#${id}r)"/><rect width="${w}" height="${h}" rx="${r}" fill="url(#${id}b)" style="mix-blend-mode:difference"/><rect x="${inset}" y="${inset}" width="${w - inset * 2}" height="${h - inset * 2}" rx="${Math.max(0, r - inset)}" fill="hsl(0 0% 50% / 0.94)" filter="url(#${id}s)"/></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}
