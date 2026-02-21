"use client";

import { useState } from "react";
import { T, Var, Currency, Num, Plural, useGT } from "gt-next";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { products } from "@/data/products";
import { shippingRegions } from "@/data/shipping";

export default function CartClient({ productNames }: { productNames: Record<string, string> }) {
  const { items, updateQuantity, removeItem, clearCart, totalItems } = useCart();
  const t = useGT();
  const [selectedRegion, setSelectedRegion] = useState("local");

  const cartProducts = items.map((item) => {
    const product = products.find((p) => p.id === item.productId);
    return { ...item, product };
  }).filter((item) => item.product);

  const subtotal = cartProducts.reduce((sum, item) => sum + (item.product!.price * item.quantity), 0);
  const shipping = shippingRegions.find((r) => r.id === selectedRegion);
  const shippingCost = shipping?.rate ?? 0;
  const total = subtotal + shippingCost;

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 text-center">
        <T>
          <h1 className="text-3xl font-light mb-4">Your Cart</h1>
          <p className="text-[#6B6B6B] mb-8">Your cart is empty. Browse our catalog to find something you love.</p>
        </T>
        <Link href="/catalog" className="inline-block bg-[#C9A96E] text-white font-medium px-8 py-3 rounded hover:bg-[#B8985D] transition-colors">
          <T>Browse Catalog</T>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <div className="flex items-center justify-between mb-8">
        <T><h1 className="text-3xl font-light">Your Cart</h1></T>
        <div className="text-sm text-[#6B6B6B]">
          <T>
            <Plural n={totalItems} singular={<><Num>{totalItems}</Num> item</>} plural={<><Num>{totalItems}</Num> items</>} />
          </T>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart items */}
        <div className="lg:col-span-2 space-y-4">
          {cartProducts.map(({ productId, quantity, product }) => (
            <div key={productId} className="bg-white rounded-lg p-4 sm:p-6 flex gap-4">
              <div className="w-20 h-20 bg-[#E8E2DA] rounded flex-shrink-0 flex items-center justify-center">
                <svg viewBox="0 0 40 40" width="28" height="28" className="text-[#C9A96E] opacity-30">
                  <rect x="5" y="15" width="30" height="4" rx="1" fill="currentColor" />
                  <rect x="8" y="19" width="2" height="14" rx="1" fill="currentColor" />
                  <rect x="30" y="19" width="2" height="14" rx="1" fill="currentColor" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <Link href={`/catalog/${productId}`} className="font-medium text-[#2C2C2C] hover:text-[#C9A96E] transition-colors">
                  {productNames[productId] || product!.name}
                </Link>
                <div className="text-[#C9A96E] font-semibold mt-1">
                  <Currency currency="USD">{product!.price}</Currency>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <button onClick={() => updateQuantity(productId, quantity - 1)} className="w-8 h-8 border border-[#E0D8CF] rounded flex items-center justify-center hover:bg-[#E8E2DA] transition-colors">-</button>
                  <span className="text-sm font-medium w-6 text-center">{quantity}</span>
                  <button onClick={() => updateQuantity(productId, quantity + 1)} className="w-8 h-8 border border-[#E0D8CF] rounded flex items-center justify-center hover:bg-[#E8E2DA] transition-colors">+</button>
                  <button onClick={() => removeItem(productId)} className="text-xs text-red-400 hover:text-red-600 ml-4 transition-colors">
                    <T>Remove</T>
                  </button>
                </div>
              </div>
              <div className="text-right font-semibold">
                <Currency currency="USD">{product!.price * quantity}</Currency>
              </div>
            </div>
          ))}
          <button onClick={clearCart} className="text-sm text-[#6B6B6B] hover:text-red-500 transition-colors">
            <T>Clear Cart</T>
          </button>
        </div>

        {/* Order summary */}
        <div className="bg-white rounded-lg p-6 h-fit">
          <T><h2 className="font-medium text-lg mb-6">Order Summary</h2></T>

          {/* Shipping calculator */}
          <T><h3 className="text-sm font-medium text-[#6B6B6B] mb-2">Shipping Region</h3></T>
          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="w-full border border-[#E0D8CF] rounded px-3 py-2 text-sm mb-6 bg-[#F5F0EB]"
          >
            {shippingRegions.map((r) => (
              <option key={r.id} value={r.id}>{t(r.name)}</option>
            ))}
          </select>

          <div className="space-y-3 text-sm border-t border-[#E0D8CF] pt-4">
            <div className="flex justify-between">
              <T><span className="text-[#6B6B6B]">Subtotal</span></T>
              <Currency currency="USD">{subtotal}</Currency>
            </div>
            <div className="flex justify-between">
              <T><span className="text-[#6B6B6B]">Shipping</span></T>
              {shippingCost === 0 ? <T><span className="text-green-600">Free</span></T> : <Currency currency="USD">{shippingCost}</Currency>}
            </div>
            {shipping && (
              <div className="text-xs text-[#6B6B6B]">
                <T>Estimated delivery: <Var>{shipping.deliveryDays}</Var> business days</T>
              </div>
            )}
            <div className="flex justify-between font-semibold text-base border-t border-[#E0D8CF] pt-3">
              <T><span>Total</span></T>
              <Currency currency="USD">{total}</Currency>
            </div>
          </div>

          <button className="w-full bg-[#C9A96E] text-white font-medium py-3 rounded mt-6 hover:bg-[#B8985D] transition-colors">
            <T>Proceed to Checkout</T>
          </button>
        </div>
      </div>
    </div>
  );
}
