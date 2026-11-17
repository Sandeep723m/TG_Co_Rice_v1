import type { CSSProperties, KeyboardEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/index.css?raw";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "OneThing - Daily Gummies" }] }),
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
          <div className="framer-CWw9Z framer-RzgxU framer-4SWp1 framer-oziYd framer-Jf64E framer-T8kHB framer-qhMV1 framer-FaBO9 framer-XAi7s framer-71N50 framer-2BTrO framer-a8wg0 framer-6aPAA framer-72rtr7 items-center flex-col flex-nowrap content-center justify-start [overflow:var(--overflow-clip-fallback,clip)] [min-height:100vh]" style={{ width: "auto", display: "contents" }}>
            <main className="framer-1nmhst2 items-center flex-none flex-col flex-nowrap content-center justify-start [overflow:var(--overflow-clip-fallback,clip)]">
              <ImportedDivContentStack />
              <div className="ssr-variant" data-site-import-desktop-variant="">
                <div className="framer-w7ue3b-container aspect-square flex-none [z-index:1] [opacity:1]" style={{ willChange: "transform" }}>
                  <ImportedDivDesktop />
                </div>
              </div>
              <div className="ssr-variant" style={{ "--site-import-responsive-display": "contents" } as CSSProperties} data-site-import-mobile-variant="">
                <div className="framer-w7ue3b-container aspect-square flex-none [z-index:1] [opacity:1]" style={{ willChange: "transform" }}>
                  <ImportedDivDesktop2 />
                </div>
              </div>
            </main>
            <ImportedSectionBenefitsSection />
            <ImportedSectionTimelineSection />
            <ImportedSectionFeaturedSection />
            <ImportedSectionAllInOneSection />
            <ImportedSectionFeaturesSection />
            <ImportedSectionIntroduceSection />
            <ImportedSectionBuySection />
            <ImportedSectionFAQSection />
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
          <ul className="list-none justify-start flex-row [opacity:1] items-center [max-height:100%] [max-width:100%] will-change-transform" style={{ display: "flex", position: "relative", padding: "0px", margin: "0px", gap: "40px", width: "100%", height: "100%", transform: "translateX(-111.45px)" }}>
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
          <nav className="framer-mV9bZ framer-Jf64E framer-opbmt framer-115fwyv" style={{ "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "0px", backdropFilter: "blur(5px)", background: "linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 100%)", width: "100%", boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px", opacity: "1", willChange: "auto" } as CSSProperties} data-border="true" data-site-import-scroll-header={"{\"desktop\":{\"added\":[\"framer-v-115fwyv\"],\"removed\":[\"framer-v-1sgftv0\"],\"threshold\":648},\"mobile\":{\"added\":[\"framer-v-a3dwaf\"],\"removed\":[\"framer-v-1lacu8\"],\"threshold\":633}}"}>
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
                <a className="framer-6dH45 framer-FaBO9 framer-Jf64E framer-7z2klu framer-v-1a2u647 framer-wcun84" style={{ backdropFilter: "none", backgroundColor: "var(--token-a5917666-de48-475a-8244-858af9f157b1, rgb(0, 0, 0))", borderRadius: "99px", opacity: "1" } as CSSProperties} data-framer-page-link-current="true" href="/">
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
          <ul className="list-none justify-start flex-row [opacity:1] items-center [max-height:100%] [max-width:100%] will-change-transform" style={{ display: "flex", position: "relative", padding: "0px", margin: "0px", gap: "40px", width: "100%", height: "100%", transform: "translateX(-651.265px)" }}>
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
          <nav className="framer-mV9bZ framer-Jf64E framer-opbmt framer-115fwyv framer-v-1lacu8" style={{ "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "0px", backdropFilter: "blur(5px)", background: "linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 100%)", width: "100%", boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px", opacity: "1", willChange: "auto" } as CSSProperties} data-border="true" data-site-import-scroll-header={"{\"desktop\":{\"added\":[\"framer-v-115fwyv\"],\"removed\":[\"framer-v-1sgftv0\"],\"threshold\":648},\"mobile\":{\"added\":[\"framer-v-a3dwaf\"],\"removed\":[\"framer-v-1lacu8\"],\"threshold\":633}}"}>
            <div className="framer-1uparzb" style={{ opacity: "1" }}>
              <div className="framer-5m92od" style={{ opacity: "1" }}>
                <div className="framer-10nqhn5" style={{ opacity: "1" }}>
                  <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", inset: "0px" } as CSSProperties}>
                    <img style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center center", objectFit: "cover" } as CSSProperties} decoding="auto" width="2219" height="638" sizes="(min-width: 1200px) max(86.9514px, 118.2539px), (max-width: 679.98px) max(86.9514px, 118.2539px), (min-width: 680px) and (max-width: 1199.98px) max(86.9514px, 118.2539px)" srcSet="/site-assets/ffa5660189cfaef9.avif 512w, /site-assets/6eb85bf3f09b72fa.webp 1024w, /site-assets/81342bc92387350b.png 2048w, /site-assets/cccfbd665bf7358c.webp 2219w" src="/site-assets/cccfbd665bf7358c.webp" alt="" />
                  </div>
                </div>
              </div>
              <div className="framer-ujfetw-container" style={{ opacity: "1" }}>
                <a className="framer-6dH45 framer-FaBO9 framer-Jf64E framer-7z2klu framer-v-1a2u647 framer-wcun84" style={{ backdropFilter: "none", backgroundColor: "var(--token-a5917666-de48-475a-8244-858af9f157b1, rgb(0, 0, 0))", borderRadius: "99px", opacity: "1" } as CSSProperties} data-framer-page-link-current="true" href="/">
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

function ImportedDivContentStack() {
  return (
    <div className="framer-6yab4 items-center flex-none flex-col flex-nowrap place-content-center [overflow:visible] [z-index:2]" id="title">
      <div className="framer-v2n02v items-center flex-none flex-col flex-nowrap place-content-center [overflow:visible]">
        <div className="framer-1jdyhh2 max-w-[656px] [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
          <h1 className="framer-text framer-styles-preset-8hagcl" dir="auto"><span className="will-change-transform" style={{ display: "inline-block" }}>Your</span> <span className="will-change-transform" style={{ display: "inline-block" }}>Supplement</span> <span className="will-change-transform" style={{ display: "inline-block" }}>Shelf,</span> <span className="will-change-transform" style={{ display: "inline-block" }}>Simplified</span></h1>
        </div>
        <div className="framer-sd4ed3 max-w-[455px] wrap-break-word [word-break:break-word] [opacity:1]" style={{ transform: "none", willChange: "transform" }} data-framer-component-type="RichTextContainer">
          <p className="framer-text framer-styles-preset-6u41qq" style={{ "--framer-text-alignment": "center" } as CSSProperties} dir="auto">One single gummy in the morning that handles immunity, digestion, sleep, energy and vitality</p>
        </div>
      </div>
      <div className="framer-1e0rywx-container flex-none [opacity:1]" style={{ transform: "none", willChange: "transform" }}>
        <a className="framer-6dH45 framer-FaBO9 framer-Jf64E framer-7z2klu framer-wcun84 [backdrop-filter:none] [opacity:1]" style={{ backgroundColor: "var(--token-a5917666-de48-475a-8244-858af9f157b1, rgb(0, 0, 0))", borderRadius: "99px" }} href="/#buy-product">
          <div className="framer-x7c3yg [opacity:1]" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
            <p className="framer-text framer-styles-preset-sqgpjx" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">Get Supplement</p>
          </div>
        </a>
      </div>
    </div>
  );
}

function ImportedDivDesktop() {
  return (
    <div className="framer-jAeYy framer-hz6668 [overflow:visible] [opacity:1]" style={{ height: "100%", width: "100%" }}>
      <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
        <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="4096" height="4096" sizes="1100px" srcSet="/site-assets/c0bb516676d07043.webp 512w, /site-assets/d1e862df2776c8bb.avif 1024w, /site-assets/0fd8b04348c248b2.avif 2048w, /site-assets/8ddb7fbaad402fa3.avif 4096w" src="/site-assets/8ddb7fbaad402fa3.avif" alt="" />
      </div>
      <div className="framer-d1too9 aspect-square flex-none right-[85px] [overflow:visible] [z-index:8] [filter:blur(5px)] will-change-transform [opacity:1] oi-float" style={{ transform: "translateY(-50%) rotate(-59deg)" }}>
        <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
          <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="2921" height="2921" sizes="83px" srcSet="/site-assets/2b505afd9b61f6ef.avif 512w, /site-assets/1bffb004a1c8c76a.avif 1024w, /site-assets/78c1116f1df875a5.avif 2048w, /site-assets/07d47ede94a12452.avif 2921w" src="/site-assets/07d47ede94a12452.avif" alt="" />
        </div>
      </div>
      <div className="framer-1twa8cg aspect-square flex-none right-[43px] [overflow:visible] [z-index:8] [filter:blur(5px)] will-change-transform [opacity:1] oi-float" style={{ transform: "rotate(53deg)" }}>
        <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
          <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="2921" height="2921" sizes="150px" srcSet="/site-assets/2b505afd9b61f6ef.avif 512w, /site-assets/1bffb004a1c8c76a.avif 1024w, /site-assets/78c1116f1df875a5.avif 2048w, /site-assets/07d47ede94a12452.avif 2921w" src="/site-assets/07d47ede94a12452.avif" alt="" />
        </div>
      </div>
      <div className="framer-lt83ag aspect-square flex-none right-[286px] [overflow:visible] [z-index:8] will-change-transform [opacity:1] oi-float" style={{ transform: "translateY(-50%) rotate(-32deg)" }}>
        <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
          <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="2921" height="2921" sizes="136px" srcSet="/site-assets/2b505afd9b61f6ef.avif 512w, /site-assets/1bffb004a1c8c76a.avif 1024w, /site-assets/78c1116f1df875a5.avif 2048w, /site-assets/07d47ede94a12452.avif 2921w" src="/site-assets/07d47ede94a12452.avif" alt="" />
        </div>
      </div>
      <div className="framer-86ela9 aspect-square flex-none right-[235px] [overflow:visible] [z-index:8] will-change-transform [opacity:1] oi-float" style={{ transform: "rotate(145deg)" }}>
        <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
          <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="2921" height="2921" sizes="180px" srcSet="/site-assets/2b505afd9b61f6ef.avif 512w, /site-assets/1bffb004a1c8c76a.avif 1024w, /site-assets/78c1116f1df875a5.avif 2048w, /site-assets/07d47ede94a12452.avif 2921w" src="/site-assets/07d47ede94a12452.avif" alt="" />
        </div>
      </div>
      <div className="framer-1xujcsz aspect-square flex-none [overflow:visible] [z-index:8] will-change-transform [opacity:1] oi-float" style={{ transform: "rotate(285deg)" }}>
        <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
          <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="2921" height="2921" sizes="167px" srcSet="/site-assets/2b505afd9b61f6ef.avif 512w, /site-assets/1bffb004a1c8c76a.avif 1024w, /site-assets/78c1116f1df875a5.avif 2048w, /site-assets/07d47ede94a12452.avif 2921w" src="/site-assets/07d47ede94a12452.avif" alt="" />
        </div>
      </div>
      <div className="framer-1uue3vh aspect-square flex-none [overflow:visible] [z-index:8] [filter:blur(3px)] will-change-transform [opacity:1] oi-float" style={{ transform: "translateY(-50%) rotate(-40deg)" }}>
        <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
          <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="2921" height="2921" sizes="250px" srcSet="/site-assets/2b505afd9b61f6ef.avif 512w, /site-assets/1bffb004a1c8c76a.avif 1024w, /site-assets/78c1116f1df875a5.avif 2048w, /site-assets/07d47ede94a12452.avif 2921w" src="/site-assets/07d47ede94a12452.avif" alt="" />
        </div>
      </div>
      <div className="framer-1i2u684 aspect-square flex-none [overflow:visible] [z-index:0] [filter:blur(3px)] will-change-transform [opacity:1] oi-float" style={{ transform: "rotate(47deg)" }}>
        <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
          <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="2921" height="2921" sizes="219px" srcSet="/site-assets/2b505afd9b61f6ef.avif 512w, /site-assets/1bffb004a1c8c76a.avif 1024w, /site-assets/78c1116f1df875a5.avif 2048w, /site-assets/07d47ede94a12452.avif 2921w" src="/site-assets/07d47ede94a12452.avif" alt="" />
        </div>
      </div>
    </div>
  );
}

function ImportedDivDesktop2() {
  return (
    <div className="framer-jAeYy framer-hz6668 framer-v-1g7gamr [overflow:visible] [opacity:1]" style={{ height: "100%", width: "100%" }}>
      <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
        <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="4096" height="4096" sizes="1100px" srcSet="/site-assets/c0bb516676d07043.webp 512w, /site-assets/d1e862df2776c8bb.avif 1024w, /site-assets/0fd8b04348c248b2.avif 2048w, /site-assets/8ddb7fbaad402fa3.avif 4096w" src="/site-assets/8ddb7fbaad402fa3.avif" alt="" />
      </div>
      <div className="framer-d1too9 aspect-square flex-none right-[85px] [overflow:visible] [z-index:8] [filter:blur(5px)] will-change-transform [opacity:1] oi-float" style={{ transform: "rotate(-37deg)" }}>
        <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
          <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="2921" height="2921" sizes="83px" srcSet="/site-assets/2b505afd9b61f6ef.avif 512w, /site-assets/1bffb004a1c8c76a.avif 1024w, /site-assets/78c1116f1df875a5.avif 2048w, /site-assets/07d47ede94a12452.avif 2921w" src="/site-assets/07d47ede94a12452.avif" alt="" />
        </div>
      </div>
      <div className="framer-lt83ag aspect-square flex-none right-[286px] [overflow:visible] [z-index:8] will-change-transform [opacity:1] oi-float" style={{ transform: "rotate(-25deg)" }}>
        <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
          <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="2921" height="2921" sizes="136px" srcSet="/site-assets/2b505afd9b61f6ef.avif 512w, /site-assets/1bffb004a1c8c76a.avif 1024w, /site-assets/78c1116f1df875a5.avif 2048w, /site-assets/07d47ede94a12452.avif 2921w" src="/site-assets/07d47ede94a12452.avif" alt="" />
        </div>
      </div>
      <div className="framer-86ela9 aspect-square flex-none right-[235px] [overflow:visible] [z-index:8] will-change-transform [opacity:1] oi-float" style={{ transform: "rotate(145deg)" }}>
        <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
          <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="2921" height="2921" sizes="180px" srcSet="/site-assets/2b505afd9b61f6ef.avif 512w, /site-assets/1bffb004a1c8c76a.avif 1024w, /site-assets/78c1116f1df875a5.avif 2048w, /site-assets/07d47ede94a12452.avif 2921w" src="/site-assets/07d47ede94a12452.avif" alt="" />
        </div>
      </div>
      <div className="framer-1xujcsz aspect-square flex-none [overflow:visible] [z-index:8] will-change-transform [opacity:1] oi-float" style={{ transform: "rotate(240deg)" }}>
        <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
          <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="2921" height="2921" sizes="167px" srcSet="/site-assets/2b505afd9b61f6ef.avif 512w, /site-assets/1bffb004a1c8c76a.avif 1024w, /site-assets/78c1116f1df875a5.avif 2048w, /site-assets/07d47ede94a12452.avif 2921w" src="/site-assets/07d47ede94a12452.avif" alt="" />
        </div>
      </div>
      <div className="framer-1i2u684 aspect-square flex-none [overflow:visible] [z-index:0] [filter:blur(3px)] will-change-transform [opacity:1] oi-float" style={{ transform: "rotate(47deg)" }}>
        <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
          <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="2921" height="2921" sizes="219px" srcSet="/site-assets/2b505afd9b61f6ef.avif 512w, /site-assets/1bffb004a1c8c76a.avif 1024w, /site-assets/78c1116f1df875a5.avif 2048w, /site-assets/07d47ede94a12452.avif 2921w" src="/site-assets/07d47ede94a12452.avif" alt="" />
        </div>
      </div>
    </div>
  );
}

