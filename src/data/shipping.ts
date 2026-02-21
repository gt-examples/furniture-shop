export type ShippingRegion = {
  id: string;
  name: string;
  rate: number;
  deliveryDays: string;
};

export const shippingRegions: ShippingRegion[] = [
  { id: "local", name: "Local (within 50 km)", rate: 0, deliveryDays: "3-5" },
  { id: "domestic", name: "Domestic Standard", rate: 79, deliveryDays: "7-10" },
  { id: "domestic-express", name: "Domestic Express", rate: 149, deliveryDays: "3-5" },
  { id: "international", name: "International", rate: 299, deliveryDays: "14-21" },
];
