import { getGT } from "gt-next/server";
import { products } from "@/data/products";
import CatalogClient from "@/components/CatalogClient";

export default async function CatalogPage() {
  const tx = await getGT();
  const productNames: Record<string, string> = {};
  for (const p of products) {
    productNames[p.id] = tx(p.name);
  }
  return <CatalogClient productNames={productNames} />;
}