function ImportedSectionBenefitsSection() {
  return (
    <section className="framer-11iqdm2 items-center flex-none flex-col flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [scroll-margin-top:60px]" id="benefits">
      <div className="framer-dkx6y3 max-w-[1200px] [overflow:var(--overflow-clip-fallback,clip)]">
        <div className="framer-uf8swf max-w-[498px] [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
          <h2 className="framer-text framer-styles-preset-1r1gjyr" style={{ "--framer-text-alignment": "left" } as CSSProperties} dir="auto">One supplement, five ways it works for you</h2>
        </div>
        <div className="framer-iy7d8p-container flex-none">
          <a className="framer-6dH45 framer-FaBO9 framer-Jf64E framer-7z2klu framer-wcun84 [backdrop-filter:none] [opacity:1]" style={{ backgroundColor: "var(--token-a5917666-de48-475a-8244-858af9f157b1, rgb(0, 0, 0))", borderRadius: "99px" }} data-framer-page-link-current="true" href="/">
            <div className="framer-x7c3yg [opacity:1]" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
              <p className="framer-text framer-styles-preset-sqgpjx" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">Get Supplement</p>
            </div>
          </a>
        </div>
      </div>
      <div className="framer-1mvdp1s items-center flex-none flex-row flex-nowrap content-center justify-start [overflow:visible] select-none [touch-action:pan-y]" style={{ display: "flex", position: "relative" }} id="test" draggable="false">
        <ul className="list-none justify-start flex-row [opacity:1] items-center [max-height:100%] [max-width:100%]" style={{ display: "flex", position: "relative", padding: "0px", margin: "0px", gap: "24px", width: "100%", height: "100%", transform: "translateX(-293.878px)" }}>
          <li className="[flex-grow:0] [flex-shrink:0]" style={{ position: "relative", height: "fit-content", width: "fit-content", transform: "translateX(1220px)" }} aria-hidden="false" aria-posinset={1} aria-setsize={5}>
            <div className="framer-130c739-container flex-none">
              <div className="framer-p3k4s framer-FaBO9 framer-qhMV1 framer-1hrjdua items-start flex-col flex-nowrap content-start justify-center [overflow:visible] [opacity:1]" style={{ width: "100%" }}>
                <div className="framer-wffgw6 aspect-[0.8/1] flex-none [overflow:visible] [opacity:1]" style={{ borderRadius: "15px" }}>
                  <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                    <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="3712" height="4608" sizes="(min-width: 1200px) 220px, (min-width: 680px) and (max-width: 1199.98px) 220px, (max-width: 679.98px) 220px" srcSet="/site-assets/3b5800854ed7d1e7.avif 824w, /site-assets/5cc0137625cfe352.webp 1649w, /site-assets/ac3a528f4c83a23c.webp 3299w, /site-assets/ac3a528f4c83a23c.webp 3712w" src="/site-assets/ac3a528f4c83a23c.webp" alt="Woman streching" />
                  </div>
                </div>
                <div className="framer-r7o4di items-start flex-none flex-col flex-nowrap content-start justify-center select-none [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                  <div className="framer-aszvkf select-none [z-index:2] [opacity:1]" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-sqgpjx" dir="auto">Energy</p>
                  </div>
                  <div className="framer-128hqs1 select-none [z-index:2] [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7)))" } as CSSProperties} dir="auto">Sustained focus all day</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="[flex-grow:0] [flex-shrink:0]" style={{ position: "relative", height: "fit-content", width: "fit-content", transform: "none" }} aria-hidden="false" aria-posinset={2} aria-setsize={5}>
            <div className="framer-q3p4m4-container flex-none select-none">
              <div className="framer-p3k4s framer-FaBO9 framer-qhMV1 framer-1hrjdua items-start flex-col flex-nowrap content-start justify-center [overflow:visible] [opacity:1]" style={{ width: "100%" }}>
                <div className="framer-wffgw6 aspect-[0.8/1] flex-none [overflow:visible] [opacity:1]" style={{ borderRadius: "15px" }}>
                  <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                    <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="4096" height="4096" sizes="(min-width: 1200px) 220px, (min-width: 680px) and (max-width: 1199.98px) 220px, (max-width: 679.98px) 220px" srcSet="/site-assets/ea04489170a01014.avif 512w, /site-assets/befd98ff13284d42.avif 1024w, /site-assets/8882d2204adb9c1f.webp 2048w, /site-assets/39c87533d2f502d4.webp 4096w" src="/site-assets/39c87533d2f502d4.webp" alt="People enjoying time together" />
                  </div>
                </div>
                <div className="framer-r7o4di items-start flex-none flex-col flex-nowrap content-start justify-center select-none [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                  <div className="framer-aszvkf select-none [z-index:2] [opacity:1]" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-sqgpjx" dir="auto">Immunity</p>
                  </div>
                  <div className="framer-128hqs1 select-none [z-index:2] [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7)))" } as CSSProperties} dir="auto">Fights colds before they start</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="[flex-grow:0] [flex-shrink:0]" style={{ position: "relative", height: "fit-content", width: "fit-content", transform: "none" }} aria-hidden="false" aria-posinset={3} aria-setsize={5}>
            <div className="framer-1r33018-container flex-none">
              <div className="framer-p3k4s framer-FaBO9 framer-qhMV1 framer-1hrjdua items-start flex-col flex-nowrap content-start justify-center [overflow:visible] [opacity:1]" style={{ width: "100%" }}>
                <div className="framer-wffgw6 aspect-[0.8/1] flex-none [overflow:visible] [opacity:1]" style={{ borderRadius: "15px" }}>
                  <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                    <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="4096" height="4096" sizes="(min-width: 1200px) 220px, (min-width: 680px) and (max-width: 1199.98px) 220px, (max-width: 679.98px) 220px" srcSet="/site-assets/0a0a27240b443282.avif 512w, /site-assets/6a26f420840c1743.avif 1024w, /site-assets/c1e96a8bf9438533.webp 2048w, /site-assets/56fa7b6a2746b255.webp 4096w" src="/site-assets/56fa7b6a2746b255.webp" alt="A person holding hand towards the stomach" />
                  </div>
                </div>
                <div className="framer-r7o4di items-start flex-none flex-col flex-nowrap content-start justify-center select-none [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                  <div className="framer-aszvkf select-none [z-index:2] [opacity:1]" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-sqgpjx" dir="auto">Digestion</p>
                  </div>
                  <div className="framer-128hqs1 select-none [z-index:2] [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7)))" } as CSSProperties} dir="auto">Reduces bloating and gas</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="[flex-grow:0] [flex-shrink:0]" style={{ position: "relative", height: "fit-content", width: "fit-content", transform: "none" }} aria-hidden="false" aria-posinset={4} aria-setsize={5}>
            <div className="framer-1nnres9-container flex-none">
              <div className="framer-p3k4s framer-FaBO9 framer-qhMV1 framer-1hrjdua items-start flex-col flex-nowrap content-start justify-center [overflow:visible] [opacity:1]" style={{ width: "100%" }}>
                <div className="framer-wffgw6 aspect-[0.8/1] flex-none [overflow:visible] [opacity:1]" style={{ borderRadius: "15px" }}>
                  <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                    <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="4096" height="4096" sizes="(min-width: 1200px) 220px, (min-width: 680px) and (max-width: 1199.98px) 220px, (max-width: 679.98px) 220px" srcSet="/site-assets/68bea22161521fbc.avif 512w, /site-assets/09a9650aa717110c.avif 1024w, /site-assets/ed6dcd8ac74fb80f.webp 2048w, /site-assets/281ea81488019b90.webp 4096w" src="/site-assets/281ea81488019b90.webp" alt="Woman smiling with a bottle in hand" />
                  </div>
                </div>
                <div className="framer-r7o4di items-start flex-none flex-col flex-nowrap content-start justify-center select-none [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                  <div className="framer-aszvkf select-none [z-index:2] [opacity:1]" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-sqgpjx" dir="auto">Vitality</p>
                  </div>
                  <div className="framer-128hqs1 select-none [z-index:2] [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7)))" } as CSSProperties} dir="auto">Age slower, glow more</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="[flex-grow:0] [flex-shrink:0]" style={{ position: "relative", height: "fit-content", width: "fit-content", transform: "none" }} aria-hidden="false" aria-posinset={5} aria-setsize={5}>
            <div className="framer-1smj48p-container flex-none">
              <div className="framer-p3k4s framer-FaBO9 framer-qhMV1 framer-1hrjdua items-start flex-col flex-nowrap content-start justify-center [overflow:visible] [opacity:1]" style={{ width: "100%" }}>
                <div className="framer-wffgw6 aspect-[0.8/1] flex-none [overflow:visible] [opacity:1]" style={{ borderRadius: "15px" }}>
                  <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                    <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="1072" height="1467" sizes="(min-width: 1200px) 220px, (min-width: 680px) and (max-width: 1199.98px) 220px, (max-width: 679.98px) 220px" srcSet="/site-assets/aa2564f58eadc961.avif 748w, /site-assets/2a380ff100918f23.webp 1072w" src="/site-assets/2a380ff100918f23.webp" alt="woman sleeping peacefully" />
                  </div>
                </div>
                <div className="framer-r7o4di items-start flex-none flex-col flex-nowrap content-start justify-center select-none [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                  <div className="framer-aszvkf select-none [z-index:2] [opacity:1]" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-sqgpjx" dir="auto">Sleep </p>
                  </div>
                  <div className="framer-128hqs1 select-none [z-index:2] [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7)))" } as CSSProperties} dir="auto">Deeper sleep, faster recovery</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

