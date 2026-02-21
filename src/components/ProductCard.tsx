"use client";

import Link from "next/link";
import { T, Currency, Num, Branch } from "gt-next";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/catalog/${product.id}`} className="group block">
      <div className="aspect-[4/3] bg-[#E8E2DA] rounded-lg mb-3 flex items-center justify-center overflow-hidden">
        <svg viewBox="0 0 80 80" width="60" height="60" className="text-[#C9A96E] opacity-30">
          <rect x="10" y="30" width="60" height="8" rx="2" fill="currentColor" />
          <rect x="15" y="38" width="4" height="30" rx="1" fill="currentColor" />
          <rect x="61" y="38" width="4" height="30" rx="1" fill="currentColor" />
          <rect x="25" y="20" width="30" height="10" rx="2" fill="currentColor" opacity="0.5" />
        </svg>
      </div>
      <T>
        <h3 className="font-medium text-[#2C2C2C] group-hover:text-[#C9A96E] transition-colors">{product.name}</h3>
      </T>
      <div className="flex items-center justify-between mt-1">
        <span className="text-[#C9A96E] font-semibold">
          <Currency currency="USD">{product.price}</Currency>
        </span>
        <T>
          <span className="text-xs">
            <Branch
              branch={product.stock}
              in-stock={<span className="text-green-600">In Stock</span>}
              backorder={<span className="text-amber-600">Backorder</span>}
              out-of-stock={<span className="text-red-500">Out of Stock</span>}
            />
          </span>
        </T>
      </div>
      <div className="text-xs text-[#6B6B6B] mt-1">
        <Num>{product.rating}</Num> / 5
      </div>
    </Link>
  );
}
