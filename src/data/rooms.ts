export type Room = {
  id: string;
  name: string;
  description: string;
  productCount: number;
};

export const rooms: Room[] = [
  {
    id: "living-room",
    name: "Living Room",
    description: "Create a welcoming space with sofas, coffee tables, shelving, and lighting that balances comfort with clean design.",
    productCount: 6,
  },
  {
    id: "bedroom",
    name: "Bedroom",
    description: "Rest and recharge surrounded by warm timber bed frames, nightstands, and soft ambient lighting.",
    productCount: 3,
  },
  {
    id: "office",
    name: "Office",
    description: "Focus and create at a well-crafted desk, supported by ergonomic seating and organized storage.",
    productCount: 4,
  },
  {
    id: "dining-room",
    name: "Dining Room",
    description: "Gather around solid wood tables and sculptural chairs designed to make every meal feel intentional.",
    productCount: 3,
  },
];