function ImportedSectionTimelineSection() {
  return (
    <section className="framer-vc60rx items-start content-start justify-center [overflow:var(--overflow-clip-fallback,clip)] [scroll-margin-top:60px]" id="effects-timeline">
      <div className="framer-1f6t18j items-center max-w-[1200px] place-content-center [overflow:visible]">
        <div className="framer-itfamb items-center place-content-center [overflow:visible]">
          <div className="framer-11j4rjb [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
            <h2 className="framer-text framer-styles-preset-1r1gjyr" style={{ "--framer-text-alignment": "left" } as CSSProperties} dir="auto">What happens after you start with OneThing?</h2>
          </div>
          <div className="framer-1lu14r1 items-center flex-none flex-row flex-nowrap max-w-[500px] min-h-[366px] place-content-center [overflow:visible]">
            <div className="ssr-variant">
              <div className="framer-ontxra aspect-square flex-none [overflow:visible] will-change-transform [opacity:1]" style={{ transform: "none" }}>
                <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                  <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="3712" height="4608" sizes="300px" srcSet="/site-assets/1a397b7d0f239ee1.avif 824w, /site-assets/b987771c43b98dba.avif 1649w, /site-assets/3cc6c818f85adfee.avif 3299w, /site-assets/6fffde9e9f41bb02.avif 3712w" src="/site-assets/6fffde9e9f41bb02.avif" alt="Woman holding a supplement container" />
                </div>
                <div className="framer-rc0z1c-container aspect-square flex-none [z-index:1]" style={{ transform: "rotate(-1deg)" }}>
                  <div className="items-center justify-center [overflow:hidden]" style={{ height: "100%", width: "100%", position: "relative", display: "flex", backgroundColor: "var(--token-e46bed0c-483b-4e60-ad0a-7b7b62606c6e, rgb(1, 90, 253))", borderRadius: "50%" }}>
                    <img className="[top:0px] [left:0px]" style={{ position: "absolute", width: "100%", height: "100%" }} width="300" height="300" src="data:image/png;base64,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" data-site-import-static-fallback="canvas" alt="" />
                    <div className="items-center justify-center [z-index:1]" style={{ position: "relative", width: "50px", height: "50px", display: "flex" }}>
                      <img className="object-contain" style={{ width: "100%", height: "100%" }} src="/site-assets/027cd1f10a8b336d.avif" alt="Logo" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ssr-variant">
              <div className="framer-1tksyyx aspect-square flex-none [bottom:0px] [overflow:var(--overflow-clip-fallback,clip)] [right:0px] [z-index:1] [opacity:1]" style={{ willChange: "transform", transform: "none" }}>
                <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                  <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="1254" height="1254" sizes="241px" srcSet="/site-assets/7ccb4ec862602e1f.avif 512w, /site-assets/7ec588420ed931aa.webp 1024w, /site-assets/7ec588420ed931aa.webp 1254w" src="/site-assets/7ec588420ed931aa.webp" alt="Woman Smiling" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="framer-n9yqf8 items-center place-content-center [overflow:visible]">
          <div className="framer-13zy5uu items-center self-stretch flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)]">
            <div className="framer-2m7pfm flex-none [overflow:hidden] [will-change:var(--framer-will-change-override,transform)]">
              <div className="framer-1szvl9b flex-none [overflow:hidden] [right:0px] [visibility:initial] [opacity:1]" style={{ willChange: "transform", transform: "translateY(-1655px)" }} />
            </div>
          </div>
          <div className="framer-vytk4 items-center flex-[1_0_0px] flex-col flex-nowrap place-content-center [overflow:visible]">
            <div className="framer-11rqlki items-start flex-none flex-col flex-nowrap max-w-[500px] content-start justify-center [overflow:var(--overflow-clip-fallback,clip)] will-change-transform [opacity:1]" style={{ transform: "none" }}>
              <div className="framer-go1tw items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)]">
                <div className="framer-rnpktu" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--token-a4a59c3d-74c9-4b4f-8436-40db24906b27, rgb(0, 139, 252))" } as CSSProperties} dir="auto">Week 1</p>
                </div>
              </div>
              <div className="framer-vnm1cz items-center flex-none flex-col flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)]">
                <div className="framer-11ln0ht [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                  <h5 className="framer-text framer-styles-preset-1wglooe" dir="auto">Your body adjusts</h5>
                </div>
                <div className="framer-1ffk76b [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-alignment": "left" } as CSSProperties} dir="auto">You won't feel a revolution. Just a slightly better night's sleep, a calmer stomach, a morning that feels a little less heavy.</p>
                </div>
              </div>
            </div>
            <div className="framer-2ceimn items-start flex-none flex-col flex-nowrap max-w-[500px] content-start justify-center [overflow:var(--overflow-clip-fallback,clip)] will-change-transform [opacity:1]" style={{ transform: "none" }}>
              <div className="framer-z2bdxt items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)]">
                <div className="framer-j2p0ry" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--token-a4a59c3d-74c9-4b4f-8436-40db24906b27, rgb(0, 139, 252))" } as CSSProperties} dir="auto">Week 4</p>
                </div>
              </div>
              <div className="framer-12ud1d9 [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                <h5 className="framer-text framer-styles-preset-1wglooe" dir="auto">You start noticing</h5>
              </div>
              <div className="framer-uci7s0 [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-alignment": "left" } as CSSProperties} dir="auto">It's not one thing you can point to. It's everything at once, more patience, more focus, fewer bad days. Something shifted.</p>
              </div>
            </div>
            <div className="framer-9x75jg items-start flex-none flex-col flex-nowrap max-w-[500px] content-start justify-center [overflow:var(--overflow-clip-fallback,clip)] will-change-transform [opacity:1]" style={{ transform: "none" }}>
              <div className="framer-3ooxhw items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)]">
                <div className="framer-1fbwfha" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--token-a4a59c3d-74c9-4b4f-8436-40db24906b27, rgb(0, 139, 252))" } as CSSProperties} dir="auto">Week 8</p>
                </div>
              </div>
              <div className="framer-1d4b02u [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                <h5 className="framer-text framer-styles-preset-1wglooe" dir="auto">The new normal</h5>
              </div>
              <div className="framer-1ip9n0a [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-alignment": "left" } as CSSProperties} dir="auto">Everything compounds. Immunity is stronger, sleep is deeper, energy lasts the full day. One gummy, 30 seconds, no thinking. This is just how you feel now and sets a new normal.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionFeaturedSection() {
  return (
    <section className="framer-v1dh3e items-center flex-none flex-col flex-nowrap place-content-center [overflow:visible] [scroll-margin-top:60px]" id="featured">
      <div className="framer-1lhd1o9 items-center flex-none flex-col flex-nowrap place-content-center [overflow:visible]">
        <div className="framer-17eofyk max-w-[498px] [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
          <h2 className="framer-text framer-styles-preset-1r1gjyr" style={{ "--framer-text-alignment": "center" } as CSSProperties} dir="auto">Magazines we've been featured in</h2>
        </div>
        <div className="framer-jfluk4 items-center flex-none flex-row flex-nowrap place-content-center [overflow:visible] will-change-transform [opacity:1]" style={{ transform: "none" }}>
          <div className="framer-p63ssa items-center flex-[1_0_0px] flex-row flex-nowrap content-center justify-start [mask:linear-gradient(270deg,rgb(0,0,0)_0%,rgba(0,0,0,0)_41%,rgba(0,0,0,0)_58%,rgb(0,0,0)_100%)] [overflow:visible] select-none [touch-action:pan-y]" style={{ display: "flex", position: "relative" }} draggable="false">
            <ul className="list-none justify-start flex-row [opacity:1] items-center [max-height:100%] [max-width:100%]" style={{ display: "flex", position: "relative", padding: "0px", margin: "0px", gap: "50px", width: "100%", height: "100%", transform: "translateX(-233.878px)" }}>
              <li className="[flex-grow:0] [flex-shrink:0]" style={{ position: "relative", height: "fit-content", width: "fit-content", transform: "translateX(744px)" }} aria-hidden="false" aria-posinset={1} aria-setsize={4}>
                <div className="ssr-variant">
                  <div className="framer-1x1jy75 flex-none select-none [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-filter-override,filter)]" draggable="false">
                    <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                      <img className="[corner-shape:inherit] [object-position:center_center] object-contain" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="3056" height="444" sizes="205.2831px" srcSet="/site-assets/34a5751524cb1b59.avif 512w, /site-assets/b7163b06016a57a4.webp 1024w, /site-assets/1c84bce6ab48cfbd.webp 2048w, /site-assets/4b373b3bbcb7c9a8.webp 3056w" src="/site-assets/4b373b3bbcb7c9a8.webp" alt="Logo" draggable="false" />
                    </div>
                  </div>
                </div>
              </li>
              <li className="[flex-grow:0] [flex-shrink:0]" style={{ position: "relative", height: "fit-content", width: "fit-content", transform: "none" }} aria-hidden="false" aria-posinset={2} aria-setsize={4}>
                <div className="ssr-variant">
                  <div className="framer-1lv3wb6 flex-none select-none [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-filter-override,filter)]" draggable="false">
                    <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                      <img className="[corner-shape:inherit] [object-position:center_center] object-contain" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="1796" height="444" sizes="184.0151px" srcSet="/site-assets/50253c4bd8dc4c98.avif 512w, /site-assets/c724e4c1d72f5446.avif 1024w, /site-assets/daa645aeedc8ef71.avif 1796w" src="/site-assets/daa645aeedc8ef71.avif" alt="Logo" draggable="false" />
                    </div>
                  </div>
                </div>
              </li>
              <li className="[flex-grow:0] [flex-shrink:0]" style={{ position: "relative", height: "fit-content", width: "fit-content", transform: "none" }} aria-hidden="false" aria-posinset={3} aria-setsize={4}>
                <div className="ssr-variant">
                  <div className="framer-6vu2jo flex-none select-none [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-filter-override,filter)]" draggable="false">
                    <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                      <img className="[corner-shape:inherit] [object-position:center_center] object-contain" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="2120" height="446" sizes="239.497px" srcSet="/site-assets/b7a4d0dea54b245d.avif 512w, /site-assets/885b91cca5753e36.avif 1024w, /site-assets/b55a8ec6c5c85314.webp 2048w, /site-assets/3b399d9e4c41d8b0.webp 2120w" src="/site-assets/3b399d9e4c41d8b0.webp" alt="Logo" draggable="false" />
                    </div>
                  </div>
                </div>
              </li>
              <li className="[flex-grow:0] [flex-shrink:0]" style={{ position: "relative", height: "fit-content", width: "fit-content", transform: "none" }} aria-hidden="false" aria-posinset={4} aria-setsize={4}>
                <div className="ssr-variant">
                  <div className="framer-4zsxmq flex-none select-none [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-filter-override,filter)]" draggable="false">
                    <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                      <img className="[corner-shape:inherit] [object-position:center_center] object-contain" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="1336" height="444" sizes="153.5px" srcSet="/site-assets/145a2b4fc8857d1b.avif 512w, /site-assets/c2435016c697744f.webp 1024w, /site-assets/0f10f8fdb1f8e0dd.avif 1336w" src="/site-assets/0f10f8fdb1f8e0dd.avif" alt="Logo" draggable="false" />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="ssr-variant">
            <div className="framer-hs2c7x flex-none [overflow:visible] [z-index:1] will-change-transform [opacity:1]" style={{ transform: "none" }}>
              <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="234" height="284" src="/site-assets/d0feae3468e61918.avif" alt="Logo" />
              </div>
            </div>
          </div>
        </div>
        <div className="framer-5m9ix2 items-center flex-none flex-col flex-nowrap place-content-center [overflow:visible]">
          <div className="ssr-variant">
            <div className="framer-lzivtl-container flex-none [opacity:1]" style={{ willChange: "transform", transform: "none" }}>
              <a className="framer-trzQi framer-FaBO9 framer-qhMV1 framer-udbtyz framer-v-wuyut1 framer-128y9cq items-center flex-row! flex-col flex-nowrap place-content-center [overflow:visible] [padding:8px_15px_8px_8px] [backdrop-filter:blur(5px)] [opacity:1]" style={{ "--border-bottom-width": "1px", "--border-color": "var(--token-8bbbea30-76c9-4ba6-997e-07eab0911b28, rgb(255, 255, 255))", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "var(--token-7dec4550-2ba6-4025-bfd1-f0cbf4c0a7c9, rgb(247, 247, 247))", width: "100%", borderRadius: "18px" } as CSSProperties} data-border="true" data-framer-page-link-current="true" href="/">
                <div className="framer-12ym6a6 items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]" style={{ backgroundColor: "var(--token-136beebb-89fe-4d20-a894-e7f11788a217, rgb(255, 255, 255))", borderRadius: "15px" }}>
                  <div className="framer-k82luq aspect-square flex-none [overflow:visible] [filter:drop-shadow(rgba(0,_0,_0,_0.15)_0px_5px_3px)] [opacity:1]">
                    <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                      <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="8000" height="8000" sizes="(min-width: 1200px) max(50px, calc(max((min(100vw - 120px, 1200px) - 60px) / 2, 1px) - 100px)), (min-width: 680px) and (max-width: 1199.98px) max(50px, calc(min(100vw - 80px, 1200px) - 100px)), (max-width: 679.98px) max(50px, calc(min(100vw - 50px, 1200px) - 100px))" srcSet="/site-assets/d3f19ecc7e04313e.avif 512w, /site-assets/119c2221c7b0d4b7.avif 1024w, /site-assets/6ce9177316b622fa.avif 2048w, /site-assets/64096d728d2ab117.avif 4096w" alt="" />
                    </div>
                  </div>
                </div>
                <div className="framer-o187ju content-center! items-center flex-[1_0_0px] flex-row flex-nowrap content-end justify-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
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
          <div className="framer-b6y478 max-w-[416px] [z-index:2] will-change-transform [opacity:1]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
            <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))" } as CSSProperties} dir="auto">Praised across top-tier magazines for its simplicity and effectiveness. One daily citrus gummy that’s quickly becoming the new standard in the daily nutrition world.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionAllInOneSection() {
  const [gummyRef, gummyShown] = useInView<HTMLDivElement>();
  return (
    <section className="framer-m7hdsg items-center flex-none flex-col flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [padding:0px]">
      <div className="framer-1n4qav4 items-center flex-none flex-col flex-nowrap min-h-[815px] content-center justify-start [overflow:var(--overflow-clip-fallback,clip)]">
        <div className="framer-17nl3ox items-center flex-none flex-col flex-nowrap min-h-[600px] content-center justify-between [overflow:visible] [z-index:4]">
          <div className="framer-1be8ndy items-center flex-none flex-row flex-nowrap place-content-center [overflow:visible] [z-index:1] will-change-transform [opacity:1]" style={{ transform: "translate(-50%, -50%)" }}>
            <div className="framer-paokwg items-center place-content-center [overflow:var(--overflow-clip-fallback,clip)]">
              <div className="framer-1adasqy aspect-square flex-none [opacity:0.8] [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)]" />
              <div className="framer-1vwstau flex-[1_0_0px] [opacity:0.5] [overflow:var(--overflow-clip-fallback,clip)]" />
            </div>
            <div className="framer-11f7hws items-center flex-none flex-col flex-nowrap place-content-center [backdrop-filter:blur(5px)] [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [z-index:1]" data-border="true">
              <div className="framer-77ijw0 [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-sqgpjx" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))" } as CSSProperties} dir="auto">100% Natural, zero artificial sweeteners</p>
              </div>
            </div>
          </div>
          <div className="framer-8s83bh max-w-[600px] [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
            <h2 className="framer-text framer-styles-preset-1r1gjyr" style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))" } as CSSProperties} dir="auto">The all-in-one gummy</h2>
          </div>
          <div className="framer-1srkpxt items-center flex-none flex-col flex-nowrap max-w-[600px] place-content-center [overflow:visible]">
            <div className="framer-wx5pkl [z-index:2] will-change-transform [opacity:1]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
              <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))" } as CSSProperties} dir="auto">OneThing is your entire supplement shelf with one daily gummy. Immunity, digestion, sleep, energy, and vitality in one pill.</p>
            </div>
            <div className="ssr-variant">
              <div className="framer-ikxl5d-container flex-none [opacity:1]" style={{ willChange: "transform", transform: "none" }}>
                <a className="framer-trzQi framer-FaBO9 framer-qhMV1 framer-udbtyz framer-v-4nzni6 framer-128y9cq items-center flex-row! flex-col flex-nowrap place-content-center [overflow:visible] [padding:8px_15px_8px_8px] [backdrop-filter:blur(5px)] [opacity:1]" style={{ "--border-bottom-width": "1px", "--border-color": "var(--token-8bbbea30-76c9-4ba6-997e-07eab0911b28, rgb(255, 255, 255))", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", width: "100%", borderRadius: "18px" } as CSSProperties} data-border="true" href="/#buy-product">
                  <div className="framer-12ym6a6 items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]" style={{ backgroundColor: "var(--token-136beebb-89fe-4d20-a894-e7f11788a217, rgb(255, 255, 255))", borderRadius: "15px" }}>
                    <div className="framer-k82luq aspect-square flex-none [overflow:visible] [filter:drop-shadow(rgba(0,_0,_0,_0.15)_0px_5px_3px)] [opacity:1]">
                      <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                        <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="8000" height="8000" sizes="(min-width: 1200px) max(50px, calc(max((min(100vw - 120px, 1200px) - 60px) / 2, 1px) - 100px)), (min-width: 680px) and (max-width: 1199.98px) max(50px, calc(min(100vw - 80px, 1200px) - 100px)), (max-width: 679.98px) max(50px, calc(min(100vw - 50px, 1200px) - 100px))" srcSet="/site-assets/d3f19ecc7e04313e.avif 512w, /site-assets/119c2221c7b0d4b7.avif 1024w, /site-assets/6ce9177316b622fa.avif 2048w, /site-assets/64096d728d2ab117.avif 4096w" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="framer-o187ju content-center! items-center flex-[1_0_0px] flex-row flex-nowrap content-end justify-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
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
          </div>
        </div>
        <div className="ssr-variant">
          <div className="framer-1k1cdsc flex-none [mask:linear-gradient(rgb(0,0,0)_61.5797%,rgba(0,0,0,0.4)_77%,rgba(0,0,0,0)_98%)] [overflow:visible] [z-index:1] [opacity:1]" style={{ transform: "none", willChange: "transform" }}>
            <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
              <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="5056" height="3392" sizes="(min-width: 1200px) 100vw, (min-width: 680px) and (max-width: 1199.98px) 100vw, (max-width: 679.98px) 100vw" srcSet="/site-assets/a3e6a6cd508f5b8d.avif 512w, /site-assets/2c034c979093ec25.avif 1024w, /site-assets/92c95024bf02cb7b.avif 2048w, /site-assets/2df9c5e51336457e.webp 4096w, /site-assets/2df9c5e51336457e.webp 5056w" src="/site-assets/2df9c5e51336457e.webp" alt="Holding a supplement gummy in the air" />
            </div>
            <div className="framer-rlphh1-container flex-none [bottom:0px] [right:0px]">
              <div className="[overflow:hidden]" style={{ position: "relative", width: "100%", height: "100%", pointerEvents: "none" }}>
                <div className="[top:0px] [left:0px] [backdrop-filter:blur(15px)] [mask-image:linear-gradient(transparent_0%,_black_40%)]" style={{ position: "absolute", width: "100%", height: "100%" }} />
              </div>
            </div>
            <div className="framer-1j11uwc flex-none [filter:invert(0)] [mask:radial-gradient(50%_50%,rgba(0,0,0,0)_4.33735%,rgb(0,0,0)_37%,rgb(0,0,0)_100%)] [opacity:0.15] [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-filter-override,filter)]">
              <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px", backgroundImage: "url(\"/site-assets/8526aafaff0d17ac.avif\")", backgroundRepeat: "repeat", backgroundPosition: "left top", border: "0px", backgroundSize: "128px auto" } as CSSProperties} />
            </div>
          </div>
        </div>
      </div>
      <div className="framer-1ohzswr items-center flex-none flex-col flex-nowrap place-content-center [overflow:visible] [scroll-margin-top:120px]" id="ingredients">
        <div className="framer-1meu2ww items-center flex-none flex-col flex-nowrap max-w-[955px] place-content-center [overflow:visible]">
          <div className="framer-d9qrv5 items-center [overflow:visible]">
            <div className="ssr-variant">
              <div className="framer-183kcj6 [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                <h2 className="framer-text framer-styles-preset-1r1gjyr" style={{ "--framer-text-alignment": "left" } as CSSProperties} dir="auto">What's inside our super gummies?</h2>
              </div>
            </div>
            <div className="ssr-variant">
              <div className="framer-19o8ama max-w-[361px] [z-index:2] will-change-transform [opacity:1]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))" } as CSSProperties} dir="auto">A transparent look at our clinically backed formula. We selected six highly bioavailable ingredients to optimize your daily health.</p>
              </div>
            </div>
          </div>
          <div className="framer-1uh8tm3 items-center place-content-center [overflow:visible]">
            <div className="framer-1fl3zea items-start content-start justify-center [overflow:visible] [@media(max-width:679.98px)]:[order:1] [@media(min-width:680px)_and_(max-width:1199.98px)]:[order:1]">
              <div className="ssr-variant">
                <div className="framer-17192w5-container will-change-transform [opacity:1]" style={{ transform: "none" }}>
                  <div className="framer-I7ASz framer-XAi7s framer-qhMV1 framer-12p6z17 items-start flex-col flex-nowrap max-w-[250px] content-start justify-center [overflow:visible] [opacity:1]" style={{ width: "100%" }}>
                    <div className="framer-fHA9A framer-yzauvh aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-220b89ed-795b-40ee-a164-3b3423c23e62, rgba(0, 0, 0, 0.7))" } as CSSProperties} />
                    <div className="framer-1csibut items-center flex-none flex-col flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                      <div className="framer-1tif1yi [z-index:2] [opacity:1]" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-v37sa" dir="auto">Vitamin D3</p>
                      </div>
                      <div className="framer-a1lfec [z-index:2] [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7)))" } as CSSProperties} dir="auto">Strengthens immune defence and supports bone density.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ssr-variant">
                <div className="framer-17r1a85-container will-change-transform [opacity:1]" style={{ transform: "none" }}>
                  <div className="framer-I7ASz framer-XAi7s framer-qhMV1 framer-12p6z17 items-start flex-col flex-nowrap max-w-[250px] content-start justify-center [overflow:visible] [opacity:1]" style={{ width: "100%" }}>
                    <div className="framer-Gg0YU framer-yzauvh aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-220b89ed-795b-40ee-a164-3b3423c23e62, rgba(0, 0, 0, 0.7))" } as CSSProperties} />
                    <div className="framer-1csibut items-center flex-none flex-col flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                      <div className="framer-1tif1yi [z-index:2] [opacity:1]" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-v37sa" dir="auto">Ashwagandha</p>
                      </div>
                      <div className="framer-a1lfec [z-index:2] [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7)))" } as CSSProperties} dir="auto">Lowers cortisol and sharpens focus without sedation.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ssr-variant">
                <div className="framer-6h0wqm-container will-change-transform [opacity:1]" style={{ transform: "none" }}>
                  <div className="framer-I7ASz framer-XAi7s framer-qhMV1 framer-12p6z17 items-start flex-col flex-nowrap max-w-[250px] content-start justify-center [overflow:visible] [opacity:1]" style={{ width: "100%" }}>
                    <div className="framer-va91T framer-yzauvh aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-220b89ed-795b-40ee-a164-3b3423c23e62, rgba(0, 0, 0, 0.7))" } as CSSProperties} />
                    <div className="framer-1csibut items-center flex-none flex-col flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                      <div className="framer-1tif1yi [z-index:2] [opacity:1]" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-v37sa" dir="auto">Zinc</p>
                      </div>
                      <div className="framer-a1lfec [z-index:2] [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7)))" } as CSSProperties} dir="auto">Protects cells and accelerates skin repair.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ssr-variant">
              <div ref={gummyRef} className={`framer-1vwkisw aspect-square flex-none [overflow:visible] [z-index:8] [@media(max-width:679.98px)]:[order:0] [@media(min-width:680px)_and_(max-width:1199.98px)]:[order:0] will-change-transform [opacity:1] oi-appear ${gummyShown ? "[transform:none]" : "[transform:translate(-100px,-340px)_scale(0.22)] [@media(max-width:679.98px)]:[transform:translateY(-460px)_scale(0.22)]"}`}>
                <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                  <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="2921" height="2921" sizes="425px" srcSet="/site-assets/2b505afd9b61f6ef.avif 512w, /site-assets/1bffb004a1c8c76a.avif 1024w, /site-assets/78c1116f1df875a5.avif 2048w, /site-assets/07d47ede94a12452.avif 2921w" src="/site-assets/07d47ede94a12452.avif" alt="Supplement gummy" />
                </div>
              </div>
            </div>
            <div className="framer-yciyv2 items-start content-start justify-center [overflow:visible] [@media(max-width:679.98px)]:[order:2] [@media(min-width:680px)_and_(max-width:1199.98px)]:[order:2]">
              <div className="ssr-variant">
                <div className="framer-h5fqza-container will-change-transform [opacity:1]" style={{ transform: "none" }}>
                  <div className="framer-I7ASz framer-XAi7s framer-qhMV1 framer-12p6z17 items-start flex-col flex-nowrap max-w-[250px] content-start justify-center [overflow:visible] [opacity:1]" style={{ width: "100%" }}>
                    <div className="framer-yOVNK framer-yzauvh aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-220b89ed-795b-40ee-a164-3b3423c23e62, rgba(0, 0, 0, 0.7))" } as CSSProperties} />
                    <div className="framer-1csibut items-center flex-none flex-col flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                      <div className="framer-1tif1yi [z-index:2] [opacity:1]" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-v37sa" dir="auto">L-Theanine</p>
                      </div>
                      <div className="framer-a1lfec [z-index:2] [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7)))" } as CSSProperties} dir="auto">Promotes alpha brain wave activity for sustained focus.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ssr-variant">
                <div className="framer-8xmbf5-container will-change-transform [opacity:1]" style={{ transform: "none" }}>
                  <div className="framer-I7ASz framer-XAi7s framer-qhMV1 framer-12p6z17 items-start flex-col flex-nowrap max-w-[250px] content-start justify-center [overflow:visible] [opacity:1]" style={{ width: "100%" }}>
                    <div className="framer-tbHRi framer-yzauvh aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-220b89ed-795b-40ee-a164-3b3423c23e62, rgba(0, 0, 0, 0.7))" } as CSSProperties} />
                    <div className="framer-1csibut items-center flex-none flex-col flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                      <div className="framer-1tif1yi [z-index:2] [opacity:1]" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-v37sa" dir="auto">Elderberry Extract</p>
                      </div>
                      <div className="framer-a1lfec [z-index:2] [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7)))" } as CSSProperties} dir="auto">Antioxidant-rich support for natural immune response.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ssr-variant">
                <div className="framer-1lp7ogs-container will-change-transform [opacity:1]" style={{ transform: "none" }}>
                  <div className="framer-I7ASz framer-XAi7s framer-qhMV1 framer-12p6z17 items-start flex-col flex-nowrap max-w-[250px] content-start justify-center [overflow:visible] [opacity:1]" style={{ width: "100%" }}>
                    <div className="framer-YR54e framer-yzauvh aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-220b89ed-795b-40ee-a164-3b3423c23e62, rgba(0, 0, 0, 0.7))" } as CSSProperties} />
                    <div className="framer-1csibut items-center flex-none flex-col flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                      <div className="framer-1tif1yi [z-index:2] [opacity:1]" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-v37sa" dir="auto">B-Complex</p>
                      </div>
                      <div className="framer-a1lfec [z-index:2] [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7)))" } as CSSProperties} dir="auto">Converts food into sustained, crash-free energy.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionFeaturesSection() {
  const [card1Ref, card1Shown] = useInView<HTMLDivElement>();
  const [reviewRef, reviewShown] = useInView<HTMLDivElement>();
  const [card3Ref, card3Shown] = useInView<HTMLDivElement>();
  return (
    <section className="framer-ra0yx0 items-start flex-none flex-col flex-nowrap content-start justify-center [overflow:var(--overflow-clip-fallback,clip)] [scroll-margin-top:60px]" id="features">
      <div className="framer-n3g353 items-center flex-none flex-col flex-nowrap place-content-center [overflow:visible]">
        <div className="framer-1pv0wis max-w-[1000px] [overflow:visible]">
          <div className="framer-nu26zv items-start [overflow:visible] [@media(max-width:679.98px)]:[order:1] [@media(min-width:680px)_and_(max-width:1199.98px)]:[order:1]">
            <div className="framer-192rlmm items-start flex-none flex-col flex-nowrap content-start justify-center [overflow:var(--overflow-clip-fallback,clip)]">
              <div className="framer-1xma4xx [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                <h2 className="framer-text framer-styles-preset-1r1gjyr" style={{ "--framer-text-alignment": "left" } as CSSProperties} dir="auto">Clinically dosed, not just label decoration</h2>
              </div>
              <div className="framer-1gee49s [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))" } as CSSProperties} dir="auto">Most supplements use just enough to list it on the label. OneThing delivers the exact doses proven in clinical research. No fillers, no shortcuts, no guesswork at all.</p>
              </div>
            </div>
            <div className="framer-jc1401 items-start flex-none flex-col flex-nowrap content-start justify-center [overflow:visible]">
              <div className="framer-1dhwyb7 items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] will-change-transform [opacity:1]" style={{ transform: "none" }}>
                <div className="framer-01Hzu framer-16vowvt aspect-square flex-none" />
                <div className="framer-wfdecg [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-v37sa" dir="auto">Six clinically dosed ingredients</p>
                </div>
              </div>
              <div className="framer-4k6tby items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] will-change-transform [opacity:1]" style={{ transform: "none" }}>
                <div className="framer-01Hzu framer-b3bqe4 aspect-square flex-none" />
                <div className="framer-1kiu3ez [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-v37sa" dir="auto">No fillers or proprietary blends</p>
                </div>
              </div>
              <div className="framer-gnab8d items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] will-change-transform [opacity:1]" style={{ transform: "none" }}>
                <div className="framer-01Hzu framer-1rmfu6t aspect-square flex-none" />
                <div className="framer-h4zxsx [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-v37sa" dir="auto">One gummy replaces the whole shelf</p>
                </div>
              </div>
              <div className="framer-5siw2a items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] will-change-transform [opacity:1]" style={{ transform: "none" }}>
                <div className="framer-01Hzu framer-aiwvum aspect-square flex-none" />
                <div className="framer-1omkqy1 [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-v37sa" dir="auto">Results that compound</p>
                </div>
              </div>
            </div>
          </div>
          <div className="ssr-variant">
            <div className="framer-p34b64 items-start aspect-square content-start justify-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [@media(max-width:679.98px)]:[order:0] [@media(min-width:680px)_and_(max-width:1199.98px)]:[order:0]">
              <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="4096" height="4096" sizes="max((min(100vw - 120px, 1000px) - 60px) / 2, 1px)" srcSet="/site-assets/ae9aa0f64719e95a.avif 512w, /site-assets/fa68cc73f8e1416a.avif 1024w, /site-assets/a611172e61231f39.avif 2048w, /site-assets/b82866abd015bdcb.webp 4096w" src="/site-assets/b82866abd015bdcb.webp" alt="Person performing yoga" />
              </div>
              <div className="framer-hy5xhy flex-none [overflow:var(--overflow-clip-fallback,clip)] [z-index:1]" />
              <div ref={card1Ref} className={`framer-1yd27yv items-center flex-none flex-col flex-nowrap place-content-center [backdrop-filter:blur(10px)] [overflow:var(--overflow-clip-fallback,clip)] [z-index:1] [@media(max-width:679.98px)]:right-[20px] ${card1Shown ? "[opacity:1]" : "[opacity:0]"} oi-appear`} style={{ willChange: "transform", translate: card1Shown ? "0 0" : "0 40px" }}>
                <div className="framer-1wtmbz6 items-center flex-none flex-row flex-nowrap content-center justify-start [overflow:var(--overflow-clip-fallback,clip)]" data-border="true">
                  <div className="framer-1so6sjr [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))" } as CSSProperties} dir="auto">Effectiveness Comparison</p>
                  </div>
                </div>
                <div className="framer-1ntlmfe items-end flex-none flex-row flex-nowrap content-end justify-center [overflow:visible]">
                  <div className="framer-dpsvv4 items-center flex-[1_0_0px] flex-col flex-nowrap place-content-center [overflow:visible]">
                    <div className="framer-uhutkv items-center flex-none flex-col flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)]">
                      <div className="framer-1lokozz [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))" } as CSSProperties} dir="auto">99%</p>
                      </div>
                      <div className="framer-1iofxhj [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))" } as CSSProperties} dir="auto">OneThing</p>
                      </div>
                    </div>
                    <div className="framer-mo27a flex-none [overflow:visible]">
                      <div className="framer-11wifk6 flex-none [filter:blur(7px)] [overflow:var(--overflow-clip-fallback,clip)] [right:0px] [z-index:1]" />
                    </div>
                  </div>
                  <div className="framer-1mvoim7 items-center flex-[1_0_0px] flex-col flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)]">
                    <div className="framer-y5yima items-center flex-none flex-col flex-nowrap place-content-center [opacity:0.8] [overflow:var(--overflow-clip-fallback,clip)]">
                      <div className="framer-tzki3t [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--token-f0aff8f4-5f67-4909-bd7e-3e676f6fd40f, rgba(255, 255, 255, 0.8))" } as CSSProperties} dir="auto">25%</p>
                      </div>
                      <div className="framer-1gkwz7w [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--token-f0aff8f4-5f67-4909-bd7e-3e676f6fd40f, rgba(255, 255, 255, 0.8))" } as CSSProperties} dir="auto">Most </p>
                      </div>
                    </div>
                    <div className="framer-12yswj1 flex-none [opacity:0.5] [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)]" />
                  </div>
                  <div className="framer-zugr4t items-center flex-[1_0_0px] flex-col flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)]">
                    <div className="framer-1obdd8n items-center flex-none flex-col flex-nowrap place-content-center [opacity:0.6] [overflow:var(--overflow-clip-fallback,clip)]">
                      <div className="framer-caputb [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--token-f0aff8f4-5f67-4909-bd7e-3e676f6fd40f, rgba(255, 255, 255, 0.8))" } as CSSProperties} dir="auto">15%</p>
                      </div>
                      <div className="framer-sgx5m3 [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--token-f0aff8f4-5f67-4909-bd7e-3e676f6fd40f, rgba(255, 255, 255, 0.8))" } as CSSProperties} dir="auto">Others</p>
                      </div>
                    </div>
                    <div className="framer-9tlo9k flex-none [opacity:0.5] [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="framer-ix3lzb max-w-[1000px] [overflow:visible]">
          <div className="ssr-variant">
            <div className="framer-tpghyj items-start aspect-square content-start justify-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [@media(max-width:679.98px)]:[order:0] [@media(min-width:680px)_and_(max-width:1199.98px)]:[order:0]">
              <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="4096" height="4096" sizes="max((min(100vw - 120px, 1000px) - 60px) / 2, 1px)" srcSet="/site-assets/cdb8788da9c9879c.avif 512w, /site-assets/361864e59095202e.avif 1024w, /site-assets/4452f4198f75a26a.avif 2048w, /site-assets/f537768f4661c4c0.webp 4096w" src="/site-assets/f537768f4661c4c0.webp" alt="Supplement container shot" />
              </div>
              <div ref={reviewRef} className={`framer-sh66ud-container flex-none [z-index:1] will-change-transform ${reviewShown ? "[opacity:1]" : "[opacity:0]"} oi-appear`} style={{ translate: reviewShown ? "0 0" : "0 40px" }}>
                <div className={`framer-Xaiv6 framer-2BTrO framer-1p9x1rh items-center flex-col flex-nowrap place-content-center [overflow:visible] will-change-transform ${reviewShown ? "[opacity:1]" : "[opacity:0]"} oi-appear`} style={{ translate: reviewShown ? "0 0" : "0 40px" }}>
                  <div className="framer-10fdy2 flex-none [overflow:visible] [opacity:1]">
                    <div className="framer-1pjp34d aspect-square bottom-[3px] flex-none [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [z-index:1] [opacity:1]" style={{ "--border-bottom-width": "2px", "--border-color": "rgba(255, 255, 255, 0.5)", "--border-left-width": "2px", "--border-right-width": "2px", "--border-style": "solid", "--border-top-width": "2px", borderRadius: "70px" } as CSSProperties} data-border="true">
                      <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                        <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="128" height="128" src="/site-assets/9bb8b22d90e0cc0f.avif" alt="" />
                      </div>
                    </div>
                    <div className="framer-17cecoq aspect-square flex-none [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [z-index:1] [opacity:1]" style={{ "--border-bottom-width": "2px", "--border-color": "rgba(255, 255, 255, 0.5)", "--border-left-width": "2px", "--border-right-width": "2px", "--border-style": "solid", "--border-top-width": "2px", borderRadius: "70px", transform: "translate(-50%, -50%)" } as CSSProperties} data-border="true">
                      <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                        <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="128" height="128" src="/site-assets/ba9b32d0a9d124ee.avif" alt="" />
                      </div>
                    </div>
                    <div className="framer-140170o aspect-square flex-none [bottom:0px] [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [z-index:1] [opacity:1]" style={{ "--border-bottom-width": "2px", "--border-color": "rgba(255, 255, 255, 0.5)", "--border-left-width": "2px", "--border-right-width": "2px", "--border-style": "solid", "--border-top-width": "2px", borderRadius: "70px" } as CSSProperties} data-border="true">
                      <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                        <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="128" height="128" src="/site-assets/85fc6d5736aad235.avif" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="framer-114hibu items-center flex-none flex-row flex-nowrap content-center justify-start [overflow:visible] [opacity:1]">
                    <div className="framer-qrh3i items-center flex-none flex-col flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [z-index:1] [backdrop-filter:blur(5px)] [opacity:1]" style={{ background: "linear-gradient(347deg, var(--token-3055b5fd-b843-4efe-817e-9f159b9e87dd, rgba(0, 0, 0, 0.5)) 19%, var(--token-f08ec090-da0b-4cc1-81bf-083f98422979, rgba(0, 0, 0, 0.25)) 90%)", borderRadius: "12px" }}>
                      <div className="framer-gygd01 items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                        <div className="framer-bmirh framer-ooi6de aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                        <div className="framer-bmirh framer-74zvni aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                        <div className="framer-bmirh framer-gnc4iz aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                        <div className="framer-bmirh framer-19jcz6y aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                        <div className="framer-bmirh framer-c1wuic aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                      </div>
                      <div className="framer-gne1m0 wrap-break-word [word-break:break-word] [z-index:2] [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">I stopped taking 4 different supplements after this</p>
                      </div>
                    </div>
                    <div className="framer-i703rw items-center flex-none flex-col flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [z-index:1] [backdrop-filter:blur(5px)] [opacity:0]" style={{ "--border-bottom-width": "1px", "--border-color": "var(--token-0f73b501-fcdc-4857-9665-62f793e5b507, rgba(255, 255, 255, 0.15))", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", background: "linear-gradient(347deg, var(--token-3055b5fd-b843-4efe-817e-9f159b9e87dd, rgba(0, 0, 0, 0.5)) 19%, var(--token-f08ec090-da0b-4cc1-81bf-083f98422979, rgba(0, 0, 0, 0.25)) 90%)", borderRadius: "12px" } as CSSProperties} data-border="true">
                      <div className="framer-5yjdl2 items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                        <div className="framer-bmirh framer-vurb3z aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                        <div className="framer-bmirh framer-bjmvp3 aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                        <div className="framer-bmirh framer-1ywz3gs aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                        <div className="framer-bmirh framer-hle2eb aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                        <div className="framer-bmirh framer-12cs0b7 aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                      </div>
                      <div className="framer-g38owa wrap-break-word [word-break:break-word] [z-index:2] [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">Better focus. Better mornings. Less pills.</p>
                      </div>
                    </div>
                    <div className="framer-vy12bs items-center flex-none flex-col flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [z-index:1] [backdrop-filter:blur(5px)] [opacity:0]" style={{ "--border-bottom-width": "1px", "--border-color": "var(--token-0f73b501-fcdc-4857-9665-62f793e5b507, rgba(255, 255, 255, 0.15))", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", background: "linear-gradient(347deg, var(--token-3055b5fd-b843-4efe-817e-9f159b9e87dd, rgba(0, 0, 0, 0.5)) 19%, var(--token-f08ec090-da0b-4cc1-81bf-083f98422979, rgba(0, 0, 0, 0.25)) 90%)", borderRadius: "12px" } as CSSProperties} data-border="true">
                      <div className="framer-8uy5ub items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                        <div className="framer-bmirh framer-1f53jgi aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                        <div className="framer-bmirh framer-75hjj5 aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                        <div className="framer-bmirh framer-4w9qyq aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                        <div className="framer-bmirh framer-vdkyt2 aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                        <div className="framer-bmirh framer-e4zi6j aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-caeffaed-ed69-4b9c-a3cb-8a5bbe6d9e59, rgb(253, 199, 92))" } as CSSProperties} />
                      </div>
                      <div className="framer-1le3lo wrap-break-word [word-break:break-word] [z-index:2] [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">Week 3 and my sleep feels noticeably deeper.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="framer-fj8z0j items-start [overflow:visible] [@media(max-width:679.98px)]:[order:1] [@media(min-width:680px)_and_(max-width:1199.98px)]:[order:1]">
            <div className="framer-k4icfi items-start flex-none flex-col flex-nowrap content-start justify-center [overflow:var(--overflow-clip-fallback,clip)]">
              <div className="framer-1gqzqnm [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                <h2 className="framer-text framer-styles-preset-1r1gjyr" style={{ "--framer-text-alignment": "left" } as CSSProperties} dir="auto">One gummy replaces the entire routine</h2>
              </div>
              <div className="framer-13m146f [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))" } as CSSProperties} dir="auto">Clear off your entire bathroom counter. We've consolidated your immunity, digestion, sleep, and energy needs into just a single, effortless morning habit that compounds.</p>
              </div>
            </div>
            <div className="framer-1g6rep7 flex-none justify-center [overflow:visible]">
              <div className="framer-xxou2q items-center flex-none flex-col flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [place-self:start] will-change-transform [opacity:1]" style={{ transform: "none" }}>
                <div className="framer-yz7u34 [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                  <h3 className="framer-text framer-styles-preset-crg4y9" dir="auto">49%</h3>
                </div>
                <div className="framer-1dmi9o9 [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))" } as CSSProperties} dir="auto">Reported deeper sleep quality within the first two weeks.</p>
                </div>
              </div>
              <div className="framer-1bqz7b9 items-center flex-none flex-col flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [place-self:start] will-change-transform opacity-[0.984621]" style={{ transform: "none" }}>
                <div className="framer-1fs351i [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                  <h3 className="framer-text framer-styles-preset-crg4y9" dir="auto">25%</h3>
                </div>
                <div className="framer-10btaa1 [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))" } as CSSProperties} dir="auto">Spent less on supplements after switching to OneThing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="framer-1n80t1p max-w-[1000px] [overflow:visible]">
          <div className="framer-ulv6j4 items-start [overflow:visible] [@media(max-width:679.98px)]:[order:1] [@media(min-width:680px)_and_(max-width:1199.98px)]:[order:1]">
            <div className="framer-172lu31 items-start flex-none flex-col flex-nowrap content-start justify-center [overflow:var(--overflow-clip-fallback,clip)]">
              <div className="framer-fxtkhi [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                <h2 className="framer-text framer-styles-preset-1r1gjyr" style={{ "--framer-text-alignment": "left" } as CSSProperties} dir="auto">What we left out on purpose</h2>
              </div>
              <div className="framer-1nmsyhc [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))" } as CSSProperties} dir="auto">No artificial colours, no synthetic sweeteners, no gelatin, no GMOs, no fillers. Just six ingredients in a clean citrus gummy. Nothing your body doesn't need.</p>
              </div>
            </div>
            <div className="framer-85hg5k flex-none justify-center [overflow:visible]">
              <div className="ssr-variant">
                <div className="framer-1s7d1l1-container flex-none [place-self:start] will-change-transform [opacity:1]" style={{ transform: "none" }}>
                  <div className="framer-I7ASz framer-XAi7s framer-qhMV1 framer-12p6z17 items-start flex-col flex-nowrap max-w-[250px] content-start justify-center [overflow:visible] [opacity:1]" style={{ width: "100%" }}>
                    <div className="framer-tbHRi framer-yzauvh aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-220b89ed-795b-40ee-a164-3b3423c23e62, rgba(0, 0, 0, 0.7))" } as CSSProperties} />
                    <div className="framer-1csibut items-center flex-none flex-col flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                      <div className="framer-1tif1yi [z-index:2] [opacity:1]" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-v37sa" dir="auto">100% Natural</p>
                      </div>
                      <div className="framer-a1lfec [z-index:2] [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7)))" } as CSSProperties} dir="auto">Crafted entirely from natural earth-grown ingredients.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ssr-variant">
                <div className="framer-632zwq-container flex-none [place-self:start] will-change-transform opacity-[0.9886]" style={{ transform: "none" }}>
                  <div className="framer-I7ASz framer-XAi7s framer-qhMV1 framer-12p6z17 items-start flex-col flex-nowrap max-w-[250px] content-start justify-center [overflow:visible] [opacity:1]" style={{ width: "100%" }}>
                    <div className="framer-xYopi framer-yzauvh aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-220b89ed-795b-40ee-a164-3b3423c23e62, rgba(0, 0, 0, 0.7))" } as CSSProperties} />
                    <div className="framer-1csibut items-center flex-none flex-col flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                      <div className="framer-1tif1yi [z-index:2] [opacity:1]" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-v37sa" dir="auto">Tested &amp; Certified</p>
                      </div>
                      <div className="framer-a1lfec [z-index:2] [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7)))" } as CSSProperties} dir="auto">Third-party lab verified. GMP certified. Every single batch.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ssr-variant">
            <div className="framer-ergx69 items-start aspect-square content-start justify-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [@media(max-width:679.98px)]:[order:0] [@media(min-width:680px)_and_(max-width:1199.98px)]:[order:0]">
              <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="4096" height="4096" sizes="max((min(100vw - 120px, 1000px) - 60px) / 2, 1px)" srcSet="/site-assets/b004a5ee5988e516.avif 512w, /site-assets/2b422597354be02d.avif 1024w, /site-assets/1a44bd6c6f2eefcf.avif 2048w, /site-assets/f8a0da1ec9a82e66.webp 4096w" src="/site-assets/f8a0da1ec9a82e66.webp" alt="Woman holding a supplement container and smiling" />
              </div>
              <div ref={card3Ref} className={`framer-qlbbaw items-center flex-none flex-col flex-nowrap place-content-center [backdrop-filter:blur(10px)] [overflow:var(--overflow-clip-fallback,clip)] [z-index:4] [@media(max-width:679.98px)]:right-[20px] ${card3Shown ? "[opacity:1]" : "[opacity:0]"} oi-appear`} style={{ willChange: "transform", translate: card3Shown ? "0 0" : "0 40px" }}>
                <div className="framer-x4o5ou items-center flex-none flex-row flex-nowrap content-center justify-start [overflow:var(--overflow-clip-fallback,clip)]" data-border="true">
                  <div className="framer-1x5qqm1 [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))" } as CSSProperties} dir="auto">Ingredient Profile</p>
                  </div>
                </div>
                <div className="framer-1dz08eh items-center flex-none flex-col flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)]">
                  <div className="framer-1lhej5c items-center flex-none flex-row flex-nowrap place-content-center [overflow:visible]">
                    <div className="framer-1llqmev flex-none [overflow:visible] [z-index:2]">
                      <div className="framer-1bsb2yc flex-none [bottom:0px] [filter:blur(5px)] [overflow:var(--overflow-clip-fallback,clip)] [right:0px] [z-index:1]" />
                    </div>
                    <div className="framer-bhgp5e flex-[1_0_0px] [opacity:0.2] [overflow:visible] [z-index:2]" />
                    <div className="framer-12bkvh6 flex-[1_0_0px] [opacity:0.2] [overflow:visible] [z-index:2]" />
                  </div>
                  <div className="framer-dptzsv items-center flex-none flex-col flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)]">
                    <div className="framer-1bzzh30 items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)]">
                      <div className="framer-wac2to [opacity:0.7] [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--token-f0aff8f4-5f67-4909-bd7e-3e676f6fd40f, rgba(255, 255, 255, 0.8))" } as CSSProperties} dir="auto">Magnesium Glycinate</p>
                      </div>
                      <div className="framer-dwtukq [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-83kqm0" style={{ "--framer-text-alignment": "right" } as CSSProperties} dir="auto">350mg</p>
                      </div>
                    </div>
                    <div className="framer-15bxzk5 flex-none [overflow:var(--overflow-clip-fallback,clip)]" />
                    <div className="framer-lf18tg items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)]">
                      <div className="framer-1c0cpqp [opacity:0.7] [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--token-f0aff8f4-5f67-4909-bd7e-3e676f6fd40f, rgba(255, 255, 255, 0.8))" } as CSSProperties} dir="auto">Ashwagandha KSM-66</p>
                      </div>
                      <div className="framer-1hrn16w [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-83kqm0" style={{ "--framer-text-alignment": "right" } as CSSProperties} dir="auto">600mg</p>
                      </div>
                    </div>
                    <div className="framer-8x7hrb flex-none [overflow:var(--overflow-clip-fallback,clip)]" />
                    <div className="framer-10u6mkh items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)]">
                      <div className="framer-mz8oos [opacity:0.7] [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--token-f0aff8f4-5f67-4909-bd7e-3e676f6fd40f, rgba(255, 255, 255, 0.8))" } as CSSProperties} dir="auto">Zinc Chelate</p>
                      </div>
                      <div className="framer-klwfzg [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-83kqm0" style={{ "--framer-text-alignment": "right" } as CSSProperties} dir="auto">15mg</p>
                      </div>
                    </div>
                    <div className="framer-zm2y81 flex-none [overflow:var(--overflow-clip-fallback,clip)]" />
                    <div className="framer-1nqtcm0 items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)]">
                      <div className="framer-l0zyxe [opacity:0.7] [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--token-f0aff8f4-5f67-4909-bd7e-3e676f6fd40f, rgba(255, 255, 255, 0.8))" } as CSSProperties} dir="auto">Elderberry Extract</p>
                      </div>
                      <div className="framer-1hxj523 [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-83kqm0" style={{ "--framer-text-alignment": "right" } as CSSProperties} dir="auto">120mg</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionIntroduceSection() {
  const [introRef, introShown] = useInView<HTMLDivElement>();
  return (
    <section className="framer-y047zk items-center flex-none flex-col flex-nowrap content-center justify-start [mask:linear-gradient(rgb(0,0,0)_0%,rgba(0,0,0,0.96)_73%,rgba(0,0,0,0)_100%)] [overflow:visible]" id="introduction">
      <div ref={introRef} className="framer-ipe1eq items-center flex-none flex-col flex-nowrap place-content-center [overflow:visible] [z-index:1] will-change-transform [opacity:1] oi-appear" style={{ transform: introShown ? "translateY(-100px)" : "none" }}>
        <div className="framer-1q31ivl items-center flex-none flex-col flex-nowrap place-content-center [overflow:visible]">
          <div className="framer-7xe7aq wrap-break-word [word-break:break-word] [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
            <h2 className="framer-text framer-styles-preset-8hagcl" style={{ "--framer-text-alignment": "center" } as CSSProperties} dir="auto"><span className="[opacity:1] will-change-transform" style={{ display: "inline-block", filter: "blur(0px)", transform: "none" } as CSSProperties} data-site-import-responsive="622">Introducing</span> <span className="[opacity:1] will-change-transform" style={{ display: "inline-block", filter: "blur(0px)", transform: "none" } as CSSProperties} data-site-import-responsive="623" /></h2>
          </div>
          <div className="framer-1cz438u wrap-break-word [word-break:break-word] [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
            <h2 className="framer-text framer-styles-preset-8hagcl" style={{ "--framer-text-alignment": "center" } as CSSProperties} dir="auto">
              <span className="[opacity:1] will-change-transform" style={{ display: "inline-block", filter: "blur(0px)", transform: "none" } as CSSProperties} data-site-import-responsive="626">OneThing</span>
            </h2>
          </div>
        </div>
        <div className="framer-6izyhc wrap-break-word [word-break:break-word] [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
          <p className="framer-text framer-styles-preset-w9kn3e" dir="auto"><span className="[opacity:1] will-change-transform" style={{ display: "inline-block", filter: "blur(0px)", transform: "none" } as CSSProperties} data-site-import-responsive="629" /> <span className="[opacity:1] will-change-transform" style={{ display: "inline-block", filter: "blur(0px)", transform: "none" } as CSSProperties} data-site-import-responsive="630">GUMMIES</span></p>
        </div>
      </div>
      <div className="ssr-variant">
        <div className="framer-11gxwhy-container flex-none [z-index:1] [@media(max-width:679.98px)]:aspect-square [@media(max-width:679.98px)]:right-[-15px]" data-site-import-desktop-variant="">
          <div className="framer-7s6CG framer-bhp2dn [overflow:visible] will-change-transform [opacity:1]" style={{ height: "100%", width: "100%", transform: "none" }} data-site-import-responsive="632">
            <div className="framer-jiq8l1 aspect-square flex-none right-[85px] [overflow:visible] [z-index:8] [filter:blur(5px)] [opacity:1]" style={{ transform: "translateY(-50%) rotate(-59deg)" }}>
              <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="2921" height="2921" sizes="83px" srcSet="/site-assets/2b505afd9b61f6ef.avif 512w, /site-assets/1bffb004a1c8c76a.avif 1024w, /site-assets/78c1116f1df875a5.avif 2048w, /site-assets/07d47ede94a12452.avif 2921w" src="/site-assets/07d47ede94a12452.avif" alt="" />
              </div>
            </div>
            <div className="framer-x7rgww aspect-square flex-none right-[43px] [overflow:visible] [z-index:8] [filter:blur(5px)] [opacity:1]" style={{ transform: "rotate(53deg)" }}>
              <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="2921" height="2921" sizes="150px" srcSet="/site-assets/2b505afd9b61f6ef.avif 512w, /site-assets/1bffb004a1c8c76a.avif 1024w, /site-assets/78c1116f1df875a5.avif 2048w, /site-assets/07d47ede94a12452.avif 2921w" src="/site-assets/07d47ede94a12452.avif" alt="" />
              </div>
            </div>
            <div className="framer-8elmzo aspect-square bottom-[474px] flex-none right-[286px] [overflow:visible] [z-index:8] [opacity:1]" style={{ transform: "rotate(-32deg)" }}>
              <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="2921" height="2921" sizes="136px" srcSet="/site-assets/2b505afd9b61f6ef.avif 512w, /site-assets/1bffb004a1c8c76a.avif 1024w, /site-assets/78c1116f1df875a5.avif 2048w, /site-assets/07d47ede94a12452.avif 2921w" src="/site-assets/07d47ede94a12452.avif" alt="" />
              </div>
            </div>
            <div className="framer-9djwlr aspect-square flex-none right-[235px] [overflow:visible] [z-index:8] [opacity:1]" style={{ transform: "rotate(145deg)" }}>
              <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="2921" height="2921" sizes="calc(1100px - 920px)" srcSet="/site-assets/2b505afd9b61f6ef.avif 512w, /site-assets/1bffb004a1c8c76a.avif 1024w, /site-assets/78c1116f1df875a5.avif 2048w, /site-assets/07d47ede94a12452.avif 2921w" src="/site-assets/07d47ede94a12452.avif" alt="" />
              </div>
            </div>
            <div className="framer-1e2ze8m aspect-square flex-none [overflow:visible] [z-index:8] [opacity:1]" style={{ transform: "rotate(-120deg)" }}>
              <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="2921" height="2921" sizes="167px" srcSet="/site-assets/2b505afd9b61f6ef.avif 512w, /site-assets/1bffb004a1c8c76a.avif 1024w, /site-assets/78c1116f1df875a5.avif 2048w, /site-assets/07d47ede94a12452.avif 2921w" src="/site-assets/07d47ede94a12452.avif" alt="" />
              </div>
            </div>
            <div className="framer-n1dhl aspect-square flex-none [overflow:visible] [z-index:8] [filter:blur(3px)] [opacity:1]" style={{ transform: "translateY(-50%) rotate(-40deg)" }}>
              <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="2921" height="2921" sizes="250px" srcSet="/site-assets/2b505afd9b61f6ef.avif 512w, /site-assets/1bffb004a1c8c76a.avif 1024w, /site-assets/78c1116f1df875a5.avif 2048w, /site-assets/07d47ede94a12452.avif 2921w" src="/site-assets/07d47ede94a12452.avif" alt="" />
              </div>
            </div>
            <div className="framer-9o15fu aspect-square flex-none [overflow:visible] [z-index:0] [filter:blur(3px)] [opacity:1]" style={{ transform: "rotate(47deg)" }}>
              <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="2921" height="2921" sizes="219px" srcSet="/site-assets/2b505afd9b61f6ef.avif 512w, /site-assets/1bffb004a1c8c76a.avif 1024w, /site-assets/78c1116f1df875a5.avif 2048w, /site-assets/07d47ede94a12452.avif 2921w" src="/site-assets/07d47ede94a12452.avif" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="framer-11gxwhy-container flex-none [z-index:1] [@media(max-width:679.98px)]:aspect-square [@media(max-width:679.98px)]:right-[-15px]" style={{ "--site-import-responsive-display": "block" } as CSSProperties} data-site-import-mobile-variant="">
          <div className="framer-7s6CG framer-bhp2dn framer-v-f841vj [overflow:visible] will-change-transform [opacity:1]" style={{ height: "100%", width: "100%", transform: "none" }}>
            <div className="framer-jiq8l1 aspect-square flex-none right-[85px] [overflow:visible] [z-index:8] [filter:blur(5px)] [opacity:1]" style={{ transform: "translateY(-50%) rotate(-59deg)" }}>
              <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="2921" height="2921" sizes="83px" srcSet="/site-assets/2b505afd9b61f6ef.avif 512w, /site-assets/1bffb004a1c8c76a.avif 1024w, /site-assets/78c1116f1df875a5.avif 2048w, /site-assets/07d47ede94a12452.avif 2921w" src="/site-assets/07d47ede94a12452.avif" alt="" />
              </div>
            </div>
            <div className="framer-x7rgww aspect-square flex-none right-[43px] [overflow:visible] [z-index:8] [filter:blur(5px)] [opacity:1]" style={{ transform: "rotate(53deg)" }}>
              <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="2921" height="2921" sizes="150px" srcSet="/site-assets/2b505afd9b61f6ef.avif 512w, /site-assets/1bffb004a1c8c76a.avif 1024w, /site-assets/78c1116f1df875a5.avif 2048w, /site-assets/07d47ede94a12452.avif 2921w" src="/site-assets/07d47ede94a12452.avif" alt="" />
              </div>
            </div>
            <div className="framer-8elmzo aspect-square bottom-[474px] flex-none right-[286px] [overflow:visible] [z-index:8] [opacity:1]" style={{ transform: "rotate(-32deg)" }}>
              <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="2921" height="2921" sizes="136px" srcSet="/site-assets/2b505afd9b61f6ef.avif 512w, /site-assets/1bffb004a1c8c76a.avif 1024w, /site-assets/78c1116f1df875a5.avif 2048w, /site-assets/07d47ede94a12452.avif 2921w" src="/site-assets/07d47ede94a12452.avif" alt="" />
              </div>
            </div>
            <div className="framer-9djwlr aspect-square flex-none right-[235px] [overflow:visible] [z-index:8] [opacity:1]" style={{ transform: "rotate(145deg)" }}>
              <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="2921" height="2921" sizes="calc(1100px - 920px)" srcSet="/site-assets/2b505afd9b61f6ef.avif 512w, /site-assets/1bffb004a1c8c76a.avif 1024w, /site-assets/78c1116f1df875a5.avif 2048w, /site-assets/07d47ede94a12452.avif 2921w" src="/site-assets/07d47ede94a12452.avif" alt="" />
              </div>
            </div>
            <div className="framer-1e2ze8m aspect-square flex-none [overflow:visible] [z-index:8] [opacity:1]" style={{ transform: "rotate(-120deg)" }}>
              <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="2921" height="2921" sizes="167px" srcSet="/site-assets/2b505afd9b61f6ef.avif 512w, /site-assets/1bffb004a1c8c76a.avif 1024w, /site-assets/78c1116f1df875a5.avif 2048w, /site-assets/07d47ede94a12452.avif 2921w" src="/site-assets/07d47ede94a12452.avif" alt="" />
              </div>
            </div>
            <div className="framer-n1dhl aspect-square flex-none [overflow:visible] [z-index:8] [filter:blur(3px)] [opacity:1]" style={{ transform: "rotate(-40deg)" }}>
              <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="2921" height="2921" sizes="250px" srcSet="/site-assets/2b505afd9b61f6ef.avif 512w, /site-assets/1bffb004a1c8c76a.avif 1024w, /site-assets/78c1116f1df875a5.avif 2048w, /site-assets/07d47ede94a12452.avif 2921w" src="/site-assets/07d47ede94a12452.avif" alt="" />
              </div>
            </div>
            <div className="framer-9o15fu aspect-square flex-none [overflow:visible] [z-index:0] [filter:blur(3px)] [opacity:1]" style={{ transform: "rotate(47deg)" }}>
              <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="2921" height="2921" sizes="219px" srcSet="/site-assets/2b505afd9b61f6ef.avif 512w, /site-assets/1bffb004a1c8c76a.avif 1024w, /site-assets/78c1116f1df875a5.avif 2048w, /site-assets/07d47ede94a12452.avif 2921w" src="/site-assets/07d47ede94a12452.avif" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const FIRST_PRODUCT_SLIDE = { className: "framer-98kjiw", src: "/site-assets/product-slide-1.webp", srcSet: undefined as string | undefined, shadow: false };
const PRODUCT_SLIDES = [
  FIRST_PRODUCT_SLIDE,
  { className: "framer-1j9k9hh", src: "/site-assets/product-slide-2.webp", srcSet: undefined, shadow: true },
  { className: "framer-1qs3wq8", src: "/site-assets/product-slide-3.webp", srcSet: undefined, shadow: true },
  {
    className: "framer-vo0dng",
    src: "/site-assets/6fffde9e9f41bb02.avif",
    srcSet: "/site-assets/1a397b7d0f239ee1.avif 824w, /site-assets/b987771c43b98dba.avif 1649w, /site-assets/3cc6c818f85adfee.avif 3299w, /site-assets/6fffde9e9f41bb02.avif 3712w",
    shadow: true,
  },
];
const PRODUCT_SLIDE_FILLS = ["framer-199ya20", "framer-441kts", "framer-eb6507", "framer-1v91fxi"];
const PRODUCT_DETAILS = [
  "Each gummy contains a precision blend of Vitamin D3, Zinc, Ashwagandha, L-Theanine, and Elderberry Extract. Every ingredient is third-party tested and dosed at clinically effective levels, no pixie dusting, no fillers. Coated in natural citrus sugar for taste, not to hide anything.",
  "Take one gummy daily, morning or evening, with or without food. Chew thoroughly before swallowing. Consistency is key,  best results after 30+ days of daily use. Do not exceed the recommended dose.",
  "Free standard shipping on all orders. Express delivery available at checkout. Every order is backed by our 60-day money-back guarantee, if you don't feel a difference, we'll refund you. No questions asked.",
];

function activateOnKey(action: () => void) {
  return (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      action();
    }
  };
}

function toggleIndex(list: number[], index: number) {
  return list.includes(index) ? list.filter((item) => item !== index) : [...list, index];
}


function ImportedSectionBuySection() {
  const [plan, setPlan] = useState<"subscribe" | "one-time">("subscribe");
  const [slide, setSlide] = useState(0);
  const [openDetails, setOpenDetails] = useState<number[]>([]);
  const activeSlide = PRODUCT_SLIDES[slide] ?? FIRST_PRODUCT_SLIDE;
  useEffect(() => {
    const timer = window.setTimeout(() => setSlide((current) => (current + 1) % PRODUCT_SLIDES.length), 3750);
    return () => window.clearTimeout(timer);
  }, [slide]);
  return (
    <section className="framer-5z1pl3 items-center flex-none flex-col flex-nowrap place-content-center [overflow:visible] [scroll-margin-top:120px]" id="buy-product">
      <div className="framer-v127ei max-w-[1200px] [overflow:visible]">
        <div className="ssr-variant">
          <div className="framer-wtclw1-container [z-index:1] [@media(max-width:679.98px)]:[order:0] [@media(min-width:680px)_and_(max-width:1199.98px)]:[order:0] will-change-transform [opacity:1]" style={{ transform: "none" }}>
            <div className="framer-L6REA framer-Jf64E framer-1vhsrli items-center flex-col flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]" style={{ width: "100%" }}>
              <div className="framer-14bx2df items-center aspect-square flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]" style={{ backgroundColor: "var(--token-7dec4550-2ba6-4025-bfd1-f0cbf4c0a7c9, rgb(247, 247, 247))", borderRadius: "25px" }}>
                <div key={slide} className={`${activeSlide.className} oi-slide-in ${activeSlide.shadow ? "[box-shadow:rgba(0,_0,_0,_0.15)_0px_5px_5px_0px]" : ""} [opacity:1]`} style={{ borderRadius: "25px" }}>
                  <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                    <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="3712" height="4608" sizes="max((min(100vw - 120px, 1200px) - 60px) / 2, 1px)" srcSet={activeSlide.srcSet} src={activeSlide.src} alt="Supplement product shot" />
                  </div>
                </div>
              </div>
              <div className="framer-1n7incv items-center flex-none flex-row flex-nowrap place-content-center [overflow:visible] [opacity:1]">
                <div className="framer-ryr2qn items-center flex-[1_0_0px] flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                  <div className="framer-1flf8qw items-center flex-[1_0_0px] flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]" style={{ backgroundColor: "var(--token-7dec4550-2ba6-4025-bfd1-f0cbf4c0a7c9, rgb(247, 247, 247))", borderRadius: "11px" }} tabIndex={0} role="button" aria-label="Show product image 1" aria-pressed={slide === 0} onClick={() => setSlide(0)} onKeyDown={activateOnKey(() => setSlide(0))}>
                    {slide === 0 && <div className={`${PRODUCT_SLIDE_FILLS[0]} oi-progress will-change-transform [opacity:1]`} style={{ backgroundColor: "var(--token-f08ec090-da0b-4cc1-81bf-083f98422979, rgba(0, 0, 0, 0.25))" }} />}
                  </div>
                  <div className="framer-vmnse3 items-center flex-[1_0_0px] flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]" style={{ backgroundColor: "var(--token-7dec4550-2ba6-4025-bfd1-f0cbf4c0a7c9, rgb(247, 247, 247))", borderRadius: "99px" }} tabIndex={0} role="button" aria-label="Show product image 2" aria-pressed={slide === 1} onClick={() => setSlide(1)} onKeyDown={activateOnKey(() => setSlide(1))}>
                    {slide === 1 && <div className={`${PRODUCT_SLIDE_FILLS[1]} oi-progress will-change-transform [opacity:1]`} style={{ backgroundColor: "var(--token-f08ec090-da0b-4cc1-81bf-083f98422979, rgba(0, 0, 0, 0.25))" }} />}
                  </div>
                  <div className="framer-16r64xr items-center flex-[1_0_0px] flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]" style={{ backgroundColor: "var(--token-7dec4550-2ba6-4025-bfd1-f0cbf4c0a7c9, rgb(247, 247, 247))", borderRadius: "11px" }} tabIndex={0} role="button" aria-label="Show product image 3" aria-pressed={slide === 2} onClick={() => setSlide(2)} onKeyDown={activateOnKey(() => setSlide(2))}>
                    {slide === 2 && <div className={`${PRODUCT_SLIDE_FILLS[2]} oi-progress will-change-transform [opacity:1]`} style={{ backgroundColor: "var(--token-f08ec090-da0b-4cc1-81bf-083f98422979, rgba(0, 0, 0, 0.25))" }} />}
                  </div>
                  <div className="framer-plonj5 items-center flex-[1_0_0px] flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]" style={{ backgroundColor: "var(--token-7dec4550-2ba6-4025-bfd1-f0cbf4c0a7c9, rgb(247, 247, 247))", borderRadius: "11px" }} tabIndex={0} role="button" aria-label="Show product image 4" aria-pressed={slide === 3} onClick={() => setSlide(3)} onKeyDown={activateOnKey(() => setSlide(3))}>
                    {slide === 3 && <div className={`${PRODUCT_SLIDE_FILLS[3]} oi-progress will-change-transform [opacity:1]`} style={{ backgroundColor: "var(--token-f08ec090-da0b-4cc1-81bf-083f98422979, rgba(0, 0, 0, 0.25))" }} />}
                  </div>
                </div>
                <div className="framer-1n8oqsr [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-2d481a32-3657-4b5d-beb2-8e8433a83f75, rgba(0, 0, 0, 0.3))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-2d481a32-3657-4b5d-beb2-8e8433a83f75, rgba(0, 0, 0, 0.3)))" } as CSSProperties} dir="auto">/ 0{slide + 1}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="framer-cttykf items-start content-start justify-center [overflow:visible] [@media(max-width:679.98px)]:[order:1] [@media(min-width:680px)_and_(max-width:1199.98px)]:[order:1] will-change-transform [opacity:1]" style={{ transform: "none" }}>
          <div className="framer-adqs8w items-center flex-none flex-col flex-nowrap place-content-center [overflow:visible]">
            <div className="framer-degm7w items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)]">
              <div className="framer-xd39xg items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)]">
                <div className="framer-bmirh framer-1m186lm aspect-square flex-none" />
                <div className="framer-bmirh framer-lppaf aspect-square flex-none" />
                <div className="framer-bmirh framer-nsr4o0 aspect-square flex-none" />
                <div className="framer-bmirh framer-1289pv4 aspect-square flex-none" />
                <div className="framer-bmirh framer-jbjp3h aspect-square flex-none" />
              </div>
              <div className="framer-e7px68 [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-1gnmur6" dir="auto">9,500+ satisfied customers</p>
              </div>
            </div>
            <div className="framer-2hbelf [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
              <h2 className="framer-text framer-styles-preset-1r1gjyr" style={{ "--framer-text-alignment": "left" } as CSSProperties} dir="auto">OneThing Gummies</h2>
            </div>
            <div className="framer-1dz95bx items-center flex-none flex-row flex-nowrap content-center justify-start [opacity:0.5] [overflow:visible]">
              <div className="framer-1n75685 [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-sqgpjx" style={{ "--framer-text-alignment": "left" } as CSSProperties} dir="auto">30 Gummies</p>
              </div>
              <div className="framer-1vc2bke flex-none [overflow:var(--overflow-clip-fallback,clip)]" />
              <div className="framer-1myn7sk [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-sqgpjx" style={{ "--framer-text-alignment": "left" } as CSSProperties} dir="auto">1 Packet Per Serving</p>
              </div>
            </div>
          </div>
          <div className="framer-nd558s [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
            <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-alignment": "left" } as CSSProperties} dir="auto">The world's first gummy that replaces your entire supplement shelf. Immunity, digestion, sleep, energy, and vitality. Clinically made in a single daily dose with natural compounds for maximum absorption.</p>
          </div>
          <div className="ssr-variant">
            <div className="framer-1vn4wu-container" data-site-import-desktop-variant="">
              <div className="framer-loDpe framer-uvfdka items-start flex-col flex-nowrap content-start justify-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]" style={{ width: "100%" }} data-site-import-responsive="693">
                <div className="framer-19l9nlv items-center flex-none flex-col flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]" style={{ backgroundColor: "var(--token-7dec4550-2ba6-4025-bfd1-f0cbf4c0a7c9, rgb(247, 247, 247))", borderRadius: "15px" }}>
                  <div className={`framer-1fylbk7-container flex-none ${plan === "subscribe" ? "[opacity:1]" : "[opacity:0.7]"}`}>
                    <div className="framer-6BFw0 framer-2BTrO framer-XAi7s framer-1i4y0kw items-start flex-col flex-nowrap content-start justify-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]" style={{ backgroundColor: plan === "subscribe" ? "var(--token-136beebb-89fe-4d20-a894-e7f11788a217, rgb(255, 255, 255))" : "rgba(255, 255, 255, 0)", width: "100%", borderRadius: "12px" }} tabIndex={0} role="radio" aria-checked={plan === "subscribe"} onClick={() => setPlan("subscribe")} onKeyDown={activateOnKey(() => setPlan("subscribe"))}>
                      <div className="framer-17xjxmt items-center flex-none flex-row flex-nowrap content-center justify-between [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                        <div className="framer-1h3z5e8 [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                          <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7)))" } as CSSProperties} dir="auto">Pay monthly &amp; Save 20%</p>
                        </div>
                        <div className="framer-p9rqet [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                          <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7)))" } as CSSProperties} dir="auto">Shipped every 28 days</p>
                        </div>
                      </div>
                      <div className="framer-1k6xi3r items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                        <div className="framer-hsuov0 items-center flex-[1_0_0px] flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                          <div className={`framer-1imtrad items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] ${plan === "subscribe" ? "[opacity:1]" : "[opacity:0.4]"}`} style={{ "--border-bottom-width": "1px", "--border-color": "var(--token-b003f52b-7399-44f9-b6bd-f77049d374cf, rgba(0, 0, 0, 0.5))", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "var(--token-136beebb-89fe-4d20-a894-e7f11788a217, rgb(255, 255, 255))", borderRadius: "99px" } as CSSProperties} data-border="true">
                            <div className={`framer-1caz9sd flex-none [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] ${plan === "subscribe" ? "[opacity:1]" : "[opacity:0]"}`} style={{ backgroundColor: "var(--token-a5917666-de48-475a-8244-858af9f157b1, rgb(0, 0, 0))", borderRadius: "99px" }} />
                          </div>
                          <div className="framer-oupbtf [z-index:2] [opacity:1]" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-v37sa" dir="auto">Subscribe</p>
                          </div>
                        </div>
                        <div className="framer-1nakvzd items-center flex-none flex-row flex-nowrap content-center justify-end [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                          <div className="framer-1ib7sb7 [z-index:2] [opacity:1]" style={{ "--extracted-1lwpl3i": "var(--token-2d481a32-3657-4b5d-beb2-8e8433a83f75, rgba(0, 0, 0, 0.3))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <h5 className="framer-text" style={{ "--font-selector": "RlM7TWFucm9wZS1zZW1pYm9sZA==", "--framer-font-family": "\"Manrope\", \"Manrope Placeholder\", sans-serif", "--framer-font-weight": "600", "--framer-letter-spacing": "-0.02em", "--framer-line-height": "1em", "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-1lwpl3i, var(--token-2d481a32-3657-4b5d-beb2-8e8433a83f75, rgba(0, 0, 0, 0.3)))", "--framer-text-decoration": "line-through" } as CSSProperties} dir="auto">$60.00</h5>
                          </div>
                          <div className="framer-5mdk86 [z-index:2] [opacity:1]" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-v37sa" dir="auto">$48.00</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`framer-42csh1-container flex-none ${plan === "one-time" ? "[opacity:1]" : "[opacity:0.7]"}`}>
                    <div className="framer-6BFw0 framer-2BTrO framer-XAi7s framer-1i4y0kw items-start flex-col flex-nowrap content-start justify-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]" style={{ backgroundColor: plan === "one-time" ? "var(--token-136beebb-89fe-4d20-a894-e7f11788a217, rgb(255, 255, 255))" : "rgba(255, 255, 255, 0)", width: "100%", borderRadius: "12px" }} tabIndex={0} role="radio" aria-checked={plan === "one-time"} onClick={() => setPlan("one-time")} onKeyDown={activateOnKey(() => setPlan("one-time"))}>
                      <div className="framer-1k6xi3r items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                        <div className="framer-hsuov0 items-center flex-[1_0_0px] flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                          <div className={`framer-1imtrad items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] ${plan === "one-time" ? "[opacity:1]" : "[opacity:0.4]"}`} style={{ "--border-bottom-width": "1px", "--border-color": "var(--token-b003f52b-7399-44f9-b6bd-f77049d374cf, rgba(0, 0, 0, 0.5))", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "var(--token-136beebb-89fe-4d20-a894-e7f11788a217, rgb(255, 255, 255))", borderRadius: "99px" } as CSSProperties} data-border="true">
                            <div className={`framer-1caz9sd flex-none [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] ${plan === "one-time" ? "[opacity:1]" : "[opacity:0]"}`} style={{ backgroundColor: "var(--token-a5917666-de48-475a-8244-858af9f157b1, rgb(0, 0, 0))", borderRadius: "99px" }} />
                          </div>
                          <div className="framer-oupbtf [z-index:2] [opacity:1]" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-v37sa" dir="auto">One-Time Purchase</p>
                          </div>
                        </div>
                        <div className="framer-1nakvzd items-center flex-none flex-row flex-nowrap content-center justify-end [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                          <div className="framer-5mdk86 [z-index:2] [opacity:1]" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-v37sa" dir="auto">$60.00</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-1qssmuj-container flex-none [opacity:1]">
                  <a className="framer-6dH45 framer-FaBO9 framer-Jf64E framer-7z2klu framer-wcun84 [backdrop-filter:none] [opacity:1]" style={{ backgroundColor: "var(--token-a5917666-de48-475a-8244-858af9f157b1, rgb(0, 0, 0))", width: "100%", borderRadius: "99px" }} href="https://x.com/adheebhameed" rel="noopener">
                    <div className="framer-x7c3yg [opacity:1]" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-sqgpjx" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">{plan === "subscribe" ? "Subscribe & Save 20%" : "One-Time Purchase"}</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="framer-1vn4wu-container" style={{ "--site-import-responsive-display": "block" } as CSSProperties} data-site-import-mobile-variant="">
              <div className="framer-loDpe framer-uvfdka items-start flex-col flex-nowrap content-start justify-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]" style={{ width: "100%" }}>
                <div className="framer-19l9nlv items-center flex-none flex-col flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]" style={{ backgroundColor: "var(--token-7dec4550-2ba6-4025-bfd1-f0cbf4c0a7c9, rgb(247, 247, 247))", borderRadius: "15px" }}>
                  <div className={`framer-1fylbk7-container flex-none ${plan === "subscribe" ? "[opacity:1]" : "[opacity:0.7]"}`}>
                    <div className="framer-6BFw0 framer-2BTrO framer-XAi7s framer-1i4y0kw framer-v-1dtp7k5 items-start flex-col flex-nowrap content-start justify-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]" style={{ backgroundColor: plan === "subscribe" ? "var(--token-136beebb-89fe-4d20-a894-e7f11788a217, rgb(255, 255, 255))" : "rgba(255, 255, 255, 0)", width: "100%", borderRadius: "12px" }} tabIndex={0} role="radio" aria-checked={plan === "subscribe"} onClick={() => setPlan("subscribe")} onKeyDown={activateOnKey(() => setPlan("subscribe"))}>
                      <div className="framer-17xjxmt items-center flex-none flex-row flex-nowrap content-center justify-between [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                        <div className="framer-1h3z5e8 [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                          <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7)))" } as CSSProperties} dir="auto">Pay monthly &amp; Save 20%</p>
                        </div>
                        <div className="framer-p9rqet [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                          <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7)))" } as CSSProperties} dir="auto">Shipped every 28 days</p>
                        </div>
                      </div>
                      <div className="framer-1k6xi3r items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                        <div className="framer-hsuov0 items-center flex-[1_0_0px] flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                          <div className={`framer-1imtrad items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] ${plan === "subscribe" ? "[opacity:1]" : "[opacity:0.4]"}`} style={{ "--border-bottom-width": "1px", "--border-color": "var(--token-b003f52b-7399-44f9-b6bd-f77049d374cf, rgba(0, 0, 0, 0.5))", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "var(--token-136beebb-89fe-4d20-a894-e7f11788a217, rgb(255, 255, 255))", borderRadius: "99px" } as CSSProperties} data-border="true">
                            <div className={`framer-1caz9sd flex-none [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] ${plan === "subscribe" ? "[opacity:1]" : "[opacity:0]"}`} style={{ backgroundColor: "var(--token-a5917666-de48-475a-8244-858af9f157b1, rgb(0, 0, 0))", borderRadius: "99px" }} />
                          </div>
                          <div className="framer-oupbtf [z-index:2] [opacity:1]" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-v37sa" dir="auto">Subscribe</p>
                          </div>
                        </div>
                        <div className="framer-1nakvzd items-center flex-none flex-row flex-nowrap content-center justify-end [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                          <div className="framer-1ib7sb7 [z-index:2] [opacity:1]" style={{ "--extracted-1lwpl3i": "var(--token-2d481a32-3657-4b5d-beb2-8e8433a83f75, rgba(0, 0, 0, 0.3))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <h5 className="framer-text" style={{ "--font-selector": "RlM7TWFucm9wZS1zZW1pYm9sZA==", "--framer-font-family": "\"Manrope\", \"Manrope Placeholder\", sans-serif", "--framer-font-weight": "600", "--framer-letter-spacing": "-0.02em", "--framer-line-height": "1em", "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-1lwpl3i, var(--token-2d481a32-3657-4b5d-beb2-8e8433a83f75, rgba(0, 0, 0, 0.3)))", "--framer-text-decoration": "line-through" } as CSSProperties} dir="auto">$60.00</h5>
                          </div>
                          <div className="framer-5mdk86 [z-index:2] [opacity:1]" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-v37sa" dir="auto">$48.00</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`framer-42csh1-container flex-none ${plan === "one-time" ? "[opacity:1]" : "[opacity:0.7]"}`}>
                    <div className="framer-6BFw0 framer-2BTrO framer-XAi7s framer-1i4y0kw items-start flex-col flex-nowrap content-start justify-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]" style={{ backgroundColor: plan === "one-time" ? "var(--token-136beebb-89fe-4d20-a894-e7f11788a217, rgb(255, 255, 255))" : "rgba(255, 255, 255, 0)", width: "100%", borderRadius: "12px" }} tabIndex={0} role="radio" aria-checked={plan === "one-time"} onClick={() => setPlan("one-time")} onKeyDown={activateOnKey(() => setPlan("one-time"))}>
                      <div className="framer-1k6xi3r items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                        <div className="framer-hsuov0 items-center flex-[1_0_0px] flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                          <div className={`framer-1imtrad items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] ${plan === "one-time" ? "[opacity:1]" : "[opacity:0.4]"}`} style={{ "--border-bottom-width": "1px", "--border-color": "var(--token-b003f52b-7399-44f9-b6bd-f77049d374cf, rgba(0, 0, 0, 0.5))", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "var(--token-136beebb-89fe-4d20-a894-e7f11788a217, rgb(255, 255, 255))", borderRadius: "99px" } as CSSProperties} data-border="true">
                            <div className={`framer-1caz9sd flex-none [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] ${plan === "one-time" ? "[opacity:1]" : "[opacity:0]"}`} style={{ backgroundColor: "var(--token-a5917666-de48-475a-8244-858af9f157b1, rgb(0, 0, 0))", borderRadius: "99px" }} />
                          </div>
                          <div className="framer-oupbtf [z-index:2] [opacity:1]" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-v37sa" dir="auto">One-Time Purchase</p>
                          </div>
                        </div>
                        <div className="framer-1nakvzd items-center flex-none flex-row flex-nowrap content-center justify-end [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                          <div className="framer-5mdk86 [z-index:2] [opacity:1]" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-v37sa" dir="auto">$60.00</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-1qssmuj-container flex-none [opacity:1]">
                  <a className="framer-6dH45 framer-FaBO9 framer-Jf64E framer-7z2klu framer-wcun84 [backdrop-filter:none] [opacity:1]" style={{ backgroundColor: "var(--token-a5917666-de48-475a-8244-858af9f157b1, rgb(0, 0, 0))", width: "100%", borderRadius: "99px" }} href="https://x.com/adheebhameed" rel="noopener">
                    <div className="framer-x7c3yg [opacity:1]" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-sqgpjx" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">{plan === "subscribe" ? "Subscribe & Save 20%" : "One-Time Purchase"}</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="framer-1cb1mt items-center flex-none flex-row flex-wrap content-center justify-between [overflow:var(--overflow-clip-fallback,clip)]" data-border="true">
            <div className="framer-kifd92 items-center flex-[1_0_0px] flex-col flex-nowrap content-center justify-start [overflow:visible]">
              <div className="framer-MJh8x framer-1ke6tai aspect-square flex-none" />
              <div className="framer-140tey3" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-51skty" dir="auto">Free Shipping</p>
              </div>
            </div>
            <div className="framer-1xebbya self-stretch flex-none [overflow:var(--overflow-clip-fallback,clip)]" />
            <div className="framer-xyfjid items-center flex-[1_0_0px] flex-col flex-nowrap content-center justify-start [overflow:visible]">
              <div className="framer-I0SuY framer-2jldst aspect-square flex-none" />
              <div className="framer-11h0gzi" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-51skty" dir="auto">100% Natural </p>
              </div>
            </div>
            <div className="framer-13itw0h self-stretch flex-none [overflow:var(--overflow-clip-fallback,clip)]" />
            <div className="framer-dq2iku items-center flex-[1_0_0px] flex-col flex-nowrap content-center justify-start [overflow:visible]">
              <div className="framer-lzrck framer-14u69fu aspect-square flex-none" />
              <div className="framer-1q88r5h" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-51skty" dir="auto">Diet Friendly</p>
              </div>
            </div>
          </div>
          <div className="framer-1v4bc7 items-center flex-none flex-col flex-nowrap place-content-center [overflow:visible]">
            <div className="ssr-variant">
              <div className="framer-15znfnl-container">
                <div className={`framer-HvOY4 framer-qhMV1 framer-odhqv7 ${openDetails.includes(0) ? "framer-v-odhqv7" : "framer-v-1ocuso8"} items-start flex-col flex-nowrap content-start justify-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]`} style={{ backgroundColor: "var(--token-136beebb-89fe-4d20-a894-e7f11788a217, rgb(255, 255, 255))", width: "100%", borderRadius: "12px" }} tabIndex={0} role="button" aria-expanded={openDetails.includes(0)} onClick={() => setOpenDetails((list) => toggleIndex(list, 0))} onKeyDown={activateOnKey(() => setOpenDetails((list) => toggleIndex(list, 0)))}>
                  <div className="framer-85xd3t items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                    <div className="framer-yoQJ9 framer-13t4c2t aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-220b89ed-795b-40ee-a164-3b3423c23e62, rgba(0, 0, 0, 0.7))" } as CSSProperties} />
                    <div className="framer-nt8qln wrap-break-word select-none [word-break:break-word] [opacity:1]" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-1gnmur6" dir="auto">What's inside?</p>
                    </div>
                    <div className="framer-1bpjs6g items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]" style={{ transform: "rotate(-90deg)" }}>
                      <div className="framer-4dJXD framer-1oe5sxv aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-81920546-4d5c-4567-9fb8-0038b4f7b1df, rgba(0, 0, 0, 0.5))", transform: openDetails.includes(0) ? "rotate(90deg)" : "none" } as CSSProperties} />
                    </div>
                  </div>
                  {openDetails.includes(0) && (
                    <div className="framer-f91glz" style={{ "--extracted-r6o4lv": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7)))" } as CSSProperties} dir="auto">{PRODUCT_DETAILS[0]}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="ssr-variant">
              <div className="framer-ip2fzl-container">
                <div className={`framer-HvOY4 framer-qhMV1 framer-odhqv7 ${openDetails.includes(1) ? "framer-v-odhqv7" : "framer-v-1ocuso8"} items-start flex-col flex-nowrap content-start justify-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]`} style={{ backgroundColor: "var(--token-136beebb-89fe-4d20-a894-e7f11788a217, rgb(255, 255, 255))", width: "100%", borderRadius: "12px" }} tabIndex={0} role="button" aria-expanded={openDetails.includes(1)} onClick={() => setOpenDetails((list) => toggleIndex(list, 1))} onKeyDown={activateOnKey(() => setOpenDetails((list) => toggleIndex(list, 1)))}>
                  <div className="framer-85xd3t items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                    <div className="framer-AvdJx framer-13t4c2t aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-220b89ed-795b-40ee-a164-3b3423c23e62, rgba(0, 0, 0, 0.7))" } as CSSProperties} />
                    <div className="framer-nt8qln wrap-break-word select-none [word-break:break-word] [opacity:1]" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-1gnmur6" dir="auto">How to take</p>
                    </div>
                    <div className="framer-1bpjs6g items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]" style={{ transform: "rotate(-90deg)" }}>
                      <div className="framer-4dJXD framer-1oe5sxv aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-81920546-4d5c-4567-9fb8-0038b4f7b1df, rgba(0, 0, 0, 0.5))", transform: openDetails.includes(1) ? "rotate(90deg)" : "none" } as CSSProperties} />
                    </div>
                  </div>
                  {openDetails.includes(1) && (
                    <div className="framer-f91glz" style={{ "--extracted-r6o4lv": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7)))" } as CSSProperties} dir="auto">{PRODUCT_DETAILS[1]}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="ssr-variant">
              <div className="framer-1qiln8x-container">
                <div className={`framer-HvOY4 framer-qhMV1 framer-odhqv7 ${openDetails.includes(2) ? "framer-v-odhqv7" : "framer-v-1ocuso8"} items-start flex-col flex-nowrap content-start justify-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]`} style={{ backgroundColor: "var(--token-136beebb-89fe-4d20-a894-e7f11788a217, rgb(255, 255, 255))", width: "100%", borderRadius: "12px" }} tabIndex={0} role="button" aria-expanded={openDetails.includes(2)} onClick={() => setOpenDetails((list) => toggleIndex(list, 2))} onKeyDown={activateOnKey(() => setOpenDetails((list) => toggleIndex(list, 2)))}>
                  <div className="framer-85xd3t items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                    <div className="framer-zRbQg framer-13t4c2t aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-220b89ed-795b-40ee-a164-3b3423c23e62, rgba(0, 0, 0, 0.7))" } as CSSProperties} />
                    <div className="framer-nt8qln wrap-break-word select-none [word-break:break-word] [opacity:1]" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-1gnmur6" dir="auto">Shipping &amp; returns</p>
                    </div>
                    <div className="framer-1bpjs6g items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]" style={{ transform: "rotate(-90deg)" }}>
                      <div className="framer-4dJXD framer-1oe5sxv aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-81920546-4d5c-4567-9fb8-0038b4f7b1df, rgba(0, 0, 0, 0.5))", transform: openDetails.includes(2) ? "rotate(90deg)" : "none" } as CSSProperties} />
                    </div>
                  </div>
                  {openDetails.includes(2) && (
                    <div className="framer-f91glz" style={{ "--extracted-r6o4lv": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7)))" } as CSSProperties} dir="auto">{PRODUCT_DETAILS[2]}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const FAQ_ANSWERS = [
  "OneThing is a single daily gummy that supports immunity, digestion, sleep, and energy. Instead of taking multiple supplements throughout the day, you get everything in one convenient dose backed by clinically studied ingredients.",
  "Just one. That's the whole point. Take one gummy in the morning with or without food, and you're covered for the entire day. No complicated routines, no handful of pills.",
  "OneThing is made with 100% natural ingredients and is third-party tested for purity and potency. However, if you're currently on medication or have a pre-existing condition, we always recommend consulting your doctor before starting any new supplement.",
  "Most customers notice improved energy and digestion within the first 1–2 weeks. Immune and sleep benefits typically become noticeable after 30 days of consistent daily use. For best results, we recommend a minimum 90-day commitment.",
  "Every order is backed by a 60-day money-back guarantee. If you don't feel a difference, reach out to our team and we'll refund you — no questions asked, no hoops to jump through.",
  "Yes. OneThing is 100% vegan, gluten-free, dairy-free, and contains no artificial colors or sweeteners. It's made in a GMP-certified facility and tested for all major allergens.",
];


