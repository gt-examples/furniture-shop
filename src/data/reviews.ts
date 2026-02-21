export type Review = {
  productId: string;
  author: string;
  rating: number;
  text: string;
  date: string;
};

export const reviews: Review[] = [
  { productId: "oslo-sofa", author: "Emma L.", rating: 5, text: "Incredibly comfortable and looks even better in person. The linen fabric is beautiful.", date: "2025-12-10" },
  { productId: "oslo-sofa", author: "James K.", rating: 5, text: "Worth every penny. The quality of the oak frame is outstanding.", date: "2025-11-28" },
  { productId: "oslo-sofa", author: "Maria S.", rating: 4, text: "Love the design. Cushions took a few weeks to fully break in.", date: "2025-11-15" },
  { productId: "mori-dining-table", author: "David R.", rating: 5, text: "The live-edge detail is stunning. A true centerpiece for our dining room.", date: "2025-12-01" },
  { productId: "mori-dining-table", author: "Sophie T.", rating: 5, text: "Impeccable craftsmanship. The natural oil finish feels wonderful.", date: "2025-11-20" },
  { productId: "nara-bed-frame", author: "Alex W.", rating: 5, text: "The joinery is remarkable. No creaking, perfectly solid. Walnut grain is gorgeous.", date: "2025-12-05" },
  { productId: "nara-bed-frame", author: "Yuki M.", rating: 4, text: "Beautiful and minimal. Exactly the aesthetic I was looking for.", date: "2025-11-22" },
  { productId: "aura-desk", author: "Oliver P.", rating: 5, text: "Cable management feature is genius. Desk surface is spacious and smooth.", date: "2025-12-08" },
  { productId: "vela-armchair", author: "Laura H.", rating: 5, text: "The leather is incredibly soft and the patina after 6 months is beautiful.", date: "2025-12-12" },
  { productId: "vela-armchair", author: "Tom B.", rating: 5, text: "Most comfortable chair I have ever owned. A piece of art.", date: "2025-11-30" },
];
