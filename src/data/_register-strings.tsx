"use client";

/**
 * String registration component for GT CLI extraction.
 * Never rendered — exists solely so the CLI can extract and translate these strings.
 */

import { useGT } from "gt-next";

export default function _RegisterStrings() {
  const t = useGT();

  // Product names
  t("Oslo Three-Seat Sofa");
  t("Mori Dining Table");
  t("Nara Platform Bed");
  t("Aura Writing Desk");
  t("Vela Lounge Chair");
  t("Haven Bookshelf");
  t("Luna Nightstand");
  t("Koto Sideboard");
  t("Zen Coffee Table");
  t("Forma Dining Chair");
  t("Arc Floor Lamp");
  t("Muji Modular Shelf");

  // Product descriptions
  t("A clean-lined sofa with generous proportions. Solid oak frame with high-resilience foam cushions wrapped in premium European linen.");
  t("Solid white oak dining table with a live-edge detail. Hand-finished with a matte natural oil that brings out the grain character.");
  t("Low-profile platform bed in solid American walnut. Japanese-inspired joinery with no visible hardware. Includes slatted base.");
  t("Minimal writing desk in European ash with a single drawer and integrated cable management. Tapered legs with brass-tipped feet.");
  t("Full-grain Italian leather lounge chair with a bent-ply shell. The leather develops a rich patina over time.");
  t("Five-tier open bookshelf in solid white oak. Asymmetric shelf spacing creates visual interest while accommodating various object sizes.");
  t("Compact nightstand with one drawer and an open shelf. Soft-close drawer slides. Pairs perfectly with the Nara Platform Bed.");
  t("Slatted-front sideboard in ash with adjustable interior shelving. Brass pulls add a warm accent to the light timber.");
  t("Oval coffee table with rounded edges and a lower shelf. Solid oak throughout with a hand-rubbed oil finish.");
  t("Stackable dining chair with a sculptural backrest. Steam-bent oak with a woven paper cord seat.");
  t("Arched brass floor lamp with a linen drum shade. Weighted marble base ensures stability. Dimmable LED-compatible.");
  t("Configurable modular shelving system. Five rows, three columns. Add drawers, doors, or leave open. Solid oak with dovetail joints.");

  // Categories
  t("sofas");
  t("tables");
  t("beds");
  t("desks");
  t("chairs");
  t("storage");
  t("lighting");

  // Materials
  t("linen");
  t("oak");
  t("walnut");
  t("ash");
  t("leather");
  t("metal");

  // Colors
  t("cream");
  t("natural");
  t("dark-brown");
  t("light");
  t("cognac");
  t("brass");

  // Room names
  t("Living Room");
  t("Bedroom");
  t("Office");
  t("Dining Room");

  // Room descriptions
  t("Create a welcoming space with sofas, coffee tables, shelving, and lighting that balances comfort with clean design.");
  t("Rest and recharge surrounded by warm timber bed frames, nightstands, and soft ambient lighting.");
  t("Focus and create at a well-crafted desk, supported by ergonomic seating and organized storage.");
  t("Gather around solid wood tables and sculptural chairs designed to make every meal feel intentional.");

  // Shipping region names
  t("Local (within 50 km)");
  t("Domestic Standard");
  t("Domestic Express");
  t("International");

  // Review texts
  t("Incredibly comfortable and looks even better in person. The linen fabric is beautiful.");
  t("Worth every penny. The quality of the oak frame is outstanding.");
  t("Love the design. Cushions took a few weeks to fully break in.");
  t("The live-edge detail is stunning. A true centerpiece for our dining room.");
  t("Impeccable craftsmanship. The natural oil finish feels wonderful.");
  t("The joinery is remarkable. No creaking, perfectly solid. Walnut grain is gorgeous.");
  t("Beautiful and minimal. Exactly the aesthetic I was looking for.");
  t("Cable management feature is genius. Desk surface is spacious and smooth.");
  t("The leather is incredibly soft and the patina after 6 months is beautiful.");
  t("Most comfortable chair I have ever owned. A piece of art.");

  return null;
}
