import { getGT } from "gt-next/server";
import { products } from "@/data/products";
import CartClient from "@/components/CartClient";

export default async function CartPage() {
  const tx = await getGT();
  const productNames: Record<string, string> = {};
  for (const p of products) {
    productNames[p.id] = tx(p.name);
  }
  return <CartClient productNames={productNames} />;
}
