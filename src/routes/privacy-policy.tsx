import type { CSSProperties } from "react";
import { useEffect } from "react";
import { useSyncExternalStore } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/privacy-policy.css?raw";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "OneThing - Privacy Policy" },
      { name: "description", content: "What data OneThing collects, how it is used, and how your information is protected." },
      { property: "og:title", content: "OneThing - Privacy Policy" },
      { property: "og:description", content: "What data OneThing collects, how it is used, and how your information is protected." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  staticData: { importedDocument: { html: { "dir": "ltr", "lang": "en" }, body: { "data-site-import-responsive-incomplete": "class-range-budget" } } },
  component: Index,
});

function Index() {
  const importedViewportWidth = useSyncExternalStore(subscribeMobile, () => window.innerWidth, () => 1440);
  const isMobile = importedViewportWidth <= 767;
  useImportedLayout();
  return (
    <>
      <style>{capturedCSS}</style>
      <div id="main">
        <div className="framer-DrtIB framer-71N50 framer-2BTrO framer-Jf64E framer-a8wg0 framer-9H6qh framer-unEwr framer-1n95zts [min-height:100vh]" style={{ width: "auto" }} data-layout-template="true">
          <div className="framer-frk7oi [order:-1000] [right:0px] [z-index:10] [opacity:1]" style={{ transform: "none", willChange: "transform" }} data-site-import-desktop-header="">
            <ImportedDivOfferText />
            <div className="framer-grv9nz-container">
              <div className={isMobile ? "ssr-variant hidden-1n95zts hidden-206c69" : "ssr-variant"}>
                <nav style={{ "--border-bottom-width": "1px", "--border-color": "var(--oi-nav-border)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "0px", backdropFilter: "blur(5px)", background: "linear-gradient(180deg, var(--oi-nav-c1) 0%, var(--oi-nav-c2) 100%)", width: "100%", boxShadow: "0px 2px 3px 0px var(--oi-nav-shadow)", opacity: "1", willChange: "auto" } as CSSProperties} className={isMobile ? "framer-mV9bZ framer-Jf64E framer-opbmt framer-115fwyv framer-v-1lacu8" : "framer-mV9bZ framer-Jf64E framer-opbmt framer-115fwyv framer-v-1sgftv0"} data-fx-nav={isMobile ? "phone" : "desktop"} data-border="true">
                  <ImportedDivInnerStack />
                </nav>
              </div>
            </div>
          </div>
          <ImportedDivOfferNav />
          <div className="framer-Zt7Bg framer-oziYd framer-4SWp1 framer-3rCJa framer-Z3p1h framer-71N50 framer-bLUrs framer-jMX5F framer-3c1SY framer-KC0ub framer-unEwr framer-1fghwu2 [min-height:100vh]" style={{ width: "auto", display: "contents" }}>
            <div className="framer-1exujs1">
              <div className="framer-g0re41" id="title">
                <div className="framer-ojph7l max-w-[600px] [word-break:break-word]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                  <h1 className="framer-text framer-styles-preset-1r1gjyr" style={{ "--framer-text-alignment": "center" } as CSSProperties} dir="auto"><span className="will-change-transform" style={{ display: "inline-block" }}>Privacy</span> <span className="will-change-transform" style={{ display: "inline-block" }}>Policy</span></h1>
                </div>
                <div className="framer-1byu1fr max-w-[500px] [opacity:1]" style={{ transform: "none", willChange: "transform" }} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-6u41qq" style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--token-20520155-1f7c-48bb-bab4-b385c8b0875a, rgb(0, 0, 0))" } as CSSProperties} dir="auto">Our policy regarding what data we collect, how we use it and how we protect your information.</p>
                </div>
              </div>
            </div>
            <ImportedDivPolicySection />
          </div>
          <div id="overlay" />
          <div className="framer-1qo258n" />
          <div className={isMobile ? "ssr-variant hidden-1n95zts hidden-206c69" : "ssr-variant"}>
            <ImportedDivCTASection />
          </div>
          <footer className="framer-179tudc [order:1003] [z-index:2]">
            <div className="framer-n19f5h select-none [touch-action:pan-y]" style={{ display: "flex", position: "relative" }} draggable="false">
              <ul className="list-none [opacity:1] [max-height:100%] [max-width:100%]" style={{ display: "flex", position: "relative", padding: "0px", margin: "0px", justifyContent: "flex-start", flexDirection: "row", gap: "25px", alignItems: "center", width: "100%", height: "100%", transform: "translateX(-686.282px)" }}>
                <li style={{ flexGrow: "0", flexShrink: "0", position: "relative", height: "fit-content", width: "fit-content", transform: "none" }} aria-hidden="false" aria-posinset={1} aria-setsize={1}>
                  <div className="framer-kupxx2">
                    <div className={isMobile ? "ssr-variant hidden-1n95zts hidden-206c69" : "ssr-variant"}>
                      <div className="framer-29bopy-container">
                        <ImportedDivVariant1 />
                      </div>
                    </div>
                    <div className={isMobile ? "ssr-variant hidden-1n95zts hidden-206c69" : "ssr-variant"}>
                      <div className="framer-29bopy-container">
                        <ImportedDivVariant12 />
                      </div>
                    </div>
                    <div className={isMobile ? "ssr-variant hidden-1n95zts hidden-206c69" : "ssr-variant"}>
                      <div className="framer-29bopy-container">
                        <ImportedDivVariant13 />
                      </div>
                    </div>
                    <div className={isMobile ? "ssr-variant hidden-1n95zts hidden-206c69" : "ssr-variant"}>
                      <div className="framer-29bopy-container">
                        <ImportedDivVariant14 />
                      </div>
                    </div>
                    <div className={isMobile ? "ssr-variant hidden-1n95zts hidden-206c69" : "ssr-variant"}>
                      <div className="framer-29bopy-container">
                        <ImportedDivVariant15 />
                      </div>
                    </div>
                  </div>
                </li>
                <li style={{ flexGrow: "0", flexShrink: "0", position: "relative", height: "fit-content", width: "fit-content", transform: "none" }} aria-hidden="true">
                  <div className="framer-kupxx2">
                    <div className="framer-29bopy-container">
                      <ImportedDivVariant16 />
                    </div>
                    <div className="framer-29bopy-container">
                      <ImportedDivVariant17 />
                    </div>
                    <div className="framer-29bopy-container">
                      <ImportedDivVariant18 />
                    </div>
                    <div className="framer-29bopy-container">
                      <ImportedDivVariant19 />
                    </div>
                    <div className="framer-29bopy-container">
                      <ImportedDivVariant110 />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="framer-yt5zhh max-w-[1200px]">
              <div className="framer-kg9gbf">
                <div className="framer-fwqlt2">
                  <div className="framer-q453km">
                    <div className={isMobile ? "ssr-variant hidden-1n95zts hidden-206c69" : "ssr-variant"}>
                      <div className="framer-8611ol">
                        <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", inset: "0px" } as CSSProperties}>
                          <img style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center center", objectFit: "cover" } as CSSProperties} decoding="auto" width="2219" height="638" sizes="(min-width: 1200px) max(86.9514px, 118.2539px), (max-width: 679.98px) max(86.9514px, 118.2539px), (min-width: 680px) and (max-width: 1199.98px) max(86.9514px, 118.2539px)" srcSet="/site-assets/ffa5660189cfaef9.avif 512w, /site-assets/6eb85bf3f09b72fa.webp 1024w, /site-assets/81342bc92387350b.png 2048w, /site-assets/cccfbd665bf7358c.webp 2219w" src="/site-assets/cccfbd665bf7358c.webp" alt="Logo" />
                        </div>
                      </div>
                    </div>
                    <div className="framer-1uze6q7 [opacity:0.8] [word-break:break-word]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--token-20520155-1f7c-48bb-bab4-b385c8b0875a, rgb(0, 0, 0))" } as CSSProperties} dir="auto">The one ultimate supplement for peak health that replaces your entire shelf</p>
                    </div>
                  </div>
                  <div className="framer-smlne3">
                    <a className="framer-1xdu7e2 framer-iqhows [will-change:var(--framer-will-change-effect-override,transform)]" href="https://x.com/adheebhameed" rel="noopener" target="_blank">
                      <div className="framer-tolfT framer-xj4x7b aspect-square [opacity:0.5]" />
                    </a>
                    <a className="framer-nrw2p7 framer-iqhows [will-change:var(--framer-will-change-effect-override,transform)]" href="https://linkedin.com" rel="noopener" target="_blank">
                      <div className="framer-S0iEV framer-1y0kdro aspect-square [opacity:0.5]" />
                    </a>
                    <a className="framer-1vv3qbh framer-iqhows [will-change:var(--framer-will-change-effect-override,transform)]" href="https://facebook.com" rel="noopener" target="_blank">
                      <div className="framer-w72ci framer-v3e2zt aspect-square [opacity:0.5]" />
                    </a>
                  </div>
                </div>
                <div className="framer-12fmtqd">
                  <div className={isMobile ? "ssr-variant hidden-1n95zts hidden-206c69" : "ssr-variant"}>
                    <div className="framer-1acbqbl-container">
                      <a className="framer-trzQi framer-FaBO9 framer-qhMV1 framer-udbtyz framer-v-wuyut1 framer-128y9cq" style={{ "--border-bottom-width": "1px", "--border-color": "var(--token-8bbbea30-76c9-4ba6-997e-07eab0911b28, rgb(255, 255, 255))", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backdropFilter: "blur(5px)", backgroundColor: "var(--token-7dec4550-2ba6-4025-bfd1-f0cbf4c0a7c9, rgb(247, 247, 247))", width: "100%", borderRadius: "18px", opacity: "1" } as CSSProperties} data-border="true" href="/#buy-product">
                        <div className="framer-12ym6a6" style={{ backgroundColor: "var(--token-136beebb-89fe-4d20-a894-e7f11788a217, rgb(255, 255, 255))", borderRadius: "15px", opacity: "1" }}>
                          <div className="framer-k82luq" style={{ filter: "drop-shadow(rgba(0, 0, 0, 0.15) 0px 5px 3px)", opacity: "1" } as CSSProperties}>
                            <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", inset: "0px" } as CSSProperties}>
                              <img style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center center", objectFit: "cover" } as CSSProperties} decoding="auto" width="8000" height="8000" sizes="(min-width: 1200px) 50px, (max-width: 679.98px) 50px, (min-width: 680px) and (max-width: 1199.98px) 50px" srcSet="/site-assets/d3f19ecc7e04313e.avif 512w, /site-assets/119c2221c7b0d4b7.avif 1024w, /site-assets/6ce9177316b622fa.avif 2048w, /site-assets/64096d728d2ab117.avif 4096w" alt="" />
                            </div>
                          </div>
                        </div>
                        <div className="framer-o187ju" style={{ opacity: "1" }}>
                          <div className="framer-1ef9szw" style={{ opacity: "1" }}>
                            <div className="framer-iv1a0p" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none", opacity: "1" } as CSSProperties} data-framer-component-type="RichTextContainer">
                              <p className="framer-text framer-styles-preset-sqgpjx" dir="auto">OneThing Gummies</p>
                            </div>
                            <div className="framer-16l5uku" style={{ "--extracted-r6o4lv": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none", opacity: "1" } as CSSProperties} data-framer-component-type="RichTextContainer">
                              <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7)))" } as CSSProperties} dir="auto">$49.00</p>
                            </div>
                          </div>
                          <div className="framer-qqrxa4" style={{ backgroundColor: "var(--token-a5917666-de48-475a-8244-858af9f157b1, rgb(0, 0, 0))", borderRadius: "99px", opacity: "1" }}>
                            <div className="framer-pD07D framer-1v90v09" style={{ "--f5srmm": "var(--token-8bbbea30-76c9-4ba6-997e-07eab0911b28, rgb(255, 255, 255))", transform: "rotate(-90deg)", opacity: "1" } as CSSProperties} />
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="framer-1ixdx1k">
                    <div className="framer-7b1c2i" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--token-b3f9dcfd-cd1a-4c39-9e0e-26344979508f, rgba(0, 0, 0, 0.4))" } as CSSProperties} dir="auto">Trusted By</p>
                    </div>
                    <div className="framer-1svlg26 [opacity:0.8]">
                      <div className={isMobile ? "ssr-variant hidden-1n95zts hidden-206c69" : "ssr-variant"}>
                        <div className="framer-9eors1">
                          <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", inset: "0px" } as CSSProperties}>
                            <img style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center center", objectFit: "cover" } as CSSProperties} decoding="auto" width="1418" height="1418" sizes="(min-width: 1200px) 48px, (max-width: 679.98px) 48px, (min-width: 680px) and (max-width: 1199.98px) 48px" srcSet="/site-assets/47141cd533a3906c.avif 512w, /site-assets/89edc81b742739d4.webp 1024w, /site-assets/3e86127cbfae5eee.avif 1418w" src="/site-assets/3e86127cbfae5eee.avif" alt="Trust badge logo" />
                          </div>
                        </div>
                      </div>
                      <div className={isMobile ? "ssr-variant hidden-1n95zts hidden-206c69" : "ssr-variant"}>
                        <div className="framer-izbab2">
                          <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", inset: "0px" } as CSSProperties}>
                            <img style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center center", objectFit: "cover" } as CSSProperties} decoding="auto" width="1197" height="1197" sizes="(min-width: 1200px) 48px, (max-width: 679.98px) 48px, (min-width: 680px) and (max-width: 1199.98px) 48px" srcSet="/site-assets/8a6af12464dc689c.avif 512w, /site-assets/ca7eb8822381d702.png 1024w, /site-assets/2be8954f60e86e37.avif 1197w" src="/site-assets/2be8954f60e86e37.avif" alt="Trust badge logo" />
                          </div>
                        </div>
                      </div>
                      <div className={isMobile ? "ssr-variant hidden-1n95zts hidden-206c69" : "ssr-variant"}>
                        <div className="framer-1bd7h6a">
                          <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", inset: "0px" } as CSSProperties}>
                            <img style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center center", objectFit: "cover" } as CSSProperties} decoding="auto" width="1415" height="1415" sizes="(min-width: 1200px) 48px, (max-width: 679.98px) 48px, (min-width: 680px) and (max-width: 1199.98px) 48px" srcSet="/site-assets/e71056178738c14f.avif 512w, /site-assets/c6e94456e80c6085.webp 1024w, /site-assets/c3fc84c02217b695.avif 1415w" src="/site-assets/c3fc84c02217b695.avif" alt="Trust badge logo" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ImportedDivNavigationLinks />
            </div>
          </footer>
        </div>
        <div id="template-overlay" />
      </div>
      <div className="[bottom:0px] [z-index:calc(var(--infinity,2147480000))]" id="__framer-badge-container">
        <a className="framer-6jWyo framer-n0ccwk framer-bmpgw8 will-change-transform [opacity:1]" style={{ pointerEvents: "auto", transform: "none" }} href="https://www.framer.com" rel="noopener" title="Create a free website with Framer, the website builder loved by startups, designers and agencies.">
          <div className="framer-13yxzio [will-change:var(--framer-will-change-override,transform)] [box-shadow:rgba(0,_0,_0,_0.17)_0px_0.602187px_1.56569px_-1.5px,_rgba(0,_0,_0,_0.14)_0px_2.28853px_5.95019px_-3px,_rgba(0,_0,_0,_0.02)_0px_10px_26px_-4.5px] [opacity:1]" style={{ backgroundColor: "rgb(255, 255, 255)", borderRadius: "10px" }} />
          <div className="framer-19yaanm [opacity:1]" style={{ transform: "translate(-50%, -50%)" }}>
            <div className="framer-1kflzx5 [opacity:1]">
              <div className="framer-hcsc7 framer-e50co aspect-[0.6/1] [opacity:1]" style={{ "--1bd4d3i": "rgb(0, 0, 0)", "--otdjsv": "rgb(0, 0, 0)", transform: "translateX(-50%)" } as CSSProperties} />
            </div>
            <p style={{ position: "absolute", transform: "scale(0.001)" }}>Create a free website with Framer, the website builder loved by startups, designers and agencies.</p>
            <div className="framer-g7oZR framer-1um7t9d aspect-[9.7/1] [opacity:1]" style={{ "--1bd4d3i": "rgb(0, 0, 0)", "--otdjsv": "rgb(0, 0, 0)" } as CSSProperties} />
          </div>
          <div className="framer-j4ugry [mask:linear-gradient(rgba(0,_0,_0,_0)_65%,_rgb(0,_0,_0)_100%)] [box-shadow:rgb(0,_0,_0)_0px_0px_0px_1px_inset] [opacity:0.06]" style={{ borderRadius: "11px" }} />
          <div className="framer-jnuwbw [box-shadow:rgb(0,_0,_0)_0px_0px_0px_1px_inset] [opacity:0.04]" style={{ borderRadius: "11px" }} />
        </a>
      </div>
      <div className="[bottom:0px] [z-index:0] [contain:strict]" style={{ position: "absolute", overflow: "hidden", left: "0px", width: "0px", height: "0px" }} id="svg-templates" aria-hidden="true" />
    </>
  );
}