function ImportedSectionFAQSection() {
  const [openFaqs, setOpenFaqs] = useState<number[]>([]);
  return (
    <section className="framer-1f7jma3 items-start content-start justify-center [overflow:var(--overflow-clip-fallback,clip)] [scroll-margin-top:60px] [will-change:var(--framer-will-change-override,transform)] [z-index:2]" id="faq">
      <div className="framer-bbk154 items-start max-w-[1200px] content-start justify-center [overflow:visible]">
        <div className="framer-ql40bw items-center flex-[1_0_0px] flex-col flex-nowrap max-w-[600px] place-content-center [overflow:visible]">
          <div className="framer-m1srp7 [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
            <h2 className="framer-text framer-styles-preset-1r1gjyr" style={{ "--framer-text-alignment": "center" } as CSSProperties} dir="auto">Got questions? We're here to help</h2>
          </div>
          <div className="framer-rbzvac items-center flex-none flex-col flex-nowrap place-content-center [overflow:visible]">
            <div className="ssr-variant">
              <div className="framer-6gdc90-container will-change-transform [opacity:1]" style={{ transform: "none" }}>
                <div className={`framer-h9poP framer-FaBO9 framer-qhMV1 framer-11vn5nc ${openFaqs.includes(0) ? "framer-v-11vn5nc" : "framer-v-1rhfu2w"} items-start flex-col flex-nowrap content-start justify-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]`} style={{ backgroundColor: "var(--token-136beebb-89fe-4d20-a894-e7f11788a217, rgb(255, 255, 255))", width: "100%", borderRadius: "12px" }} tabIndex={0} role="button" aria-expanded={openFaqs.includes(0)} onClick={() => setOpenFaqs((list) => toggleIndex(list, 0))} onKeyDown={activateOnKey(() => setOpenFaqs((list) => toggleIndex(list, 0)))}>
                  <div className="framer-18eljuz items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                    <div className="framer-16y69vw wrap-break-word select-none [word-break:break-word] [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-20520155-1f7c-48bb-bab4-b385c8b0875a, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-sqgpjx" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-20520155-1f7c-48bb-bab4-b385c8b0875a, rgb(0, 0, 0)))" } as CSSProperties} dir="auto">What does OneThing actually do?</p>
                    </div>
                    <div className="framer-q26q4r items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]" style={{ transform: openFaqs.includes(0) ? "none" : "rotate(-90deg)" }}>
                      <div className="framer-4dJXD framer-1n78sdg aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-220b89ed-795b-40ee-a164-3b3423c23e62, rgba(0, 0, 0, 0.7))", transform: openFaqs.includes(0) ? "rotate(90deg)" : "none" } as CSSProperties} />
                    </div>
                  </div>
                  {openFaqs.includes(0) && (
                    <div className="framer-1rf6utj" style={{ "--extracted-r6o4lv": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7)))" } as CSSProperties} dir="auto">{FAQ_ANSWERS[0]}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="ssr-variant">
              <div className="framer-xjn139-container will-change-transform [opacity:1]" style={{ transform: "none" }}>
                <div className={`framer-h9poP framer-FaBO9 framer-qhMV1 framer-11vn5nc ${openFaqs.includes(1) ? "framer-v-11vn5nc" : "framer-v-1rhfu2w"} items-start flex-col flex-nowrap content-start justify-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]`} style={{ backgroundColor: "var(--token-136beebb-89fe-4d20-a894-e7f11788a217, rgb(255, 255, 255))", width: "100%", borderRadius: "12px" }} tabIndex={0} role="button" aria-expanded={openFaqs.includes(1)} onClick={() => setOpenFaqs((list) => toggleIndex(list, 1))} onKeyDown={activateOnKey(() => setOpenFaqs((list) => toggleIndex(list, 1)))}>
                  <div className="framer-18eljuz items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                    <div className="framer-16y69vw wrap-break-word select-none [word-break:break-word] [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-20520155-1f7c-48bb-bab4-b385c8b0875a, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-sqgpjx" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-20520155-1f7c-48bb-bab4-b385c8b0875a, rgb(0, 0, 0)))" } as CSSProperties} dir="auto">How many gummies do I need to take per day?</p>
                    </div>
                    <div className="framer-q26q4r items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]" style={{ transform: openFaqs.includes(1) ? "none" : "rotate(-90deg)" }}>
                      <div className="framer-4dJXD framer-1n78sdg aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-220b89ed-795b-40ee-a164-3b3423c23e62, rgba(0, 0, 0, 0.7))", transform: openFaqs.includes(1) ? "rotate(90deg)" : "none" } as CSSProperties} />
                    </div>
                  </div>
                  {openFaqs.includes(1) && (
                    <div className="framer-1rf6utj" style={{ "--extracted-r6o4lv": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7)))" } as CSSProperties} dir="auto">{FAQ_ANSWERS[1]}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="ssr-variant">
              <div className="framer-btd0cx-container will-change-transform [opacity:1]" style={{ transform: "none" }}>
                <div className={`framer-h9poP framer-FaBO9 framer-qhMV1 framer-11vn5nc ${openFaqs.includes(2) ? "framer-v-11vn5nc" : "framer-v-1rhfu2w"} items-start flex-col flex-nowrap content-start justify-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]`} style={{ backgroundColor: "var(--token-136beebb-89fe-4d20-a894-e7f11788a217, rgb(255, 255, 255))", width: "100%", borderRadius: "12px" }} tabIndex={0} role="button" aria-expanded={openFaqs.includes(2)} onClick={() => setOpenFaqs((list) => toggleIndex(list, 2))} onKeyDown={activateOnKey(() => setOpenFaqs((list) => toggleIndex(list, 2)))}>
                  <div className="framer-18eljuz items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                    <div className="framer-16y69vw wrap-break-word select-none [word-break:break-word] [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-20520155-1f7c-48bb-bab4-b385c8b0875a, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-sqgpjx" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-20520155-1f7c-48bb-bab4-b385c8b0875a, rgb(0, 0, 0)))" } as CSSProperties} dir="auto">Is it safe to take with other medications?</p>
                    </div>
                    <div className="framer-q26q4r items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]" style={{ transform: openFaqs.includes(2) ? "none" : "rotate(-90deg)" }}>
                      <div className="framer-4dJXD framer-1n78sdg aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-220b89ed-795b-40ee-a164-3b3423c23e62, rgba(0, 0, 0, 0.7))", transform: openFaqs.includes(2) ? "rotate(90deg)" : "none" } as CSSProperties} />
                    </div>
                  </div>
                  {openFaqs.includes(2) && (
                    <div className="framer-1rf6utj" style={{ "--extracted-r6o4lv": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7)))" } as CSSProperties} dir="auto">{FAQ_ANSWERS[2]}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="ssr-variant">
              <div className="framer-m31mq9-container will-change-transform [opacity:1]" style={{ transform: "none" }}>
                <div className={`framer-h9poP framer-FaBO9 framer-qhMV1 framer-11vn5nc ${openFaqs.includes(3) ? "framer-v-11vn5nc" : "framer-v-1rhfu2w"} items-start flex-col flex-nowrap content-start justify-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]`} style={{ backgroundColor: "var(--token-136beebb-89fe-4d20-a894-e7f11788a217, rgb(255, 255, 255))", width: "100%", borderRadius: "12px" }} tabIndex={0} role="button" aria-expanded={openFaqs.includes(3)} onClick={() => setOpenFaqs((list) => toggleIndex(list, 3))} onKeyDown={activateOnKey(() => setOpenFaqs((list) => toggleIndex(list, 3)))}>
                  <div className="framer-18eljuz items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                    <div className="framer-16y69vw wrap-break-word select-none [word-break:break-word] [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-20520155-1f7c-48bb-bab4-b385c8b0875a, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-sqgpjx" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-20520155-1f7c-48bb-bab4-b385c8b0875a, rgb(0, 0, 0)))" } as CSSProperties} dir="auto">How long before I start seeing results?</p>
                    </div>
                    <div className="framer-q26q4r items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]" style={{ transform: openFaqs.includes(3) ? "none" : "rotate(-90deg)" }}>
                      <div className="framer-4dJXD framer-1n78sdg aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-220b89ed-795b-40ee-a164-3b3423c23e62, rgba(0, 0, 0, 0.7))", transform: openFaqs.includes(3) ? "rotate(90deg)" : "none" } as CSSProperties} />
                    </div>
                  </div>
                  {openFaqs.includes(3) && (
                    <div className="framer-1rf6utj" style={{ "--extracted-r6o4lv": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7)))" } as CSSProperties} dir="auto">{FAQ_ANSWERS[3]}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="ssr-variant">
              <div className="framer-1teae2x-container will-change-transform [opacity:1]" style={{ transform: "none" }}>
                <div className={`framer-h9poP framer-FaBO9 framer-qhMV1 framer-11vn5nc ${openFaqs.includes(4) ? "framer-v-11vn5nc" : "framer-v-1rhfu2w"} items-start flex-col flex-nowrap content-start justify-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]`} style={{ backgroundColor: "var(--token-136beebb-89fe-4d20-a894-e7f11788a217, rgb(255, 255, 255))", width: "100%", borderRadius: "12px" }} tabIndex={0} role="button" aria-expanded={openFaqs.includes(4)} onClick={() => setOpenFaqs((list) => toggleIndex(list, 4))} onKeyDown={activateOnKey(() => setOpenFaqs((list) => toggleIndex(list, 4)))}>
                  <div className="framer-18eljuz items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                    <div className="framer-16y69vw wrap-break-word select-none [word-break:break-word] [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-20520155-1f7c-48bb-bab4-b385c8b0875a, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-sqgpjx" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-20520155-1f7c-48bb-bab4-b385c8b0875a, rgb(0, 0, 0)))" } as CSSProperties} dir="auto">What happens if it doesn't work for me?</p>
                    </div>
                    <div className="framer-q26q4r items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]" style={{ transform: openFaqs.includes(4) ? "none" : "rotate(-90deg)" }}>
                      <div className="framer-4dJXD framer-1n78sdg aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-220b89ed-795b-40ee-a164-3b3423c23e62, rgba(0, 0, 0, 0.7))", transform: openFaqs.includes(4) ? "rotate(90deg)" : "none" } as CSSProperties} />
                    </div>
                  </div>
                  {openFaqs.includes(4) && (
                    <div className="framer-1rf6utj" style={{ "--extracted-r6o4lv": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7)))" } as CSSProperties} dir="auto">{FAQ_ANSWERS[4]}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="ssr-variant">
              <div className="framer-1rvv2kb-container will-change-transform [opacity:1]" style={{ transform: "none" }}>
                <div className={`framer-h9poP framer-FaBO9 framer-qhMV1 framer-11vn5nc ${openFaqs.includes(5) ? "framer-v-11vn5nc" : "framer-v-1rhfu2w"} items-start flex-col flex-nowrap content-start justify-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]`} style={{ backgroundColor: "var(--token-136beebb-89fe-4d20-a894-e7f11788a217, rgb(255, 255, 255))", width: "100%", borderRadius: "12px" }} tabIndex={0} role="button" aria-expanded={openFaqs.includes(5)} onClick={() => setOpenFaqs((list) => toggleIndex(list, 5))} onKeyDown={activateOnKey(() => setOpenFaqs((list) => toggleIndex(list, 5)))}>
                  <div className="framer-18eljuz items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                    <div className="framer-16y69vw wrap-break-word select-none [word-break:break-word] [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-20520155-1f7c-48bb-bab4-b385c8b0875a, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-sqgpjx" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-20520155-1f7c-48bb-bab4-b385c8b0875a, rgb(0, 0, 0)))" } as CSSProperties} dir="auto">Is it vegan and allergen-friendly?</p>
                    </div>
                    <div className="framer-q26q4r items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]" style={{ transform: openFaqs.includes(5) ? "none" : "rotate(-90deg)" }}>
                      <div className="framer-4dJXD framer-1n78sdg aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-220b89ed-795b-40ee-a164-3b3423c23e62, rgba(0, 0, 0, 0.7))", transform: openFaqs.includes(5) ? "rotate(90deg)" : "none" } as CSSProperties} />
                    </div>
                  </div>
                  {openFaqs.includes(5) && (
                    <div className="framer-1rf6utj" style={{ "--extracted-r6o4lv": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7)))" } as CSSProperties} dir="auto">{FAQ_ANSWERS[5]}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
            <a className="framer-6dH45 framer-FaBO9 framer-Jf64E framer-7z2klu framer-wcun84 [backdrop-filter:none] [border-radius:99px] [opacity:1]" style={{ backgroundColor: "var(--token-136beebb-89fe-4d20-a894-e7f11788a217, rgb(255, 255, 255))" }} data-framer-page-link-current="true" href="/">
              <div className="framer-x7c3yg [opacity:1]" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-sqgpjx" dir="auto">Get Supplement</p>
              </div>
            </a>
          </div>
          <div className="framer-1acd4v7-container flex-none [z-index:2]">
            <a className="framer-6dH45 framer-FaBO9 framer-Jf64E framer-7z2klu framer-wcun84 [backdrop-filter:blur(10px)] [border-radius:99px] [opacity:1]" style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }} href="/#ingredients">
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
        <ul className="list-none justify-start flex-row [opacity:1] items-center [max-height:100%] [max-width:100%]" style={{ display: "flex", position: "relative", padding: "0px", margin: "0px", gap: "25px", width: "100%", height: "100%", transform: "translateX(-1143.88px)" }}>
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
                        <img className="[border-radius:inherit] [corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%" }} decoding="auto" width="4096" height="4096" sizes="320px" srcSet="/site-assets/fa50155be2979378.avif 512w, /site-assets/3e5070104e849c20.avif 1024w, /site-assets/2b19a1113aafaaf0.webp 4096w" src="/site-assets/2b19a1113aafaaf0.webp" alt="Person holding supplement sachet next to his face" />
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
                        <img className="[border-radius:inherit] [corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%" }} decoding="auto" width="4096" height="4096" sizes="320px" srcSet="/site-assets/501de64378573e08.avif 512w, /site-assets/582baf5e6a8281ba.webp 4096w" src="/site-assets/582baf5e6a8281ba.webp" alt="Woman taking selfie with the supplement product" />
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
                        <img className="[border-radius:inherit] [corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%" }} decoding="auto" width="4096" height="4096" sizes="320px" srcSet="/site-assets/d3637162259014b5.avif 512w, /site-assets/2943b5155f2682b1.webp 4096w" src="/site-assets/2943b5155f2682b1.webp" alt="man holding a supplement box" />
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
                        <img className="[border-radius:inherit] [corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%" }} decoding="auto" width="4096" height="4096" sizes="320px" srcSet="/site-assets/0874c04a32171426.avif 512w, /site-assets/7561227e5a4ee60e.webp 4096w" src="/site-assets/7561227e5a4ee60e.webp" alt="woman drinking coffee while having hands placed on the supplement box" />
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
                        <img className="[border-radius:inherit] [corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%" }} decoding="auto" width="4096" height="4096" sizes="320px" srcSet="/site-assets/ccd619873287b069.avif 512w, /site-assets/68a47e4b75683182.webp 4096w" src="/site-assets/68a47e4b75683182.webp" alt="Supplement product on the biscep of a person" />
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
                      <img className="[border-radius:inherit] [corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%" }} decoding="auto" width="4096" height="4096" sizes="320px" srcSet="/site-assets/fa50155be2979378.avif 512w, /site-assets/3e5070104e849c20.avif 1024w, /site-assets/2b19a1113aafaaf0.webp 4096w" src="/site-assets/2b19a1113aafaaf0.webp" alt="Person holding supplement sachet next to his face" />
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
                      <img className="[border-radius:inherit] [corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%" }} decoding="auto" width="4096" height="4096" sizes="320px" srcSet="/site-assets/501de64378573e08.avif 512w, /site-assets/582baf5e6a8281ba.webp 4096w" src="/site-assets/582baf5e6a8281ba.webp" alt="Woman taking selfie with the supplement product" />
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
                      <img className="[border-radius:inherit] [corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%" }} decoding="auto" width="4096" height="4096" sizes="320px" srcSet="/site-assets/d3637162259014b5.avif 512w, /site-assets/2943b5155f2682b1.webp 4096w" src="/site-assets/2943b5155f2682b1.webp" alt="man holding a supplement box" />
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
                      <img className="[border-radius:inherit] [corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%" }} decoding="auto" width="4096" height="4096" sizes="320px" srcSet="/site-assets/0874c04a32171426.avif 512w, /site-assets/7561227e5a4ee60e.webp 4096w" src="/site-assets/7561227e5a4ee60e.webp" alt="woman drinking coffee while having hands placed on the supplement box" />
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
                      <img className="[border-radius:inherit] [corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%" }} decoding="auto" width="4096" height="4096" sizes="320px" srcSet="/site-assets/ccd619873287b069.avif 512w, /site-assets/68a47e4b75683182.webp 4096w" src="/site-assets/68a47e4b75683182.webp" alt="Supplement product on the biscep of a person" />
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
                <a className="framer-trzQi framer-FaBO9 framer-qhMV1 framer-udbtyz framer-v-wuyut1 framer-128y9cq items-center flex-row! flex-col flex-nowrap place-content-center [overflow:visible] [padding:8px_15px_8px_8px] [backdrop-filter:blur(5px)] [opacity:1]" style={{ "--border-bottom-width": "1px", "--border-color": "var(--token-8bbbea30-76c9-4ba6-997e-07eab0911b28, rgb(255, 255, 255))", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "var(--token-7dec4550-2ba6-4025-bfd1-f0cbf4c0a7c9, rgb(247, 247, 247))", width: "100%", borderRadius: "18px" } as CSSProperties} data-border="true" href="/#buy-product">
                  <div className="framer-12ym6a6 items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]" style={{ backgroundColor: "var(--token-136beebb-89fe-4d20-a894-e7f11788a217, rgb(255, 255, 255))", borderRadius: "15px" }}>
                    <div className="framer-k82luq aspect-square flex-none [overflow:visible] [filter:drop-shadow(rgba(0,_0,_0,_0.15)_0px_5px_3px)] [opacity:1]">
                      <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                        <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="8000" height="8000" sizes="(min-width: 1200px) 50px, (max-width: 679.98px) 50px, (min-width: 680px) and (max-width: 1199.98px) 50px" srcSet="/site-assets/d3f19ecc7e04313e.avif 512w, /site-assets/119c2221c7b0d4b7.avif 1024w, /site-assets/6ce9177316b622fa.avif 2048w, /site-assets/64096d728d2ab117.avif 4096w" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="framer-o187ju content-center! items-center flex-[1_0_0px] flex-row flex-nowrap content-end justify-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
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
                      <img className="[border-radius:inherit] [corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%" }} decoding="auto" width="1418" height="1418" sizes="(min-width: 1200px) 48px, (max-width: 679.98px) 48px, (min-width: 680px) and (max-width: 1199.98px) 48px" srcSet="/site-assets/47141cd533a3906c.avif 512w, /site-assets/3e86127cbfae5eee.avif 1418w" src="/site-assets/3e86127cbfae5eee.avif" alt="Trust badge logo" />
                    </div>
                  </div>
                </div>
                <div className="ssr-variant">
                  <div className="framer-izbab2 aspect-square flex-none [overflow:visible]">
                    <div className="[border-radius:inherit] [corner-shape:inherit] [inset:0px]" style={{ position: "absolute" }}>
                      <img className="[border-radius:inherit] [corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%" }} decoding="auto" width="1197" height="1197" sizes="(min-width: 1200px) 48px, (max-width: 679.98px) 48px, (min-width: 680px) and (max-width: 1199.98px) 48px" srcSet="/site-assets/8a6af12464dc689c.avif 512w, /site-assets/2be8954f60e86e37.avif 1197w" src="/site-assets/2be8954f60e86e37.avif" alt="Trust badge logo" />
                    </div>
                  </div>
                </div>
                <div className="ssr-variant">
                  <div className="framer-1bd7h6a aspect-square flex-none [overflow:visible]">
                    <div className="[border-radius:inherit] [corner-shape:inherit] [inset:0px]" style={{ position: "absolute" }}>
                      <img className="[border-radius:inherit] [corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%" }} decoding="auto" width="1415" height="1415" sizes="(min-width: 1200px) 48px, (max-width: 679.98px) 48px, (min-width: 680px) and (max-width: 1199.98px) 48px" srcSet="/site-assets/e71056178738c14f.avif 512w, /site-assets/c3fc84c02217b695.avif 1415w" src="/site-assets/c3fc84c02217b695.avif" alt="Trust badge logo" />
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
                  <a className="framer-text framer-styles-preset-dnlggy" data-framer-page-link-current="true" href="/">Homepage</a>
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
      </div>
    </footer>
  );
}


function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return [ref, inView] as const;
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
