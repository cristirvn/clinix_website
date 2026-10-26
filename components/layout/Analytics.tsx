"use client";

import Script from "next/script";
import { useConsent } from "@/lib/consent";

/** GA4 + Microsoft Clarity, only when their IDs are set AND the visitor accepted analytics cookies. */
export function Analytics() {
  const consent = useConsent();
  const ga = process.env.NEXT_PUBLIC_GA_ID;
  const ads = process.env.NEXT_PUBLIC_GADS_ID;
  const tag = ga || ads;
  const clarity = process.env.NEXT_PUBLIC_CLARITY_ID;
  if (consent !== "all") return null;
  return (
    <>
      {tag && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${tag}`} strategy="afterInteractive" />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());${ga ? `gtag('config','${ga}');` : ""}${ads ? `gtag('config','${ads}');` : ""}`}
          </Script>
        </>
      )}
      {clarity && (
        <Script id="clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${clarity}");`}
        </Script>
      )}
    </>
  );
}