function ImportedDivOfferText() {
  return (
    <div className="framer-1kzqzec">
      <div className="framer-4dylj7" style={{ display: "flex", position: "relative" }}>
        <ul className="list-none [opacity:1] [max-height:100%] [max-width:100%] will-change-transform" style={{ display: "flex", position: "relative", padding: "0px", margin: "0px", justifyContent: "flex-start", flexDirection: "row", gap: "40px", alignItems: "center", width: "100%", height: "100%", transform: "translateX(-632.958px)" }}>
          <li style={{ flexGrow: "0", flexShrink: "0", position: "relative", height: "fit-content", width: "fit-content", transform: "none" }} aria-hidden="false" aria-posinset={1} aria-setsize={1}>
            <div className="framer-s43p7b">
              <div className="framer-1slrys0-container">
                <div className="framer-H2ji0 framer-2BTrO framer-Jf64E framer-bg7kye [opacity:1]">
                  <div className="framer-17xcqax select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">60-Day Money Back Guarantee</p>
                  </div>
                  <div className="framer-1lccm5p select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">•</p>
                  </div>
                </div>
              </div>
              <div className="framer-1slrys0-container">
                <div className="framer-H2ji0 framer-2BTrO framer-Jf64E framer-bg7kye [opacity:1]">
                  <div className="framer-17xcqax select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">Free International Shipping</p>
                  </div>
                  <div className="framer-1lccm5p select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">•</p>
                  </div>
                </div>
              </div>
              <div className="framer-1slrys0-container">
                <div className="framer-H2ji0 framer-2BTrO framer-Jf64E framer-bg7kye [opacity:1]">
                  <div className="framer-17xcqax select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">Save 10% With Code: OneThing</p>
                  </div>
                  <div className="framer-1lccm5p select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">•</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li style={{ flexGrow: "0", flexShrink: "0", position: "relative", height: "fit-content", width: "fit-content", transform: "none" }} aria-hidden="true">
            <div className="framer-s43p7b">
              <div className="framer-1slrys0-container">
                <div className="framer-H2ji0 framer-2BTrO framer-Jf64E framer-bg7kye [opacity:1]">
                  <div className="framer-17xcqax select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">60-Day Money Back Guarantee</p>
                  </div>
                  <div className="framer-1lccm5p select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">•</p>
                  </div>
                </div>
              </div>
              <div className="framer-1slrys0-container">
                <div className="framer-H2ji0 framer-2BTrO framer-Jf64E framer-bg7kye [opacity:1]">
                  <div className="framer-17xcqax select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">Free International Shipping</p>
                  </div>
                  <div className="framer-1lccm5p select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">•</p>
                  </div>
                </div>
              </div>
              <div className="framer-1slrys0-container">
                <div className="framer-H2ji0 framer-2BTrO framer-Jf64E framer-bg7kye [opacity:1]">
                  <div className="framer-17xcqax select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">Save 10% With Code: OneThing</p>
                  </div>
                  <div className="framer-1lccm5p select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">•</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li style={{ flexGrow: "0", flexShrink: "0", position: "relative", height: "fit-content", width: "fit-content", transform: "none" }} aria-hidden="true">
            <div className="framer-s43p7b">
              <div className="framer-1slrys0-container">
                <div className="framer-H2ji0 framer-2BTrO framer-Jf64E framer-bg7kye [opacity:1]">
                  <div className="framer-17xcqax select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">60-Day Money Back Guarantee</p>
                  </div>
                  <div className="framer-1lccm5p select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">•</p>
                  </div>
                </div>
              </div>
              <div className="framer-1slrys0-container">
                <div className="framer-H2ji0 framer-2BTrO framer-Jf64E framer-bg7kye [opacity:1]">
                  <div className="framer-17xcqax select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">Free International Shipping</p>
                  </div>
                  <div className="framer-1lccm5p select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">•</p>
                  </div>
                </div>
              </div>
              <div className="framer-1slrys0-container">
                <div className="framer-H2ji0 framer-2BTrO framer-Jf64E framer-bg7kye [opacity:1]">
                  <div className="framer-17xcqax select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">Save 10% With Code: OneThing</p>
                  </div>
                  <div className="framer-1lccm5p select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">•</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

function ImportedDivInnerStack() {
  return (
    <div className="framer-1uparzb" style={{ opacity: "1" }}>
      <div className="framer-5m92od" style={{ opacity: "1" }}>
        <div className="framer-10nqhn5" style={{ opacity: "1" }}>
          <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", inset: "0px" } as CSSProperties}>
            <img style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center center", objectFit: "cover" } as CSSProperties} decoding="auto" width="2219" height="638" sizes="(min-width: 1200px) max(86.9514px, 118.2539px), (max-width: 679.98px) max(86.9514px, 118.2539px), (min-width: 680px) and (max-width: 1199.98px) max(86.9514px, 118.2539px)" srcSet="/site-assets/ffa5660189cfaef9.avif 512w, /site-assets/6eb85bf3f09b72fa.webp 1024w, /site-assets/81342bc92387350b.png 2048w, /site-assets/cccfbd665bf7358c.webp 2219w" src="/site-assets/cccfbd665bf7358c.webp" alt="" />
          </div>
        </div>
        <div className="framer-hr1tzd" style={{ opacity: "1" }}>
          <div className="framer-1von1hs" style={{ transform: "none", opacity: "1" }} data-framer-component-type="RichTextContainer">
            <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-alignment": "left" } as CSSProperties} dir="auto">
              <a className="framer-text framer-styles-preset-1j73cr7" href="/#benefits">Benefits</a>
            </p>
          </div>
          <div className="framer-ctjm30" style={{ transform: "none", opacity: "1" }} data-framer-component-type="RichTextContainer">
            <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-alignment": "left" } as CSSProperties} dir="auto">
              <a className="framer-text framer-styles-preset-1j73cr7" href="/#effects-timeline">Effects Timeline</a>
            </p>
          </div>
          <div className="framer-1w09rdh" style={{ transform: "none", opacity: "1" }} data-framer-component-type="RichTextContainer">
            <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-alignment": "left" } as CSSProperties} dir="auto">
              <a className="framer-text framer-styles-preset-1j73cr7" href="/#ingredients">Ingredients</a>
            </p>
          </div>
          <div className="framer-1epjaa8" style={{ transform: "none", opacity: "1" }} data-framer-component-type="RichTextContainer">
            <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-alignment": "left" } as CSSProperties} dir="auto">
              <a className="framer-text framer-styles-preset-1j73cr7" href="/#faq">FAQ</a>
            </p>
          </div>
        </div>
      </div>
      <div className="framer-ujfetw-container" style={{ opacity: "1" }}>
        <a className="framer-6dH45 framer-FaBO9 framer-Jf64E framer-7z2klu framer-v-1a2u647 framer-wcun84" style={{ backdropFilter: "none", backgroundColor: "var(--token-a5917666-de48-475a-8244-858af9f157b1, rgb(0, 0, 0))", borderRadius: "99px", opacity: "1" } as CSSProperties} href="/">
          <div className="framer-x7c3yg" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", transform: "none", opacity: "1" } as CSSProperties} data-framer-component-type="RichTextContainer">
            <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">Buy Now</p>
          </div>
        </a>
      </div>
    </div>
  );
}

function ImportedDivOfferNav() {
  return (
    <div className="framer-frk7oi [order:-1000] [right:0px] [z-index:10] [opacity:1]" style={{ transform: "none", willChange: "transform", "--site-import-header-display": "flex" } as CSSProperties} data-site-import-mobile-header="">
      <div className="framer-1kzqzec">
        <div className="framer-4dylj7" style={{ display: "flex", position: "relative" }}>
          <ul className="list-none [opacity:1] [max-height:100%] [max-width:100%] will-change-transform" style={{ display: "flex", position: "relative", padding: "0px", margin: "0px", justifyContent: "flex-start", flexDirection: "row", gap: "40px", alignItems: "center", width: "100%", height: "100%", transform: "translateX(-370.227px)" }}>
            <li style={{ flexGrow: "0", flexShrink: "0", position: "relative", height: "fit-content", width: "fit-content", transform: "none" }} aria-hidden="false" aria-posinset={1} aria-setsize={1}>
              <div className="framer-s43p7b">
                <div className="framer-1slrys0-container">
                  <div className="framer-H2ji0 framer-2BTrO framer-Jf64E framer-bg7kye [opacity:1]">
                    <div className="framer-17xcqax select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">60-Day Money Back Guarantee</p>
                    </div>
                    <div className="framer-1lccm5p select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">•</p>
                    </div>
                  </div>
                </div>
                <div className="framer-1slrys0-container">
                  <div className="framer-H2ji0 framer-2BTrO framer-Jf64E framer-bg7kye [opacity:1]">
                    <div className="framer-17xcqax select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">Free International Shipping</p>
                    </div>
                    <div className="framer-1lccm5p select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">•</p>
                    </div>
                  </div>
                </div>
                <div className="framer-1slrys0-container">
                  <div className="framer-H2ji0 framer-2BTrO framer-Jf64E framer-bg7kye [opacity:1]">
                    <div className="framer-17xcqax select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">Save 10% With Code: OneThing</p>
                    </div>
                    <div className="framer-1lccm5p select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">•</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li style={{ flexGrow: "0", flexShrink: "0", position: "relative", height: "fit-content", width: "fit-content", transform: "none" }} aria-hidden="true">
              <div className="framer-s43p7b">
                <div className="framer-1slrys0-container">
                  <div className="framer-H2ji0 framer-2BTrO framer-Jf64E framer-bg7kye [opacity:1]">
                    <div className="framer-17xcqax select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">60-Day Money Back Guarantee</p>
                    </div>
                    <div className="framer-1lccm5p select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">•</p>
                    </div>
                  </div>
                </div>
                <div className="framer-1slrys0-container">
                  <div className="framer-H2ji0 framer-2BTrO framer-Jf64E framer-bg7kye [opacity:1]">
                    <div className="framer-17xcqax select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">Free International Shipping</p>
                    </div>
                    <div className="framer-1lccm5p select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">•</p>
                    </div>
                  </div>
                </div>
                <div className="framer-1slrys0-container">
                  <div className="framer-H2ji0 framer-2BTrO framer-Jf64E framer-bg7kye [opacity:1]">
                    <div className="framer-17xcqax select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">Save 10% With Code: OneThing</p>
                    </div>
                    <div className="framer-1lccm5p select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">•</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="framer-grv9nz-container">
        <div className="ssr-variant">
          <nav data-fx-nav="phone" className="framer-mV9bZ framer-Jf64E framer-opbmt framer-115fwyv framer-v-1lacu8" style={{ "--border-bottom-width": "1px", "--border-color": "var(--oi-nav-border)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "0px", backdropFilter: "blur(5px)", background: "linear-gradient(180deg, var(--oi-nav-c1) 0%, var(--oi-nav-c2) 100%)", width: "100%", boxShadow: "0px 2px 3px 0px var(--oi-nav-shadow)", opacity: "1", willChange: "auto" } as CSSProperties} data-border="true">
            <div className="framer-1uparzb" style={{ opacity: "1" }}>
              <div className="framer-5m92od" style={{ opacity: "1" }}>
                <div className="framer-10nqhn5" style={{ opacity: "1" }}>
                  <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", inset: "0px" } as CSSProperties}>
                    <img style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center center", objectFit: "cover" } as CSSProperties} decoding="auto" width="2219" height="638" sizes="(min-width: 1200px) max(86.9514px, 118.2539px), (max-width: 679.98px) max(86.9514px, 118.2539px), (min-width: 680px) and (max-width: 1199.98px) max(86.9514px, 118.2539px)" srcSet="/site-assets/ffa5660189cfaef9.avif 512w, /site-assets/6eb85bf3f09b72fa.webp 1024w, /site-assets/81342bc92387350b.png 2048w, /site-assets/cccfbd665bf7358c.webp 2219w" src="/site-assets/cccfbd665bf7358c.webp" alt="" />
                  </div>
                </div>
              </div>
              <div className="framer-ujfetw-container" style={{ opacity: "1" }}>
                <a className="framer-6dH45 framer-FaBO9 framer-Jf64E framer-7z2klu framer-v-1a2u647 framer-wcun84" style={{ backdropFilter: "none", backgroundColor: "var(--token-a5917666-de48-475a-8244-858af9f157b1, rgb(0, 0, 0))", borderRadius: "99px", opacity: "1" } as CSSProperties} href="/">
                  <div className="framer-x7c3yg" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", transform: "none", opacity: "1" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">Buy Now</p>
                  </div>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

function ImportedDivPolicySection() {
  return (
    <div className="framer-1bt2n0f">
      <div className="framer-1pm1p85 max-w-[700px] [word-break:break-word] [opacity:1]" style={{ transform: "none", willChange: "transform" }} data-framer-component-type="RichTextContainer">
        <h2 className="framer-text framer-styles-preset-1lbzffu" dir="auto">1. Introduction</h2>
        <p className="framer-text framer-styles-preset-e0g0fh" dir="auto">OneThing ("we," "our," or "us") respects your privacy and is committed to protecting your personal data.</p>
        <p className="framer-text framer-styles-preset-e0g0fh" dir="auto">This Privacy Policy explains how we collect, use, store, and share information when you visit our website, make a purchase, or interact with our services.</p>
        <p className="framer-text framer-styles-preset-e0g0fh" dir="auto">By using our website, you agree to the practices described in this policy.</p>
        <h2 className="framer-text framer-styles-preset-1lbzffu" dir="auto">2. Information We Collect</h2>
        <p className="framer-text framer-styles-preset-e0g0fh" dir="auto">We collect information necessary to process orders, improve our services, and communicate with you.</p>
        <p className="framer-text framer-styles-preset-e0g0fh" dir="auto">This includes:</p>
        <ul className="framer-text" dir="auto">
          <li className="framer-text framer-styles-preset-e0g0fh">
            <p className="framer-text framer-styles-preset-e0g0fh">Name and email address</p>
          </li>
          <li className="framer-text framer-styles-preset-e0g0fh">
            <p className="framer-text framer-styles-preset-e0g0fh">Shipping and billing address</p>
          </li>
          <li className="framer-text framer-styles-preset-e0g0fh">
            <p className="framer-text framer-styles-preset-e0g0fh">Payment information (processed securely via third-party providers)</p>
          </li>
          <li className="framer-text framer-styles-preset-e0g0fh">
            <p className="framer-text framer-styles-preset-e0g0fh">Order history and product preferences</p>
          </li>
          <li className="framer-text framer-styles-preset-e0g0fh">
            <p className="framer-text framer-styles-preset-e0g0fh">Website usage data (pages visited, time on site, device type)</p>
          </li>
          <li className="framer-text framer-styles-preset-e0g0fh">
            <p className="framer-text framer-styles-preset-e0g0fh">Communication records (emails, support messages)</p>
          </li>
        </ul>
        <h2 className="framer-text framer-styles-preset-1lbzffu" dir="auto">3. How We Use Your Information</h2>
        <p className="framer-text framer-styles-preset-e0g0fh" dir="auto">We use your information to:</p>
        <ul className="framer-text" dir="auto">
          <li className="framer-text framer-styles-preset-e0g0fh">
            <p className="framer-text framer-styles-preset-e0g0fh">Process and fulfil orders</p>
          </li>
          <li className="framer-text framer-styles-preset-e0g0fh">
            <p className="framer-text framer-styles-preset-e0g0fh">Manage subscriptions and billing</p>
          </li>
          <li className="framer-text framer-styles-preset-e0g0fh">
            <p className="framer-text framer-styles-preset-e0g0fh">Send order confirmations and shipping updates</p>
          </li>
          <li className="framer-text framer-styles-preset-e0g0fh">
            <p className="framer-text framer-styles-preset-e0g0fh">Provide customer support</p>
          </li>
          <li className="framer-text framer-styles-preset-e0g0fh">
            <p className="framer-text framer-styles-preset-e0g0fh">Improve our website, products, and services</p>
          </li>
          <li className="framer-text framer-styles-preset-e0g0fh">
            <p className="framer-text framer-styles-preset-e0g0fh">Send promotional emails (only with your consent)</p>
          </li>
          <li className="framer-text framer-styles-preset-e0g0fh">
            <p className="framer-text framer-styles-preset-e0g0fh">Prevent fraud and protect against misuse</p>
          </li>
        </ul>
        <p className="framer-text framer-styles-preset-e0g0fh" dir="auto">We will never sell your personal data to third parties.</p>
        <h2 className="framer-text framer-styles-preset-1lbzffu" dir="auto">4. Cookies &amp; Tracking</h2>
        <p className="framer-text framer-styles-preset-e0g0fh" dir="auto">Our website uses cookies and similar technologies to:</p>
        <ul className="framer-text" dir="auto">
          <li className="framer-text framer-styles-preset-e0g0fh">
            <p className="framer-text framer-styles-preset-e0g0fh">Remember your preferences</p>
          </li>
          <li className="framer-text framer-styles-preset-e0g0fh">
            <p className="framer-text framer-styles-preset-e0g0fh">Analyse website traffic and behaviour</p>
          </li>
          <li className="framer-text framer-styles-preset-e0g0fh">
            <p className="framer-text framer-styles-preset-e0g0fh">Improve your browsing experience</p>
          </li>
          <li className="framer-text framer-styles-preset-e0g0fh">
            <p className="framer-text framer-styles-preset-e0g0fh">Support marketing and retargeting efforts</p>
          </li>
        </ul>
        <p className="framer-text framer-styles-preset-e0g0fh" dir="auto">You can manage cookie preferences through your browser settings at any time.</p>
        <h2 className="framer-text framer-styles-preset-1lbzffu" dir="auto">5. Third-Party Services</h2>
        <p className="framer-text framer-styles-preset-e0g0fh" dir="auto">We work with trusted third-party providers to operate our business.</p>
        <p className="framer-text framer-styles-preset-e0g0fh" dir="auto">These may include:</p>
        <ul className="framer-text" dir="auto">
          <li className="framer-text framer-styles-preset-e0g0fh">
            <p className="framer-text framer-styles-preset-e0g0fh">Payment processors (Stripe, PayPal)</p>
          </li>
          <li className="framer-text framer-styles-preset-e0g0fh">
            <p className="framer-text framer-styles-preset-e0g0fh">Shipping and fulfilment partners</p>
          </li>
          <li className="framer-text framer-styles-preset-e0g0fh">
            <p className="framer-text framer-styles-preset-e0g0fh">Email marketing platforms</p>
          </li>
          <li className="framer-text framer-styles-preset-e0g0fh">
            <p className="framer-text framer-styles-preset-e0g0fh">Website analytics tools</p>
          </li>
        </ul>
        <p className="framer-text framer-styles-preset-e0g0fh" dir="auto">These providers only access the data necessary to perform their services and are bound by their own privacy obligations.</p>
        <p className="framer-text framer-styles-preset-e0g0fh" dir="auto">We do not share your data with any third parties for their own marketing purposes.</p>
        <h2 className="framer-text framer-styles-preset-1lbzffu" dir="auto">6. Data Storage &amp; Security</h2>
        <p className="framer-text framer-styles-preset-e0g0fh" dir="auto">Your data is stored securely using industry-standard encryption and security protocols.</p>
        <p className="framer-text framer-styles-preset-e0g0fh" dir="auto">We retain personal data only for as long as necessary to:</p>
        <ul className="framer-text" dir="auto">
          <li className="framer-text framer-styles-preset-e0g0fh">
            <p className="framer-text framer-styles-preset-e0g0fh">Fulfil orders and subscriptions</p>
          </li>
          <li className="framer-text framer-styles-preset-e0g0fh">
            <p className="framer-text framer-styles-preset-e0g0fh">Comply with legal obligations</p>
          </li>
          <li className="framer-text framer-styles-preset-e0g0fh">
            <p className="framer-text framer-styles-preset-e0g0fh">Resolve disputes</p>
          </li>
          <li className="framer-text framer-styles-preset-e0g0fh">
            <p className="framer-text framer-styles-preset-e0g0fh">Enforce our agreements</p>
          </li>
        </ul>
        <p className="framer-text framer-styles-preset-e0g0fh" dir="auto">While we take every reasonable precaution, no method of electronic transmission or storage is 100% secure.</p>
        <h2 className="framer-text framer-styles-preset-1lbzffu" dir="auto">7. Your Rights</h2>
        <p className="framer-text framer-styles-preset-e0g0fh" dir="auto">You have the right to:</p>
        <ul className="framer-text" dir="auto">
          <li className="framer-text framer-styles-preset-e0g0fh">
            <p className="framer-text framer-styles-preset-e0g0fh">Access the personal data we hold about you</p>
          </li>
          <li className="framer-text framer-styles-preset-e0g0fh">
            <p className="framer-text framer-styles-preset-e0g0fh">Request correction of inaccurate data</p>
          </li>
          <li className="framer-text framer-styles-preset-e0g0fh">
            <p className="framer-text framer-styles-preset-e0g0fh">Request deletion of your data</p>
          </li>
          <li className="framer-text framer-styles-preset-e0g0fh">
            <p className="framer-text framer-styles-preset-e0g0fh">Withdraw consent for marketing communications</p>
          </li>
          <li className="framer-text framer-styles-preset-e0g0fh">
            <p className="framer-text framer-styles-preset-e0g0fh">Request a copy of your data in a portable format</p>
          </li>
        </ul>
        <p className="framer-text framer-styles-preset-e0g0fh" dir="auto">To exercise any of these rights, email us at support@onething.com.</p>
        <p className="framer-text framer-styles-preset-e0g0fh" dir="auto">We will respond within 30 days.</p>
        <h2 className="framer-text framer-styles-preset-1lbzffu" dir="auto">8. Marketing Communications</h2>
        <p className="framer-text framer-styles-preset-e0g0fh" dir="auto">We only send promotional emails with your explicit consent.</p>
        <p className="framer-text framer-styles-preset-e0g0fh" dir="auto">Every marketing email includes an unsubscribe link.</p>
        <p className="framer-text framer-styles-preset-e0g0fh" dir="auto">You can opt out at any time — it will not affect your orders or account.</p>
        <h2 className="framer-text framer-styles-preset-1lbzffu" dir="auto">9. Children's Privacy</h2>
        <p className="framer-text framer-styles-preset-e0g0fh" dir="auto">Our products and services are not intended for individuals under 18 years of age.</p>
        <p className="framer-text framer-styles-preset-e0g0fh" dir="auto">We do not knowingly collect data from minors.</p>
        <p className="framer-text framer-styles-preset-e0g0fh" dir="auto">If we become aware that we have collected information from someone under 18, we will delete it promptly.</p>
        <h2 className="framer-text framer-styles-preset-1lbzffu" dir="auto">10. Changes to This Policy</h2>
        <p className="framer-text framer-styles-preset-e0g0fh" dir="auto">We may update this Privacy Policy from time to time.</p>
        <p className="framer-text framer-styles-preset-e0g0fh" dir="auto">Changes become effective immediately upon posting to this page.</p>
        <p className="framer-text framer-styles-preset-e0g0fh" dir="auto">We encourage you to review this page periodically.</p>
        <h2 className="framer-text framer-styles-preset-1lbzffu" dir="auto">11. Contact Us</h2>
        <p className="framer-text framer-styles-preset-e0g0fh" dir="auto">For privacy-related questions or requests, contact:</p>
        <p className="framer-text framer-styles-preset-e0g0fh" dir="auto">Email: support@onething.com</p>
        <p className="framer-text framer-styles-preset-e0g0fh" dir="auto">Address: [Insert Business Address]</p>
      </div>
    </div>
  );
}

function ImportedDivCTASection() {
  return (
    <div className="framer-vwvzt">
      <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", inset: "0px" } as CSSProperties}>
        <img style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center center", objectFit: "cover" } as CSSProperties} decoding="auto" width="1919" height="820" sizes="(min-width: 1200px) 100vw, (max-width: 679.98px) 100vw, (min-width: 680px) and (max-width: 1199.98px) 100vw" srcSet="/site-assets/d6c1f16f6dc49a8a.avif 512w, /site-assets/1103cb5ad36a5edb.avif 1024w, /site-assets/b70609d493987f70.avif 1919w" src="/site-assets/b70609d493987f70.avif" alt="Woman holding a supplement gummy" />
      </div>
      <div className="framer-5k7g2i" />
      <div className="framer-jdbpv2">
        <div className="framer-12lagj9" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
          <h3 className="framer-text framer-styles-preset-crg4y9" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))" } as CSSProperties} dir="auto">Stop taking handfuls of pills, and start taking OneThing</h3>
        </div>
        <div className="framer-1grnsct">
          <div className="framer-mdv6xc-container">
            <a className="framer-6dH45 framer-FaBO9 framer-Jf64E framer-7z2klu framer-wcun84" style={{ width: "100%", backdropFilter: "none", backgroundColor: "var(--token-136beebb-89fe-4d20-a894-e7f11788a217, rgb(255, 255, 255))", borderRadius: "99px", opacity: "1" } as CSSProperties} href="/">
              <div className="framer-x7c3yg" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none", opacity: "1" } as CSSProperties} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-sqgpjx" dir="auto">Get Supplement</p>
              </div>
            </a>
          </div>
          <div className="framer-1acd4v7-container">
            <a className="framer-6dH45 framer-FaBO9 framer-Jf64E framer-7z2klu framer-wcun84" style={{ width: "100%", backdropFilter: "blur(10px)", backgroundColor: "rgba(255, 255, 255, 0.1)", borderRadius: "99px", opacity: "1" } as CSSProperties} href="/#ingredients">
              <div className="framer-x7c3yg" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--extracted-r6o4lv": "var(--token-136beebb-89fe-4d20-a894-e7f11788a217, rgb(255, 255, 255))", transform: "none", opacity: "1" } as CSSProperties} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-sqgpjx" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-136beebb-89fe-4d20-a894-e7f11788a217, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">See Ingredients</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function ImportedDivVariant1() {
  return (
    <div className="framer-1CnZg framer-FaBO9 framer-18h6f4o" style={{ height: "100%", width: "100%", borderRadius: "15px", opacity: "1" }}>
      <div className="framer-txsj" style={{ opacity: "1" }}>
        <div className="framer-eyabtc" style={{ opacity: "1" }}>
          <div className="framer-bmirh framer-olf8v4" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))", opacity: "1" } as CSSProperties} />
          <div className="framer-bmirh framer-5k3i5h" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))", opacity: "1" } as CSSProperties} />
          <div className="framer-bmirh framer-10wtumk" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))", opacity: "1" } as CSSProperties} />
          <div className="framer-bmirh framer-1d3qqzf" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))", opacity: "1" } as CSSProperties} />
          <div className="framer-bmirh framer-1xapgv8" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))", opacity: "1" } as CSSProperties} />
        </div>
        <div className="framer-z3kc18" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none", opacity: "1" } as CSSProperties} data-framer-component-type="RichTextContainer">
          <p className="framer-text framer-styles-preset-sqgpjx" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">“Week 3 and my sleep feels noticeably deeper.”</p>
        </div>
      </div>
      <div className="framer-12d475x" style={{ opacity: "1" }}>
        <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", inset: "0px" } as CSSProperties}>
          <img style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center center", objectFit: "cover" } as CSSProperties} decoding="auto" width="4096" height="4096" sizes="320px" srcSet="/site-assets/fa50155be2979378.avif 512w, /site-assets/3e5070104e849c20.avif 1024w, /site-assets/8145e55cc494ed77.webp 2048w, /site-assets/2b19a1113aafaaf0.webp 4096w" src="/site-assets/2b19a1113aafaaf0.webp" alt="Person holding supplement sachet next to his face" />
        </div>
        <div className="framer-1ve6qdb" style={{ background: "linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.6) 100%)", opacity: "1" }} />
      </div>
    </div>
  );
}

