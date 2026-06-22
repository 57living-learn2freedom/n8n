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
    id: "1",
    title: "2-Storey Terrace House",
    address: "Jalan BP 7/8, Bandar Bukit Puchong",
    postcode: "47100",
    state: "Selangor",
    area: "Puchong",
    reservePrice: 450000,
    auctionDate: "Thu, Jul 23, 2026",
    landArea: "1,400 sq.ft.",
    builtUp: "1,800 sq.ft.",
    tenure: "Freehold",
    type: "Terrace",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
  },
  {
    id: "2",
    title: "Service Apartment",
    address: "Jalan SS 2/24, Petaling Jaya",
    postcode: "47300",
    state: "Selangor",
    area: "Petaling Jaya",
    reservePrice: 285000,
    auctionDate: "Wed, Aug 5, 2026",
    landArea: "—",
    builtUp: "850 sq.ft.",
    tenure: "Leasehold",
    type: "Condo/Apartment",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
  },
  {
    id: "3",
    title: "Double-Storey Semi-D",
    address: "Taman Kajang Perdana, Kajang",
    postcode: "43000",
    state: "Selangor",
    area: "Kajang",
    reservePrice: 620000,
    auctionDate: "Mon, Jul 14, 2026",
    landArea: "2,800 sq.ft.",
    builtUp: "2,400 sq.ft.",
    tenure: "Freehold",
    type: "Semi-D/Bungalow",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  {
    id: "4",
    title: "Shop Lot (Ground Floor)",
    address: "Jalan Sultan Idris Shah, Ipoh",
    postcode: "30000",
    state: "Perak",
    area: "Ipoh",
    reservePrice: 380000,
    auctionDate: "Fri, Aug 21, 2026",
    landArea: "1,200 sq.ft.",
    builtUp: "1,200 sq.ft.",
    tenure: "Freehold",
    type: "Commercial",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    id: "5",
    title: "3-Bedroom Condominium",
    address: "Jalan Skudai, Taman Universiti",
    postcode: "81300",
    state: "Johor",
    area: "Skudai",
    reservePrice: 320000,
    auctionDate: "Tue, Sep 2, 2026",
    landArea: "—",
    builtUp: "1,050 sq.ft.",
    tenure: "Leasehold",
    type: "Condo/Apartment",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
  },
  {
    id: "6",
    title: "Residential Land Plot",
    address: "Taman Botani, Bukit Gelugor",
    postcode: "11700",
    state: "Penang",
    area: "Bukit Gelugor",
    reservePrice: 750000,
    auctionDate: "Sat, Aug 15, 2026",
    landArea: "5,000 sq.ft.",
    builtUp: "—",
    tenure: "Freehold",
    type: "Land",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
  },
  {
    id: "7",
    title: "1-Storey Terrace House",
    address: "Taman Melawati, Kuala Lumpur",
    postcode: "53100",
    state: "Kuala Lumpur",
    area: "Melawati",
    reservePrice: 520000,
    auctionDate: "Thu, Jul 30, 2026",
    landArea: "1,600 sq.ft.",
    builtUp: "1,200 sq.ft.",
    tenure: "Leasehold",
    type: "Terrace",
    image:
      "https://images.unsplash.com/photo-1605276374101-dee2a0ed3cd6?w=800&q=80",
  },
  {
    id: "8",
    title: "2-Storey Bungalow",
    address: "Taman Tun Dr Ismail, Kuala Lumpur",
    postcode: "60000",
    state: "Kuala Lumpur",
    area: "TTDI",
    reservePrice: 1850000,
    auctionDate: "Wed, Sep 10, 2026",
    landArea: "6,500 sq.ft.",
    builtUp: "4,200 sq.ft.",
    tenure: "Freehold",
    type: "Semi-D/Bungalow",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
  },
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-MY", {
    style: "currency",
    currency: "MYR",
    maximumFractionDigits: 0,
  }).format(price);
}
