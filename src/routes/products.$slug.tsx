import { createFileRoute } from "@tanstack/react-router";
import { ProductDetail } from "../components/storefront";

export const Route = createFileRoute("/products/$slug")({ component: ProductPage });

function ProductPage() {
  const { slug } = Route.useParams();
  return <ProductDetail slug={slug} />;
}