function ImportedDivVariant12() {
  return (
    <div className="framer-1CnZg framer-FaBO9 framer-18h6f4o" style={{ height: "100%", width: "100%", borderRadius: "15px", opacity: "1" }}>
      <div className="framer-txsj" style={{ opacity: "1" }}>
        <div className="framer-eyabtc" style={{ opacity: "1" }}>
          <div className="framer-bmirh framer-olf8v4" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))", opacity: "1" } as CSSProperties} />
          <div className="framer-bmirh framer-5k3i5h" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))", opacity: "1" } as CSSProperties} />
          <div className="framer-bmirh framer-10wtumk" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))", opacity: "1" } as CSSProperties} />
          <div className="framer-bmirh framer-1d3qqzf" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))", opacity: "1" } as CSSProperties} />
          <div className="framer-bmirh framer-1xapgv8" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))", opacity: "1" } as CSSProperties} />
        </div>
        <div className="framer-z3kc18" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none", opacity: "1" } as CSSProperties} data-framer-component-type="RichTextContainer">
          <p className="framer-text framer-styles-preset-sqgpjx" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">“Honestly the first supplement I’ve stayed consistent with.”</p>
        </div>
      </div>
      <div className="framer-12d475x" style={{ opacity: "1" }}>
        <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", inset: "0px" } as CSSProperties}>
          <img style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center center", objectFit: "cover" } as CSSProperties} decoding="auto" width="4096" height="4096" sizes="320px" srcSet="/site-assets/501de64378573e08.avif 512w, /site-assets/e29350b3e9407764.avif 1024w, /site-assets/57968ab5b121e9e0.webp 2048w, /site-assets/582baf5e6a8281ba.webp 4096w" src="/site-assets/582baf5e6a8281ba.webp" alt="Woman taking selfie with the supplement product" />
        </div>
        <div className="framer-1ve6qdb" style={{ background: "linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.6) 100%)", opacity: "1" }} />
      </div>
    </div>
  );
}

