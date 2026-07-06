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
  images: string[]; // 【修改点】：在类型定义里将 image: string 改为了 images: string[]
}

export const PROPERTIES: Property[] = [
  {
    "id": "2",
    "title": "2 Storey Terrace House",
    "address": "No. 574, Jalan Hijayu 2/49, Resort Homes, Hijayu 2, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 444690,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "162 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1cHhxddEgKVbkOtmAOBBJ6XuxtBG5ktl4&sz=w800",
      "https://drive.google.com/thumbnail?id=1dxAoaW9t-UGvzLPoMTTnxFeYgUuZsHme&sz=w800",
      "https://drive.google.com/thumbnail?id=1AS-fvrbSl6eV2ov6BR9lFgo4X6WygOzD&sz=w800"
    ]
  },
  {
    "id": "3",
    "title": "2 Storey Terrace House",
    "address": "No. 183, Jalan Laman Sendayan 1A/6, Laman Sendayan, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 518400,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "734 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1uVO2yvswetVDr-gTjSnqrvXPazX4Za5A&sz=w800",
      "https://drive.google.com/thumbnail?id=1khMGYJroUxQUe8q1n_rzrs37RIMoXs8A&sz=w800",
      "https://drive.google.com/thumbnail?id=1gzLFHXLzHSzuvRqdsGZYa51c8fzI_2yS&sz=w800",
      "https://drive.google.com/thumbnail?id=1zp1StLmpLuGE4noKGTTUQsQjucvsvOkt&sz=w800",
      "https://drive.google.com/thumbnail?id=1a0hHZhTTqBvz2RtxNFSW1DNhrhSWqS4r&sz=w800"
    ]
  },
  {
    "id": "4",
    "title": "2 Storey Terrace House",
    "address": "No. 356, Jalan Lazuli 14, Taman Lazuli 2, Off Jalan Labu, 70200 Seremban, Negeri Sembilan",
    "postcode": "70200",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 500000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "357 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1SqWO3gH0s75f1l9imlQyXXCrwm_T5dy4&sz=w800"
    ]
  },
  {
    "id": "5",
    "title": "2 Storey Terrace House",
    "address": "No. 455, Jalan Hijayu 2/46, Hijayu 2, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 511000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "872 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1cHhxddEgKVbkOtmAOBBJ6XuxtBG5ktl4&sz=w800",
      "https://drive.google.com/thumbnail?id=1dxAoaW9t-UGvzLPoMTTnxFeYgUuZsHme&sz=w800",
      "https://drive.google.com/thumbnail?id=1AS-fvrbSl6eV2ov6BR9lFgo4X6WygOzD&sz=w800"
    ]
  },
  {
    "id": "6",
    "title": "2 Storey Terrace House",
    "address": "No. 28, Jalan Irama Sendayan 1/1A, Taman Irama Sendayan 1, 71900 Labu, Negeri Sembilan",
    "postcode": "71900",
    "state": "Negeri Sembilan",
    "area": "Labu",
    "reservePrice": 405000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "142 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1lUxVjS25wEKl4j0CHgrYMDQoSG-MeNlB&sz=w800",
      "https://drive.google.com/thumbnail?id=1igNO6UBpOIVw1ZoS69xeFsBwkVjUkSlz&sz=w800",
      "https://drive.google.com/thumbnail?id=1RgFhNnJfIFM5wDcWcpqFKvK6-IWYAqpC&sz=w800",
      "https://drive.google.com/thumbnail?id=1vQTymssqwriLFmG3OrqlcRh53lm1UI7h&sz=w800"
    ]
  },
  {
    "id": "7",
    "title": "2 Storey Terrace House",
    "address": "No. 752, Jalan Tiara Sendayan 14/10, Taman Tiara Sendayan, 71900 Labu, Negeri Sembilan",
    "postcode": "71900",
    "state": "Negeri Sembilan",
    "area": "Labu",
    "reservePrice": 405000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "934 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1dWvAsqXzRvOX2zKHvWmLszrByHvTgHuP&sz=w800",
      "https://drive.google.com/thumbnail?id=1lVEv20L3kzoeM4jMZURlWzs8cLIue4WV&sz=w800",
      "https://drive.google.com/thumbnail?id=1d6GT_sfmTSyzP2XRqrJ5QQYpdF7CJK3Y&sz=w800",
      "https://drive.google.com/thumbnail?id=119gdkLu5-aEz7kIoFelNL9q0A0KTJy6C&sz=w800"
    ]
  },
  {
    "id": "8",
    "title": "Apartment",
    "address": "Unit No. B-3-06, Permai Apartment, Taman Permai Impian, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 130000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "646 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "9",
    "title": "Service Apartment",
    "address": "Unit No. A-20-11, Block A, Pangsapuri Ara, Myra Park, Jalan Nilam 5, Nilai Impian, 71800 Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 320000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "753 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "10",
    "title": "Office Lot",
    "address": "Unit No. 128-1, 1st Floor, Jalan Taman Komersial Senawang 1, Taman Komersial Senawang, 70450 Seremban, Negeri Sembilan",
    "postcode": "70450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 280000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "458 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "11",
    "title": "Condominium",
    "address": "Unit No. M6-1-8, Spanish Villa Condominium, Jalan Bunga Raya 19, Taman Tasik Jaya, 70400 Seremban, Negeri Sembilan",
    "postcode": "70400",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 250000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "119 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "12",
    "title": "2 Storey Terrace House",
    "address": "No. 411, Jalan Ara Sendayan 2/3, Ara Sendayan, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 468000,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "496 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Nom0Qy-H63zOkykopvsYilfaLhU1gEX9&sz=w800",
      "https://drive.google.com/thumbnail?id=1Hs0Vm8hq9vSIoKWOz4DWFTnPNZzO4hrV&sz=w800",
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "13",
    "title": "2 Storey Terrace House",
    "address": "No. 1773, Jalan Bayu Sutera 4/12, Taman Bayu Sutera, 71960 Port Dickson, Negeri Sembilan",
    "postcode": "71960",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 570000,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "280 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1PnWeRa4cMSRnRlyAz9urHCDUqt4ZSl1Y&sz=w800"
    ]
  },
  {
    "id": "14",
    "title": "3 Storey Terrace House",
    "address": "No. 109, Jalan Forest Heights 3/4, Precinct 3, Forest Heights, 70450 Seremban, Negeri Sembilan",
    "postcode": "70450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 850000,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "807 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1wEkJGISHjuGxEuDK8uvWrD0uXjQRURRy&sz=w800",
      "https://drive.google.com/thumbnail?id=11zdgOHLTu5n9CZkjLDFX2f5-vqv8T4q7&sz=w800",
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "15",
    "title": "2 Storey Terrace House",
    "address": "No. 842, Jalan Laman Sendayan 2B/4, Laman Sendayan Fasa 2, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 470000,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "140 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1uVO2yvswetVDr-gTjSnqrvXPazX4Za5A&sz=w800",
      "https://drive.google.com/thumbnail?id=1khMGYJroUxQUe8q1n_rzrs37RIMoXs8A&sz=w800",
      "https://drive.google.com/thumbnail?id=1gzLFHXLzHSzuvRqdsGZYa51c8fzI_2yS&sz=w800",
      "https://drive.google.com/thumbnail?id=1zp1StLmpLuGE4noKGTTUQsQjucvsvOkt&sz=w800",
      "https://drive.google.com/thumbnail?id=1a0hHZhTTqBvz2RtxNFSW1DNhrhSWqS4r&sz=w800"
    ]
  },
  {
    "id": "16",
    "title": "1 Storey Terrace House",
    "address": "No. 36, Jalan Tasik Senangin 16/13, Bandar Tasik Senangin, 71750 Lenggang, Negeri Sembilan",
    "postcode": "71750",
    "state": "Negeri Sembilan",
    "area": "Lenggang",
    "reservePrice": 360000,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "240 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1nhM7zphX0EDYJFO8UzKHHxWvVT-1ie63&sz=w800"
    ]
  },
  {
    "id": "17",
    "title": "2 Storey Terrace House",
    "address": "No. 1173, Jalan Bukit Eka 3/11, Taman Bukit Eka, 71760 Seremban, Negeri Sembilan",
    "postcode": "71760",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 400000,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "496 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1RG1UshzAeG1mdcq4vvDy9nhBHaRc1FHn&sz=w800"
    ]
  },
  {
    "id": "18",
    "title": "Retail Shop Lot",
    "address": "Unit No. A-G-229, Bazar Sentral, Jalan Delima, Nilai 3, 71800 Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 54000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "96 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1UjaF649VjVY8-MmMBQx_mftfJ6mxIc1f&sz=w800"
    ]
  },
  {
    "id": "19",
    "title": "Retail Shop Lot",
    "address": "Unit No. A-UG-242, Bazar Sentral, Jalan Delima, Nilai 3, 71800 Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 34000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "96 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1UjaF649VjVY8-MmMBQx_mftfJ6mxIc1f&sz=w800"
    ]
  },
  {
    "id": "20",
    "title": "Retail Lot",
    "address": "Unit No. C-G-195, Bazar Sentral, Jalan Delima, Nilai 3, 71800 Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 28000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "96 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1UjaF649VjVY8-MmMBQx_mftfJ6mxIc1f&sz=w800"
    ]
  },
  {
    "id": "21",
    "title": "Retail Lot",
    "address": "Unit No. C-G-196, Bazar Sentral, Jalan Delima, Nilai 3, 71800 Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 25000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "96 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1UjaF649VjVY8-MmMBQx_mftfJ6mxIc1f&sz=w800"
    ]
  },
  {
    "id": "22",
    "title": "Water Chalet",
    "address": "No. B323, Premium Pool Villa Lexis Hibiscus Pasir Panjang, 71250 Pasir Panjang, Negeri Sembilan",
    "postcode": "71250",
    "state": "Negeri Sembilan",
    "area": "Pasir Panjang",
    "reservePrice": 468000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "915 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1D58FVcOeShg8Dvw3ILdzfqcxWsXIP0no&sz=w800"
    ]
  },
  {
    "id": "23",
    "title": "2 Storey Terrace House",
    "address": "No. 439, Jalan Hijayu 2/46, Resort Homes, Hijayu 2, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 474000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "873 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1cHhxddEgKVbkOtmAOBBJ6XuxtBG5ktl4&sz=w800",
      "https://drive.google.com/thumbnail?id=1dxAoaW9t-UGvzLPoMTTnxFeYgUuZsHme&sz=w800",
      "https://drive.google.com/thumbnail?id=1AS-fvrbSl6eV2ov6BR9lFgo4X6WygOzD&sz=w800"
    ]
  },
  {
    "id": "24",
    "title": "2 Storey Terrace House",
    "address": "No. 1609, Jalan Hijayu 3/60, Hijayu 3, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 445500,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "765 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1_zvrt7sE25a11pxxY_uxzKX4eGCsoH5v&sz=w800",
      "https://drive.google.com/thumbnail?id=1KIWlLy3LqkWDgTQNB23PyT1GQSo2rDaF&sz=w800",
      "https://drive.google.com/thumbnail?id=1w3w8PJe7gzK0dFbDYy8XHBwB5jpFeK84&sz=w800",
      "https://drive.google.com/thumbnail?id=1K8US_DAU4EBYwsH9tJUYs89QB4ymDpI0&sz=w800",
      "https://drive.google.com/thumbnail?id=1d5jk0p9sWEn0HQB6O2TzEW2NiBFP4ado&sz=w800"
    ]
  },
  {
    "id": "25",
    "title": "2 Storey Terrace House",
    "address": "No. 144, Jalan Timur 2/4C, Timur @ Enstek, 71760 Bandar Enstek, Negeri Sembilan",
    "postcode": "71760",
    "state": "Negeri Sembilan",
    "area": "Bandar Enstek",
    "reservePrice": 594000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "551 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1wDxDtIsPl8sO0EiqkKTzqwTubHokSSV-&sz=w800"
    ]
  },
  {
    "id": "26",
    "title": "2 Storey Terrace House",
    "address": "No. 1195, Jalan Suriaman 3/14, Suriaman 3, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 765000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "228 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1tLpQnqQjR0AX-lgYHl8F-rhv_E7DyVFt&sz=w800",
      "https://drive.google.com/thumbnail?id=1-a2q43KaD5drsWu587ZhonHMmPlqS2Rz&sz=w800",
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "27",
    "title": "1 Storey Terrace House",
    "address": "No. 188, Jalan Perdana 6, Taman Bukit Perdana, Batu 9, Jalan Pantai, 71050 Port Dickson, Negeri Sembilan",
    "postcode": "71050",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 360000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "176 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1vyg9RPxZU0uP97EWTF8EnhBfsX4sVlwk&sz=w800"
    ]
  },
  {
    "id": "28",
    "title": "1 Storey Terrace House",
    "address": "No. 47, Jalan Sri Inai 1, Taman Sri Inai, Sikamat, 70450 Seremban, Negeri Sembilan",
    "postcode": "70450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 280000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "507 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Av1s3wJT2aUuG8FKNPggoO3Q8fJ5IvOx&sz=w800"
    ]
  },
  {
    "id": "29",
    "title": "2 Storey Semi Detached House",
    "address": "No. 46, Jalan Lukut Lagenda 1, Taman Lukut Lagenda, 71010 Lukut, Port Dickson, Negeri Sembilan",
    "postcode": "71010",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 680000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "626 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "30",
    "title": "Flat",
    "address": "Unit No. 12, Tingkat 4, Block 10, Rumah Pangsa Taman Semarak II, 71800 Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 29525,
    "auctionDate": "27 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "678 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1pwy_t-wqVncP8oO3d63boqBDgH52jaMn&sz=w800",
      "https://drive.google.com/thumbnail?id=1ZMVpTUQnbtbHafXwaVVz_p47y3Aeo7-l&sz=w800",
      "https://drive.google.com/thumbnail?id=19L2QFOlYwihDglXGqKHMb9XU4NHHOsw3&sz=w800"
    ]
  },
  {
    "id": "31",
    "title": "[Located in the heart of the Nilai 3 Wholesale Centre] Retail Stall [Major commercial hub in Negeri Sembilan]",
    "address": "Unit No. D-42, Pasar Rakyat Nilai 3, Jalan Nilai 3/4, Nilai 3, 71800 Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 18000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "151 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1qLKmLrbTjnptppxoasR4ujz4FdW1RQjG&sz=w800"
    ]
  },
  {
    "id": "32",
    "title": "2 Storey Detached House",
    "address": "No. 1, Jalan RK 3/3, Rasah Kemayan, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 1700000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "938 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1tF5qr0lfBePPAIwqzKX-l6u23D6HCDa9&sz=w800"
    ]
  },
  {
    "id": "33",
    "title": "2 Storey Terrace House",
    "address": "No. 133, Jalan Anggerik 4, Laman Anggerik, Nilai Impian, 71800 Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 396900,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JBWU8VbEi1VTS-TTCKO2JmPCvpU6ScmZ&sz=w800"
    ]
  },
  {
    "id": "34",
    "title": "2 Storey Terrace House",
    "address": "Jalan Tiara Sendayan 1/1, Tiara Sendayan, 71900 Labu, Negeri Sembilan",
    "postcode": "71900",
    "state": "Negeri Sembilan",
    "area": "Labu",
    "reservePrice": 396900,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1dWvAsqXzRvOX2zKHvWmLszrByHvTgHuP&sz=w800",
      "https://drive.google.com/thumbnail?id=1lVEv20L3kzoeM4jMZURlWzs8cLIue4WV&sz=w800",
      "https://drive.google.com/thumbnail?id=1d6GT_sfmTSyzP2XRqrJ5QQYpdF7CJK3Y&sz=w800",
      "https://drive.google.com/thumbnail?id=119gdkLu5-aEz7kIoFelNL9q0A0KTJy6C&sz=w800"
    ]
  },
  {
    "id": "35",
    "title": "2 Storey Terrace House",
    "address": "No. 280, Jalan RPPD 3, Residensi Prima Port Dickson, 71010 Port Dickson, Negeri Sembilan",
    "postcode": "71010",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 279000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "300 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1vfCi9KGkg30Pn0bF1vjk-4uOGssud3eO&sz=w800",
      "https://drive.google.com/thumbnail?id=12BRHskWW5nxbJ0jmYiJhDLgOYNsxDP7K&sz=w800",
      "https://drive.google.com/thumbnail?id=15ynG425VAuHlKVgr3BlZ45Ktit7K1v8B&sz=w800"
    ]
  },
  {
    "id": "36",
    "title": "Town House",
    "address": "No. 72B, Cempaka Seri 1 Town Villas, Jalan Laman Cempaka 2, Kota Seriemas, 71800 Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 216000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "753 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "37",
    "title": "1 Storey Terrace House",
    "address": "No. 1174, Jalan SJ 9/8, Taman Seremban Jaya, 70450 Seremban, Negeri Sembilan",
    "postcode": "70450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 200000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "293 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1x5qa4tzadNrbPLYnuJqAQEvFsK_-kiB6&sz=w800",
      "https://drive.google.com/thumbnail?id=1kkx413dPRxjPpbzMsTOPGBu8s2Fq743R&sz=w800",
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "38",
    "title": "1 Storey Terrace House",
    "address": "Jalan Mutiara 6, Taman Mutiara, 71200 Rantau, Negeri Sembilan",
    "postcode": "71200",
    "state": "Negeri Sembilan",
    "area": "Rantau",
    "reservePrice": 250000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "593 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1lP0aify-cCYClcx-SmTfWETnNQuvd8Zp&sz=w800"
    ]
  },
  {
    "id": "39",
    "title": "1 Storey Terrace House",
    "address": "No. 2201, Lorong Awana Indah 8, Taman Awana Indah, 72100 Bahau, Negeri Sembilan",
    "postcode": "72100",
    "state": "Negeri Sembilan",
    "area": "Bahau",
    "reservePrice": 180000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "098 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Vt4NuWJm52micSRCFEqqcr8Nh5sILZYW&sz=w800"
    ]
  },
  {
    "id": "40",
    "title": "2 Storey Terrace House",
    "address": "No. 330, Jalan T.M 12, Taman Mulia, 71700 Mantin, Negeri Sembilan",
    "postcode": "71700",
    "state": "Negeri Sembilan",
    "area": "Mantin",
    "reservePrice": 430000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "265 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1tVxsSROaGoD1w2hoEpPalUWQTxG7E5XJ&sz=w800",
      "https://drive.google.com/thumbnail?id=116_1c3IqVParaNPNIdbFi0rgLRrqNA60&sz=w800",
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "41",
    "title": "2 Storey Terrace House",
    "address": "No. 44, Jalan Seri Rahang 2, Taman Seri Rahang, 70100 Seremban, Negeri Sembilan",
    "postcode": "70100",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 400000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1wLNCHPIqSnJvrevmtZGcwOf2Lb0rGxFo&sz=w800"
    ]
  },
  {
    "id": "42",
    "title": "1 Storey Terrace House",
    "address": "No. 2548, Jalan TD 3, Taman Delima, 71200 Rantau, Negeri Sembilan",
    "postcode": "71200",
    "state": "Negeri Sembilan",
    "area": "Rantau",
    "reservePrice": 160000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1ixm7XmGwi3qnmlvq4epSBXkMm7fn0XZ0&sz=w800"
    ]
  },
  {
    "id": "43",
    "title": "1 Storey Terrace House",
    "address": "No. 1810, Taman Jaya Lukut, 71010 Lukut, Negeri Sembilan",
    "postcode": "71010",
    "state": "Negeri Sembilan",
    "area": "Lukut",
    "reservePrice": 90000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1NeLtckicgczFnoUcVzhGaarnF1HMVuJY&sz=w800"
    ]
  },
  {
    "id": "44",
    "title": "2 Storey Terrace House",
    "address": "No. 1821, Taman Ujong, Jalan Tok Ungku, 70100 Seremban, Negeri Sembilan",
    "postcode": "70100",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 430000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "760 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1YBc-poYIgt1_1m-OKRNkW3FkMO-g2bDC&sz=w800"
    ]
  },
  {
    "id": "45",
    "title": "1 Storey Terrace House",
    "address": "No. 205, Jalan Sri Mawar 8, Taman Sri Mawar, 70450 Seremban, Negeri Sembilan",
    "postcode": "70450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 148500,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "100 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Io5SXJgfQUCTSioG-bh8k-0qbBW-P5-j&sz=w800"
    ]
  },
  {
    "id": "46",
    "title": "1 Storey Terrace House",
    "address": "No. 217, Jalan TME 8, Taman Mawar Ehsan, 71400 Pedas, Negeri Sembilan",
    "postcode": "71400",
    "state": "Negeri Sembilan",
    "area": "Pedas",
    "reservePrice": 290000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1TCoVfuJeZ45cCzF88aiVt8YMEmtw5_KC&sz=w800"
    ]
  },
  {
    "id": "47",
    "title": "2 Storey Terrace House",
    "address": "Taman Pantai Mas, 71000 Port Dickson, Negeri Sembilan",
    "postcode": "71000",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 200000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "936 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Eo0eDThWm455tdput8kWN2tLvWQ6JCJR&sz=w800"
    ]
  },
  {
    "id": "48",
    "title": "1 Storey Terrace House",
    "address": "Jalan Nilai Perdana 1, Taman Nilai Perdana, 71800 Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 290000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "496 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1c-tAh2LrPaf2jiNCDH-6rApHqhyPKnmy&sz=w800"
    ]
  },
  {
    "id": "49",
    "title": "1 Storey Terrace House",
    "address": "No. 4352, Jalan Taman Semarak 1/6, Taman Semarak, 71800 Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 265000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1XvSS23Er8bPpi2KP-cWUG6fRxtgakFfl&sz=w800"
    ]
  },
  {
    "id": "50",
    "title": "2 Storey Terrace House",
    "address": "No. 1176, Jalan Warisan Puteri A 44/1, Taman Warisan Puteri, Precint 4, 70400 Seremban, Negeri Sembilan",
    "postcode": "70400",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 400000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1CcPviM-p60YXX58r0Ad00eZscpzHhD-3&sz=w800",
      "https://drive.google.com/thumbnail?id=1xR0L_ZE6L585mRz_yi6tskteVFZS23-G&sz=w800",
      "https://drive.google.com/thumbnail?id=1IAV3EAmcpEtXLuA6REFkC3uSw4brHWbb&sz=w800",
      "https://drive.google.com/thumbnail?id=1x1Rz-khCAa22mWgaKlFL2zDr_1JMmbhb&sz=w800",
      "https://drive.google.com/thumbnail?id=1A6QK4xT9Ov6ppUHlRqbu9w3ErlTuEW7W&sz=w800"
    ]
  },
  {
    "id": "51",
    "title": "2 Storey Semi Detached House",
    "address": "No. 43, Jalan Bukit Kemayan 2, Taman Bukit Kemayan, 70300, Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 950000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "389 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=11bBXiOB8WAe15kF1BCRXQSV6J-rb8xPR&sz=w800",
      "https://drive.google.com/thumbnail?id=1xA8GOTDiSOtM-vsR3LpVCrOVZbpssnqn&sz=w800",
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "52",
    "title": "2 Storey Terrace House",
    "address": "No. 701, Jalan Tiara Sendayan 2/9, Taman Tiara Sendayan, 71900 Labu, Negeri Sembilan",
    "postcode": "71900",
    "state": "Negeri Sembilan",
    "area": "Labu",
    "reservePrice": 378000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "453 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1dWvAsqXzRvOX2zKHvWmLszrByHvTgHuP&sz=w800",
      "https://drive.google.com/thumbnail?id=1lVEv20L3kzoeM4jMZURlWzs8cLIue4WV&sz=w800",
      "https://drive.google.com/thumbnail?id=1d6GT_sfmTSyzP2XRqrJ5QQYpdF7CJK3Y&sz=w800",
      "https://drive.google.com/thumbnail?id=119gdkLu5-aEz7kIoFelNL9q0A0KTJy6C&sz=w800"
    ]
  },
  {
    "id": "53",
    "title": "Ocean View Resort Apartment",
    "address": "Unit No. C1-3-3, Ocean View Resort, Batu 9, Jalan Pantai, Teluk Kemang, 71050 Port Dickson, Negeri Sembilan",
    "postcode": "71050",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 46800,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "044 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1iAOA_gRqpqabwMskTTnS2YILdTv5pC9R&sz=w800"
    ]
  },
  {
    "id": "54",
    "title": "Retail Lot",
    "address": "Unit No. 98 (Lot 1-104), Kiara Square, Jalan Kiara 2/2, Pusat Perniagaan Kiara, 72100 Bahau, Negeri Sembilan",
    "postcode": "72100",
    "state": "Negeri Sembilan",
    "area": "Bahau",
    "reservePrice": 81450,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "403 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=10nfakAoY_4x2qVinKy0mbP5izlls5Bnf&sz=w800"
    ]
  },
  {
    "id": "55",
    "title": "2 Storey Terrace House",
    "address": "No. 991, Jalan Hijayu 2/62, Resort Residence, Hijayu 2, Bandar Sri Sendayan, 71950 Seremban, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 558000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1cHhxddEgKVbkOtmAOBBJ6XuxtBG5ktl4&sz=w800",
      "https://drive.google.com/thumbnail?id=1dxAoaW9t-UGvzLPoMTTnxFeYgUuZsHme&sz=w800",
      "https://drive.google.com/thumbnail?id=1AS-fvrbSl6eV2ov6BR9lFgo4X6WygOzD&sz=w800"
    ]
  },
  {
    "id": "56",
    "title": "1 Storey Terrace House",
    "address": "No. 556, Jalan Nilam Sari 16, Taman Nilam Sari Fasa 2, 70200 Seremban, Negeri Sembilan",
    "postcode": "70200",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 260000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "300 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1n7dfksbsSLqoJ-jPrATGayJsdA3qKZaY&sz=w800"
    ]
  },
  {
    "id": "57",
    "title": "1 Storey Terrace House",
    "address": "No. 1609, Jalan Politeknik 31, Taman Politeknik, 71050 Port Dickson, Negeri Sembilan",
    "postcode": "71050",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 137700,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1ayIrqFMEx_0L830SyXJg8p45CCJu86GN&sz=w800"
    ]
  },
  {
    "id": "58",
    "title": "1 Storey Terrace House",
    "address": "No. 20, Jalan 3/5, Taman Intan Perdana, Batu 9 Jalan Pantai, 71050 SI Rusa, Port Dickson, Negeri Sembilan",
    "postcode": "71050",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 175000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=12It2xq9W9D19TSVd2mURE9hQgf0IzthD&sz=w800"
    ]
  },
  {
    "id": "59",
    "title": "1 Storey Terrace House",
    "address": "No. 52, Jalan 3/7, Taman Intan Perdana, Batu 9 Jalan Pantai, 71050 Port Dickson, Negeri Sembilan",
    "postcode": "71050",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 129600,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=12It2xq9W9D19TSVd2mURE9hQgf0IzthD&sz=w800"
    ]
  },
  {
    "id": "60",
    "title": "Condominium",
    "address": "Unit No. A-12-5, Straits View Villas Condominium, PD World Marina International Resort, Batu 6, Jalan Pantai, 71050 Port Dickson, Negeri Sembilan",
    "postcode": "71050",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 43047,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "947 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1p6mhl5IKGYMk8hP9412ry6hf606Rf4Sb&sz=w800"
    ]
  },
  {
    "id": "61",
    "title": "Apartment",
    "address": "Unit No. G-1-20, Tiara Beach Resort, Batu 13, Jalan Pantai, Pasir Panjang, 71250 Port Dickson, Negeri Sembilan",
    "postcode": "71250",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 54000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "409 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=18Ia_r1ryFB19mCz5DKzn3JEug3LuX00-&sz=w800",
      "https://drive.google.com/thumbnail?id=1ukGrTZoQIqpeSkMMRXdey2y1WC5IqCpo&sz=w800",
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "62",
    "title": "Office Unit",
    "address": "Unit No. E-2-3, Jalan PPT 2, Pusat Perdagangan Templer, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 110000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "655 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "63",
    "title": "Office Unit",
    "address": "Unit No. E-2-2, Jalan PPT 2, Pusat Perdagangan Templer, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 130000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "655 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "64",
    "title": "Retail Unit",
    "address": "Unit No. E-2-1, Jalan PPT 2, Pusat Perdagangan Templer, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 180000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "452 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "65",
    "title": "Retail Lot",
    "address": "Unit No. E-2-G, Jalan PPT 2, Pusat Perdagangan Templer, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 300000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "525 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "66",
    "title": "2 Storey Semi Detached House",
    "address": "No. 68, Lorong Residensi SIGC 2/2, Residensi SIGC, 70400 Seremban, Negeri Sembilan",
    "postcode": "70400",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 1000000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "821 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HSrU_3HJhijRDjwEVm_fLwXHSpXlb4_C&sz=w800",
      "https://drive.google.com/thumbnail?id=1tlVQQnwXocFjdj9mGzJqBKXNAxT6Z98r&sz=w800",
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "67",
    "title": "Semi Detached House",
    "address": "No. 1503, Jalan Warisan Puteri A54, Bandar Warisan Puteri, 70400 Seremban, Negeri Sembilan",
    "postcode": "70400",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 500000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1CcPviM-p60YXX58r0Ad00eZscpzHhD-3&sz=w800",
      "https://drive.google.com/thumbnail?id=1xR0L_ZE6L585mRz_yi6tskteVFZS23-G&sz=w800",
      "https://drive.google.com/thumbnail?id=1IAV3EAmcpEtXLuA6REFkC3uSw4brHWbb&sz=w800",
      "https://drive.google.com/thumbnail?id=1x1Rz-khCAa22mWgaKlFL2zDr_1JMmbhb&sz=w800",
      "https://drive.google.com/thumbnail?id=1A6QK4xT9Ov6ppUHlRqbu9w3ErlTuEW7W&sz=w800"
    ]
  },
  {
    "id": "68",
    "title": "[7 min to Mambau Business Center] 1 Storey Terrace House [Close to AEON Mall Seremban 2]",
    "address": "No. 257, Jalan Seri Mambau A12, Taman Seri Mambau, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 146000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1C_lHZgI3nnKCoFINN_C_5r5LM69R_Pkr&sz=w800"
    ]
  },
  {
    "id": "69",
    "title": "Apartment",
    "address": "Unit No. B-L10-14, Menara B (Begonia) @ Bandar Belia, Jalan Bandar Belia 1/4, Bandar Wawasan, Putra Nilai, 71800 Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 195000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "732 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1l1kgmHppfdCLBHB_XMF8SfVfs8m2EF0p&sz=w800"
    ]
  },
  {
    "id": "70",
    "title": "1 Storey Terrace House",
    "address": "No. 109, Jalan Seri Mambau A4, Taman Seri Mambau, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 153000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1C_lHZgI3nnKCoFINN_C_5r5LM69R_Pkr&sz=w800"
    ]
  },
  {
    "id": "71",
    "title": "[7 min to Seremban Prima Mall] Apartment [9 min to Seremban KTM Station]",
    "address": "Unit No. C-8-10, Blok Camelia, Bayu Temiang, Jalan Bayu, 70200 Seremban, Negeri Sembilan",
    "postcode": "70200",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 180000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "900 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1-CwtV3_-nfpLdlAr5AAgXL76304k88TX&sz=w800"
    ]
  },
  {
    "id": "72",
    "title": "Apartment",
    "address": "Unit No. C-8-11, Blok Camelia, Bayu Temiang, Jalan Bayu, 70200 Seremban, Negeri Sembilan",
    "postcode": "70200",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 180000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "900 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1-CwtV3_-nfpLdlAr5AAgXL76304k88TX&sz=w800"
    ]
  },
  {
    "id": "73",
    "title": "Apartment",
    "address": "Block Nyior, Desa Palma Apartment, Putra Nilai, 71800 Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 105300,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "680 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1BtPbOOGh-77UqDUw0IUGQDyXE4DOh75Y&sz=w800",
      "https://drive.google.com/thumbnail?id=1YhViVNfxBprKtcWvsyZkeu_xjlUq2Efh&sz=w800",
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "74",
    "title": "2 Storey Detached House",
    "address": "No. 45, Jalan Bukit Senawang Perdana 4, Taman Bukit Senawang Perdana, 71450 Seremban, Negeri Sembilan",
    "postcode": "71450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 820000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "693 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xtVyA6ukYJTTJBRoj35RH5RiN9VUa9r-&sz=w800"
    ]
  },
  {
    "id": "75",
    "title": "1 Storey Semi Detached House",
    "address": "No. 179, Lorong Iringan Bayu 38/6, Precint 8, Taman Iringan Bayu, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 480000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "810 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1bNqnqXq_7mnG9qQeo1ZlyrXtz5hLCPFG&sz=w800",
      "https://drive.google.com/thumbnail?id=1YRQpJ-xxWr3y_uPDdpt7RH90NqQws_fo&sz=w800",
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "76",
    "title": "2 Storey Terrace House",
    "address": "No. 371, Jalan Springhill 10/23, Bandar Springhill, 71100 Port Dickson, Negeri Sembilan",
    "postcode": "71100",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 475000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "737 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1iX33VkUNNWAgg2Ctl3xhhMEQwWB11bFS&sz=w800"
    ]
  },
  {
    "id": "77",
    "title": "Terrace House",
    "address": "No. 23/G, Jalan Enclave G, Persada Damai, 71760 Bandar Baru Enstek, Negeri Sembilan",
    "postcode": "71760",
    "state": "Negeri Sembilan",
    "area": "Bandar Baru Enstek",
    "reservePrice": 360000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "252 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1qwb0bJz10Aj2htJ7oCMpFgC3F054RNoj&sz=w800"
    ]
  },
  {
    "id": "78",
    "title": "2 Storey Terrace Shop Office",
    "address": "No. 23 & 23A, Jalan DS 2/2, Dataran Satria 2, 73400 Gemas, Negeri Sembilan",
    "postcode": "73400",
    "state": "Negeri Sembilan",
    "area": "Gemas",
    "reservePrice": 346500,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "540 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1h8uAQ3E3riPGMLwSj8YMlLAt-v9arOHp&sz=w800"
    ]
  },
  {
    "id": "79",
    "title": "1 Storey Terrace House",
    "address": "No. 420, Jalan Desa PD 7, Taman Desa PD, 71200 Port Dickson, Negeri Sembilan",
    "postcode": "71200",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 97200,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=17Dc93rKtf4cUtlxOVvgQtMNIK0I1tK_L&sz=w800",
      "https://drive.google.com/thumbnail?id=1_VgjMs_3X9aXEwqqsYe1aWqT3tvzEVHp&sz=w800",
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "80",
    "title": "2 Storey Terrace House",
    "address": "No. 22, Jalan Iringan Bayu 19, Precint 2, Taman Iringan Bayu, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 298890,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "920 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1bNqnqXq_7mnG9qQeo1ZlyrXtz5hLCPFG&sz=w800",
      "https://drive.google.com/thumbnail?id=1YRQpJ-xxWr3y_uPDdpt7RH90NqQws_fo&sz=w800",
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "81",
    "title": "2 Storey Terrace House",
    "address": "No. 66, Jalan Tasik Senangin 16/5, Bandar Tasik Senangin, 71750 Lenggeng, Negeri Sembilan",
    "postcode": "71750",
    "state": "Negeri Sembilan",
    "area": "Lenggeng",
    "reservePrice": 364500,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "647 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1nhM7zphX0EDYJFO8UzKHHxWvVT-1ie63&sz=w800"
    ]
  },
  {
    "id": "82",
    "title": "Condominium",
    "address": "Unit No. M608, Block M, PD Perdana Condo Resort, Batu 5 1/2, Jalan Pantai, 71000 Port Dickson, Negeri Sembilan",
    "postcode": "71000",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 68040,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "753 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1ZyvyDEIXOeZGf86JkhgoJ2Sm6VKP0KfL&sz=w800"
    ]
  },
  {
    "id": "83",
    "title": "1 Storey Cluster House",
    "address": "No. 31, Jalan Nibong 1, Taman Bukit Nibong, 70400 Seremban, Negeri Sembilan",
    "postcode": "70400",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 340200,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "580 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1FzoVQz5AFaNGDKHgyQGJp-_W_QtTxWni&sz=w800"
    ]
  },
  {
    "id": "84",
    "title": "2 Storey Terrace House",
    "address": "No. 1878, Lorong Nusari Bayu 7C, Nusari Bayu 3, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 405000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "647 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1cd_oDk8iwGEiqMtRq10U8oyu9_sPqkMn&sz=w800",
      "https://drive.google.com/thumbnail?id=1nzJINhpiK5PIK-Wke6s_0GhFPQkYJNPz&sz=w800",
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "85",
    "title": "Terrace House",
    "address": "Jalan BBN 6/2G, Desa Cempaka, Putra Nilai, 71800 Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 550000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1nDp77_y5oLMPP99tuotzyhzkWmanbIw7&sz=w800"
    ]
  },
  {
    "id": "86",
    "title": "1 Storey Terrace House",
    "address": "No. 14, Jalan PS 5/7, Taman Pinggiran Senawang, 71450 Seremban, Negeri Sembilan",
    "postcode": "71450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 270000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "300 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=165SU-yOWbOlW6eylOmhnAZWcrJSRCne3&sz=w800"
    ]
  },
  {
    "id": "87",
    "title": "2 Storey Terrace House",
    "address": "No. 324, Jalan Ekar 4/7, Residensi Prima Bandar Ekar, Bandar Ekar, 71200 Rantau, Negeri Sembilan",
    "postcode": "71200",
    "state": "Negeri Sembilan",
    "area": "Rantau",
    "reservePrice": 400000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "520 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1ZdVhvCUiOQ83VngigICZpwGsg30uuIwk&sz=w800"
    ]
  },
  {
    "id": "88",
    "title": "2 Storey Terrace House",
    "address": "No. 357, Lorong Iringan Bayu 35/2, Precinct 3, Taman Iringan Bayu, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 450000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "566 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1bNqnqXq_7mnG9qQeo1ZlyrXtz5hLCPFG&sz=w800",
      "https://drive.google.com/thumbnail?id=1YRQpJ-xxWr3y_uPDdpt7RH90NqQws_fo&sz=w800",
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "89",
    "title": "2 Storey Terrace House",
    "address": "No. 2281, Taman Orkid, 73200 Gemencheh, Negeri Sembilan",
    "postcode": "73200",
    "state": "Negeri Sembilan",
    "area": "Gemencheh",
    "reservePrice": 225000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "194 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Crmo647AwGv11vjvCpfjSofU_BlRQplu&sz=w800"
    ]
  },
  {
    "id": "90",
    "title": "1 Storey Terrace House",
    "address": "No. 1052, Jalan Gunung Datok 27, Taman Angsamas, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 280000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "646 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13M1ScNyAunrXNn-r1zsjCYWVMsf7o0NO&sz=w800"
    ]
  },
  {
    "id": "91",
    "title": "1 Storey Terrace House",
    "address": "No. 5, Jalan Linggi Jaya 1, Taman Linggi Jaya, Kampung Permatang Pasir, 71150 Port Dickson, Negeri Sembilan",
    "postcode": "71150",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 200000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "194 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1ufXGa_yvCyO8UbSnEoNtiXXq8uK6J003&sz=w800"
    ]
  },
  {
    "id": "92",
    "title": "1 Storey Terrace House",
    "address": "No. 896, Jalan Gunung Datok 19, Taman Angsamas Mambau, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 290000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13M1ScNyAunrXNn-r1zsjCYWVMsf7o0NO&sz=w800"
    ]
  },
  {
    "id": "93",
    "title": "Shop Lot",
    "address": "Unit No. F-06, Terminal One Shopping Centre, Jalan Lintang, 70200 Seremban, Negeri Sembilan",
    "postcode": "70200",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 58500,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "517 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=19JH9AoMLg87aTgJ_MRHX7ubZXyLtBBY_&sz=w800"
    ]
  },
  {
    "id": "94",
    "title": "Shop Lot",
    "address": "No. F-08, Terminal One Shopping Centre, Jalan Lintang, 70200 Seremban, Negeri Sembilan",
    "postcode": "70200",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 58500,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "517 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=19JH9AoMLg87aTgJ_MRHX7ubZXyLtBBY_&sz=w800"
    ]
  },
  {
    "id": "95",
    "title": "Shop Lot",
    "address": "No. F-22, Terminal One Shopping Centre, Jalan Lintang, 70200 Seremban, Negeri Sembilan",
    "postcode": "70200",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 40500,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "344 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=19JH9AoMLg87aTgJ_MRHX7ubZXyLtBBY_&sz=w800"
    ]
  },
  {
    "id": "96",
    "title": "2 Storey Terrace House",
    "address": "No. 44, Jalan PS 5/6, Taman Pinggiran Senawang, 71450 Seremban, Negeri Sembilan",
    "postcode": "71450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 300000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=165SU-yOWbOlW6eylOmhnAZWcrJSRCne3&sz=w800"
    ]
  },
  {
    "id": "97",
    "title": "1 Storey Terrace House",
    "address": "No. 305, Jalan Bil 1, Taman Bayu Indera Lukut (Bayu 1), 71010 Port Dickson, Negeri Sembilan",
    "postcode": "71010",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 270000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1NzpokR03hf6GtJzT9qg1JXRIIEsGfG-Y&sz=w800",
      "https://drive.google.com/thumbnail?id=1TtdFr94rJc4mdli1Wt7YH_5IzeMu3_0g&sz=w800",
      "https://drive.google.com/thumbnail?id=1gkZdKabziqlIzawraO6beVPwcUJa_d3f&sz=w800"
    ]
  },
  {
    "id": "98",
    "title": "1 Storey Terrace House",
    "address": "PT. 5274, Jalan Desa Puteri 13 (Jalan Puteri 13), Taman Desa Puteri, 72100 Bahau, Negeri Sembilan",
    "postcode": "72100",
    "state": "Negeri Sembilan",
    "area": "Bahau",
    "reservePrice": 234900,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1tcOtChOQOvyWJeHh3BdebnbKjH7DKDun&sz=w800",
      "https://drive.google.com/thumbnail?id=1VBG8stbNv-BIiUKyX137dZVc7fIgMYc-&sz=w800",
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "99",
    "title": "2 Storey Terrace House",
    "address": "No. 65, Jalan Anggerik 3, Laman Anggerik, Nilai Impian, 71800 Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 392850,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "813 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JBWU8VbEi1VTS-TTCKO2JmPCvpU6ScmZ&sz=w800"
    ]
  },
  {
    "id": "100",
    "title": "2 Storey Semi Detached House",
    "address": "No. 78, Jalan Laman Bakawali E/2, Laman Bakawali, Kota Seriemas, 71800 Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 585000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "004 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1ArWjVwEhxeLZmWj7TDUapJRQMNh3KrfX&sz=w800"
    ]
  },
  {
    "id": "101",
    "title": "1 Storey Terrace House",
    "address": "No. 83, Jalan Bukit Citra 2/4, Taman Bukit Citra, 71700 Mantin, Negeri Sembilan",
    "postcode": "71700",
    "state": "Negeri Sembilan",
    "area": "Mantin",
    "reservePrice": 279000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "540 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1uwizljoS-YXIUpqAQIHP029Ju_DtxZtb&sz=w800"
    ]
  },
  {
    "id": "102",
    "title": "2 Storey Terrace House",
    "address": "No. 2002, Jalan Warisan Puteri A69, Precint 6, Taman Warisan Puteri, 70400 Seremban, Negeri Sembilan",
    "postcode": "70400",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 382500,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1CcPviM-p60YXX58r0Ad00eZscpzHhD-3&sz=w800",
      "https://drive.google.com/thumbnail?id=1xR0L_ZE6L585mRz_yi6tskteVFZS23-G&sz=w800",
      "https://drive.google.com/thumbnail?id=1IAV3EAmcpEtXLuA6REFkC3uSw4brHWbb&sz=w800",
      "https://drive.google.com/thumbnail?id=1x1Rz-khCAa22mWgaKlFL2zDr_1JMmbhb&sz=w800",
      "https://drive.google.com/thumbnail?id=1A6QK4xT9Ov6ppUHlRqbu9w3ErlTuEW7W&sz=w800"
    ]
  },
  {
    "id": "103",
    "title": "1 Storey Terrace House",
    "address": "Lorong TM 4/2, Taman Merpati, 70450 Seremban, Negeri Sembilan",
    "postcode": "70450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 270000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=16P2JfadmK7y9q2cagTk6YgpT2kz2uYC-&sz=w800"
    ]
  },
  {
    "id": "104",
    "title": "2 Storey Terrace House",
    "address": "No. 296, Jalan Ekar 4/6, Residensi Prima Bandar Ekar, Bandar Ekar, 71200 Rantau, Negeri Sembilan",
    "postcode": "71200",
    "state": "Negeri Sembilan",
    "area": "Rantau",
    "reservePrice": 300000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "824 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1ZdVhvCUiOQ83VngigICZpwGsg30uuIwk&sz=w800"
    ]
  },
  {
    "id": "105",
    "title": "2 Storey Terrace House",
    "address": "No. 283, Jalan Azalea 4/4, Nilai Utama, 71800 Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 900000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "807 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1c8r6fYYFKyULZNYsroeuGLZhFg6oDr08&sz=w800"
    ]
  },
  {
    "id": "106",
    "title": "2 Storey Terrace House",
    "address": "No. 239, Jalan Desa Mayang Sari 2/2, Taman Desa Mayang Sari, 71800 Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 530000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "200 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1SAByADtCFlNBc9AT3BLnqi7yb_Snx8cB&sz=w800"
    ]
  },
  {
    "id": "107",
    "title": "Adjoining parcels of Residential Land upon with a 1 Storey Detached House",
    "address": "No. 47-C & 47-B, Taman Bukit Tembok, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 315000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "328 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Be1F12DmJXoiIfQq52z_6GiHBFHhw7kN&sz=w800"
    ]
  },
  {
    "id": "108",
    "title": "2 Storey Terrace House",
    "address": "No. 239, Jalan Laman Bakawali B/8, Laman Bakawali, Kota Seriemas, 71800 Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 415000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1ArWjVwEhxeLZmWj7TDUapJRQMNh3KrfX&sz=w800"
    ]
  },
  {
    "id": "109",
    "title": "1 Storey Terrace House",
    "address": "No. 149 (PT 2673), Jalan Musytari 10, Taman Musytari, 72200 Batu Kikir, Negeri Sembilan",
    "postcode": "72200",
    "state": "Negeri Sembilan",
    "area": "Batu Kikir",
    "reservePrice": 162000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=14q3SPpH7bPDc4SBhHAT1KLIb6HVUZhpZ&sz=w800",
      "https://drive.google.com/thumbnail?id=1wTFc4_wrnMkP5iF5G1zp9DBz7kVcRopg&sz=w800",
      "https://drive.google.com/thumbnail?id=1LAawNF63WUamkHgG6rDz6NrlPRSuLc2h&sz=w800"
    ]
  },
  {
    "id": "110",
    "title": "1 Storey Terrace House",
    "address": "No. 36, Jalan PD Orkid 1, Taman PD Orkid Fasa 2, 71000 Port Dickson, Negeri Sembilan",
    "postcode": "71000",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 233280,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "819 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Crmo647AwGv11vjvCpfjSofU_BlRQplu&sz=w800"
    ]
  },
  {
    "id": "111",
    "title": "2 Storey Terrace House",
    "address": "No. B-1, Taman Satelite, 72100 Bahau, Negeri Sembilan",
    "postcode": "72100",
    "state": "Negeri Sembilan",
    "area": "Bahau",
    "reservePrice": 380700,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "691 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "112",
    "title": "1 Storey Terrace House",
    "address": "No. 552, Jalan Anggerik 6, Taman PD Utama, 71000 Port Dickson, Negeri Sembilan",
    "postcode": "71000",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 145800,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "647 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=11MvRgZ5CNqS2wpADy4UMUKIFpmpAZoxw&sz=w800"
    ]
  },
  {
    "id": "113",
    "title": "Apartment",
    "address": "Unit No. A-3-20, PD Tiara Bay Apartment, 71250 Port Dickson, Negeri Sembilan",
    "postcode": "71250",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 44550,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "420 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=18Ia_r1ryFB19mCz5DKzn3JEug3LuX00-&sz=w800",
      "https://drive.google.com/thumbnail?id=1ukGrTZoQIqpeSkMMRXdey2y1WC5IqCpo&sz=w800",
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "114",
    "title": "Apartment",
    "address": "Unit No. D-1-28, PD Tiara Bay Apartment, Batu 13, Jalan Pantai, 71250 Pasir Panjang, Port Dickson, Negeri Sembilan",
    "postcode": "71250",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 60000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "441 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=18Ia_r1ryFB19mCz5DKzn3JEug3LuX00-&sz=w800",
      "https://drive.google.com/thumbnail?id=1ukGrTZoQIqpeSkMMRXdey2y1WC5IqCpo&sz=w800",
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "115",
    "title": "1 Storey Terrace House",
    "address": "No. 80, Jalan TSR 2, Taman Dato' Sedia Raja, 71300 Rembau, Negeri Sembilan",
    "postcode": "71300",
    "state": "Negeri Sembilan",
    "area": "Rembau",
    "reservePrice": 230000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "464 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "116",
    "title": "2 Storey Terrace House",
    "address": "No. 28, Jalan D'Areca 2, Taman Bandar Senawang, 70450 Seremban, Negeri Sembilan",
    "postcode": "70450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 313470,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "528 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1SB-5MnFt-5avpsBuplnJiHDvBexR4gnO&sz=w800"
    ]
  },
  {
    "id": "117",
    "title": "2 Storey Terrace House",
    "address": "No. 2089, Jalan Tiara Sendayan 6/3, Taman Tiara Sendayan, 71900 Labu, Negeri Sembilan",
    "postcode": "71900",
    "state": "Negeri Sembilan",
    "area": "Labu",
    "reservePrice": 414000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "086 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1dWvAsqXzRvOX2zKHvWmLszrByHvTgHuP&sz=w800",
      "https://drive.google.com/thumbnail?id=1lVEv20L3kzoeM4jMZURlWzs8cLIue4WV&sz=w800",
      "https://drive.google.com/thumbnail?id=1d6GT_sfmTSyzP2XRqrJ5QQYpdF7CJK3Y&sz=w800",
      "https://drive.google.com/thumbnail?id=119gdkLu5-aEz7kIoFelNL9q0A0KTJy6C&sz=w800"
    ]
  },
  {
    "id": "118",
    "title": "1 Storey Semi Detached House",
    "address": "No. 232, Jalan Bukit Senawang Perdana 41, Taman Bukit Senawang Perdana, 71450 Seremban, Negeri Sembilan",
    "postcode": "71450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 468000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "155 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xtVyA6ukYJTTJBRoj35RH5RiN9VUa9r-&sz=w800"
    ]
  },
  {
    "id": "119",
    "title": "2 Storey Terrace House",
    "address": "No. 1251, Jalan Ara Sendayan 5/11, Ara Sendayan, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 423000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "650 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Nom0Qy-H63zOkykopvsYilfaLhU1gEX9&sz=w800",
      "https://drive.google.com/thumbnail?id=1Hs0Vm8hq9vSIoKWOz4DWFTnPNZzO4hrV&sz=w800",
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "120",
    "title": "Apartment",
    "address": "Unit No. G-L4-2, Paradise Lagoon, Batu 2, Jalan Pantai, 71000 Port Dickson, Negeri Sembilan",
    "postcode": "71000",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 135000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "840 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1fwLQ4vytFew-0Pu6KP553QSb1fbglhPh&sz=w800"
    ]
  },
  {
    "id": "121",
    "title": "2 Storey Semi Detached House",
    "address": "No. 286, Jalan Saujana Sutera 11, Saujana Sutera, Seremban 2 Heights, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 1000000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "324 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1W0VHRZZQ0ytvLojoAEFhStN5lxfHu4Dv&sz=w800"
    ]
  },
  {
    "id": "122",
    "title": "Apartment",
    "address": "Unit No. LP3-12-21, Block LP3, Laman Komersil Areca, Putra Nilai, 71800 Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 153000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "398 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1RyWuyfsSj0LeQmlTXhH5D4GIXEn8Jzql&sz=w800"
    ]
  },
  {
    "id": "123",
    "title": "1 Storey Terrace House",
    "address": "No. 120, Jalan Musytari 9, Taman Musytari, 72200 Batu Kikir, Negeri Sembilan",
    "postcode": "72200",
    "state": "Negeri Sembilan",
    "area": "Batu Kikir",
    "reservePrice": 200000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "937 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=14q3SPpH7bPDc4SBhHAT1KLIb6HVUZhpZ&sz=w800",
      "https://drive.google.com/thumbnail?id=1wTFc4_wrnMkP5iF5G1zp9DBz7kVcRopg&sz=w800",
      "https://drive.google.com/thumbnail?id=1LAawNF63WUamkHgG6rDz6NrlPRSuLc2h&sz=w800"
    ]
  },
  {
    "id": "124",
    "title": "2 Storey Terrace House",
    "address": "No. 157, Jalan Springhill 9/3A, Bandar Springhill, 71010 Port Dickson, Negeri Sembilan",
    "postcode": "71010",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 170000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "958 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1iX33VkUNNWAgg2Ctl3xhhMEQwWB11bFS&sz=w800"
    ]
  },
  {
    "id": "125",
    "title": "1 Storey Terrace House",
    "address": "No. 979, Jalan Intan 2/1, Taman Bukit Sentosa, 70200 Seremban, Negeri Sembilan",
    "postcode": "70200",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 200000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1OvJ21f-D3IPZaGPbIiPAHEKee4h0go8c&sz=w800"
    ]
  },
  {
    "id": "126",
    "title": "2 Storey Terrace House",
    "address": "No. 82, Jalan Nusari Aman 8/3, Nusari Aman 3, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 500000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "798 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1S1LGIKQlHmZWhpUuoia6O98e-q0sX-zw&sz=w800",
      "https://drive.google.com/thumbnail?id=1xRp5EtHoOBkZcU9YmJu8kjYVos-b5lRB&sz=w800",
      "https://drive.google.com/thumbnail?id=1S1LvJLEvz0W0DQmfiG7UKxn-CjhBEamr&sz=w800"
    ]
  },
  {
    "id": "127",
    "title": "1 Storey Chalet",
    "address": "No. H167, Garden Wing Deluxe Suite, The Grand Lexis Port Dickson, 71000, Port Dickson, Negeri Sembilan",
    "postcode": "71000",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 344250,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "840 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1OWIcWu3diSHCv8dtygJTDnylBjYppoJD&sz=w800"
    ]
  },
  {
    "id": "128",
    "title": "2 Storey Terrace House",
    "address": "No. 1759, Jalan Nusari Aman 7/6, Nusari Aman 3, 71950, Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 760000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "447 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1S1LGIKQlHmZWhpUuoia6O98e-q0sX-zw&sz=w800",
      "https://drive.google.com/thumbnail?id=1xRp5EtHoOBkZcU9YmJu8kjYVos-b5lRB&sz=w800",
      "https://drive.google.com/thumbnail?id=1S1LvJLEvz0W0DQmfiG7UKxn-CjhBEamr&sz=w800"
    ]
  },
  {
    "id": "129",
    "title": "2 Storey Terrace House",
    "address": "No. 68, Jalan Tasik Senangin 16/2, Bandar Tasik Senangin, 71750 Lenggeng, Negeri Sembilan",
    "postcode": "71750",
    "state": "Negeri Sembilan",
    "area": "Lenggeng",
    "reservePrice": 350000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "173 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1nhM7zphX0EDYJFO8UzKHHxWvVT-1ie63&sz=w800"
    ]
  },
  {
    "id": "130",
    "title": "2 Storey Terrace House",
    "address": "No. 209, Jalan Dillenia 4, Laman Dillenia Nilai Impian, 71800, Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 570000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "798 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "131",
    "title": "1 Storey Semi Detached House",
    "address": "No. 245, Jalan Palma Jaya 8, Taman Palma Jaya, 70400 Seremban, Negeri Sembilan",
    "postcode": "70400",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 262440,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "197 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "132",
    "title": "Shop Unit",
    "address": "Unit No. 38-2, Tingkat 2, Jalan Forest Heights 7, Seremban Forest Heights, 70450 Seremban, Negeri Sembilan",
    "postcode": "70450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 390000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "564 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1wEkJGISHjuGxEuDK8uvWrD0uXjQRURRy&sz=w800",
      "https://drive.google.com/thumbnail?id=11zdgOHLTu5n9CZkjLDFX2f5-vqv8T4q7&sz=w800",
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "133",
    "title": "Agricultural Land",
    "address": "Lot 6939, Jalan Arawana 1, Taman Arawana, 71750 Lenggeng, Negeri Sembilan",
    "postcode": "71750",
    "state": "Negeri Sembilan",
    "area": "Lenggeng",
    "reservePrice": 520200,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "134",
    "title": "Agricultural Land",
    "address": "Lot 6937, Jalan Arawana 1, Taman Arawana, 71750 Lenggeng, Negeri Sembilan",
    "postcode": "71750",
    "state": "Negeri Sembilan",
    "area": "Lenggeng",
    "reservePrice": 522000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "135",
    "title": "2 Storey Terrace House",
    "address": "Jalan Bayu Sutera 4/16, Taman Bayu Sutera, 71960 Port Dickson, Negeri Sembilan",
    "postcode": "71960",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 640000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "422 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1PnWeRa4cMSRnRlyAz9urHCDUqt4ZSl1Y&sz=w800"
    ]
  },
  {
    "id": "136",
    "title": "2 Storey Terrace House",
    "address": "No. 16, Jalan D'melia 3, Taman Bandar Senawang, 70450 Seremban, Negeri Sembilan",
    "postcode": "70450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 414000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "650 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "137",
    "title": "1 Storey Terrace House",
    "address": "No. 23, Taman Tiong Seng Block, 71000 Port Dickson, Negeri Sembilan",
    "postcode": "71000",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 81000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1dO-euSV_SO91VrkP_UIiRDwI5G1JT4ig&sz=w800"
    ]
  },
  {
    "id": "138",
    "title": "1 Storey Terrace House",
    "address": "No. 1135, Lorong Nusari Bayu 3/3A, Nusari Bayu 1, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 275400,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "164 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1rQeJvRhC0kp-Iry4PlvbqwNoedZLnS0V&sz=w800"
    ]
  },
  {
    "id": "139",
    "title": "Terrace House",
    "address": "No. 1696, Jalan BSS 2/2E, Bandar Seremban Selatan, 70450 Seremban, Negeri Sembilan",
    "postcode": "70450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 250000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VHEketmllxMqadBCasUBK2muf245MLcj&sz=w800"
    ]
  },
  {
    "id": "140",
    "title": "1 Storey Terrace House",
    "address": "Jalan BBN 6/1J, Desa Cempaka, Putra Nilai, 71800 Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 251100,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "764 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1nDp77_y5oLMPP99tuotzyhzkWmanbIw7&sz=w800"
    ]
  },
  {
    "id": "141",
    "title": "2 Storey Terrace House",
    "address": "No. 81, Jalan Laman Sendayan 1A/4, Laman Sendayan, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 380700,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1uVO2yvswetVDr-gTjSnqrvXPazX4Za5A&sz=w800",
      "https://drive.google.com/thumbnail?id=1khMGYJroUxQUe8q1n_rzrs37RIMoXs8A&sz=w800",
      "https://drive.google.com/thumbnail?id=1gzLFHXLzHSzuvRqdsGZYa51c8fzI_2yS&sz=w800",
      "https://drive.google.com/thumbnail?id=1zp1StLmpLuGE4noKGTTUQsQjucvsvOkt&sz=w800",
      "https://drive.google.com/thumbnail?id=1a0hHZhTTqBvz2RtxNFSW1DNhrhSWqS4r&sz=w800"
    ]
  },
  {
    "id": "142",
    "title": "1 Storey Terrace House",
    "address": "No. 250, Jalan BIL 1, Taman Bayu Indera Lukut, 71010 Port Dickson, Negeri Sembilan",
    "postcode": "71010",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 259200,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "540 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1NzpokR03hf6GtJzT9qg1JXRIIEsGfG-Y&sz=w800",
      "https://drive.google.com/thumbnail?id=1TtdFr94rJc4mdli1Wt7YH_5IzeMu3_0g&sz=w800",
      "https://drive.google.com/thumbnail?id=1gkZdKabziqlIzawraO6beVPwcUJa_d3f&sz=w800"
    ]
  },
  {
    "id": "143",
    "title": "2 Storey Bungalow House",
    "address": "No. 129, Jalan Jasmin 2, Laman Jasmin, Nilai Impian, 71800 Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 705000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "802 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1vXJyfqD8IjX5ANnZ69Gt55yUFId59rBe&sz=w800"
    ]
  },
  {
    "id": "144",
    "title": "2 Storey Terrace House",
    "address": "No. 83, Jalan Bukit Senawang Perdana 48, Taman Bukit Senawang Perdana, 71450 Seremban, Negeri Sembilan",
    "postcode": "71450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 387000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "540 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xtVyA6ukYJTTJBRoj35RH5RiN9VUa9r-&sz=w800"
    ]
  },
  {
    "id": "145",
    "title": "2 Storey Terrace House",
    "address": "No. 914, Jalan Suriaman 3/2, Suriaman 3, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 517500,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "714 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1tLpQnqQjR0AX-lgYHl8F-rhv_E7DyVFt&sz=w800",
      "https://drive.google.com/thumbnail?id=1-a2q43KaD5drsWu587ZhonHMmPlqS2Rz&sz=w800",
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "146",
    "title": "1 Storey Terrace House",
    "address": "Jalan Desa Rusa 1, Taman Desa Rusa, KM5, Jalan Pantai, 71050 Port Dickson, Negeri Sembilan",
    "postcode": "71050",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 220000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "858 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=11nFNjEMHpNKPOATFmPovAQlnM-Xr8tCr&sz=w800"
    ]
  },
  {
    "id": "147",
    "title": "2 Storey Terrace House",
    "address": "Jalan Iringan Bayu 20, Precint 2, Taman Iringan Bayu, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 435000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "920 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1bNqnqXq_7mnG9qQeo1ZlyrXtz5hLCPFG&sz=w800",
      "https://drive.google.com/thumbnail?id=1YRQpJ-xxWr3y_uPDdpt7RH90NqQws_fo&sz=w800",
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "148",
    "title": "Apartment",
    "address": "Unit No. E-5-28, Block E, Desa Palma Apartment, Putra Nilai, 71800 Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 135000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "710 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1BtPbOOGh-77UqDUw0IUGQDyXE4DOh75Y&sz=w800",
      "https://drive.google.com/thumbnail?id=1YhViVNfxBprKtcWvsyZkeu_xjlUq2Efh&sz=w800",
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "149",
    "title": "2 Storey Terrace House",
    "address": "No. 625, Jalan Desa Mayang Sari 3/9, Taman Desa Mayang Sari, 71800 Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 530000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1SAByADtCFlNBc9AT3BLnqi7yb_Snx8cB&sz=w800"
    ]
  },
  {
    "id": "150",
    "title": "Terrace House",
    "address": "Jalan PS 5/9, Taman Pinggiran Senawang, 71450 Seremban, Negeri Sembilan",
    "postcode": "71450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 320000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "347 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=165SU-yOWbOlW6eylOmhnAZWcrJSRCne3&sz=w800"
    ]
  },
  {
    "id": "151",
    "title": "Town House",
    "address": "Unit No. 1316A, Tingkat Bawah, Bangunan M4, Jalan Gadong Jaya 28/4, Taman Gadong Jaya, 71900 Labu, Negeri Sembilan",
    "postcode": "71900",
    "state": "Negeri Sembilan",
    "area": "Labu",
    "reservePrice": 78750,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "678 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=181-59r33y1BjXlo-BXkhONlxiV6LrAU_&sz=w800",
      "https://drive.google.com/thumbnail?id=1HzM5dU8z-MHhtYn8N9I5pxQysstHu7VN&sz=w800",
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "152",
    "title": "2 Storey Terrace House",
    "address": "No. 410, Jalan Mantau Indah 16, Taman Mantau Indah, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 175000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "775 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1GmTK97Im3lJsDsse_7twbpn6A_W9aucv&sz=w800",
      "https://drive.google.com/thumbnail?id=1RKm2D1Yf4B85vNdzcBj0Cn4ZKijTUH-D&sz=w800",
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "153",
    "title": "1 Storey Semi Detached House",
    "address": "No. 194, Jalan TBK 1/12, Taman Bukit Kepayang 1A, 70200 Seremban, Negeri Sembilan",
    "postcode": "70200",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 405000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "718 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1sOR4EDqXMtQzVz7EeBOxOmiu3h5EjIey&sz=w800",
      "https://drive.google.com/thumbnail?id=1R7TfEVn0i7yrfBXNuotCNlIRrLltLLkA&sz=w800",
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "154",
    "title": "2 Storey Terrace House",
    "address": "No. 279, Jalan Saujana Indah 6, Taman Saujana Indah, S2 Heights, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 388800,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "155",
    "title": "Retail Unit",
    "address": "Unit No. G-38, Ground Floor, Terminal One Shopping Centre, No. 20B, Jalan Lintang, 70200 Seremban, Negeri Sembilan",
    "postcode": "70200",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 225000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "431 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=19JH9AoMLg87aTgJ_MRHX7ubZXyLtBBY_&sz=w800"
    ]
  },
  {
    "id": "156",
    "title": "1 Storey Terrace House",
    "address": "No. 247, Taman Senawang Jaya, 70450 Seremban, Negeri Sembilan",
    "postcode": "70450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 200000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "689 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1O6SNiH43di2x-ewrweRZEQADSWcRZ9oD&sz=w800"
    ]
  },
  {
    "id": "157",
    "title": "Apartment",
    "address": "Unit No. 1-13-06, Pangsapuri Kalista 1, Persiaran S2 G1, Seksyen G, Seremban 2, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 290000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "914 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1vpFX0UrTK_TPf5zyutpBO_Qxjj3HEs1z&sz=w800"
    ]
  },
  {
    "id": "158",
    "title": "Apartment",
    "address": "Unit No. D-7-8, Glory Beach Resort, Batu 2, Jalan Pantai, 71000 Port Dickson, Negeri Sembilan",
    "postcode": "71000",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 243000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "872 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1QvBNJo2yqxYGQuDZntn-2eorPaNuYZz7&sz=w800"
    ]
  },
  {
    "id": "159",
    "title": "1 Storey Terrace House",
    "address": "No. 28 (PT. 3609), Jalan Desa PD 2/1, Taman Desa PD 2, 71200 Port Dickson, Negeri Sembilan",
    "postcode": "71200",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 90000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=17Dc93rKtf4cUtlxOVvgQtMNIK0I1tK_L&sz=w800",
      "https://drive.google.com/thumbnail?id=1_VgjMs_3X9aXEwqqsYe1aWqT3tvzEVHp&sz=w800",
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "160",
    "title": "2 Storey Terrace House",
    "address": "No. 119, Jalan Desa Melor 6, Taman Desa Melor, 70450 Seremban, Negeri Sembilan",
    "postcode": "70450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 270000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "076 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "161",
    "title": "Condominium",
    "address": "Unit No. N910, Block N, PD Perdana Condo Resort, Batu 5 1/2, Jalan Pantai, 71000 Port Dickson, Negeri Sembilan",
    "postcode": "71000",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 56133,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "753 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1ZyvyDEIXOeZGf86JkhgoJ2Sm6VKP0KfL&sz=w800"
    ]
  },
  {
    "id": "162",
    "title": "1 Storey Terrace House",
    "address": "No. 1244, Jalan Gunung Datok 31, Taman Angsamas, Mambau, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 170100,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13M1ScNyAunrXNn-r1zsjCYWVMsf7o0NO&sz=w800"
    ]
  },
  {
    "id": "163",
    "title": "2 Storey Terrace House",
    "address": "No. 487, Jalan Suriaman 2/14, Suriaman 2, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 664200,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "327 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1yk8-nBkuW2Yzmp2OmhJmbQVWQlYURH1w&sz=w800",
      "https://drive.google.com/thumbnail?id=1sc6hXTW_VBGGiVfp7u4RiJpHdop3Sg7i&sz=w800",
      "https://drive.google.com/thumbnail?id=1VamGpec3-jLfUtz9BaIPoo4IgSIaw606&sz=w800"
    ]
  },
  {
    "id": "164",
    "title": "2 Storey Terrace House",
    "address": "No. 2393, Jalan SJ 2/3A, Taman Seremban Jaya, 70450 Seremban, Negeri Sembilan",
    "postcode": "70450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 225000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "917 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1x5qa4tzadNrbPLYnuJqAQEvFsK_-kiB6&sz=w800",
      "https://drive.google.com/thumbnail?id=1kkx413dPRxjPpbzMsTOPGBu8s2Fq743R&sz=w800",
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "165",
    "title": "2 Storey Terrace House",
    "address": "No. 551, Jalan Hijayu 1/19, Hijayu 1, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 576000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "561 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1DtxiHPjHw9-Gi87fBkpl_lVfgLWL4Eyl&sz=w800",
      "https://drive.google.com/thumbnail?id=1-Mkp_uz6aNHKQ73WGRDMbgB2MXxfEmu3&sz=w800",
      "https://drive.google.com/thumbnail?id=1sPowbW900Nar5MRcSD9tNOh4tjU2Uj6D&sz=w800"
    ]
  },
  {
    "id": "166",
    "title": "1 Storey Bungalow House",
    "address": "No. 328, Jalan Bukit Senawang Perdana 12, Taman Bukit Senawang Perdana, 71450 Seremban, Negeri Sembilan",
    "postcode": "71450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 468000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "251 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xtVyA6ukYJTTJBRoj35RH5RiN9VUa9r-&sz=w800"
    ]
  },
  {
    "id": "167",
    "title": "1 Storey Terrace House",
    "address": "Jalan Bungai Raya 2, Taman Bunga Raya, 71700 Mantin, Negeri Sembilan",
    "postcode": "71700",
    "state": "Negeri Sembilan",
    "area": "Mantin",
    "reservePrice": 295000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "210 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1_FJcVY6xQbAs1ksENQvxt6JiMnAMJVOt&sz=w800"
    ]
  },
  {
    "id": "168",
    "title": "1 Storey Terrace House",
    "address": "No. 19, Jalan Nilai Perdana 14, Taman Nilai Perdana, 71800 Seremban, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 260000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1c-tAh2LrPaf2jiNCDH-6rApHqhyPKnmy&sz=w800"
    ]
  },
  {
    "id": "169",
    "title": "2 Storey Terrace House",
    "address": "No. 98, Jalan Nusari Aman 8/4, Nusari Aman 3, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 520000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1S1LGIKQlHmZWhpUuoia6O98e-q0sX-zw&sz=w800",
      "https://drive.google.com/thumbnail?id=1xRp5EtHoOBkZcU9YmJu8kjYVos-b5lRB&sz=w800",
      "https://drive.google.com/thumbnail?id=1S1LvJLEvz0W0DQmfiG7UKxn-CjhBEamr&sz=w800"
    ]
  },
  {
    "id": "170",
    "title": "2 Storey Split Level Detached House",
    "address": "Jalan Rasah, Taman Bukit Rasah, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 480000,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "428 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1g20Ts0q0Ui7mhJ_Rn6XBSvXLCQPFn_qs&sz=w800"
    ]
  },
  {
    "id": "171",
    "title": "1 Storey Terrace House",
    "address": "No. 1530, Jalan Politeknik 29, Taman Politeknik, Batu Jalan Pantai, 71050 Port Dickson, Negeri Sembilan",
    "postcode": "71050",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 153090,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1ayIrqFMEx_0L830SyXJg8p45CCJu86GN&sz=w800"
    ]
  },
  {
    "id": "172",
    "title": "2 Storey Terrace House",
    "address": "No. 70, Jalan Irama Sendayan 2/1B, Taman Irama Sendayan, 71900 Labu, Negeri Sembilan",
    "postcode": "71900",
    "state": "Negeri Sembilan",
    "area": "Labu",
    "reservePrice": 500000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "071 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1lUxVjS25wEKl4j0CHgrYMDQoSG-MeNlB&sz=w800",
      "https://drive.google.com/thumbnail?id=1igNO6UBpOIVw1ZoS69xeFsBwkVjUkSlz&sz=w800",
      "https://drive.google.com/thumbnail?id=1RgFhNnJfIFM5wDcWcpqFKvK6-IWYAqpC&sz=w800",
      "https://drive.google.com/thumbnail?id=1vQTymssqwriLFmG3OrqlcRh53lm1UI7h&sz=w800"
    ]
  },
  {
    "id": "173",
    "title": "2 Storey Terrace House",
    "address": "No. 39, Jalan Nada Alam 2/1, Taman Nada Alam, Batang Benar, 71700 Mantin, Negeri Sembilan",
    "postcode": "71700",
    "state": "Negeri Sembilan",
    "area": "Mantin",
    "reservePrice": 480000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "174",
    "title": "2 Storey Terrace House",
    "address": "Jalan Bukit Citra 8/2, Taman Bukit Citra, 71700 Mantin, Negeri Sembilan",
    "postcode": "71700",
    "state": "Negeri Sembilan",
    "area": "Mantin",
    "reservePrice": 423000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1uwizljoS-YXIUpqAQIHP029Ju_DtxZtb&sz=w800"
    ]
  },
  {
    "id": "175",
    "title": "2 Storey Terrace House",
    "address": "No. 101, Jalan Bukit Sarimban 1, Taman Bukit Sarimban, 70400 Seremban, Negeri Sembilan",
    "postcode": "70400",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 450000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=11pdzFefWMXrZaPyQFsPxvpT6zueWDTXp&sz=w800",
      "https://drive.google.com/thumbnail?id=1UV7JM2Hcs_RA8cRO1GnYMeeXhMbuGdZn&sz=w800",
      "https://drive.google.com/thumbnail?id=1CZrJwYExveVzGdXB1a20WuNomptOe-pj&sz=w800",
      "https://drive.google.com/thumbnail?id=1MdqhqLFkpDQw_FZFDS6LjJ-6hT8sgmU5&sz=w800"
    ]
  },
  {
    "id": "176",
    "title": "1 Storey Terrace House",
    "address": "No. 223, Jalan Ekar 1/5, Bandar Ekar, 71200 Rantau, Negeri Sembilan",
    "postcode": "71200",
    "state": "Negeri Sembilan",
    "area": "Rantau",
    "reservePrice": 153900,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "206 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1ZdVhvCUiOQ83VngigICZpwGsg30uuIwk&sz=w800"
    ]
  },
  {
    "id": "177",
    "title": "1 Storey Terrace House",
    "address": "No. 215, Jalan Springhill 1/26, Bandar Springhill, 71010 Port Dickson, Negeri Sembilan",
    "postcode": "71010",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 171000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1iX33VkUNNWAgg2Ctl3xhhMEQwWB11bFS&sz=w800"
    ]
  },
  {
    "id": "178",
    "title": "2 Storey Terrace House",
    "address": "No. 141, Jalan Kayangan 6, Taman Kayangan, 71700 Mantin, Negeri Sembilan",
    "postcode": "71700",
    "state": "Negeri Sembilan",
    "area": "Mantin",
    "reservePrice": 389000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "722 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1ZS41vc3sjHeCDtJTthddYRDnayRRrt3s&sz=w800"
    ]
  },
  {
    "id": "179",
    "title": "2 Storey Terrace House",
    "address": "No. 49, Jalan TAN 5/10, Taman Tuanku Ampuan Najihah, Sungai Gadut, 71450 Seremban, Negeri Sembilan",
    "postcode": "71450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 148500,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "044 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "180",
    "title": "2 Storey Terrace House",
    "address": "Jalan Sena 1/8, Taman Sena, Sungai Gadut, 71450 Seremban, Negeri Sembilan",
    "postcode": "71450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 450000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "982 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "181",
    "title": "Terrace House",
    "address": "Jalan Shorea Hartamas 8, Taman Shorea Hartamas, 71050 Port Dickson, Negeri Sembilan",
    "postcode": "71050",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 500000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JIdDQAT4KRxgu8VUHP75-5afb53jgzdN&sz=w800"
    ]
  },
  {
    "id": "182",
    "title": "Terrace House",
    "address": "Jalan BIL 20, Taman Indera Bayu Lukut, 71010 Port Dickson, Negeri Sembilan",
    "postcode": "71010",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 285000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1NzpokR03hf6GtJzT9qg1JXRIIEsGfG-Y&sz=w800",
      "https://drive.google.com/thumbnail?id=1TtdFr94rJc4mdli1Wt7YH_5IzeMu3_0g&sz=w800",
      "https://drive.google.com/thumbnail?id=1gkZdKabziqlIzawraO6beVPwcUJa_d3f&sz=w800"
    ]
  },
  {
    "id": "183",
    "title": "Terrace House",
    "address": "Jalan Suriaman 3/4, Suriaman 3, Bandar Sri Sendayan, 71950, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Negeri Sembilan",
    "reservePrice": 510000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1tLpQnqQjR0AX-lgYHl8F-rhv_E7DyVFt&sz=w800",
      "https://drive.google.com/thumbnail?id=1-a2q43KaD5drsWu587ZhonHMmPlqS2Rz&sz=w800",
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "184",
    "title": "Terrace House",
    "address": "Jalan Springhill 7/8, Residence 7, Bandar Springhill, 71010, Negeri Sembilan",
    "postcode": "71010",
    "state": "Negeri Sembilan",
    "area": "Negeri Sembilan",
    "reservePrice": 500000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "798 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "185",
    "title": "Terrace House",
    "address": "Jalan Kekwa 1, Taman Kekwa, 70400, Negeri Sembilan",
    "postcode": "70400",
    "state": "Negeri Sembilan",
    "area": "Negeri Sembilan",
    "reservePrice": 330000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "119 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "186",
    "title": "Terrace House",
    "address": "Jalan Bukit Senawang Perdana 49, Taman Bukit Senawang Perdana, 71450, Negeri Sembilan",
    "postcode": "71450",
    "state": "Negeri Sembilan",
    "area": "Negeri Sembilan",
    "reservePrice": 430000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "420 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xtVyA6ukYJTTJBRoj35RH5RiN9VUa9r-&sz=w800"
    ]
  },
  {
    "id": "187",
    "title": "2 Storey Terrace House",
    "address": "No. 93, Jalan Bukit Chemara 2, Taman Bukit Chemara, 70200 Seremban, Negeri Sembilan",
    "postcode": "70200",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 828000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "891 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "188",
    "title": "Terrace House",
    "address": "Jalan BIL 44, Taman Indera Bayu Lukut, 71010 Port Dickson, Negeri Sembilan",
    "postcode": "71010",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 330000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1NzpokR03hf6GtJzT9qg1JXRIIEsGfG-Y&sz=w800",
      "https://drive.google.com/thumbnail?id=1TtdFr94rJc4mdli1Wt7YH_5IzeMu3_0g&sz=w800",
      "https://drive.google.com/thumbnail?id=1gkZdKabziqlIzawraO6beVPwcUJa_d3f&sz=w800"
    ]
  },
  {
    "id": "189",
    "title": "2 Storey Terrace House",
    "address": "Jalan S2 G16, Garden Avenue, Seremban 2, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 420000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "456 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "190",
    "title": "2 Storey Terrace House",
    "address": "No. 507, Lorong Iringan Bayu 41/6, Precinct 8, Taman Iringan Bayu, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 328050,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "410 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1bNqnqXq_7mnG9qQeo1ZlyrXtz5hLCPFG&sz=w800",
      "https://drive.google.com/thumbnail?id=1YRQpJ-xxWr3y_uPDdpt7RH90NqQws_fo&sz=w800",
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "191",
    "title": "2 Storey Bungalow",
    "address": "No. 572, Jalan Bukit Senawang Perdana 22, Taman Bukit Senawang Perdana, 71450 Seremban, Negeri Sembilan",
    "postcode": "71450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 675000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "823 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1owzwKvwzLNvAEFNSHril1YcvaCsuz6ml&sz=w800",
      "https://drive.google.com/thumbnail?id=1Cuk-QId0ZyR5EfUYigCAdPnnKuxYEq5A&sz=w800",
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "192",
    "title": "1 Storey Terrace House",
    "address": "No. 131, Jalan Indah Jaya 3, Taman Indah Jaya Lukut, 71010, Port Dickson, Negeri Sembilan",
    "postcode": "71010",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 250000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "647 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "193",
    "title": "2 Storey Terrace House",
    "address": "Jalan Bukit Citra 2/8, Taman Bukit Citra, 71700 Mantin, Negeri Sembilan",
    "postcode": "71700",
    "state": "Negeri Sembilan",
    "area": "Mantin",
    "reservePrice": 354400,
    "auctionDate": "7 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "765 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1uwizljoS-YXIUpqAQIHP029Ju_DtxZtb&sz=w800"
    ]
  },
  {
    "id": "194",
    "title": "2 Storey Terrace House",
    "address": "Taman Moksum, Jalan Rasah, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 255150,
    "auctionDate": "7 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "600 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "195",
    "title": "2 Storey Terrace House",
    "address": "No. 240, Jalan Laman Bakawali B/8, Laman Bakawali, Kota Seriemas, 71800 Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 336000,
    "auctionDate": "7 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1ArWjVwEhxeLZmWj7TDUapJRQMNh3KrfX&sz=w800"
    ]
  },
  {
    "id": "196",
    "title": "Agricultural Land erected with 3 Storey Individually Designed Detached House",
    "address": "No. 28, Persiaran Alamanda, Planters' Haven, 71900 Nilai, Negeri Sembilan",
    "postcode": "71900",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 4050000,
    "auctionDate": "7 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "197",
    "title": "1 Storey Terrace House",
    "address": "Jalan Belida 17, Taman Bukit Chedang Fasa 2, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 280000,
    "auctionDate": "7 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "431 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "198",
    "title": "Terrace House",
    "address": "Jalan BIL 43, Taman Indera Bayu Lukut, 71010 Port Dickson, Negeri Sembilan",
    "postcode": "71010",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 340000,
    "auctionDate": "7 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1NzpokR03hf6GtJzT9qg1JXRIIEsGfG-Y&sz=w800",
      "https://drive.google.com/thumbnail?id=1TtdFr94rJc4mdli1Wt7YH_5IzeMu3_0g&sz=w800",
      "https://drive.google.com/thumbnail?id=1gkZdKabziqlIzawraO6beVPwcUJa_d3f&sz=w800"
    ]
  },
  {
    "id": "199",
    "title": "Residential Land",
    "address": "Lot 23148, Persiaran Kuliah 1, College Heights Garden Resort, 71700 Mantin, Negeri Sembilan",
    "postcode": "23148",
    "state": "Negeri Sembilan",
    "area": "Mantin",
    "reservePrice": 220000,
    "auctionDate": "7 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "759 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1YD17FyF6GGVZ8CmuMM6ex38bYOdnrqSI&sz=w800"
    ]
  },
  {
    "id": "200",
    "title": "2 Storey Terrace House",
    "address": "No. 1702, Jalan Hijayu 3/62, Hijayu 3, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 427500,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "765 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1_zvrt7sE25a11pxxY_uxzKX4eGCsoH5v&sz=w800",
      "https://drive.google.com/thumbnail?id=1KIWlLy3LqkWDgTQNB23PyT1GQSo2rDaF&sz=w800",
      "https://drive.google.com/thumbnail?id=1w3w8PJe7gzK0dFbDYy8XHBwB5jpFeK84&sz=w800",
      "https://drive.google.com/thumbnail?id=1K8US_DAU4EBYwsH9tJUYs89QB4ymDpI0&sz=w800",
      "https://drive.google.com/thumbnail?id=1d5jk0p9sWEn0HQB6O2TzEW2NiBFP4ado&sz=w800"
    ]
  },
  {
    "id": "201",
    "title": "1 Storey Semi Detached House",
    "address": "No. 205, Jalan Bukit Jed 7/2, Taman Seri Bukit Jed, 70200 Seremban, Negeri Sembilan",
    "postcode": "70200",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 511000,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "423 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1exzRKIsYcnaADRGSwN62JHso9lQaNxiR&sz=w800"
    ]
  },
  {
    "id": "202",
    "title": "1 Storey Detached House",
    "address": "No. 42, Jalan Tasik Senangin 7/15, Bandar Tasik Senangin, 71750 Lenggeng, Negeri Sembilan",
    "postcode": "71750",
    "state": "Negeri Sembilan",
    "area": "Lenggeng",
    "reservePrice": 387000,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "004 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1nhM7zphX0EDYJFO8UzKHHxWvVT-1ie63&sz=w800"
    ]
  },
  {
    "id": "203",
    "title": "2 Storey Bungalow House",
    "address": "Jalan SBJ 4, Mon't Jade, 70200 Seremban, Negeri Sembilan",
    "postcode": "70200",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 1100000,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "900 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1exzRKIsYcnaADRGSwN62JHso9lQaNxiR&sz=w800"
    ]
  },
  {
    "id": "204",
    "title": "Apartment",
    "address": "PD Tiara Bay Apartments (Formerly Tiara Beach Resort), 71250 Pasir Panjang, Port Dickson, Negeri Sembilan",
    "postcode": "71250",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 50000,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=18Ia_r1ryFB19mCz5DKzn3JEug3LuX00-&sz=w800",
      "https://drive.google.com/thumbnail?id=1ukGrTZoQIqpeSkMMRXdey2y1WC5IqCpo&sz=w800",
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "205",
    "title": "2 Storey Terrace House",
    "address": "No. 620, Lorong Iringan Bayu 35/9, Precint 3, Taman Iringan Bayu, Mambau, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 400950,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "604 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1bNqnqXq_7mnG9qQeo1ZlyrXtz5hLCPFG&sz=w800",
      "https://drive.google.com/thumbnail?id=1YRQpJ-xxWr3y_uPDdpt7RH90NqQws_fo&sz=w800",
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "206",
    "title": "2 Storey Terrace House",
    "address": "No. 499, Lorong Iringan Bayu 41/6, Precint 8, Taman Iringan Bayu, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 364500,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "880 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1bNqnqXq_7mnG9qQeo1ZlyrXtz5hLCPFG&sz=w800",
      "https://drive.google.com/thumbnail?id=1YRQpJ-xxWr3y_uPDdpt7RH90NqQws_fo&sz=w800",
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "207",
    "title": "2 Storey Cluster House",
    "address": "No. 458, Lorong S2 K13/1, Vision Homes, Seremban 2, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 470000,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "778 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "208",
    "title": "1 Storey Terrace House",
    "address": "Lorong TSR 12, Taman Seri Rembau, Fasa 1, 71300 Rembau, Negeri Sembilan",
    "postcode": "71300",
    "state": "Negeri Sembilan",
    "area": "Rembau",
    "reservePrice": 230000,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "209",
    "title": "1 Storey Semi Detached House",
    "address": "Jalan Nusari Bayu 3/4, Nusari Bayu 1, Bandar Sri Sendayan, 71950 Seremban, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 328050,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "197 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1rQeJvRhC0kp-Iry4PlvbqwNoedZLnS0V&sz=w800"
    ]
  },
  {
    "id": "210",
    "title": "2 Storey Terrace House",
    "address": "Jalan Suriaman 1/1, Suriaman 1, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 600000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1FeyWTl2pOdVwzmpLNhYn-Po9ojEyDwYi&sz=w800"
    ]
  },
  {
    "id": "211",
    "title": "Terrace House",
    "address": "Jalan Tiara Sendayan 14/11, Taman Tiara Sendayan, 71900 Labu, Negeri Sembilan",
    "postcode": "71900",
    "state": "Negeri Sembilan",
    "area": "Labu",
    "reservePrice": 480000,
    "auctionDate": "21 Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1dWvAsqXzRvOX2zKHvWmLszrByHvTgHuP&sz=w800",
      "https://drive.google.com/thumbnail?id=1lVEv20L3kzoeM4jMZURlWzs8cLIue4WV&sz=w800",
      "https://drive.google.com/thumbnail?id=1d6GT_sfmTSyzP2XRqrJ5QQYpdF7CJK3Y&sz=w800",
      "https://drive.google.com/thumbnail?id=119gdkLu5-aEz7kIoFelNL9q0A0KTJy6C&sz=w800"
    ]
  },
  {
    "id": "212",
    "title": "Flat",
    "address": "Unit No. 1-5-2, Halaman Paya Terubong 2, Mukim 13, 11900, Bayan Lepas, Penang",
    "postcode": "11900",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 350000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "656 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "213",
    "title": "1 Storey Semi Detached House",
    "address": "No. 8, Jalan Buah Limau, Paya Terubong, 11060, Penang",
    "postcode": "11060",
    "state": "Penang",
    "area": "Penang",
    "reservePrice": 675000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "667 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "214",
    "title": "2.5 Storey Cluster House",
    "address": "No. 13, Lorong Sejati 3/4, Taman Sejati III, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 426465,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "669 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "215",
    "title": "1 Storey Terrace House",
    "address": "No. 26, Lorong Lagenda 72, Seksyen 3, Bandar Lagenda Teluk Intan, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 160000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "216",
    "title": "1 Storey Terrace House",
    "address": "No. 378, Persiaran Yakin Mesra 17, Taman Yakin Mesra, 31100 Sungai Siput (U), Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput (U)",
    "reservePrice": 121500,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "217",
    "title": "1 Storey Terrace House",
    "address": "No. 871, Jalan Residen 4/14, Residen 4, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 162000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "218",
    "title": "1 Storey Terrace House",
    "address": "Rumah Murah Fasa II, 31600 Gopeng, Perak",
    "postcode": "31600",
    "state": "Perak",
    "area": "Gopeng",
    "reservePrice": 75000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "219",
    "title": "Condominium",
    "address": "Unit No. B-6-3, Block B, Jalan Meru Idaman 1, Taman Meru Idaman, 30020 Ipoh, Perak",
    "postcode": "30020",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 226800,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "818 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "220",
    "title": "2 Storey Semi Detached House",
    "address": "Lengkok Wah Keong, Taman Wah Keong, 31400 Ipoh, Perak",
    "postcode": "31400",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 350000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "000 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "221",
    "title": "2 Storey Shop Office",
    "address": "No. 28 & 28A, Jalan Teknologi 2, Kawasan Perindustrian Gopeng 2, 31600 Gopeng, Perak",
    "postcode": "31600",
    "state": "Perak",
    "area": "Gopeng",
    "reservePrice": 342000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "647 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "222",
    "title": "2 Storey Semi Detached House",
    "address": "No. 20, Lorong Singa Baru 2/2, Taman Singa Baru II, Kampung Koh, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 600000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "893 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "223",
    "title": "2 Storey Terrace House",
    "address": "No. 219, Jalan Sejati Suria 9, Taman Sejati Suria, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 295000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "700 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "224",
    "title": "Terrace House",
    "address": "Jalan 10/2, Taman Maju Jaya, 35500 Bidor, Perak",
    "postcode": "35500",
    "state": "Perak",
    "area": "Bidor",
    "reservePrice": 320000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "816 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "225",
    "title": "1 Storey Terrace House",
    "address": "Lebuh Tembok 6, Taman Permai, 30010 Ipoh, Perak",
    "postcode": "30010",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 220000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "760 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "226",
    "title": "Flat",
    "address": "Unit No. 22B, Tingkat 2, Jalan Iskandar, Taman Pelangi, 31900 Kampar, Perak",
    "postcode": "31900",
    "state": "Perak",
    "area": "Kampar",
    "reservePrice": 30780,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "022 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "227",
    "title": "1 Storey Detached House",
    "address": "No. 11, Kampung Tersusun, 31600 Gopeng, Perak",
    "postcode": "31600",
    "state": "Perak",
    "area": "Gopeng",
    "reservePrice": 250000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "146 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "228",
    "title": "1 Storey Terrace House",
    "address": "No. 497, Jalan Residen 1/8, Residen 1, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 220000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "229",
    "title": "Terrace House",
    "address": "No. 6, Laluan Mewah Indah 16, Jalan Pusing, Taman Mewah Indah, 31000 Batu Gajah, Perak",
    "postcode": "31000",
    "state": "Perak",
    "area": "Batu Gajah",
    "reservePrice": 180000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "099 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "230",
    "title": "1 Storey Terrace House",
    "address": "No. 19, Jalan Mahkota Kampar 8, Taman Mahkota Kampar, 31900 Kampar, Perak",
    "postcode": "31900",
    "state": "Perak",
    "area": "Kampar",
    "reservePrice": 234000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "231",
    "title": "1 Storey Semi Detached Factory",
    "address": "No. 21, Laluan Industri Lahat 6, Kawasan Perindustrian Rima, 31500 Lahat, Perak",
    "postcode": "31500",
    "state": "Perak",
    "area": "Lahat",
    "reservePrice": 650000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "502 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "232",
    "title": "1 Storey Terrace House",
    "address": "No. 1023, Laluan Kledang 4/4, Taman Kledang, 31100 Sungai Siput (U), Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput (U)",
    "reservePrice": 165000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "099 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "233",
    "title": "1 Storey Terrace House",
    "address": "No. 952, Taman Kledang, 31100 Sungai Siput (U), Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput (U)",
    "reservePrice": 128000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "234",
    "title": "1 Storey Terrace House",
    "address": "No. 296, Jalan Taman Berkat, Taman Berkat, Jalan Kampung Dew, 34700 Simpang, Perak",
    "postcode": "34700",
    "state": "Perak",
    "area": "Simpang",
    "reservePrice": 144000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "235",
    "title": "1 Storey Terrace House",
    "address": "No. 1255, Jalan Residen 4/5, Residen 4, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 162000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "236",
    "title": "1 Storey Terrace House",
    "address": "No. 179, Lorong Lekir Indah 8, Taman Lekir Indah, 32020 Lekir, Perak",
    "postcode": "32020",
    "state": "Perak",
    "area": "Lekir",
    "reservePrice": 153000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "237",
    "title": "1 Storey Terrace House",
    "address": "No. 44, Lorong Lagenda 56, Seksyen 3, Bandar Lagenda Teluk Intan, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 144000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "238",
    "title": "1 Storey Terrace House",
    "address": "No. 59, Lorong Lagenda 71, Bandar Lagenda Teluk Intan, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 190000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "239",
    "title": "1 Storey Terrace House",
    "address": "No. 1, Lorong Lagenda 39, Seksyen 3, 36000 Bandar Lagenda Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Bandar Lagenda Teluk Intan",
    "reservePrice": 270000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "884 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "240",
    "title": "1 Storey Terrace House",
    "address": "No. 415, Laluan Kledang 5/2, Taman Kledang, 31100 Sungai Siput (U), Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput (U)",
    "reservePrice": 140000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "241",
    "title": "2 Storey Terrace House",
    "address": "No. 3, Lorong Permaipura Mesra 1, Taman Permaipura, 08100 Bedong, Kedah",
    "postcode": "08100",
    "state": "Kedah",
    "area": "Bedong",
    "reservePrice": 270000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "194 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "242",
    "title": "1 Storey Terrace House",
    "address": "No. 26, Jalan Bukit Puteri 1/11, Bandar Puteri Jaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 225000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "243",
    "title": "2 Storey Shop House",
    "address": "No. 37, Bandar Darul Aman, Tanah Merah, 06000 Jitra, Kedah",
    "postcode": "06000",
    "state": "Kedah",
    "area": "Jitra",
    "reservePrice": 324000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "540 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "244",
    "title": "2 Storey Terrace House",
    "address": "No. 1515, Jalan Bandar Puteri Jaya 2/28, Bandar Puteri Jaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 315000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "952 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "245",
    "title": "1 Storey Semi Detached House",
    "address": "No. 72, Jalan Jalai Jaya, Taman Jalai Jaya, 06200 Kepala Batas, Kedah",
    "postcode": "06200",
    "state": "Kedah",
    "area": "Kepala Batas",
    "reservePrice": 387000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "146 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "246",
    "title": "1 Storey Semi Detached House",
    "address": "No. 1 (Lot 1035), Kampung Kemunting Baru, Jalan Changloon, 06000 Kubang Pasu, Kedah",
    "postcode": "06000",
    "state": "Kedah",
    "area": "Kubang Pasu",
    "reservePrice": 342000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "132 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "247",
    "title": "1 Storey Terrace House",
    "address": "Jalan Yarra 8/6, Bandar Puteri Jaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 340000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "382 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "248",
    "title": "1 Storey Terrace House",
    "address": "No. 392, Lorong Jelutong 2/1, Taman Jelutong, 06010 Changlun, Kedah",
    "postcode": "06010",
    "state": "Kedah",
    "area": "Changlun",
    "reservePrice": 210000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "206 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "249",
    "title": "Terrace House",
    "address": "No. 159, Lorong Berlian 5/1, Taman Berlian, 09000 Kulim, Kedah",
    "postcode": "09000",
    "state": "Kedah",
    "area": "Kulim",
    "reservePrice": 207360,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "250",
    "title": "1 Storey Terrace House",
    "address": "No. 159-A, Jalan Bujang Utama 4, Taman Lembah Bujang Utama, 08100 Bedong, Kedah",
    "postcode": "08100",
    "state": "Kedah",
    "area": "Bedong",
    "reservePrice": 144000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "251",
    "title": "1 Storey Terrace House",
    "address": "No. 37, Lorong Cempaka 1, Taman Cempaka, 08010 Bukit Selambau, Kedah",
    "postcode": "08010",
    "state": "Kedah",
    "area": "Bukit Selambau",
    "reservePrice": 144000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "347 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "252",
    "title": "1 Storey Terrace House",
    "address": "No. 364, Jalan Yarra 5/13, Bandar Puteri Jaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 297000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "253",
    "title": "1 Storey Terrace House",
    "address": "Lorong Kucai 5, Taman Kucai, 09600 Lunas, Kedah",
    "postcode": "09600",
    "state": "Kedah",
    "area": "Lunas",
    "reservePrice": 170000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "254",
    "title": "1 Storey Terrace House",
    "address": "No. 1060, Jalan Kelisa Ria 6/17, Taman Kelisa Ria, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 320000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "230 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "255",
    "title": "1 Storey Terrace House",
    "address": "No. 52C, Jalan Lembah Bujang 8/2, Taman Lembah Bujang, 08400 Merbok, Kedah",
    "postcode": "08400",
    "state": "Kedah",
    "area": "Merbok",
    "reservePrice": 183708,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "300 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "256",
    "title": "1 Storey Terrace House",
    "address": "No. 1490, Jalan Mutiara 6/6, Taman Mutiara, 09700 Karangan, Kedah",
    "postcode": "09700",
    "state": "Kedah",
    "area": "Karangan",
    "reservePrice": 250000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "194 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "257",
    "title": "1 Storey Terrace House",
    "address": "No. 517, Jalan Damai 2/1, Taman Damai, 09400 Padang Serai, Kedah",
    "postcode": "09400",
    "state": "Kedah",
    "area": "Padang Serai",
    "reservePrice": 260000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "258",
    "title": "Apartment",
    "address": "Unit No. 1-04, Block A, Pangsa Ria (Pearl Tower), Lebuh Kampung Benggali, 12200 Butterworth, Penang",
    "postcode": "12200",
    "state": "Penang",
    "area": "Butterworth",
    "reservePrice": 124659,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "657 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "259",
    "title": "1 Storey Terrace Shop",
    "address": "No. 14, Jalan Fettes, 10470, Penang",
    "postcode": "10470",
    "state": "Penang",
    "area": "Penang",
    "reservePrice": 2560000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "136 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "260",
    "title": "Apartment",
    "address": "Unit No. 6-01, Pangsapuri Seri Pelangi, Jalan Usahaniaga 1, Taman Niaga Jaya, 14000 Bukit Mertajam, Penang",
    "postcode": "14000",
    "state": "Penang",
    "area": "Bukit Mertajam",
    "reservePrice": 300000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "216 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "261",
    "title": "Flat",
    "address": "Unit No. 19-8-5, Taman Seri Sari, Hilir Paya Terubong 1, Mukim 13, 11900 Bayan Lepas, Penang",
    "postcode": "11900",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 216000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "700 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "262",
    "title": "Apartment",
    "address": "Unit No. 15-07, Blok D, Kondominium Mutiara, Jalan Perda Barat, Bandar Perda, 14000 Bukit Mertajam, Penang",
    "postcode": "14000",
    "state": "Penang",
    "area": "Bukit Mertajam",
    "reservePrice": 216000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "700 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "263",
    "title": "3 Storey Terrace House",
    "address": "No. 6, Tingkat Sungai Rusa 6, Rena Park, 11010 Balik Pulau, Penang",
    "postcode": "11010",
    "state": "Penang",
    "area": "Balik Pulau",
    "reservePrice": 505197,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "668 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "264",
    "title": "Flat",
    "address": "Taman Terubong Jaya, Tingkat Paya Terubong 3, 11060, Penang",
    "postcode": "11060",
    "state": "Penang",
    "area": "Penang",
    "reservePrice": 120000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "560 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "265",
    "title": "2 Storey Terrace House",
    "address": "No. 70, Lorong Tasek Palma 1, Taman Tasek Palma, 14100 Simpang Ampat, Penang",
    "postcode": "14100",
    "state": "Penang",
    "area": "Simpang Ampat",
    "reservePrice": 600000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "163 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "266",
    "title": "1 Storey Detached House",
    "address": "No. 21, Lorong Senangin 11, Taman Senangin, 13600 Perai, Penang",
    "postcode": "13600",
    "state": "Penang",
    "area": "Perai",
    "reservePrice": 292000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "780 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "267",
    "title": "Apartment",
    "address": "Unit No. 18-04- 12A, Halaman Tembaga, Menara Greenview, 11600 Jelutong, Penang",
    "postcode": "11600",
    "state": "Penang",
    "area": "Jelutong",
    "reservePrice": 500000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "238 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "268",
    "title": "3 Storey Bungalow",
    "address": "No. 2, Jalan Brother James, 10350 Georgetown, Penang",
    "postcode": "10350",
    "state": "Penang",
    "area": "Georgetown",
    "reservePrice": 3600000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "370 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "269",
    "title": "3 Storey Terrace House",
    "address": "No. 42A, Jalan Nuri 6, Setia Pulau Mutiara, 11900 Bayan Lepas, Penang",
    "postcode": "11900",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 925000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "373 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "270",
    "title": "Flat",
    "address": "Unit No. 1D-15-08, Jalan Merbah, Desa Bayan/Mukim 12, 11900 Bayan lepas, Penang",
    "postcode": "11900",
    "state": "Penang",
    "area": "Bayan lepas",
    "reservePrice": 290000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "710 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "271",
    "title": "Flat",
    "address": "Unit No. C-1-11, Pangsapuri Nagasari, Lorong Nagasari 20, Taman Nagasari, 13600 Perai, Penang",
    "postcode": "13600",
    "state": "Penang",
    "area": "Perai",
    "reservePrice": 100000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "657 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "272",
    "title": "Apartment",
    "address": "Unit No. B-26-02, Block B, Residensi Pauh Permai, Jalan Pauh Permai, 13500 Permatang Pauh, Penang",
    "postcode": "13500",
    "state": "Penang",
    "area": "Permatang Pauh",
    "reservePrice": 300000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "893 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "273",
    "title": "Condominium",
    "address": "Unit No. 22-08, Kondominium Evoke Pauh Jaya, Lorong Pauh Jaya 1/1, 13500 Permatang Pauh, Penang",
    "postcode": "13500",
    "state": "Penang",
    "area": "Permatang Pauh",
    "reservePrice": 450000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "141 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "274",
    "title": "2 Storey Terrace House",
    "address": "No. 3-E, Jalan Seri Bendera, Seri Bendera Condo Villa, 11500 Ayer Itam, Penang",
    "postcode": "11500",
    "state": "Penang",
    "area": "Ayer Itam",
    "reservePrice": 1000000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "044 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "275",
    "title": "Apartment",
    "address": "Unit No. A-45-11, Pangsapuri Vivo, Persiaran Cassia Barat 9, Bandar Cassia, 14110 Simpang Ampat, Penang",
    "postcode": "14110",
    "state": "Penang",
    "area": "Simpang Ampat",
    "reservePrice": 375000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "730 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "276",
    "title": "Service Apartment",
    "address": "Unit No. B-19-03A, Pangsapuri Servis Aston Acacia, Persiaran Aston Indah, 14000 Bukit Mertajam, Penang",
    "postcode": "14000",
    "state": "Penang",
    "area": "Bukit Mertajam",
    "reservePrice": 360000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "883 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "277",
    "title": "Apartment",
    "address": "Unit No. B-05-06, Pangsapuri Vivo, Persiaran Cassia Barat 9, Bandar Cassia, 14110 Simpang Ampat, Penang",
    "postcode": "14110",
    "state": "Penang",
    "area": "Simpang Ampat",
    "reservePrice": 390000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "830 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "278",
    "title": "Town House",
    "address": "Unit No. 20-2, Block 20, Lorong Makmur 3, Taman Kampar Makmur (The Meadow Park), Off Persiaran Agacia 1, 31910 Kampar, Perak",
    "postcode": "31910",
    "state": "Perak",
    "area": "Kampar",
    "reservePrice": 150000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "087 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "279",
    "title": "Agricultural Land with Development Potential and Zoned for Residential Used",
    "address": "Lot 2924, Kampung Serdang, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 1200000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "280",
    "title": "1.5 Storey Terrace House",
    "address": "No. 299, Taman Bukit Maju, 32200 Lumut, Perak",
    "postcode": "32200",
    "state": "Perak",
    "area": "Lumut",
    "reservePrice": 160000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "281",
    "title": "2 Storey Shop Office",
    "address": "Unit No. 45 & 45A, Jalan Jelapang 5, Pusat Komersial Jelapang, 30020 Ipoh, Perak",
    "postcode": "30020",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 360000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "900 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "282",
    "title": "2 Storey Terrace House",
    "address": "No. 1107, Jalan Emas, Taman Bandar Baru, 31900 Kampar, Perak",
    "postcode": "31900",
    "state": "Perak",
    "area": "Kampar",
    "reservePrice": 148500,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "904 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "283",
    "title": "1 Storey Terrace House",
    "address": "No. 368, Jalan RB 9, Residensi Bidoria, 35500 Bidor, Perak",
    "postcode": "35500",
    "state": "Perak",
    "area": "Bidor",
    "reservePrice": 288000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "814 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "284",
    "title": "1 Storey Terrace House",
    "address": "No. 39, Laluan Sri Kuang 21, Desa Chemor Sejahtera, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 234000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "285",
    "title": "1 Storey Terrace House",
    "address": "No. 23, Block C, Rancangan Perumahan Awam 1, RPA 1, Jalan Siputeh, 30200 Pusing, Perak",
    "postcode": "30200",
    "state": "Perak",
    "area": "Pusing",
    "reservePrice": 54000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "034 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "286",
    "title": "Condominium",
    "address": "Unit No. A-7-3, Jalan Medan Ipoh 1H, Kediaman D'Festivo, 31400 Ipoh, Perak",
    "postcode": "31400",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 500000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "259 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "287",
    "title": "1 Storey Terrace House",
    "address": "No. 44, Laluan Permai 2, Taman Bemban Permai, 31000 Batu Gajah, Perak",
    "postcode": "31000",
    "state": "Perak",
    "area": "Batu Gajah",
    "reservePrice": 180000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "760 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "288",
    "title": "1 Storey Terrace House",
    "address": "No. 15, Persiaran Perpaduan Utara 3, Taman Bercham Jaya, 31150 Ulu Kinta, Perak",
    "postcode": "31150",
    "state": "Perak",
    "area": "Ulu Kinta",
    "reservePrice": 240000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "475 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "289",
    "title": "3 Storey Shop Office",
    "address": "Unit No. 162 & 162A & 162B, Jalan Sultan Nazrin Shah, 31350 Ipoh, Perak",
    "postcode": "31350",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 800000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "755 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "290",
    "title": "2 Storey Terrace House",
    "address": "No. 58, Persiaran Cempaka Sari 9, Taman Cempaka, 31400 Ipoh, Perak",
    "postcode": "31400",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 135000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "064 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "291",
    "title": "1 Storey Terrace House",
    "address": "No. 1381, Jalan Residen 4/18, Residen 4, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 220000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "900 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "292",
    "title": "1 Storey Terrace Dwelling House",
    "address": "PT. 1457, Batu 12, Taman Orkid, 36020 Teluk Intan, Perak",
    "postcode": "36020",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 60000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "100 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "293",
    "title": "1 Storey Terrace House",
    "address": "No. 8, Jalan Mahkota Kampar 3, Taman Mahkota Kampar, 31900 Kampar, Perak",
    "postcode": "31900",
    "state": "Perak",
    "area": "Kampar",
    "reservePrice": 210000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "294",
    "title": "Vacant Residential Land",
    "address": "Lot 138761, Jalan Raja Udang, Taman Anggerik, 31000 Batu Gajah, Perak",
    "postcode": "31000",
    "state": "Perak",
    "area": "Batu Gajah",
    "reservePrice": 94770,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "716 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "295",
    "title": "2 Storey Terrace House",
    "address": "No. 27, Laluan Tasek Timur 16A, Gerbang Bercham Selamat, 31400 Ipoh, Perak",
    "postcode": "31400",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 300000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "296",
    "title": "1 Storey Terrace House",
    "address": "No. 29, Laluan Puspa Indah 19, Taman Puspa Indah, 31550 Pusing, Perak",
    "postcode": "31550",
    "state": "Perak",
    "area": "Pusing",
    "reservePrice": 200000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "297",
    "title": "1 Storey Terrace House",
    "address": "No. 74, Klebang Prima 1, Medan Klebang Prima, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 170000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "298",
    "title": "1 Storey Terrace House",
    "address": "No. 7, Lorong Bakti 8, Taman Desa Bakti, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 138000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "299",
    "title": "1 Storey Terrace House",
    "address": "No. 9, Hala Taman Meru 3, Taman Meru 2B, 30020 Ipoh, Perak",
    "postcode": "30020",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 180000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "300",
    "title": "2 Storey Shop Office",
    "address": "No. 16 & 16A, Jalan PP 7, Bandar Universiti, 32610 Seri Iskandar, Perak",
    "postcode": "32610",
    "state": "Perak",
    "area": "Seri Iskandar",
    "reservePrice": 202500,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "647 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "301",
    "title": "Terrace House",
    "address": "No. 8, Laluan Mewah Indah 16, Jalan Pusing, Taman Mewah Indah, 31000 Batu Gajah, Perak",
    "postcode": "31000",
    "state": "Perak",
    "area": "Batu Gajah",
    "reservePrice": 150000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "099 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "302",
    "title": "1 Storey Terrace House",
    "address": "No. 44, Jalan Gelung Permai 2, Taman Gelung Permai, 32600 Gelung Pepuyu, Perak",
    "postcode": "32600",
    "state": "Perak",
    "area": "Gelung Pepuyu",
    "reservePrice": 207000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "303",
    "title": "1 Storey Semi Detached House",
    "address": "No. 116, Jalan Pasir Puteh, Taman SPPK, 31650 Ipoh, Perak",
    "postcode": "31650",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 486000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "201 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "304",
    "title": "1 Storey Terrace House",
    "address": "No. 230, Persiaran Yakin Mesra 12, Taman Yakin Mesra, Sungai Buloh, 31100 Sungai Siput (U), Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput (U)",
    "reservePrice": 160000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "194 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "305",
    "title": "2 Storey Terrace House",
    "address": "No. 123, Taman Laksamana, Off Jalan Laksamana, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 288000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "254 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "306",
    "title": "2 Storey Terrace House",
    "address": "No. 104, Jalan Taman Meru 1, Taman Meru 1, 30020 Ipoh, Perak",
    "postcode": "30020",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 315000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "307",
    "title": "1 Storey Terrace House",
    "address": "No. 386, Jalan Tropika 3, Residensi Lagenda Tropika, 35350 Temoh, Perak",
    "postcode": "35350",
    "state": "Perak",
    "area": "Temoh",
    "reservePrice": 180000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "308",
    "title": "1 Storey Cluster Semi Detached House",
    "address": "No. 50, Lorong Lagenda 20, Seksyen 1, Bandar Lagenda Teluk Intan, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 250000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "701 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "309",
    "title": "1 Storey Terrace House",
    "address": "No. 84, Lorong Lagenda 57, Seksyen 3, Bandar Lagenda Teluk Intan, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 162000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "310",
    "title": "1 Storey Terrace House",
    "address": "No. 31, Jalan Putra Mutiara 3, Kampar Putra, 31900 Kampar, Perak",
    "postcode": "31900",
    "state": "Perak",
    "area": "Kampar",
    "reservePrice": 135000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "311",
    "title": "1 Storey Terrace House",
    "address": "No.163, Persiaran Muhibbah Jaya 6, Taman Muhibbah Jaya, 31100, Sungai Siput, Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput",
    "reservePrice": 180000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "312",
    "title": "2 Storey Terrace House",
    "address": "No. 13, Persiaran Bemban Raya 2A, Taman Bemban Raya, 31000 Batu Gajah, Perak",
    "postcode": "31000",
    "state": "Perak",
    "area": "Batu Gajah",
    "reservePrice": 300000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "227 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "313",
    "title": "1 Storey Terrace House",
    "address": "No. 17, Laluan Desa Tasek 1, Desa Tasek Bakti, 31400 Ipoh, Perak",
    "postcode": "31400",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 184680,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "378 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "314",
    "title": "1 Storey Terrace House",
    "address": "No. 23, Jalan Chenderong 1, Taman Chenderong Jaya, 31000 Batu Gajah, Perak",
    "postcode": "31000",
    "state": "Perak",
    "area": "Batu Gajah",
    "reservePrice": 90000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "315",
    "title": "1 Storey Terrace House",
    "address": "No. 4, Laluan Wawasan 8, Taman Tronoh Wawasan, 31750 Tronoh, Perak",
    "postcode": "31750",
    "state": "Perak",
    "area": "Tronoh",
    "reservePrice": 126000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "316",
    "title": "2.5 Storey Semi Detached House",
    "address": "No. 12, Hala Bandar Baru Tambun 19, Taman Ipoh Perdana, 31400 Ipoh, Perak",
    "postcode": "31400",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 518400,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "197 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "317",
    "title": "2 Storey Terrace House",
    "address": "No. 77, Persiaran Sengat Baru 12, Taman Bersatu, 31300 Kampung Kepayang, Perak",
    "postcode": "31300",
    "state": "Perak",
    "area": "Kampung Kepayang",
    "reservePrice": 180000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "958 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "318",
    "title": "1 Storey Terrace House",
    "address": "No. 601, Laluan Kledang 5/7, Taman Kledang, 31100 Sungai Siput (U), Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput (U)",
    "reservePrice": 110000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "732 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "319",
    "title": "1 Storey Semi Detached Cluster House",
    "address": "No. 166, Persiaran Presint 1/3, Presint 1, Bandar Baru Segari, 32200 Lumut, Perak",
    "postcode": "32200",
    "state": "Perak",
    "area": "Lumut",
    "reservePrice": 218700,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "099 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "320",
    "title": "1 Storey Detached House",
    "address": "No. 114, Kampung Tun Sambanthan, 32400 Ayer Tawar, Perak",
    "postcode": "32400",
    "state": "Perak",
    "area": "Ayer Tawar",
    "reservePrice": 260000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "903 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "321",
    "title": "Town House",
    "address": "Unit No. 65-3, Blok 65, Aras 3, Persiaran Residensi, Bandar Agacia, 31910 Kampar, Perak",
    "postcode": "31910",
    "state": "Perak",
    "area": "Kampar",
    "reservePrice": 130000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "098 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "322",
    "title": "1 Storey Terrace House",
    "address": "No. 80, Taman Desa 2/4, Taman Desa Dua, Simpang Dua, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 80000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "323",
    "title": "1 Storey Terrace House",
    "address": "No. 16, Lorong Lagenda 67, Seksyen 3, Bandar Lagenda Teluk Intan, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 145800,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "324",
    "title": "1 Storey Terrace House",
    "address": "No. 594, Jalan Residen 3/16, Residen 3, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 160380,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "325",
    "title": "1 Storey Linked House",
    "address": "No. 758, Persiaran Tun Sambanthan 6, Taman Tun Sambanthan, 31100 Sungai Siput (U), Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput (U)",
    "reservePrice": 104000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "050 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "326",
    "title": "2 Storey Terrace House",
    "address": "No. 88, Jalan Lapangan Siber 15, Bandar Cyber, 31350 Ipoh, Perak",
    "postcode": "31350",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 430000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "540 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "327",
    "title": "1 Storey Terrace House",
    "address": "Jalan Angsana Sari 7, Taman Angsana Sari, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 250000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "000 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "328",
    "title": "1 Storey Terrace House",
    "address": "Jalan Halba 6, Taman Simpang Perdana, Simpang Empat, 06650 Simpang Empat, Kedah",
    "postcode": "06650",
    "state": "Kedah",
    "area": "Simpang Empat",
    "reservePrice": 280000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "340 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "329",
    "title": "Terrace House",
    "address": "No. 1204, Lorong Ria Mesra 38, Taman Ria Mesra II, 08300 Gurun, Kedah",
    "postcode": "08300",
    "state": "Kedah",
    "area": "Gurun",
    "reservePrice": 137700,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "200 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "330",
    "title": "1 Storey Terrace House",
    "address": "No. 107, Jalan Pelangi 3, Taman Pelangi, 06300 Kuala Nerang, Kedah",
    "postcode": "06300",
    "state": "Kedah",
    "area": "Kuala Nerang",
    "reservePrice": 240000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "888 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "331",
    "title": "2 Storey Semi Detached House",
    "address": "No. 39, Taman Aishah, Jalan Langgar, 06500 Langgar, Kedah",
    "postcode": "06500",
    "state": "Kedah",
    "area": "Langgar",
    "reservePrice": 549000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "607 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "332",
    "title": "1 Storey Terrace House",
    "address": "Taman Setia Fasa 3, 05050 Alor Setar, Kedah",
    "postcode": "05050",
    "state": "Kedah",
    "area": "Alor Setar",
    "reservePrice": 380000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "583 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "333",
    "title": "1 Storey Semi Detached House",
    "address": "No. 173, Fasa 2, Taman Laman Kuda, Jalan Anak Bukit, 06550 Alor Setar, Kedah",
    "postcode": "06550",
    "state": "Kedah",
    "area": "Alor Setar",
    "reservePrice": 440000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "616 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "334",
    "title": "1 Storey Semi Detached House",
    "address": "No. 21, Jalan Baiduri 1, Taman Teluk Baiduri, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 306000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "970 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "335",
    "title": "1 Storey Terrace House",
    "address": "No. 48, Taman Orkid, 08200 Sik, Kedah",
    "postcode": "08200",
    "state": "Kedah",
    "area": "Sik",
    "reservePrice": 185000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "336",
    "title": "2 Storey Semi Detached House",
    "address": "No. 1138, Fasa 4, Taman Seri Kota, Jalan Kuala Kedah, 05400, Alor Setar, Kedah",
    "postcode": "05400",
    "state": "Kedah",
    "area": "Alor Setar",
    "reservePrice": 522000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "626 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "337",
    "title": "Office Suite",
    "address": "Unit No. 102-03-02, Jalan Batu Ferringhi, By The Sea, 11100 Batu Ferringhi, Penang",
    "postcode": "11100",
    "state": "Penang",
    "area": "Batu Ferringhi",
    "reservePrice": 743580,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "023 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "338",
    "title": "2 Storey Cluster House",
    "address": "No. 23, Persiaran Seksyen 6/6, Bandar Putera Bertam, 13200 Kepala Batas, Penang",
    "postcode": "13200",
    "state": "Penang",
    "area": "Kepala Batas",
    "reservePrice": 193185,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "818 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "339",
    "title": "Flat",
    "address": "Unit No. 33-2-20, Lorong Semarak Api 3, Mukim 13, 11500 Ayer Itam, Penang",
    "postcode": "11500",
    "state": "Penang",
    "area": "Ayer Itam",
    "reservePrice": 135000,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "506 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "340",
    "title": "2 Storey Terrace House",
    "address": "No. 11, Lorong Bukit Minyak Utama 30, Taman Bukit Minyak Utama, 14000 Bukit Mertajam, Penang",
    "postcode": "14000",
    "state": "Penang",
    "area": "Bukit Mertajam",
    "reservePrice": 680000,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "640 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "341",
    "title": "Flat",
    "address": "Unit No. 3-4-16, Bandar Baru Perda Teluk Kumbar, Tingkat Teluk Kumbar, Bandar Baru Teluk Kumbar, 11920 Bayan Lepas, Penang",
    "postcode": "11920",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 91854,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "506 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "342",
    "title": "Apartment",
    "address": "Unit No. 7-01, Block B, Pangsapuri Ria, Lebuh Kampung Benggali, 12200 Butterworth, Penang",
    "postcode": "12200",
    "state": "Penang",
    "area": "Butterworth",
    "reservePrice": 186300,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "786 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "343",
    "title": "Freehold Apartment",
    "address": "Unit No. 4-07-B, Lorong Sintuk 3, Taman Permatang Sintuk, 13100 Penaga, Penang",
    "postcode": "13100",
    "state": "Penang",
    "area": "Penaga",
    "reservePrice": 180000,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "184 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "344",
    "title": "Apartment",
    "address": "Unit No. A3-5-2, Block A3, Pangsapuri Samudera 1, 32040 Seri Manjung, Perak",
    "postcode": "32040",
    "state": "Perak",
    "area": "Seri Manjung",
    "reservePrice": 145800,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "969 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "345",
    "title": "2 Storey Terrace House",
    "address": "Lebuh Bercham Selatan, Desa Bercham, 31400 Ipoh, Perak",
    "postcode": "31400",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 340000,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "320 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "346",
    "title": "2 Storey Terrace House",
    "address": "No. 35, Laluan Chepor Permai 4, Taman Chepor Permai, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 290000,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "328 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "347",
    "title": "1 Storey Cluster Semi Detached House",
    "address": "No. 10, Jalan Residen 6/6, Residen 6, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 250000,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "915 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "348",
    "title": "1 Storey Detached House",
    "address": "No. 4, Laluan Sakura 24, Taman Pusing Sakura, 31550 Pusing, Perak",
    "postcode": "31550",
    "state": "Perak",
    "area": "Pusing",
    "reservePrice": 265000,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "000 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "349",
    "title": "2.5 Storey Terrace House",
    "address": "No. 1, Laluan Lapangan Siber 8, Panorama Lapangan Perdana, 31350 Ipoh, Perak",
    "postcode": "31350",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 675000,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "361 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "350",
    "title": "Residential Land",
    "address": "Lot 34593, Off Jalan Tapah - Tapah Road, 35400 Tapah Road, Perak",
    "postcode": "34593",
    "state": "Perak",
    "area": "Tapah Road",
    "reservePrice": 7000000,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "351",
    "title": "1 Storey Terrace House",
    "address": "No. 67, Lorong Lagenda 46, Seksyen 3, Bandar Lagenda Teluk Intan, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 145800,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "352",
    "title": "1 Storey Terrace House",
    "address": "No. 179, Jalan Residen 8/6, Residen 8, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 178200,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "353",
    "title": "1 Storey Terrace House",
    "address": "No. 10, Jalan Bemban Indah 9, Taman Bemban Indah, 31000 Batu Gajah, Perak",
    "postcode": "31000",
    "state": "Perak",
    "area": "Batu Gajah",
    "reservePrice": 186300,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "354",
    "title": "1 Storey Terrace House",
    "address": "No. 6, Persiaran Jerlun 5, Taman Jerlun, 33000 Kuala Kangsar, Perak",
    "postcode": "33000",
    "state": "Perak",
    "area": "Kuala Kangsar",
    "reservePrice": 105000,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "098 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "355",
    "title": "25 Terrace Shop Lot",
    "address": "Lot PT 183942 -183966, Lebuhraya Ipoh -Lumut, 31000 Batu Gajah, Perak",
    "postcode": "31000",
    "state": "Perak",
    "area": "Batu Gajah",
    "reservePrice": 3288000,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "450 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "356",
    "title": "1 Storey Terrace House",
    "address": "No. 991, Jalan Residen 1/13, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 160000,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "357",
    "title": "1 Storey Terrace House",
    "address": "No. 44, Jalan Permai 3, Taman Dipang Permai, 31850 Jeram, Perak",
    "postcode": "31850",
    "state": "Perak",
    "area": "Jeram",
    "reservePrice": 162000,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "358",
    "title": "2 Storey Terrace House",
    "address": "No. 194, Putra D/2, Taman Klebang Putra, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 315000,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "300 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "359",
    "title": "1 Storey Terrace House",
    "address": "No. 1115, Taman Derga Jaya, Jalan Datuk Kumbar, 05300 Alor Setar, Kedah",
    "postcode": "05300",
    "state": "Kedah",
    "area": "Alor Setar",
    "reservePrice": 207000,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "100 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "360",
    "title": "Industrial Land",
    "address": "20 Lot, Bandar Amanjaya (Zon Seroja), Kedah",
    "postcode": "",
    "state": "Kedah",
    "area": "Bandar Amanjaya (Zon Seroja)",
    "reservePrice": 1459000,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "361",
    "title": "Industrial Land",
    "address": "12 Lot, Bandar Amanjaya (Zon Seroja), Kedah",
    "postcode": "",
    "state": "Kedah",
    "area": "Bandar Amanjaya (Zon Seroja)",
    "reservePrice": 918000,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "362",
    "title": "Land",
    "address": "Lot No. PT23229 - 23248, Bandar Amanjaya (zon seroja), 08000, Kedah",
    "postcode": "23248",
    "state": "Kedah",
    "area": "Kedah",
    "reservePrice": 1306000,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "363",
    "title": "Apartment",
    "address": "Unit No. 84-6-4, Kayangan Puri Mutiara, Medan Fettes, 10470 Tanjong Tokong, Penang",
    "postcode": "10470",
    "state": "Penang",
    "area": "Tanjong Tokong",
    "reservePrice": 473850,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "593 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "364",
    "title": "1 Storey Terrace House",
    "address": "No. 27, Lorong Sepadu Jaya 2/7, Taman Sepadu Jaya, 13300 Tasek Gelugor, Penang",
    "postcode": "13300",
    "state": "Penang",
    "area": "Tasek Gelugor",
    "reservePrice": 255150,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "432 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "365",
    "title": "Flat",
    "address": "Unit No. 5-02-3, Lorong Gangsa, Taman Lembah Hijau, 11600 Jelutong, Penang",
    "postcode": "11600",
    "state": "Penang",
    "area": "Jelutong",
    "reservePrice": 291600,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "710 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "366",
    "title": "2 Storey Semi Detached House",
    "address": "No. 9, Lintang Bukit Penara 6, Taman Balik Pulau, 11000 Balik Pulau, Penang",
    "postcode": "11000",
    "state": "Penang",
    "area": "Balik Pulau",
    "reservePrice": 765000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "024 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "367",
    "title": "Apartment",
    "address": "Desa lxora, Solok Angsana, 11500, Bandar Baru Ayer ltam, Penang",
    "postcode": "11500",
    "state": "Penang",
    "area": "Bandar Baru Ayer ltam",
    "reservePrice": 130000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "506 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "368",
    "title": "Flat",
    "address": "Unit No. 1-4-3, Jalan Sempadan, 11400 Georgetown, Penang",
    "postcode": "11400",
    "state": "Penang",
    "area": "Georgetown",
    "reservePrice": 260000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "710 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "369",
    "title": "Town House",
    "address": "Unit No. F-1-11, Lorong Indera Putera 10, Kondo Villa Putera, Bandar Putera Bertam, 13200 Kepala Batas, Penang",
    "postcode": "13200",
    "state": "Penang",
    "area": "Kepala Batas",
    "reservePrice": 290000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "087 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "370",
    "title": "Flat",
    "address": "Persiaran Mayang Pasir 5, Bandar Bayan Baru, 11950 Bayan Lepas, Penang",
    "postcode": "11950",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 140000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "499 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "371",
    "title": "Flat",
    "address": "Idaman Selasih, Lilitan Sungai Ara, 11900 Bayan Lepas, Penang",
    "postcode": "11900",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 300000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "678 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "372",
    "title": "Flat",
    "address": "Unit No. T3-13, Desa Permai Indah, Lorong Helang 1, 11700 Glugor, Penang",
    "postcode": "11700",
    "state": "Penang",
    "area": "Glugor",
    "reservePrice": 165000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "549 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "373",
    "title": "2 Storey Terrace House",
    "address": "Lorong 4/SS7, Bandar Tasek Mutiara, 14120 Simpang Ampat, Penang",
    "postcode": "14120",
    "state": "Penang",
    "area": "Simpang Ampat",
    "reservePrice": 470000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "119 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "374",
    "title": "Service Apartment",
    "address": "Unit No. 9-15, Pangsapuri Luminari, Jalan Harbour Place 1, 12100 Butterworth, Penang",
    "postcode": "12100",
    "state": "Penang",
    "area": "Butterworth",
    "reservePrice": 490000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "055 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "375",
    "title": "Flat",
    "address": "Unit No. 7D-07-23, Desa Intan, Lebuhraya Thean Teik, Bandar Baru Air Itam, 11500 Ayer Itam, Penang",
    "postcode": "11500",
    "state": "Penang",
    "area": "Ayer Itam",
    "reservePrice": 205000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "635 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "376",
    "title": "2 Storey Terrace House",
    "address": "No. 85, Persiaran Mayang Pasir, MK 12, Bandar Bayan Baru, 11950 Bayan Lepas, Penang",
    "postcode": "11950",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 520000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "120 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "377",
    "title": "2 Storey Semi Detached House",
    "address": "No. 6, Lorong Sungai Kecil 3, Taman Sungai Kecil, 14300 Nibong Tebal, Penang",
    "postcode": "14300",
    "state": "Penang",
    "area": "Nibong Tebal",
    "reservePrice": 270000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "034 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "378",
    "title": "Flat",
    "address": "Unit No. 1066-17-02, Jalan Paya Terubong, Mukim 13, 11060, Penang",
    "postcode": "11060",
    "state": "Penang",
    "area": "Penang",
    "reservePrice": 90000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "538 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "379",
    "title": "1 Storey Terrace House",
    "address": "No. 30, Lorong 6/SS2, Taman Tasek Mutiara, 14120 Simpang Ampat, Penang",
    "postcode": "14120",
    "state": "Penang",
    "area": "Simpang Ampat",
    "reservePrice": 288000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "380",
    "title": "Service Apartment",
    "address": "Unit No. 26-12, Pangsapuri Luminari, Jalan Harbour Place 1, 12100 Butterworth, Penang",
    "postcode": "12100",
    "state": "Penang",
    "area": "Butterworth",
    "reservePrice": 437400,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "206 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "381",
    "title": "Condominium",
    "address": "Unit No. 26B-18-3A, Lintang Sungai Ara 6, Zan Pavillion, 11900 Bayan Lepas, Penang",
    "postcode": "11900",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 532170,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "991 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "382",
    "title": "Flat",
    "address": "Unit No. 7B-02-16, Lebuhraya Thean Teik, Bandar Baru Ayer Itam - Desa Intan, 11500 Ayer Itam, Penang",
    "postcode": "11500",
    "state": "Penang",
    "area": "Ayer Itam",
    "reservePrice": 126000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "624 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "383",
    "title": "2 Storey Cluster House",
    "address": "No. 1, Lorong Sembilang 7, Seberang Jaya, 13700 Perai, Penang",
    "postcode": "13700",
    "state": "Penang",
    "area": "Perai",
    "reservePrice": 204120,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "024 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "384",
    "title": "Flat",
    "address": "Unit No. 8-18-33A, Jalan Rajawali, I-Park, 11900 Bayan Lepas, Penang",
    "postcode": "11900",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 186300,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "667 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "385",
    "title": "Apartment",
    "address": "Unit No. 07-01, Park View Tower, Jalan Harbour Place, 12100 Butterworth, Penang",
    "postcode": "12100",
    "state": "Penang",
    "area": "Butterworth",
    "reservePrice": 320000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "883 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "386",
    "title": "1 Storey Terrace House",
    "address": "No. 44, Persiaran Seksyen 3/5, Bandar Putra Bertam, 13200 Kepala Batas, Penang",
    "postcode": "13200",
    "state": "Penang",
    "area": "Kepala Batas",
    "reservePrice": 259200,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "291 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "387",
    "title": "2 Storey Terrace House",
    "address": "No. 26, Solok Prestij 6, Taman Prestij III, 11000 Balik Pulau, Penang",
    "postcode": "11000",
    "state": "Penang",
    "area": "Balik Pulau",
    "reservePrice": 405000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "410 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "388",
    "title": "Flat",
    "address": "Unit No. 6-5-6, Solok Sungai Ara 1, Mukim 12, 11900 Bayan Lepas, Penang",
    "postcode": "11900",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 160000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "541 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "389",
    "title": "Condominium",
    "address": "Unit No. 501G-07-01, Diamond Villa, Jalan Tanjung Bungah, 11200 Tanjung Bungah, Penang",
    "postcode": "11200",
    "state": "Penang",
    "area": "Tanjung Bungah",
    "reservePrice": 765000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "615 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "390",
    "title": "Service Apartment",
    "address": "Unit No. B-13-10, Persiaran Mutiara 8, Pangsapuri Perkhidmatan Palma, 14120 Simpang Ampat, Penang",
    "postcode": "14120",
    "state": "Penang",
    "area": "Simpang Ampat",
    "reservePrice": 400000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "076 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "391",
    "title": "Condominium",
    "address": "Unit No. 1B-1-5, Sunrise Garden, Cangkat Kenari, MK 12, 11900 Bayan Lepas, Penang",
    "postcode": "11900",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 460000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "098 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "392",
    "title": "1 Storey Terrace House",
    "address": "Lorong Bintang, 12300 Butterworth, Penang",
    "postcode": "12300",
    "state": "Penang",
    "area": "Butterworth",
    "reservePrice": 420000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "393",
    "title": "1 Storey Terrace House",
    "address": "No. 21, Lorong Kota Permai 12, Taman Kota Permai, 14000 Bukit Mertajam, Penang",
    "postcode": "14000",
    "state": "Penang",
    "area": "Bukit Mertajam",
    "reservePrice": 342000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "394",
    "title": "Duplex Condominium",
    "address": "Unit No. 76-17-10, Marina Bay Condominium, Jalan Tanjung Tokong, 10470, Penang",
    "postcode": "10470",
    "state": "Penang",
    "area": "Penang",
    "reservePrice": 1418000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "864 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "395",
    "title": "1 Storey Terrace House",
    "address": "No. 5, Lorong Cempaka 10, Batu Kawan, 14100 Simpang Ampat, Penang",
    "postcode": "14100",
    "state": "Penang",
    "area": "Simpang Ampat",
    "reservePrice": 240000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "980 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "396",
    "title": "1 Storey Terrace House",
    "address": "No. 11A, Lorong Kuala Bekah 1, Taman Kuala Bekah, 13100 Penaga, Penang",
    "postcode": "13100",
    "state": "Penang",
    "area": "Penaga",
    "reservePrice": 250000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "397",
    "title": "1 Storey Terrace House",
    "address": "No. 33, Lorong Pinggiran Bertam 25, Bertam Perdana 4, 13200 Seberang Perai Utara, Penang",
    "postcode": "13200",
    "state": "Penang",
    "area": "Seberang Perai Utara",
    "reservePrice": 333000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "540 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "398",
    "title": "Flat",
    "address": "Unit No. 1B-15-6, Desa Baiduri, Jalan RU 1, Bandar Baru Ayer Itam, 11500 Ayer Itam, Penang",
    "postcode": "11500",
    "state": "Penang",
    "area": "Ayer Itam",
    "reservePrice": 190000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "624 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "399",
    "title": "1 Storey Semi Detached House",
    "address": "No. 2, Lorong Laksamana 5, Telok Air Tawar, 13050 Butterworth, Penang",
    "postcode": "13050",
    "state": "Penang",
    "area": "Butterworth",
    "reservePrice": 720000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "727 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "400",
    "title": "1.5 Storey Terrace House",
    "address": "No. 12, Pesara Mahsuri 5, Bandar Bayan Baru, 11950 Bayan Lepas, Penang",
    "postcode": "11950",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 880000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "690 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "401",
    "title": "Condominium",
    "address": "Unit No. 02-02, Second Floor, Ocean View Residences, Jalan Harbour Place, 12100 Butterworth, Penang",
    "postcode": "12100",
    "state": "Penang",
    "area": "Butterworth",
    "reservePrice": 298890,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "109 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "402",
    "title": "Apartment",
    "address": "Unit No. 73A-3, Block 73A, Aras 3, The Residence @ Kampar, Persiaran Residensi, Bandar Agacia, 31910 Kampar, Perak",
    "postcode": "31910",
    "state": "Perak",
    "area": "Kampar",
    "reservePrice": 160000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "098 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "403",
    "title": "1 Storey Cluster Semi Detached House",
    "address": "No. 21, Lorong Lagenda 6, Seksyen 1, Bandar Lagenda Teluk Intan, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 180000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "981 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "404",
    "title": "1 Storey Terrace House",
    "address": "No. 111, Jalan Tropika 1, Residensi Lagenda Tropika, 35350 Temoh, Perak",
    "postcode": "35350",
    "state": "Perak",
    "area": "Temoh",
    "reservePrice": 153000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "405",
    "title": "1 Storey Cluster House",
    "address": "No. 692, Jalan Residen 7/11, Residen 7, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 220000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "156 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "406",
    "title": "1 Storey Terrace House",
    "address": "Jalan Impiana 33, Taman Impiana Bidor, 35500 Bidor, Perak",
    "postcode": "35500",
    "state": "Perak",
    "area": "Bidor",
    "reservePrice": 220000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "407",
    "title": "2 Storey Terrace House",
    "address": "No. 82, Persiaran Jelapang 19A, Taman Sri Wani, 30100 Ipoh, Perak",
    "postcode": "30100",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 180000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "797 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "408",
    "title": "1 Storey Terrace House",
    "address": "No. 19, Lorong Cantik 4, Taman Cantik II, Pasir Panjang Laut, 32040 Seri Manjung, Perak",
    "postcode": "32040",
    "state": "Perak",
    "area": "Seri Manjung",
    "reservePrice": 198000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "270 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "409",
    "title": "2 Storey Semi Detached House",
    "address": "No. 68, Lorong Raz Intan 3, Taman Raz Intan Cassia, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 522000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "820 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "410",
    "title": "2 Storey Terrace House",
    "address": "No. 218, Jalan Sejati Suria 9, Taman Sejati Suria, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 295000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "700 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "411",
    "title": "Terrace House",
    "address": "No. 10, Jalan Perpaduan Bayu 4, Arena Perpaduan Bayu, 31150 Ipoh, Perak",
    "postcode": "31150",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 360000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "839 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "412",
    "title": "2 Storey Terrace House",
    "address": "No. 84, Sri Klebang D/7, Bandar Baru Sri Klebang, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 378000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "771 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "413",
    "title": "1 Storey Terrace House",
    "address": "No. 28, Laluan Klebang Jaya 32, Taman Klebang Jaya, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 200000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "580 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "414",
    "title": "2 Storey Terrace House",
    "address": "No. 71, Pesara Lahat Baru 8, Bandar Lahat Baru, 31500 Lahat, Perak",
    "postcode": "31500",
    "state": "Perak",
    "area": "Lahat",
    "reservePrice": 135000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "904 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "415",
    "title": "1 Storey Terrace House",
    "address": "No. 1518, Taman Samudera, 32040 Seri Manjung, Perak",
    "postcode": "32040",
    "state": "Perak",
    "area": "Seri Manjung",
    "reservePrice": 135000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "098 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "416",
    "title": "2 Storey Terrace House",
    "address": "No. 7, Lengkuk Meru Permai 5, Halaman Meru Permai, 30020 Ipoh, Perak",
    "postcode": "30020",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 330000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "417",
    "title": "1 Storey Terrace House",
    "address": "No. 2, Jalan 2, Taman Bidor Intan, 35500 Bidor, Perak",
    "postcode": "35500",
    "state": "Perak",
    "area": "Bidor",
    "reservePrice": 80000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "418",
    "title": "1 Storey Terrace House",
    "address": "No. 749, Jalan Diawan 7, Taman Permai, 31950 Mambang Diawan, Perak",
    "postcode": "31950",
    "state": "Perak",
    "area": "Mambang Diawan",
    "reservePrice": 150000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "419",
    "title": "1 Storey Terrace House",
    "address": "No. 4, Jalan Suria Indah 5, Taman Gelung Permai, 32600 Bota, Perak",
    "postcode": "32600",
    "state": "Perak",
    "area": "Bota",
    "reservePrice": 180000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "420",
    "title": "1 Storey Terrace House",
    "address": "No. 23, Jalan Mahkota Kampar 9, Taman Mahkota Kampar, 31900 Kampar, Perak",
    "postcode": "31900",
    "state": "Perak",
    "area": "Kampar",
    "reservePrice": 162000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "421",
    "title": "1 Storey Terrace House",
    "address": "No. 15, Lorong Mewah 30, Taman Mewah, 34600 Kamunting, Perak",
    "postcode": "34600",
    "state": "Perak",
    "area": "Kamunting",
    "reservePrice": 230000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "422",
    "title": "1 Storey Cluster Semi Detached House",
    "address": "No. 1126, Jalan Residen 8/28, Residen 8, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 220000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "797 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "423",
    "title": "1 Storey Terrace House",
    "address": "No. 54, Jalan Seri Kenangan, Taman Seri Kenangan, 32600 Bota, Perak",
    "postcode": "32600",
    "state": "Perak",
    "area": "Bota",
    "reservePrice": 160000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "194 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "424",
    "title": "1 Storey Terrace House",
    "address": "No. 72, Tingkat Zarib 1B, Taman Pinji Mewah, 31500 Lahat, Perak",
    "postcode": "31500",
    "state": "Perak",
    "area": "Lahat",
    "reservePrice": 152280,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "173 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "425",
    "title": "1 Storey Terrace House",
    "address": "No. 15, Laluan Wawasan 6, Taman Tronoh Wawasan, 31750 Tronoh, Perak",
    "postcode": "31750",
    "state": "Perak",
    "area": "Tronoh",
    "reservePrice": 90000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "829 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "426",
    "title": "1 Storey Terrace House",
    "address": "No. 73, Jalan Seri Rubiah 4, Taman Seri Rubiah, 32040, Seri Manjung, Perak",
    "postcode": "32040",
    "state": "Perak",
    "area": "Seri Manjung",
    "reservePrice": 300000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "110 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "427",
    "title": "Condominium",
    "address": "Unit No. 3-11-10, Kondominium Timur Perdana, Jalan Kolej, Taman Bandar Baru, 31900 Kampar, Perak",
    "postcode": "31900",
    "state": "Perak",
    "area": "Kampar",
    "reservePrice": 342000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "216 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "428",
    "title": "1 Storey Terrace House",
    "address": "No. 1928, Persiaran Puteri 3/32, Taman Chandan Putri Fasa 5, 33000 Kuala Kangsar, Perak",
    "postcode": "33000",
    "state": "Perak",
    "area": "Kuala Kangsar",
    "reservePrice": 198000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "429",
    "title": "2 Storey Detached House",
    "address": "No. 43, Lorong Bandar Utama 3, Bandar Utama, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 543250.8,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "350 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "430",
    "title": "2 Storey Terrace House",
    "address": "No. 97, Lorong 23, Taman Petani Jaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 350000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "540 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "431",
    "title": "1 Storey Terrace House",
    "address": "No. 232A, Jalan Bujang Utama 3, Taman Lembah Bujang Utama, 08100 Bedong, Kedah",
    "postcode": "08100",
    "state": "Kedah",
    "area": "Bedong",
    "reservePrice": 250000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "432",
    "title": "1 Storey Terrace House",
    "address": "No. 389, Lorong Residensi B14, Taman Residensi Mesra, 08300 Gurun, Kedah",
    "postcode": "08300",
    "state": "Kedah",
    "area": "Gurun",
    "reservePrice": 160000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "453 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "433",
    "title": "1 Storey Terrace House",
    "address": "No. 190, Jalan Kemboja 31/B, Bandar Amanjaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 185000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "434",
    "title": "1 Storey Terrace House",
    "address": "No. 329, Jalan Tanjung 5, Bandar Amanjaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 350000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "405 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "435",
    "title": "1 Storey Semi Detached House",
    "address": "No. 326, Jalan SP Heights 8, SP Heights, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 243000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "898 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "436",
    "title": "1 Storey Terrace House",
    "address": "No. 505, Lorong Lembah Impiana 7/3, Lembah Impiana, 09000 Kulim, Kedah",
    "postcode": "09000",
    "state": "Kedah",
    "area": "Kulim",
    "reservePrice": 348000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "465 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "437",
    "title": "2 Storey Terrace House",
    "address": "No. 152-B, Lorong Astana 7/10, Bandar Seri Astana, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 248000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "540 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "438",
    "title": "2 Storey Terrace House",
    "address": "No. 899, Jalan Damai 4/4, Taman Damai, 09400 Padang Serai, Kedah",
    "postcode": "09400",
    "state": "Kedah",
    "area": "Padang Serai",
    "reservePrice": 290000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "194 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "439",
    "title": "2 Storey Terrace House",
    "address": "No. 1050, Lorong Permai Utama 30, Taman Permai Utama, 08300 Gurun, Kedah",
    "postcode": "08300",
    "state": "Kedah",
    "area": "Gurun",
    "reservePrice": 252000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "440",
    "title": "2 Storey Terrace House",
    "address": "No. 273, Jalan Kenanga 2/4, Bandar Amanjaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 279000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "527 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "441",
    "title": "2 Storey Terrace House",
    "address": "No. 2A, Lorong Bidara 1, Prestij 5, 11960 Bayan Lepas, Penang",
    "postcode": "11960",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 641520,
    "auctionDate": "21 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "332 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "442",
    "title": "Condominium",
    "address": "Unit No. 109-07-15, Gold Coast Resort Condominium, Persiaran Bayan Indah, 11900 Bayan Lepas, Penang",
    "postcode": "11900",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 568620,
    "auctionDate": "21 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "389 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "443",
    "title": "Condominium",
    "address": "Unit No. 33-2-1, Persiaran Sungai Emas, Ferringhi Delima Condominium, 11100 Batu Ferringgi, Penang",
    "postcode": "11100",
    "state": "Penang",
    "area": "Batu Ferringgi",
    "reservePrice": 240000,
    "auctionDate": "21 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "721 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "444",
    "title": "Apartment",
    "address": "Unit No. 14-5-5, Sun Moon City, Tingkat Paya Terubong 2, Mukim 13, 11060 Paya Terubong, Penang",
    "postcode": "11060",
    "state": "Penang",
    "area": "Paya Terubong",
    "reservePrice": 121500,
    "auctionDate": "21 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "689 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "445",
    "title": "Apartment",
    "address": "Unit No. 84-9-6, Medan Fettes, Kayangan Puri Mutiara, 10470 Tanjung Tokong, Penang",
    "postcode": "10470",
    "state": "Penang",
    "area": "Tanjung Tokong",
    "reservePrice": 324000,
    "auctionDate": "21 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "593 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "446",
    "title": "Apartment",
    "address": "Unit No. 1B-5-A, Jalan Chee Seng 13, Taman Pemimpin (Leader Garden), 11200 Tanjong Bungah, Penang",
    "postcode": "11200",
    "state": "Penang",
    "area": "Tanjong Bungah",
    "reservePrice": 334611,
    "auctionDate": "21 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "141 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "447",
    "title": "Flat",
    "address": "Unit No. 1-7-08, Lintang Madrasah, Jelutong Park, 11600 Jelutong, Penang",
    "postcode": "11600",
    "state": "Penang",
    "area": "Jelutong",
    "reservePrice": 240000,
    "auctionDate": "21 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "614 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "448",
    "title": "Flat",
    "address": "Unit No. 420-4-12, Jalan Stesen Bukit Bendera, Taman Bukit Bendera, 11500 Ayer Itam, Penang",
    "postcode": "11500",
    "state": "Penang",
    "area": "Ayer Itam",
    "reservePrice": 171000,
    "auctionDate": "21 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "484 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "449",
    "title": "Flat",
    "address": "Unit No. 10-3-12, Jalan Sungai Satu, Taman Pinang Emas, 11100 Batu Ferringhi, Penang",
    "postcode": "11100",
    "state": "Penang",
    "area": "Batu Ferringhi",
    "reservePrice": 150000,
    "auctionDate": "21 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "560 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "450",
    "title": "Apartment",
    "address": "Unit No. 4-18, Block B, Vista Perdana, Jalan Kampung Gajah, Taman Bagan Jermal, 12200 Butterworth, Penang",
    "postcode": "12200",
    "state": "Penang",
    "area": "Butterworth",
    "reservePrice": 256000,
    "auctionDate": "21 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "936 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "451",
    "title": "2 Storey Terrace House",
    "address": "No. 22, Lorong Eco Meadows 14, Taman Eco Meadows, 14100 Simpang Ampat, Penang",
    "postcode": "14100",
    "state": "Penang",
    "area": "Simpang Ampat",
    "reservePrice": 670000,
    "auctionDate": "21 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "452",
    "title": "Flat",
    "address": "No. Block Asoka 11-12, Lengkok Kelicap, Mukim 12, 11900 Bayan Lepas, Penang",
    "postcode": "11900",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 153000,
    "auctionDate": "21 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "538 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "453",
    "title": "2 Storey Terrace House",
    "address": "No. 42, Persiaran Halia 1, 10470 Tanjong Tokong, Penang",
    "postcode": "10470",
    "state": "Penang",
    "area": "Tanjong Tokong",
    "reservePrice": 984150,
    "auctionDate": "21 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "703 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "454",
    "title": "Flat",
    "address": "Unit No. 10-2-26, Lintang Sungai Batu, Taman Teluk Kumbar, 11920 Bayan Lepas, Penang",
    "postcode": "11920",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 148500,
    "auctionDate": "21 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "463 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "455",
    "title": "Flat",
    "address": "Unit No. 10-4-33, Lintang Sungai Batu, Taman Teluk Kumbar, 11920 Bayan Lepas, Penang",
    "postcode": "11920",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 121500,
    "auctionDate": "21 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "463 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "456",
    "title": "Flat",
    "address": "Unit No. 25-12-12, Taman Seri Damai, Lintang Batu Lanchang, 11600 Jelutong, Penang",
    "postcode": "11600",
    "state": "Penang",
    "area": "Jelutong",
    "reservePrice": 190000,
    "auctionDate": "21 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "570 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "457",
    "title": "2 Storey Shop Office",
    "address": "No. 7, Jalan Mengkuang Keretapi, Taman Mengkuang Jaya, 14400 Kubang Semang, Penang",
    "postcode": "14400",
    "state": "Penang",
    "area": "Kubang Semang",
    "reservePrice": 750000,
    "auctionDate": "21 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "283 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "458",
    "title": "Terrace House",
    "address": "Lorong Kikik 3, Taman Inderawasih, 13600 Perai, Penang",
    "postcode": "13600",
    "state": "Penang",
    "area": "Perai",
    "reservePrice": 270000,
    "auctionDate": "21 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "076 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "459",
    "title": "2 Storey Terrace House",
    "address": "No. 77, Lorong Bukit Panchor 1, Taman Bukit Panchor, 14300 Nibong Tebal, Penang",
    "postcode": "14300",
    "state": "Penang",
    "area": "Nibong Tebal",
    "reservePrice": 400000,
    "auctionDate": "21 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "873 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "460",
    "title": "2 Storey Terrace House",
    "address": "No. 5, Lorong Hijauan Hills 19, Hijauan Hills, 14120 Simpang Ampat, Penang",
    "postcode": "14120",
    "state": "Penang",
    "area": "Simpang Ampat",
    "reservePrice": 432000,
    "auctionDate": "21 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "646 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "461",
    "title": "Condominium",
    "address": "Unit No. 2C-5-8, Cangkat Kenari, Mukim 12, 11900 Bayan Lepas, Penang",
    "postcode": "11900",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 459000,
    "auctionDate": "21 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "270 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "462",
    "title": "Apartment",
    "address": "Unit No. 9-10, Block 1A, Lorong Telok Air Tawar 6, Pangsapuri Taman Air Tawar Indah, 13050, Butterworth, Penang",
    "postcode": "13050",
    "state": "Penang",
    "area": "Butterworth",
    "reservePrice": 220000,
    "auctionDate": "21 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "710 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "463",
    "title": "2 Storey Terrace House",
    "address": "Lorong Seri Janggus 4, Taman Seri Janggus, 14000, Bukit Mertajam, Penang",
    "postcode": "14000",
    "state": "Penang",
    "area": "Bukit Mertajam",
    "reservePrice": 530000,
    "auctionDate": "21 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "464",
    "title": "Duplex Penthouse",
    "address": "Unit No. 73D-PH-1, Lebuhraya Jelutong Central Park, 11600 Jelutong, Penang",
    "postcode": "11600",
    "state": "Penang",
    "area": "Jelutong",
    "reservePrice": 1749600,
    "auctionDate": "21 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "264 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "465",
    "title": "Apartment",
    "address": "Unit No. 1115-3-11, Jalan Permatang Damar Laut, Pangsapuri Sri Bayan, 11960 Bayan Lepas, Penang",
    "postcode": "11960",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 245000,
    "auctionDate": "21 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "699 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "466",
    "title": "Land",
    "address": "Lot 4223, Lorong Alamanda 11, Taman Alamanda, 13200 Kepala Batas, Penang",
    "postcode": "13200",
    "state": "Penang",
    "area": "Kepala Batas",
    "reservePrice": 171000,
    "auctionDate": "21 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "036 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "467",
    "title": "Apartment",
    "address": "Unit No. Block Akasia 5-3, Mutiara Perdana, Lengkok Kelicap, 11900 Bayan Lepas, Penang",
    "postcode": "11900",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 145800,
    "auctionDate": "21 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "538 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "468",
    "title": "1 Storey Terrace House",
    "address": "Tingkat Kurau 2, Taman Chai Leng, 13700 Perai, Penang",
    "postcode": "13700",
    "state": "Penang",
    "area": "Perai",
    "reservePrice": 470000,
    "auctionDate": "21 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "469",
    "title": "2 Storey Cluster House",
    "address": "No. 12, Lorong Sembilang 12, Seberang Jaya, 13700 Perai, Penang",
    "postcode": "13700",
    "state": "Penang",
    "area": "Perai",
    "reservePrice": 198000,
    "auctionDate": "21 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "574 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "470",
    "title": "Apartment",
    "address": "Unit No. 11-12, Blok B, Pangsapuri Bagan Sena, Jalan Bagan Sena, 12100 Butterworth, Penang",
    "postcode": "12100",
    "state": "Penang",
    "area": "Butterworth",
    "reservePrice": 164025,
    "auctionDate": "21 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "818 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "471",
    "title": "1 Storey Terrace House",
    "address": "No. 31, Lorong Sepadu Jaya 1/8, Taman Sepadu Jaya, 13300, Tasek Gelugor, Penang",
    "postcode": "13300",
    "state": "Penang",
    "area": "Tasek Gelugor",
    "reservePrice": 306000,
    "auctionDate": "21 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "432 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "472",
    "title": "Service Apartment",
    "address": "Unit No. B-10-10, Persiaran Mutiara 8, Pangsapuri Perkhidmatan Palma, 14120 Simpang Ampat, Penang",
    "postcode": "14120",
    "state": "Penang",
    "area": "Simpang Ampat",
    "reservePrice": 360000,
    "auctionDate": "21 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "076 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "473",
    "title": "1 Storey Semi Detached House",
    "address": "No. 33, Lorong Senangin 3, Taman Senangin, 13600 Perai, Penang",
    "postcode": "13600",
    "state": "Penang",
    "area": "Perai",
    "reservePrice": 350000,
    "auctionDate": "21 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "501 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "474",
    "title": "Apartment",
    "address": "Unit No. A-2-11, Pangsapuri Mawar, Tingkat Mawar 3, 12300 Butterworth, Penang",
    "postcode": "12300",
    "state": "Penang",
    "area": "Butterworth",
    "reservePrice": 290000,
    "auctionDate": "21 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "807 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "475",
    "title": "Flat",
    "address": "Unit No. Blok Asoka 1-2, Lengkok Kelicap, Mutiara Perdana, 11900 Bayan Lepas, Penang",
    "postcode": "11900",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 180000,
    "auctionDate": "21 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "538 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "476",
    "title": "Apartment",
    "address": "Unit No. D-3-05, Jalan Perai Utama 4, Taman Perai Utama, 13600, Perai, Penang",
    "postcode": "13600",
    "state": "Penang",
    "area": "Perai",
    "reservePrice": 270000,
    "auctionDate": "21 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "131 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "477",
    "title": "Flat",
    "address": "Unit No. 7A-3-10, Jalan Seri Tanjung Pinang, 10470 Georgetown, Penang",
    "postcode": "10470",
    "state": "Penang",
    "area": "Georgetown",
    "reservePrice": 234900,
    "auctionDate": "21 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "657 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "478",
    "title": "2 Storey Semi Detached House",
    "address": "No. 15, Solok Pulau Betong, 11020 Balik Pulau, Penang",
    "postcode": "11020",
    "state": "Penang",
    "area": "Balik Pulau",
    "reservePrice": 850000,
    "auctionDate": "21 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "250 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "479",
    "title": "Luxurious Suite",
    "address": "Room No. 19-12, Hotel Lexis Suites Penang, No. 28, Jalan Teluk Kumbar, 11920 Bayan Lepas, Penang",
    "postcode": "11920",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 519000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "875 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "480",
    "title": "1 Storey Terrace House",
    "address": "No. 14, Lorong Sentul 3, Taman Sentul, 14100 Simpang Ampat, Penang",
    "postcode": "14100",
    "state": "Penang",
    "area": "Simpang Ampat",
    "reservePrice": 252000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "001 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "481",
    "title": "2 Storey Terrace House",
    "address": "No. 2, Lebuh Batu Maung 11, Desaku, 11960 Bayan Lepas, Penang",
    "postcode": "11960",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 2250000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "418 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "482",
    "title": "Hotel Suite",
    "address": "Room No. 13-04, Hotel Lexis Suites Penang, No. 28, Jalan Teluk Kumbar, 11920 Bayan Lepas, Penang",
    "postcode": "11920",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 700000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "483",
    "title": "2 Storey Semi Detached House",
    "address": "No. 18, Jalan Batik 12, Medan Pasir Impian, 31650 Ipoh, Perak",
    "postcode": "31650",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 468000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "854 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "484",
    "title": "2 Storey Semi Detached House",
    "address": "No. 14, Taman Mawar, 33000 Kuala Kangsar, Perak",
    "postcode": "33000",
    "state": "Perak",
    "area": "Kuala Kangsar",
    "reservePrice": 315000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "434 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "485",
    "title": "1 Storey Terrace House",
    "address": "Laluan Tronoh Universiti 17, Taman Tronoh Universiti, 31750 Tronoh, Perak",
    "postcode": "31750",
    "state": "Perak",
    "area": "Tronoh",
    "reservePrice": 200000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "206 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "486",
    "title": "1 Storey Terrace House",
    "address": "Persiaran Pegoh Aman 4, Taman Desa Aman, 31500 Lahat, Perak",
    "postcode": "31500",
    "state": "Perak",
    "area": "Lahat",
    "reservePrice": 180000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "259 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "487",
    "title": "1 Storey Terrace House",
    "address": "No. 1025, Jalan Residen 3/23, Residen 3, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 200000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "488",
    "title": "1 Storey Terrace House",
    "address": "Lebuh Taman Jati, Taman Meru Jaya, 30020 Ipoh, Perak",
    "postcode": "30020",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 301500,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "798 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "489",
    "title": "2 Storey Terrace House",
    "address": "No. 72, Lorong Merak 3, Taman Maharajalela, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 290000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "412 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "490",
    "title": "2 Storey Terrace House",
    "address": "No. 15, Laluan Chepor Permai 3, Taman Chepor Permai, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 290000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "061 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "491",
    "title": "1 Storey Terrace House",
    "address": "Premises No. 431, Jalan Residen 3/2, Residen 3, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 200000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "080 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "492",
    "title": "1 Storey Terrace House",
    "address": "No. 15, Jalan Taman Saujana Indah 3, Taman Saujana Indah, 35400 Tapah Road, Perak",
    "postcode": "35400",
    "state": "Perak",
    "area": "Tapah Road",
    "reservePrice": 234000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "733 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "493",
    "title": "1 Storey Terrace House",
    "address": "No. 11, Laluan Wawasan 6, Taman Tronoh Wawasan , 31750 Tronoh, Perak",
    "postcode": "31750",
    "state": "Perak",
    "area": "Tronoh",
    "reservePrice": 128000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "798 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "494",
    "title": "2 Storey Terrace House",
    "address": "No. 146, Jalan Terus Maju 8, Taman Terus Maju, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 171000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "775 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "495",
    "title": "1 Storey Terrace House",
    "address": "No. 69, Lebuh Rapat Baru 5, Taman Song Choon, 31350 Ipoh, Perak",
    "postcode": "31350",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 140000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "200 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "496",
    "title": "1 Storey Shop",
    "address": "No. 15, Laluan Tronoh Universiti 36, Taman Tronoh Universiti, 31750 Tronoh, Perak",
    "postcode": "31750",
    "state": "Perak",
    "area": "Tronoh",
    "reservePrice": 162000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "497",
    "title": "2 Storey Terrace House",
    "address": "No. 37, Jalan Murni Jaya 1, Taman Murni Jaya, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 400000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "498",
    "title": "1 Storey Terrace House",
    "address": "No. 18, Jalan Bandar Universiti 34, Bandar Universiti, 32610 Seri Iskandar, Perak",
    "postcode": "32610",
    "state": "Perak",
    "area": "Seri Iskandar",
    "reservePrice": 170000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "679 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "499",
    "title": "2 Storey Terrace House",
    "address": "No. 122, Laluan BTI 1/27, Bandar Tasik Idaman, 31000 Batu Gajah, Perak",
    "postcode": "31000",
    "state": "Perak",
    "area": "Batu Gajah",
    "reservePrice": 307800,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "500",
    "title": "1 Storey Semi Detached House",
    "address": "No. 5, Jalan Sri Desa 12, Taman Chemor Mesra, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 291600,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "595 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "501",
    "title": "1 Storey Terrace House",
    "address": "No. 10, Lorong Lagenda 82, Seksyen 3, Bandar Lagenda Teluk Intan, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 180000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "502",
    "title": "2 Storey Terrace House",
    "address": "No. 154, Lorong Camar 6/2, Taman Camar, 09000 Kulim, Kedah",
    "postcode": "09000",
    "state": "Kedah",
    "area": "Kulim",
    "reservePrice": 405000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "014 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "503",
    "title": "2 Storey Semi Detached House",
    "address": "No. 110, Lorong Penaga 7, Taman Desa Penaga, 09000 Kulim, Kedah",
    "postcode": "09000",
    "state": "Kedah",
    "area": "Kulim",
    "reservePrice": 630000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "220 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "504",
    "title": "1 Storey Terrace House",
    "address": "No. 193, Jalan PR1MA 6, PR1MA Residensi Utama, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 225000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "902 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "505",
    "title": "1 Storey Semi Detached House",
    "address": "No. 46, Taman Perpaduan 2, Off Jalan Kuala Kedah, 06600 Kuala Kedah, Kedah",
    "postcode": "06600",
    "state": "Kedah",
    "area": "Kuala Kedah",
    "reservePrice": 350000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "595 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "506",
    "title": "1 Storey Terrace House",
    "address": "No. 565, Jalan PR1MA 14, PR1MA Residensi Utama, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 240000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "902 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "507",
    "title": "Terrace House",
    "address": "No. 936, Lorong Serai Wangi 5/3, Taman Serai Wangi, 09400 Padang Serai, Kedah",
    "postcode": "09400",
    "state": "Kedah",
    "area": "Padang Serai",
    "reservePrice": 300000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "200 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "508",
    "title": "1 Storey Detached House",
    "address": "No. 24, Jalan Kiara 1, Taman Kiara, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 320000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "005 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "509",
    "title": "2 Storey Bungalow House",
    "address": "No. H11, Jalan Bukit Bayu A6, Taman Bukit Bayu, Sungai Lalang, 08100 Bedong, Kedah",
    "postcode": "08100",
    "state": "Kedah",
    "area": "Bedong",
    "reservePrice": 448000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "835 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "510",
    "title": "1 Storey Terrace House",
    "address": "No. 224, Taman Harapan, Jalan Kuala Kedah, 06600 Kuala Kedah, Kedah",
    "postcode": "06600",
    "state": "Kedah",
    "area": "Kuala Kedah",
    "reservePrice": 186300,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "044 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "511",
    "title": "Terrace House",
    "address": "No. A-26, Taman Perpaduan Fasa 2, Jalan Kuala Kedah, 06600 Kuala Kedah, Kedah",
    "postcode": "06600",
    "state": "Kedah",
    "area": "Kuala Kedah",
    "reservePrice": 210600,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "194 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "512",
    "title": "Flat",
    "address": "Unit No. 10-09-13, Taman Alor Vista, Lebuh Relau, 11900 Bayan Lepas, Penang",
    "postcode": "11900",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 131300,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "517 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "513",
    "title": "Flat",
    "address": "Unit No. 4E-1223, Lorong Semarak Api 1, Mukim 13, 11500 Ayer Itam, Penang",
    "postcode": "11500",
    "state": "Penang",
    "area": "Ayer Itam",
    "reservePrice": 125000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "512 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "514",
    "title": "Flat",
    "address": "Unit No. 3-17-16, Blok C, Green Lane Heights, Jalan Gangsa, 11600 Jelutong, Penang",
    "postcode": "11600",
    "state": "Penang",
    "area": "Jelutong",
    "reservePrice": 183708,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "689 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "515",
    "title": "Apartment",
    "address": "Unit No. 6E-11-13, Lebuhraya Thean Tek, Melody Homes, 11500 Ayer Itam, Penang",
    "postcode": "11500",
    "state": "Penang",
    "area": "Ayer Itam",
    "reservePrice": 259200,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "700 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "516",
    "title": "Apartment",
    "address": "Unit No. 2-10-6, Taman Kumbar Permai, Lintang Kampung Masjid 1, Bandar Baru Teluk Kumbar, 11920 Bayan Lepas, Penang",
    "postcode": "11920",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 370000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "076 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "517",
    "title": "Condominium",
    "address": "Unit No. 1-B1-23A-1, Jalan Bukit Belah, Emerald Residence, 11920 Bayan Lepas, Penang",
    "postcode": "11920",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 520000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "119 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "518",
    "title": "1 Storey Semi Detached House",
    "address": "No. 19, Lorong Fajar 2, Taman Fajar, 14300 Nibong Tebal, Penang",
    "postcode": "14300",
    "state": "Penang",
    "area": "Nibong Tebal",
    "reservePrice": 330000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "034 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "519",
    "title": "Duplex Condominium",
    "address": "Unit No. 31-B22-7, Jalan Tanjung Tokong, Grand View, 10470 Georgetown, Penang",
    "postcode": "10470",
    "state": "Penang",
    "area": "Georgetown",
    "reservePrice": 623000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "433 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "520",
    "title": "Apartment",
    "address": "Unit No. 27-24-01, Taman Jubilee, Lengkok Nipah 2, 11900 Bayan Lepas, Penang",
    "postcode": "11900",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 350000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "700 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "521",
    "title": "Service Apartment",
    "address": "Unit No. 2A-10-5, Jalan Pantai Sinaran, The Light Linear, 11700 Glugor, Penang",
    "postcode": "11700",
    "state": "Penang",
    "area": "Glugor",
    "reservePrice": 891000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "475 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "522",
    "title": "Apartment",
    "address": "Unit No. 82-2-1, Lebuhraya Batu Lancang, Taman Medan Penaga, 11600 Jelutong, Penang",
    "postcode": "11600",
    "state": "Penang",
    "area": "Jelutong",
    "reservePrice": 333000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "818 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "523",
    "title": "Apartment",
    "address": "Unit No. 104-12B-10, Persiaran Bayan Indah, Villa Emas Condo, 11900 Bayan Lepas, Penang",
    "postcode": "11900",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 328050,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "818 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "524",
    "title": "1 Storey Semi Detached House",
    "address": "No. 11A, Lorong Seri Putera 4, Taman Seri Putera, 14300 Nibong Tebal, Penang",
    "postcode": "14300",
    "state": "Penang",
    "area": "Nibong Tebal",
    "reservePrice": 420000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "003 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "525",
    "title": "1 Storey Terrace House",
    "address": "No. 22, Tingkat Impian Indah 2, Taman Impian Indah, 14000 Bukit Mertajam, Penang",
    "postcode": "14000",
    "state": "Penang",
    "area": "Bukit Mertajam",
    "reservePrice": 370000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "194 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "526",
    "title": "Apartment",
    "address": "Block A, Pangsapuri Perai Utama, Jalan Perai Utama 4, Taman Perai Utama, 13600, Perai, Penang",
    "postcode": "13600",
    "state": "Penang",
    "area": "Perai",
    "reservePrice": 260000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "753 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "527",
    "title": "Apartment",
    "address": "Unit No. 11-11-3, Tingkat Paya Terubong 5, Mukim 13, 11060, Penang",
    "postcode": "11060",
    "state": "Penang",
    "area": "Penang",
    "reservePrice": 129600,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "700 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "528",
    "title": "Flat",
    "address": "Unit No. 3-8-6, Taman Terubong Indah, Tingkat Paya Terubong 5, 11060, Penang",
    "postcode": "11060",
    "state": "Penang",
    "area": "Penang",
    "reservePrice": 170000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "700 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "529",
    "title": "Apartment",
    "address": "Unit No. 17-22-3, Block 17, Hilir Sungai Pinang, Serina Bay, 11600 Jelutong, Penang",
    "postcode": "11600",
    "state": "Penang",
    "area": "Jelutong",
    "reservePrice": 292000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "700 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "530",
    "title": "Flat",
    "address": "Unit No. 1-4-1, Lebuh Padang Tembak, Taman Air Itam, 11400 Georgetown, Penang",
    "postcode": "11400",
    "state": "Penang",
    "area": "Georgetown",
    "reservePrice": 285000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "700 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "531",
    "title": "2 Storey Terrace House",
    "address": "Jalan Tasek Gelugor Utama 2, Taman Tasek Gelugor Utama, 13300 Tasek Gelugor, Penang",
    "postcode": "13300",
    "state": "Penang",
    "area": "Tasek Gelugor",
    "reservePrice": 342000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "220 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "532",
    "title": "2 Storey Terrace Shop Office",
    "address": "No. 8, Persiaran Seri Iskandar Prima 4, Taman Iskandar Prima, 32610 Seri Iskandar, Perak",
    "postcode": "32610",
    "state": "Perak",
    "area": "Seri Iskandar",
    "reservePrice": 252000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "421 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "533",
    "title": "2 Storey Terrace House",
    "address": "No. 9, Lebuh Pengkalan Barat 12, Taman Pengkalan Barat, 31650 Ipoh, Perak",
    "postcode": "31650",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 333000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "765 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "534",
    "title": "2 Storey Terrace House",
    "address": "Laluan Tronoh Universiti 8, Taman Tronoh Universiti, 31750 Tronoh, Perak",
    "postcode": "31750",
    "state": "Perak",
    "area": "Tronoh",
    "reservePrice": 280000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "680 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "535",
    "title": "1 Storey Semi Detached House",
    "address": "No. 7, Jalan Murni 1, Taman Kurau Murni, Kuala Kurau, Perak",
    "postcode": "",
    "state": "Perak",
    "area": "Kuala Kurau",
    "reservePrice": 280000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "519 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "536",
    "title": "2 Storey Terrace House",
    "address": "No. 60, Simpang Tiga Perumahan (Laluan Tai Chong 3), Taman Tai Chong, 31100 Sungai Siput (U), Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput (U)",
    "reservePrice": 220000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "603 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "537",
    "title": "2 Storey Terrace House",
    "address": "No. 28, Jalan Bercham Utama 10, Anjung Bercham Utama, 31400 Bercham, Perak",
    "postcode": "31400",
    "state": "Perak",
    "area": "Bercham",
    "reservePrice": 240000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "194 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "538",
    "title": "Terrace House",
    "address": "No. 31, Persiaran Kinta Permai 2/2, Taman Kinta Permai, 31000 Batu Gajah, Perak",
    "postcode": "31000",
    "state": "Perak",
    "area": "Batu Gajah",
    "reservePrice": 310000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "765 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "539",
    "title": "2 Storey Terrace House",
    "address": "No. 20, Laluan Bercham Utara 15, Taman Utama, 31400 Ipoh, Perak",
    "postcode": "31400",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 171000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "958 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "540",
    "title": "3 Storey Shop Office",
    "address": "No. 85, Taman Dindings, 32400 Ayer Tawar, Perak",
    "postcode": "32400",
    "state": "Perak",
    "area": "Ayer Tawar",
    "reservePrice": 648000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "433 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "541",
    "title": "1 Storey Terrace House",
    "address": "No. 12, Laluan Sri Klebang 2, Taman Sri Klebang, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 300000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "604 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "542",
    "title": "2 Storey Semi Detached House",
    "address": "No. 1 (PT 2470), Jalan Pusing, 31000 Batu Gajah, Perak",
    "postcode": "31000",
    "state": "Perak",
    "area": "Batu Gajah",
    "reservePrice": 216000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "338 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "543",
    "title": "2 Storey Linked House",
    "address": "No. 60, Taman Cempaka, Kampung Koh, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 189000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "948 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "544",
    "title": "1 Storey Cluster Semi Detached House",
    "address": "No. 20, Jalan Lapangan Saujana 8, Panorama Lapangan Saujana @ Green Park, 31650 Ipoh, Perak",
    "postcode": "31650",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 430000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "239 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "545",
    "title": "2 Storey Terrace House",
    "address": "No. 58, Sri Klebang E/9, Bandar Baru Sri Klebang, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 380000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "546",
    "title": "1 Storey Terrace House",
    "address": "No. 24, Jalan Segar Utama, Taman Segar, 35900 Tanjung Malim, Perak",
    "postcode": "35900",
    "state": "Perak",
    "area": "Tanjung Malim",
    "reservePrice": 160000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "547",
    "title": "1 Storey Terrace House",
    "address": "No. 210, Lorong Cermai 8/3, Taman Putra Jaya, Off Jalan Tanjung Bendahara, 05300 Alor Setar, Kedah",
    "postcode": "05300",
    "state": "Kedah",
    "area": "Alor Setar",
    "reservePrice": 245000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "180 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "548",
    "title": "2 Storey Terrace House",
    "address": "No. 41, Jalan Sena 2, Taman Sena, 06010 Changlun, Kedah",
    "postcode": "06010",
    "state": "Kedah",
    "area": "Changlun",
    "reservePrice": 307800,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "540 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "549",
    "title": "Semi Detached House",
    "address": "No. 184, Fasa 2, Taman Juragan, Jalan Kuala Kedah, 06600 Kuala Kedah, Kedah",
    "postcode": "06600",
    "state": "Kedah",
    "area": "Kuala Kedah",
    "reservePrice": 307800,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "551 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "550",
    "title": "1 Storey Semi Detached House",
    "address": "No. B-42, Taman Armada Fasa 2, Jalan Kuala Kedah, 06600 Alor Setar, Kedah",
    "postcode": "06600",
    "state": "Kedah",
    "area": "Alor Setar",
    "reservePrice": 396000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "567 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "551",
    "title": "Agricultural Land",
    "address": "PT No. 1244, Tempat Bukit Tegor, Off Jalan Pendang Gajah Putih, Pendang, Kedah",
    "postcode": "",
    "state": "Kedah",
    "area": "Pendang",
    "reservePrice": 160000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "552",
    "title": "2 Storey Terrace House",
    "address": "No. 3095, Lorong 2, Taman PKNK, Jalan Tun Abdul Razak, 05200 Alor Setar, Kedah",
    "postcode": "05200",
    "state": "Kedah",
    "area": "Alor Setar",
    "reservePrice": 288000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "959 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "553",
    "title": "2 Storey Terrace House",
    "address": "No. 102, Jalan Suria Jaya 5, Taman Suria Jaya, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 350000,
    "auctionDate": "27 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "603 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "554",
    "title": "[Prime tourist location in Batu Ferringhi] Apartment [Beachfront destinations - walking distance to Batu Ferringhi Beach]",
    "address": "Unit No. 3-20-9, Solok Sungai Emas 2, Ceria Residence, 11000 Batu Feringgi, Penang",
    "postcode": "11000",
    "state": "Penang",
    "area": "Batu Feringgi",
    "reservePrice": 132861,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "700 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "555",
    "title": "Service Apartment",
    "address": "Pangsapuri Luminari, Jalan Harbour Place 1, 12100 Butterworth, Penang",
    "postcode": "12100",
    "state": "Penang",
    "area": "Butterworth",
    "reservePrice": 342630,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "958 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "556",
    "title": "[10 min to Straits Quay Marina Mall & Gurney Plaza] Apartment [Near to Tenby Schools Penang & TAR UMT Penang Branch]",
    "address": "Unit No. 6B-31-11, Persiaran Halia 3, Tri Pinnacle, 10470, Penang",
    "postcode": "10470",
    "state": "Penang",
    "area": "Penang",
    "reservePrice": 335350,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "800 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "557",
    "title": "[Newly completed in 2021] Apartment [6 min to Penang Free School & Fresh 2U Grocer]",
    "address": "Unit No. 40A-27-03A, Lorong Slim, Setia Sky Ville, 11600 Jelutong, Penang",
    "postcode": "11600",
    "state": "Penang",
    "area": "Jelutong",
    "reservePrice": 810000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "432 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "558",
    "title": "Condominium",
    "address": "Unit No. 1B-32-6, The Peak Residences, Persiaran Halia 3, 10470, Penang",
    "postcode": "10470",
    "state": "Penang",
    "area": "Penang",
    "reservePrice": 522000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "100 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "559",
    "title": "Terrace House",
    "address": "Jalan Veerappen, Off Jalan Bukit Panchor, 14300 Nibong Tebal, Penang",
    "postcode": "14300",
    "state": "Penang",
    "area": "Nibong Tebal",
    "reservePrice": 425000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "212 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "560",
    "title": "Flat",
    "address": "Unit No. 1-14-6, Jalan Veterinary, 10150, Penang",
    "postcode": "10150",
    "state": "Penang",
    "area": "Penang",
    "reservePrice": 150903,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "650 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "561",
    "title": "Condominium",
    "address": "Unit No. 2A-11-3, Halaman Bukit Gambir, 11700, Penang",
    "postcode": "11700",
    "state": "Penang",
    "area": "Penang",
    "reservePrice": 430000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "742 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "562",
    "title": "Apartment",
    "address": "Lintang Sungai Ara 7, Gardens Ville, 11900 Bayan Lepas, Penang",
    "postcode": "11900",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 550000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "109 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "563",
    "title": "Studio Service Apartment",
    "address": "Unit No. B-10-1017 (Unit No. 8914, 9th Floor), SL Block B, Bukit Merah Laketown, 34400 Simpang Ampat, Semanggol, Perak",
    "postcode": "34400",
    "state": "Perak",
    "area": "Semanggol",
    "reservePrice": 9266,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "315 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "564",
    "title": "Service Apartment",
    "address": "Unit No. A-7-705 (also known as Unit No. 7644 (B/705), SL Block A, Bukit Merah Laketown, 34400 Simpang Ampat, Semanggol, Perak",
    "postcode": "34400",
    "state": "Perak",
    "area": "Semanggol",
    "reservePrice": 12427,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "452 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "565",
    "title": "Service Apartment in Bukit Merah Laketown, Semanggol",
    "address": "Unit No. H-2-221 (6588), LS Block H, Bukit Merah Laketown, 34400 Simpang Ampat, Semanggol, Perak",
    "postcode": "34400",
    "state": "Perak",
    "area": "Semanggol",
    "reservePrice": 8368,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "310 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "566",
    "title": "Studio Service Apartment",
    "address": "Unit No. C-1-113 (also known on site as Unit No. 5353), PV Block C, Bukit Merah Laketown, 34400 Simpang Ampat, Semanggol, Perak",
    "postcode": "34400",
    "state": "Perak",
    "area": "Semanggol",
    "reservePrice": 8368,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "307 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "567",
    "title": "Studio Service Apartment",
    "address": "Unit No. J-2-216 (Room No. 6457), Laketown Serviced Apartments, Block J, Bukit Merah Laketown, 34400 Simpang Ampat, Semanggol, Perak",
    "postcode": "34400",
    "state": "Perak",
    "area": "Semanggol",
    "reservePrice": 7748,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "310 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "568",
    "title": "Service Apartment",
    "address": "Unit No. H-2-223A (Unit No. 6591), LS Block H (2nd Floor, Block D), Bukit Merah Laketown, 34400 Simpang Ampat, Semanggol, Perak",
    "postcode": "34400",
    "state": "Perak",
    "area": "Semanggol",
    "reservePrice": 12398,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "478 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "569",
    "title": "[Close to lakeside attractions & resort facilities] Apartment [Seamless connectivity to Taiping town]",
    "address": "Unit No. 2-2-06, Block 2, Tropicana Apartment, Bukit Merah Laketown, 34400 Simpang Ampat Semanggol, Perak",
    "postcode": "34400",
    "state": "Perak",
    "area": "Simpang Ampat Semanggol",
    "reservePrice": 27550,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "803 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "570",
    "title": "[Close to lakeside attractions & resort facilities] Apartment [Seamless connectivity to Taiping town]",
    "address": "Unit No. 2-2-01, Block 2, Tropicana Apartment, Bukit Merah Laketown, 34400 Simpang Empat, Semanggol, Perak",
    "postcode": "34400",
    "state": "Perak",
    "area": "Semanggol",
    "reservePrice": 27550,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "803 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "571",
    "title": "[4 min to Orang Utan Island] Studio Service Apartment [6 min to Bukit Merah Laketown Waterpark]",
    "address": "Unit No. C-2-235, (Room No. 5417), Palm View Serviced Apartments, Block C, Bukit Merah Laketown, 34400 Simpang Ampat Semanggol, Perak",
    "postcode": "34400",
    "state": "Perak",
    "area": "Simpang Ampat Semanggol",
    "reservePrice": 7086,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "307 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "572",
    "title": "[5 min to Lost World of Tambun Theme Park] Luxury Condominium [7 min to TF Value-Mart Tambun]",
    "address": "Unit No. C-3-8, Tower Cycas, The Haven Lakeside Residences, Persiaran Lembah Perpaduan (Jalan Haven), 31150 Ulu Kinta, Perak",
    "postcode": "31150",
    "state": "Perak",
    "area": "Ulu Kinta",
    "reservePrice": 531441,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "984 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "573",
    "title": "2 Storey Shop Office together with a level of basement floor",
    "address": "No. 42A-1 & 42A-2, Gerbang Rapat 1, Gerbang Maju Rapat, 31350 lpoh, Perak",
    "postcode": "31350",
    "state": "Perak",
    "area": "lpoh",
    "reservePrice": 729000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "574",
    "title": "Studio Service Apartment",
    "address": "Unit No. G-1-137 (Room No. 6278), Laketown Serviced Apartments, Blok G, Bukit Merah Laketown, 34400 Simpang Ampat Semanggol, Perak",
    "postcode": "34400",
    "state": "Perak",
    "area": "Simpang Ampat Semanggol",
    "reservePrice": 10935,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "310 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "575",
    "title": "Apartment",
    "address": "Unit No. A103, First Floor, Pangkor Puteri Apartment, Jalan Sekolah, 32300 Pangkor, Perak",
    "postcode": "32300",
    "state": "Perak",
    "area": "Pangkor",
    "reservePrice": 110000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "720 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "576",
    "title": "2 Storey Terrace House",
    "address": "No. 2142, Jalan Seksyen 2/4, Bandar Barat, 31900 Kampar, Perak",
    "postcode": "31900",
    "state": "Perak",
    "area": "Kampar",
    "reservePrice": 208000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "440 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "577",
    "title": "1 Storey Terrace House",
    "address": "No. 66, Laluan Hulu Bercham 8, Bandar Baru Putra, 31400 Ipoh, Perak",
    "postcode": "31400",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 152280,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "578",
    "title": "2 Storey Terrace House",
    "address": "No. 22, Taman Cempaka, Kampung Koh, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 140000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "883 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "579",
    "title": "2 Storey Terrace House",
    "address": "No. 22, Laluan Prisma 13, Taman Pengkalan Prisma, 31550 Pusing, Perak",
    "postcode": "31550",
    "state": "Perak",
    "area": "Pusing",
    "reservePrice": 234000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "300 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "580",
    "title": "2 Storey Terrace House",
    "address": "No. 33, Persiaran Klebang Selatan 3B, Klebang Tekoma, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 360000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "581",
    "title": "1 Storey Terrace House",
    "address": "No. 189, Jalan Mulia 7, Taman Mulia, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 346000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "646 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "582",
    "title": "1 Storey Semi Detached House",
    "address": "No. 12, Lebuh Pegoh Timur 17,Taman Lapangan SSI, 31650 IPoh, Perak",
    "postcode": "31650",
    "state": "Perak",
    "area": "IPoh",
    "reservePrice": 370000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "896 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "583",
    "title": "1 Storey Terrace House",
    "address": "No. 26, Tingkat Zarib 4C, Taman Pinji Mewah, Lahat, 31500 Ipoh, Perak",
    "postcode": "31500",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 215000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "099 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "584",
    "title": "Apartment",
    "address": "Unit No. 3-1-07, LFV Blok 3, Bukit Merah Laketown, 34400 Simpang Ampat Semanggol, Perak",
    "postcode": "34400",
    "state": "Perak",
    "area": "Simpang Ampat Semanggol",
    "reservePrice": 28698,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "904 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "585",
    "title": "Studio Apartment",
    "address": "Unit No. F-2-223A (Unit No. 6201, 2nd Floor, Block A), LS Block F, Bukit Merah Laketown, 34400 Simpang Ampat, Semanggol, Perak",
    "postcode": "34400",
    "state": "Perak",
    "area": "Semanggol",
    "reservePrice": 8610,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "310 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "586",
    "title": "Studio Service Apartment",
    "address": "Unit No. B-1-107 (Room No. 8008), Block B, Suria Laketown, Bukit Merah Laketown, 34400 Simpang Ampat Semanggol, Perak",
    "postcode": "34400",
    "state": "Perak",
    "area": "Simpang Ampat Semanggol",
    "reservePrice": 11294,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "315 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "587",
    "title": "Terrace House",
    "address": "No. 9, Lorong Sri Bahagia 1, Taman Sri Bahagia, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 310000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "588",
    "title": "1 Storey Terrace House",
    "address": "No. 127, Lorong Jelawat 6, Taman Jelawat, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 270000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "055 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "589",
    "title": "Flat",
    "address": "Unit No. B/2-14, Rumah Pangsa Taman Jati, 09000 Kulim, Kedah",
    "postcode": "09000",
    "state": "Kedah",
    "area": "Kulim",
    "reservePrice": 59049,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "613 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "590",
    "title": "2 Storey Terrace House",
    "address": "No. 46, Lorong Sutera 1/3, Taman Sutera Suria, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 333000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "679 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "591",
    "title": "2 Storey Terrace House",
    "address": "No. 486, Jalan PR1MA 13, PR1MA Residensi Utama, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 315000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "792 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "592",
    "title": "1 Storey Terrace House",
    "address": "No. 43, Lorong Kenangan 1, Taman Kenangan, 09410 Padang Serai, Kedah",
    "postcode": "09410",
    "state": "Kedah",
    "area": "Padang Serai",
    "reservePrice": 153000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "120 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "593",
    "title": "2 Storey Terrace House",
    "address": "No. 2A, Lorong BLM 5/24, Bandar Laguna Merbok, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 440000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "625 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "594",
    "title": "2 Storey Terrace House",
    "address": "No. 519, Jalan Batik 1/2 A, Taman Batik, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 350000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "595",
    "title": "2 Storey Terrace House",
    "address": "Jalan Saujana 2/11, Bandar SP Saujana, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 620000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "247 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "596",
    "title": "1 Storey Terrace House",
    "address": "No. 1338, Jalan Mahsuri 9/D, Taman Mahsuri, 09400 Padang Serai, Kedah",
    "postcode": "09400",
    "state": "Kedah",
    "area": "Padang Serai",
    "reservePrice": 260000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "200 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "597",
    "title": "2 Storey Terrace House",
    "address": "No. 167, Jalan Bintang Maya 2/6, Bintang Maya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 450000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "074 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "598",
    "title": "1 Storey Semi Detached House",
    "address": "No. 92, Lorong Sepilai 3, Taman Sepilai, 09000 Kulim, Kedah",
    "postcode": "09000",
    "state": "Kedah",
    "area": "Kulim",
    "reservePrice": 220000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "779 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "599",
    "title": "Retail Lot",
    "address": "Unit No. F12, First Floor, Kompleks SP Plaza, Jalan Ibrahim, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 60000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "600",
    "title": "2 Storey Terrace House",
    "address": "Lorong Kota Kenari 2/5, Kota Kenari, 09000 Kulim, Kedah",
    "postcode": "09000",
    "state": "Kedah",
    "area": "Kulim",
    "reservePrice": 450000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "496 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "601",
    "title": "1 Storey Terrace House",
    "address": "No. 182, Jalan Tanjung Puteri 5, Taman Tanjung Puteri, 09300, Kuala Ketil, Kedah",
    "postcode": "09300",
    "state": "Kedah",
    "area": "Kuala Ketil",
    "reservePrice": 220000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "990 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "602",
    "title": "Apartment",
    "address": "Unit No. 7-10, Pangsapuri Juru Ria, Jalan Juru 2, 14100 Simpang Ampat, Penang",
    "postcode": "14100",
    "state": "Penang",
    "area": "Simpang Ampat",
    "reservePrice": 292000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "312 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "603",
    "title": "Service Apartment",
    "address": "Unit No. 27-06, Pangsapuri Servis Metro, Jalan Perda Utara 1, 14000 Bukit Mertajam, Penang",
    "postcode": "14000",
    "state": "Penang",
    "area": "Bukit Mertajam",
    "reservePrice": 400000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "076 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "604",
    "title": "[4 min to Billion Bandar Baru Setia Awan Perdana] 1 Storey Terrace House [8 min to Pekan Gurney Market]",
    "address": "No. 870, Jalan Residen 3/21, Residen 3, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 96000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "605",
    "title": "Duplex Penthouse Apartment",
    "address": "Lapangan Perdana 19, Pangsapuri Lapangan Perdana (Treetops Residency), 31350 Ipoh, Perak",
    "postcode": "31350",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 492075,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "530 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "606",
    "title": "2 Storey Semi Detached House",
    "address": "No. 339 (Lot 41482), Taman Hijau I, Kampung Koh, 32000 Sitiawan, Perak",
    "postcode": "41482",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 1020600,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "866 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "607",
    "title": "Apartment",
    "address": "Unit No. K-2-13, Jalan Klebang Sentosa 2, Apartment Casa Klebang 1, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 180000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "850 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "608",
    "title": "Town House",
    "address": "Blok 1, Aras 3, Persiaran Residensi, Bandar Agacia (The Residence @ Kampar), 31910 Kampar, Perak",
    "postcode": "31910",
    "state": "Perak",
    "area": "Kampar",
    "reservePrice": 360000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "097 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "609",
    "title": "2 Storey Terrace House",
    "address": "No. 133, Jalan Lestari 6, Lestari IUS, 32610 Seri Iskandar, Perak",
    "postcode": "32610",
    "state": "Perak",
    "area": "Seri Iskandar",
    "reservePrice": 208000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "044 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "610",
    "title": "2 Storey Terrace House",
    "address": "No. 12, Margosa E/5, Bandar Seri Botani, 31350 Ipoh, Perak",
    "postcode": "31350",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 360000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "864 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "611",
    "title": "1 Storey Terrace House",
    "address": "No. 7, Taman Seri Kerian, Rumah Awam Bagan Serai, 34300 Bagan Serai, Perak",
    "postcode": "34300",
    "state": "Perak",
    "area": "Bagan Serai",
    "reservePrice": 84000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "023 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "612",
    "title": "1 Storey Terrace House",
    "address": "No. 45, Taman Rasa Sayang, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 168000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "760 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "613",
    "title": "2 Storey Terrace House",
    "address": "No. 74, Jalan Melati 2/2, Taman Melati, 32200 Lumut, Perak",
    "postcode": "32200",
    "state": "Perak",
    "area": "Lumut",
    "reservePrice": 200000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "958 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "614",
    "title": "2 Storey Cluster Semi Detached House",
    "address": "No. 19, Lebuh Bercham Selatan 1/16, Taman Bercham Mas, 31400 Ipoh, Perak",
    "postcode": "31400",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 450000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "615",
    "title": "Shop Office",
    "address": "Unit No. 23-1-1, Jalan Kampar Barat 3, Taman Kampar Barat, 31900 Kampar, Perak",
    "postcode": "31900",
    "state": "Perak",
    "area": "Kampar",
    "reservePrice": 18000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "312 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "616",
    "title": "Apartment",
    "address": "Unit No. D2-5, Jalan Desa Tambun, Desa Tambun, 31400 Ipoh, Perak",
    "postcode": "31400",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 108000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "012 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "617",
    "title": "1 Storey Terrace House",
    "address": "No. 164, Taman Lintang, 31100 Sungai Siput (U), Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput (U)",
    "reservePrice": 100000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "904 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "618",
    "title": "2 Storey Terrace House",
    "address": "No. 32, Jalan Kinding Hijauan 1, Taman Kinding Hijauan, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 320000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "619",
    "title": "1 Storey Terrace House",
    "address": "No. 998, Laluan Kledang 4/3, Taman Kledang, 31100 Sungai Siput (U), Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput (U)",
    "reservePrice": 128000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "620",
    "title": "2 Storey Terrace House",
    "address": "No. 51, Pesara Lahat Baru 8, Bandar Lahat Baru, 31500 Lahat, Perak",
    "postcode": "31500",
    "state": "Perak",
    "area": "Lahat",
    "reservePrice": 85050,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "904 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "621",
    "title": "2 Storey Terrace House",
    "address": "No. 7, Lorong Mawar 8, Taman Juta Intan II, Jalan Merbok, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 495000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "647 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "622",
    "title": "1 Storey Detached House",
    "address": "No. 15, Persiaran Gopeng 2, Taman Golf, 31350 Ipoh, Perak",
    "postcode": "31350",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 477000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "342 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "623",
    "title": "2 Storey Terrace House",
    "address": "No. 101, Jalan Gemilang 2/1, Taman Gemilang, 32610 Seri Iskandar, Perak",
    "postcode": "32610",
    "state": "Perak",
    "area": "Seri Iskandar",
    "reservePrice": 300000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "624",
    "title": "2 Storey Terrace House",
    "address": "No. 728, Jalan PR1MA 15, PR1MA Residensi Utama, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 360000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "466 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "625",
    "title": "1 Storey Semi Detached House",
    "address": "No. 2317, Jalan Permata 13/7, Bandar Permata Lunas, 09600 Lunas, Kedah",
    "postcode": "09600",
    "state": "Kedah",
    "area": "Lunas",
    "reservePrice": 324000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "379 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "626",
    "title": "Terrace House",
    "address": "Lorong Melor 1/2, Taman Melor & Melor Indah, 09000 Kulim, Kedah",
    "postcode": "09000",
    "state": "Kedah",
    "area": "Kulim",
    "reservePrice": 160000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "720 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "627",
    "title": "Semi Detached House",
    "address": "Jalan Merbau 1, Taman Merbau Jaya, Merbau Pulas, 09410 Padang Meha, Kedah",
    "postcode": "09410",
    "state": "Kedah",
    "area": "Padang Meha",
    "reservePrice": 310000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "239 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "628",
    "title": "1 Storey Detached House",
    "address": "No. 138-A, Jalan Bistari Jaya 11, Taman Bistari Utama, 08100 Bedong, Kedah",
    "postcode": "08100",
    "state": "Kedah",
    "area": "Bedong",
    "reservePrice": 530000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "372 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "629",
    "title": "1 Storey Terrace House",
    "address": "No. 316, Jalan Anggerik 4/12, Bandar Amanjaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 162000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "206 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "630",
    "title": "1 Storey Semi Detached House",
    "address": "No. 88, Jalan Yarra 1/7, Bandar Puteri Jaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 485000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "800 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "631",
    "title": "2 Storey Semi Detached House",
    "address": "No. 125, Lorong Seri Akasia 1/2, Taman Seri Akasia, 09000 Kulim, Kedah",
    "postcode": "09000",
    "state": "Kedah",
    "area": "Kulim",
    "reservePrice": 640000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "520 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "632",
    "title": "1 Storey Terrace House",
    "address": "No. 132, Jalan Puyu, Taman Seluang, 09000 Kulim, Kedah",
    "postcode": "09000",
    "state": "Kedah",
    "area": "Kulim",
    "reservePrice": 250000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "160 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "633",
    "title": "Terrace House",
    "address": "Lorong Bunga Raya 10, Taman Bunga Raya, 09400 Padang Serai, Kedah",
    "postcode": "09400",
    "state": "Kedah",
    "area": "Padang Serai",
    "reservePrice": 120000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "738 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "634",
    "title": "Terrace House",
    "address": "No. 2102, Lorong Kenari 12/3, Taman Kenari, 09000 Kulim, Kedah",
    "postcode": "09000",
    "state": "Kedah",
    "area": "Kulim",
    "reservePrice": 256000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "635",
    "title": "Terrace House",
    "address": "No. 85, Jalan Bintang Maya 2/2, Bintang Maya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 262440,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "636",
    "title": "1 Storey Terrace House",
    "address": "Jalan Salad 4, Taman Salad, 09600, Kedah",
    "postcode": "09600",
    "state": "Kedah",
    "area": "Kedah",
    "reservePrice": 300000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "637",
    "title": "1 Storey Semi Detached House",
    "address": "No. 61, Jalan Mewah 1, Taman Mewah, 09600 Lunas, Kedah",
    "postcode": "09600",
    "state": "Kedah",
    "area": "Lunas",
    "reservePrice": 335000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "561 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "638",
    "title": "1 Storey Semi Detached House",
    "address": "Lorong Cendana 1/1, Taman Cendana, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 425000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "595 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "639",
    "title": "2 Storey Terrace House",
    "address": "No. 1237, Jalan Bandar Puteri Jaya 2/17C, Seksyen 2, Bandar Puteri Jaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 255150,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "640",
    "title": "Terrace House",
    "address": "No. 634, Lorong Angsana 17, Taman Keladi, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 320000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "641",
    "title": "1 Storey Semi Detached House",
    "address": "No. 61, Jalan Songket 2, Taman Songket, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 202500,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "917 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "642",
    "title": "1 Storey Terrace House",
    "address": "No. 153A, Jalan Kemboja 20/1, Bandar Amanjaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 170000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "643",
    "title": "Terrace House",
    "address": "No. 46B, Jalan Lembah Merbok 2, Taman Lembah Merbok, 08400 Merbok, Kedah",
    "postcode": "08400",
    "state": "Kedah",
    "area": "Merbok",
    "reservePrice": 162000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "644",
    "title": "1 Storey Terrace House",
    "address": "No. 83A, Jalan Kemboja 20, Bandar Amanjaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 178200,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "645",
    "title": "1 Storey Terrace House",
    "address": "No. 19, Jalan 2, Taman Merbok Permai, 08400 Merbok, Kedah",
    "postcode": "08400",
    "state": "Kedah",
    "area": "Merbok",
    "reservePrice": 180000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "646",
    "title": "Apartment",
    "address": "Unit No. 224D-4-4, Jalan Jelutong, Taman Cemerlang, 11600 Jelutong, Penang",
    "postcode": "11600",
    "state": "Penang",
    "area": "Jelutong",
    "reservePrice": 237000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "721 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "647",
    "title": "Apartment",
    "address": "Unit No. 29-8-9, Block 29, Medan Ria Apartment, Jalan Samak, 10150 Georgetown, Penang",
    "postcode": "10150",
    "state": "Penang",
    "area": "Georgetown",
    "reservePrice": 240570,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "700 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "648",
    "title": "2 Storey Detached House",
    "address": "Lorong Mesra, Taman Keenways, 14000 Bukit Mertajam, Penang",
    "postcode": "14000",
    "state": "Penang",
    "area": "Bukit Mertajam",
    "reservePrice": 532170,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "099 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "649",
    "title": "2 Storey Semi Detached House",
    "address": "No. 2, Lintang Tembaga, Taman Guan Joo Seng, 11600 Jelutong, Penang",
    "postcode": "11600",
    "state": "Penang",
    "area": "Jelutong",
    "reservePrice": 1458000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "292 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "650",
    "title": "Duplex Apartment",
    "address": "Unit No. M-17, Block Orkid, Lengkok Kelicap, MK. 12, 11900 Bayan Lepas, Penang",
    "postcode": "11900",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 315000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "958 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "651",
    "title": "Apartment",
    "address": "Halaman Mayang Pasir, Mahsuri Square, 11950 Bayan Lepas, Penang",
    "postcode": "11950",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 477000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "130 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "652",
    "title": "Town House",
    "address": "Unit No. B-1-09, Lorong Indera Putera 4, Kondo Villa Putera, 13200 Kepala Batas, Penang",
    "postcode": "13200",
    "state": "Penang",
    "area": "Kepala Batas",
    "reservePrice": 234900,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "087 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "653",
    "title": "Flat",
    "address": "Unit No. 3C-02-08, Jalan Batu Uban, Mukim 13, 11700 Glugor, Penang",
    "postcode": "11700",
    "state": "Penang",
    "area": "Glugor",
    "reservePrice": 275400,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "700 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "654",
    "title": "Flat",
    "address": "Unit No. 2B-4-23, Jalan Pulau Betong, Taman Desa Genting, 11000 Balik Pulau, Penang",
    "postcode": "11000",
    "state": "Penang",
    "area": "Balik Pulau",
    "reservePrice": 110000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "495 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "655",
    "title": "Flat",
    "address": "Unit No. 5-25-10, Lengkok Angsana, Mukim 13, 11500 Ayer Itam, Penang",
    "postcode": "11500",
    "state": "Penang",
    "area": "Ayer Itam",
    "reservePrice": 189540,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "700 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "656",
    "title": "Town House",
    "address": "Unit No. F-G-31, Lorong Indera Putera 10, Kondo Villa Putera, 13200 Kepala Batas, Penang",
    "postcode": "13200",
    "state": "Penang",
    "area": "Kepala Batas",
    "reservePrice": 219794,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "012 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "657",
    "title": "2 Storey Shop Office",
    "address": "No. 16, Jalan Kuala Jalan Baru, Taman Prestij III, 11000 Balik Pulau, Penang",
    "postcode": "11000",
    "state": "Penang",
    "area": "Balik Pulau",
    "reservePrice": 891000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "206 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "658",
    "title": "Condominium",
    "address": "Unit No. 28D-11-1, Block 28D, Jalan Pantai Miami, Miami Green, 11100 Batu Ferringgi, Penang",
    "postcode": "11100",
    "state": "Penang",
    "area": "Batu Ferringgi",
    "reservePrice": 321000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "076 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "659",
    "title": "Apartment",
    "address": "Unit No. 86-4-13, Block 86, Persiaran Paya Terubong 2, Desa Indah, 11900 Bayan Lepas, Penang",
    "postcode": "11900",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 189000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "657 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "660",
    "title": "Condominium",
    "address": "Unit No. 10B-1-1, Pearl View Condominium, Jalan Bunga Pudak, 11200 Tanjung Bungah, Penang",
    "postcode": "11200",
    "state": "Penang",
    "area": "Tanjung Bungah",
    "reservePrice": 1100000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "443 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "661",
    "title": "Condominium",
    "address": "Unit No. 2-6-1, The Straits Regency, Persiaran Tanjung Bungah, 11200 Tanjung Bungah, Penang",
    "postcode": "11200",
    "state": "Penang",
    "area": "Tanjung Bungah",
    "reservePrice": 710000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "916 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "662",
    "title": "Condominium",
    "address": "Unit No. 5-02, Block B, Kondominium Mutiara, Jalan Perda Barat, 14000 Bukit Mertajam, Penang",
    "postcode": "14000",
    "state": "Penang",
    "area": "Bukit Mertajam",
    "reservePrice": 230000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "700 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "663",
    "title": "Apartment",
    "address": "Unit No. 9-01, Pangsapuri Prima Aman, Lorong Perai Utama 8, Taman Perai Utama, 13600 Perai, Penang",
    "postcode": "13600",
    "state": "Penang",
    "area": "Perai",
    "reservePrice": 243000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "055 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "664",
    "title": "2 Storey Town House",
    "address": "Unit No. 3-66, Tingkat Atas, Jalan Bunga Tongkeng, 10470, Penang",
    "postcode": "10470",
    "state": "Penang",
    "area": "Penang",
    "reservePrice": 530000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "475 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "665",
    "title": "1 Storey Terrace House",
    "address": "No. 354, Taman Dindings, 32400 Ayer Tawar, Perak",
    "postcode": "32400",
    "state": "Perak",
    "area": "Ayer Tawar",
    "reservePrice": 116700,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "647 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "666",
    "title": "1 Storey Terrace House",
    "address": "No. 1021, Jalan Residen 4/15, Residen 4, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 178200,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "667",
    "title": "1 Storey Terrace House",
    "address": "No. 736, Jalan Residen 8/13, Residen 8, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 162000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "668",
    "title": "1 Storey Linked House",
    "address": "No. 465, Laluan Bercham Selatan, Taman Bercham Aman, 31400 Ipoh, Perak",
    "postcode": "31400",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 130000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "950 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "669",
    "title": "1 Storey Terrace House",
    "address": "No. 899, Jalan Residen 3/21, Residen 3, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 279000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "486 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "670",
    "title": "2 Storey Bungalow",
    "address": "No. 61A, Jalan Sri Klebang 2, Bandar Baru Sri Klebang, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 738000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "998 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "671",
    "title": "1 Storey Terrace House",
    "address": "No. 177, Jalan Residen 3/4, Residen 3, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 171000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "900 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "672",
    "title": "1 Storey Cluster Semi Detached House",
    "address": "No. 634, Jalan Residen 7/9, Residen 7, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 216000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "916 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "673",
    "title": "1 Storey Terrace House",
    "address": "Laluan Kota Lenggong 2, Taman Kota Lenggong, 33400 Lenggong, Perak",
    "postcode": "33400",
    "state": "Perak",
    "area": "Lenggong",
    "reservePrice": 160200,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "895 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "674",
    "title": "1 Storey Terrace House",
    "address": "No. 15, Pengkalan Bandaraya 21, Desa Pengkalan Bandaraya, 31500 Lahat, Perak",
    "postcode": "31500",
    "state": "Perak",
    "area": "Lahat",
    "reservePrice": 230000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "675",
    "title": "Apartment",
    "address": "Unit No. A-3A-9, Jalan Pusat Perniagaan Falim, Residensi Prima Falim, 30200 Ipoh, Perak",
    "postcode": "30200",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 200000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "785 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "676",
    "title": "2 Storey Semi Detached House",
    "address": "No. 74, Jalan Desa Manjung 2, Taman Desa Manjung, 32040 Seri Manjung, Perak",
    "postcode": "32040",
    "state": "Perak",
    "area": "Seri Manjung",
    "reservePrice": 430000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "099 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "677",
    "title": "2 Storey Terrace House",
    "address": "No. 28, Lintasan Bercham Timur 2, Taman Pakatan, 31400 Ipoh, Perak",
    "postcode": "31400",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 85000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "786 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "678",
    "title": "1 Storey Semi Detached House",
    "address": "No. 1, Jalan Klebang Mewah 9, Medan Klebang Mewah, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 387000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "768 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "679",
    "title": "Apartment",
    "address": "Unit No. A-15-17, Residensi Prima Falim, Jalan Pusat Perniagaan Falim, 30200 Ipoh, Perak",
    "postcode": "30200",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 173000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "785 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "680",
    "title": "1 Storey Terrace House",
    "address": "No. 924, Laluan Kledang 4/1, Taman Kledang, 31100 Sungai Siput (U), Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput (U)",
    "reservePrice": 190000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "681",
    "title": "1 Storey Terrace House",
    "address": "No. 6, Jalan Mahkota Kampar 5, Taman Mahkota Kampar, 31900 Kampar, Perak",
    "postcode": "31900",
    "state": "Perak",
    "area": "Kampar",
    "reservePrice": 260000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "682",
    "title": "1 Storey Terrace House",
    "address": "No. 2, Persiaran Putra 2, Taman Tasek Putra, 31750 Tronoh, Perak",
    "postcode": "31750",
    "state": "Perak",
    "area": "Tronoh",
    "reservePrice": 260000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "143 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "683",
    "title": "1 Storey Terrace House",
    "address": "No. 103, Lorong 2, Taman Melor, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 180000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "194 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "684",
    "title": "1 Storey Terrace House",
    "address": "No. 270, Persiaran Permai 8, Taman Permai, 35500, Bidor, Perak",
    "postcode": "35500",
    "state": "Perak",
    "area": "Bidor",
    "reservePrice": 100000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "685",
    "title": "1 Storey Terrace House",
    "address": "No. 40, Dataran Setia 4, Taman Bemban Setia, 31000 Batu Gajah, Perak",
    "postcode": "31000",
    "state": "Perak",
    "area": "Batu Gajah",
    "reservePrice": 162000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "099 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "686",
    "title": "1 Storey Terrace House",
    "address": "No. 911, Laluan Kledang 4/1, Taman Kledang, 31100 Sungai Siput (U), Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput (U)",
    "reservePrice": 121500,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "687",
    "title": "1 Storey Cluster House",
    "address": "No. 259, Jalan Harmonis 9, Taman Harmonis, 32610 Seri Iskandar, Perak",
    "postcode": "32610",
    "state": "Perak",
    "area": "Seri Iskandar",
    "reservePrice": 256000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "046 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "688",
    "title": "1 Storey Terrace House",
    "address": "No. 272, Laluan Kledang 1/7, Taman Kledang, 31100 Sungai Siput, Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput",
    "reservePrice": 179000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "980 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "689",
    "title": "1 Storey Cluster House",
    "address": "No. 20, Lorong Lagenda 5, Bandar Lagenda Teluk Intan, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 189000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "981 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "690",
    "title": "1 Storey Terrace House",
    "address": "No. 72, Taman Seri Jaya, 09110 Kuala Pegang, Kedah",
    "postcode": "09110",
    "state": "Kedah",
    "area": "Kuala Pegang",
    "reservePrice": 117000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "300 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "691",
    "title": "1 Storey Terrace House",
    "address": "No. 51, Jalan Universiti Bestari 3, Taman Universiti Bestari, 08100 Bedong, Kedah",
    "postcode": "08100",
    "state": "Kedah",
    "area": "Bedong",
    "reservePrice": 225000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "692",
    "title": "1 Storey Terrace House",
    "address": "No. 2296, Jalan Mutiara 9/4, Taman Mutiara, 09700 Karangan, Kedah",
    "postcode": "09700",
    "state": "Kedah",
    "area": "Karangan",
    "reservePrice": 330000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "830 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "693",
    "title": "2 Storey Semi Detached House",
    "address": "No. 441, Jalan Kenanga 3, Persiaran Amanjaya 5, Bandar Amanjaya, 08000 Sungai Lalang, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Lalang",
    "reservePrice": 470000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "004 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "694",
    "title": "1 Storey Terrace House",
    "address": "No. 271, Jalan Yarra 8/3, Bandar Puteri Jaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 400000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "959 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "695",
    "title": "2 Storey Terrace House",
    "address": "Taman Seri Ampang, Jalan Kilang Tebu, 05050 Alor Setar, Kedah",
    "postcode": "05050",
    "state": "Kedah",
    "area": "Alor Setar",
    "reservePrice": 450000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "696",
    "title": "Flat",
    "address": "Jalan Sungai Satu, Taman Pinang Emas, 11100 Batu Ferringhi, Penang",
    "postcode": "11100",
    "state": "Penang",
    "area": "Batu Ferringhi",
    "reservePrice": 166500,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "560 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "697",
    "title": "Flat",
    "address": "Unit No. 20-11-1, Bukit Saujana, Lorong Bukit Kukus, 11060 Paya Terubong, Penang",
    "postcode": "11060",
    "state": "Penang",
    "area": "Paya Terubong",
    "reservePrice": 200000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "689 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "698",
    "title": "2 Storey Terrace House",
    "address": "Lorong Machang Bubok 25, Taman Machang Bubok, 14000 Bukit Mertajam, Penang",
    "postcode": "14000",
    "state": "Penang",
    "area": "Bukit Mertajam",
    "reservePrice": 440000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "699",
    "title": "Condominium",
    "address": "Unit No. 7-7-3, Twin Towers, Persiaran Tanjung Bungah, 11200 Tanjung Bungah, Penang",
    "postcode": "11200",
    "state": "Penang",
    "area": "Tanjung Bungah",
    "reservePrice": 356400,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "249 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "700",
    "title": "2 Storey Terrace House",
    "address": "No. 82, Persiaran Rishah 22, Taman Silibin Ria, 30100 Ipoh, Perak",
    "postcode": "30100",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 539460,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "542 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "701",
    "title": "2 Storey Terrace House",
    "address": "No. 39, Jalan Tawas Impiana 2, Anjung Tawas Impiana, 30010 Ipoh, Perak",
    "postcode": "30010",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 304000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "342 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "702",
    "title": "Terrace House",
    "address": "No. 289, Lorong Mutiara 4, Taman Intan Mutiara, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 190000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "703",
    "title": "1 Storey Terrace House",
    "address": "No. 1466, Jalan Residen 1/22, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 153900,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "704",
    "title": "1 Storey Terrace House",
    "address": "No. 51, Lorong Tiga (Lorong Samudera Baru 3), Taman Samudera Baru, 32040 Seri Manjung, Perak",
    "postcode": "32040",
    "state": "Perak",
    "area": "Seri Manjung",
    "reservePrice": 162000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "705",
    "title": "2 Storey Shop House",
    "address": "No. 43 & 43A, Persiaran Loke Lim, Taman Loke Lim, 30010 Ipoh, Perak",
    "postcode": "30010",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 220000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "203 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "706",
    "title": "2 Storey Shop Office",
    "address": "Unit No. O11, Jalan SM1C/10, Fasa 1C3, 32040 Seri Manjung, Perak",
    "postcode": "32040",
    "state": "Perak",
    "area": "Seri Manjung",
    "reservePrice": 192000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "755 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "707",
    "title": "2 Storey Terrace House",
    "address": "No. 86, Jalan Desa Maju 3, Taman Desa Maju, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 141750,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "883 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "708",
    "title": "2 Storey Terrace House",
    "address": "No. 4, Jalan Pengkalan Bersatu 8, Desa Pengkalan Bersatu, 31500 Lahat, Perak",
    "postcode": "31500",
    "state": "Perak",
    "area": "Lahat",
    "reservePrice": 450000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "709",
    "title": "2 Storey Semi Detached House",
    "address": "No. 19, Jalan Presint 1/22, Darulaman Perdana, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 704700,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "177 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "710",
    "title": "1 Storey Semi Detached House",
    "address": "Lorong 4, Taman Sutera, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 288000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "536 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "711",
    "title": "2 Storey Terrace House",
    "address": "No. 3, Lorong BLM 2/12, Bandar Laguna Merbok, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 319500,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "220 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "712",
    "title": "1 Storey Semi Detached House",
    "address": "No. 199, Jalan Bukit Puteri 2/6, Bandar Puteri Jaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 485000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "816 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "713",
    "title": "2 Storey Semi Detached House",
    "address": "No. 86, Jalan Saujana 3/8, Bandar SP Saujana, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 630000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "601 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "714",
    "title": "2 Storey Terrace House",
    "address": "No. 343A, Jalan Seri Bayu 2/11, Taman Seri Bayu, Sungai Lalang, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 300000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "380 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "715",
    "title": "1 Storey Semi Detached House",
    "address": "No. 253, Jalan SP Heights 6, SP Heights, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 203391,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "637 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "716",
    "title": "1 Storey Semi Detached House",
    "address": "No. 779, Jalan Bandar Puteri Jaya 3/13, Bandar Puteri Jaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 422820,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "265 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "717",
    "title": "1 Storey Semi Detached House",
    "address": "No. 1112, Jalan Bandar Puteri Jaya 3/27, Bandar Puteri Jaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 315000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "197 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "718",
    "title": "Apartment",
    "address": "Unit No. 1-7-6, Lintang Kampung Masjid 1, 11920 Bayan Lepas, Penang",
    "postcode": "11920",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 197000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "076 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "719",
    "title": "Flat",
    "address": "Unit No. 16-13-6, Lorong Bukit Kukus, Grandview Heights, 11060 Paya Terubong, Penang",
    "postcode": "11060",
    "state": "Penang",
    "area": "Paya Terubong",
    "reservePrice": 150000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "689 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "720",
    "title": "2 Storey Semi Detached House",
    "address": "No. 8, Jalan Perpaduan, Taman Perpaduan, 14000 Bukit Mertajam, Penang",
    "postcode": "14000",
    "state": "Penang",
    "area": "Bukit Mertajam",
    "reservePrice": 518400,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "319 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "721",
    "title": "Flat",
    "address": "Block H, Apartment Permata, Jalan Perda Utama, Bandar Perda, 14000 Bukit Mertajam, Penang",
    "postcode": "14000",
    "state": "Penang",
    "area": "Bukit Mertajam",
    "reservePrice": 145800,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "624 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "722",
    "title": "2 Storey Terrace House",
    "address": "Lorong Desa Impian 12, Desa Impian, 14000 Bukit Mertajam, Penang",
    "postcode": "14000",
    "state": "Penang",
    "area": "Bukit Mertajam",
    "reservePrice": 648000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "982 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "723",
    "title": "2 Storey Cluster House",
    "address": "No. 8, Lorong Tenggiri 11, Seberang Jaya, 13700 Perai, Penang",
    "postcode": "13700",
    "state": "Penang",
    "area": "Perai",
    "reservePrice": 207000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "574 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "724",
    "title": "Flat",
    "address": "Unit No. 3-17-20, Block C, Jalan Gangsa, Green Lane Heights, 11600 Jelutong, Penang",
    "postcode": "11600",
    "state": "Penang",
    "area": "Jelutong",
    "reservePrice": 280000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "700 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "725",
    "title": "Flat",
    "address": "Unit No. 15-4, Blok Akasia, Mutiara Perdana, Lengkok Kelicap, 11900 Bayan Lepas, Penang",
    "postcode": "11900",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 153000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "538 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "726",
    "title": "Flat",
    "address": "Unit No. 11A-14-3A, Tingkat Paya Terubong 2, Mukim 13, 11060, Penang",
    "postcode": "11060",
    "state": "Penang",
    "area": "Penang",
    "reservePrice": 230000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "850 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "727",
    "title": "Flat",
    "address": "Unit No. 111B-2-17, 2nd Floor, Jalan Bukit Penara, Taman Balik Pulau (Lily Flat), 11000 Balik Pulau, Penang",
    "postcode": "11000",
    "state": "Penang",
    "area": "Balik Pulau",
    "reservePrice": 162000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "624 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "728",
    "title": "Bungalow",
    "address": "No. 36 & 38, Lebuh Bukit Jambul, 11900 Bayan Lepas, Penang",
    "postcode": "11900",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 4592700,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "198 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "729",
    "title": "Flat",
    "address": "Unit No. 1-6-27, Persiaran Bayan Indah 3, Desa Putra, 11900 Bayan Lepas, Penang",
    "postcode": "11900",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 250000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "657 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "730",
    "title": "Apartment",
    "address": "Unit No. 2-07, Pangsapuri Prima Aman, Lorong Perai Utama 8, Taman Perai Utama, 13600 Perai, Penang",
    "postcode": "13600",
    "state": "Penang",
    "area": "Perai",
    "reservePrice": 162800,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "861 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "731",
    "title": "Apartment",
    "address": "Unit No. 17-12A-3A, Hilir Sungai Pinang, Serina Bay, 11600 Jelutong, Penang",
    "postcode": "11600",
    "state": "Penang",
    "area": "Jelutong",
    "reservePrice": 450000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "915 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "732",
    "title": "Flat",
    "address": "Unit No. 46-11-17, Jalan Van Praagh, Desa Green, 11600 Jelutong, Penang",
    "postcode": "11600",
    "state": "Penang",
    "area": "Jelutong",
    "reservePrice": 390000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "700 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "733",
    "title": "Apartment",
    "address": "Unit No. 18-9-1, Halaman Tembaga, 11600, Georgetown, Penang",
    "postcode": "11600",
    "state": "Penang",
    "area": "Georgetown",
    "reservePrice": 546750,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "658 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "734",
    "title": "1 Storey Terrace House",
    "address": "No. 8, Laluan Pinggiran Saujana 5, Taman Pinggiran Saujana, 31000 Batu Gajah, Perak",
    "postcode": "31000",
    "state": "Perak",
    "area": "Batu Gajah",
    "reservePrice": 90000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "735",
    "title": "2 Storey Terrace House",
    "address": "No. 319, Lorong 10, Taman Muhibbah, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 81000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "775 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "736",
    "title": "1 Storey Terrace House",
    "address": "No. 302, Jalan Yarra 7/7, Bandar Puteri Jaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 262440,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "240 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "737",
    "title": "1 Storey Detached House",
    "address": "No. 3625, Batu 2 1/2, Off Jalan Kuala Kedah, 05400 Alor Setar, Kedah",
    "postcode": "05400",
    "state": "Kedah",
    "area": "Alor Setar",
    "reservePrice": 255200,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "548 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "738",
    "title": "1 Storey Terrace House",
    "address": "No. 32, Lorong Jati 28-B, Taman Bandar Baru, 08100 Sungai Lalang, Kedah",
    "postcode": "08100",
    "state": "Kedah",
    "area": "Sungai Lalang",
    "reservePrice": 153000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "880 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "739",
    "title": "1 Storey Terrace House",
    "address": "No. 280, Jalan Desa Bayanmas 6, Taman Desa Bayanmas, 06050 Bukit Kayu Hitam, Kedah",
    "postcode": "06050",
    "state": "Kedah",
    "area": "Bukit Kayu Hitam",
    "reservePrice": 220000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "740",
    "title": "1 Storey Terrace House",
    "address": "No. 394, Lorong Residensi A12, Taman Residensi Mesra, 08300 Gurun, Kedah",
    "postcode": "08300",
    "state": "Kedah",
    "area": "Gurun",
    "reservePrice": 145800,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "209 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "741",
    "title": "Terrace House",
    "address": "No. 308, Lorong Mesra 15, Taman Ria Mesra, 08300 Gurun, Kedah",
    "postcode": "08300",
    "state": "Kedah",
    "area": "Gurun",
    "reservePrice": 450000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "742",
    "title": "Flat",
    "address": "Unit No. 2-04, Block C1, Lorong Sejahtera 12, Taman Seri Janggus, 14000 Bukit Mertajam, Penang",
    "postcode": "14000",
    "state": "Penang",
    "area": "Bukit Mertajam",
    "reservePrice": 190000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "904 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "743",
    "title": "Apartment",
    "address": "Unit No. 8B-06-10, Lorong Semarak Api 3, Mukim 13, 11500 Ayer Itam, Penang",
    "postcode": "11500",
    "state": "Penang",
    "area": "Ayer Itam",
    "reservePrice": 300000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "785 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "744",
    "title": "2 Storey Terrace House",
    "address": "Jalan Tawas Impiana 2, Anjung Tawas Impiana, 30010 Ipoh, Perak",
    "postcode": "30010",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 390000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "647 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "745",
    "title": "1 Storey Terrace House",
    "address": "No. 73, Lorong Lagenda 56, Seksyen 3, Bandar Lagenda Teluk Intan, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 160380,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "746",
    "title": "2 Storey Terrace House",
    "address": "Laluan Tasek Timur 9, Taman Tasek Indra, 31400 Ipoh, Perak",
    "postcode": "31400",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 356400,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "171 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "747",
    "title": "1 Storey Terrace House",
    "address": "No. 9, Dataran Bemban 3, Anjung Bemban Maju, 31000 Batu Gajah, Perak",
    "postcode": "31000",
    "state": "Perak",
    "area": "Batu Gajah",
    "reservePrice": 121500,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "748",
    "title": "2 Storey Terrace House",
    "address": "No. 67, Laluan BTI 1/23A, Bandar Tasik Idaman, 31000 Batu Gajah, Perak",
    "postcode": "31000",
    "state": "Perak",
    "area": "Batu Gajah",
    "reservePrice": 360000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "650 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "749",
    "title": "2 Storey Terrace House",
    "address": "No. 267, Lorong Matahari 6, Taman Bunga Matahari, 32400 Ayer Tawar, Perak",
    "postcode": "32400",
    "state": "Perak",
    "area": "Ayer Tawar",
    "reservePrice": 278000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "018 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "750",
    "title": "2 Storey Terrace House",
    "address": "No. 43, Laluan Meru Indah G5, Meru Dream Park Gerbang, Meru Indah, 30020 Ipoh, Perak",
    "postcode": "30020",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 470000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "968 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "751",
    "title": "1 Storey Terrace House",
    "address": "No. 363, Jalan Residen 3/8, Residen 3, Bandar Baru Setia Awan, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 176000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "099 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "752",
    "title": "2 Storey Semi Detached House",
    "address": "No. 24, Lebuh Dindings, Taman Lim, 30100 Ipoh, Perak",
    "postcode": "30100",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 480000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "798 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "753",
    "title": "1 Storey Terrace House",
    "address": "No. 64, Lapangan Perdana 19, Panorama Lapangan Perdana, 31350 Ipoh, Perak",
    "postcode": "31350",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 240000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "239 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "754",
    "title": "2 Storey Terrace House",
    "address": "No. 69, Jalan Putra 1C, Taman Klebang Putra, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 300000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "755",
    "title": "1 Storey Terrace House",
    "address": "Jalan Cempaka 12, Taman Cempaka, 09810 Selama, Kedah",
    "postcode": "09810",
    "state": "Kedah",
    "area": "Selama",
    "reservePrice": 105300,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "756",
    "title": "1 Storey Terrace House",
    "address": "No. 1923, Lorong Angsana 50, Taman Keladi, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 129600,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "200 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "757",
    "title": "1 Storey Terrace House",
    "address": "No. 25, Lorong Permaipura Riang 2, Taman Permaipura, 08100 Bedong, Kedah",
    "postcode": "08100",
    "state": "Kedah",
    "area": "Bedong",
    "reservePrice": 240000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "000 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "758",
    "title": "1 Storey Semi Detached House",
    "address": "No. 92, Lorong Seruling 8, Taman Seruling, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 320000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "099 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "759",
    "title": "Detached House",
    "address": "Lorong Permaipura Villa 2, Permaipura Villa, 08100 Bedong, Kedah",
    "postcode": "08100",
    "state": "Kedah",
    "area": "Bedong",
    "reservePrice": 560000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "840 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "760",
    "title": "1 Storey Terrace House",
    "address": "Jalan Mahsuri 1/C, Taman Mahsuri, 09400 Padang Serai, Kedah",
    "postcode": "09400",
    "state": "Kedah",
    "area": "Padang Serai",
    "reservePrice": 260000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "761",
    "title": "1 Storey Terrace House",
    "address": "Jalan Desa Baiduri 4, Taman Desa Baiduri, 08600 Tikam Batu, Kedah",
    "postcode": "08600",
    "state": "Kedah",
    "area": "Tikam Batu",
    "reservePrice": 210000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "762",
    "title": "1 Storey Semi Detached House",
    "address": "No. 138, Jalan Yarra 1/11, Bandar Puteri Jaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 432000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "595 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "763",
    "title": "1 Storey Terrace House",
    "address": "No. 759, Lorong Mahkota 18/2, Taman Seri Mahkota, 09000 Kulim, Kedah",
    "postcode": "09000",
    "state": "Kedah",
    "area": "Kulim",
    "reservePrice": 261000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "300 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "764",
    "title": "3 Storey Semi Detached House",
    "address": "No. 8, Lengkok Relau 1, Taman Seri Relau, 11900 Bayan Lepas, Penang",
    "postcode": "11900",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 2106000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "437 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "765",
    "title": "Flat",
    "address": "Jalan Gangsa, Greenlane Heights, 11600 George Town, Penang",
    "postcode": "11600",
    "state": "Penang",
    "area": "George Town",
    "reservePrice": 342000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "700 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "766",
    "title": "Apartment",
    "address": "Unit No. 3-14-12, Lebuh Relau 6, Mukim 13, 11900 Bayan Lepas, Penang",
    "postcode": "11900",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 320000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "753 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "767",
    "title": "3 Storey Detached House",
    "address": "No. 71, Jalan Mengkuang, 12200 Butterworth, Penang",
    "postcode": "12200",
    "state": "Penang",
    "area": "Butterworth",
    "reservePrice": 2030000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "101 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "768",
    "title": "1 Storey Terrace House",
    "address": "No. 8, Jalan Dungun, 10460 Georgetown, Penang",
    "postcode": "10460",
    "state": "Penang",
    "area": "Georgetown",
    "reservePrice": 990000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "252 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "769",
    "title": "Apartment",
    "address": "Unit No. 5-11-15, The Ocean View, Lebuh Sungai Pinang 1, 11600 Jelutong, Penang",
    "postcode": "11600",
    "state": "Penang",
    "area": "Jelutong",
    "reservePrice": 340200,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "872 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "770",
    "title": "Apartment",
    "address": "Unit No. 2-10, Blok B, Pangsa Ria, Lebuh Kampung Benggali, 12200, Butterworth, Penang",
    "postcode": "12200",
    "state": "Penang",
    "area": "Butterworth",
    "reservePrice": 193190,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "786 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "771",
    "title": "2 Storey Terrace Cluster House",
    "address": "No. 32A, Persiaran Seksyen 6/14, Bandar Putra Bertam, 13200 Kepala Batas, Penang",
    "postcode": "13200",
    "state": "Penang",
    "area": "Kepala Batas",
    "reservePrice": 168000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "818 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "772",
    "title": "1 Storey Terrace House",
    "address": "No. 111, Jalan Kikik, Taman Inderawasih, 13600 Perai, Penang",
    "postcode": "13600",
    "state": "Penang",
    "area": "Perai",
    "reservePrice": 370000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "773",
    "title": "1 Storey Terrace House",
    "address": "No. 68, Jalan Sentul 4, Taman Sentul Jaya, 14100 Simpang Ampat, Penang",
    "postcode": "14100",
    "state": "Penang",
    "area": "Simpang Ampat",
    "reservePrice": 350000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "774",
    "title": "Apartment",
    "address": "Unit No. A-26-07, Pangsapuri Casa Prima, Jalan Sutera Prima, 13700 Perai, Penang",
    "postcode": "13700",
    "state": "Penang",
    "area": "Perai",
    "reservePrice": 252000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "904 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "775",
    "title": "1 Storey Semi Detached House",
    "address": "No. 32A, Lorong Mekar Sari 8, Taman Mekar Sari, 13200 Kepala Batas, Penang",
    "postcode": "13200",
    "state": "Penang",
    "area": "Kepala Batas",
    "reservePrice": 396000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "637 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "776",
    "title": "Service Apartment",
    "address": "Unit No. B-07-02, Pangsapuri Perkhidmatan Palma, Persiaran Mutiara 8, 14120 Simpang Ampat, Penang",
    "postcode": "14120",
    "state": "Penang",
    "area": "Simpang Ampat",
    "reservePrice": 315000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "076 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "777",
    "title": "2 Storey Terrace House",
    "address": "No. 24, Lorong Tesek Gelugor Utama 1/12, Taman Tasek Gelugor Utama, 13300 Tasek Gelugor, Penang",
    "postcode": "13300",
    "state": "Penang",
    "area": "Tasek Gelugor",
    "reservePrice": 340000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "087 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "778",
    "title": "Terrace House",
    "address": "Blok LL, Taman Serai Jaya, Jalan Siakap, 34300 Bagan Serai, Perak",
    "postcode": "34300",
    "state": "Perak",
    "area": "Bagan Serai",
    "reservePrice": 130000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "630 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "779",
    "title": "1 Storey Terrace House",
    "address": "No. 29, Lorong Jati 68-D, Taman Bandar Baru, 08100 Sungai Lalang, Kedah",
    "postcode": "08100",
    "state": "Kedah",
    "area": "Sungai Lalang",
    "reservePrice": 131220,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "780",
    "title": "1 Storey Terrace House",
    "address": "Jalan Bukit Puteri 1/13A, Bandar Puteri Jaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 182250,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "781",
    "title": "1 Storey Terrace House",
    "address": "No. 27, Lorong Jati 2A, Taman Bandar Baru, 08100 Sungai Lalang, Kedah",
    "postcode": "08100",
    "state": "Kedah",
    "area": "Sungai Lalang",
    "reservePrice": 180000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "040 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "782",
    "title": "2 Storey Terrace House",
    "address": "No. 593, Jalan Arowana 8, Taman Arowana, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 300000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "404 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "783",
    "title": "2.5 Storey Semi Detached House",
    "address": "No. 23, Jalan Perdana Heights 1/7, Perdana Heights, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 700000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "062 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "784",
    "title": "Land",
    "address": "Lot No. 1814, Bukit Chupak, Mukim Derang, 06300 Daerah Pokok Sena, Kedah",
    "postcode": "06300",
    "state": "Kedah",
    "area": "Daerah Pokok Sena",
    "reservePrice": 148500,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "785",
    "title": "Agricultural Land",
    "address": "Lot 2663, Bukit Me, 06750 Pendang, Kedah",
    "postcode": "06750",
    "state": "Kedah",
    "area": "Pendang",
    "reservePrice": 63900,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "786",
    "title": "1 Storey Semi Detached House",
    "address": "Jalan Yarra 3/3, Bandar Puteri Jaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 570000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "787",
    "title": "2.5 Storey Bungalow House",
    "address": "No. 101, Persiaran Darul Aman, Darul Aman Lakehome, 06000 Jitra, Kedah",
    "postcode": "06000",
    "state": "Kedah",
    "area": "Jitra",
    "reservePrice": 882000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "296 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "788",
    "title": "1 Storey Semi Detached House",
    "address": "No. 284 (Lot 2419), Lorong 10, Taman Emas, 08100 Bedong, Kedah",
    "postcode": "08100",
    "state": "Kedah",
    "area": "Bedong",
    "reservePrice": 261000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "874 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "789",
    "title": "2 Storey Terrace House",
    "address": "No. 63, Lebuh Batu Maung 8, Taman Seri Mewah, 11960 Bayan Lepas, Penang",
    "postcode": "11960",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 820000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "111 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "790",
    "title": "2 Storey Terrace House",
    "address": "No. 21, Lorong Bertam Bestari 12, Bertam Perdana 5, 13200 Kepala Batas, Penang",
    "postcode": "13200",
    "state": "Penang",
    "area": "Kepala Batas",
    "reservePrice": 500000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "544 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "791",
    "title": "Condominium",
    "address": "Unit No. B-05-03, Jalan Meru Idaman 1, Taman Meru Idaman, 30020 Ipoh, Perak",
    "postcode": "30020",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 216000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "818 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "792",
    "title": "2 Storey Terrace House",
    "address": "Jalan PR1MA Tapah 10, Residensi PR1MA Tapah, 35000 Tapah, Perak",
    "postcode": "35000",
    "state": "Perak",
    "area": "Tapah",
    "reservePrice": 225000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "580 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "793",
    "title": "2 Storey Terrace House",
    "address": "No. 11, Lahat Sri Wang 21, Desa Lahat Sri Wang, 31500 Lahat, Perak",
    "postcode": "31500",
    "state": "Perak",
    "area": "Lahat",
    "reservePrice": 300000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "794",
    "title": "2 Storey Terrace House",
    "address": "Persiaran Pengkalan Timur 3, Desa Pakatan, 31650 Ipoh, Perak",
    "postcode": "31650",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 180000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "012 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "795",
    "title": "Condominium",
    "address": "Unit No. B-6-2, Kondominium Kelab Golf, Jalan Kelab Golf, 30350 Ipoh, Perak",
    "postcode": "30350",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 520000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "787 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "796",
    "title": "1 Storey Terrace House",
    "address": "No. 12, Jalan Kinding Perdana 1, Taman Kinding Perdana, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 207000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "797",
    "title": "1 Storey Terrace House",
    "address": "No. 88, Jalan Seri Melur 3, Taman Seri Melur, 32400 Ayer Tawar, Perak",
    "postcode": "32400",
    "state": "Perak",
    "area": "Ayer Tawar",
    "reservePrice": 102060,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "194 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "798",
    "title": "1 Storey Terrace House",
    "address": "No. 113, Persiaran Raia Utama, Taman Raia Utama, 31600 Gopeng, Perak",
    "postcode": "31600",
    "state": "Perak",
    "area": "Gopeng",
    "reservePrice": 216000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "799",
    "title": "1 Storey Semi Detached House",
    "address": "No. 74, Jalan Pantai Wang 5, Taman Pantai Wang, Kampung Sungai Batu, 34900 Pantai Remis, Perak",
    "postcode": "34900",
    "state": "Perak",
    "area": "Pantai Remis",
    "reservePrice": 81000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "206 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "800",
    "title": "2 Storey Terrace House",
    "address": "No. 1583, Jalan Bandar Puteri Jaya 2/29A, Bandar Puteri Jaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 319000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "735 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "801",
    "title": "1.5 Storey Detached House",
    "address": "No. 125, Jalan 9/5, Darulaman Perdana, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 700000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "507 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "802",
    "title": "1 Storey Terrace House",
    "address": "Persiaran Desa Aman S2/7, Seksyen 2, Desa Aman, 09410 Padang Serai, Kedah",
    "postcode": "09410",
    "state": "Kedah",
    "area": "Padang Serai",
    "reservePrice": 270000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "803",
    "title": "1 Storey Terrace House",
    "address": "Lorong KTC 2/6, Kulim Techno-City, 09090 Kulim Hi-Tech, Kedah",
    "postcode": "09090",
    "state": "Kedah",
    "area": "Kulim Hi-Tech",
    "reservePrice": 330000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "804",
    "title": "2 Storey Semi Detached House",
    "address": "Persiaran Utama 1/7, Kulim Utama, Kulim Hi-tech Park, 09090 Kulim, Kedah",
    "postcode": "09090",
    "state": "Kedah",
    "area": "Kulim",
    "reservePrice": 485000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "562 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "805",
    "title": "1 Storey Terrace House",
    "address": "Jalan Mutiara 15/3, Taman Mutiara, 09700 Karangan, Kedah",
    "postcode": "09700",
    "state": "Kedah",
    "area": "Karangan",
    "reservePrice": 200000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "764 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "806",
    "title": "1 Storey Terrace House",
    "address": "No. G86, Jalan Indah 8, Taman Sejati Indah, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 300000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "300 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "807",
    "title": "1.5 Storey Semi Detached House",
    "address": "No. 369, Lebuh Kempas, Taman Kempas, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 370000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "694 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "808",
    "title": "Condominium",
    "address": "Unit No. 1A-7-7, Alila Horizons Condominium, Lorong Kejora, 11200 Tanjong Bungah, Penang",
    "postcode": "11200",
    "state": "Penang",
    "area": "Tanjong Bungah",
    "reservePrice": 760000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "367 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "809",
    "title": "1 Storey Terrace House",
    "address": "Persiaran Desa Pinji Utara 3, Taman Desa Pinji, 31500 Lahat, Perak",
    "postcode": "31500",
    "state": "Perak",
    "area": "Lahat",
    "reservePrice": 153000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "819 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "810",
    "title": "2 Storey Terrace House",
    "address": "Lorong Sejati 2, Taman Melor Sejati, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 332100,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "811",
    "title": "2 Storey Cluster Terrace House",
    "address": "No. 16, Jalan Meru Idaman 5, Taman Meru Idaman, 30020 Ipoh, Perak",
    "postcode": "30020",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 348300,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "152 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "812",
    "title": "2 Storey Terrace House",
    "address": "No. 14, Laluan Chepor Permai 3, Taman Chepor Permai, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 225000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "960 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "813",
    "title": "2 Storey Terrace House",
    "address": "No. 27, Lahat Permai 2, Taman Lahat Permai, 31500 Lahat, Perak",
    "postcode": "31500",
    "state": "Perak",
    "area": "Lahat",
    "reservePrice": 258000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "814",
    "title": "2 Storey Terrace House",
    "address": "No. 15, Laluan Lahat Sentosa 15, Taman Lahat Sentosa, 31500 Lahat, Perak",
    "postcode": "31500",
    "state": "Perak",
    "area": "Lahat",
    "reservePrice": 400000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "650 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "815",
    "title": "1 Storey Terrace House",
    "address": "No. 29, Jalan Bandar U56, Bandar Universiti, 32610 Seri Iskandar, Perak",
    "postcode": "32610",
    "state": "Perak",
    "area": "Seri Iskandar",
    "reservePrice": 230000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "431 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "816",
    "title": "1 Storey Terrace House",
    "address": "No. 713, Jalan Lagenda 17, Residensi Lagenda Tropika, 35350 Temoh, Perak",
    "postcode": "35350",
    "state": "Perak",
    "area": "Temoh",
    "reservePrice": 170000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "817",
    "title": "1 Storey Terrace House",
    "address": "Persiaran Murni 4, Taman Indah, 31250 Tanjung Rambutan, Perak",
    "postcode": "31250",
    "state": "Perak",
    "area": "Tanjung Rambutan",
    "reservePrice": 200000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "818",
    "title": "1 Storey Terrace House",
    "address": "No. 42, Persiaran Putera 4, Taman Indera Putera, 32600 Bota, Perak",
    "postcode": "32600",
    "state": "Perak",
    "area": "Bota",
    "reservePrice": 137700,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "179 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "819",
    "title": "1 Storey Terrace House",
    "address": "No. 273, Laluan Kledang 1/7, Taman Kledang, 31100 Sungai Siput, Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput",
    "reservePrice": 130000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "820",
    "title": "1 Storey Terrace House",
    "address": "No. 748, Persiaran Tun Sambanthan 6, Taman Tun Sambanthan, 31100 Sungai Siput (U), Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput (U)",
    "reservePrice": 122000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "496 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "821",
    "title": "1 Storey Terrace House",
    "address": "No. 883, Laluan Kledang 3/1, Taman Kledang, 31100 Sungai Siput, Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput",
    "reservePrice": 126000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "822",
    "title": "1 Storey Terrace House",
    "address": "No. 33, Jalan Chenderong Jaya 4, Taman Chenderong Jaya, 31000 Batu Gajah, Perak",
    "postcode": "31000",
    "state": "Perak",
    "area": "Batu Gajah",
    "reservePrice": 144000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "823",
    "title": "1 Storey Terrace House",
    "address": "Lengkok Perdana 9/1, Bandar Perdana, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 196900,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "824",
    "title": "2 Storey Detached House",
    "address": "Lorong Bandar Utama 7, Bandar Utama, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 600000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "822 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "825",
    "title": "2 Storey Terrace House",
    "address": "Jalan Bukit Puteri 12/12, Bandar Puteri Jaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 330000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "120 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "826",
    "title": "2 Storey Terrace House",
    "address": "No. 23, Jalan Bintang Maya 2/1, Bintang Maya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 440000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "236 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "827",
    "title": "2 Storey Semi Detached House",
    "address": "Jalan Puteri Residensi 11, Bandar Puteri Jaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 600000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "682 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "828",
    "title": "1 Storey Terrace House",
    "address": "No. 3945, Jalan Serai Wangi 4/12, Taman Serai Wangi, 09400 Padang Serai, Kedah",
    "postcode": "09400",
    "state": "Kedah",
    "area": "Padang Serai",
    "reservePrice": 251100,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "432 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "829",
    "title": "1 Storey Terrace House",
    "address": "Persiaran Rishah 3, Taman Rishah, 30100 Ipoh, Perak",
    "postcode": "30100",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 186300,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "496 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "830",
    "title": "1 Storey Terrace House",
    "address": "Laluan Kinta Permai 2/7, Taman Kinta Permai, 31000 Batu Gajah, Perak",
    "postcode": "31000",
    "state": "Perak",
    "area": "Batu Gajah",
    "reservePrice": 380000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "035 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "831",
    "title": "1 Storey Terrace House",
    "address": "Jalan Melati 5, Taman Pusing Baru, 31550 Kinta, Perak",
    "postcode": "31550",
    "state": "Perak",
    "area": "Kinta",
    "reservePrice": 200000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "470 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "832",
    "title": "1 Storey Terrace House",
    "address": "No. 8, Laluan Chemor Damai 1, Desa Chemor Impian, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 340000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "833",
    "title": "2 Storey Terrace House",
    "address": "Taman Samudera, 32040 Seri Manjung, Perak",
    "postcode": "32040",
    "state": "Perak",
    "area": "Seri Manjung",
    "reservePrice": 260000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "834",
    "title": "1 Storey Terrace House",
    "address": "No. 2, Jalan Mahkota Kampar 8, Taman Mahkota Kampar, 31900 Kampar, Perak",
    "postcode": "31900",
    "state": "Perak",
    "area": "Kampar",
    "reservePrice": 330000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "688 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "835",
    "title": "2 Storey Terrace House",
    "address": "Rapat Permai 4, Taman Rapat Permai, 31350 Ipoh, Perak",
    "postcode": "31350",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 330000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "836",
    "title": "1 Storey Terrace House",
    "address": "No. 63, Lorong Lagenda 54 (TIC67A/507), Seksyen 3, Bandar Lagenda Teluk Intan, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 131220,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "837",
    "title": "1 Storey Terrace House",
    "address": "No. 54, Lorong Emas 2/1, Taman Emas II, Kampung China, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 210600,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "838",
    "title": "1 Storey Terrace House",
    "address": "No. 101, Perumahan Awam Fasa 2, Padang Rengas, 33700 Padang Rengas, Perak",
    "postcode": "33700",
    "state": "Perak",
    "area": "Padang Rengas",
    "reservePrice": 137700,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "152 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "839",
    "title": "2 Storey Terrace House",
    "address": "No. 27, Jalan Lahat Mines 11, Bandar Lahat Mines, 31500, Lahat, Perak",
    "postcode": "31500",
    "state": "Perak",
    "area": "Lahat",
    "reservePrice": 315000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "916 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "840",
    "title": "1 Storey Terrace House",
    "address": "No. 197-K21, Persiaran Muhibbah 10, Kampung Muhibbah Fasa 1, 31100 Sungai Siput, Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput",
    "reservePrice": 130000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "050 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "841",
    "title": "2 Storey Detached House of Individual Design Erected on 2 Adjoining Lands",
    "address": "No. 1493 - 1494, Jalan Kulim Height 3/1, Persiaran Kulim Golf, Kulim Golf & Resort, Kulim Hi-Tech Park, 09090 Kulim, Kedah",
    "postcode": "09090",
    "state": "Kedah",
    "area": "Kulim",
    "reservePrice": 1980000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "730 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "842",
    "title": "1 Storey Terrace House",
    "address": "Jalan Kelisa Ria 6/30, Taman Kelisa Ria, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 234000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "701 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "843",
    "title": "2 Storey Terrace House",
    "address": "No. 317, Jalan Seri Bayu 2/8, Taman Seri Bayu, Sungai Lalang, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 288000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "844",
    "title": "1 Storey Semi Detached House",
    "address": "No. 77, Jalan Angsana Sari 6, Taman Angsana Sari, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 210000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "845",
    "title": "1 Storey Terrace House",
    "address": "No. 578, Jalan Kelisa Ria 1/22, Taman Kelisa Ria, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 182250,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "165 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "846",
    "title": "Terrace House",
    "address": "Jalan Zamrud 7/2F, Taman Sinar Intan II, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 850000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "847",
    "title": "1 Storey Terrace House",
    "address": "No. 56, Jalan Bukit Puteri 1/12, Bandar Puteri Jaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 250000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "340 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "848",
    "title": "1 Storey Terrace House",
    "address": "No. 255, Jalan Kemboja 23, Bandar Amanjaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 189000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "780 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "849",
    "title": "2 Storey Terrace House",
    "address": "No. 8, Lorong Rebana Indah 2, Taman Rebana Indah, 14200 Sungai Bakap, Penang",
    "postcode": "14200",
    "state": "Penang",
    "area": "Sungai Bakap",
    "reservePrice": 550000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "700 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "850",
    "title": "2 Storey Terrace House",
    "address": "No. 1, Hala Bandar Baru Tambun 23, Bandar Baru Tambun, 31400 Ipoh, Perak",
    "postcode": "31400",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 388800,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "357 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "851",
    "title": "2 Storey Terrace House",
    "address": "Selasar Rokam 4, Taman Ipoh Jaya, 31350 Ipoh, Perak",
    "postcode": "31350",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 226800,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "098 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "852",
    "title": "2 Storey Terrace House",
    "address": "No. 33, Jalan Laguna 5, Polo Laguna Tambun, 31400 Ipoh, Perak",
    "postcode": "31400",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 414000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "853",
    "title": "2 Storey Terrace House",
    "address": "No. 222, Jalan SM5A/9, Fasa 2D, 32040 Seri Manjung, Perak",
    "postcode": "32040",
    "state": "Perak",
    "area": "Seri Manjung",
    "reservePrice": 315000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "540 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "854",
    "title": "1 Storey Terrace House",
    "address": "No. 8, Hala Chepor 5, Taman Chepor Raya, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 200000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "855",
    "title": "1 Storey Terrace House",
    "address": "No. 636, Lorong Tun Sambanthan 12, Taman Tun Sambanthan, 31100 Sungai Siput, Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput",
    "reservePrice": 180000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "496 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "856",
    "title": "2 Storey Terrace House",
    "address": "No. 41, Hala Taman Meru 15, Taman Meru 2B, 30020 Ipoh, Perak",
    "postcode": "30020",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 520000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "340 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "857",
    "title": "2 Storey Terrace House",
    "address": "No. 705, Taman Bersatu, Off Jalan Batas Paip, 06600 Kuala Kedah, Kedah",
    "postcode": "06600",
    "state": "Kedah",
    "area": "Kuala Kedah",
    "reservePrice": 111537,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "220 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "858",
    "title": "2 Storey Terrace House",
    "address": "No. 332, Jalan PR1MA 8, Residensi PR1MA, Bandar Puteri Jaya 1, Bandar Puteri Jaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 216513,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "859",
    "title": "1 Storey Terrace House",
    "address": "Laluan Klebang Restu 26, Medan Klebang Restu, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 200000,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "797 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "860",
    "title": "2 Storey Terrace House",
    "address": "Jalan Jelapang Ria 1, Taman Jelapang Ria, 30020 Ipoh, Perak",
    "postcode": "30020",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 324000,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "701 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "861",
    "title": "1 Storey Terrace House",
    "address": "No. 267, Jalan Cahaya 7, Taman Cahaya, 31900 Kampar, Perak",
    "postcode": "31900",
    "state": "Perak",
    "area": "Kampar",
    "reservePrice": 160000,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "862",
    "title": "4 Storey Shop House",
    "address": "No. 73, Jalan Sultan Iskandar, 30000 Ipoh, Perak",
    "postcode": "30000",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 810000,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "256 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "863",
    "title": "2 Storey Terrace House",
    "address": "No. 35, Pesara Lahat Baru 14, Bandar Lahat Baru, 31500 Lahat, Perak",
    "postcode": "31500",
    "state": "Perak",
    "area": "Lahat",
    "reservePrice": 80000,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "904 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "864",
    "title": "2 Storey Terrace House",
    "address": "No. 32, Laluan Pengkalan Timur 4, Desa Pakatan, 31650 Ipoh, Perak",
    "postcode": "31650",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 153000,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "797 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "865",
    "title": "1 Storey Cluster House",
    "address": "No. 135, Jalan Residen 2/1, Residen 2, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 184000,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "981 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "866",
    "title": "2 Storey Terrace House",
    "address": "No.64, Jalan Degong, Taman Indah, 31900 Kampar, Perak",
    "postcode": "31900",
    "state": "Perak",
    "area": "Kampar",
    "reservePrice": 117000,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "862 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "867",
    "title": "2 Storey Terrace House",
    "address": "No. 9, Jalan Pengkalan Utama 10, Taman Pengkalan Utama, 31650 Ipoh, Perak",
    "postcode": "31650",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 275400,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "868",
    "title": "2 Storey Terrace House With Extra Land",
    "address": "No. 18, Jalan Tawas Impiana 2, Anjung Tawas Impiana, 30010 Ipoh, Perak",
    "postcode": "30010",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 522000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "059 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "869",
    "title": "2 Storey Bungalow",
    "address": "Lot 3406S, Jalan Jerlun, Kampung Baru Buntong, 30100 Ipoh, Perak",
    "postcode": "30100",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 405000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "015 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "870",
    "title": "2 Storey Terrace House",
    "address": "No. 88, Taman Pelangi, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 400000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "475 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "871",
    "title": "Service Apartment",
    "address": "Unit No. M3-T2-153 (C-1-9), Block C, MH Unilodge, Kampar Siswa, 31900 Kampar, Perak",
    "postcode": "31900",
    "state": "Perak",
    "area": "Kampar",
    "reservePrice": 124200,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "872",
    "title": "1 Storey Terrace House",
    "address": "No. 163, Lorong 1, Taman Desa Bakti, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 130000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "873",
    "title": "2 Storey Shop House",
    "address": "No. 10, Hala Kledang Emas 9, Taman Kledang Emas, 30100 Ipoh, Perak",
    "postcode": "30100",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 315900,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "874",
    "title": "1 Storey Terrace House",
    "address": "No. 79, Jalan 2, Taman Bidor Jaya, 35500 Bidor, Perak",
    "postcode": "35500",
    "state": "Perak",
    "area": "Bidor",
    "reservePrice": 250000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "034 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "875",
    "title": "2 Storey Terrace House",
    "address": "No. 50, Persiaran Rapat Baru 18, Taman Lapangan Permai, 31350 Ipoh, Perak",
    "postcode": "31350",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 165000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "561 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "876",
    "title": "1 Storey Semi Detached Cluster House",
    "address": "No. 22, Lorong Lagenda 1, Seksyen 1, Bandar Lagenda Teluk Intan, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 207000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "081 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "877",
    "title": "1 Storey Terrace House",
    "address": "No. 56, Laluan Prisma 11, Taman Pengkalan Prisma, 31550 Pusing, Perak",
    "postcode": "31550",
    "state": "Perak",
    "area": "Pusing",
    "reservePrice": 170000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "300 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "878",
    "title": "Apartment",
    "address": "Unit No. A2-1-8, Pinggiran Machang Bubok 1, Jalan Pinggiran Machang Bubok, 14020 Bukit Mertajam, Penang",
    "postcode": "14020",
    "state": "Penang",
    "area": "Bukit Mertajam",
    "reservePrice": 396000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "173 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "879",
    "title": "2 Storey Terrace House",
    "address": "No. 31, Jalan Mahkota Kampar 8, Taman Mahkota Kampar, 31900 Kampar, Perak",
    "postcode": "31900",
    "state": "Perak",
    "area": "Kampar",
    "reservePrice": 210000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "880",
    "title": "1 Storey Terrace House",
    "address": "No. 261, Residensi Bidoria, Jalan RB 7, 35500 Bidor, Perak",
    "postcode": "35500",
    "state": "Perak",
    "area": "Bidor",
    "reservePrice": 250000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "881",
    "title": "Terrace House",
    "address": "Jalan Lapangan Bayu 3, Taman Lapangan Bayu, 31350 Ipoh, Perak",
    "postcode": "31350",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 650000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "882",
    "title": "1 Storey Terrace House",
    "address": "No. 15, Laluan Menglembu 3, Taman Menglembu Berlian, 31450 Menglembu, Perak",
    "postcode": "31450",
    "state": "Perak",
    "area": "Menglembu",
    "reservePrice": 171000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "604 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "883",
    "title": "1 Storey Terrace House",
    "address": "No. 1458, Jalan Residen 1/22, Bandar Baru Setia Awan Perdana, 32000 Setiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Setiawan",
    "reservePrice": 190000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "884",
    "title": "1 Storey Terrace House",
    "address": "No. 89, Jalan 25, Taman Sungai Mas, 34000 Taiping, Perak",
    "postcode": "34000",
    "state": "Perak",
    "area": "Taiping",
    "reservePrice": 230000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "151 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "885",
    "title": "2 Storey Terrace House",
    "address": "No. 12, Jalan Tawas Impiana 2, Anjung Tawas Impiana, 30010 Ipoh, Perak",
    "postcode": "30010",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 252000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "647 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "886",
    "title": "2.5 Storey Terrace House",
    "address": "Persiaran Pegoh Aman 10, Taman Pegoh, 31500 Lahat, Perak",
    "postcode": "31500",
    "state": "Perak",
    "area": "Lahat",
    "reservePrice": 262440,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "887",
    "title": "Residential Land",
    "address": "Lot 204481, Laluan Lahat Timur 1/8, RPT Pengkalan Gate, 31500 Lahat, Perak",
    "postcode": "31500",
    "state": "Perak",
    "area": "Lahat",
    "reservePrice": 90000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "600 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "888",
    "title": "2 Storey Terrace House",
    "address": "No. 53, Persiaran Sengat Baru, Taman Desa Pulai Aman, 31300 Simpang Pulai, Perak",
    "postcode": "31300",
    "state": "Perak",
    "area": "Simpang Pulai",
    "reservePrice": 300000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "615 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "889",
    "title": "3 Storey Terrace Shop Office",
    "address": "Jalan Bersatu 1, Taman Bersatu, 34350 Kuala Kurau, Perak",
    "postcode": "34350",
    "state": "Perak",
    "area": "Kuala Kurau",
    "reservePrice": 340000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "890",
    "title": "1 Storey Terrace House",
    "address": "No. 1150, Lorong 27, Taman Kaya, 34000 Taiping, Perak",
    "postcode": "34000",
    "state": "Perak",
    "area": "Taiping",
    "reservePrice": 220000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "800 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "891",
    "title": "1 Storey Terrace House",
    "address": "No. 3, Lorong Trong Bakti 12, Taman Trong Bakti, 34800 Trong, Perak",
    "postcode": "34800",
    "state": "Perak",
    "area": "Trong",
    "reservePrice": 90000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "892",
    "title": "1 Storey Terrace House",
    "address": "No. 73, Taman Desa Dua, Simpang Dua, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 160000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "893",
    "title": "2 Storey Terrace House",
    "address": "No. 658, Lorong 22, Taman Berkat, Jalan Kampung Dew, 34700 Simpang, Perak",
    "postcode": "34700",
    "state": "Perak",
    "area": "Simpang",
    "reservePrice": 121500,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "904 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "894",
    "title": "1 Storey Terrace House",
    "address": "No. 35, Jalan Merpati, Taman Jaya Delima, 31250 Tanjung Rambutan, Perak",
    "postcode": "31250",
    "state": "Perak",
    "area": "Tanjung Rambutan",
    "reservePrice": 200000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "895",
    "title": "1 Storey Terrace House",
    "address": "No. 161, Jalan Kelisa Ria 1/3, Taman Kelisa Ria, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 285000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "647 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "896",
    "title": "1 Storey Terrace House",
    "address": "Hala Puncak Jelapang 8B, Puncak Jelapang Indah, 30020 Ipoh, Perak",
    "postcode": "30020",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 202500,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "897",
    "title": "1 Storey Terrace House",
    "address": "No. 324-R16, Kampung Muhibbah Fasa 1, 31100 Sungai Siput (U), Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput (U)",
    "reservePrice": 200000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "100 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "898",
    "title": "Apartment",
    "address": "Unit No. A3-04-03, Damiana Apartment, No. 1, Jalan Kempas 3, Proton City, 35900 Tanjung Malim, Perak",
    "postcode": "35900",
    "state": "Perak",
    "area": "Tanjung Malim",
    "reservePrice": 130000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "710 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "899",
    "title": "3 Storey Terrace House",
    "address": "No. 32, Jalan Koperasi 26, Taman Perpaduan Koperasi, 31400 Ipoh, Perak",
    "postcode": "31400",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 405000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "358 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "900",
    "title": "Terrace House",
    "address": "No. 39, Jalan Tiong, Taman Pekan Baru, 34200 Parit Buntar, Perak",
    "postcode": "34200",
    "state": "Perak",
    "area": "Parit Buntar",
    "reservePrice": 230000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "901",
    "title": "2 Storey Terrace House",
    "address": "Jalan Selayang 6/4, Taman Selayang Fasa 2, Off Lebuhraya Sultanah Bahiyah, 05350 Alor Setar, Kedah",
    "postcode": "05350",
    "state": "Kedah",
    "area": "Alor Setar",
    "reservePrice": 580000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "025 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "902",
    "title": "1 Storey Terrace House",
    "address": "No. 2, Lorong Jati 70D, Taman Bandar Baru, 08100 Sungai Lalang, Kedah",
    "postcode": "08100",
    "state": "Kedah",
    "area": "Sungai Lalang",
    "reservePrice": 180000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "660 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "903",
    "title": "2 Storey Terrace House",
    "address": "No. 474, Taman Gemilang, 06000 Jitra, Kedah",
    "postcode": "06000",
    "state": "Kedah",
    "area": "Jitra",
    "reservePrice": 315900,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "750 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "904",
    "title": "2 Storey Terrace House",
    "address": "No. 4, Lorong BLM 3/16, Bandar Laguna Merbok, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 297000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "700 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "905",
    "title": "2 Storey Detached House",
    "address": "No. 25-A, Taman Intan, Off Jalan Datuk Kumbar, 05150 Alor Setar, Kedah",
    "postcode": "05150",
    "state": "Kedah",
    "area": "Alor Setar",
    "reservePrice": 202500,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "144 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "906",
    "title": "2 Storey Semi Detached House",
    "address": "No. 2541, Taman Lumba Kuda, Alor Merah, 05250 Alor Setar, Kedah",
    "postcode": "05250",
    "state": "Kedah",
    "area": "Alor Setar",
    "reservePrice": 522000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "035 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "907",
    "title": "1 Storey Terrace House",
    "address": "No. 1, Lorong Utama 18, Taman Pengkalan Utama, 34700 Simpang, Perak",
    "postcode": "34700",
    "state": "Perak",
    "area": "Simpang",
    "reservePrice": 530000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "822 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "908",
    "title": "1 Storey Terrace House",
    "address": "No. 39, Lorong Lagenda 56, Bandar Lagenda Teluk Intan, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 215000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "285 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "909",
    "title": "1 Storey Terrace House",
    "address": "No. 1, Lorong 1, Taman Nesa, 34100 Selama, Perak",
    "postcode": "34100",
    "state": "Perak",
    "area": "Selama",
    "reservePrice": 153000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "357 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "910",
    "title": "1 Storey Terrace House",
    "address": "No. 37, Lorong Lagenda 51, Seksyen 3, Bandar Lagenda Teluk Intan, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 220000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "911",
    "title": "1 Storey Terrace House",
    "address": "Eastern Garden, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 225000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "759 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "912",
    "title": "1 Storey Terrace House",
    "address": "No. 16, Jalan Kledang Raya 17, Taman Germuda, 30100 Ipoh, Perak",
    "postcode": "30100",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 180000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "496 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "913",
    "title": "2 Storey Terrace House",
    "address": "No. 61 BGH, Pinggiran Belleza 3A, Belleza Garden Homes, Taman Belleza, Jenan, 06000 Jitra, Kedah",
    "postcode": "06000",
    "state": "Kedah",
    "area": "Jitra",
    "reservePrice": 277000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "760 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "914",
    "title": "Vacant Land",
    "address": "Plot. 145, Taman Kempas, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 40000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "286 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "915",
    "title": "Semi Detached House",
    "address": "No. 422, Lorong KTC 4/17, Kulim Techno-City, 09090 Kulim, Kedah",
    "postcode": "09090",
    "state": "Kedah",
    "area": "Kulim",
    "reservePrice": 324000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "197 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "916",
    "title": "Agricultural Land",
    "address": "Lot 11598, Jalan Bukit Tegor, Cerkam Jaya, Kampung Bukit Mat Insun, 06700 Pendang, Kedah",
    "postcode": "11598",
    "state": "Kedah",
    "area": "Pendang",
    "reservePrice": 1291402,
    "auctionDate": "1 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "917",
    "title": "2 Storey Terrace House",
    "address": "No. 116, Jalan Besar, Taman Bintang, 34900 Pantai Remis, Perak",
    "postcode": "34900",
    "state": "Perak",
    "area": "Pantai Remis",
    "reservePrice": 180000,
    "auctionDate": "2 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "561 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "918",
    "title": "1 Storey Terrace House",
    "address": "Jalan Mahkota Kampar 4, Taman Mahkota Kampar, 31900 Kampar, Perak",
    "postcode": "31900",
    "state": "Perak",
    "area": "Kampar",
    "reservePrice": 225000,
    "auctionDate": "2 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "919",
    "title": "3 Storey Terrace Shop Office",
    "address": "No. 57, Disney Avenue, Bandar Agacia, 31910 Kampar, Perak",
    "postcode": "31910",
    "state": "Perak",
    "area": "Kampar",
    "reservePrice": 900000,
    "auctionDate": "2 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "591 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "920",
    "title": "1 Storey Detached House",
    "address": "No. 90, Taman Bunga Raya, 06000 Jitra, Kedah",
    "postcode": "06000",
    "state": "Kedah",
    "area": "Jitra",
    "reservePrice": 500000,
    "auctionDate": "7 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "628 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "921",
    "title": "1 Storey Terrace House",
    "address": "No. 33, Laluan Pinji Perdana 11, Taman Pinji Perdana, 31500 Lahat, Perak",
    "postcode": "31500",
    "state": "Perak",
    "area": "Lahat",
    "reservePrice": 99000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "958 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "922",
    "title": "2 Storey Terrace House",
    "address": "No. 14, Laluan Taman Meru 31, Taman Meru 2B, 30020 Ipoh, Perak",
    "postcode": "30020",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 280000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "646 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "923",
    "title": "1 Storey Terrace House",
    "address": "No. 154, Laluan Seri Raia 1, Taman Seri Raia, 31300 Kampung Kepayang, Perak",
    "postcode": "31300",
    "state": "Perak",
    "area": "Kampung Kepayang",
    "reservePrice": 200000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "604 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "924",
    "title": "2 Storey Terrace House",
    "address": "No. 14, Pesara Lahat Baru 8, Bandar Lahat Baru, 31500 Lahat, Perak",
    "postcode": "31500",
    "state": "Perak",
    "area": "Lahat",
    "reservePrice": 230000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "500 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "925",
    "title": "1 Storey Terrace House",
    "address": "No. 340, Jalan Saujana Jaya, Taman Saujana Jaya, Assam Kumbang, 34000 Taiping, Perak",
    "postcode": "34000",
    "state": "Perak",
    "area": "Taiping",
    "reservePrice": 160000,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "926",
    "title": "2 Storey Terrace House",
    "address": "No. 93, Jalan Tawas Mewah 8, Taman Tawas Mewah, 30010 Ipoh, Perak",
    "postcode": "30010",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 280000,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "927",
    "title": "Semi Detached House",
    "address": "Jalan Jelutong Indah 1, Taman Jelutong Indah, 06010 Changlun, Kedah",
    "postcode": "06010",
    "state": "Kedah",
    "area": "Changlun",
    "reservePrice": 360000,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "509 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "928",
    "title": "2 Storey Semi Detached House",
    "address": "Lorong Janggus Jaya 1, Taman Janggus Jaya, 13500 Permatang Pauh, Penang",
    "postcode": "13500",
    "state": "Penang",
    "area": "Permatang Pauh",
    "reservePrice": 1011600,
    "auctionDate": "15 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "605 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "929",
    "title": "2 Storey Terrace House",
    "address": "No. 2, Lorong Limau Manis 6, Taman Limau Manis, 14000 Bukit Mertajam, Penang",
    "postcode": "14000",
    "state": "Penang",
    "area": "Bukit Mertajam",
    "reservePrice": 432000,
    "auctionDate": "23 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "930",
    "title": "1 Storey Terrace House",
    "address": "No. 43, Jalan Rishah 6, Taman Rishah, 30100 Ipoh, Perak",
    "postcode": "30100",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 240000,
    "auctionDate": "24 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "661 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "931",
    "title": "Detached House",
    "address": "No. 8, Laluan Tasek Timur 12, Taman Seri Dermawan, 31400 Ipoh, Perak",
    "postcode": "31400",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 600000,
    "auctionDate": "24 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "898 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "932",
    "title": "2 Storey Semi Detached House",
    "address": "No. 5, Jalan Perdana Heights 3/6, Lot 88 The Residence, Perdana Heights, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 756000,
    "auctionDate": "24 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "885 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "933",
    "title": "1 Storey Terrace House",
    "address": "No. 2201, Jalan Mutiara 6/4, Taman Mutiara, Sungai Kob, 09700 Karangan, Kedah",
    "postcode": "09700",
    "state": "Kedah",
    "area": "Karangan",
    "reservePrice": 290000,
    "auctionDate": "24 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "475 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "934",
    "title": "1 Storey Detached House",
    "address": "No. 11, Taman Teratai, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 400000,
    "auctionDate": "24 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "033 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "935",
    "title": "Agricultural Land",
    "address": "PT. 415, Kedawang, 07000 Langkawi, Kedah",
    "postcode": "07000",
    "state": "Kedah",
    "area": "Langkawi",
    "reservePrice": 2187000,
    "auctionDate": "24 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "936",
    "title": "Industrial Premises",
    "address": "No. Lot 80 (Lot 68993), Jalan Degong, 31900 Kampar, Perak",
    "postcode": "68993",
    "state": "Perak",
    "area": "Kampar",
    "reservePrice": 3660000,
    "auctionDate": "28 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "587 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "937",
    "title": "1 Storey Semi Detached House",
    "address": "Jalan Raya Murni 3, Taman Raya Murni, 09400 Padang Serai, Kedah",
    "postcode": "09400",
    "state": "Kedah",
    "area": "Padang Serai",
    "reservePrice": 300000,
    "auctionDate": "30 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "938",
    "title": "1 Storey Terrace House",
    "address": "Lorong Merawan 1/3, Taman Merawan, 09000 Kulim, Kedah",
    "postcode": "09000",
    "state": "Kedah",
    "area": "Kulim",
    "reservePrice": 200000,
    "auctionDate": "30 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "990 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "939",
    "title": "1 Storey Terrace House",
    "address": "Jalan Baiduri 3/1, Taman Teluk Baiduri, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 230000,
    "auctionDate": "7 Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "940",
    "title": "1 Storey Terrace House",
    "address": "No. 55, Jalan Lengkuas 7, Taman Lengkuas, 06650 Simpang Empat, Kedah",
    "postcode": "06650",
    "state": "Kedah",
    "area": "Simpang Empat",
    "reservePrice": 300000,
    "auctionDate": "14 Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "900 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "941",
    "title": "2 Storey Detached House",
    "address": "No. 27, Persiaran Indah Lapan, RPT Desa Pengkalan Indah, 31650 Ipoh, Perak",
    "postcode": "31650",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 500000,
    "auctionDate": "22 Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "595 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "942",
    "title": "Town House",
    "address": "Lengkok Bertam Permata 1, Taman Bertam Permata, 13200 Kepala Batas, Penang",
    "postcode": "13200",
    "state": "Penang",
    "area": "Kepala Batas",
    "reservePrice": 450000,
    "auctionDate": "28 Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "164 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "943",
    "title": "1 Storey Terrace House",
    "address": "Lorong Budiman 2, Taman Desa Budiman, 08100 Sungai Lalang, Kedah",
    "postcode": "08100",
    "state": "Kedah",
    "area": "Sungai Lalang",
    "reservePrice": 300000,
    "auctionDate": "29 Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "099 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "944",
    "title": "Terrace House",
    "address": "Lorong Eugenia 4, Bukit Banyan, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 750000,
    "auctionDate": "29 Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "945",
    "title": "1 Storey Semi Detached House",
    "address": "Taman Sultan Abdul Halim, Off Jalan Tanjung Bendahara, 05300 Alor Setar, Kedah",
    "postcode": "05300",
    "state": "Kedah",
    "area": "Alor Setar",
    "reservePrice": 450000,
    "auctionDate": "18 Nov 2026 (Wed)",
    "landArea": "—",
    "builtUp": "790 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "946",
    "title": "2 Storey Terrace House",
    "address": "No. 433, Taman Nuri, Jalan Datuk Kumbar, 05300 Alor Setar, Kedah",
    "postcode": "05300",
    "state": "Kedah",
    "area": "Alor Setar",
    "reservePrice": 180000,
    "auctionDate": "18 Nov 2026 (Wed)",
    "landArea": "—",
    "builtUp": "288 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "947",
    "title": "2 Storey Semi Detached House",
    "address": "No. 6, Lorong Kota Permai 23, Taman Saujana Permai, 14000 Bukit Mertajam, Penang",
    "postcode": "14000",
    "state": "Penang",
    "area": "Bukit Mertajam",
    "reservePrice": 820000,
    "auctionDate": "19 Nov 2026 (Thu)",
    "landArea": "—",
    "builtUp": "256 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "948",
    "title": "1 Storey Detached House",
    "address": "No. 77, Jalan Bukit Kulim 1, Bukit Kulim, 09000 Kulim, Kedah",
    "postcode": "09000",
    "state": "Kedah",
    "area": "Kulim",
    "reservePrice": 550000,
    "auctionDate": "25 Nov 2026 (Wed)",
    "landArea": "—",
    "builtUp": "585 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "949",
    "title": "1 Storey Detached House",
    "address": "No. 271, Hala Jati Meru 12, RPT Jelapang Jaya, 30020 Ipoh, Perak",
    "postcode": "30020",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 280000,
    "auctionDate": "26 Nov 2026 (Thu)",
    "landArea": "—",
    "builtUp": "307 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "950",
    "title": "Detached House",
    "address": "Tempat Kampong Lalang, Mukim Siong, Daerah Baling, Kedah",
    "postcode": "",
    "state": "Kedah",
    "area": "Daerah Baling",
    "reservePrice": 180000,
    "auctionDate": "9 Dec 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "951",
    "title": "1 Storey Semi Detached House",
    "address": "Jalan Raya Murni 2, Taman Raya Murni, 09400 Padang Serai, Kedah",
    "postcode": "09400",
    "state": "Kedah",
    "area": "Padang Serai",
    "reservePrice": 380000,
    "auctionDate": "30 Dec 2026 (Wed)",
    "landArea": "—",
    "builtUp": "370 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "952",
    "title": "Detached House",
    "address": "Lorong Kedidi 1/1, Taman Kedidi, 09000 Kulim, Kedah",
    "postcode": "09000",
    "state": "Kedah",
    "area": "Kulim",
    "reservePrice": 400000,
    "auctionDate": "30 Dec 2026 (Wed)",
    "landArea": "—",
    "builtUp": "692 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "953",
    "title": "Service Apartment",
    "address": "Unit No. 13-09, Blok C, Kip Villa Indah, Jalan Titiwangsa 1, Taman Tampoi Indah, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 315000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "850 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "954",
    "title": "2 Storey Terrace House",
    "address": "Jalan Bakti 56, Taman Mutiara Rini, 81300 Skudai, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Skudai",
    "reservePrice": 620000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "436 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "955",
    "title": "Apartment",
    "address": "Unit No. 02-01-15 (A-02-01), Blok A, Pangsapuri Pan Vista, Jalan Permas 7, Bandar Baru Permas Jaya, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 267300,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "012 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "956",
    "title": "2 Storey Terrace House",
    "address": "No. 16104, Jalan Camar 5, Bandar Putra, 81000 Kulai, Johor",
    "postcode": "16104",
    "state": "Johor",
    "area": "Kulai",
    "reservePrice": 640000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "957",
    "title": "Apartment",
    "address": "Block D, Pangsapuri Titiwangsa, Jalan Padi Malinja 1, Bandar Baru Uda, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 240000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "044 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "958",
    "title": "1 Storey Terrace House",
    "address": "No. 9, Jalan Pengkalan 11, Taman Pasir Emas, 81700 Pasir Gudang, Johor",
    "postcode": "81700",
    "state": "Johor",
    "area": "Pasir Gudang",
    "reservePrice": 310000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "100 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "959",
    "title": "1 Storey Terrace House",
    "address": "No. 24, Jalan Simbang 9, Taman Perling, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 520000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "314 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "960",
    "title": "Service Apartment",
    "address": "Unit No. #08-02, Blok A, Residensi Seri Mega, Jalan Kempas 14, Taman Megah Ria, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 440000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "550 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "961",
    "title": "Apartment",
    "address": "Unit No. 05-06, Blok Geharu D, Jalan Geharu 11, Taman Rinting, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 135000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "592 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "962",
    "title": "Apartment",
    "address": "Unit No. # 03-17, Blok A, Pangsapuri Titiwangsa, Jalan Padi Malinja 1, 81200 Bandar Baru Uda, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Bandar Baru Uda",
    "reservePrice": 230000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "055 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "963",
    "title": "3 Storey Terrace Shop Office",
    "address": "No. 3, Jalan Yayasan Jaya 2, Taman Yayasan Jaya, 85000 Segamat, Johor",
    "postcode": "85000",
    "state": "Johor",
    "area": "Segamat",
    "reservePrice": 484201.8,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "620 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "964",
    "title": "Service Apartment",
    "address": "Unit No. C-08-09, Apartmen Nusa Puncak, Jalan Gelang Patah, Taman Nusa Puncak, 79100 Iskandar Puteri, Johor",
    "postcode": "79100",
    "state": "Johor",
    "area": "Iskandar Puteri",
    "reservePrice": 277020,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "001 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "965",
    "title": "Vacant Land",
    "address": "PTD 24354, Taman Villa Indah, 83710 Yong Peng, Johor",
    "postcode": "24354",
    "state": "Johor",
    "area": "Yong Peng",
    "reservePrice": 178605,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "675 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "966",
    "title": "Service Apartment",
    "address": "Unit No. B-19-18, Block B, Villa Krystal, Jalan Silat Lincah, Bandar Selesa Jaya, 81300 Skudai, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Skudai",
    "reservePrice": 250000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "818 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "967",
    "title": "2 Storey Terrace House",
    "address": "No. 32, Jalan Bukit Flora 2/7, Taman Bukit Flora 2, 83000 Batu Pahat, Johor",
    "postcode": "83000",
    "state": "Johor",
    "area": "Batu Pahat",
    "reservePrice": 135000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "770 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "968",
    "title": "2 Storey Semi Detached House",
    "address": "No. 10, Jalan Bendahara Jaya 2, Taman Bendahara, 83000 Batu Pahat, Johor",
    "postcode": "83000",
    "state": "Johor",
    "area": "Batu Pahat",
    "reservePrice": 153900,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "680 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "969",
    "title": "1 Storey Detached House",
    "address": "No. 358, Kampung Genuang Baru, 85000 Segamat, Johor",
    "postcode": "85000",
    "state": "Johor",
    "area": "Segamat",
    "reservePrice": 188956.8,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "393 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "970",
    "title": "1 Storey Terrace House",
    "address": "No. 644, Jalan Seri Impian 7/23, Bandar Seri Impian, 86000 Kluang, Johor",
    "postcode": "86000",
    "state": "Johor",
    "area": "Kluang",
    "reservePrice": 210600,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "971",
    "title": "Apartment",
    "address": "Unit No. G-01-04, Pangsapuri Seri Awana, Jalan Silat Lincah, Bandar Selesa Jaya, 81300 Skudai, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Skudai",
    "reservePrice": 330000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "354 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "972",
    "title": "Apartment",
    "address": "Unit No. #03-05, Block F (Fasa 3), Jalan Dato' Jaafar, Apartment Larkin Residence, 80350 Johor Bahru, Johor",
    "postcode": "80350",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 460000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "180 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "973",
    "title": "2 Storey Semi Detached House",
    "address": "No. 78, Jalan Pulai Perdana 6, Taman Sri Pulai Perdana, 81300 Skudai, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Skudai",
    "reservePrice": 802000,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "807 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "974",
    "title": "2 Storey Terrace House",
    "address": "Jalan Mutiara Utama 11, Taman Mutiara Utama, 81300 Skudai, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Skudai",
    "reservePrice": 700000,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "300 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "975",
    "title": "1 Storey Terrace House",
    "address": "No. 21, Jalan Perubatan 8, Taman Universiti, 81300 Skudai, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Skudai",
    "reservePrice": 351000,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "800 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "976",
    "title": "Apartment",
    "address": "Unit No. A-04-21, Block A, Jalan Masai Utama 2, Taman Masai Utama, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 78732,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "753 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "977",
    "title": "1 Storey Semi Detached House",
    "address": "No. 16, Jalan Cempaka Sari, Taman Seri Cempaka, 84000 Muar, Johor",
    "postcode": "84000",
    "state": "Johor",
    "area": "Muar",
    "reservePrice": 282123,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "982 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "978",
    "title": "2 Storey Terrace House",
    "address": "No. 987, Jalan Seri Impian 3/18, Bandar Seri Impian, 86000 Kluang, Johor",
    "postcode": "86000",
    "state": "Johor",
    "area": "Kluang",
    "reservePrice": 420000,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "496 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "979",
    "title": "2 Storey Terrace House",
    "address": "No. 50, Jalan Serindit 20, Taman Scientex, 81700 Pasir Gudang, Johor",
    "postcode": "81700",
    "state": "Johor",
    "area": "Pasir Gudang",
    "reservePrice": 360000,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "336 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "980",
    "title": "2 Storey Terrace House",
    "address": "No. 5, Jalan Sejati 9, Taman Tasik Sejati, 85010 Buloh Kasap, Segamat, Johor",
    "postcode": "85010",
    "state": "Johor",
    "area": "Segamat",
    "reservePrice": 360000,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "901 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "981",
    "title": "2 Storey Terrace House",
    "address": "No. 65, Jalan Seroja 5, Taman Johor Jaya, 81100 Johor Bahru, Johor",
    "postcode": "81100",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 310000,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "732 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "982",
    "title": "2 Storey Terrace House",
    "address": "No. 78, Jalan Persada 2, Taman Residensi Pr1ma Kota Tinggi, 81900 Kota Tinggi, Johor",
    "postcode": "81900",
    "state": "Johor",
    "area": "Kota Tinggi",
    "reservePrice": 288000,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "983",
    "title": "2 Storey Cluster House",
    "address": "No. 35, Jalan Bestari 11/3, Taman Nusa Bestari, 81300 Johor Bahru, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 1350000,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "254 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "984",
    "title": "2 Storey Terrace House",
    "address": "No. 39-10, Jalan Teratai 4, Taman Bakri Indah, 84000 Muar, Johor",
    "postcode": "84000",
    "state": "Johor",
    "area": "Muar",
    "reservePrice": 540000,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "765 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "985",
    "title": "2 Storey Terrace House",
    "address": "Jalan Nuri 15, Taman Scientex, 81700 Pasir Gudang, Johor",
    "postcode": "81700",
    "state": "Johor",
    "area": "Pasir Gudang",
    "reservePrice": 480000,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "958 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "986",
    "title": "1 Storey Terrace House",
    "address": "No. 24, Jalan Kejayaan 48, Taman Universiti, 81300 Skudai, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Skudai",
    "reservePrice": 290000,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "044 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "987",
    "title": "Retail Lot",
    "address": "Unit No. 3-34, Aras 3, City Plaza, Jalan Tebrau, 80300 Johor Bahru, Johor",
    "postcode": "80300",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 97200,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "409 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "988",
    "title": "1 Storey Terrace House",
    "address": "No. 23, Jalan Betik 6, Taman Kota Masai, 81700 Pasir Gudang, Johor",
    "postcode": "81700",
    "state": "Johor",
    "area": "Pasir Gudang",
    "reservePrice": 333000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "254 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "989",
    "title": "Condominium",
    "address": "Unit No. B4-10, Kondominium Selesa Puteri, Jalan Silat Gayong 4, Bandar Selesa Jaya, 81300 Skudai, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Skudai",
    "reservePrice": 261000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "001 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "990",
    "title": "1 Storey Terrace House",
    "address": "No. 10133, Jalan Merbuk 2, Bandar Putra, 81000 Kulai, Johor",
    "postcode": "10133",
    "state": "Johor",
    "area": "Kulai",
    "reservePrice": 410000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "300 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "991",
    "title": "1 Storey Terrace House",
    "address": "Premises No. 10454, Jalan Merbuk 9, Bandar Putra, 81000 Kulai, Johor",
    "postcode": "10454",
    "state": "Johor",
    "area": "Kulai",
    "reservePrice": 420000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "120 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "992",
    "title": "2 Storey Terrace House",
    "address": "No. 10, Jalan Melati 9, Taman Sri Penawar, 81930 Bandar Penawar, Johor",
    "postcode": "81930",
    "state": "Johor",
    "area": "Bandar Penawar",
    "reservePrice": 500000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "993",
    "title": "2 Storey Detached House",
    "address": "Jalan Indah 2/10, Taman Kluang Indah, 86000 Kluang, Johor",
    "postcode": "86000",
    "state": "Johor",
    "area": "Kluang",
    "reservePrice": 961000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "519 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "994",
    "title": "Apartment",
    "address": "Unit No. 11-03, Blok B, Pangsapuri Seri Mutiara, Persiaran Seri Alam, Bandar Seri Alam, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 414000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "995",
    "title": "Apartment",
    "address": "Unit No. #02-1B, Jalan Mawar 3, Taman Tampoi Indah II, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 200000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "882 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "996",
    "title": "2 Storey Terrace House",
    "address": "No. 19, Jalan Semerbak 13, Taman Bukit Dahlia, 81700 Pasir Gudang, Johor",
    "postcode": "81700",
    "state": "Johor",
    "area": "Pasir Gudang",
    "reservePrice": 410000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "194 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "997",
    "title": "1 Storey Terrace House",
    "address": "No. 10, Jalan Pulai Ria 4, Bandar Baru Kangkar Pulai, 81110 Pulai, Johor",
    "postcode": "81110",
    "state": "Johor",
    "area": "Pulai",
    "reservePrice": 400000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "998",
    "title": "2 Storey Cluster House",
    "address": "No. 38, Jalan Ekoflora 1/15, Taman Ekoflora, 81100 Johor Bahru, Johor",
    "postcode": "81100",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 1500000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "800 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "999",
    "title": "3 Storey Cluster House",
    "address": "No. 18, Jalan Bukit Skudai 2, Taman Bukit Skudai, 81300 Johor Bahru, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 891000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "238 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1000",
    "title": "2 Storey Terrace House",
    "address": "No. 11, Jalan Sierra Perdana 3/13, Taman Sierra Perdana, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 520000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "300 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1001",
    "title": "2 Storey Terrace House",
    "address": "No. 38, Jalan Seri Impian 7/40, Bandar Seri Impian, 86000 Kluang, Johor",
    "postcode": "86000",
    "state": "Johor",
    "area": "Kluang",
    "reservePrice": 430000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1002",
    "title": "Condominium",
    "address": "Vista Seri Alam, Bandar Seri Alam, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 250000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1003",
    "title": "3 Storey Shop Office",
    "address": "No. 5, Jalan Yayasan Jaya 2, Taman Yayasan Jaya, 85000 Segamat, Johor",
    "postcode": "85000",
    "state": "Johor",
    "area": "Segamat",
    "reservePrice": 432900,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "620 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1004",
    "title": "[5 min to Legoland Malaysia ] Town House [8 min to Marina Puteri Harbour]",
    "address": "Unit No. A-03-03, Residensi Ledang, Jalan Persiaran Puteri Ledang, 79250 Iskandar Puteri, Johor",
    "postcode": "79250",
    "state": "Johor",
    "area": "Iskandar Puteri",
    "reservePrice": 592000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "745 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1005",
    "title": "Retail Lot",
    "address": "Unit No. GF-08, Meridian 2, Jalan Legoland, Bandar Medini Iskandar, 79250 Iskandar Puteri, Johor",
    "postcode": "79250",
    "state": "Johor",
    "area": "Iskandar Puteri",
    "reservePrice": 356000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "133 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1006",
    "title": "Apartment",
    "address": "Unit No. F-2-7, Skudai Villa Apartment, Jalan Aman, Taman Skudai Baru, 81300 Skudai, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Skudai",
    "reservePrice": 242757,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "109 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1007",
    "title": "2 Storey Terrace House",
    "address": "No. 8, Jalan Kemboja 9, Taman Sri Penawar, 81930 Bandar Penawar, Johor",
    "postcode": "81930",
    "state": "Johor",
    "area": "Bandar Penawar",
    "reservePrice": 349920,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "372 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1008",
    "title": "1 Storey Terrace House",
    "address": "No. 15, Jalan Santalia 4, Taman Flora Heights, 81700 Pasir Gudang, Johor",
    "postcode": "81700",
    "state": "Johor",
    "area": "Pasir Gudang",
    "reservePrice": 333000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "960 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1009",
    "title": "2 Storey Terrace House",
    "address": "No. 104, Jalan Bestari 25/3, Taman Bestari Indah, 81800 Ulu Tiram, Johor",
    "postcode": "81800",
    "state": "Johor",
    "area": "Ulu Tiram",
    "reservePrice": 270000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "008 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1010",
    "title": "2 Storey Shop House",
    "address": "No. 6, Jalan Hussien, Kota Kecil, 81900 Kota Tinggi, Johor",
    "postcode": "81900",
    "state": "Johor",
    "area": "Kota Tinggi",
    "reservePrice": 342000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "724 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1011",
    "title": "1 Storey Semi Detached House",
    "address": "No. 16, Taman Beting, Jalan Bakariah, 84000 Muar, Johor",
    "postcode": "84000",
    "state": "Johor",
    "area": "Muar",
    "reservePrice": 495000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "282 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1012",
    "title": "Service Apartment",
    "address": "Unit No. #18-06, Residensi Pandan, Jalan Pandan Ria 7, Pusat Perdagangan Pandan, 81100 Johor Bahru, Johor",
    "postcode": "81100",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 333000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "925 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1013",
    "title": "2 Storey Terrace House",
    "address": "No. 24, Jalan Perwira Jaya 1, Taman Perwira Jaya, 86000 Kluang, Johor",
    "postcode": "86000",
    "state": "Johor",
    "area": "Kluang",
    "reservePrice": 405000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "566 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1014",
    "title": "Apartment",
    "address": "Unit No. 12-12, Block B, Pangsapuri Seroja, Persiaran Seroja Indah, Taman Seroja, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 324000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "281 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1015",
    "title": "Apartment",
    "address": "Unit No. 14-04, Block C, Pangsapuri Persiaran Tanjung, Jalan Persiaran Tanjung, Taman Bukit Alif, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 216000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "076 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1016",
    "title": "2 Storey Terrace House",
    "address": "No. 14, Jalan Orkid 1, Taman Sri Penawar, 81930 Bandar Penawar, Johor",
    "postcode": "81930",
    "state": "Johor",
    "area": "Bandar Penawar",
    "reservePrice": 450000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "858 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1017",
    "title": "2 Storey Terrace House",
    "address": "No. 2, Jalan Eko Tropika 2/12, Taman Kota Masai, 81700 Pasir Gudang, Johor",
    "postcode": "81700",
    "state": "Johor",
    "area": "Pasir Gudang",
    "reservePrice": 769500,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "357 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1018",
    "title": "2 Storey Terrace House",
    "address": "No. 37, Jalan Anggerik 2, Taman Sri Penawar, 81930 Bandar Penawar, Johor",
    "postcode": "81930",
    "state": "Johor",
    "area": "Bandar Penawar",
    "reservePrice": 388800,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "996 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1019",
    "title": "Apartment",
    "address": "Unit No. 03-03, Block A, Pangsapuri Ria, Jalan Utama 1, Taman D'Utama, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 340000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "152 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1020",
    "title": "Service Apartment",
    "address": "Villa Krystal, Jalan Silat Lincah, Bandar Selesa Jaya, 81300 Skudai, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Skudai",
    "reservePrice": 350000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "893 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1021",
    "title": "2.5 Storey Terrace House",
    "address": "No. 19, Jalan Pulai 64, Taman Pulai Utama, 81300 Skudai, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Skudai",
    "reservePrice": 630000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "765 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1022",
    "title": "2 Storey Terrace House",
    "address": "No. 628, Jalan Impiana 19, Taman Impiana, Kelapa Sawit, 81030 Kulai, Johor",
    "postcode": "81030",
    "state": "Johor",
    "area": "Kulai",
    "reservePrice": 470000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "986 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1023",
    "title": "2 Storey Terrace House",
    "address": "No. 51, Jalan Indah 19/4, Taman Bukit Indah, 79100 Iskandar Puteri, Johor",
    "postcode": "79100",
    "state": "Johor",
    "area": "Iskandar Puteri",
    "reservePrice": 670000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1024",
    "title": "2 Storey Terrace House",
    "address": "No. 11, Jalan Indah 30/5, Taman Bukit Indah, 79100 Iskandar Puteri, Johor",
    "postcode": "79100",
    "state": "Johor",
    "area": "Iskandar Puteri",
    "reservePrice": 920000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "916 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1025",
    "title": "Land",
    "address": "Lot 3293, Junction Between Jalan Medoi/Jalan Tasik, Kampung Jawa, 85000 Segamat, Johor",
    "postcode": "85000",
    "state": "Johor",
    "area": "Segamat",
    "reservePrice": 1541835,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1026",
    "title": "1 Storey Terrace House",
    "address": "No. 10, Jalan 22, Taman Sri Paloh, 86600 Paloh, Johor",
    "postcode": "86600",
    "state": "Johor",
    "area": "Paloh",
    "reservePrice": 108000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "044 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1027",
    "title": "2 Storey Terrace House",
    "address": "No. 5, Jalan Bayu 14, Taman Seri Bayu, 83700 Yong Peng, Johor",
    "postcode": "83700",
    "state": "Johor",
    "area": "Yong Peng",
    "reservePrice": 126000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "203 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1028",
    "title": "Terrace House",
    "address": "No. 53, Jalan Bistari 4/20, Taman Yayasan, 85000 Segamat, Johor",
    "postcode": "85000",
    "state": "Johor",
    "area": "Segamat",
    "reservePrice": 290000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1029",
    "title": "2 Storey Terrace House",
    "address": "Jalan Perjiranan 11/13, Bandar Dato Onn, 81100 Johor Bahru, Johor",
    "postcode": "81100",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 800000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "679 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1030",
    "title": "3 Storey Shop Office",
    "address": "No. 1, Jalan Tanjung 1, Taman Sri Tanjung, 86800 Mersing, Johor",
    "postcode": "86800",
    "state": "Johor",
    "area": "Mersing",
    "reservePrice": 656100,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "936 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1031",
    "title": "Apartment",
    "address": "Unit No. B-2-14, Skudai Villa Apartment, Jalan Aman, Taman Skudai Baru, 81300 Skudai, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Skudai",
    "reservePrice": 348300,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "108 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1032",
    "title": "Service Apartment",
    "address": "Unit No. #23-15, Blok A, Residensi Seri Mega, Jalan Kempas 14, Taman Megah Ria, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 420000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1033",
    "title": "2 Storey Terrace House",
    "address": "Jalan Bayu 10, Taman Sri Bayu, 86200 Simpang Renggam, Johor",
    "postcode": "86200",
    "state": "Johor",
    "area": "Simpang Renggam",
    "reservePrice": 140000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1034",
    "title": "2 Storey Terrace House",
    "address": "No. 234, Jalan Seri Impian 6/12, Bandar Seri Impian, 86000 Kluang, Johor",
    "postcode": "86000",
    "state": "Johor",
    "area": "Kluang",
    "reservePrice": 349920,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "650 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1035",
    "title": "1 Storey Terrace House",
    "address": "No. 28, Jalan Biru 4, Taman Melati, 86600 Paloh, Johor",
    "postcode": "86600",
    "state": "Johor",
    "area": "Paloh",
    "reservePrice": 189000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "520 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1036",
    "title": "1 Storey Terrace House",
    "address": "No. 125, Jalan Puteri 4/4, Bandar Baru Tangkak, 84900 Tangkak, Johor",
    "postcode": "84900",
    "state": "Johor",
    "area": "Tangkak",
    "reservePrice": 196830,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1037",
    "title": "Agricultural Land",
    "address": "Lot 788, Adjacent to Taman Tasik, Kampong Jawa, 85000 Segamat, Johor",
    "postcode": "85000",
    "state": "Johor",
    "area": "Segamat",
    "reservePrice": 2798100,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1038",
    "title": "[Right in front of KIPMall Kota Tinggi] Retail Commercial Unit [Located in Kota Tinggi Town]",
    "address": "Sublot 1, First Floor, Block D, Heritage Mall, No. 1, Jalan Warisan 2, 81900 Kota Tinggi, Johor",
    "postcode": "81900",
    "state": "Johor",
    "area": "Kota Tinggi",
    "reservePrice": 1969000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "727 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1039",
    "title": "[4 min to Angsana Johor Bahru Mall] Service Apartment [6 min to Perling Mall]",
    "address": "Unit No. B-24-05, Pangsapuri Dwi Alif, Jalan Tampoi, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 259200,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "915 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1040",
    "title": "Service Apartment",
    "address": "Unit No. T1-L14-04, Residence Encorp, Persiaran Dato' Seri Amar Diraja, Pengkalan Puteri, 79000 Iskandar Puteri, Johor",
    "postcode": "79000",
    "state": "Johor",
    "area": "Iskandar Puteri",
    "reservePrice": 369000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "062 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1041",
    "title": "Service Apartment",
    "address": "Unit No. #06-09, Menara B, Residensi Puncak Saujana (also known as Trellis Residences), Jalan Puncak Saujana, Saujana, 80100 Johor Bahru, Johor",
    "postcode": "80100",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 300000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "510 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1042",
    "title": "2 Storey Terrace House",
    "address": "No. 69, Jalan Merak 6, Taman Scientex, 81700 Pasir Gudang, Johor",
    "postcode": "81700",
    "state": "Johor",
    "area": "Pasir Gudang",
    "reservePrice": 299700,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "440 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1043",
    "title": "1 Storey Terrace House",
    "address": "No. 25, Jalan Pakis 7, Taman Sri Pulai, 81300 Skudai, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Skudai",
    "reservePrice": 315900,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "540 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1044",
    "title": "Service Apartment",
    "address": "Block 1A, Amberside, Persiaran Danga Perdana, Country Garden, Danga Bay, 80200 Johor Bahru, Johor",
    "postcode": "80200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 421200,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "883 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1045",
    "title": "Service Apartment",
    "address": "Aras 2, Pangsapuri Lagenda Tasek, Jalan Tun Abdul Razak Susur 6, Taman Suria Muafakat, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 381000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "237 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1046",
    "title": "2 Storey Terrace House",
    "address": "No. 3, Jalan Kemboja 9, Taman Sri Penawar, 81930 Bandar Penawar, Johor",
    "postcode": "81930",
    "state": "Johor",
    "area": "Bandar Penawar",
    "reservePrice": 405000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1047",
    "title": "1 Storey Terrace House",
    "address": "No. 61, Jalan Nibong 16, Taman Daya, 81100 Johor Bahru, Johor",
    "postcode": "81100",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 450000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "679 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1048",
    "title": "Service Apartment",
    "address": "Unit No. 18-05, Block A, Pangsapuri Duta, Jalan Duta 6, Taman Nusa Duta, 79150 Iskandar Puteri, Johor",
    "postcode": "79150",
    "state": "Johor",
    "area": "Iskandar Puteri",
    "reservePrice": 486000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1049",
    "title": "2 Storey Terrace House",
    "address": "No. 384, Jalan Mutiara Hijau 12, Taman Mutiara Hijau, 81000 Kulai, Johor",
    "postcode": "81000",
    "state": "Johor",
    "area": "Kulai",
    "reservePrice": 600000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "650 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1050",
    "title": "3 Storey Terrace House",
    "address": "No. 33, Jalan Pulai Mutiara 2/7, Taman Pulai Mutiara, 81300 Johor Bahru, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 570000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "173 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1051",
    "title": "2 Storey Terrace House",
    "address": "No. 85, Jalan Eko Tropika 3/15, Taman Kota Masai, 81700 Pasir Gudang, Johor",
    "postcode": "81700",
    "state": "Johor",
    "area": "Pasir Gudang",
    "reservePrice": 550000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1052",
    "title": "2 Storey Terrace House",
    "address": "No. 34, Jalan Delima 12, Taman Cahaya Masai, 81700 Masai, Johor",
    "postcode": "81700",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 390000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "299 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1053",
    "title": "2 Storey Terrace House",
    "address": "No. 174, Jalan Scientex Jaya 8, Taman Scientex, 81400 Senai, Johor",
    "postcode": "81400",
    "state": "Johor",
    "area": "Senai",
    "reservePrice": 540000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "642 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1054",
    "title": "2 Storey Terrace House",
    "address": "No. 2514, Jalan Sri Putri 6/17, Taman Putri Kulai, 81000 Kulai, Johor",
    "postcode": "81000",
    "state": "Johor",
    "area": "Kulai",
    "reservePrice": 445500,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "906 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1055",
    "title": "Terrace House",
    "address": "No. 14, Jalan NB2 4/8, Taman Nusa Bestari 2, 81300 Skudai, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Skudai",
    "reservePrice": 530000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "140 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1056",
    "title": "2 Storey Terrace House",
    "address": "No. 42, Jalan Kemboja 9, Bandar Bestari Perdana, 81700 Pasir Gudang, Johor",
    "postcode": "81700",
    "state": "Johor",
    "area": "Pasir Gudang",
    "reservePrice": 480000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "920 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1057",
    "title": "2 Storey Terrace House",
    "address": "No. 46, Jalan Pulai Mutiara 5/3, Taman Pulai Mutiara, 81300 Johor Bahru, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 500000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "596 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1058",
    "title": "Service Apartment",
    "address": "Unit No. A-18-6, Inspira Bestari (D'Inspire Residence), Jalan Bestari 15/2, Taman Nusa Bestari, 81300 Skudai, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Skudai",
    "reservePrice": 460000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "033 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1059",
    "title": "Service Apartment",
    "address": "Unit No. B-09-05, Inspira Bestari, Jalan Bestari 15/2, Taman Nusa Bestari, 81300 Skudai, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Skudai",
    "reservePrice": 520000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "238 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1060",
    "title": "2 Storey Terrace House",
    "address": "Jalan Nusaria 4/9D, Taman Nusantara, 79150 Iskandar Puteri, Johor",
    "postcode": "79150",
    "state": "Johor",
    "area": "Iskandar Puteri",
    "reservePrice": 370000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1061",
    "title": "Apartment",
    "address": "Pangsapuri Permata Austin, Jalan Austin Perdana 1, Taman Austin Perdana, 81100 Johor Bahru, Johor",
    "postcode": "81100",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 500000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1062",
    "title": "Apartment",
    "address": "Blok J, Pangsapuri Lily & Jasmine, Jalan Persisiran Titiwangsa Utama, Taman Tampoi Indah, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 250000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1063",
    "title": "3 Storey Shop Office",
    "address": "No. 25 & 25-01 & 25-02, Jalan Kota 2/3, Taman Cahaya Kota Puteri, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 1100000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "896 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1064",
    "title": "3 Storey Shop Office",
    "address": "No. 23 & 23-01 & 23-02, Jalan Kota 2/3, Taman Cahaya Kota Puteri, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 1100000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "896 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1065",
    "title": "Apartment",
    "address": "Block B, Jalan Seri Molek Perdana 3, Taman Seri Molek Perdana, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 243000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "000 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1066",
    "title": "Apartment",
    "address": "Jalan Seri Molek Perdana 3, Taman Seri Molek Perdana, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 226800,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "000 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1067",
    "title": "Apartment",
    "address": "Block A, Jalan Seri Molek Perdana 3, Taman Seri Molek Perdana, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 234900,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "000 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1068",
    "title": "Service Apartment",
    "address": "Unit No. T2-L12-02, Residensi Encorp, Persiaran Dato Seri Amar Diraja, Puteri Harbour, 79000 Iskandar Puteri, Johor",
    "postcode": "79000",
    "state": "Johor",
    "area": "Iskandar Puteri",
    "reservePrice": 590000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "137 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1069",
    "title": "Apartment",
    "address": "Unit No. #07-03A, Pangsapuri Tasek Impian (D'Tasek Residences), Jalan Suria Muafakat 1, Taman Suria Muafakat, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 380000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1070",
    "title": "Condominium",
    "address": "Unit No. B1-05-02, Jalan Tanjung Lompat, Tiara Desaru Seaview Residence (also known as Prince Bay @ Desaru), Bandar Penawar, 81930 Kota Tinggi, Johor",
    "postcode": "81930",
    "state": "Johor",
    "area": "Kota Tinggi",
    "reservePrice": 90000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "318 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1071",
    "title": "2 Storey Terrace House",
    "address": "No. 11, Jalan Rimbun 5, Bandar Seri Alam, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 495000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "765 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1072",
    "title": "3 Storey Shop Office",
    "address": "No. 2, Jalan Tanjung 1, Taman Sri Tanjung, 86800 Mersing, Johor",
    "postcode": "86800",
    "state": "Johor",
    "area": "Mersing",
    "reservePrice": 583200,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "920 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1073",
    "title": "3 Storey Shop Office",
    "address": "No. 3, Jalan Tanjung 1, Taman Sri Tanjung, 86800 Mersing, Johor",
    "postcode": "86800",
    "state": "Johor",
    "area": "Mersing",
    "reservePrice": 539460,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "949 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1074",
    "title": "Service Apartment",
    "address": "Unit No. #31-09, Menara A, Pangsapuri Vistana Tropika, Jalan Harimau, Taman Abad, 80250 Johor Bahru, Johor",
    "postcode": "80250",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 580000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1075",
    "title": "Apartment",
    "address": "Pangsapuri Kempas Indah, Taman Kempas Indah, 81300 Johor Bahru, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 470000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1076",
    "title": "Service Apartment",
    "address": "Unit No. #08-10, Menara D, Residensi Masai (Parc Regency), Jalan Masai Jaya 2, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 320000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "010 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1077",
    "title": "Service Apartment",
    "address": "Unit No. 01-02, Block N, Larkin Residence 2, Jalan Dato Jaafar, 80350 Johor Bahru, Johor",
    "postcode": "80350",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 384000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "237 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1078",
    "title": "Service Apartment",
    "address": "Unit No. #46-06, Menara B, Pangsapuri Seri Permata, Jalan Kunyit, Taman Sri Amar, 81100 Johor Bahru, Johor",
    "postcode": "81100",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 360000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "979 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1079",
    "title": "Service Apartment",
    "address": "Unit No. #28-14, Menara C, Residensi KSL Kangkar Tebrau (KSL Residences 2 @ Kangkar Tebrau), Jalan Kesum, 81100 Johor Bahru, Johor",
    "postcode": "81100",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 320000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "882 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1080",
    "title": "Retail Unit",
    "address": "Unit No. A-01-01, DB Kompleks, Jalan Persiaran Afiat, Taman Kesihatan Afiat, 79250 Iskandar Puteri, Johor",
    "postcode": "79250",
    "state": "Johor",
    "area": "Iskandar Puteri",
    "reservePrice": 600000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "355 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1081",
    "title": "Apartment",
    "address": "Block B, Pangsapuri Seri Mutiara (Seri Mutiara Apartment), Jalan Persiaran Seri Alam, Bandar Seri Alam, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 284000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "324 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1082",
    "title": "2 Storey Terrace House",
    "address": "No. 27, Jalan Seri Austin 3/26, Taman Seri Austin, 81100 Johor Bahru, Johor",
    "postcode": "81100",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 630000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "185 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1083",
    "title": "2 Storey Cluster House",
    "address": "No. 32, Jalan Ekoflora 1/11, Taman Ekoflora, 81100 Johor Bharu, Johor",
    "postcode": "81100",
    "state": "Johor",
    "area": "Johor Bharu",
    "reservePrice": 1287000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "800 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1084",
    "title": "Service Apartment",
    "address": "Block 11A, Royal Strand, Persiaran Danga Perdana, Country Garden Danga Bay, 80200 Johor Bahru, Johor",
    "postcode": "80200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 540000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "248 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1085",
    "title": "1 Storey Semi Detached House",
    "address": "No. 11, Jalan Seri Temenggong 16, Taman Sri Temenggong, 84000 Muar, Johor",
    "postcode": "84000",
    "state": "Johor",
    "area": "Muar",
    "reservePrice": 380000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "956 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1086",
    "title": "Flat",
    "address": "Block Geharu A, Jalan Geharu 11, Taman Rinting, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 135000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "592 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1087",
    "title": "Apartment",
    "address": "Unit No. #05-05, Blok C5, Pangsapuri Larkin Idaman, Jalan Idaman Utama, Taman Larkin Idaman, 80350 Johor Bahru, Johor",
    "postcode": "80350",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 210600,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "861 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1088",
    "title": "Service Apartment",
    "address": "Unit No. 12-06, Blok B, Pangsapuri Kempas Indah, Jalan Kempas Indah, Taman Kempas Indah, 81300 Johor Bahru, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 324000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "980 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1089",
    "title": "2 Storey Terrace House",
    "address": "No. 38, Jalan 5/4, Taman Sri Kluang, 86000 Kluang, Johor",
    "postcode": "86000",
    "state": "Johor",
    "area": "Kluang",
    "reservePrice": 121500,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "952 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1090",
    "title": "Apartment",
    "address": "Unit No. A2-03-02, Pangsapuri Seri Mengkuang 2, Persiaran Juragan, Desa Paya Mengkuang, 81560 Gelang Patah, Johor",
    "postcode": "81560",
    "state": "Johor",
    "area": "Gelang Patah",
    "reservePrice": 315000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "216 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1091",
    "title": "Condominium",
    "address": "Pangsapuri Sri Pahlawan B, Jalan Bendahara, Taman Bukit Saujana, 81100 Johor Bahru, Johor",
    "postcode": "81100",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 280000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "001 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1092",
    "title": "Apartment",
    "address": "Unit No. #3A-02, Block F, Pangsapuri Seri Mutiara, Persiaran Seri Alam, Bandar Seri Alam, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 420000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "323 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1093",
    "title": "Cluster House",
    "address": "Jalan Mutiara Bestari 12, Taman Mutiara Bestari, 81300 Skudai, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Skudai",
    "reservePrice": 1100000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1094",
    "title": "3 Storey Shop House",
    "address": "No. 61, Jalan Molek 3/20, Taman Molek, 81100 Johor Bahru, Johor",
    "postcode": "81100",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 2340000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "464 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1095",
    "title": "1 Storey Semi Detached House",
    "address": "No. 10, Jalan 1, Taman Dato Amar Diraja, 86000 Kluang, Johor",
    "postcode": "86000",
    "state": "Johor",
    "area": "Kluang",
    "reservePrice": 460000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "708 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1096",
    "title": "Apartment",
    "address": "Blok Q, Jalan Cenderai 19, Bandar Baru Kota Puteri, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 106288.2,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "807 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1097",
    "title": "1 Storey Terrace House",
    "address": "Jalan Bestari 17/1, Taman Bestari Indah 1, 81800 Ulu Tiram, Johor",
    "postcode": "81800",
    "state": "Johor",
    "area": "Ulu Tiram",
    "reservePrice": 324000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "282 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1098",
    "title": "Service Apartment",
    "address": "Blok A, Pangsapuri Larkin Idaman, Jalan Idaman 1, Taman Larkin Idaman, 80350 Johor Bahru, Johor",
    "postcode": "80350",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 307800,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "055 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1099",
    "title": "2 Storey Terrace Dwelling House",
    "address": "Jalan Bestari 28/1, Taman Bestari Indah, 81800 Ulu Tiram, Johor",
    "postcode": "81800",
    "state": "Johor",
    "area": "Ulu Tiram",
    "reservePrice": 440000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "173 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1100",
    "title": "1 Storey Terrace House",
    "address": "No. 3, Jalan Bistari 1/5, Taman Yayasan, 85010 Segamat, Johor",
    "postcode": "85010",
    "state": "Johor",
    "area": "Segamat",
    "reservePrice": 140000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "300 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1101",
    "title": "2 Storey Terrace Shop",
    "address": "Jalan Jaya, Bandar Kota Tinggi, 81900 Kota Tinggi, Johor",
    "postcode": "81900",
    "state": "Johor",
    "area": "Kota Tinggi",
    "reservePrice": 620000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "026 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1102",
    "title": "Service Apartment",
    "address": "Block C, Pangsapuri Kempas Indah, Jalan Kempas Indah, Taman Kempas Indah, 81300 Johor Bahru, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 460000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "033 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1103",
    "title": "Condominium",
    "address": "Unit No. 04-02, Block E, Pangsapuri Seri Mutiara, Bandar Seri Alam, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 212576,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "324 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1104",
    "title": "2 Storey Terrace House",
    "address": "No. 16, Jalan Setia Tropika 5/13, Taman Setia Tropika, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 660000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "496 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1105",
    "title": "1 Storey Terrace House",
    "address": "No. 2447, Jalan Belian 2, Bandar Putra, 81000, Kulai, Johor",
    "postcode": "81000",
    "state": "Johor",
    "area": "Kulai",
    "reservePrice": 430000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "200 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1106",
    "title": "1 Storey Terrace House",
    "address": "No. 21, Jalan Sejati 6, Taman Tasik Sejati, 85010 Segamat, Johor",
    "postcode": "85010",
    "state": "Johor",
    "area": "Segamat",
    "reservePrice": 218700,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "650 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1107",
    "title": "Apartment",
    "address": "Unit No. #04-11 (Unit No. B1-04-11), Blok 1, Impian Senibong, Jalan Persiaran Senibong, Taman Bayu Senibong, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 360000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "947 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1108",
    "title": "Town House",
    "address": "Pangsapuri Sri Awana, Jalan Silat Lincah, Bandar Selesa Jaya, 81300 Skudai, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Skudai",
    "reservePrice": 261000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "130 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1109",
    "title": "3 Storey Semi Detached House",
    "address": "No. 20, Jalan Kempas Utama 1/25, Taman Kempas Utama, 81300 Johor Bahru, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 2000000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "432 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1110",
    "title": "1 Storey Terrace House",
    "address": "No. 185, Jalan Makmur 7, Taman Makmur, 81000 Kulai, Johor",
    "postcode": "81000",
    "state": "Johor",
    "area": "Kulai",
    "reservePrice": 330000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "188 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1111",
    "title": "1 Storey Terrace House",
    "address": "Jalan Lembing 23, Taman Puteri Wangsa, 81800 Ulu Tiram, Johor",
    "postcode": "81800",
    "state": "Johor",
    "area": "Ulu Tiram",
    "reservePrice": 430000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1112",
    "title": "2 Storey Terrace House",
    "address": "No. 127, Residensi Botani 1, Persiaran Eko Botani 2, Taman Eko Botani 2, 79100 Iskandar Puteri, Johor",
    "postcode": "79100",
    "state": "Johor",
    "area": "Iskandar Puteri",
    "reservePrice": 940000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "797 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1113",
    "title": "Service Apartment",
    "address": "Unit No. #29-02, Block 10B, Royal Strand, Persiaran Danga Bay, Country Garden Danga Bay, 80200 Johor Bahru, Johor",
    "postcode": "80200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 526500,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "356 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1114",
    "title": "1 Storey Terrace House",
    "address": "No. 26, Jalan Jambu Bertih, Taman Sentosa, 83000, Batu Pahat, Johor",
    "postcode": "83000",
    "state": "Johor",
    "area": "Batu Pahat",
    "reservePrice": 250000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "485 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1115",
    "title": "2 Storey Terrace House",
    "address": "No. 23, Jalan Bayu 7/8, Taman Nusa Bayu, 79250 Iskandar Puteri, Johor",
    "postcode": "79250",
    "state": "Johor",
    "area": "Iskandar Puteri",
    "reservePrice": 600000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "194 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1116",
    "title": "1 Storey Terrace House",
    "address": "No. 17, Jalan Kemajuan 15, Taman Universiti, 81300 Skudai, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Skudai",
    "reservePrice": 430000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1117",
    "title": "2 Storey Terrace House",
    "address": "No. 14, Jalan Bestari 62, Taman Mutiara Rini, 81300 Skudai, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Skudai",
    "reservePrice": 680000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1118",
    "title": "Apartment",
    "address": "Unit No. A-30-02, Merak Kayangan, Persiaran Medini Utara 3, Bandar Medini Iskandar, 79000 Iskandar Puteri, Johor",
    "postcode": "79000",
    "state": "Johor",
    "area": "Iskandar Puteri",
    "reservePrice": 522450,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "765 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1119",
    "title": "Condominium",
    "address": "Unit No. 04-01 (03A-01), Blok C, Pangsapuri Seri Mutiara, Jalan Persiaran Seri Alam, Bandar Seri Alam, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 259200,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "324 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1120",
    "title": "2 Storey Terrace House",
    "address": "No. 48, Jalan Bayu 18, Bandar Seri Alam, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 413100,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "768 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1121",
    "title": "1 Storey Terrace House",
    "address": "No. 13176, Jalan Rajawali 4, Bandar Putra, 81000 Kulai, Johor",
    "postcode": "13176",
    "state": "Johor",
    "area": "Kulai",
    "reservePrice": 378000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "180 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1122",
    "title": "Apartment",
    "address": "Unit No. #13-09, Block E, Pangsapuri Dwi Mahkota, Susur 1/1, Jalan Persiaran Tanjung, Taman Bukit Alif, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 261000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "925 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1123",
    "title": "2 Storey Terrace House",
    "address": "No. 715, Jalan Pulai Jaya 31, Bandar Pulai Jaya, 81300 Skudai, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Skudai",
    "reservePrice": 560000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "104 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1124",
    "title": "1 Storey Terrace House",
    "address": "No. 6, Jalan Kejayaan 57, Taman Universiti, 81300 Skudai, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Skudai",
    "reservePrice": 450000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1125",
    "title": "Condominium",
    "address": "Unit No. 05-08, Block D, Pangsapuri Seri Mutiara, Bandar Seri Alam, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 320760,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "668 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1126",
    "title": "1 Storey Terrace House",
    "address": "No. 2821, Jalan Sri Putri 10/2, Taman Putri Kulai Fasa 10, 81000 Kulai, Johor",
    "postcode": "81000",
    "state": "Johor",
    "area": "Kulai",
    "reservePrice": 420000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "408 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1127",
    "title": "Apartment",
    "address": "Blok F, Dwi Mahkota Kondominium, Jalan Persiaran Tanjung Susur 1/1, Taman Bukit Aliff, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 342000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "378 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1128",
    "title": "2 Storey Terrace House",
    "address": "No. 30, Jalan SS 4/4, Taman Sri Saujana, 81900 Kota Tinggi, Johor",
    "postcode": "81900",
    "state": "Johor",
    "area": "Kota Tinggi",
    "reservePrice": 630000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "830 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1129",
    "title": "2 Storey Terrace House",
    "address": "No. 51, Jalan Putera Indah 12/18, Taman Putera Indah, 83010 Tongkang Pechah, Batu Pahat, Johor",
    "postcode": "83010",
    "state": "Johor",
    "area": "Batu Pahat",
    "reservePrice": 315000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "300 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1130",
    "title": "Service Apartment",
    "address": "Blok D, Pangsapuri Suriamas, Jalan Serantau, Taman Dato Onn, 80350 Johor Bahru, Johor",
    "postcode": "80350",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 316000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1131",
    "title": "Apartment",
    "address": "Blok B1, Impian Senibong, Jalan Persiaran Senibong, Taman Bayu Senibong, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 446000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "152 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1132",
    "title": "Apartment",
    "address": "Unit No. B1-G1-8, Vista Seri Alam, Jalan Persiaran Seri Alam, Bandar Seri Alam, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 243000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "850 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1133",
    "title": "Apartment",
    "address": "Unit No. 11-02, Block D, Pangsapuri Seri Mutiara (Seri Mutiara Apartments), Jalan Persiaran Seri Alam, Bandar Seri Alam, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 315000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "324 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1134",
    "title": "1 Storey Terrace House",
    "address": "Jalan Pulai Indah 3/14, Taman Pulai Indah 2, 81110 Kangkar, Pulai, Johor",
    "postcode": "81110",
    "state": "Johor",
    "area": "Pulai",
    "reservePrice": 520000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1135",
    "title": "Apartment",
    "address": "Residensi Pandan, Jalan Pandan Ria 7, Pusat Perdagangan Pandan, 81100 Johor Bahru, Johor",
    "postcode": "81100",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 380000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1136",
    "title": "Apartment",
    "address": "Unit No. E-04-10, Skudai Villa, Jalan Aman, Taman Skudai Baru, 81300 Skudai, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Skudai",
    "reservePrice": 249318,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "109 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1137",
    "title": "Apartment",
    "address": "Unit No. 03-07, Blok D, Pangsapuri Persiaran Tanjung, Jalan Persiaran Tanjung, Taman Bukit Alif, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 260000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "076 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1138",
    "title": "Apartment",
    "address": "Unit No. 17-06, Block B, Pangsapuri Seri Mutiara, Persiaran Seri Alam, Bandar Seri Alam, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 275562,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "227 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1139",
    "title": "Service Apartment",
    "address": "Unit No. #22-08, Residensi Pandan, Jalan Pandan Ria 7, Pusat Perdagangan Pandan, 81100 Johor Bahru, Johor",
    "postcode": "81100",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 306180,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "076 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1140",
    "title": "Apartment",
    "address": "Unit No. 05-15, Block A, Perumahan Aman Larkin, Jalan Tani, Kampung Aman, 80350 Johor Bahru, Johor",
    "postcode": "80350",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 277020,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "119 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1141",
    "title": "Condominium",
    "address": "Unit No. Blok B-09-01, Jalan Kolam Air, Condominium Aloha, 80100 Johor Bahru, Johor",
    "postcode": "80100",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 405000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "830 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1142",
    "title": "2 Storey Terrace House",
    "address": "No. 14, Jalan Penaga 5, Taman Pulai Hijauan, 81110 Kangkar Pulai, Johor",
    "postcode": "81110",
    "state": "Johor",
    "area": "Kangkar Pulai",
    "reservePrice": 585000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "020 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1143",
    "title": "Condominium",
    "address": "Unit No. L08-01, Laguna Heights, Jalan Sri Laguna 1, Bukit Laguna, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 578000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "992 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1144",
    "title": "1 Storey Cluster House",
    "address": "No. 14, Jalan Kiaramas 6, Taman Kiaramas, 86000 Kluang, Johor",
    "postcode": "86000",
    "state": "Johor",
    "area": "Kluang",
    "reservePrice": 320760,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "800 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1145",
    "title": "2 Storey Terrace House",
    "address": "Jalan Lavender 2, Taman Sri Penawar, 81930 Bandar Penawar, Johor",
    "postcode": "81930",
    "state": "Johor",
    "area": "Bandar Penawar",
    "reservePrice": 295245,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1146",
    "title": "2 Storey Terrace House",
    "address": "Jalan Impiana Damai 1/13, Bandar Seri Impian, 86000 Kluang, Johor",
    "postcode": "86000",
    "state": "Johor",
    "area": "Kluang",
    "reservePrice": 342630,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "647 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1147",
    "title": "Service Apartment",
    "address": "Villa Krystal, Jalan Silat Lincah, Bandar Selesa Jaya, 81300 Skudai, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Skudai",
    "reservePrice": 183000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "904 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1148",
    "title": "2 Storey Terrace House",
    "address": "Jalan Padi Malinja 4, Bandar Baru Uda, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 531000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "650 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1149",
    "title": "Apartment",
    "address": "Unit No. K06-16, Blok K, Jalan Gaya 11, Taman Gaya, 81800 Ulu Tiram, Johor",
    "postcode": "81800",
    "state": "Johor",
    "area": "Ulu Tiram",
    "reservePrice": 144000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "753 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1150",
    "title": "Apartment",
    "address": "Unit No. J-02-01, Pangsapuri Sri Awana, Jalan Silat Lincah, Bandar Selesa Jaya, 81300 Skudai, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Skudai",
    "reservePrice": 204120,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "958 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1151",
    "title": "Service Apartment",
    "address": "Unit No. #11-16, Block A, Lake View Suites, Jalan Austin Perdana 1, Taman Austin Perdana, 81100 Johor Bahru, Johor",
    "postcode": "81100",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 283500,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "807 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1152",
    "title": "2 Storey Bungalow House",
    "address": "No. 2, Jalan Tanjung Puteri 2, Tanjong Puteri Resort, 81700 Pasir Gudang, Johor",
    "postcode": "81700",
    "state": "Johor",
    "area": "Pasir Gudang",
    "reservePrice": 900000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "581 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1153",
    "title": "2 Storey Cluster House",
    "address": "No. 31, Jalan Mutiara Bestari 22, Taman Mutiara Bestari, 81300 Skudai, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Skudai",
    "reservePrice": 1000000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "296 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1154",
    "title": "1 Storey Terrace House",
    "address": "Jalan Kancil 14, Taman Scientex, 81700 Pasir Gudang, Johor",
    "postcode": "81700",
    "state": "Johor",
    "area": "Pasir Gudang",
    "reservePrice": 400000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1155",
    "title": "Service Apartment",
    "address": "Block C, Apartment Suriamas, Jalan Serantau, Taman Dato Onn, 80350 Johor Bahru, Johor",
    "postcode": "80350",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 470000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1156",
    "title": "2 Storey Terrace House",
    "address": "No. 70, Jalan Indah 9/2, Taman Bukit Indah, 79100 Iskandar Puteri, Johor",
    "postcode": "79100",
    "state": "Johor",
    "area": "Iskandar Puteri",
    "reservePrice": 750000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1157",
    "title": "1 Storey Terrace House",
    "address": "No. 7, Jalan Puteri 1/1, Taman Puteri Wangsa, 81800 Ulu Tiram, Johor",
    "postcode": "81800",
    "state": "Johor",
    "area": "Ulu Tiram",
    "reservePrice": 376650,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "680 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1158",
    "title": "2 Storey Terrace House",
    "address": "No. 86, Jalan Laman Indah 16, Taman Laman Indah, 81300 Kangkar Pulai, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Kangkar Pulai",
    "reservePrice": 500000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "150 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1159",
    "title": "Apartment",
    "address": "Pangsapuri Delima Larkin, Jalan Idaman 1, Taman Larkin Idaman, 80350 Johor Bahru, Johor",
    "postcode": "80350",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 270000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "001 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1160",
    "title": "2 Storey Terrace House",
    "address": "Jalan Serindit 18, Taman Scientex, 81700 Pasir Gudang, Johor",
    "postcode": "81700",
    "state": "Johor",
    "area": "Pasir Gudang",
    "reservePrice": 330000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "958 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1161",
    "title": "Apartment",
    "address": "Block D, Pangsapuri Amara Larkin, Jalan Larkin, 80350 Johor Bahru, Johor",
    "postcode": "80350",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 470000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1162",
    "title": "1 Storey Terrace House",
    "address": "No. 27, Jalan Mutiara 2, Taman Mutiara 1, 81800 Ulu Tiram, Johor",
    "postcode": "81800",
    "state": "Johor",
    "area": "Ulu Tiram",
    "reservePrice": 330000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "078 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1163",
    "title": "Town House",
    "address": "TH 2, Vista Seri Alam, Bandar Seri Alam, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 280000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "936 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1164",
    "title": "Apartment",
    "address": "Blok A, Pangsapuri Pulai View, Jalan Skudai, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 370000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1165",
    "title": "1 Storey Semi Detached House",
    "address": "No. 15, Lorong Aman, Batu 40, Kampung Api-Api, 82000 Pontian, Johor",
    "postcode": "82000",
    "state": "Johor",
    "area": "Pontian",
    "reservePrice": 350000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "370 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1166",
    "title": "2 Storey Terrace House",
    "address": "Jalan Scientex Jaya 25, Taman Scientex Senai, 81400 Senai, Johor",
    "postcode": "81400",
    "state": "Johor",
    "area": "Senai",
    "reservePrice": 470000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "076 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1167",
    "title": "3 Storey Terrace House",
    "address": "No. 15, Jalan Bvlgarui, Taman Bvlgarui, 84000 Muar, Johor",
    "postcode": "84000",
    "state": "Johor",
    "area": "Muar",
    "reservePrice": 1100000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "414 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1168",
    "title": "2 Storey Terrace House",
    "address": "No. 21, Jalan SS 4/5, Taman Sri Saujana, 81900 Kota Tinggi, Johor",
    "postcode": "81900",
    "state": "Johor",
    "area": "Kota Tinggi",
    "reservePrice": 820000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "424 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1169",
    "title": "2 Storey Terrace House",
    "address": "No. 32, Jalan Bukit Kempas 4/8, Taman Bukit Kempas, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 468000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "780 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1170",
    "title": "2 Storey Terrace House",
    "address": "No. 102, Jalan Cermai 16, Taman Kota Masai, 81700 Pasir Gudang, Johor",
    "postcode": "81700",
    "state": "Johor",
    "area": "Pasir Gudang",
    "reservePrice": 234900,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "824 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1171",
    "title": "2 Storey Terrace House",
    "address": "No. 25, Jalan SS 5/5, Taman Sri Saujana, 81900 Kota Tinggi, Johor",
    "postcode": "81900",
    "state": "Johor",
    "area": "Kota Tinggi",
    "reservePrice": 405000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1172",
    "title": "2 Storey Terrace House",
    "address": "No. 106, Jalan Ceria 8, Taman Nusa Indah, 79100 Iskandar Puteri, Johor",
    "postcode": "79100",
    "state": "Johor",
    "area": "Iskandar Puteri",
    "reservePrice": 650000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1173",
    "title": "Apartment",
    "address": "Residensi Pandan, Jalan Pandan Ria 7, Pusat Perdagangan Pandan, 81100 Johor Bahru, Johor",
    "postcode": "81100",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 410000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1174",
    "title": "1 Storey Terrace House",
    "address": "No. 17, Jalan SS 8/6, Taman Sri Saujana, 81900 Kota Tinggi, Johor",
    "postcode": "81900",
    "state": "Johor",
    "area": "Kota Tinggi",
    "reservePrice": 292000,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "940 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1175",
    "title": "2 Storey Terrace House",
    "address": "No. 105, Jalan Impian Damai 1/6, Bandar Seri Impian, 86000 Kluang, Johor",
    "postcode": "86000",
    "state": "Johor",
    "area": "Kluang",
    "reservePrice": 324770,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "458 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1176",
    "title": "2 Storey Terrace House",
    "address": "No. 15, Jalan Bestari 7/2, Taman Bestari Indah 1, 81800 Ulu Tiram, Johor",
    "postcode": "81800",
    "state": "Johor",
    "area": "Ulu Tiram",
    "reservePrice": 650000,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "125 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1177",
    "title": "2 Storey Terrace House",
    "address": "No. 19, Jalan Eko Tropika 2/19, Taman Kota Masai, 81700 Pasir Gudang, Johor",
    "postcode": "81700",
    "state": "Johor",
    "area": "Pasir Gudang",
    "reservePrice": 670000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "239 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1178",
    "title": "1 Storey Semi Detached House",
    "address": "No. 7, Jalan Ria 6/2, Taman Ria, 84000 Muar, Johor",
    "postcode": "84000",
    "state": "Johor",
    "area": "Muar",
    "reservePrice": 468000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "279 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1179",
    "title": "1 Storey Semi Detached House",
    "address": "No. 32, Jalan Putera 3, Taman Putera Bakri, 84000 Muar, Johor",
    "postcode": "84000",
    "state": "Johor",
    "area": "Muar",
    "reservePrice": 495000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "834 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1180",
    "title": "3 Storey Cluster House",
    "address": "Jalan Keindahan 30, Taman Skudai Indah, 81300 Skudai, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Skudai",
    "reservePrice": 1300000,
    "auctionDate": "15 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "348 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1181",
    "title": "2 Storey Terrace House",
    "address": "Jalan Permai 2, Taman Seri Permai, 84300 Bukit Pasir, Muar, Johor",
    "postcode": "84300",
    "state": "Johor",
    "area": "Muar",
    "reservePrice": 730000,
    "auctionDate": "21 Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "004 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1182",
    "title": "Retail Unit",
    "address": "Parcel No. 90-4-1, Storey No. 4 (3rd Floor), Wisma Saberkas, Jalan Tun Haji Openg/Jalan Green, 93000 Kuching, Sarawak",
    "postcode": "93000",
    "state": "Sarawak",
    "area": "Kuching",
    "reservePrice": 200000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "574 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1183",
    "title": "1 Storey Terrace House",
    "address": "Lorong Samarindah 21A2, Taman Samarindah, Off Jalan Datuk Mohd. Musa, 94300 Kota Samarahan, Sarawak",
    "postcode": "94300",
    "state": "Sarawak",
    "area": "Kota Samarahan",
    "reservePrice": 380000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "682 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1184",
    "title": "Dwelling House",
    "address": "Lot 1114, Block 4, Jalan Tumuk, Off 8 1/4 Mile, Jalan Matang, Kuching, Sarawak",
    "postcode": "",
    "state": "Sarawak",
    "area": "Kuching",
    "reservePrice": 230000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "574 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1185",
    "title": "Dwelling House",
    "address": "No. 289F, Lorong 6A1B, Taman Matang Jaya, Jalan Matang, 93050 Kuching, Sarawak",
    "postcode": "93050",
    "state": "Sarawak",
    "area": "Kuching",
    "reservePrice": 330000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "500 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1186",
    "title": "Commercial Unit",
    "address": "Unit 28, Second Floor, Emporium, No. 9, Jalan Tun Jugah, 93350, Kuching, Sarawak",
    "postcode": "93350",
    "state": "Sarawak",
    "area": "Kuching",
    "reservePrice": 270000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "043 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1187",
    "title": "Retail Lot",
    "address": "Parcel No. 90-4-1, Storey No. 4, Wisma Saberkas, Jalan Tun Haji Openg / Jalan Green, 93000 Kuching, Sarawak",
    "postcode": "93000",
    "state": "Sarawak",
    "area": "Kuching",
    "reservePrice": 200000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "574 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1188",
    "title": "2 Storey Terrace House",
    "address": "No. 7574-19, Block 9 (Salang), Lorong 4-8, Off Jalan Dato Permaisuri 3, Taman Ceria, Bandar Baru Permyjaya, Tudan, 98000 Miri, Sarawak",
    "postcode": "98000",
    "state": "Sarawak",
    "area": "Miri",
    "reservePrice": 210000,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "004 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1189",
    "title": "1 Storey Terrace House",
    "address": "Lot 1745, Lorong Desa Senadin 1D, Desa Senadin, Off Jalan Lutong-Kuala Baram, 98000 Miri, Sarawak",
    "postcode": "98000",
    "state": "Sarawak",
    "area": "Miri",
    "reservePrice": 300000,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "725 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1190",
    "title": "Dwelling House",
    "address": "Lot 1487, Block 26, Kemena Land District, Jalan Kidurong, 97000 Bintulu, Sarawak",
    "postcode": "97000",
    "state": "Sarawak",
    "area": "Bintulu",
    "reservePrice": 440000,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "819 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1191",
    "title": "1 Storey Terrace Dwelling House",
    "address": "Lot 4937, Lorong 4, Taman Permai, Bandar Baru Permyjaya, 98000 Miri, Sarawak",
    "postcode": "98000",
    "state": "Sarawak",
    "area": "Miri",
    "reservePrice": 234900,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "840 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1192",
    "title": "2 Storey Terrace House",
    "address": "No. 190, Lorong 6, Jalan Kiong Soon, 96100 Sarikei, Sarawak",
    "postcode": "96100",
    "state": "Sarawak",
    "area": "Sarikei",
    "reservePrice": 504000,
    "auctionDate": "17 Jul 2026 (Fri)",
    "landArea": "—",
    "builtUp": "733 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1193",
    "title": "2 Storey Semi Detached House",
    "address": "Lorong Hup Kee 10, Indah Heights, Off Jalan Sherip Masahor, 93350 Kuching, Sarawak",
    "postcode": "93350",
    "state": "Sarawak",
    "area": "Kuching",
    "reservePrice": 1093500,
    "auctionDate": "17 Jul 2026 (Fri)",
    "landArea": "—",
    "builtUp": "876 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1194",
    "title": "Apartment",
    "address": "Parcel No. D-3A-10E, Level 4, Block D, The Park Residence, Jalan Tabuan Tranquility, 93350 Kuching, Sarawak",
    "postcode": "93350",
    "state": "Sarawak",
    "area": "Kuching",
    "reservePrice": 546000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "485 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1195",
    "title": "2 Storey Terrace House",
    "address": "House No. 230 (Lot 3419), Lorong Desa Ilmu 9, Taman Desa Ilmu, Off Jalan Datuk Mohd Musa, 94300 Kota Samarahan, Sarawak",
    "postcode": "94300",
    "state": "Sarawak",
    "area": "Kota Samarahan",
    "reservePrice": 260000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "793 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1196",
    "title": "Dwelling House",
    "address": "No. 5E, Lorong Rantau Panjang Jaya 12, 96000 Sibu, Sarawak",
    "postcode": "96000",
    "state": "Sarawak",
    "area": "Sibu",
    "reservePrice": 500000,
    "auctionDate": "24 Jul 2026 (Fri)",
    "landArea": "—",
    "builtUp": "764 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1197",
    "title": "[Strategic Location] Retail Unit [10 min to CityONE Megamall & Kuching International Airport]",
    "address": "Parcel No. 14665-2-5, Within Storey Level No. 2, One TJ ICT Shopping Complex, Lot 14665, Jalan Stutong, 93250 Kuching, Sarawak",
    "postcode": "14665",
    "state": "Sarawak",
    "area": "Kuching",
    "reservePrice": 162000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "828 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1198",
    "title": "[10 min to Kuching International Airport] Commercial Unit [Close to Borneo Medical Centre]",
    "address": "Parcel No. #S16, Level 3 (Second Floor), Mall 2, CityONE Megamall, Jalan Song/Jalan Tun Jugah, 93350 Kuching, Sarawak",
    "postcode": "93350",
    "state": "Sarawak",
    "area": "Kuching",
    "reservePrice": 142884,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "548 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1199",
    "title": "Semi Detached House",
    "address": "Lot 9307, Lorong Angkasa 1D, Taman Jelita, 98000 Miri, Sarawak",
    "postcode": "98000",
    "state": "Sarawak",
    "area": "Miri",
    "reservePrice": 550000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1200",
    "title": "1 Storey Terrace House",
    "address": "Lot 2344, Lorong Moyan 2N, Moyaneeze, Off Jalan Batu Kawa-Matang, 93250 Kuching, Sarawak",
    "postcode": "93250",
    "state": "Sarawak",
    "area": "Kuching",
    "reservePrice": 351000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "162 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1201",
    "title": "[Located within a commercial centre in Metro City] Apartment [Positioned in a high-growth corridor connecting Kuching city centre and Matang townships]",
    "address": "Unit No. 8TF, Third Floor, Block N, Synergy Square, Off Jalan Matang, 93050 Kuching, Sarawak",
    "postcode": "93050",
    "state": "Sarawak",
    "area": "Kuching",
    "reservePrice": 93000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "244 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1202",
    "title": "Semi Detached House",
    "address": "Golden Villa Garden, Jalan Lutong-Kuala Baram, 98100 Miri, Sarawak",
    "postcode": "98100",
    "state": "Sarawak",
    "area": "Miri",
    "reservePrice": 472392,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "507 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1203",
    "title": "1 Storey Detached House",
    "address": "Lot 1245, Jalan Biri 3, Pujut 1D, Off Jalan Pujut-Lutong, 98000 Miri, Sarawak",
    "postcode": "98000",
    "state": "Sarawak",
    "area": "Miri",
    "reservePrice": 620000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "868 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1204",
    "title": "1 Storey Terrace Dwelling House",
    "address": "Lot 11355, Taman Jelita, Jalan Baleh, 98000 Miri, Sarawak",
    "postcode": "11355",
    "state": "Sarawak",
    "area": "Miri",
    "reservePrice": 330000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "908 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1205",
    "title": "Apartment",
    "address": "Parcel No. 4, Storey No. 3, Block 3, Pine Court Apartment, Jalan Sultan Iskandar, 97000 Bintulu, Sarawak",
    "postcode": "97000",
    "state": "Sarawak",
    "area": "Bintulu",
    "reservePrice": 240000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "915 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1206",
    "title": "1 Storey Terrace Dwelling House",
    "address": "Lot 12601, Lorong Budaya 1B, Jalan Tunku Abdul Rahman, Off Miri-Bintulu Road, Taman Tunku, 98000 Miri, Sarawak",
    "postcode": "12601",
    "state": "Sarawak",
    "area": "Miri",
    "reservePrice": 390000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "146 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1207",
    "title": "2 Storey Semi Detached House",
    "address": "Lot 2871, Lorong Ling Kai Cheng 6, Off Jalan Ling Kai Cheng, 96000 Sibu, Sarawak",
    "postcode": "96000",
    "state": "Sarawak",
    "area": "Sibu",
    "reservePrice": 453600,
    "auctionDate": "31 Jul 2026 (Fri)",
    "landArea": "—",
    "builtUp": "603 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1208",
    "title": "Semi Detached House",
    "address": "Pakan Pasar, 96100 Pakan, Sarawak",
    "postcode": "96100",
    "state": "Sarawak",
    "area": "Pakan",
    "reservePrice": 540000,
    "auctionDate": "31 Jul 2026 (Fri)",
    "landArea": "—",
    "builtUp": "336 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1209",
    "title": "2 Storey Semi Detached House",
    "address": "No. 8B, Lorong Gelama 4, Off Jalan Deshon, 96000 Sibu, Sarawak",
    "postcode": "96000",
    "state": "Sarawak",
    "area": "Sibu",
    "reservePrice": 242200,
    "auctionDate": "31 Jul 2026 (Fri)",
    "landArea": "—",
    "builtUp": "510 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1210",
    "title": "1 Storey Terrace House",
    "address": "Section 65, Lorong Depo 3A, Off Jalan Tun Datuk Patinggi Haji Abdul Rahman Ya'akub, 93050 Kuching, Sarawak",
    "postcode": "93050",
    "state": "Sarawak",
    "area": "Kuching",
    "reservePrice": 350000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "689 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1211",
    "title": "2 Storey Terrace House",
    "address": "Lot 1492, Lorong Kiat Foh 2, Taman Kiat Foh, Off 8 1/2 Mile, Jalan Penrissen, 94300 Samarahan, Sarawak",
    "postcode": "94300",
    "state": "Sarawak",
    "area": "Samarahan",
    "reservePrice": 700000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "715 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1212",
    "title": "1 Storey Terrace House",
    "address": "Lorong Matang Jaya 6A1A, Batu 4, Jalan Matang, Taman Matang Jaya, 93050 Kuching, Sarawak",
    "postcode": "93050",
    "state": "Sarawak",
    "area": "Kuching",
    "reservePrice": 300000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1213",
    "title": "Terrace House",
    "address": "Lorong Indah 4A, Desa Indah 3, Bandar Baru Permyjaya, Tudan, 98000 Miri, Sarawak",
    "postcode": "98000",
    "state": "Sarawak",
    "area": "Miri",
    "reservePrice": 360000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1214",
    "title": "1 Storey Terrace House",
    "address": "Lot. 2618, Lorong Cahya Damai 8C, RPR Bandar Baru Semariang, Off Jalan Sultan Tengah, 93050 Kuching, Sarawak",
    "postcode": "93050",
    "state": "Sarawak",
    "area": "Kuching",
    "reservePrice": 210000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "976 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1215",
    "title": "Terrace House",
    "address": "Lorong 2, Taman Dusun Indah Sejijak, Off Jalan Sejijak, 93050 Kuching, Sarawak",
    "postcode": "93050",
    "state": "Sarawak",
    "area": "Kuching",
    "reservePrice": 300000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1216",
    "title": "Terrace House",
    "address": "Lorong 7C, Taman Duranda Emas, Off 18th Mile, Jalan Kuching-Serian, 94200 Serian, Sarawak",
    "postcode": "94200",
    "state": "Sarawak",
    "area": "Serian",
    "reservePrice": 260000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "807 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1217",
    "title": "1 Storey Terrace House",
    "address": "Lorong 7A4, Taman Malihah, Off Jalan Matang-Batu Kawa, Kuching, Sarawak",
    "postcode": "",
    "state": "Sarawak",
    "area": "Kuching",
    "reservePrice": 240000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "602 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1218",
    "title": "2 Storey Dwelling House",
    "address": "No. 35 (Lot 710), Lorong Riveria 2C1, Taman Riveria, Off Kuching-Samarahan Expressway, 94300 Kota Samarahan, Sarawak",
    "postcode": "94300",
    "state": "Sarawak",
    "area": "Kota Samarahan",
    "reservePrice": 675000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "966 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1219",
    "title": "Retail Lot",
    "address": "Parcel No. 90-4-23, Storey No. 4 (3rd Floor), Wisma Saberkas, Jalan Tun Haji Openg / Jalan Green, 93000 Kuching, Sarawak",
    "postcode": "93000",
    "state": "Sarawak",
    "area": "Kuching",
    "reservePrice": 216000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "839 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1220",
    "title": "2 Storey Terrace Dwelling House",
    "address": "Lot 7697, Lorong Desa Pujut 1F/5, Desa Pujut 2, 98000 Miri, Sarawak",
    "postcode": "98000",
    "state": "Sarawak",
    "area": "Miri",
    "reservePrice": 522000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "512 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1221",
    "title": "1 Storey Terrace Dwelling House",
    "address": "Lorong Indah 1A, 96000 Sibu, Sarawak",
    "postcode": "96000",
    "state": "Sarawak",
    "area": "Sibu",
    "reservePrice": 116640,
    "auctionDate": "21 Aug 2026 (Fri)",
    "landArea": "—",
    "builtUp": "949 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1222",
    "title": "Dwelling House",
    "address": "Lot 2084, Jalan Engkalat, Block 5, Seduan Land District, Sibu, Sarawak",
    "postcode": "",
    "state": "Sarawak",
    "area": "Sibu",
    "reservePrice": 522000,
    "auctionDate": "21 Aug 2026 (Fri)",
    "landArea": "—",
    "builtUp": "795 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1223",
    "title": "1 Storey Terrace House",
    "address": "Lorong 3C, Taman Landeh, Off Jalan Landeh, 93250 Kuching, Sarawak",
    "postcode": "93250",
    "state": "Sarawak",
    "area": "Kuching",
    "reservePrice": 220000,
    "auctionDate": "25 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1224",
    "title": "1 Storey Terrace House",
    "address": "Lot. 3018, Lorong Cahya Damai 13, RPR Bandar Baru Semariang, Off Jalan Sultan Tengah, 93050 Kuching, Sarawak",
    "postcode": "93050",
    "state": "Sarawak",
    "area": "Kuching",
    "reservePrice": 280000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "470 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1225",
    "title": "1 Storey Terrace House",
    "address": "No. 176 (Lot 4029), Lorong Puteri 7B1, Taman Moyan Utama, Jalan Batu Kawa/Tondong, 93250 Kuching, Sarawak",
    "postcode": "93250",
    "state": "Sarawak",
    "area": "Kuching",
    "reservePrice": 300000,
    "auctionDate": "2 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "377 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1226",
    "title": "1 Storey Detached House",
    "address": "House No. 26 (Lot 275), Lorong Kampung Semariang Batu 6, Jalan Kampung Semariang Batu, Off Jalan Semariang, 93050 Kuching, Sarawak",
    "postcode": "93050",
    "state": "Sarawak",
    "area": "Kuching",
    "reservePrice": 750000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "493 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1227",
    "title": "Terrace House",
    "address": "Lorong Mutiara Tuang Park 4H, Taman Rassnorm 2, Off Jalan Datuk Mohammad Musa, 94300 Samarahan, Sarawak",
    "postcode": "94300",
    "state": "Sarawak",
    "area": "Samarahan",
    "reservePrice": 360000,
    "auctionDate": "23 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "711 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1228",
    "title": "2 Storey Shop House",
    "address": "No. 73, Bandar Raub Perdana, Jalan Lipis, 27600 Raub, Pahang",
    "postcode": "27600",
    "state": "Pahang",
    "area": "Raub",
    "reservePrice": 473850,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "600 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1229",
    "title": "1 Storey Terrace House",
    "address": "No. 10, Jalan Tualang Indah 1, Taman Tualang Indah, 28400 Mentakab, Pahang",
    "postcode": "28400",
    "state": "Pahang",
    "area": "Mentakab",
    "reservePrice": 145800,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "130 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1230",
    "title": "1 Storey Terrace House",
    "address": "No. 87, Jalan Tualang Indah 2/1, Taman Tualang Indah, 28400 Mentakab, Pahang",
    "postcode": "28400",
    "state": "Pahang",
    "area": "Mentakab",
    "reservePrice": 194400,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "625 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1231",
    "title": "1 Storey Terrace House",
    "address": "No. 16, Jalan Chengal Lempong, Taman Balok Jaya 2, 26100 Kuantan, Pahang",
    "postcode": "26100",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 202500,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "380 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1232",
    "title": "1 Storey Terrace House",
    "address": "No. 9, Lorong Pandan Damai 1/11, Taman Pandan Damai 1, 25150 Kuantan, Pahang",
    "postcode": "25150",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 186300,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "140 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1233",
    "title": "1 Storey Terrace House",
    "address": "No. 3, Lorong Peramu Baru 23, Perumahan Taman Bayou, 26060 Kuantan, Pahang",
    "postcode": "26060",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 231000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "360 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1234",
    "title": "2 Storey Terrace House",
    "address": "No. 5, Lorong Batu Hitam 3, Taman Batu Hitam, 26100 Kuantan, Pahang",
    "postcode": "26100",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 320000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "480 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1235",
    "title": "1.5 Storey Terrace House",
    "address": "No. 19, Lorong BKP 64, Perumahan Bandar Kuantan Putri, 26060 Kuantan, Pahang",
    "postcode": "26060",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 240000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1236",
    "title": "Office",
    "address": "Unit No. B-56-2, Lorong Tun Ismail 6, Sri Dagangan, 25000 Kuantan, Pahang",
    "postcode": "25000",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 126000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "130 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1237",
    "title": "2 Storey Terrace House",
    "address": "No. 60, Jalan Jati, Taman Rimba, 28400 Mentakab, Pahang",
    "postcode": "28400",
    "state": "Pahang",
    "area": "Mentakab",
    "reservePrice": 360000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1238",
    "title": "1 Storey Terrace House",
    "address": "No. 28, Lorong Pandan Damai 1/20, Taman Pandan Damai 1, 25150 Kuantan, Pahang",
    "postcode": "25150",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 180000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "496 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1239",
    "title": "1 Storey Terrace House",
    "address": "No. 7, Jalan KS 2/9, Kota Sultan Ahmad Shah, 25200 Kuantan, Pahang",
    "postcode": "25200",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 387000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "294 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1240",
    "title": "1 Storey Terrace House",
    "address": "No. 90, Lorong Cempaka 3, Desa Cempaka, 26700 Muadzam Shah, Pahang",
    "postcode": "26700",
    "state": "Pahang",
    "area": "Muadzam Shah",
    "reservePrice": 160000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "313 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1241",
    "title": "Shop Lot",
    "address": "Unit No. F80, First Floor, Kuantan Parade, Jalan Haji Abdul Rahman, 25000 Kuantan, Pahang",
    "postcode": "25000",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 180000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "242 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1242",
    "title": "2 Storey Shop Office",
    "address": "Unit No. B-24, Lorong Sungai Isap Jaya 1, Perkampungan Sungai Isap Jaya, 25150 Kuantan, Pahang",
    "postcode": "25150",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 312960,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "653 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1243",
    "title": "2 Storey Semi Detached House",
    "address": "No. 3, Jalan Bahagia 34/3, Bahagia Residence, 28000 Temerloh, Pahang",
    "postcode": "28000",
    "state": "Pahang",
    "area": "Temerloh",
    "reservePrice": 513000,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "798 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1244",
    "title": "1 Storey Terrace House",
    "address": "No. 13, Lorong Gemilang 1, Taman Gemilang 1, 27000 Jerantut, Pahang",
    "postcode": "27000",
    "state": "Pahang",
    "area": "Jerantut",
    "reservePrice": 177147,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "819 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1245",
    "title": "2 Storey Terrace House",
    "address": "No. 17, Lorong Sutera 2, Taman Sutera, 27600 Raub, Pahang",
    "postcode": "27600",
    "state": "Pahang",
    "area": "Raub",
    "reservePrice": 440000,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "496 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1246",
    "title": "2 Storey Detached House",
    "address": "No. 29, Lorong IM 13/3, Indera Mahkota 13, 25200 Kuantan, Pahang",
    "postcode": "25200",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 607500,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "602 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1247",
    "title": "3 Storey Semi Detached House",
    "address": "No. 14, Jalan Indera Segara, Taman Karpaga, 28000 Temerloh, Pahang",
    "postcode": "28000",
    "state": "Pahang",
    "area": "Temerloh",
    "reservePrice": 495000,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "725 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1248",
    "title": "Terrace House",
    "address": "No. 27, Lorong B.K.P 24, Perumahan Bandar Kuantan Putri, 26060 Kuantan, Pahang",
    "postcode": "26060",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 178200,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1249",
    "title": "2 Storey Shop House",
    "address": "No. 1, Bangunan 36 Unit, Lorong Mutiara Nadi Kota, 26400 Bandar Jengka, Pahang",
    "postcode": "26400",
    "state": "Pahang",
    "area": "Bandar Jengka",
    "reservePrice": 720000,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "529 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1250",
    "title": "1 Storey Terrace House",
    "address": "No. 1, Lorong Pinggiran Putra 4/41, Pinggiran Putra 4, 26060 Kuantan, Pahang",
    "postcode": "26060",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 396000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "360 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1251",
    "title": "2 Storey Terrace House",
    "address": "No. 19, Jalan Cempaka Murni 2, Taman Cempaka Murni, 28200 Bandar Bera, Pahang",
    "postcode": "28200",
    "state": "Pahang",
    "area": "Bandar Bera",
    "reservePrice": 243000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1252",
    "title": "Agricultural Land",
    "address": "Lot 2971, Jalan Kuala Lipis-Merapoh-Sungai Koyan, Kechor Tui, 27200 Kuala Lipis, Pahang",
    "postcode": "27200",
    "state": "Pahang",
    "area": "Kuala Lipis",
    "reservePrice": 159709,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1253",
    "title": "Agricultural Land",
    "address": "Lot 2972, Jalan Kuala Lipis-Merapoh-Sungai Koyan, Kechor Tui, 27200 Kuala Lipis, Pahang",
    "postcode": "27200",
    "state": "Pahang",
    "area": "Kuala Lipis",
    "reservePrice": 162287,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1254",
    "title": "1 Storey Terrace House",
    "address": "No. 6, Lorong Seri Damai Perdana 17, Perumahan Seri Damai Perdana, 25150 Kuantan, Pahang",
    "postcode": "25150",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 127545.84,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "711 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1255",
    "title": "Terrace House",
    "address": "No. 92, Lorong Pelindung 80, Jalan Beserah, Taman Pelindung, 25300 Kuantan, Pahang",
    "postcode": "25300",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 204120,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "958 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1256",
    "title": "1 Storey Semi Detached House",
    "address": "No. 1, Lorong Taman Beserah 29, Taman Beserah, 26100 Kuantan, Pahang",
    "postcode": "26100",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 414000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "607 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1257",
    "title": "1 Storey Terrace House",
    "address": "No. 28, Lorong S.D.S 14, Perumahan Seri Damai Sejahtera, 25150 Kuantan, Pahang",
    "postcode": "25150",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 170586,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1258",
    "title": "Terrace House",
    "address": "No. 34, Lorong IPJ 12, Perumahan Makmur Inderapura Jaya, 25150 Kuantan, Pahang",
    "postcode": "25150",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 170100,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "238 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1259",
    "title": "Semi Detached House",
    "address": "No. 3, Lorong BDK 1/20, Bandar Damansara, 26100 Kuantan, Pahang",
    "postcode": "26100",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 360855,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "831 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1260",
    "title": "Office Unit",
    "address": "Unit No. 18-D, Menara Zenith, Jalan Putra Square 6, Putra Square, 25200 Kuantan, Pahang",
    "postcode": "25200",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 270000,
    "auctionDate": "21 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "190 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1261",
    "title": "2 Storey Terrace House",
    "address": "No. 7, Jalan Ketapi, Taman Rimba, 28400 Mentakab, Pahang",
    "postcode": "28400",
    "state": "Pahang",
    "area": "Mentakab",
    "reservePrice": 275562,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1262",
    "title": "1 Storey Semi Detached House",
    "address": "No. 30, Lorong Cherating Perdana 8, Perumahan Cherating Perdana, 26080 Kuantan, Pahang",
    "postcode": "26080",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 230000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "429 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1263",
    "title": "2 Storey Terrace House",
    "address": "No. 40, Lorong Bukit Setongkol Jaya 29, Kampung Jawa, 25100 Kuantan, Pahang",
    "postcode": "25100",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 330674.4,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "464 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1264",
    "title": "2 Storey Terrace House",
    "address": "No. 83A, Lorong Unijaya 6, Taman Unijaya, 27600 Raub, Pahang",
    "postcode": "27600",
    "state": "Pahang",
    "area": "Raub",
    "reservePrice": 430000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "600 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1265",
    "title": "2 Storey Terrace House",
    "address": "No. 37, Lorong Sekilau 44, Taman Mahkota, Bukit Sekilau, 25200 Kuantan, Pahang",
    "postcode": "25200",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 372600,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "501 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1266",
    "title": "1 Storey Terrace House",
    "address": "No. 13, Lorong Bukit Rangin Damai 12, Perumahan Bukit Rangin Damai, 25150 Kuantan, Pahang",
    "postcode": "25150",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 220000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1267",
    "title": "1 Storey Terrace House",
    "address": "No. 110, Lorong Seri Inderapura 17/1, Taman Seri Inderapura, 25150 Kuantan, Pahang",
    "postcode": "25150",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 124002.9,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1268",
    "title": "Terrace House",
    "address": "No. 34, Lorong Pinggiran Putra 4/62, Pinggiran Putra 4, 26060 Kuantan, Pahang",
    "postcode": "26060",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 216000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1269",
    "title": "1 Storey Terrace House",
    "address": "No. 35, Lorong Pandan Aman 2/3, Perumahan Pandan Aman, 25150 Kuantan, Pahang",
    "postcode": "25150",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 157464,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "582 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1270",
    "title": "2 Storey Terrace House",
    "address": "Premises No. 30, Lorong Pinggiran 3/120, Pinggiran Putra 3, 26060 Kuantan, Pahang",
    "postcode": "26060",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 297000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "873 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1271",
    "title": "2 Storey Terrace House",
    "address": "No. 9, Lorong PSJ Damansara 4, Bandar Damansara, 26100 Kuantan, Pahang",
    "postcode": "26100",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 360000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1272",
    "title": "Residential Land",
    "address": "PT. 12100, Jalan Jelutong 1, Taman Rimba, 28400 Mentakab, Pahang",
    "postcode": "12100",
    "state": "Pahang",
    "area": "Mentakab",
    "reservePrice": 159432.3,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "902 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1273",
    "title": "Residential Land",
    "address": "PT 12101, Jalan Jelutong 1, Taman Rimba, 28400 Mentakab, Pahang",
    "postcode": "12101",
    "state": "Pahang",
    "area": "Mentakab",
    "reservePrice": 162384.75,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "171 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1274",
    "title": "Apartment",
    "address": "Unit No. A-6-1, Pangsapuri Sutravilla 1, Jalan Pelindung Damai 5, 26100 Kuantan, Pahang",
    "postcode": "26100",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 177147,
    "auctionDate": "27 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "800 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1275",
    "title": "Office Lot",
    "address": "Lot 2-B, Level 2, Menara Zenith, Jalan Putra Square 6, Putra Square, 25200 Kuantan, Pahang",
    "postcode": "25200",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 1012500,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "118 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1276",
    "title": "2 Storey Shop Office [Facing main road - Jalan Tanah Putih]",
    "address": "Unit No. A-20, Lorong Lengkok Kanan 22, Taman Pinggiran Kota, (Perumahan Tanah Putih Baru), 25150 Kuantan, Pahang",
    "postcode": "25150",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 810000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "680 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1277",
    "title": "1 Storey Terrace House",
    "address": "Jalan Kampung Alur Ladang, Kampung Alur Ladang, 26100 Kuantan, Pahang",
    "postcode": "26100",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 230000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "140 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1278",
    "title": "1 Storey Terrace House [5 min to Econsave Jerantut; 6 min to Jerantut KTM Station]",
    "address": "No. T-476, Jalan Inderapura 15, Taman Inderapura Fasa 5B, 27000 Jerantut, Pahang",
    "postcode": "27000",
    "state": "Pahang",
    "area": "Jerantut",
    "reservePrice": 230000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "647 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1279",
    "title": "Retail Lot",
    "address": "Unit No. D-8-G, Bandar Tun Razak Business Park, Chenor, Pahang",
    "postcode": "",
    "state": "Pahang",
    "area": "Chenor",
    "reservePrice": 350000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1280",
    "title": "1 Storey Terrace House",
    "address": "No. 33, Lorong Maran Jaya 4, Taman Maran Jaya, 26500 Maran, Pahang",
    "postcode": "26500",
    "state": "Pahang",
    "area": "Maran",
    "reservePrice": 110000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1281",
    "title": "1 Storey Terrace House",
    "address": "No. 38, Jalan Pengkalan Damar, Perumahan Sungai Karang Damai, 26100 Kuantan, Pahang",
    "postcode": "26100",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 300000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "959 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1282",
    "title": "1 Storey Terrace House",
    "address": "No. B-2175, Lorong Seri Setali 106 Taman Tunas Jaya Fasa 3 Jalan Semambu, 25300 Kuantan, Pahang",
    "postcode": "25300",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 270000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1283",
    "title": "Semi Detached House",
    "address": "Lorong Seri Damai Indah 12/2, Perumahan Seri Damai Indah, 26070 Kuantan, Pahang",
    "postcode": "26070",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 400000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "576 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1284",
    "title": "Terrace House",
    "address": "Lorong P.B.J 1/28, Perumahan Badak Jaya 1, 25150 Kuantan, Pahang",
    "postcode": "25150",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 280000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1285",
    "title": "1 Storey Terrace House",
    "address": "No. 11, Lorong BKP 26, Perumahan Bandar Kuantan Putri, 26060 Kuantan, Pahang",
    "postcode": "26060",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 210000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1286",
    "title": "2 Storey Terrace House",
    "address": "No. 26, Lorong Seri Setali 71, Perumahan Seri Setali, 25300 Kuantan, Pahang",
    "postcode": "25300",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 414000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "140 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1287",
    "title": "1 Storey Terrace House",
    "address": "Lorong Chengal Lempung Baru 7, Taman Baluk Jaya 2, 26100 Kuantan, Pahang",
    "postcode": "26100",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 210000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "000 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1288",
    "title": "1 Storey Terrace House",
    "address": "Jalan Melur Impian 6, Taman Melur Impian, 28300 Triang, Pahang",
    "postcode": "28300",
    "state": "Pahang",
    "area": "Triang",
    "reservePrice": 160380,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "100 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1289",
    "title": "1 Storey Terrace House",
    "address": "No. T300, Jalan Inderapura 11, Taman Inderapura, 27000 Jerantut, Pahang",
    "postcode": "27000",
    "state": "Pahang",
    "area": "Jerantut",
    "reservePrice": 288000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "732 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1290",
    "title": "Studio Apartment",
    "address": "IM 9/2, Indera Mahkota 9, Valley Suite Apartment, 25200 Kuantan, Pahang",
    "postcode": "25200",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 211410,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "483 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1291",
    "title": "1 Storey Terrace House",
    "address": "No. 205, Jalan Sungai Karang Darat, Taman Aneka Jaya, 26100 Kuantan, Pahang",
    "postcode": "26100",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 207000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1292",
    "title": "2 Storey Terrace House",
    "address": "No. 18, Jalan Wawasan Maju 6, Taman Wawasan 2, 26820 Tanjung Gemok, Pahang",
    "postcode": "26820",
    "state": "Pahang",
    "area": "Tanjung Gemok",
    "reservePrice": 80000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "700 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1293",
    "title": "2 Storey Terrace House",
    "address": "No. A-6074, Lorong Seri Kuantan 58, Perkampungan Seri Kuantan, 25250 Kuantan, Pahang",
    "postcode": "25250",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 370000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "948 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1294",
    "title": "2 Storey Shop Lot",
    "address": "No. 34, Lorong Wawasan 1/2, Taman Wawasan, 27000 Jerantut, Pahang",
    "postcode": "27000",
    "state": "Pahang",
    "area": "Jerantut",
    "reservePrice": 540000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "603 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1295",
    "title": "2 Storey Semi Detached House",
    "address": "No. 1, Lorong Saga Indah 2, Taman Saga Indah, 28400 Mentakab, Pahang",
    "postcode": "28400",
    "state": "Pahang",
    "area": "Mentakab",
    "reservePrice": 792000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "867 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1296",
    "title": "2 Storey Terrace House",
    "address": "No. 1, Lorong TU 3A, Taman Temin Utama, 27000 Jerantut, Pahang",
    "postcode": "27000",
    "state": "Pahang",
    "area": "Jerantut",
    "reservePrice": 369000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "755 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1297",
    "title": "2 Storey Terrace House",
    "address": "Lorong Zamrud 2, Nadi Kota, Bandar Pusat Jengka, 26400 Maran, Pahang",
    "postcode": "26400",
    "state": "Pahang",
    "area": "Maran",
    "reservePrice": 500000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "604 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1298",
    "title": "1 Storey Semi Detached House",
    "address": "No. 5, Lorong IS 1/13, Perumahan Indera Sempurna, 25150 Kuantan, Pahang",
    "postcode": "25150",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 333000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "595 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1299",
    "title": "2 Storey Semi Detached House",
    "address": "No. 9, Lorong Bandar Putra 3/3, Perumahan Bandar Putra, 26060 Kuantan, Pahang",
    "postcode": "26060",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 393600,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "798 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1300",
    "title": "1 Storey Terrace House",
    "address": "No. 8, Jalan Chengal 2, Taman Chengal, 28000 Temerloh, Pahang",
    "postcode": "28000",
    "state": "Pahang",
    "area": "Temerloh",
    "reservePrice": 180000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "496 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1301",
    "title": "2 Storey Shop Office",
    "address": "Lorong IM 16/1, Indera Mahkota 16, 25200 Kuantan, Pahang",
    "postcode": "25200",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 364500,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1302",
    "title": "1 Storey Semi Detached House",
    "address": "No. 5, Lorong Kempadang Jaya 12, Perumahan Kempadang Jaya, 25150 Kuantan, Pahang",
    "postcode": "25150",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 275400,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "186 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1303",
    "title": "3 Storey Shop Office",
    "address": "Jalan Chengal Baru 6, Pusat Perniagaan Chengal, 28000 Temerloh, Pahang",
    "postcode": "28000",
    "state": "Pahang",
    "area": "Temerloh",
    "reservePrice": 1260000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "831 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1304",
    "title": "2.5 Storey Detached House",
    "address": "No. 40, Lorong Pelindung 101, Off Jalan Beserah, 25300 Kuantan, Pahang",
    "postcode": "25300",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 797161.5,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "243 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1305",
    "title": "2 Storey Semi Detached House",
    "address": "Jalan Bukit Indah 2/5A, Taman Bukit Indah 2, 28700 Bentong, Pahang",
    "postcode": "28700",
    "state": "Pahang",
    "area": "Bentong",
    "reservePrice": 650000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "745 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1306",
    "title": "2 Storey Semi Detached House",
    "address": "Lorong IM 10/15, Bukit Istana, Bandar Indera Mahkota, 25200 Kuantan, Pahang",
    "postcode": "25200",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 437400,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "437 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1307",
    "title": "Shop Office",
    "address": "No. A-51, Perumahan Rasau Perdana, 25150 Kuantan, Pahang",
    "postcode": "25150",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 490000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1308",
    "title": "1 Storey Terrace House",
    "address": "No. 21, Lorong Seri Mahkota 35, Taman Seri Mahkota, (Dahulu Dikenali Taman Putra), Jalan Gambang, 26070 Kuantan, Pahang",
    "postcode": "26070",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 144000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "990 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1309",
    "title": "2 Storey Terrace House",
    "address": "No. 26, Jalan Mawar Indah 8, Taman Mawar Indah, 28300 Triang, Pahang",
    "postcode": "28300",
    "state": "Pahang",
    "area": "Triang",
    "reservePrice": 298890,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "754 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1310",
    "title": "Semi Detached House",
    "address": "No. 16, Lorong Pelindung Jaya 9, Perumahan Pelindung Jaya, 26100 Kuantan, Pahang",
    "postcode": "26100",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 291600,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "960 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1311",
    "title": "3 Storey Shop Office",
    "address": "Jalan Bera Utama 3, Taman Bera Utama, 28300 Triang, Pahang",
    "postcode": "28300",
    "state": "Pahang",
    "area": "Triang",
    "reservePrice": 693000,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "730 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1312",
    "title": "2 Storey Terrace House",
    "address": "No. 515, Jalan Karak Indah 14, Taman Karak Indah, 28600 Karak, Pahang",
    "postcode": "28600",
    "state": "Pahang",
    "area": "Karak",
    "reservePrice": 360000,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "174 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1313",
    "title": "1 Storey Terrace House",
    "address": "No. 293, Jalan Lestari 5, Taman Amalina Lestari, 27600 Raub, Pahang",
    "postcode": "27600",
    "state": "Pahang",
    "area": "Raub",
    "reservePrice": 198000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "098 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1314",
    "title": "Vacant Detached Residential Land",
    "address": "Lot No. 732, Kampung Air Batang, Pulau Tioman, Rompin, Pahang",
    "postcode": "",
    "state": "Pahang",
    "area": "Rompin",
    "reservePrice": 170000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "948 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1315",
    "title": "1 Storey Detached House",
    "address": "No. 5, Lorong Sungai Isap Damai 4, Perumahan Sungai Isap Fasa III, 25150 Kuantan, Pahang",
    "postcode": "25150",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 260000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "498 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1316",
    "title": "1 Storey Terrace House",
    "address": "No. 36, Lorong Seri Damai Maju 19, Perumahan Seri Damai Maju, 25150 Kuantan, Pahang",
    "postcode": "25150",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 320000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "571 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1317",
    "title": "Terrace House",
    "address": "Lorong Kampung Padang 24, Perumahan Kampung Padang, 25200 Kuantan, Pahang",
    "postcode": "25200",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 170000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "925 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1318",
    "title": "Terrace House",
    "address": "Lorong Cendur Darat 1/2, Perumahan Cendur Darat 1, 26080 Kuantan, Pahang",
    "postcode": "26080",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 270000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "301 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1319",
    "title": "2 Storey Terrace House",
    "address": "Lorong Kurnia Jaya 3, Taman Dato Dr Md Taib, 25150 Kuantan, Pahang",
    "postcode": "25150",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 270000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "500 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1320",
    "title": "1 Storey Terrace House",
    "address": "No. 13, Lorong Permatang Badak Perdana 214, Perumahan, Permatang Badak Perdana, 25150 Kuantan, Pahang",
    "postcode": "25150",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 216000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "625 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1321",
    "title": "2 Storey Terrace House",
    "address": "No. 23, Lorong Seri Setali 13, Perumahan Seri Setali, 25300 Kuantan, Pahang",
    "postcode": "25300",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 477000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "386 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1322",
    "title": "1 Storey Terrace House",
    "address": "No. 39, Lorong Seri Damai Maju 19, Perumahan Seri Damai Maju, 25150 Kuantan, Pahang",
    "postcode": "25150",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 280000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "564 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1323",
    "title": "2 Storey Semi Detached House",
    "address": "No. 17, Jalan KS 7/2, Kota Sultan Ahmad Shah, 25200 Kuantan, Pahang",
    "postcode": "25200",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 720000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "197 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1324",
    "title": "Terrace House",
    "address": "Jalan KS 3/2, Kota Sultan Ahmad Shah, Kuantan, Pahang",
    "postcode": "",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 445000,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1325",
    "title": "Terrace House",
    "address": "No. 57, Jalan Air Putih 4, Taman Air Putih Indah, 25300 Kuantan, Pahang",
    "postcode": "25300",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 480000,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1326",
    "title": "Semi Detached House",
    "address": "Lorong SSB 1/18, Perumahan Makmur Sungai Soi Jaya, 26060 Kuantan, Pahang",
    "postcode": "26060",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 270000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1327",
    "title": "2 Storey Terrace House",
    "address": "No. B-1478, Lorong Galing 125, Jalan Air Putih, 25300 Kuantan, Pahang",
    "postcode": "25300",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 378000,
    "auctionDate": "30 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "280 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1328",
    "title": "1 Storey Semi Detached House",
    "address": "Lorong Seri Teruntum 99, Off Jalan Kampung Tengah, 25100 Kuantan, Pahang",
    "postcode": "25100",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 330000,
    "auctionDate": "30 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "890 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1329",
    "title": "1 Storey Terrace House",
    "address": "Lorong Sungai Karang Jaya 10, Perumahan Sungai Karang Jaya, 26100 Kuantan, Pahang",
    "postcode": "26100",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 310000,
    "auctionDate": "30 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1330",
    "title": "1 Storey Terrace House",
    "address": "Jalan Kampung Padang 5, Taman Kampung Padang, Jalan Sungai Lembing, 25200 Kuantan, Pahang",
    "postcode": "25200",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 140000,
    "auctionDate": "30 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "022 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1331",
    "title": "Terrace House",
    "address": "Lorong Inderapura 38, Taman Inderapura, Kuantan, Pahang",
    "postcode": "",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 160000,
    "auctionDate": "30 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1332",
    "title": "1 Storey Terrace House",
    "address": "No. 15, Lorong K.P 1/1, Perumahan Kempadang Perdana 1, 26060 Kuantan, Pahang",
    "postcode": "26060",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 280000,
    "auctionDate": "30 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "474 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1333",
    "title": "Semi Detached House",
    "address": "Lorong IM 12/8, Indera Mahkota 12, 25200 Kuantan, Pahang",
    "postcode": "25200",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 360000,
    "auctionDate": "30 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "612 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1334",
    "title": "Detached House",
    "address": "Lorong IM 5/16, Indera Mahkota, 25200 Kuantan, Pahang",
    "postcode": "25200",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 1485000,
    "auctionDate": "30 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "427 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1335",
    "title": "Terrace House",
    "address": "Lorong Seri Damai Makmur 3, Perumahan Seri Damai Makmur, 25150 Kuantan, Pahang",
    "postcode": "25150",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 207000,
    "auctionDate": "30 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "099 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1336",
    "title": "1 Storey Semi Detached House",
    "address": "No. 42, Lorong Alor Ara Dahlia 2, Taman Alor Ara Dahlia, Pekan, Pahang",
    "postcode": "",
    "state": "Pahang",
    "area": "Pekan",
    "reservePrice": 355000,
    "auctionDate": "1 Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "444 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1337",
    "title": "Apartment",
    "address": "Jalan Kuantan - Kemaman, Timur Bay, 26100 Kuantan, Pahang",
    "postcode": "26100",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 460000,
    "auctionDate": "28 Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "538 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1338",
    "title": "Terrace House",
    "address": "Lorong Pandan Damai 1/36, Perumahan Pandan Damai, 25150 Kuantan, Pahang",
    "postcode": "25150",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 270000,
    "auctionDate": "28 Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "113 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1339",
    "title": "Terrace House",
    "address": "Jalan Balok Baru 1, Taman Balok Pelangi, 26100 Kuantan, Pahang",
    "postcode": "26100",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 360000,
    "auctionDate": "28 Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "560 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1340",
    "title": "Semi Detached House",
    "address": "Lorong Melur 21, Taman Melur, Kampung Marhum, 26600 Pekan, Pahang",
    "postcode": "26600",
    "state": "Pahang",
    "area": "Pekan",
    "reservePrice": 150000,
    "auctionDate": "5 Nov 2026 (Thu)",
    "landArea": "—",
    "builtUp": "997 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1341",
    "title": "1 Storey Semi Detached House",
    "address": "No. 43, Lorong Gambang Jaya 2/6, Perumahan Makmur Gambang Jaya 2, 26300 Kuantan, Pahang",
    "postcode": "26300",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 240000,
    "auctionDate": "25 Nov 2026 (Wed)",
    "landArea": "—",
    "builtUp": "798 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1342",
    "title": "1 Storey Terrace House",
    "address": "No. 3, Lorong Kempadang Damai 7, Taman Kempadang Damai, 26060 Kuantan, Pahang",
    "postcode": "26060",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 260000,
    "auctionDate": "25 Nov 2026 (Wed)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1343",
    "title": "Terrace House",
    "address": "Lorong Pandan Aman 1/21, Perumahan Pandan Aman, 25150 Kuantan, Pahang",
    "postcode": "25150",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 270000,
    "auctionDate": "25 Nov 2026 (Wed)",
    "landArea": "—",
    "builtUp": "280 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1344",
    "title": "Semi Detached House",
    "address": "Jalan IM 10/7, Bukit Istana, Kuantan, Pahang",
    "postcode": "",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 700000,
    "auctionDate": "25 Nov 2026 (Wed)",
    "landArea": "—",
    "builtUp": "017 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1345",
    "title": "Terrace House",
    "address": "Lorong Pelindung 100, Jalan Beserah, Taman Pelindung, 25300 Kuantan, Pahang",
    "postcode": "25300",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 261000,
    "auctionDate": "25 Nov 2026 (Wed)",
    "landArea": "—",
    "builtUp": "353 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1346",
    "title": "Terrace House",
    "address": "Lorong Permatang Badak Perdana 112, Perumahan Permatang Badak Perdana, 25150 Kuantan, Pahang",
    "postcode": "25150",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 360000,
    "auctionDate": "25 Nov 2026 (Wed)",
    "landArea": "—",
    "builtUp": "927 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1347",
    "title": "1 Storey Detached House",
    "address": "Lorong Berjaya Permai 8, Sungai Soi, 25150 Kuantan, Pahang",
    "postcode": "25150",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 550000,
    "auctionDate": "27 Jan 2027 (Wed)",
    "landArea": "—",
    "builtUp": "050 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1348",
    "title": "1 Storey Terrace House",
    "address": "No. 10, Lorong Pelindung 98, Taman Seri Pelindung 1, Jalan Beserah, 25300 Kuantan, Pahang",
    "postcode": "25300",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 180000,
    "auctionDate": "27 Jan 2027 (Wed)",
    "landArea": "—",
    "builtUp": "001 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1349",
    "title": "1 Storey Semi Detached House",
    "address": "No. 26, Lorong IS 12, Perkampungan Indera Sempurna, Jalan Kuantan-Pekan, 25150 Kuantan, Pahang",
    "postcode": "25150",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 402000,
    "auctionDate": "27 Jan 2027 (Wed)",
    "landArea": "—",
    "builtUp": "534 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1350",
    "title": "1 Storey Terrace House",
    "address": "Lorong Seri Setali 17, Taman Setali, 25300 Kuantan, Pahang",
    "postcode": "25300",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 300000,
    "auctionDate": "27 Jan 2027 (Wed)",
    "landArea": "—",
    "builtUp": "959 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1351",
    "title": "Service Apartment",
    "address": "Unit No. C-8-11, Tingkat 8, Pangsapuri Tun Perak @ Sungai Melaka, Jalan Tun Perak, 75300, Melaka",
    "postcode": "75300",
    "state": "Perak",
    "area": "Melaka",
    "reservePrice": 343400,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "087 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1352",
    "title": "Studio Service Apartment",
    "address": "Unit No. T1-12-12 (Room No. 12.009), The Shore, No. 193, Pinggiran @ Sungai Melaka, Jalan Persisiran Bunga Raya, 75100, Melaka",
    "postcode": "75100",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 197000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "436 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1353",
    "title": "2 Storey Terrace House",
    "address": "DT 1996, Jalan Angkasa Nuri 23, Taman Angkasa Nuri, 76100 Durian Tunggal, Melaka",
    "postcode": "76100",
    "state": "Melaka",
    "area": "Durian Tunggal",
    "reservePrice": 291600,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "000 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1354",
    "title": "2 Storey Terrace House",
    "address": "JD 847, Jalan BSJ P1/4, Bandar Scientex Jasin Presint 1 (Fasa 1A2), 77300 Merlimau, Melaka",
    "postcode": "77300",
    "state": "Melaka",
    "area": "Merlimau",
    "reservePrice": 310000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "380 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1355",
    "title": "1 Storey Terrace House",
    "address": "RM 1356, Jalan Rembia Perkasa 6, Taman Rembia Perkasa, 78000 Alor Gajah, Melaka",
    "postcode": "78000",
    "state": "Melaka",
    "area": "Alor Gajah",
    "reservePrice": 490000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "555 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1356",
    "title": "1 Storey Semi Detached House",
    "address": "No. 54, Jalan TP 17A, Taman Terendak Permai, 76300 Sungai Udang, Melaka",
    "postcode": "76300",
    "state": "Melaka",
    "area": "Sungai Udang",
    "reservePrice": 375000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "067 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1357",
    "title": "2 Storey Terrace House",
    "address": "No. 7, Jalan SB 2, Taman Seri Bertam, 76450 Tanjong Minyak, Melaka",
    "postcode": "76450",
    "state": "Melaka",
    "area": "Tanjong Minyak",
    "reservePrice": 332100,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "668 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1358",
    "title": "Apartment",
    "address": "Unit No. 3-6, Block Mawar 3, Jalan Murni 2, Rumah Pangsa Taman Malim Jaya, 75250, Melaka",
    "postcode": "75250",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 100000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "054 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1359",
    "title": "1 Storey Terrace House",
    "address": "No. SI 339, Jalan Seruling Jaya 13, Taman Seruling Jaya, 78300 Masjid Tanah, Melaka",
    "postcode": "78300",
    "state": "Melaka",
    "area": "Masjid Tanah",
    "reservePrice": 153900,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "300 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1360",
    "title": "2 Storey Terrace Shop House",
    "address": "No. 29 & 29-1, Jalan KF 2, Kota Fesyen MITC, 75450 Hang Tuah Jaya, Melaka",
    "postcode": "75450",
    "state": "Melaka",
    "area": "Hang Tuah Jaya",
    "reservePrice": 405000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "540 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1361",
    "title": "2 Storey Terrace House",
    "address": "No. MP 1359, Jalan Melaka Perdana 12, Taman Melaka Perdana, 78000 Alor Gajah, Melaka",
    "postcode": "78000",
    "state": "Melaka",
    "area": "Alor Gajah",
    "reservePrice": 200000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "028 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1362",
    "title": "2 Storey Terrace House",
    "address": "No. 27, Jalan Sejahtera 9, Taman Bukit Tambun Perdana 2, 76100 Durian Tunggal, Melaka",
    "postcode": "76100",
    "state": "Melaka",
    "area": "Durian Tunggal",
    "reservePrice": 244800,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "432 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1363",
    "title": "Terrace House",
    "address": "SI 278, Jalan Seruling Jaya Utama, Taman Seruling Jaya, 78300 Masjid Tanah, Melaka",
    "postcode": "78300",
    "state": "Melaka",
    "area": "Masjid Tanah",
    "reservePrice": 153900,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "300 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1364",
    "title": "Condominium",
    "address": "Unit No. 4-8, 4th Floor, Kondominium Pasir Mutiara, Jalan Ujong Pasir, 75050, Melaka",
    "postcode": "75050",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 270000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "141 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1365",
    "title": "Cluster House",
    "address": "No. 55-1, Jalan Puncak Kasa Heights 9, Taman Puncak Kasa Heights, 78000 Alor Gajah, Melaka",
    "postcode": "78000",
    "state": "Melaka",
    "area": "Alor Gajah",
    "reservePrice": 210000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "790 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1366",
    "title": "Apartment",
    "address": "Unit No. D-15-02, 15th Floor, Residensi Seri Serindit, Jalan Taman Bandaraya, 75400, Melaka",
    "postcode": "75400",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 220000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "883 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1367",
    "title": "Service Apartment",
    "address": "Unit No. C-10-05, 10th Floor, Residensi Seri Serindit, Jalan Taman Bandaraya, 75400, Melaka",
    "postcode": "75400",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 260000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "883 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1368",
    "title": "Town House",
    "address": "Unit No. 48-1, Jalan Puncak Kasa Height 5, Taman Puncak Kasa Height, 78000 Alor Gajah, Melaka",
    "postcode": "78000",
    "state": "Melaka",
    "area": "Alor Gajah",
    "reservePrice": 180000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "389 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1369",
    "title": "Service Apartment",
    "address": "Unit No. C-07-08, Pangsapuri Gadong Harmoni @ Ambience Residence, Jalan Pulau Gadong, 75200, Melaka",
    "postcode": "75200",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 300000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "088 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1370",
    "title": "Apartment",
    "address": "Unit No. C-04-08, 4th Floor, Block C, Residensi Seri Serindit, Jalan Taman Bandar, 75400, Melaka",
    "postcode": "75400",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 270000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "000 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1371",
    "title": "Apartment",
    "address": "Unit No. D-08-04, Residensi Seri Serindit, Jalan Taman Bandaraya, 75400, Melaka",
    "postcode": "75400",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 250000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "000 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1372",
    "title": "Apartment",
    "address": "Unit No D-19-15, Residensi Seri Serindit, Jalan Taman Bandaraya, 75400, Melaka",
    "postcode": "75400",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 250000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "000 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1373",
    "title": "Service Apartment",
    "address": "Unit No. B-23-05, Imperio Residence, Hatten @ Melaka Raya, Jalan Syed Abdul Aziz, 75000, Melaka",
    "postcode": "75000",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 220000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "450 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1374",
    "title": "1 Storey Terrace House",
    "address": "Taman Cenderawasih, 77000 Jasin, Melaka",
    "postcode": "77000",
    "state": "Melaka",
    "area": "Jasin",
    "reservePrice": 130000,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "800 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1375",
    "title": "1 Storey Terrace House",
    "address": "RM 798, Jalan Rembia Setia Utama, Taman Rembia Setia, Rembia, 78000 Alor Gajah, Melaka",
    "postcode": "78000",
    "state": "Melaka",
    "area": "Alor Gajah",
    "reservePrice": 135000,
    "auctionDate": "17 Jul 2026 (Fri)",
    "landArea": "—",
    "builtUp": "720 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1376",
    "title": "Service Apartment",
    "address": "Unit No. 23-15, Level 23, Pangsapuri Ambercove Impression City @ Kota Syahbandar, Jalan KSB-Impression 3, 75200, Melaka",
    "postcode": "75200",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 340000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "732 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1377",
    "title": "Retail Shop Office Unit",
    "address": "Unit No. G-93 & 1-93, Jalan Baiduri 1, Riviera @ Pulau Melaka, 75000, Melaka",
    "postcode": "75000",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 283000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "151 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1378",
    "title": "Service Suite",
    "address": "Unit No. SR-15-6, The Straits Hotel & Suites, Jalan Melaka Raya 2, Taman Melaka Raya, 75000, Melaka",
    "postcode": "75000",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 126000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "351 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1379",
    "title": "Retail Lot",
    "address": "Unit No. L6-017, 6th Floor, Elements Mall @ Hatten City, Jalan Melaka Raya 23, Taman Melaka Raya, 75000, Melaka",
    "postcode": "75000",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 76000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "235 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1380",
    "title": "Service Apartment",
    "address": "Unit No. B-20-08, 20th Floor, Block B, Silverscape @ Hatten City, Taman Melaka Raya, 75000, Melaka",
    "postcode": "75000",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 138000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "515 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1381",
    "title": "Commercial Unit",
    "address": "Unit No. L6-014, 6th Floor, Elements Mall @ Hatten City, Jalan Melaka Raya 23, Taman Melaka Raya, 75000, Melaka",
    "postcode": "75000",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 77000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "213 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1382",
    "title": "1 Storey Terrace House",
    "address": "No. 10, Jalan M41, Taman Merdeka, 75350 Hang Tuah Jaya, Melaka",
    "postcode": "75350",
    "state": "Melaka",
    "area": "Hang Tuah Jaya",
    "reservePrice": 297000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "421 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1383",
    "title": "Condominium",
    "address": "Unit No. C-26-03A, 26th Floor, Block C, Admiral Residences @ Kota Laksamana, 75200, Melaka",
    "postcode": "75200",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 351000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "069 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1384",
    "title": "2 Storey Terrace House",
    "address": "No. 22, Jalan Jasa Merdeka 7, Taman Dato Tamby Chik Karim, 75350 Hang Tuah Jaya, Melaka",
    "postcode": "75350",
    "state": "Melaka",
    "area": "Hang Tuah Jaya",
    "reservePrice": 250000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "408 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1385",
    "title": "1 Storey Terrace House",
    "address": "JA 2643, Rumah Awam Pondok Batang, 77100 Asahan, Melaka",
    "postcode": "77100",
    "state": "Melaka",
    "area": "Asahan",
    "reservePrice": 90000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1386",
    "title": "2 Storey Terrace House",
    "address": "No. 9, Jalan Bayan 3A, Taman Bukit Katil, 75450, Melaka",
    "postcode": "75450",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 230000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "344 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1387",
    "title": "Service Apartment",
    "address": "Unit No. T1-12-15 (Hotel Room T1-12-03), The Shore, Pinggiran @ Sungai Melaka, 75100, Melaka",
    "postcode": "75100",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 255000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "463 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1388",
    "title": "2 Storey Terrace House",
    "address": "No. 79, Jalan Merak Mas 1, Taman Merak Mas, Bukit Baru, 75450 Hang Tuah Jaya, Melaka",
    "postcode": "75450",
    "state": "Melaka",
    "area": "Hang Tuah Jaya",
    "reservePrice": 400000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "560 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1389",
    "title": "Service Apartment",
    "address": "Unit No. T1-36-03, Pinggiran @ Sungai Melaka, 75100, Melaka",
    "postcode": "75100",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 220000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "463 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1390",
    "title": "2 Storey Detached House",
    "address": "No. 9, Jalan Anjung Akasia 2, Taman Anjung Gapam, Ayer Panas, 77200 Hang Tuah Jaya, Melaka",
    "postcode": "77200",
    "state": "Melaka",
    "area": "Hang Tuah Jaya",
    "reservePrice": 650000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "004 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1391",
    "title": "1 Storey Terrace House",
    "address": "No. 98, Jalan Tilapia 8, Taman Tiang Dua Bestari, 75460, Melaka",
    "postcode": "75460",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 230000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "199 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1392",
    "title": "1 Storey Terrace House",
    "address": "No. JC 418, Taman Rim Baru, 77000 Jasin, Melaka",
    "postcode": "77000",
    "state": "Melaka",
    "area": "Jasin",
    "reservePrice": 200000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "141 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1393",
    "title": "1 Storey Terrace House",
    "address": "No. 1, Jalan AMJ 2, Taman Ayer Molek, Bukit Lintang, 75460, Melaka",
    "postcode": "75460",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 310000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "723 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1394",
    "title": "Industrial Land",
    "address": "SP 1627-A, Jalan Perindustrian Rembia 1, Kawasan Perindustrian Rembia (Taman Industri Zarina), 78000 Alor Gajah, Melaka",
    "postcode": "78000",
    "state": "Melaka",
    "area": "Alor Gajah",
    "reservePrice": 17600000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1395",
    "title": "1 Storey Commercial lot with mezzanine floor, 5 storey Hotel",
    "address": "Lot 19396-1, Jalan TTC 26, Taman Teknologi Cheng, 75250, Melaka",
    "postcode": "19396",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 72000000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "771 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1396",
    "title": "1 Storey Factory",
    "address": "No. 19400-1, Jalan TTC 12, Taman Teknologi Cheng, 75250 Cheng, Melaka",
    "postcode": "19400",
    "state": "Melaka",
    "area": "Cheng",
    "reservePrice": 28500000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "365 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1397",
    "title": "Agricultural Land",
    "address": "Lot 1440, Kampung Parit Putat, 77400 Jasin, Melaka",
    "postcode": "77400",
    "state": "Melaka",
    "area": "Jasin",
    "reservePrice": 216000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1398",
    "title": "Terrace House",
    "address": "No. 19, Lorong 1, Jalan SB 13, Taman Seri Bertam, 76450, Melaka",
    "postcode": "76450",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 178200,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "300 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1399",
    "title": "Service Suite",
    "address": "Unit No. C-32-10, Level No. 32, Block C, Hatten Suites @ Hatten City, Taman Melaka Raya, 75000, Melaka",
    "postcode": "75000",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 153000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "267 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1400",
    "title": "1 Storey Terrace House",
    "address": "No. JB 2409, Taman Mesra Rim II, 77000 Jasin, Melaka",
    "postcode": "77000",
    "state": "Melaka",
    "area": "Jasin",
    "reservePrice": 153000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "259 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1401",
    "title": "Retail Lot",
    "address": "Unit No. L4-084, Elements Mall, Hatten City, 75000, Melaka",
    "postcode": "75000",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 21182,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "256 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1402",
    "title": "[ 4 min to Dataran Pahlawan Melaka Megamall] Retail Lot [Near to Jonker Street]",
    "address": "Unit No. L4-081, Elements Mall, Hatten City, 75000, Melaka",
    "postcode": "75000",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 19770,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "239 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1403",
    "title": "[ 6 min to Dataran Pahlawan Melaka Megamall & Jonker Walk] Commercial Retail-Lot [Near AEON Mall Bandaraya Melaka, A Famosa, Mahkota Medical Centre & Lotus's Peringgit Melaka ]",
    "address": "Unit No. F5-032, Level 5, Imperio Mall @ Hatten City, Jalan Syed Abdul Aziz, Taman Melaka Raya, 75000, Melaka",
    "postcode": "75000",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 165625,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "445 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1404",
    "title": "[Close to Mahkota Parade & Dataran Pahlawan] Service Apartment [Short drive to A Famosa & Melaka Waterfront]",
    "address": "Unit No. #B-29-06, Jalan KSB 11A, Kondominium Kota Syahbandar, 75200, Melaka",
    "postcode": "75200",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 157464,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "570 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1405",
    "title": "Retail Lot",
    "address": "Unit No. G-011, Ground Floor, Hatten City, 75000, Melaka",
    "postcode": "75000",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 637729,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "087 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1406",
    "title": "Retail Lot",
    "address": "Unit No. G-004, Ground Floor, Hatten City, 75000, Melaka",
    "postcode": "75000",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 919393,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "572 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1407",
    "title": "Retail Lot",
    "address": "Unit No. G-E01, Ground Floor, Hatten City, 75000, Melaka",
    "postcode": "75000",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 6010598,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "831 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1408",
    "title": "Retail Lot",
    "address": "Unit No. G-009A, Ground Floor, Hatten City, 75000, Melaka",
    "postcode": "75000",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 1030996,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "765 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1409",
    "title": "[7 min to Mahkota Parade] Service Apartment [Proximity to AEON MALL Bandaraya Melaka]",
    "address": "Unit No. B-29-03, 29th Floor, Block B, Kondominium Kota Syahbandar, Jalan KSB 11A, 75200, Melaka",
    "postcode": "75200",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 146966,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "563 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1410",
    "title": "Service Apartment",
    "address": "Unit No. B-10-11, Tahiti Villa, Bayou Lagoon Park Resort, Jalan Wakaf Utama, Bukit Katil, 75450 Hang Tuah Jaya, Melaka",
    "postcode": "75450",
    "state": "Melaka",
    "area": "Hang Tuah Jaya",
    "reservePrice": 139320,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "721 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1411",
    "title": "Town House",
    "address": "Unit No. 42A, Jalan LP 14, Taman Limbongan Permai, 75200, Melaka",
    "postcode": "75200",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 140000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1412",
    "title": "Apartment",
    "address": "Unit No. A-4-12, Pangsapuri Sri Siantan, Bukit Baru, 75150, Melaka",
    "postcode": "75150",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 76764,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "775 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1413",
    "title": "[Close to Mahkota Parade & Melaka Raya] Service Apartment [7 min to Dataran Pahlawan Melaka Megamall & Jonker Street Night Market]",
    "address": "Unit No. B-34-08, 34th Floor, Tower B, Pangsapuri Atlantis Kota Syahbandar, Jalan KSB 11A, Kota Syahbandar, 75200, Melaka",
    "postcode": "75200",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 351000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "378 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1414",
    "title": "[Prime location in the historical heart of Melaka] Service Apartment [6 min to Melaka Hospital]",
    "address": "Unit No. D-11-12, The Apple, Jalan Bachee, 75100, Melaka",
    "postcode": "75100",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 164000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "463 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1415",
    "title": "[8 min to AEON Mall Bandaraya Melaka] Service Apartment [10 min to Melaka Hospital]",
    "address": "Unit No. 11-09-1A (A-11-09), Residensi Kenanga Impian @ The Quartz, Jalan Kenanga 3/8, 75200, Melaka",
    "postcode": "75200",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 141000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "484 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1416",
    "title": "Service Apartment",
    "address": "Unit No. A-24-10, 24th Floor, Tower A, Residensi Mutiara Bali, Kota Syahbandar, 75200, Melaka",
    "postcode": "75200",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 215000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "676 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1417",
    "title": "Service Apartment",
    "address": "Unit No. 35-13, 35th Floor, Pangsapuri Amber Cove, Jalan KSB-Impression 3, Impression City @ Kota Syahbandar, 75200, Melaka",
    "postcode": "75200",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 272000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "710 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1418",
    "title": "1 Storey Terrace House",
    "address": "Jalan Lesung Batu Impian 5, Taman Lesung Batu Impian, 78000 Alor Gajah, Melaka",
    "postcode": "78000",
    "state": "Melaka",
    "area": "Alor Gajah",
    "reservePrice": 260000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1419",
    "title": "2 Storey Terrace House",
    "address": "No. JD 911, Jalan BSJ P1/4, Bandar Scientex Jasin Presint 1 (Fasa 1A2), 77300 Merlimau, Melaka",
    "postcode": "77300",
    "state": "Melaka",
    "area": "Merlimau",
    "reservePrice": 265000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "173 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1420",
    "title": "1 Storey Terrace House",
    "address": "ST 28, Jalan Bidara Emas 3, Taman Bidara Emas, 78300 Masjid Tanah, Melaka",
    "postcode": "78300",
    "state": "Melaka",
    "area": "Masjid Tanah",
    "reservePrice": 288000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "260 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1421",
    "title": "2 Storey Terrace House",
    "address": "No. 92, Jalan KJ 57, Taman Krubong Jaya, 75250 Krubong, Melaka",
    "postcode": "75250",
    "state": "Melaka",
    "area": "Krubong",
    "reservePrice": 195000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "231 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1422",
    "title": "1 Storey Semi Detached House",
    "address": "No. 41, Jalan BKD 6, Taman Bukit Katil Damai 2, Bukit Katil, 75450 Hang Tuah Jaya, Melaka",
    "postcode": "75450",
    "state": "Melaka",
    "area": "Hang Tuah Jaya",
    "reservePrice": 307800,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "626 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1423",
    "title": "1 Storey Terrace House",
    "address": "No. 25, Jalan Impiana Delima 3, Taman Impiana Kesang, Kesang Pajak, 77000 Jasin, Melaka",
    "postcode": "77000",
    "state": "Melaka",
    "area": "Jasin",
    "reservePrice": 243000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "680 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1424",
    "title": "1.5 Storey Terrace House",
    "address": "No. 104A, Jalan Seri Duta 4, Taman Muzaffar Shah, 75450 Hang Tuah Jaya, Melaka",
    "postcode": "75450",
    "state": "Melaka",
    "area": "Hang Tuah Jaya",
    "reservePrice": 351000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1425",
    "title": "2 Storey Terrace House",
    "address": "No. 10, Jalan Angkasa Nuri 20, Taman Angkasa Nuri, Durian Tunggal, 76100 Hang Tuah Jaya, Melaka",
    "postcode": "76100",
    "state": "Melaka",
    "area": "Hang Tuah Jaya",
    "reservePrice": 333000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "540 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1426",
    "title": "1 Storey Terrace House",
    "address": "No. 138, Jalan Tilapia 8, Taman Tiang Dua Bestari, 75460, Melaka",
    "postcode": "75460",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 189000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "898 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1427",
    "title": "2 Storey Detached House",
    "address": "No. 1, Jalan C.P.1/21B, Taman Desa Cheng Perdana 1, 75250 Cheng, Melaka",
    "postcode": "75250",
    "state": "Melaka",
    "area": "Cheng",
    "reservePrice": 900000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "632 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1428",
    "title": "1 Storey Terrace House",
    "address": "No. 15, Jalan KJ 2/2, Taman Kesang Jaya, Ayer Panas, 77000 Hang Tuah Jaya, Melaka",
    "postcode": "77000",
    "state": "Melaka",
    "area": "Hang Tuah Jaya",
    "reservePrice": 250000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "550 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1429",
    "title": "Service Suite",
    "address": "No. 1342 (S1332), Hotel Hatten (also known as Hatten Square), Jalan Merdeka, 75000, Melaka",
    "postcode": "75000",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 183000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "355 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1430",
    "title": "1 Storey Terrace House",
    "address": "SI 275, Jalan Seruling Utama, Taman Seruling Jaya, 78300 Masjid Tanah, Melaka",
    "postcode": "78300",
    "state": "Melaka",
    "area": "Masjid Tanah",
    "reservePrice": 220000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1431",
    "title": "2 Storey Terrace House",
    "address": "No. J 9645, Jalan Megah 1, Taman Megah, 77200 Bemban, Melaka",
    "postcode": "77200",
    "state": "Melaka",
    "area": "Bemban",
    "reservePrice": 360000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "996 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1432",
    "title": "1 Storey Terrace House",
    "address": "No. 13, Lorong 1, Jalan Seri Mangga 1/3, Taman Seri Mangga, 75250, Melaka",
    "postcode": "75250",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 400000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "752 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1433",
    "title": "2 Storey Terrace House",
    "address": "No. DT 1499, Jalan Buit Tambun Perdana 22, Taman Bukit Tambun Perdana, 76100 Durian Tunggal, Melaka",
    "postcode": "76100",
    "state": "Melaka",
    "area": "Durian Tunggal",
    "reservePrice": 200000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "279 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1434",
    "title": "2 Storey Terrace House",
    "address": "No. 75, Jalan Angkasa Nuri 39, Taman Angkasa Nuri, Durian Tunggal, 76100 Hang Tuah Jaya, Melaka",
    "postcode": "76100",
    "state": "Melaka",
    "area": "Hang Tuah Jaya",
    "reservePrice": 400000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "729 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1435",
    "title": "1 Storey Terrace House",
    "address": "JB 6377, Jalan Seri Indah 2, Taman Seri Indah, 77000 Jasin, Melaka",
    "postcode": "77000",
    "state": "Melaka",
    "area": "Jasin",
    "reservePrice": 250000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "429 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1436",
    "title": "1 Storey Terrace House",
    "address": "No. 5, Jalan Keris Emas 5, Taman Keris Emas, 76300 Sungai Udang, Melaka",
    "postcode": "76300",
    "state": "Melaka",
    "area": "Sungai Udang",
    "reservePrice": 270000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "153 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1437",
    "title": "2 Storey Terrace House",
    "address": "DT 984, Jalan Bukit Tambun Perdana 27, Taman Bukit Tambun Perdana, 76100 Durian Tunggal, Melaka",
    "postcode": "76100",
    "state": "Melaka",
    "area": "Durian Tunggal",
    "reservePrice": 330000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "324 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1438",
    "title": "2 Storey Terrace House",
    "address": "No. 31, Jalan KJ 59, Taman Krubong Jaya, 75250 Krubong, Melaka",
    "postcode": "75250",
    "state": "Melaka",
    "area": "Krubong",
    "reservePrice": 180000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "883 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1439",
    "title": "1 Storey Semi Detached House",
    "address": "No. 2C, Jalan Cenderawasih 3, Taman Cenderawasih, 75250 Bukit Rambai, Melaka",
    "postcode": "75250",
    "state": "Melaka",
    "area": "Bukit Rambai",
    "reservePrice": 283500,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "000 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1440",
    "title": "Flat",
    "address": "Unit No. G-4-4, Block G (Melor), Jalan TU 61, Rumah Pangsa Taman Tasik Utama, Taman Tasik Utama, Ayer Keroh, 75450 Hang Tuah Jaya, Melaka",
    "postcode": "75450",
    "state": "Melaka",
    "area": "Hang Tuah Jaya",
    "reservePrice": 72171,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "710 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1441",
    "title": "Apartment",
    "address": "Unit No. A-3-8 (Developer Parcel No. A4-4-B), Block A, Pangsapuri Bunga Raya, Bukit Beruang, 75450, Melaka",
    "postcode": "75450",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 135000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "883 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1442",
    "title": "1 Storey Terrace House",
    "address": "JA 6822, Jalan BB 1D, Taman Bemban Baru, Ayer Panas, 77200 Hang Tuah Jaya, Melaka",
    "postcode": "77200",
    "state": "Melaka",
    "area": "Hang Tuah Jaya",
    "reservePrice": 250000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1443",
    "title": "1 Storey Semi Detached House",
    "address": "No. 2, Jalan OR 9, Taman Ozana Residen, Bukit Katil, 75450 Hang Tuah Jaya, Melaka",
    "postcode": "75450",
    "state": "Melaka",
    "area": "Hang Tuah Jaya",
    "reservePrice": 623700,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "542 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1444",
    "title": "2 Storey Terrace House",
    "address": "No. 104, Jalan Abadi 5, Taman Malim Jaya, 75250, Melaka",
    "postcode": "75250",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 121500,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "635 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1445",
    "title": "Apartment",
    "address": "Unit No. A-04-02, Tingkat 4, Block A, Pangsapuri Bukit Beruang Permai, Seksyen 1, Bukit Beruang, 75450 Hang Tuah Jaya, Melaka",
    "postcode": "75450",
    "state": "Melaka",
    "area": "Hang Tuah Jaya",
    "reservePrice": 149850,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "882 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1446",
    "title": "1 Storey Terrace House",
    "address": "No. JB 7208, Jalan Kemboja JH, Taman Jasin Height, 77000 Jasin, Melaka",
    "postcode": "77000",
    "state": "Melaka",
    "area": "Jasin",
    "reservePrice": 220000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1447",
    "title": "1 Storey Terrace House",
    "address": "No. 4, Jalan SD 2/25, Taman Seri Duyong 2, 75460, Melaka",
    "postcode": "75460",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 450000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "048 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1448",
    "title": "1 Storey Terrace House",
    "address": "No. 10, Jalan TPH 11, Taman Tambak Paya Harmoni, 75460, Melaka",
    "postcode": "75460",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 225000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1449",
    "title": "1 Storey Terrace House",
    "address": "No. SI 1976, Jalan Seri Gamelan 2, Taman Seri Gamelan, 78200 Kuala Sungai Baru, Melaka",
    "postcode": "78200",
    "state": "Melaka",
    "area": "Kuala Sungai Baru",
    "reservePrice": 280000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "690 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1450",
    "title": "1 Storey Shop House",
    "address": "No. 33, Jalan Ujong Pasir, 75050, Melaka",
    "postcode": "75050",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 886000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "860 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1451",
    "title": "Flat",
    "address": "Unit No. H3-9, 3rd Floor, Block H, Rumah Pangsa Taman Cheng Ria, 75250 Cheng, Melaka",
    "postcode": "75250",
    "state": "Melaka",
    "area": "Cheng",
    "reservePrice": 81630,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "861 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1452",
    "title": "2 Storey Terrace House",
    "address": "No. JC 8815, Jalan Idaman 1, Taman Kelubi Idaman, 77000 Jasin, Melaka",
    "postcode": "77000",
    "state": "Melaka",
    "area": "Jasin",
    "reservePrice": 216000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "776 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1453",
    "title": "2 Storey Terrace House",
    "address": "No. 36, Jalan MP 7, Taman Merdeka Permai, Batu Berendam 75350, Melaka",
    "postcode": "75350",
    "state": "Melaka",
    "area": "Batu Berendam",
    "reservePrice": 459270,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "480 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1454",
    "title": "1 Storey Terrace House",
    "address": "PD 931, Jalan Sebang Gemilang 10, Taman Sebang Gemilang, 78000 Alor Gajah, Melaka",
    "postcode": "78000",
    "state": "Melaka",
    "area": "Alor Gajah",
    "reservePrice": 99000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "728 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1455",
    "title": "1 Storey Terrace House",
    "address": "No. 5, Jalan BI 8, Taman Bertam Impian, Tanjong Minyak, 76450, Melaka",
    "postcode": "76450",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 260000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "300 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1456",
    "title": "2 Storey Terrace House",
    "address": "JC 8801, Jalan Idaman 1/D, Taman Kelubi Idaman, 77000 Jasin, Melaka",
    "postcode": "77000",
    "state": "Melaka",
    "area": "Jasin",
    "reservePrice": 300000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "080 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1457",
    "title": "1 Storey Terrace House",
    "address": "No. 3, Jalan Anjung Tulip 6, Taman Anjung Gapam, 77200 Ayer Panas, Melaka",
    "postcode": "77200",
    "state": "Melaka",
    "area": "Ayer Panas",
    "reservePrice": 200000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "899 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1458",
    "title": "Terrace House",
    "address": "Jalan Anjung Sungai Petai 39, Taman Anjung Sungai Petai, 78000 Alor Gajah, Melaka",
    "postcode": "78000",
    "state": "Melaka",
    "area": "Alor Gajah",
    "reservePrice": 310000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1459",
    "title": "Apartment",
    "address": "Unit No. D-G-9, Jalan PJ 19, Pangsapuri Pertam Jaya Idaman, 75050, Melaka",
    "postcode": "75050",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 200000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "001 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1460",
    "title": "Office Unit",
    "address": "Unit No. 1-19, Jalan PM 14, Plaza Mahkota, 75000, Melaka",
    "postcode": "75000",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 150000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "958 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1461",
    "title": "1 Storey Semi Detached House",
    "address": "PT 8 (Lot 11002), Jalan Seri Terendak 2, Taman Seri Terendak, 76300 Sungai Udang, Melaka",
    "postcode": "11002",
    "state": "Melaka",
    "area": "Sungai Udang",
    "reservePrice": 380000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "185 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1462",
    "title": "2 Storey Semi Detached House",
    "address": "No. 13, Jalan OZ 20, Taman Ozana Impian Bukit Katil, 75450 Hang Tuah Jaya, Melaka",
    "postcode": "75450",
    "state": "Melaka",
    "area": "Hang Tuah Jaya",
    "reservePrice": 472400,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "964 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1463",
    "title": "Apartment",
    "address": "Unit No. B4-05, Blok B, Pangsapuri Puteri Kesidang, Jalan Pandan, 75200, Melaka",
    "postcode": "75200",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 126000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "163 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1464",
    "title": "1 Storey Terrace House",
    "address": "No. 2, Jalan Rambai Jaya 23, Taman Rambai Jaya, 75260, Melaka",
    "postcode": "75260",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 226000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "035 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1465",
    "title": "2 Storey Semi Detached House",
    "address": "Jalan Desa Bertam 20, Taman Desa Bertam, 76450, Melaka",
    "postcode": "76450",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 570000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1466",
    "title": "1 Storey Terrace House",
    "address": "No. 30, Jalan Impiana Delima 6, Taman Impiana Kesang, Ayer Panas, 77000 Hang Tuah Jaya, Melaka",
    "postcode": "77000",
    "state": "Melaka",
    "area": "Hang Tuah Jaya",
    "reservePrice": 110000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "752 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1467",
    "title": "1 Storey Terrace House",
    "address": "No. 13, Jalan BI 4, Taman Bertam Impian, Tanjong Minyak, 76450, Melaka",
    "postcode": "76450",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 270000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "899 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1468",
    "title": "1 Storey Terrace House",
    "address": "No. JD 1345, Jalan Mayang Lestari 17, Taman Mayang Lestari, Fasa 3, 77000 Jasin, Melaka",
    "postcode": "77000",
    "state": "Melaka",
    "area": "Jasin",
    "reservePrice": 167670,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1469",
    "title": "Semi Detached House",
    "address": "Jalan RU 13, Taman Rambai Utama, 75300 Bukit Rambai, Melaka",
    "postcode": "75300",
    "state": "Melaka",
    "area": "Bukit Rambai",
    "reservePrice": 350000,
    "auctionDate": "11 Sep 2026 (Fri)",
    "landArea": "—",
    "builtUp": "657 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1470",
    "title": "2 Storey Semi Detached House",
    "address": "No. 9, Jalan PJ 9, Taman Pengkalan Jaya, Ayer Molek, 75450, Melaka",
    "postcode": "75450",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 650000,
    "auctionDate": "11 Sep 2026 (Fri)",
    "landArea": "—",
    "builtUp": "314 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1471",
    "title": "1 Storey Terrace House",
    "address": "SP 644, Jalan Seri Pelangi 6, Taman Seri Pelangi, Rembia, 78000 Alor Gajah, Melaka",
    "postcode": "78000",
    "state": "Melaka",
    "area": "Alor Gajah",
    "reservePrice": 230000,
    "auctionDate": "18 Sep 2026 (Fri)",
    "landArea": "—",
    "builtUp": "770 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1472",
    "title": "Terrace House",
    "address": "Jalan BS 8, Taman Bertam Setia, Tanjong Minyak, 76450, Melaka",
    "postcode": "76450",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 260000,
    "auctionDate": "2 Oct 2026 (Fri)",
    "landArea": "—",
    "builtUp": "126 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1473",
    "title": "2 Storey Terrace House",
    "address": "MT 2558, Jalan TBBMT 9, Taman Bandar Baru Masjid Tanah, 78300 Alor Gajah, Melaka",
    "postcode": "78300",
    "state": "Melaka",
    "area": "Alor Gajah",
    "reservePrice": 270000,
    "auctionDate": "23 Oct 2026 (Fri)",
    "landArea": "—",
    "builtUp": "520 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1474",
    "title": "2 Storey Terrace House",
    "address": "No. 6, Jalan BP 15, Taman Bertam Perdana, 75200, Melaka",
    "postcode": "75200",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 400000,
    "auctionDate": "23 Oct 2026 (Fri)",
    "landArea": "—",
    "builtUp": "582 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1475",
    "title": "Apartment",
    "address": "Unit No. 7-10, Pangsapuri Residence Merak Kayangan, 75450 Bukit Baru, Melaka",
    "postcode": "75450",
    "state": "Melaka",
    "area": "Bukit Baru",
    "reservePrice": 372000,
    "auctionDate": "30 Oct 2026 (Fri)",
    "landArea": "—",
    "builtUp": "904 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1476",
    "title": "1 Storey Semi Detached House",
    "address": "No. 4, Jalan BKD 55, Taman Bukit Katil Damai, Bukit Katil, 75450 Hang Tuah Jaya, Melaka",
    "postcode": "75450",
    "state": "Melaka",
    "area": "Hang Tuah Jaya",
    "reservePrice": 625000,
    "auctionDate": "30 Oct 2026 (Fri)",
    "landArea": "—",
    "builtUp": "271 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1477",
    "title": "Terrace House",
    "address": "Taman Panglima Pak 1, 77300 Merlimau, Melaka",
    "postcode": "77300",
    "state": "Melaka",
    "area": "Merlimau",
    "reservePrice": 170000,
    "auctionDate": "3 Dec 2026 (Thu)",
    "landArea": "—",
    "builtUp": "377 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1478",
    "title": "1 Storey Detached House",
    "address": "Lot 9536, Taman Sri Agor, Kampung Bukit Batu, 17500 Tanah Merah, Kelantan",
    "postcode": "17500",
    "state": "Tanah Merah",
    "area": "Tanah Merah",
    "reservePrice": 67758.73,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "010 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1479",
    "title": "3 Storey Shop Lot",
    "address": "PT 332, Kompleks Kedai Baru, Kawasan Bebas Cukai, 17200 Rantau Panjang, Kelantan",
    "postcode": "17200",
    "state": "Rantau Panjang",
    "area": "Rantau Panjang",
    "reservePrice": 306110.07,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1480",
    "title": "1 Storey Bungalow House",
    "address": "Lot 4515, Lorong 4 Manal Satu, 17500 Tanah Merah, Kelantan",
    "postcode": "17500",
    "state": "Tanah Merah",
    "area": "Tanah Merah",
    "reservePrice": 268672.95,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "368 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1481",
    "title": "3 Storey Shop Office",
    "address": "Lot 775 (PT 119), Jalan Tengku Petra Semerak, Section 9, 15000 Kota Bharu, Kelantan",
    "postcode": "15000",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 442867.5,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "616 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1482",
    "title": "2 Storey Terrace Shop Office",
    "address": "PT 1090, Taman Bendahara, Jalan Pengkalan Chepa, 15400 Kota Bharu, Kelantan",
    "postcode": "15400",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 400950,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1483",
    "title": "2 Storey Detached House",
    "address": "PT 463, Kampung Padang Kala, Jalan Pasir Puteh, 16400 Kota Bharu, Kelantan",
    "postcode": "16400",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 439587,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "145 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1484",
    "title": "1 Storey Terrace House",
    "address": "No. 29 (PT 15296), Residensi Prima Lubok Jong, Jalan Pasir Mas-Rantau Panjang, 17070 Pasir Mas, Kelantan",
    "postcode": "15296",
    "state": "Pasir Mas",
    "area": "Pasir Mas",
    "reservePrice": 135000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "072 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1485",
    "title": "1 Storey Detached House",
    "address": "No. 439, RPT Sungai Terah, 18300 Gua Musang, Kelantan",
    "postcode": "18300",
    "state": "Gua Musang",
    "area": "Gua Musang",
    "reservePrice": 230000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "174 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1486",
    "title": "1 Storey Shop",
    "address": "PT. 4183, Jalan Keranji 2, Bandar Utama Gua Musang, 18300 Gua Musang, Kelantan",
    "postcode": "18300",
    "state": "Gua Musang",
    "area": "Gua Musang",
    "reservePrice": 240000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "194 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1487",
    "title": "1 Storey Bungalow",
    "address": "PT 1995 (Lot 13963), Jalan Pengkalan Chepa, Kampung Baung, 16100 Kota Bharu, Kelantan",
    "postcode": "13963",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 400000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "596 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1488",
    "title": "Terrace House",
    "address": "Lot 10023 (PT 760), Taman Redha, Kampung Merbau Chondong, 16600 Pulai Chondong, Kelantan",
    "postcode": "10023",
    "state": "Pulai Chondong",
    "area": "Pulai Chondong",
    "reservePrice": 135000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "162 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1489",
    "title": "Terrace House",
    "address": "Lot 3461 (PT 649), Taman Jintan, Jalan Sungai Keladi, 17000 Pasir Mas, Kelantan",
    "postcode": "17000",
    "state": "Pasir Mas",
    "area": "Pasir Mas",
    "reservePrice": 63000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "044 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1490",
    "title": "Terrace House",
    "address": "Lot 11172 (PT 96), Kampung Tok Derpah, Tok Sangkot, 17070 Pasir Mas, Kelantan",
    "postcode": "11172",
    "state": "Pasir Mas",
    "area": "Pasir Mas",
    "reservePrice": 153000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "615 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1491",
    "title": "1 Storey Terrace House",
    "address": "PT 1316 (PT 5125), Taman CT Jaya, Kampung Tempoyak, Jelawat, 16070 Bachok, Kelantan",
    "postcode": "16070",
    "state": "Bachok",
    "area": "Bachok",
    "reservePrice": 153000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "755 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1492",
    "title": "2 Storey Terrace House",
    "address": "Lot 2442, Taman Selasih, 17500 Tanah Merah, Kelantan",
    "postcode": "17500",
    "state": "Tanah Merah",
    "area": "Tanah Merah",
    "reservePrice": 210600,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "981 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1493",
    "title": "1 Storey Semi Detached House",
    "address": "Lot 2759, Lorong Pasir Kota, Jalan Pintu Gang, Kampung Pintu Gang, 15100 Kota Bharu, Kelantan",
    "postcode": "15100",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 252434.5,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "542 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1494",
    "title": "2 Storey Detached House",
    "address": "No. 1689-A, Jalan Pengkalan Chepa, Padang Garong, 16100 Kota Bharu, Kelantan",
    "postcode": "16100",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 533205,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "822 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1495",
    "title": "1 Storey Detached House",
    "address": "Lot 238, Kampung Surau Baung Hilir, 16100 Kota Bharu, Kelantan",
    "postcode": "16100",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 422820,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "723 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1496",
    "title": "Terrace House",
    "address": "PT 8674, Taman Sri Sutera, 16310 Bachok, Kelantan",
    "postcode": "16310",
    "state": "Bachok",
    "area": "Bachok",
    "reservePrice": 148500,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "153 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1497",
    "title": "Terrace House",
    "address": "Lot 16607 (PT 5934), Taman Pondok Pengiring, Jalan Tok Bali, Kampung Kandis, 16300 Bachok, Kelantan",
    "postcode": "16607",
    "state": "Bachok",
    "area": "Bachok",
    "reservePrice": 125000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "990 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1498",
    "title": "1 Storey Terrace House",
    "address": "PT 430 (Lot 759), Kampung Pulau Che Noh, Badang, 15350 Kota Bharu, Kelantan",
    "postcode": "15350",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 148500,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "410 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1499",
    "title": "Terrace House",
    "address": "PT 8868, Taman Teguh Arif, Kampung Cawas, 17500 Tanah Merah, Kelantan",
    "postcode": "17500",
    "state": "Tanah Merah",
    "area": "Tanah Merah",
    "reservePrice": 135000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "300 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1500",
    "title": "Terrace House",
    "address": "PT 2225 (Lot 1886), Taman Bukit Idaman, 16450 Kota Bharu, Kelantan",
    "postcode": "16450",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 103500,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "098 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1501",
    "title": "Terrace House",
    "address": "PT 1499, Taman MJ Selaseh 2, Kampung Kubang Kual, Bukit Tandak, 17200 Rantau Panjang, Kelantan",
    "postcode": "17200",
    "state": "Rantau Panjang",
    "area": "Rantau Panjang",
    "reservePrice": 145000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "259 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1502",
    "title": "2 Storey Terrace House",
    "address": "PT 1949, Kota Seribong, 16010 Kota Bharu, Kelantan",
    "postcode": "16010",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 720000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "486 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1503",
    "title": "1.5 Storey Terrace House",
    "address": "No. PT 316, Taman Kota Ville Indah, Jalan Kota Ville Indah 5, 16250 Pasir Pekan, Kelantan",
    "postcode": "16250",
    "state": "Pasir Pekan",
    "area": "Pasir Pekan",
    "reservePrice": 290000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1504",
    "title": "1 Storey Terrace House",
    "address": "Lot 3176, Jalan Chetok - Sungai Keladi, Taman Jintan, 16070 Pasir Mas, Kelantan",
    "postcode": "16070",
    "state": "Pasir Mas",
    "area": "Pasir Mas",
    "reservePrice": 91125,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "184 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1505",
    "title": "Terrace House",
    "address": "PT. 415, Taman Kenanga Indah, Kampung Senak, 16300 Bachok, Kelantan",
    "postcode": "16300",
    "state": "Bachok",
    "area": "Bachok",
    "reservePrice": 135000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1506",
    "title": "3.5 Storey Shop Office",
    "address": "Lot No. 788 (PT 156), Seksyen 9, Jalan Che Su, 15000 Kota Bharu, Kelantan",
    "postcode": "15000",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 344321.28,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "238 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1507",
    "title": "1 Storey Terrace House",
    "address": "PT 177, Taman Wira, Kampung Kedap, Lubok Gong, 17200 Rantau Panjang, Kelantan",
    "postcode": "17200",
    "state": "Rantau Panjang",
    "area": "Rantau Panjang",
    "reservePrice": 58160.89,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1508",
    "title": "Shop Lot",
    "address": "Lot PT 803, Block 6, Pusat Perniagaan Dataran Rakyat, Bandar Baru Tunjong, 16010 Kota Bharu, Kelantan",
    "postcode": "16010",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 35430,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "129 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1509",
    "title": "Shop Lot",
    "address": "Lot PT 921, Blok 6, Pusat Perniagaan Dataran Rakyat, Bandar Baru Tunjong, 16010 Kota Bharu, Kelantan",
    "postcode": "16010",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 35430,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "129 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1510",
    "title": "Shop Lot",
    "address": "Lot PT 920, Block 6, Pusat Perniagaan Dataran Rakyat, Bandar Baru Tunjong, 16010 Kota Bharu, Kelantan",
    "postcode": "16010",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 35430,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "129 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1511",
    "title": "Shop Lot",
    "address": "Lot PT 934, Block 6, Pusat Perniagaan Dataran Rakyat, Bandar Baru Tunjong, 16010 Kota Bharu, Kelantan",
    "postcode": "16010",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 44288,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "129 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1512",
    "title": "2 Storey Bungalow House",
    "address": "Lot. 1594, Kampung Bendang Ketok, 1Morak, Palekbang, 16250 Tumpat, Kelantan",
    "postcode": "16250",
    "state": "Tumpat",
    "area": "Tumpat",
    "reservePrice": 1183500,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "949 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1513",
    "title": "Bungalow House",
    "address": "PT. 6033, Mukim Jeli, Kampung Sungai Lancang, 17600 Jeli, Kelantan",
    "postcode": "17600",
    "state": "Jeli",
    "area": "Jeli",
    "reservePrice": 299700,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "334 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1514",
    "title": "Land",
    "address": "Lot 12748, Kampung Padang Raja, 16400 Kota Bharu, Kelantan",
    "postcode": "12748",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 56700,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "969 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1515",
    "title": "4 Storey Shop House",
    "address": "Lot 197 (S22/5169-Q/1), Wisma Lagenda, Jalan Kuala Krai, Seksyen 22, 15050 Kota Bharu, Kelantan",
    "postcode": "15050",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 1004400,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "550 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1516",
    "title": "2 Storey Semi Detached Factory",
    "address": "PT 1208, Jalan Kubang Kacang, Kampung Tiong, Kubang Kacang, 16010 Kota Bharu, Kelantan",
    "postcode": "16010",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 1804275,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "060 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1517",
    "title": "2 Storey Semi Detached House",
    "address": "PT 4787 (Lot 18295), Kampung Limbat, Pasir Tumboh, 16150 Kota Bharu, Kelantan",
    "postcode": "18295",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 360855,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "035 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1518",
    "title": "1 Storey Detached House",
    "address": "Lot 1058-A, Kampung Tanjong Chat, 15300 Kota Bharu, Kelantan",
    "postcode": "15300",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 340200,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "339 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1519",
    "title": "Detached House",
    "address": "PT 652, Kampung Tok Ku, Sering, 16150 Kota Bharu, Kelantan",
    "postcode": "16150",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 391500,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "178 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1520",
    "title": "1 Storey Terrace House",
    "address": "PT 2794, Jalan Permai 7, Taman Sri Bayu Tumpat, Jubakar Pantai, 16200 Tumpat, Kelantan",
    "postcode": "16200",
    "state": "Tumpat",
    "area": "Tumpat",
    "reservePrice": 104400,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1521",
    "title": "1 Storey Bungalow",
    "address": "Lot. 1210, Kampung Gong China, Tanjung, 16020 Bachok, Kelantan",
    "postcode": "16020",
    "state": "Bachok",
    "area": "Bachok",
    "reservePrice": 395000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "808 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1522",
    "title": "1 Storey Terrace House",
    "address": "PT 178, Taman Wira, Kampung Kedap, Lubok Gong, 17200 Rantau Panjang, Kelantan",
    "postcode": "17200",
    "state": "Rantau Panjang",
    "area": "Rantau Panjang",
    "reservePrice": 55482.44,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1523",
    "title": "Terrace House",
    "address": "PT. 1483, Kampong Alor Pasir, Mukim Gual Nering, 17000 Pasir Mas, Kelantan",
    "postcode": "17000",
    "state": "Pasir Mas",
    "area": "Pasir Mas",
    "reservePrice": 120000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "098 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1524",
    "title": "2 Storey Bungalow",
    "address": "Lot No. 469, Kampung Kubang Tuman, Jalan Pengkalan Chepa, 15400 Kota Bharu, Kelantan",
    "postcode": "15400",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 426600,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "152 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1525",
    "title": "Terrace House",
    "address": "PT. 3211, Jalan Gemersik 15, Taman Sri Bayu, Jubakar Pantai, 16200 Tumpat, Kelantan",
    "postcode": "16200",
    "state": "Tumpat",
    "area": "Tumpat",
    "reservePrice": 145000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "098 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1526",
    "title": "Residential Land",
    "address": "PT. 5011, Mukim of Guntong, 16100 Bachok, Kelantan",
    "postcode": "16100",
    "state": "Bachok",
    "area": "Bachok",
    "reservePrice": 92700,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "245 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1527",
    "title": "Detached Plot",
    "address": "PT 5004, Mukim of Guntong, Kampung Limbat, 16100 Bachok, Kelantan",
    "postcode": "16100",
    "state": "Bachok",
    "area": "Bachok",
    "reservePrice": 90000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "782 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1528",
    "title": "Vacant Detached Plot",
    "address": "PT. 5003, Kampung Limbat, Mukim Guntong, 16100 Kota Bharu, Kelantan",
    "postcode": "16100",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 111600,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "773 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1529",
    "title": "2 Storey Semi Detached House",
    "address": "PT 1215, Jalan Kurnia Jaya 4, Taman Kurnia Jaya, Pengkalan Chepa, 16100 Kota Bharu, Kelantan",
    "postcode": "16100",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 350000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "734 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1530",
    "title": "Commercial Land",
    "address": "GM 1968 (Lot 2471), Mukim Langgar, Kampung Langgar, 15200 Jajahan Kota Bharu, Kelantan",
    "postcode": "15200",
    "state": "Jajahan Kota Bharu",
    "area": "Jajahan Kota Bharu",
    "reservePrice": 297000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "296 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1531",
    "title": "Shop Lot [5 min to Pejabat Imigresen Rantau Panjang]",
    "address": "No. 21, Tingkat 1, Kompleks Bazar Abdul Rahman B. Auf, 17200 Rantau Panjang, Kelantan",
    "postcode": "17200",
    "state": "Rantau Panjang",
    "area": "Rantau Panjang",
    "reservePrice": 12920,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "151 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1532",
    "title": "4 Storey Shop House",
    "address": "Unit No. 4615-G, Jalan Sultan Yahya Petra, Seksyen 14, 15200 Kota Bharu, Kelantan",
    "postcode": "15200",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 192237.3,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "600 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1533",
    "title": "[8 min to Mydin Wholesale Hypermarket] Condominium [10 min to Billion Mart (Tanjung Chat)]",
    "address": "Unit No. A-6-E, Impiana Condovilla, Kampung Telok Panji, Jalan Raja Perempuan Zainab II Panji, 16100 Kota Bharu, Kelantan",
    "postcode": "16100",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 240610,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "818 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1534",
    "title": "1 Storey Terrace House",
    "address": "No. 9 (Lot PT 15254), Jalan Prima B1/3, Residensi Prima Lubok Jong, 17070 Pasir Mas, Kelantan",
    "postcode": "15254",
    "state": "Pasir Mas",
    "area": "Pasir Mas",
    "reservePrice": 71744.54,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "981 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1535",
    "title": "3 Storey Shop Office",
    "address": "S26/PT 768, Kawasan Pasar Borong Wakaf Che Yeh, Jalan Kuala Krai, 15050 Kota Bharu, Kelantan",
    "postcode": "15050",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 416119,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "147 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1536",
    "title": "2 Storey Terrace House",
    "address": "PT. 2817, Jalan Hospital, Taman Desa Kujid, 16100 Kota Bharu, Kelantan",
    "postcode": "16100",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 416623.5,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "229 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1537",
    "title": "2 Storey Detached House",
    "address": "PT 8503, Jalan Tok Guru 1/8, Taman Semasa, 17070 Pasir Mas, Kelantan",
    "postcode": "17070",
    "state": "Pasir Mas",
    "area": "Pasir Mas",
    "reservePrice": 249318,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "090 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1538",
    "title": "2 Storey Terrace House",
    "address": "Lot 503 (PT 345), Taman Hidayah Harmoni, 17500 Tanah Merah, Kelantan",
    "postcode": "17500",
    "state": "Tanah Merah",
    "area": "Tanah Merah",
    "reservePrice": 284310,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "691 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1539",
    "title": "1 Storey Detached House",
    "address": "Lot 7875, Kampung Chap Harimau, 17000 Tanah Merah, Kelantan",
    "postcode": "17000",
    "state": "Tanah Merah",
    "area": "Tanah Merah",
    "reservePrice": 267300,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "738 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1540",
    "title": "2 Storey Shop Office",
    "address": "PT. 285, Jalan Klinik, 17500 Tanah Merah, Kelantan",
    "postcode": "17500",
    "state": "Tanah Merah",
    "area": "Tanah Merah",
    "reservePrice": 324000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1541",
    "title": "1 Storey Terrace House",
    "address": "Lot 567, Jalan Alor Pasir, Taman Maka Utama, 17000 Pasir Mas, Kelantan",
    "postcode": "17000",
    "state": "Pasir Mas",
    "area": "Pasir Mas",
    "reservePrice": 108000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "367 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1542",
    "title": "3 Storey Shop House",
    "address": "Lot 1710, Taman Kuala Krai, 18000 Kuala Krai, Kelantan",
    "postcode": "18000",
    "state": "Kuala Krai",
    "area": "Kuala Krai",
    "reservePrice": 700000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "604 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1543",
    "title": "1 Storey Terrace House",
    "address": "PT 2023, Kampung Bechah Tok Kamal, Mukim Tebing Tinggi, 17050 Tanah Merah, Kelantan",
    "postcode": "17050",
    "state": "Tanah Merah",
    "area": "Tanah Merah",
    "reservePrice": 130500,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1544",
    "title": "1 Storey Detached House",
    "address": "Lot 2225 (PT 1202), Mukim Dewan, 16800 Machang, Kelantan",
    "postcode": "16800",
    "state": "Machang",
    "area": "Machang",
    "reservePrice": 145800,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "919 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1545",
    "title": "Semi Detached House",
    "address": "PT 31/2195, Seterpa, 16400 Kota Bharu, Kelantan",
    "postcode": "16400",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 207000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "729 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1546",
    "title": "1 Storey Terrace House",
    "address": "Lot 4365, Jalan Sek Kadir Adabi, Taman Damai, 17500 Tanah Merah, Kelantan",
    "postcode": "17500",
    "state": "Tanah Merah",
    "area": "Tanah Merah",
    "reservePrice": 86670,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1547",
    "title": "1 Storey Terrace House",
    "address": "PT 584, Lorong Baiduri, Taman Kasturi, Kampung Belukar, 16250 Wakaf Bharu, Kelantan",
    "postcode": "16250",
    "state": "Wakaf Bharu",
    "area": "Wakaf Bharu",
    "reservePrice": 170000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "100 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1548",
    "title": "Terrace House",
    "address": "Lot 21921 (PT 5874), Taman Barakah, 17500 Tanah Merah, Kelantan",
    "postcode": "21921",
    "state": "Tanah Merah",
    "area": "Tanah Merah",
    "reservePrice": 180000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "732 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1549",
    "title": "Terrace House",
    "address": "PT 4363, Taman Kulim Jaya, Jalan Gong Kulim, Gong Kulim, 16800 Pasir Puteh, Kelantan",
    "postcode": "16800",
    "state": "Pasir Puteh",
    "area": "Pasir Puteh",
    "reservePrice": 130000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "097 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1550",
    "title": "1 Storey Terrace House",
    "address": "No. 411, Taman Puspa Jaya (B), Kok Lanas, 16450 Kota Bharu, Kelantan",
    "postcode": "16450",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 126000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1551",
    "title": "1 Storey Terrace House",
    "address": "PT. 2312, Taman Sri Nal, Kampung Kuala Nal, Jalan Kuala Krai, Machang, 18000 Kuala Krai, Kelantan",
    "postcode": "18000",
    "state": "Kuala Krai",
    "area": "Kuala Krai",
    "reservePrice": 82669,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "990 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1552",
    "title": "1 Storey Terrace House",
    "address": "PT 10819, Taman Desa Wirajaya, 17010 Pasir Mas, Kelantan",
    "postcode": "10819",
    "state": "Pasir Mas",
    "area": "Pasir Mas",
    "reservePrice": 195000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1553",
    "title": "1 Storey Terrace House",
    "address": "PT 10936, Jalan Wira 10B, Taman Desa Wirajaya, 17010 Pasir Mas, Kelantan",
    "postcode": "10936",
    "state": "Pasir Mas",
    "area": "Pasir Mas",
    "reservePrice": 195000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1554",
    "title": "2 Storey Terrace House",
    "address": "Lot 3480, Mukim Kenor, 18000 Kuala Krai, Kelantan",
    "postcode": "18000",
    "state": "Kuala Krai",
    "area": "Kuala Krai",
    "reservePrice": 300000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1555",
    "title": "1 Storey Terrace House",
    "address": "PT 10910, Jalan Wira 11B, Taman Desa Wirajaya, 17070 Pasir Mas, Kelantan",
    "postcode": "10910",
    "state": "Pasir Mas",
    "area": "Pasir Mas",
    "reservePrice": 200000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1556",
    "title": "Terrace House",
    "address": "PT 10378, Jalan Wira 11A, Taman Desa Wira Jaya, 17070 Pasir Mas, Kelantan",
    "postcode": "10378",
    "state": "Pasir Mas",
    "area": "Pasir Mas",
    "reservePrice": 166050,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1557",
    "title": "Land",
    "address": "Lot 3298, Jalan Kota Bharu-Pasir Puteh, Kampung Umur Tok Seh, 16800 Pasir Puteh, Kelantan",
    "postcode": "16800",
    "state": "Pasir Puteh",
    "area": "Pasir Puteh",
    "reservePrice": 140000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1558",
    "title": "Terrace House",
    "address": "Lot 2477 & Lot 1917 (PT. 2157 & PT 2256), Kampung Bukit China, Kok Lanas, 16450 Ketereh, Kelantan",
    "postcode": "16450",
    "state": "Ketereh",
    "area": "Ketereh",
    "reservePrice": 130000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "097 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1559",
    "title": "A Parcel of Ground and Mezzanine Floor of Kompleks Yakin",
    "address": "Ground & Mezzanine Floor, Kompleks Yakin, Jalan Gajah Mati, 15000 Kota Bharu, Kelantan",
    "postcode": "15000",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 474000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "350 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1560",
    "title": "Shop Lot",
    "address": "No. 44, 1st Floor, Kota Bharu City Point, 15000 Kota Bharu, Kelantan",
    "postcode": "15000",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 138000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "165 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1561",
    "title": "2 Storey Terrace Shop Office",
    "address": "PT 9319 (Lot 7363), Bandar Baru, 18300 Gua Musang, Kelantan",
    "postcode": "18300",
    "state": "Gua Musang",
    "area": "Gua Musang",
    "reservePrice": 233280,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1562",
    "title": "3 Storey Shop Office",
    "address": "PT 8109, Taman KK Height, 18000 Kuala Krai, Kelantan",
    "postcode": "18000",
    "state": "Kuala Krai",
    "area": "Kuala Krai",
    "reservePrice": 328050,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "200 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1563",
    "title": "1 Storey Detached House",
    "address": "Lot 538, Kampung Paloh, 17030 Pasir Mas, Kelantan",
    "postcode": "17030",
    "state": "Pasir Mas",
    "area": "Pasir Mas",
    "reservePrice": 123930,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "340 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1564",
    "title": "3 Storey Shop Office",
    "address": "No. S64 (PT 1063), Kawasan Pasar Borong Wakaf Che Yeh, Jalan Kuala Krai, 15050 Kota Bharu, Kelantan",
    "postcode": "15050",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 685260,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "176 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1565",
    "title": "Agricultural Land",
    "address": "Lot 603 & 622, Mukim Lubok Tembesu, 16090 Bachok, Kelantan",
    "postcode": "16090",
    "state": "Bachok",
    "area": "Bachok",
    "reservePrice": 80750,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1566",
    "title": "Agricultural Land",
    "address": "Lot 900, Kampung Tok Fatimah, 16800 Pasir Puteh, Kelantan",
    "postcode": "16800",
    "state": "Pasir Puteh",
    "area": "Pasir Puteh",
    "reservePrice": 120000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1567",
    "title": "2 Storey Detached House",
    "address": "Lot No. 2084, Kampung Bawa, Banggu, 16150 Kota Bharu, Kelantan",
    "postcode": "16150",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 550000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "222 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1568",
    "title": "1 Storey Detached House",
    "address": "No. 184, CastleMilia D'Tapang, Jalan Langgar, Off Jalan Abdul Kadir Adabi, 15200 Kota Bharu, Kelantan",
    "postcode": "15200",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 474000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "956 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1569",
    "title": "2 Storey Semi Detached House",
    "address": "PT. 1526, Lorong Taqwa, Kampung Huda, Jalan Sultan Yahya Petra, 15200 Kota Bharu, Kelantan",
    "postcode": "15200",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 700000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "422 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1570",
    "title": "2 Storey Semi Detached House",
    "address": "PT. 1525, Lorong Taqwa, Kampung Huda, Jalan Sultan Yahya Petra, 15200 Kota Bharu, Kelantan",
    "postcode": "15200",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 670000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "371 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1571",
    "title": "2 Storey Terrace House",
    "address": "PT. 3442 (Lot 6219), Lubok Jong, Taman Sri Mas, 17070 Pasir Mas, Kelantan",
    "postcode": "17070",
    "state": "Pasir Mas",
    "area": "Pasir Mas",
    "reservePrice": 42364.43,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "080 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1572",
    "title": "Detached House",
    "address": "Lot 4541, Taman Sri Mesa, Jalan Batu Karang Gual Periok, 17000 Pasir Mas, Kelantan",
    "postcode": "17000",
    "state": "Pasir Mas",
    "area": "Pasir Mas",
    "reservePrice": 190000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1573",
    "title": "2 Storey Semi Detached House",
    "address": "Kampung Padang Rokma, 16250 Wakaf Bharu, Kelantan",
    "postcode": "16250",
    "state": "Wakaf Bharu",
    "area": "Wakaf Bharu",
    "reservePrice": 178400,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "134 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1574",
    "title": "1 Storey Detached House",
    "address": "Lot 3266, Kampung Lubuk Kuin, Gunung, 16090 Bachok, Kelantan",
    "postcode": "16090",
    "state": "Bachok",
    "area": "Bachok",
    "reservePrice": 320000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "513 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1575",
    "title": "4 Storey Terrace Shop Office",
    "address": "Lot 2430, Jalan Besar Guchil, Belakang PKT, 18000 Kuala Krai, Kelantan",
    "postcode": "18000",
    "state": "Kuala Krai",
    "area": "Kuala Krai",
    "reservePrice": 295000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "604 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1576",
    "title": "4 Storey Terrace Shop Office",
    "address": "Lot 2431, Jalan Besar Guchil, Belakang PKT, 18000 Kuala Krai, Kelantan",
    "postcode": "18000",
    "state": "Kuala Krai",
    "area": "Kuala Krai",
    "reservePrice": 295000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "604 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1577",
    "title": "2 Storey Semi Detached House",
    "address": "Lot 13739, Kampung Padang Kerian, Daerah Sering Seksyen 73, 16150 Kota Bharu, Kelantan",
    "postcode": "13739",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 900000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "893 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1578",
    "title": "1 Storey Detached House",
    "address": "Lot 9536, Taman Sri Agor, Kampung Bukit Batu, 17500 Tanah Merah, Kelantan",
    "postcode": "17500",
    "state": "Tanah Merah",
    "area": "Tanah Merah",
    "reservePrice": 67758.73,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "010 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1579",
    "title": "3 Storey Shop Lot",
    "address": "PT 332, Kompleks Kedai Baru, Kawasan Bebas Cukai, 17200 Rantau Panjang, Kelantan",
    "postcode": "17200",
    "state": "Rantau Panjang",
    "area": "Rantau Panjang",
    "reservePrice": 306110.07,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1580",
    "title": "1 Storey Bungalow House",
    "address": "Lot 4515, Lorong 4 Manal Satu, 17500 Tanah Merah, Kelantan",
    "postcode": "17500",
    "state": "Tanah Merah",
    "area": "Tanah Merah",
    "reservePrice": 268672.95,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "368 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1581",
    "title": "3 Storey Shop Office",
    "address": "Lot 775 (PT 119), Jalan Tengku Petra Semerak, Section 9, 15000 Kota Bharu, Kelantan",
    "postcode": "15000",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 442867.5,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "616 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1582",
    "title": "2 Storey Terrace Shop Office",
    "address": "PT 1090, Taman Bendahara, Jalan Pengkalan Chepa, 15400 Kota Bharu, Kelantan",
    "postcode": "15400",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 400950,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1583",
    "title": "2 Storey Detached House",
    "address": "PT 463, Kampung Padang Kala, Jalan Pasir Puteh, 16400 Kota Bharu, Kelantan",
    "postcode": "16400",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 439587,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "145 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1584",
    "title": "1 Storey Terrace House",
    "address": "No. 29 (PT 15296), Residensi Prima Lubok Jong, Jalan Pasir Mas-Rantau Panjang, 17070 Pasir Mas, Kelantan",
    "postcode": "15296",
    "state": "Pasir Mas",
    "area": "Pasir Mas",
    "reservePrice": 135000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "072 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1585",
    "title": "1 Storey Detached House",
    "address": "No. 439, RPT Sungai Terah, 18300 Gua Musang, Kelantan",
    "postcode": "18300",
    "state": "Gua Musang",
    "area": "Gua Musang",
    "reservePrice": 230000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "174 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1586",
    "title": "1 Storey Shop",
    "address": "PT. 4183, Jalan Keranji 2, Bandar Utama Gua Musang, 18300 Gua Musang, Kelantan",
    "postcode": "18300",
    "state": "Gua Musang",
    "area": "Gua Musang",
    "reservePrice": 240000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "194 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1587",
    "title": "1 Storey Bungalow",
    "address": "PT 1995 (Lot 13963), Jalan Pengkalan Chepa, Kampung Baung, 16100 Kota Bharu, Kelantan",
    "postcode": "13963",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 400000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "596 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1588",
    "title": "Terrace House",
    "address": "Lot 10023 (PT 760), Taman Redha, Kampung Merbau Chondong, 16600 Pulai Chondong, Kelantan",
    "postcode": "10023",
    "state": "Pulai Chondong",
    "area": "Pulai Chondong",
    "reservePrice": 135000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "162 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1589",
    "title": "Terrace House",
    "address": "Lot 3461 (PT 649), Taman Jintan, Jalan Sungai Keladi, 17000 Pasir Mas, Kelantan",
    "postcode": "17000",
    "state": "Pasir Mas",
    "area": "Pasir Mas",
    "reservePrice": 63000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "044 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1590",
    "title": "Terrace House",
    "address": "Lot 11172 (PT 96), Kampung Tok Derpah, Tok Sangkot, 17070 Pasir Mas, Kelantan",
    "postcode": "11172",
    "state": "Pasir Mas",
    "area": "Pasir Mas",
    "reservePrice": 153000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "615 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1591",
    "title": "1 Storey Terrace House",
    "address": "PT 1316 (PT 5125), Taman CT Jaya, Kampung Tempoyak, Jelawat, 16070 Bachok, Kelantan",
    "postcode": "16070",
    "state": "Bachok",
    "area": "Bachok",
    "reservePrice": 153000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "755 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1592",
    "title": "2 Storey Terrace House",
    "address": "Lot 2442, Taman Selasih, 17500 Tanah Merah, Kelantan",
    "postcode": "17500",
    "state": "Tanah Merah",
    "area": "Tanah Merah",
    "reservePrice": 210600,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "981 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1593",
    "title": "2.5 Storey Bungalow House",
    "address": "Lot No. 739, Lorong KP, Jalan Raja Perempuan Zainab II, Panji, 16150 Kota Bharu, Kelantan",
    "postcode": "16150",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 1207000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "958 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1594",
    "title": "2 Storey Terrace House",
    "address": "No. S47/2247, Taman Rogayah, Jalan Long Yunus, 15400 Kota Bharu, Kelantan",
    "postcode": "15400",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 297000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1595",
    "title": "1 Storey Detached House",
    "address": "PT 2602, Taman Desa Firruz, Kampung Che Arus, 16450 Ketereh, Kelantan",
    "postcode": "16450",
    "state": "Ketereh",
    "area": "Ketereh",
    "reservePrice": 315000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "652 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1596",
    "title": "1 Storey Semi Detached House",
    "address": "Lot 2759, Lorong Pasir Kota, Jalan Pintu Gang, Kampung Pintu Gang, 15100 Kota Bharu, Kelantan",
    "postcode": "15100",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 252434.5,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "542 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1597",
    "title": "2 Storey Detached House",
    "address": "No. 1689-A, Jalan Pengkalan Chepa, Padang Garong, 16100 Kota Bharu, Kelantan",
    "postcode": "16100",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 533205,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "822 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1598",
    "title": "1 Storey Detached House",
    "address": "Lot 238, Kampung Surau Baung Hilir, 16100 Kota Bharu, Kelantan",
    "postcode": "16100",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 422820,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "723 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1599",
    "title": "Terrace House",
    "address": "PT 8674, Taman Sri Sutera, 16310 Bachok, Kelantan",
    "postcode": "16310",
    "state": "Bachok",
    "area": "Bachok",
    "reservePrice": 148500,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "153 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1600",
    "title": "Terrace House",
    "address": "Lot 16607 (PT 5934), Taman Pondok Pengiring, Jalan Tok Bali, Kampung Kandis, 16300 Bachok, Kelantan",
    "postcode": "16607",
    "state": "Bachok",
    "area": "Bachok",
    "reservePrice": 125000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "990 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1601",
    "title": "1 Storey Terrace House",
    "address": "PT 430 (Lot 759), Kampung Pulau Che Noh, Badang, 15350 Kota Bharu, Kelantan",
    "postcode": "15350",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 148500,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "410 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1602",
    "title": "Terrace House",
    "address": "PT 8868, Taman Teguh Arif, Kampung Cawas, 17500 Tanah Merah, Kelantan",
    "postcode": "17500",
    "state": "Tanah Merah",
    "area": "Tanah Merah",
    "reservePrice": 135000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "300 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1603",
    "title": "Terrace House",
    "address": "PT 2225 (Lot 1886), Taman Bukit Idaman, 16450 Kota Bharu, Kelantan",
    "postcode": "16450",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 103500,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "098 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1604",
    "title": "Terrace House",
    "address": "PT 1499, Taman MJ Selaseh 2, Kampung Kubang Kual, Bukit Tandak, 17200 Rantau Panjang, Kelantan",
    "postcode": "17200",
    "state": "Rantau Panjang",
    "area": "Rantau Panjang",
    "reservePrice": 145000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "259 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1605",
    "title": "2 Storey Terrace House",
    "address": "PT 1949, Kota Seribong, 16010 Kota Bharu, Kelantan",
    "postcode": "16010",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 720000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "486 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1606",
    "title": "1.5 Storey Terrace House",
    "address": "No. PT 316, Taman Kota Ville Indah, Jalan Kota Ville Indah 5, 16250 Pasir Pekan, Kelantan",
    "postcode": "16250",
    "state": "Pasir Pekan",
    "area": "Pasir Pekan",
    "reservePrice": 290000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1607",
    "title": "1 Storey Terrace House",
    "address": "Lot 3176, Jalan Chetok - Sungai Keladi, Taman Jintan, 16070 Pasir Mas, Kelantan",
    "postcode": "16070",
    "state": "Pasir Mas",
    "area": "Pasir Mas",
    "reservePrice": 91125,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "184 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1608",
    "title": "Terrace House",
    "address": "PT. 415, Taman Kenanga Indah, Kampung Senak, 16300 Bachok, Kelantan",
    "postcode": "16300",
    "state": "Bachok",
    "area": "Bachok",
    "reservePrice": 135000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1609",
    "title": "3.5 Storey Shop Office",
    "address": "Lot No. 788 (PT 156), Seksyen 9, Jalan Che Su, 15000 Kota Bharu, Kelantan",
    "postcode": "15000",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 344321.28,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "238 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1610",
    "title": "1 Storey Terrace House",
    "address": "PT 177, Taman Wira, Kampung Kedap, Lubok Gong, 17200 Rantau Panjang, Kelantan",
    "postcode": "17200",
    "state": "Rantau Panjang",
    "area": "Rantau Panjang",
    "reservePrice": 58160.89,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1611",
    "title": "Shop Lot",
    "address": "Lot PT 803, Block 6, Pusat Perniagaan Dataran Rakyat, Bandar Baru Tunjong, 16010 Kota Bharu, Kelantan",
    "postcode": "16010",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 35430,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "129 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1612",
    "title": "Shop Lot",
    "address": "Lot PT 921, Blok 6, Pusat Perniagaan Dataran Rakyat, Bandar Baru Tunjong, 16010 Kota Bharu, Kelantan",
    "postcode": "16010",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 35430,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "129 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1613",
    "title": "Shop Lot",
    "address": "Lot PT 920, Block 6, Pusat Perniagaan Dataran Rakyat, Bandar Baru Tunjong, 16010 Kota Bharu, Kelantan",
    "postcode": "16010",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 35430,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "129 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1614",
    "title": "Shop Lot",
    "address": "Lot PT 934, Block 6, Pusat Perniagaan Dataran Rakyat, Bandar Baru Tunjong, 16010 Kota Bharu, Kelantan",
    "postcode": "16010",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 44288,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "129 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1615",
    "title": "2 Storey Bungalow House",
    "address": "Lot. 1594, Kampung Bendang Ketok, 1Morak, Palekbang, 16250 Tumpat, Kelantan",
    "postcode": "16250",
    "state": "Tumpat",
    "area": "Tumpat",
    "reservePrice": 1183500,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "949 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1616",
    "title": "Bungalow House",
    "address": "PT. 6033, Mukim Jeli, Kampung Sungai Lancang, 17600 Jeli, Kelantan",
    "postcode": "17600",
    "state": "Jeli",
    "area": "Jeli",
    "reservePrice": 299700,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "334 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1617",
    "title": "Land",
    "address": "Lot 12748, Kampung Padang Raja, 16400 Kota Bharu, Kelantan",
    "postcode": "12748",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 56700,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "969 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1618",
    "title": "4 Storey Shop House",
    "address": "Lot 197 (S22/5169-Q/1), Wisma Lagenda, Jalan Kuala Krai, Seksyen 22, 15050 Kota Bharu, Kelantan",
    "postcode": "15050",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 1004400,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "550 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1619",
    "title": "2 Storey Semi Detached Factory",
    "address": "PT 1208, Jalan Kubang Kacang, Kampung Tiong, Kubang Kacang, 16010 Kota Bharu, Kelantan",
    "postcode": "16010",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 1804275,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "060 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1620",
    "title": "2 Storey Semi Detached House",
    "address": "PT 4787 (Lot 18295), Kampung Limbat, Pasir Tumboh, 16150 Kota Bharu, Kelantan",
    "postcode": "18295",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 360855,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "035 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1621",
    "title": "1 Storey Detached House",
    "address": "Lot 1058-A, Kampung Tanjong Chat, 15300 Kota Bharu, Kelantan",
    "postcode": "15300",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 340200,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "339 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1622",
    "title": "Detached House",
    "address": "PT 652, Kampung Tok Ku, Sering, 16150 Kota Bharu, Kelantan",
    "postcode": "16150",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 391500,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "178 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1623",
    "title": "1 Storey Terrace House",
    "address": "PT 2794, Jalan Permai 7, Taman Sri Bayu Tumpat, Jubakar Pantai, 16200 Tumpat, Kelantan",
    "postcode": "16200",
    "state": "Tumpat",
    "area": "Tumpat",
    "reservePrice": 104400,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1624",
    "title": "1 Storey Bungalow",
    "address": "Lot. 1210, Kampung Gong China, Tanjung, 16020 Bachok, Kelantan",
    "postcode": "16020",
    "state": "Bachok",
    "area": "Bachok",
    "reservePrice": 395000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "808 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1625",
    "title": "1 Storey Terrace House",
    "address": "PT 178, Taman Wira, Kampung Kedap, Lubok Gong, 17200 Rantau Panjang, Kelantan",
    "postcode": "17200",
    "state": "Rantau Panjang",
    "area": "Rantau Panjang",
    "reservePrice": 55482.44,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1626",
    "title": "Terrace House",
    "address": "PT. 1483, Kampong Alor Pasir, Mukim Gual Nering, 17000 Pasir Mas, Kelantan",
    "postcode": "17000",
    "state": "Pasir Mas",
    "area": "Pasir Mas",
    "reservePrice": 120000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "098 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1627",
    "title": "2 Storey Bungalow",
    "address": "Lot No. 469, Kampung Kubang Tuman, Jalan Pengkalan Chepa, 15400 Kota Bharu, Kelantan",
    "postcode": "15400",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 426600,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "152 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1628",
    "title": "Terrace House",
    "address": "PT. 3211, Jalan Gemersik 15, Taman Sri Bayu, Jubakar Pantai, 16200 Tumpat, Kelantan",
    "postcode": "16200",
    "state": "Tumpat",
    "area": "Tumpat",
    "reservePrice": 145000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "098 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1629",
    "title": "Residential Land",
    "address": "PT. 5011, Mukim of Guntong, 16100 Bachok, Kelantan",
    "postcode": "16100",
    "state": "Bachok",
    "area": "Bachok",
    "reservePrice": 92700,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "245 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1630",
    "title": "Detached Plot",
    "address": "PT 5004, Mukim of Guntong, Kampung Limbat, 16100 Bachok, Kelantan",
    "postcode": "16100",
    "state": "Bachok",
    "area": "Bachok",
    "reservePrice": 90000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "782 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1631",
    "title": "Vacant Detached Plot",
    "address": "PT. 5003, Kampung Limbat, Mukim Guntong, 16100 Kota Bharu, Kelantan",
    "postcode": "16100",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 111600,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "773 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1632",
    "title": "2 Storey Semi Detached House",
    "address": "PT 1215, Jalan Kurnia Jaya 4, Taman Kurnia Jaya, Pengkalan Chepa, 16100 Kota Bharu, Kelantan",
    "postcode": "16100",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 350000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "734 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1633",
    "title": "Commercial Land",
    "address": "GM 1968 (Lot 2471), Mukim Langgar, Kampung Langgar, 15200 Jajahan Kota Bharu, Kelantan",
    "postcode": "15200",
    "state": "Jajahan Kota Bharu",
    "area": "Jajahan Kota Bharu",
    "reservePrice": 297000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "296 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1634",
    "title": "Detached Plot",
    "address": "PT 5010, Mukim of Guntong, Kampung Limbat, 16150 Kota Bharu, Kelantan",
    "postcode": "16150",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 83700,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "890 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1635",
    "title": "Bungalow",
    "address": "Lot PT 1097, Kampung Che Arus, Kok Lanas, 16450 Ketereh, Kelantan",
    "postcode": "16450",
    "state": "Ketereh",
    "area": "Ketereh",
    "reservePrice": 182250,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "328 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1636",
    "title": "Vacant Residential Land",
    "address": "PT. 5009, Mukim of Guntong, Kampung Limbat, 16150 Kota Bharu, Kelantan",
    "postcode": "16150",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 83700,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "890 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1637",
    "title": "Office Building",
    "address": "Lot. 1234, Kampung Air Tawar, Terusan Semerak Tok Bali, 16700 Pasir Puteh, Kelantan",
    "postcode": "16700",
    "state": "Pasir Puteh",
    "area": "Pasir Puteh",
    "reservePrice": 1694578.4,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "132 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1638",
    "title": "Terrace House",
    "address": "PT. 870 & 882, Taman Sri Jaza, Jalan Kampung Hutan Pasir, 16450 Ketereh, Kelantan",
    "postcode": "16450",
    "state": "Ketereh",
    "area": "Ketereh",
    "reservePrice": 180000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1639",
    "title": "1 Storey Terrace House",
    "address": "PT 10326, Taman Desa Wira Jaya, 17070 Pasir Mas, Kelantan",
    "postcode": "10326",
    "state": "Pasir Mas",
    "area": "Pasir Mas",
    "reservePrice": 200000,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1640",
    "title": "1 Storey Terrace House",
    "address": "No. PT 4397, Kok Lanas, Taman Desa Wadi Iman, 16450 Ketereh, Kelantan",
    "postcode": "16450",
    "state": "Ketereh",
    "area": "Ketereh",
    "reservePrice": 145800,
    "auctionDate": "20 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "194 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1641",
    "title": "Shop Lot [5 min to Pejabat Imigresen Rantau Panjang]",
    "address": "No. 21, Tingkat 1, Kompleks Bazar Abdul Rahman B. Auf, 17200 Rantau Panjang, Kelantan",
    "postcode": "17200",
    "state": "Rantau Panjang",
    "area": "Rantau Panjang",
    "reservePrice": 12920,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "151 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1642",
    "title": "4 Storey Shop House",
    "address": "Unit No. 4615-G, Jalan Sultan Yahya Petra, Seksyen 14, 15200 Kota Bharu, Kelantan",
    "postcode": "15200",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 192237.3,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "600 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1643",
    "title": "[8 min to Mydin Wholesale Hypermarket] Condominium [10 min to Billion Mart (Tanjung Chat)]",
    "address": "Unit No. A-6-E, Impiana Condovilla, Kampung Telok Panji, Jalan Raja Perempuan Zainab II Panji, 16100 Kota Bharu, Kelantan",
    "postcode": "16100",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 240610,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "818 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1644",
    "title": "1 Storey Terrace House",
    "address": "No. 9 (Lot PT 15254), Jalan Prima B1/3, Residensi Prima Lubok Jong, 17070 Pasir Mas, Kelantan",
    "postcode": "15254",
    "state": "Pasir Mas",
    "area": "Pasir Mas",
    "reservePrice": 71744.54,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "981 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1645",
    "title": "3 Storey Shop Office",
    "address": "S26/PT 768, Kawasan Pasar Borong Wakaf Che Yeh, Jalan Kuala Krai, 15050 Kota Bharu, Kelantan",
    "postcode": "15050",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 416119,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "147 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1646",
    "title": "2 Storey Terrace House",
    "address": "PT. 2817, Jalan Hospital, Taman Desa Kujid, 16100 Kota Bharu, Kelantan",
    "postcode": "16100",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 416623.5,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "229 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1647",
    "title": "2 Storey Detached House",
    "address": "PT 8503, Jalan Tok Guru 1/8, Taman Semasa, 17070 Pasir Mas, Kelantan",
    "postcode": "17070",
    "state": "Pasir Mas",
    "area": "Pasir Mas",
    "reservePrice": 249318,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "090 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1648",
    "title": "2 Storey Terrace House",
    "address": "Lot 503 (PT 345), Taman Hidayah Harmoni, 17500 Tanah Merah, Kelantan",
    "postcode": "17500",
    "state": "Tanah Merah",
    "area": "Tanah Merah",
    "reservePrice": 284310,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "691 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1649",
    "title": "1 Storey Detached House",
    "address": "Lot 7875, Kampung Chap Harimau, 17000 Tanah Merah, Kelantan",
    "postcode": "17000",
    "state": "Tanah Merah",
    "area": "Tanah Merah",
    "reservePrice": 267300,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "738 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1650",
    "title": "2 Storey Shop Office",
    "address": "PT. 285, Jalan Klinik, 17500 Tanah Merah, Kelantan",
    "postcode": "17500",
    "state": "Tanah Merah",
    "area": "Tanah Merah",
    "reservePrice": 324000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1651",
    "title": "1 Storey Terrace House",
    "address": "Lot 567, Jalan Alor Pasir, Taman Maka Utama, 17000 Pasir Mas, Kelantan",
    "postcode": "17000",
    "state": "Pasir Mas",
    "area": "Pasir Mas",
    "reservePrice": 108000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "367 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1652",
    "title": "3 Storey Shop House",
    "address": "Lot 1710, Taman Kuala Krai, 18000 Kuala Krai, Kelantan",
    "postcode": "18000",
    "state": "Kuala Krai",
    "area": "Kuala Krai",
    "reservePrice": 700000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "604 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1653",
    "title": "1 Storey Terrace House",
    "address": "PT 2023, Kampung Bechah Tok Kamal, Mukim Tebing Tinggi, 17050 Tanah Merah, Kelantan",
    "postcode": "17050",
    "state": "Tanah Merah",
    "area": "Tanah Merah",
    "reservePrice": 130500,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1654",
    "title": "1 Storey Detached House",
    "address": "Lot 2225 (PT 1202), Mukim Dewan, 16800 Machang, Kelantan",
    "postcode": "16800",
    "state": "Machang",
    "area": "Machang",
    "reservePrice": 145800,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "919 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1655",
    "title": "Semi Detached House",
    "address": "PT 31/2195, Seterpa, 16400 Kota Bharu, Kelantan",
    "postcode": "16400",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 207000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "729 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1656",
    "title": "1 Storey Terrace House",
    "address": "Lot 4365, Jalan Sek Kadir Adabi, Taman Damai, 17500 Tanah Merah, Kelantan",
    "postcode": "17500",
    "state": "Tanah Merah",
    "area": "Tanah Merah",
    "reservePrice": 86670,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1657",
    "title": "1 Storey Terrace House",
    "address": "PT 584, Lorong Baiduri, Taman Kasturi, Kampung Belukar, 16250 Wakaf Bharu, Kelantan",
    "postcode": "16250",
    "state": "Wakaf Bharu",
    "area": "Wakaf Bharu",
    "reservePrice": 170000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "100 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1658",
    "title": "Terrace House",
    "address": "Lot 21921 (PT 5874), Taman Barakah, 17500 Tanah Merah, Kelantan",
    "postcode": "21921",
    "state": "Tanah Merah",
    "area": "Tanah Merah",
    "reservePrice": 180000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "732 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1659",
    "title": "Terrace House",
    "address": "PT 4363, Taman Kulim Jaya, Jalan Gong Kulim, Gong Kulim, 16800 Pasir Puteh, Kelantan",
    "postcode": "16800",
    "state": "Pasir Puteh",
    "area": "Pasir Puteh",
    "reservePrice": 130000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "097 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1660",
    "title": "1 Storey Terrace House",
    "address": "No. 411, Taman Puspa Jaya (B), Kok Lanas, 16450 Kota Bharu, Kelantan",
    "postcode": "16450",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 126000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1661",
    "title": "1 Storey Terrace House",
    "address": "PT. 2312, Taman Sri Nal, Kampung Kuala Nal, Jalan Kuala Krai, Machang, 18000 Kuala Krai, Kelantan",
    "postcode": "18000",
    "state": "Kuala Krai",
    "area": "Kuala Krai",
    "reservePrice": 82669,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "990 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1662",
    "title": "1 Storey Terrace House",
    "address": "PT 10819, Taman Desa Wirajaya, 17010 Pasir Mas, Kelantan",
    "postcode": "10819",
    "state": "Pasir Mas",
    "area": "Pasir Mas",
    "reservePrice": 195000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1663",
    "title": "1 Storey Terrace House",
    "address": "PT 10936, Jalan Wira 10B, Taman Desa Wirajaya, 17010 Pasir Mas, Kelantan",
    "postcode": "10936",
    "state": "Pasir Mas",
    "area": "Pasir Mas",
    "reservePrice": 195000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1664",
    "title": "2 Storey Terrace House",
    "address": "Lot 3480, Mukim Kenor, 18000 Kuala Krai, Kelantan",
    "postcode": "18000",
    "state": "Kuala Krai",
    "area": "Kuala Krai",
    "reservePrice": 300000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1665",
    "title": "1 Storey Terrace House",
    "address": "PT 10910, Jalan Wira 11B, Taman Desa Wirajaya, 17070 Pasir Mas, Kelantan",
    "postcode": "10910",
    "state": "Pasir Mas",
    "area": "Pasir Mas",
    "reservePrice": 200000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1666",
    "title": "Terrace House",
    "address": "PT 10378, Jalan Wira 11A, Taman Desa Wira Jaya, 17070 Pasir Mas, Kelantan",
    "postcode": "10378",
    "state": "Pasir Mas",
    "area": "Pasir Mas",
    "reservePrice": 166050,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1667",
    "title": "Land",
    "address": "Lot 3298, Jalan Kota Bharu-Pasir Puteh, Kampung Umur Tok Seh, 16800 Pasir Puteh, Kelantan",
    "postcode": "16800",
    "state": "Pasir Puteh",
    "area": "Pasir Puteh",
    "reservePrice": 140000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1668",
    "title": "Terrace House",
    "address": "Lot 2477 & Lot 1917 (PT. 2157 & PT 2256), Kampung Bukit China, Kok Lanas, 16450 Ketereh, Kelantan",
    "postcode": "16450",
    "state": "Ketereh",
    "area": "Ketereh",
    "reservePrice": 130000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "097 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1669",
    "title": "A Parcel of Ground and Mezzanine Floor of Kompleks Yakin",
    "address": "Ground & Mezzanine Floor, Kompleks Yakin, Jalan Gajah Mati, 15000 Kota Bharu, Kelantan",
    "postcode": "15000",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 474000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "350 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1670",
    "title": "Shop Lot",
    "address": "No. 44, 1st Floor, Kota Bharu City Point, 15000 Kota Bharu, Kelantan",
    "postcode": "15000",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 138000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "165 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1671",
    "title": "2 Storey Terrace Shop Office",
    "address": "PT 9319 (Lot 7363), Bandar Baru, 18300 Gua Musang, Kelantan",
    "postcode": "18300",
    "state": "Gua Musang",
    "area": "Gua Musang",
    "reservePrice": 233280,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1672",
    "title": "3 Storey Shop Office",
    "address": "PT 8109, Taman KK Height, 18000 Kuala Krai, Kelantan",
    "postcode": "18000",
    "state": "Kuala Krai",
    "area": "Kuala Krai",
    "reservePrice": 328050,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "200 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1673",
    "title": "1 Storey Detached House",
    "address": "Lot 538, Kampung Paloh, 17030 Pasir Mas, Kelantan",
    "postcode": "17030",
    "state": "Pasir Mas",
    "area": "Pasir Mas",
    "reservePrice": 123930,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "340 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1674",
    "title": "3 Storey Shop Office",
    "address": "No. S64 (PT 1063), Kawasan Pasar Borong Wakaf Che Yeh, Jalan Kuala Krai, 15050 Kota Bharu, Kelantan",
    "postcode": "15050",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 685260,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "176 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1675",
    "title": "Agricultural Land",
    "address": "Lot 603 & 622, Mukim Lubok Tembesu, 16090 Bachok, Kelantan",
    "postcode": "16090",
    "state": "Bachok",
    "area": "Bachok",
    "reservePrice": 80750,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1676",
    "title": "Land",
    "address": "Mukim Lubok Tembesu, Jajahan Bachok, Kelantan",
    "postcode": "",
    "state": "Jajahan Bachok",
    "area": "Jajahan Bachok",
    "reservePrice": 80750,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1677",
    "title": "Agricultural Land",
    "address": "Lot 900, Kampung Tok Fatimah, 16800 Pasir Puteh, Kelantan",
    "postcode": "16800",
    "state": "Pasir Puteh",
    "area": "Pasir Puteh",
    "reservePrice": 120000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1678",
    "title": "2 Storey Detached House",
    "address": "Lot No. 2084, Kampung Bawa, Banggu, 16150 Kota Bharu, Kelantan",
    "postcode": "16150",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 550000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "222 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1679",
    "title": "1 Storey Detached House",
    "address": "No. 184, CastleMilia D'Tapang, Jalan Langgar, Off Jalan Abdul Kadir Adabi, 15200 Kota Bharu, Kelantan",
    "postcode": "15200",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 474000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "956 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1680",
    "title": "2 Storey Semi Detached House",
    "address": "PT. 1526, Lorong Taqwa, Kampung Huda, Jalan Sultan Yahya Petra, 15200 Kota Bharu, Kelantan",
    "postcode": "15200",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 700000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "422 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1681",
    "title": "2 Storey Semi Detached House",
    "address": "PT. 1525, Lorong Taqwa, Kampung Huda, Jalan Sultan Yahya Petra, 15200 Kota Bharu, Kelantan",
    "postcode": "15200",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 670000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "371 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1682",
    "title": "2 Storey Terrace House",
    "address": "PT. 3442 (Lot 6219), Lubok Jong, Taman Sri Mas, 17070 Pasir Mas, Kelantan",
    "postcode": "17070",
    "state": "Pasir Mas",
    "area": "Pasir Mas",
    "reservePrice": 42364.43,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "080 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1683",
    "title": "Detached House",
    "address": "Lot 4541, Taman Sri Mesa, Jalan Batu Karang Gual Periok, 17000 Pasir Mas, Kelantan",
    "postcode": "17000",
    "state": "Pasir Mas",
    "area": "Pasir Mas",
    "reservePrice": 190000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1684",
    "title": "2 Storey Semi Detached House",
    "address": "Kampung Padang Rokma, 16250 Wakaf Bharu, Kelantan",
    "postcode": "16250",
    "state": "Wakaf Bharu",
    "area": "Wakaf Bharu",
    "reservePrice": 178400,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "134 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1685",
    "title": "1 Storey Detached House",
    "address": "Lot 3266, Kampung Lubuk Kuin, Gunung, 16090 Bachok, Kelantan",
    "postcode": "16090",
    "state": "Bachok",
    "area": "Bachok",
    "reservePrice": 320000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "513 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1686",
    "title": "4 Storey Terrace Shop Office",
    "address": "Lot 2430, Jalan Besar Guchil, Belakang PKT, 18000 Kuala Krai, Kelantan",
    "postcode": "18000",
    "state": "Kuala Krai",
    "area": "Kuala Krai",
    "reservePrice": 295000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "604 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1687",
    "title": "4 Storey Terrace Shop Office",
    "address": "Lot 2431, Jalan Besar Guchil, Belakang PKT, 18000 Kuala Krai, Kelantan",
    "postcode": "18000",
    "state": "Kuala Krai",
    "area": "Kuala Krai",
    "reservePrice": 295000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "604 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1688",
    "title": "2 Storey Semi Detached House",
    "address": "Lot 13739, Kampung Padang Kerian, Daerah Sering Seksyen 73, 16150 Kota Bharu, Kelantan",
    "postcode": "13739",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 900000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "893 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  }
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-MY", {
    style: "currency",
    currency: "MYR",
    maximumFractionDigits: 0,
  }).format(price);
}
