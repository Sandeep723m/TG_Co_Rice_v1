import riceFarmerLogo from "../assets/Finest Rice Farmer Logo.png";
import riceFarmerStencil from "../assets/Monochrome Rice Paddy Farmer Stencil.png";
import basmatiRiceBag from "../assets/Forest Green Basmati Rice Packaging.png";
import riceGrainAgainstBlueSky from "../assets/Rice Grain Against Blue Sky.png";
import premiumRiceGreenBackground from "../assets/Premium Rice Green Field Background.png";
import macroPolishedRiceGrain from "../assets/Macro Polished Rice Grain.png";
import goldenRicePanicleCutout from "../assets/Golden Rice Panicle 1 Cutout.png";
import greenLeafTopLeft from "../assets/green_leaf_top_left.png";
import woodenBowlBasmatiRice from "../assets/Wooden Bowl of Basmati Rice.png";
import idliRicePackaging from "../assets/TG.CO Finest Idli Rice Packaging.png";
import goldenRiceCascade from "../assets/Golden Rice Cascade from Wooden Scoop.png";
import riceFieldFarmers from "../assets/cb2c6a6b564ede6a6739443fd943e8c8.jpg";
import fieldsToMealsImage from "../assets/Harvest-Ready Rice Under Summer Skies.png";
import whiteWheatEmblem from "../assets/White Stylised Wheat Emblem.png";
import sonaMasooriRiceBag from "../assets/Telangana Sona Masoori Rice Bag.png";
import sona2MasooriRiceBag from "../assets/Telangana Sona 2 Masoori Rice Bag.png";
import premiumSonaMasooriRice from "../assets/Premium Sona Masoori Rice Bag.png";
import ponniRiceBag from "../assets/Ponni Rice Bag with Floating Grains.png";
import premiumIdliRice from "../assets/Premium Blue Idli Rice Packaging.png";
import unzippingIdliRiceBag from "../assets/Unzipping a Blue Idli Rice Bag.png";
import ctaMainImage from "../assets/Joyful Woman Savouring Steaming Curry Rice.png";
import joyfulRiceFamilyMeal from "../assets/Joyful South Asian Family Meal.png";
import warmRiceFeast from "../assets/Warm Restaurant Table with Rice Feast.png";
import joyfulRiceCooking from "../assets/Joyful Rice Cooking in a Sunlit Kitchen.png";
import cuppedRiceGrain from "../assets/Cupped Handful of Rice Against Blue Sky.png";
import benefitTasteImage from "../assets/9c2c1ef611eaa3410d49ee37a16b6682.jpg";
import benefitPurityImage from "../assets/7b10d795514710e95f0f2f0ef38437d7.jpg";
import benefitNutritionImage from "../assets/Moody Kitchen Meal Prep with Rice.png";
import benefitVersatilityImage from "../assets/4009737d229eac956e611b9a995e5d1d.jpg";
import benefitOriginImage from "../assets/5a5d386228af8c8e5dad117736a5018b.jpg";
import type { CSSProperties, KeyboardEvent } from "react";
import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/index.css?raw";
import { animateLayoutHeight, fxInitialCss, useFramerEffects } from "../lib/framer-effects";
import { HOME_FX } from "../lib/onething-motion";
import { ProductShelf } from "../components/storefront";

const HOME_FX_CSS = fxInitialCss(HOME_FX);
// Variant transitions of the FAQ and product-detail accordions on the source site.
const FAQ_SPRING = { type: "spring", duration: 0.7, bounce: 0.2 } as const;
const DETAILS_SPRING = { type: "spring", duration: 0.7, bounce: 0 } as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TG.CO Finest Rice | Telangana Rice" },
      { name: "description", content: "Naturally grown Telangana rice, carefully selected for authentic taste and everyday meals." },
      { property: "og:title", content: "TG.CO Finest Rice | Telangana Rice" },
      { property: "og:description", content: "Naturally grown Telangana rice, carefully selected for authentic taste and everyday meals." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  staticData: { importedDocument: { html: { "dir": "ltr", "lang": "en" }, body: { "data-site-import-responsive-incomplete": "class-range-budget" } } },
  component: Index,
});

export function Index({ version = 1 }: { version?: 1 | 2 }) {
  useImportedLayout();
  useFramerEffects(HOME_FX);
  return (
    <>
      <style>{capturedCSS}</style>
      <style>{HOME_FX_CSS}</style>
      <div id="main" className={version === 2 ? "oi-version-two" : undefined}>
        <div className="framer-DrtIB framer-71N50 framer-2BTrO framer-Jf64E framer-a8wg0 framer-9H6qh framer-unEwr framer-1n95zts items-center flex-col flex-nowrap content-center justify-start [overflow:var(--overflow-clip-fallback,clip)] [min-height:100vh]" style={{ width: "auto" }} data-layout-template="true">
          <ImportedDivOfferNav version={version} />
          <ImportedDivOfferNav2 version={version} />
          <div className="framer-CWw9Z framer-RzgxU framer-4SWp1 framer-oziYd framer-Jf64E framer-T8kHB framer-qhMV1 framer-FaBO9 framer-XAi7s framer-71N50 framer-2BTrO framer-a8wg0 framer-6aPAA framer-72rtr7 items-center flex-col flex-nowrap content-center justify-start [overflow:var(--overflow-clip-fallback,clip)] [min-height:100vh]" style={{ width: "auto", display: "contents" }}>
            <main className="framer-1nmhst2 items-center flex-none flex-col flex-nowrap content-center justify-start [overflow:var(--overflow-clip-fallback,clip)]">
              <ImportedDivContentStack />
              {version === 2 && <div className="oi-v2-farmer-card"><img src={riceFieldFarmers} alt="Rice farmers tending a Telangana paddy field" /><span>Rooted in Telangana farming</span></div>}
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
            <ProductShelf />
            <ImportedSectionTimelineSection />
            {version === 2 ? <RiceDifferenceSection /> : <ImportedSectionFeaturedSection />}
            <ImportedSectionAllInOneSection version={version} />
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
      <div className="[overflow:hidden] [bottom:0px] [left:0px] [z-index:0] [contain:strict]" style={{ position: "absolute", width: "0px", height: "0px" }} id="svg-templates" aria-hidden="true" />
    </>
  );
}

function ImportedDivOfferNav({ version }: { version: 1 | 2 }) {
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
                      <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">Farm-Fresh Rice</p>
                    </div>
                    <div className="framer-1lccm5p select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">•</p>
                    </div>
                  </div>
                </div>
                <div className="framer-1slrys0-container flex-none">
                  <div className="framer-H2ji0 framer-2BTrO framer-Jf64E framer-bg7kye items-center flex-row flex-nowrap place-content-center [overflow:visible] [opacity:1]">
                    <div className="framer-17xcqax select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">Save 10% With Code: TG10</p>
                    </div>
                    <div className="framer-1lccm5p select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">•</p>
                    </div>
                  </div>
                </div>
                <div className="framer-1slrys0-container flex-none">
                  <div className="framer-H2ji0 framer-2BTrO framer-Jf64E framer-bg7kye items-center flex-row flex-nowrap place-content-center [overflow:visible] [opacity:1]">
                    <div className="framer-17xcqax select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">From Telangana's Fields</p>
                    </div>
                    <div className="framer-1lccm5p select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">•</p>
                    </div>
                  </div>
                </div>

                <div className="framer-1slrys0-container flex-none">
                  <div className="framer-H2ji0 framer-2BTrO framer-Jf64E framer-bg7kye items-center flex-row flex-nowrap place-content-center [overflow:visible] [opacity:1]">
                    <div className="framer-17xcqax select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">Carefully Selected Grains</p>
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
                      <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">Farm-Fresh Rice</p>
                    </div>
                    <div className="framer-1lccm5p select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">•</p>
                    </div>
                  </div>
                </div>
                <div className="framer-1slrys0-container flex-none">
                  <div className="framer-H2ji0 framer-2BTrO framer-Jf64E framer-bg7kye items-center flex-row flex-nowrap place-content-center [overflow:visible] [opacity:1]">
                    <div className="framer-17xcqax select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">Save 10% With Code: TG10</p>
                    </div>
                    <div className="framer-1lccm5p select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">•</p>
                    </div>
                  </div>
                </div>
                <div className="framer-1slrys0-container flex-none">
                  <div className="framer-H2ji0 framer-2BTrO framer-Jf64E framer-bg7kye items-center flex-row flex-nowrap place-content-center [overflow:visible] [opacity:1]">
                    <div className="framer-17xcqax select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">From Telangana's Fields</p>
                    </div>
                    <div className="framer-1lccm5p select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">•</p>
                    </div>
                  </div>
                </div>

                <div className="framer-1slrys0-container flex-none">
                  <div className="framer-H2ji0 framer-2BTrO framer-Jf64E framer-bg7kye items-center flex-row flex-nowrap place-content-center [overflow:visible] [opacity:1]">
                    <div className="framer-17xcqax select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">Carefully Selected Grains</p>
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
                      <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">Farm-Fresh Rice</p>
                    </div>
                    <div className="framer-1lccm5p select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">•</p>
                    </div>
                  </div>
                </div>
                <div className="framer-1slrys0-container flex-none">
                  <div className="framer-H2ji0 framer-2BTrO framer-Jf64E framer-bg7kye items-center flex-row flex-nowrap place-content-center [overflow:visible] [opacity:1]">
                    <div className="framer-17xcqax select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">Save 10% With Code: TG10</p>
                    </div>
                    <div className="framer-1lccm5p select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">•</p>
                    </div>
                  </div>
                </div>
                <div className="framer-1slrys0-container flex-none">
                  <div className="framer-H2ji0 framer-2BTrO framer-Jf64E framer-bg7kye items-center flex-row flex-nowrap place-content-center [overflow:visible] [opacity:1]">
                    <div className="framer-17xcqax select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">From Telangana's Fields</p>
                    </div>
                    <div className="framer-1lccm5p select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">•</p>
                    </div>
                  </div>
                </div>

                <div className="framer-1slrys0-container flex-none">
                  <div className="framer-H2ji0 framer-2BTrO framer-Jf64E framer-bg7kye items-center flex-row flex-nowrap place-content-center [overflow:visible] [opacity:1]">
                    <div className="framer-17xcqax select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">Carefully Selected Grains</p>
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
                    <img style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center center", objectFit: "contain" } as CSSProperties} decoding="auto" width="2219" height="638" sizes="(min-width: 1200px) max(86.9514px, 118.2539px), (max-width: 679.98px) max(86.9514px, 118.2539px), (min-width: 680px) and (max-width: 1199.98px) max(86.9514px, 118.2539px)" src={riceFarmerLogo} alt="" />
                  </div>
                </div>
                <div className="framer-hr1tzd" style={{ opacity: "1" }}>
                  <div className="framer-1von1hs" style={{ transform: "none", opacity: "1" }} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-alignment": "left" } as CSSProperties} dir="auto">
                      <a className="framer-text framer-styles-preset-1j73cr7" href="/#benefits">Rice Benefits</a>
                    </p>
                  </div>
                  <div className="framer-ctjm30" style={{ transform: "none", opacity: "1" }} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-alignment": "left" } as CSSProperties} dir="auto">
                      <a className="framer-text framer-styles-preset-1j73cr7" href="/#effects-timeline">Our Process</a>
                    </p>
                  </div>
                  <div className="framer-1w09rdh" style={{ transform: "none", opacity: "1" }} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-alignment": "left" } as CSSProperties} dir="auto">
                      <a className="framer-text framer-styles-preset-1j73cr7" href="/#buy-product">Rice Varieties</a>
                    </p>
                  </div>
                  <div className="framer-1epjaa8" style={{ transform: "none", opacity: "1" }} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-alignment": "left" } as CSSProperties} dir="auto">
                      <a className="framer-text framer-styles-preset-1j73cr7" href="/#faq">FAQ</a>
                    </p>
                  </div>
                </div>
              </div>
              <Link className="oi-version-switch" to={version === 1 ? "/version-2" : "/"}>Version {version === 1 ? "2" : "1"}</Link>
              <a className="oi-header-track" href="/track-order">Track Order</a>
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

function ImportedDivOfferNav2({ version }: { version: 1 | 2 }) {
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
                      <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">Farm-Fresh Rice</p>
                    </div>
                    <div className="framer-1lccm5p select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">•</p>
                    </div>
                  </div>
                </div>
                <div className="framer-1slrys0-container flex-none">
                  <div className="framer-H2ji0 framer-2BTrO framer-Jf64E framer-bg7kye items-center flex-row flex-nowrap place-content-center [overflow:visible] [opacity:1]">
                    <div className="framer-17xcqax select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">Save 10% With Code: TG10</p>
                    </div>
                    <div className="framer-1lccm5p select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">•</p>
                    </div>
                  </div>
                </div>
                <div className="framer-1slrys0-container flex-none">
                  <div className="framer-H2ji0 framer-2BTrO framer-Jf64E framer-bg7kye items-center flex-row flex-nowrap place-content-center [overflow:visible] [opacity:1]">
                    <div className="framer-17xcqax select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">From Telangana's Fields</p>
                    </div>
                    <div className="framer-1lccm5p select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">•</p>
                    </div>
                  </div>
                </div>

                <div className="framer-1slrys0-container flex-none">
                  <div className="framer-H2ji0 framer-2BTrO framer-Jf64E framer-bg7kye items-center flex-row flex-nowrap place-content-center [overflow:visible] [opacity:1]">
                    <div className="framer-17xcqax select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">Carefully Selected Grains</p>
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
                      <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">Farm-Fresh Rice</p>
                    </div>
                    <div className="framer-1lccm5p select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">•</p>
                    </div>
                  </div>
                </div>
                <div className="framer-1slrys0-container flex-none">
                  <div className="framer-H2ji0 framer-2BTrO framer-Jf64E framer-bg7kye items-center flex-row flex-nowrap place-content-center [overflow:visible] [opacity:1]">
                    <div className="framer-17xcqax select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">Save 10% With Code: TG10</p>
                    </div>
                    <div className="framer-1lccm5p select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">•</p>
                    </div>
                  </div>
                </div>
                <div className="framer-1slrys0-container flex-none">
                  <div className="framer-H2ji0 framer-2BTrO framer-Jf64E framer-bg7kye items-center flex-row flex-nowrap place-content-center [overflow:visible] [opacity:1]">
                    <div className="framer-17xcqax select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">From Telangana's Fields</p>
                    </div>
                    <div className="framer-1lccm5p select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">•</p>
                    </div>
                  </div>
                </div>

                <div className="framer-1slrys0-container flex-none">
                  <div className="framer-H2ji0 framer-2BTrO framer-Jf64E framer-bg7kye items-center flex-row flex-nowrap place-content-center [overflow:visible] [opacity:1]">
                    <div className="framer-17xcqax select-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">Carefully Selected Grains</p>
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
                    <img style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center center", objectFit: "contain" } as CSSProperties} decoding="auto" width="2219" height="638" sizes="(min-width: 1200px) max(86.9514px, 118.2539px), (max-width: 679.98px) max(86.9514px, 118.2539px), (min-width: 680px) and (max-width: 1199.98px) max(86.9514px, 118.2539px)" src={riceFarmerLogo} alt="" />
                  </div>
                </div>
              </div>
              <Link className="oi-version-switch" to={version === 1 ? "/version-2" : "/"}>Version {version === 1 ? "2" : "1"}</Link>
              <a className="oi-header-track" href="/track-order">Track Order</a>
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
          <h1 className="framer-text framer-styles-preset-8hagcl" dir="auto">Your Authentic<br />Telangana Rice</h1>
        </div>
        <div className="framer-sd4ed3 max-w-[455px] wrap-break-word [word-break:break-word] [opacity:1]" style={{ transform: "none", willChange: "transform" }} data-framer-component-type="RichTextContainer">
          <p className="framer-text framer-styles-preset-6u41qq" style={{ "--framer-text-alignment": "center" } as CSSProperties} dir="auto">Naturally grown, chemical-free and full of traditional goodness.</p>
        </div>
      </div>
      <div className="framer-1e0rywx-container flex-none [opacity:1]" style={{ transform: "none", willChange: "transform" }}>
        <a className="framer-6dH45 framer-FaBO9 framer-Jf64E framer-7z2klu framer-wcun84 [backdrop-filter:none] [opacity:1]" style={{ backgroundColor: "var(--token-a5917666-de48-475a-8244-858af9f157b1, rgb(0, 0, 0))", borderRadius: "99px" }} href="/#products">
          <div className="framer-x7c3yg [opacity:1]" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
            <p className="framer-text framer-styles-preset-sqgpjx" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">Shop Rice</p>
          </div>
        </a>
      </div>
    </div>
  );
}