function ImportedDivVariant13() {
  return (
    <div className="framer-1CnZg framer-FaBO9 framer-18h6f4o" style={{ height: "100%", width: "100%", borderRadius: "15px", opacity: "1" }}>
      <div className="framer-txsj" style={{ opacity: "1" }}>
        <div className="framer-eyabtc" style={{ opacity: "1" }}>
          <div className="framer-bmirh framer-olf8v4" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))", opacity: "1" } as CSSProperties} />
          <div className="framer-bmirh framer-5k3i5h" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))", opacity: "1" } as CSSProperties} />
          <div className="framer-bmirh framer-10wtumk" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))", opacity: "1" } as CSSProperties} />
          <div className="framer-bmirh framer-1d3qqzf" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))", opacity: "1" } as CSSProperties} />
          <div className="framer-bmirh framer-1xapgv8" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))", opacity: "1" } as CSSProperties} />
        </div>
        <div className="framer-z3kc18" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none", opacity: "1" } as CSSProperties} data-framer-component-type="RichTextContainer">
          <p className="framer-text framer-styles-preset-sqgpjx" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">“I stopped taking 4 different supplements after this.”</p>
        </div>
      </div>
      <div className="framer-12d475x" style={{ opacity: "1" }}>
        <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", inset: "0px" } as CSSProperties}>
          <img style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center center", objectFit: "cover" } as CSSProperties} decoding="auto" width="4096" height="4096" sizes="320px" srcSet="/site-assets/d3637162259014b5.avif 512w, /site-assets/82d9ece8208cb9d4.avif 1024w, /site-assets/2943b5155f2682b1.webp 2048w, /site-assets/2943b5155f2682b1.webp 4096w" src="/site-assets/2943b5155f2682b1.webp" alt="man holding a supplement box" />
        </div>
        <div className="framer-1ve6qdb" style={{ background: "linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.6) 100%)", opacity: "1" }} />
      </div>
    </div>
  );
}

