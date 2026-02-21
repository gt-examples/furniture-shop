"use client";

import { useState, useMemo } from "react";
import { T, Plural, Num, useGT } from "gt-next";
import { products, categories, materials, colors } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function CatalogClient() {
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
              <ProductCard key={p.id} product={p} />
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
