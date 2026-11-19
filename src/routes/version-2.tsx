import { createFileRoute } from "@tanstack/react-router";
import { Index } from "./index";

export const Route = createFileRoute("/version-2")({
  head: () => ({
    meta: [
      { title: "TG.CO Finest Rice | Version 2" },
      { name: "description", content: "Explore TG.CO Finest Rice, Version 2." },
    ],
  }),
  component: VersionTwo,
});

function VersionTwo() {
  return <Index version={2} />;
}