function ImportedDivVariant14() {
  return (
    <div className="framer-1CnZg framer-FaBO9 framer-18h6f4o" style={{ height: "100%", width: "100%", borderRadius: "15px", opacity: "1" }}>
      <div className="framer-txsj" style={{ opacity: "1" }}>
        <div className="framer-eyabtc" style={{ opacity: "1" }}>
          <div className="framer-bmirh framer-olf8v4" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))", opacity: "1" } as CSSProperties} />
          <div className="framer-bmirh framer-5k3i5h" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))", opacity: "1" } as CSSProperties} />
          <div className="framer-bmirh framer-10wtumk" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))", opacity: "1" } as CSSProperties} />
          <div className="framer-bmirh framer-1d3qqzf" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))", opacity: "1" } as CSSProperties} />
          <div className="framer-bmirh framer-1xapgv8" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))", opacity: "1" } as CSSProperties} />
        </div>
        <div className="framer-z3kc18" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none", opacity: "1" } as CSSProperties} data-framer-component-type="RichTextContainer">
          <p className="framer-text framer-styles-preset-sqgpjx" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">"Better focus. Better mornings. Less pills."</p>
        </div>
      </div>
      <div className="framer-12d475x" style={{ opacity: "1" }}>
        <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", inset: "0px" } as CSSProperties}>
          <img style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center center", objectFit: "cover" } as CSSProperties} decoding="auto" width="4096" height="4096" sizes="320px" srcSet="/site-assets/0874c04a32171426.avif 512w, /site-assets/eb6f1a7e8200d749.avif 1024w, /site-assets/7561227e5a4ee60e.webp 2048w, /site-assets/7561227e5a4ee60e.webp 4096w" src="/site-assets/7561227e5a4ee60e.webp" alt="woman drinking coffee while having hands placed on the supplement box" />
        </div>
        <div className="framer-1ve6qdb" style={{ background: "linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.6) 100%)", opacity: "1" }} />
      </div>
    </div>
  );
}