function ImportedDivDesktop() {
  return (
    <div className="framer-jAeYy framer-hz6668 [overflow:visible] [opacity:1]" style={{ height: "100%", width: "100%" }}>
      <div className="oi-rice-hero-stage" aria-hidden="true">
        <img className="oi-rice-hero-bag" src={sona2MasooriRiceBag} alt="TG.CO Finest Telangana Sona 2 Masoori rice bag" />
      </div>
      <div className="framer-d1too9 aspect-square flex-none right-[85px] [overflow:visible] [z-index:8] [filter:blur(5px)] will-change-transform [opacity:1]" style={{ transform: "translateY(-50%) rotate(-59deg)" }}>
        <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
          <img className="[corner-shape:inherit] [object-position:center_center] object-contain" style={{ display: "block", width: "100%", height: "100%", borderRadius: "0px" } as CSSProperties} decoding="auto" width="1254" height="1254" sizes="220px" src={macroPolishedRiceGrain} alt="" />
        </div>
      </div>
      <div className="framer-1twa8cg aspect-square flex-none right-[43px] [overflow:visible] [z-index:8] [filter:blur(5px)] will-change-transform [opacity:1]" style={{ transform: "rotate(53deg)" }}>
        <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
          <img className="[corner-shape:inherit] [object-position:center_center] object-contain" style={{ display: "block", width: "100%", height: "100%", borderRadius: "0px" } as CSSProperties} decoding="auto" width="1254" height="1254" sizes="220px" src={greenLeafTopLeft} alt="" />
        </div>
      </div>
      <div className="framer-lt83ag aspect-square flex-none right-[286px] [overflow:visible] [z-index:8] will-change-transform [opacity:1]" style={{ transform: "translateY(-50%) rotate(-32deg)" }}>
        <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
          <img className="[corner-shape:inherit] [object-position:center_center] object-contain" style={{ display: "block", width: "100%", height: "100%", borderRadius: "0px" } as CSSProperties} decoding="auto" width="1254" height="1254" sizes="220px" src={greenLeafTopLeft} alt="" />
        </div>
      </div>
      <div className="framer-86ela9 aspect-square flex-none right-[235px] [overflow:visible] [z-index:8] will-change-transform [opacity:1]" style={{ transform: "rotate(145deg)" }}>
        <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
          <img className="[corner-shape:inherit] [object-position:center_center] object-contain" style={{ display: "block", width: "100%", height: "100%", borderRadius: "0px" } as CSSProperties} decoding="auto" width="1254" height="1254" sizes="220px" src={macroPolishedRiceGrain} alt="" />
        </div>
      </div>
      <div className="framer-1xujcsz aspect-square flex-none [overflow:visible] [z-index:8] will-change-transform [opacity:1]" style={{ transform: "rotate(285deg)" }}>
        <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
          <img className="[corner-shape:inherit] [object-position:center_center] object-contain" style={{ display: "block", width: "100%", height: "100%", borderRadius: "0px" } as CSSProperties} decoding="auto" width="1254" height="1254" sizes="220px" src={goldenRicePanicleCutout} alt="" />
        </div>
      </div>
      <div className="framer-1uue3vh aspect-square flex-none [overflow:visible] [z-index:8] [filter:blur(3px)] will-change-transform [opacity:1]" style={{ transform: "translateY(-50%) rotate(-40deg)" }}>
        <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
          <img className="[corner-shape:inherit] [object-position:center_center] object-contain" style={{ display: "block", width: "100%", height: "100%", borderRadius: "0px" } as CSSProperties} decoding="auto" width="1254" height="1254" sizes="220px" src={goldenRicePanicleCutout} alt="" />
        </div>
      </div>
      <div className="framer-1i2u684 aspect-square flex-none [overflow:visible] [z-index:0] [filter:blur(3px)] will-change-transform [opacity:1]" style={{ transform: "rotate(47deg)" }}>
        <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
          <img className="[corner-shape:inherit] [object-position:center_center] object-contain" style={{ display: "block", width: "100%", height: "100%", borderRadius: "0px" } as CSSProperties} decoding="auto" width="1254" height="1254" sizes="220px" src={macroPolishedRiceGrain} alt="" />
        </div>
      </div>
    </div>
  );
}

