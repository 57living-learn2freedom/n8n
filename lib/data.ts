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
  tenure: string;
  type: string;
  image: string;
}

export const PROPERTIES: Property[] = [
  {
    "id": "2",
    "title": "Town House (Upper Unit)",
    "address": "No. 26-1, Jalan TTP 3, Taman Tasik Puchong, 47120 Puchong, Selangor",
    "postcode": "",
    "state": "Puchong",
    "area": "Town Villa (LBS Town Villa), Selangor",
    "reservePrice": 198288,
    "auctionDate": "1 Jul 2026 (Wed)",
    "landArea": "",
    "builtUp": "872 sq.ft",
    "tenure": "",
    "type": "LACA",
    "image": "https://lh3.googleusercontent.com/d/1DpkeKtH1hRBseV5wTU2Sj8qCL-kK1IJu"
  }
];