function ImportedDivVariant15() {
  return (
    <div className="framer-1CnZg framer-FaBO9 framer-18h6f4o" style={{ height: "100%", width: "100%", borderRadius: "15px", opacity: "1" }}>
      <div className="framer-txsj" style={{ opacity: "1" }}>
        <div className="framer-eyabtc" style={{ opacity: "1" }}>
          <div className="framer-bmirh framer-olf8v4" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))", opacity: "1" } as CSSProperties} />
          <div className="framer-bmirh framer-5k3i5h" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))", opacity: "1" } as CSSProperties} />
          <div className="framer-bmirh framer-10wtumk" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))", opacity: "1" } as CSSProperties} />
          <div className="framer-bmirh framer-1d3qqzf" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))", opacity: "1" } as CSSProperties} />
          <div className="framer-bmirh framer-1xapgv8" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))", opacity: "1" } as CSSProperties} />
        </div>
        <div className="framer-z3kc18" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none", opacity: "1" } as CSSProperties} data-framer-component-type="RichTextContainer">
          <p className="framer-text framer-styles-preset-sqgpjx" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">"Didn’t expect one gummy to actually replace everything"</p>
        </div>
      </div>
      <div className="framer-12d475x" style={{ opacity: "1" }}>
        <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", inset: "0px" } as CSSProperties}>
          <img style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center center", objectFit: "cover" } as CSSProperties} decoding="auto" width="4096" height="4096" sizes="320px" srcSet="/site-assets/ccd619873287b069.avif 512w, /site-assets/05dfdabf78d2465a.avif 1024w, /site-assets/5ebff1135eeb93cf.webp 2048w, /site-assets/68a47e4b75683182.webp 4096w" src="/site-assets/68a47e4b75683182.webp" alt="Supplement product on the biscep of a person" />
        </div>
        <div className="framer-1ve6qdb" style={{ background: "linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.6) 100%)", opacity: "1" }} />
      </div>
    </div>
  );
}

function ImportedDivVariant16() {
  return (
    <div className="framer-1CnZg framer-FaBO9 framer-18h6f4o [opacity:1]" style={{ height: "100%", width: "100%", borderRadius: "15px" }}>
      <div className="framer-txsj [opacity:1]">
        <div className="framer-eyabtc [opacity:1]">
          <div className="framer-bmirh framer-olf8v4 [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
          <div className="framer-bmirh framer-5k3i5h [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
          <div className="framer-bmirh framer-10wtumk [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
          <div className="framer-bmirh framer-1d3qqzf [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
          <div className="framer-bmirh framer-1xapgv8 [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
        </div>
        <div className="framer-z3kc18 [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
          <p className="framer-text framer-styles-preset-sqgpjx" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">“Week 3 and my sleep feels noticeably deeper.”</p>
        </div>
      </div>
      <div className="framer-12d475x [opacity:1]">
        <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", inset: "0px" } as CSSProperties}>
          <img className="[object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit" } as CSSProperties} decoding="auto" width="4096" height="4096" sizes="320px" srcSet="/site-assets/fa50155be2979378.avif 512w, /site-assets/3e5070104e849c20.avif 1024w, /site-assets/8145e55cc494ed77.webp 2048w, /site-assets/2b19a1113aafaaf0.webp 4096w" src="/site-assets/2b19a1113aafaaf0.webp" alt="Person holding supplement sachet next to his face" />
        </div>
        <div className="framer-1ve6qdb [opacity:1]" style={{ background: "linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.6) 100%)" }} />
      </div>
    </div>
  );
}

