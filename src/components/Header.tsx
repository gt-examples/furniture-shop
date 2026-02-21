"use client";

import Link from "next/link";
import { T, LocaleSelector } from "gt-next";
import { useCart } from "@/lib/cart-context";

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
    </svg>
  );
}

export default function Header() {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-[#F5F0EB] border-b border-[#E0D8CF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#C9A96E] rounded flex items-center justify-center">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="white" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <span className="font-semibold text-lg text-[#2C2C2C] hidden sm:inline">
              <T>Atelier Home</T>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#6B6B6B]">
            <Link href="/catalog" className="hover:text-[#C9A96E] transition-colors"><T>Catalog</T></Link>
            <Link href="/rooms" className="hover:text-[#C9A96E] transition-colors"><T>Rooms</T></Link>
            <Link href="/cart" className="hover:text-[#C9A96E] transition-colors"><T>Cart</T></Link>
          </nav>

          <div className="flex items-center gap-3">
            <LocaleSelector />
            <a href="https://github.com/gt-examples/furniture-shop" target="_blank" rel="noopener noreferrer" className="text-[#6B6B6B] hover:text-[#2C2C2C] transition-colors">
              <GitHubIcon />
            </a>
            <Link href="/cart" className="relative text-[#6B6B6B] hover:text-[#C9A96E] transition-colors">
              <CartIcon />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#C9A96E] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      <div className="md:hidden border-t border-[#E0D8CF]">
        <div className="flex justify-around py-2 text-xs font-medium text-[#6B6B6B]">
          <Link href="/catalog" className="hover:text-[#C9A96E]"><T>Catalog</T></Link>
          <Link href="/rooms" className="hover:text-[#C9A96E]"><T>Rooms</T></Link>
          <Link href="/cart" className="hover:text-[#C9A96E]"><T>Cart</T></Link>
        </div>
      </div>
    </header>
  );
}