function ImportedDivDesktop2() {
  return (
    <div className="framer-jAeYy framer-hz6668 framer-v-1g7gamr [overflow:visible] [opacity:1]" style={{ height: "100%", width: "100%" }}>
      <div className="oi-rice-hero-stage" aria-hidden="true">
        <img className="oi-rice-hero-bag" src={sona2MasooriRiceBag} alt="TG.CO Finest Telangana Sona 2 Masoori rice bag" />
      </div>
      <div className="framer-d1too9 aspect-square flex-none right-[85px] [overflow:visible] [z-index:8] [filter:blur(5px)] will-change-transform [opacity:1]" style={{ transform: "rotate(-37deg)" }}>
        <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
          <img className="[corner-shape:inherit] [object-position:center_center] object-contain" style={{ display: "block", width: "100%", height: "100%", borderRadius: "0px" } as CSSProperties} decoding="auto" width="1254" height="1254" sizes="220px" src={macroPolishedRiceGrain} alt="" />
        </div>
      </div>
      <div className="framer-lt83ag aspect-square flex-none right-[286px] [overflow:visible] [z-index:8] will-change-transform [opacity:1]" style={{ transform: "rotate(-25deg)" }}>
        <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
          <img className="[corner-shape:inherit] [object-position:center_center] object-contain" style={{ display: "block", width: "100%", height: "100%", borderRadius: "0px" } as CSSProperties} decoding="auto" width="1254" height="1254" sizes="220px" src={macroPolishedRiceGrain} alt="" />
        </div>
      </div>
      <div className="framer-86ela9 aspect-square flex-none right-[235px] [overflow:visible] [z-index:8] will-change-transform [opacity:1]" style={{ transform: "rotate(145deg)" }}>
        <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
          <img className="[corner-shape:inherit] [object-position:center_center] object-contain" style={{ display: "block", width: "100%", height: "100%", borderRadius: "0px" } as CSSProperties} decoding="auto" width="1254" height="1254" sizes="220px" src={macroPolishedRiceGrain} alt="" />
        </div>
      </div>
      <div className="framer-1xujcsz aspect-square flex-none [overflow:visible] [z-index:8] will-change-transform [opacity:1]" style={{ transform: "rotate(240deg)" }}>
        <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
          <img className="[corner-shape:inherit] [object-position:center_center] object-contain" style={{ display: "block", width: "100%", height: "100%", borderRadius: "0px" } as CSSProperties} decoding="auto" width="1254" height="1254" sizes="220px" src={goldenRicePanicleCutout} alt="" />
        </div>
      </div>
      <div className="framer-1i2u684 aspect-square flex-none [overflow:visible] [z-index:0] [filter:blur(3px)] will-change-transform [opacity:1]" style={{ transform: "rotate(47deg)" }}>
        <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
          <img className="[corner-shape:inherit] [object-position:center_center] object-contain" style={{ display: "block", width: "100%", height: "100%", borderRadius: "0px" } as CSSProperties} decoding="auto" width="1254" height="1254" sizes="220px" src={goldenRicePanicleCutout} alt="" />
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
          <h2 className="framer-text framer-styles-preset-1r1gjyr" style={{ "--framer-text-alignment": "left" } as CSSProperties} dir="auto">One rice, five ways it works for you</h2>
        </div>
        <div className="framer-iy7d8p-container flex-none">
          <a className="framer-6dH45 framer-FaBO9 framer-Jf64E framer-7z2klu framer-wcun84 [backdrop-filter:none] [opacity:1]" style={{ backgroundColor: "var(--token-a5917666-de48-475a-8244-858af9f157b1, rgb(0, 0, 0))", borderRadius: "99px" }} data-framer-page-link-current="true" href="/#products">
            <div className="framer-x7c3yg [opacity:1]" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--extracted-r6o4lv": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
              <p className="framer-text framer-styles-preset-sqgpjx" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">Get Rice</p>
            </div>
          </a>
        </div>
      </div>
      <div className="framer-1mvdp1s items-center flex-none flex-row flex-nowrap content-center justify-start [overflow:visible] select-none [touch-action:pan-y]" style={{ display: "flex", position: "relative" }} id="test" draggable="false">
        <ul className="list-none justify-start flex-row [opacity:1] items-center [max-height:100%] [max-width:100%]" style={{ display: "flex", position: "relative", padding: "0px", margin: "0px", gap: "24px", width: "100%", height: "100%", transform: "translateX(-293.878px)" }}>
          <li className="[flex-grow:0] [flex-shrink:0]" style={{ position: "relative", height: "fit-content", width: "fit-content" }} aria-hidden="false" aria-posinset={1} aria-setsize={6}>
            <div className="framer-130c739-container flex-none">
              <div className="framer-p3k4s framer-FaBO9 framer-qhMV1 framer-1hrjdua items-start flex-col flex-nowrap content-start justify-center [overflow:visible] [opacity:1]" style={{ width: "100%" }}>
                <div className="framer-wffgw6 aspect-[0.8/1] flex-none [overflow:visible] [opacity:1]" style={{ borderRadius: "15px" }}>
                  <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                    <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="3712" height="4608" sizes="(min-width: 1200px) 220px, (min-width: 680px) and (max-width: 1199.98px) 220px, (max-width: 679.98px) 220px" src={benefitTasteImage} alt="A flavorful rice dish served with curry" />
                  </div>
                </div>
                <div className="framer-r7o4di items-start flex-none flex-col flex-nowrap content-start justify-center select-none [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                  <div className="framer-aszvkf select-none [z-index:2] [opacity:1]" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-sqgpjx" dir="auto">Taste</p>
                  </div>
                  <div className="framer-128hqs1 select-none [z-index:2] [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7)))" } as CSSProperties} dir="auto">Rich, authentic flavour.</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="[flex-grow:0] [flex-shrink:0]" style={{ position: "relative", height: "fit-content", width: "fit-content", transform: "none" }} aria-hidden="false" aria-posinset={2} aria-setsize={6}>
            <div className="framer-q3p4m4-container flex-none select-none">
              <div className="framer-p3k4s framer-FaBO9 framer-qhMV1 framer-1hrjdua items-start flex-col flex-nowrap content-start justify-center [overflow:visible] [opacity:1]" style={{ width: "100%" }}>
                <div className="framer-wffgw6 aspect-[0.8/1] flex-none [overflow:visible] [opacity:1]" style={{ borderRadius: "15px" }}>
                  <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                    <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="4096" height="4096" sizes="(min-width: 1200px) 220px, (min-width: 680px) and (max-width: 1199.98px) 220px, (max-width: 679.98px) 220px" src={benefitPurityImage} alt="Rice purity and careful cultivation" />
                  </div>
                </div>
                <div className="framer-r7o4di items-start flex-none flex-col flex-nowrap content-start justify-center select-none [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                  <div className="framer-aszvkf select-none [z-index:2] [opacity:1]" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-sqgpjx" dir="auto">Purity</p>
                  </div>
                  <div className="framer-128hqs1 select-none [z-index:2] [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7)))" } as CSSProperties} dir="auto">Grown without chemicals.</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="[flex-grow:0] [flex-shrink:0]" style={{ position: "relative", height: "fit-content", width: "fit-content", transform: "none" }} aria-hidden="false" aria-posinset={3} aria-setsize={6}>
            <div className="framer-1r33018-container flex-none">
              <div className="framer-p3k4s framer-FaBO9 framer-qhMV1 framer-1hrjdua items-start flex-col flex-nowrap content-start justify-center [overflow:visible] [opacity:1]" style={{ width: "100%" }}>
                <div className="framer-wffgw6 aspect-[0.8/1] flex-none [overflow:visible] [opacity:1]" style={{ borderRadius: "15px" }}>
                  <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                    <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="4096" height="4096" sizes="(min-width: 1200px) 220px, (min-width: 680px) and (max-width: 1199.98px) 220px, (max-width: 679.98px) 220px" src="/site-assets/c1e96a8bf9438533.webp" alt="A bowl of light cooked rice" />
                  </div>
                </div>
                <div className="framer-r7o4di items-start flex-none flex-col flex-nowrap content-start justify-center select-none [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                  <div className="framer-aszvkf select-none [z-index:2] [opacity:1]" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-sqgpjx" dir="auto">Digestion</p>
                  </div>
                  <div className="framer-128hqs1 select-none [z-index:2] [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7)))" } as CSSProperties} dir="auto">Light and easy to digest.</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="[flex-grow:0] [flex-shrink:0]" style={{ position: "relative", height: "fit-content", width: "fit-content", transform: "none" }} aria-hidden="false" aria-posinset={4} aria-setsize={6}>
            <div className="framer-1nnres9-container flex-none">
              <div className="framer-p3k4s framer-FaBO9 framer-qhMV1 framer-1hrjdua items-start flex-col flex-nowrap content-start justify-center [overflow:visible] [opacity:1]" style={{ width: "100%" }}>
                <div className="framer-wffgw6 aspect-[0.8/1] flex-none [overflow:visible] [opacity:1]" style={{ borderRadius: "15px" }}>
                  <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                    <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="4096" height="4096" sizes="(min-width: 1200px) 220px, (min-width: 680px) and (max-width: 1199.98px) 220px, (max-width: 679.98px) 220px" src={benefitNutritionImage} alt="Rice as part of a balanced meal" />
                  </div>
                </div>
                <div className="framer-r7o4di items-start flex-none flex-col flex-nowrap content-start justify-center select-none [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                  <div className="framer-aszvkf select-none [z-index:2] [opacity:1]" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-sqgpjx" dir="auto">Nutrition</p>
                  </div>
                  <div className="framer-128hqs1 select-none [z-index:2] [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7)))" } as CSSProperties} dir="auto">Sustained, natural energy.</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="[flex-grow:0] [flex-shrink:0]" style={{ position: "relative", height: "fit-content", width: "fit-content", transform: "none" }} aria-hidden="false" aria-posinset={5} aria-setsize={6}>
            <div className="framer-1smj48p-container flex-none">
              <div className="framer-p3k4s framer-FaBO9 framer-qhMV1 framer-1hrjdua items-start flex-col flex-nowrap content-start justify-center [overflow:visible] [opacity:1]" style={{ width: "100%" }}>
                <div className="framer-wffgw6 aspect-[0.8/1] flex-none [overflow:visible] [opacity:1]" style={{ borderRadius: "15px" }}>
                  <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                    <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="1072" height="1467" sizes="(min-width: 1200px) 220px, (min-width: 680px) and (max-width: 1199.98px) 220px, (max-width: 679.98px) 220px" src={benefitVersatilityImage} alt="Rice prepared for a variety of meals" />
                  </div>
                </div>
                <div className="framer-r7o4di items-start flex-none flex-col flex-nowrap content-start justify-center select-none [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                  <div className="framer-aszvkf select-none [z-index:2] [opacity:1]" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-sqgpjx" dir="auto">Versatility </p>
                  </div>
                  <div className="framer-128hqs1 select-none [z-index:2] [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7)))" } as CSSProperties} dir="auto">Everyday to festive meals.</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="[flex-grow:0] [flex-shrink:0]" style={{ position: "relative", height: "fit-content", width: "fit-content", transform: "none" }} aria-hidden="false" aria-posinset={6} aria-setsize={6}>
            <div className="framer-1smj48p-container flex-none">
              <div className="framer-p3k4s framer-FaBO9 framer-qhMV1 framer-1hrjdua items-start flex-col flex-nowrap content-start justify-center [overflow:visible] [opacity:1]" style={{ width: "100%" }}>
                <div className="framer-wffgw6 aspect-[0.8/1] flex-none [overflow:visible] [opacity:1]" style={{ borderRadius: "15px" }}>
                  <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                    <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="1072" height="1467" sizes="(min-width: 1200px) 220px, (min-width: 680px) and (max-width: 1199.98px) 220px, (max-width: 679.98px) 220px" src={benefitOriginImage} alt="Rice farmers working in the fields" />
                  </div>
                </div>
                <div className="framer-r7o4di items-start flex-none flex-col flex-nowrap content-start justify-center select-none [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                  <div className="framer-aszvkf select-none [z-index:2] [opacity:1]" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-sqgpjx" dir="auto">Origin </p>
                  </div>
                  <div className="framer-128hqs1 select-none [z-index:2] [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7)))" } as CSSProperties} dir="auto">From trusted farmers.</p>
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
            <h2 className="framer-text framer-styles-preset-1r1gjyr" style={{ "--framer-text-alignment": "left" } as CSSProperties} dir="auto">From our fields to your everyday meals</h2>
          </div>
          <div className="framer-1lu14r1 items-center flex-none flex-row flex-nowrap max-w-[500px] min-h-[366px] place-content-center [overflow:visible]">
            <div className="ssr-variant">
              <div className="framer-ontxra aspect-square flex-none [overflow:visible] will-change-transform [opacity:1]" style={{ transform: "none" }}>
                <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                  <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="3712" height="4608" sizes="300px" src={fieldsToMealsImage} alt="Rice fields in Telangana" />
                </div>
                <div className="framer-rc0z1c-container aspect-square flex-none [z-index:1]" style={{ transform: "rotate(-1deg)" }}>
                  <svg className="oi-rice-seal" viewBox="0 0 200 200" role="img" aria-label="Pure rice, naturally grown, chemical free, farm fresh">
                    <circle cx="100" cy="100" r="99" fill="#075BFF" />
                    <defs>
                      <path id="oi-rice-seal-path" d="M 100,100 m -82,0 a 82,82 0 1,1 164,0 a 82,82 0 1,1 -164,0" />
                    </defs>
                    <g className="oi-rice-seal-words">
                      <text fill="white" fontFamily="Manrope, sans-serif" fontSize="14" fontWeight="700" letterSpacing="1.5">
                        <textPath href="#oi-rice-seal-path" startOffset="0%" textLength="515" lengthAdjust="spacingAndGlyphs">PURE RICE  •  NATURALLY GROWN  •  CHEMICAL FREE  •  FARM FRESH  •</textPath>
                      </text>
                    </g>
                    <image href={whiteWheatEmblem} x="53" y="52" width="94" height="96" preserveAspectRatio="xMidYMid meet" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="ssr-variant">
              <div className="framer-1tksyyx aspect-square flex-none [bottom:0px] [overflow:var(--overflow-clip-fallback,clip)] [right:0px] [z-index:1] [opacity:1]" style={{ willChange: "transform", transform: "none" }}>
                <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                  <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="1254" height="1254" sizes="241px" src={riceFieldFarmers} alt="Rice farmers tending their fields" />
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
                  <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--token-a4a59c3d-74c9-4b4f-8436-40db24906b27, rgb(0, 139, 252))" } as CSSProperties} dir="auto">Step 1</p>
                </div>
              </div>
              <div className="framer-vnm1cz items-center flex-none flex-col flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)]">
                <div className="framer-11ln0ht [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                  <h5 className="framer-text framer-styles-preset-1wglooe" dir="auto">Grown with care</h5>
                </div>
                <div className="framer-1ffk76b [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-alignment": "left" } as CSSProperties} dir="auto">Cultivated in Telangana’s rich soils using traditional, chemical-free farming methods.</p>
                </div>
              </div>
            </div>
            <div className="framer-2ceimn items-start flex-none flex-col flex-nowrap max-w-[500px] content-start justify-center [overflow:var(--overflow-clip-fallback,clip)] will-change-transform [opacity:1]" style={{ transform: "none" }}>
              <div className="framer-z2bdxt items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)]">
                <div className="framer-j2p0ry" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--token-a4a59c3d-74c9-4b4f-8436-40db24906b27, rgb(0, 139, 252))" } as CSSProperties} dir="auto">Step 2</p>
                </div>
              </div>
              <div className="framer-12ud1d9 [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                <h5 className="framer-text framer-styles-preset-1wglooe" dir="auto">Carefully processed</h5>
              </div>
              <div className="framer-uci7s0 [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-alignment": "left" } as CSSProperties} dir="auto">Cleaned, milled and packed to lock in the natural aroma, texture and nutrition of the rice.</p>
              </div>
            </div>
            <div className="framer-9x75jg items-start flex-none flex-col flex-nowrap max-w-[500px] content-start justify-center [overflow:var(--overflow-clip-fallback,clip)] will-change-transform [opacity:1]" style={{ transform: "none" }}>
              <div className="framer-3ooxhw items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)]">
                <div className="framer-1fbwfha" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--token-a4a59c3d-74c9-4b4f-8436-40db24906b27, rgb(0, 139, 252))" } as CSSProperties} dir="auto">Step 3</p>
                </div>
              </div>
              <div className="framer-1d4b02u [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                <h5 className="framer-text framer-styles-preset-1wglooe" dir="auto">On your plate</h5>
              </div>
              <div className="framer-1ip9n0a [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-alignment": "left" } as CSSProperties} dir="auto">A wholesome, versatile rice that brings authentic taste and lasting nourishment to your everyday meals.</p>
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
            <div className="framer-hs2c7x flex-none [overflow:visible] [z-index:1] will-change-transform [opacity:1]" style={{ transform: "none", backgroundColor: "#075BFF" }}>
              <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                <img className="[corner-shape:inherit] [object-position:center_center] object-contain" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", filter: "brightness(0) invert(1)" } as CSSProperties} decoding="auto" width="1396" height="1127" src={riceFarmerStencil} alt="TG.CO rice farmer logo" />
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
                      <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="8000" height="8000" sizes="(min-width: 1200px) max(50px, calc(max((min(100vw - 120px, 1200px) - 60px) / 2, 1px) - 100px)), (min-width: 680px) and (max-width: 1199.98px) max(50px, calc(min(100vw - 80px, 1200px) - 100px)), (max-width: 679.98px) max(50px, calc(min(100vw - 50px, 1200px) - 100px))" src={basmatiRiceBag} alt="TG.CO Finest Basmati Rice 5 kg bag" />
                    </div>
                  </div>
                </div>
                <div className="framer-o187ju content-center! items-center flex-[1_0_0px] flex-row flex-nowrap content-end justify-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                  <div className="framer-1ef9szw items-start flex-[1_0_0px] flex-col flex-nowrap content-start justify-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                    <div className="framer-iv1a0p [z-index:2] [opacity:1]" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-sqgpjx" dir="auto">TG.CO Finest Rice</p>
                    </div>
                    <div className="framer-16l5uku [z-index:2] [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7)))" } as CSSProperties} dir="auto">₹24.00</p>
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
            <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))" } as CSSProperties} dir="auto">Rooted in Telangana’s agricultural heritage, our rice is carefully selected for authentic taste and wholesome everyday cooking.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function RiceDifferenceSection() {
  const rows = [
    { feature: "Origin", ours: "Sourced from Telangana farmers.", check: "Growing regions vary by brand. Check the pack for origin." },
    { feature: "Variety", ours: "Named varieties, including Ponni, Sona Masoori and Basmati.", check: "Varieties and cooking qualities differ by product. Check the label." },
    { feature: "Processing", ours: "Ask TG.CO for variety-specific milling details.", check: "Milling and polishing practices can vary by brand." },
    { feature: "Quality", ours: "Ask TG.CO for available quality-check information.", check: "Check for current test records or certification details." },
    { feature: "Pack & price", ours: "5 kg bags with the price shown per bag.", check: "Pack sizes and prices vary. Compare net weight and price per kg." },
  ];

  return (
    <section className="oi-rice-difference" aria-labelledby="oi-rice-difference-title">
      <div className="oi-rice-difference-inner">
        <header className="oi-rice-difference-heading">
          <h2 className="framer-oi-rice-difference-title" id="oi-rice-difference-title">TG.CO Finest Rice vs. Other Rice Brands</h2>
        </header>
        <div className="oi-rice-guide-grid framer-oi-rice-difference-table" aria-label="A comparison of TG.CO Finest Rice and other rice brands">
          <div className="oi-rice-guide-column-heading oi-rice-guide-brand">TG.CO Finest Rice</div>
          <div className="oi-rice-guide-column-heading">Other rice brands</div>
          {rows.map((row) => (
            <div className="oi-rice-guide-pair" key={row.feature}>
              <div className="oi-rice-guide-cell oi-rice-guide-brand">
                <h3>{row.feature}</h3>
                <p>{row.feature === "Processing" ? <>Ask us for <a href="mailto:hello@tgcofinest.com">variety-specific milling details</a>.</> : row.feature === "Quality" ? <><a href="mailto:hello@tgcofinest.com">Contact us</a> for available quality-check information.</> : row.ours}</p>
              </div>
              <div className="oi-rice-guide-cell"><h3>{row.feature}</h3><p>{row.check}</p></div>
            </div>
          ))}
        </div>
        <Link className="oi-rice-guide-cta" to="/" hash="products">Explore rice varieties</Link>
      </div>
    </section>
  );
}