function ImportedDivVariant17() {
  return (
    <div className="framer-1CnZg framer-FaBO9 framer-18h6f4o [opacity:1]" style={{ height: "100%", width: "100%", borderRadius: "15px" }}>
      <div className="framer-txsj [opacity:1]">
        <div className="framer-eyabtc [opacity:1]">
          <div className="framer-bmirh framer-olf8v4 [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
          <div className="framer-bmirh framer-5k3i5h [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
          <div className="framer-bmirh framer-10wtumk [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
          <div className="framer-bmirh framer-1d3qqzf [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
          <div className="framer-bmirh framer-1xapgv8 [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
        </div>
        <div className="framer-z3kc18 [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
          <p className="framer-text framer-styles-preset-sqgpjx" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">“Honestly the first supplement I’ve stayed consistent with.”</p>
        </div>
      </div>
      <div className="framer-12d475x [opacity:1]">
        <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", inset: "0px" } as CSSProperties}>
          <img className="[object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit" } as CSSProperties} decoding="auto" width="4096" height="4096" sizes="320px" srcSet="/site-assets/501de64378573e08.avif 512w, /site-assets/e29350b3e9407764.avif 1024w, /site-assets/57968ab5b121e9e0.webp 2048w, /site-assets/582baf5e6a8281ba.webp 4096w" src="/site-assets/582baf5e6a8281ba.webp" alt="Woman taking selfie with the supplement product" />
        </div>
        <div className="framer-1ve6qdb [opacity:1]" style={{ background: "linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.6) 100%)" }} />
      </div>
    </div>
  );
}

function ImportedDivVariant18() {
  return (
    <div className="framer-1CnZg framer-FaBO9 framer-18h6f4o [opacity:1]" style={{ height: "100%", width: "100%", borderRadius: "15px" }}>
      <div className="framer-txsj [opacity:1]">
        <div className="framer-eyabtc [opacity:1]">
          <div className="framer-bmirh framer-olf8v4 [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
          <div className="framer-bmirh framer-5k3i5h [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
          <div className="framer-bmirh framer-10wtumk [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
          <div className="framer-bmirh framer-1d3qqzf [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
          <div className="framer-bmirh framer-1xapgv8 [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
        </div>
        <div className="framer-z3kc18 [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
          <p className="framer-text framer-styles-preset-sqgpjx" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">“I stopped taking 4 different supplements after this.”</p>
        </div>
      </div>
      <div className="framer-12d475x [opacity:1]">
        <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", inset: "0px" } as CSSProperties}>
          <img className="[object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit" } as CSSProperties} decoding="auto" width="4096" height="4096" sizes="320px" srcSet="/site-assets/d3637162259014b5.avif 512w, /site-assets/82d9ece8208cb9d4.avif 1024w, /site-assets/2943b5155f2682b1.webp 2048w, /site-assets/2943b5155f2682b1.webp 4096w" src="/site-assets/2943b5155f2682b1.webp" alt="man holding a supplement box" />
        </div>
        <div className="framer-1ve6qdb [opacity:1]" style={{ background: "linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.6) 100%)" }} />
      </div>
    </div>
  );
}

function ImportedDivVariant19() {
  return (
    <div className="framer-1CnZg framer-FaBO9 framer-18h6f4o [opacity:1]" style={{ height: "100%", width: "100%", borderRadius: "15px" }}>
      <div className="framer-txsj [opacity:1]">
        <div className="framer-eyabtc [opacity:1]">
          <div className="framer-bmirh framer-olf8v4 [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
          <div className="framer-bmirh framer-5k3i5h [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
          <div className="framer-bmirh framer-10wtumk [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
          <div className="framer-bmirh framer-1d3qqzf [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
          <div className="framer-bmirh framer-1xapgv8 [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
        </div>
        <div className="framer-z3kc18 [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
          <p className="framer-text framer-styles-preset-sqgpjx" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">"Better focus. Better mornings. Less pills."</p>
        </div>
      </div>
      <div className="framer-12d475x [opacity:1]">
        <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", inset: "0px" } as CSSProperties}>
          <img className="[object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit" } as CSSProperties} decoding="auto" width="4096" height="4096" sizes="320px" srcSet="/site-assets/0874c04a32171426.avif 512w, /site-assets/eb6f1a7e8200d749.avif 1024w, /site-assets/7561227e5a4ee60e.webp 2048w, /site-assets/7561227e5a4ee60e.webp 4096w" src="/site-assets/7561227e5a4ee60e.webp" alt="woman drinking coffee while having hands placed on the supplement box" />
        </div>
        <div className="framer-1ve6qdb [opacity:1]" style={{ background: "linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.6) 100%)" }} />
      </div>
    </div>
  );
}

function ImportedDivVariant110() {
  return (
    <div className="framer-1CnZg framer-FaBO9 framer-18h6f4o [opacity:1]" style={{ height: "100%", width: "100%", borderRadius: "15px" }}>
      <div className="framer-txsj [opacity:1]">
        <div className="framer-eyabtc [opacity:1]">
          <div className="framer-bmirh framer-olf8v4 [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
          <div className="framer-bmirh framer-5k3i5h [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
          <div className="framer-bmirh framer-10wtumk [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
          <div className="framer-bmirh framer-1d3qqzf [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
          <div className="framer-bmirh framer-1xapgv8 [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
        </div>
        <div className="framer-z3kc18 [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
          <p className="framer-text framer-styles-preset-sqgpjx" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">"Didn’t expect one gummy to actually replace everything"</p>
        </div>
      </div>
      <div className="framer-12d475x [opacity:1]">
        <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", inset: "0px" } as CSSProperties}>
          <img className="[object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit" } as CSSProperties} decoding="auto" width="4096" height="4096" sizes="320px" srcSet="/site-assets/ccd619873287b069.avif 512w, /site-assets/05dfdabf78d2465a.avif 1024w, /site-assets/5ebff1135eeb93cf.webp 2048w, /site-assets/68a47e4b75683182.webp 4096w" src="/site-assets/68a47e4b75683182.webp" alt="Supplement product on the biscep of a person" />
        </div>
        <div className="framer-1ve6qdb [opacity:1]" style={{ background: "linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.6) 100%)" }} />
      </div>
    </div>
  );
}

