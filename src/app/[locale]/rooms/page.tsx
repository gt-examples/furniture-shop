import { T, Num } from "gt-next";
import { Tx } from "gt-next/server";
import Link from "next/link";
import { rooms } from "@/data/rooms";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default async function RoomsPage({ searchParams }: { searchParams: Promise<{ room?: string }> }) {
  const { room: selectedRoom } = await searchParams;

  const filtered = selectedRoom
    ? products.filter((p) => p.room.includes(selectedRoom))
    : [];

  const activeRoom = rooms.find((r) => r.id === selectedRoom);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <T><h1 className="text-3xl font-light mb-8">Shop by Room</h1></T>

      {/* Room cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {rooms.map((room) => (
          <Link
            key={room.id}
            href={`/rooms?room=${room.id}`}
            className={`rounded-lg p-6 text-center transition-all ${selectedRoom === room.id ? "bg-[#C9A96E] text-white" : "bg-white hover:shadow-md text-[#2C2C2C]"}`}
          >
            <h3 className="font-medium mb-1"><Tx>{room.name}</Tx></h3>
            <T>
              <p className={`text-xs ${selectedRoom === room.id ? "text-white/80" : "text-[#6B6B6B]"}`}>
                <Num>{room.productCount}</Num> pieces
              </p>
            </T>
          </Link>
        ))}
      </div>

      {/* Selected room products */}
      {activeRoom ? (
        <div>
          <h2 className="text-2xl font-light mb-2"><Tx>{activeRoom.name}</Tx></h2>
          <p className="text-[#6B6B6B] mb-8"><Tx>{activeRoom.description}</Tx></p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-16 text-[#6B6B6B]">
          <T><p>Select a room above to browse furniture curated for that space.</p></T>
        </div>
      )}
    </div>
  );
}
