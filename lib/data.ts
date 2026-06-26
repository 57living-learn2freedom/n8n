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
    "title": "2.5 Storey Semi Detached House",
    "address": "No. 321A, Jalan Puncak Saujana 3/2, Seksyen 3, Taman Puncak Saujana, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 932974.2,
    "auctionDate": "6 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "821 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Co-dhrWsoYhSymMf3JIeVR8J3tG2gy_9&sz=w800"
    ]
  },
  {
    "id": "3",
    "title": "Flat",
    "address": "Unit No. P3-A-05-25, Blok A, Off Jalan Sepakat Indah 3, Taman Sepakat Indah, Sungai Chua, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 82674,
    "auctionDate": "6 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "710 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1yy_87PnfNnB3D0pS0y1DlTM409FxPmxM&sz=w800"
    ]
  },
  {
    "id": "4",
    "title": "2 Storey Detached House",
    "address": "No. 45, Jalan Desa 6/8, Bandar Country Homes, 48000 Rawang, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 688500,
    "auctionDate": "6 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "000 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1qD9if-mvzTe0eoGnXiy0gihkDFIarLuU&sz=w800"
    ]
  },
  {
    "id": "5",
    "title": "2 Storey Terrace House",
    "address": "No. 17, Jalan Bestari 3/3, Puncak Bestari, 42300 Bandar Puncak Alam, Selangor",
    "postcode": "42300",
    "state": "Selangor",
    "area": "Bandar Puncak Alam",
    "reservePrice": 511000,
    "auctionDate": "6 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "379 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jHusB6jrHIadzeBjPCAT1Z8mfwHWWPMD&sz=w800"
    ]
  },
  {
    "id": "6",
    "title": "Apartment",
    "address": "Unit No. 3-108, Blok 3, Apartment Kenanga, Bandar Baru Selayang, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 138000,
    "auctionDate": "6 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "732 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1OWQePnWarg3wwigAurlx1rpFnxQ7YYi5&sz=w800"
    ]
  },
  {
    "id": "7",
    "title": "2 Storey Terrace House",
    "address": "No. 17, Jalan Merbau, Taman Banting Baru, 42700 Banting, Selangor",
    "postcode": "42700",
    "state": "Selangor",
    "area": "Banting",
    "reservePrice": 405000,
    "auctionDate": "6 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1ulmtT3Cb6qCXiH6-XnQfYeKoMhzEDlEj&sz=w800"
    ]
  },
  {
    "id": "8",
    "title": "Duplex Condominium",
    "address": "Unit No. A3-11-8, Cyberia Smarthomes A, Cyberia, Cyber 11, 63000 Cyberjaya, Selangor",
    "postcode": "63000",
    "state": "Selangor",
    "area": "Cyberjaya",
    "reservePrice": 360000,
    "auctionDate": "6 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "088 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Y7g1YmeesvTNGKUbNlxhud-Wl6LPPrZu&sz=w800"
    ]
  },
  {
    "id": "9",
    "title": "2 Storey Terrace House",
    "address": "No. 48, Jalan RP 4/12, Taman Rawang Perdana, 48000 Rawang, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 540000,
    "auctionDate": "6 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "295 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1-IvfyzdehZzMpI7-oPvC0ZICighe5cgv&sz=w800"
    ]
  },
  {
    "id": "10",
    "title": "1 Storey Terrace House",
    "address": "No. 4, Jalan Mahagoni 4, Seksyen 4, Bandar Utama Batang Kali, 44300 Batang Kali, Selangor",
    "postcode": "44300",
    "state": "Selangor",
    "area": "Batang Kali",
    "reservePrice": 288000,
    "auctionDate": "6 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "960 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1is-Yenwxk-NKCzNXWD17WqwZJ-ekgFll&sz=w800"
    ]
  },
  {
    "id": "11",
    "title": "Apartment",
    "address": "Unit No. E225, Block E, Tingkat 2, Pangsapuri Sri Anggerik 2, Jalan Bandar Puchong Jaya, 47100 Puchong, Selangor",
    "postcode": "47100",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 180000,
    "auctionDate": "6 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "829 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1tLasfJpL-s11ootQcW15_qLzRm5PvLhF&sz=w800"
    ]
  },
  {
    "id": "12",
    "title": "Flat",
    "address": "Unit No. 10-6-08, Pangsapuri Utarid Subang, No. 1, Jalan Utarid U5/2, Seksyen U5, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 108000,
    "auctionDate": "6 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "667 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1EFAE6vlI0gdUXmdmepnR77E_uz43DWro&sz=w800"
    ]
  },
  {
    "id": "13",
    "title": "4 Storey Shop Office",
    "address": "Jalan Puteri 3A/2, Bandar Puteri Bangi, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 2800000,
    "auctionDate": "6 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "669 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=12xzT4v9BiuimdJsY3NX9zyFaOgDrwJyf&sz=w800",
      "https://drive.google.com/thumbnail?id=1lBEyAITqxoaVDJ4AgklmJ-rC1tyFdSXZ&sz=w800"
    ]
  },
  {
    "id": "14",
    "title": "Apartment",
    "address": "Unit No. 804, Block A, Pangsapuri SS 6, Jalan SS 6/1, Kelana Jaya, 47301 Petaling Jaya, Selangor",
    "postcode": "47301",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 270000,
    "auctionDate": "6 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "926 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1bouvmAtRVTpxtY-VEVeUOZ6shbJAmrQA&sz=w800"
    ]
  },
  {
    "id": "15",
    "title": "1 Storey Terrace House",
    "address": "No. 19, Jalan Hulubalang 31/KS7, Taman Sentosa, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 364500,
    "auctionDate": "6 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "550 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=17qve69uohmPU9k34kgdJnLcSLN4Kebfp&sz=w800"
    ]
  },
  {
    "id": "16",
    "title": "2 Storey Terrace House",
    "address": "No. Premis 41, Jalan Kesuma 8/2D, D’Cendana, Bandar Tasik Kesuma, 43700 Beranang, Selangor",
    "postcode": "43700",
    "state": "Selangor",
    "area": "Beranang",
    "reservePrice": 522000,
    "auctionDate": "6 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "991 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1GxcLcPSxi3AR4LOBInBtVk9qr_haqo-H&sz=w800"
    ]
  },
  {
    "id": "17",
    "title": "Apartment",
    "address": "Unit No. B-4-07, Block B, Pangsapuri Seri Cempaka, Jalan Kiambang 1, Pinggiran Tasik Kiambang, 48200 Serendah, Selangor",
    "postcode": "48200",
    "state": "Selangor",
    "area": "Serendah",
    "reservePrice": 61200,
    "auctionDate": "6 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "850 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1fTYsbXEeoBKVjWxShDFNzHjy5mG-gopW&sz=w800"
    ]
  },
  {
    "id": "18",
    "title": "2 Storey Terrace House",
    "address": "No. 46, Jalan Goodview 9, Goodview Heights, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 810000,
    "auctionDate": "6 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "684 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=11khF8gasvxcJB-7s23T6G6O1rtJOa9IG&sz=w800"
    ]
  },
  {
    "id": "19",
    "title": "1 Storey Terrace House",
    "address": "No. 16, Jalan Sungai Renggam 32/4, Berjaya Park, Seksyen 32, 40460 Shah Alam, Selangor",
    "postcode": "40460",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 390000,
    "auctionDate": "6 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1COAyzYXMnz4cDxZJKUJM07ZC1tmRrKqE&sz=w800"
    ]
  },
  {
    "id": "20",
    "title": "Apartment",
    "address": "Unit No. B-05-11, Block B, Pangsapuri Kos Rendah, Jalan TK 4/5, Sunway Kinrara, 47100 Puchong, Selangor",
    "postcode": "47100",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 93960,
    "auctionDate": "6 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "646 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1ph4kQDS-HPEh_OU0qyOAN3ONXbvE6Mn6&sz=w800"
    ]
  },
  {
    "id": "21",
    "title": "2 Storey Semi Detached House",
    "address": "No. 9, Jalan 34 B, Kampung Cheras Baru, 56100 Ampang, Selangor",
    "postcode": "56100",
    "state": "Selangor",
    "area": "Ampang",
    "reservePrice": 1200000,
    "auctionDate": "6 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "337 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1kIHhyFD-AnzbSfL6wOzOIcg4Y6PF4CDe&sz=w800"
    ]
  },
  {
    "id": "22",
    "title": "2 Storey Terrace House",
    "address": "Premises No. 32, Jalan Kesuma 8/2C, Seksyen 8, Bandar Tasik Kesuma, 43700 Beranang, Selangor",
    "postcode": "43700",
    "state": "Selangor",
    "area": "Beranang",
    "reservePrice": 504000,
    "auctionDate": "6 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1GxcLcPSxi3AR4LOBInBtVk9qr_haqo-H&sz=w800"
    ]
  },
  {
    "id": "23",
    "title": "Apartment",
    "address": "Unit No. SB-02-08, Kenangan View Apartment, Jalan Bukit Kenangan, Taman Bukit Kenangan, 43000, Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 300000,
    "auctionDate": "6 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "184 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1ifb3bKAZWoWz4RGgXoDTNKLIanVufEhz&sz=w800"
    ]
  },
  {
    "id": "24",
    "title": "Condominium",
    "address": "Unit No. 3A-15-01, 15th Floor, Puri Aiyu Apartment, Jalan Jubli Perak 22/1, Seksyen 22, 40000 Shah Alam, Selangor",
    "postcode": "40000",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 648000,
    "auctionDate": "6 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "088 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1IcqChTJZ1Zuh0hY9nX3Ijw383sKqjTcj&sz=w800"
    ]
  },
  {
    "id": "25",
    "title": "2 Storey Terrace Shop Office",
    "address": "No. 12A, Jalan Megah 27, Taman Megah Cheras, 43200 Cheras, Selangor",
    "postcode": "43200",
    "state": "Selangor",
    "area": "Cheras",
    "reservePrice": 1400000,
    "auctionDate": "6 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "650 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1QuDJQLlkt1lXIHb4AajzhaJCt0qknOJ8&sz=w800"
    ]
  },
  {
    "id": "26",
    "title": "Terrace House",
    "address": "No. 25, Jalan Sembilang 17/31, Seksyen 17, 40200 Shah Alam, Selangor",
    "postcode": "40200",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 400000,
    "auctionDate": "6 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "350 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1tTJnNjdhlrr16caF3jVS1u2Nu8PlXrWK&sz=w800"
    ]
  },
  {
    "id": "27",
    "title": "2.5 Storey Terrace House",
    "address": "No. 50, Jalan Megah 2/2, Taman Megah 2, 43200 Cheras, Selangor",
    "postcode": "43200",
    "state": "Selangor",
    "area": "Cheras",
    "reservePrice": 675000,
    "auctionDate": "6 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "519 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1rSiusrf5KC5Vx5T9tVL5gsYaokCyePm4&sz=w800"
    ]
  },
  {
    "id": "28",
    "title": "Apartment",
    "address": "Unit No. M-2-05, Blok M, Jalan Cheras Intan 9, Taman Cheras Intan, 43200 Cheras, Selangor",
    "postcode": "43200",
    "state": "Selangor",
    "area": "Cheras",
    "reservePrice": 288000,
    "auctionDate": "6 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "850 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1s6CDR7uy_ciEzuSW8YZObPSmL79gGJ04&sz=w800"
    ]
  },
  {
    "id": "29",
    "title": "2 Storey Terrace House",
    "address": "No. 38, Jalan Kejora U5/120E (Taman Puteri Subang), Sekysen U5, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 600000,
    "auctionDate": "6 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "565 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1OcOJ8w3Pf3UVwsLcu1-nbH3T4F4w90ER&sz=w800"
    ]
  },
  {
    "id": "30",
    "title": "Apartment",
    "address": "Unit No. J-4-8, Pangsapuri Putra Indah, Jalan PP 16, Taman Pinggiran Putra, Seksyen 2, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 200000,
    "auctionDate": "6 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "850 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13dA9fV4A_o2BsWhfWp9dBFG6EBcTEttY&sz=w800"
    ]
  },
  {
    "id": "31",
    "title": "2 Storey Terrace House",
    "address": "No. 59, Jalan Mahkota 1A/3, Bandar Mahkota Banting, 42700 Banting, Selangor",
    "postcode": "42700",
    "state": "Selangor",
    "area": "Banting",
    "reservePrice": 350000,
    "auctionDate": "6 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "200 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1aMpJ-OXEqtqDxYvgGK25JD3qFYvfqt-I&sz=w800"
    ]
  },
  {
    "id": "32",
    "title": "2 Storey Terrace House",
    "address": "No. 29, Jalan Kerongsang 7, Bandar Puteri Klang, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 700000,
    "auctionDate": "6 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "647 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1I5nasFaqK43b091QviHNjiPxEBLKGMws&sz=w800"
    ]
  },
  {
    "id": "33",
    "title": "Service Apartment",
    "address": "Unit No. B-12B-07, Dataran Millenium PJ, Jalan 14/1, 46100 Petaling Jaya, Selangor",
    "postcode": "46100",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 450000,
    "auctionDate": "6 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1F5vZ50XnNln4ANsh8Tj-yJkJAAraHlNA&sz=w800"
    ]
  },
  {
    "id": "34",
    "title": "Service Apartment",
    "address": "No. 02-08, Tingkat 2, Pangsapuri Servis Brunsfield, No. 3, Jalan Yoga 13/42, Seksyen 13, 40100 Shah Alam, Selangor",
    "postcode": "40100",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 250000,
    "auctionDate": "6 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "915 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1noemUe-Nyy8o-FtkDO97GpzfunVd2-B-&sz=w800"
    ]
  },
  {
    "id": "35",
    "title": "Terrace House",
    "address": "No. 26, Jalan SP 6/3, Seri Pristana, 47000 Sungai Buloh, Selangor",
    "postcode": "47000",
    "state": "Selangor",
    "area": "Sungai Buloh",
    "reservePrice": 510000,
    "auctionDate": "6 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "300 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1NNyuAvX3LsjGXZBFi-gRK213cM1Inzpu&sz=w800"
    ]
  },
  {
    "id": "36",
    "title": "Apartment",
    "address": "Unit No. D-3-05, Pangsapuri Putra Raya, Jalan PP 32, Taman Pinggiran Putra, Seksyen 2, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 97200,
    "auctionDate": "6 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "689 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1zWv8SJ3uUncg8m5wYXsfjKgUiBvcAzNV&sz=w800"
    ]
  },
  {
    "id": "37",
    "title": "Service Apartment",
    "address": "Unit No. C-08-10, Block C, Residensi Amara, Jalan Raintree Utama, Taman Raintree, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 300000,
    "auctionDate": "7 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "857 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1PGPCvCNGL_SDWCXw7ciboiqABGaBzvsT&sz=w800"
    ]
  },
  {
    "id": "39",
    "title": "SOHO",
    "address": "Unit No. B-12-12, 12th Floor, Block B, Kiara Plaza, Jalan Semenyih, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 160000,
    "auctionDate": "7 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "476 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1M-Qg5BJ52E_--kKxvXKUFFpFDeFQsB1Q&sz=w800"
    ]
  },
  {
    "id": "43",
    "title": "Apartment",
    "address": "Unit No. 504, Pangsapuri Bukit Rawang Jaya 2, Jalan B.R.J.D/3, Taman Bukit Rawang Jaya 2, 48000 Rawang, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 38421,
    "auctionDate": "8 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "872 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1narX_aw2X7KCRB-Q0V_wxTB9bwEblt7k&sz=w800",
      "https://drive.google.com/thumbnail?id=1pYAP0Q1L0vDCYWGau422Pop1mEqIkUve&sz=w800"
    ]
  },
  {
    "id": "44",
    "title": "1 Storey Terrace House",
    "address": "No. 18, Jalan GU 1/3, Taman Garing Utama, 48000 Rawang, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 167670,
    "auctionDate": "8 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "098 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HWjKVPvuf4o5CaFxVs_pTTMB6-n_KBbe&sz=w800"
    ]
  },
  {
    "id": "45",
    "title": "2 Storey Terrace House",
    "address": "No. 6, Jalan HP 7/3, Hillpark 3, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 415530,
    "auctionDate": "8 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "727 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Jm1DKhdmj6pC3kKlAfmIe0eO_q0RM4n_&sz=w800"
    ]
  },
  {
    "id": "46",
    "title": "Apartment",
    "address": "Unit No. B-13-06, Pangsapuri Serunai, Jalan Astaka 2/KU02, Bandar Bukit Raja, 41050 Klang, Selangor",
    "postcode": "41050",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 247860,
    "auctionDate": "8 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "001 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1WzZPUttd1wfGFtzXa0GOCsDEtl4bqKsQ&sz=w800"
    ]
  },
  {
    "id": "48",
    "title": "Apartment",
    "address": "Unit No. 27-706, Jalan Selayang 27/27A, Taman Bunga Negara, Seksyen 27, 40400 Shah Alam, Selangor",
    "postcode": "40400",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 210600,
    "auctionDate": "8 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "742 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1BwoBvYc4M11sBqHfditM9CzO6XasBQnj&sz=w800"
    ]
  },
  {
    "id": "49",
    "title": "2 Storey Cluster House",
    "address": "No. 39, Jalan 17/46 (Jalan Keli 17/46), Seksyen 17, 40200 Shah Alam, Selangor",
    "postcode": "40200",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 243000,
    "auctionDate": "8 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "710 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1tTJnNjdhlrr16caF3jVS1u2Nu8PlXrWK&sz=w800"
    ]
  },
  {
    "id": "50",
    "title": "2 Storey Linked House",
    "address": "No. 13, Jalan Elektron U16/96C, Seksyen U16, Denai Alam, 40160 Shah Alam, Selangor",
    "postcode": "40160",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 765000,
    "auctionDate": "8 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "021 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1r54n3deFZ5QYOqyGXh33P-d9g6mxHK_w&sz=w800"
    ]
  },
  {
    "id": "51",
    "title": "2 Storey Terrace House",
    "address": "No. 10, Lorong Reko Jaya 3, Taman Reko Jaya, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 450000,
    "auctionDate": "8 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "996 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HSsV3aZBGr7iiDaiezWmwRJniI6pGee7&sz=w800"
    ]
  },
  {
    "id": "52",
    "title": "2 Storey Terrace House",
    "address": "No. 15, Jalan Platinum 7/49, Seksyen 7, 40000 Shah Alam, Selangor",
    "postcode": "40000",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 765000,
    "auctionDate": "8 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "251 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1DSHTsOFM9mmGWnjw7sqjS6TvNXRIu6qO&sz=w800"
    ]
  },
  {
    "id": "53",
    "title": "2.5 Storey Terrace House",
    "address": "No. 41 (PT 963), Jalan Belimbing Indah, Taman Belimbing Indah (D'Boulevard @ Bukit Belimbing), 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 891000,
    "auctionDate": "8 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "282 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1_BrRqh7bnDZxG7dcVHK0za6N27t4gikJ&sz=w800"
    ]
  },
  {
    "id": "54",
    "title": "1 Storey Terrace House",
    "address": "No. 12, Jalan Asa 4 (onsite Jalan Asa Jaya 4), Taman Asa Jaya, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 350000,
    "auctionDate": "8 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "927 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=15D9dwwTuQkkTq5ZfsEdJ_3-QQV81rRL4&sz=w800"
    ]
  },
  {
    "id": "55",
    "title": "Town House",
    "address": "Unit No. 18-U (Premises No. 18), Jalan DC 5/1, Desa Coalfields, 47000 Sungai Buloh, Selangor",
    "postcode": "47000",
    "state": "Selangor",
    "area": "Sungai Buloh",
    "reservePrice": 150000,
    "auctionDate": "8 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "764 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1ztCSTHq6KRDNqSHN4GYQLNtqhZxxM-Sq&sz=w800"
    ]
  },
  {
    "id": "56",
    "title": "Apartment",
    "address": "Unit No. 5-02, Tingkat 4, Villa Malawati, Seksyen 11, 45000 Kuala Selangor, Selangor",
    "postcode": "45000",
    "state": "Selangor",
    "area": "Kuala Selangor",
    "reservePrice": 160000,
    "auctionDate": "8 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "904 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1nozoZmgOceMGanDuonyFUfk-VHFsFIrq&sz=w800"
    ]
  },
  {
    "id": "57",
    "title": "Apartment",
    "address": "Unit No. A3-3-5, Block A3, Pelangi Court, Jalan Pekan Baru, 41300 Klang, Selangor",
    "postcode": "41300",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 243000,
    "auctionDate": "8 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "883 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=10rZlD6iTiBIEbGFyLGBC2xxjwQdv2wts&sz=w800"
    ]
  },
  {
    "id": "58",
    "title": "Apartment",
    "address": "Unit No. A-4-13, 4th Floor, Block A, Pangsapuri Kenanga, Jalan TBK 1/10, Taman Bukit Kinrara, 47100 Puchong, Selangor",
    "postcode": "47100",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 170000,
    "auctionDate": "8 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "775 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1OWQePnWarg3wwigAurlx1rpFnxQ7YYi5&sz=w800"
    ]
  },
  {
    "id": "59",
    "title": "Apartment",
    "address": "Unit No. 502, Block E4, Apartment Merak, Jalan Bukit Idaman 8, Taman Bukit Idaman, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 130000,
    "auctionDate": "8 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "603 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1j1BY65ImYR3YNHlzfdJQC_ZfCjpXjB8Y&sz=w800"
    ]
  },
  {
    "id": "60",
    "title": "Service Apartment",
    "address": "Maisson Residence, No. 6, Jalan PJU 1A/3, Ara Damansara, 47301 Petaling Jaya, Selangor",
    "postcode": "47301",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 415000,
    "auctionDate": "8 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "678 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1ulD5Ha3MpUtmAlCcBXiTpfioqVv_7Prv&sz=w800"
    ]
  },
  {
    "id": "61",
    "title": "2 Storey Terrace House",
    "address": "No. 26, Jalan Dahlia 2/7, Taman Dahlia, 43900 Sepang, Selangor",
    "postcode": "43900",
    "state": "Selangor",
    "area": "Sepang",
    "reservePrice": 430000,
    "auctionDate": "8 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1p6Q9diLG5hAPtV-vYQnpL8dttKl7fwdt&sz=w800"
    ]
  },
  {
    "id": "62",
    "title": "2 Storey Terrace House",
    "address": "No. 2, Jalan Kesuma 6/1J, Bandar Tasik Kesuma, 43700 Beranang, Selangor",
    "postcode": "43700",
    "state": "Selangor",
    "area": "Beranang",
    "reservePrice": 540000,
    "auctionDate": "8 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "745 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1GxcLcPSxi3AR4LOBInBtVk9qr_haqo-H&sz=w800"
    ]
  },
  {
    "id": "63",
    "title": "Condominium",
    "address": "Unit No. A2-15-05, Residensi Hijauan, Jalan Budiman 22/3, Seksyen 22, 40300 Shah Alam, Selangor",
    "postcode": "40300",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 378000,
    "auctionDate": "8 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "915 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1K38tptOTVIA9Qhmmu2U9cPhSu1NKXjW1&sz=w800"
    ]
  },
  {
    "id": "64",
    "title": "Condominium",
    "address": "Unit No. B-10-05, Menara Penaga, Jalan Ariza, Taman Raintree, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 320000,
    "auctionDate": "8 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "926 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1ft2KcunRgYPf9F_nW3HR0LWW2m84qpXo&sz=w800"
    ]
  },
  {
    "id": "65",
    "title": "Apartment",
    "address": "Unit No. E-1-13, Block E, Pangsapuri Sri Begonia, Jalan Puteri 7/15, Bandar Puteri, 47100 Puchong, Selangor",
    "postcode": "47100",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 145800,
    "auctionDate": "8 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "678 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1OCziNucPo7641hxMUj_m9FtekuRmHpFb&sz=w800"
    ]
  },
  {
    "id": "66",
    "title": "Apartment",
    "address": "Unit No. D-19-12, Blok D (Dahlia), Pelangi Damansara, Persiaran Surian, PJU 6, 47800 Petaling Jaya, Selangor",
    "postcode": "47800",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 320000,
    "auctionDate": "8 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "765 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xC6XuDL9sCh2o8ca095tstVTEDN97q52&sz=w800"
    ]
  },
  {
    "id": "67",
    "title": "Condominium",
    "address": "Unit No. 5A-506, Tingkat 5, Emerald Hill Condominium, Changkat Bukit Indah, Taman Bukit Indah, 68000 Ampang, Selangor",
    "postcode": "68000",
    "state": "Selangor",
    "area": "Ampang",
    "reservePrice": 220000,
    "auctionDate": "8 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "216 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=19-EW5Q5QuwM73fn9d4xp6Mqt6pkjcSsh&sz=w800"
    ]
  },
  {
    "id": "68",
    "title": "2 Storey Terrace House",
    "address": "No. 80, Jalan Kesuma 8/3F, Seksyen 8, Bandar Tasik Kesuma, 43700 Beranang, Selangor",
    "postcode": "43700",
    "state": "Selangor",
    "area": "Beranang",
    "reservePrice": 360000,
    "auctionDate": "8 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1GxcLcPSxi3AR4LOBInBtVk9qr_haqo-H&sz=w800"
    ]
  },
  {
    "id": "69",
    "title": "2 Storey Terrace House",
    "address": "No. 94, Jalan Serambi U8/32, Bukit Jelutong, Seksyen U8, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 912060,
    "auctionDate": "8 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "304 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d4TqkhQT0jqIdTsrgFBl_Y2r2rj6zRel&sz=w800"
    ]
  },
  {
    "id": "70",
    "title": "Flat",
    "address": "Unit No. A-4-11, Pangsapuri Rebana, Jalan Gamelan, Bandar Bukit Raja, 41050 Klang, Selangor",
    "postcode": "41050",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 144000,
    "auctionDate": "8 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "656 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1MMvo2a2opY8QRlHkiNoQHw4rNiF-gJTQ&sz=w800"
    ]
  },
  {
    "id": "71",
    "title": "3 Storey Terrace House",
    "address": "No. 11, Jalan DM 2, Taman Desa Mas, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 710000,
    "auctionDate": "8 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "496 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1FNxh2riou_DkZ79W_r1JKkMVV3KWKS10&sz=w800"
    ]
  },
  {
    "id": "72",
    "title": "2 Storey Terrace House",
    "address": "No.77, Jalan SS 2/74, 47300, Petaling Jaya, Selangor",
    "postcode": "47300",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 1000000,
    "auctionDate": "8 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "920 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Xbz8tnqFXT3Rg-TS4Al0EjnodL1Emtp_&sz=w800"
    ]
  },
  {
    "id": "73",
    "title": "3.5 Storey Detached House",
    "address": "No. 2, Jalan Elemen 3, Vila Elemen, Jalan Kelab Golf Sultan Abdul Aziz 13/6, 40100 Shah Alam, Selangor",
    "postcode": "40100",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 3900000,
    "auctionDate": "8 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "414 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1B6Iqfpy0XMGkvMAOnVNLoDkKmpMkOlUc&sz=w800"
    ]
  },
  {
    "id": "75",
    "title": "1 Storey Terrace House",
    "address": "No. 32, Jalan BSE 4/15, Bandar Seri Ehsan, 42700 Banting, Selangor",
    "postcode": "42700",
    "state": "Selangor",
    "area": "Banting",
    "reservePrice": 245000,
    "auctionDate": "8 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1wlHXySNh0joufOPhEOaJWeRW1WOq8V0H&sz=w800"
    ]
  },
  {
    "id": "76",
    "title": "1 Storey Terrace House",
    "address": "No. 4, Jalan Bukit Mewah 24, Taman Bukit Mewah, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 380000,
    "auctionDate": "8 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "300 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1dtt1hZKeGX4vtBa_W8wLkpYakjkhieDI&sz=w800"
    ]
  },
  {
    "id": "77",
    "title": "1 Storey Terrace House",
    "address": "No. 7, Lorong Permai 4G, Taman Pendamaran Permai, 42000 Klang, Selangor",
    "postcode": "42000",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 360000,
    "auctionDate": "8 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "810 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Sxss9jzQ7jK0fAa0H7K8GVc53ln48Nnk&sz=w800"
    ]
  },
  {
    "id": "78",
    "title": "Apartment",
    "address": "Unit No. E-404, Block E, Pangsapuri Ruby, Jalan Matahari U5/117, Seksyen U5, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 164070,
    "auctionDate": "8 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "012 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1gxyEIZ78friY-jFL9_JEf7vnV0aA0fCu&sz=w800"
    ]
  },
  {
    "id": "79",
    "title": "2 Storey Terrace House",
    "address": "No. 11, Jalan 3/16, Bandar Baru Selayang, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 422820,
    "auctionDate": "8 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "800 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=18-KlfViae6ESijJKLh7491ROX0PeZYaY&sz=w800"
    ]
  },
  {
    "id": "80",
    "title": "2 Storey Terrace House",
    "address": "No. 23, Jalan Akuatik 13/77, Seksyen 13, 40100 Shah Alam, Selangor",
    "postcode": "40100",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 1000000,
    "auctionDate": "8 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "238 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=106vlM-eqBtTwhcaO6Ii01OFCkVdyYy98&sz=w800"
    ]
  },
  {
    "id": "81",
    "title": "1 Storey Terrace House",
    "address": "No. 5, Jalan Samarinda 12, Taman Klang Indah, 41000 Klang, Selangor",
    "postcode": "41000",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 300000,
    "auctionDate": "8 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1o6myUEjBYKJqer8ak1sROXIEWiZl9kES&sz=w800"
    ]
  },
  {
    "id": "82",
    "title": "Apartment",
    "address": "Unit No. B-10-03, Block B, Impian Baiduri Apartment, No. 6, Jalan 22A, Section 51A, 46100 Petaling Jaya, Selangor",
    "postcode": "46100",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 150000,
    "auctionDate": "8 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "646 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1ieWtSixEhr0RWjhEH8fWoqqjWxgsTSk4&sz=w800"
    ]
  },
  {
    "id": "87",
    "title": "Office Unit",
    "address": "Unit No. C-01-07, Block C, Sfera Residensi, Jalan Atmosphere Utama 1, Bandar Putra Permai, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 1200000,
    "auctionDate": "8 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "823 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1d_kfRcAXQRY8mtdkkVFFJ0PzqQJFEcnB&sz=w800"
    ]
  },
  {
    "id": "88",
    "title": "SOHO",
    "address": "Unit No. 20-18, Residensi 280, 1KM Lebuhraya Selayang-Kepong, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 296000,
    "auctionDate": "8 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "840 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=10wSucDVtCeG_VDpidPhgey34RvBtWCkY&sz=w800",
      "https://drive.google.com/thumbnail?id=1Fx0ConyozHp-gmm8YAz2yJRGiJEBUzVO&sz=w800",
      "https://drive.google.com/thumbnail?id=1aDv--6Nn1zetM24n_hhRcBHxPIym15p_&sz=w800",
      "https://drive.google.com/thumbnail?id=1_CaXiRHgT8Zz9IfDv3gy8jwej3Z2uCDY&sz=w800"
    ]
  },
  {
    "id": "92",
    "title": "Desa Villa Condominium",
    "address": "Unit No. 24-5-2, Blok 24, Desa Villa Condominium, Jalan Bukit Desa 3, Taman Bukit Desa, 58100, Kuala Lumpur",
    "postcode": "58100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 450000,
    "auctionDate": "8 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "152 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1FoQ2NRDYQR8EWQOD-aMr2pdxZ-WVWLF6&sz=w800"
    ]
  },
  {
    "id": "93",
    "title": "2 Storey Terrace House",
    "address": "No. 21, Jalan Perdana 7/3, Taman Pandan Perdana, 55300, Kuala Lumpur",
    "postcode": "55300",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 630000,
    "auctionDate": "8 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "746 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1XSOCj1nMQH7ZFPbnpAfDUqoBGvm0eGlC&sz=w800"
    ]
  },
  {
    "id": "94",
    "title": "Condominium",
    "address": "Unit No. C-6-6, Vogue Tower C, Mont Kiara, Verve Suites, Jalan Kiara 5, Mont Kiara, 50480, Kuala Lumpur",
    "postcode": "50480",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 790000,
    "auctionDate": "8 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "926 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1x43Y7C1siSOZQhTSNrh0u-fFoO-JVa5D&sz=w800",
      "https://drive.google.com/thumbnail?id=1ky23AxpUhBl1TVY8L_46QDjfYv-63bvz&sz=w800",
      "https://drive.google.com/thumbnail?id=1IY7Y0y4oUljMwJxjGocwhvwc2zDeb8Pe&sz=w800",
      "https://drive.google.com/thumbnail?id=1q_SSsdgf8VNMCs6oX7qhKEYgcIYnl6ha&sz=w800"
    ]
  },
  {
    "id": "95",
    "title": "Condominium",
    "address": "Unit No. 12-5-2, Block 12, Prisma Cheras, Jalan Midah 8A, Taman Midah, 56000, Kuala Lumpur",
    "postcode": "56000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 270000,
    "auctionDate": "8 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "710 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=168DySu0n91J3iQhgvfTSHpAV-L5uNCxI&sz=w800"
    ]
  },
  {
    "id": "96",
    "title": "Office Lot",
    "address": "No. 16-5, Menara Permata Damansara, Jalan Damansara, 60000, Kuala Lumpur",
    "postcode": "60000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 860000,
    "auctionDate": "8 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "572 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1DzTvH7uDi99Q0vQrqaO2ov42sbmucEKp&sz=w800"
    ]
  },
  {
    "id": "100",
    "title": "Apartment",
    "address": "Unit No. B-5-19, Pangsapuri Sri Anggerik, Jalan Bandar Puchong Jaya, 47170 Puchong, Selangor",
    "postcode": "47170",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 153527.4,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "786 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1tLasfJpL-s11ootQcW15_qLzRm5PvLhF&sz=w800"
    ]
  },
  {
    "id": "101",
    "title": "Service Apartment",
    "address": "Unit No. A-11-08, Block A, Residensi Sutera 7, Jalan Sutera 1/2, Taman Sutera, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 197000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "850 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1y_Kgt4tKgM82qTRWsOYWVU3lFLEmAO4T&sz=w800"
    ]
  },
  {
    "id": "102",
    "title": "2 Storey Terrace House",
    "address": "No. 24, Jalan Putra Perdana 13/9, Taman Putra Perdana, 47100 Puchong, Selangor",
    "postcode": "47100",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 292000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "725 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1XpNLXtUBXgrbMu7rSPGKyuxUByCTUWVq&sz=w800"
    ]
  },
  {
    "id": "103",
    "title": "Apartment",
    "address": "Unit No. B-05-01, Block B, Impian Baiduri, No. 6, Jalan 224, Seksyen 51A, 46100 Petaling Jaya, Selangor",
    "postcode": "46100",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 108000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "646 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1ieWtSixEhr0RWjhEH8fWoqqjWxgsTSk4&sz=w800"
    ]
  },
  {
    "id": "104",
    "title": "Condominium",
    "address": "Unit No. A2-6-3A, Block A2, Green Acre Park Condominium, Jalan Sungai Long, Bandar Sungai Long, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 255000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "012 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=14Z3fWLTYnlnwL1A6F1ZiaPt7RuO6wgpw&sz=w800"
    ]
  },
  {
    "id": "105",
    "title": "Apartment",
    "address": "Unit No. A-17-04, Block A, Mentari Court, Jalan PJS 8/9, Taman Seri Mentari, 46150 Petaling Jaya, Selangor",
    "postcode": "46150",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 218700,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "775 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1h_S2rACsIrMiq1qCKRTOdLOAStNcGY3G&sz=w800",
      "https://drive.google.com/thumbnail?id=12oQsK8f57CUggSY2uULhpbZiWOkPljhK&sz=w800",
      "https://drive.google.com/thumbnail?id=1Fc7K631eA4l8L2baxe6XdbPbmY-Gng-7&sz=w800"
    ]
  },
  {
    "id": "106",
    "title": "Office Unit",
    "address": "Unit No. 133A, First Floor, Block 5, Laman Seri Business Park, No. 7, Persiaran Sukan, Seksyen 13, 40100 Shah Alam, Selangor",
    "postcode": "40100",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 467000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "593 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=13sSdhTlvXo0dZz4oh2xhl8-awNPAtthX&sz=w800"
    ]
  },
  {
    "id": "108",
    "title": "Office Unit",
    "address": "Unit No. 121, Block 3, Laman Seri Business Park, Persiaran Sukan, Seksyen 13, 40100 Shah Alam, Selangor",
    "postcode": "40100",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 437000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "593 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=13sSdhTlvXo0dZz4oh2xhl8-awNPAtthX&sz=w800"
    ]
  },
  {
    "id": "109",
    "title": "2 Storey Terrace House",
    "address": "No. 1, Jalan PH 4/1, Taman Puchong Hartamas, 47100 Puchong, Selangor",
    "postcode": "47100",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 632000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "465 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1q6jOJhV8PXHPotpe2-KJ0HEcke2Fqagv&sz=w800"
    ]
  },
  {
    "id": "110",
    "title": "3 Storey Detached House",
    "address": "Lot 71 (Blok J), Taman Rawang Perdana, 48000 Rawang, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 2500000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "213 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1-IvfyzdehZzMpI7-oPvC0ZICighe5cgv&sz=w800"
    ]
  },
  {
    "id": "111",
    "title": "3 Storey Terrace House",
    "address": "No. 42, Jalan Mirage 1, Mirage Perdana Lake View West, Cyber 7, 63000 Cyberjaya, Selangor",
    "postcode": "63000",
    "state": "Selangor",
    "area": "Cyberjaya",
    "reservePrice": 1620000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "274 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1IIbe0c81_zBE9VoCNRUMmH9v71w1UuHM&sz=w800"
    ]
  },
  {
    "id": "112",
    "title": "1 Storey Terrace House",
    "address": "No. 14, Lorong Murni 4, Taman Murni, 45500 Tanjung Karang, Selangor",
    "postcode": "45500",
    "state": "Selangor",
    "area": "Tanjung Karang",
    "reservePrice": 207000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "572 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1991veth9Dz1vWjz12x4KiDjNqLinW3lC&sz=w800"
    ]
  },
  {
    "id": "113",
    "title": "Small Office Flexible Office (SOFO)",
    "address": "Unit No. 12-22, Suria Jaya, Jalan Padang Jawa, Seksyen 16, 40200 Shah Alam, Selangor",
    "postcode": "40200",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 183708,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "420 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1uAoYjNFOTJTZDKUxxU-y7vu2sfa4Fr9i&sz=w800"
    ]
  },
  {
    "id": "114",
    "title": "3 Storey Terrace House",
    "address": "No. 14, Jalan MM 4, Taman Myra Meranti, 47120 Puchong, Selangor",
    "postcode": "47120",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 765000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "946 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1fE1g7qmAXHtqBfkTaN3HfUqwyiMvPA84&sz=w800"
    ]
  },
  {
    "id": "115",
    "title": "2 Storey Terrace House",
    "address": "No. 2, Jalan Saga SD 8/2, Bandar Sri Damansara, 52200 Petaling Jaya, Selangor",
    "postcode": "52200",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 900000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "650 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1MySchxaEd3FQKUne4eoeppugzznR-tXS&sz=w800"
    ]
  },
  {
    "id": "116",
    "title": "Condominium",
    "address": "Unit No. B-03-03, The Parque Residence (Kondominium Eco Santuari), Jalan Eco Santuari 3/1, Eco Santuari, 42500 Telok Panglima Garang, Selangor",
    "postcode": "42500",
    "state": "Selangor",
    "area": "Telok Panglima Garang",
    "reservePrice": 680000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "313 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1m0OiuTi69gTOUnOFVYK2OB9UMRl547GB&sz=w800"
    ]
  },
  {
    "id": "117",
    "title": "Service Apartment",
    "address": "Unit No. B-10-11, Blok B, Residensi Amara, Jalan Raintree Utama, Taman Raintree, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 325000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "861 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1PGPCvCNGL_SDWCXw7ciboiqABGaBzvsT&sz=w800"
    ]
  },
  {
    "id": "118",
    "title": "Flat",
    "address": "Unit No. E-4-13, Block E, Pangsapuri Rebana, Jalan Gamelan, 41050 Klang, Selangor",
    "postcode": "41050",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 108000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "657 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1MMvo2a2opY8QRlHkiNoQHw4rNiF-gJTQ&sz=w800"
    ]
  },
  {
    "id": "119",
    "title": "Service Apartment",
    "address": "Unit No. A-06-01, Block Asagi, Koi Tropika, Jalan Puchong, Batu 13 1/2, 47100 Puchong, Selangor",
    "postcode": "47100",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 300000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "023 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1ZMgF1rIL7csPb_ZeZR5i3JkjV41S3WXP&sz=w800"
    ]
  },
  {
    "id": "120",
    "title": "2 Storey Terrace House",
    "address": "No. 39, Jalan BBK 1/6, Bandar Baru Kundang, 48020 Kundang, Selangor",
    "postcode": "48020",
    "state": "Selangor",
    "area": "Kundang",
    "reservePrice": 370000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "564 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=17bdTe9N8-cuiIO38gSUu85khU1FAiytX&sz=w800"
    ]
  },
  {
    "id": "121",
    "title": "2 Storey Terrace House",
    "address": "No. 6, Jalan Orbit 2/6, Bandar Mahkota Banting, 42700 Banting, Selangor",
    "postcode": "42700",
    "state": "Selangor",
    "area": "Banting",
    "reservePrice": 490000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "990 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1aMpJ-OXEqtqDxYvgGK25JD3qFYvfqt-I&sz=w800"
    ]
  },
  {
    "id": "122",
    "title": "Service Apartment",
    "address": "Unit No. A-13-12, Block A, Renai Jelutong, No. 1, Jalan Bazar U8/100, Bukit Jelutong, Seksyen U8, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 560000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "055 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1vWQxbosAnKIM8UgD8cilji6vGNn5oSNH&sz=w800"
    ]
  },
  {
    "id": "123",
    "title": "Service Apartment",
    "address": "Unit No. H-10-18, BSP 21, Persiaran Saujana Putra Utama, Bandar Saujana Putra, 42610 Jenjarom, Selangor",
    "postcode": "42610",
    "state": "Selangor",
    "area": "Jenjarom",
    "reservePrice": 450000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "259 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1dPEQ9tNLC2tw29X8XafaXYwgR81npvCg&sz=w800",
      "https://drive.google.com/thumbnail?id=1nc5_ePLDBllaEzQwX5YPBBD4pv44l4zF&sz=w800",
      "https://drive.google.com/thumbnail?id=1fwJ6CQReslA4G9gI1BHJH-DTx0baGbYJ&sz=w800",
      "https://drive.google.com/thumbnail?id=11ordtfpvUYBcJLjA7Vhi5tZFWaNHGhMB&sz=w800"
    ]
  },
  {
    "id": "124",
    "title": "2 Storey Detached House",
    "address": "No. 2, Jalan Ukay Seraya 2, Taman Ukay Seraya, 68000 Ampang, Selangor",
    "postcode": "68000",
    "state": "Selangor",
    "area": "Ampang",
    "reservePrice": 3600000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "900 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1G-MfqZHX-wthnQpTZfp-AxDRlhpr3zT7&sz=w800"
    ]
  },
  {
    "id": "125",
    "title": "2 Storey Terrace House",
    "address": "No. 47, Jalan Gambus 13, Taman Desawan, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 243000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "829 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1foz1a8FcehIsY3_oVXw5i_0410HynSf-&sz=w800"
    ]
  },
  {
    "id": "126",
    "title": "2 Storey Terrace House",
    "address": "No. 77, Jalan GU 2/8, Taman Garing Utama, 48000 Rawang, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 283500,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "800 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HWjKVPvuf4o5CaFxVs_pTTMB6-n_KBbe&sz=w800"
    ]
  },
  {
    "id": "127",
    "title": "2 Storey Terrace House",
    "address": "No. 4, Jalan Kesuma 6/1J, Bandar Tasik Kesuma, 43700 Beranang, Selangor",
    "postcode": "43700",
    "state": "Selangor",
    "area": "Beranang",
    "reservePrice": 360000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1GxcLcPSxi3AR4LOBInBtVk9qr_haqo-H&sz=w800"
    ]
  },
  {
    "id": "128",
    "title": "Town House",
    "address": "Andari Townvilla, Jalan SH 2/1, Selayang Heights, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 450000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "732 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1PynqKvspVIaRuamQ8Dbry5nL8m4ckim2&sz=w800"
    ]
  },
  {
    "id": "129",
    "title": "2 Storey Semi Detached House",
    "address": "No. 1, Jalan LP 6/8, Taman Lestari Perdana, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 1863000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "222 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1k1W5yHRaDS4Xcq9c67CBb_kantbr6sKr&sz=w800"
    ]
  },
  {
    "id": "130",
    "title": "2 Storey Terrace House",
    "address": "No. 16, Jalan SR 1/1D, Saujana Rawang, 48000 Rawang, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 315000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "883 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1BsuGPs5OLTs5nMHzJcg1CsFgq3C25xr7&sz=w800"
    ]
  },
  {
    "id": "131",
    "title": "2 Storey Cluster House",
    "address": "No. 47, Jalan Setia Impian, U13/5G, Setia Alam, Seksyen U13, 40170 Shah Alam, Selangor",
    "postcode": "40170",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 846000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "637 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1ig-8AR_j3ForPwqPBunUUvdFwXk9trgM&sz=w800"
    ]
  },
  {
    "id": "132",
    "title": "2.5 Storey Semi Detached House",
    "address": "No. 5, Jalan BRP 5/4A, Bukit Rahman Putra, Seksyen U20, 40160 Shah Alam, Selangor",
    "postcode": "40160",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 1296000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "996 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1XbZwTarx1ypg2hC0GxdrMeehnj8gESBe&sz=w800"
    ]
  },
  {
    "id": "133",
    "title": "4 Storey Detached House",
    "address": "No. 20, Persiaran Nadayu 1A, Taman Nadayu, 53100 Hulu Kelang, Selangor",
    "postcode": "53100",
    "state": "Selangor",
    "area": "Hulu Kelang",
    "reservePrice": 3477330,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "024 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1o9h8Avtk3_0GusoKwGkAx2a1KJHKm-9P&sz=w800"
    ]
  },
  {
    "id": "143",
    "title": "2 Storey Terrace House",
    "address": "No. 27, Jalan Irama 1, Irama Perdana, LBS Alam Perdana, 42300 Bandar Puncak Alam, Selangor",
    "postcode": "42300",
    "state": "Selangor",
    "area": "Bandar Puncak Alam",
    "reservePrice": 660000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "486 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1m5iJV2IV_s1lgykwg-Xc0aA5gq37yTRk&sz=w800"
    ]
  },
  {
    "id": "145",
    "title": "2 Storey Terrace House",
    "address": "Jalan DC 3/19, Desa Coalfields, 47000 Sungai Buloh, Selangor",
    "postcode": "47000",
    "state": "Selangor",
    "area": "Sungai Buloh",
    "reservePrice": 450000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1ztCSTHq6KRDNqSHN4GYQLNtqhZxxM-Sq&sz=w800"
    ]
  },
  {
    "id": "146",
    "title": "2 Storey Terrace House",
    "address": "No. 45A, Jalan Puncak Saujana 5/2C, Taman Puncak Saujana, Seksyen 5, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 800000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "475 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HA7ob6kncprEsR3NMwNadmsece9q4psj&sz=w800"
    ]
  },
  {
    "id": "154",
    "title": "Service Apartment",
    "address": "Unit No. RS-38-03, Residential Suites Sunsuria Forum, Jalan Setia Dagang AL U13/AL, Seksyen U13, Setia Alam, 40170 Shah Alam, Selangor",
    "postcode": "40170",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 380000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "883 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1DGkvEzB7Ojc89F7OnObUmWNlYQcjUNNu&sz=w800",
      "https://drive.google.com/thumbnail?id=1EUM3-5Cpn_Q8uILhe9U0dd6VwAe4eKMC&sz=w800"
    ]
  },
  {
    "id": "157",
    "title": "Service Apartment",
    "address": "Unit No. B-26-10, Block B, Cormar Suites (Formerly known as Fraser Place), Lot No. 163, No. 10, Jalan Perak, 50250, Kuala Lumpur",
    "postcode": "50250",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 415530,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "614 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1l6x67SEVtKbi3KNBZPq9bnAqY5TcFI9D&sz=w800"
    ]
  },
  {
    "id": "158",
    "title": "Vacant Residential Detached Plot",
    "address": "Lot 35936, Jalan Jintan, Taman Supreme, 56100, Kuala Lumpur",
    "postcode": "35936",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 1085000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "318 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1kPTDn6TUgRMmY3bSzvjmee12Q16RRmno&sz=w800"
    ]
  },
  {
    "id": "159",
    "title": "Apartment",
    "address": "Unit No. A-10-9, Block A, Pangsapuri Kinrara Mas, No. 3, Jalan Mas 1, Kinrara Mas, 58200 Bukit Jalil, Kuala Lumpur",
    "postcode": "58200",
    "state": "Kuala Lumpur",
    "area": "Bukit Jalil",
    "reservePrice": 237000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "098 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1K_KR75R-48GLD-OhFovjBCGlf0BjK6gm&sz=w800"
    ]
  },
  {
    "id": "160",
    "title": "Sri Putramas II Condominium (Royal Domain)",
    "address": "Unit No. B1-22-06, Block B1, Sri Putramas II (Royal Domain), No. 1, Jalan Putramas, Off Jalan Kuching, 51200, Kuala Lumpur",
    "postcode": "51200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 364500,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "130 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1ZWhG2xyQrIwzTutQFkBr9t8dj4yrfxsA&sz=w800"
    ]
  },
  {
    "id": "161",
    "title": "Condominium",
    "address": "Unit No. 89-7-2, Damansara Villa, Jalan Bukit Ledang, Off Jalan Duta, 50480, Kuala Lumpur",
    "postcode": "50480",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 648000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "518 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1mQq3TxmQ6ag56Sr9nio2_gsTbFwofkFv&sz=w800"
    ]
  },
  {
    "id": "162",
    "title": "Service Apartment",
    "address": "Unit No. A-41-05, Menara Inspirasi, No. 30, Jalan 1/65A, Off Jalan Tun Razak, 50400, Kuala Lumpur",
    "postcode": "50400",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 940000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "345 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=14FNQvHVcu5h9xkpbE0-TLtF04qhC5UcO&sz=w800",
      "https://drive.google.com/thumbnail?id=14tlEA-NPEUSDJ5wg4qGYhFad0251Wivx&sz=w800",
      "https://drive.google.com/thumbnail?id=1wFBWABw6jcQxCCvstUpYmFDmdH252C4g&sz=w800"
    ]
  },
  {
    "id": "163",
    "title": "2 Storey Terrace House",
    "address": "No. 8, Jalan Bukit Setiawangsa 2, Taman Setiawangsa, 54200, Kuala Lumpur",
    "postcode": "54200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 693000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=19Sn8x3glrKykcWHDNnDaMmTPisndLuWs&sz=w800"
    ]
  },
  {
    "id": "164",
    "title": "2 Storey Terrace House",
    "address": "No. 12, Jalan 6/11, Taman Karak Utama, 68100, Kuala Lumpur",
    "postcode": "68100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 657000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "225 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1PyWuwl-Ro6rsYErz_XtJ_D0wtZsW7mcu&sz=w800"
    ]
  },
  {
    "id": "165",
    "title": "Service Apartment",
    "address": "Unit No. 19-09, Dorsett Residences Bukit Bintang, 172A, Jalan Imbi, Pudu, 55100, Kuala Lumpur",
    "postcode": "55100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 1278000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "012 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1dzgUvWQOLJMji8jvLIslEPepmntNAYMw&sz=w800"
    ]
  },
  {
    "id": "166",
    "title": "Apartment",
    "address": "Unit No. 08-01-29, Sri Langkawi 1, Block 8, Off Jalan Gombak, 53000, Kuala Lumpur",
    "postcode": "53000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 180000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "560 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1gL4yuWrCG4ebeiK8q1zeLEDk3RCKDEYf&sz=w800"
    ]
  },
  {
    "id": "167",
    "title": "Retail Lot",
    "address": "Unit No. 5-23, Kenanga Wholesale City, Jalan Gelugor, 55200, Kuala Lumpur",
    "postcode": "55200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 693000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "548 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1T2SCZKShk9Y4PCPQ_vpC_OTnoxPmDNOX&sz=w800",
      "https://drive.google.com/thumbnail?id=1NfE4fqlSgxhb37KvUrnkV9ZWkKMExZ0W&sz=w800",
      "https://drive.google.com/thumbnail?id=1u_vUr0FXQEBPBs7b0ieWkiEhSuwmY0t-&sz=w800"
    ]
  },
  {
    "id": "168",
    "title": "Service Apartment",
    "address": "Unit No. B-20-6, Northpoint (Condo), Blok B, Midvalley City, No. 1, Jalan Medan Syed Putra Utara, 59200, Kuala Lumpur",
    "postcode": "59200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 1800000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "637 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1CUgdDSw97YnqaDUv-3wrcQnMieNQGO22&sz=w800"
    ]
  },
  {
    "id": "169",
    "title": "2 Storey Linked House",
    "address": "No. 12, Lorong AU 4/17C, Taman Seri Keramat Tengah, 54200, Kuala Lumpur",
    "postcode": "54200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 657000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "647 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1pK5swEJzg5nwqjPjt6JjKN3FN2rXKhk0&sz=w800"
    ]
  },
  {
    "id": "170",
    "title": "Aman Satu Apartment",
    "address": "Unit No. AS1-12-G, Block 1, 12th Floor, Aman Satu Apartment, Jalan Puri, Desa Aman Puri, 52100 Kepong, Kuala Lumpur",
    "postcode": "52100",
    "state": "Kuala Lumpur",
    "area": "Kepong",
    "reservePrice": 207000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "840 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1R1I_sC_dhoO7GjSHr3b5wUZjdS3ZnasI&sz=w800"
    ]
  },
  {
    "id": "171",
    "title": "Apartment",
    "address": "Unit No. A-10-07, Tiffani Kiara, No. 1, Changkat Duta Kiara, Mont Kiara 50480, Kuala Lumpur",
    "postcode": "50480",
    "state": "Kuala Lumpur",
    "area": "Mont Kiara",
    "reservePrice": 1150000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "239 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1fnaZ5BVeGheRmdyw1xBGHeyGCPfVjC4C&sz=w800"
    ]
  },
  {
    "id": "172",
    "title": "2.5 Storey Detached House",
    "address": "Lot 28813, Jalan Puncak Setiawangsa 2, Taman Setiawangsa, 54200, Kuala Lumpur",
    "postcode": "28813",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 4341600,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "747 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=19Sn8x3glrKykcWHDNnDaMmTPisndLuWs&sz=w800"
    ]
  },
  {
    "id": "173",
    "title": "Service Apartment",
    "address": "Unit No. B-25-02, Residensi PV 21, Jalan Usahawan 2, Off Jalan Genting Klang, Setapak, 53200, Kuala Lumpur",
    "postcode": "53200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 460000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "313 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1IzZMUkgYbE9lHtCmy6ahEbYzbr0e-2Uq&sz=w800"
    ]
  },
  {
    "id": "174",
    "title": "Semi Detached Plot @ Pantai Prima, Bangsar South",
    "address": "Lot 56095, Along Lorong Pantai Prima, 59200, Kuala Lumpur",
    "postcode": "56095",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 805691,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "500 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1EuHIe6vMt7z0CxmY8Ve9yyOhqsTw-x1j&sz=w800"
    ]
  },
  {
    "id": "175",
    "title": "Condominium",
    "address": "Unit No. R2-2-4, Pandan Puteri, Jalan Pandan Indah 6/10, Pandan Indah, 55100, Kuala Lumpur",
    "postcode": "55100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 440000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "022 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1iGWd5mFjNG5cnT0leCcLZeMvn_1QfnZX&sz=w800"
    ]
  },
  {
    "id": "176",
    "title": "Duplex Apartment",
    "address": "Unit No. BD-B-21, Inai Deluxe, Jalan Pandan Indah 4/14C, Pandan Indah, 55100, Kuala Lumpur",
    "postcode": "55100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 243000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "883 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Xmyi_taud5k9gSuY9ZwgUBRMInFvUtCJ&sz=w800"
    ]
  },
  {
    "id": "177",
    "title": "SOHO (Small Office Home Office)",
    "address": "Unit No. B-18-32, Tower B, The Scott Garden SOHO, Kompleks Rimbun Scott, No. 289, Jalan Klang Lama, 58000, Kuala Lumpur",
    "postcode": "58000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 315000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "764 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1dNwuAer5WlHLQcmQwxfssPhUYgoR0s87&sz=w800"
    ]
  },
  {
    "id": "178",
    "title": "Apartment",
    "address": "Unit No. C-3-25, Block C, Jalan Aman Putra, Taman Aman Putra, 52000, Kuala Lumpur",
    "postcode": "52000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 139000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "721 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Mc0rJ7QzBdnOtDhEWlIlRLwKkN4tXNbK&sz=w800"
    ]
  },
  {
    "id": "179",
    "title": "Apartment",
    "address": "Unit No. 204, 1st Floor, Block B9, Jalan 6/27A, Bandar Baru Wangsa Maju, Seksyen 4, 53300 Setapak, Kuala Lumpur",
    "postcode": "53300",
    "state": "Kuala Lumpur",
    "area": "Setapak",
    "reservePrice": 190000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "527 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1i1wDCPX-_8cjjKRzgWxpyI9WAcwgy3B5&sz=w800"
    ]
  },
  {
    "id": "180",
    "title": "Shop",
    "address": "Unit No. 5.18, Imbi Plaza, Jalan Imbi, 55100, Kuala Lumpur",
    "postcode": "55100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 600000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "679 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1_k3aPmcUHDBnm3K1ey1WruwaBC5IETFN&sz=w800"
    ]
  },
  {
    "id": "181",
    "title": "Condominium",
    "address": "Block B, Araville Condominium, No. 22, Jalan Kapas, Bukit Bandaraya, 59100, Kuala Lumpur",
    "postcode": "59100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 1350000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "066 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1uGcvioGGOI8XzOwFqbTXWnr4SdrNrs9k&sz=w800"
    ]
  },
  {
    "id": "182",
    "title": "Villa Angsana Condominium",
    "address": "Unit No. C-21-1, Block C, Villa Angsana Condominium, No. 56, Jalan Krian, Taman Rainbow, 51100, Kuala Lumpur",
    "postcode": "51100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 329000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "324 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1f_MzjYvTMRRhWl_j1KqNUr7svjL1lS3R&sz=w800",
      "https://drive.google.com/thumbnail?id=1MYJigu6DNAejJH3pZK5eR-3LeV6vs_wy&sz=w800",
      "https://drive.google.com/thumbnail?id=1I5bMmFbySUhA5tBNvYish3sdE195yiwZ&sz=w800",
      "https://drive.google.com/thumbnail?id=1_QE8U-MaXmNt_XKCfQQTqdPCPanwr-gW&sz=w800"
    ]
  },
  {
    "id": "183",
    "title": "Serviced Apartment",
    "address": "Unit No. 23-03, Residensi Kamar Putra (Chambers Residence), No. 2A, Jalan Ipoh Kecil, 50350, Kuala Lumpur",
    "postcode": "50350",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 585000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "883 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1vd7b7839Hyk3tUoAUvfUydUT46YuxeAo&sz=w800"
    ]
  },
  {
    "id": "184",
    "title": "SOHO Duplex",
    "address": "Unit No. C-22-27, Block C, The Scott Garden, Kompleks Rimbun Scott Garden, No. 289, Jalan Klang Lama, 58000, Kuala Lumpur",
    "postcode": "58000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 283500,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "764 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1dNwuAer5WlHLQcmQwxfssPhUYgoR0s87&sz=w800"
    ]
  },
  {
    "id": "185",
    "title": "Apartment",
    "address": "Unit No. 11-3-1, Lorong 4/92B, Jalan Cheras, Taman Kobena, 56100, Kuala Lumpur",
    "postcode": "56100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 230000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "969 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1vPvfpNkfX5nvM4XBc7o95QSkQAmC2j2S&sz=w800"
    ]
  },
  {
    "id": "186",
    "title": "2 Storey Shop Office",
    "address": "Unit No. 1, Jalan Jinjang Aman 16 (Jalan 2/15), Jinjang Utara, 52000, Kuala Lumpur",
    "postcode": "52000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 1935495,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "477 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=12zZt-ayFQ2PucoYZvWtnOKELuLiddEaN&sz=w800"
    ]
  },
  {
    "id": "187",
    "title": "Shop Lot",
    "address": "Unit No. 05-81, Tingkat 5, Berjaya Times Square, No. 1, Jalan Imbi, 55100, Kuala Lumpur",
    "postcode": "55100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 792000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "409 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1MMm1GP1gx67TuH-WrQLONllkF3-wDBYz&sz=w800"
    ]
  },
  {
    "id": "188",
    "title": "Apartment",
    "address": "Unit No. 6-2-7, 2nd Floor, Block 6, Menara Seri Cengal, Jalan 27/56, Ampang Ulu Klang, 54200, Kuala Lumpur",
    "postcode": "54200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 182250,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "872 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1abPaxKX3ZUK59IHAvz1RtCv1wsEz-wBc&sz=w800"
    ]
  },
  {
    "id": "189",
    "title": "Apartment",
    "address": "Unit No. B-6-5, Cheras Ria, Blok B, Jalan 6/95B, Taman Cheras Utama, Off Jalan Ketumbar, 56100, Kuala Lumpur",
    "postcode": "56100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 105300,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "570 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1ZfhwVvUPscENUmjjasYmIHurQjjKjGUI&sz=w800"
    ]
  },
  {
    "id": "190",
    "title": "2 Storey Cluster House",
    "address": "No. 40F, Jalan Rejang 7, Taman Setapak Jaya, 53300, Kuala Lumpur",
    "postcode": "53300",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 190000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "549 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1OVK-hMzLWq0Ix2Y7wuVzxlmvmB2K5DEs&sz=w800"
    ]
  },
  {
    "id": "191",
    "title": "Office Lot",
    "address": "Unit No. L12A-17, Wangsa 118, No. 8, Jalan Wangsa Delima, Wangsa Maju 53300, Kuala Lumpur",
    "postcode": "53300",
    "state": "Kuala Lumpur",
    "area": "Wangsa Maju",
    "reservePrice": 380000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "850 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1YkJ5q_-1yCeFvDF-1s_smlQxH6rgIb0s&sz=w800"
    ]
  },
  {
    "id": "192",
    "title": "Service Apartment",
    "address": "Unit No. A1-10-3A, Block A1, Parklane OUG Service Apartment, No. 1, Jalan 1/52, Taman OUG Parklane, 58200, Kuala Lumpur",
    "postcode": "58200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 237600,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "958 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=14uwE6LW-c5VlVCjCoMUEohkYo8MhTIBP&sz=w800",
      "https://drive.google.com/thumbnail?id=1IvGs39bwau3xPXX0d75-6qmo-9vBgTll&sz=w800"
    ]
  },
  {
    "id": "193",
    "title": "Service Apartment",
    "address": "Unit No. A2-28-3A, Parklane OUG Service Apartment, Blok A2, No. 1, Jalan 1/152, Taman OUG Parklane, 58200, Kuala Lumpur",
    "postcode": "58200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 240000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "958 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=14uwE6LW-c5VlVCjCoMUEohkYo8MhTIBP&sz=w800",
      "https://drive.google.com/thumbnail?id=1IvGs39bwau3xPXX0d75-6qmo-9vBgTll&sz=w800"
    ]
  },
  {
    "id": "194",
    "title": "Service Apartment",
    "address": "Unit No. B1-20-7, Block B1, Parklane OUG Service Apartment, No. 1, Jalan 1/52, Taman OUG Parklane, 58200, Kuala Lumpur",
    "postcode": "58200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 264000,
    "auctionDate": "9 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "958 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=14uwE6LW-c5VlVCjCoMUEohkYo8MhTIBP&sz=w800",
      "https://drive.google.com/thumbnail?id=1IvGs39bwau3xPXX0d75-6qmo-9vBgTll&sz=w800"
    ]
  },
  {
    "id": "210",
    "title": "Apartment",
    "address": "Unit No. D-13-01, Block D (Dahlia), Pelangi Damansara, PJU 6, Persiaran Surian, 47800 Petaling Jaya, Selangor",
    "postcode": "47800",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 280000,
    "auctionDate": "13 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "764 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xC6XuDL9sCh2o8ca095tstVTEDN97q52&sz=w800"
    ]
  },
  {
    "id": "214",
    "title": "3.5 Storey Bungalow",
    "address": "No. 3, Vila Elemen, Jalan Elemen 3, Seksyen 13, 40100 Shah Alam, Selangor",
    "postcode": "40100",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 2430000,
    "auctionDate": "13 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "499 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1B6Iqfpy0XMGkvMAOnVNLoDkKmpMkOlUc&sz=w800"
    ]
  },
  {
    "id": "226",
    "title": "2 Storey Terrace House",
    "address": "No. 33, Jalan Setia Impian U13/3P, Setia Alam, Seksyen U13, 40170 Shah Alam, Selangor",
    "postcode": "40170",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 610000,
    "auctionDate": "13 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "300 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1ig-8AR_j3ForPwqPBunUUvdFwXk9trgM&sz=w800"
    ]
  },
  {
    "id": "234",
    "title": "Apartment",
    "address": "Unit No. M2-3-19, Pangsapuri Merak, Jalan Uranus U5/125, Seksyen U5, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 196830,
    "auctionDate": "13 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "861 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1j1BY65ImYR3YNHlzfdJQC_ZfCjpXjB8Y&sz=w800"
    ]
  },
  {
    "id": "237",
    "title": "Apartment",
    "address": "Unit No. 201, Blok 1, Flat PKNS Bangi, Jalan 6C/11, Seksyen 16, 43600 Bandar Baru Bangi, Selangor",
    "postcode": "43600",
    "state": "Selangor",
    "area": "Bandar Baru Bangi",
    "reservePrice": 145000,
    "auctionDate": "13 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "667 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1bouvmAtRVTpxtY-VEVeUOZ6shbJAmrQA&sz=w800"
    ]
  },
  {
    "id": "245",
    "title": "Apartment",
    "address": "Unit No. 1-3-11, Block 1, Kondominium Puncak Seri Kelana, Jalan PJU 1A/46, 47301 Petaling Jaya, Selangor",
    "postcode": "47301",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 260820,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "259 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1lxlO7kq8ogC3l-BbenV-dfXfWM1_bjxs&sz=w800",
      "https://drive.google.com/thumbnail?id=1mvoELJW_dFhplQP11jE5XCUAKqADuHZQ&sz=w800",
      "https://drive.google.com/thumbnail?id=1VWW2Z_YG8eluaen4s9MudyeKJad6FXQZ&sz=w800"
    ]
  },
  {
    "id": "256",
    "title": "2 Storey Terrace House",
    "address": "Jalan Megah 16, Taman Megah Cheras, 43200 Cheras, Selangor",
    "postcode": "43200",
    "state": "Selangor",
    "area": "Cheras",
    "reservePrice": 550000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "627 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1QuDJQLlkt1lXIHb4AajzhaJCt0qknOJ8&sz=w800"
    ]
  },
  {
    "id": "261",
    "title": "1 Storey Terrace House",
    "address": "Premises No. 1, Jalan GU 1/6, Taman Garing Utama, 48000 Rawang, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 315000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "758 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HWjKVPvuf4o5CaFxVs_pTTMB6-n_KBbe&sz=w800"
    ]
  },
  {
    "id": "265",
    "title": "Service Apartment",
    "address": "Unit No. B-20-2, Pangsapuri Suria Perdana, Taman Serdang Perdana Sek 4, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 300000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1qxB-foyWgwSb5Jq7gTW3Sy0ytaYXF3iB&sz=w800",
      "https://drive.google.com/thumbnail?id=1yTHAP2__Su0yHx4hfHrDOUD0mTjF12vJ&sz=w800",
      "https://drive.google.com/thumbnail?id=1VZ-VvQdzi8H6F3DoKGRmln0JmOL3sNSj&sz=w800"
    ]
  },
  {
    "id": "267",
    "title": "Apartment",
    "address": "Unit No. E-15-19, Blok E, Mentari Court, Jalan PJS 8/9, Taman Seri Mentari, 46150 Petaling Jaya, Selangor",
    "postcode": "46150",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 250000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "775 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1h_S2rACsIrMiq1qCKRTOdLOAStNcGY3G&sz=w800",
      "https://drive.google.com/thumbnail?id=12oQsK8f57CUggSY2uULhpbZiWOkPljhK&sz=w800",
      "https://drive.google.com/thumbnail?id=1Fc7K631eA4l8L2baxe6XdbPbmY-Gng-7&sz=w800"
    ]
  },
  {
    "id": "268",
    "title": "Apartment",
    "address": "Unit No. B-16-18, Blok B, Mentari Court, Jalan PJS 8/9, Taman Seri Mentari, 46150 Petaling Jaya, Selangor",
    "postcode": "46150",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 300000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "775 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1h_S2rACsIrMiq1qCKRTOdLOAStNcGY3G&sz=w800",
      "https://drive.google.com/thumbnail?id=12oQsK8f57CUggSY2uULhpbZiWOkPljhK&sz=w800",
      "https://drive.google.com/thumbnail?id=1Fc7K631eA4l8L2baxe6XdbPbmY-Gng-7&sz=w800"
    ]
  },
  {
    "id": "269",
    "title": "2 Storey Terrace House",
    "address": "No. 8, Jalan Elektron U16/81A, Denai Alam, Seksyen U16, 40160 Shah Alam, Selangor",
    "postcode": "40160",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 738000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "765 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1r54n3deFZ5QYOqyGXh33P-d9g6mxHK_w&sz=w800"
    ]
  },
  {
    "id": "280",
    "title": "2 Storey Terrace House",
    "address": "No. 30, Jalan Mahagoni 1B/5, Section 4, Bandar Utama Batang Kali, 44300 Batang Kali, Selangor",
    "postcode": "44300",
    "state": "Selangor",
    "area": "Batang Kali",
    "reservePrice": 480000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "981 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1is-Yenwxk-NKCzNXWD17WqwZJ-ekgFll&sz=w800"
    ]
  },
  {
    "id": "281",
    "title": "SOHO",
    "address": "Unit No. A-18-02, Block A, The Scott Garden (Kompleks Rimbun Scott), No. 289, Jalan Klang Lama, 58000, Kuala Lumpur",
    "postcode": "58000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 257000,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "872 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1dNwuAer5WlHLQcmQwxfssPhUYgoR0s87&sz=w800"
    ]
  },
  {
    "id": "282",
    "title": "Apartment",
    "address": "Unit No. B3-41-09, Residensi PR1MA Alam Damai, Persiaran Bestari, Alam Damai, 56000, Kuala Lumpur",
    "postcode": "56000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 269700,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "990 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1cVC8feyuqT6bv3Ox9QQj3N_olhUPIDJ2&sz=w800",
      "https://drive.google.com/thumbnail?id=1i749Y7s8vbPefO4V5bIrhwaAKXozEVxN&sz=w800",
      "https://drive.google.com/thumbnail?id=1jt5SYVwwSojpMmUBpFfI8kTCqDk6txCH&sz=w800"
    ]
  },
  {
    "id": "295",
    "title": "Shop Office",
    "address": "Unit No. S-1-53, The Scott Garden (Kompleks Rimbun Scott), 289, Jalan Kelang Lama, 58000, Kuala Lumpur",
    "postcode": "58000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 583200,
    "auctionDate": "14 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "668 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1dNwuAer5WlHLQcmQwxfssPhUYgoR0s87&sz=w800"
    ]
  },
  {
    "id": "308",
    "title": "Condominium",
    "address": "Unit No. A1-3-1, Block A1, Green Acre Park Condominium, Bandar Sungai Long, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 310000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "012 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=14Z3fWLTYnlnwL1A6F1ZiaPt7RuO6wgpw&sz=w800"
    ]
  },
  {
    "id": "309",
    "title": "Condominium",
    "address": "Unit No. A1-3-3, Cyberia Smarthomes A Cyberia, Cyber 11, 63000 Cyberjaya, Selangor",
    "postcode": "63000",
    "state": "Selangor",
    "area": "Cyberjaya",
    "reservePrice": 207000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "001 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Y7g1YmeesvTNGKUbNlxhud-Wl6LPPrZu&sz=w800"
    ]
  },
  {
    "id": "310",
    "title": "Condominium",
    "address": "Unit No. A-11-03, Blok A, Jalan KPB 18, Windows On The Park, Bandar Tun Hussein Onn, 43200 Cheras, Selangor",
    "postcode": "43200",
    "state": "Selangor",
    "area": "Cheras",
    "reservePrice": 780000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "024 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=18xTLwokTZneTpnMY1ggs1krLFmXu1D9b&sz=w800",
      "https://drive.google.com/thumbnail?id=18kvOVJ2dILniamRA-TWN6bNaYJ-ZGykY&sz=w800"
    ]
  },
  {
    "id": "314",
    "title": "2 Storey Terrace House",
    "address": "No. 1, Jalan SP 6/3, Seri Pristana, 47000 Sungai Buloh, Selangor",
    "postcode": "47000",
    "state": "Selangor",
    "area": "Sungai Buloh",
    "reservePrice": 472000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "316 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1NNyuAvX3LsjGXZBFi-gRK213cM1Inzpu&sz=w800"
    ]
  },
  {
    "id": "317",
    "title": "Condominium",
    "address": "Unit No. D-13A-02, Block D-Liana 2, Residensi Vyne Sungai Besi, No. 8, Jalan 1/108D, Sungai Besi, 57100, Kuala Lumpur",
    "postcode": "57100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 520000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "087 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1_0sTXy7Ntsa2-53TVXq9bYYr4SM3jGI7&sz=w800",
      "https://drive.google.com/thumbnail?id=12c67SL_L8VKgeyFXBpmTG4HJEMa59EO4&sz=w800"
    ]
  },
  {
    "id": "320",
    "title": "Apartment",
    "address": "Unit No. D-23A-05, Residensi Vyne, Jalan 1/108D, Sungai Besi, 57100, Kuala Lumpur",
    "postcode": "57100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 510300,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "237 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1_0sTXy7Ntsa2-53TVXq9bYYr4SM3jGI7&sz=w800",
      "https://drive.google.com/thumbnail?id=12c67SL_L8VKgeyFXBpmTG4HJEMa59EO4&sz=w800"
    ]
  },
  {
    "id": "321",
    "title": "Service Apartment",
    "address": "Vogue Tower C, Mont' Kiara Verve Suites, No. 8, Jalan Kiara 5, Mont Kiara, 50480, Kuala Lumpur",
    "postcode": "50480",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 700000,
    "auctionDate": "15 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "926 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1x43Y7C1siSOZQhTSNrh0u-fFoO-JVa5D&sz=w800",
      "https://drive.google.com/thumbnail?id=1ky23AxpUhBl1TVY8L_46QDjfYv-63bvz&sz=w800",
      "https://drive.google.com/thumbnail?id=1IY7Y0y4oUljMwJxjGocwhvwc2zDeb8Pe&sz=w800",
      "https://drive.google.com/thumbnail?id=1q_SSsdgf8VNMCs6oX7qhKEYgcIYnl6ha&sz=w800"
    ]
  },
  {
    "id": "333",
    "title": "Apartment",
    "address": "Unit No. 2-6-2, Block 2, Pangsapuri Seroja, No. 2, Jalan Setia Murni U13/50, Setia Alam, Seksyen U13, 40170 Shah Alam, Selangor",
    "postcode": "40170",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 114000,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "667 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=12j2EGNvLei6cx_gOuwmLXGyoQ_z9v99s&sz=w800"
    ]
  },
  {
    "id": "337",
    "title": "2 Storey Terrace House",
    "address": "No. 38, Jalan Pending 7, Bandar Puteri, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 486000,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "173 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1I5nasFaqK43b091QviHNjiPxEBLKGMws&sz=w800"
    ]
  },
  {
    "id": "342",
    "title": "2 Storey Terrace House",
    "address": "No. 17, Jalan LEP 6/31, Taman Lestari Putra, Bandar Putra Permai, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 576000,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "956 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1k1W5yHRaDS4Xcq9c67CBb_kantbr6sKr&sz=w800"
    ]
  },
  {
    "id": "343",
    "title": "Apartment",
    "address": "Unit No. A-17-05, Block A, Mentari Court, Jalan PJS 8/9, Taman Seri Mentari, 46150 Petaling Jaya, Selangor",
    "postcode": "46150",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 226800,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "775 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1h_S2rACsIrMiq1qCKRTOdLOAStNcGY3G&sz=w800",
      "https://drive.google.com/thumbnail?id=12oQsK8f57CUggSY2uULhpbZiWOkPljhK&sz=w800",
      "https://drive.google.com/thumbnail?id=1Fc7K631eA4l8L2baxe6XdbPbmY-Gng-7&sz=w800"
    ]
  },
  {
    "id": "347",
    "title": "Flat",
    "address": "Unit No. B10-1-20, Block 10, Jalan PJS 2B/1, Desa Mentari 2, 46150 Petaling Jaya, Selangor",
    "postcode": "46150",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 160000,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "657 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1QVQstc1-g2zezqgIPufuYK7AU_8z_sCW&sz=w800",
      "https://drive.google.com/thumbnail?id=1j08NUOv9yr1IrDPilCk06A86y7dssHFm&sz=w800"
    ]
  },
  {
    "id": "357",
    "title": "1 Storey Terrace House",
    "address": "No. 21, Lorong Permai 5D, Taman Pandamaran Permai, 42000 Klang (42000 Pelabuhan Klang), Selangor",
    "postcode": "42000",
    "state": "Selangor",
    "area": "Klang ( Pelabuhan Klang)",
    "reservePrice": 400000,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "868 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Sxss9jzQ7jK0fAa0H7K8GVc53ln48Nnk&sz=w800"
    ]
  },
  {
    "id": "369",
    "title": "Condominium",
    "address": "Unit No. A-05-08, Block A, Residensi Sembilan Cheras, Jalan Suria Residen, 43200 Cheras, Selangor",
    "postcode": "43200",
    "state": "Selangor",
    "area": "Cheras",
    "reservePrice": 670000,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "496 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Yxyn3IrlYKNyS5e0y26jVGWAgBrbEZjU&sz=w800",
      "https://drive.google.com/thumbnail?id=16Kn0UKyx3QdC7gsbyG-vaKPUUuO-2bq9&sz=w800"
    ]
  },
  {
    "id": "373",
    "title": "Duplex Service Apartment",
    "address": "Unit No. A-43-06, 43rd Floor, Menara Inspirasi (Expressionz Professional Suites @ Tun Razak), No. 30, Jalan 1/65A, Off Jalan Tun Razak, 50400, Kuala Lumpur",
    "postcode": "50400",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 777600,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "410 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=14FNQvHVcu5h9xkpbE0-TLtF04qhC5UcO&sz=w800",
      "https://drive.google.com/thumbnail?id=14tlEA-NPEUSDJ5wg4qGYhFad0251Wivx&sz=w800",
      "https://drive.google.com/thumbnail?id=1wFBWABw6jcQxCCvstUpYmFDmdH252C4g&sz=w800"
    ]
  },
  {
    "id": "377",
    "title": "Apartment",
    "address": "Unit No. B4-08-02, Residensi PR1MA Alam Damai, Persiaran Bistari, Alam Damai, 56000, Kuala Lumpur",
    "postcode": "56000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 284000,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "936 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1cVC8feyuqT6bv3Ox9QQj3N_olhUPIDJ2&sz=w800",
      "https://drive.google.com/thumbnail?id=1i749Y7s8vbPefO4V5bIrhwaAKXozEVxN&sz=w800",
      "https://drive.google.com/thumbnail?id=1jt5SYVwwSojpMmUBpFfI8kTCqDk6txCH&sz=w800"
    ]
  },
  {
    "id": "379",
    "title": "Condominium",
    "address": "Unit No. B1-15-3A, Blok B1, Sri Putramas II, Jalan Putramas, Off Jalan Kuching, 51200, Kuala Lumpur",
    "postcode": "51200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 432000,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "280 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1ZWhG2xyQrIwzTutQFkBr9t8dj4yrfxsA&sz=w800"
    ]
  },
  {
    "id": "390",
    "title": "11 Parcels of Residental Terrace Lots",
    "address": "Lot 43227 - 43237, Off Jalan 4/98, Taman Supreme, 56100, Kuala Lumpur",
    "postcode": "43227",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 2520000,
    "auctionDate": "16 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "872 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1kPTDn6TUgRMmY3bSzvjmee12Q16RRmno&sz=w800"
    ]
  },
  {
    "id": "399",
    "title": "3 Storey Terrace Shop Office",
    "address": "Premises No. 28, Jalan MR 1/3, M-Residensi Galleria, 48020 Rawang, Selangor",
    "postcode": "48020",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 1312200,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "760 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Tk-KpFs1kKGp9pO9ENDye_fS-K3mDkUY&sz=w800"
    ]
  },
  {
    "id": "405",
    "title": "Condominium",
    "address": "Unit No. A-03A-05, 4th Floor, Block A, Residensi Sembilan Cheras, Jalan Suria Residen, 43200 Cheras, Selangor",
    "postcode": "43200",
    "state": "Selangor",
    "area": "Cheras",
    "reservePrice": 520000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "119 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Yxyn3IrlYKNyS5e0y26jVGWAgBrbEZjU&sz=w800",
      "https://drive.google.com/thumbnail?id=16Kn0UKyx3QdC7gsbyG-vaKPUUuO-2bq9&sz=w800"
    ]
  },
  {
    "id": "407",
    "title": "Apartment",
    "address": "No. G-11-04, Blok G, (On Site Is No. G-11-4, Tower G), Mentari Court, Jalan PJS 8/9, Taman Seri Mentari, 46150 Petaling Jaya, Selangor",
    "postcode": "46150",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 225000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "775 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1h_S2rACsIrMiq1qCKRTOdLOAStNcGY3G&sz=w800",
      "https://drive.google.com/thumbnail?id=12oQsK8f57CUggSY2uULhpbZiWOkPljhK&sz=w800",
      "https://drive.google.com/thumbnail?id=1Fc7K631eA4l8L2baxe6XdbPbmY-Gng-7&sz=w800"
    ]
  },
  {
    "id": "414",
    "title": "Duplex Office Unit (SOHO)",
    "address": "Unit No. A-20-31, The Scott Garden (Kompleks Rimbun Scott), No. 289, Jalan Kelang Lama, 58100, Kuala Lumpur",
    "postcode": "58100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 300000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "764 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1dNwuAer5WlHLQcmQwxfssPhUYgoR0s87&sz=w800"
    ]
  },
  {
    "id": "415",
    "title": "Condominium",
    "address": "Unit No. A-7-1, Kondominium Villa Angsana (Block A), Jalan Krian, Taman Rainbow, 51100, Kuala Lumpur",
    "postcode": "51100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 288800,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "324 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1f_MzjYvTMRRhWl_j1KqNUr7svjL1lS3R&sz=w800",
      "https://drive.google.com/thumbnail?id=1MYJigu6DNAejJH3pZK5eR-3LeV6vs_wy&sz=w800",
      "https://drive.google.com/thumbnail?id=1I5bMmFbySUhA5tBNvYish3sdE195yiwZ&sz=w800",
      "https://drive.google.com/thumbnail?id=1_QE8U-MaXmNt_XKCfQQTqdPCPanwr-gW&sz=w800"
    ]
  },
  {
    "id": "416",
    "title": "Small Office Home Office (SOHO)",
    "address": "Unit No. C-23A-13, Tower C, The Scott Garden SOHO, Kompleks Rimbun Scott Garden, No. 289, Jalan Klang Lama, 58000, Kuala Lumpur",
    "postcode": "58000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 284000,
    "auctionDate": "22 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "764 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1dNwuAer5WlHLQcmQwxfssPhUYgoR0s87&sz=w800"
    ]
  },
  {
    "id": "417",
    "title": "Service Apartment",
    "address": "Pangsapuri Suria Perdana (Fortune Park), Taman Serdang Perdana, Seksyen 4, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 159432.3,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "109 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1qxB-foyWgwSb5Jq7gTW3Sy0ytaYXF3iB&sz=w800",
      "https://drive.google.com/thumbnail?id=1yTHAP2__Su0yHx4hfHrDOUD0mTjF12vJ&sz=w800",
      "https://drive.google.com/thumbnail?id=1VZ-VvQdzi8H6F3DoKGRmln0JmOL3sNSj&sz=w800"
    ]
  },
  {
    "id": "420",
    "title": "Flat",
    "address": "Unit No. B10-16-29, Block 10, Jalan PJS 2B/1, Desa Mentari 2, 46150 Petaling Jaya, Selangor",
    "postcode": "46150",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 126000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "657 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1QVQstc1-g2zezqgIPufuYK7AU_8z_sCW&sz=w800",
      "https://drive.google.com/thumbnail?id=1j08NUOv9yr1IrDPilCk06A86y7dssHFm&sz=w800"
    ]
  },
  {
    "id": "429",
    "title": "2 Storey Terrace House",
    "address": "No. 47, Jalan Galaksi 2/2, Bandar Mahkota Banting, 42700 Banting, Selangor",
    "postcode": "42700",
    "state": "Selangor",
    "area": "Banting",
    "reservePrice": 390000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "670 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1aMpJ-OXEqtqDxYvgGK25JD3qFYvfqt-I&sz=w800"
    ]
  },
  {
    "id": "434",
    "title": "Apartment",
    "address": "Unit No. 3-9-B, Pangsapuri Impian Sentosa, Jalan Dato Dagang 6, Taman Sentosa, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 190000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "753 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1BuK-9xg81wFtQYs_La2mdTLgAnqKWtI4&sz=w800"
    ]
  },
  {
    "id": "436",
    "title": "Apartment",
    "address": "Residensi PR1MA Alam Damai, No. 8, Persiaran Bistari, Alam Damai, 56000, Kuala Lumpur",
    "postcode": "56000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 247860,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "990 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1cVC8feyuqT6bv3Ox9QQj3N_olhUPIDJ2&sz=w800",
      "https://drive.google.com/thumbnail?id=1i749Y7s8vbPefO4V5bIrhwaAKXozEVxN&sz=w800",
      "https://drive.google.com/thumbnail?id=1jt5SYVwwSojpMmUBpFfI8kTCqDk6txCH&sz=w800"
    ]
  },
  {
    "id": "441",
    "title": "Condominium",
    "address": "Unit No. B-05-03, Tingkat 5, Block B, Residensi Riverville, No. 6, Jalan Taman Sri Sentosa, 58000, Kuala Lumpur",
    "postcode": "58000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 603000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "120 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1TxGSoS_W1lHpItuvFVoaTmDoTc87jMY4&sz=w800",
      "https://drive.google.com/thumbnail?id=1MMd-kUrb9l092YQtVyPs4sj2SUMH4FfA&sz=w800",
      "https://drive.google.com/thumbnail?id=1VZqL8Jx2_vXiglc1i_3NO39sUPYGETHz&sz=w800",
      "https://drive.google.com/thumbnail?id=1mVzwb44peJrVaL0LaBsmfWBDqlLCow7o&sz=w800",
      "https://drive.google.com/thumbnail?id=1bFb4p5faP7ZTd__ls5u4u3Tvg1FJzyBO&sz=w800",
      "https://drive.google.com/thumbnail?id=15eYIoEqX-IQ2OqO8HYBjZBook1ULP9sM&sz=w800"
    ]
  },
  {
    "id": "444",
    "title": "Condominium",
    "address": "Unit No. A-15-09, Block A, Residensi Sembilan Cheras, Jalan Suria Residen, 43200 Cheras, Selangor",
    "postcode": "43200",
    "state": "Selangor",
    "area": "Cheras",
    "reservePrice": 371790,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "502 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Yxyn3IrlYKNyS5e0y26jVGWAgBrbEZjU&sz=w800",
      "https://drive.google.com/thumbnail?id=16Kn0UKyx3QdC7gsbyG-vaKPUUuO-2bq9&sz=w800"
    ]
  },
  {
    "id": "455",
    "title": "Service Apartment",
    "address": "Unit No. B-11-08, BSP 21, Persiaran Saujana Putra Utama, Bandar Saujana Putra, 42610 Jenjarom, Selangor",
    "postcode": "42610",
    "state": "Selangor",
    "area": "Jenjarom",
    "reservePrice": 300000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "044 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1dPEQ9tNLC2tw29X8XafaXYwgR81npvCg&sz=w800",
      "https://drive.google.com/thumbnail?id=1nc5_ePLDBllaEzQwX5YPBBD4pv44l4zF&sz=w800",
      "https://drive.google.com/thumbnail?id=1fwJ6CQReslA4G9gI1BHJH-DTx0baGbYJ&sz=w800",
      "https://drive.google.com/thumbnail?id=11ordtfpvUYBcJLjA7Vhi5tZFWaNHGhMB&sz=w800"
    ]
  },
  {
    "id": "457",
    "title": "Service Apartment",
    "address": "Unit No. A-30-02, Block A, Kiara Plaza, Jalan Semenyih, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 300000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "050 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1M-Qg5BJ52E_--kKxvXKUFFpFDeFQsB1Q&sz=w800"
    ]
  },
  {
    "id": "460",
    "title": "2 Storey Semi Detached House (Incomplete)",
    "address": "No. 1, Jalan SR 8/3G (On Site Alcedo Fasa 15), Saujana Rawang, 48000 Rawang, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 450000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "785 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1BsuGPs5OLTs5nMHzJcg1CsFgq3C25xr7&sz=w800"
    ]
  },
  {
    "id": "462",
    "title": "2 Storey Terrace House",
    "address": "No. 35, Jalan Ritma 2/11, Ritma Perdana, LBS Alam Perdana, 42300 Bandar Puncak Alam, Selangor",
    "postcode": "42300",
    "state": "Selangor",
    "area": "Bandar Puncak Alam",
    "reservePrice": 500000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "200 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1X5TKUkmSnIjGQeYZO8xsKP5T1prSr1OH&sz=w800"
    ]
  },
  {
    "id": "478",
    "title": "2 Storey Terrace House",
    "address": "No. 55, Jalan Kubah U8/58, Bukit Jelutong, Seksyen 8, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 1100000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "639 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d4TqkhQT0jqIdTsrgFBl_Y2r2rj6zRel&sz=w800"
    ]
  },
  {
    "id": "481",
    "title": "Condominium",
    "address": "Unit No. C-16-15, Block Cassia, Vista Millennium Condominium, Jalan DM 1, Taman Desa Millenia, 47150 Puchong, Selangor",
    "postcode": "47150",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 290000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Bf1G37-NJ0ax5dS6jaCmcwCOn_lDeAhg&sz=w800",
      "https://drive.google.com/thumbnail?id=1OOOm0R00O9RmpS3T9hu-mvEyqpIrmU6D&sz=w800",
      "https://drive.google.com/thumbnail?id=1pTjiWpvDeCx4TMl8UGBgnDRs-Bnujsu6&sz=w800"
    ]
  },
  {
    "id": "489",
    "title": "Semi Detached Plot",
    "address": "Lot 56094, Along Lorong Pantai Prima, 59200, Kuala Lumpur",
    "postcode": "56094",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 805429,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "532 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1EuHIe6vMt7z0CxmY8Ve9yyOhqsTw-x1j&sz=w800"
    ]
  },
  {
    "id": "491",
    "title": "Condominium",
    "address": "Unit No. A-23A-05, Block A, Residensi Riverville, No. 6, Jalan Taman Sri Sentosa, Taman Sri Sentosa, 58000, Kuala Lumpur",
    "postcode": "58000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 610000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "216 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1TxGSoS_W1lHpItuvFVoaTmDoTc87jMY4&sz=w800",
      "https://drive.google.com/thumbnail?id=1MMd-kUrb9l092YQtVyPs4sj2SUMH4FfA&sz=w800",
      "https://drive.google.com/thumbnail?id=1VZqL8Jx2_vXiglc1i_3NO39sUPYGETHz&sz=w800",
      "https://drive.google.com/thumbnail?id=1mVzwb44peJrVaL0LaBsmfWBDqlLCow7o&sz=w800",
      "https://drive.google.com/thumbnail?id=1bFb4p5faP7ZTd__ls5u4u3Tvg1FJzyBO&sz=w800",
      "https://drive.google.com/thumbnail?id=15eYIoEqX-IQ2OqO8HYBjZBook1ULP9sM&sz=w800"
    ]
  },
  {
    "id": "501",
    "title": "3 Storey Detached House together with a basement and swimming pool",
    "address": "No. 3, Mutiara 33, Jalan Kemuning 33/158B, Seksyen 33, Taman Kemuning Utama, 40400 Shah Alam, Selangor",
    "postcode": "40400",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 1950000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "180 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1h0DKLFM6m4xcKauyKxmFTV93gH2EojRl&sz=w800"
    ]
  },
  {
    "id": "516",
    "title": "Flat",
    "address": "Unit No. 10-6-14, Tingkat 6, Block 10, Pangsapuri Utarid Subang, No. 1, Jalan Utarid U5/2, Seksyen U5, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 67910,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "667 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1EFAE6vlI0gdUXmdmepnR77E_uz43DWro&sz=w800"
    ]
  },
  {
    "id": "517",
    "title": "2 Storey Terrace House",
    "address": "No. 66, Jalan Goodview 5, Goodview Heights, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 657000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "530 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=11khF8gasvxcJB-7s23T6G6O1rtJOa9IG&sz=w800"
    ]
  },
  {
    "id": "522",
    "title": "Terrace House",
    "address": "No. 10, Jalan Selampit 28, Taman Desawan, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 600000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1foz1a8FcehIsY3_oVXw5i_0410HynSf-&sz=w800"
    ]
  },
  {
    "id": "525",
    "title": "Condominium",
    "address": "Unit No. A-07-10, Residensi Sembilan Cheras, Jalan Suria Residence, 43200 Cheras, Selangor",
    "postcode": "43200",
    "state": "Selangor",
    "area": "Cheras",
    "reservePrice": 560000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "216 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Yxyn3IrlYKNyS5e0y26jVGWAgBrbEZjU&sz=w800",
      "https://drive.google.com/thumbnail?id=16Kn0UKyx3QdC7gsbyG-vaKPUUuO-2bq9&sz=w800"
    ]
  },
  {
    "id": "529",
    "title": "1 Storey Terrace House",
    "address": "No. 19, Jalan Kesuma 4C/5, Bandar Tasik Kesuma, 43700 Beranang, Selangor",
    "postcode": "43700",
    "state": "Selangor",
    "area": "Beranang",
    "reservePrice": 315000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1GxcLcPSxi3AR4LOBInBtVk9qr_haqo-H&sz=w800"
    ]
  },
  {
    "id": "530",
    "title": "Condominium",
    "address": "Unit No. A3-G-7, Block A3, Green Acre Condominium, Jalan Sungai Long, Bandar Sungai Long, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 218000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "012 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=14Z3fWLTYnlnwL1A6F1ZiaPt7RuO6wgpw&sz=w800"
    ]
  },
  {
    "id": "534",
    "title": "1 Storey Terrace House",
    "address": "No. 107, Jalan Kesuma 4C/4, Bandar Tasik Kesuma, 43700 Beranang, Selangor",
    "postcode": "43700",
    "state": "Selangor",
    "area": "Beranang",
    "reservePrice": 297000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1GxcLcPSxi3AR4LOBInBtVk9qr_haqo-H&sz=w800"
    ]
  },
  {
    "id": "548",
    "title": "Service Apartment",
    "address": "Unit No. B-01-10, Blok Ogon, Koi Tropika, Jalan Puchong Batu 13 1/2, 47100 Puchong, Selangor",
    "postcode": "47100",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 300000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "990 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1ZMgF1rIL7csPb_ZeZR5i3JkjV41S3WXP&sz=w800"
    ]
  },
  {
    "id": "551",
    "title": "Apartment",
    "address": "Unit No. C-8-9, Block C, Mentari Court, Jalan PJS 8/9, Taman Seri Mentari, 46150 Petaling Jaya, Selangor",
    "postcode": "46150",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 226800,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "775 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1h_S2rACsIrMiq1qCKRTOdLOAStNcGY3G&sz=w800",
      "https://drive.google.com/thumbnail?id=12oQsK8f57CUggSY2uULhpbZiWOkPljhK&sz=w800",
      "https://drive.google.com/thumbnail?id=1Fc7K631eA4l8L2baxe6XdbPbmY-Gng-7&sz=w800"
    ]
  },
  {
    "id": "559",
    "title": "Condominium",
    "address": "Unit No. A-21-11, Block A, Residensi Riverville, No. 6, Jalan Taman Seri Sentosa, Taman Seri Sentosa, 58000, Kuala Lumpur",
    "postcode": "58000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 550800,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1TxGSoS_W1lHpItuvFVoaTmDoTc87jMY4&sz=w800",
      "https://drive.google.com/thumbnail?id=1MMd-kUrb9l092YQtVyPs4sj2SUMH4FfA&sz=w800",
      "https://drive.google.com/thumbnail?id=1VZqL8Jx2_vXiglc1i_3NO39sUPYGETHz&sz=w800",
      "https://drive.google.com/thumbnail?id=1mVzwb44peJrVaL0LaBsmfWBDqlLCow7o&sz=w800",
      "https://drive.google.com/thumbnail?id=1bFb4p5faP7ZTd__ls5u4u3Tvg1FJzyBO&sz=w800",
      "https://drive.google.com/thumbnail?id=15eYIoEqX-IQ2OqO8HYBjZBook1ULP9sM&sz=w800"
    ]
  },
  {
    "id": "567",
    "title": "Land",
    "address": "Plot 15 (Lot 44159 (formerly known as PT 37729)), Kampung Pulau Meranti, Off Jalan Putra Perdana 3A, Taman Putra Perdana, 47130 Puchong, Selangor",
    "postcode": "44159",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 260000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "663 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1XpNLXtUBXgrbMu7rSPGKyuxUByCTUWVq&sz=w800"
    ]
  },
  {
    "id": "577",
    "title": "2 Storey Terrace House",
    "address": "No. 33, Jalan Elektron U16/83, Denai Alam, Seksyen U16, 40160 Shah Alam, Selangor",
    "postcode": "40160",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 675000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "384 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1r54n3deFZ5QYOqyGXh33P-d9g6mxHK_w&sz=w800"
    ]
  },
  {
    "id": "584",
    "title": "Condominium",
    "address": "Block A, Endah Regal Condominium, Jalan 3/149E, Taman Sri Endah, 57000, Kuala Lumpur",
    "postcode": "57000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 241000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "141 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1RDJzgewGn2YhDRFxh9RFvzd55MEkRg4t&sz=w800",
      "https://drive.google.com/thumbnail?id=1pY-3QiFSdqOF9RojCHtstptK_794nXbC&sz=w800",
      "https://drive.google.com/thumbnail?id=1NWy_mSMVIRbIRPirCu1QESwS0ZRn723A&sz=w800",
      "https://drive.google.com/thumbnail?id=1pAOxyKgFgqJOu4g7i0BfXCWySZE4qlft&sz=w800"
    ]
  },
  {
    "id": "587",
    "title": "Apartment",
    "address": "Verve Suites, Jalan Kiara 5, Mont Kiara, 50480, Kuala Lumpur",
    "postcode": "50480",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 390000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "463 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1x43Y7C1siSOZQhTSNrh0u-fFoO-JVa5D&sz=w800",
      "https://drive.google.com/thumbnail?id=1ky23AxpUhBl1TVY8L_46QDjfYv-63bvz&sz=w800",
      "https://drive.google.com/thumbnail?id=1IY7Y0y4oUljMwJxjGocwhvwc2zDeb8Pe&sz=w800",
      "https://drive.google.com/thumbnail?id=1q_SSsdgf8VNMCs6oX7qhKEYgcIYnl6ha&sz=w800"
    ]
  },
  {
    "id": "589",
    "title": "Duplex SOHO",
    "address": "Unit No. A-10-12, The Scott Garden SOHO, Block A, Kompleks Rimbun Scott Garden, No. 289, Jalan Klang Lama, 58000, Kuala Lumpur",
    "postcode": "58000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 256000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "764 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1dNwuAer5WlHLQcmQwxfssPhUYgoR0s87&sz=w800"
    ]
  },
  {
    "id": "590",
    "title": "Condominium",
    "address": "Unit No. B-9-6, Block B, Jalan 3/149E, Endah Regal Condominium, Taman Seri Endah, 57000, Kuala Lumpur",
    "postcode": "57000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 330000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "141 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1RDJzgewGn2YhDRFxh9RFvzd55MEkRg4t&sz=w800",
      "https://drive.google.com/thumbnail?id=1pY-3QiFSdqOF9RojCHtstptK_794nXbC&sz=w800",
      "https://drive.google.com/thumbnail?id=1NWy_mSMVIRbIRPirCu1QESwS0ZRn723A&sz=w800",
      "https://drive.google.com/thumbnail?id=1pAOxyKgFgqJOu4g7i0BfXCWySZE4qlft&sz=w800"
    ]
  },
  {
    "id": "594",
    "title": "2 Storey Terrace House",
    "address": "Lorong Gelang 7/KS07, Bandar Puteri, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 567000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "619 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1I5nasFaqK43b091QviHNjiPxEBLKGMws&sz=w800"
    ]
  },
  {
    "id": "595",
    "title": "1 Storey Terrace House",
    "address": "No. 4, Jalan BB 4/10, Taman Banting Baru, 42700 Banting, Selangor",
    "postcode": "42700",
    "state": "Selangor",
    "area": "Banting",
    "reservePrice": 300000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1ulmtT3Cb6qCXiH6-XnQfYeKoMhzEDlEj&sz=w800"
    ]
  },
  {
    "id": "615",
    "title": "Condominium",
    "address": "Unit No. B-9-2, Kondo Villa Angsana, Block B, Jalan Krian, Taman Rainbow, 51100, Kuala Lumpur",
    "postcode": "51100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 420000,
    "auctionDate": "30 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "421 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1f_MzjYvTMRRhWl_j1KqNUr7svjL1lS3R&sz=w800",
      "https://drive.google.com/thumbnail?id=1MYJigu6DNAejJH3pZK5eR-3LeV6vs_wy&sz=w800",
      "https://drive.google.com/thumbnail?id=1I5bMmFbySUhA5tBNvYish3sdE195yiwZ&sz=w800",
      "https://drive.google.com/thumbnail?id=1_QE8U-MaXmNt_XKCfQQTqdPCPanwr-gW&sz=w800"
    ]
  },
  {
    "id": "617",
    "title": "Service Apartment",
    "address": "Unit No. 9-10, MH Platinum Residence, Jalan Gombak Sejahtera, Off Jalan Gombak, Setapak, 53000, Kuala Lumpur",
    "postcode": "53000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 420000,
    "auctionDate": "30 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "023 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Es75GcFGRVbDuAcaC-H1kKwVI4_0ugZI&sz=w800"
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
