import type { CSSProperties } from "react";
import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/refund-policy.css?raw";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: "OneThing - Refund Policy" },
      { name: "description", content: "How OneThing handles returns, refunds, subscription cancellations and damaged orders." },
      { property: "og:title", content: "OneThing - Refund Policy" },
      { property: "og:description", content: "How OneThing handles returns, refunds, subscription cancellations and damaged orders." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  staticData: { importedDocument: { html: { "dir": "ltr", "lang": "en" }, body: { "data-site-import-responsive-incomplete": "class-range-budget" } } },
  component: Index,
});

function Index() {
  useImportedLayout();
  return (
    <>
      <style>{capturedCSS}</style>
      <div id="main">
        <div className="framer-DrtIB framer-71N50 framer-2BTrO framer-Jf64E framer-a8wg0 framer-9H6qh framer-unEwr framer-1n95zts items-center flex-col flex-nowrap content-center justify-start [overflow:var(--overflow-clip-fallback,clip)] [min-height:100vh]" style={{ width: "auto" }} data-layout-template="true">
          <ImportedDivOfferNav />
          <ImportedDivOfferNav2 />
          <div className="framer-Zt7Bg framer-oziYd framer-4SWp1 framer-3rCJa framer-Z3p1h framer-71N50 framer-bLUrs framer-jMX5F framer-3c1SY framer-KC0ub framer-unEwr framer-1fghwu2 items-center flex-col flex-nowrap content-center justify-start [overflow:var(--overflow-clip-fallback,clip)] [min-height:100vh]" style={{ width: "auto", display: "contents" }}>
            <div className="framer-1exujs1 items-center place-content-center [overflow:var(--overflow-clip-fallback,clip)]">
              <div className="framer-g0re41 items-center place-content-center [overflow:visible]" id="title">
                <div className="framer-ojph7l max-w-[600px] wrap-break-word [word-break:break-word]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                  <h1 className="framer-text framer-styles-preset-1r1gjyr" style={{ "--framer-text-alignment": "center" } as CSSProperties} dir="auto"><span className="will-change-transform" style={{ display: "inline-block" }}>Refund</span> <span className="will-change-transform" style={{ display: "inline-block" }}>Policy</span></h1>
                </div>
                <div className="framer-1byu1fr max-w-[500px] [opacity:1]" style={{ transform: "none", willChange: "transform" }} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-6u41qq" style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--token-20520155-1f7c-48bb-bab4-b385c8b0875a, rgb(0, 0, 0))" } as CSSProperties} dir="auto">Our policy regarding returns, refunds, subscriptions and damaged orders.</p>
                </div>
              </div>
            </div>
            <ImportedDivPolicySection />
          </div>
          <div id="overlay" />
          <div className="framer-1qo258n grow" />
          <div className="ssr-variant">
            <ImportedDivCTASection />
          </div>
          <ImportedFooterFooterSection />
        </div>
        <div id="template-overlay" />
      </div>
      <div className="justify-end [bottom:0px] [z-index:calc(var(--infinity,2147480000))]" id="__framer-badge-container">
        <a className="framer-6jWyo framer-n0ccwk framer-bmpgw8 [overflow:visible] will-change-transform [opacity:1]" style={{ pointerEvents: "auto", transform: "none" }} href="https://www.framer.com" rel="noopener" title="Create a free website with Framer, the website builder loved by startups, designers and agencies.">
          <div className="framer-13yxzio flex-none [inset:1px] [overflow:hidden] [will-change:var(--framer-will-change-override,transform)] [border-radius:10px] [box-shadow:rgba(0,_0,_0,_0.17)_0px_0.602187px_1.56569px_-1.5px,_rgba(0,_0,_0,_0.14)_0px_2.28853px_5.95019px_-3px,_rgba(0,_0,_0,_0.02)_0px_10px_26px_-4.5px] [opacity:1]" style={{ backgroundColor: "rgb(255, 255, 255)" }} />
          <div className="framer-19yaanm items-center flex-none flex-row flex-nowrap content-center justify-start [left:50%] [overflow:visible] [top:50%] [opacity:1]" style={{ transform: "translate(-50%, -50%)" }}>
            <div className="framer-1kflzx5 flex-none [overflow:visible] [opacity:1]">
              <div className="framer-hcsc7 framer-e50co aspect-[0.6/1] flex-none top-[-2px] [left:50%] [opacity:1]" style={{ "--1bd4d3i": "rgb(0, 0, 0)", "--otdjsv": "rgb(0, 0, 0)", transform: "translateX(-50%)" } as CSSProperties} />
            </div>
            <p style={{ position: "absolute", transform: "scale(0.001)" }}>Create a free website with Framer, the website builder loved by startups, designers and agencies.</p>
            <div className="framer-g7oZR framer-1um7t9d aspect-[9.7/1] flex-none [opacity:1]" style={{ "--1bd4d3i": "rgb(0, 0, 0)", "--otdjsv": "rgb(0, 0, 0)" } as CSSProperties} />
          </div>
          <div className="framer-j4ugry flex-none [inset:0px] [overflow:visible] [mask:linear-gradient(rgba(0,_0,_0,_0)_65%,_rgb(0,_0,_0)_100%)] [border-radius:11px] [box-shadow:rgb(0,_0,_0)_0px_0px_0px_1px_inset] [opacity:0.06]" />
          <div className="framer-jnuwbw flex-none [inset:0px] [overflow:visible] [border-radius:11px] [box-shadow:rgb(0,_0,_0)_0px_0px_0px_1px_inset] [opacity:0.04]" />
        </a>
      </div>
      <div className="[overflow:hidden] [bottom:0px] [left:0px] [z-index:0] [contain:strict]" style={{ position: "absolute", width: "0px", height: "0px" }} id="svg-templates" aria-hidden="true" />
    </>
  );
}