function ImportedSectionAllInOneSection({ version }: { version: 1 | 2 }) {
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
                <p className="framer-text framer-styles-preset-sqgpjx" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))" } as CSSProperties} dir="auto">Naturally grown, rich in taste & nutrition</p>
              </div>
            </div>
          </div>
          <div className="framer-8s83bh max-w-[600px] [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
            <h2 className="framer-text framer-styles-preset-1r1gjyr" style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))" } as CSSProperties} dir="auto">Premium rice, for everyday goodness</h2>
          </div>
          <div className="framer-1srkpxt items-center flex-none flex-col flex-nowrap max-w-[600px] place-content-center [overflow:visible]">
            <div className="framer-wx5pkl [z-index:2] will-change-transform [opacity:1]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
              <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))" } as CSSProperties} dir="auto">A wholesome, versatile rice sourced from Telangana’s fields — perfect for your everyday meals.</p>
            </div>
            <div className="ssr-variant">
              <div className="framer-ikxl5d-container flex-none [opacity:1]" style={{ willChange: "transform", transform: "none" }}>
                <a className="framer-trzQi framer-FaBO9 framer-qhMV1 framer-udbtyz framer-v-4nzni6 framer-128y9cq items-center flex-row! flex-col flex-nowrap place-content-center [overflow:visible] [padding:8px_15px_8px_8px] [backdrop-filter:blur(5px)] [opacity:1]" style={{ "--border-bottom-width": "1px", "--border-color": "var(--token-8bbbea30-76c9-4ba6-997e-07eab0911b28, rgb(255, 255, 255))", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(255, 255, 255, 0.82)", width: "100%", borderRadius: "18px" } as CSSProperties} data-border="true" href="/#buy-product">
                  <div className="framer-12ym6a6 items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]" style={{ backgroundColor: "var(--token-136beebb-89fe-4d20-a894-e7f11788a217, rgb(255, 255, 255))", borderRadius: "15px" }}>
                    <div className="framer-k82luq aspect-square flex-none [overflow:visible] [filter:drop-shadow(rgba(0,_0,_0,_0.15)_0px_5px_3px)] [opacity:1]">
                      <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                        <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="8000" height="8000" sizes="(min-width: 1200px) max(50px, calc(max((min(100vw - 120px, 1200px) - 60px) / 2, 1px) - 100px)), (min-width: 680px) and (max-width: 1199.98px) max(50px, calc(min(100vw - 80px, 1200px) - 100px)), (max-width: 679.98px) max(50px, calc(min(100vw - 50px, 1200px) - 100px))" src={ponniRiceBag} alt="TG.CO Finest Ponni Rice 5 kg bag" />
                      </div>
                    </div>
                  </div>
                  <div className="framer-o187ju content-center! items-center flex-[1_0_0px] flex-row flex-nowrap content-end justify-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                    <div className="framer-1ef9szw items-start flex-[1_0_0px] flex-col flex-nowrap content-start justify-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                      <div className="framer-iv1a0p [z-index:2] [opacity:1]" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-sqgpjx" dir="auto">Ponni Rice</p>
                      </div>
                      <div className="framer-16l5uku [z-index:2] [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7)))" } as CSSProperties} dir="auto">₹1,800</p>
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
              <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="1672" height="941" sizes="(min-width: 1200px) 100vw, (min-width: 680px) and (max-width: 1199.98px) 100vw, (max-width: 679.98px) 100vw" src={version === 2 ? premiumRiceGreenBackground : riceGrainAgainstBlueSky} alt={version === 2 ? "Farmers holding golden rice over green paddy fields" : "Rice grain against a blue sky"} />
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
                <h2 className="framer-text framer-styles-preset-1r1gjyr" style={{ "--framer-text-alignment": "left" } as CSSProperties} dir="auto">What makes our rice truly special?</h2>
              </div>
            </div>
            <div className="ssr-variant">
              <div className="framer-19o8ama max-w-[361px] [z-index:2] will-change-transform [opacity:1]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))" } as CSSProperties} dir="auto">A closer look at the natural qualities of our Telangana rice, carefully grown, minimally processed and rich in everyday goodness.</p>
              </div>
            </div>
          </div>
          <div className="framer-1uh8tm3 items-center place-content-center [overflow:visible]">
            <div className="framer-1fl3zea items-start content-start justify-center [overflow:visible] [@media(max-width:679.98px)]:[order:1] [@media(min-width:680px)_and_(max-width:1199.98px)]:[order:1]">
              <div className="ssr-variant">
                <div className="framer-17192w5-container will-change-transform [opacity:1]" style={{ transform: "none" }}>
                  <div className="framer-I7ASz framer-XAi7s framer-qhMV1 framer-12p6z17 items-start flex-col flex-nowrap max-w-[250px] content-start justify-center [overflow:visible] [opacity:1]" style={{ width: "100%" }}>
                    <div className="framer-yzauvh aspect-square flex-none [opacity:1] oi-rice-feature-icon" style={{ color: "var(--token-220b89ed-795b-40ee-a164-3b3423c23e62, rgba(0, 0, 0, 0.7))" }}><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 19h22l-2.2 5.2a4 4 0 0 1-3.7 2.4h-10a4 4 0 0 1-3.7-2.4L5 19Z"/><path d="M10 15c0-2.2 2-2.2 2-4.5M16 15c0-2.2 2-2.2 2-4.5M22 15c0-2.2 2-2.2 2-4.5"/><path d="M8 27h16"/></svg></div>
                    <div className="framer-1csibut items-center flex-none flex-col flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                      <div className="framer-1tif1yi [z-index:2] [opacity:1]" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-v37sa" dir="auto">Aromatic & Flavourful</p>
                      </div>
                      <div className="framer-a1lfec [z-index:2] [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7)))" } as CSSProperties} dir="auto">Naturally fragrant rice with a rich, authentic taste.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ssr-variant">
                <div className="framer-17r1a85-container will-change-transform [opacity:1]" style={{ transform: "none" }}>
                  <div className="framer-I7ASz framer-XAi7s framer-qhMV1 framer-12p6z17 items-start flex-col flex-nowrap max-w-[250px] content-start justify-center [overflow:visible] [opacity:1]" style={{ width: "100%" }}>
                    <div className="framer-yzauvh aspect-square flex-none [opacity:1] oi-rice-feature-icon" style={{ color: "var(--token-220b89ed-795b-40ee-a164-3b3423c23e62, rgba(0, 0, 0, 0.7))" }}><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 27V11"/><path d="M16 17c-5 0-8-3-8-8 5 0 8 3 8 8Z"/><path d="M16 14c1-5 4-8 9-8 0 5-3 8-9 8Z"/><path d="M9 27h14"/><path d="m7 8 2 2m16-3-2 2"/></svg></div>
                    <div className="framer-1csibut items-center flex-none flex-col flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                      <div className="framer-1tif1yi [z-index:2] [opacity:1]" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-v37sa" dir="auto">Naturally Grown</p>
                      </div>
                      <div className="framer-a1lfec [z-index:2] [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7)))" } as CSSProperties} dir="auto">Cultivated without harmful chemicals or synthetic fertilizers.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ssr-variant">
                <div className="framer-6h0wqm-container will-change-transform [opacity:1]" style={{ transform: "none" }}>
                  <div className="framer-I7ASz framer-XAi7s framer-qhMV1 framer-12p6z17 items-start flex-col flex-nowrap max-w-[250px] content-start justify-center [overflow:visible] [opacity:1]" style={{ width: "100%" }}>
                    <div className="framer-yzauvh aspect-square flex-none [opacity:1] oi-rice-feature-icon" style={{ color: "var(--token-220b89ed-795b-40ee-a164-3b3423c23e62, rgba(0, 0, 0, 0.7))" }}><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="16" cy="16" r="11"/><path d="M16 8v8l5 3"/><path d="M16 2v2m14 12h-2M4 16H2"/><path d="m21 7 2-2"/></svg></div>
                    <div className="framer-1csibut items-center flex-none flex-col flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                      <div className="framer-1tif1yi [z-index:2] [opacity:1]" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-v37sa" dir="auto">Everyday Nutrition</p>
                      </div>
                      <div className="framer-a1lfec [z-index:2] [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7)))" } as CSSProperties} dir="auto">A good source of carbohydrates for sustained energy.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ssr-variant">
              <div className={`framer-1vwkisw aspect-square flex-none [overflow:visible] [z-index:8] [@media(max-width:679.98px)]:[order:0] [@media(min-width:680px)_and_(max-width:1199.98px)]:[order:0] will-change-transform [opacity:1]`}>
                <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                  <img className="[corner-shape:inherit] [object-position:center_center] object-contain" style={{ display: "block", width: "100%", height: "100%", borderRadius: "0px" } as CSSProperties} decoding="auto" width="1278" height="1230" sizes="425px" src={woodenBowlBasmatiRice} alt="Basmati rice in a wooden bowl" />
                </div>
              </div>
            </div>
            <div className="framer-yciyv2 items-start content-start justify-center [overflow:visible] [@media(max-width:679.98px)]:[order:2] [@media(min-width:680px)_and_(max-width:1199.98px)]:[order:2]">
              <div className="ssr-variant">
                <div className="framer-h5fqza-container will-change-transform [opacity:1]" style={{ transform: "none" }}>
                  <div className="framer-I7ASz framer-XAi7s framer-qhMV1 framer-12p6z17 items-start flex-col flex-nowrap max-w-[250px] content-start justify-center [overflow:visible] [opacity:1]" style={{ width: "100%" }}>
                    <div className="framer-yzauvh aspect-square flex-none [opacity:1] oi-rice-feature-icon" style={{ color: "var(--token-220b89ed-795b-40ee-a164-3b3423c23e62, rgba(0, 0, 0, 0.7))" }}><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10 5c-2.2 2.4-3.5 6-3.5 10.2C6.5 22.8 10.8 28 16 28s9.5-5.2 9.5-12.8C25.5 11 24.2 7.4 22 5"/><path d="M10 5h12"/><path d="M11 14c2 1.7 4 2.5 5 2.5s3-.8 5-2.5"/><path d="M12 21c2.5-1.4 5.5-1.4 8 0"/></svg></div>
                    <div className="framer-1csibut items-center flex-none flex-col flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                      <div className="framer-1tif1yi [z-index:2] [opacity:1]" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-v37sa" dir="auto">Easy to Digest</p>
                      </div>
                      <div className="framer-a1lfec [z-index:2] [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7)))" } as CSSProperties} dir="auto">Light, wholesome and comfortable for daily meals.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ssr-variant">
                <div className="framer-8xmbf5-container will-change-transform [opacity:1]" style={{ transform: "none" }}>
                  <div className="framer-I7ASz framer-XAi7s framer-qhMV1 framer-12p6z17 items-start flex-col flex-nowrap max-w-[250px] content-start justify-center [overflow:visible] [opacity:1]" style={{ width: "100%" }}>
                    <div className="framer-yzauvh aspect-square flex-none [opacity:1] oi-rice-feature-icon" style={{ color: "var(--token-220b89ed-795b-40ee-a164-3b3423c23e62, rgba(0, 0, 0, 0.7))" }}><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 17h24l-2.5 6a4 4 0 0 1-3.7 2.5h-11A4 4 0 0 1 7 23l-3-6Z"/><path d="M7 13h18"/><path d="M9 10h14"/><path d="M11 7h10"/><path d="M8 28h16"/></svg></div>
                    <div className="framer-1csibut items-center flex-none flex-col flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                      <div className="framer-1tif1yi [z-index:2] [opacity:1]" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-v37sa" dir="auto">Versatile for Every Meal</p>
                      </div>
                      <div className="framer-a1lfec [z-index:2] [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7)))" } as CSSProperties} dir="auto">Perfect for everyday cooking, from simple meals to festive dishes.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ssr-variant">
                <div className="framer-1lp7ogs-container will-change-transform [opacity:1]" style={{ transform: "none" }}>
                  <div className="framer-I7ASz framer-XAi7s framer-qhMV1 framer-12p6z17 items-start flex-col flex-nowrap max-w-[250px] content-start justify-center [overflow:visible] [opacity:1]" style={{ width: "100%" }}>
                    <div className="framer-yzauvh aspect-square flex-none [opacity:1] oi-rice-feature-icon" style={{ color: "var(--token-220b89ed-795b-40ee-a164-3b3423c23e62, rgba(0, 0, 0, 0.7))" }}><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 29s10-9 10-16a10 10 0 1 0-20 0c0 7 10 16 10 16Z"/><path d="M16 21V9"/><path d="M16 16c-3.5 0-5.5-2-6-5 3.5 0 6 2 6 5Z"/><path d="M16 13c3.5 0 5.5-2 6-5-3.5 0-6 2-6 5Z"/></svg></div>
                    <div className="framer-1csibut items-center flex-none flex-col flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                      <div className="framer-1tif1yi [z-index:2] [opacity:1]" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-v37sa" dir="auto">From Telangana's Fields</p>
                      </div>
                      <div className="framer-a1lfec [z-index:2] [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7)))" } as CSSProperties} dir="auto">Sourced directly from trusted farmers across Telangana.</p>
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
  return (
    <section className="framer-ra0yx0 items-start flex-none flex-col flex-nowrap content-start justify-center [overflow:var(--overflow-clip-fallback,clip)] [scroll-margin-top:60px]" id="features">
      <div className="framer-n3g353 items-center flex-none flex-col flex-nowrap place-content-center [overflow:visible]">
        <div className="framer-1pv0wis max-w-[1000px] [overflow:visible]">
          <div className="framer-nu26zv items-start [overflow:visible] [@media(max-width:679.98px)]:[order:1] [@media(min-width:680px)_and_(max-width:1199.98px)]:[order:1]">
            <div className="framer-192rlmm items-start flex-none flex-col flex-nowrap content-start justify-center [overflow:var(--overflow-clip-fallback,clip)]">
              <div className="framer-1xma4xx [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                <h2 className="framer-text framer-styles-preset-1r1gjyr" style={{ "--framer-text-alignment": "left" } as CSSProperties} dir="auto">Pure by nature,<br />better for your family</h2>
              </div>
              <div className="framer-1gee49s [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))" } as CSSProperties} dir="auto">Our rice is grown with care, using natural methods and minimal processing. No chemicals, no shortcuts — just pure, wholesome goodness in every grain.</p>
              </div>
            </div>
            <div className="framer-jc1401 items-start flex-none flex-col flex-nowrap content-start justify-center [overflow:visible]">
              <div className="framer-1dhwyb7 items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] will-change-transform [opacity:1]" style={{ transform: "none" }}>
                <div className="framer-01Hzu framer-16vowvt aspect-square flex-none" />
                <div className="framer-wfdecg [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-v37sa" dir="auto">Naturally grown, chemical-free</p>
                </div>
              </div>
              <div className="framer-4k6tby items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] will-change-transform [opacity:1]" style={{ transform: "none" }}>
                <div className="framer-01Hzu framer-b3bqe4 aspect-square flex-none" />
                <div className="framer-1kiu3ez [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-v37sa" dir="auto">No artificial polish or additives</p>
                </div>
              </div>
              <div className="framer-gnab8d items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] will-change-transform [opacity:1]" style={{ transform: "none" }}>
                <div className="framer-01Hzu framer-1rmfu6t aspect-square flex-none" />
                <div className="framer-h4zxsx [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-v37sa" dir="auto">Rich in natural nutrients</p>
                </div>
              </div>
              <div className="framer-5siw2a items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] will-change-transform [opacity:1]" style={{ transform: "none" }}>
                <div className="framer-01Hzu framer-aiwvum aspect-square flex-none" />
                <div className="framer-1omkqy1 [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-v37sa" dir="auto">Trusted by families for generations</p>
                </div>
              </div>
            </div>
          </div>
          <div className="ssr-variant">
            <div className="framer-p34b64 items-start aspect-square content-start justify-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [@media(max-width:679.98px)]:[order:0] [@media(min-width:680px)_and_(max-width:1199.98px)]:[order:0]">
              <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="1086" height="1448" sizes="max((min(100vw - 120px, 1000px) - 60px) / 2, 1px)" src={riceFieldFarmers} alt="Farmers harvesting rice in a Telangana paddy field" />
              </div>
              <div className="framer-hy5xhy flex-none [overflow:var(--overflow-clip-fallback,clip)] [z-index:1]" />
              <div className={`framer-1yd27yv items-center flex-none flex-col flex-nowrap place-content-center [backdrop-filter:blur(10px)] [overflow:var(--overflow-clip-fallback,clip)] [z-index:1] [@media(max-width:679.98px)]:right-[20px]`} style={{ willChange: "transform" }}>
                <div className="framer-1wtmbz6 items-center flex-none flex-row flex-nowrap content-center justify-start [overflow:var(--overflow-clip-fallback,clip)]" data-border="true">
                  <div className="framer-1so6sjr [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))" } as CSSProperties} dir="auto">Purity You Can Trust</p>
                  </div>
                </div>
                <div className="framer-1ntlmfe items-end flex-none flex-row flex-nowrap content-end justify-center [overflow:visible]">
                  <div className="framer-dpsvv4 items-center flex-[1_0_0px] flex-col flex-nowrap place-content-center [overflow:visible]">
                    <div className="framer-uhutkv items-center flex-none flex-col flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)]">
                      <div className="framer-1lokozz [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))" } as CSSProperties} dir="auto">98%</p>
                      </div>
                      <div className="framer-1iofxhj [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))" } as CSSProperties} dir="auto">Pure Rice</p>
                      </div>
                    </div>
                    <div className="framer-mo27a flex-none [overflow:visible]">
                      <div className="framer-11wifk6 flex-none [filter:blur(7px)] [overflow:var(--overflow-clip-fallback,clip)] [right:0px] [z-index:1]" />
                    </div>
                  </div>
                  <div className="framer-1mvoim7 items-center flex-[1_0_0px] flex-col flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)]">
                    <div className="framer-y5yima items-center flex-none flex-col flex-nowrap place-content-center [opacity:0.8] [overflow:var(--overflow-clip-fallback,clip)]">
                      <div className="framer-tzki3t [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--token-f0aff8f4-5f67-4909-bd7e-3e676f6fd40f, rgba(255, 255, 255, 0.8))" } as CSSProperties} dir="auto">2%</p>
                      </div>
                      <div className="framer-1gkwz7w [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--token-f0aff8f4-5f67-4909-bd7e-3e676f6fd40f, rgba(255, 255, 255, 0.8))" } as CSSProperties} dir="auto">Broken Grains</p>
                      </div>
                    </div>
                    <div className="framer-12yswj1 flex-none [opacity:0.5] [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)]" />
                  </div>
                  <div className="framer-zugr4t items-center flex-[1_0_0px] flex-col flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)]">
                    <div className="framer-1obdd8n items-center flex-none flex-col flex-nowrap place-content-center [opacity:0.6] [overflow:var(--overflow-clip-fallback,clip)]">
                      <div className="framer-caputb [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--token-f0aff8f4-5f67-4909-bd7e-3e676f6fd40f, rgba(255, 255, 255, 0.8))" } as CSSProperties} dir="auto">&lt;1%</p>
                      </div>
                      <div className="framer-sgx5m3 [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--token-f0aff8f4-5f67-4909-bd7e-3e676f6fd40f, rgba(255, 255, 255, 0.8))" } as CSSProperties} dir="auto">Impurities</p>
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
            <div className="framer-tpghyj items-start aspect-square content-start justify-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [@media(max-width:679.98px)]:[order:0] [@media(min-width:680px)_and_(max-width:1199.98px)]:[order:0]" style={{ backgroundColor: "#e8f6ff" }}>
              <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                <img className="[corner-shape:inherit] [object-position:center_center] object-contain" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", objectFit: "contain" } as CSSProperties} decoding="auto" width="1254" height="1254" sizes="max((min(100vw - 120px, 1000px) - 60px) / 2, 1px)" src={idliRicePackaging} alt="TG.CO Finest Idli Rice 5 kg package" />
              </div>
              <div className={`framer-sh66ud-container flex-none [z-index:1] will-change-transform`} >
                <div className={`framer-Xaiv6 framer-2BTrO framer-1p9x1rh items-center flex-col flex-nowrap place-content-center [overflow:visible] will-change-transform`} >
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
                        <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">Our family switched to this rice for its authentic taste.</p>
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
                        <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">From daily meals to festive dishes, it’s our trusted choice.</p>
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
                        <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">Pure, natural rice that our whole family loves.</p>
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
                <h2 className="framer-text framer-styles-preset-1r1gjyr" style={{ "--framer-text-alignment": "left" } as CSSProperties} dir="auto">One rice replaces everyday meal worries</h2>
              </div>
              <div className="framer-13m146f [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))" } as CSSProperties} dir="auto">From daily meals to festive dishes, our rice brings the right balance of taste, nutrition, and purity — all in one trusted choice for your family.</p>
              </div>
            </div>
            <div className="framer-1g6rep7 flex-none justify-center [overflow:visible]">
              <div className="framer-xxou2q items-center flex-none flex-col flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [place-self:start] will-change-transform [opacity:1]" style={{ transform: "none" }}>
                <div className="framer-yz7u34 [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                  <h3 className="framer-text framer-styles-preset-crg4y9" dir="auto">98%</h3>
                </div>
                <div className="framer-1dmi9o9 [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))" } as CSSProperties} dir="auto">Families rate the taste as better than regular rice.</p>
                </div>
              </div>
              <div className="framer-1bqz7b9 items-center flex-none flex-col flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [place-self:start] will-change-transform opacity-[0.984621]" style={{ transform: "none" }}>
                <div className="framer-1fs351i [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                  <h3 className="framer-text framer-styles-preset-crg4y9" dir="auto">30%</h3>
                </div>
                <div className="framer-10btaa1 [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))" } as CSSProperties} dir="auto">Say it keeps them fuller for longer.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="framer-1n80t1p max-w-[1000px] [overflow:visible]">
          <div className="framer-ulv6j4 items-start [overflow:visible] [@media(max-width:679.98px)]:[order:1] [@media(min-width:680px)_and_(max-width:1199.98px)]:[order:1]">
            <div className="framer-172lu31 items-start flex-none flex-col flex-nowrap content-start justify-center [overflow:var(--overflow-clip-fallback,clip)]">
              <div className="framer-fxtkhi [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                <h2 className="framer-text framer-styles-preset-1r1gjyr" style={{ "--framer-text-alignment": "left" } as CSSProperties} dir="auto">What goes into<br />our rice</h2>
              </div>
              <div className="framer-1nmsyhc [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))" } as CSSProperties} dir="auto">No artificial polish, no additives, no chemicals. Just naturally grown, carefully harvested rice from Telangana’s fields.</p>
              </div>
            </div>
            <div className="framer-85hg5k flex-none justify-center [overflow:visible]">
              <div className="ssr-variant">
                <div className="framer-1s7d1l1-container flex-none [place-self:start] will-change-transform [opacity:1]" style={{ transform: "none" }}>
                  <div className="framer-I7ASz framer-XAi7s framer-qhMV1 framer-12p6z17 items-start flex-col flex-nowrap max-w-[250px] content-start justify-center [overflow:visible] [opacity:1]" style={{ width: "100%" }}>
                    <div className="framer-tbHRi framer-yzauvh aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-220b89ed-795b-40ee-a164-3b3423c23e62, rgba(0, 0, 0, 0.7))" } as CSSProperties} />
                    <div className="framer-1csibut items-center flex-none flex-col flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                      <div className="framer-1tif1yi [z-index:2] [opacity:1]" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-v37sa" dir="auto">Naturally Grown</p>
                      </div>
                      <div className="framer-a1lfec [z-index:2] [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7)))" } as CSSProperties} dir="auto">Cultivated with care, without harmful chemicals.</p>
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
                        <p className="framer-text framer-styles-preset-v37sa" dir="auto">Quality Checked</p>
                      </div>
                      <div className="framer-a1lfec [z-index:2] [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7)))" } as CSSProperties} dir="auto">Cleaned, graded and tested for everyday purity.</p>
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
                <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="1536" height="1024" sizes="max((min(100vw - 120px, 1000px) - 60px) / 2, 1px)" src={goldenRiceCascade} alt="Golden rice cascading from a wooden scoop into a rice sack" />
              </div>
              <div className={`framer-qlbbaw items-center flex-none flex-col flex-nowrap place-content-center [backdrop-filter:blur(10px)] [overflow:var(--overflow-clip-fallback,clip)] [z-index:4] [@media(max-width:679.98px)]:right-[20px]`} style={{ willChange: "transform" }}>
                <div className="framer-x4o5ou items-center flex-none flex-row flex-nowrap content-center justify-start [overflow:var(--overflow-clip-fallback,clip)]" data-border="true">
                  <div className="framer-1x5qqm1 [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))" } as CSSProperties} dir="auto">Rice Profile (per 100 g)</p>
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
                        <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--token-f0aff8f4-5f67-4909-bd7e-3e676f6fd40f, rgba(255, 255, 255, 0.8))" } as CSSProperties} dir="auto">Energy</p>
                      </div>
                      <div className="framer-dwtukq [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-83kqm0" style={{ "--framer-text-alignment": "right" } as CSSProperties} dir="auto">360 kcal</p>
                      </div>
                    </div>
                    <div className="framer-15bxzk5 flex-none [overflow:var(--overflow-clip-fallback,clip)]" />
                    <div className="framer-lf18tg items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)]">
                      <div className="framer-1c0cpqp [opacity:0.7] [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--token-f0aff8f4-5f67-4909-bd7e-3e676f6fd40f, rgba(255, 255, 255, 0.8))" } as CSSProperties} dir="auto">Carbohydrates</p>
                      </div>
                      <div className="framer-1hrn16w [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-83kqm0" style={{ "--framer-text-alignment": "right" } as CSSProperties} dir="auto">79 g</p>
                      </div>
                    </div>
                    <div className="framer-8x7hrb flex-none [overflow:var(--overflow-clip-fallback,clip)]" />
                    <div className="framer-10u6mkh items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)]">
                      <div className="framer-mz8oos [opacity:0.7] [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--token-f0aff8f4-5f67-4909-bd7e-3e676f6fd40f, rgba(255, 255, 255, 0.8))" } as CSSProperties} dir="auto">Protein</p>
                      </div>
                      <div className="framer-klwfzg [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-83kqm0" style={{ "--framer-text-alignment": "right" } as CSSProperties} dir="auto">7 g</p>
                      </div>
                    </div>
                    <div className="framer-zm2y81 flex-none [overflow:var(--overflow-clip-fallback,clip)]" />
                    <div className="framer-1nqtcm0 items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)]">
                      <div className="framer-l0zyxe [opacity:0.7] [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--token-f0aff8f4-5f67-4909-bd7e-3e676f6fd40f, rgba(255, 255, 255, 0.8))" } as CSSProperties} dir="auto">Fat / Dietary Fiber</p>
                      </div>
                      <div className="framer-1hxj523 [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-83kqm0" style={{ "--framer-text-alignment": "right" } as CSSProperties} dir="auto">0.6 g / 1.2 g</p>
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
  return (
    <section className="framer-y047zk items-center flex-none flex-col flex-nowrap content-center justify-start [mask:linear-gradient(rgb(0,0,0)_0%,rgba(0,0,0,0.96)_73%,rgba(0,0,0,0)_100%)] [overflow:visible]" id="introduction">
      <div className="framer-ipe1eq items-center flex-none flex-col flex-nowrap place-content-center [overflow:visible] [z-index:1] will-change-transform [opacity:1]">
        <div className="framer-1q31ivl items-center flex-none flex-col flex-nowrap place-content-center [overflow:visible]">
          <div className="framer-7xe7aq wrap-break-word [word-break:break-word] [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
            <h2 className="framer-text framer-styles-preset-8hagcl" style={{ "--framer-text-alignment": "center" } as CSSProperties} dir="auto"><span data-fx-word="" className="[opacity:1] will-change-transform" style={{ display: "inline-block", filter: "blur(0px)", transform: "none" } as CSSProperties} data-site-import-responsive="622">Introducing</span> <span data-fx-word="" className="[opacity:1] will-change-transform" style={{ display: "inline-block", filter: "blur(0px)", transform: "none" } as CSSProperties} data-site-import-responsive="623" /></h2>
          </div>
          <div className="framer-1cz438u wrap-break-word [word-break:break-word] [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
            <h2 className="framer-text framer-styles-preset-8hagcl" style={{ "--framer-text-alignment": "center" } as CSSProperties} dir="auto">
              <span data-fx-word="" className="[opacity:1] will-change-transform" style={{ display: "inline-block", filter: "blur(0px)", transform: "none" } as CSSProperties} data-site-import-responsive="626">TG.CO</span>
            </h2>
          </div>
        </div>
        <div className="framer-6izyhc wrap-break-word [word-break:break-word] [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
          <p className="framer-text framer-styles-preset-w9kn3e" dir="auto"><span data-fx-word="" className="[opacity:1] will-change-transform" style={{ display: "inline-block", filter: "blur(0px)", transform: "none" } as CSSProperties} data-site-import-responsive="629" /> <span data-fx-word="" className="[opacity:1] will-change-transform" style={{ display: "inline-block", filter: "blur(0px)", transform: "none" } as CSSProperties} data-site-import-responsive="630">FINEST RICE</span></p>
        </div>
      </div>
      <div className="ssr-variant">
        <div className="framer-11gxwhy-container flex-none [z-index:1] [@media(max-width:679.98px)]:aspect-square [@media(max-width:679.98px)]:right-[-15px]" data-site-import-desktop-variant="">
          <div className="framer-7s6CG framer-bhp2dn [overflow:visible] will-change-transform [opacity:1]" style={{ height: "100%", width: "100%", transform: "none" }} data-site-import-responsive="632">
            <div className="framer-jiq8l1 aspect-square flex-none right-[85px] [overflow:visible] [z-index:8] [filter:blur(5px)] [opacity:1]" style={{ transform: "translateY(-50%) rotate(-59deg)" }}>
              <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                <img className="[corner-shape:inherit] [object-position:center_center] object-contain" style={{ display: "block", width: "100%", height: "100%", borderRadius: "0px" } as CSSProperties} decoding="auto" width="1254" height="1254" src={macroPolishedRiceGrain} alt="" />
              </div>
            </div>
            <div className="framer-x7rgww aspect-square flex-none right-[43px] [overflow:visible] [z-index:8] [filter:blur(5px)] [opacity:1]" style={{ transform: "rotate(53deg)" }}>
              <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                <img className="[corner-shape:inherit] [object-position:center_center] object-contain" style={{ display: "block", width: "100%", height: "100%", borderRadius: "0px" } as CSSProperties} decoding="auto" width="1254" height="1254" src={macroPolishedRiceGrain} alt="" />
              </div>
            </div>
            <div className="framer-8elmzo aspect-square bottom-[474px] flex-none right-[286px] [overflow:visible] [z-index:8] [opacity:1]" style={{ transform: "rotate(-32deg)" }}>
              <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                <img className="[corner-shape:inherit] [object-position:center_center] object-contain" style={{ display: "block", width: "100%", height: "100%", borderRadius: "0px" } as CSSProperties} decoding="auto" width="1254" height="1254" src={macroPolishedRiceGrain} alt="" />
              </div>
            </div>
            <div className="framer-9djwlr aspect-square flex-none right-[235px] [overflow:visible] [z-index:8] [opacity:1]" style={{ transform: "rotate(145deg)" }}>
              <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                <img className="[corner-shape:inherit] [object-position:center_center] object-contain" style={{ display: "block", width: "100%", height: "100%", borderRadius: "0px" } as CSSProperties} decoding="auto" width="1254" height="1254" src={macroPolishedRiceGrain} alt="" />
              </div>
            </div>
            <div className="framer-1e2ze8m aspect-square flex-none [overflow:visible] [z-index:8] [opacity:1]" style={{ transform: "rotate(-120deg)" }}>
              <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                <img className="[corner-shape:inherit] [object-position:center_center] object-contain" style={{ display: "block", width: "100%", height: "100%", borderRadius: "0px" } as CSSProperties} decoding="auto" width="1254" height="1254" src={macroPolishedRiceGrain} alt="" />
              </div>
            </div>
            <div className="framer-n1dhl aspect-square flex-none [overflow:visible] [z-index:8] [filter:blur(3px)] [opacity:1]" style={{ transform: "translateY(-50%) rotate(-40deg)" }}>
              <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                <img className="[corner-shape:inherit] [object-position:center_center] object-contain" style={{ display: "block", width: "100%", height: "100%", borderRadius: "0px" } as CSSProperties} decoding="auto" width="1254" height="1254" src={macroPolishedRiceGrain} alt="" />
              </div>
            </div>
            <div className="framer-9o15fu aspect-square flex-none [overflow:visible] [z-index:0] [filter:blur(3px)] [opacity:1]" style={{ transform: "rotate(47deg)" }}>
              <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                <img className="[corner-shape:inherit] [object-position:center_center] object-contain" style={{ display: "block", width: "100%", height: "100%", borderRadius: "0px" } as CSSProperties} decoding="auto" width="1254" height="1254" src={macroPolishedRiceGrain} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="framer-11gxwhy-container flex-none [z-index:1] [@media(max-width:679.98px)]:aspect-square [@media(max-width:679.98px)]:right-[-15px]" style={{ "--site-import-responsive-display": "block" } as CSSProperties} data-site-import-mobile-variant="">
          <div className="framer-7s6CG framer-bhp2dn framer-v-f841vj [overflow:visible] will-change-transform [opacity:1]" style={{ height: "100%", width: "100%", transform: "none" }}>
            <div className="framer-jiq8l1 aspect-square flex-none right-[85px] [overflow:visible] [z-index:8] [filter:blur(5px)] [opacity:1]" style={{ transform: "translateY(-50%) rotate(-59deg)" }}>
              <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                <img className="[corner-shape:inherit] [object-position:center_center] object-contain" style={{ display: "block", width: "100%", height: "100%", borderRadius: "0px" } as CSSProperties} decoding="auto" width="1254" height="1254" src={macroPolishedRiceGrain} alt="" />
              </div>
            </div>
            <div className="framer-x7rgww aspect-square flex-none right-[43px] [overflow:visible] [z-index:8] [filter:blur(5px)] [opacity:1]" style={{ transform: "rotate(53deg)" }}>
              <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                <img className="[corner-shape:inherit] [object-position:center_center] object-contain" style={{ display: "block", width: "100%", height: "100%", borderRadius: "0px" } as CSSProperties} decoding="auto" width="1254" height="1254" src={macroPolishedRiceGrain} alt="" />
              </div>
            </div>
            <div className="framer-8elmzo aspect-square bottom-[474px] flex-none right-[286px] [overflow:visible] [z-index:8] [opacity:1]" style={{ transform: "rotate(-32deg)" }}>
              <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                <img className="[corner-shape:inherit] [object-position:center_center] object-contain" style={{ display: "block", width: "100%", height: "100%", borderRadius: "0px" } as CSSProperties} decoding="auto" width="1254" height="1254" src={macroPolishedRiceGrain} alt="" />
              </div>
            </div>
            <div className="framer-9djwlr aspect-square flex-none right-[235px] [overflow:visible] [z-index:8] [opacity:1]" style={{ transform: "rotate(145deg)" }}>
              <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                <img className="[corner-shape:inherit] [object-position:center_center] object-contain" style={{ display: "block", width: "100%", height: "100%", borderRadius: "0px" } as CSSProperties} decoding="auto" width="1254" height="1254" src={macroPolishedRiceGrain} alt="" />
              </div>
            </div>
            <div className="framer-1e2ze8m aspect-square flex-none [overflow:visible] [z-index:8] [opacity:1]" style={{ transform: "rotate(-120deg)" }}>
              <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                <img className="[corner-shape:inherit] [object-position:center_center] object-contain" style={{ display: "block", width: "100%", height: "100%", borderRadius: "0px" } as CSSProperties} decoding="auto" width="1254" height="1254" src={macroPolishedRiceGrain} alt="" />
              </div>
            </div>
            <div className="framer-n1dhl aspect-square flex-none [overflow:visible] [z-index:8] [filter:blur(3px)] [opacity:1]" style={{ transform: "rotate(-40deg)" }}>
              <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                <img className="[corner-shape:inherit] [object-position:center_center] object-contain" style={{ display: "block", width: "100%", height: "100%", borderRadius: "0px" } as CSSProperties} decoding="auto" width="1254" height="1254" src={macroPolishedRiceGrain} alt="" />
              </div>
            </div>
            <div className="framer-9o15fu aspect-square flex-none [overflow:visible] [z-index:0] [filter:blur(3px)] [opacity:1]" style={{ transform: "rotate(47deg)" }}>
              <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                <img className="[corner-shape:inherit] [object-position:center_center] object-contain" style={{ display: "block", width: "100%", height: "100%", borderRadius: "0px" } as CSSProperties} decoding="auto" width="1254" height="1254" src={macroPolishedRiceGrain} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const FIRST_PRODUCT_SLIDE = { className: "framer-98kjiw", src: premiumSonaMasooriRice, srcSet: undefined as string | undefined, shadow: false };
const PRODUCT_SLIDES = [
  FIRST_PRODUCT_SLIDE,
  { className: "framer-1j9k9hh", src: ponniRiceBag, srcSet: undefined, shadow: true },
  { className: "framer-1qs3wq8", src: premiumIdliRice, srcSet: undefined, shadow: true },
  {
    className: "framer-vo0dng",
    src: unzippingIdliRiceBag,
    srcSet: undefined,
    shadow: true,
  },
];
const PRODUCT_SLIDE_FILLS = ["framer-199ya20", "framer-441kts", "framer-eb6507", "framer-1v91fxi"];
const PRODUCT_DETAILS = [
  "Our rice comes from Telangana and is carefully selected for authentic taste and dependable everyday quality. Each variety is described clearly so you can choose the grain that suits your cooking.",
  "Choose your preferred variety and bag size, then rinse and cook according to the instructions on the package. Sona Masoori suits everyday meals, Basmati works well for biryani and pulao, and Idli Rice is made for soft idlis and dosas.",
  "Delivery availability and charges vary by location. Enter your PIN code or country at checkout to see eligible destinations and estimated delivery times. For damaged packages, contact support with your order number and photos.",
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
    const timer = window.setTimeout(() => setSlide((current) => (current + 1) % PRODUCT_SLIDES.length), 3800);
    return () => window.clearTimeout(timer);
  }, [slide]);
  return (
    <section className="framer-5z1pl3 items-center flex-none flex-col flex-nowrap place-content-center [overflow:visible] [scroll-margin-top:120px]" id="buy-product">
      <div className="framer-v127ei max-w-[1200px] [overflow:visible]">
        <div className="ssr-variant">
          <div className="framer-wtclw1-container [z-index:1] [@media(max-width:679.98px)]:[order:0] [@media(min-width:680px)_and_(max-width:1199.98px)]:[order:0] will-change-transform [opacity:1]" style={{ transform: "none" }}>
            <div className="framer-L6REA framer-Jf64E framer-1vhsrli items-center flex-col flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]" style={{ width: "100%" }}>
              <div className="framer-14bx2df items-center aspect-square flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]" style={{ backgroundColor: "var(--token-7dec4550-2ba6-4025-bfd1-f0cbf4c0a7c9, rgb(247, 247, 247))", borderRadius: "25px" }}>
                <div key={slide} className={`${activeSlide.className} ${activeSlide.shadow ? "[box-shadow:rgba(0,_0,_0,_0.15)_0px_5px_5px_0px]" : ""} [opacity:1]`} style={{ borderRadius: "25px" }}>
                  <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                    <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="3712" height="4608" sizes="max((min(100vw - 120px, 1200px) - 60px) / 2, 1px)" srcSet={activeSlide.srcSet} src={activeSlide.src} alt="TG.CO Finest Rice product bag" />
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
                <p className="framer-text framer-styles-preset-1gnmur6" dir="auto">From Telangana’s fields</p>
              </div>
            </div>
            <div className="framer-2hbelf [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
              <h2 className="framer-text framer-styles-preset-1r1gjyr" style={{ "--framer-text-alignment": "left" } as CSSProperties} dir="auto">TG.CO Finest Rice</h2>
            </div>
            <div className="framer-1dz95bx items-center flex-none flex-row flex-nowrap content-center justify-start [opacity:0.5] [overflow:visible]">
              <div className="framer-1n75685 [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-sqgpjx" style={{ "--framer-text-alignment": "left" } as CSSProperties} dir="auto">Telangana-grown rice</p>
              </div>
              <div className="framer-1vc2bke flex-none [overflow:var(--overflow-clip-fallback,clip)]" />
              <div className="framer-1myn7sk [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-sqgpjx" style={{ "--framer-text-alignment": "left" } as CSSProperties} dir="auto">Carefully selected grains</p>
              </div>
            </div>
          </div>
          <div className="framer-nd558s [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
            <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-alignment": "left" } as CSSProperties} dir="auto">Naturally grown, carefully harvested rice from Telangana. Enjoy authentic taste, wholesome goodness, and a versatile grain for everyday meals.</p>
          </div>
          <div className="ssr-variant">
            <div className="framer-1vn4wu-container" data-site-import-desktop-variant="">
              <div className="framer-loDpe framer-uvfdka items-start flex-col flex-nowrap content-start justify-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]" style={{ width: "100%" }} data-site-import-responsive="693">
                <div className="framer-19l9nlv items-center flex-none flex-col flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]" style={{ backgroundColor: "var(--token-7dec4550-2ba6-4025-bfd1-f0cbf4c0a7c9, rgb(247, 247, 247))", borderRadius: "15px" }}>
                  <div className={`framer-1fylbk7-container flex-none ${plan === "subscribe" ? "[opacity:1]" : "[opacity:0.7]"}`}>
                    <div className="framer-6BFw0 framer-2BTrO framer-XAi7s framer-1i4y0kw items-start flex-col flex-nowrap content-start justify-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]" style={{ backgroundColor: plan === "subscribe" ? "var(--token-136beebb-89fe-4d20-a894-e7f11788a217, rgb(255, 255, 255))" : "rgba(255, 255, 255, 0)", width: "100%", borderRadius: "12px" }} tabIndex={0} role="radio" aria-checked={plan === "subscribe"} onClick={() => setPlan("subscribe")} onKeyDown={activateOnKey(() => setPlan("subscribe"))}>
                      <div className="framer-17xjxmt items-center flex-none flex-row flex-nowrap content-center justify-between [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                        <div className="framer-1h3z5e8 [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                          <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7)))" } as CSSProperties} dir="auto">Subscribe &amp; Save 20%</p>
                        </div>
                        <div className="framer-p9rqet [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                          <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7)))" } as CSSProperties} dir="auto">Delivered every 28 days</p>
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
                            <h5 className="framer-text" style={{ "--font-selector": "RlM7TWFucm9wZS1zZW1pYm9sZA==", "--framer-font-family": "\"Manrope\", \"Manrope Placeholder\", sans-serif", "--framer-font-weight": "600", "--framer-letter-spacing": "-0.02em", "--framer-line-height": "1em", "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-1lwpl3i, var(--token-2d481a32-3657-4b5d-beb2-8e8433a83f75, rgba(0, 0, 0, 0.3)))", "--framer-text-decoration": "line-through" } as CSSProperties} dir="auto">₹24.00</h5>
                          </div>
                          <div className="framer-5mdk86 [z-index:2] [opacity:1]" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-v37sa" dir="auto">₹19.20</p>
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
                            <p className="framer-text framer-styles-preset-v37sa" dir="auto">₹24.00</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-1qssmuj-container flex-none [opacity:1]">
                  <a className="framer-6dH45 framer-FaBO9 framer-Jf64E framer-7z2klu framer-wcun84 [backdrop-filter:none] [opacity:1]" style={{ backgroundColor: "var(--token-a5917666-de48-475a-8244-858af9f157b1, rgb(0, 0, 0))", width: "100%", borderRadius: "99px" }} href="/#buy-product">
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
                          <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7)))" } as CSSProperties} dir="auto">Subscribe &amp; Save 20%</p>
                        </div>
                        <div className="framer-p9rqet [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                          <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7)))" } as CSSProperties} dir="auto">Delivered every 28 days</p>
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
                            <h5 className="framer-text" style={{ "--font-selector": "RlM7TWFucm9wZS1zZW1pYm9sZA==", "--framer-font-family": "\"Manrope\", \"Manrope Placeholder\", sans-serif", "--framer-font-weight": "600", "--framer-letter-spacing": "-0.02em", "--framer-line-height": "1em", "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-1lwpl3i, var(--token-2d481a32-3657-4b5d-beb2-8e8433a83f75, rgba(0, 0, 0, 0.3)))", "--framer-text-decoration": "line-through" } as CSSProperties} dir="auto">₹24.00</h5>
                          </div>
                          <div className="framer-5mdk86 [z-index:2] [opacity:1]" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-v37sa" dir="auto">₹19.20</p>
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
                            <p className="framer-text framer-styles-preset-v37sa" dir="auto">₹24.00</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-1qssmuj-container flex-none [opacity:1]">
                  <a className="framer-6dH45 framer-FaBO9 framer-Jf64E framer-7z2klu framer-wcun84 [backdrop-filter:none] [opacity:1]" style={{ backgroundColor: "var(--token-a5917666-de48-475a-8244-858af9f157b1, rgb(0, 0, 0))", width: "100%", borderRadius: "99px" }} href="/#buy-product">
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
                <p className="framer-text framer-styles-preset-51skty" dir="auto">Everyday Staple</p>
              </div>
            </div>
          </div>
          <div className="framer-1v4bc7 items-center flex-none flex-col flex-nowrap place-content-center [overflow:visible]">
            <div className="ssr-variant">
              <div className="framer-15znfnl-container">
                <div className={`framer-HvOY4 framer-qhMV1 framer-odhqv7 ${openDetails.includes(0) ? "framer-v-odhqv7" : "framer-v-1ocuso8"} items-start flex-col flex-nowrap content-start justify-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]`} style={{ backgroundColor: "var(--token-136beebb-89fe-4d20-a894-e7f11788a217, rgb(255, 255, 255))", width: "100%", borderRadius: "12px" }} tabIndex={0} role="button" aria-expanded={openDetails.includes(0)} onClick={(event) => animateLayoutHeight(event.currentTarget, () => setOpenDetails((list) => toggleIndex(list, 0)), DETAILS_SPRING)} onKeyDown={(event) => { const box = event.currentTarget; activateOnKey(() => animateLayoutHeight(box, () => setOpenDetails((list) => toggleIndex(list, 0)), DETAILS_SPRING))(event); }}>
                  <div className="framer-85xd3t items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                    <div className="framer-yoQJ9 framer-13t4c2t aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-220b89ed-795b-40ee-a164-3b3423c23e62, rgba(0, 0, 0, 0.7))" } as CSSProperties} />
                    <div className="framer-nt8qln wrap-break-word select-none [word-break:break-word] [opacity:1]" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-1gnmur6" dir="auto">Rice Details</p>
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
                <div className={`framer-HvOY4 framer-qhMV1 framer-odhqv7 ${openDetails.includes(1) ? "framer-v-odhqv7" : "framer-v-1ocuso8"} items-start flex-col flex-nowrap content-start justify-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]`} style={{ backgroundColor: "var(--token-136beebb-89fe-4d20-a894-e7f11788a217, rgb(255, 255, 255))", width: "100%", borderRadius: "12px" }} tabIndex={0} role="button" aria-expanded={openDetails.includes(1)} onClick={(event) => animateLayoutHeight(event.currentTarget, () => setOpenDetails((list) => toggleIndex(list, 1)), DETAILS_SPRING)} onKeyDown={(event) => { const box = event.currentTarget; activateOnKey(() => animateLayoutHeight(box, () => setOpenDetails((list) => toggleIndex(list, 1)), DETAILS_SPRING))(event); }}>
                  <div className="framer-85xd3t items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                    <div className="framer-AvdJx framer-13t4c2t aspect-square flex-none [opacity:1]" style={{ "--f5srmm": "var(--token-220b89ed-795b-40ee-a164-3b3423c23e62, rgba(0, 0, 0, 0.7))" } as CSSProperties} />
                    <div className="framer-nt8qln wrap-break-word select-none [word-break:break-word] [opacity:1]" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-1gnmur6" dir="auto">How to Cook</p>
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
                <div className={`framer-HvOY4 framer-qhMV1 framer-odhqv7 ${openDetails.includes(2) ? "framer-v-odhqv7" : "framer-v-1ocuso8"} items-start flex-col flex-nowrap content-start justify-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]`} style={{ backgroundColor: "var(--token-136beebb-89fe-4d20-a894-e7f11788a217, rgb(255, 255, 255))", width: "100%", borderRadius: "12px" }} tabIndex={0} role="button" aria-expanded={openDetails.includes(2)} onClick={(event) => animateLayoutHeight(event.currentTarget, () => setOpenDetails((list) => toggleIndex(list, 2)), DETAILS_SPRING)} onKeyDown={(event) => { const box = event.currentTarget; activateOnKey(() => animateLayoutHeight(box, () => setOpenDetails((list) => toggleIndex(list, 2)), DETAILS_SPRING))(event); }}>
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
  "Our rice comes from the agricultural roots of Telangana. We focus on authentic taste, responsible sourcing, and carefully selected grains for everyday meals.",
  "We believe in transparent farming practices. Verified cultivation details, organic certifications, and quality reports will be provided for applicable rice varieties.",
  "Sona Masoori is ideal for everyday meals, Basmati for biryani and pulao, and Idli Rice for soft idlis and dosas. Explore each variety to find your preferred grain.",
  "Yes. Simply choose your rice, select the bag size, enter your delivery details, and complete your purchase through guest checkout.",
  "Delivery availability depends on your location. Enter your PIN code or country to check eligible destinations, shipping charges, and estimated delivery times.",
  "Contact our support team with your order number and photos of the damaged package. We'll review the issue and assist with a replacement or refund according to our policy.",
];