function ImportedDivNavigationLinks() {
  return (
    <div className="framer-l9baby">
      <div className="framer-1d2j0te [@media(max-width:679.98px)]:[order:4] [@media(min-width:680px)_and_(max-width:1199.98px)]:[order:4]">
        <div className="framer-1ksjomn max-w-[335px] [word-break:break-word]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
          <p className="framer-text framer-styles-preset-83kqm0" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--token-b3f9dcfd-cd1a-4c39-9e0e-26344979508f, rgba(0, 0, 0, 0.4))" } as CSSProperties} dir="auto">These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.</p>
        </div>
        <div className="framer-l9wm4o">
          <div className="framer-1tyokc9 [word-break:break-word]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
            <p className="framer-text framer-styles-preset-83kqm0" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--token-b3f9dcfd-cd1a-4c39-9e0e-26344979508f, rgba(0, 0, 0, 0.4))" } as CSSProperties} dir="auto">© Copyright 2026 OneThing. All rights reserved.</p>
          </div>
          <div className="ssr-variant">
            <div className="framer-15tmtrs [word-break:break-word]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
              <p className="framer-text framer-styles-preset-83kqm0" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--token-b3f9dcfd-cd1a-4c39-9e0e-26344979508f, rgba(0, 0, 0, 0.4))" } as CSSProperties} dir="auto">
                <a className="framer-text framer-styles-preset-1asoou7" href="https://x.com/adheebhameed" rel="noopener" target="_blank">Created by Adheeb</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="framer-18aj7pv [@media(max-width:679.98px)]:[order:0] [@media(max-width:679.98px)]:[place-self:start] [@media(min-width:680px)_and_(max-width:1199.98px)]:[order:0] [@media(min-width:680px)_and_(max-width:1199.98px)]:[place-self:start]">
        <div className="framer-5gv7m4" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
          <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--token-b3f9dcfd-cd1a-4c39-9e0e-26344979508f, rgba(0, 0, 0, 0.4))" } as CSSProperties} dir="auto">Sections</p>
        </div>
        <div className="framer-oh1tn3">
          <div className="framer-i7gmn" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
            <p className="framer-text framer-styles-preset-wqeyn7" dir="auto">
              <a className="framer-text framer-styles-preset-dnlggy" href="/#introduction">Introduction</a>
            </p>
          </div>
          <div className="framer-1cs00lr" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
            <p className="framer-text framer-styles-preset-wqeyn7" dir="auto">
              <a className="framer-text framer-styles-preset-dnlggy" href="/#featured">Featured In</a>
            </p>
          </div>
          <div className="framer-10ozyaa" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
            <p className="framer-text framer-styles-preset-wqeyn7" dir="auto">
              <a className="framer-text framer-styles-preset-dnlggy" href="/#benefits">Benefits</a>
            </p>
          </div>
          <div className="framer-1tu9dvr" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
            <p className="framer-text framer-styles-preset-wqeyn7" dir="auto">
              <a className="framer-text framer-styles-preset-dnlggy" href="/#faq">FAQ</a>
            </p>
          </div>
        </div>
      </div>
      <div className="framer-4433bo [@media(max-width:679.98px)]:[order:1] [@media(max-width:679.98px)]:[place-self:start] [@media(min-width:680px)_and_(max-width:1199.98px)]:[order:1] [@media(min-width:680px)_and_(max-width:1199.98px)]:[place-self:start]">
        <div className="framer-zocu8k" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
          <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--token-b3f9dcfd-cd1a-4c39-9e0e-26344979508f, rgba(0, 0, 0, 0.4))" } as CSSProperties} dir="auto">Product</p>
        </div>
        <div className="framer-1a74c07">
          <div className="framer-1qj9r8m" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
            <p className="framer-text framer-styles-preset-wqeyn7" dir="auto">
              <a className="framer-text framer-styles-preset-dnlggy" href="/#ingredients">Ingredients</a>
            </p>
          </div>
          <div className="framer-1dkmecj" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
            <p className="framer-text framer-styles-preset-wqeyn7" dir="auto">
              <a className="framer-text framer-styles-preset-dnlggy" href="/#effects-timeline">Effect Timeline</a>
            </p>
          </div>
          <div className="framer-1ipzvxm" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
            <p className="framer-text framer-styles-preset-wqeyn7" dir="auto">
              <a className="framer-text framer-styles-preset-dnlggy" href="/#features">Features</a>
            </p>
          </div>
          <div className="framer-1b1tv4o" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
            <p className="framer-text framer-styles-preset-wqeyn7" dir="auto">
              <a className="framer-text framer-styles-preset-dnlggy" href="/#buy-product">Buy Product</a>
            </p>
          </div>
        </div>
      </div>
      <div className="framer-1gxmoxq [@media(max-width:679.98px)]:[order:2] [@media(max-width:679.98px)]:[place-self:start] [@media(min-width:680px)_and_(max-width:1199.98px)]:[order:2] [@media(min-width:680px)_and_(max-width:1199.98px)]:[place-self:start]">
        <div className="framer-1vira13" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
          <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--token-b3f9dcfd-cd1a-4c39-9e0e-26344979508f, rgba(0, 0, 0, 0.4))" } as CSSProperties} dir="auto">Pages</p>
        </div>
        <div className="framer-ev3u25">
          <div className="framer-sl71az" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
            <p className="framer-text framer-styles-preset-wqeyn7" dir="auto">
              <a className="framer-text framer-styles-preset-dnlggy" href="/">Homepage</a>
            </p>
          </div>
          <div className="framer-186vsw6" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
            <p className="framer-text framer-styles-preset-wqeyn7" dir="auto">
              <a className="framer-text framer-styles-preset-dnlggy" href="/refund-policy">Policy Page</a>
            </p>
          </div>
          <div className="framer-116dz7s" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
            <p className="framer-text framer-styles-preset-wqeyn7" dir="auto">
              <a className="framer-text framer-styles-preset-dnlggy" href="/404">404 Page</a>
            </p>
          </div>
        </div>
      </div>
      <div className="framer-7c7igx [@media(max-width:679.98px)]:[order:3] [@media(max-width:679.98px)]:[place-self:start] [@media(min-width:680px)_and_(max-width:1199.98px)]:[order:3] [@media(min-width:680px)_and_(max-width:1199.98px)]:[place-self:start]">
        <div className="framer-186fpju" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
          <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--token-b3f9dcfd-cd1a-4c39-9e0e-26344979508f, rgba(0, 0, 0, 0.4))" } as CSSProperties} dir="auto">Policies</p>
        </div>
        <div className="framer-16puvvh">
          <div className="framer-154pv5" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
            <p className="framer-text framer-styles-preset-wqeyn7" dir="auto">
              <a className="framer-text framer-styles-preset-dnlggy" data-framer-page-link-current="true" href="#">Privacy Policy</a>
            </p>
          </div>
          <div className="framer-11mvpet" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
            <p className="framer-text framer-styles-preset-wqeyn7" dir="auto">
              <a className="framer-text framer-styles-preset-dnlggy" href="/refund-policy">Refund Policy</a>
            </p>
          </div>
          <div className="framer-1m9e0gw" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
            <p className="framer-text framer-styles-preset-wqeyn7" dir="auto">
              <a className="framer-text framer-styles-preset-dnlggy" href="/terms-conditions">Terms &amp; Conditions</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


function useImportedLayout() {
  useEffect(() => {
    const scrollingAreas = Array.from(document.querySelectorAll<HTMLElement>("[data-site-import-scroll-root]"));
    const scrollTop = () =>
      scrollingAreas.find(
        (node) =>
          node.clientHeight > 0 &&
          node.scrollHeight > node.clientHeight &&
          /^(auto|scroll)$/.test(getComputedStyle(node).overflowY),
      )?.scrollTop ?? window.scrollY;
    const scrollHeaders = Array.from(document.querySelectorAll<HTMLElement>("[data-site-import-scroll-header]"))
      .slice(0, 128)
      .flatMap((node) => {
        try {
          const states = JSON.parse(node.dataset["siteImportScrollHeader"] || "{}");
          if (!states || typeof states !== "object") return [];
          for (const key of ["desktop", "mobile"]) {
            const state = states[key];
            if (
              !state ||
              !Array.isArray(state.added) ||
              !Array.isArray(state.removed) ||
              state.added.length + state.removed.length > 32
            )
              delete states[key];
          }
          return [
            {
              node,
              states,
              original: new Set(node.classList),
              originalFill: node.getAttribute("fill"),
              transform: node.style.getPropertyValue("transform"),
              priority: node.style.getPropertyPriority("transform"),
            },
          ];
        } catch {
          return [];
        }
      });
    function syncScrollHeaders(reset = false) {
      for (const { node, states, original, originalFill, transform, priority } of scrollHeaders) {
        if (!reset && node.getAttribute("data-import-menu-open") === "true") continue;
        const state = states[innerWidth < 768 ? "mobile" : "desktop"];
        if ([states.desktop, states.mobile].some((entry) => entry && Object.hasOwn(entry, "fill"))) {
          if (originalFill === null) node.removeAttribute("fill");
          else node.setAttribute("fill", originalFill);
        }
        if (states.desktop?.transform || states.mobile?.transform) {
          if (transform) node.style.setProperty("transform", transform, priority);
          else node.style.removeProperty("transform");
        }
        for (const value of [states.desktop, states.mobile].filter(Boolean) as {
          added: string[];
          removed: string[];
        }[]) {
          for (const token of [...(value.added || []), ...(value.removed || [])]) {
            if (typeof token !== "string" || !token || /\s/.test(token)) continue;
            node.classList.toggle(token, original.has(token));
          }
        }
        if (reset || !state || !Number.isFinite(state.threshold) || scrollTop() < state.threshold) continue;
        let until = state.until;
        if (
          typeof state.untilAnchor === "string" &&
          /^\d$/.test(state.untilAnchor) &&
          Number.isFinite(state.untilProgress) &&
          Math.abs(state.untilProgress) <= 2
        ) {
          const anchor = document.querySelector<HTMLElement>(
            '[data-site-import-header-end="' + state.untilAnchor + '"]',
          );
          if (anchor) until = anchor.getBoundingClientRect().top + scrollTop() + innerHeight * state.untilProgress;
        }
        if (Number.isFinite(until) && scrollTop() >= until) continue;
        if (state.fill === null) node.removeAttribute("fill");
        else if (typeof state.fill === "string" && state.fill.length <= 256 && !/url\(/i.test(state.fill))
          node.setAttribute("fill", state.fill);
        if (
          typeof state.transform === "string" &&
          state.transform.length <= 128 &&
          CSS.supports("transform", state.transform)
        )
          node.style.setProperty("transform", state.transform, "important");
        for (const token of state.added || [])
          if (typeof token === "string" && token && !/\s/.test(token)) node.classList.add(token);
        for (const token of state.removed || [])
          if (typeof token === "string" && token && !/\s/.test(token)) node.classList.remove(token);
      }
    }
    const handleScroll = () => {
      syncScrollHeaders();
    };
    function resizeSummaries() {
      syncScrollHeaders();
    }
    document.addEventListener("load", handleScroll, true);
    resizeSummaries();
    const parallaxFrame = requestAnimationFrame(handleScroll);
    window.addEventListener("resize", resizeSummaries);
    document.addEventListener("scroll", handleScroll, { passive: true, capture: true });
    return () => {
      cancelAnimationFrame(parallaxFrame);
      syncScrollHeaders(true);
      document.removeEventListener("load", handleScroll, true);
      window.removeEventListener("resize", resizeSummaries);
      document.removeEventListener("scroll", handleScroll, true);
    };
  }, []);
}

function subscribeMobile(onChange: () => void) {
  window.addEventListener("resize", onChange);
  return () => window.removeEventListener("resize", onChange);
}
