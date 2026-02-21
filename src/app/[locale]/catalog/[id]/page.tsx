import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { reviews } from "@/data/reviews";
import ProductDetailClient from "@/components/ProductDetailClient";

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) notFound();

  const productReviews = reviews.filter((r) => r.productId === id);

  return <ProductDetailClient product={product} productReviews={productReviews} />;
}