function ImportedSectionFAQSection() {
  const [openFaqs, setOpenFaqs] = useState<number[]>([]);
  return (
    <section className="framer-1f7jma3 items-start content-start justify-center [overflow:var(--overflow-clip-fallback,clip)] [scroll-margin-top:60px] [will-change:var(--framer-will-change-override,transform)] [z-index:2]" id="faq">
      <div className="framer-bbk154 items-start max-w-[1200px] content-start justify-center [overflow:visible]">
        <div className="framer-ql40bw items-center flex-[1_0_0px] flex-col flex-nowrap max-w-[600px] place-content-center [overflow:visible]">
          <div className="framer-m1srp7 [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
            <h2 className="framer-text framer-styles-preset-1r1gjyr" style={{ "--framer-text-alignment": "center" } as CSSProperties} dir="auto">Got questions?<br />We're here to help</h2>
          </div>
          <div className="framer-rbzvac items-center flex-none flex-col flex-nowrap place-content-center [overflow:visible]">
            <div className="ssr-variant">
              <div className="framer-6gdc90-container will-change-transform [opacity:1]" style={{ transform: "none" }}>
                <div className={`framer-h9poP framer-FaBO9 framer-qhMV1 framer-11vn5nc ${openFaqs.includes(0) ? "framer-v-11vn5nc" : "framer-v-1rhfu2w"} items-start flex-col flex-nowrap content-start justify-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]`} style={{ backgroundColor: "var(--token-136beebb-89fe-4d20-a894-e7f11788a217, rgb(255, 255, 255))", width: "100%", borderRadius: "12px" }} tabIndex={0} role="button" aria-expanded={openFaqs.includes(0)} onClick={(event) => animateLayoutHeight(event.currentTarget, () => setOpenFaqs((list) => toggleIndex(list, 0)), FAQ_SPRING)} onKeyDown={(event) => { const box = event.currentTarget; activateOnKey(() => animateLayoutHeight(box, () => setOpenFaqs((list) => toggleIndex(list, 0)), FAQ_SPRING))(event); }}>
                  <div className="framer-18eljuz items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                    <div className="framer-16y69vw wrap-break-word select-none [word-break:break-word] [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-20520155-1f7c-48bb-bab4-b385c8b0875a, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-sqgpjx" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-20520155-1f7c-48bb-bab4-b385c8b0875a, rgb(0, 0, 0)))" } as CSSProperties} dir="auto">What makes TG.CO Finest Rice special?</p>
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
                <div className={`framer-h9poP framer-FaBO9 framer-qhMV1 framer-11vn5nc ${openFaqs.includes(1) ? "framer-v-11vn5nc" : "framer-v-1rhfu2w"} items-start flex-col flex-nowrap content-start justify-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]`} style={{ backgroundColor: "var(--token-136beebb-89fe-4d20-a894-e7f11788a217, rgb(255, 255, 255))", width: "100%", borderRadius: "12px" }} tabIndex={0} role="button" aria-expanded={openFaqs.includes(1)} onClick={(event) => animateLayoutHeight(event.currentTarget, () => setOpenFaqs((list) => toggleIndex(list, 1)), FAQ_SPRING)} onKeyDown={(event) => { const box = event.currentTarget; activateOnKey(() => animateLayoutHeight(box, () => setOpenFaqs((list) => toggleIndex(list, 1)), FAQ_SPRING))(event); }}>
                  <div className="framer-18eljuz items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                    <div className="framer-16y69vw wrap-break-word select-none [word-break:break-word] [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-20520155-1f7c-48bb-bab4-b385c8b0875a, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-sqgpjx" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-20520155-1f7c-48bb-bab4-b385c8b0875a, rgb(0, 0, 0)))" } as CSSProperties} dir="auto">Is your rice organic and fertilizer-free?</p>
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
                <div className={`framer-h9poP framer-FaBO9 framer-qhMV1 framer-11vn5nc ${openFaqs.includes(2) ? "framer-v-11vn5nc" : "framer-v-1rhfu2w"} items-start flex-col flex-nowrap content-start justify-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]`} style={{ backgroundColor: "var(--token-136beebb-89fe-4d20-a894-e7f11788a217, rgb(255, 255, 255))", width: "100%", borderRadius: "12px" }} tabIndex={0} role="button" aria-expanded={openFaqs.includes(2)} onClick={(event) => animateLayoutHeight(event.currentTarget, () => setOpenFaqs((list) => toggleIndex(list, 2)), FAQ_SPRING)} onKeyDown={(event) => { const box = event.currentTarget; activateOnKey(() => animateLayoutHeight(box, () => setOpenFaqs((list) => toggleIndex(list, 2)), FAQ_SPRING))(event); }}>
                  <div className="framer-18eljuz items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                    <div className="framer-16y69vw wrap-break-word select-none [word-break:break-word] [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-20520155-1f7c-48bb-bab4-b385c8b0875a, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-sqgpjx" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-20520155-1f7c-48bb-bab4-b385c8b0875a, rgb(0, 0, 0)))" } as CSSProperties} dir="auto">Which rice variety should I choose?</p>
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
                <div className={`framer-h9poP framer-FaBO9 framer-qhMV1 framer-11vn5nc ${openFaqs.includes(3) ? "framer-v-11vn5nc" : "framer-v-1rhfu2w"} items-start flex-col flex-nowrap content-start justify-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]`} style={{ backgroundColor: "var(--token-136beebb-89fe-4d20-a894-e7f11788a217, rgb(255, 255, 255))", width: "100%", borderRadius: "12px" }} tabIndex={0} role="button" aria-expanded={openFaqs.includes(3)} onClick={(event) => animateLayoutHeight(event.currentTarget, () => setOpenFaqs((list) => toggleIndex(list, 3)), FAQ_SPRING)} onKeyDown={(event) => { const box = event.currentTarget; activateOnKey(() => animateLayoutHeight(box, () => setOpenFaqs((list) => toggleIndex(list, 3)), FAQ_SPRING))(event); }}>
                  <div className="framer-18eljuz items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                    <div className="framer-16y69vw wrap-break-word select-none [word-break:break-word] [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-20520155-1f7c-48bb-bab4-b385c8b0875a, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-sqgpjx" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-20520155-1f7c-48bb-bab4-b385c8b0875a, rgb(0, 0, 0)))" } as CSSProperties} dir="auto">Can I order rice without creating an account?</p>
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
                <div className={`framer-h9poP framer-FaBO9 framer-qhMV1 framer-11vn5nc ${openFaqs.includes(4) ? "framer-v-11vn5nc" : "framer-v-1rhfu2w"} items-start flex-col flex-nowrap content-start justify-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]`} style={{ backgroundColor: "var(--token-136beebb-89fe-4d20-a894-e7f11788a217, rgb(255, 255, 255))", width: "100%", borderRadius: "12px" }} tabIndex={0} role="button" aria-expanded={openFaqs.includes(4)} onClick={(event) => animateLayoutHeight(event.currentTarget, () => setOpenFaqs((list) => toggleIndex(list, 4)), FAQ_SPRING)} onKeyDown={(event) => { const box = event.currentTarget; activateOnKey(() => animateLayoutHeight(box, () => setOpenFaqs((list) => toggleIndex(list, 4)), FAQ_SPRING))(event); }}>
                  <div className="framer-18eljuz items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                    <div className="framer-16y69vw wrap-break-word select-none [word-break:break-word] [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-20520155-1f7c-48bb-bab4-b385c8b0875a, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-sqgpjx" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-20520155-1f7c-48bb-bab4-b385c8b0875a, rgb(0, 0, 0)))" } as CSSProperties} dir="auto">Do you deliver across India and internationally?</p>
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
                <div className={`framer-h9poP framer-FaBO9 framer-qhMV1 framer-11vn5nc ${openFaqs.includes(5) ? "framer-v-11vn5nc" : "framer-v-1rhfu2w"} items-start flex-col flex-nowrap content-start justify-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]`} style={{ backgroundColor: "var(--token-136beebb-89fe-4d20-a894-e7f11788a217, rgb(255, 255, 255))", width: "100%", borderRadius: "12px" }} tabIndex={0} role="button" aria-expanded={openFaqs.includes(5)} onClick={(event) => animateLayoutHeight(event.currentTarget, () => setOpenFaqs((list) => toggleIndex(list, 5)), FAQ_SPRING)} onKeyDown={(event) => { const box = event.currentTarget; activateOnKey(() => animateLayoutHeight(box, () => setOpenFaqs((list) => toggleIndex(list, 5)), FAQ_SPRING))(event); }}>
                  <div className="framer-18eljuz items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                    <div className="framer-16y69vw wrap-break-word select-none [word-break:break-word] [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-20520155-1f7c-48bb-bab4-b385c8b0875a, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-sqgpjx" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-20520155-1f7c-48bb-bab4-b385c8b0875a, rgb(0, 0, 0)))" } as CSSProperties} dir="auto">What if my rice bag arrives damaged?</p>
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
        <img className="[border-radius:inherit] [corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%" }} decoding="auto" src={ctaMainImage} alt="TG.CO Finest Rice call to action" />
      </div>
      <div className="framer-5k7g2i flex-none [inset:0px] [overflow:var(--overflow-clip-fallback,clip)] [z-index:1]" />
      <div className="framer-jdbpv2 items-start max-w-[1200px] content-start justify-center [overflow:var(--overflow-clip-fallback,clip)]">
        <div className="framer-12lagj9 max-w-[433px] [z-index:2]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
          <h3 className="framer-text framer-styles-preset-crg4y9" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255))" } as CSSProperties} dir="auto">Bring the authentic taste of Telangana rice to your table</h3>
        </div>
        <div className="framer-1grnsct [overflow:var(--overflow-clip-fallback,clip)]">
          <div className="framer-mdv6xc-container flex-none [z-index:2]">
            <a className="framer-6dH45 framer-FaBO9 framer-Jf64E framer-7z2klu framer-wcun84 [backdrop-filter:none] [border-radius:99px] [opacity:1]" style={{ width: "100%", backgroundColor: "var(--token-136beebb-89fe-4d20-a894-e7f11788a217, rgb(255, 255, 255))" }} data-framer-page-link-current="true" href="/">
              <div className="framer-x7c3yg [opacity:1]" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-sqgpjx" dir="auto">Shop Rice</p>
              </div>
            </a>
          </div>
          <div className="framer-1acd4v7-container flex-none [z-index:2]">
            <a className="framer-6dH45 framer-FaBO9 framer-Jf64E framer-7z2klu framer-wcun84 [backdrop-filter:blur(10px)] [border-radius:99px] [opacity:1]" style={{ width: "100%", backgroundColor: "rgba(255, 255, 255, 0.1)" }} href="/#ingredients">
              <div className="framer-x7c3yg [opacity:1]" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--extracted-r6o4lv": "var(--token-136beebb-89fe-4d20-a894-e7f11788a217, rgb(255, 255, 255))", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-sqgpjx" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-136beebb-89fe-4d20-a894-e7f11788a217, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">Explore Our Rice</p>
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
                        <p className="framer-text framer-styles-preset-sqgpjx" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">“Our family loves the authentic taste of this Telangana rice.”</p>
                      </div>
                    </div>
                    <div className="framer-12d475x flex-none [inset:0px] [overflow:visible] [z-index:0] [opacity:1]">
                      <div className="[border-radius:inherit] [corner-shape:inherit] [inset:0px]" style={{ position: "absolute" }}>
                        <img className="[border-radius:inherit] [corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%" }} decoding="auto" width="4096" height="4096" sizes="320px" src={joyfulRiceFamilyMeal} alt="A family sharing a rice meal" />
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
                        <p className="framer-text framer-styles-preset-sqgpjx" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">“It’s perfect for our everyday meals and family dinners.”</p>
                      </div>
                    </div>
                    <div className="framer-12d475x flex-none [inset:0px] [overflow:visible] [z-index:0] [opacity:1]">
                      <div className="[border-radius:inherit] [corner-shape:inherit] [inset:0px]" style={{ position: "absolute" }}>
                        <img className="[border-radius:inherit] [corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%" }} decoding="auto" width="4096" height="4096" sizes="320px" src={warmRiceFeast} alt="Guests sharing a rice dinner" />
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
                        <p className="framer-text framer-styles-preset-sqgpjx" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">“We enjoy the same wholesome rice from simple meals to festive dishes.”</p>
                      </div>
                    </div>
                    <div className="framer-12d475x flex-none [inset:0px] [overflow:visible] [z-index:0] [opacity:1]">
                      <div className="[border-radius:inherit] [corner-shape:inherit] [inset:0px]" style={{ position: "absolute" }}>
                        <img className="[border-radius:inherit] [corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%" }} decoding="auto" width="4096" height="4096" sizes="320px" src={joyfulRiceCooking} alt="A home cook preparing rice" />
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
                        <p className="framer-text framer-styles-preset-sqgpjx" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">“Naturally grown rice with a lovely, authentic flavour.”</p>
                      </div>
                    </div>
                    <div className="framer-12d475x flex-none [inset:0px] [overflow:visible] [z-index:0] [opacity:1]">
                      <div className="[border-radius:inherit] [corner-shape:inherit] [inset:0px]" style={{ position: "absolute" }}>
                        <img className="[border-radius:inherit] [corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%" }} decoding="auto" width="4096" height="4096" sizes="320px" src={benefitOriginImage} alt="Rice fields in Telangana" />
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
                        <p className="framer-text framer-styles-preset-sqgpjx" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">“A trusted choice for our family, meal after meal.”</p>
                      </div>
                    </div>
                    <div className="framer-12d475x flex-none [inset:0px] [overflow:visible] [z-index:0] [opacity:1]">
                      <div className="[border-radius:inherit] [corner-shape:inherit] [inset:0px]" style={{ position: "absolute" }}>
                        <img className="[border-radius:inherit] [corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%" }} decoding="auto" width="4096" height="4096" sizes="320px" src={cuppedRiceGrain} alt="A hand holding a polished rice grain" />
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
                      <p className="framer-text framer-styles-preset-sqgpjx" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">“Our family loves the authentic taste of this Telangana rice.”</p>
                    </div>
                  </div>
                  <div className="framer-12d475x flex-none [inset:0px] [overflow:visible] [z-index:0] [opacity:1]">
                    <div className="[border-radius:inherit] [corner-shape:inherit] [inset:0px]" style={{ position: "absolute" }}>
                      <img className="[border-radius:inherit] [corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%" }} decoding="auto" width="4096" height="4096" sizes="320px" src={joyfulRiceFamilyMeal} alt="A family sharing a rice meal" />
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
                      <p className="framer-text framer-styles-preset-sqgpjx" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">“It’s perfect for our everyday meals and family dinners.”</p>
                    </div>
                  </div>
                  <div className="framer-12d475x flex-none [inset:0px] [overflow:visible] [z-index:0] [opacity:1]">
                    <div className="[border-radius:inherit] [corner-shape:inherit] [inset:0px]" style={{ position: "absolute" }}>
                      <img className="[border-radius:inherit] [corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%" }} decoding="auto" width="4096" height="4096" sizes="320px" src={warmRiceFeast} alt="Guests sharing a rice dinner" />
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
                      <p className="framer-text framer-styles-preset-sqgpjx" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">“We enjoy the same wholesome rice from simple meals to festive dishes.”</p>
                    </div>
                  </div>
                  <div className="framer-12d475x flex-none [inset:0px] [overflow:visible] [z-index:0] [opacity:1]">
                    <div className="[border-radius:inherit] [corner-shape:inherit] [inset:0px]" style={{ position: "absolute" }}>
                      <img className="[border-radius:inherit] [corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%" }} decoding="auto" width="4096" height="4096" sizes="320px" src={joyfulRiceCooking} alt="A home cook preparing rice" />
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
                      <p className="framer-text framer-styles-preset-sqgpjx" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">“Naturally grown rice with a lovely, authentic flavour.”</p>
                    </div>
                  </div>
                  <div className="framer-12d475x flex-none [inset:0px] [overflow:visible] [z-index:0] [opacity:1]">
                    <div className="[border-radius:inherit] [corner-shape:inherit] [inset:0px]" style={{ position: "absolute" }}>
                      <img className="[border-radius:inherit] [corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%" }} decoding="auto" width="4096" height="4096" sizes="320px" src={benefitOriginImage} alt="Rice fields in Telangana" />
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
                      <p className="framer-text framer-styles-preset-sqgpjx" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-4d91f15a-be6f-4c68-8d25-3bf02a07afb6, rgb(255, 255, 255)))" } as CSSProperties} dir="auto">“A trusted choice for our family, meal after meal.”</p>
                    </div>
                  </div>
                  <div className="framer-12d475x flex-none [inset:0px] [overflow:visible] [z-index:0] [opacity:1]">
                    <div className="[border-radius:inherit] [corner-shape:inherit] [inset:0px]" style={{ position: "absolute" }}>
                      <img className="[border-radius:inherit] [corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%" }} decoding="auto" width="4096" height="4096" sizes="320px" src={cuppedRiceGrain} alt="A hand holding a polished rice grain" />
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
                    <img className="[border-radius:inherit] [corner-shape:inherit] [object-position:center_center] object-contain" style={{ display: "block", width: "100%", height: "100%" }} decoding="auto" width="2219" height="638" sizes="(min-width: 1200px) max(86.9514px, 118.2539px), (max-width: 679.98px) max(86.9514px, 118.2539px), (min-width: 680px) and (max-width: 1199.98px) max(86.9514px, 118.2539px)" src={riceFarmerLogo} alt="Logo" />
                  </div>
                </div>
              </div>
              <div className="framer-1uze6q7 wrap-break-word [opacity:0.8] [word-break:break-word]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-51skty" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--token-20520155-1f7c-48bb-bab4-b385c8b0875a, rgb(0, 0, 0))" } as CSSProperties} dir="auto">From Telangana’s fields to tables everywhere.</p>
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
                <a className="framer-trzQi framer-FaBO9 framer-qhMV1 framer-udbtyz framer-v-wuyut1 framer-128y9cq items-center flex-row! flex-col flex-nowrap place-content-center [overflow:visible] [padding:8px_15px_8px_8px] [backdrop-filter:blur(5px)] [opacity:1]" style={{ "--border-bottom-width": "1px", "--border-color": "var(--token-8bbbea30-76c9-4ba6-997e-07eab0911b28, rgb(255, 255, 255))", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "var(--token-7dec4550-2ba6-4025-bfd1-f0cbf4c0a7c9, rgb(247, 247, 247))", width: "100%", borderRadius: "18px" } as CSSProperties} data-border="true" href="/#products">
                  <div className="framer-12ym6a6 items-center flex-none flex-row flex-nowrap place-content-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]" style={{ backgroundColor: "var(--token-136beebb-89fe-4d20-a894-e7f11788a217, rgb(255, 255, 255))", borderRadius: "15px" }}>
                    <div className="framer-k82luq aspect-square flex-none [overflow:visible] [filter:drop-shadow(rgba(0,_0,_0,_0.15)_0px_5px_3px)] [opacity:1]">
                      <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                        <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="8000" height="8000" sizes="(min-width: 1200px) 50px, (max-width: 679.98px) 50px, (min-width: 680px) and (max-width: 1199.98px) 50px" src={basmatiRiceBag} alt="TG.CO Finest Basmati Rice 5 kg bag" />
                      </div>
                    </div>
                  </div>
                  <div className="framer-o187ju content-center! items-center flex-[1_0_0px] flex-row flex-nowrap content-end justify-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                    <div className="framer-1ef9szw items-start flex-[1_0_0px] flex-col flex-nowrap content-start justify-center [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]">
                      <div className="framer-iv1a0p [z-index:2] [opacity:1]" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-sqgpjx" dir="auto">TG.CO Finest Rice</p>
                      </div>
                      <div className="framer-16l5uku [z-index:2] [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-1gnmur6" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-52e79835-e8e9-4a84-ae4b-bf400f45d0cf, rgba(0, 0, 0, 0.7)))" } as CSSProperties} dir="auto">Explore our rice</p>
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
              <p className="framer-text framer-styles-preset-83kqm0" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--token-b3f9dcfd-cd1a-4c39-9e0e-26344979508f, rgba(0, 0, 0, 0.4))" } as CSSProperties} dir="auto">Rice varieties, availability and delivery options vary by location. See product details and policies before ordering.</p>
            </div>
            <div className="framer-l9wm4o items-center place-content-center [overflow:var(--overflow-clip-fallback,clip)]">
              <div className="framer-1tyokc9 wrap-break-word [word-break:break-word]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-83kqm0" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--token-b3f9dcfd-cd1a-4c39-9e0e-26344979508f, rgba(0, 0, 0, 0.4))" } as CSSProperties} dir="auto">© 2026 TG.CO Finest Rice. All rights reserved.</p>
              </div>
              <div className="ssr-variant">
                <div className="framer-15tmtrs wrap-break-word [word-break:break-word]" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-83kqm0" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--token-b3f9dcfd-cd1a-4c39-9e0e-26344979508f, rgba(0, 0, 0, 0.4))" } as CSSProperties} dir="auto">
                    <a className="framer-text framer-styles-preset-1asoou7 oi-web-anatomy-link" href="https://webanatomy.in/" target="_blank" rel="noopener noreferrer">Designed &amp; Developed by Web Anatomy</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="framer-18aj7pv items-start flex-none flex-col flex-nowrap content-start justify-center [overflow:visible] [@media(max-width:679.98px)]:[order:0] [@media(max-width:679.98px)]:[place-self:start] [@media(min-width:680px)_and_(max-width:1199.98px)]:[order:0] [@media(min-width:680px)_and_(max-width:1199.98px)]:[place-self:start]">
            <div className="framer-5gv7m4" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
              <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--token-b3f9dcfd-cd1a-4c39-9e0e-26344979508f, rgba(0, 0, 0, 0.4))" } as CSSProperties} dir="auto">Explore</p>
            </div>
            <div className="framer-oh1tn3 items-start flex-none flex-col flex-nowrap content-start justify-center [overflow:visible]">
              <div className="framer-i7gmn" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-wqeyn7" dir="auto">
                  <a className="framer-text framer-styles-preset-dnlggy" href="/#introduction">Our Story</a>
                </p>
              </div>
              <div className="framer-1cs00lr" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-wqeyn7" dir="auto">
                  <a className="framer-text framer-styles-preset-dnlggy" href="/#benefits">Our Farmers</a>
                </p>
              </div>
              <div className="framer-10ozyaa" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-wqeyn7" dir="auto">
                  <a className="framer-text framer-styles-preset-dnlggy" href="/#introduction">How We Grow</a>
                </p>
              </div>
              <div className="framer-1tu9dvr" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-wqeyn7" dir="auto">
                  <a className="framer-text framer-styles-preset-dnlggy" href="/#faq">FAQs</a>
                </p>
              </div>
            </div>
          </div>
          <div className="framer-4433bo items-start flex-none flex-col flex-nowrap content-start justify-center [overflow:visible] [@media(max-width:679.98px)]:[order:1] [@media(max-width:679.98px)]:[place-self:start] [@media(min-width:680px)_and_(max-width:1199.98px)]:[order:1] [@media(min-width:680px)_and_(max-width:1199.98px)]:[place-self:start]">
            <div className="framer-zocu8k" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
              <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--token-b3f9dcfd-cd1a-4c39-9e0e-26344979508f, rgba(0, 0, 0, 0.4))" } as CSSProperties} dir="auto">Shop</p>
            </div>
            <div className="framer-1a74c07 items-start flex-none flex-col flex-nowrap content-start justify-center [overflow:visible]">
              <div className="framer-1qj9r8m" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-wqeyn7" dir="auto">
                  <a className="framer-text framer-styles-preset-dnlggy" href="/#products">All Rice</a>
                </p>
              </div>
              <div className="framer-1dkmecj" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-wqeyn7" dir="auto">
                  <a className="framer-text framer-styles-preset-dnlggy" href="/#products">Rice Varieties</a>
                </p>
              </div>
              <div className="framer-1ipzvxm" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-wqeyn7" dir="auto">
                  <a className="framer-text framer-styles-preset-dnlggy" href="/#products">Bulk Orders</a>
                </p>
              </div>
              <div className="framer-1b1tv4o" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-wqeyn7" dir="auto">
                  <a className="framer-text framer-styles-preset-dnlggy" href="/#products">Reorder</a>
                </p>
              </div>
            </div>
          </div>
          <div className="framer-1gxmoxq items-start flex-none flex-col flex-nowrap content-start justify-center [overflow:visible] [@media(max-width:679.98px)]:[order:2] [@media(max-width:679.98px)]:[place-self:start] [@media(min-width:680px)_and_(max-width:1199.98px)]:[order:2] [@media(min-width:680px)_and_(max-width:1199.98px)]:[place-self:start]">
            <div className="framer-1vira13" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
              <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--token-b3f9dcfd-cd1a-4c39-9e0e-26344979508f, rgba(0, 0, 0, 0.4))" } as CSSProperties} dir="auto">Support</p>
            </div>
            <div className="framer-ev3u25 items-start flex-none flex-col flex-nowrap content-start justify-center [overflow:visible]">
              <div className="framer-sl71az" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-wqeyn7" dir="auto">
                  <a className="framer-text framer-styles-preset-dnlggy" href="/#faq">Contact Us</a>
                </p>
              </div>
              <div className="framer-186vsw6" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-wqeyn7" dir="auto">
                  <a className="framer-text framer-styles-preset-dnlggy" href="/#faq">Shipping &amp; Delivery</a>
                </p>
              </div>
              <div className="framer-116dz7s" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-wqeyn7" dir="auto">
                  <a className="framer-text framer-styles-preset-dnlggy" href="/track-order">Track Order</a>
                </p>
              </div>
              <div className="framer-116dz7s" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-wqeyn7" dir="auto">
                  <a className="framer-text framer-styles-preset-dnlggy" href="/refund-policy">Returns &amp; Refunds</a>
                </p>
              </div>
            </div>
          </div>
          <div className="framer-7c7igx items-start flex-none flex-col flex-nowrap content-start justify-center [overflow:visible] [@media(max-width:679.98px)]:[order:3] [@media(max-width:679.98px)]:[place-self:start] [@media(min-width:680px)_and_(max-width:1199.98px)]:[order:3] [@media(min-width:680px)_and_(max-width:1199.98px)]:[place-self:start]">
            <div className="framer-186fpju" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
              <p className="framer-text framer-styles-preset-wqeyn7" style={{ "--framer-text-color": "var(--token-b3f9dcfd-cd1a-4c39-9e0e-26344979508f, rgba(0, 0, 0, 0.4))" } as CSSProperties} dir="auto">Legal</p>
            </div>
            <div className="framer-16puvvh items-start flex-none flex-col flex-nowrap content-start justify-center [overflow:visible]">
              <div className="framer-154pv5" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-wqeyn7" dir="auto">
                  <a className="framer-text framer-styles-preset-dnlggy" href="/privacy-policy">Privacy Policy</a>
                </p>
              </div>
              <div className="framer-11mvpet" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-wqeyn7" dir="auto">
                  <a className="framer-text framer-styles-preset-dnlggy" href="/terms-conditions">Terms &amp; Conditions</a>
                </p>
              </div>
              <div className="framer-1m9e0gw" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-wqeyn7" dir="auto">
                  <a className="framer-text framer-styles-preset-dnlggy" href="/privacy-policy">Cookie Policy</a>
                </p>
              </div>
              <div className="framer-1m9e0gw" style={{ transform: "none" }} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-wqeyn7" dir="auto">
                  <a className="framer-text framer-styles-preset-dnlggy" href="/#faq">Accessibility</a>
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
