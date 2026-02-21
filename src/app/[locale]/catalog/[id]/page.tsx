import { notFound } from "next/navigation";
import { getGT } from "gt-next/server";
import { products } from "@/data/products";
import { reviews } from "@/data/reviews";
import ProductDetailClient from "@/components/ProductDetailClient";

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) notFound();

  const productReviews = reviews.filter((r) => r.productId === id);
  const tx = await getGT();

  return (
    <ProductDetailClient
      product={product}
      productReviews={productReviews}
      translatedName={tx(product.name)}
      translatedDescription={tx(product.description)}
      translatedMaterial={tx(product.material)}
      translatedReviews={productReviews.map((r) => tx(r.text))}
    />
  );
}
