"use client";

import { T, Var, Currency, Num, Branch, useGT } from "gt-next";
import { useCart } from "@/lib/cart-context";
import type { Product } from "@/data/products";
import type { Review } from "@/data/reviews";

export default function ProductDetailClient({
  product,
  productReviews,
  translatedName,
  translatedDescription,
  translatedMaterial,
  translatedReviews,
}: {
  product: Product;
  productReviews: Review[];
  translatedName: string;
  translatedDescription: string;
  translatedMaterial: string;
  translatedReviews: string[];
}) {
  const { addItem } = useCart();
  const t = useGT();
  const d = product.dimensions;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image gallery */}
        <div>
          <div className="aspect-square bg-[#E8E2DA] rounded-lg flex items-center justify-center mb-4">
            <svg viewBox="0 0 120 120" width="120" height="120" className="text-[#C9A96E] opacity-30">
              <rect x="15" y="45" width="90" height="12" rx="3" fill="currentColor" />
              <rect x="22" y="57" width="6" height="45" rx="2" fill="currentColor" />
              <rect x="92" y="57" width="6" height="45" rx="2" fill="currentColor" />
              <rect x="35" y="30" width="50" height="15" rx="3" fill="currentColor" opacity="0.5" />
            </svg>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className={`aspect-square bg-[#E8E2DA] rounded cursor-pointer flex items-center justify-center ${i === 0 ? "ring-2 ring-[#C9A96E]" : "opacity-60 hover:opacity-100"} transition-opacity`}>
                <svg viewBox="0 0 40 40" width="24" height="24" className="text-[#C9A96E] opacity-30">
                  <rect x="5" y="15" width="30" height="4" rx="1" fill="currentColor" />
                  <rect x="8" y="19" width="2" height="14" rx="1" fill="currentColor" />
                  <rect x="30" y="19" width="2" height="14" rx="1" fill="currentColor" />
                </svg>
              </div>
            ))}
          </div>
        </div>

        {/* Product info */}
        <div>
          <h1 className="text-3xl font-light mb-2">{translatedName}</h1>
          <div className="text-2xl text-[#C9A96E] font-semibold mb-4">
            <Currency currency="USD">{product.price}</Currency>
          </div>
          <T>
            <div className="mb-6">
              <Branch
                branch={product.stock}
                in-stock={<span className="inline-block px-3 py-1 bg-green-50 text-green-700 text-sm rounded-full">In Stock</span>}
                backorder={<span className="inline-block px-3 py-1 bg-amber-50 text-amber-700 text-sm rounded-full">Backorder — Ships in 2-4 weeks</span>}
                out-of-stock={<span className="inline-block px-3 py-1 bg-red-50 text-red-500 text-sm rounded-full">Out of Stock</span>}
              />
            </div>
          </T>
          <p className="text-[#6B6B6B] leading-relaxed mb-8">{translatedDescription}</p>

          {product.stock !== "out-of-stock" && (
            <button onClick={() => addItem(product.id)} className="w-full sm:w-auto bg-[#C9A96E] text-white font-medium px-10 py-3 rounded hover:bg-[#B8985D] transition-colors mb-8">
              <T>Add to Cart</T>
            </button>
          )}

          {/* Dimensions table */}
          <T>
            <div className="border-t border-[#E0D8CF] pt-6">
              <h3 className="font-medium mb-4">Dimensions</h3>
              <table className="w-full text-sm">
                <tbody className="divide-y divide-[#E0D8CF]">
                  <tr><td className="py-2 text-[#6B6B6B]">Width</td><td className="py-2 text-right"><Num>{d.width}</Num> cm</td></tr>
                  <tr><td className="py-2 text-[#6B6B6B]">Depth</td><td className="py-2 text-right"><Num>{d.depth}</Num> cm</td></tr>
                  <tr><td className="py-2 text-[#6B6B6B]">Height</td><td className="py-2 text-right"><Num>{d.height}</Num> cm</td></tr>
                  <tr><td className="py-2 text-[#6B6B6B]">Weight</td><td className="py-2 text-right"><Num>{product.weight}</Num> kg</td></tr>
                </tbody>
              </table>
            </div>
          </T>

          {/* Materials */}
          <div className="border-t border-[#E0D8CF] pt-6 mt-6">
            <T><h3 className="font-medium mb-2">Materials</h3></T>
            <p className="text-sm text-[#6B6B6B] capitalize">{translatedMaterial}</p>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <section className="mt-16 border-t border-[#E0D8CF] pt-10">
        <T>
          <h2 className="text-2xl font-light mb-2">Customer Reviews</h2>
          <p className="text-[#6B6B6B] mb-8"><Num>{product.rating}</Num> out of 5 — <Num>{product.reviewCount}</Num> reviews</p>
        </T>
        {productReviews.length > 0 ? (
          <div className="space-y-6">
            {productReviews.map((r, i) => (
              <div key={i} className="bg-white rounded-lg p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-sm">{r.author}</span>
                  <span className="text-xs text-[#6B6B6B]">{r.date}</span>
                </div>
                <div className="text-[#C9A96E] text-sm mb-2">
                  {"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}
                </div>
                <p className="text-sm text-[#6B6B6B]">{translatedReviews[i] || r.text}</p>
              </div>
            ))}
          </div>
        ) : (
          <T><p className="text-[#6B6B6B]">No reviews yet for this product.</p></T>
        )}
      </section>
    </div>
  );
}