function ImportedDivOfferNav() {
  return (
    <div className="framer-frk7oi items-center flex-none flex-col flex-nowrap place-content-center [left:0px] [order:-1000] [overflow:visible] [right:0px] [top:0px] [z-index:10] [opacity:1]" style={{ transform: "none", willChange: "transform" }} data-site-import-desktop-header="">
      <div className="framer-1kzqzec items-center place-content-center [overflow:var(--overflow-clip-fallback,clip)]">
        <div className="framer-4dylj7 items-center content-center justify-start [overflow:visible]" style={{ display: "flex", position: "relative" }}>
          <ul className="list-none justify-start flex-row [opacity:1] items-center [max-height:100%] [max-width:100%] will-change-transform" style={{ display: "flex", position: "relative", padding: "0px", margin: "0px", gap: "40px", width: "100%", height: "100%", transform: "translateX(-18.1183px)" }}>
            <li className="[flex-grow:0] [flex-shrink:0]" style={{ position: "relative", height: "fit-content", width: "fit-content", transform: "translateX(2352px)" }} aria-hidden="false" aria-posinset={1} aria-setsize={1} data-site-import-responsive="8">
              <div className="framer-s43p7b items-start flex-none flex-row flex-nowrap content-start justify-center">
                <div className="framer-1slrys0-container flex-none">
                  <div className="framer-H2ji0 framer-2BTrO framer-Jf64E framer-bg7kye items-center flex-row flex-nowrap place-content-center [overflow:visible] [opacity:1]">
                    <div className="framer-17xcqax select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">60-Day Money Back Guarantee</p>
                    </div>
                    <div className="framer-1lccm5p select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">•</p>
                    </div>
                  </div>
                </div>
                <div className="framer-1slrys0-container flex-none">
                  <div className="framer-H2ji0 framer-2BTrO framer-Jf64E framer-bg7kye items-center flex-row flex-nowrap place-content-center [overflow:visible] [opacity:1]">
                    <div className="framer-17xcqax select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">Free International Shipping</p>
                    </div>
                    <div className="framer-1lccm5p select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">•</p>
                    </div>
                  </div>
                </div>
                <div className="framer-1slrys0-container flex-none">
                  <div className="framer-H2ji0 framer-2BTrO framer-Jf64E framer-bg7kye items-center flex-row flex-nowrap place-content-center [overflow:visible] [opacity:1]">
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
            <li className="[flex-grow:0] [flex-shrink:0]" style={{ position: "relative", height: "fit-content", width: "fit-content", transform: "none" }} aria-hidden="true">
              <div className="framer-s43p7b items-start flex-none flex-row flex-nowrap content-start justify-center">
                <div className="framer-1slrys0-container flex-none">
                  <div className="framer-H2ji0 framer-2BTrO framer-Jf64E framer-bg7kye items-center flex-row flex-nowrap place-content-center [overflow:visible] [opacity:1]">
                    <div className="framer-17xcqax select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">60-Day Money Back Guarantee</p>
                    </div>
                    <div className="framer-1lccm5p select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">•</p>
                    </div>
                  </div>
                </div>
                <div className="framer-1slrys0-container flex-none">
                  <div className="framer-H2ji0 framer-2BTrO framer-Jf64E framer-bg7kye items-center flex-row flex-nowrap place-content-center [overflow:visible] [opacity:1]">
                    <div className="framer-17xcqax select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">Free International Shipping</p>
                    </div>
                    <div className="framer-1lccm5p select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">•</p>
                    </div>
                  </div>
                </div>
                <div className="framer-1slrys0-container flex-none">
                  <div className="framer-H2ji0 framer-2BTrO framer-Jf64E framer-bg7kye items-center flex-row flex-nowrap place-content-center [overflow:visible] [opacity:1]">
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
            <li className="[flex-grow:0] [flex-shrink:0]" style={{ position: "relative", height: "fit-content", width: "fit-content", transform: "none" }} aria-hidden="true">
              <div className="framer-s43p7b items-start flex-none flex-row flex-nowrap content-start justify-center">
                <div className="framer-1slrys0-container flex-none">
                  <div className="framer-H2ji0 framer-2BTrO framer-Jf64E framer-bg7kye items-center flex-row flex-nowrap place-content-center [overflow:visible] [opacity:1]">
                    <div className="framer-17xcqax select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">60-Day Money Back Guarantee</p>
                    </div>
                    <div className="framer-1lccm5p select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">•</p>
                    </div>
                  </div>
                </div>
                <div className="framer-1slrys0-container flex-none">
                  <div className="framer-H2ji0 framer-2BTrO framer-Jf64E framer-bg7kye items-center flex-row flex-nowrap place-content-center [overflow:visible] [opacity:1]">
                    <div className="framer-17xcqax select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">Free International Shipping</p>
                    </div>
                    <div className="framer-1lccm5p select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">•</p>
                    </div>
                  </div>
                </div>
                <div className="framer-1slrys0-container flex-none">
                  <div className="framer-H2ji0 framer-2BTrO framer-Jf64E framer-bg7kye items-center flex-row flex-nowrap place-content-center [overflow:visible] [opacity:1]">
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
      <div className="framer-grv9nz-container flex-none">
        <div className="ssr-variant">
          <nav data-fx-nav="desktop" className="framer-mV9bZ framer-Jf64E framer-opbmt framer-115fwyv framer-v-1sgftv0" style={{ "--border-bottom-width": "1px", "--border-color": "var(--oi-nav-border)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "0px", backdropFilter: "blur(5px)", background: "linear-gradient(180deg, var(--oi-nav-c1) 0%, var(--oi-nav-c2) 100%)", width: "100%", boxShadow: "0px 2px 3px 0px var(--oi-nav-shadow)", opacity: "1", willChange: "auto" } as CSSProperties} data-border="true">
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
          </nav>
        </div>
      </div>
    </div>
  );
}

function ImportedDivOfferNav2() {
  return (
    <div className="framer-frk7oi items-center flex-none flex-col flex-nowrap place-content-center [left:0px] [order:-1000] [overflow:visible] [right:0px] [top:0px] [z-index:10] [opacity:1]" style={{ transform: "none", willChange: "transform", "--site-import-header-display": "flex" } as CSSProperties} data-site-import-mobile-header="">
      <div className="framer-1kzqzec items-center place-content-center [overflow:var(--overflow-clip-fallback,clip)]">
        <div className="framer-4dylj7 items-center content-center justify-start [overflow:visible]" style={{ display: "flex", position: "relative" }}>
          <ul className="list-none justify-start flex-row [opacity:1] items-center [max-height:100%] [max-width:100%] will-change-transform" style={{ display: "flex", position: "relative", padding: "0px", margin: "0px", gap: "40px", width: "100%", height: "100%", transform: "translateX(-727.063px)" }}>
            <li className="[flex-grow:0] [flex-shrink:0]" style={{ position: "relative", height: "fit-content", width: "fit-content", transform: "none" }} aria-hidden="false" aria-posinset={1} aria-setsize={1}>
              <div className="framer-s43p7b items-start flex-none flex-row flex-nowrap content-start justify-center">
                <div className="framer-1slrys0-container flex-none">
                  <div className="framer-H2ji0 framer-2BTrO framer-Jf64E framer-bg7kye items-center flex-row flex-nowrap place-content-center [overflow:visible] [opacity:1]">
                    <div className="framer-17xcqax select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">60-Day Money Back Guarantee</p>
                    </div>
                    <div className="framer-1lccm5p select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">•</p>
                    </div>
                  </div>
                </div>
                <div className="framer-1slrys0-container flex-none">
                  <div className="framer-H2ji0 framer-2BTrO framer-Jf64E framer-bg7kye items-center flex-row flex-nowrap place-content-center [overflow:visible] [opacity:1]">
                    <div className="framer-17xcqax select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">Free International Shipping</p>
                    </div>
                    <div className="framer-1lccm5p select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">•</p>
                    </div>
                  </div>
                </div>
                <div className="framer-1slrys0-container flex-none">
                  <div className="framer-H2ji0 framer-2BTrO framer-Jf64E framer-bg7kye items-center flex-row flex-nowrap place-content-center [overflow:visible] [opacity:1]">
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
            <li className="[flex-grow:0] [flex-shrink:0]" style={{ position: "relative", height: "fit-content", width: "fit-content", transform: "none" }} aria-hidden="true">
              <div className="framer-s43p7b items-start flex-none flex-row flex-nowrap content-start justify-center">
                <div className="framer-1slrys0-container flex-none">
                  <div className="framer-H2ji0 framer-2BTrO framer-Jf64E framer-bg7kye items-center flex-row flex-nowrap place-content-center [overflow:visible] [opacity:1]">
                    <div className="framer-17xcqax select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">60-Day Money Back Guarantee</p>
                    </div>
                    <div className="framer-1lccm5p select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">•</p>
                    </div>
                  </div>
                </div>
                <div className="framer-1slrys0-container flex-none">
                  <div className="framer-H2ji0 framer-2BTrO framer-Jf64E framer-bg7kye items-center flex-row flex-nowrap place-content-center [overflow:visible] [opacity:1]">
                    <div className="framer-17xcqax select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">Free International Shipping</p>
                    </div>
                    <div className="framer-1lccm5p select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">•</p>
                    </div>
                  </div>
                </div>
                <div className="framer-1slrys0-container flex-none">
                  <div className="framer-H2ji0 framer-2BTrO framer-Jf64E framer-bg7kye items-center flex-row flex-nowrap place-content-center [overflow:visible] [opacity:1]">
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
      <div className="framer-grv9nz-container flex-none">
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
    <div className="framer-1bt2n0f items-center place-content-center [overflow:var(--overflow-clip-fallback,clip)]">
      <div className="framer-1pm1p85 max-w-[700px] wrap-break-word [word-break:break-word] [opacity:1]" style={{ transform: "none", willChange: "transform" }} data-framer-component-type="RichTextContainer">
        <h2 className="framer-text framer-styles-preset-1lbzffu" dir="auto">1. Returns Eligibility<br className="framer-text" /><br className="framer-text" /></h2>
        <p className="framer-text framer-styles-preset-e0g0fh" dir="auto">We want you to feel confident trying OneThing.</p>
        <p className="framer-text framer-styles-preset-e0g0fh" dir="auto">If you are unsatisfied with your purchase, you may request a return or refund within 30 days of delivery.</p>
        <p className="framer-text framer-styles-preset-e0g0fh" dir="auto">To qualify:</p>
        <ul className="framer-text" dir="auto">
          <li className="framer-text framer-styles-preset-e0g0fh">
            <p className="framer-text framer-styles-preset-e0g0fh">Products must be purchased directly from our website</p>
          </li>
          <li className="framer-text framer-styles-preset-e0g0fh">
            <p className="framer-text framer-styles-preset-e0g0fh">Proof of purchase is required</p>
          </li>
          <li className="framer-text framer-styles-preset-e0g0fh">
            <p className="framer-text framer-styles-preset-e0g0fh">Requests must be submitted within the eligible refund period</p>
          </li>
        </ul>
        <h2 className="framer-text framer-styles-preset-1lbzffu" dir="auto">2. Subscription Orders</h2>
        <p className="framer-text framer-styles-preset-e0g0fh" dir="auto">Subscription orders can be cancelled anytime before the next billing date.</p>
        <p className="framer-text framer-styles-preset-e0g0fh" dir="auto">Once a subscription order has been processed or shipped, it cannot be cancelled for that billing cycle.</p>
        <p className="framer-text framer-styles-preset-e0g0fh" dir="auto">Future renewals can still be paused or cancelled.</p>
        <h2 className="framer-text framer-styles-preset-1lbzffu" dir="auto">3. Damaged or Incorrect Orders</h2>
        <p className="framer-text framer-styles-preset-e0g0fh" dir="auto">If your order arrives damaged, defective, or incorrect, please contact us within 7 days of delivery.</p>
        <p className="framer-text framer-styles-preset-e0g0fh" dir="auto">Please include:</p>
        <ul className="framer-text" dir="auto">
          <li className="framer-text framer-styles-preset-e0g0fh">
            <p className="framer-text framer-styles-preset-e0g0fh">your order number</p>
          </li>
          <li className="framer-text framer-styles-preset-e0g0fh">
            <p className="framer-text framer-styles-preset-e0g0fh">photos of the product</p>
          </li>
          <li className="framer-text framer-styles-preset-e0g0fh">
            <p className="framer-text framer-styles-preset-e0g0fh">packaging images if applicable</p>
          </li>
        </ul>
        <p className="framer-text framer-styles-preset-e0g0fh" dir="auto">We will replace the item or issue a refund where appropriate.</p>
        <h2 className="framer-text framer-styles-preset-1lbzffu" dir="auto">4. Non-Refundable Items</h2>
        <p className="framer-text framer-styles-preset-e0g0fh" dir="auto">We may not accept refunds for:</p>
        <ul className="framer-text" dir="auto">
          <li className="framer-text framer-styles-preset-e0g0fh">
            <p className="framer-text framer-styles-preset-e0g0fh">heavily used products</p>
          </li>
          <li className="framer-text framer-styles-preset-e0g0fh">
            <p className="framer-text framer-styles-preset-e0g0fh">multiple refund requests from the same customer</p>
          </li>
          <li className="framer-text framer-styles-preset-e0g0fh">
            <p className="framer-text framer-styles-preset-e0g0fh">orders purchased through unauthorized resellers</p>
          </li>
          <li className="framer-text framer-styles-preset-e0g0fh">
            <p className="framer-text framer-styles-preset-e0g0fh">gift cards or promotional items</p>
          </li>
        </ul>
        <h2 className="framer-text framer-styles-preset-1lbzffu" dir="auto">5. Processing Time</h2>
        <p className="framer-text framer-styles-preset-e0g0fh" dir="auto">Approved refunds are typically processed within 5–10 business days depending on your payment provider.</p>
        <p className="framer-text framer-styles-preset-e0g0fh" dir="auto">Shipping fees may be non-refundable unless the issue was caused by our error.</p>
        <h2 className="framer-text framer-styles-preset-1lbzffu" dir="auto">6. Refund Abuse</h2>
        <p className="framer-text framer-styles-preset-e0g0fh" dir="auto">To protect against misuse, we reserve the right to refuse refunds if we believe our policy is being abused.</p>
        <h2 className="framer-text framer-styles-preset-1lbzffu" dir="auto">7. Contact Us</h2>
        <p className="framer-text framer-styles-preset-e0g0fh" dir="auto">For refund or return requests, contact:</p>
        <p className="framer-text framer-styles-preset-e0g0fh" dir="auto">Email: <a className="framer-text framer-styles-preset-dnlggy">support@onething.com</a></p>
        <p className="framer-text framer-styles-preset-e0g0fh" dir="auto">Address: [Insert Business Address]</p>
      </div>
    </div>
  );
}

function ImportedDivCTASection() {
  return (
    <div className="framer-vwvzt items-center place-content-center [order:1002] [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-filter-override,filter)]">
      <div className="[border-radius:inherit] [corner-shape:inherit] [inset:0px]" style={{ position: "absolute" }}>
        <img className="[border-radius:inherit] [corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%" }} decoding="auto" width="1919" height="820" sizes="(min-width: 1200px) 100vw, (max-width: 679.98px) 100vw, (min-width: 680px) and (max-width: 1199.98px) 100vw" srcSet="/site-assets/d6c1f16f6dc49a8a.avif 512w, /site-assets/1103cb5ad36a5edb.avif 1024w, /site-assets/b70609d493987f70.avif 1919w" src="/site-assets/b70609d493987f70.avif" alt="Woman holding a supplement gummy" />
      </div>
      <div className="framer-5k7g2i flex-none [inset:0px] [overflow:var(--overflow-clip-fallback,clip)] [z-index:1]" />
      <div className="framer-jdbpv2 items-start max-w-[1200px] content-start justify-center [overflow:var(--overflow-clip-fallback,clip)]">
        <div className="framer-12lagj9 max-w-[433px] [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
          <h3 className="framer-text framer-styles-preset-crg4y9" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))" } as CSSProperties} dir="auto">Stop taking handfuls of pills, and start taking OneThing</h3>
        </div>
        <div className="framer-1grnsct [overflow:var(--overflow-clip-fallback,clip)]">
          <div className="framer-mdv6xc-container flex-none [z-index:2]">
            <a className="framer-6dH45 framer-FaBO9 framer-Jf64E framer-7z2klu framer-wcun84 [backdrop-filter:none] [border-radius:99px] [opacity:1]" style={{ width: "100%", backgroundColor: "var(--token-136beebb-89fe-4d20-a894-e7f11788a217, rgb(255, 255, 255))" }} href="/">
              <div className="framer-x7c3yg [opacity:1]" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-sqgpjx" dir="auto">Get Supplement</p>
              </div>
            </a>
          </div>
          <div className="framer-1acd4v7-container flex-none [z-index:2]">
            <a className="framer-6dH45 framer-FaBO9 framer-Jf64E framer-7z2klu framer-wcun84 [backdrop-filter:blur(10px)] [border-radius:99px] [opacity:1]" style={{ width: "100%", backgroundColor: "rgba(255, 255, 255, 0.1)" }} href="/#ingredients">
              <div className="framer-x7c3yg [opacity:1]" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--extracted-r6o4lv": "var(--token-136beebb-89fe-4d20-a894-e7f11788a217, rgb(255, 255, 255))", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-sqgpjx" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-136beebb-89fe-4d20-a894-e7f11788a217, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">See Ingredients</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function ImportedFooterFooterSection() {
  return (
    <footer className="framer-179tudc items-center flex-none flex-col flex-nowrap place-content-center [order:1003] [overflow:var(--overflow-clip-fallback,clip)] [z-index:2]">
      <div className="framer-n19f5h items-center rounded-[15px] flex-none flex-row flex-nowrap content-center justify-start [overflow:visible] select-none [touch-action:pan-y]" style={{ display: "flex", position: "relative" }} draggable="false">
        <ul className="list-none justify-start flex-row [opacity:1] items-center [max-height:100%] [max-width:100%]" style={{ display: "flex", position: "relative", padding: "0px", margin: "0px", gap: "25px", width: "100%", height: "100%", transform: "translateX(-513.787px)" }}>
          <li className="[flex-grow:0] [flex-shrink:0]" style={{ position: "relative", height: "fit-content", width: "fit-content", transform: "none" }} aria-hidden="false" aria-posinset={1} aria-setsize={1}>
            <div className="framer-kupxx2 items-start flex-none flex-row flex-nowrap content-start justify-center">
              <div className="ssr-variant">
                <div className="framer-29bopy-container aspect-square flex-none select-none">
                  <div className="framer-1CnZg framer-FaBO9 framer-18h6f4o items-end flex-row flex-nowrap content-end justify-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [border-radius:15px] [opacity:1]" style={{ height: "100%", width: "100%" }}>
                    <div className="framer-txsj items-start flex-[1_0_0px] flex-col flex-nowrap content-start justify-center [overflow:var(--overflow-clip-fallback,clip)] [z-index:1] [opacity:1]">
                      <div className="framer-eyabtc items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                        <div className="framer-bmirh framer-olf8v4 aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                        <div className="framer-bmirh framer-5k3i5h aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                        <div className="framer-bmirh framer-10wtumk aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                        <div className="framer-bmirh framer-1d3qqzf aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                        <div className="framer-bmirh framer-1xapgv8 aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                      </div>
                      <div className="framer-z3kc18 [z-index:2] [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-sqgpjx" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">“Week 3 and my sleep feels noticeably deeper.”</p>
                      </div>
                    </div>
                    <div className="framer-12d475x flex-none [inset:0px] [overflow:visible] [z-index:0] [opacity:1]">
                      <div className="[border-radius:inherit] [corner-shape:inherit] [inset:0px]" style={{ position: "absolute" }}>
                        <img className="[border-radius:inherit] [corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%" }} decoding="auto" width="4096" height="4096" sizes="320px" srcSet="/site-assets/fa50155be2979378.avif 512w, /site-assets/3e5070104e849c20.avif 1024w, /site-assets/8145e55cc494ed77.webp 2048w, /site-assets/2b19a1113aafaaf0.webp 4096w" src="/site-assets/2b19a1113aafaaf0.webp" alt="Person holding supplement sachet next to his face" />
                      </div>
                      <div className="framer-1ve6qdb flex-none [inset:0px] [overflow:visible] [z-index:1] [opacity:1]" style={{ background: "linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.6) 100%)" }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="ssr-variant">
                <div className="framer-29bopy-container aspect-square flex-none select-none">
                  <div className="framer-1CnZg framer-FaBO9 framer-18h6f4o items-end flex-row flex-nowrap content-end justify-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [border-radius:15px] [opacity:1]" style={{ height: "100%", width: "100%" }}>
                    <div className="framer-txsj items-start flex-[1_0_0px] flex-col flex-nowrap content-start justify-center [overflow:var(--overflow-clip-fallback,clip)] [z-index:1] [opacity:1]">
                      <div className="framer-eyabtc items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                        <div className="framer-bmirh framer-olf8v4 aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                        <div className="framer-bmirh framer-5k3i5h aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                        <div className="framer-bmirh framer-10wtumk aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                        <div className="framer-bmirh framer-1d3qqzf aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                        <div className="framer-bmirh framer-1xapgv8 aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                      </div>
                      <div className="framer-z3kc18 [z-index:2] [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-sqgpjx" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">“Honestly the first supplement I’ve stayed consistent with.”</p>
                      </div>
                    </div>
                    <div className="framer-12d475x flex-none [inset:0px] [overflow:visible] [z-index:0] [opacity:1]">
                      <div className="[border-radius:inherit] [corner-shape:inherit] [inset:0px]" style={{ position: "absolute" }}>
                        <img className="[border-radius:inherit] [corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%" }} decoding="auto" width="4096" height="4096" sizes="320px" srcSet="/site-assets/501de64378573e08.avif 512w, /site-assets/e29350b3e9407764.avif 1024w, /site-assets/57968ab5b121e9e0.webp 2048w, /site-assets/582baf5e6a8281ba.webp 4096w" src="/site-assets/582baf5e6a8281ba.webp" alt="Woman taking selfie with the supplement product" />
                      </div>
                      <div className="framer-1ve6qdb flex-none [inset:0px] [overflow:visible] [z-index:1] [opacity:1]" style={{ background: "linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.6) 100%)" }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="ssr-variant">
                <div className="framer-29bopy-container aspect-square flex-none select-none">
                  <div className="framer-1CnZg framer-FaBO9 framer-18h6f4o items-end flex-row flex-nowrap content-end justify-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [border-radius:15px] [opacity:1]" style={{ height: "100%", width: "100%" }}>
                    <div className="framer-txsj items-start flex-[1_0_0px] flex-col flex-nowrap content-start justify-center [overflow:var(--overflow-clip-fallback,clip)] [z-index:1] [opacity:1]">
                      <div className="framer-eyabtc items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                        <div className="framer-bmirh framer-olf8v4 aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                        <div className="framer-bmirh framer-5k3i5h aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                        <div className="framer-bmirh framer-10wtumk aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                        <div className="framer-bmirh framer-1d3qqzf aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                        <div className="framer-bmirh framer-1xapgv8 aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                      </div>
                      <div className="framer-z3kc18 [z-index:2] [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-sqgpjx" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">“I stopped taking 4 different supplements after this.”</p>
                      </div>
                    </div>
                    <div className="framer-12d475x flex-none [inset:0px] [overflow:visible] [z-index:0] [opacity:1]">
                      <div className="[border-radius:inherit] [corner-shape:inherit] [inset:0px]" style={{ position: "absolute" }}>
                        <img className="[border-radius:inherit] [corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%" }} decoding="auto" width="4096" height="4096" sizes="320px" srcSet="/site-assets/d3637162259014b5.avif 512w, /site-assets/82d9ece8208cb9d4.avif 1024w, /site-assets/2943b5155f2682b1.webp 2048w, /site-assets/2943b5155f2682b1.webp 4096w" src="/site-assets/2943b5155f2682b1.webp" alt="man holding a supplement box" />
                      </div>
                      <div className="framer-1ve6qdb flex-none [inset:0px] [overflow:visible] [z-index:1] [opacity:1]" style={{ background: "linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.6) 100%)" }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="ssr-variant">
                <div className="framer-29bopy-container aspect-square flex-none select-none">
                  <div className="framer-1CnZg framer-FaBO9 framer-18h6f4o items-end flex-row flex-nowrap content-end justify-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [border-radius:15px] [opacity:1]" style={{ height: "100%", width: "100%" }}>
                    <div className="framer-txsj items-start flex-[1_0_0px] flex-col flex-nowrap content-start justify-center [overflow:var(--overflow-clip-fallback,clip)] [z-index:1] [opacity:1]">
                      <div className="framer-eyabtc items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                        <div className="framer-bmirh framer-olf8v4 aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                        <div className="framer-bmirh framer-5k3i5h aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                        <div className="framer-bmirh framer-10wtumk aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                        <div className="framer-bmirh framer-1d3qqzf aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                        <div className="framer-bmirh framer-1xapgv8 aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                      </div>
                      <div className="framer-z3kc18 [z-index:2] [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-sqgpjx" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">"Better focus. Better mornings. Less pills."</p>
                      </div>
                    </div>
                    <div className="framer-12d475x flex-none [inset:0px] [overflow:visible] [z-index:0] [opacity:1]">
                      <div className="[border-radius:inherit] [corner-shape:inherit] [inset:0px]" style={{ position: "absolute" }}>
                        <img className="[border-radius:inherit] [corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%" }} decoding="auto" width="4096" height="4096" sizes="320px" srcSet="/site-assets/0874c04a32171426.avif 512w, /site-assets/eb6f1a7e8200d749.avif 1024w, /site-assets/7561227e5a4ee60e.webp 2048w, /site-assets/7561227e5a4ee60e.webp 4096w" src="/site-assets/7561227e5a4ee60e.webp" alt="woman drinking coffee while having hands placed on the supplement box" />
                      </div>
                      <div className="framer-1ve6qdb flex-none [inset:0px] [overflow:visible] [z-index:1] [opacity:1]" style={{ background: "linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.6) 100%)" }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="ssr-variant">
                <div className="framer-29bopy-container aspect-square flex-none select-none">
                  <div className="framer-1CnZg framer-FaBO9 framer-18h6f4o items-end flex-row flex-nowrap content-end justify-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [border-radius:15px] [opacity:1]" style={{ height: "100%", width: "100%" }}>
                    <div className="framer-txsj items-start flex-[1_0_0px] flex-col flex-nowrap content-start justify-center [overflow:var(--overflow-clip-fallback,clip)] [z-index:1] [opacity:1]">
                      <div className="framer-eyabtc items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                        <div className="framer-bmirh framer-olf8v4 aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                        <div className="framer-bmirh framer-5k3i5h aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                        <div className="framer-bmirh framer-10wtumk aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                        <div className="framer-bmirh framer-1d3qqzf aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                        <div className="framer-bmirh framer-1xapgv8 aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                      </div>
                      <div className="framer-z3kc18 [z-index:2] [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-sqgpjx" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">"Didn’t expect one gummy to actually replace everything"</p>
                      </div>
                    </div>
                    <div className="framer-12d475x flex-none [inset:0px] [overflow:visible] [z-index:0] [opacity:1]">
                      <div className="[border-radius:inherit] [corner-shape:inherit] [inset:0px]" style={{ position: "absolute" }}>
                        <img className="[border-radius:inherit] [corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%" }} decoding="auto" width="4096" height="4096" sizes="320px" srcSet="/site-assets/ccd619873287b069.avif 512w, /site-assets/05dfdabf78d2465a.avif 1024w, /site-assets/5ebff1135eeb93cf.webp 2048w, /site-assets/68a47e4b75683182.webp 4096w" src="/site-assets/68a47e4b75683182.webp" alt="Supplement product on the biscep of a person" />
                      </div>
                      <div className="framer-1ve6qdb flex-none [inset:0px] [overflow:visible] [z-index:1] [opacity:1]" style={{ background: "linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.6) 100%)" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="[flex-grow:0] [flex-shrink:0]" style={{ position: "relative", height: "fit-content", width: "fit-content", transform: "none" }} aria-hidden="true">
            <div className="framer-kupxx2 items-start flex-none flex-row flex-nowrap content-start justify-center">
              <div className="framer-29bopy-container aspect-square flex-none select-none">
                <div className="framer-1CnZg framer-FaBO9 framer-18h6f4o items-end flex-row flex-nowrap content-end justify-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [border-radius:15px] [opacity:1]" style={{ height: "100%", width: "100%" }}>
                  <div className="framer-txsj items-start flex-[1_0_0px] flex-col flex-nowrap content-start justify-center [overflow:var(--overflow-clip-fallback,clip)] [z-index:1] [opacity:1]">
                    <div className="framer-eyabtc items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                      <div className="framer-bmirh framer-olf8v4 aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                      <div className="framer-bmirh framer-5k3i5h aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                      <div className="framer-bmirh framer-10wtumk aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                      <div className="framer-bmirh framer-1d3qqzf aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                      <div className="framer-bmirh framer-1xapgv8 aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                    </div>
                    <div className="framer-z3kc18 [z-index:2] [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-sqgpjx" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">“Week 3 and my sleep feels noticeably deeper.”</p>
                    </div>
                  </div>
                  <div className="framer-12d475x flex-none [inset:0px] [overflow:visible] [z-index:0] [opacity:1]">
                    <div className="[border-radius:inherit] [corner-shape:inherit] [inset:0px]" style={{ position: "absolute" }}>
                      <img className="[border-radius:inherit] [corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%" }} decoding="auto" width="4096" height="4096" sizes="320px" srcSet="/site-assets/fa50155be2979378.avif 512w, /site-assets/3e5070104e849c20.avif 1024w, /site-assets/8145e55cc494ed77.webp 2048w, /site-assets/2b19a1113aafaaf0.webp 4096w" src="/site-assets/2b19a1113aafaaf0.webp" alt="Person holding supplement sachet next to his face" />
                    </div>
                    <div className="framer-1ve6qdb flex-none [inset:0px] [overflow:visible] [z-index:1] [opacity:1]" style={{ background: "linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.6) 100%)" }} />
                  </div>
                </div>
              </div>
              <div className="framer-29bopy-container aspect-square flex-none select-none">
                <div className="framer-1CnZg framer-FaBO9 framer-18h6f4o items-end flex-row flex-nowrap content-end justify-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [border-radius:15px] [opacity:1]" style={{ height: "100%", width: "100%" }}>
                  <div className="framer-txsj items-start flex-[1_0_0px] flex-col flex-nowrap content-start justify-center [overflow:var(--overflow-clip-fallback,clip)] [z-index:1] [opacity:1]">
                    <div className="framer-eyabtc items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                      <div className="framer-bmirh framer-olf8v4 aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                      <div className="framer-bmirh framer-5k3i5h aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                      <div className="framer-bmirh framer-10wtumk aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                      <div className="framer-bmirh framer-1d3qqzf aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                      <div className="framer-bmirh framer-1xapgv8 aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                    </div>
                    <div className="framer-z3kc18 [z-index:2] [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-sqgpjx" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">“Honestly the first supplement I’ve stayed consistent with.”</p>
                    </div>
                  </div>
                  <div className="framer-12d475x flex-none [inset:0px] [overflow:visible] [z-index:0] [opacity:1]">
                    <div className="[border-radius:inherit] [corner-shape:inherit] [inset:0px]" style={{ position: "absolute" }}>
                      <img className="[border-radius:inherit] [corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%" }} decoding="auto" width="4096" height="4096" sizes="320px" srcSet="/site-assets/501de64378573e08.avif 512w, /site-assets/e29350b3e9407764.avif 1024w, /site-assets/57968ab5b121e9e0.webp 2048w, /site-assets/582baf5e6a8281ba.webp 4096w" src="/site-assets/582baf5e6a8281ba.webp" alt="Woman taking selfie with the supplement product" />
                    </div>
                    <div className="framer-1ve6qdb flex-none [inset:0px] [overflow:visible] [z-index:1] [opacity:1]" style={{ background: "linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.6) 100%)" }} />
                  </div>
                </div>
              </div>
              <div className="framer-29bopy-container aspect-square flex-none select-none">
                <div className="framer-1CnZg framer-FaBO9 framer-18h6f4o items-end flex-row flex-nowrap content-end justify-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [border-radius:15px] [opacity:1]" style={{ height: "100%", width: "100%" }}>
                  <div className="framer-txsj items-start flex-[1_0_0px] flex-col flex-nowrap content-start justify-center [overflow:var(--overflow-clip-fallback,clip)] [z-index:1] [opacity:1]">
                    <div className="framer-eyabtc items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                      <div className="framer-bmirh framer-olf8v4 aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                      <div className="framer-bmirh framer-5k3i5h aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                      <div className="framer-bmirh framer-10wtumk aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                      <div className="framer-bmirh framer-1d3qqzf aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                      <div className="framer-bmirh framer-1xapgv8 aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                    </div>
                    <div className="framer-z3kc18 [z-index:2] [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-sqgpjx" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">“I stopped taking 4 different supplements after this.”</p>
                    </div>
                  </div>
                  <div className="framer-12d475x flex-none [inset:0px] [overflow:visible] [z-index:0] [opacity:1]">
                    <div className="[border-radius:inherit] [corner-shape:inherit] [inset:0px]" style={{ position: "absolute" }}>
                      <img className="[border-radius:inherit] [corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%" }} decoding="auto" width="4096" height="4096" sizes="320px" srcSet="/site-assets/d3637162259014b5.avif 512w, /site-assets/82d9ece8208cb9d4.avif 1024w, /site-assets/2943b5155f2682b1.webp 2048w, /site-assets/2943b5155f2682b1.webp 4096w" src="/site-assets/2943b5155f2682b1.webp" alt="man holding a supplement box" />
                    </div>
                    <div className="framer-1ve6qdb flex-none [inset:0px] [overflow:visible] [z-index:1] [opacity:1]" style={{ background: "linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.6) 100%)" }} />
                  </div>
                </div>
              </div>
              <div className="framer-29bopy-container aspect-square flex-none select-none">
                <div className="framer-1CnZg framer-FaBO9 framer-18h6f4o items-end flex-row flex-nowrap content-end justify-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [border-radius:15px] [opacity:1]" style={{ height: "100%", width: "100%" }}>
                  <div className="framer-txsj items-start flex-[1_0_0px] flex-col flex-nowrap content-start justify-center [overflow:var(--overflow-clip-fallback,clip)] [z-index:1] [opacity:1]">
                    <div className="framer-eyabtc items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                      <div className="framer-bmirh framer-olf8v4 aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                      <div className="framer-bmirh framer-5k3i5h aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                      <div className="framer-bmirh framer-10wtumk aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                      <div className="framer-bmirh framer-1d3qqzf aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                      <div className="framer-bmirh framer-1xapgv8 aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                    </div>
                    <div className="framer-z3kc18 [z-index:2] [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-sqgpjx" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">"Better focus. Better mornings. Less pills."</p>
                    </div>
                  </div>
                  <div className="framer-12d475x flex-none [inset:0px] [overflow:visible] [z-index:0] [opacity:1]">
                    <div className="[border-radius:inherit] [corner-shape:inherit] [inset:0px]" style={{ position: "absolute" }}>
                      <img className="[border-radius:inherit] [corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%" }} decoding="auto" width="4096" height="4096" sizes="320px" srcSet="/site-assets/0874c04a32171426.avif 512w, /site-assets/eb6f1a7e8200d749.avif 1024w, /site-assets/7561227e5a4ee60e.webp 2048w, /site-assets/7561227e5a4ee60e.webp 4096w" src="/site-assets/7561227e5a4ee60e.webp" alt="woman drinking coffee while having hands placed on the supplement box" />
                    </div>
                    <div className="framer-1ve6qdb flex-none [inset:0px] [overflow:visible] [z-index:1] [opacity:1]" style={{ background: "linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.6) 100%)" }} />
                  </div>
                </div>
              </div>
              <div className="framer-29bopy-container aspect-square flex-none select-none">
                <div className="framer-1CnZg framer-FaBO9 framer-18h6f4o items-end flex-row flex-nowrap content-end justify-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [border-radius:15px] [opacity:1]" style={{ height: "100%", width: "100%" }}>
                  <div className="framer-txsj items-start flex-[1_0_0px] flex-col flex-nowrap content-start justify-center [overflow:var(--overflow-clip-fallback,clip)] [z-index:1] [opacity:1]">
                    <div className="framer-eyabtc items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                      <div className="framer-bmirh framer-olf8v4 aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                      <div className="framer-bmirh framer-5k3i5h aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                      <div className="framer-bmirh framer-10wtumk aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                      <div className="framer-bmirh framer-1d3qqzf aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                      <div className="framer-bmirh framer-1xapgv8 aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                    </div>
                    <div className="framer-z3kc18 [z-index:2] [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-sqgpjx" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">"Didn’t expect one gummy to actually replace everything"</p>
                    </div>
                  </div>
                  <div className="framer-12d475x flex-none [inset:0px] [overflow:visible] [z-index:0] [opacity:1]">
                    <div className="[border-radius:inherit] [corner-shape:inherit] [inset:0px]" style={{ position: "absolute" }}>
                      <img className="[border-radius:inherit] [corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%" }} decoding="auto" width="4096" height="4096" sizes="320px" srcSet="/site-assets/ccd619873287b069.avif 512w, /site-assets/05dfdabf78d2465a.avif 1024w, /site-assets/5ebff1135eeb93cf.webp 2048w, /site-assets/68a47e4b75683182.webp 4096w" src="/site-assets/68a47e4b75683182.webp" alt="Supplement product on the biscep of a person" />
                    </div>
                    <div className="framer-1ve6qdb flex-none [inset:0px] [overflow:visible] [z-index:1] [opacity:1]" style={{ background: "linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.6) 100%)" }} />
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="framer-yt5zhh items-start flex-none flex-col flex-nowrap max-w-[1200px] [overflow:visible] [place-content:flex-start]">
        <div className="framer-kg9gbf items-start content-start justify-center [overflow:visible]">
          <div className="framer-fwqlt2 items-start content-start justify-center [overflow:var(--overflow-clip-fallback,clip)]">
            <div className="framer-q453km items-start flex-none flex-col flex-nowrap [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start]">
              <div className="ssr-variant">
                <div className="framer-8611ol aspect-[3.47806/1] flex-none [overflow:visible]">
                  <div className="[border-radius:inherit] [corner-shape:inherit] [inset:0px]" style={{ position: "absolute" }}>
                    <img className="[border-radius:inherit] [corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%" }} decoding="auto" width="2219" height="638" sizes="(min-width: 1200px) max(86.9514px, 118.2539px), (max-width: 679.98px) max(86.9514px, 118.2539px), (min-width: 680px) and (max-width: 1199.98px) max(86.9514px, 118.2539px)" srcSet="/site-assets/ffa5660189cfaef9.avif 512w, /site-assets/6eb85bf3f09b72fa.webp 1024w, /site-assets/81342bc92387350b.png 2048w, /site-assets/cccfbd665bf7358c.webp 2219w" src="/site-assets/cccfbd665bf7358c.webp" alt="Logo" />
                  </div>
                </div>
              </div>
              <div className="framer-1uze6q7 wrap-break-word [opacity:0.8] [word-break:break-word]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--token-20520155-1f7c-48bb-bab4-b385c8b0875a, rgb(0, 0, 0))" } as CSSProperties} dir="auto">The one ultimate supplement for peak health that replaces your entire shelf</p>
              </div>
            </div>
            <div className="framer-smlne3 items-center flex-none flex-row flex-nowrap content-center justify-start [overflow:visible]">
              <a className="framer-1xdu7e2 framer-iqhows items-center rounded-[8px] flex-none flex-row flex-nowrap p-[8px] place-content-center [overflow:visible] [will-change:var(--framer-will-change-effect-override,transform)]" href="https://x.com/adheebhameed" rel="noopener" target="_blank">
                <div className="framer-tolfT framer-xj4x7b aspect-square flex-none [opacity:0.5]" />
              </a>
              <a className="framer-nrw2p7 framer-iqhows items-center rounded-[8px] flex-none flex-row flex-nowrap p-[8px] place-content-center [overflow:visible] [will-change:var(--framer-will-change-effect-override,transform)]" href="https://linkedin.com" rel="noopener" target="_blank">
                <div className="framer-S0iEV framer-1y0kdro aspect-square flex-none [opacity:0.5]" />
              </a>
              <a className="framer-1vv3qbh framer-iqhows items-center rounded-[8px] flex-none flex-row flex-nowrap p-[8px] place-content-center [overflow:visible] [will-change:var(--framer-will-change-effect-override,transform)]" href="https://facebook.com" rel="noopener" target="_blank">
                <div className="framer-w72ci framer-v3e2zt aspect-square flex-none [opacity:0.5]" />
              </a>
            </div>
          </div>
          <div className="framer-12fmtqd items-start [overflow:visible]">
            <div className="ssr-variant">
              <div className="framer-1acbqbl-container flex-none [will-change:var(--framer-will-change-effect-override,transform)]">
                <a className="framer-trzQi framer-FaBO9 framer-qhMV1 framer-udbtyz framer-v-wuyut1 framer-128y9cq items-center place-content-center [overflow:visible] [backdrop-filter:blur(5px)] [opacity:1]" style={{ "--border-bottom-width": "1px", "--border-color": "var(--token-8bbbea30-76c9-4ba6-997e-07eab0911b28, rgb(255, 255, 255))", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "var(--token-7dec4550-2ba6-4025-bfd1-f0cbf4c0a7c9, rgb(247, 247, 247))", width: "100%", borderRadius: "18px" } as CSSProperties} data-border="true" href="/#buy-product">
                  <div className="framer-12ym6a6 items-center flex-none flex-row flex-nowrap place-content-center [opacity:1]" style={{ backgroundColor: "var(--token-136beebb-89fe-4d20-a894-e7f11788a217, rgb(255, 255, 255))", borderRadius: "15px" }}>
                    <div className="framer-k82luq aspect-square flex-none [overflow:visible] [filter:drop-shadow(rgba(0,_0,_0,_0.15)_0px_5px_3px)] [opacity:1]">
                      <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                        <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="8000" height="8000" sizes="(min-width: 1200px) 50px, (max-width: 679.98px) 50px, (min-width: 680px) and (max-width: 1199.98px) 50px" srcSet="/site-assets/d3f19ecc7e04313e.avif 512w, /site-assets/119c2221c7b0d4b7.avif 1024w, /site-assets/6ce9177316b622fa.avif 2048w, /site-assets/64096d728d2ab117.avif 4096w" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="framer-o187ju [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                    <div className="framer-1ef9szw items-start flex-[1_0_0px] flex-col flex-nowrap content-start justify-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                      <div className="framer-iv1a0p [z-index:2] [opacity:1]" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-sqgpjx" dir="auto">OneThing Gummies</p>
                      </div>
                      <div className="framer-16l5uku [z-index:2] [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7)))" } as CSSProperties} dir="auto">$49.00</p>
                      </div>
                    </div>
                    <div className="framer-qqrxa4 items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]" style={{ backgroundColor: "var(--token-a5917666-de48-475a-8244-858af9f157b1, rgb(0, 0, 0))", borderRadius: "99px" }}>
                      <div className="framer-pD07D framer-1v90v09 aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-8bbbea30-76c9-4ba6-997e-07eab0911b28, rgb(255, 255, 255))", transform: "rotate(-90deg)" } as CSSProperties} />
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="framer-1ixdx1k flex-none flex-col flex-nowrap [overflow:var(--overflow-clip-fallback,clip)]">
              <div className="framer-7b1c2i" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--token-b3f9dcfd-cd1a-4c39-9e0e-26344979508f, rgba(0, 0, 0, 0.4))" } as CSSProperties} dir="auto">Trusted By</p>
              </div>
              <div className="framer-1svlg26 items-start flex-none flex-row flex-nowrap content-start justify-center [opacity:0.8] [overflow:hidden]">
                <div className="ssr-variant">
                  <div className="framer-9eors1 aspect-square flex-none [overflow:visible]">
                    <div className="[border-radius:inherit] [corner-shape:inherit] [inset:0px]" style={{ position: "absolute" }}>
                      <img className="[border-radius:inherit] [corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%" }} decoding="auto" width="1418" height="1418" sizes="(min-width: 1200px) 48px, (max-width: 679.98px) 48px, (min-width: 680px) and (max-width: 1199.98px) 48px" srcSet="/site-assets/47141cd533a3906c.avif 512w, /site-assets/89edc81b742739d4.webp 1024w, /site-assets/3e86127cbfae5eee.avif 1418w" src="/site-assets/3e86127cbfae5eee.avif" alt="Trust badge logo" />
                    </div>
                  </div>
                </div>
                <div className="ssr-variant">
                  <div className="framer-izbab2 aspect-square flex-none [overflow:visible]">
                    <div className="[border-radius:inherit] [corner-shape:inherit] [inset:0px]" style={{ position: "absolute" }}>
                      <img className="[border-radius:inherit] [corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%" }} decoding="auto" width="1197" height="1197" sizes="(min-width: 1200px) 48px, (max-width: 679.98px) 48px, (min-width: 680px) and (max-width: 1199.98px) 48px" srcSet="/site-assets/8a6af12464dc689c.avif 512w, /site-assets/ca7eb8822381d702.png 1024w, /site-assets/2be8954f60e86e37.avif 1197w" src="/site-assets/2be8954f60e86e37.avif" alt="Trust badge logo" />
                    </div>
                  </div>
                </div>
                <div className="ssr-variant">
                  <div className="framer-1bd7h6a aspect-square flex-none [overflow:visible]">
                    <div className="[border-radius:inherit] [corner-shape:inherit] [inset:0px]" style={{ position: "absolute" }}>
                      <img className="[border-radius:inherit] [corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%" }} decoding="auto" width="1415" height="1415" sizes="(min-width: 1200px) 48px, (max-width: 679.98px) 48px, (min-width: 680px) and (max-width: 1199.98px) 48px" srcSet="/site-assets/e71056178738c14f.avif 512w, /site-assets/c6e94456e80c6085.webp 1024w, /site-assets/c3fc84c02217b695.avif 1415w" src="/site-assets/c3fc84c02217b695.avif" alt="Trust badge logo" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="framer-l9baby flex-none flex-row flex-wrap [overflow:visible]">
          <div className="framer-1d2j0te items-start [overflow:var(--overflow-clip-fallback,clip)] [@media(max-width:679.98px)]:[order:4] [@media(min-width:680px)_and_(max-width:1199.98px)]:[order:4]">
            <div className="framer-1ksjomn max-w-[335px] wrap-break-word [word-break:break-word]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
              <p className="framer-text framer-styles-preset-83kqm0" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--token-b3f9dcfd-cd1a-4c39-9e0e-26344979508f, rgba(0, 0, 0, 0.4))" } as CSSProperties} dir="auto">These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.</p>
            </div>
            <div className="framer-l9wm4o items-center place-content-center [overflow:var(--overflow-clip-fallback,clip)]">
              <div className="framer-1tyokc9 wrap-break-word [word-break:break-word]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-83kqm0" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--token-b3f9dcfd-cd1a-4c39-9e0e-26344979508f, rgba(0, 0, 0, 0.4))" } as CSSProperties} dir="auto">© Copyright 2026 OneThing. All rights reserved.</p>
              </div>
              <div className="ssr-variant">
                <div className="framer-15tmtrs wrap-break-word [word-break:break-word]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-83kqm0" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--token-b3f9dcfd-cd1a-4c39-9e0e-26344979508f, rgba(0, 0, 0, 0.4))" } as CSSProperties} dir="auto">
                    <a className="framer-text framer-styles-preset-1asoou7" href="https://x.com/adheebhameed" rel="noopener" target="_blank">Created by Adheeb</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="framer-18aj7pv items-start flex-none flex-col flex-nowrap content-start justify-center [overflow:visible] [@media(max-width:679.98px)]:[order:0] [@media(max-width:679.98px)]:[place-self:start] [@media(min-width:680px)_and_(max-width:1199.98px)]:[order:0] [@media(min-width:680px)_and_(max-width:1199.98px)]:[place-self:start]">
            <div className="framer-5gv7m4" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
              <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--token-b3f9dcfd-cd1a-4c39-9e0e-26344979508f, rgba(0, 0, 0, 0.4))" } as CSSProperties} dir="auto">Sections</p>
            </div>
            <div className="framer-oh1tn3 items-start flex-none flex-col flex-nowrap content-start justify-center [overflow:visible]">
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
          <div className="framer-4433bo items-start flex-none flex-col flex-nowrap content-start justify-center [overflow:visible] [@media(max-width:679.98px)]:[order:1] [@media(max-width:679.98px)]:[place-self:start] [@media(min-width:680px)_and_(max-width:1199.98px)]:[order:1] [@media(min-width:680px)_and_(max-width:1199.98px)]:[place-self:start]">
            <div className="framer-zocu8k" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
              <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--token-b3f9dcfd-cd1a-4c39-9e0e-26344979508f, rgba(0, 0, 0, 0.4))" } as CSSProperties} dir="auto">Product</p>
            </div>
            <div className="framer-1a74c07 items-start flex-none flex-col flex-nowrap content-start justify-center [overflow:visible]">
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
          <div className="framer-1gxmoxq items-start flex-none flex-col flex-nowrap content-start justify-center [overflow:visible] [@media(max-width:679.98px)]:[order:2] [@media(max-width:679.98px)]:[place-self:start] [@media(min-width:680px)_and_(max-width:1199.98px)]:[order:2] [@media(min-width:680px)_and_(max-width:1199.98px)]:[place-self:start]">
            <div className="framer-1vira13" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
              <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--token-b3f9dcfd-cd1a-4c39-9e0e-26344979508f, rgba(0, 0, 0, 0.4))" } as CSSProperties} dir="auto">Pages</p>
            </div>
            <div className="framer-ev3u25 items-start flex-none flex-col flex-nowrap content-start justify-center [overflow:visible]">
              <div className="framer-sl71az" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-wqeyn7" dir="auto">
                  <a className="framer-text framer-styles-preset-dnlggy" href="/">Homepage</a>
                </p>
              </div>
              <div className="framer-186vsw6" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-wqeyn7" dir="auto">
                  <a className="framer-text framer-styles-preset-dnlggy" data-framer-page-link-current="true" href="#">Policy Page</a>
                </p>
              </div>
              <div className="framer-116dz7s" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-wqeyn7" dir="auto">
                  <a className="framer-text framer-styles-preset-dnlggy" href="/404">404 Page</a>
                </p>
              </div>
            </div>
          </div>
          <div className="framer-7c7igx items-start flex-none flex-col flex-nowrap content-start justify-center [overflow:visible] [@media(max-width:679.98px)]:[order:3] [@media(max-width:679.98px)]:[place-self:start] [@media(min-width:680px)_and_(max-width:1199.98px)]:[order:3] [@media(min-width:680px)_and_(max-width:1199.98px)]:[place-self:start]">
            <div className="framer-186fpju" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
              <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--token-b3f9dcfd-cd1a-4c39-9e0e-26344979508f, rgba(0, 0, 0, 0.4))" } as CSSProperties} dir="auto">Policies</p>
            </div>
            <div className="framer-16puvvh items-start flex-none flex-col flex-nowrap content-start justify-center [overflow:visible]">
              <div className="framer-154pv5" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-wqeyn7" dir="auto">
                  <a className="framer-text framer-styles-preset-dnlggy" href="/privacy-policy">Privacy Policy</a>
                </p>
              </div>
              <div className="framer-11mvpet" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-wqeyn7" dir="auto">
                  <a className="framer-text framer-styles-preset-dnlggy" data-framer-page-link-current="true" href="#">Refund Policy</a>
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
      </div>
    </footer>
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
