export type PropertyType =
  | "Terrace"
  | "Condo/Apartment"
  | "Semi-D/Bungalow"
  | "Commercial"
  | "Land";

export interface Property {
  id: string;
  title: string;
  address: string;
  postcode: string;
  state: string;
  area: string;
  reservePrice: number;
  auctionDate: string;
  landArea: string;
  builtUp: string;
  tenure: "Freehold" | "Leasehold";
  type: PropertyType;
  image: string;
}

export const PROPERTIES: Property[] = [
  {
    "id": "2",
    "title": "Town House (Upper Unit)",
    "address": "No. 26-1, Jalan TTP 3, Taman Tasik Puchong, 47120 Puchong, Selangor",
    "postcode": "47120",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 198288,
    "auctionDate": "1 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "872 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "image": "public/images/property_1.png"
  }
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-MY", {
    style: "currency",
    currency: "MYR",
    maximumFractionDigits: 0,
  }).format(price);
}
