import Script from "next/script";
import { CLARITY_PROJECT_ID } from "@/lib/site";

/**
 * Microsoft Clarity session analytics. Loaded once in the root layout
 * (afterInteractive — same strategy as GA).
 * Project is scoped to socwiki.app.
 */
export function MicrosoftClarity() {
  const id = CLARITY_PROJECT_ID?.trim();
  if (!id) return null;

  return (
    <Script id="microsoft-clarity" strategy="afterInteractive">
      {`
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${id}");
      `}
    </Script>
  );
}
