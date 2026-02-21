"use client";

import { useState, useMemo } from "react";
import { T, Plural, Num, Currency, Branch, useGT } from "gt-next";
import Link from "next/link";
import { products, categories, materials, colors, type Product } from "@/data/products";

function ProductCardInline({ product, translatedName }: { product: Product; translatedName: string }) {
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
      <h3 className="font-medium text-[#2C2C2C] group-hover:text-[#C9A96E] transition-colors">{translatedName}</h3>
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
        <T><Num>{product.rating}</Num> / 5</T>
      </div>
    </Link>
  );
}

export default function CatalogClient({ productNames }: { productNames: Record<string, string> }) {
  const t = useGT();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState(5000);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (selectedCategories.length && !selectedCategories.includes(p.category)) return false;
      if (selectedMaterials.length && !selectedMaterials.includes(p.material)) return false;
      if (selectedColors.length && !selectedColors.includes(p.color)) return false;
      if (p.price > maxPrice) return false;
      return true;
    });
  }, [selectedCategories, selectedMaterials, selectedColors, maxPrice]);

  const toggle = (arr: string[], val: string, setter: (v: string[]) => void) => {
    setter(arr.includes(val) ? arr.filter((v) => v !== val) : [...arr, val]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <T><h1 className="text-3xl font-light mb-8">Catalog</h1></T>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filter sidebar */}
        <aside className="w-full lg:w-64 shrink-0">
          <div className="bg-white rounded-lg p-6 space-y-6">
            <div>
              <T><h3 className="font-medium text-sm uppercase tracking-wide text-[#6B6B6B] mb-3">Category</h3></T>
              {categories.map((c) => (
                <label key={c} className="flex items-center gap-2 mb-2 text-sm cursor-pointer">
                  <input type="checkbox" checked={selectedCategories.includes(c)} onChange={() => toggle(selectedCategories, c, setSelectedCategories)} className="accent-[#C9A96E]" />
                  <span className="capitalize">{t(c)}</span>
                </label>
              ))}
            </div>
            <div>
              <T><h3 className="font-medium text-sm uppercase tracking-wide text-[#6B6B6B] mb-3">Material</h3></T>
              {materials.map((m) => (
                <label key={m} className="flex items-center gap-2 mb-2 text-sm cursor-pointer">
                  <input type="checkbox" checked={selectedMaterials.includes(m)} onChange={() => toggle(selectedMaterials, m, setSelectedMaterials)} className="accent-[#C9A96E]" />
                  <span className="capitalize">{t(m)}</span>
                </label>
              ))}
            </div>
            <div>
              <T><h3 className="font-medium text-sm uppercase tracking-wide text-[#6B6B6B] mb-3">Color</h3></T>
              {colors.map((c) => (
                <label key={c} className="flex items-center gap-2 mb-2 text-sm cursor-pointer">
                  <input type="checkbox" checked={selectedColors.includes(c)} onChange={() => toggle(selectedColors, c, setSelectedColors)} className="accent-[#C9A96E]" />
                  <span className="capitalize">{t(c)}</span>
                </label>
              ))}
            </div>
            <div>
              <T><h3 className="font-medium text-sm uppercase tracking-wide text-[#6B6B6B] mb-3">Max Price</h3></T>
              <input type="range" min={200} max={5000} step={100} value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="w-full accent-[#C9A96E]" />
              <div className="text-sm text-[#6B6B6B] mt-1">
                <T>Up to <Num>{maxPrice}</Num> USD</T>
              </div>
            </div>
          </div>
        </aside>

        {/* Products grid */}
        <div className="flex-1">
          <div className="mb-4 text-sm text-[#6B6B6B]">
            <T>
              <Plural n={filtered.length} singular={<><Num>{filtered.length}</Num> product</>} plural={<><Num>{filtered.length}</Num> products</>} />
            </T>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <ProductCardInline key={p.id} product={p} translatedName={productNames[p.id] || p.name} />
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-16 text-[#6B6B6B]">
              <T><p>No products match your filters. Try adjusting your selection.</p></T>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
