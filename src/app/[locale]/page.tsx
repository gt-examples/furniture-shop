import { T, Currency, Num } from "gt-next";
import Link from "next/link";
import { products } from "@/data/products";
import { rooms } from "@/data/rooms";
import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  const featured = products.filter((p) => p.featured);
  const newArrivals = products.slice(-4);

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#2C2C2C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-32">
          <T>
            <p className="text-[#C9A96E] text-sm font-medium tracking-widest uppercase mb-4">Curated Collections</p>
            <h1 className="text-3xl sm:text-5xl font-light mb-6 leading-tight">Furniture for<br />Thoughtful Living</h1>
            <p className="text-[#A0A0A0] text-lg max-w-xl mb-10">
              Every piece is crafted from sustainable materials with an emphasis on quality, longevity, and timeless design.
            </p>
          </T>
          <Link href="/catalog" className="inline-block bg-[#C9A96E] text-white font-medium px-8 py-3 rounded hover:bg-[#B8985D] transition-colors">
            <T>Browse Catalog</T>
          </Link>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <T><h2 className="text-2xl font-light text-[#2C2C2C] mb-10">Featured Pieces</h2></T>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Shop by Room */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <T><h2 className="text-2xl font-light text-[#2C2C2C] mb-10">Shop by Room</h2></T>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {rooms.map((room) => (
              <Link key={room.id} href={`/rooms?room=${room.id}`} className="group">
                <div className="aspect-[4/3] bg-[#E8E2DA] rounded-lg mb-3 flex items-center justify-center">
                  <svg viewBox="0 0 80 80" width="48" height="48" className="text-[#C9A96E] opacity-40">
                    <path d="M10 60h60M15 60V35a2 2 0 012-2h46a2 2 0 012 2v25" stroke="currentColor" fill="none" strokeWidth="2" />
                    <rect x="25" y="40" width="30" height="15" rx="2" fill="currentColor" opacity="0.3" />
                  </svg>
                </div>
                <T>
                  <h3 className="font-medium text-[#2C2C2C] group-hover:text-[#C9A96E] transition-colors">{room.name}</h3>
                  <p className="text-sm text-[#6B6B6B] mt-1">{room.description}</p>
                </T>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex items-center justify-between mb-10">
          <T><h2 className="text-2xl font-light text-[#2C2C2C]">New Arrivals</h2></T>
          <Link href="/catalog" className="text-[#C9A96E] text-sm font-medium hover:underline"><T>View All</T></Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivals.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
