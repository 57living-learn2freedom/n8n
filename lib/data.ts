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
    "title": "3 Storey Linked House",
    "address": "No. 116, Jalan BP 11, Taman Bukit Permata, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 451980,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "705 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1adNWKVMq6IKsZoqCYlbJ92pIBdPatm9C&sz=w800"
    ]
  },
  {
    "id": "3",
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
      "https://drive.google.com/thumbnail?id=1MIaiiUg38QqquUFJI7eu3AltnFXuAVo5&sz=w800",
      "https://drive.google.com/thumbnail?id=1QVQstc1-g2zezqgIPufuYK7AU_8z_sCW&sz=w800",
      "https://drive.google.com/thumbnail?id=1j08NUOv9yr1IrDPilCk06A86y7dssHFm&sz=w800"
    ]
  },
  {
    "id": "4",
    "title": "2.5 Storey Detached House",
    "address": "No. 35, Jalan 14/3, Taman Tun Abdul Razak, 68000 Ampang, Selangor",
    "postcode": "68000",
    "state": "Selangor",
    "area": "Ampang",
    "reservePrice": 1771470,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "490 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13A1QwPen5QYP6gZYF553itkjemau6HxC&sz=w800"
    ]
  },
  {
    "id": "5",
    "title": "Apartment",
    "address": "Unit No. D-3-05, Block D, Pangsapuri Puchong Permata, Jalan Permai 4, Taman Puchong Permai, 47150 Puchong, Selangor",
    "postcode": "47150",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 167000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "850 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1oFRmcwDmjWHW1TJivgbmZV7LD482ivXP&sz=w800"
    ]
  },
  {
    "id": "6",
    "title": "Apartment",
    "address": "Unit No. 203, Damansara Villa, Lot 1092, Jalan SS23/1A (Jalan Jenjarum), Taman Sea, 47400 Petaling Jaya, Selangor",
    "postcode": "47400",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 332100,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "980 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1OwZaXYwtr0suLgGpeFHcczr6Oo_5xuM-&sz=w800"
    ]
  },
  {
    "id": "7",
    "title": "1 Storey Terrace House",
    "address": "No. 83, Jalan Jururawat U1/83, Taman Ladang Jaya, Glenmarie, Seksyen U1, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 324000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "740 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1qJVUegQ9l3vCOlqN_8hVuNfe9lERhrVS&sz=w800"
    ]
  },
  {
    "id": "8",
    "title": "2 Storey Terrace House",
    "address": "No. 87, Jalan TPS 2/23, Taman Pelangi Semenyih 2, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 432000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "000 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1_ITmeK9Ov3izLeAfYx_RiwW56_QxdLS9&sz=w800"
    ]
  },
  {
    "id": "9",
    "title": "Duplex Office Suite",
    "address": "Unit No. T1-16-18, Tower 1, The Place, Jalan Teknokrat 1/1, Cyber 3, 63000 Cyberjaya, Selangor",
    "postcode": "63000",
    "state": "Selangor",
    "area": "Cyberjaya",
    "reservePrice": 162000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "581 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1op0Yu44vjkYvocxF51mcw8Yg7MBcjv3W&sz=w800"
    ]
  },
  {
    "id": "10",
    "title": "2 Storey Terrace House",
    "address": "No. 7, Jalan Timah 1, Taman Timah 1, 43800 Dengkil, Selangor",
    "postcode": "43800",
    "state": "Selangor",
    "area": "Dengkil",
    "reservePrice": 477000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "300 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1MnR-ZTlI0VSZ0_SptSsA9N71DRhOUn1V&sz=w800"
    ]
  },
  {
    "id": "11",
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
    "id": "12",
    "title": "Apartment",
    "address": "Unit No. C1-4-05, Pangsapuri Sri Proton, Lorong Samarinda 6A, 41000 Klang, Selangor",
    "postcode": "41000",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 170000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "689 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1ICx7L-0HXBsF1p2dv8BkGCqiSy8EThhR&sz=w800"
    ]
  },
  {
    "id": "13",
    "title": "2 Storey Terrace House",
    "address": "No. 7, Jalan Hamzah Alang 58, Taman Intan, Jalan Kapar, 42200 Kapar, Selangor",
    "postcode": "42200",
    "state": "Selangor",
    "area": "Kapar",
    "reservePrice": 300000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "829 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1DEaw6wi6Tw-6Y0SJ0yis68EqR1ZoPuTD&sz=w800"
    ]
  },
  {
    "id": "14",
    "title": "Apartment",
    "address": "Unit No. 3, Tingkat 1, Blok 26, Rumah Pangsa Kos Rendah, Seksyen 28, 40400 Shah Alam, Selangor",
    "postcode": "40400",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 150000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "603 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1GKFFRpnpZEiGGcjYXMsHXVcxGOPGUN7j&sz=w800"
    ]
  },
  {
    "id": "15",
    "title": "2 Storey Terrace House",
    "address": "No. 34, Lorong Pauh Kijang 5, Taman Saga, Jalan Meru, 41050 Klang, Selangor",
    "postcode": "41050",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 350000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "829 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1vgGAh_Lpk-N4Ts1E3Dn80k_hg55Khkr8&sz=w800"
    ]
  },
  {
    "id": "16",
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
    "id": "17",
    "title": "Kemuning Aman Apartment",
    "address": "Unit No. 1-06-13, Block 1, Pangsapuri Kemuning Aman, No. 2, Persiaran Kemuning Damai, Kemuning Utama, Seksyen 32, 40460, Shah Alam, Selangor",
    "postcode": "40460",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 240000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "732 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1-shpIjIz42gDAVHt8U4OTNVQsFZsSJYe&sz=w800"
    ]
  },
  {
    "id": "18",
    "title": "Terrace House",
    "address": "Jalan SG 6/8, Taman Sri Gombak, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 570000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1KuK6wiSG1DsPkXTBdRoBSwFePsFQS0Fc&sz=w800"
    ]
  },
  {
    "id": "19",
    "title": "1 Storey Terrace House",
    "address": "No. 39, Jalan KSU 3/2, Taman Kuala Selangor Utama, 45000 Kuala Selangor, Selangor",
    "postcode": "45000",
    "state": "Selangor",
    "area": "Kuala Selangor",
    "reservePrice": 290000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1CyLl-KX5b1AsCrldD18CJZlY1QTsu65c&sz=w800"
    ]
  },
  {
    "id": "20",
    "title": "2.5 Storey Semi Detached House",
    "address": "No. 39, Jalan Mewah 2, Desa Malawati, 68000 Ampang, Selangor",
    "postcode": "68000",
    "state": "Selangor",
    "area": "Ampang",
    "reservePrice": 1600000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "272 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1sWXPGsrCiAp-jvAhzehMQbz_hAKcWesv&sz=w800"
    ]
  },
  {
    "id": "21",
    "title": "Apartment",
    "address": "Unit No. D-5-06, Pangsapuri Akasia, Persiaran Kasuarina, Bandar Botanik, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 225000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "753 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1ssdfFnSMOU14fTbupzvu5lQYZVfWkcpC&sz=w800"
    ]
  },
  {
    "id": "22",
    "title": "Terrace House",
    "address": "No. 19, Jalan BPP 4/8, Pusat Bandar Putra Permai, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 720000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "701 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1teXTxn4cc5sZBlVjlTR0mSP3KLFoql6v&sz=w800"
    ]
  },
  {
    "id": "23",
    "title": "2 Storey Terrace House",
    "address": "No. 15, Jalan Temenggung 43B/KS07, Taman Sejati Kehijauan, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 551000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "540 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1FGD4cyeqoPU0EAEuLOZhhecBe2U7xV5k&sz=w800"
    ]
  },
  {
    "id": "24",
    "title": "Land",
    "address": "Lot 1566, Jalan RP 9/6, Jalan RP Junction, Taman Rawang Perdana, 48000 Rawang, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 234000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "102 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1-IvfyzdehZzMpI7-oPvC0ZICighe5cgv&sz=w800"
    ]
  },
  {
    "id": "25",
    "title": "Apartment",
    "address": "Unit No. 8-406, Block 8, Pangsapuri Daisy, Jalan Dinar U3/1, Taman Subang Perdana, Section U3, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 200000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "896 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1x6RKWriSXBjIfT7QuI99pgdRf8CMIlGd&sz=w800"
    ]
  },
  {
    "id": "26",
    "title": "2 Storey Terrace House",
    "address": "No. 36, Jalan PUJ 2/19, Taman Puncak Jalil, Bandar Putra Permai, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 500000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "170 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1NJZO4snLeKtiYGOCsCuAWMMmQzdxO9e0&sz=w800"
    ]
  },
  {
    "id": "27",
    "title": "Condominium",
    "address": "Unit No. 00-13, Ground Floor, Oasis 2, Jalan Mutiara 3, Mutiara Heights, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 368000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "184 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1qQEr6Jyc9bsPAKUmomaGDdUeo9XVScLk&sz=w800"
    ]
  },
  {
    "id": "28",
    "title": "Apartment",
    "address": "Unit No. B-10-03, Block B, Impian Baiduri Apartment, No. 6, Jalan 224, Section 51A, 46100 Petaling Jaya, Selangor",
    "postcode": "46100",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 120000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "646 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1ieWtSixEhr0RWjhEH8fWoqqjWxgsTSk4&sz=w800"
    ]
  },
  {
    "id": "29",
    "title": "Service Apartment",
    "address": "Unit No. B-29-8, Emerald 9 Cheras, Persiaran Awana, 43200 Cheras, Selangor",
    "postcode": "43200",
    "state": "Selangor",
    "area": "Cheras",
    "reservePrice": 470000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "861 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1DoZwlWRgOdAwcnECYsOrFZvkkptn_SSj&sz=w800"
    ]
  },
  {
    "id": "30",
    "title": "Office Suite Unit",
    "address": "Unit No. 03-03-08, No. 1, Jalan Pengaturcara U1/51A, Pusat Perniagaan UOA Shah Alam, Seksyen U1, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 1755000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "292 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1g4PAJHgPom03AZbkFZbKdwjGB-QnqHcD&sz=w800"
    ]
  },
  {
    "id": "31",
    "title": "Apartment",
    "address": "Unit No. B4-22-09, Residensi PR1MA Alam Damai, No. 8, Persiaran Bistari, Alam Damai, 56000, Kuala Lumpur",
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
    "id": "32",
    "title": "Bungalow Land",
    "address": "Lot. 491 & Lot. 16612, Jalan Tiara Titiwangsa 2, Tiara Titiwangsa, 53200, Kuala Lumpur",
    "postcode": "16612",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 882000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "125 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1W13TbJYEihVYRcF9rB1px1uaiLnMzEw9&sz=w800"
    ]
  },
  {
    "id": "33",
    "title": "Condominium",
    "address": "Unit No. E-16-8, Blok E, Villa Wangsamas Kondominium, Jalan Seri Wangsa 2, Wangsa Maju, 53300, Kuala Lumpur",
    "postcode": "53300",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 450000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "270 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=129dne8z41XnbFmnPiAplQ1TKDUwaeZso&sz=w800"
    ]
  },
  {
    "id": "34",
    "title": "Condominium",
    "address": "Unit No. B-15-01, Residensi Chymes Gurney, No 79, Jalan Persiaran Gurney, 54000, Kuala Lumpur",
    "postcode": "54000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 630000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "109 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Y_Hc7IeoU8fuhAxdJYPSvwudIwpQyGNc&sz=w800"
    ]
  },
  {
    "id": "35",
    "title": "Studio Small Office Home Office (SOHO)",
    "address": "Unit No. S-15-12, Block S, Astrum Ampang, Jalan Enggang, Taman Keramat, 54200, Kuala Lumpur",
    "postcode": "54200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 230000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1FxtNNWSccgJ8RprFAvruy1RPUH0kORCl&sz=w800"
    ]
  },
  {
    "id": "36",
    "title": "Service Apartment",
    "address": "Unit No. E-18-7, Plaza KLTS, No. 99, Jalan Gombak, Setapak, 53000, Kuala Lumpur",
    "postcode": "53000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 470000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "055 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1mQaqDkRnxg2Vy3azhqvYjk9N84GRZ7Gn&sz=w800",
      "https://drive.google.com/thumbnail?id=1Ls3yg3y8NH3U4vcUp0TgIvjm_PCbrCV8&sz=w800",
      "https://drive.google.com/thumbnail?id=1NF2t9jcR4GsEMFaoOyMKmyAmyQEEccag&sz=w800"
    ]
  },
  {
    "id": "37",
    "title": "1 Storey Terrace House",
    "address": "No. 7, Jalan Meru Setia 10, Taman Meru 4, 42200 Kapar, Selangor",
    "postcode": "42200",
    "state": "Selangor",
    "area": "Kapar",
    "reservePrice": 300000,
    "auctionDate": "24 Jul 2026 (Fri)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1fclw3mQeE7YGh3f3JEqPNMAITu3sE6UC&sz=w800"
    ]
  },
  {
    "id": "38",
    "title": "2 Storey Terrace House",
    "address": "No. 45, Jalan Sri Siantan 50, Taman Sri Andalas, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 580000,
    "auctionDate": "24 Jul 2026 (Fri)",
    "landArea": "—",
    "builtUp": "314 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1dfdlrlMbzl4WZj-a7RS6A0jYb597yErT&sz=w800"
    ]
  },
  {
    "id": "39",
    "title": "1 Storey Terrace House",
    "address": "No. 22, Jalan Pandamaran Jaya, Rumah Murah Kampung Pendamar, 42000 Pelabuhan Klang, Selangor",
    "postcode": "42000",
    "state": "Selangor",
    "area": "Pelabuhan Klang",
    "reservePrice": 280000,
    "auctionDate": "24 Jul 2026 (Fri)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1K5FeVKt2NVMIZWjEUraeqvYA8q7zmKBr&sz=w800"
    ]
  },
  {
    "id": "40",
    "title": "1 Storey Terrace House",
    "address": "No. 11, Jalan Meranti Putih 1/KU10, Taman Desa Permai, 41050 Klang, Selangor",
    "postcode": "41050",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 410000,
    "auctionDate": "24 Jul 2026 (Fri)",
    "landArea": "—",
    "builtUp": "453 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1L6GGAjCkxblNoywZtGcgSDyjb62UWotM&sz=w800"
    ]
  },
  {
    "id": "41",
    "title": "1 Storey Terrace House",
    "address": "No. 97, Jalan Seri Sementa 9, Taman Seri Sementa, Batu 7, 42100 Klang, Selangor",
    "postcode": "42100",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 291600,
    "auctionDate": "24 Jul 2026 (Fri)",
    "landArea": "—",
    "builtUp": "876 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1pxoMpytpGJX0_b9xZdwWvZTbT0o6ey7d&sz=w800"
    ]
  },
  {
    "id": "42",
    "title": "Apartment",
    "address": "Unit No. L1-4-06, Pangsapuri Lilywood Court, Pinggiran Lembah Hijau 6, Bandar Tasik Puteri, 48020 Rawang, Selangor",
    "postcode": "48020",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 51030,
    "auctionDate": "27 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "728 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1GnMxAA7bxdDRaN1uHhIYNfgJCt8EOhlR&sz=w800"
    ]
  },
  {
    "id": "43",
    "title": "Apartment",
    "address": "Unit No. C2-08-11A, Jalan Anggerik Villa 2/2, Anggerik Villa II, Off Jalan Semenyih, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 116600,
    "auctionDate": "27 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "063 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=10PJtwUxFoNFVCX5slpQNu4cuXQSDeMxU&sz=w800"
    ]
  },
  {
    "id": "44",
    "title": "Apartment",
    "address": "Unit No. 6B-03-01, 3rd Floor, Block B, Kenanga Apartment, Jalan Wawasan 2/3, Pusat Bandar Puchong, 47160 Puchong, Selangor",
    "postcode": "47160",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 210000,
    "auctionDate": "27 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "883 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1EAKu53QRgc05Vg9_SDaHVNdRXnBUwgFO&sz=w800"
    ]
  },
  {
    "id": "45",
    "title": "[Direct linked to commercial areas ] Apartment [ 10 min to Batu Caves KTM Station]",
    "address": "Unit No. 4-3B, 3rd Floor, Jalan Pinggiran 1/1, Pinggiran Batu Caves, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 76000,
    "auctionDate": "27 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "634 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1OtRkRJ8SYEsudZoGDvvy5_RYURLfISWS&sz=w800"
    ]
  },
  {
    "id": "46",
    "title": "Condominium",
    "address": "Unit No. A-3-2, Level 3, Blok A, Kemensah Villa Condominium, Jalan Melati Indah 1, Saujana Melawati, Desa Melawati, 68000 Ampang, Selangor",
    "postcode": "68000",
    "state": "Selangor",
    "area": "Ampang",
    "reservePrice": 324000,
    "auctionDate": "27 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "227 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1hqm-RR5mESZBideIejn11whjaEyasSxv&sz=w800"
    ]
  },
  {
    "id": "47",
    "title": "1 Storey Terrace House",
    "address": "Jalan Keruing 4B, Taman Keruing, 44200 Rasa, Selangor",
    "postcode": "44200",
    "state": "Selangor",
    "area": "Rasa",
    "reservePrice": 202500,
    "auctionDate": "27 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Qp-9OyDud8qypAW8TpZe9J-Uk9aYLeME&sz=w800"
    ]
  },
  {
    "id": "48",
    "title": "Apartment",
    "address": "Pangsapuri Vista Lavender, Persiaran Kinrara Seksyen 3, 47100 Puchong, Selangor",
    "postcode": "47100",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 178200,
    "auctionDate": "27 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "017 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=12mNl4l_n59ok25jffwqtZD46n2SA6Uk8&sz=w800"
    ]
  },
  {
    "id": "49",
    "title": "[5 min to Econsave Kampung Jawa] 1 Storey Terrace House [7 min to NSK Jalan Sungai Jati]",
    "address": "No. 11, Jalan Kebun Nenas 2U/KS7, Bandar Putera, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 324000,
    "auctionDate": "27 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "475 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1gjAK2tW-c4hmhADJECuC7UYoeYWCTb-L&sz=w800"
    ]
  },
  {
    "id": "50",
    "title": "Apartment",
    "address": "Unit No. R1-3-03, Casablanca (Rosewood Court), Bandar Tasik Puteri, 48020 Rawang, Selangor",
    "postcode": "48020",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 62179,
    "auctionDate": "27 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "808 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1YJ-_-serNwVTEIMTtMMlImj81tpcz6sX&sz=w800"
    ]
  },
  {
    "id": "51",
    "title": "1 Storey Terrace House",
    "address": "No. 40, Jalan LG3 1/20, Taman Langat Utama 3, Bukit Changgang, 42700 Banting, Selangor",
    "postcode": "42700",
    "state": "Selangor",
    "area": "Banting",
    "reservePrice": 164025,
    "auctionDate": "27 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1SpqPPbOz6ZRHLDo1KM6x9uFN6xHjLXXk&sz=w800"
    ]
  },
  {
    "id": "52",
    "title": "[Close to Main Place Mall, The 19 USJ City Mall & Giant Hypermarket Putra Heights] Retail Unit [4 min to USJ 21 LRT Station]",
    "address": "Unit No. 01-43, The Square One City, Jalan USJ 25/1C, 47650 Subang Jaya, Selangor",
    "postcode": "47650",
    "state": "Selangor",
    "area": "Subang Jaya",
    "reservePrice": 92651,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "377 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1ENUj6llGpm2971KQIO8WJw2kJjotNC4t&sz=w800",
      "https://drive.google.com/thumbnail?id=1dv09Mmn64NLyku6OiNzONpTVXpHeQdTo&sz=w800"
    ]
  },
  {
    "id": "53",
    "title": "[High foot traffic & visibility] Retail Lot [Offering convenience, which makes shoppers more likely to stop by]",
    "address": "Unit No. F1.70, 1st Floor, The Summit, USJ 1, Jalan Kewajipan, 47600 Subang Jaya, Selangor",
    "postcode": "47600",
    "state": "Selangor",
    "area": "Subang Jaya",
    "reservePrice": 46000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "398 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1NV0BuINhl8UAw39GRrxRZTj0_sNoFanM&sz=w800",
      "https://drive.google.com/thumbnail?id=1xNSym-sgwGY20dMeKq2CXC0YI3vzas4E&sz=w800"
    ]
  },
  {
    "id": "54",
    "title": "[Close to Maybank Puchong Prima] Retail Lot [4 min to LRT Puchong Perdana, SK Puchong Perdana & Petronas Puchong Perdana]",
    "address": "Unit No. 1-08, M-Square, Jalan DM 2, Taman Desa Millennia, 47150 Puchong, Selangor",
    "postcode": "47150",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 53500,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "538 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1UrAvsyoIOvPoIpCtz2RJQCrF_RYf6V_p&sz=w800"
    ]
  },
  {
    "id": "55",
    "title": "[Opposite Jaya One] Service Apartment [Right next to Columbia Asia Hospital - PJ]",
    "address": "Unit No. C-20-6, Tower C, Pacific Towers (Capella Residenz @ Pacific Star), Jalan 13/6, Seksyen 13, 46200 Petaling Jaya, Selangor",
    "postcode": "46200",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 219000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "988 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1uZPCHwMtk-808D7ndvSYBbWrX_5j0F35&sz=w800",
      "https://drive.google.com/thumbnail?id=1sozobLMz4NEPSSGK3ih89nDAtfq1dQtj&sz=w800"
    ]
  },
  {
    "id": "56",
    "title": "Apartment",
    "address": "Unit No. A4-5, Pangsapuri Dahlia, Blok A, Jalan Putra, Taman Putra Kajang, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 43047,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "710 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1n7OBjHPy1Z15OmC-G2oDml389Ri31oin&sz=w800"
    ]
  },
  {
    "id": "57",
    "title": "Apartment",
    "address": "Unit No. H-09-15, Flora Damansara, No. 1, Jalan PJU 8/9, Bandar Damansara Perdana, 47820 Petaling Jaya, Selangor",
    "postcode": "47820",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 153000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "850 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1JyxHzrc2fvS5Ns_80SyuDZ3fnFI97lh-&sz=w800",
      "https://drive.google.com/thumbnail?id=1mBbad4vSZ_ktjrntFNFO8P9KOW6OGCuA&sz=w800"
    ]
  },
  {
    "id": "58",
    "title": "Flat",
    "address": "Unit No. A-5-16, Block A, Pangsapuri Rebana, Jalan Gamelan, Bandar Bukit Raja, 41050 Klang, Selangor",
    "postcode": "41050",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 61116,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "654 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1MMvo2a2opY8QRlHkiNoQHw4rNiF-gJTQ&sz=w800"
    ]
  },
  {
    "id": "59",
    "title": "[3 min to 99 Speedmart Taman Bunga Raya] Apartment [Close to Lotus's Bukit Beruntung]",
    "address": "Unit No. A-3A-17, Block A, Jalan Bunga Raya 1, Apartment Kemuning, Taman Bunga Raya, 48300 Rawang, Selangor",
    "postcode": "48300",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 33067,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "650 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1wyC8B48eNkA1EdH_GGnOFBu7asXDOTQT&sz=w800"
    ]
  },
  {
    "id": "60",
    "title": "Flat",
    "address": "Unit No. B05-F4-1, Pangsapuri Mutiara, Jalan Balakong Jaya 1, Taman Balakong Jaya, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 88485,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "741 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1ptER-Q81MI6X_dtHnUprNKX5pybQw-vs&sz=w800"
    ]
  },
  {
    "id": "61",
    "title": "Apartment",
    "address": "Unit No. D-6-8, Pangsapuri Villamas, Jalan Muhibbah KU3, Sungai Pinang, 42100 Klang, Selangor",
    "postcode": "42100",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 119575,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "850 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Mle40m_nfwL_WJYxnwyzAaNl5bE8CJSJ&sz=w800"
    ]
  },
  {
    "id": "62",
    "title": "[ROI up to 7%; Conveniently located within a short distance to nearby shops and amenities] Apartment [6 min to Lotus's Puncak Alam]",
    "address": "Unit No. Cinta 04-1, Block Cinta, Astana Alam 2, Jalan Astana 13/3, Seksyen 13, 42300 Bandar Puncak Alam, Selangor",
    "postcode": "42300",
    "state": "Selangor",
    "area": "Bandar Puncak Alam",
    "reservePrice": 81311,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "680 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1tHplSM3HbgoOvnUFZNC37Gqph_WMb1xZ&sz=w800"
    ]
  },
  {
    "id": "63",
    "title": "Apartment",
    "address": "Unit No. A-2-22B, Block A, Jalan SP 5/2, Taman Serdang Perdana, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 68040,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "650 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HA7ob6kncprEsR3NMwNadmsece9q4psj&sz=w800"
    ]
  },
  {
    "id": "64",
    "title": "Apartment",
    "address": "Unit No. B3-4-16, Pangsapuri Sri Ayu, Lebuh Kebun Nenas 1/KS7, Bandar Putera, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 68234,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "650 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1ofce2RLr43mnqbrfO2e9aFWAPJfNqxST&sz=w800"
    ]
  },
  {
    "id": "65",
    "title": "[Right Behind Giant Seri Kembangan] Office Lot [Surrounded by commercial areas]",
    "address": "Unit No. D-02-02, Sfera Residensi, Jalan Atmosphere Utama 1, Bandar Putra Permai, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 288684,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "561 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1d_kfRcAXQRY8mtdkkVFFJ0PzqQJFEcnB&sz=w800",
      "https://drive.google.com/thumbnail?id=1zRrOI_17eYWOI1af2pO75aFDaUVEMrrw&sz=w800"
    ]
  },
  {
    "id": "67",
    "title": "[6 min to The Curve] Condominium [7 min to IPC Shopping Centre, Damansara Specialist Hospital 2, 1 Utama Shopping Centre, Lotus's Mutiara Damansara & IKEA Damansara]",
    "address": "Unit No. A-907, Block A, Perdana View Condominium, No. 21, Jalan PJU 8/1, Damansara Perdana, 47820 Petaling Jaya, Selangor",
    "postcode": "47820",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 244461,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "150 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1fIk1THzTpAGV_9WdlAUI-DfpY4e6YkPh&sz=w800"
    ]
  },
  {
    "id": "68",
    "title": "Apartment [Next to SK Taman Prima Selayang]",
    "address": "Unit No. A-13-01, Magna Ville Selayang, Lebuhraya Selayang-Kepong, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 201947,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "206 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=178TxjfmJZDNxcpne0xZ0_1o6LGHfJC2T&sz=w800"
    ]
  },
  {
    "id": "69",
    "title": "[Beside to NPE Highway] Apartment [9 min to Kg.Datuk Harun KTM Station]",
    "address": "Unit No. D09-10, Block D, Jalan PJS 1/52, Taman Petaling Utama, 46000 Petaling Jaya, Selangor",
    "postcode": "46000",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 85293,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "700 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1kMaiwBW43tBVvYgQJZxvyPg2J8kkm5_j&sz=w800"
    ]
  },
  {
    "id": "70",
    "title": "Small Office Versatile Office (SOVO)",
    "address": "Unit No. 1-8-15, Block 1, No. 2A, Jalan Tukul Besi 13/41, TTDI Sentralis, 40100 Shah Alam, Selangor",
    "postcode": "40100",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 235000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "775 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1YZbFnaLSGRF2bsV2yS1lk9cejgquPJYa&sz=w800"
    ]
  },
  {
    "id": "71",
    "title": "[10 min to Lotus's Rimbayu] Service Residence [Close to Quayside Mall & Sanctuary Mall]",
    "address": "Unit No. T2-13-11, BSP Skypark, Persiaran Saujana Putra Utama, Bandar Saujana Putra, 42610 Jenjarom, Selangor",
    "postcode": "42610",
    "state": "Selangor",
    "area": "Jenjarom",
    "reservePrice": 219000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "001 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1t6A5sRPJK23DXuGhAboHfKPv8m6ZYAoL&sz=w800"
    ]
  },
  {
    "id": "72",
    "title": "[7 min to Taman Suntex MRT Station] Condominium [10 min to NSK Trade City Taman Suntex]",
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
      "https://drive.google.com/thumbnail?id=16Kn0UKyx3QdC7gsbyG-vaKPUUuO-2bq9&sz=w800",
      "https://drive.google.com/thumbnail?id=16ofI6BN6W6gq63djtmclg_IPoKgGBhO-&sz=w800",
      "https://drive.google.com/thumbnail?id=1r_Qtq96HzoceRfNC0Td7KF0486AIg7ln&sz=w800",
      "https://drive.google.com/thumbnail?id=13FfGYcVLovuvRMGvV3Dr8cgiiRAnahQz&sz=w800"
    ]
  },
  {
    "id": "73",
    "title": "Service Apartment",
    "address": "Unit No. T1-07-11, BSP Skypark, Persiaran Saujana Putra Utama, Bandar Saujana Putra, 42610 Jenjarom, Selangor",
    "postcode": "42610",
    "state": "Selangor",
    "area": "Jenjarom",
    "reservePrice": 219450,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "001 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1t6A5sRPJK23DXuGhAboHfKPv8m6ZYAoL&sz=w800"
    ]
  },
  {
    "id": "74",
    "title": "[4 min to Billion Shopping Centre (Semenyih)] Service Apartment [6 min to Mydin Wholesale Hypermarket Semenyih]",
    "address": "Unit No. A-08-18, Block A, Kiara Plaza, Jalan Semenyih, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 194400,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "861 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1M-Qg5BJ52E_--kKxvXKUFFpFDeFQsB1Q&sz=w800",
      "https://drive.google.com/thumbnail?id=1023QpSjnPR5RW2Q4hzzYn4CwyRV9ix4d&sz=w800",
      "https://drive.google.com/thumbnail?id=155a5alHna8C3q9ic_SMsamiu0PFrZjr9&sz=w800",
      "https://drive.google.com/thumbnail?id=1foFnkSUJ97WzOgp7bAC-YfBdqYu33c33&sz=w800",
      "https://drive.google.com/thumbnail?id=1nOSAuFZD0nrxFW4H_eC55BPONdZKRzPC&sz=w800",
      "https://drive.google.com/thumbnail?id=1N4ZqLm1rlW5gLTX9e4f42iDKwB_utP4k&sz=w800"
    ]
  },
  {
    "id": "75",
    "title": "Service Apartment",
    "address": "Unit No. A-01-13A, 1st Floor, Block A, Zeva Residence, Persiaran Pinggiran Putra, Bandar Putra Permai, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 236520,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "872 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1htEm9uII-tgiZAJBWz8OTJHBH2TQxr3a&sz=w800",
      "https://drive.google.com/thumbnail?id=1fypU2Bx_eXlNGgQta-EP_1uJV1U27lCO&sz=w800",
      "https://drive.google.com/thumbnail?id=1Q1Q1_eK0qyL6xxdq0jC_41ROou6zhTEZ&sz=w800"
    ]
  },
  {
    "id": "76",
    "title": "[5 min away from Kota Damansara MRT Station & Thomson Hospital Kota Damansara] Stratified Retail Lot [9 min to Sunway Giza Mall & Kelab Golf Seri Selangor]",
    "address": "Unit No. S-01-26, Emporis Kota Damansara, Persiaran Surian, Seksyen 3, Taman Sains Selangor, 47810 Petaling Jaya, Selangor",
    "postcode": "47810",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 721700,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "356 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1vGhFr4grJ5SlZE98KoYyOy4ljXf8T5qn&sz=w800",
      "https://drive.google.com/thumbnail?id=1kHmdx0bgkcn0PB4qRlw461AC89MVlbmO&sz=w800"
    ]
  },
  {
    "id": "77",
    "title": "[Strategically located in a vibrant and established business hub] Office Unit [2 min to Giant Seri Kembangan]",
    "address": "Unit No. 21-03, Third Floor, Block C, Jalan Atmosphere 5, Pusat Perniagaan Atmosphere, Bandar Putra Permai, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 177147,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1CSsDMu9C_J0coUptevxdfMa66JMTr7zH&sz=w800"
    ]
  },
  {
    "id": "78",
    "title": "Service Apartment",
    "address": "Unit No. CT-13A-08 (Developer Parcel No. 3-13A-08), Cambridge Tower, Garden Plaza, Cyber 3, 63000 Cyberjaya, Selangor",
    "postcode": "63000",
    "state": "Selangor",
    "area": "Cyberjaya",
    "reservePrice": 183710,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "450 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1LKoF6O5mmxNN_7Z1PtsJMMwVpW_yR2Ok&sz=w800"
    ]
  },
  {
    "id": "79",
    "title": "[3 min to The Curve, IKEA Damansara & Lotus Mutiara Damansara] Service Apartment [5 min to One Utama Shopping Centre & IPC Shopping Centre]",
    "address": "Unit No. E-09-01, Metropolitan Square Condominium, No. 2, Jalan PJU 8/1, Bandar Damansara Perdana, 47820 Petaling Jaya, Selangor",
    "postcode": "47820",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 316000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "238 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1EyFAVD6Zx5E2sLlYMD1_zbQr2VF_dilR&sz=w800"
    ]
  },
  {
    "id": "80",
    "title": "2 Storey Service Twin Villa [8 min to Morib Beach]",
    "address": "No. 17, Jalan Ketingting 5, Bandar Peranginan Seri Morib, 42700 Banting, Selangor",
    "postcode": "42700",
    "state": "Selangor",
    "area": "Banting",
    "reservePrice": 316000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "625 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1iD5-M-fZ4xRrHfSabXVoYrvXdv92PQIH&sz=w800",
      "https://drive.google.com/thumbnail?id=1Uc3lkwaq5a_agL_tPdhw00sG6YFIpuXO&sz=w800",
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "81",
    "title": "SOHO",
    "address": "Unit No. D-33-10, Parisien 2, Persiaran Multimedia, I-City, Seksyen 7, 40000 Shah Alam, Selangor",
    "postcode": "40000",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 257000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "657 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Vbc9_VI0o12ZQoE_eaCSHTv6JBxmE0Ob&sz=w800"
    ]
  },
  {
    "id": "82",
    "title": "Condominium",
    "address": "Unit No. A-1107, Block A, Perdana View Condo, No. 15, Jalan PJU 8/1, Bandar Damansara Perdana, 47820 Petaling Jaya, Selangor",
    "postcode": "47820",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 315900,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "150 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1fIk1THzTpAGV_9WdlAUI-DfpY4e6YkPh&sz=w800"
    ]
  },
  {
    "id": "83",
    "title": "Condominium",
    "address": "Unit No. A-13-03, Block A (On Site Block Aristata), Jalan Sutera Pines, Sutera Pines, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 288000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "119 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1YRtU4cl69nwXEm5mY0qol0BbD-oaK_R0&sz=w800",
      "https://drive.google.com/thumbnail?id=1DaUlpgZ6SJ6N50Zugkbp8LZu4O95nC0m&sz=w800",
      "https://drive.google.com/thumbnail?id=1X9B1hIbEQQbR3FKrKxhbEmFRuk4RMR1s&sz=w800"
    ]
  },
  {
    "id": "84",
    "title": "2 Storey Terrace House",
    "address": "No. 91, Jalan Eco Forest 2/2C, Birchpark, Eco Forest, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 396000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "943 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Ij4Dh9oH1jtzhhYvfGhTowGisR2fORGN&sz=w800"
    ]
  },
  {
    "id": "85",
    "title": "Service Apartment",
    "address": "Unit No. B-25-12, Block B (Bora), Residensi Damai Meriah (The Zizz), No. 2, Jalan PJU 10/1A, Damansara Damai, PJU 10, 47830 Petaling Jaya, Selangor",
    "postcode": "47830",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 230400,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "807 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1bILgLy_kcfvkWtU7sOzeK4okiUGWAWKf&sz=w800",
      "https://drive.google.com/thumbnail?id=1HMbRlIBaN7CL5W7saY0pa9717AgsrJqe&sz=w800",
      "https://drive.google.com/thumbnail?id=1klq4Ln1xSfvGYJTXK8hExj0xxOGk5S8h&sz=w800",
      "https://drive.google.com/thumbnail?id=1sUOfUahMXJlGkGPTVnZlnA-CCYQ7Xv96&sz=w800",
      "https://drive.google.com/thumbnail?id=1yTOMu6i_eYuhrtp0cQP3xnQe9TwK6VrA&sz=w800"
    ]
  },
  {
    "id": "86",
    "title": "Apartment",
    "address": "Unit No. 5-15, Residensi Damai, Jalan Damai, Bandar Teknologi Kajang, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 202500,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "818 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1nsCqJn-OL_i9u7hErjRdrSQNBIBDqg7Y&sz=w800"
    ]
  },
  {
    "id": "87",
    "title": "Service Apartment",
    "address": "Unit No. A-29-07, 29th Floor, Block A, Koi Prima, Jalan Pinggiran Mas, Taman Mas Langat, 47130 Puchong, Selangor",
    "postcode": "47130",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 297000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "098 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1WqGJMm5FmFlUfZxV4Nim08HkDx9AbpUZ&sz=w800"
    ]
  },
  {
    "id": "88",
    "title": "Office Unit",
    "address": "Unit No. CO-13-01, Block CO, Sunsuria Forum, Jalan Setia Dagang AL U13/AL, Setia Alam, Seksyen U13, 40170 Shah Alam, Selangor",
    "postcode": "40170",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 357210,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "743 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1DGkvEzB7Ojc89F7OnObUmWNlYQcjUNNu&sz=w800",
      "https://drive.google.com/thumbnail?id=1EUM3-5Cpn_Q8uILhe9U0dd6VwAe4eKMC&sz=w800",
      "https://drive.google.com/thumbnail?id=1kV3siLEnvAN8wXkm9T5wTM31wYemXEah&sz=w800",
      "https://drive.google.com/thumbnail?id=1afsXGfzqhTQHr1j7ph-WinHDf6MMyFfO&sz=w800"
    ]
  },
  {
    "id": "89",
    "title": "[6 min to Hospital Cyberjaya] Apartment [8 min to Tamarind Square]",
    "address": "Unit No. 3-08-15, Block 3, Aspire Residence, Jalan Aspire 1, Cyber 10, 63000 Cyberjaya, Selangor",
    "postcode": "63000",
    "state": "Selangor",
    "area": "Cyberjaya",
    "reservePrice": 247860,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "900 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1XlCbLlbcMw9MGejAPEmu0ycsBsbpqVxH&sz=w800"
    ]
  },
  {
    "id": "90",
    "title": "[8 min to Zoo Negara Malaysia & Giant Panda Conservation Centre ] Flat [Convenient access to Kuala Lumpur City Centre ]",
    "address": "Unit No. 214, Tingkat 2, Block A, Rumah Pangsa Kos Rendah, Jalan Ukay Perdana 2, Taman Ukay Perdana, 68000 Ampang, Selangor",
    "postcode": "68000",
    "state": "Selangor",
    "area": "Ampang",
    "reservePrice": 94770,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "650 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1BTQNBdFzsuc0ETpDMyfGky1JqTMj1iBK&sz=w800"
    ]
  },
  {
    "id": "91",
    "title": "[4 min to Damansara Specialist Hospital 2 & The Curve] Service Apartment [6 min to Lotus's Mutiara Damansara, Mutiara Damansara MRT Station & 1 Utama Shopping Centre]",
    "address": "Unit No. A-21-07, Blok A, Metropolitan SQ, Jalan PJU 8/1, Damansara Perdana, 47820 Petaling Jaya, Selangor",
    "postcode": "47820",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 277020,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "975 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1EyFAVD6Zx5E2sLlYMD1_zbQr2VF_dilR&sz=w800"
    ]
  },
  {
    "id": "92",
    "title": "[4 min to Damansara Damai MRT Station ] Retail Lot [7 min to Econsave Damansara Damai]",
    "address": "No. GG-088, Block G, Jalan PJU 10/3C, Seasons Square, Damansara Damai, 47830 Petaling Jaya, Selangor",
    "postcode": "47830",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 80190,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "474 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1cq6GRAsijp2iSoq3fvVNiT4t4ICOB46P&sz=w800",
      "https://drive.google.com/thumbnail?id=1RuKCxn-MhtW3De_UPHUyP3kqhSPU3hyp&sz=w800"
    ]
  },
  {
    "id": "93",
    "title": "[5 min to Klang KTM Station] Office Lot [10 min to Klang Parade]",
    "address": "No. 27-1, Block B, Menara Klang, Jalan Nanas, 41050 Klang, Selangor",
    "postcode": "41050",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 269730,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "365 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1OzZGYvnTcZwQwItbA4q7awJPeSxJDJ5t&sz=w800"
    ]
  },
  {
    "id": "94",
    "title": "Apartment",
    "address": "Unit No. A-21-13, Residensi Bukit Tiara, Jalan Karunmas 10, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 292000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "001 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=12ECJempC_erWbPa3MlkepEK4q4ip5nRZ&sz=w800"
    ]
  },
  {
    "id": "95",
    "title": "[Walking distance to Ara Damansara LRT Station ] Service Apartment [5 min to CITTA Mall]",
    "address": "Unit No. A-3A-15, Block A, Pacific Place Commercial Centre, Jalan PJU 1A/4, Ara Damansara, 47301 Petaling Jaya, Selangor",
    "postcode": "47301",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 409000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "270 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1fgdASohUh79dYjs0-_aifQ9lYXoFA_Dw&sz=w800"
    ]
  },
  {
    "id": "96",
    "title": "2 Storey Cluster Semi Detached House",
    "address": "Premises No. 5, Jalan MR 2/9, Taman M-Residensi 2, 48020 Rawang, Selangor",
    "postcode": "48020",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 475000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "080 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Tk-KpFs1kKGp9pO9ENDye_fS-K3mDkUY&sz=w800"
    ]
  },
  {
    "id": "97",
    "title": "Office Unit",
    "address": "Unit No. N-P-01, Encorp Strand Garden, No. 12, Jalan PJU 5/1, Kota Damansara, 47810 Petaling Jaya, Selangor",
    "postcode": "47810",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 402000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "032 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1vLw2f8NTn8Vmf8Ku1au7e9HEFmPjG0Gt&sz=w800",
      "https://drive.google.com/thumbnail?id=1YUf4eKnvAaAqPUEnwsYMCfVpD4P6Fd8z&sz=w800",
      "https://drive.google.com/thumbnail?id=1c3T6VzRm8ttGoxv3FtTlqwXUZndFLkJP&sz=w800",
      "https://drive.google.com/thumbnail?id=1G-sg0txMjtKmp-tupGktrOi7MXW4XlVR&sz=w800"
    ]
  },
  {
    "id": "98",
    "title": "Office Unit",
    "address": "Unit No. G-P-01, Encorp Strand Garden, No. 12, Jalan PJU 5/1, Kota Damansara, 47810 Petaling Jaya, Selangor",
    "postcode": "47810",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 402000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "032 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1vLw2f8NTn8Vmf8Ku1au7e9HEFmPjG0Gt&sz=w800",
      "https://drive.google.com/thumbnail?id=1YUf4eKnvAaAqPUEnwsYMCfVpD4P6Fd8z&sz=w800",
      "https://drive.google.com/thumbnail?id=1c3T6VzRm8ttGoxv3FtTlqwXUZndFLkJP&sz=w800",
      "https://drive.google.com/thumbnail?id=1G-sg0txMjtKmp-tupGktrOi7MXW4XlVR&sz=w800"
    ]
  },
  {
    "id": "99",
    "title": "Service Apartment",
    "address": "Unit No. A-32-7, KR7 Residence, Jalan TPP 5, Taman Mas Langat, 47130 Puchong, Selangor",
    "postcode": "47130",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 242000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "797 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1CX3eZtkUNOBGEJsBUISdGYfedSxP8BH0&sz=w800",
      "https://drive.google.com/thumbnail?id=1ENIX2B8OD2pTg3tSSAGac_8BcKto7ia0&sz=w800"
    ]
  },
  {
    "id": "100",
    "title": "Retail Unit",
    "address": "Unit No. GS-035, Blok G, Jalan PJU 10/3C, Seasons Square, Damansara Damai, 47830 Petaling Jaya, Selangor",
    "postcode": "47830",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 60000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "471 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1cq6GRAsijp2iSoq3fvVNiT4t4ICOB46P&sz=w800",
      "https://drive.google.com/thumbnail?id=1RuKCxn-MhtW3De_UPHUyP3kqhSPU3hyp&sz=w800"
    ]
  },
  {
    "id": "101",
    "title": "[7 min to ECONSAVE Damansara Damai] Apartment [9 min to Damansara Damai MRT Station]",
    "address": "Unit No. C-15-26, Block C, Apartment Lestari, No. 1, Jalan PJU 10/1B, Damansara Damai, 47830 Petaling Jaya, Selangor",
    "postcode": "47830",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 76500,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "650 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1LcvH0kvvNJ8hgSCi-Z6mIXwXhakMZ7wp&sz=w800"
    ]
  },
  {
    "id": "102",
    "title": "Condominium",
    "address": "Unit No. A-6-9, Block A, Jalan Setia Jaya, Residensi Legendview, 48000 Rawang, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 307800,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "994 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=19KrtG5kLDtfvd7ZgEdTVJqSe3XCqINha&sz=w800"
    ]
  },
  {
    "id": "103",
    "title": "1 Storey Terrace House",
    "address": "No. 8, Jalan Kemudi 2J, Bernam Jaya, 44100 Hulu Bernam, Selangor",
    "postcode": "44100",
    "state": "Selangor",
    "area": "Hulu Bernam",
    "reservePrice": 153900,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1rEfVd49v5Xf4_deB0wSwbGD4H1Y4wRj3&sz=w800"
    ]
  },
  {
    "id": "104",
    "title": "Service Apartment [Link bridge to Kampung Selamat MRT Station; 8 min to Econsave Sungai Buloh]",
    "address": "Unit No. SA-22-08, Dataran Prestij (SqWhere), Jalan Sungai Buloh, Kampung Baru Sungai Buloh, Seksyen U19, 40160 Shah Alam, Selangor",
    "postcode": "40160",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 620000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "442 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1lbVjWQszIJlwKiW4DzmH0eBgr6So0Nbw&sz=w800"
    ]
  },
  {
    "id": "105",
    "title": "Duplex Condominium",
    "address": "Unit No. B-11-C08, Armanee Terrace Condominium, No. 8. Jalan PJU 8/1, Bandar Damansara Perdana, 47820 Petaling Jaya, Selangor",
    "postcode": "47820",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 670000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "411 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1LHBQhrYWG6mrfGfCqI2l8YBvLn84j3_Z&sz=w800"
    ]
  },
  {
    "id": "106",
    "title": "[8 min to Tamarind Square] 2 Storey Terrace House [10 min to DPULZE Shopping Centre]",
    "address": "No. 80, Maple Residence, Jalan MR 1, Laman View, Cyber 9, 63000 Cyberjaya, Selangor",
    "postcode": "63000",
    "state": "Selangor",
    "area": "Cyberjaya",
    "reservePrice": 760000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "873 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=18uwdImdMTGnLbwAp2hQj0xVM7VJ-DmNl&sz=w800"
    ]
  },
  {
    "id": "107",
    "title": "Service Apartment",
    "address": "Unit No. C-07-03, Menara C, City of Green, Jalan PBS 14/2, Seksyen 13, Taman Bukit Serdang, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 264000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "000 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1jiY9r4SfusMiFr7i5luJwVCyPbQgICBq&sz=w800",
      "https://drive.google.com/thumbnail?id=10SCt5DTxOvUt_5rSXnZnBMUaDqnDCUyQ&sz=w800",
      "https://drive.google.com/thumbnail?id=1OCjoC9MO7BlZMCCH6V1x6IFZn8J-lxHW&sz=w800"
    ]
  },
  {
    "id": "108",
    "title": "2 Storey Terrace House",
    "address": "No. 8, Jalan Cheras Prima 8, Taman Cheras Prima, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 368000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "500 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1luafB70ZonCCpSe7i8mkr6YAEtHtbRpo&sz=w800"
    ]
  },
  {
    "id": "109",
    "title": "[3 min walking distance to Jaya Grocer Eco Grandeur] 2 Storey Terrace House [8 min to HeroMarket Puncak Bestari]",
    "address": "No. 31, Jalan Eco Grandeur 2/2B, Eco Grandeur, 42300 Bandar Puncak Alam, Selangor",
    "postcode": "42300",
    "state": "Selangor",
    "area": "Bandar Puncak Alam",
    "reservePrice": 592000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "099 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1rLHGA7D4C9le88v_8o4XyuG3rYJF1UM5&sz=w800"
    ]
  },
  {
    "id": "110",
    "title": "[Next to Taman Connaught MRT Station] Service Apartment [2 min to Cheras Sentral Mall]",
    "address": "Unit No. 13A-3A, Medan Connaught (The Annex), Jalan 3/144A, 56000 Cheras, Selangor",
    "postcode": "56000",
    "state": "Selangor",
    "area": "Cheras",
    "reservePrice": 408000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "141 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1x5sAPzbVEc--MvBIT496zzjFcttJPvkk&sz=w800"
    ]
  },
  {
    "id": "111",
    "title": "Apartment",
    "address": "Unit No. E-10-01, Block E, Flora Damansara, No. 1, Jalan PJU 8/9, Bandar Damansara Perdana, 47820 Petaling Jaya, Selangor",
    "postcode": "47820",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 200000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "080 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1JyxHzrc2fvS5Ns_80SyuDZ3fnFI97lh-&sz=w800",
      "https://drive.google.com/thumbnail?id=1mBbad4vSZ_ktjrntFNFO8P9KOW6OGCuA&sz=w800"
    ]
  },
  {
    "id": "112",
    "title": "[7 min to Taman Suntex MRT Station] Condominium [10 min to NSK Trade City Taman Suntex]",
    "address": "Unit No. A-23-09, Block A, Residensi Sembilan Cheras, Jalan Suria Residen, 43200 Cheras, Selangor",
    "postcode": "43200",
    "state": "Selangor",
    "area": "Cheras",
    "reservePrice": 416000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "496 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Yxyn3IrlYKNyS5e0y26jVGWAgBrbEZjU&sz=w800",
      "https://drive.google.com/thumbnail?id=16Kn0UKyx3QdC7gsbyG-vaKPUUuO-2bq9&sz=w800",
      "https://drive.google.com/thumbnail?id=16ofI6BN6W6gq63djtmclg_IPoKgGBhO-&sz=w800",
      "https://drive.google.com/thumbnail?id=1r_Qtq96HzoceRfNC0Td7KF0486AIg7ln&sz=w800",
      "https://drive.google.com/thumbnail?id=13FfGYcVLovuvRMGvV3Dr8cgiiRAnahQz&sz=w800"
    ]
  },
  {
    "id": "113",
    "title": "[Facing main road - Jalan Semenyih ] Retail Unit [Close to Kajang-Seremban Highway ]",
    "address": "No. SF-03, Plaza Kiara, Jalan Semenyih, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 364500,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "292 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1M-Qg5BJ52E_--kKxvXKUFFpFDeFQsB1Q&sz=w800",
      "https://drive.google.com/thumbnail?id=1023QpSjnPR5RW2Q4hzzYn4CwyRV9ix4d&sz=w800",
      "https://drive.google.com/thumbnail?id=155a5alHna8C3q9ic_SMsamiu0PFrZjr9&sz=w800",
      "https://drive.google.com/thumbnail?id=1foFnkSUJ97WzOgp7bAC-YfBdqYu33c33&sz=w800",
      "https://drive.google.com/thumbnail?id=1nOSAuFZD0nrxFW4H_eC55BPONdZKRzPC&sz=w800",
      "https://drive.google.com/thumbnail?id=1N4ZqLm1rlW5gLTX9e4f42iDKwB_utP4k&sz=w800"
    ]
  },
  {
    "id": "114",
    "title": "2 Storey Terrace Shop Office [5 min to UiTM Cawangan Selangor]",
    "address": "No. 11, Jalan Hillpark 11/4, Pusat Perdagangan Hillpark, Bandar Hillpark, 42300 Bandar Puncak Alam, Selangor",
    "postcode": "42300",
    "state": "Selangor",
    "area": "Bandar Puncak Alam",
    "reservePrice": 567000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "647 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1prJvufCbKJc8Rjw-Dlz7MJWL3Lv55IqJ&sz=w800"
    ]
  },
  {
    "id": "115",
    "title": "2 Storey Terrace House",
    "address": "No. 9, Jalan Kota Puteri 2/6, Kota Puteri, 48100 Batu Arang, Selangor",
    "postcode": "48100",
    "state": "Selangor",
    "area": "Batu Arang",
    "reservePrice": 405000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "561 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1QZw3CSaDSsOEyCBeYXhIoEdt7wpEMJKY&sz=w800"
    ]
  },
  {
    "id": "116",
    "title": "Apartment",
    "address": "Unit No. C-6-15, Pangsapuri Embun Bayu, No. 1, Persiaran Kosmos, Subang Murni, Seksyen U5, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 405000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "002 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1meLV4wK2DNqYYj7JPsGZYQTceVxTNLMV&sz=w800"
    ]
  },
  {
    "id": "117",
    "title": "Apartment",
    "address": "Unit No. C-5-12, Block C, Pangsapuri Embun Bayu (also known as Embayu Damansara West), Persiaran Kosmos, Taman Subang Murni Seksyen U5, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 372600,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "002 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1meLV4wK2DNqYYj7JPsGZYQTceVxTNLMV&sz=w800"
    ]
  },
  {
    "id": "118",
    "title": "[Tranquil retreat away from the hustle and bustle of city life] 3 Storey Detached House with basement, swimming pool and private lift [7 min to Gamuda Walk Mall; 9 min to Giant Hypermarket Kemuning Utama]",
    "address": "No. 7, Jalan Kemuning Mutiara 33/158B, Residence 33, Taman Kemuning Utama, Seksyen 33, 40400 Shah Alam, Selangor",
    "postcode": "40400",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 1944000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "437 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1h0DKLFM6m4xcKauyKxmFTV93gH2EojRl&sz=w800"
    ]
  },
  {
    "id": "119",
    "title": "Apartment",
    "address": "Unit No. E-22-08, Block E, Flora Damansara, No. 1, Jalan PJU 8/9, Bandar Damansara Perdana, 47820 Petaling Jaya, Selangor",
    "postcode": "47820",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 186300,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "850 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1JyxHzrc2fvS5Ns_80SyuDZ3fnFI97lh-&sz=w800",
      "https://drive.google.com/thumbnail?id=1mBbad4vSZ_ktjrntFNFO8P9KOW6OGCuA&sz=w800"
    ]
  },
  {
    "id": "120",
    "title": "Condominium",
    "address": "Unit No. A-05-22A, Blok A, One Damansara, No. 1, Jalan PJU 10/3C, Damansara Damai, 47830 Petaling Jaya, Selangor",
    "postcode": "47830",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 405000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "396 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1f1MVTFluLR4unoVia5ngF9mrxuwJ4Vye&sz=w800",
      "https://drive.google.com/thumbnail?id=1yXGRdeNODT0H8AZSmqqqE7aMWDGcEzoV&sz=w800",
      "https://drive.google.com/thumbnail?id=1C7R58XD8zmINzNB4vNMbMsagX6ryl-I9&sz=w800",
      "https://drive.google.com/thumbnail?id=1ozvILgaJngc5P8UD-llaZMbDFxkkFOFa&sz=w800"
    ]
  },
  {
    "id": "121",
    "title": "Service Apartment",
    "address": "Unit No. B-03-03, Duet Residensi, Jalan Kinrara 6, Bandar Kinrara, 47180 Puchong, Selangor",
    "postcode": "47180",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 356400,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "298 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1kBktIsCpZ8C8VRKAt__ab4_HBID3F21u&sz=w800"
    ]
  },
  {
    "id": "122",
    "title": "Service Apartment",
    "address": "Unit No. B-02-03, Duet Residensi, Jalan Kinrara 6, Bandar Kinrara, 47180 Puchong, Selangor",
    "postcode": "47180",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 356400,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "298 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1kBktIsCpZ8C8VRKAt__ab4_HBID3F21u&sz=w800"
    ]
  },
  {
    "id": "123",
    "title": "Service Apartment",
    "address": "Unit No. T1-22-08, Sky Park Tower 1, Jalan Teknokrat 1, Cyber 3, 63000 Cyberjaya, Selangor",
    "postcode": "63000",
    "state": "Selangor",
    "area": "Cyberjaya",
    "reservePrice": 243000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "887 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Ez83KInaBna5ec4T2J8jz8XwcZo68UDr&sz=w800"
    ]
  },
  {
    "id": "124",
    "title": "Service Apartment",
    "address": "Unit No. D-13-17, Block D, Kompleks Suria Kinrara, Persiaran Kinrara Seksyen 3, 47190, Puchong, Selangor",
    "postcode": "47190",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 154000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "712 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=11KfJe9rkzaTEKbhExx3gsnrEGgdSkQ7T&sz=w800"
    ]
  },
  {
    "id": "125",
    "title": "Service Apartment",
    "address": "Unit No. T1-16-21, Tower 1, BSP Skypark, Persiaran Saujana Putra Utama, Bandar Saujana Putra, 42610 Jenjarom, Selangor",
    "postcode": "42610",
    "state": "Selangor",
    "area": "Jenjarom",
    "reservePrice": 381000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "378 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1t6A5sRPJK23DXuGhAboHfKPv8m6ZYAoL&sz=w800"
    ]
  },
  {
    "id": "126",
    "title": "Service Apartment",
    "address": "Unit No. A-18-01, Pangsapuri Perkhidmatan Tulip, No. 6, Persiaran Metafasa, Taman Bukit Subang, Seksyen U16, 40160 Shah Alam, Selangor",
    "postcode": "40160",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 365000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "957 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=101KQR0GVKDyrqkcn9UqaEWmg05UfNVfk&sz=w800"
    ]
  },
  {
    "id": "127",
    "title": "Service Apartment",
    "address": "Unit No. C-8-06, The Heritage Residence, Jalan SB Dagang, Mines Resort City, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 260000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "995 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1LNNzGDs4s_7Y4NTJal-QVj8UOYjGrhbL&sz=w800",
      "https://drive.google.com/thumbnail?id=1gmT2uYnpUC-DdR6a_VUMF2xb1drSWp9r&sz=w800",
      "https://drive.google.com/thumbnail?id=1FmnflLELQ9DlRkVnmeu7pMarUuUFB3nZ&sz=w800",
      "https://drive.google.com/thumbnail?id=1pwxaHlxBXNir7wOgzFnGzRaL-xRHWxix&sz=w800",
      "https://drive.google.com/thumbnail?id=1YScd16HtIjLAbXZrvvXKRFv3uP5nr1wT&sz=w800"
    ]
  },
  {
    "id": "128",
    "title": "2 Storey Detached House",
    "address": "No. 28, Jalan Bukit Templer, Taman Bukit Templer, 48000 Rawang, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 2070000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "580 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jhfvJbjLIZNv0nOTu1NQE9Myq5BcYuT4&sz=w800"
    ]
  },
  {
    "id": "129",
    "title": "[8 min to Lotus's Setia Alam] Apartment [10 min to Klang Parade]",
    "address": "Unit No. E-4-16, Block E, Pangsapuri Rebana, Jalan Gamelan, Bandar Bukit Raja, 41050 Klang, Selangor",
    "postcode": "41050",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 64000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "657 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1MMvo2a2opY8QRlHkiNoQHw4rNiF-gJTQ&sz=w800"
    ]
  },
  {
    "id": "130",
    "title": "Apartment",
    "address": "Unit No. 3-11-14, Block 3, Aspire Residence, Persiaran Aspirasi, 63000 Cyberjaya, Selangor",
    "postcode": "63000",
    "state": "Selangor",
    "area": "Cyberjaya",
    "reservePrice": 273600,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "900 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1XlCbLlbcMw9MGejAPEmu0ycsBsbpqVxH&sz=w800"
    ]
  },
  {
    "id": "131",
    "title": "Condominium",
    "address": "Unit No. A-26-12, Menara Semarak, Jalan Ariza, Taman Raintree, Off Jalan Raintree Utama, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 400000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "206 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1JEUD_GmSzG6HcPq8ePzHP4NqOOYQt_hl&sz=w800"
    ]
  },
  {
    "id": "132",
    "title": "Apartment",
    "address": "Unit No. 23-03, Akoya Residence, Jalan Mutiara 3, Mutiara Heights, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 342000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "249 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1quZDmRHLmmHtHjNh2X3s8WvFoBw5jGxW&sz=w800"
    ]
  },
  {
    "id": "133",
    "title": "[Surrounded by commercial area & hotels] Retail Unit (Ground Floor) [7 min to Asia Jaya LRT Station]",
    "address": "Unit No. G-050, Podium Block, PJ Centrestage, No. 1, Jalan 13/1, Seksyen 13, 46200 Petaling Jaya, Selangor",
    "postcode": "46200",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 252000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "312 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1lmRezHh-Js5zdTxgqoxziRp40COjlgh6&sz=w800"
    ]
  },
  {
    "id": "134",
    "title": "Flat [12 mins to Taman Connaught MRT Station; 5 mins to Econsave Segar Perdana]",
    "address": "Unit No. A3-3-8, Block A3, Persiaran Bukit Hatamas, Taman Bukit Hatamas, 43200 Cheras, Selangor",
    "postcode": "43200",
    "state": "Selangor",
    "area": "Cheras",
    "reservePrice": 144000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "650 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1fiTEZ2pvD5Lk3XxIIJEpgUoEI4DopjpT&sz=w800"
    ]
  },
  {
    "id": "135",
    "title": "Town House",
    "address": "No. 7, Jalan KM 17, Kita Mekar @ Cybersouth, 43800 Dengkil, Selangor",
    "postcode": "43800",
    "state": "Selangor",
    "area": "Dengkil",
    "reservePrice": 333000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "920 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1LWXy4gAEXWDHmdGsuOlDtd7Ss5Umf7qM&sz=w800"
    ]
  },
  {
    "id": "136",
    "title": "[9 min to Park Place @ CyberSouth] Town House [Close to Putrajaya & Cyberjaya KLIA Transit Station]",
    "address": "Unit No. 15A, Jalan KM 23, Kita Mekar, Cybersouth, 43800 Dengkil, Selangor",
    "postcode": "43800",
    "state": "Selangor",
    "area": "Dengkil",
    "reservePrice": 297000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "104 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1LWXy4gAEXWDHmdGsuOlDtd7Ss5Umf7qM&sz=w800"
    ]
  },
  {
    "id": "137",
    "title": "Apartment",
    "address": "Unit No. A-1-7, Pangsapuri Pelangi Heights, Jalan Pelangi, 41300 Klang, Selangor",
    "postcode": "41300",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 378000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "173 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1CYPX0CHgE2QnkGg4L65VW6Ylysd_Sqn2&sz=w800"
    ]
  },
  {
    "id": "138",
    "title": "Studio Unit of SOHO",
    "address": "Unit No. B-21-03A, Jalan Pusat Bandar 2, Kompleks EVO, 43650 Bandar Baru Bangi, Selangor",
    "postcode": "43650",
    "state": "Selangor",
    "area": "Bandar Baru Bangi",
    "reservePrice": 207000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "454 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=17Wz-2EhvK4aDTbEOFfu71VTZ1oJPvWeH&sz=w800",
      "https://drive.google.com/thumbnail?id=13_FsIRaZ9R-VoTqy1FSxkeqLLKrT4FJ8&sz=w800"
    ]
  },
  {
    "id": "139",
    "title": "Apartment",
    "address": "Unit No. A-21-05, Residensi Topaz, Jalan Mutiara 2, Mutiara Heights (Rumah Pangsa), 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 423000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "290 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1P1K6wYrNUIZoQlsU3v8lDYMtuggrgtKT&sz=w800",
      "https://drive.google.com/thumbnail?id=1oK-ZXhIMP6ydtReJtdkXD_hxlXkjfvI-&sz=w800"
    ]
  },
  {
    "id": "140",
    "title": "Service Apartment",
    "address": "Unit No. C1507, Tower C, Mutiara Ville, Persiaran Sepang, Cyber 11, 63000, Cyberjaya, Selangor",
    "postcode": "63000",
    "state": "Selangor",
    "area": "Cyberjaya",
    "reservePrice": 396000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "180 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Np6uGfZzW5mfeUp-liptXAjwgdPh5BIA&sz=w800"
    ]
  },
  {
    "id": "141",
    "title": "Service Apartment",
    "address": "Unit No. C0307, Tower C, Mutiara Ville, Persiaran Sepang, Cyber 11, 63000 Cyberjaya, Selangor",
    "postcode": "63000",
    "state": "Selangor",
    "area": "Cyberjaya",
    "reservePrice": 369000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "180 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Np6uGfZzW5mfeUp-liptXAjwgdPh5BIA&sz=w800"
    ]
  },
  {
    "id": "142",
    "title": "Service Apartment",
    "address": "Unit No. C03A06, Tower C, Mutiara Ville, Persiaran Sepang, Cyber 11, 63000 Cyberjaya, Selangor",
    "postcode": "63000",
    "state": "Selangor",
    "area": "Cyberjaya",
    "reservePrice": 369000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "180 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Np6uGfZzW5mfeUp-liptXAjwgdPh5BIA&sz=w800"
    ]
  },
  {
    "id": "143",
    "title": "[Dual Key] Service Apartment",
    "address": "Unit No. 13-17, Saville D'Lake, Jalan Saville, 47130 Puchong, Selangor",
    "postcode": "47130",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 558000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "560 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HC4sJA7spGHjVuFcG2txj5a6nzpBzav9&sz=w800",
      "https://drive.google.com/thumbnail?id=10l3DEIQzXWiM4WyCNXh0bSH6Gf2YSBWV&sz=w800",
      "https://drive.google.com/thumbnail?id=1KKHoRlbZEE9LsPSPSCzpf8Fx9yFWYTQl&sz=w800"
    ]
  },
  {
    "id": "144",
    "title": "Apartment",
    "address": "Unit No. 3-5-9, Block 3, Aspire Residence, Persiaran Aspirasi, 63000 Cyberjaya, Selangor",
    "postcode": "63000",
    "state": "Selangor",
    "area": "Cyberjaya",
    "reservePrice": 288000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "900 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1XlCbLlbcMw9MGejAPEmu0ycsBsbpqVxH&sz=w800"
    ]
  },
  {
    "id": "145",
    "title": "Apartment",
    "address": "Unit No. 3-22-11, Block 3, Jalan Aspire 1, Aspire Residence, Cyber 10, 63000 Cyberjaya, Selangor",
    "postcode": "63000",
    "state": "Selangor",
    "area": "Cyberjaya",
    "reservePrice": 265500,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "900 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1XlCbLlbcMw9MGejAPEmu0ycsBsbpqVxH&sz=w800"
    ]
  },
  {
    "id": "146",
    "title": "[Gated and Guarded] 2 Storey Terrace House [Nestled within an emerging newly developed neighbourhood, Kajang East Precinct 2]",
    "address": "No. 19, Jalan Kajang East 2/3, Kajang East, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 666000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "328 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=19nZGoCdrFchKLcl40JeTY7K22T1W0qxG&sz=w800"
    ]
  },
  {
    "id": "147",
    "title": "Retail Unit",
    "address": "No. SF-12, Plaza Kiara, Jalan Semenyih, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 405000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "345 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1M-Qg5BJ52E_--kKxvXKUFFpFDeFQsB1Q&sz=w800",
      "https://drive.google.com/thumbnail?id=1023QpSjnPR5RW2Q4hzzYn4CwyRV9ix4d&sz=w800",
      "https://drive.google.com/thumbnail?id=155a5alHna8C3q9ic_SMsamiu0PFrZjr9&sz=w800",
      "https://drive.google.com/thumbnail?id=1foFnkSUJ97WzOgp7bAC-YfBdqYu33c33&sz=w800",
      "https://drive.google.com/thumbnail?id=1nOSAuFZD0nrxFW4H_eC55BPONdZKRzPC&sz=w800",
      "https://drive.google.com/thumbnail?id=1N4ZqLm1rlW5gLTX9e4f42iDKwB_utP4k&sz=w800"
    ]
  },
  {
    "id": "148",
    "title": "Service Apartment",
    "address": "Unit No. B-05-08, Block B, Tropicana Avenue, No. 12, Persiaran Tropicana, Tropicana Golf & Country Resort, PJU 3, 47410 Petaling Jaya, Selangor",
    "postcode": "47410",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 790000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "019 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1-gwvlfRTPp3haxuqUDf5aOiJKVWe2q5t&sz=w800",
      "https://drive.google.com/thumbnail?id=1oVwCMzlGvPCEqTmatTPvDnVVL2sVggCV&sz=w800",
      "https://drive.google.com/thumbnail?id=1p7SrJosQerqG9JFKTbkmLRre8ukDFpAJ&sz=w800",
      "https://drive.google.com/thumbnail?id=1Zqu98QB9DzbEhJXp3LXT0C539Ibz7xcf&sz=w800"
    ]
  },
  {
    "id": "149",
    "title": "2 Storey Terrace House",
    "address": "No. 99, Jalan SP 4/3, Salak Perdana, 43900 Sepang, Selangor",
    "postcode": "43900",
    "state": "Selangor",
    "area": "Sepang",
    "reservePrice": 750000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "360 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1FuKGBbVcRwsUzYeDceziWt4Umimqy_Qq&sz=w800"
    ]
  },
  {
    "id": "150",
    "title": "1 Storey Terrace House",
    "address": "No. 10, Jalan Kebun Nenas 4R/KS8, Bandar Putera 2, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 420000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "148 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1QxSR4JREleciEmEZNFcuFd_wvU1fVO6L&sz=w800"
    ]
  },
  {
    "id": "151",
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
    "id": "152",
    "title": "Service Apartment",
    "address": "Unit No. E-01-02, Block E, Radia Residensi, No. 3, Persiaran Singgahsana, Bukit Jelutong, Section U8, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 380000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "700 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=10f3LczV84NW4G0eaUrPhyqZ4Zq5kixYL&sz=w800"
    ]
  },
  {
    "id": "153",
    "title": "Service Apartment",
    "address": "Unit No. A-30-02, Block A, Kiara Plaza, Jalan Semenyih, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 300000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "066 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1M-Qg5BJ52E_--kKxvXKUFFpFDeFQsB1Q&sz=w800",
      "https://drive.google.com/thumbnail?id=1023QpSjnPR5RW2Q4hzzYn4CwyRV9ix4d&sz=w800",
      "https://drive.google.com/thumbnail?id=155a5alHna8C3q9ic_SMsamiu0PFrZjr9&sz=w800",
      "https://drive.google.com/thumbnail?id=1foFnkSUJ97WzOgp7bAC-YfBdqYu33c33&sz=w800",
      "https://drive.google.com/thumbnail?id=1nOSAuFZD0nrxFW4H_eC55BPONdZKRzPC&sz=w800",
      "https://drive.google.com/thumbnail?id=1N4ZqLm1rlW5gLTX9e4f42iDKwB_utP4k&sz=w800"
    ]
  },
  {
    "id": "154",
    "title": "2 Storey Shop Office",
    "address": "No. 204, Jalan Kajang Jaya 7, Taman Kajang Jaya, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 383130,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "604 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=10SOgd1b9Tyfeatx0A6AEH9oUnoyuVdJl&sz=w800"
    ]
  },
  {
    "id": "155",
    "title": "Office Unit",
    "address": "Lot B6-2, Jalan Selaman 1, Dataran Palma, Off Jalan Ampang, 68000 Ampang, Selangor",
    "postcode": "68000",
    "state": "Selangor",
    "area": "Ampang",
    "reservePrice": 380000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "556 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1hVHumbGQErjXJko30_HlL8A8fmU16zHp&sz=w800"
    ]
  },
  {
    "id": "156",
    "title": "Office Unit",
    "address": "Unit No. T5-19-01, Sky Park Tower 5, Jalan Teknokrat 1, Cyber 3, 63000 Cyberjaya, Selangor",
    "postcode": "63000",
    "state": "Selangor",
    "area": "Cyberjaya",
    "reservePrice": 800000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "390 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1Ez83KInaBna5ec4T2J8jz8XwcZo68UDr&sz=w800"
    ]
  },
  {
    "id": "157",
    "title": "Serviced Condominium",
    "address": "Unit No. D-09-01, Block D (Taisho), Koi Tropika, Jalan Puchong, Batu 13 1/2, 47100 Puchong, Selangor",
    "postcode": "47100",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 340000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "184 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1ZMgF1rIL7csPb_ZeZR5i3JkjV41S3WXP&sz=w800"
    ]
  },
  {
    "id": "158",
    "title": "Apartment",
    "address": "Unit No. C-4-7, Anggerik Apartment, Jalan Putra Perdana 1A, Taman Putra Perdana, 47130 Puchong, Selangor",
    "postcode": "47130",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 130000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "704 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1LLTSTS-rlyE07RzqUOX08V54in_7LLXF&sz=w800"
    ]
  },
  {
    "id": "159",
    "title": "Duplex Small Office Versatile Office (SOVO)",
    "address": "Unit No. T3-26-07, Pusat Perdagangan Icon City, No. 1B, Jalan SS 8/39, 47300 Petaling Jaya, Selangor",
    "postcode": "47300",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 470000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "745 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1tuc7RajRZ9c-jipw7LUsJdEToDHteJzx&sz=w800",
      "https://drive.google.com/thumbnail?id=1ItXP_7uLIqs_rr3woH7plv4rT3dnz-kX&sz=w800",
      "https://drive.google.com/thumbnail?id=1ck9sgIYpK_csuB0N5RkNWw2DweAYWzVJ&sz=w800"
    ]
  },
  {
    "id": "160",
    "title": "Flat",
    "address": "Unit No. 12-6-11, Pangsapuri Subang Hijauan, Jalan Bintang U5/33, Seksyen U5, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 120000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "650 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1bNwNmC7c0bnAjnxvilWGWOYQgHskhCOc&sz=w800"
    ]
  },
  {
    "id": "161",
    "title": "Service Apartment",
    "address": "Unit No. B-35-02, Block B, Residensi Suria Garden @ Puchong, Jalan Puchong Utama 2, Taman Puchong Utama, 47100 Puchong, Selangor",
    "postcode": "47100",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 430000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "876 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1yWWINAIB7uNVDmGmTTs6YY2pJ4W7bWPb&sz=w800"
    ]
  },
  {
    "id": "162",
    "title": "Apartment",
    "address": "Unit No. D-03-08, Block D, Flora Damansara, No. 1, Jalan PJU 8/9, Bandar Damansara Perdana, 47820 Petaling Jaya, Selangor",
    "postcode": "47820",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 180000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "750 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1JyxHzrc2fvS5Ns_80SyuDZ3fnFI97lh-&sz=w800",
      "https://drive.google.com/thumbnail?id=1mBbad4vSZ_ktjrntFNFO8P9KOW6OGCuA&sz=w800"
    ]
  },
  {
    "id": "163",
    "title": "Condominium",
    "address": "Unit No. T2-10-03, BSP Skypark, Persiaran Saujana Putra Utama, Bandar Saujana Putra, 42610 Jenjarom, Selangor",
    "postcode": "42610",
    "state": "Selangor",
    "area": "Jenjarom",
    "reservePrice": 268000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "004 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1t6A5sRPJK23DXuGhAboHfKPv8m6ZYAoL&sz=w800"
    ]
  },
  {
    "id": "164",
    "title": "Apartment",
    "address": "Unit No. 1-5, Block Greenquay, Cyber Heights Villa, Cyber 7, 63000, Cyberjaya, Selangor",
    "postcode": "63000",
    "state": "Selangor",
    "area": "Cyberjaya",
    "reservePrice": 333000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "219 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1_1whuQFDIbrNV5wCo-wYucgoKB-g_smG&sz=w800"
    ]
  },
  {
    "id": "165",
    "title": "Condominium",
    "address": "Unit No. B-12-3, Nadayu 28 Residen, Jalan PJS 11/7, Bandar Sunway, 47500 Subang Jaya, Selangor",
    "postcode": "47500",
    "state": "Selangor",
    "area": "Subang Jaya",
    "reservePrice": 1350000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "850 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1MSoEi0MMec7C9G5-jz9Qu1FjTb0CdQnX&sz=w800"
    ]
  },
  {
    "id": "166",
    "title": "2 Storey Garden House",
    "address": "No. 2A, Jalan Eco Grandeur 2/1L, Eco Grandeur, 42300 Bandar Puncak Alam, Selangor",
    "postcode": "42300",
    "state": "Selangor",
    "area": "Bandar Puncak Alam",
    "reservePrice": 760000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "798 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1rLHGA7D4C9le88v_8o4XyuG3rYJF1UM5&sz=w800"
    ]
  },
  {
    "id": "168",
    "title": "3 Storey Shop Unit",
    "address": "Lot 12, Kiara Plaza, Jalan Semenyih, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 2450000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "149 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1M-Qg5BJ52E_--kKxvXKUFFpFDeFQsB1Q&sz=w800",
      "https://drive.google.com/thumbnail?id=1023QpSjnPR5RW2Q4hzzYn4CwyRV9ix4d&sz=w800",
      "https://drive.google.com/thumbnail?id=155a5alHna8C3q9ic_SMsamiu0PFrZjr9&sz=w800",
      "https://drive.google.com/thumbnail?id=1foFnkSUJ97WzOgp7bAC-YfBdqYu33c33&sz=w800",
      "https://drive.google.com/thumbnail?id=1nOSAuFZD0nrxFW4H_eC55BPONdZKRzPC&sz=w800",
      "https://drive.google.com/thumbnail?id=1N4ZqLm1rlW5gLTX9e4f42iDKwB_utP4k&sz=w800"
    ]
  },
  {
    "id": "169",
    "title": "Service Apartment",
    "address": "Unit No. 13-10, Residensi Kosmos (D'Cosmos Residences), Sentral Damansara, Jalan PJU 8/8, Damansara Perdana, 47820 Petaling Jaya, Selangor",
    "postcode": "47820",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 600000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "100 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1siiKDsDs2rn376ZTIk57inQHJgA8wQdy&sz=w800"
    ]
  },
  {
    "id": "170",
    "title": "2 Storey Terrace House",
    "address": "No. 31, Jalan Kesuma 5/11, Bandar Tasik Kesuma, 43700 Beranang, Selangor",
    "postcode": "43700",
    "state": "Selangor",
    "area": "Beranang",
    "reservePrice": 330000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1GxcLcPSxi3AR4LOBInBtVk9qr_haqo-H&sz=w800"
    ]
  },
  {
    "id": "171",
    "title": "Service Apartment",
    "address": "Unit No. C2-30-03A, Savanna Executive Suites, Jalan Southville 2, Southville City, 43800 Dengkil, Selangor",
    "postcode": "43800",
    "state": "Selangor",
    "area": "Dengkil",
    "reservePrice": 530000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "023 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HBB5B1XiVhN9UWb5GketcU5ivTKKKI18&sz=w800",
      "https://drive.google.com/thumbnail?id=1N3NjjfXpN7X33YqjQB0AjXLSEJ2jKqEe&sz=w800",
      "https://drive.google.com/thumbnail?id=1M0LugbQ4RL-DY2mITFRl1B701CA5p1W4&sz=w800",
      "https://drive.google.com/thumbnail?id=164VoPnzZb9VqOQAcuPqXx-a8XdPVwvxJ&sz=w800"
    ]
  },
  {
    "id": "172",
    "title": "Apartment",
    "address": "Unit No. 3-01, Pangsapuri Seri Intan, Taman Seri Intan, 68000 Ampang, Selangor",
    "postcode": "68000",
    "state": "Selangor",
    "area": "Ampang",
    "reservePrice": 160000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "667 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=19Yc3JaCDAxscNfnHHJ-2TmSj75x3tXAC&sz=w800"
    ]
  },
  {
    "id": "173",
    "title": "Service Apartment",
    "address": "Unit No. P-15-07, No. 1, Jalan Setia Murni U13/51, Setia Alam, Seksyen U13, 40170 Shah Alam, Selangor",
    "postcode": "40170",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 252000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "501 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1bMYBncMJ1vyWCbPY71VwPtmwyeUiIu2O&sz=w800"
    ]
  },
  {
    "id": "174",
    "title": "Duplex Small Office Versatile Office (SOVO)",
    "address": "Unit No. T3A-8-18 (On Site is No. 08-18), Pusat Perdagangan Icon City, No. 1B, Jalan SS 8/39, 47300 Petaling Jaya, Selangor",
    "postcode": "47300",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 420000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "745 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1tuc7RajRZ9c-jipw7LUsJdEToDHteJzx&sz=w800",
      "https://drive.google.com/thumbnail?id=1ItXP_7uLIqs_rr3woH7plv4rT3dnz-kX&sz=w800",
      "https://drive.google.com/thumbnail?id=1ck9sgIYpK_csuB0N5RkNWw2DweAYWzVJ&sz=w800"
    ]
  },
  {
    "id": "175",
    "title": "Dual-Key Service Apartment",
    "address": "Unit No. J1-Q-16-2, Subang Olives Residence, Persiaran Kemajuan, Jalan SS 16, 47500 Subang Jaya, Selangor",
    "postcode": "47500",
    "state": "Selangor",
    "area": "Subang Jaya",
    "reservePrice": 800000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "927 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1P1YMIi6H4Eiukqrlh1Dm5DxuiZ4yFgQp&sz=w800"
    ]
  },
  {
    "id": "176",
    "title": "Apartment",
    "address": "Unit No. C-10-3, Block C, Sri Damansara Court, Persiaran Kenanga, Bandar Sri Damansara, 52200 Petaling Jaya, Selangor",
    "postcode": "52200",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 350000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "861 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1dOPI-CYqMojMEN9CVdodXolHEpW5GDdg&sz=w800"
    ]
  },
  {
    "id": "177",
    "title": "2 Storey Cluster Semi Detached House",
    "address": "No. 19, Jalan Eco Ardence U12/39F, Seksyen U12, Eco Ardence, 40170 Shah Alam, Selangor",
    "postcode": "40170",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 1620000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "378 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1u7nW_Lq1aw1CKCj7t2PlSmTLcS65fI0G&sz=w800",
      "https://drive.google.com/thumbnail?id=1m2XRjmAUC_GsdFiIFC6xo0Iyx1miHtqm&sz=w800"
    ]
  },
  {
    "id": "178",
    "title": "1 Storey Terrace House",
    "address": "No. 29, Jalan SP 8/25, Bandar Saujana Putra, 42610 Jenjarom, Selangor",
    "postcode": "42610",
    "state": "Selangor",
    "area": "Jenjarom",
    "reservePrice": 242757,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1opmDn-3IHZRIO6kT7vQbTMgkBb6qnKHm&sz=w800"
    ]
  },
  {
    "id": "179",
    "title": "Upper Ground Floor Shop Lot",
    "address": "No. C-01-09, Blok C, Jalan PPK 1, Pusat Perniagaan Kinrara, Taman Kinrara, Seksyen 3, 47190 Puchong, Selangor",
    "postcode": "47190",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 1000000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "734 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1LJ1V5Ky0OOTWyBAn2-db6xo1N0B6GDtD&sz=w800"
    ]
  },
  {
    "id": "180",
    "title": "Upper Ground Floor Shop Lot",
    "address": "No. C-01-08, Blok C, Jalan PPK 1, Pusat Perniagaan Kinrara, Taman Kinrara, Seksyen 3, 47190 Puchong, Selangor",
    "postcode": "47190",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 1000000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "734 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1LJ1V5Ky0OOTWyBAn2-db6xo1N0B6GDtD&sz=w800"
    ]
  },
  {
    "id": "181",
    "title": "Shop Lot",
    "address": "Unit No. K7-L1-02 (Developer's Lot No. K7-L1-02), Rumah Pangsa Kristana 7, Persiaran Seri Pristana 1, Seri Pristana, 47000 Sungai Buloh, Selangor",
    "postcode": "47000",
    "state": "Selangor",
    "area": "Sungai Buloh",
    "reservePrice": 100000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "520 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=15QpZP62XQA5W1o1VEcHyWujJH8KZuykf&sz=w800"
    ]
  },
  {
    "id": "182",
    "title": "Service Apartment",
    "address": "Unit No. A-08-03 (Developer's Parcel No. A-08-03), Type A4, Block A, Maple Residence, Jalan Bestari 7/KS09, Bandar Bestari, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 430000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "863 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1IOcOd1KYZE2yhz4slcnbJVd18nUBi17K&sz=w800"
    ]
  },
  {
    "id": "183",
    "title": "Condominium",
    "address": "Unit No. 12-01, Residensi Anggerik Wira, Jalan Sungai Tekali, 43100 Hulu Langat, Selangor",
    "postcode": "43100",
    "state": "Selangor",
    "area": "Hulu Langat",
    "reservePrice": 330000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "119 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1rSc72ofMK3b0V0fu7fBahtMwCdoguLxH&sz=w800"
    ]
  },
  {
    "id": "184",
    "title": "Service Apartment",
    "address": "Unit No. A2-23-17, Savanna Executive Suites, Jalan Southville 2, Southville City, 43800 Dengkil, Selangor",
    "postcode": "43800",
    "state": "Selangor",
    "area": "Dengkil",
    "reservePrice": 330000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "956 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HBB5B1XiVhN9UWb5GketcU5ivTKKKI18&sz=w800",
      "https://drive.google.com/thumbnail?id=1N3NjjfXpN7X33YqjQB0AjXLSEJ2jKqEe&sz=w800",
      "https://drive.google.com/thumbnail?id=1M0LugbQ4RL-DY2mITFRl1B701CA5p1W4&sz=w800",
      "https://drive.google.com/thumbnail?id=164VoPnzZb9VqOQAcuPqXx-a8XdPVwvxJ&sz=w800"
    ]
  },
  {
    "id": "185",
    "title": "Apartment",
    "address": "Unit No. C-5-11, Block C, Pangsapuri Putra, Jalan Putra Impian, Taman Putra Impian, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 270000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "955 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1erJLMeVMYa31tAbA8zavj5xdW1WJ4wzw&sz=w800"
    ]
  },
  {
    "id": "186",
    "title": "Flat",
    "address": "Unit No. 6-G-16, Ground Floor, Block 6, Rumah Pangsa Impian, Jalan SP 4/3, Bandar Saujana Putra, 42610 Jenjarom, Selangor",
    "postcode": "42610",
    "state": "Selangor",
    "area": "Jenjarom",
    "reservePrice": 160000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "635 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=12_MP-Pn_IMcf-dlErYzZmkxpAXFnf1Sb&sz=w800"
    ]
  },
  {
    "id": "187",
    "title": "Service Apartment",
    "address": "Unit No. A-32-15, Residensi Emas, Jalan Zamrud 2, Sungai Tangkas, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 320000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "689 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1GQtQU3qNOXqHo6jwUKPXolHJNNF_F1k4&sz=w800",
      "https://drive.google.com/thumbnail?id=1KQpe8A4hcUrhKlYDr93hjO85vfdG4x8I&sz=w800",
      "https://drive.google.com/thumbnail?id=1tqKxxkjAdqp3AvZgNMN2qczTQ9SYZnC-&sz=w800"
    ]
  },
  {
    "id": "188",
    "title": "Apartment",
    "address": "Unit No. 04-26, Pangsapuri Selangorku Sena, Jalan Kiara Sungai Long, Bandar Sungai Long, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 200000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "797 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1KTRhzLPRaf2rB-8YLLmHXGcJZzuZ-ItD&sz=w800"
    ]
  },
  {
    "id": "189",
    "title": "Apartment",
    "address": "Unit No. A-29-2, Block A, Residensi Adelia 4, Jalan Persiaran Bangi Avenue 3, Taman Bangi Avenue, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 310000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "045 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1UWsZy6YjxJoVmRphKfimr1Iz339ce8KW&sz=w800",
      "https://drive.google.com/thumbnail?id=1ORsakLIJm5XvVKl7GPxbkWiTNOZmFd_t&sz=w800"
    ]
  },
  {
    "id": "190",
    "title": "Apartment",
    "address": "Unit No. C-9-15, Block C, Residensi Legendview, Jalan Setia Jaya, 48000 Rawang, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 470000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "240 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=19KrtG5kLDtfvd7ZgEdTVJqSe3XCqINha&sz=w800"
    ]
  },
  {
    "id": "191",
    "title": "Apartment",
    "address": "Unit No. B-04-15, Pangsapuri Duta Perintis, Persiaran Puncak Alam 12, 42300 Bandar Puncak Alam, Selangor",
    "postcode": "42300",
    "state": "Selangor",
    "area": "Bandar Puncak Alam",
    "reservePrice": 290000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "850 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1mAGphmRfS5iC4DsS2pEe1nzla5Xort1V&sz=w800"
    ]
  },
  {
    "id": "192",
    "title": "2 Storey Terrace House",
    "address": "No. 16, Jalan 4/19, Bandar Tasik Puteri, 48020 Rawang, Selangor",
    "postcode": "48020",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 410000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "600 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=10Sv2NTGf_R3EJRRdJsQ9k7xdJDypD582&sz=w800"
    ]
  },
  {
    "id": "193",
    "title": "Apartment",
    "address": "Unit No. MPB-15-06, Jalan Perdana 1, Pangsapuri Melodi Perdana, LBS Alam Perdana, Jalan Perdana 1, 42300 Bandar Puncak Alam, Selangor",
    "postcode": "42300",
    "state": "Selangor",
    "area": "Bandar Puncak Alam",
    "reservePrice": 250000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "901 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1ICEjBPEVLVA1z-egD6MHJSnO64DY4l2i&sz=w800"
    ]
  },
  {
    "id": "194",
    "title": "Apartment",
    "address": "Unit No. P5-10-05, Pangsapuri Indahria, No. 4, Jalan Batu Tiga - Sungai Buluh, Taman Impiana, Seksyen 22, 40300 Shah Alam, Selangor",
    "postcode": "40300",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 300000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "008 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1SzDe04cEopMJwteY8u5Rdd7tfq6azyqZ&sz=w800"
    ]
  },
  {
    "id": "195",
    "title": "Service Apartment",
    "address": "Unit No. C-10-13A, Block C, Residensi Damai Meriah - The Zizz, No. 2, Jalan PJU 10/1A, Damansara Damai, PJU 10, 47830 Petaling Jaya, Selangor",
    "postcode": "47830",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 280000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "674 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1bILgLy_kcfvkWtU7sOzeK4okiUGWAWKf&sz=w800",
      "https://drive.google.com/thumbnail?id=1HMbRlIBaN7CL5W7saY0pa9717AgsrJqe&sz=w800",
      "https://drive.google.com/thumbnail?id=1klq4Ln1xSfvGYJTXK8hExj0xxOGk5S8h&sz=w800",
      "https://drive.google.com/thumbnail?id=1sUOfUahMXJlGkGPTVnZlnA-CCYQ7Xv96&sz=w800",
      "https://drive.google.com/thumbnail?id=1yTOMu6i_eYuhrtp0cQP3xnQe9TwK6VrA&sz=w800"
    ]
  },
  {
    "id": "196",
    "title": "Apartment",
    "address": "Unit No. A-17-17, Pangsapuri Idaman BSP, Jalan SP 11/1, Bandar Saujana Putra 1, 47130 Puchong, Selangor",
    "postcode": "47130",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 250000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "022 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1RzgYnz0VOtxwnV6qaIH0IsVZIMlDDoqz&sz=w800"
    ]
  },
  {
    "id": "197",
    "title": "Apartment",
    "address": "Unit No. G-04, Vista Impiana, Taman Bukit Serdang, Seksyen 10, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 310000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "820 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1yyFqIuPJxHwbthgTYqkDjpgeGmidP8pJ&sz=w800"
    ]
  },
  {
    "id": "198",
    "title": "Service Apartment",
    "address": "Unit No. A-18-9, Blok A, Residensi Bukit Tiara, Jalan Karunmas 10, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 340000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "904 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=12ECJempC_erWbPa3MlkepEK4q4ip5nRZ&sz=w800"
    ]
  },
  {
    "id": "199",
    "title": "Apartment",
    "address": "Unit No. H-4-15 (Developer's Parcel No. H-7-4F), Lebuh Damar Merah, Taman Pendamar Indah 2, 42000 Pelabuhan Klang, Selangor",
    "postcode": "42000",
    "state": "Selangor",
    "area": "Pelabuhan Klang",
    "reservePrice": 180000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "766 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1_q4_cocL95yuZAt9Vf3YM6rigjaOfp0M&sz=w800"
    ]
  },
  {
    "id": "200",
    "title": "Service Apartment",
    "address": "Unit No. 1-40-11, Bayu Residensi @ Seri Temenggung, Jalan Temenggung, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 370000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "863 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1DQryk545qKFK3H5Yi1ct9E7SN1mmNHLA&sz=w800"
    ]
  },
  {
    "id": "201",
    "title": "Apartment",
    "address": "Unit No. 13A-3A, Residensi Armani Sungai Long, Jalan Bukit Suria, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 350000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1kjDEUUo4qA5D9APsrep9l2567cBoIFLl&sz=w800"
    ]
  },
  {
    "id": "202",
    "title": "Service Apartment",
    "address": "Unit No. A-26-11, Blok A, Dian Residency, Persiaran Sukan, Seksyen 13, 40100 Shah Alam, Selangor",
    "postcode": "40100",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 395000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "807 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1OGvUcaZViM0We-7rWLWah5jP-3pr6yi7&sz=w800"
    ]
  },
  {
    "id": "203",
    "title": "Apartment",
    "address": "Unit No. M1-05-07, Residensi Rimbunan, Jalan Mahkota, Bandar Mahkota Cheras, 43200 Cheras, Selangor",
    "postcode": "43200",
    "state": "Selangor",
    "area": "Cheras",
    "reservePrice": 550000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "152 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1-CqzTRN67mxyBG-r1kzukC8Ee5OO21tq&sz=w800"
    ]
  },
  {
    "id": "204",
    "title": "Service Apartment",
    "address": "Unit No. A-22-11, 22nd Floor, Block A, Maple Residence, Jalan Bestari 7/KS09, Bandar Bestari, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 430000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "861 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1IOcOd1KYZE2yhz4slcnbJVd18nUBi17K&sz=w800"
    ]
  },
  {
    "id": "205",
    "title": "Service Apartment",
    "address": "Unit No. 28-15, MKH Boulevard II, Jalan Bukit, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 280000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "549 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1ixHaqjWAGXSDMsiLVV8IWKmLQBvcye9B&sz=w800"
    ]
  },
  {
    "id": "206",
    "title": "Service Apartment",
    "address": "Unit No. 33-01, Menara Yolo, Jalan PJS 8/9, PJS 8, Bandar Sunway, 46150 Petaling Jaya, Selangor",
    "postcode": "46150",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 450000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "500 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1J1-SRYjeCBZ4T8z1RYFR-tMyOxqCitWw&sz=w800"
    ]
  },
  {
    "id": "207",
    "title": "Office Unit",
    "address": "Unit No. E-09-10, Menara Melawangi Bangunan Amcorp, No. 18, Jalan Persiaran Barat, 46050 Petaling Jaya, Selangor",
    "postcode": "46050",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 400000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "829 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1Is2kJ6JL4c6h4UmAe0XG9CGmQwiioiFG&sz=w800"
    ]
  },
  {
    "id": "208",
    "title": "Apartment",
    "address": "Unit No. A-08-09, 8th Floor, Block A, Pangsapuri Puncak Mutiara, Jalan Mutiara 2, Taman Mutiara Indah, 47100 Puchong, Selangor",
    "postcode": "47100",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 439200,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "356 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1azWHexLnRg1B11AmBG8hlvT9144qtUqk&sz=w800",
      "https://drive.google.com/thumbnail?id=1sNjTBsdbpacXfbP13fyCc6TBAr0bTOK1&sz=w800",
      "https://drive.google.com/thumbnail?id=1bMcakp9IhZYy2Ae8MO0SXJT_fyl0aN51&sz=w800",
      "https://drive.google.com/thumbnail?id=1kBgddUCcGB7WnjphkbrtpBlU4ky70KRS&sz=w800"
    ]
  },
  {
    "id": "209",
    "title": "Small Office Home Office (SOHO)",
    "address": "Unit No. D-13-06, Block D, H2O @ Ara Damansara, No. 1, Jalan PJU 1A/3, Ara Damansara, 47301 Petaling Jaya, Selangor",
    "postcode": "47301",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 234000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "449 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1P-OfQ1pCl74ljqBykFgBjqf6GzEkiNi8&sz=w800",
      "https://drive.google.com/thumbnail?id=19uFJWaZ_ZoFdard11Z0_ig0XRukVVtd-&sz=w800",
      "https://drive.google.com/thumbnail?id=17igZqJrx1hdghcZKkj-FZyKWbKdLRa1B&sz=w800",
      "https://drive.google.com/thumbnail?id=1vbDloiKZhsG-Rt2qt_jNgdgqefEMTeky&sz=w800"
    ]
  },
  {
    "id": "210",
    "title": "Designer Suite",
    "address": "Unit No. C-13A-27, Block C, 168 Residensi Selayang (previously known as Selayang Star City), KM12, Jalan Ipoh Rawang, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 336000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "983 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=11I4Twuh2_SSXvQKflnCEEluj7aCr5WG-&sz=w800"
    ]
  },
  {
    "id": "211",
    "title": "Service Apartment",
    "address": "Unit No. B-18-11, Alam Sanjung, No. 1, Jalan Budiman 22/3, Seksyen 22, 40300 Shah Alam, Selangor",
    "postcode": "40300",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 338000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "915 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13flsO_ecNHeqXorLn6fM96EJIAzsA-IP&sz=w800"
    ]
  },
  {
    "id": "212",
    "title": "Flat",
    "address": "Unit No. F7-7-60, Jalan Permai 2/8, Taman Puchong Permai, Batu 13, 47150 Puchong, Selangor",
    "postcode": "47150",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 180000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "652 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1gvAGFH_nhzmCsdcaGgonosFrwWq9AbIR&sz=w800"
    ]
  },
  {
    "id": "213",
    "title": "Apartment",
    "address": "Unit No. E3-1-11, Pangsapuri Goodview Heights 1, Goodview Heights, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 300000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "935 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=19PXK7GtLO6SX__4KaBZXBgwWU6--isl0&sz=w800"
    ]
  },
  {
    "id": "214",
    "title": "Service Apartment",
    "address": "Unit No. A-30-06, Residensi Parkland @ Kajang 2, Jalan Zamrud 3, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 350000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "915 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1-4FixULfSxl_KswTa6Rx7WDTZbhjMlB6&sz=w800"
    ]
  },
  {
    "id": "215",
    "title": "Service Apartment",
    "address": "Unit No. B-22-09, Block B, Residensi Parkland @ Kajang 2, Jalan Zamrud 3, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 330000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "753 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1-4FixULfSxl_KswTa6Rx7WDTZbhjMlB6&sz=w800"
    ]
  },
  {
    "id": "216",
    "title": "Apartment",
    "address": "Unit No. 16/CR, 3rd Floor, Jalan Kosas 1/4, Taman Kosas, 68000 Ampang, Selangor",
    "postcode": "68000",
    "state": "Selangor",
    "area": "Ampang",
    "reservePrice": 130000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "755 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=143eFIGXtgDufqnStZwHer5gBqWIiRAh6&sz=w800"
    ]
  },
  {
    "id": "217",
    "title": "Service Apartment",
    "address": "Unit No. 1-39-19, Bayu Residensi @ Seri Temenggung, Jalan Temenggung, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 250000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "553 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1DQryk545qKFK3H5Yi1ct9E7SN1mmNHLA&sz=w800"
    ]
  },
  {
    "id": "218",
    "title": "Service Apartment",
    "address": "Unit No. A-35-06, Residensi Emas, Jalan Zamrud 2, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 320000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "689 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1GQtQU3qNOXqHo6jwUKPXolHJNNF_F1k4&sz=w800",
      "https://drive.google.com/thumbnail?id=1KQpe8A4hcUrhKlYDr93hjO85vfdG4x8I&sz=w800",
      "https://drive.google.com/thumbnail?id=1tqKxxkjAdqp3AvZgNMN2qczTQ9SYZnC-&sz=w800"
    ]
  },
  {
    "id": "219",
    "title": "Service Apartment",
    "address": "Unit No. 23-29, Tangerine Suites, Persiaran Sunsuria, Bandar Sunsuria, 43900 Sepang, Selangor",
    "postcode": "43900",
    "state": "Selangor",
    "area": "Sepang",
    "reservePrice": 300000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "700 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=11VL81IS4lpOXNKhZDgc89xk3HwbMCOsm&sz=w800"
    ]
  },
  {
    "id": "220",
    "title": "Apartment",
    "address": "Unit No. B-01-01, Pangsapuri Idaman Melur, Jalan Cybersouth 10, Cybersouth, 43800 Dengkil, Selangor",
    "postcode": "43800",
    "state": "Selangor",
    "area": "Dengkil",
    "reservePrice": 270000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "022 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1JFbDP3hCgqiwJKcM44IvusXVMJ2giySv&sz=w800"
    ]
  },
  {
    "id": "221",
    "title": "Service Apartment",
    "address": "Unit No. B-17-02, Residensi Parkland @ Kajang 2, Jalan Zamrud 3, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 340000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "915 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1-4FixULfSxl_KswTa6Rx7WDTZbhjMlB6&sz=w800"
    ]
  },
  {
    "id": "222",
    "title": "[Walking distance to Chan Sow Lin LRT Station (LRT & MRT interchange)] Shop / Office [ Minutes to Kuala Lumpur City Centre & TRX precinct]",
    "address": "Unit No. B-02-07, Block B, Pusat Komersial Southgate, No. 2, Jalan Dua, Off Jalan Chan Sow Lin, 55200, Kuala Lumpur",
    "postcode": "55200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 351000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=18ZJ2alnqH22ZLWYKutthFFztIvEK8x26&sz=w800"
    ]
  },
  {
    "id": "223",
    "title": "[8 min to Zoo Negara Malaysia & LRT Wangsa Maju Station] Flat [7 min to Sunway Wangsawalk Mall & Wangsa Walk Mall]",
    "address": "Unit No. 4-4-4, Kelompok Embun Emas, Jalan 15/56, Ampang Ulu Klang, 54200, Kuala Lumpur",
    "postcode": "54200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 86093,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "549 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1o8SKnbPEgNKLbLTX5fNyTllb-hZPrfIb&sz=w800"
    ]
  },
  {
    "id": "224",
    "title": "[Facing main road - Jalan Puchong] Office Lot [ 5 min to Muhibbah LRT Station]",
    "address": "Unit No. 16-01, Menara UP, Jalan Puchong, 58200, Kuala Lumpur",
    "postcode": "58200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 552436,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "015 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1ay2XXnLQYxT6eZty7UJKU4qwn0jrkvvB&sz=w800",
      "https://drive.google.com/thumbnail?id=1pGdcWj2CwWNiiipzO1C11zSSYZ7zcvzg&sz=w800",
      "https://drive.google.com/thumbnail?id=1GKE2mZG0FzKAt89j0bqFzmgVSRV6nuBf&sz=w800"
    ]
  },
  {
    "id": "225",
    "title": "[Strategic Prime Location ] 2 adjoining Office lots [5 min to Muhibbah LRT Station]",
    "address": "Unit No. 13-02 & 13-03, Menara UP, Jalan Puchong, 58200, Kuala Lumpur",
    "postcode": "58200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 414590,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "605 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1ay2XXnLQYxT6eZty7UJKU4qwn0jrkvvB&sz=w800",
      "https://drive.google.com/thumbnail?id=1pGdcWj2CwWNiiipzO1C11zSSYZ7zcvzg&sz=w800",
      "https://drive.google.com/thumbnail?id=1GKE2mZG0FzKAt89j0bqFzmgVSRV6nuBf&sz=w800"
    ]
  },
  {
    "id": "226",
    "title": "Retail Lot",
    "address": "Unit No. 07-01, Plaza Haji Taib, Lorong Haji Taib 5, 50350, Kuala Lumpur",
    "postcode": "50350",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 191750,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "118 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1vGGsPuyF0dbxMHJenFiP7ulKXEkUjn_8&sz=w800"
    ]
  },
  {
    "id": "227",
    "title": "Service Apartment",
    "address": "Unit No. A-38-06, Menara A, Datum Jelatek, 54200, Kuala Lumpur",
    "postcode": "54200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 438000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "710 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1s9U-4f_uNxzClSWul7PyXMp_GQwSxQlJ&sz=w800"
    ]
  },
  {
    "id": "228",
    "title": "Retail Lot",
    "address": "Unit No. 07-16, Plaza Haji Taib, Lorong Haji Taib 5, 50350, Kuala Lumpur",
    "postcode": "50350",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 171350,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "108 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1vGGsPuyF0dbxMHJenFiP7ulKXEkUjn_8&sz=w800"
    ]
  },
  {
    "id": "229",
    "title": "Retail Lot",
    "address": "Unit No. 07-17, Plaza Haji Taib, Lorong Haji Taib 5, 50350, Kuala Lumpur",
    "postcode": "50350",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 171350,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "108 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1vGGsPuyF0dbxMHJenFiP7ulKXEkUjn_8&sz=w800"
    ]
  },
  {
    "id": "230",
    "title": "Apartment",
    "address": "Unit No. B-2-8, Block B, Taman Koperasi Majujaya, Batu 9 Cheras, 56000, Kuala Lumpur",
    "postcode": "56000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 160380,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "204 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1rMPEufRipFZcI6fBkDQYPEmFYGlJfO4i&sz=w800"
    ]
  },
  {
    "id": "231",
    "title": "[Surrounded by commercial area] Service Apartment [8 min to Setapak Central Mall]",
    "address": "Unit No. C-28-03, KLTS, No. 99, Jalan Gombak, Setapak, 53000, Kuala Lumpur",
    "postcode": "53000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 291600,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "918 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1mQaqDkRnxg2Vy3azhqvYjk9N84GRZ7Gn&sz=w800",
      "https://drive.google.com/thumbnail?id=1Ls3yg3y8NH3U4vcUp0TgIvjm_PCbrCV8&sz=w800",
      "https://drive.google.com/thumbnail?id=1NF2t9jcR4GsEMFaoOyMKmyAmyQEEccag&sz=w800"
    ]
  },
  {
    "id": "232",
    "title": "[4 min to United Point Mall] Condominium [7 min to Publika Shopping Gallery]",
    "address": "Unit No. 15-01, Royalle Condominium, No. 2B, Jalan 3/61, Off Jalan Segambut, 51200, Kuala Lumpur",
    "postcode": "51200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 405000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "184 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1AWiIwG8eOt866nFzjSOLOnMMS3LCER_a&sz=w800"
    ]
  },
  {
    "id": "233",
    "title": "2 Storey Shop Lot",
    "address": "Unit No. E2-0-17 & E2-1-17 (Permises No. 17), Block E2, Parklane OUG Apartment, No. 1, Jalan 1/152, Taman OUG Parklane, 58200, Kuala Lumpur",
    "postcode": "58200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 1312200,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "197 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=14uwE6LW-c5VlVCjCoMUEohkYo8MhTIBP&sz=w800",
      "https://drive.google.com/thumbnail?id=1IvGs39bwau3xPXX0d75-6qmo-9vBgTll&sz=w800"
    ]
  },
  {
    "id": "234",
    "title": "Vista Amani Condominium",
    "address": "Unit No. A-3A-7, Block A, Vista Amani Condominium, Jalan Tasik Permaisuri 3, Bandar Sri Permaisuri, 56000, Kuala Lumpur",
    "postcode": "56000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 277000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "101 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Q8JvckZhZl0P0azccy4pBBZVESfN3dL9&sz=w800"
    ]
  },
  {
    "id": "235",
    "title": "Service Apartment [Newly Completed in 2020; 3 min to Pavilion Bukit Jalil & Awan Besar LRT Station; 5 min to International Medical University]",
    "address": "Unit No. B-41-03A, Residensi Skyluxe (On Site Skyluxe On The Park), Jalan Jalil Perkasa 1, Bukit Jalil, 57000, Kuala Lumpur",
    "postcode": "57000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 405000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "657 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1-tcL9Z6ph_leqirZeiG4MeL2aYUbIvN0&sz=w800"
    ]
  },
  {
    "id": "236",
    "title": "Service Apartment",
    "address": "Unit No. 30-09, 30th Floor, Benteng 8 (Skyville 8), Jalan Klang Lama, 58000, Kuala Lumpur",
    "postcode": "58000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 388800,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "108 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Vx_zy9_eEnWpcG5sKCfEwhMbI7fQqJ15&sz=w800"
    ]
  },
  {
    "id": "237",
    "title": "Service Apartment",
    "address": "Unit No. B1-20-7, Block B1, Parklane OUG Service Apartment, No. 1, Jalan 1/52, Taman OUG Parklane, 58200, Kuala Lumpur",
    "postcode": "58200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 237600,
    "auctionDate": "28 Jul 2026 (Tue)",
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
    "id": "238",
    "title": "Condominium",
    "address": "Unit No. B-13-2, Angkasa Impian 2, Lorong Sahabat, 50200, Kuala Lumpur",
    "postcode": "50200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 415530,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "427 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1RPOcSbzU0E-Xq3hda2z__ak9KkVLjOqU&sz=w800",
      "https://drive.google.com/thumbnail?id=1jExz2u-mTpfxdL8px1PhnOaDEtNuvbZh&sz=w800",
      "https://drive.google.com/thumbnail?id=19-0CYfcDwOKkQtIGn0FUpOcvh9vJSo9F&sz=w800",
      "https://drive.google.com/thumbnail?id=1RnFNsF_GZAVr2vNwNP7TtEqeVycLw0Ol&sz=w800"
    ]
  },
  {
    "id": "239",
    "title": "[3 min to Setapak Central Mall] Condominium [5 min to Giant Setapak]",
    "address": "Unit No. C-5-1, Block C, Prima Setapak Condominium, Jalan Prima Setapak, Off Jalan Genting Klang, 53300, Kuala Lumpur",
    "postcode": "53300",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 270000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "227 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1cO1CZfGQ21nZt-7fS_A_fmdRyFgLwZaj&sz=w800"
    ]
  },
  {
    "id": "240",
    "title": "The Leafz Serviced Apartment",
    "address": "Unit No. B-23A-05, The Leafz @ Sungai Besi (Dedaun Sungai Besi), No. 2, Jalan Hang Tuah 2, Taman Salak Selatan, 57100, Kuala Lumpur",
    "postcode": "57100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 585000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "389 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Iy24CBYYC3wLKhJZV6y-Qzp6klYP3Iv5&sz=w800",
      "https://drive.google.com/thumbnail?id=1om_B87SEkVuQEfD0fv0uwTLgU2WL2FB9&sz=w800",
      "https://drive.google.com/thumbnail?id=1-Jm8VCCkb7tvJL3acHSY1-ppjoTzP5K7&sz=w800",
      "https://drive.google.com/thumbnail?id=1p9_cswlAwtwUw903cme_s5uXgek6k_Jw&sz=w800",
      "https://drive.google.com/thumbnail?id=1zE71LblmKsGkJ6gD5hoVoz4N8qGCmVdo&sz=w800"
    ]
  },
  {
    "id": "241",
    "title": "[Walking distance to Jelatek LRT Station] Small Office Home Office (SOHO) [4 min to Datum Jelatek Shopping Centre]",
    "address": "Unit No. S-13-17, Block S, Astrum Ampang, Jalan Enggang, Taman Keramat, 54200, Kuala Lumpur",
    "postcode": "54200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 180000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "280 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1FxtNNWSccgJ8RprFAvruy1RPUH0kORCl&sz=w800"
    ]
  },
  {
    "id": "242",
    "title": "[Walking distance to Maharajalela Monorel Station] Service Apartment [5 min to Merdeka 118]",
    "address": "Unit No. C-23A-10, Tower C, Residensi Sunway Belfield, No. 1, Jalan Belfield, 50460, Kuala Lumpur",
    "postcode": "50460",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 800000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=133vDW33E8kjjD73X3QTquIyPtQRKXl4l&sz=w800"
    ]
  },
  {
    "id": "243",
    "title": "Condominium",
    "address": "Unit No. A 8-03, Seri Kuchai (Arte @ Kuchai Lama), Jalan Kuchai Maju 12, 58200, Kuala Lumpur",
    "postcode": "58200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 486000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "475 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=15FjO2Vct5TIc2JKQDkusTdAIrTOmTr4U&sz=w800",
      "https://drive.google.com/thumbnail?id=17NKcl6dqqwivSIOoUkVbVdGKxJvUrqG0&sz=w800",
      "https://drive.google.com/thumbnail?id=1-M6PsTAia3dOGFkkLOhe3gaWaj08QAF-&sz=w800",
      "https://drive.google.com/thumbnail?id=15s5hvmgdRiNLw4qjRlgC6EuZk1_tQNE9&sz=w800",
      "https://drive.google.com/thumbnail?id=1G-65icJyxX8LfvHTlC0NPFilULfRv-Jb&sz=w800"
    ]
  },
  {
    "id": "244",
    "title": "Service Apartment",
    "address": "Unit No. 2-26-01, M-City, No. 326, Jalan Ampang, 50450, Kuala Lumpur",
    "postcode": "50450",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 769500,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "593 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13NKDj-0GYbwKDm5UTcwH6mpou83KUR41&sz=w800",
      "https://drive.google.com/thumbnail?id=1QnCDaaEbMs8zd0mmVYw96JZqN1OHnPej&sz=w800",
      "https://drive.google.com/thumbnail?id=1A_Qmpadb0OIJhX1K163vI1zw1BGG6V69&sz=w800",
      "https://drive.google.com/thumbnail?id=14x5jx_hP96rQCzvSuqeo12A4bHNd3mfN&sz=w800"
    ]
  },
  {
    "id": "245",
    "title": "[3 min to The Beat at Kiara Bay] Apartment [5 min to Kepong Baru MRT Station]",
    "address": "Unit No. A-06-13A, Block A, PPA1M Metropolitan Kepong (MRR2), Jalan Lingkaran Tengah 2 (MRR2), Kepong 52100, Kuala Lumpur",
    "postcode": "52100",
    "state": "Kuala Lumpur",
    "area": "Kepong",
    "reservePrice": 194400,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "850 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1DEDSb3Y_tW-7zAnsRyqXqLu2Tr8Qktls&sz=w800",
      "https://drive.google.com/thumbnail?id=1tQPFMOV2vH4rcKDcn2SHTudmt8QYO7A3&sz=w800",
      "https://drive.google.com/thumbnail?id=1nioXLMwZsdqPWUKhNHkbWo3Guil-6rQx&sz=w800"
    ]
  },
  {
    "id": "246",
    "title": "[Direct access to LRT, MRT, and KTM trains] Office Unit [10 min to Mid Valley Megamall]",
    "address": "Unit No. 3B-5-7, Block 3B, Plaza Sentral, Jalan Stesen Sentral 5, Kuala Lumpur Sentral, 50470, Kuala Lumpur",
    "postcode": "50470",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 1377000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "174 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1EhDm5rl1R_DS0cU6kdvU3HBTVx4FbGcb&sz=w800"
    ]
  },
  {
    "id": "247",
    "title": "Duplex SOHO",
    "address": "Unit No. B-09-07, Wisma Infinitum, No. 18, Jalan Dewan Sultan Sulaiman, 50300, Kuala Lumpur",
    "postcode": "50300",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 689000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "710 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1zdsuuv1arN7D267fQpZWLsB4qq6T-yF4&sz=w800"
    ]
  },
  {
    "id": "248",
    "title": "Service Apartment",
    "address": "Unit No. A-33-27, Ampang Tiga (Neu Suites), Jalan Nipah Ampang, 55000, Kuala Lumpur",
    "postcode": "55000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 268000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "430 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1yn7rExVIx3_uyn1DK3J6xaFtlhE3UGF0&sz=w800"
    ]
  },
  {
    "id": "249",
    "title": "Eateries, supermarkets & lifestyle amenities right at your doorstep] Service Apartment [5 min to Great Eastern Mall]",
    "address": "Unit No. 3-22-03A, Tower 3, M City Ampang, No. 326, Jalan Ampang, 50450, Kuala Lumpur",
    "postcode": "50450",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 414000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "990 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13NKDj-0GYbwKDm5UTcwH6mpou83KUR41&sz=w800",
      "https://drive.google.com/thumbnail?id=1QnCDaaEbMs8zd0mmVYw96JZqN1OHnPej&sz=w800",
      "https://drive.google.com/thumbnail?id=1A_Qmpadb0OIJhX1K163vI1zw1BGG6V69&sz=w800",
      "https://drive.google.com/thumbnail?id=14x5jx_hP96rQCzvSuqeo12A4bHNd3mfN&sz=w800"
    ]
  },
  {
    "id": "250",
    "title": "Duplex Service Apartment",
    "address": "Unit No. 1-27-01, M-City Ampang, Jalan Ampang, 50450, Kuala Lumpur",
    "postcode": "50450",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 423000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "911 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13NKDj-0GYbwKDm5UTcwH6mpou83KUR41&sz=w800",
      "https://drive.google.com/thumbnail?id=1QnCDaaEbMs8zd0mmVYw96JZqN1OHnPej&sz=w800",
      "https://drive.google.com/thumbnail?id=1A_Qmpadb0OIJhX1K163vI1zw1BGG6V69&sz=w800",
      "https://drive.google.com/thumbnail?id=14x5jx_hP96rQCzvSuqeo12A4bHNd3mfN&sz=w800"
    ]
  },
  {
    "id": "251",
    "title": "Service Apartment",
    "address": "Unit No. B-9-13A, Central Residence @ Suria Sg Besi, No. 366, Jalan Sungai Besi, 57100, Kuala Lumpur",
    "postcode": "57100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 441000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "883 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1omtl1YGnNeIYxt40ayLdSP7oXHeYhk-6&sz=w800",
      "https://drive.google.com/thumbnail?id=1uq2Q46t5UZsAaAwMlkAl_xh4bzqMau9W&sz=w800",
      "https://drive.google.com/thumbnail?id=1vU0sR6O6P8JPsV-Bzkkc_URmkGVF6Cyb&sz=w800",
      "https://drive.google.com/thumbnail?id=1KNZC7g_jq8_kvZ-hZUzD9I2USg0VIoKX&sz=w800",
      "https://drive.google.com/thumbnail?id=143GMs0scI6x9R2wB8KRLLZxFhFQ5UPMc&sz=w800"
    ]
  },
  {
    "id": "252",
    "title": "Condominium",
    "address": "Unit No. A-22-1, Block A, Residensi Capers Sentul, No. 1, Jalan Sentul Sejahtera, 51000, Kuala Lumpur",
    "postcode": "51000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 567000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "381 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1EksJNSO2C3bBPY0vL3nVtqEilHbz_39V&sz=w800",
      "https://drive.google.com/thumbnail?id=1vmviiq2er54WW9q2vwFc3Mu1kapuL87Q&sz=w800",
      "https://drive.google.com/thumbnail?id=1Qb2AOZn3rwsE09nQxMl-jEsjW5MXEPt5&sz=w800"
    ]
  },
  {
    "id": "253",
    "title": "[Dual Key] Serviced Apartment",
    "address": "Unit No. B-13-06, Menara Inspirasi (on-site is Expressionz Professional Suites, Tun Razak), No. 30, Jalan 1/65A, Off Jalan Tun Razak, 50400, Kuala Lumpur",
    "postcode": "50400",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 630000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "861 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=14FNQvHVcu5h9xkpbE0-TLtF04qhC5UcO&sz=w800",
      "https://drive.google.com/thumbnail?id=14tlEA-NPEUSDJ5wg4qGYhFad0251Wivx&sz=w800",
      "https://drive.google.com/thumbnail?id=1wFBWABw6jcQxCCvstUpYmFDmdH252C4g&sz=w800",
      "https://drive.google.com/thumbnail?id=1G1_muVxG5ltXYGV6u0iXrjK07Lb2rF5M&sz=w800",
      "https://drive.google.com/thumbnail?id=1E7MZAduo9rOqrZeh0mihvPoulvkfKGib&sz=w800"
    ]
  },
  {
    "id": "254",
    "title": "Condominium",
    "address": "Unit No. C-28-02, Block C, Residensi Renai Jalil @ The Rainz, No. 3, Jalan Jalil Perwira 2, Bukit Jalil, 58200, Kuala Lumpur",
    "postcode": "58200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 783000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "475 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1fM3WvkX-1co1uXz_O8hCf4fy_72lr7Oa&sz=w800"
    ]
  },
  {
    "id": "255",
    "title": "Condominium",
    "address": "Unit No. B-3-3, Block B, Hartamas Regency 2, No. 2, Jalan Duta Hartamas, Off Persiaran Dutamas, Sri Hartamas, 50480, Kuala Lumpur",
    "postcode": "50480",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 810000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "884 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1LIVWIrLHXpn9mhtietKs57ALzM0mFZ14&sz=w800"
    ]
  },
  {
    "id": "256",
    "title": "[Next to Jalan Kuching] Condominium [6 min to Sentul Barat / Jalan Ipoh MRT Station]",
    "address": "Unit No. B-09-03, Block B, Royal Regent, Sri Putramas III, Jalan Putramas 2, Off Jalan Kuching, 51200, Kuala Lumpur",
    "postcode": "51200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 520000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "119 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1DpJr0hq-bCwSARqVk8CkmQZQL-hbhAkN&sz=w800"
    ]
  },
  {
    "id": "257",
    "title": "Service Apartment",
    "address": "Unit No. S-32-12, Block S, Residensi M Oscar, Jalan Kesateria, Sri Petaling, 57100, Kuala Lumpur",
    "postcode": "57100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 700000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "098 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1RqWqJze3_1fuarZ8TfDxjb1LWh7hQSUc&sz=w800"
    ]
  },
  {
    "id": "258",
    "title": "Apartment",
    "address": "Unit No. C512, Jalan Perdana 9/10, Pandan Perdana, 55300, Kuala Lumpur",
    "postcode": "55300",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 130000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "603 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1XSOCj1nMQH7ZFPbnpAfDUqoBGvm0eGlC&sz=w800"
    ]
  },
  {
    "id": "259",
    "title": "Condominium",
    "address": "Unit No. B-40-03A (on site is No. 03A), Residensi Skysantuary 1, No. 2, Jalan Santuari 1, Setapak, 53200, Kuala Lumpur",
    "postcode": "53200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 420000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "861 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1f8JaFemoHyxZKmndVEh-aUU91JjkfQLG&sz=w800"
    ]
  },
  {
    "id": "260",
    "title": "2 Storey Shop Office",
    "address": "Unit No. G-0-7 & G-1-7, Pusat Perdagangan Kuchai (Kuchai Business Park), No. 2, Jalan 1/127, Off Jalan Kuchai Lama, 58200, Kuala Lumpur",
    "postcode": "58200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 1400000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "594 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1gOuwg4B7eOvl3zhLwD-V3UubqIXEKmy4&sz=w800"
    ]
  },
  {
    "id": "261",
    "title": "Service Apartment",
    "address": "Unit No. D-5-1, Block D, Fortune Avenue, Jalan Metro Perdana 2, Taman Usahawan Kepong, 52100, Kepong, Kuala Lumpur",
    "postcode": "52100",
    "state": "Kuala Lumpur",
    "area": "Kepong",
    "reservePrice": 430000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "173 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1h3YzBt9iIfs3eEHNyc8FDVOlKQ0sVykM&sz=w800",
      "https://drive.google.com/thumbnail?id=1OKolkrKhO1CXVWXJtBgNKlU2-B4iYXxO&sz=w800",
      "https://drive.google.com/thumbnail?id=1HCJAObE6-IXGW_U8UslZLA2Jw9a3OIaN&sz=w800"
    ]
  },
  {
    "id": "262",
    "title": "Condominium",
    "address": "Unit No. A-18-03, Block A, Residensi Legasi OUG, Jalan Gembira, 58200, Kuala Lumpur",
    "postcode": "58200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 640000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "023 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1apt_My-3eCg309L4sfc8oERfKFkWnmLm&sz=w800"
    ]
  },
  {
    "id": "263",
    "title": "Service Apartment",
    "address": "Unit No. A-23A-12, Residensi M Astra, No. 1, Jalan Usahawan 6, Setapak, 53200, Kuala Lumpur",
    "postcode": "53200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 440000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "850 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Ccx2tjV0Mn-ZqwIo3waw5VJYEwFDwGGw&sz=w800"
    ]
  },
  {
    "id": "264",
    "title": "Condominium",
    "address": "Unit No. 1-03A, Residensi Gen, No. 89, Jalan Kuchai 3, Taman Lian Hoe, 58200, Kuala Lumpur",
    "postcode": "58200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 700000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "152 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13RVgcu_MzF_6DXWkkH-M7aUOx7ZuWp-0&sz=w800"
    ]
  },
  {
    "id": "265",
    "title": "Service Apartment",
    "address": "Unit No. B-15-3A, Central Residence @ Suria Sungai Besi, No. 366, Jalan Sungai Besi, 57100, Kuala Lumpur",
    "postcode": "57100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 490000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "883 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1omtl1YGnNeIYxt40ayLdSP7oXHeYhk-6&sz=w800",
      "https://drive.google.com/thumbnail?id=1uq2Q46t5UZsAaAwMlkAl_xh4bzqMau9W&sz=w800",
      "https://drive.google.com/thumbnail?id=1vU0sR6O6P8JPsV-Bzkkc_URmkGVF6Cyb&sz=w800",
      "https://drive.google.com/thumbnail?id=1KNZC7g_jq8_kvZ-hZUzD9I2USg0VIoKX&sz=w800",
      "https://drive.google.com/thumbnail?id=143GMs0scI6x9R2wB8KRLLZxFhFQ5UPMc&sz=w800"
    ]
  },
  {
    "id": "266",
    "title": "Condominium",
    "address": "Unit No. A-22-5, PV 12 Platinum Lake Condominium, Blok A, Jalan Langkawi, Setapak, 53300, Kuala Lumpur",
    "postcode": "53300",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 430000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "389 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1ssXYKCD_aOyCuqHQLKk4brs-77_kpULq&sz=w800"
    ]
  },
  {
    "id": "267",
    "title": "Condominium",
    "address": "Unit No. A-26-03, PV2, Platinum Hill Condominium, No. 2, Jalan Taman Melati 1, Taman Melati Utama, 53100 Setapak, Kuala Lumpur",
    "postcode": "53100",
    "state": "Kuala Lumpur",
    "area": "Setapak",
    "reservePrice": 380000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "313 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1DcTrT7992M38U32LhNYYQdHiXXLHk3qN&sz=w800"
    ]
  },
  {
    "id": "268",
    "title": "Service Apartment",
    "address": "Unit No. C-42-07, Met 1 Residences, KL Metropolis, Jalan Boulevard, 50480, Kuala Lumpur",
    "postcode": "50480",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 558000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "677 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1ZMKOtwdhzU6dB9TGZ2vBq-153abNNXCY&sz=w800"
    ]
  },
  {
    "id": "269",
    "title": "[Situated in the iconic Golden Triangle of Kuala Lumpur] Service Apartment [9 min walking distance to Suria KLCC]",
    "address": "Unit No. A-21-5, The Mews KLCC, No.19, Jalan Yap Kwan Seng, 50450, Kuala Lumpur",
    "postcode": "50450",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 1200000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "923 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=12zk7Pc48n_M_sX3EXKVDsRaXaK_UCV9O&sz=w800"
    ]
  },
  {
    "id": "270",
    "title": "Service Apartment",
    "address": "Unit No. A-49-3A, Residensi Trofi 1, Jalan Dua, Sungai Besi, 55200, Kuala Lumpur",
    "postcode": "55200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 600000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "807 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1QRiZQeAegxfGvSVqET8EdUyFSKBPLbFn&sz=w800"
    ]
  },
  {
    "id": "271",
    "title": "Serviced Apartment",
    "address": "Unit No. B-32-5, Pavilion Residences Tower 2, Jalan Raja Chulan, 50200, Kuala Lumpur",
    "postcode": "50200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 3400000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "405 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1fE6h8H1A8u-2tPdDFonKhSe4MPMdCfT0&sz=w800"
    ]
  },
  {
    "id": "272",
    "title": "Service Apartment",
    "address": "Unit No. D-11-08, Residensi M Vertika, Batu 2 1/2, Jalan Cheras, 56000, Kuala Lumpur",
    "postcode": "56000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 405000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "850 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1LBwCvLGUSUDEW_3b81AZz9pyda-1gs_i&sz=w800"
    ]
  },
  {
    "id": "273",
    "title": "Condominium",
    "address": "Unit No. A-27-08, Block A, Damansara Seresta Condominium, Persiaran Meranti, Bandar Sri Damansara, PJU 9, 52200, Kuala Lumpur",
    "postcode": "52200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 900000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "572 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1UP1HhQvSenFtz3ZpKi4bmAmFVtd65MrZ&sz=w800"
    ]
  },
  {
    "id": "274",
    "title": "Service Apartment",
    "address": "Unit No. Block D2-45-01, Block D2, Residensi Bandar Razak, No. 1, Jalan Razak Mansion, Sungai Besi, 57100, Kuala Lumpur",
    "postcode": "57100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 490000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "141 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1DyKY_D1YKNC_9IJjn5b1AvF_b0KFU8-1&sz=w800"
    ]
  },
  {
    "id": "275",
    "title": "Apartment",
    "address": "Unit No. A-20-8, Block A, Pangsapuri Melur, No. 72A, Jalan 2/48A, Sentul Perdana, Bandar Baru Sentul, 51000, Kuala Lumpur",
    "postcode": "51000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 330000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "025 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=11BYWHAPsAl01griC5C1vGodVPrig73ig&sz=w800"
    ]
  },
  {
    "id": "276",
    "title": "Condominium",
    "address": "Unit No. T2-27-11, South Brooks, No. 7, Jalan Residen Utama, Desa Parkcity, 52200, Kuala Lumpur",
    "postcode": "52200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 1250000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "152 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1uhW1ga6fMdU-w8Xi8PLZcQEG_NZ4M76U&sz=w800"
    ]
  },
  {
    "id": "277",
    "title": "Apartment",
    "address": "Unit No. A-37-13, Residensi Max Kolam Air, No. 61, Jalan Kolam Air 6, Kasipillay, 51200, Kuala Lumpur",
    "postcode": "51200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 300000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "901 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=17JY5B96ZdfJF68kcz3dxRsMmrACCnz15&sz=w800"
    ]
  },
  {
    "id": "278",
    "title": "Apartment",
    "address": "Unit No. 25-08, Pangsapuri Nuri Desa Petaling, No. 22, Jalan 2/125, Desa Petaling, 57100, Kuala Lumpur",
    "postcode": "57100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 300000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "850 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Qs7Ic8ddoubqAcUh7y5UaGch1KCAOM16&sz=w800"
    ]
  },
  {
    "id": "279",
    "title": "Service Apartment",
    "address": "Unit No. C-26-3A, Megan Legasi @ Millerz Square, No. 357, Jalan Kelang Lama, 58000, Kuala Lumpur",
    "postcode": "58000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 540000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "660 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=19dsbqT58nd1zUAbiDzPvTAkWkfCktz1d&sz=w800"
    ]
  },
  {
    "id": "280",
    "title": "Service Apartment",
    "address": "Unit No. C-12-01, Residensi Agile Delima, Jalan Delima, Bukit Bintang, 55100, Kuala Lumpur",
    "postcode": "55100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 1070000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "703 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1m73Ft1S68IEGBB0ph7SMEyuvuoKpdE2v&sz=w800",
      "https://drive.google.com/thumbnail?id=1mgmPEo6jVXLEaUBNgDP_PpLjbYXYZh5j&sz=w800",
      "https://drive.google.com/thumbnail?id=1ySpxqGiC8aSzyaPwGR6RabG6amFx5xFl&sz=w800",
      "https://drive.google.com/thumbnail?id=17vmVySBGGGzuFuBsok1ZYjfoQ-W2Rxzl&sz=w800",
      "https://drive.google.com/thumbnail?id=1jDxjtdqj57zFKuPs9qPpumQnNU2umkbr&sz=w800"
    ]
  },
  {
    "id": "281",
    "title": "Service Apartment",
    "address": "Unit No. C-09-05, 9th Floor, Block C, KL Traders Square, No. 99, Jalan Gombak, Setapak, 53000, Kuala Lumpur",
    "postcode": "53000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 480000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "059 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1mQaqDkRnxg2Vy3azhqvYjk9N84GRZ7Gn&sz=w800",
      "https://drive.google.com/thumbnail?id=1Ls3yg3y8NH3U4vcUp0TgIvjm_PCbrCV8&sz=w800",
      "https://drive.google.com/thumbnail?id=1NF2t9jcR4GsEMFaoOyMKmyAmyQEEccag&sz=w800"
    ]
  },
  {
    "id": "282",
    "title": "[Prime location facing the main road] Retail Shop Lot [Surrounded by residential areas]",
    "address": "Unit No. B-1-138, 1st Floor, Block B, GM Klang Wholesale City, Jalan Kasuarina 1, Bandar Botanik, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 232000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "301 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1lBELOkuimkQBs47AXlXd3ICP8cELT5aW&sz=w800"
    ]
  },
  {
    "id": "283",
    "title": "[Next to Billion Shopping Centre] Flat [4 min to Mydin Wholesale Hypermarket]",
    "address": "Unit No. B4-26, Block B, Jalan 1/18, Seksyen 1, Bandar Teknologi Kajang, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 30000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "549 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1YwYt-GaLdUyNg3MM6fk34umwpTQM1LBU&sz=w800"
    ]
  },
  {
    "id": "284",
    "title": "[Next to Kuala Lumpur-Seremban Expressway] Office Unit [6 min to South City Plaza]",
    "address": "Unit No. B-2-10, Streetmall, One South, Jalan OS, Taman Serdang Perdana, Seksyen 6, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 173000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "840 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1BKIzfA2IQ_OEdV8Qk5vaiaS3OS5IH17Q&sz=w800"
    ]
  },
  {
    "id": "285",
    "title": "[Behind Eco-Shop @ Taman Mas Sepang] Service Apartment [10 min to Lotus's Bukit Puchong]",
    "address": "Unit No. D-18-1, Tower D, Koi Prima, Jalan Pinggiran Mas, Taman Mas Langat, 47130 Puchong, Selangor",
    "postcode": "47130",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 201000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "096 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1WqGJMm5FmFlUfZxV4Nim08HkDx9AbpUZ&sz=w800"
    ]
  },
  {
    "id": "286",
    "title": "[4 min to Semenyih Town] Apartment [6 min to Econsave Semenyih & Lotus's Semenyih]",
    "address": "Unit No. TR1-10-07, 10th Floor, The Residence 1, Jalan TE 5, Taman Tiara East, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 129000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "947 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1XEhSzutiRo3lI-Df4Q4qx1hBTYQr2vGu&sz=w800",
      "https://drive.google.com/thumbnail?id=1-emTsGedUGBaKoY-B4Kytw-FD-IPt28c&sz=w800"
    ]
  },
  {
    "id": "287",
    "title": "Apartment",
    "address": "Unit No. J-421, 4th Floor, Block J, Apartment Harmoni, No. 55, Jalan PJU 10/4C, Damansara Damai, 47830 Petaling Jaya, Selangor",
    "postcode": "47830",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 73000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "650 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1jLqp9uDCtZa1TBfZtkcy_Yx4kTPMJ4BE&sz=w800"
    ]
  },
  {
    "id": "288",
    "title": "Apartment",
    "address": "Unit No. M01-11-13A, Block M01, Pangsapuri Camellia, Jalan Ecohill 1/2, Setia Ecohill, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 175000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "861 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1bPgHAqfO5R1HYcxTz9Qrpy2W9Eufcvza&sz=w800"
    ]
  },
  {
    "id": "289",
    "title": "[4 min to Multimedia University (MMU Cyberjaya)] Service Apartment [9 min to DPULZE Shopping Centre]",
    "address": "Unit No. D-20-06, Menara D, The ARC, Persiaran Bestari, Cyber 11, 63000 Cyberjaya, Selangor",
    "postcode": "63000",
    "state": "Selangor",
    "area": "Cyberjaya",
    "reservePrice": 219000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "012 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=14AAN4eoDlmZG0EVZ9O8Mf2QIvGeOjWJS&sz=w800"
    ]
  },
  {
    "id": "290",
    "title": "[9 min to Bangi KTM Station] Service Apartment [Close to Lotus's Bangi]",
    "address": "Unit No. B-12-03, Sensory Residence, Jalan Southville 1, Southville City, 43800 Dengkil, Selangor",
    "postcode": "43800",
    "state": "Selangor",
    "area": "Dengkil",
    "reservePrice": 233280,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "893 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xPs23092N7_V_6xMvsuub24nePO8sM2m&sz=w800"
    ]
  },
  {
    "id": "291",
    "title": "3 Storey Superlink Terrace House",
    "address": "No. 25, Jalan Anggun 3E, Taman Anggun 3, Kota Emerald, 48000 Rawang, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 519000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1RPWdUBgq79WlGDLuKWH1DPu_Gq_uITpc&sz=w800",
      "https://drive.google.com/thumbnail?id=1uRQulsitxWejdo1ip4XdDdBNs_s6t34A&sz=w800",
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "292",
    "title": "2 Storey Terrace House",
    "address": "No. 22, Jalan Jati 1, Taman Saujana Utama 2, 47000 Sungai Buloh, Selangor",
    "postcode": "47000",
    "state": "Selangor",
    "area": "Sungai Buloh",
    "reservePrice": 357000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "099 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=18dhkajAc1Y4G78y1MpvNVIMpzJmEToZ6&sz=w800"
    ]
  },
  {
    "id": "293",
    "title": "[Strategic location] 2 Storey Terrace House [Short distance to Gamuda Walk Mall]",
    "address": "Premises No. 24, Jalan Sungai Long 32/187, Taman Violet Impian, Seksyen 32, 40460 Shah Alam, Selangor",
    "postcode": "40460",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 273000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "055 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1AS4O-d8ZM8fYZ3Gp5VGu0P3REuh1JtcP&sz=w800"
    ]
  },
  {
    "id": "294",
    "title": "Service Apartment",
    "address": "Unit No. B-38-14, Blok B, Residensi Emas, Jalan Zamrud 2, Sungai Tangkas, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 176000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "700 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1GQtQU3qNOXqHo6jwUKPXolHJNNF_F1k4&sz=w800",
      "https://drive.google.com/thumbnail?id=1KQpe8A4hcUrhKlYDr93hjO85vfdG4x8I&sz=w800",
      "https://drive.google.com/thumbnail?id=1tqKxxkjAdqp3AvZgNMN2qczTQ9SYZnC-&sz=w800"
    ]
  },
  {
    "id": "295",
    "title": "[Lower Level; Playground View] Duplex Town House With Extra Land [Gated and Guarded; Behind KIPMall Kota Warisan]",
    "address": "Unit No. 49-1, Jalan WP 3/4, Ayden Townhouse, Kota Warisan, 43900 Sepang, Selangor",
    "postcode": "43900",
    "state": "Selangor",
    "area": "Sepang",
    "reservePrice": 432000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "475 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1bzPa22iGNnqF7UYH7YJH-UZcY1wo02wH&sz=w800"
    ]
  },
  {
    "id": "296",
    "title": "Condominium",
    "address": "Unit No. A13-2, Villaria Condominium, Jalan PJS 5/32, Taman Desaria, 46000 Petaling Jaya, Selangor",
    "postcode": "46000",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 245000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "999 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=15A9zSFuYkHS068GAPylHfvMJbiQynPT_&sz=w800"
    ]
  },
  {
    "id": "297",
    "title": "2 Storey Shop Lot",
    "address": "Unit No. P-1-16 & P-2-16, Pusat Perdagangan Icon City, No. 1B, Jalan SS 8/39, 47300 Petaling Jaya, Selangor",
    "postcode": "47300",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 2107000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "531 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1tuc7RajRZ9c-jipw7LUsJdEToDHteJzx&sz=w800",
      "https://drive.google.com/thumbnail?id=1ItXP_7uLIqs_rr3woH7plv4rT3dnz-kX&sz=w800",
      "https://drive.google.com/thumbnail?id=1ck9sgIYpK_csuB0N5RkNWw2DweAYWzVJ&sz=w800"
    ]
  },
  {
    "id": "298",
    "title": "SOHO",
    "address": "Unit No. A1-30-01, Block A, Kenwingston Residence, Kenwingston Square Garden, Persiaran Kreatif, Cyber 9, 63000 Cyberjaya, Selangor",
    "postcode": "63000",
    "state": "Selangor",
    "area": "Cyberjaya",
    "reservePrice": 228000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "657 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1nbMAMHiLFOHeJx1gNxBc620-tqFtmiAb&sz=w800",
      "https://drive.google.com/thumbnail?id=1gk5AFc6geSStxNHg5djZ2cp0E-hIyDGu&sz=w800"
    ]
  },
  {
    "id": "299",
    "title": "Apartment [3 min to Mutiara Damansara MRT Station & Sunway Giza Mall]",
    "address": "Unit No. E-18-13A, Block E (Anggerik), Pelangi Damansara, PJU 6, Persiaran Surian, 47800 Petaling Jaya, Selangor",
    "postcode": "47800",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 189000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "764 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xC6XuDL9sCh2o8ca095tstVTEDN97q52&sz=w800"
    ]
  },
  {
    "id": "300",
    "title": "Condominium",
    "address": "Unit No. A15-11, Block A, Magna Ville Selayang, Selayang Bahagia, Lebuhraya Selayang Kepong, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 245000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "259 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=178TxjfmJZDNxcpne0xZ0_1o6LGHfJC2T&sz=w800"
    ]
  },
  {
    "id": "301",
    "title": "[Gated and Guarded Community] 4 Storey Terrace House [5 min to IKEA Damansara and The Curve]",
    "address": "No. P10-032, Parcel 10, Empire Residence, Jalan PJU 8/1A, Damansara Perdana, PJU 8, 47820 Petaling Jaya, Selangor",
    "postcode": "47820",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 990000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "665 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1gBmjvwFdvwUdXugSF7g-UMEhDWo4xJzS&sz=w800"
    ]
  },
  {
    "id": "302",
    "title": "[Gated and guarded community] 2 Storey Terrace House [5 min to KIPMall Kota Warisan]",
    "address": "No. 18, Jalan WT 1/7, Taman Setia Warisan Tropika, 43900 Sepang, Selangor",
    "postcode": "43900",
    "state": "Selangor",
    "area": "Sepang",
    "reservePrice": 765000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "799 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1ChsOQnGHv0ugTw74vKkvdDk-6XsRXguK&sz=w800"
    ]
  },
  {
    "id": "303",
    "title": "2 Storey Terrace House",
    "address": "No. 62, Lorong Delima 5, Bandar Parklands, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 544000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "500 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1WpiRnw2jfxTHhCCAOeS8bZFjPzqiTiXB&sz=w800"
    ]
  },
  {
    "id": "304",
    "title": "[7 min to Pasaraya CS Bangi Avenue] Apartment [10 min to Lotus's Bandar Puteri Bangi]",
    "address": "Unit No. E-18-4, Block E, Residensi Adelia, Persiaran Bangi Avenue 2, Taman Bangi Avenue, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 248000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "087 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1UWsZy6YjxJoVmRphKfimr1Iz339ce8KW&sz=w800",
      "https://drive.google.com/thumbnail?id=1ORsakLIJm5XvVKl7GPxbkWiTNOZmFd_t&sz=w800"
    ]
  },
  {
    "id": "305",
    "title": "Apartment",
    "address": "Unit No. E-21-12, Residensi Adelia, Persiaran Bangi Avenue 2, Taman Bangi Avenue, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 250000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "087 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1UWsZy6YjxJoVmRphKfimr1Iz339ce8KW&sz=w800",
      "https://drive.google.com/thumbnail?id=1ORsakLIJm5XvVKl7GPxbkWiTNOZmFd_t&sz=w800"
    ]
  },
  {
    "id": "306",
    "title": "2 Storey Terrace House",
    "address": "No. 20, Jalan Paya Lebar Lima 27/10E, Laman Seri, Seksyen 27, 40400 Shah Alam, Selangor",
    "postcode": "40400",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 607500,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "292 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1OsJBm1HyJoFUbf4IxTtV-BfMaNcDxQs8&sz=w800"
    ]
  },
  {
    "id": "307",
    "title": "Apartment",
    "address": "Unit No. A-22-03, Block A, Residensi Adelia 4, Jalan Persiaran Bangi Avenue 3, Taman Bangi Avenue, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 298000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "045 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1UWsZy6YjxJoVmRphKfimr1Iz339ce8KW&sz=w800",
      "https://drive.google.com/thumbnail?id=1ORsakLIJm5XvVKl7GPxbkWiTNOZmFd_t&sz=w800"
    ]
  },
  {
    "id": "308",
    "title": "2 Storey Terrace House",
    "address": "No. 91, Jalan SM 1/2, Taman Selayang Mulia, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 405000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "056 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1oehQOXUoV3Sm3MfhC_0GbiivFSKPdNCJ&sz=w800"
    ]
  },
  {
    "id": "309",
    "title": "2 Storey Terrace House",
    "address": "No. 50, Lorong Dato Dagang 27B, Taman Sentosa, 41000 Klang, Selangor",
    "postcode": "41000",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 225000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "900 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1TkLmOb2XSqNglXYDC0iox-D1hyaZ1pvF&sz=w800"
    ]
  },
  {
    "id": "310",
    "title": "Small Office Home Office (SOHO)",
    "address": "Unit No. B-08-17, Block B, I-Soho @ I-City (I-Suite), No. 2, Persiaran Multimedia, I-City, Seksyen 7, 40000 Shah Alam, Selangor",
    "postcode": "40000",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 320000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "570 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1Vbc9_VI0o12ZQoE_eaCSHTv6JBxmE0Ob&sz=w800"
    ]
  },
  {
    "id": "311",
    "title": "Service Apartment [4 min to Lembah Subang LRT Station; 7 min walk to Lotus's Ara Damansara; 8 min to CITTA Mall]",
    "address": "Unit No. B-20-01, H2O @ Ara Damansara, No. 1, Jalan PJU 1A/3, Ara Damansara, 47301 Petaling Jaya, Selangor",
    "postcode": "47301",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 615000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "880 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1P-OfQ1pCl74ljqBykFgBjqf6GzEkiNi8&sz=w800",
      "https://drive.google.com/thumbnail?id=19uFJWaZ_ZoFdard11Z0_ig0XRukVVtd-&sz=w800",
      "https://drive.google.com/thumbnail?id=17igZqJrx1hdghcZKkj-FZyKWbKdLRa1B&sz=w800",
      "https://drive.google.com/thumbnail?id=1vbDloiKZhsG-Rt2qt_jNgdgqefEMTeky&sz=w800"
    ]
  },
  {
    "id": "312",
    "title": "2 Storey Semi Detached House",
    "address": "No. 3, Jalan Elektron U16/76A, Denai Alam, Seksyen U16, 40160 Shah Alam, Selangor",
    "postcode": "40160",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 1729350,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "244 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1r54n3deFZ5QYOqyGXh33P-d9g6mxHK_w&sz=w800"
    ]
  },
  {
    "id": "313",
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
    "id": "314",
    "title": "1 Storey Detached House",
    "address": "No. C3, Lorong 6, Kampung Selangor Dredging, 43800 Dengkil, Selangor",
    "postcode": "43800",
    "state": "Selangor",
    "area": "Dengkil",
    "reservePrice": 300000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "966 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1msOo8r65c3axPHEgBGkXN3HfCzR09iKu&sz=w800"
    ]
  },
  {
    "id": "315",
    "title": "2 Storey Terrace House",
    "address": "No. 23, Lorong Tan Sri Manikavasagam 9E, Taman Menara Maju, 41000 Klang, Selangor",
    "postcode": "41000",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 350000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "275 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1UYs5haidS6cKB0exd-w-Qxj_o0sOErdr&sz=w800"
    ]
  },
  {
    "id": "316",
    "title": "Condominium",
    "address": "Unit No. C-16-15, Block Cassia, Vista Millennium Condominium, Jalan DM 1, Taman Desa Millenia, 47150 Puchong, Selangor",
    "postcode": "47150",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 290000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "969 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Bf1G37-NJ0ax5dS6jaCmcwCOn_lDeAhg&sz=w800",
      "https://drive.google.com/thumbnail?id=1OOOm0R00O9RmpS3T9hu-mvEyqpIrmU6D&sz=w800",
      "https://drive.google.com/thumbnail?id=1pTjiWpvDeCx4TMl8UGBgnDRs-Bnujsu6&sz=w800"
    ]
  },
  {
    "id": "317",
    "title": "2 Storey Terrace House",
    "address": "No. 23, Jalan Sari Alamanda 8/3A, Sari Alamanda, 48000 Rawang, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 460000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xVk9STf9pZq6mgDH5qXClBBG_68Qk94j&sz=w800"
    ]
  },
  {
    "id": "318",
    "title": "1.5 Storey Terrace House",
    "address": "No. 21, Jalan Chamar 1B/3, Perumahan Jalan Chamar, Lembah Beringin, 44110 Kuala Kubu Bharu, Selangor",
    "postcode": "44110",
    "state": "Selangor",
    "area": "Kuala Kubu Bharu",
    "reservePrice": 73000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "680 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1RbI0Wv9fqf2AG0l2zVaJzdzs_VJZ1ELJ&sz=w800"
    ]
  },
  {
    "id": "319",
    "title": "Service Apartment",
    "address": "Unit No. J-22-05, Block J, BSP 21, Persiaran Saujana Putra Utama, Bandar Saujana Putra, 42610 Jenjarom, Selangor",
    "postcode": "42610",
    "state": "Selangor",
    "area": "Jenjarom",
    "reservePrice": 270000,
    "auctionDate": "29 Jul 2026 (Wed)",
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
    "id": "320",
    "title": "2 Storey Terrace House",
    "address": "Premises No. 8, Jalan KE 11/3, Kota Emerald, 48000 Rawang, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 600000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "201 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1RPWdUBgq79WlGDLuKWH1DPu_Gq_uITpc&sz=w800"
    ]
  },
  {
    "id": "321",
    "title": "2 Storey Terrace House",
    "address": "No. 17, Jalan KM 16, Kita Mekar, 43800 Dengkil, Selangor",
    "postcode": "43800",
    "state": "Selangor",
    "area": "Dengkil",
    "reservePrice": 535000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "200 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1LWXy4gAEXWDHmdGsuOlDtd7Ss5Umf7qM&sz=w800"
    ]
  },
  {
    "id": "322",
    "title": "Apartment",
    "address": "Unit No. M3-4-06, Pangsapuri Paragon Tiga, Persiaran Lestari Putra, Taman Lestari Putra, Bandar Putra Permai, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 500000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "524 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1bU7jlVVvjyWBP9BYh351bCwPaGlmK0oY&sz=w800"
    ]
  },
  {
    "id": "323",
    "title": "Town House (Upper Unit)",
    "address": "No. 1-12, Jalan MR 4, Meranti Residensi, 47120 Puchong, Selangor",
    "postcode": "47120",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 450000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "591 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1PbFGsJc7QgmCRyI7axapHOo9E38shmg-&sz=w800"
    ]
  },
  {
    "id": "324",
    "title": "Service Apartment",
    "address": "Unit No. A-06-10, Residensi Suria, No. 5, Jalan Bazar U8/100, Bukit Jelutong, Seksyen U8, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 450000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "807 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=15afy7oUvru2wocNsueoUilP-ejXr0uyW&sz=w800"
    ]
  },
  {
    "id": "325",
    "title": "Apartment",
    "address": "Unit No. AC4/21-B, Block B, Tingkat 4, Jalan Plumbum AC 7/AC, Pusat Komersial Seksyen 7, 40000 Shah Alam, Selangor",
    "postcode": "40000",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 250000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "836 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1GYl-0lupb4BI_MI99USjp7cFElgTRCuU&sz=w800"
    ]
  },
  {
    "id": "326",
    "title": "Apartment",
    "address": "Unit No. DCM02-03-14, Pangsapuri De Cemara, No. 3, Persiaran Setia Makmur, Setia Alam, Seksyen U13, 40170 Shah Alam, Selangor",
    "postcode": "40170",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 240000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "753 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1XwzXw-gXBnMKIUz8uF0uqd4l2SAPHz_6&sz=w800"
    ]
  },
  {
    "id": "327",
    "title": "Apartment",
    "address": "Unit No. T2-13-03A, Tower 2, Pangsapuri Desa Mas, Jalan DM 1, Taman Desa Mas, 48000 Rawang, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 230000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "861 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1wITR5IDv3J5thsCJO-0qaAcElbkTE5U_&sz=w800"
    ]
  },
  {
    "id": "328",
    "title": "Apartment",
    "address": "Unit No. 12-12, The Residence 1, Jalan Tiara South 6, Tiara South, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 230000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "919 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1XEhSzutiRo3lI-Df4Q4qx1hBTYQr2vGu&sz=w800",
      "https://drive.google.com/thumbnail?id=1-emTsGedUGBaKoY-B4Kytw-FD-IPt28c&sz=w800"
    ]
  },
  {
    "id": "329",
    "title": "Apartment",
    "address": "Unit No. M6-2-03, Block M6, Pangsapuri Taman Perkasa, Jalan 10/2, 43100 Hulu Langat, Selangor",
    "postcode": "43100",
    "state": "Selangor",
    "area": "Hulu Langat",
    "reservePrice": 220000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "753 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1rooFHmiYrCGk2ZULHXWvg2-_zHHZrazF&sz=w800"
    ]
  },
  {
    "id": "330",
    "title": "Apartment",
    "address": "Unit No. 12A-3B, Block A, Jalan OS 1/2, One Selayang, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 220000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "829 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=10ft3Yx0cAf3wCDJGJFEiQLf_ru4-V5DX&sz=w800"
    ]
  },
  {
    "id": "331",
    "title": "Retail Shop Lot",
    "address": "Unit No. B-2-144, 2nd Floor, Block B, GM Klang Wholesale City, Jalan Kasuarina 1, Bandar Botanik, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 200000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "160 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1lBELOkuimkQBs47AXlXd3ICP8cELT5aW&sz=w800"
    ]
  },
  {
    "id": "332",
    "title": "Retail Shop Lot",
    "address": "Unit No. B-2-111, 2nd Floor, Block B, GM Klang Wholesale City, Jalan Kasuarina 1, Bandar Botanik, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 200000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "160 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1lBELOkuimkQBs47AXlXd3ICP8cELT5aW&sz=w800"
    ]
  },
  {
    "id": "333",
    "title": "Apartment",
    "address": "Unit No. A-401, Block A, Apartment Indah, No. 2, Jalan PJU 10/1C, PJU 10, Damansara Damai, 47830 Petaling Jaya, Selangor",
    "postcode": "47830",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 190000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "753 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1QwNs4tSTUrZ_qAIBWvPJ_KwOk6KfoOTd&sz=w800"
    ]
  },
  {
    "id": "334",
    "title": "Apartment",
    "address": "Unit No. L1-2-17, Block L1, Lilywood Court, Pinggiran Lembah Hijau 6, Bandar Tasik Puteri, 48020 Rawang, Selangor",
    "postcode": "48020",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 130000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "729 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1GnMxAA7bxdDRaN1uHhIYNfgJCt8EOhlR&sz=w800"
    ]
  },
  {
    "id": "335",
    "title": "2 Storey Terrace House",
    "address": "No. 32, Jalan MG 4, Taman Myra Gardens, 48050 Rawang, Selangor",
    "postcode": "48050",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 520000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Mp1NDJG5OAzdSSVu5e_96f6l9H9jL8SX&sz=w800"
    ]
  },
  {
    "id": "336",
    "title": "Apartment",
    "address": "Unit No. B-10-1, Block B, Residensi Adelia 4, Jalan Persiaran Bangi Avenue 3, Taman Bangi Avenue, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 315000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "044 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1UWsZy6YjxJoVmRphKfimr1Iz339ce8KW&sz=w800",
      "https://drive.google.com/thumbnail?id=1ORsakLIJm5XvVKl7GPxbkWiTNOZmFd_t&sz=w800"
    ]
  },
  {
    "id": "337",
    "title": "Service Apartment",
    "address": "Unit No. AR1-17-03, Almera Residensi, Laman Puteri 3, Bandar Puteri, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 340000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "947 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1uCM5uZXfOyHQRfDcc8ziHr8b85v9PEVl&sz=w800"
    ]
  },
  {
    "id": "338",
    "title": "2 Storey Terrace House",
    "address": "No. 30, Jalan MR 1, Maple Residence, Persiaran Laman View, Cyber 9, 63000 Cyberjaya, Selangor",
    "postcode": "63000",
    "state": "Selangor",
    "area": "Cyberjaya",
    "reservePrice": 1100000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "293 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=18uwdImdMTGnLbwAp2hQj0xVM7VJ-DmNl&sz=w800"
    ]
  },
  {
    "id": "339",
    "title": "Condominium",
    "address": "Unit No. C-10-3, 10th Floor, Block C, Cloudtree Residences, Jalan Juara, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 570000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "270 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1sBVR8z7nqMJSIFEkTNvlGLOwvmKvXRGO&sz=w800"
    ]
  },
  {
    "id": "340",
    "title": "Town House",
    "address": "No. 3-2, Jalan Tropicana Heights 3/3, Tropicana Heights, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 750000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "422 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1ik5liNApOFzkTrEjAfIDQS_xWSwY1f7l&sz=w800"
    ]
  },
  {
    "id": "341",
    "title": "Small Office Home Office (SOHO)",
    "address": "Unit No. B-08-18, Block B, I-Soho @ I-City (I-Suite), No. 2, Persiaran Multimedia, I-City, Seksyen 7, 40000 Shah Alam, Selangor",
    "postcode": "40000",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 320000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "570 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1Vbc9_VI0o12ZQoE_eaCSHTv6JBxmE0Ob&sz=w800"
    ]
  },
  {
    "id": "342",
    "title": "Service Apartment",
    "address": "Unit No. 14 12, 14th Floor, Pangsapuri Servis Brunsfield, No. 3, Jalan 13/42, Seksyen 13, 40100 Shah Alam, Selangor",
    "postcode": "40100",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 240000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "682 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1noemUe-Nyy8o-FtkDO97GpzfunVd2-B-&sz=w800"
    ]
  },
  {
    "id": "343",
    "title": "Service Apartment",
    "address": "Unit No. 24-25, Residensi The Edge, Persiaran Subang Indah, USJ 1, 47600 Subang Jaya, Selangor",
    "postcode": "47600",
    "state": "Selangor",
    "area": "Subang Jaya",
    "reservePrice": 320000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "646 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1ICQJZ-XyFWNSFECZAVC6aU3EocOyzmPb&sz=w800"
    ]
  },
  {
    "id": "344",
    "title": "Apartment",
    "address": "Unit No. D-2-17, Block D, Pangsapuri D'Rimba, No. 11, Jalan Kenyalang 11/14, Kota Damansara, 47810 Petaling Jaya, Selangor",
    "postcode": "47810",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 324000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "001 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=16NIr_wThNmq-ATKqsvIYJY5TJ0CracxD&sz=w800"
    ]
  },
  {
    "id": "345",
    "title": "2 Storey Terrace House",
    "address": "No. 76, Jalan 8/7, Seksyen 8, 43650 Bandar Baru Bangi, Selangor",
    "postcode": "43650",
    "state": "Selangor",
    "area": "Bandar Baru Bangi",
    "reservePrice": 560000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "988 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Pt5pmSYSxHduHrFIV3CRvYIuM7RIP0IY&sz=w800"
    ]
  },
  {
    "id": "346",
    "title": "Apartment",
    "address": "Unit No. 05-08-12, Block 5, Pangsapuri Seri Mutiara, Jalan Setia Gemilang U13/45B, Section U13, 40170 Shah Alam, Selangor",
    "postcode": "40170",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 280000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "667 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1jdxzWXMnSzkC1PaghaAjCms0ijNYCSX2&sz=w800"
    ]
  },
  {
    "id": "347",
    "title": "2 Storey Semi Detached House",
    "address": "No. 17, Lorong Lautan Samudera 9/16, Seksyen 9, 42300 Bandar Puncak Alam, Selangor",
    "postcode": "42300",
    "state": "Selangor",
    "area": "Bandar Puncak Alam",
    "reservePrice": 600000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "577 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1SHjT8Lm0wCqWSfZEbrP-RGX_pcbU5DL_&sz=w800"
    ]
  },
  {
    "id": "348",
    "title": "Service Apartment",
    "address": "Unit No. 16-08, Residensi Idaman Aman (The Arcuz), Jalan PJU 1A/4F, 47301 Petaling Jaya, Selangor",
    "postcode": "47301",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 420000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "753 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1_iTJ7h8i0Gr7AOBLT2HQd9-fMDfF--Xy&sz=w800"
    ]
  },
  {
    "id": "349",
    "title": "2 Storey Terrace House",
    "address": "No. 39, Jalan Eco Grandeur 3/2F, Eco Grandeur, 42300 Puncak Alam, Selangor",
    "postcode": "42300",
    "state": "Selangor",
    "area": "Puncak Alam",
    "reservePrice": 495000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "300 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1rLHGA7D4C9le88v_8o4XyuG3rYJF1UM5&sz=w800"
    ]
  },
  {
    "id": "350",
    "title": "Shop Apartment",
    "address": "Unit No. 11-3D, Jalan Dato Yusof Shahbudin 42, Taman Sentosa, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 95000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "646 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "351",
    "title": "2 Storey Detached House",
    "address": "No. 42, Jalan Anggerik 2D, Perumahan Jalan Anggerik, Prima Beruntung, Bukit Beruntung, 48300 Rawang, Selangor",
    "postcode": "48300",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 495000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "004 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Lhi18uTGLiUckDjyu3MXcz0P4cGsgW3Y&sz=w800"
    ]
  },
  {
    "id": "352",
    "title": "Duplex Townhouse",
    "address": "Unit No. D-1-8, Block D, Avenue Two Lake Valley, Persiaran Suarasa 3, Bandar Tun Hussein Onn, 43200 Cheras, Selangor",
    "postcode": "43200",
    "state": "Selangor",
    "area": "Cheras",
    "reservePrice": 620000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "390 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1MrmS6nG86eTyzDZ6SQNq8tz-s4X6vxsX&sz=w800"
    ]
  },
  {
    "id": "353",
    "title": "SOVO",
    "address": "Unit No. 12-13, TTDI Sentralis, Jalan Tukul Besi 13/41, Seksyen 13, 40100 Shah Alam, Selangor",
    "postcode": "40100",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 281000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "775 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1YZbFnaLSGRF2bsV2yS1lk9cejgquPJYa&sz=w800"
    ]
  },
  {
    "id": "354",
    "title": "Service Apartment",
    "address": "Unit No. A-28-08, Block A, Kiara Plaza, Jalan Semenyih, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 270000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "066 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1M-Qg5BJ52E_--kKxvXKUFFpFDeFQsB1Q&sz=w800",
      "https://drive.google.com/thumbnail?id=1023QpSjnPR5RW2Q4hzzYn4CwyRV9ix4d&sz=w800",
      "https://drive.google.com/thumbnail?id=155a5alHna8C3q9ic_SMsamiu0PFrZjr9&sz=w800",
      "https://drive.google.com/thumbnail?id=1foFnkSUJ97WzOgp7bAC-YfBdqYu33c33&sz=w800",
      "https://drive.google.com/thumbnail?id=1nOSAuFZD0nrxFW4H_eC55BPONdZKRzPC&sz=w800",
      "https://drive.google.com/thumbnail?id=1N4ZqLm1rlW5gLTX9e4f42iDKwB_utP4k&sz=w800"
    ]
  },
  {
    "id": "355",
    "title": "Apartment",
    "address": "Unit No. DK01-07-14, Pangsapuri De Kiara, No. 4, Persiaran Setia Makmur, Setia Alam, Seksyen U13, 40170 Shah Alam, Selangor",
    "postcode": "40170",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 216000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "799 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1e7dbzxVcjWWln7sYYWR12EumDcL59vH3&sz=w800"
    ]
  },
  {
    "id": "356",
    "title": "Apartment",
    "address": "Unit No. A-13-10, Block A, Apartment Prima Two, Laman View, Cyber 9, 63000 Cyberjaya, Selangor",
    "postcode": "63000",
    "state": "Selangor",
    "area": "Cyberjaya",
    "reservePrice": 215000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "840 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=17b4j3oD8gVr4RIRdDZek9PHuoycCzQza&sz=w800"
    ]
  },
  {
    "id": "357",
    "title": "Duplex Town House (Upper Unit)",
    "address": "Unit No. 49-2, Jalan WP 3/4, Ayden Townhouse, Kota Warisan, 43900 Sepang, Selangor",
    "postcode": "43900",
    "state": "Selangor",
    "area": "Sepang",
    "reservePrice": 346000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "765 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1bzPa22iGNnqF7UYH7YJH-UZcY1wo02wH&sz=w800"
    ]
  },
  {
    "id": "358",
    "title": "Condominium",
    "address": "Unit No. A-10-13, Block A, Residensi Bukit Tiara, No. 48, Jalan Karunmas 7, Taman Desa Karunmas, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 239000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "001 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=12ECJempC_erWbPa3MlkepEK4q4ip5nRZ&sz=w800"
    ]
  },
  {
    "id": "359",
    "title": "Service Apartment",
    "address": "Unit No. 2-35-18, Tower 2, Bayu Residensi @ Seri Temenggung, Jalan Temenggung, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 250000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "549 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1DQryk545qKFK3H5Yi1ct9E7SN1mmNHLA&sz=w800"
    ]
  },
  {
    "id": "360",
    "title": "Service Apartment",
    "address": "Unit No. 32-09, SouthPlace Residences @ Tropicana Metropark, Jalan Delima 1/1, Subang Hi-Tech Industrial Park, 47500 Subang Jaya, Selangor",
    "postcode": "47500",
    "state": "Selangor",
    "area": "Subang Jaya",
    "reservePrice": 390000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1nc5yrb1_QUB-5YDBNjMwd53gtiqcCxoh&sz=w800"
    ]
  },
  {
    "id": "361",
    "title": "Service Apartment",
    "address": "Unit No. B-36-06, Tower B, Sensory Residence, Jalan Southville 1, Southville City, 43800 Dengkil, Selangor",
    "postcode": "43800",
    "state": "Selangor",
    "area": "Dengkil",
    "reservePrice": 400000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xPs23092N7_V_6xMvsuub24nePO8sM2m&sz=w800"
    ]
  },
  {
    "id": "362",
    "title": "Terrace House",
    "address": "No. 49, Myra Alam Phase 2B, Jalan Alam Perdana 1, Bandar Alam Perdana, 42300 Bandar Puncak Alam, Selangor",
    "postcode": "42300",
    "state": "Selangor",
    "area": "Bandar Puncak Alam",
    "reservePrice": 530000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JrNsGulvemlwrAicoYQFggChbMNPLpPF&sz=w800"
    ]
  },
  {
    "id": "363",
    "title": "Service Apartment",
    "address": "Unit No. B-01-12, One Equine Residences, Jalan Equine, Taman Equine, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 450000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=17BkCz9szV6oINxbUquDHbl5GrLrSoJ4g&sz=w800"
    ]
  },
  {
    "id": "364",
    "title": "Service Apartment",
    "address": "Unit No. RS-10-3A, Sunsuria Forum Residences, No. 1, Jalan Setia Dagang AL U13/AL, Seksyen U13, Setia Alam, 40170 Shah Alam, Selangor",
    "postcode": "40170",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 500000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1l5SJ4GY5u3Nw6jfIN7HfKOTQxL448-rU&sz=w800"
    ]
  },
  {
    "id": "365",
    "title": "Service Apartment",
    "address": "Unit No. B-29-09, Sensory Residence, Jalan Southville 1, Southville City, 43800 Dengkil, Selangor",
    "postcode": "43800",
    "state": "Selangor",
    "area": "Dengkil",
    "reservePrice": 360000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xPs23092N7_V_6xMvsuub24nePO8sM2m&sz=w800"
    ]
  },
  {
    "id": "366",
    "title": "Service Apartment",
    "address": "Unit No. AR-11-09, Acacia Residences, Salak Perdana, 43900 Sepang, Selangor",
    "postcode": "43900",
    "state": "Selangor",
    "area": "Sepang",
    "reservePrice": 350000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1ZoTlDxEM3JIBasWhbRbZgIFRPhpuqYrn&sz=w800"
    ]
  },
  {
    "id": "367",
    "title": "Suites",
    "address": "Unit No. N-12-13A, HighPark Suites, No. 1, Jalan SS6/7, Kelana Jaya, 47301 Petaling Jaya, Selangor",
    "postcode": "47301",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 570000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=14fQWsNf36BGE_PjOByW1qZdVmPjDm-f8&sz=w800"
    ]
  },
  {
    "id": "368",
    "title": "[Strategically located in the Heart of KL City Centre] Service Apartment [5 min to Suria KLCC]",
    "address": "Unit No. B-19-08, 188 Suites, Jalan Cendana, 50250, Kuala Lumpur",
    "postcode": "50250",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 528000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "184 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1dnQE4J0OriGtgMCORpKIqdcrnKvLOk7q&sz=w800",
      "https://drive.google.com/thumbnail?id=1fNjeHMZn1zIKcz9xsqP4Fcnd3wV18q-v&sz=w800",
      "https://drive.google.com/thumbnail?id=1GzdsqU-OOH4rVeepcLMNoCTohOAKNMWy&sz=w800",
      "https://drive.google.com/thumbnail?id=1-vCRlbtAbM6jxhf6VZ8zG3gZv9W-dHeU&sz=w800"
    ]
  },
  {
    "id": "369",
    "title": "[Walking to Setiawangsa LRT Station] Office Unit [3 min to EON Mall AU2 Setiawangsa]",
    "address": "Unit No. C-3-3A, Block C, Setiawangsa Business Suite, Jalan Setiawangsa 11, Taman Setiawangsa, 54200, Kuala Lumpur",
    "postcode": "54200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 351000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "701 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1dvdGByjKyCkcRyLPurjE9eqUjcoktr1q&sz=w800"
    ]
  },
  {
    "id": "370",
    "title": "[3 min to Segambut KTM Station] Dual-key Condominium [8 min to Publika Shopping Gallery]",
    "address": "Unit No. B-3A-5, Residensi Dutamas, No. 5, Jalan Dutamas Dahlia, 51200, Kuala Lumpur",
    "postcode": "51200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 745200,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "776 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Y818T-vW6as_ktOTPin0e_F2EEknZihx&sz=w800"
    ]
  },
  {
    "id": "371",
    "title": "[4 min to AEON BiG Wangsa Maju & Sri Rampai LRT Station] Service Apartment [6 min to Wangsa Maju LRT Station, Sunway Wangsawalk Mall & Setapak Central Mall]",
    "address": "Unit No. B-33-03, Residensi Altris, Jalan Wangsa Kuarza, 53300, Kuala Lumpur",
    "postcode": "53300",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 356400,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "786 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1ypBY6Bb1E23DID4WDwChz18ctHbTpRqT&sz=w800"
    ]
  },
  {
    "id": "372",
    "title": "[6 min to AEON BiG Wangsa Maju] Service Apartment [7 min to Sri Rampai LRT Station – easy access to KLCC & city centre]",
    "address": "Unit No. C-29-02, Residensi Altris, Jalan Wangsa Kuarza, 53300, Kuala Lumpur",
    "postcode": "53300",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 285120,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "646 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1ypBY6Bb1E23DID4WDwChz18ctHbTpRqT&sz=w800"
    ]
  },
  {
    "id": "373",
    "title": "[Walking distance to Kampung Baru LRT Station] Apartment [6 min to Quill City Mall]",
    "address": "Unit No. A-33-12, Legasi Kampung Bharu, Jalan Raja Muda Musa, Kampung Bharu, 50300, Kuala Lumpur",
    "postcode": "50300",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 454000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "947 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1ri8yNqh0oTk1wQ8qUtvLNX1miaeNnuuL&sz=w800"
    ]
  },
  {
    "id": "374",
    "title": "Service Apartment",
    "address": "Unit No. S-35-03, Idaman Robertson, Jalan Robertson, 50150, Kuala Lumpur",
    "postcode": "50150",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 430000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "624 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Stqk-1wwlxyu5tKHG2RgozQlE6jywkp9&sz=w800",
      "https://drive.google.com/thumbnail?id=1dfBrM0XymQEzz9V6ixmpgR7hKiOTokvJ&sz=w800",
      "https://drive.google.com/thumbnail?id=1UGwruXM0MzitNtlYFhOt555GEm9MINeK&sz=w800"
    ]
  },
  {
    "id": "375",
    "title": "Condominium [10 min to NSK Trade City (Kuchai Lama)]",
    "address": "Unit No. A-33-07, Residensi Skyvogue, No. 8, Jalan 1/109F, Taman Desa, 58100, Kuala Lumpur",
    "postcode": "58100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 502200,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1870zfrraoMo8xjx6yT1Te0l-cAzDkGgP&sz=w800"
    ]
  },
  {
    "id": "376",
    "title": "Apartment",
    "address": "Unit No. A-27-13A, Block A, Residensi Skysanctuary 1, Jalan Santuari 1, Setapak, 53200, Kuala Lumpur",
    "postcode": "53200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 464000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "044 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1f8JaFemoHyxZKmndVEh-aUU91JjkfQLG&sz=w800"
    ]
  },
  {
    "id": "377",
    "title": "[4 min to NSK Grocer The Rivercity] Apartment [6 min to Sentul Barat MRT Station]",
    "address": "Unit No. B-38-08, Residensi Max Kolam Air, No. 61, Jalan Kolam Air 6, Kasipillay, 51200, Kuala Lumpur",
    "postcode": "51200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 240000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "904 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=17JY5B96ZdfJF68kcz3dxRsMmrACCnz15&sz=w800"
    ]
  },
  {
    "id": "378",
    "title": "Service Apartment",
    "address": "Unit No. B-27-07, Mercu Kenwingston, Jalan Gombak, 53000, Kuala Lumpur",
    "postcode": "53000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 280000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "567 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1_cJFhgfA5kF_gb_zgFwIi0l3cc8Iai7l&sz=w800",
      "https://drive.google.com/thumbnail?id=12MhsC3oheOWRh8mo5HTZd9rSprhgvsaX&sz=w800",
      "https://drive.google.com/thumbnail?id=1YGgbvHxS6ZOxcw6maG6KnnodO1zPWQeE&sz=w800",
      "https://drive.google.com/thumbnail?id=1283wODzHY3iT0VsZ6wi2vpCDk799zQA8&sz=w800"
    ]
  },
  {
    "id": "379",
    "title": "Service Apartment",
    "address": "Unit No. D3-47-12, Residensi Bandar Razak, No. 1, Jalan Razak Mansion, Sungai Besi, 57100, Kuala Lumpur",
    "postcode": "57100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 385000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "141 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1DyKY_D1YKNC_9IJjn5b1AvF_b0KFU8-1&sz=w800"
    ]
  },
  {
    "id": "380",
    "title": "1 Storey Terrace House",
    "address": "No. 47, Jalan Api-Api 1, Kepong Baru, 52100, Kuala Lumpur",
    "postcode": "52100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 486000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "430 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1f_eVqddx2wJKpJuB61kFsPf8XBz1bzIj&sz=w800"
    ]
  },
  {
    "id": "381",
    "title": "2 Storey Terrace House",
    "address": "No. 109, Jalan Makmur, Taman Mulia, 56000, Kuala Lumpur",
    "postcode": "56000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 792000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "800 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1imBKE1oCgcW8seQQeWF7-Vdiy_mH34cu&sz=w800"
    ]
  },
  {
    "id": "382",
    "title": "[Strategic Location] Office Unit [Link bridge to Cochrane & Maluri MRT Stations]",
    "address": "Unit No. VO5-03A-09, V05 Office, Lingkaran SV, Sunway Velocity, 55100, Kuala Lumpur",
    "postcode": "55100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 1680000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "932 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1uEuKfSpbsBSmpbUZacaIXNBgt1FFJR0H&sz=w800"
    ]
  },
  {
    "id": "383",
    "title": "Condominium",
    "address": "Unit No. 6-3A, Alam Puri Condominium, Jalan Kampung Batu, Batu 5, Off Jalan Ipoh, 51200, Kuala Lumpur",
    "postcode": "51200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 500000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "012 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1jYqcrDo-UCyuyZKosGrdHdmmu8boslX_&sz=w800"
    ]
  },
  {
    "id": "384",
    "title": "Condominium",
    "address": "Villa Inai Condominium, Jalan Inai, 55100, Kuala Lumpur",
    "postcode": "55100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 1100000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "217 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=12SVE4_BtFpwO02WLzuOZqoGAFov8OhsP&sz=w800"
    ]
  },
  {
    "id": "385",
    "title": "3 Storey Terrace House",
    "address": "No. 18, Jalan Desiran Bayu, Taman Desiran Bayu, 53300, Kuala Lumpur",
    "postcode": "53300",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 1440000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "594 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1QMpH7XOvYu719wZHYPpHxBN-RvjRqbEh&sz=w800"
    ]
  },
  {
    "id": "386",
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
    "id": "387",
    "title": "Terrace House",
    "address": "No. 15, Jalan 4/149J, Bandar Baru Sri Petaling, 57000, Kuala Lumpur",
    "postcode": "57000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 735000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "285 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1yIGgVj1M42Gm1mbnLyO795SdrNVd1FNb&sz=w800"
    ]
  },
  {
    "id": "388",
    "title": "Terrace House Plot",
    "address": "Lot 150, Off Jalan Thamby Abdullah, 50470, Kuala Lumpur",
    "postcode": "50470",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 1000000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "873 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1TQUjHp81hqlTlBfybC2ii_zR2nXZtp_e&sz=w800"
    ]
  },
  {
    "id": "389",
    "title": "Apartment",
    "address": "Unit No. 7-9-4, Ixora Apartment, Jalan Tun Razak, 50400, Kuala Lumpur",
    "postcode": "50400",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 350000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "980 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1CnaL8FFNS5H1BXpCF5C2Ma7sFaE1JFrZ&sz=w800"
    ]
  },
  {
    "id": "390",
    "title": "Apartment",
    "address": "Unit No. 261-17-6, Casa Ria Apartment, Jalan Jejaka, Taman Maluri, 55100, Kuala Lumpur",
    "postcode": "55100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 420000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "119 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Ak1fJ201NPWWD0nUZV6jiR59IXo5kr5_&sz=w800"
    ]
  },
  {
    "id": "391",
    "title": "Apartment",
    "address": "Unit No. C-L22-05, Block C, Residensi Hijauan Bukit Jalil, Jalan Jalil Perwira 2, Bukit Jalil, 58200, Kuala Lumpur",
    "postcode": "58200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 480000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "001 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1iLPuYTF2-1BHLPG_oOg0uYeOfl5hsg_f&sz=w800"
    ]
  },
  {
    "id": "392",
    "title": "Condominium",
    "address": "Unit No. B-43A-05, Block B, Residensi Hipster, No. 262, Jalan Desa, Taman Desa, 58100, Kuala Lumpur",
    "postcode": "58100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 950000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "842 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1i23ilujJxdXuypMKnunEMrARJYRraqT6&sz=w800"
    ]
  },
  {
    "id": "393",
    "title": "Apartment",
    "address": "Unit No. A-40-11, Tower A, Residensi SkySierra, No.12, Jalan Taman Setiawangsa, Taman Setiawangsa, 54200, Kuala Lumpur",
    "postcode": "54200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 440000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "797 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1W297na719pgKhWpOe88JSMsP_uMNafu0&sz=w800",
      "https://drive.google.com/thumbnail?id=1h8KxpWQbeZlB88_LoV-Y1eyFHRsVX_K0&sz=w800",
      "https://drive.google.com/thumbnail?id=1K1B_9P1wTzaN19o7it-gG1i4lPGx9BSu&sz=w800"
    ]
  },
  {
    "id": "394",
    "title": "Service Apartment",
    "address": "Unit No. F-11-03, Residensi Lakeville, Jalan Sibu, Taman Wahyu, 68100, Kuala Lumpur",
    "postcode": "68100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 325200,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "980 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1nsZRhs60AIhfD194YJxFaqEw2z2qcYQ5&sz=w800"
    ]
  },
  {
    "id": "395",
    "title": "Office Unit",
    "address": "Unit No. 6-6-4, Tingkat 6, Blok 6, Queen's Avenue, Jalan Bayam, 55100, Kuala Lumpur",
    "postcode": "55100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 113400,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "334 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1w93x21bYd0nZW49SlU_j9-qai_dlwo2V&sz=w800"
    ]
  },
  {
    "id": "396",
    "title": "Condominium",
    "address": "Unit No. 5-17-1, The Corinthian, Jalan Binjai, 50450, Kuala Lumpur",
    "postcode": "50450",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 1500000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "862 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1PS_7xj6VaL1kjuWdUyURTL9bkKbHIT7X&sz=w800"
    ]
  },
  {
    "id": "397",
    "title": "Office Unit",
    "address": "Unit No. 22-11, Menara 1 Mont Kiara, Jalan Kiara, Mont Kiara, 50480, Kuala Lumpur",
    "postcode": "50480",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 770000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "098 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=16s9R6PEy-EALK5-D0fgCoGtU2t-k3LFl&sz=w800"
    ]
  },
  {
    "id": "398",
    "title": "3 Storey Villa Unit",
    "address": "No. 95, Montana Melawati, Jalan Desa Melawati, Desa Melawati, 53100, Kuala Lumpur",
    "postcode": "53100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 1539000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "163 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1wZ1ohGg5RsfDuO-jsdJsT4mbCj8oHQJm&sz=w800"
    ]
  },
  {
    "id": "399",
    "title": "Condominium",
    "address": "Unit No. 5-17-2, The Corinthian, Jalan Binjai, 50450, Kuala Lumpur",
    "postcode": "50450",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 1500000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "862 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1PS_7xj6VaL1kjuWdUyURTL9bkKbHIT7X&sz=w800"
    ]
  },
  {
    "id": "400",
    "title": "Service Apartment",
    "address": "Unit No. D2-43-06, Residensi Bandar Razak (Razak City Residences), No. 1, Jalan Razak Mansion Sungai Besi, 57100, Kuala Lumpur",
    "postcode": "57100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 307800,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "065 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1DyKY_D1YKNC_9IJjn5b1AvF_b0KFU8-1&sz=w800"
    ]
  },
  {
    "id": "401",
    "title": "Condominium",
    "address": "Unit No. A-16-02, SkyVogue Residences, No. 23, Jalan 1/109F, Taman Danau Desa, 58100, Kuala Lumpur",
    "postcode": "58100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 680000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1imtwDHb48WOSKUUYjYE7FN2FfiHUD6hx&sz=w800"
    ]
  },
  {
    "id": "402",
    "title": "Service Apartment",
    "address": "Unit No. C-23-02, Residensi Altris, Jalan Wangsa Kuarza, Wangsa Maju, 53300, Kuala Lumpur",
    "postcode": "53300",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 440000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1ypBY6Bb1E23DID4WDwChz18ctHbTpRqT&sz=w800"
    ]
  },
  {
    "id": "403",
    "title": "Service Apartment",
    "address": "Unit No. A-36-06, M Arisa Residences, Jalan Sentul Pasar, 51000, Kuala Lumpur",
    "postcode": "51000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 500000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1BQ0r6LuzTdeNJ9mHj-fuNgV_8LJUvMiT&sz=w800"
    ]
  },
  {
    "id": "404",
    "title": "2 Storey Terrace House",
    "address": "No. 31, Jalan Tokoh Dua 25/28B, Taman Sri Muda, Seksyen 25, 40400 Shah Alam, Selangor",
    "postcode": "40400",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 259200,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "840 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1tXpjjoQnhF6gGxXXqSlvUJ-28lWfMWgl&sz=w800"
    ]
  },
  {
    "id": "405",
    "title": "1 Storey Semi Detached House",
    "address": "No. 6, Jalan Satria 1, Taman Satria, 42500 Telok Panglima Garang, Selangor",
    "postcode": "42500",
    "state": "Selangor",
    "area": "Telok Panglima Garang",
    "reservePrice": 432000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "940 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1AMS_M0MJB9ZMLpx7vJJYfYG5JDaxbRnx&sz=w800"
    ]
  },
  {
    "id": "406",
    "title": "2 Storey Terrace House",
    "address": "Jalan Kebun Nenas 2G/KS7, Bandar Putera, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 342000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "173 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1gjAK2tW-c4hmhADJECuC7UYoeYWCTb-L&sz=w800"
    ]
  },
  {
    "id": "407",
    "title": "1 Storey Terrace House",
    "address": "No. 2, Jalan 1/9A, Seksyen 1, 43650 Bandar Baru Bangi, Selangor",
    "postcode": "43650",
    "state": "Selangor",
    "area": "Bandar Baru Bangi",
    "reservePrice": 580000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "543 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1YwYt-GaLdUyNg3MM6fk34umwpTQM1LBU&sz=w800"
    ]
  },
  {
    "id": "408",
    "title": "2 Storey Terrace House",
    "address": "Jalan Semilang 9, Taman Sri Putra, 42700 Banting, Selangor",
    "postcode": "42700",
    "state": "Selangor",
    "area": "Banting",
    "reservePrice": 330000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "410 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1OxPa4s2ySKly-c1IhD2k857DDF8TsK2k&sz=w800"
    ]
  },
  {
    "id": "409",
    "title": "1 Storey Terrace House",
    "address": "Jalan Semenyih Impian 19, Taman Semenyih Impian, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 300000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=161YNavEZ8ue_eZg6pI8SOrJcE5q6Abvf&sz=w800"
    ]
  },
  {
    "id": "410",
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
    "id": "411",
    "title": "2 Storey Terrace House",
    "address": "No. 15, Jalan Seri Mas 4, Taman Seri Mas, 43000 Hulu Langat, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Hulu Langat",
    "reservePrice": 540000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "199 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1pyHhhYrs9kwsnup0fcJ5YYBqaA5CG67A&sz=w800"
    ]
  },
  {
    "id": "412",
    "title": "1 Storey Terrace House",
    "address": "No. 21, Jalan 12/4A, Taman Cheras Jaya, 43200 Cheras, Selangor",
    "postcode": "43200",
    "state": "Selangor",
    "area": "Cheras",
    "reservePrice": 250000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "040 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1BQMY9edzjy6_zmjsHtyMHMEkmMy6BVbV&sz=w800"
    ]
  },
  {
    "id": "413",
    "title": "Duplex Condominium",
    "address": "Unit No. B-PH-11, Blok B, Casa Villa Condominium, Jalan Berjaya Baru, Taman Berjaya Baru, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 450000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "970 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13ef988tZstoLhK8LsDB7jZn05UV4RZC0&sz=w800"
    ]
  },
  {
    "id": "414",
    "title": "3 Storey Shop Office",
    "address": "No. 5, Jalan Tasik Raja Lumu L U4/L, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 956600,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "650 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1uCksB2OIILebZdUxV5eXPXdMUd2w4zuK&sz=w800"
    ]
  },
  {
    "id": "415",
    "title": "2 Storey Terrace House",
    "address": "No. 29, Jalan Sri Cendana, Taman Sri Raya, 43200 Cheras, Selangor",
    "postcode": "43200",
    "state": "Selangor",
    "area": "Cheras",
    "reservePrice": 286000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "882 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1rCAdWCEVNwFZN6BJdjpDiQF8br5632K4&sz=w800"
    ]
  },
  {
    "id": "416",
    "title": "2 Storey Terrace House",
    "address": "No. 56, Jalan 19, Taman Putra Ampang, 68000 Ampang, Selangor",
    "postcode": "68000",
    "state": "Selangor",
    "area": "Ampang",
    "reservePrice": 307800,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "700 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1cQEXJ0bZIWPESuF_fB8JkUyQkKv-mT9k&sz=w800"
    ]
  },
  {
    "id": "417",
    "title": "Condominium",
    "address": "Unit No. A-06-05, Blok A, Jalan Suria Residen, Residensi Sembilan Cheras, 43200 Cheras, Selangor",
    "postcode": "43200",
    "state": "Selangor",
    "area": "Cheras",
    "reservePrice": 432000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "119 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Yxyn3IrlYKNyS5e0y26jVGWAgBrbEZjU&sz=w800",
      "https://drive.google.com/thumbnail?id=16Kn0UKyx3QdC7gsbyG-vaKPUUuO-2bq9&sz=w800",
      "https://drive.google.com/thumbnail?id=16ofI6BN6W6gq63djtmclg_IPoKgGBhO-&sz=w800",
      "https://drive.google.com/thumbnail?id=1r_Qtq96HzoceRfNC0Td7KF0486AIg7ln&sz=w800",
      "https://drive.google.com/thumbnail?id=13FfGYcVLovuvRMGvV3Dr8cgiiRAnahQz&sz=w800"
    ]
  },
  {
    "id": "418",
    "title": "Flat",
    "address": "Unit No. CA-4-21, 4th Floor, Block CA, Jalan Watan 12, Bandar Baru Ampang, 68000 Ampang, Selangor",
    "postcode": "68000",
    "state": "Selangor",
    "area": "Ampang",
    "reservePrice": 90000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "516 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1EsKUW95YvNQelBPIUfxWfDcPYcRbN5EB&sz=w800"
    ]
  },
  {
    "id": "419",
    "title": "Condominium",
    "address": "Unit No. B-4-5, Kondominium Puncak Prima, Jalan Sri Hartamas 17, Taman Sri Hartamas, 50480, Kuala Lumpur",
    "postcode": "50480",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 522000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=18b7F6meA__OYjWuaCIZQd_5NUy7MSQe5&sz=w800"
    ]
  },
  {
    "id": "420",
    "title": "2.5 Storey Detached House",
    "address": "No. 28, Jalan Impian Gemilang 2/4, Saujana Impian, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 2500000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "850 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JSqeNHhfbxcnZxC059k8LIDQGXs5Ckm0&sz=w800",
      "https://drive.google.com/thumbnail?id=1DpnLcAdvljv0U_AtwgjGBmONWi3eBW1Q&sz=w800",
      "https://drive.google.com/thumbnail?id=1oMSDn1V8QLjO9LyVChixLgj3kZ9fiqaT&sz=w800",
      "https://drive.google.com/thumbnail?id=1RN_Pgp_q_PKlSDRdiCLmT3_qNegMFUP3&sz=w800",
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "421",
    "title": "2 Storey Terrace House",
    "address": "No. 21, Lorong Sentosa 6, Taman Bayu Tinggi, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 546750,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1H3rUkGi8SwU5Ec5ypID2FYI6HSVXvntA&sz=w800",
      "https://drive.google.com/thumbnail?id=1bxN-yd_U6FVIKYDWoQb2FV6RclovVybr&sz=w800",
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "422",
    "title": "2 Storey Terrace House",
    "address": "No. 26, Jalan Tropika 5, Taman Tropika, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 470000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "736 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=130laFZapI235ytNFT6iGkYGwSwLyJ_Qj&sz=w800"
    ]
  },
  {
    "id": "423",
    "title": "2 Storey Terrace House",
    "address": "No. 13, Jalan Anggerik 5A, Taman Puchong Perdana, 47150 Puchong, Selangor",
    "postcode": "47150",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 261000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "780 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13h9m1AmhjliJbCJmqEhuuIkEQVJI7QLl&sz=w800"
    ]
  },
  {
    "id": "424",
    "title": "2 Storey Terrace House",
    "address": "Premises No. 6, Jalan SI 2, Taman Semarang Indah, 43800 Dengkil, Selangor",
    "postcode": "43800",
    "state": "Selangor",
    "area": "Dengkil",
    "reservePrice": 580000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "346 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=19higXv0WNQXpXQfWBa9XbVN51800bQr6&sz=w800"
    ]
  },
  {
    "id": "425",
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
    "id": "426",
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
    "id": "427",
    "title": "1 Storey Terrace House",
    "address": "No. 20, Jalan Hamzah Alang 60, Taman Kapar Jaya, 42200 Kapar, Selangor",
    "postcode": "42200",
    "state": "Selangor",
    "area": "Kapar",
    "reservePrice": 270000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1E69lPtIZ_GifZ4y9oCv3OwVXqEX-xLzr&sz=w800"
    ]
  },
  {
    "id": "428",
    "title": "1.5 Storey Semi Detached House",
    "address": "No. 27, Jalan Desa Bestari 15, Taman Desa Bestari, 43900 Sepang, Selangor",
    "postcode": "43900",
    "state": "Selangor",
    "area": "Sepang",
    "reservePrice": 620000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "693 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Kq8yLw0yDQnkjFH162NDAHgTqXDNy7-X&sz=w800"
    ]
  },
  {
    "id": "429",
    "title": "3 Storey Linked House",
    "address": "No. 36, Jalan Bangi Avenue 7/7, Taman Bangi Avenue, Seksyen 7, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 1000000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "917 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1h4cKd5WfTpSeiaJJ8eI8_KRZr7sdFH73&sz=w800"
    ]
  },
  {
    "id": "430",
    "title": "3 Storey Semi Detached House",
    "address": "No. 3, Jalan Setia Damai U13/14J, Setia Alam, Seksyen U13, 40170 Shah Alam, Selangor",
    "postcode": "40170",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 2000000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "412 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1slWWDO7xAgSm30847tof26vBNb-B2yaB&sz=w800"
    ]
  },
  {
    "id": "431",
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
    "id": "432",
    "title": "Terrace House",
    "address": "No. 6, Lorong Samarinda 31B, Taman Mesra 3A, 41000 Klang, Selangor",
    "postcode": "41000",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 390000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1eNO-OYNLuC63ch3VhO99G1BgQQN4t4SS&sz=w800"
    ]
  },
  {
    "id": "433",
    "title": "2 Storey Terrace House",
    "address": "No. 32, Jalan Seri Pagi 8, Taman Saujana Utama, 47000 Sungai Buloh, Selangor",
    "postcode": "47000",
    "state": "Selangor",
    "area": "Sungai Buloh",
    "reservePrice": 350000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "087 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1dEHEOWD47j9EinyxtA7MoaSlh1JMv7cU&sz=w800"
    ]
  },
  {
    "id": "434",
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
      "https://drive.google.com/thumbnail?id=16Kn0UKyx3QdC7gsbyG-vaKPUUuO-2bq9&sz=w800",
      "https://drive.google.com/thumbnail?id=16ofI6BN6W6gq63djtmclg_IPoKgGBhO-&sz=w800",
      "https://drive.google.com/thumbnail?id=1r_Qtq96HzoceRfNC0Td7KF0486AIg7ln&sz=w800",
      "https://drive.google.com/thumbnail?id=13FfGYcVLovuvRMGvV3Dr8cgiiRAnahQz&sz=w800"
    ]
  },
  {
    "id": "435",
    "title": "1 Storey Terrace House",
    "address": "No. 55, Jalan Utama 36, Taman Jaya Utama, 42500 Telok Panglima Garang, Selangor",
    "postcode": "42500",
    "state": "Selangor",
    "area": "Telok Panglima Garang",
    "reservePrice": 280000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "200 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1eJrONcLoqDP6-aJV4igQ6_DaKmqqRwFK&sz=w800"
    ]
  },
  {
    "id": "436",
    "title": "1 Storey Terrace House",
    "address": "Jalan TPS 2/12A, Taman Pelangi Semenyih 2, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 320000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1_ITmeK9Ov3izLeAfYx_RiwW56_QxdLS9&sz=w800"
    ]
  },
  {
    "id": "437",
    "title": "Office",
    "address": "No. 21A, First Floor, Jalan Snuker 13/28, Tadisma Business Park, Section 13, 40100 Shah Alam, Selangor",
    "postcode": "40100",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 387000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "560 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1Ydaxq99sRiks7I_s6mvhGnHIPVcjNjXO&sz=w800"
    ]
  },
  {
    "id": "438",
    "title": "2 Storey Semi Detached House with Clubhouse Facilities",
    "address": "No. 5, Jalan Damar Bayu 3B, Glenmarie Cove, Off Jalan Teluk Gong, 42000 Pelabuhan Klang, Selangor",
    "postcode": "42000",
    "state": "Selangor",
    "area": "Pelabuhan Klang",
    "reservePrice": 657000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "959 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Qj1YGJw1GDvm3OdTVpnqUjiTGfCAEtbZ&sz=w800"
    ]
  },
  {
    "id": "439",
    "title": "Flat",
    "address": "Unit No. A3-4-17, Block A3, Rumah Pangsa Kampung Aman 1, Jalan SK 6/1, Taman Bukit Serdang, Seksyen 4&5, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 145000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "657 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1-aj6xoMLf9abcgwBd1mlhDhCvO1p9OSI&sz=w800"
    ]
  },
  {
    "id": "440",
    "title": "2 Storey Terrace House",
    "address": "No. 5, Jalan Baru 8, Taman Bukit Kajang Baru, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 300000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "990 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=12fRj7y7GTrnBMz_UqBe1tvRpdI6OWpVw&sz=w800"
    ]
  },
  {
    "id": "441",
    "title": "1 Storey Terrace House",
    "address": "No. 76, Jalan Tanjung Sepat 28/10, Taman Alam Megah, Seksyen 28, 40400 Shah Alam, Selangor",
    "postcode": "40400",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 360000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "200 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=14cR_mrXDLPFproq9EyKAiN3LY4fJDXlg&sz=w800"
    ]
  },
  {
    "id": "442",
    "title": "2 Storey Terrace House",
    "address": "No. 20, Jalan Mahir Satu 25/44A, Taman Sri Muda, Seksyen 25, 40400 Shah Alam, Selangor",
    "postcode": "40400",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 280000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "918 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1tXpjjoQnhF6gGxXXqSlvUJ-28lWfMWgl&sz=w800"
    ]
  },
  {
    "id": "443",
    "title": "Terrace House",
    "address": "No. 28, Jalan Gamelan 1E, Bandar Bukit Raja, 41050 Klang, Selangor",
    "postcode": "41050",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 400000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1FpNJwd1Em1IQjwP_SUXVKksNVD7Lb22M&sz=w800"
    ]
  },
  {
    "id": "444",
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
    "id": "445",
    "title": "2 Storey Terrace House",
    "address": "No. 21, Jalan MR 1/13, Taman M-Residensi, 48020 Rawang, Selangor",
    "postcode": "48020",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 298890,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "384 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Tk-KpFs1kKGp9pO9ENDye_fS-K3mDkUY&sz=w800",
      "https://drive.google.com/thumbnail?id=1QgLhBZEYgHY2QTOotkguXgSTp-F8bYLA&sz=w800",
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "446",
    "title": "2 Storey Terrace House",
    "address": "No. 37, Jalan Permai 4, Taman Sijangkang Permai, 42500 Telok Panglima Garang, Selangor",
    "postcode": "42500",
    "state": "Selangor",
    "area": "Telok Panglima Garang",
    "reservePrice": 360000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "692 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=14ZZrnzTonfnmABhBNZSmFYXWCJJ3GGoT&sz=w800"
    ]
  },
  {
    "id": "447",
    "title": "Apartment",
    "address": "Unit No. P2-A-11-09, Tingkat 11, Block P2A, Pangsapuri Sri Camelia, Jalan Sepakat Indah 3, Taman Sepakat Indah, Sungai Chua, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 279000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "227 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=12pmSRootCoQKJnNLafIv6TwO48KuR59p&sz=w800"
    ]
  },
  {
    "id": "448",
    "title": "Apartment",
    "address": "Ground Floor, Pangsapuri Delima, No. 17, Jalan Arca U8/80, Taman Bukit Jelutong, Seksyen U8, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 300000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "840 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1EfaH9Sr6YrGOcSzG_ZtFp6l7TV4ZmMT0&sz=w800"
    ]
  },
  {
    "id": "449",
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
    "id": "450",
    "title": "1 Storey Terrace House",
    "address": "No. 5, Lengkuk Sungai Keramat 8, Taman Klang Utama, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 400000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "650 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1841v5SvHhiF-ppB9bTYD51A_KhisykGs&sz=w800"
    ]
  },
  {
    "id": "451",
    "title": "Service Apartment",
    "address": "Unit No. B-19-09, Block B, Residensi Amara, Jalan Raintree Utama, Taman Raintree, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 224000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "850 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1PGPCvCNGL_SDWCXw7ciboiqABGaBzvsT&sz=w800"
    ]
  },
  {
    "id": "452",
    "title": "2 Storey Terrace House",
    "address": "No. 58, Lorong Dato Dagang 50B/KS7, Taman Sentosa, 41200, Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 720000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "242 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Gu0_g_yYCidwKXv8mCwVxgtgmAxWjR1e&sz=w800"
    ]
  },
  {
    "id": "453",
    "title": "Apartment",
    "address": "Unit No. DS4-7-P, Blok 4, Desa Satu Apartment, Off Lorong D 1/5, Desa Aman Puri Kepong, 52100, Kuala Lumpur",
    "postcode": "52100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 108000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "656 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1lVmsvphR9tLm1czjHGS50GQu34TWJGlV&sz=w800"
    ]
  },
  {
    "id": "454",
    "title": "Apartment",
    "address": "Block A, Damansara Sutera, Persiaran KIP Utama, Taman KIP, 52200, Kuala Lumpur",
    "postcode": "52200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 370000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "850 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1a16Xqf58fSjwVbCR9xtweYFWnXXsgQpl&sz=w800"
    ]
  },
  {
    "id": "455",
    "title": "1 Storey Terrace House",
    "address": "Lintang Sungai Keramat 7E, Taman Klang Utama, 42100 Klang, Selangor",
    "postcode": "42100",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 330000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "300 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1841v5SvHhiF-ppB9bTYD51A_KhisykGs&sz=w800"
    ]
  },
  {
    "id": "456",
    "title": "2 Storey Terrace House",
    "address": "No. 32, Lorong Pending 2A, Bandar Puteri, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 486000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "587 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1I5nasFaqK43b091QviHNjiPxEBLKGMws&sz=w800"
    ]
  },
  {
    "id": "457",
    "title": "2 Storey Semi Detached House",
    "address": "No. 12, Jalan SS 14/5D, 47500 Subang Jaya, Selangor",
    "postcode": "47500",
    "state": "Selangor",
    "area": "Subang Jaya",
    "reservePrice": 1600000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "711 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "458",
    "title": "2 Storey Semi Detached House",
    "address": "No. 28, Jalan MD 1, Taman Meranti Damai, 47120 Puchong, Selangor",
    "postcode": "47120",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 1134000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "650 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=12vnS5HKp-1d1dSkq8CxPe7w0YOxaf9nu&sz=w800"
    ]
  },
  {
    "id": "459",
    "title": "Apartment",
    "address": "Desa Idaman, Jalan Prima Utama 1, Taman Puchong Prima, 47150 Puchong, Selangor",
    "postcode": "47150",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 277020,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "033 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1SftiRfwbUu0Ug5RTO_BWhB-b9oSwqr3N&sz=w800"
    ]
  },
  {
    "id": "460",
    "title": "2 Storey Terrace Cluster House",
    "address": "Lorong Hulubalang 9/KS07, Taman Sentosa, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 307800,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Gu0_g_yYCidwKXv8mCwVxgtgmAxWjR1e&sz=w800"
    ]
  },
  {
    "id": "461",
    "title": "Apartment",
    "address": "Unit No. C-2-37, Pangsapuri Sri Bayu, Jalan Batu Unjur 9, Taman Bayu Perdana, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 138000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "657 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=11E1wTEEQs5mXblI-euHnVXG39lYwuY17&sz=w800"
    ]
  },
  {
    "id": "462",
    "title": "1 Storey Terrace House",
    "address": "No. 43, Jalan DD 3A/2, Taman Dato' Demang, Bandar Putra Permai, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 405000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1hbCdnslSGFvUaxaLtMDwx5PbYFSmpDOY&sz=w800"
    ]
  },
  {
    "id": "463",
    "title": "2 Storey Terrace House",
    "address": "No. 55, Jalan Buana U2/21, Taman TTDI Jaya, Section U2, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 432000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "076 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=14rulmxYXxFSgS3cx0YwjkHYyo2Bq9hR7&sz=w800"
    ]
  },
  {
    "id": "464",
    "title": "2 Storey Terrace House",
    "address": "No. 70, Jalan Kuda Kepang 10/KU5, Bandar Bukit Raja, 41050 Klang, Selangor",
    "postcode": "41050",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 675000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "842 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1FpNJwd1Em1IQjwP_SUXVKksNVD7Lb22M&sz=w800"
    ]
  },
  {
    "id": "465",
    "title": "2 Storey Terrace House",
    "address": "Jalan Hijau 11/7, Bandar Tasik Puteri, 48020 Rawang, Selangor",
    "postcode": "48020",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 324000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "173 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1KJj3W7lEpXO3gUJZcskbwLRF5j6ExoYc&sz=w800"
    ]
  },
  {
    "id": "466",
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
    "id": "467",
    "title": "2 Storey Terrace House",
    "address": "Jalan USJ 13/1A, 47630 Subang Jaya, Selangor",
    "postcode": "47630",
    "state": "Selangor",
    "area": "Subang Jaya",
    "reservePrice": 650000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1_P5cmRreg4iMF9_NXBxWKkefUPl-r3rc&sz=w800"
    ]
  },
  {
    "id": "468",
    "title": "2 Storey Semi Detached House",
    "address": "Jalan SS 5D/5, 47301 Petaling Jaya, Selangor",
    "postcode": "47301",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 2000000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "500 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1K5ChVAFdhVZ0pZIXQKmobxz_AI6iXocg&sz=w800"
    ]
  },
  {
    "id": "469",
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
    "id": "470",
    "title": "Apartment",
    "address": "Unit No. A-7-5, Jalan Tasik Biru 17, Laguna Biru, Taman Tasik Biru, 48050 Rawang, Selangor",
    "postcode": "48050",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 190000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "850 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Qu7Y8--u--bPlc7i1weT7KfLrX2XzLOT&sz=w800"
    ]
  },
  {
    "id": "471",
    "title": "Apartment",
    "address": "Unit No. K-5-09, Pangsapuri Kasuarina, Persiaran Kasuarina/KS6, Bandar Botanic, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 267000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "904 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Viw3ox_NvGN41HbD6GwGHkcvL_fbktnT&sz=w800"
    ]
  },
  {
    "id": "472",
    "title": "Apartment",
    "address": "Unit No. 2-1-11, Gugusan Cempaka, Jalan Cecawi PSB 6/19, 47810 Petaling Jaya, Selangor",
    "postcode": "47810",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 160000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "614 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1U7WibUAlW_xmPvbrh3_HC2h4f3Bpfs5a&sz=w800"
    ]
  },
  {
    "id": "473",
    "title": "Apartment",
    "address": "Unit No. PS-5-14, Pangsapuri Permai Seri, Jalan 13D, Taman Dato Ahmad Razali, 68000 Ampang, Selangor",
    "postcode": "68000",
    "state": "Selangor",
    "area": "Ampang",
    "reservePrice": 250000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "732 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1jTyoy7trLTRfwyBiKdmJ_Lzc74Lc72qP&sz=w800"
    ]
  },
  {
    "id": "474",
    "title": "Apartment",
    "address": "Unit No. A-01-09, (On-Site Block A), Megah Villa Apartment, Kota Warisan, 43900 Sepang, Selangor",
    "postcode": "43900",
    "state": "Selangor",
    "area": "Sepang",
    "reservePrice": 150000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "689 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1oC0d8zBT07ydKvw7xrMN0yG82SjQ-MFW&sz=w800"
    ]
  },
  {
    "id": "475",
    "title": "2 Storey Detached House",
    "address": "No. 11, Jalan Enggang, Dato Keramat Tambahan, 54200 Ampang, Selangor",
    "postcode": "54200",
    "state": "Selangor",
    "area": "Ampang",
    "reservePrice": 792000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "880 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=18D_MPE_6sV0owSGmEArmPSQPHOCMNvEG&sz=w800"
    ]
  },
  {
    "id": "476",
    "title": "2 Storey Terrace House",
    "address": "No. 38, Jalan SP 4/4, Bandar Saujana Putra, Lebuhraya Elite, 42610 Jenjarom, Selangor",
    "postcode": "42610",
    "state": "Selangor",
    "area": "Jenjarom",
    "reservePrice": 550000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "110 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1opmDn-3IHZRIO6kT7vQbTMgkBb6qnKHm&sz=w800"
    ]
  },
  {
    "id": "477",
    "title": "2 Storey Shop Office",
    "address": "No. 2, Jalan 2/9B, Bandar Rinching, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 699000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "466 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1QZw3CSaDSsOEyCBeYXhIoEdt7wpEMJKY&sz=w800",
      "https://drive.google.com/thumbnail?id=1nKY0G0GwFNISr11ujYIrNQJq35ktBM5T&sz=w800",
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "478",
    "title": "2 Storey Terrace House",
    "address": "No. 22A, Jalan Sutera 3/4, Taman Sutera, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 660000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1K6-v2UWKVjLNoFALpg1bW5TjIXHHS7eK&sz=w800"
    ]
  },
  {
    "id": "479",
    "title": "Apartment",
    "address": "Pangsapuri Golden Height, Jalan Pinggiran Mas 2, Taman Mas, 47130 Puchong, Selangor",
    "postcode": "47130",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 180000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "872 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "480",
    "title": "2 Storey Semi Detached House",
    "address": "No. 8, Jalan Seri Banyan 1, Taman Seri Banyan, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 1800000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "973 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "481",
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
    "id": "482",
    "title": "2 Storey Pre-war Shop House",
    "address": "No. 68, Jalan Tuanku Abdul Rahman, 50100, Kuala Lumpur",
    "postcode": "50100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 5400000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "070 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1ovP1wv1NGP5-Es_JVMgobI4WWbl0Mlnk&sz=w800"
    ]
  },
  {
    "id": "483",
    "title": "Condominium",
    "address": "Unit No. B-20-3, Blok B, Bayu Tasik 2 Condominium, Jalan Sri Permaisuri 5, Bandar Sri Permaisuri, 56000, Kuala Lumpur",
    "postcode": "56000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 320000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "958 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1nGlOB2SD13Q62tD0V6EPefjFpI-5FGNq&sz=w800"
    ]
  },
  {
    "id": "484",
    "title": "Condominium",
    "address": "Unit No. 7-5, Residensi Mutiara Condominium, No. 69, Jalan Thamby Abdullah, Brickfields, 50470, Kuala Lumpur",
    "postcode": "50470",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 930000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "432 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=135fqF5KK7jHD0mbiB4qyUT6wD9FsDsiy&sz=w800"
    ]
  },
  {
    "id": "485",
    "title": "Apartment",
    "address": "Unit No. B-11-09, Blok B, Sri Penara, Jalan Sri Permaisuri 1, Bandar Sri Permaisuri, 56000, Kuala Lumpur",
    "postcode": "56000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 250000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "646 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1VhqXFFZCPA_mMxqJhDfLdNRRDway0I7T&sz=w800"
    ]
  },
  {
    "id": "486",
    "title": "Apartment",
    "address": "Unit No. 7-11-6, Abadi Indah Kondo, Jalan 3/109C, Taman Abadi Indah, 58100, Kuala Lumpur",
    "postcode": "58100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 230000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "807 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1SSB6FFLYqvPpZajVmsWMQ9XsiuyFDMJL&sz=w800",
      "https://drive.google.com/thumbnail?id=1HhKWhY9QUGZYy8PGXOWA4VAslTdMMR-S&sz=w800",
      "https://drive.google.com/thumbnail?id=1VPJ7jXjU3rByNUnh_I_aTcI7UoTeTaOb&sz=w800"
    ]
  },
  {
    "id": "487",
    "title": "Shop Unit",
    "address": "Unit No. 2-22, Aras 2, Kompleks Kenanga Wholesale City, Jalan Gelugor, 55200, Kuala Lumpur",
    "postcode": "55200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 830000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "549 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1T2SCZKShk9Y4PCPQ_vpC_OTnoxPmDNOX&sz=w800",
      "https://drive.google.com/thumbnail?id=1NfE4fqlSgxhb37KvUrnkV9ZWkKMExZ0W&sz=w800",
      "https://drive.google.com/thumbnail?id=1u_vUr0FXQEBPBs7b0ieWkiEhSuwmY0t-&sz=w800"
    ]
  },
  {
    "id": "488",
    "title": "Condominium",
    "address": "Unit No. B-03A-01, Residensi KM1 (West) Blok B, Jalan Jalil Perkasa 1, 57000, Bukit Jalil, Kuala Lumpur",
    "postcode": "57000",
    "state": "Kuala Lumpur",
    "area": "Bukit Jalil",
    "reservePrice": 697000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "507 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HjwrC0SVCowCvxkcj41Lh1CXrYOAoUvI&sz=w800",
      "https://drive.google.com/thumbnail?id=1Z4UXBOn5kv26_T9eFcdk5FNPuzYpPOKh&sz=w800",
      "https://drive.google.com/thumbnail?id=1pHk9mVtzozzRaTsQnHHCNWoZ4QJWdChW&sz=w800",
      "https://drive.google.com/thumbnail?id=1tUhWXhmRoucKy07lRRBy-nsWS1O9iKVY&sz=w800"
    ]
  },
  {
    "id": "489",
    "title": "Retail Lot",
    "address": "First Floor, Sungei Wang Plaza, Jalan Bukit Bintang, 55100, Kuala Lumpur",
    "postcode": "55100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 1300000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1bloJO_NLEZOgEH5hvG7dsxAuS7qu8zju&sz=w800"
    ]
  },
  {
    "id": "490",
    "title": "2 Storey Terrace House",
    "address": "No. 54, Jalan 10/27B, Taman Desa Setapak, 53300, Kuala Lumpur",
    "postcode": "53300",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 405000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "854 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1W4yApmHEGXf-hk0rgNmincnJ4mrTIMVW&sz=w800"
    ]
  },
  {
    "id": "491",
    "title": "Service Apartment",
    "address": "Unit No. 11-03, Pertama Residensi, Jalan 3/92B, Taman Kobena, 56100, Kuala Lumpur",
    "postcode": "56100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 308000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "603 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1vgZh3Z88_GmhiM9gnxxzEwhYfQXXjAyf&sz=w800"
    ]
  },
  {
    "id": "492",
    "title": "Condominium",
    "address": "Unit No. A-36-03, The Pearl@KLCC, Jalan Stonor, 50450, Kuala Lumpur",
    "postcode": "50450",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 1539000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "109 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "493",
    "title": "Condominium",
    "address": "Unit No. A1-3A-05, Block A1, Royal Domain Sri Putramas II, No. 1, Jalan Putramas, Off Jalan Kuching, 51200, Kuala Lumpur",
    "postcode": "51200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 500000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "173 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1ZWhG2xyQrIwzTutQFkBr9t8dj4yrfxsA&sz=w800"
    ]
  },
  {
    "id": "494",
    "title": "Condominium",
    "address": "Unit No. C-11-01, Aras 11, Block C, Changkat View Condominium, No. 18, Jalan Dutamas Raya, 51200, Kuala Lumpur",
    "postcode": "51200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 295650,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "098 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1VhpnBUsyhSnxAj9mSXO8kcsl5vCN06wV&sz=w800",
      "https://drive.google.com/thumbnail?id=12kaJdax-pzuP9KJbDXsyVu80pU6fiYZB&sz=w800",
      "https://drive.google.com/thumbnail?id=1-Cza5u1ZFG0JXHR_yODX00dHAJFR1j-J&sz=w800"
    ]
  },
  {
    "id": "495",
    "title": "2 Storey Terrace House with Extra Land",
    "address": "No. 83, Jalan Terasek 7, Bangsar Baru, 59100, Kuala Lumpur",
    "postcode": "59100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 2340000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "300 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "496",
    "title": "Apartment",
    "address": "Unit No. A-3-1, Block A, Cemerlang Court, Jalan TC 1/3, Taman Cemerlang, 53100, Kuala Lumpur",
    "postcode": "53100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 162000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "656 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "497",
    "title": "1 Storey Terrace House",
    "address": "Jalan Meranti Putih 18A/KU10, Taman Desa Permai, 41050 Klang, Selangor",
    "postcode": "41050",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 307800,
    "auctionDate": "7 Aug 2026 (Fri)",
    "landArea": "—",
    "builtUp": "900 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1L6GGAjCkxblNoywZtGcgSDyjb62UWotM&sz=w800"
    ]
  },
  {
    "id": "498",
    "title": "2 Storey Terrace House",
    "address": "No. 8, Jalan Zamrud, Taman Gembira, 41100 Klang, Selangor",
    "postcode": "41100",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 480000,
    "auctionDate": "7 Aug 2026 (Fri)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1mVFB6sKF7x1iduZ30pNQTY9jC0G8qR4U&sz=w800"
    ]
  },
  {
    "id": "499",
    "title": "1 Storey Terrace House",
    "address": "No. 3, Lorong Sungai Puloh 8A, Taman Cempakasari, Batu 4, Jalan Kapar, 42100 Klang, Selangor",
    "postcode": "42100",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 243000,
    "auctionDate": "7 Aug 2026 (Fri)",
    "landArea": "—",
    "builtUp": "880 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=17VbmgKRLmPvH-c4Oo_O8ntV0sFome_P8&sz=w800"
    ]
  },
  {
    "id": "500",
    "title": "1 Storey Terrace House",
    "address": "No. 41, Jalan Rambutan, Off Jalan Dato Dollah, Telok Gadong, 41100 Klang, Selangor",
    "postcode": "41100",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 291600,
    "auctionDate": "7 Aug 2026 (Fri)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "501",
    "title": "Apartment",
    "address": "Unit No. P1-2-02, Off Jalan Wan Siew, Taman Sepakat Indah, Sungai Chua, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 98820,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "710 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1yy_87PnfNnB3D0pS0y1DlTM409FxPmxM&sz=w800"
    ]
  },
  {
    "id": "502",
    "title": "2 Storey Terrace House",
    "address": "No. 52, Jalan Setia Villa 5, Setia Eco Glades (Liu Li Gardens) , Cyber 1, 63200 Cyberjaya, Selangor",
    "postcode": "63200",
    "state": "Selangor",
    "area": "Cyberjaya",
    "reservePrice": 948000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "868 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=18yKDJA3wzJvGc3csMg3pNSIQUrtUi9yV&sz=w800"
    ]
  },
  {
    "id": "503",
    "title": "3 Storey Semi Detached House",
    "address": "No. 16, Jalan Bait U8/1B, Bukit Jelutong, Seksyen U8, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 1450000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "740 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d4TqkhQT0jqIdTsrgFBl_Y2r2rj6zRel&sz=w800",
      "https://drive.google.com/thumbnail?id=1M12_PhPVEVoHF0ZhDitMIFF5KNMh75CQ&sz=w800",
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "504",
    "title": "Condominium",
    "address": "Unit No. A2-07-02, Residensi Hijauan, No. 4, Jalan Budiman 22/3, Seksyen 22, 40300 Shah Alam, Selangor",
    "postcode": "40300",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 308700,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "915 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1K38tptOTVIA9Qhmmu2U9cPhSu1NKXjW1&sz=w800"
    ]
  },
  {
    "id": "505",
    "title": "Cluster Town House",
    "address": "Jalan D'Alpinia 6, Taman D'Alpinia, 47110 Puchong, Selangor",
    "postcode": "47110",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 567000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "851 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1QmQfM4XchdN1zdF2ze3icfXNbrrjan1h&sz=w800"
    ]
  },
  {
    "id": "506",
    "title": "1 Storey Terrace House",
    "address": "Lorong Murni 2, Taman Murni, Sungai Terap, 45500 Tanjung Karang, Selangor",
    "postcode": "45500",
    "state": "Selangor",
    "area": "Tanjung Karang",
    "reservePrice": 162000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "880 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1991veth9Dz1vWjz12x4KiDjNqLinW3lC&sz=w800"
    ]
  },
  {
    "id": "507",
    "title": "Apartment",
    "address": "Unit No. 5-11, Megaria Ros, Jalan Bs 7, Taman Bukit Serdang, Seksyen 8, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 112500,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "743 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1tn2F5zrvqu0EZtdKCOANjogFTJB3f6T_&sz=w800"
    ]
  },
  {
    "id": "508",
    "title": "2 Storey Terrace House",
    "address": "No. 2, Jalan Seri Emas 2, Taman Seri Emas, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 585000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "217 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1QK-t9DWAz9gfQ_s3mbyIraPlaMHaDGY-&sz=w800"
    ]
  },
  {
    "id": "509",
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
    "id": "510",
    "title": "2 Storey Terrace House",
    "address": "No. 24, Jalan Bayu Malawati 2, Taman Bayu Malawati, 45000 Kuala Selangor, Selangor",
    "postcode": "45000",
    "state": "Selangor",
    "area": "Kuala Selangor",
    "reservePrice": 450000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1zmIPUgFn8MO1h-g-ZBsmobWJI51U3D-a&sz=w800"
    ]
  },
  {
    "id": "511",
    "title": "Apartment",
    "address": "Unit No. A-09-03A, Pangsapuri Suria Permai, Persiaran Permai Sentosa, Pusat Bandar Putra Permai, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 240000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "969 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Blgci55BjFONF88MqGEhQGlrYlexibAL&sz=w800"
    ]
  },
  {
    "id": "512",
    "title": "2 Storey Terrace House",
    "address": "No. 172, Jalan Permai, Taman Sri Gombak, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 400000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "120 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1KuK6wiSG1DsPkXTBdRoBSwFePsFQS0Fc&sz=w800"
    ]
  },
  {
    "id": "513",
    "title": "2 Storey Semi Detached House",
    "address": "No. 2, Jalan Akuatik 13/67A, D'kayangan, Seksyen 13, 40100 Shah Alam, Selangor",
    "postcode": "40100",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 1680000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "768 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=106vlM-eqBtTwhcaO6Ii01OFCkVdyYy98&sz=w800"
    ]
  },
  {
    "id": "514",
    "title": "2 Storey Terrace House",
    "address": "No. 18, Jalan Nova U5/88, Subang Bestari, Seksyen U5, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 680000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "950 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1iY6fkOF8OnEQQcFsNJ3ZhZluq4DO5zlH&sz=w800"
    ]
  },
  {
    "id": "515",
    "title": "Condominium",
    "address": "Unit No. A-20-03, Cova Suite, Jalan Teknologi, PJU 5, Kota Damansara, 47810 Petaling Jaya, Selangor",
    "postcode": "47810",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 440000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1BFa6VFvpcrbyiCe7opVqBdlxTf1NpP-n&sz=w800"
    ]
  },
  {
    "id": "516",
    "title": "2 Storey Terrace House",
    "address": "No. 16, Lorong Bukit Badak 17, Taman Mujur, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 384000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "636 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Nv1yU0bHBJLGNaPRfQ5nCq_GuPnYW8hK&sz=w800"
    ]
  },
  {
    "id": "517",
    "title": "2 Storey Terrace House",
    "address": "No. 41, Jalan Dagang 6/1, Taman Dagang, 68000 Ampang, Selangor",
    "postcode": "68000",
    "state": "Selangor",
    "area": "Ampang",
    "reservePrice": 850000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1a-lXxlUBShZjehARSifzQdo1XZnad46y&sz=w800"
    ]
  },
  {
    "id": "518",
    "title": "2 Storey Terrace House",
    "address": "No. 22, Jalan BSE 4/25, Bandar Seri Ehsan, 42700 Banting, Selangor",
    "postcode": "42700",
    "state": "Selangor",
    "area": "Banting",
    "reservePrice": 218700,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1wlHXySNh0joufOPhEOaJWeRW1WOq8V0H&sz=w800"
    ]
  },
  {
    "id": "519",
    "title": "Apartment",
    "address": "Unit No. 11-04-16, Blok 11, Pinang Apartment (Fasa 1A Sri Sentosa), Jalan Seri Sentosa 9, Taman Seri Sentosa, 58200, Kuala Lumpur",
    "postcode": "58200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 207000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "936 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1td3vCjUufooofPngA9Ldyfhl1m6tSqcQ&sz=w800"
    ]
  },
  {
    "id": "520",
    "title": "2 Storey Detached House",
    "address": "No. 34, Jalan Permai, Robson Heights, 50460, Kuala Lumpur",
    "postcode": "50460",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 2880000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "524 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1ehXhv_Ep4-ybG6-tipOT0nwOxCd_8EJZ&sz=w800"
    ]
  },
  {
    "id": "521",
    "title": "Condominium",
    "address": "Unit No. C-1-9, Blok C, Bayu Tasik Condominium, Jalan Sri Permaisuri 5, Bandar Sri Permaisuri, 56000, Kuala Lumpur",
    "postcode": "56000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 315000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "904 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1nGlOB2SD13Q62tD0V6EPefjFpI-5FGNq&sz=w800"
    ]
  },
  {
    "id": "522",
    "title": "Apartment",
    "address": "Unit No. 35-05, Anggun Residences, No. 8, Jalan Medan Tuanku Utama, 50300, Kuala Lumpur",
    "postcode": "50300",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 1600000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "518 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1vlt3umfimPg3DLT62lzxDJRuNHIaeG9A&sz=w800"
    ]
  },
  {
    "id": "523",
    "title": "Apartment",
    "address": "Unit No. 5-1-6, Hijau Ria Apartment, Jalan 1/1A, Taman Kepong Indah, 52100 Kepong, Kuala Lumpur",
    "postcode": "52100",
    "state": "Kuala Lumpur",
    "area": "Kepong",
    "reservePrice": 230000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "850 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1-U3M75vP788wyrUCo6eMSKbDFAf7ZPzl&sz=w800"
    ]
  },
  {
    "id": "524",
    "title": "Service Apartment",
    "address": "Unit No. 08-06, Vue Residences, No. 102, Jalan Pahang, 53300, Kuala Lumpur",
    "postcode": "53300",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 567000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "001 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "525",
    "title": "Land",
    "address": "Lot No 240, Seksyen 63, Bandar Kuala Lumpur, 50450, Kuala Lumpur",
    "postcode": "50450",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 76950,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "327 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "526",
    "title": "2 Storey Terrace House",
    "address": "Jalan Bayu 1, Taman Desa Sri Bayu, 48000 Rawang, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 364500,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "680 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1r_zNXyiTtRb3Ai3T_TuAXp_2JgaD0DyJ&sz=w800"
    ]
  },
  {
    "id": "527",
    "title": "2.5 Storey Terrace House",
    "address": "No. 18, Jalan USJ Heights 3/2G, USJ Heights, 47650 UEP Subang Jaya, Selangor",
    "postcode": "47650",
    "state": "Selangor",
    "area": "UEP Subang Jaya",
    "reservePrice": 1053000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "916 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1wi63SDTHuv-1zeHFRTybRzTZRJmI4Ukr&sz=w800",
      "https://drive.google.com/thumbnail?id=1l8X7CYJs0hZkVK9pdiv_D8aQPo7dCIHj&sz=w800",
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "528",
    "title": "Condominium",
    "address": "Unit No. B12-6, Block B, Menara Sri Damansara, Jalan Margosa SD 10/1E, Bandar Sri Damansara, 52200 Petaling Jaya, Selangor",
    "postcode": "52200",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 360000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "044 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1df2G0a9MVAjRcfSNwaiyJokU0A1R6Itm&sz=w800"
    ]
  },
  {
    "id": "529",
    "title": "2 Storey Bungalow House",
    "address": "Lot 149, Jalan Timah, The Mines Resort City, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 5400000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "126 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1XaEfFrOgJbf0rM3BcZ87PiaWmwamzGuN&sz=w800"
    ]
  },
  {
    "id": "530",
    "title": "2 Storey Terrace House",
    "address": "No. 3, Jalan Bentara 18/5, Seksyen 5, Bandar Mahkota Cheras, 43200 Cheras, Selangor",
    "postcode": "43200",
    "state": "Selangor",
    "area": "Cheras",
    "reservePrice": 630000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "765 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HA7ob6kncprEsR3NMwNadmsece9q4psj&sz=w800"
    ]
  },
  {
    "id": "531",
    "title": "Residential Land",
    "address": "Solok Tamarind, Taman Selatan, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 750000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "594 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "532",
    "title": "3 Storey Semi Detached House",
    "address": "No. 12, Jalan Selasih U12/29, Cahaya Alam, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 1204000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "197 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1PBpuJnNw80IzoaqTQhrDlGwpyHkTDbLF&sz=w800"
    ]
  },
  {
    "id": "533",
    "title": "Apartment",
    "address": "Unit No. E-8-6, Blok E, Pangsapuri Putra, Jalan Putra Impian, Taman Putra Impian, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 250000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "850 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1erJLMeVMYa31tAbA8zavj5xdW1WJ4wzw&sz=w800"
    ]
  },
  {
    "id": "534",
    "title": "2 Storey Terrace House",
    "address": "No. 6, Jalan DM 2/1, Taman Desa Mas, 48000 Rawang, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 307800,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "300 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1FNxh2riou_DkZ79W_r1JKkMVV3KWKS10&sz=w800"
    ]
  },
  {
    "id": "535",
    "title": "Apartment",
    "address": "Unit No. E-2-7, 2nd Floor, Block E, Perdana Villa Apartment, Jalan Temenggung 19, Off Jalan Sungai Jati, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 132930,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "130 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1lizuSl2EGcHox9rZSrb_1KXQxboe6ddG&sz=w800"
    ]
  },
  {
    "id": "536",
    "title": "2 Storey Semi Detached House",
    "address": "No. 1, Jalan DB2, Taman Desiran Bayu, 47120 Puchong, Selangor",
    "postcode": "47120",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 538002,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "856 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1PzJ0mhjdcJKtjNjFFf1GbVJSGDEjDZfX&sz=w800"
    ]
  },
  {
    "id": "537",
    "title": "Impian Flat",
    "address": "Unit No. 14-3-08, Block 14, Rumah Pangsa Impian, Jalan SP 4/3, Bandar Saujana Putra, 42610 Jenjarom, Selangor",
    "postcode": "42610",
    "state": "Selangor",
    "area": "Jenjarom",
    "reservePrice": 89000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "635 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=12_MP-Pn_IMcf-dlErYzZmkxpAXFnf1Sb&sz=w800"
    ]
  },
  {
    "id": "538",
    "title": "2 Storey Terrace House",
    "address": "No. 117, Jalan SG 9/8, Taman Sri Gombak, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 387000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "770 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1KuK6wiSG1DsPkXTBdRoBSwFePsFQS0Fc&sz=w800"
    ]
  },
  {
    "id": "539",
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
    "id": "540",
    "title": "2 Storey Terrace House",
    "address": "No. 34, Jalan 19/7 (On Site Jalan Sangkar 19/7), Seksyen 19, 40300 Shah Alam, Selangor",
    "postcode": "40300",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 279000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "588 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1cQM2G-sXu8f_ox4INnklk2ZLqpj42OAL&sz=w800"
    ]
  },
  {
    "id": "541",
    "title": "Office Unit",
    "address": "2nd Floor, Block 4801, CBD Perdana, Cyber 12, 63000 Cyberjaya, Selangor",
    "postcode": "63000",
    "state": "Selangor",
    "area": "Cyberjaya",
    "reservePrice": 405000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "884 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1-qYkYPtZWjwfBmK1gn5VpvX-FSu_TZ0F&sz=w800"
    ]
  },
  {
    "id": "542",
    "title": "2 Storey Terrace House",
    "address": "Jalan Az-Zaharah 10/1, Seksyen 10, 42300 Bandar Puncak Alam, Selangor",
    "postcode": "42300",
    "state": "Selangor",
    "area": "Bandar Puncak Alam",
    "reservePrice": 380000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "080 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1-1CQkP7DMQGek8XB66sE4nIiIcQikRou&sz=w800"
    ]
  },
  {
    "id": "543",
    "title": "Apartment",
    "address": "Unit No. A-12-08, Pangsapuri Suria Permai, Persiaran Permai Sentosa, Pusat Bandar Putra Permai, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 226800,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "840 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Blgci55BjFONF88MqGEhQGlrYlexibAL&sz=w800"
    ]
  },
  {
    "id": "544",
    "title": "Apartment",
    "address": "Unit No. AF-01-09, Subang Perdana Court 10, Persiaran Mulia, Jalan USJ 15, 47630 UEP Subang Jaya, Selangor",
    "postcode": "47630",
    "state": "Selangor",
    "area": "UEP Subang Jaya",
    "reservePrice": 340000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "969 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "545",
    "title": "2 Storey Terrace House",
    "address": "No. 50, Jalan BP 10/9, Bandar Bukit Puchong 2, 47120 Puchong, Selangor",
    "postcode": "47120",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 820000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "674 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "546",
    "title": "Condominium",
    "address": "Unit No. 11-08-05, Sri Desa Condominium, Blok 11, Jalan 1/116B, 58200, Kuala Lumpur",
    "postcode": "58200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 214000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "109 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1cZijmdsGAcgSPX8I9DbBKgbnJC8S7Apj&sz=w800"
    ]
  },
  {
    "id": "547",
    "title": "2 Storey Terrace House",
    "address": "No. 8, Jalan Belangkas, Kampung Pandan, 55100, Kuala Lumpur",
    "postcode": "55100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 715000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "711 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1iM7QGaHHTFhLIHBE84NVitLE9cXtr3yH&sz=w800"
    ]
  },
  {
    "id": "548",
    "title": "Condominium",
    "address": "Unit No. A-7-3, Block A, Endah Regal Condominium, Jalan 3/149E, Taman Sri Endah, 57000, Kuala Lumpur",
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
    "id": "549",
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
    "id": "550",
    "title": "Condominium",
    "address": "Unit No. A-23-06, Block A, Suasana Sentral Condominium, Jalan Stesen Sentral 5, 50470, Kuala Lumpur",
    "postcode": "50470",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 900000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "421 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=16pR2lHGDYSrX4r9oxaXt4Mvm7Vl8C1oJ&sz=w800"
    ]
  },
  {
    "id": "551",
    "title": "Apartment",
    "address": "Unit No. 10C, Crescent Court, Lengkok Tun Sambanthan, Brickfields, 50470, Kuala Lumpur",
    "postcode": "50470",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 585000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "560 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1rVzddYXcbvcHhUg8r4zzn6YpF9YaSNBy&sz=w800"
    ]
  },
  {
    "id": "552",
    "title": "Apartment",
    "address": "Jalan Matang 2, Taman Sri Kuching, Off Jalan Kuching, 51200 Kuala Lumpur",
    "postcode": "51200",
    "state": "Kuala Lumpur",
    "area": "Off Jalan Kuching",
    "reservePrice": 185000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "743 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1s7dm2sF7oTsS6e5TGnDRHCboym0FRkUv&sz=w800"
    ]
  },
  {
    "id": "553",
    "title": "Apartment",
    "address": "Unit No. 06-15, Residensi Selingsing, Jalan Selingsing, Taman City, 51200, Kuala Lumpur",
    "postcode": "51200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 520000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "861 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1TYfqcmuJ9widCO8QnSeUvNj1q6rG_iHI&sz=w800"
    ]
  },
  {
    "id": "554",
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
    "id": "555",
    "title": "Service Apartment",
    "address": "Unit No. A-35-3, Residensi 1 Utara, No. 42, Jalan 1/2b Off Jalan Ipoh, Selayang, 68100, Kuala Lumpur",
    "postcode": "68100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 421200,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "130 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1AGzNcIQw7ceGnsJqIL-1fTmiw4y-6S57&sz=w800",
      "https://drive.google.com/thumbnail?id=1o_gzSlMtTKNxDdJte_-T__arq5wrkgQZ&sz=w800",
      "https://drive.google.com/thumbnail?id=1v_Obw3PGTiksICih8kpwy20jtMAwsTZv&sz=w800",
      "https://drive.google.com/thumbnail?id=17YztfKWxnQuYgU7oIiZnSV1g8QurYVbW&sz=w800"
    ]
  },
  {
    "id": "556",
    "title": "Retail Lot",
    "address": "Unit No. 1-041, Endah Parade, No. 1, Jalan 1/149E, Taman Sri Endah, 57000, Kuala Lumpur",
    "postcode": "57000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 65000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "344 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1XSMLdQiXH4Vd_oNT-HI5EddWxzsQJu_V&sz=w800"
    ]
  },
  {
    "id": "557",
    "title": "Apartment",
    "address": "Unit No. A-18-15, Block A, Pangsapuri Kinrara Mas, Jalan Mas 1, Kinrara Mas, Bukit Jalil, 58200, Kuala Lumpur",
    "postcode": "58200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 350000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "098 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1K_KR75R-48GLD-OhFovjBCGlf0BjK6gm&sz=w800"
    ]
  },
  {
    "id": "558",
    "title": "2 Storey Semi Detached House",
    "address": "Jalan Alam Suria 16/70, Seksyen 16, 42300 Bandar Puncak Alam, Selangor",
    "postcode": "42300",
    "state": "Selangor",
    "area": "Bandar Puncak Alam",
    "reservePrice": 445500,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "556 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1NiI99xZcJIF5sModT8zW9C1h383nxvVP&sz=w800"
    ]
  },
  {
    "id": "559",
    "title": "1 Storey Terrace House",
    "address": "No. 35, Jalan 3, Taman Sri Merbau I & II, 43950 Sungai Pelek, Selangor",
    "postcode": "43950",
    "state": "Selangor",
    "area": "Sungai Pelek",
    "reservePrice": 137700,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "560",
    "title": "2 Storey Terrace House",
    "address": "No. 104, Lorong Gelang 7/KS07, Bandar Puteri, 41200 Klang, Selangor",
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
    "id": "561",
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
    "id": "562",
    "title": "2 Storey Terrace House",
    "address": "No. 1, Jalan SU 33, Taman Selayang Utama, 68000 Batu Caves, Selangor",
    "postcode": "68000",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 1080000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "900 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=14OM3WcBtuquV2_He13bxcyt5JLzLvLnO&sz=w800"
    ]
  },
  {
    "id": "563",
    "title": "1 Storey Terrace House",
    "address": "Unit No. 11A, Jalan Peria Tiga 24/14C, Seksyen 24, 40300 Shah Alam, Selangor",
    "postcode": "40300",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 350000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "184 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1PxuFNWqHN07ke-pBSin7D6DHFW9GXT01&sz=w800"
    ]
  },
  {
    "id": "564",
    "title": "Condominium",
    "address": "Unit No. C301, Sunway Sutera Condominium, No. 2, Jalan Tropicana Utara, PJU 3, 47810 Sunway Damansara, Petaling Jaya, Selangor",
    "postcode": "47810",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 350000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "786 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "565",
    "title": "2 Storey Terrace House",
    "address": "No. 25 (Developer Lot No. 230), Jalan M Senyumia 1/5, Taman M Senyumia, Bandar Baru Salak Tinggi, 43900, Sepang, Selangor",
    "postcode": "43900",
    "state": "Selangor",
    "area": "Sepang",
    "reservePrice": 510000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "361 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "566",
    "title": "Apartment",
    "address": "Unit No. M1-4-10, Pangsapuri Merak, Jalan Uranus U5/125, Seksyen U5, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 148100,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "861 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1j1BY65ImYR3YNHlzfdJQC_ZfCjpXjB8Y&sz=w800"
    ]
  },
  {
    "id": "567",
    "title": "Condominium",
    "address": "Unit No. C-07-02, Casa Desa Condominium, No. 1, Jalan Desa Utama, Taman Desa, 58100, Kuala Lumpur",
    "postcode": "58100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 364500,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1exu0WaOjXlvjn_WieMd-OzqUSAur6xmY&sz=w800"
    ]
  },
  {
    "id": "568",
    "title": "Condominium",
    "address": "Unit No. 19-2-3, Royal Tower, Mont Kiara Palma, Jalan Kiara, Mont Kiara, 50480, Kuala Lumpur",
    "postcode": "50480",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 774000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "389 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1e8SrPv5Fkr1AFfCe7MWq3mA4_Gp5T7GR&sz=w800"
    ]
  },
  {
    "id": "569",
    "title": "Condominium",
    "address": "Unit No. 10-09-03A, Block 10, Petaling Indah Condominium, Jalan 1C/149, Petaling Indah, Off Jalan Sungai Besi, 57100, Kuala Lumpur",
    "postcode": "57100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 159570,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "893 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=10UXGD4OYsvGatLGIjUcf3PRz_4ajjFRp&sz=w800",
      "https://drive.google.com/thumbnail?id=15phs_dKlTJCnz2cQfLr2ongUgjK9jEnH&sz=w800"
    ]
  },
  {
    "id": "570",
    "title": "Condominium",
    "address": "Unit No. C-27-08, Block C, Angkasa Condominium, Jalan Puncak Gading, Taman Seri Cendekia, 56000, Kuala Lumpur",
    "postcode": "56000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 306000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "925 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1D6AzHbcJG3BL-Aotq0p3Dsny-RQPPRk7&sz=w800"
    ]
  },
  {
    "id": "571",
    "title": "2 Storey Terrace House",
    "address": "No. 17, Jalan Damai Impian 5, Taman Damai Impian, Cheras, 56000, Kuala Lumpur",
    "postcode": "56000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 520000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1O24Y9eOwRwQwDfd9xUCEqbZNWigMNtyc&sz=w800"
    ]
  },
  {
    "id": "572",
    "title": "Apartment",
    "address": "Unit No. N-B-9, Dahlia Apartment, Jalan Pandan Indah 25, Pandan Indah, 55100, Kuala Lumpur",
    "postcode": "55100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 240000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "786 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1sDxH7hLB-L12c2qj5slKqCV9Nst0sizE&sz=w800"
    ]
  },
  {
    "id": "573",
    "title": "Shop Lot",
    "address": "Unit No. 3A-047, 4th Floor, Endah Parade, Jalan 1/149E, Taman Sri Endah, 57000, Kuala Lumpur",
    "postcode": "57000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 28285.2,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "323 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1XSMLdQiXH4Vd_oNT-HI5EddWxzsQJu_V&sz=w800"
    ]
  },
  {
    "id": "574",
    "title": "Condominium",
    "address": "Unit No. 10-3, The Capsquare Residences, No. 2, Persiaran Capsquare, Capital Square, 50100, Kuala Lumpur",
    "postcode": "50100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 750000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "346 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "575",
    "title": "5 Storey Shop Office",
    "address": "No. 35, Jalan Tun H S Lee, 50000, Kuala Lumpur",
    "postcode": "50000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 3458700,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "475 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1ovP1wv1NGP5-Es_JVMgobI4WWbl0Mlnk&sz=w800"
    ]
  },
  {
    "id": "576",
    "title": "Apartment",
    "address": "Unit No. B-8-23, Block B, Mentari Court, Jalan PJS 8/9, Taman Seri Mentari, 46150 Petaling Jaya, Selangor",
    "postcode": "46150",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 210600,
    "auctionDate": "17 Aug 2026 (Mon)",
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
    "id": "577",
    "title": "2 Storey Terrace House",
    "address": "No. 42, Jalan Lombong Timah 29/39, Taman Anggerik Permai, Seksyen 29, 40460 Shah Alam, Selangor",
    "postcode": "40460",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 585000,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "766 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1EUcIyFvugewg48wc9oncQi3bPW8uaTek&sz=w800"
    ]
  },
  {
    "id": "578",
    "title": "2 Storey Terrace House",
    "address": "Jalan Kebun Nenas 6K/KS8, Bandar Putera 2, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 600000,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1QxSR4JREleciEmEZNFcuFd_wvU1fVO6L&sz=w800"
    ]
  },
  {
    "id": "579",
    "title": "Condominium",
    "address": "Unit No. B-4-06, 4th Floor, Block B, Pangsapuri Tiara Duta, Taman Putra Sulaiman, 68000 Ampang, Selangor",
    "postcode": "68000",
    "state": "Selangor",
    "area": "Ampang",
    "reservePrice": 350000,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "969 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1rBmWz5GxrhnLfz_7aQxOxR1ZEHc2ZnN8&sz=w800"
    ]
  },
  {
    "id": "580",
    "title": "1 Storey Terrace House",
    "address": "No. 30, Jalan SS 5C/11, 47301 Petaling Jaya, Selangor",
    "postcode": "47301",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 620000,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "655 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1K5ChVAFdhVZ0pZIXQKmobxz_AI6iXocg&sz=w800"
    ]
  },
  {
    "id": "581",
    "title": "2 Storey Superlink House",
    "address": "No. 17, Jalan Selasih U12/15, Taman Cahaya Alam, Seksyen U12, 40170 Shah Alam, Selangor",
    "postcode": "40170",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 900000,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "757 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1PBpuJnNw80IzoaqTQhrDlGwpyHkTDbLF&sz=w800"
    ]
  },
  {
    "id": "582",
    "title": "2 Storey Terrace House",
    "address": "No. 6, Jalan SET 1/6, Setia Eco Templer, 48000 Rawang, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 950000,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "706 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1DaUgvbMBfS1amKErjiWZDcgHMb76F9If&sz=w800"
    ]
  },
  {
    "id": "583",
    "title": "Apartment",
    "address": "Block 3 (Ixora), Jalan Nuri 7/1A, PJU 5, 47810 Petaling Jaya, Selangor",
    "postcode": "47810",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 215000,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=10DnhoMXPwJOjbuQVs0J-FZPcIETIKwkh&sz=w800"
    ]
  },
  {
    "id": "584",
    "title": "Service Apartment",
    "address": "Unit No. B-23-12, Emporis, Persiaran Surian, Seksyen 3, Taman Sains Selangor 1, Kota Damansara, 47810 Petaling Jaya, Selangor",
    "postcode": "47810",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 410000,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "700 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1vGhFr4grJ5SlZE98KoYyOy4ljXf8T5qn&sz=w800",
      "https://drive.google.com/thumbnail?id=1kHmdx0bgkcn0PB4qRlw461AC89MVlbmO&sz=w800"
    ]
  },
  {
    "id": "585",
    "title": "Condominium",
    "address": "Unit No. B-04-09, Kondominium Villa Park, Jalan Cemara, Bukit Serdang, Seksyen 11, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 267300,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "586",
    "title": "1 Storey Terrace House",
    "address": "No. 53, Jalan Kesuma 4B, Bandar Tasik Kesuma, 43700 Beranang, Selangor",
    "postcode": "43700",
    "state": "Selangor",
    "area": "Beranang",
    "reservePrice": 324000,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1GxcLcPSxi3AR4LOBInBtVk9qr_haqo-H&sz=w800"
    ]
  },
  {
    "id": "587",
    "title": "Flat",
    "address": "Unit No. 3-03, 3rd Floor, Pangsapuri Seri Cahaya, Jalan Pandan Cahaya 1/2, Pandan Cahaya, 68000 Ampang, Selangor",
    "postcode": "68000",
    "state": "Selangor",
    "area": "Ampang",
    "reservePrice": 190000,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "646 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "588",
    "title": "Service Apartment",
    "address": "Unit No. 18-07, 18th Floor, Anggun Residence, No. 8, Jalan Medan Tuanku Utama, 50300, Kuala Lumpur",
    "postcode": "50300",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 505300,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "645 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1vlt3umfimPg3DLT62lzxDJRuNHIaeG9A&sz=w800"
    ]
  },
  {
    "id": "589",
    "title": "Condominium",
    "address": "Unit No. C-1-1, Block C, Jalan 3/149E, Endah Regal Condo, Taman Sri Endah, 57000, Kuala Lumpur",
    "postcode": "57000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 330000,
    "auctionDate": "17 Aug 2026 (Mon)",
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
    "id": "590",
    "title": "Condominium",
    "address": "Residensi Mizumi, No. 3, Persiaran Metro Perdana, Taman Metropolitan Kepong, 52100, Kuala Lumpur",
    "postcode": "52100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 470000,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1yMQYOHP2RP99OFnkAxDtBYZYN4Un-pkB&sz=w800"
    ]
  },
  {
    "id": "591",
    "title": "Service Apartment",
    "address": "Unit No. 19-10, Amaya Maluri, Jalan Jejaka 2, 55100, Kuala Lumpur",
    "postcode": "55100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 405000,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "861 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1z0upP04GGivzdvu9cCJX2Le1KhaLua7Z&sz=w800"
    ]
  },
  {
    "id": "592",
    "title": "Service Apartment",
    "address": "Unit No. B-18-08, Block B, Residensi 1 Utara (Lakepark Residence @ KL), No. 42, Jalan 1/2B, Selayang, 68100, Kuala Lumpur",
    "postcode": "68100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 585000,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "281 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1AGzNcIQw7ceGnsJqIL-1fTmiw4y-6S57&sz=w800",
      "https://drive.google.com/thumbnail?id=1o_gzSlMtTKNxDdJte_-T__arq5wrkgQZ&sz=w800",
      "https://drive.google.com/thumbnail?id=1v_Obw3PGTiksICih8kpwy20jtMAwsTZv&sz=w800",
      "https://drive.google.com/thumbnail?id=17YztfKWxnQuYgU7oIiZnSV1g8QurYVbW&sz=w800"
    ]
  },
  {
    "id": "593",
    "title": "2 Storey Terrace House",
    "address": "Jalan Prima 7/9, Taman Puchong Prima, 47150 Puchong, Selangor",
    "postcode": "47150",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 484200,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "701 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1h2F8O9Iwhqn-osJh8mGvSj_r9Se6F-HY&sz=w800"
    ]
  },
  {
    "id": "594",
    "title": "2 Storey Terrace House",
    "address": "Jalan Palma 1/9, Bandar Hillpark, 42300 Bandar Puncak Alam, Selangor",
    "postcode": "42300",
    "state": "Selangor",
    "area": "Bandar Puncak Alam",
    "reservePrice": 378000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "425 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1mxHwl2hJhhq_lPJYXdLS08Te7zvJBIbx&sz=w800"
    ]
  },
  {
    "id": "595",
    "title": "2 Storey Terrace House",
    "address": "Lorong Sanggul 2D, Bandar Puteri, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 838350,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "450 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1I5nasFaqK43b091QviHNjiPxEBLKGMws&sz=w800"
    ]
  },
  {
    "id": "596",
    "title": "Condominium",
    "address": "Palm Spring @ Damansara, Jalan PJU 3/29, Seksyen 13, Kota Damansara, 47810 Petaling Jaya, Selangor",
    "postcode": "47810",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 364500,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "914 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1XFX0uBe1EkSB_kBMlqlsCVh1pHioKLrA&sz=w800"
    ]
  },
  {
    "id": "597",
    "title": "2 Storey Terrace House",
    "address": "No. 11, Jalan Anggerik 3D/5, Seksyen BS 7, Bandar Bukit Sentosa, 48200 Serendah, Selangor",
    "postcode": "48200",
    "state": "Selangor",
    "area": "Serendah",
    "reservePrice": 218700,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "196 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Xy16e_GvbzyvjkqtzbAEfaaawMllLc2H&sz=w800"
    ]
  },
  {
    "id": "598",
    "title": "Apartment",
    "address": "Unit No. D-8-10, Block D, Apartment Bangi Idaman, Seksyen 5, 43650 Bandar Baru Bangi, Selangor",
    "postcode": "43650",
    "state": "Selangor",
    "area": "Bandar Baru Bangi",
    "reservePrice": 193230,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "893 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1XjMvdik9q-fHA2sWh2jh_HfHy_rjYmDD&sz=w800"
    ]
  },
  {
    "id": "599",
    "title": "2 Storey Cluster House",
    "address": "Jalan Ecohill 7/6B, Setia Ecohill 2, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 648000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "240 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1pKpMaJsflhJL6QD11kGoXkFDbPb6AIJ2&sz=w800"
    ]
  },
  {
    "id": "600",
    "title": "1 Storey Terrace House",
    "address": "Jalan Cenderai, Taman Sinaran, 45600 Bestari Jaya, Selangor",
    "postcode": "45600",
    "state": "Selangor",
    "area": "Bestari Jaya",
    "reservePrice": 137700,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1h3Z1Ngzgf6dwCvpsqWqAq6A-I_UtdCY6&sz=w800"
    ]
  },
  {
    "id": "601",
    "title": "Apartment",
    "address": "Unit No. A-6-6, Blok A, Pangsapuri Impian Heights, Off Jalan Pipit, Bandar Puchong Jaya, 47170 Puchong, Selangor",
    "postcode": "47170",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 324000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "270 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=18hZLTtrX5AOKaDhK1RjoEx3Y1KP7DEuW&sz=w800"
    ]
  },
  {
    "id": "602",
    "title": "2 Storey Terrace House",
    "address": "No. 12, Jalan Ulek Mayang 3D/KU5, Bandar Bukit Raja, 41050 Klang, Selangor",
    "postcode": "41050",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 855000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "697 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1FpNJwd1Em1IQjwP_SUXVKksNVD7Lb22M&sz=w800"
    ]
  },
  {
    "id": "603",
    "title": "2 Storey Terrace House",
    "address": "No. 42, Jalan Cuepacs 5K, Taman Koperasi Cuepacs, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 300000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "770 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1pNSw1aXpUfFUs7Ti1EDjThcZMYDIMt4B&sz=w800"
    ]
  },
  {
    "id": "604",
    "title": "Condominium",
    "address": "Blok D, Kondominium Kelana D'Putera, No. 19, Jalan SS 7/26, 47301 Petaling Jaya, Selangor",
    "postcode": "47301",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 380000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "152 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "605",
    "title": "Retail Unit",
    "address": "Unit No. SA-EG-15, Block E, Jalan BS 11/1, Taman Bukit Serdang, Seksyen 11, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 179000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "667 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1f6CxaNiGvAP_WNhF4ltEJGL7HlsPlK7O&sz=w800"
    ]
  },
  {
    "id": "606",
    "title": "Apartment",
    "address": "Unit No. A-8-11, Blok A, Pangsapuri Vista Sri Tanjung, Jalan Sri Tanjung 17, Taman Sri Tanjung, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 330000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "141 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1cyzxPRTOsqpKGw3dx3O3kVMfCd9PJws3&sz=w800"
    ]
  },
  {
    "id": "607",
    "title": "1 Storey Semi Detached House",
    "address": "No. 17, Jalan 4/3, Bandar Baru Selayang Fasa 2B, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 720000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "084 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1-mkufQCRvywDU-5olZgg7Mdc7aHKdWGm&sz=w800"
    ]
  },
  {
    "id": "608",
    "title": "2 Storey Terrace House",
    "address": "No. 13, Jalan Penghulu 12/3, Seksyen 3, Bandar Mahkota Cheras, 43200 Cheras, Selangor",
    "postcode": "43200",
    "state": "Selangor",
    "area": "Cheras",
    "reservePrice": 540000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1K6-v2UWKVjLNoFALpg1bW5TjIXHHS7eK&sz=w800"
    ]
  },
  {
    "id": "609",
    "title": "2.5 Storey Terrace House",
    "address": "No. 6, Jalan Ara SD 7/4E, Bandar Sri Damansara, 52200 Petaling Jaya, Selangor",
    "postcode": "52200",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 990000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "646 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "610",
    "title": "Apartment",
    "address": "Unit No. E-402, Level 4, Pandan Lake View Apartment, Jalan Perdana 5/1, Pandan Perdana, 55300, Kuala Lumpur",
    "postcode": "55300",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 186300,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "840 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1hsSftGEcOAjtlBTCKF2WnjwkCmAt15ea&sz=w800"
    ]
  },
  {
    "id": "611",
    "title": "Service Apartment",
    "address": "Unit No. A2-08-03, Tower A2, Residensi Henna, No. 2, Jalan Wangsa Kuarza, Wangsa Maju, 53300, Kuala Lumpur",
    "postcode": "53300",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 400000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "807 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HIdzWmw-awVUV05QyP74KQhdTt9KQ5Cm&sz=w800",
      "https://drive.google.com/thumbnail?id=19fxOQrFYtMENX-sDjKD9MyFnlwV5C528&sz=w800"
    ]
  },
  {
    "id": "612",
    "title": "Retail Unit",
    "address": "Selayang Capitol Complex, Selayang - Kepong Expressway, 68100 Selayang, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Selayang",
    "reservePrice": 271260.9,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "810 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1lz2SPqBIZZGMTjP64irhj-QhL4SzQLrd&sz=w800"
    ]
  },
  {
    "id": "613",
    "title": "Retail Unit",
    "address": "Selayang Capitol Complex, Selayang-Kepong Expressway, 68100 Selayang, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Selayang",
    "reservePrice": 213086.7,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "540 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1lz2SPqBIZZGMTjP64irhj-QhL4SzQLrd&sz=w800"
    ]
  },
  {
    "id": "614",
    "title": "Vacant Plot of Detached Housing Lot",
    "address": "Lot 614 (PT No. 20115), Lorong Cinta Alam I, Country Heights Kajang, 43000 Kajang, Selangor",
    "postcode": "20115",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 1969000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "999 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=14Iff-hPCYTlDJnvKFB1Z-NNd9oq7tHOI&sz=w800"
    ]
  },
  {
    "id": "615",
    "title": "2 Storey Terrace House",
    "address": "No. 21, Jalan Budi Dua 25/21B, Taman Sri Muda, Seksyen 25, 40400 Shah Alam, Selangor",
    "postcode": "40400",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 179000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "092 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1tXpjjoQnhF6gGxXXqSlvUJ-28lWfMWgl&sz=w800"
    ]
  },
  {
    "id": "616",
    "title": "2 Storey Detached House",
    "address": "No. 7, Persiaran Sungai Long 5, Bandar Sungai Long, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 1944000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "200 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1SCcdmVqNhD8VA6KAhs4qYvLvD08S06BS&sz=w800"
    ]
  },
  {
    "id": "617",
    "title": "2 Storey Terrace House",
    "address": "No. 39, Jalan BSE 4/10, Bandar Seri Ehsan, 42700 Banting, Selangor",
    "postcode": "42700",
    "state": "Selangor",
    "area": "Banting",
    "reservePrice": 178000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "829 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1wlHXySNh0joufOPhEOaJWeRW1WOq8V0H&sz=w800"
    ]
  },
  {
    "id": "618",
    "title": "1.5 Storey Terrace House",
    "address": "No. 8, Jalan Kota Puteri 5/5C, Kota Puteri, 48100 Batu Arang, Selangor",
    "postcode": "48100",
    "state": "Selangor",
    "area": "Batu Arang",
    "reservePrice": 251000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "200 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1iTsMum5r8DWuOjkNjIgB4bRBZP_IbS25&sz=w800"
    ]
  },
  {
    "id": "619",
    "title": "2 Storey Cluster Semi Detached House",
    "address": "No. 15, Jalan Akuatik 13/77E, Seksyen 13, 40100 Shah Alam, Selangor",
    "postcode": "40100",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 972000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "799 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=106vlM-eqBtTwhcaO6Ii01OFCkVdyYy98&sz=w800"
    ]
  },
  {
    "id": "620",
    "title": "2 Storey Terrace House",
    "address": "No. 40, Jalan Angsana 5/KS 6, Bandar Botanic, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 648000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=19-qrrwHakotx4bE_v2RQEknd63TCm7ca&sz=w800"
    ]
  },
  {
    "id": "621",
    "title": "2 Storey Terrace House",
    "address": "No. 87, Jalan Kajang Selatan 1/1, Kajang Selatan, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 567000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1cVsXdw7Mr3-d_V4TO_h-Vg1kFohHAEjr&sz=w800"
    ]
  },
  {
    "id": "622",
    "title": "2 Storey Terrace House",
    "address": "Jalan Gantang Satu U19/1A, Taman Sri Buloh, Seksyen U19, 40160 Shah Alam, Selangor",
    "postcode": "40160",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 675000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "056 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1qf84Y9oUx0qPGcynV1xXtky9WR-HjV_V&sz=w800"
    ]
  },
  {
    "id": "623",
    "title": "2 Storey Terrace House",
    "address": "No. 1, Jalan Aruna 6, Taman M Aruna, 48020 Rawang, Selangor",
    "postcode": "48020",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 1116000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "230 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=18LGdGi84lEv9PosNvqGYKdjWVgw7ERO1&sz=w800"
    ]
  },
  {
    "id": "624",
    "title": "2 Storey Semi Detached House",
    "address": "No. 2, Jalan Bestari 6, Taman Bestari, 42600 Jenjarom, Selangor",
    "postcode": "42600",
    "state": "Selangor",
    "area": "Jenjarom",
    "reservePrice": 980000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "167 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1WcjwfPNYir9zZO5doygousWdecQvlIH1&sz=w800"
    ]
  },
  {
    "id": "625",
    "title": "Condominium",
    "address": "Unit No. D-01-06, Tingkat 1, Block D, Tiara Parkhomes, Jalan Bukit Ria, Taman Bukit Ria, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 364500,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "636 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1eSTHXbXwNRePYZKUZ2I60JSaUGEj_m-a&sz=w800"
    ]
  },
  {
    "id": "626",
    "title": "SOHO",
    "address": "Unit No. D-26-13, Block D, Jalan Teknokrat 6, Cybersquare, Cyber 5, 63000 Cyberjaya, Selangor",
    "postcode": "63000",
    "state": "Selangor",
    "area": "Cyberjaya",
    "reservePrice": 330000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1cSw42hsT9w1Zygb9mNa3HkHtLg6gCv7R&sz=w800"
    ]
  },
  {
    "id": "627",
    "title": "2 Storey Terrace House",
    "address": "No. 20, Jalan Sri Haneco 4/6, Kawasan Perindustrian Sri Haneco, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 342000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "990 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1FX-MFtdRBsYDHDtueNhluczmaPGHVzLE&sz=w800",
      "https://drive.google.com/thumbnail?id=1OpxY-_fON3IZs93lH4GVoafrvVbZC89D&sz=w800",
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "628",
    "title": "Condominium",
    "address": "Unit No. C22-03 (22-3), Block C, Magna Ville Selayang, Lebuhraya Selayang-Kepong, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 300000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "023 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=178TxjfmJZDNxcpne0xZ0_1o6LGHfJC2T&sz=w800"
    ]
  },
  {
    "id": "629",
    "title": "1 Storey Terrace House",
    "address": "No. 42A, Jalan Widuri 2D/1, Perumahan Jalan Widuri, Bukit Beruntung, 48300 Rawang, Selangor",
    "postcode": "48300",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 240000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "170 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "630",
    "title": "Condominium",
    "address": "Unit No. B-7-3A, Residensi Vyne, Jalan 1/108D, Jalan Sungai Besi, 57100, Kuala Lumpur",
    "postcode": "57100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 520000,
    "auctionDate": "19 Aug 2026 (Wed)",
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
    "id": "631",
    "title": "Condominium",
    "address": "Unit No. A-1-10, Blok A, Bayu Tasik Condominium, Jalan Sri Permaisuri 5, Bandar Sri Permaisuri, 56000, Kuala Lumpur",
    "postcode": "56000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 247860,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "904 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1nGlOB2SD13Q62tD0V6EPefjFpI-5FGNq&sz=w800"
    ]
  },
  {
    "id": "632",
    "title": "Apartment",
    "address": "Unit No. 501, Block G18, Wangsa Maju Seksyen 2, 53300, Kuala Lumpur",
    "postcode": "53300",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 138000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "527 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=17PjAcGW_Nxg5gc11ek_NV9ZUafldS1Db&sz=w800"
    ]
  },
  {
    "id": "633",
    "title": "Condominium",
    "address": "Unit No. 03-04, The Katana Residences, Jalan Madge, 55000, Kuala Lumpur",
    "postcode": "55000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 2500000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "767 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "634",
    "title": "2 Storey Terrace House",
    "address": "No. 185, Jalan DB 2, Taman Desiran Bayu, 47120 Puchong, Selangor",
    "postcode": "47120",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 329000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "076 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1PzJ0mhjdcJKtjNjFFf1GbVJSGDEjDZfX&sz=w800"
    ]
  },
  {
    "id": "635",
    "title": "1 Storey Terrace House",
    "address": "No. 34, Jalan Desa Kundang 4, Taman Desa Kundang, 48050 Rawang, Selangor",
    "postcode": "48050",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 207765,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "905 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1McLO7kyVnCEXykaiuhH-T2fZgokzvJ3D&sz=w800"
    ]
  },
  {
    "id": "636",
    "title": "1 Storey Semi Detached House",
    "address": "No. 13, Jalan Arked 4, Taman Arked, 43800 Dengkil, Selangor",
    "postcode": "43800",
    "state": "Selangor",
    "area": "Dengkil",
    "reservePrice": 270000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "049 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=15-BDIEoQ2HFePLCE4eDfz-7ht7X3NB7C&sz=w800"
    ]
  },
  {
    "id": "637",
    "title": "Apartment",
    "address": "Unit No. E-3A-11, Block E (Anggerik), Pelangi Damansara, PJU 6, Persiaran Surian, 47800 Petaling Jaya, Selangor",
    "postcode": "47800",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 218700,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "764 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xC6XuDL9sCh2o8ca095tstVTEDN97q52&sz=w800"
    ]
  },
  {
    "id": "638",
    "title": "2 Storey Terrace House",
    "address": "No. 3, Jalan Desa 12/9, Bandar Country Homes, 48000 Rawang, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 388800,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "840 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1vtafcnl3uqb6YpeQ_5omP6NbxpsRHaQ_&sz=w800"
    ]
  },
  {
    "id": "639",
    "title": "Apartment",
    "address": "Unit No. B-6-16, Blok B, Pangsapuri Enggang, Jalan Kinrara 6F, Bandar Kinrara, 47180 Puchong, Selangor",
    "postcode": "47180",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 137700,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "678 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1i56OPe7trzwy4tre9XM3NBXNWESCD7Xl&sz=w800"
    ]
  },
  {
    "id": "640",
    "title": "2 Storey Terrace House",
    "address": "No. 7011, Jalan 16, Taman Selayang Baru, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 486000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "826 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "641",
    "title": "3 Storey Terrace House",
    "address": "No. 21, Jalan Putra Prima 4/1, Taman Putra Prima, 47130 Puchong, Selangor",
    "postcode": "47130",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 1080000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "034 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Q-9wTkcGNi2DomI7i2usQDUzcchchxmh&sz=w800",
      "https://drive.google.com/thumbnail?id=1PSgmrujRi0y9uQuyOjRflk0zOTBieEo0&sz=w800",
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "642",
    "title": "1 Storey Terrace House",
    "address": "No. 21, Jalan GU 1/12, Taman Garing Utama, 48000 Rawang, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 252000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "960 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HWjKVPvuf4o5CaFxVs_pTTMB6-n_KBbe&sz=w800"
    ]
  },
  {
    "id": "643",
    "title": "2 Storey Terrace House",
    "address": "No. 10, Jalan Dato Yusuf Shahbudin 16A/KS07, Taman Sentosa, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 405000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "540 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Gu0_g_yYCidwKXv8mCwVxgtgmAxWjR1e&sz=w800"
    ]
  },
  {
    "id": "644",
    "title": "2 Storey Cluster Semi Detached House",
    "address": "No. 50, Jalan DB 1, Taman Desiran Bayu, 47120 Puchong, Selangor",
    "postcode": "47120",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 648000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "486 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1PzJ0mhjdcJKtjNjFFf1GbVJSGDEjDZfX&sz=w800"
    ]
  },
  {
    "id": "645",
    "title": "2 Storey Terrace House",
    "address": "No. 2, Jalan 4/10, Taman Koperasi Polis Phase 1, 68100, Kuala Lumpur",
    "postcode": "68100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 423000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "045 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1rnmyWAblWpTeyetrF-p6Cw3YVLPabpbF&sz=w800"
    ]
  },
  {
    "id": "646",
    "title": "Casa Idaman Condominium",
    "address": "Block A, Casa Idaman Condominium, Jalan 1/12D, Kampung Batu Muda, 51100, Kuala Lumpur",
    "postcode": "51100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 350000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "066 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1lNDWYoXYfnArHk3sMFcSQiEfBSOF_E1s&sz=w800"
    ]
  },
  {
    "id": "647",
    "title": "Condominium",
    "address": "Unit No. 128-11-12, Block 128, Sri Pelangi Condominium, Jalan Genting-Kelang, Setapak 53300, Kuala Lumpur",
    "postcode": "53300",
    "state": "Kuala Lumpur",
    "area": "Setapak",
    "reservePrice": 250000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "022 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1atqZ9tCkLkR-w-0gUvTe2wjlQya78P2S&sz=w800",
      "https://drive.google.com/thumbnail?id=1atqZ9tCkLkR-w-0gUvTe2wjlQya78P2S&sz=w800"
    ]
  },
  {
    "id": "648",
    "title": "Apartment",
    "address": "Unit No. 202, Block F4, Jalan 4/27A, Seksyen 2, Wangsa Maju, 53300, Kuala Lumpur",
    "postcode": "53300",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 190000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "527 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=17PjAcGW_Nxg5gc11ek_NV9ZUafldS1Db&sz=w800"
    ]
  },
  {
    "id": "649",
    "title": "Condominium",
    "address": "Unit No. A-7-5, Awana Puri Condominium, No. 2, Jalan 15/119, Taman Mutiara Barat, 56000, Kuala Lumpur",
    "postcode": "56000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 430000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1J0PNes1ZCV70XWqPkbssZSoRkakeBasp&sz=w800"
    ]
  },
  {
    "id": "650",
    "title": "2 Storey Semi Detached House",
    "address": "No. 7, Jalan Damai Kasih 12, Alam Damai, 56000 Cheras, Kuala Lumpur",
    "postcode": "56000",
    "state": "Kuala Lumpur",
    "area": "Cheras",
    "reservePrice": 1215000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "197 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1U-iZpFS3Vm_3Fffh5ZedmgY00wHNjxWF&sz=w800"
    ]
  },
  {
    "id": "651",
    "title": "2 Storey Detached House",
    "address": "Jalan Pendita Bestari, Puncak Bestari, 42300 Bandar Puncak Alam, Selangor",
    "postcode": "42300",
    "state": "Selangor",
    "area": "Bandar Puncak Alam",
    "reservePrice": 717446,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "734 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jHusB6jrHIadzeBjPCAT1Z8mfwHWWPMD&sz=w800"
    ]
  },
  {
    "id": "652",
    "title": "3 Storey Terrace House",
    "address": "No. 15, Jalan Sepakat Indah 7, Taman Sepakat Indah, Sungai Chua, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 544560,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "874 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1fEjSi5WiZLm5y-0j7CGsHWu5QIz2T_it&sz=w800"
    ]
  },
  {
    "id": "653",
    "title": "2 Storey Terrace House With Extra Land",
    "address": "No. 20, Jalan Uranus U5/129, Bandar Pinggiran Subang, Seksyen U5, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 489000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "326 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "654",
    "title": "Condominium",
    "address": "Unit No. D-206, Block D, Palm Spring @ Damansara, No. 1, Jalan PJU 3/29, Kota Damansara, 47810 Petaling Jaya, Selangor",
    "postcode": "47810",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 276000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "915 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1XFX0uBe1EkSB_kBMlqlsCVh1pHioKLrA&sz=w800"
    ]
  },
  {
    "id": "655",
    "title": "Service Apartment",
    "address": "Unit No. D23-01, The Main Place Residence, Jalan USJ 21/10, 47640 UEP Subang Jaya, Selangor",
    "postcode": "47640",
    "state": "Selangor",
    "area": "UEP Subang Jaya",
    "reservePrice": 247500,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "613 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "656",
    "title": "Apartment",
    "address": "Unit No. D-3-09, Blok D (Dahlia), Pelangi Damansara, PJU 6, Persiaran Surian, 47800 Petaling Jaya, Selangor",
    "postcode": "47800",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 225000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "764 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xC6XuDL9sCh2o8ca095tstVTEDN97q52&sz=w800"
    ]
  },
  {
    "id": "657",
    "title": "2.5 Storey Terrace House",
    "address": "No. 35, Persiaran Wangsa Baiduri 1, 47500 Subang Jaya, Selangor",
    "postcode": "47500",
    "state": "Selangor",
    "area": "Subang Jaya",
    "reservePrice": 600000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "884 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1bsPHNmFdxz1aAC7x2BGs2AmgaTZzj5Ok&sz=w800"
    ]
  },
  {
    "id": "658",
    "title": "Condominium",
    "address": "Unit No. B-03-09, Block B, Kondominium Juta Mines, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 280000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "947 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1F9AHb0fMFbweyj5lqcjbCDG6-lMy5gd9&sz=w800"
    ]
  },
  {
    "id": "659",
    "title": "Office Unit",
    "address": "Unit No. 626, Block A, Kompleks Kelana Centre Point, No. 3, Jalan SS 7/19, Kelana Jaya, 47301 Petaling Jaya, Selangor",
    "postcode": "47301",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 295245,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1KLPPGialzSWkQpH-OgnteRf6FacJC6S2&sz=w800"
    ]
  },
  {
    "id": "660",
    "title": "Apartment",
    "address": "Unit No. A-12-08, Batai Apartment, Jalan SH 1/2, Selayang Height, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 121500,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "646 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1vEx869HXTtnwZwx68KcG44oBQ7BOR0Rn&sz=w800"
    ]
  },
  {
    "id": "661",
    "title": "Stratified 3 Storey Terrace House",
    "address": "No. 44, Jalan PR 2/3, Taman Perdana Residence 2, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 1300000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "165 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "662",
    "title": "2 Storey Cluster House",
    "address": "No. 17, Jalan Ecohill 7/6B, Setia Ecohill 2, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 720000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "240 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1pKpMaJsflhJL6QD11kGoXkFDbPb6AIJ2&sz=w800"
    ]
  },
  {
    "id": "663",
    "title": "Office Unit",
    "address": "Unit No. G-06-08, 6th Floor, Block G, Pejabat Radia, Persiaran Arked, Bukit Jelutong, Seksyen U8, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 1100000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "099 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "664",
    "title": "Office Unit",
    "address": "Unit No. C-3A-1, Block C, Jalan Persiaran Industri SD 5, Pusat Perdagangan Sri Damansara, 52200 Petaling Jaya, Selangor",
    "postcode": "52200",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 123120,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "496 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1VaK4XF4r__gTZu9eUSBv7EyBVLNQ8pFW&sz=w800"
    ]
  },
  {
    "id": "665",
    "title": "2 Storey Terrace House",
    "address": "No. 26, Jalan Iris 8, Perumahan Jalan Iris, Taman Bunga Raya, Bukit Beruntung, 48300 Rawang, Selangor",
    "postcode": "48300",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 230000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1R2WnTR4hjYKuqYZ_RFDHnfJejaOCZhT8&sz=w800"
    ]
  },
  {
    "id": "666",
    "title": "Apartment",
    "address": "Unit No. DS7-10-W, Block 7, Desa Satu Apartment, Off Lorong D1/5, Desa Aman Puri, 52100 Kepong, Selangor",
    "postcode": "52100",
    "state": "Selangor",
    "area": "Kepong",
    "reservePrice": 88938,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "657 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1G_gujrN6GgAOfk4Ym_UwnsvnprQvPtTp&sz=w800"
    ]
  },
  {
    "id": "667",
    "title": "2 Storey Terrace House",
    "address": "No. 31, Jalan Alam Suria 15/3/1, Seksyen 15, 42300 Bandar Puncak Alam, Selangor",
    "postcode": "42300",
    "state": "Selangor",
    "area": "Bandar Puncak Alam",
    "reservePrice": 550395,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "014 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "668",
    "title": "Apartment",
    "address": "Block 5 (Lily), Jalan Nuri 7/1A, PJU 5, 47810 Petaling Jaya, Selangor",
    "postcode": "47810",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 79720.2,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "614 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1D6kM8D9AztVfvNvdvMmgGfZCWFOcrXZ_&sz=w800"
    ]
  },
  {
    "id": "669",
    "title": "Apartment",
    "address": "Unit No. 38-04-06, Pangsapuri Cendana, Jalan Metafasa U16/3, Taman Bukit Subang, Seksyen U16, 40160 Shah Alam, Selangor",
    "postcode": "40160",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 178200,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "840 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1SctP0oUEWqBmlnb9ffdtH5UL4a3yEUKF&sz=w800"
    ]
  },
  {
    "id": "670",
    "title": "2 Storey Terrace House",
    "address": "No. 2A, Jalan PH 2/5, Taman Puchong Hartamas, 47100 Puchong, Selangor",
    "postcode": "47100",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 689000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "916 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1q6jOJhV8PXHPotpe2-KJ0HEcke2Fqagv&sz=w800"
    ]
  },
  {
    "id": "671",
    "title": "1 Storey Terrace House",
    "address": "No. 34, Lorong Pendamar Indah 1, Taman Pendamar Indah, 42000 Pelabuhan Klang, Selangor",
    "postcode": "42000",
    "state": "Selangor",
    "area": "Pelabuhan Klang",
    "reservePrice": 280000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "000 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "672",
    "title": "Service Apartment",
    "address": "Unit No. E-25-18, Simfoni Heights, Jalan Medan Batu Caves, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 320000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "947 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1u-I2bbqabkwZVlAqNp5ZQIFXP6MpqNAW&sz=w800"
    ]
  },
  {
    "id": "673",
    "title": "3 Storey Terrace House",
    "address": "Lorong Laksamana/KS07, Taman Sentosa Idaman, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 1000000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "077 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1GqkU7jyD3K5rHg0pCKXbZLaMV14TDsS9&sz=w800"
    ]
  },
  {
    "id": "674",
    "title": "2 Storey Terrace House",
    "address": "No. 6, Jalan MR 1/18, Taman M Residensi (M Residence @ Rawang), 48020 Rawang, Selangor",
    "postcode": "48020",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 381000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "760 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Tk-KpFs1kKGp9pO9ENDye_fS-K3mDkUY&sz=w800"
    ]
  },
  {
    "id": "675",
    "title": "Condominium",
    "address": "Unit No. C-02-09, Vista Millenium Condominium, Jalan DM 1, Desa Millennia, 47150 Puchong, Selangor",
    "postcode": "47150",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 234900,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "388 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Bf1G37-NJ0ax5dS6jaCmcwCOn_lDeAhg&sz=w800",
      "https://drive.google.com/thumbnail?id=1OOOm0R00O9RmpS3T9hu-mvEyqpIrmU6D&sz=w800",
      "https://drive.google.com/thumbnail?id=1pTjiWpvDeCx4TMl8UGBgnDRs-Bnujsu6&sz=w800"
    ]
  },
  {
    "id": "676",
    "title": "Condominium",
    "address": "Unit No. A8-10-7, Block A8, Green Acre Park Kondominium, Bandar Sungai Long, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 310000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "012 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=14Z3fWLTYnlnwL1A6F1ZiaPt7RuO6wgpw&sz=w800"
    ]
  },
  {
    "id": "677",
    "title": "2 Storey Semi Detached House",
    "address": "No. 1, Jalan MD 1, Taman Meranti Damai, 47120 Puchong, Selangor",
    "postcode": "47120",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 874800,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "982 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=12vnS5HKp-1d1dSkq8CxPe7w0YOxaf9nu&sz=w800"
    ]
  },
  {
    "id": "678",
    "title": "Apartment",
    "address": "Unit No. D12-12-13 (on site Unit No. D-11-13), Block D, Pangsapuri Angsana, Persiaran Mewah USJ 1, 47620 Subang Jaya, Selangor",
    "postcode": "47620",
    "state": "Selangor",
    "area": "Subang Jaya",
    "reservePrice": 200000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "657 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1cRdHcrOhw7i0eK6wJyUK7rK-nUMj_ilf&sz=w800"
    ]
  },
  {
    "id": "679",
    "title": "Apartment",
    "address": "Unit No. B003, Block B, Pangsapuri Sri Cempaka, 47170 Puchong, Selangor",
    "postcode": "47170",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 350000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1SQaS2Lf6tArSIgKKhTN2DV_0FyC_Xr2o&sz=w800"
    ]
  },
  {
    "id": "681",
    "title": "Condominium",
    "address": "Unit No. G-6, Idaman Condominium, Jalan Laksamana 10, Off Jalan Sungai Jati, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 260000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "367 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "682",
    "title": "2 Storey Terrace House",
    "address": "No. 4, Jalan Desa 4/11, Bandar Country Homes, 48000 Rawang, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 320000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "076 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "683",
    "title": "1 Storey Terrace House",
    "address": "No. 9, Jalan Laksamana 7, Taman Sentosa, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 330000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "800 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1SftiRfwbUu0Ug5RTO_BWhB-b9oSwqr3N&sz=w800"
    ]
  },
  {
    "id": "684",
    "title": "Apartment",
    "address": "Unit No. M3-26-A, Pangsapuri Seri Pelangi, Jalan Pekan Baru 39, 41050, Klang, Selangor",
    "postcode": "41050",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 140000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "786 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "685",
    "title": "2.5 Storey Detached House",
    "address": "No. 4, Lorong Enggang 13, Dato Keramat Tambahan, 54200, Kuala Lumpur",
    "postcode": "54200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 1134000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "025 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "686",
    "title": "Condominium",
    "address": "Unit No. B-20-08, Block B, Covillea Bukit Jalil, Jalan Jalil Perkasa 7, Bukit Jalil, 57000, Kuala Lumpur",
    "postcode": "57000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 584000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "292 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1UlSoAD2nm_DcWKqCaXLvYErwCPzx0MyO&sz=w800",
      "https://drive.google.com/thumbnail?id=1qdepFQ9u5_Twd3hrHjr6x76P0lP9IYPY&sz=w800",
      "https://drive.google.com/thumbnail?id=1CWmBaj5DRucthnZh7ES8x0FN7PhQ46k_&sz=w800",
      "https://drive.google.com/thumbnail?id=1mVWk24wQbnw9AbWuBLNUxIFcuKRplGXu&sz=w800",
      "https://drive.google.com/thumbnail?id=1bbVj-T5cgVtr1cSlbPwi6dXYCfFs0NDf&sz=w800"
    ]
  },
  {
    "id": "687",
    "title": "Duplex Condominium",
    "address": "Everett Tower (15B), Mont' Kiara Pines, Jalan Kiara, 50480 Mont Kiara, Kuala Lumpur",
    "postcode": "50480",
    "state": "Kuala Lumpur",
    "area": "Mont Kiara",
    "reservePrice": 1350000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "820 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1kHC04ExrVPKXDVO4tHUs7r8lw6iCA_jh&sz=w800"
    ]
  },
  {
    "id": "688",
    "title": "Condominium",
    "address": "Unit No. A-6-5, Endah Regal Condominium, Blok A, Jalan 3/149E, Taman Sri Endah, 57000, Kuala Lumpur",
    "postcode": "57000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 216000,
    "auctionDate": "27 Aug 2026 (Thu)",
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
    "id": "689",
    "title": "Condominium",
    "address": "Unit No. A-1-3, Blok A, Puncak Banyan, Jalan 3/118B, Taman Seri Cendekia, 56000, Kuala Lumpur",
    "postcode": "56000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 234000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "818 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "690",
    "title": "2.5 Storey Semi Detached House",
    "address": "Jalan Mutiara 1/12, Taman Mutiara Indah, 47100 Puchong, Selangor",
    "postcode": "47100",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 800000,
    "auctionDate": "1 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "916 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1FsUFNVL7dlIWWNviS6YbrDuRXD-KsPME&sz=w800"
    ]
  },
  {
    "id": "691",
    "title": "Apartment",
    "address": "Pangsapuri Flora III, Blok 1, Jalan Asteroid U5/30, Seksyen U5, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 216000,
    "auctionDate": "1 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "904 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "692",
    "title": "2.5 Storey Semi Detached House",
    "address": "Premises No. 43, Jalan Camar 4/15, Sierra Damansara, Kota Damansara, 47810 Petaling Jaya, Selangor",
    "postcode": "47810",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 1890000,
    "auctionDate": "1 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "200 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "693",
    "title": "Apartment",
    "address": "Unit No. A-10-2, Blok A, Pelangi Damansara, PJU 6, Persiaran Surian, 46200 Petaling Jaya, Selangor",
    "postcode": "46200",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 144000,
    "auctionDate": "1 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "657 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xC6XuDL9sCh2o8ca095tstVTEDN97q52&sz=w800"
    ]
  },
  {
    "id": "694",
    "title": "1 Storey Terrace House",
    "address": "Jalan Mahagoni 2B/1, Perumahan Jalan Mahagoni, 44300 Batang Kali, Selangor",
    "postcode": "44300",
    "state": "Selangor",
    "area": "Batang Kali",
    "reservePrice": 320000,
    "auctionDate": "1 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "779 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1is-Yenwxk-NKCzNXWD17WqwZJ-ekgFll&sz=w800"
    ]
  },
  {
    "id": "695",
    "title": "2 Storey Terrace House",
    "address": "Jalan Iris 5, Perumahan Jalan Iris, 48300 Taman Bunga Raya, Selangor",
    "postcode": "48300",
    "state": "Selangor",
    "area": "Taman Bunga Raya",
    "reservePrice": 320000,
    "auctionDate": "1 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1R2WnTR4hjYKuqYZ_RFDHnfJejaOCZhT8&sz=w800"
    ]
  },
  {
    "id": "696",
    "title": "2 Storey Terrace House",
    "address": "No. 20, Jalan Aruna 6, Taman M Aruna, 48020 Rawang, Selangor",
    "postcode": "48020",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 486000,
    "auctionDate": "1 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "650 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=18LGdGi84lEv9PosNvqGYKdjWVgw7ERO1&sz=w800"
    ]
  },
  {
    "id": "697",
    "title": "Land",
    "address": "PT. 5898, Kampung Sungai Pusu, Gombak, Selangor",
    "postcode": "",
    "state": "Selangor",
    "area": "Gombak",
    "reservePrice": 196900,
    "auctionDate": "2 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "490 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "698",
    "title": "2 Storey Cluster Semi Detached House",
    "address": "No. 8, Jalan Alam Suria 16/63, Seksyen 16, 42300 Bandar Puncak Alam, Selangor",
    "postcode": "42300",
    "state": "Selangor",
    "area": "Bandar Puncak Alam",
    "reservePrice": 510000,
    "auctionDate": "2 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "798 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1NiI99xZcJIF5sModT8zW9C1h383nxvVP&sz=w800"
    ]
  },
  {
    "id": "699",
    "title": "Apartment",
    "address": "Blok B, Pangsapuri Sri Penara, Jalan Sri Permaisuri 1, Bandar Sri Permaisuri, 56000, Kuala Lumpur",
    "postcode": "56000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 270000,
    "auctionDate": "2 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "646 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1VhqXFFZCPA_mMxqJhDfLdNRRDway0I7T&sz=w800"
    ]
  },
  {
    "id": "700",
    "title": "1 Storey Semi Detached House",
    "address": "Jalan Dato Hormat 14A/KS13, Taman Sungai Pinang, 42920 Pulau Indah, Selangor",
    "postcode": "42920",
    "state": "Selangor",
    "area": "Pulau Indah",
    "reservePrice": 315000,
    "auctionDate": "7 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "691 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1WXPekyRyR-8VJMp1V9ZcSTUuW8gKZ4aC&sz=w800"
    ]
  },
  {
    "id": "701",
    "title": "2 Storey Terrace House",
    "address": "Jalan Desa 12/5, Bandar Country Homes, 48000 Rawang, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 350000,
    "auctionDate": "7 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1vtafcnl3uqb6YpeQ_5omP6NbxpsRHaQ_&sz=w800"
    ]
  },
  {
    "id": "702",
    "title": "1 Storey Terrce House",
    "address": "No. 52, Lorong Serunai 3, Taman Desa Utama, 41200, Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 720000,
    "auctionDate": "7 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "210 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "703",
    "title": "2 Storey Terrace House",
    "address": "No. 37, Jalan Dato Dagang 30, Taman Sentosa, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 364500,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "380 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Gu0_g_yYCidwKXv8mCwVxgtgmAxWjR1e&sz=w800"
    ]
  },
  {
    "id": "704",
    "title": "2 Storey Terrace House",
    "address": "No. 5, Jalan Kebun Nenas 1L/KS7, Bandar Putera, 41100 Klang, Selangor",
    "postcode": "41100",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 342000,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "449 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1gjAK2tW-c4hmhADJECuC7UYoeYWCTb-L&sz=w800"
    ]
  },
  {
    "id": "705",
    "title": "Condominium",
    "address": "Unit No. B8/J/28-12, Palazzo Caprini (Tower 8), Venice Hill Condominium & Golf Resort, Persiaran Puteri 1, Taman Puteri Batu 9, 43200 Cheras, Selangor",
    "postcode": "43200",
    "state": "Selangor",
    "area": "Cheras",
    "reservePrice": 225000,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=11PJSF-9fma_o2-philmurShH0duTl4Qt&sz=w800"
    ]
  },
  {
    "id": "706",
    "title": "2 Storey Semi Detached House",
    "address": "No. 29, Jalan Aman Perdana 11L/KU5, Taman Aman Perdana, 41050 Klang, Selangor",
    "postcode": "41050",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 800000,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "084 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1wsF_6_CXR0UpTAjqwXa8emFD_cJ99_8X&sz=w800"
    ]
  },
  {
    "id": "707",
    "title": "2.5 Storey Terrace House",
    "address": "No. 51, Jalan Permata Hijau, Taman Selayang Permata, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 800000,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "315 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "708",
    "title": "Apartment",
    "address": "Unit No. A-13-7, Block A, Hillcrest Heights, Jalan Puchong Utama 1, Taman Puchong Utama, 47140 Puchong, Selangor",
    "postcode": "47140",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 630000,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "709",
    "title": "Terrace House",
    "address": "No. 10, Jalan Sepah Puteri 5/20A, Damansara Emas, PJU 5, Kota Damansara, 47810 Petaling Jaya, Selangor",
    "postcode": "47810",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 840000,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "710",
    "title": "2 Storey Terrace House",
    "address": "No. 20, Jalan Seri Cheras 7, Taman Seri Cheras, 43200 Cheras, Selangor",
    "postcode": "43200",
    "state": "Selangor",
    "area": "Cheras",
    "reservePrice": 1250000,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "830 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "711",
    "title": "Service Apartment",
    "address": "Unit No. 15-8, The Annex @ Medan Connaught, Jalan 3/144A, 56000, Kuala Lumpur",
    "postcode": "56000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 364500,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "958 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1x5sAPzbVEc--MvBIT496zzjFcttJPvkk&sz=w800"
    ]
  },
  {
    "id": "712",
    "title": "3 Storey Semi Detached House",
    "address": "Vila Laman Cahaya, Jalan Cahaya 3, Off Jalan Datuk Sulaiman, 60000, Kuala Lumpur",
    "postcode": "60000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 2100000,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "294 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1mnFaGggXQaMUyWPoNQWP_SVgzGIzV5kr&sz=w800"
    ]
  },
  {
    "id": "713",
    "title": "2 Storey Terrace House",
    "address": "No. 92, Jalan TPS 2/23, Taman Pelangi Semenyih 2, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 364500,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "420 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1_ITmeK9Ov3izLeAfYx_RiwW56_QxdLS9&sz=w800"
    ]
  },
  {
    "id": "714",
    "title": "1 Storey Terrace House",
    "address": "No. 65, Jalan Klang Perdana 4A (Lorong Klang Perdana 4A), Taman Klang Perdana, 42100 Klang, Selangor",
    "postcode": "42100",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 387000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "314 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Pu1HN-eWbjlC2jsTwzFvaamK34WDazFb&sz=w800"
    ]
  },
  {
    "id": "715",
    "title": "Apartment",
    "address": "Unit No. B-16-20, Pangsapuri Damai Mewah B, Jalan Damai Mewah 2, Taman Damai Mewah, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 234000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "861 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1LfbElYxP4QorbWOO_XRbJcZ2Lwoi9uO8&sz=w800"
    ]
  },
  {
    "id": "716",
    "title": "Bungalow",
    "address": "No. 11, Jalan Kubah U8/57B, Bukit Jelutong, Section U8, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 3800000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "018 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1d4TqkhQT0jqIdTsrgFBl_Y2r2rj6zRel&sz=w800"
    ]
  },
  {
    "id": "717",
    "title": "Condominium",
    "address": "Unit No. B-05-10, Sutera Pines, Jalan Sutera Pines, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 420000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "054 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1YRtU4cl69nwXEm5mY0qol0BbD-oaK_R0&sz=w800",
      "https://drive.google.com/thumbnail?id=1DaUlpgZ6SJ6N50Zugkbp8LZu4O95nC0m&sz=w800",
      "https://drive.google.com/thumbnail?id=1X9B1hIbEQQbR3FKrKxhbEmFRuk4RMR1s&sz=w800"
    ]
  },
  {
    "id": "718",
    "title": "2 Storey Terrace House",
    "address": "No. 1A, Jalan Kebun Nenas 2J/KS7, Bandar Putera, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 534600,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "540 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1gjAK2tW-c4hmhADJECuC7UYoeYWCTb-L&sz=w800"
    ]
  },
  {
    "id": "719",
    "title": "1 Storey Terrace House",
    "address": "No. 59, Jalan Intan 5, Taman Yayasan, 42600 Jenjarom, Selangor",
    "postcode": "42600",
    "state": "Selangor",
    "area": "Jenjarom",
    "reservePrice": 320000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "954 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "720",
    "title": "Office Unit",
    "address": "Unit No. 27-4-2, 4th Floor, Block G2, Cheras Business Centre, Jalan 3/101C, 56100, Kuala Lumpur",
    "postcode": "56100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 190000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "635 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=10mWR7wWRLAe12FVqQ7mYucjv7WDhVEUL&sz=w800"
    ]
  },
  {
    "id": "721",
    "title": "1 Storey Terrace House",
    "address": "Jalan BK 1/4, Bandar Kinrara, 47180 Puchong, Selangor",
    "postcode": "47180",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 380000,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "098 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "722",
    "title": "Sunway Sutera Apartment",
    "address": "Block D, Sunway Sutera Condominium, No. 2, Jalan Tropicana Utara, PJU 3, Sunway Damansara, 47810 Petaling Jaya, Selangor",
    "postcode": "47810",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 430000,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "786 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "723",
    "title": "Terrace House [4 min to Econsave Semenyih; 10 min to Lotus's Semenyih (Tesco)]",
    "address": "No. 37, Jalan Semenyih Mewah 2, Taman Semenyih Mewah, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 510000,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "692 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1gVd79WuwQE7h-1ZLAbbX-2pMuceoZkYH&sz=w800"
    ]
  },
  {
    "id": "724",
    "title": "2 Storey Terrace House",
    "address": "No. 10, Lorong Sultan Abdul Samad 45D, Bandar Sultan Suleiman, 42000 Pelabuhan Klang, Selangor",
    "postcode": "42000",
    "state": "Selangor",
    "area": "Pelabuhan Klang",
    "reservePrice": 440000,
    "auctionDate": "11 Sep 2026 (Fri)",
    "landArea": "—",
    "builtUp": "552 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1NVkpd_sfHAJtYMOqve-qqDp9eIkwNtS0&sz=w800"
    ]
  },
  {
    "id": "725",
    "title": "2 Storey Terrace House",
    "address": "No. 29, Lorong Raja Nala 6C, Di Jalan Bukit Kapar, 42200 Kapar, Selangor",
    "postcode": "42200",
    "state": "Selangor",
    "area": "Kapar",
    "reservePrice": 270000,
    "auctionDate": "11 Sep 2026 (Fri)",
    "landArea": "—",
    "builtUp": "700 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "726",
    "title": "2.5 Storey Terrace House",
    "address": "No. 9, Jalan SU 2B, Taman Sering Ukay, 68000 Ampang, Selangor",
    "postcode": "68000",
    "state": "Selangor",
    "area": "Ampang",
    "reservePrice": 1100000,
    "auctionDate": "14 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "647 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=19UeOHuno5fQUoqKqCBThtcBVXG6i77NJ&sz=w800"
    ]
  },
  {
    "id": "727",
    "title": "2 Storey Terrace House",
    "address": "No. 1, Jalan SP 6/3, Bandar Saujana Putra, 42610 Lebuhraya Eiite, Jenjarom, Selangor",
    "postcode": "42610",
    "state": "Selangor",
    "area": "Jenjarom",
    "reservePrice": 580000,
    "auctionDate": "14 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "900 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1opmDn-3IHZRIO6kT7vQbTMgkBb6qnKHm&sz=w800"
    ]
  },
  {
    "id": "728",
    "title": "2 Storey Terrace House",
    "address": "No. 18, Jalan SKJ 2/6, Taman Scientex Kundang Jaya, 48020 Rawang, Selangor",
    "postcode": "48020",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 391500,
    "auctionDate": "14 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "170 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1wwR1KYAM-RJrtcPH9z0J-udAVQdE_Eze&sz=w800"
    ]
  },
  {
    "id": "729",
    "title": "Service Condominium",
    "address": "Block D (Taisho), Koi Tropika Condominium, Jalan Puchong, Batu 13 1/2, 47100 Puchong, Selangor",
    "postcode": "47100",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 300000,
    "auctionDate": "15 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "023 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1ZMgF1rIL7csPb_ZeZR5i3JkjV41S3WXP&sz=w800"
    ]
  },
  {
    "id": "730",
    "title": "Desa Villa Condominium",
    "address": "Blok 24, Desa Villa Condominium, Jalan Bukit Desa 3, Taman Bukit Desa, 58100, Kuala Lumpur",
    "postcode": "58100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 405000,
    "auctionDate": "23 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "152 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1FoQ2NRDYQR8EWQOD-aMr2pdxZ-WVWLF6&sz=w800"
    ]
  },
  {
    "id": "731",
    "title": "Condominium",
    "address": "Unit No. B-18-7, Vista Kiara Condominium, No. 7, Jalan Kiara 3, Bukit Kiara, 50480, Kuala Lumpur",
    "postcode": "50480",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 630000,
    "auctionDate": "23 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "732",
    "title": "2 Storey Terrace House",
    "address": "No. 20, Lorong Zamrud, Taman Gembira, 41100 Klang, Selangor",
    "postcode": "41100",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 480000,
    "auctionDate": "25 Sep 2026 (Fri)",
    "landArea": "—",
    "builtUp": "320 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1mVFB6sKF7x1iduZ30pNQTY9jC0G8qR4U&sz=w800"
    ]
  },
  {
    "id": "733",
    "title": "1 Storey Semi Detached House",
    "address": "Premises No. 20, Jalan Lombong Emas 29/33, Kampung Lombong, Section 29, 40460 Shah Alam, Selangor",
    "postcode": "40460",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 540000,
    "auctionDate": "25 Sep 2026 (Fri)",
    "landArea": "—",
    "builtUp": "144 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=12FRmAacUHYX62NcP-_3tUbiZEPZCdKpy&sz=w800"
    ]
  },
  {
    "id": "734",
    "title": "2 Storey Terrace House",
    "address": "Lorong Sultan Abdul Samad 45J, Bandar Sultan Suleiman, 42000 Pelabuhan Klang, Selangor",
    "postcode": "42000",
    "state": "Selangor",
    "area": "Pelabuhan Klang",
    "reservePrice": 400000,
    "auctionDate": "25 Sep 2026 (Fri)",
    "landArea": "—",
    "builtUp": "540 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1NVkpd_sfHAJtYMOqve-qqDp9eIkwNtS0&sz=w800"
    ]
  },
  {
    "id": "735",
    "title": "1.5 Storey Terrace House",
    "address": "No. 46, Jalan Sungai Long 32/133, Taman Harmoni Utama, Bukit Naga, Seksyen 32, 40460 Shah Alam, Selangor",
    "postcode": "40460",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 380000,
    "auctionDate": "25 Sep 2026 (Fri)",
    "landArea": "—",
    "builtUp": "344 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "736",
    "title": "Condominium",
    "address": "Unit No. A-28-03A, Vila Kristal, Jalan 6/38A, Taman Sri Sinar, Segambut, 51200, Kuala Lumpur",
    "postcode": "51200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 630000,
    "auctionDate": "30 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1wSA29JFOLQWxleQzSfeChymjKdSj7ktd&sz=w800"
    ]
  },
  {
    "id": "737",
    "title": "Service Apartment",
    "address": "Unit No. A-21-11, Residensi Skymeridien, No. 1, Jalan 1/48A, Sentul Timur, 51000, Kuala Lumpur",
    "postcode": "51000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 680000,
    "auctionDate": "30 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "324 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1W6NkkSMAtyNJYHf_aXnHYSb863obwwvu&sz=w800"
    ]
  },
  {
    "id": "738",
    "title": "Terrace House",
    "address": "No. 27, Jalan U19/6, Taman Sri Subang, Seksyen U19, 40160 Shah Alam, Selangor",
    "postcode": "40160",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 450000,
    "auctionDate": "5 Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "739",
    "title": "2 Storey Terrace House",
    "address": "No. 11, Jalan BJ/28, Taman Balakong Jaya, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 526500,
    "auctionDate": "5 Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1sFOK5KwrRJ7Zf7tDHSAdCX-hBnwL1W8i&sz=w800"
    ]
  },
  {
    "id": "740",
    "title": "Service Apartment",
    "address": "Residensi Estetika (Astetica Residences), Jalan Dagang SB, The Mines Resort City, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 450000,
    "auctionDate": "8 Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "044 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "741",
    "title": "2 Storey Terrace House",
    "address": "No. 11, Jalan PJS 2C/11, Petaling Jaya Selatan, 46000 Petaling Jaya, Selangor",
    "postcode": "46000",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 340000,
    "auctionDate": "8 Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "470 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=16A9dypHG9jVA2YzYToQKGxTy3zJxole7&sz=w800"
    ]
  },
  {
    "id": "742",
    "title": "1 Storey Terrace House",
    "address": "Jalan Mengkuang 8, Taman Seri Mengkuang, 45000 Kuala Selangor, Selangor",
    "postcode": "45000",
    "state": "Selangor",
    "area": "Kuala Selangor",
    "reservePrice": 300000,
    "auctionDate": "8 Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "431 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "743",
    "title": "1 Storey Terrace House",
    "address": "No. 40, Jalan Dato Harun 1D/KS13, Taman Bayu Indah, Kampung Sungai Pinang, 42920, Pulau Indah, Selangor",
    "postcode": "42920",
    "state": "Selangor",
    "area": "Pulau Indah",
    "reservePrice": 310000,
    "auctionDate": "9 Oct 2026 (Fri)",
    "landArea": "—",
    "builtUp": "834 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "744",
    "title": "1 Storey Terrace House",
    "address": "No. 1, Jalan Indah 1/1, Taman Puchong Indah, 47150, Puchong, Selangor",
    "postcode": "47150",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 480000,
    "auctionDate": "22 Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "910 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1BBbF46GO2IpFjIkg-rTQ3waVREf4_Cq8&sz=w800"
    ]
  },
  {
    "id": "745",
    "title": "Condominium",
    "address": "Idaman Sutera Condominium, No. 2, Jalan 13/21D, Medan Idaman, 53100, Kuala Lumpur",
    "postcode": "53100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 250000,
    "auctionDate": "28 Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "850 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1hwNPNt2lfmdmqWxMnKEG6rFV3hPxAJmN&sz=w800"
    ]
  },
  {
    "id": "746",
    "title": "Condominium",
    "address": "Prima Setapak II Condominium, Jalan Gombak Sejahtera, Off Jalan Gombak, 53000, Kuala Lumpur",
    "postcode": "53000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 590000,
    "auctionDate": "4 Nov 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xq9ekk1ux7VpsJBH7-1vqoh6L_NhPB3X&sz=w800"
    ]
  },
  {
    "id": "747",
    "title": "Service Apartment",
    "address": "Unit No. 3-19-10, Kuchai Avenue, Block 3, Jalan Kuchai Maju 13, Kuchai Entrepreneurs Park, 58200, Kuala Lumpur",
    "postcode": "58200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 380000,
    "auctionDate": "25 Nov 2026 (Wed)",
    "landArea": "—",
    "builtUp": "926 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1TkWSIauXxVvqn8LsVGmZR7cxxnxjEExW&sz=w800"
    ]
  },
  {
    "id": "748",
    "title": "Apartment",
    "address": "Unit No. 7-4-8, Block 7, Jalan 1/127A, Taman Gembira, 58200, Kuala Lumpur",
    "postcode": "58200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 200000,
    "auctionDate": "25 Nov 2026 (Wed)",
    "landArea": "—",
    "builtUp": "689 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "749",
    "title": "Condominium",
    "address": "Block 26, Prima Midah Heights, Jalan Midah 8, Taman Midah, Cheras, 56000, Kuala Lumpur",
    "postcode": "56000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 560000,
    "auctionDate": "9 Dec 2026 (Wed)",
    "landArea": "—",
    "builtUp": "485 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "750",
    "title": "2.5 Storey Detached House",
    "address": "No. 1, Jalan Bukit Impiana 5C, Taman Bukit Impiana, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 2100000,
    "auctionDate": "17 Dec 2026 (Thu)",
    "landArea": "—",
    "builtUp": "900 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1QmKpSIR1a01BG1Vnf92lgKe45JnwS4GS&sz=w800"
    ]
  },
  {
    "id": "751",
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
    "id": "752",
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
    "id": "753",
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
    "id": "754",
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
      "https://drive.google.com/thumbnail?id=1-a2q43KaD5drsWu587ZhonHMmPlqS2Rz&sz=w800"
    ]
  },
  {
    "id": "755",
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
    "id": "756",
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
    "id": "757",
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
      "https://drive.google.com/thumbnail?id=1kdnygEQgCJWQARlBepHpxWQTuAitUJ_g&sz=w800"
    ]
  },
  {
    "id": "758",
    "title": "2 Storey Terrace House",
    "address": "No. 164, Jalan Bayu Sutera 1/6, Taman Bayu Sutera, 71960 Port Dickson, Negeri Sembilan",
    "postcode": "71960",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 470000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "154 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1PnWeRa4cMSRnRlyAz9urHCDUqt4ZSl1Y&sz=w800"
    ]
  },
  {
    "id": "759",
    "title": "[4 min to Batang Benar KTM Station] Flat [8 min to AEON Mall Nilai]",
    "address": "Unit No. 10-4-12, Blok 10, Rumah Pangsa Taman Semarak II, 71800 Nilai, Negeri Sembilan",
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
    "id": "760",
    "title": "Retail Shop Lot [9 min to Batang Benar KTM Station]",
    "address": "Unit No. A-UG-104, Bazar Sentral, Jalan Delima, Nilai 3, 71800 Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 6700,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "97 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1UjaF649VjVY8-MmMBQx_mftfJ6mxIc1f&sz=w800"
    ]
  },
  {
    "id": "761",
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
    "id": "762",
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
    "id": "763",
    "title": "Studio Apartment",
    "address": "Unit No. C-5-15, PD Tiara Bay Apartment, Batu 13, Jalan Pantai, Tiara Beach Resort, 71240 Port Dickson, Negeri Sembilan",
    "postcode": "71240",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 27540,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "420 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=18Ia_r1ryFB19mCz5DKzn3JEug3LuX00-&sz=w800",
      "https://drive.google.com/thumbnail?id=1ukGrTZoQIqpeSkMMRXdey2y1WC5IqCpo&sz=w800"
    ]
  },
  {
    "id": "764",
    "title": "Apartment",
    "address": "Unit No. 1-07, Pangsapuri Tasik Villa, Jalan Taman Bandar Senawang 4, Taman Bandar Senawang, 70450 Seremban, Negeri Sembilan",
    "postcode": "70450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 227000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "012 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "765",
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
    "id": "766",
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
    "id": "767",
    "title": "2 Storey Terrace House",
    "address": "No. 37, Jalan Tiara Sendayan 1/1, Tiara Sendayan, 71900 Labu, Negeri Sembilan",
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
    "id": "768",
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
    "id": "769",
    "title": "Town House",
    "address": "No. 72B, Cempaka Seri 1 Town Villas, Jalan Laman Cempaka 2, Kota Seriemas, 71800 Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 216000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "877 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=17Hdi9eW8aaJprPsKX1s9iIngYlgzSqt8&sz=w800"
    ]
  },
  {
    "id": "770",
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
      "https://drive.google.com/thumbnail?id=1kkx413dPRxjPpbzMsTOPGBu8s2Fq743R&sz=w800"
    ]
  },
  {
    "id": "771",
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
    "id": "772",
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
    "id": "773",
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
      "https://drive.google.com/thumbnail?id=116_1c3IqVParaNPNIdbFi0rgLRrqNA60&sz=w800"
    ]
  },
  {
    "id": "774",
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
    "id": "775",
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
    "id": "776",
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
    "id": "777",
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
    "id": "778",
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
    "id": "779",
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
    "id": "780",
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
    "id": "781",
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
    "id": "782",
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
    "id": "783",
    "title": "2 Storey Terrace House",
    "address": "No. 1176, Jalan Warisan Puteri A 44/1, Taman Warisan Puteri Sikamat, Precint 4, 70400 Seremban, Negeri Sembilan",
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
    "id": "784",
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
    "id": "785",
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
    "id": "786",
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
    "id": "787",
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
    "id": "788",
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
    "id": "789",
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
    "id": "790",
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
    "id": "791",
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
    "id": "792",
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
    "id": "793",
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
      "https://drive.google.com/thumbnail?id=1ukGrTZoQIqpeSkMMRXdey2y1WC5IqCpo&sz=w800"
    ]
  },
  {
    "id": "794",
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
      "https://drive.google.com/thumbnail?id=1drrKrB7i9ee01nU4kNX-MgqxSqLfxCXr&sz=w800"
    ]
  },
  {
    "id": "795",
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
      "https://drive.google.com/thumbnail?id=1drrKrB7i9ee01nU4kNX-MgqxSqLfxCXr&sz=w800"
    ]
  },
  {
    "id": "796",
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
      "https://drive.google.com/thumbnail?id=1drrKrB7i9ee01nU4kNX-MgqxSqLfxCXr&sz=w800"
    ]
  },
  {
    "id": "797",
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
      "https://drive.google.com/thumbnail?id=1drrKrB7i9ee01nU4kNX-MgqxSqLfxCXr&sz=w800"
    ]
  },
  {
    "id": "798",
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
      "https://drive.google.com/thumbnail?id=1tlVQQnwXocFjdj9mGzJqBKXNAxT6Z98r&sz=w800"
    ]
  },
  {
    "id": "799",
    "title": "Semi Detached House",
    "address": "No. 1503, Jalan Warisan Puteri A54, Bandar Warisan Puteri, 70400 Seremban, Negeri Sembilan",
    "postcode": "70400",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 500000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "799 sq.ft",
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
    "id": "800",
    "title": "1 Storey Terrace House",
    "address": "No. 383, Jalan Desa PD 7, Taman Desa PD, 71200 Port Dickson, Negeri Sembilan",
    "postcode": "71200",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 126000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=17Dc93rKtf4cUtlxOVvgQtMNIK0I1tK_L&sz=w800",
      "https://drive.google.com/thumbnail?id=1_VgjMs_3X9aXEwqqsYe1aWqT3tvzEVHp&sz=w800"
    ]
  },
  {
    "id": "801",
    "title": "1 Storey Terrace House",
    "address": "PT. 5773, Jalan Pinggiran Felda 12, Taman Pinggiran Felda, 73400 Gemas, Negeri Sembilan",
    "postcode": "73400",
    "state": "Negeri Sembilan",
    "area": "Gemas",
    "reservePrice": 97200,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1oNXeoGsMIX9_jXyABaWt0Jg4Dbu9kUdN&sz=w800",
      "https://drive.google.com/thumbnail?id=1AsK1Um9-TbOlsR2PA9Ojq2t8ORz4WMtT&sz=w800"
    ]
  },
  {
    "id": "802",
    "title": "1 Storey Terrace House",
    "address": "No. 655, Jalan Desa PD 13, Taman Desa PD, 71200 Port Dickson, Negeri Sembilan",
    "postcode": "71200",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 113400,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "303 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=17Dc93rKtf4cUtlxOVvgQtMNIK0I1tK_L&sz=w800",
      "https://drive.google.com/thumbnail?id=1_VgjMs_3X9aXEwqqsYe1aWqT3tvzEVHp&sz=w800"
    ]
  },
  {
    "id": "803",
    "title": "Condominium",
    "address": "Unit No. C-4-3, Block Camelia, Bayu Temiang, Jalan Bayu, 70200 Seremban, Negeri Sembilan",
    "postcode": "70200",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 260000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "900 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1-CwtV3_-nfpLdlAr5AAgXL76304k88TX&sz=w800"
    ]
  },
  {
    "id": "804",
    "title": "1 Storey Terrace House",
    "address": "No. 979, Jalan Politeknik 18, Taman Politeknik, 71050 Port Dickson, Negeri Sembilan",
    "postcode": "71050",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 260000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "283 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1ayIrqFMEx_0L830SyXJg8p45CCJu86GN&sz=w800"
    ]
  },
  {
    "id": "805",
    "title": "1 Storey Terrace House",
    "address": "No. 48, Jalan Bayan 1, Taman Desa Rasah, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 250000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "647 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "806",
    "title": "1 Storey Terrace House",
    "address": "No. 140, Jalan Nilai Perdana 1, Taman Nilai Perdana, 71800 Nilai, Negeri Sembilan",
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
    "id": "807",
    "title": "Apartment",
    "address": "Unit No. M7-13-9, Block M7, PR1MA Seremban Sentral, Jalan PR1MA 1, 70000 Seremban, Negeri Sembilan",
    "postcode": "70000",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 306000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "216 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1AkTL2I6l3SFwPnNVDN76nnzV5uWW3YRu&sz=w800",
      "https://drive.google.com/thumbnail?id=14XrNGTl1RyB9Pp26lX7TorfcOgenHV-W&sz=w800",
      "https://drive.google.com/thumbnail?id=1tpUgYarlb55NGb81lUiWyg1It-yiDrEW&sz=w800",
      "https://drive.google.com/thumbnail?id=1zjgp2aqFUQkx35nSD8dHU1kB3npgDSA8&sz=w800"
    ]
  },
  {
    "id": "808",
    "title": "Service Apartment",
    "address": "Unit No. P2-14-19, Menara Premium 2, Pusat Perniagaan & Residensi Mesa, Persiaran Ilmu, Putra Nilai, 71800 Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 179000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "380 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1pYsZ59lDLlJ1QGkS3V3P_ZrlhrhUeK5O&sz=w800"
    ]
  },
  {
    "id": "809",
    "title": "2 Storey Terrace House",
    "address": "No. 606, Jalan Ara Sendayan 3/6, Ara Sendayan, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 486000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "647 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Nom0Qy-H63zOkykopvsYilfaLhU1gEX9&sz=w800",
      "https://drive.google.com/thumbnail?id=1Hs0Vm8hq9vSIoKWOz4DWFTnPNZzO4hrV&sz=w800"
    ]
  },
  {
    "id": "810",
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
    "id": "811",
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
    "id": "812",
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
    "id": "813",
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
    "id": "814",
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
    "id": "815",
    "title": "Apartment",
    "address": "Unit No. E-3A-16, Block Nyior, Desa Palma Apartment, Putra Nilai, 71800 Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 105300,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "678 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1BtPbOOGh-77UqDUw0IUGQDyXE4DOh75Y&sz=w800",
      "https://drive.google.com/thumbnail?id=1YhViVNfxBprKtcWvsyZkeu_xjlUq2Efh&sz=w800"
    ]
  },
  {
    "id": "816",
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
    "id": "817",
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
      "https://drive.google.com/thumbnail?id=1YRQpJ-xxWr3y_uPDdpt7RH90NqQws_fo&sz=w800"
    ]
  },
  {
    "id": "818",
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
    "id": "819",
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
    "id": "820",
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
    "id": "821",
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
      "https://drive.google.com/thumbnail?id=1_VgjMs_3X9aXEwqqsYe1aWqT3tvzEVHp&sz=w800"
    ]
  },
  {
    "id": "822",
    "title": "1 Storey Terrace House",
    "address": "No. 6, Lorong Vista Jaya 2, Taman Vista Jaya, 71010 Port Dickson, Negeri Sembilan",
    "postcode": "71010",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 190000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1f0uPFye5Z7ogcupy0PuMlsXeyxntAAgE&sz=w800"
    ]
  },
  {
    "id": "823",
    "title": "2 Storey Terrace House",
    "address": "No. 197, Jalan Tiara Sendayan 2/3, Taman Tiara Sendayan, 71900 Labu, Negeri Sembilan",
    "postcode": "71900",
    "state": "Negeri Sembilan",
    "area": "Labu",
    "reservePrice": 364500,
    "auctionDate": "29 Jul 2026 (Wed)",
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
    "id": "824",
    "title": "1 Storey Terrace House",
    "address": "No. 219, Jalan Seri Mambau A11, Taman Seri Mambau, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 225000,
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
    "id": "825",
    "title": "1 Storey Terrace House",
    "address": "No. 518, Jalan Politeknik 7, Taman Politeknik, 71050 Port Dickson, Negeri Sembilan",
    "postcode": "71050",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 126000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "303 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1ayIrqFMEx_0L830SyXJg8p45CCJu86GN&sz=w800"
    ]
  },
  {
    "id": "826",
    "title": "1 Storey Terrace House",
    "address": "No. 59, Taman Sri Lukut, 71010 Lukut, Port Dickson, Negeri Sembilan",
    "postcode": "71010",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 180000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "827",
    "title": "2 Storey Detached House",
    "address": "No. 16, Jalan RK 6/15, Rasah Kemayan, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 700000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "146 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1tF5qr0lfBePPAIwqzKX-l6u23D6HCDa9&sz=w800"
    ]
  },
  {
    "id": "828",
    "title": "2 Storey Terrace House",
    "address": "No. 1189, Jalan Ara Sendayan 5/10, Ara Sendayan, 70300, Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 580000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "647 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Nom0Qy-H63zOkykopvsYilfaLhU1gEX9&sz=w800",
      "https://drive.google.com/thumbnail?id=1Hs0Vm8hq9vSIoKWOz4DWFTnPNZzO4hrV&sz=w800"
    ]
  },
  {
    "id": "829",
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
      "https://drive.google.com/thumbnail?id=1YRQpJ-xxWr3y_uPDdpt7RH90NqQws_fo&sz=w800"
    ]
  },
  {
    "id": "830",
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
    "id": "831",
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
    "id": "832",
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
    "id": "833",
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
      "https://drive.google.com/thumbnail?id=1nzJINhpiK5PIK-Wke6s_0GhFPQkYJNPz&sz=w800"
    ]
  },
  {
    "id": "834",
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
    "id": "835",
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
    "id": "836",
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
    "id": "837",
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
      "https://drive.google.com/thumbnail?id=1YRQpJ-xxWr3y_uPDdpt7RH90NqQws_fo&sz=w800"
    ]
  },
  {
    "id": "838",
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
    "id": "839",
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
    "id": "840",
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
    "id": "841",
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
    "id": "842",
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
    "id": "843",
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
    "id": "844",
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
    "id": "845",
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
    "id": "846",
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
    "id": "847",
    "title": "1 Storey Terrace House",
    "address": "No. 320, Jalan PD 6, Taman Desa PD, 71200 Port Dickson, Negeri Sembilan",
    "postcode": "71200",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 117000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=17Dc93rKtf4cUtlxOVvgQtMNIK0I1tK_L&sz=w800",
      "https://drive.google.com/thumbnail?id=1_VgjMs_3X9aXEwqqsYe1aWqT3tvzEVHp&sz=w800"
    ]
  },
  {
    "id": "848",
    "title": "1 Storey Terrace House",
    "address": "No. 365, Jalan Desa PD 7, Taman Desa PD, 71200 Port Dickson, Negeri Sembilan",
    "postcode": "71200",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 135000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "625 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=17Dc93rKtf4cUtlxOVvgQtMNIK0I1tK_L&sz=w800",
      "https://drive.google.com/thumbnail?id=1_VgjMs_3X9aXEwqqsYe1aWqT3tvzEVHp&sz=w800"
    ]
  },
  {
    "id": "849",
    "title": "1 Storey Terrace House",
    "address": "No. 1152, Jalan Sentosa 5, Taman Sentosa, 73400 Gemas, Negeri Sembilan",
    "postcode": "73400",
    "state": "Negeri Sembilan",
    "area": "Gemas",
    "reservePrice": 207000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "863 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "850",
    "title": "Terrace House",
    "address": "No. 19, Jalan Bagan Kurnia 6, Taman Bagan Kurnia, Chuah, 71960 Port Dickson, Negeri Sembilan",
    "postcode": "71960",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 150000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "194 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1krHWz0QBf4LPwJsZGARu_K06LaGkLjoE&sz=w800"
    ]
  },
  {
    "id": "851",
    "title": "1 Storey Terrace House",
    "address": "No. 501, Jalan Desa PD 8, Taman Desa PD, 71200 Port Dickson, Negeri Sembilan",
    "postcode": "71200",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 135000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=17Dc93rKtf4cUtlxOVvgQtMNIK0I1tK_L&sz=w800",
      "https://drive.google.com/thumbnail?id=1_VgjMs_3X9aXEwqqsYe1aWqT3tvzEVHp&sz=w800"
    ]
  },
  {
    "id": "852",
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
      "https://drive.google.com/thumbnail?id=1VBG8stbNv-BIiUKyX137dZVc7fIgMYc-&sz=w800"
    ]
  },
  {
    "id": "853",
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
    "id": "854",
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
    "id": "855",
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
    "id": "856",
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
    "id": "857",
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
    "id": "858",
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
    "id": "859",
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
    "id": "860",
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
    "id": "861",
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
    "id": "862",
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
    "id": "863",
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
    "id": "864",
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
    "id": "865",
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
      "https://drive.google.com/thumbnail?id=1Xin8ycOyFe7uEBrUNfJk8BRf3M0l7KZF&sz=w800"
    ]
  },
  {
    "id": "866",
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
    "id": "867",
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
      "https://drive.google.com/thumbnail?id=1ukGrTZoQIqpeSkMMRXdey2y1WC5IqCpo&sz=w800"
    ]
  },
  {
    "id": "868",
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
      "https://drive.google.com/thumbnail?id=1ukGrTZoQIqpeSkMMRXdey2y1WC5IqCpo&sz=w800"
    ]
  },
  {
    "id": "869",
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
      "https://drive.google.com/thumbnail?id=1tK24r2sZ4_HjrJ5btNK1An1HaXGeOSpE&sz=w800"
    ]
  },
  {
    "id": "870",
    "title": "1.5 Storey Detached House",
    "address": "No. 1335, Jalan Warisan Puteri A49, Precint 9, Bandar Warisan Puteri, 70400 Seremban, Negeri Sembilan",
    "postcode": "70400",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 900000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "354 sq.ft",
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
    "id": "871",
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
    "id": "872",
    "title": "2 Storey Terrace House",
    "address": "No. 48, Jalan Cempaka 21, Taman Cempaka Heights, 70450 Seremban, Negeri Sembilan",
    "postcode": "70450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 356400,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "500 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1O1AWFu_HmS2EfRSyeZlCA70Qsrml3yHl&sz=w800"
    ]
  },
  {
    "id": "873",
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
    "id": "874",
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
    "id": "875",
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
      "https://drive.google.com/thumbnail?id=1Hs0Vm8hq9vSIoKWOz4DWFTnPNZzO4hrV&sz=w800"
    ]
  },
  {
    "id": "876",
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
    "id": "877",
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
    "id": "878",
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
    "id": "879",
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
    "id": "880",
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
    "id": "881",
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
    "id": "882",
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
    "id": "883",
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
    "id": "884",
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
    "id": "885",
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
    "id": "886",
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
      "https://drive.google.com/thumbnail?id=1g1iZSa34bTxTq_ma0mxgYAN2WypiUffo&sz=w800"
    ]
  },
  {
    "id": "887",
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
      "https://drive.google.com/thumbnail?id=1_-bujcEFmspPni31Nhm9CDD9NdiNF0a6&sz=w800"
    ]
  },
  {
    "id": "888",
    "title": "Office Lot",
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
      "https://drive.google.com/thumbnail?id=11zdgOHLTu5n9CZkjLDFX2f5-vqv8T4q7&sz=w800"
    ]
  },
  {
    "id": "889",
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
      "https://drive.google.com/thumbnail?id=10jMTgy7pNe0uMdmz6Hbmg85n0ptfT-Zh&sz=w800"
    ]
  },
  {
    "id": "890",
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
      "https://drive.google.com/thumbnail?id=10jMTgy7pNe0uMdmz6Hbmg85n0ptfT-Zh&sz=w800"
    ]
  },
  {
    "id": "891",
    "title": "2 Storey Terrace House",
    "address": "No. 1976, Jalan Tiara Sendayan 6/5, Tiara Sendayan, 71900 Labu, Negeri Sembilan",
    "postcode": "71900",
    "state": "Negeri Sembilan",
    "area": "Labu",
    "reservePrice": 460000,
    "auctionDate": "5 Aug 2026 (Wed)",
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
    "id": "892",
    "title": "2 Storey Semi Detached House",
    "address": "Lot No. 10344, Jalan RJ 1/5, Taman Rasah Jaya, 70300 Seremban, Negeri Sembilan",
    "postcode": "10344",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 540000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "499 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1kZv29DthQRe4BUjXdxzICN1lMGumEs0E&sz=w800",
      "https://drive.google.com/thumbnail?id=1yYW_v03nncFf9JgzSwZkWbYANWmuckgo&sz=w800",
      "https://drive.google.com/thumbnail?id=1aGaxR4gvFRn2O_-qqMdaFnbZmU96v3kp&sz=w800"
    ]
  },
  {
    "id": "893",
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
      "https://drive.google.com/thumbnail?id=15T89o4Rwg9_fuLqrOGKtY2NdXfPmk6eX&sz=w800"
    ]
  },
  {
    "id": "894",
    "title": "2 Storey Terrace House",
    "address": "No. 2029, Jalan Bayu Sutera 4/16, Taman Bayu Sutera, 71960 Port Dickson, Negeri Sembilan",
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
    "id": "895",
    "title": "1 Storey Terrace House",
    "address": "No. 154, Jalan Lily 4, Taman Lily, 72100, Bahau, Negeri Sembilan",
    "postcode": "72100",
    "state": "Negeri Sembilan",
    "area": "Bahau",
    "reservePrice": 250000,
    "auctionDate": "7 Aug 2026 (Fri)",
    "landArea": "—",
    "builtUp": "032 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "896",
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
    "id": "897",
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
    "id": "898",
    "title": "Terrace House",
    "address": "No. 1696, Jalan BSS 2/2E, Bandar Seremban Selatan, 71450 Seremban, Negeri Sembilan",
    "postcode": "71450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 250000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "958 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VHEketmllxMqadBCasUBK2muf245MLcj&sz=w800"
    ]
  },
  {
    "id": "899",
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
    "id": "900",
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
    "id": "901",
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
    "id": "902",
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
    "id": "903",
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
      "https://drive.google.com/thumbnail?id=1-a2q43KaD5drsWu587ZhonHMmPlqS2Rz&sz=w800"
    ]
  },
  {
    "id": "904",
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
    "id": "905",
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
      "https://drive.google.com/thumbnail?id=1YRQpJ-xxWr3y_uPDdpt7RH90NqQws_fo&sz=w800"
    ]
  },
  {
    "id": "906",
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
      "https://drive.google.com/thumbnail?id=1YhViVNfxBprKtcWvsyZkeu_xjlUq2Efh&sz=w800"
    ]
  },
  {
    "id": "907",
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
    "id": "908",
    "title": "2 Storey Terrace House",
    "address": "No. 46, Jalan PS 5/9, Taman Pinggiran Senawang, 71450 Seremban, Negeri Sembilan",
    "postcode": "71450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 320000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "348 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=165SU-yOWbOlW6eylOmhnAZWcrJSRCne3&sz=w800"
    ]
  },
  {
    "id": "909",
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
      "https://drive.google.com/thumbnail?id=1HzM5dU8z-MHhtYn8N9I5pxQysstHu7VN&sz=w800"
    ]
  },
  {
    "id": "910",
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
      "https://drive.google.com/thumbnail?id=1RKm2D1Yf4B85vNdzcBj0Cn4ZKijTUH-D&sz=w800"
    ]
  },
  {
    "id": "911",
    "title": "2 Storey Terrace House",
    "address": "No. 358, Precint 2, Jalan Iringan Bayu 23, Taman Iringan Bayu, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 429300,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "702 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1bNqnqXq_7mnG9qQeo1ZlyrXtz5hLCPFG&sz=w800",
      "https://drive.google.com/thumbnail?id=1YRQpJ-xxWr3y_uPDdpt7RH90NqQws_fo&sz=w800"
    ]
  },
  {
    "id": "912",
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
      "https://drive.google.com/thumbnail?id=1R7TfEVn0i7yrfBXNuotCNlIRrLltLLkA&sz=w800"
    ]
  },
  {
    "id": "913",
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
      "https://drive.google.com/thumbnail?id=1lGDcDV8jHJxsAXmayYu7TIYuYKnndmUK&sz=w800"
    ]
  },
  {
    "id": "914",
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
    "id": "915",
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
    "id": "916",
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
    "id": "917",
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
    "id": "918",
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
      "https://drive.google.com/thumbnail?id=1_VgjMs_3X9aXEwqqsYe1aWqT3tvzEVHp&sz=w800"
    ]
  },
  {
    "id": "919",
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
      "https://drive.google.com/thumbnail?id=10msmz7XbB8co5IR-xjyRUWOInxKs6lyQ&sz=w800"
    ]
  },
  {
    "id": "920",
    "title": "1 Storey Semi Detached House",
    "address": "No. 233, Lorong Wawasan 11, Taman Wawasan, 71010 Port Dickson, Negeri Sembilan",
    "postcode": "71010",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 261000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "099 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "921",
    "title": "Agricultural Land",
    "address": "Lot 6308, Hijauan Height, Mukim of Pedas, 71300 Rembau, Negeri Sembilan",
    "postcode": "71300",
    "state": "Negeri Sembilan",
    "area": "Rembau",
    "reservePrice": 315000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "922",
    "title": "2 Storey Terrace House",
    "address": "No. 398, Jalan PI 8, Taman Pedas Indah, 71400 Pedas, Negeri Sembilan",
    "postcode": "71400",
    "state": "Negeri Sembilan",
    "area": "Pedas",
    "reservePrice": 50000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "775 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "923",
    "title": "1 Storey Terrace House",
    "address": "No. 4751, Jalan Desa Puteri 30, Taman Desa Puteri, 72100 Bahau, Negeri Sembilan",
    "postcode": "72100",
    "state": "Negeri Sembilan",
    "area": "Bahau",
    "reservePrice": 220000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "431 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1tcOtChOQOvyWJeHh3BdebnbKjH7DKDun&sz=w800",
      "https://drive.google.com/thumbnail?id=1VBG8stbNv-BIiUKyX137dZVc7fIgMYc-&sz=w800"
    ]
  },
  {
    "id": "924",
    "title": "2 Storey Terrace House",
    "address": "No. 22, Jalan Springhill 10/1, Bandar Springhill, 71010 Port Dickson, Negeri Sembilan",
    "postcode": "71010",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 194400,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "076 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1iX33VkUNNWAgg2Ctl3xhhMEQwWB11bFS&sz=w800"
    ]
  },
  {
    "id": "925",
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
    "id": "926",
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
    "id": "927",
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
    "id": "928",
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
      "https://drive.google.com/thumbnail?id=1kkx413dPRxjPpbzMsTOPGBu8s2Fq743R&sz=w800"
    ]
  },
  {
    "id": "929",
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
    "id": "930",
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
    "id": "931",
    "title": "1 Storey Terrace House",
    "address": "No. 94, Jalan Bungai Raya 2, Taman Bunga Raya, 71700 Mantin, Negeri Sembilan",
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
    "id": "932",
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
    "id": "933",
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
    "id": "934",
    "title": "2 Storey Terrace House",
    "address": "No. 592, Jalan Sejahtera Acbe, 72100 Bahau, Negeri Sembilan",
    "postcode": "72100",
    "state": "Negeri Sembilan",
    "area": "Bahau",
    "reservePrice": 450000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "935",
    "title": "2 Storey Terrace House",
    "address": "No. 92, Jalan Laman Sendayan 1A/4, Laman Sendayan, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 378000,
    "auctionDate": "13 Aug 2026 (Thu)",
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
    "id": "936",
    "title": "2 Storey Terrace House",
    "address": "No. 1072, Jalan Hijayu 2/64, Hijayu 2, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 550000,
    "auctionDate": "13 Aug 2026 (Thu)",
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
    "id": "937",
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
    "id": "938",
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
    "id": "939",
    "title": "2 Storey Shop Office",
    "address": "No. 60, Jalan KU 5, Pusat Komersial Universiti, Seremban 3, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 415530,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "876 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "940",
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
    "id": "941",
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
      "https://drive.google.com/thumbnail?id=1nwgiOw4LN5GbZrHtbQjzUNvdfcOFc48H&sz=w800"
    ]
  },
  {
    "id": "942",
    "title": "2 Storey Terrace House",
    "address": "No. 8, Jalan Bukit Citra 8/2, Taman Bukit Citra, 71700 Mantin, Negeri Sembilan",
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
    "id": "943",
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
    "id": "944",
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
    "id": "945",
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
    "id": "946",
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
    "id": "947",
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
      "https://drive.google.com/thumbnail?id=10JdKOGoFIGYoPUfRU6VsDYwIUlG_Pkem&sz=w800"
    ]
  },
  {
    "id": "948",
    "title": "2 Storey Terrace House",
    "address": "No. 60, Jalan Sena 1/8, Taman Sena, Sungai Gadut, 71450 Seremban, Negeri Sembilan",
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
      "https://drive.google.com/thumbnail?id=1nXuwn_C-I0lvxOSuiHmfzzKkaIK4cswS&sz=w800"
    ]
  },
  {
    "id": "949",
    "title": "2 Storey Terrace House",
    "address": "No. 161, Jalan Shorea Hartamas 8, Taman Shorea Hartamas, 71050 Port Dickson, Negeri Sembilan",
    "postcode": "71050",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 500000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "057 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JIdDQAT4KRxgu8VUHP75-5afb53jgzdN&sz=w800"
    ]
  },
  {
    "id": "950",
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
    "id": "951",
    "title": "2 Storey Terrace House",
    "address": "Jalan Suriaman 3/4, Suriaman 3, 71950, Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 510000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1tLpQnqQjR0AX-lgYHl8F-rhv_E7DyVFt&sz=w800",
      "https://drive.google.com/thumbnail?id=1-a2q43KaD5drsWu587ZhonHMmPlqS2Rz&sz=w800"
    ]
  },
  {
    "id": "952",
    "title": "2 Storey Terrace House",
    "address": "No. 231, Jalan Springhill 7/8, Residence 7, Bandar Springhill, 71010 Port Dickson, Negeri Sembilan",
    "postcode": "71010",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 500000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "798 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1vgeMy-PI1sEcOcjTBCDu9G10lPFxGbBZ&sz=w800"
    ]
  },
  {
    "id": "953",
    "title": "1 Storey Terrace House",
    "address": "No. 126, Jalan Kekwa 1, Taman Kekwa, 70400 Seremban, Negeri Sembilan",
    "postcode": "70400",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 330000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "119 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1hPBbi4-D_gp-au4Wv9szqIrQgXfnR9qH&sz=w800"
    ]
  },
  {
    "id": "954",
    "title": "2 Storey Terrace House",
    "address": "No. 132, Jalan Bukit Senawang Perdana 49, Taman Bukit Senawang Perdana, 71450 Seremban, Negeri Sembilan",
    "postcode": "71450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
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
    "id": "955",
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
      "https://drive.google.com/thumbnail?id=1QyOcYwGGoAeVrh6ldPzCPxltZKKTbIWC&sz=w800"
    ]
  },
  {
    "id": "956",
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
    "id": "957",
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
      "https://drive.google.com/thumbnail?id=15wvNjBAkSMTodYbeqkFOws-UcsDL09LC&sz=w800"
    ]
  },
  {
    "id": "958",
    "title": "2 Storey Bungalow",
    "address": "No. 96, Jalan Tasik Senangin 19/1, Bandar Tasik Senangin, 71750 Lenggeng, Negeri Sembilan",
    "postcode": "71750",
    "state": "Negeri Sembilan",
    "area": "Lenggeng",
    "reservePrice": 459000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "004 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1nhM7zphX0EDYJFO8UzKHHxWvVT-1ie63&sz=w800"
    ]
  },
  {
    "id": "959",
    "title": "2 Storey Terrace House",
    "address": "No. 16, Jalan Suriaman 1/1, Suriaman 1, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 432000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "496 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1FeyWTl2pOdVwzmpLNhYn-Po9ojEyDwYi&sz=w800"
    ]
  },
  {
    "id": "960",
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
      "https://drive.google.com/thumbnail?id=1YRQpJ-xxWr3y_uPDdpt7RH90NqQws_fo&sz=w800"
    ]
  },
  {
    "id": "961",
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
    "id": "962",
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
      "https://drive.google.com/thumbnail?id=1tKE-KrcF_n5z7NUY34tF_b4Fpo_qUXQW&sz=w800"
    ]
  },
  {
    "id": "963",
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
    "id": "964",
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
      "https://drive.google.com/thumbnail?id=1c10sjz3p-zdM8YrBhPR_veuqNW4JWczV&sz=w800"
    ]
  },
  {
    "id": "965",
    "title": "1 Storey Terrace House",
    "address": "Jalan BIL 49, Taman Bayu Indera Lukut, 71010 Port Dickson, Negeri Sembilan",
    "postcode": "71010",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 204120,
    "auctionDate": "7 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "345 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1NzpokR03hf6GtJzT9qg1JXRIIEsGfG-Y&sz=w800",
      "https://drive.google.com/thumbnail?id=1TtdFr94rJc4mdli1Wt7YH_5IzeMu3_0g&sz=w800",
      "https://drive.google.com/thumbnail?id=1gkZdKabziqlIzawraO6beVPwcUJa_d3f&sz=w800"
    ]
  },
  {
    "id": "966",
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
    "id": "967",
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
      "https://drive.google.com/thumbnail?id=1smxQpEijUvJ7pi8StlV-a8RrKvoGZkn_&sz=w800"
    ]
  },
  {
    "id": "968",
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
      "https://drive.google.com/thumbnail?id=153p8vK11o8SdxZA3ATSdGpVdriIoJVsh&sz=w800"
    ]
  },
  {
    "id": "969",
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
    "id": "970",
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
    "id": "971",
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
    "id": "972",
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
    "id": "973",
    "title": "2 Storey Terrace House",
    "address": "No. 713, Jalan Tiara Sendayan 2/10, Taman Tiara Sendayan, 71900 Labu, Negeri Sembilan",
    "postcode": "71900",
    "state": "Negeri Sembilan",
    "area": "Labu",
    "reservePrice": 405000,
    "auctionDate": "8 Sep 2026 (Tue)",
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
    "id": "974",
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
    "id": "975",
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
    "id": "976",
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
      "https://drive.google.com/thumbnail?id=1ukGrTZoQIqpeSkMMRXdey2y1WC5IqCpo&sz=w800"
    ]
  },
  {
    "id": "977",
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
      "https://drive.google.com/thumbnail?id=1YRQpJ-xxWr3y_uPDdpt7RH90NqQws_fo&sz=w800"
    ]
  },
  {
    "id": "978",
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
      "https://drive.google.com/thumbnail?id=1YRQpJ-xxWr3y_uPDdpt7RH90NqQws_fo&sz=w800"
    ]
  },
  {
    "id": "979",
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
      "https://drive.google.com/thumbnail?id=1R6elFz2pje8Q8vKx013d6OGr7V03Mj5w&sz=w800"
    ]
  },
  {
    "id": "980",
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
      "https://drive.google.com/thumbnail?id=1RXLZKdXiWssDZa_y2WH62ljuoNxLx11C&sz=w800"
    ]
  },
  {
    "id": "981",
    "title": "2 Storey Terrace House",
    "address": "No. 260, Jalan Nusari Aman 2/2, Nusari Aman 1, 17950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "17950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 650000,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "165 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "982",
    "title": "2 Storey Terrace House",
    "address": "No. 2449, Jalan Tiara Sendayan 7/3, Taman Tiara Sendayan, 71900 Labu, Negeri Sembilan",
    "postcode": "71900",
    "state": "Negeri Sembilan",
    "area": "Labu",
    "reservePrice": 440000,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "995 sq.ft",
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
    "id": "983",
    "title": "Terrace House",
    "address": "Jalan Ekar 5/1, Residensi Prima Bandar Ekar, 71200, Negeri Sembilan",
    "postcode": "71200",
    "state": "Negeri Sembilan",
    "area": "Negeri Sembilan",
    "reservePrice": 320000,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "824 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1ZdVhvCUiOQ83VngigICZpwGsg30uuIwk&sz=w800"
    ]
  },
  {
    "id": "984",
    "title": "2 Storey Terrace House",
    "address": "No. 212, Jalan Ekar 4/4, Residensi Prima Bandar Ekar, Bandar Ekar, 71200 Rantau, Negeri Sembilan",
    "postcode": "71200",
    "state": "Negeri Sembilan",
    "area": "Rantau",
    "reservePrice": 320000,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "824 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1ZdVhvCUiOQ83VngigICZpwGsg30uuIwk&sz=w800"
    ]
  },
  {
    "id": "985",
    "title": "2 Storey Terrace House",
    "address": "No. 425, Jalan Hijayu 1/15, Hijayu 1, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 730000,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "447 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1DtxiHPjHw9-Gi87fBkpl_lVfgLWL4Eyl&sz=w800",
      "https://drive.google.com/thumbnail?id=1-Mkp_uz6aNHKQ73WGRDMbgB2MXxfEmu3&sz=w800",
      "https://drive.google.com/thumbnail?id=1sPowbW900Nar5MRcSD9tNOh4tjU2Uj6D&sz=w800"
    ]
  },
  {
    "id": "986",
    "title": "1 Storey Terrace House",
    "address": "No. 604, Lorong Anggerik 20, Bandar Sunggala, 71050 Port Dickson, Negeri Sembilan",
    "postcode": "71050",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 210000,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "987",
    "title": "2 Storey Terrace House",
    "address": "No. 2047, Jalan RJ 2/27, Taman Rasah Jaya, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 330000,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "840 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1kZv29DthQRe4BUjXdxzICN1lMGumEs0E&sz=w800",
      "https://drive.google.com/thumbnail?id=1yYW_v03nncFf9JgzSwZkWbYANWmuckgo&sz=w800",
      "https://drive.google.com/thumbnail?id=1aGaxR4gvFRn2O_-qqMdaFnbZmU96v3kp&sz=w800"
    ]
  },
  {
    "id": "988",
    "title": "1 Storey Semi Detached House",
    "address": "No. 16, Jalan TTJS 6/D, Taman Tuanku Jaafar, 71450 Seremban, Negeri Sembilan",
    "postcode": "71450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 400000,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "809 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1gYPM59kK9_sx4ISuC21TNodle7HfoKby&sz=w800"
    ]
  },
  {
    "id": "989",
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
    "id": "990",
    "title": "2 Storey Terrace House",
    "address": "No. 301, Jalan Hijayu 3/14, Hijayu 3, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 459000,
    "auctionDate": "9 Sep 2026 (Wed)",
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
    "id": "991",
    "title": "2 Storey Terrace House",
    "address": "No. 221, Jalan Laman Sendayan 1A/5, Laman Sendayan, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 405000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "300 sq.ft",
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
    "id": "992",
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
    "id": "993",
    "title": "1 Storey Terrace House",
    "address": "Jalan Tasik Senangin 16/12, Bandar Tasik Senangin, 71750 Lenggeng, Negeri Sembilan",
    "postcode": "71750",
    "state": "Negeri Sembilan",
    "area": "Lenggeng",
    "reservePrice": 360000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1nhM7zphX0EDYJFO8UzKHHxWvVT-1ie63&sz=w800"
    ]
  },
  {
    "id": "994",
    "title": "2 Storey Terrace House",
    "address": "No. 6262, Jalan SJ 5/10, Taman Seremban Jaya, 70450 Seremban, Negeri Sembilan",
    "postcode": "70450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 340000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "550 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1x5qa4tzadNrbPLYnuJqAQEvFsK_-kiB6&sz=w800",
      "https://drive.google.com/thumbnail?id=1kkx413dPRxjPpbzMsTOPGBu8s2Fq743R&sz=w800"
    ]
  },
  {
    "id": "995",
    "title": "Flat",
    "address": "Unit No. M2/5/10, Flat Taman Andalas, 71700 Mantin, Negeri Sembilan",
    "postcode": "71700",
    "state": "Negeri Sembilan",
    "area": "Mantin",
    "reservePrice": 23200,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "650 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "996",
    "title": "2 Storey Terrace House",
    "address": "Jalan Suriaman 3/8, Suriaman 3, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 520000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "684 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1tLpQnqQjR0AX-lgYHl8F-rhv_E7DyVFt&sz=w800",
      "https://drive.google.com/thumbnail?id=1-a2q43KaD5drsWu587ZhonHMmPlqS2Rz&sz=w800"
    ]
  },
  {
    "id": "997",
    "title": "2 Storey Terrace House",
    "address": "No. 31, Jalan Sena 1/8, Taman Sena, Sungai Gadut, 71450 Seremban, Negeri Sembilan",
    "postcode": "71450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 515000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "208 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1nXuwn_C-I0lvxOSuiHmfzzKkaIK4cswS&sz=w800"
    ]
  },
  {
    "id": "998",
    "title": "1 Storey Terrace House",
    "address": "No. 182, Jalan CU 6, Taman Chembong Utama, 71300 Rembau, Negeri Sembilan",
    "postcode": "71300",
    "state": "Negeri Sembilan",
    "area": "Rembau",
    "reservePrice": 230000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "450 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "999",
    "title": "1 Storey Terrace House",
    "address": "No. 570, Jalan Bukit Mutiara 13, Taman Bukit Mutiara, 70200, Seremban, Negeri Sembilan",
    "postcode": "70200",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 340000,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "058 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "1000",
    "title": "1 Storey Terrace House",
    "address": "No. 1148, Jalan Bil 39, Taman Indera Bayu Lukut, 71010, Port Dickson, Negeri Sembilan",
    "postcode": "71010",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 260000,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "120 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1NzpokR03hf6GtJzT9qg1JXRIIEsGfG-Y&sz=w800",
      "https://drive.google.com/thumbnail?id=1TtdFr94rJc4mdli1Wt7YH_5IzeMu3_0g&sz=w800",
      "https://drive.google.com/thumbnail?id=1gkZdKabziqlIzawraO6beVPwcUJa_d3f&sz=w800"
    ]
  },
  {
    "id": "1001",
    "title": "1 Storey Terrace House",
    "address": "No. 373, Jalan Desa PD 2/6, Taman Desa PD, 71200 Port Dickson, Negeri Sembilan",
    "postcode": "71200",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 170000,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "888 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=17Dc93rKtf4cUtlxOVvgQtMNIK0I1tK_L&sz=w800",
      "https://drive.google.com/thumbnail?id=1_VgjMs_3X9aXEwqqsYe1aWqT3tvzEVHp&sz=w800"
    ]
  },
  {
    "id": "1002",
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
    "id": "1003",
    "title": "Apartment",
    "address": "Unit No. 7B-5-19, Pangsapuri Palm Court, Jalan Seri Tanjung Pinang, 10470 Tanjong Pinang, Penang",
    "postcode": "10470",
    "state": "Penang",
    "area": "Tanjong Pinang",
    "reservePrice": 177147,
    "auctionDate": "6 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "657 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1004",
    "title": "1 Storey Terrace House",
    "address": "No. 5, Solok Kalui, Seberang Jaya, 13700 Perai, Penang",
    "postcode": "13700",
    "state": "Penang",
    "area": "Perai",
    "reservePrice": 230000,
    "auctionDate": "6 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "227 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1005",
    "title": "Flat",
    "address": "Unit No. 4-G-15, Tingkat Seri Genting 1, 11000 Balik Pulau, Penang",
    "postcode": "11000",
    "state": "Penang",
    "area": "Balik Pulau",
    "reservePrice": 145800,
    "auctionDate": "6 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "495 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1006",
    "title": "Apartment",
    "address": "Unit No. 5-09-07, Villa Kejora, Hilir Paya Terubong 2, Relau, 11900 Bayan Lepas, Penang",
    "postcode": "11900",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 234900,
    "auctionDate": "6 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "699 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1007",
    "title": "Flat",
    "address": "Unit No. 330-15-03, Jalan Bukit Gambir, Taman Gambir, 11700 Gelugor, Penang",
    "postcode": "11700",
    "state": "Penang",
    "area": "Gelugor",
    "reservePrice": 135000,
    "auctionDate": "6 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "473 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1008",
    "title": "Apartment",
    "address": "Unit No. 1-11-7, Jalan Tapah (Taman Sri Bunga), 11600 Jelutong, Penang",
    "postcode": "11600",
    "state": "Penang",
    "area": "Jelutong",
    "reservePrice": 315000,
    "auctionDate": "6 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "700 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1009",
    "title": "Condominium",
    "address": "Unit No. 1D-20-5, Sunny Ville, Jalan Batu Uban, 11700 Gelugor, Penang",
    "postcode": "11700",
    "state": "Penang",
    "area": "Gelugor",
    "reservePrice": 450000,
    "auctionDate": "6 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "001 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1010",
    "title": "2 Storey Terrace House",
    "address": "No. 1, Lintang Mawar 1, Taman Mawar, 12300 Butterworth, Penang",
    "postcode": "12300",
    "state": "Penang",
    "area": "Butterworth",
    "reservePrice": 950000,
    "auctionDate": "6 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "110 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1011",
    "title": "1 Storey Terrace House",
    "address": "No. 80, Jalan Sepadu Jaya 2, Taman Sepadu Jaya, 13300 Tasek Gelugor, Penang",
    "postcode": "13300",
    "state": "Penang",
    "area": "Tasek Gelugor",
    "reservePrice": 350000,
    "auctionDate": "6 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "496 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1012",
    "title": "Apartment",
    "address": "Unit No. 23-7-10, Lintang Batu Lancang, Taman Seri Damai, 11600 Jelutong, Penang",
    "postcode": "11600",
    "state": "Penang",
    "area": "Jelutong",
    "reservePrice": 141750,
    "auctionDate": "6 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "571 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1013",
    "title": "Apartment",
    "address": "Unit No. 1A-17-7, Desa Bayan, Jalan Merbah, 11900 Bayan Lepas, Penang",
    "postcode": "11900",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 330000,
    "auctionDate": "6 Jul 2026 (Mon)",
    "landArea": "—",
    "builtUp": "710 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1014",
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
    "id": "1015",
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
    "id": "1016",
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
    "id": "1017",
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
    "id": "1018",
    "title": "Apartment",
    "address": "Unit No. 42-2037, Tiara View, Jalan Loh Poh Heng, 11200 Tanjung Bunga, Penang",
    "postcode": "11200",
    "state": "Penang",
    "area": "Tanjung Bunga",
    "reservePrice": 400000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "883 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1019",
    "title": "Flat",
    "address": "Unit No. 15-3-13, Tingkat Paya Terubong 3, Taman Terubong Jaya, 11060 Paya Terubong, Penang",
    "postcode": "11060",
    "state": "Penang",
    "area": "Paya Terubong",
    "reservePrice": 87480,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "549 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1020",
    "title": "1 Storey Semi Detached House",
    "address": "No. 101, Taman Setia, 06700 Pendang, Kedah",
    "postcode": "06700",
    "state": "Kedah",
    "area": "Pendang",
    "reservePrice": 209525,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "172 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1021",
    "title": "Industrial Land with Factory",
    "address": "Lot 150, Batu 9 1/2, Mukim Jabi, Off Jalan Pokok Sena, 06400 Pokok Sena, Kedah",
    "postcode": "06400",
    "state": "Kedah",
    "area": "Pokok Sena",
    "reservePrice": 1395000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "548 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1022",
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
    "id": "1023",
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
    "id": "1024",
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
    "id": "1025",
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
    "id": "1026",
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
    "id": "1027",
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
    "id": "1028",
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
    "id": "1029",
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
    "id": "1030",
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
    "id": "1031",
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
    "id": "1032",
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
    "id": "1033",
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
    "id": "1034",
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
    "id": "1035",
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
    "id": "1036",
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
    "id": "1037",
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
    "id": "1038",
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
    "id": "1039",
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
    "id": "1040",
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
    "id": "1041",
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
    "id": "1042",
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
    "id": "1043",
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
    "id": "1044",
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
    "id": "1045",
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
    "id": "1046",
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
    "id": "1047",
    "title": "Apartment",
    "address": "Unit No. 8A-39-7, Persiaran Mahsuri, MUZE at PICC, 11950, Bayan Lepas, Penang",
    "postcode": "11950",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 1400000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "475 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1048",
    "title": "Walk Up Flat",
    "address": "Unit No. 52-2-2, Jalan Hassan Abbas, MK. 1, Teluk Bahang, 11050, Penang",
    "postcode": "11050",
    "state": "Penang",
    "area": "Penang",
    "reservePrice": 180000,
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
    "id": "1049",
    "title": "Apartment",
    "address": "Unit No. 1C-23A-08, Jalan Lembah, Ideal Residency, 11700 Glugor, Penang",
    "postcode": "11700",
    "state": "Penang",
    "area": "Glugor",
    "reservePrice": 450000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "850 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1050",
    "title": "Apartment",
    "address": "Unit No. 2B1-15-12, Ideal Venice Residency, Lorong Lembah 3, 11700 Gelugor, Penang",
    "postcode": "11700",
    "state": "Penang",
    "area": "Gelugor",
    "reservePrice": 450000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "850 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1051",
    "title": "Apartment",
    "address": "Unit No. 55B-030-12, Tree O, Jalan Sungai Ara 10, 11900 Bayan Lepas, Penang",
    "postcode": "11900",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 430000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "883 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1052",
    "title": "Flat",
    "address": "Unit No. 42A-4-15, Sri Saujana, Gat Lebuh Macallum, 10300, Penang",
    "postcode": "10300",
    "state": "Penang",
    "area": "Penang",
    "reservePrice": 230000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "646 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1053",
    "title": "Apartment",
    "address": "Unit No. 5-7-1, Lebuh Bukit Kecil 6, MK 12, 11900 Bayan Lepas, Penang",
    "postcode": "11900",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 230000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "581 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1054",
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
    "id": "1055",
    "title": "1 Storey Semi Detached House",
    "address": "No. 162, Jalan Kenanga 7/3, Bandar Amanjaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 368145,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "481 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1056",
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
    "id": "1057",
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
    "id": "1058",
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
    "id": "1059",
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
    "id": "1060",
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
    "id": "1061",
    "title": "Retail Lot",
    "address": "Unit No. F12, First Floor, Kompleks SP Plaza, Jalan Ibrahim, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 60000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "452 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1062",
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
    "id": "1063",
    "title": "1 Storey Semi Detached House",
    "address": "No. 119, Jalan SP Height 5, SP Heights, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 270000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "637 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1064",
    "title": "1 Storey Terrace House",
    "address": "No. 2043, Lorong Kenari 10/3, Taman Kenari V, 09000 Kulim, Kedah",
    "postcode": "09000",
    "state": "Kedah",
    "area": "Kulim",
    "reservePrice": 320000,
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
    "id": "1065",
    "title": "2 Storey Terrace House",
    "address": "No. 504, Jalan Saujana 1, Bandar SP Saujana, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 262440,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "880 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1066",
    "title": "2 Storey Terrace House",
    "address": "No. 1110, Lorong Permai Utama 33, Taman Permai Utama, 08300 Gurun, Kedah",
    "postcode": "08300",
    "state": "Kedah",
    "area": "Gurun",
    "reservePrice": 355000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1067",
    "title": "Terrace House",
    "address": "No. 573, Lorong 4, Taman Nilam, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 55000,
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
    "id": "1068",
    "title": "2 Storey Terrace House",
    "address": "No. 62, Jalan PR1MA 2, PR1MA Residensi Utama, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 370000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1069",
    "title": "Terrace House",
    "address": "No. 86B, Jalan Desa Aman 1, Taman Desa Aman, 08100 Sungai Lalang, Kedah",
    "postcode": "08100",
    "state": "Kedah",
    "area": "Sungai Lalang",
    "reservePrice": 250000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "260 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1070",
    "title": "1 Storey Terrace House",
    "address": "No. 9, Jalan Kemboja 31/A, Bandar Amanjaya, 08000, Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 170100,
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
    "id": "1071",
    "title": "2 Storey Terrace House",
    "address": "No. 232, Lorong Senangin 2, Taman Senangin, 09000, Kulim, Kedah",
    "postcode": "09000",
    "state": "Kedah",
    "area": "Kulim",
    "reservePrice": 380000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "098 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1072",
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
    "id": "1073",
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
    "id": "1074",
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
    "id": "1075",
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
    "id": "1076",
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
    "id": "1077",
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
    "id": "1078",
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
    "id": "1079",
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
    "id": "1080",
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
    "id": "1081",
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
    "id": "1082",
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
    "id": "1083",
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
    "id": "1084",
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
    "id": "1085",
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
    "id": "1086",
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
    "id": "1087",
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
    "id": "1088",
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
    "id": "1089",
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
    "id": "1090",
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
    "id": "1091",
    "title": "1 Storey Terrace House",
    "address": "No. 139, Jalan Salad 4, Taman Salad, 09600, Kedah",
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
    "id": "1092",
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
    "id": "1093",
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
    "id": "1094",
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
    "id": "1095",
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
    "id": "1096",
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
    "id": "1097",
    "title": "1 Storey Terrace House",
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
    "id": "1098",
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
    "id": "1099",
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
    "id": "1100",
    "title": "Apartment",
    "address": "Unit No. B-1-23, Block B, Jalan Saujana 4, Pangsapuri Amanjaya, Bandar SP Saujana, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 135000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "752 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1101",
    "title": "1 Storey Semi Detached House",
    "address": "No. 153, Jalan SP Heights 5, SP Heights, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 222750,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "637 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1102",
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
    "id": "1103",
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
    "id": "1104",
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
    "id": "1105",
    "title": "2 Storey Town House",
    "address": "Unit No. 3-66, Tingkat Atas, Jalan Bunga Tongkeng, 10470, Penang",
    "postcode": "10470",
    "state": "Penang",
    "area": "Penang",
    "reservePrice": 533000,
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
    "id": "1106",
    "title": "1 Storey Terrace House",
    "address": "No. 11, Lorong Merak 41, Taman Merak, 14100 Simpang Ampat, Penang",
    "postcode": "14100",
    "state": "Penang",
    "area": "Simpang Ampat",
    "reservePrice": 265000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "784 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1107",
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
    "id": "1108",
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
    "id": "1109",
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
    "id": "1110",
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
    "id": "1111",
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
    "id": "1112",
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
    "id": "1113",
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
    "id": "1114",
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
    "id": "1115",
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
    "id": "1116",
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
    "id": "1117",
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
    "id": "1118",
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
    "id": "1119",
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
    "id": "1120",
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
    "id": "1121",
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
    "id": "1122",
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
    "id": "1123",
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
    "id": "1124",
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
    "id": "1125",
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
    "id": "1126",
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
    "id": "1127",
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
    "id": "1128",
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
    "id": "1129",
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
    "id": "1130",
    "title": "2 Storey Terrace House",
    "address": "No. 1292, Jalan Bandar Puteri Jaya 2/24, Section 2, Bandar Puteri Jaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 236196,
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
    "id": "1131",
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
    "id": "1132",
    "title": "1 Storey Semi Detached House",
    "address": "No. 7, Lorong 4, Taman Sutera, 08000 Sungai Petani, Kedah",
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
    "id": "1133",
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
    "id": "1134",
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
    "id": "1135",
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
    "id": "1136",
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
    "id": "1137",
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
    "id": "1138",
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
    "id": "1139",
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
    "id": "1140",
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
    "id": "1141",
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
    "id": "1142",
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
    "id": "1143",
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
    "id": "1144",
    "title": "Terrace House",
    "address": "Lorong Seri Kijang 17, Taman Seri Kijang, 14000 Bukit Mertajam, Penang",
    "postcode": "14000",
    "state": "Penang",
    "area": "Bukit Mertajam",
    "reservePrice": 300000,
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
    "id": "1145",
    "title": "2 Storey Semi Detached House",
    "address": "No. 25, Lorong Villa Mutiara 1, Villa Mutiara, Bandar Tasek Mutiara, 14120 Simpang Ampat, Penang",
    "postcode": "14120",
    "state": "Penang",
    "area": "Simpang Ampat",
    "reservePrice": 660000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "154 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1146",
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
    "id": "1147",
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
    "id": "1148",
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
    "id": "1149",
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
    "id": "1150",
    "title": "1 Storey Semi Detached House",
    "address": "No. 308, Lorong Mesra 15, Taman Ria Mesra, 08300 Gurun, Kedah",
    "postcode": "08300",
    "state": "Kedah",
    "area": "Gurun",
    "reservePrice": 450000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "553 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1151",
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
    "id": "1152",
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
    "id": "1153",
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
    "id": "1154",
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
    "id": "1155",
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
    "id": "1156",
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
    "id": "1157",
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
    "id": "1158",
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
    "id": "1159",
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
    "id": "1160",
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
    "id": "1161",
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
    "id": "1162",
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
    "id": "1163",
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
    "id": "1164",
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
    "id": "1165",
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
    "id": "1166",
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
    "id": "1167",
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
    "id": "1168",
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
    "id": "1169",
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
    "id": "1170",
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
    "id": "1171",
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
    "id": "1172",
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
    "id": "1173",
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
    "id": "1174",
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
    "id": "1175",
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
    "id": "1176",
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
    "id": "1177",
    "title": "Apartment",
    "address": "Unit No. 33-09-3A, Tingkat Bukit Jambul Satu, Mukim 13, 11900 Bayan Lepas, Penang",
    "postcode": "11900",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 306000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "990 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1178",
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
    "id": "1179",
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
    "id": "1180",
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
    "id": "1181",
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
    "id": "1182",
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
    "id": "1183",
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
    "id": "1184",
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
    "id": "1185",
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
    "id": "1186",
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
    "id": "1187",
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
    "id": "1188",
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
    "id": "1189",
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
    "id": "1190",
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
    "id": "1191",
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
    "id": "1192",
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
    "id": "1193",
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
    "id": "1194",
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
    "id": "1195",
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
    "id": "1196",
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
    "id": "1197",
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
    "id": "1198",
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
    "id": "1199",
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
    "id": "1200",
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
    "id": "1201",
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
    "id": "1202",
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
    "id": "1203",
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
    "id": "1204",
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
    "id": "1205",
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
    "id": "1206",
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
    "id": "1207",
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
    "id": "1208",
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
    "id": "1209",
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
    "id": "1210",
    "title": "1 Storey Terrace House",
    "address": "No. 203, Lengkok Perdana 9/1, Bandar Perdana, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 196900,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "277 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1211",
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
    "id": "1212",
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
    "id": "1213",
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
    "id": "1214",
    "title": "2 Storey Semi Detached House",
    "address": "No. 372, Jalan Puteri Residensi 11, Bandar Puteri Jaya, 08000 Sungai Petani, Kedah",
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
    "id": "1215",
    "title": "Terrace House",
    "address": "No. 628, Lorong Nawa 18,, Bandar Utama, 08000, Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 207000,
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
    "id": "1216",
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
    "id": "1217",
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
    "id": "1218",
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
    "id": "1219",
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
    "id": "1220",
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
    "id": "1221",
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
    "id": "1222",
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
    "id": "1223",
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
    "id": "1224",
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
    "id": "1225",
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
    "id": "1226",
    "title": "2 Storey Semi Detached House",
    "address": "No. 26, Taman Mas Indah, 06550 Alor Setar, Kedah",
    "postcode": "06550",
    "state": "Kedah",
    "area": "Alor Setar",
    "reservePrice": 500000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "748 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1227",
    "title": "2 Storey Semi Detached House",
    "address": "No. 49, Jalan Kelisa 2, Taman Kelisa Phase 2, Lebuhraya Sultanah Bahiyah, 05150 Alor Setar, Kedah",
    "postcode": "05150",
    "state": "Kedah",
    "area": "Alor Setar",
    "reservePrice": 550000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "239 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1228",
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
    "id": "1229",
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
    "id": "1230",
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
    "id": "1231",
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
    "id": "1232",
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
    "id": "1233",
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
    "id": "1234",
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
    "id": "1235",
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
    "id": "1236",
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
    "id": "1237",
    "title": "3 Storey Terrace House",
    "address": "No. 7, Lorong Desa Oren 1, Taman Desa Oren, 13020 Butterworth, Penang",
    "postcode": "13020",
    "state": "Penang",
    "area": "Butterworth",
    "reservePrice": 900000,
    "auctionDate": "30 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "020 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1238",
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
    "id": "1239",
    "title": "2 Storey Semi Detached House",
    "address": "No. 480, Lorong Rambai 2/8, Taman Seri Rambai (Permata Residence), 09000, Kulim, Kedah",
    "postcode": "09000",
    "state": "Kedah",
    "area": "Kulim",
    "reservePrice": 900000,
    "auctionDate": "30 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "017 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1240",
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
    "id": "1241",
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
    "id": "1242",
    "title": "2 Storey Semi Detached House",
    "address": "No. 61, Lorong Eugenia 4, Bukit Banyan, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 750000,
    "auctionDate": "29 Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "595 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1243",
    "title": "Flat",
    "address": "Unit No. G-4, Rumah Pangsa Taman Flora, Kuala Sungai, 06250 Alor Setar, Kedah",
    "postcode": "06250",
    "state": "Kedah",
    "area": "Alor Setar",
    "reservePrice": 115000,
    "auctionDate": "18 Nov 2026 (Wed)",
    "landArea": "—",
    "builtUp": "753 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1244",
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
    "id": "1245",
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
    "id": "1246",
    "title": "1 Storey Terrace House",
    "address": "No. 40, Lorong Bunga Raya 4, Taman Bunga Raya, Padang Serai, Kedah",
    "postcode": "",
    "state": "Kedah",
    "area": "Padang Serai",
    "reservePrice": 150000,
    "auctionDate": "25 Nov 2026 (Wed)",
    "landArea": "—",
    "builtUp": "100 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1247",
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
    "id": "1248",
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
    "id": "1249",
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
    "id": "1250",
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
    "id": "1251",
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
    "id": "1252",
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
    "id": "1253",
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
    "id": "1254",
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
    "id": "1255",
    "title": "Terrace House",
    "address": "Jalan Bukit Flora 2/2, Taman Bukit Flora 2, 83000 Batu Pahat, Johor",
    "postcode": "83000",
    "state": "Johor",
    "area": "Batu Pahat",
    "reservePrice": 380000,
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
    "id": "1256",
    "title": "2 Storey Terrace House",
    "address": "No. 24, Jalan Sri Kluang 33, Taman Sri Kluang, 86000 Kluang, Johor",
    "postcode": "86000",
    "state": "Johor",
    "area": "Kluang",
    "reservePrice": 189000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "770 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1257",
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
    "id": "1258",
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
    "id": "1259",
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
    "id": "1260",
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
    "id": "1261",
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
    "id": "1262",
    "title": "1 Storey Terrace House",
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
    "id": "1263",
    "title": "2 Storey Terrace House",
    "address": "Jalan Nusaria 4/9D, Taman Nusantara, 79150 Iskandar Puteri, Johor",
    "postcode": "79150",
    "state": "Johor",
    "area": "Iskandar Puteri",
    "reservePrice": 370000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "076 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1264",
    "title": "Service Apartment",
    "address": "Unit No. A11-07, Pangsapuri Permata Austin, Jalan Austin Perdana 1, Taman Austin Perdana, 81100 Johor Bahru, Johor",
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
    "id": "1265",
    "title": "Apartment",
    "address": "Unit No. J-04-05, Blok J, Pangsapuri Lily & Jasmine, Jalan Persisiran Titiwangsa Utama, Taman Tampoi Indah, 81200 Johor Bahru, Johor",
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
    "id": "1266",
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
    "id": "1267",
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
    "id": "1268",
    "title": "1 Storey Terrace House",
    "address": "No. 61, Jalan Surian 3, Taman Desaru Utama, 81930 Bandar Penawar, Johor",
    "postcode": "81930",
    "state": "Johor",
    "area": "Bandar Penawar",
    "reservePrice": 300000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1269",
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
    "id": "1270",
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
    "id": "1271",
    "title": "Service Apartment",
    "address": "Unit No. #31-09, Menara A, Pangsapuri Vistana Tropika, Jalan Harimau, Taman Abad, 80250 Johor Bahru, Johor",
    "postcode": "80250",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 580000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "786 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1272",
    "title": "Service Apartment",
    "address": "Unit No. A24-03, Pangsapuri Kempas Indah, Taman Kempas Indah, 81300 Johor Bahru, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 470000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "958 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1273",
    "title": "Service Apartment",
    "address": "Unit No. 03-27, Tingkat 3, Cinta Ayu Resort Apartment, 20KM, Jalan Pontian Lama, 81110 Johor Bahru, Johor",
    "postcode": "81110",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 210000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "797 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1274",
    "title": "2 Storey Terrace House",
    "address": "No. 51, Jalan Kedidi 5, Taman Scientex, 81700 Pasir Gudang, Johor",
    "postcode": "81700",
    "state": "Johor",
    "area": "Pasir Gudang",
    "reservePrice": 290000,
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
    "id": "1275",
    "title": "2 Storey Shop House",
    "address": "No. 30, Jalan Kencana 1A/26, Taman Pura Kencana, Sri Gading, 83300 Batu Pahat, Johor",
    "postcode": "83300",
    "state": "Johor",
    "area": "Batu Pahat",
    "reservePrice": 445500,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "647 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1276",
    "title": "2 Storey Terrace House",
    "address": "No. 1409, Jalan Scientex 27, Taman Scientex, 81030 Kulai, Johor",
    "postcode": "81030",
    "state": "Johor",
    "area": "Kulai",
    "reservePrice": 360000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "960 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1277",
    "title": "2 Storey Terrace House",
    "address": "No. 27, Jalan PI 1/6, Taman Pulai Indah, 81110 Kangkar Pulai, Johor",
    "postcode": "81110",
    "state": "Johor",
    "area": "Kangkar Pulai",
    "reservePrice": 495000,
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
    "id": "1278",
    "title": "Service Apartment",
    "address": "Unit No. 06-07, Blok E, No. 6, Tebrau City Residences, Jalan Harmonium 24/2, Taman Desa Tebrau, 81100 Johor Bahru, Johor",
    "postcode": "81100",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 330000,
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
    "id": "1279",
    "title": "1 Storey Terrace House",
    "address": "No. 44, Jalan SS 6, Taman Sri Saujana, 81900 Kota Tinggi, Johor",
    "postcode": "81900",
    "state": "Johor",
    "area": "Kota Tinggi",
    "reservePrice": 400000,
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
    "id": "1280",
    "title": "Service Apartment",
    "address": "Unit No. A-23-06, Block A, Residensi Laman Lapan, Jalan Sutera Kuning, Taman Sutera, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 454000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "175 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1281",
    "title": "Service Apartment",
    "address": "Unit No. #50-11, Menara A, Pangsapuri Vistana Tropika, Jalan Harimau, Taman Abad, 80250 Johor Bahru, Johor",
    "postcode": "80250",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 630000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "745 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1282",
    "title": "Service Apartment",
    "address": "Unit No. #24-05, Menara B, Residensi Panorama Perbadanan Islam, Jalan Bayu Puteri 2, Taman Bayu Puteri, 80150 Johor Bahru, Johor",
    "postcode": "80150",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 360000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "100 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1283",
    "title": "Apartment",
    "address": "Unit No. #12-03, Block D, Kondominium Mutiara (also known as M Condominium), Jalan Larkin Perdana 2, Taman Larkin Perdana, 80350 Johor Bahru, Johor",
    "postcode": "80350",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 390000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "065 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1284",
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
    "id": "1285",
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
    "id": "1286",
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
    "id": "1287",
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
    "id": "1288",
    "title": "Service Apartment",
    "address": "Unit No. #09-06, Block 11A, Royal Strand, Persiaran Danga Perdana, Country Garden Danga Bay, 80200 Johor Bahru, Johor",
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
    "id": "1289",
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
    "id": "1290",
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
    "id": "1291",
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
    "id": "1292",
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
    "id": "1293",
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
    "id": "1294",
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
    "id": "1295",
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
    "id": "1296",
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
    "id": "1297",
    "title": "Service Apartment",
    "address": "Unit No. C-23-11, Almas Puteri Harbour (Almas Suites), Persiaran Laksamana, Puteri Harbour, 79250 Iskandar Puteri, Johor",
    "postcode": "79250",
    "state": "Johor",
    "area": "Iskandar Puteri",
    "reservePrice": 350000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "520 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1298",
    "title": "2 Storey Terrace House",
    "address": "No. 34, Jalan Kemboja 13, Bandar Bestari Perdana, 81700 Pasir Gudang, Johor",
    "postcode": "81700",
    "state": "Johor",
    "area": "Pasir Gudang",
    "reservePrice": 410000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "170 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1299",
    "title": "Apartment",
    "address": "Unit No. #04-03, Block C, Pangsapuri Persiaran Tanjung, Jalan Persiaran Tanjung, Taman Bukit Alif, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 290000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "958 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1300",
    "title": "Service Apartment",
    "address": "Unit No. #03-03, Blok B, Pangsapuri Setia Tropika, Taman Setia Tropika, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 441000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "227 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1301",
    "title": "Apartment",
    "address": "Unit No. #35-02, Menara B, Larkin Mutiara, Jalan Larkin Perdana 2, Taman Larkin Perdana, 80350 Johor Bahru, Johor",
    "postcode": "80350",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 310000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "742 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1302",
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
    "id": "1303",
    "title": "Service Apartment",
    "address": "Unit No. 18-07, Blok A, Pangsapuri Larkin Idaman, Jalan Idaman 1, Taman Larkin Idaman, 80350 Johor Bahru, Johor",
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
    "id": "1304",
    "title": "2 Storey Terrace Dwelling House",
    "address": "No. 41, Jalan Bestari 28/1, Taman Bestari Indah, 81800 Ulu Tiram, Johor",
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
    "id": "1305",
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
    "id": "1306",
    "title": "2 Storey Shop Office",
    "address": "No. 1, Jalan Murni Jaya 1, Taman Murni Jaya, 81850 Layang - Layang, Johor",
    "postcode": "81850",
    "state": "Johor",
    "area": "Layang - Layang",
    "reservePrice": 291600,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "468 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1307",
    "title": "2 Storey Terrace House",
    "address": "No. 22, Jalan Laman Citra 18, Laman Citra, 81500, Johor",
    "postcode": "81500",
    "state": "Johor",
    "area": "Johor",
    "reservePrice": 650000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "359 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1308",
    "title": "1 Storey Terrace House",
    "address": "No. 2, Jalan Bestari 22/1, Taman Bestari Indah 1, 81800 Ulu Tiram, Johor",
    "postcode": "81800",
    "state": "Johor",
    "area": "Ulu Tiram",
    "reservePrice": 630000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "311 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1309",
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
    "id": "1310",
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
    "id": "1311",
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
    "id": "1312",
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
    "id": "1313",
    "title": "Agricultural Land",
    "address": "Lot 1079, Kampung Selumpur Jalan Lebuhraya Kuantan, Kampung Selumpur, 85000 Segamat, Johor",
    "postcode": "85000",
    "state": "Johor",
    "area": "Segamat",
    "reservePrice": 63772.92,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1314",
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
    "id": "1315",
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
    "id": "1316",
    "title": "Terrace House",
    "address": "Jalan Bestari 25/3, Taman Bestari Indah, 81800 Ulu Tiram, Johor",
    "postcode": "81800",
    "state": "Johor",
    "area": "Ulu Tiram",
    "reservePrice": 300000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1317",
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
    "id": "1318",
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
    "id": "1319",
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
    "id": "1320",
    "title": "Apartment",
    "address": "Unit No. 03-07, Blok D, Persiaran Tanjung Apartment, Jalan Persiaran Tanjung, Taman Bukit Alif, 81200 Johor Bahru, Johor",
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
    "id": "1321",
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
    "id": "1322",
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
    "id": "1323",
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
    "id": "1324",
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
    "id": "1325",
    "title": "1 Storey Terrace House",
    "address": "Jalan Mutiara 17, Taman Abadi, 81800 Ulu Tiram, Johor",
    "postcode": "81800",
    "state": "Johor",
    "area": "Ulu Tiram",
    "reservePrice": 420000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "390 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1326",
    "title": "1 Storey Terrace House",
    "address": "Jalan Rawa 1, Taman Perling, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 440000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "668 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1327",
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
    "id": "1328",
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
    "id": "1329",
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
    "id": "1330",
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
    "id": "1331",
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
    "id": "1332",
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
    "id": "1333",
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
    "id": "1334",
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
    "id": "1335",
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
    "id": "1336",
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
    "id": "1337",
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
    "id": "1338",
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
    "id": "1339",
    "title": "3 Storey Shop Office",
    "address": "No. 10, Jalan Jati 1, Taman Nusa Bestari Jaya, 79150 Iskandar Puteri, Johor",
    "postcode": "79150",
    "state": "Johor",
    "area": "Iskandar Puteri",
    "reservePrice": 2340000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "679 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1340",
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
    "id": "1341",
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
    "id": "1342",
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
    "id": "1343",
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
    "id": "1344",
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
    "id": "1345",
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
    "id": "1346",
    "title": "2 Storey Terrace House",
    "address": "No. 633, Jalan Scientex Jaya 14, Taman Scientex Senai, 81400 Senai, Johor",
    "postcode": "81400",
    "state": "Johor",
    "area": "Senai",
    "reservePrice": 450000,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "389 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1347",
    "title": "1 Storey Terrace House",
    "address": "No. 52, Jalan Putera Indah 9/17, Taman Putera Indah, Tongkang Pechah, 83010 Batu Pahat, Johor",
    "postcode": "83010",
    "state": "Johor",
    "area": "Batu Pahat",
    "reservePrice": 350000,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "086 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1348",
    "title": "Service Apartment",
    "address": "Unit No. 07-02, Blok A, Pangsapuri Puncak Setia, Jalan Setia Tropika 1/21, Taman Setia Tropika, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 390000,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "076 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1349",
    "title": "3 Storey Terrace House",
    "address": "No. 24, Jalan Kempas Utama 1/10, Taman Kempas Utama, 81300 Johor Bahru, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 820000,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "034 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1350",
    "title": "Flat",
    "address": "Unit No. 03-05, Block M, Rumah Pangsa Sri Lanang, Jalan Harmonium, Taman Desa Tebrau, 81100 Johor Bahru, Johor",
    "postcode": "81100",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 200000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "753 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1351",
    "title": "2 Storey Terrace House",
    "address": "No. 10, Jalan Kempas Utama 1/15, Taman Kempas Utama, 81300 Skudai, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Skudai",
    "reservePrice": 595000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1352",
    "title": "2 Storey Cluster House",
    "address": "No. 11, Jalan Kempas Utama 1/45, Taman Kempas Utama, 81300 Johor Bahru, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 1057100,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "939 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1353",
    "title": "2 Storey Terrace House",
    "address": "No. 15, Jalan Nusaria 1/4, Taman Nusantara, 81550 Gelang Patah, Johor",
    "postcode": "81550",
    "state": "Johor",
    "area": "Gelang Patah",
    "reservePrice": 380000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "076 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1354",
    "title": "Service Apartment",
    "address": "Unit No. #06-05, Pangsapuri Lagenda Tasek, Jalan Padi Makmur, Taman Suria Muafakat, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 262500,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "259 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1355",
    "title": "Apartment",
    "address": "Unit No. #08-11, Blok B, Pangsapuri Sri Akasia, Jalan Persisiran Titiwangsa Utama, Taman Tampoi Indah, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 367500,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "088 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1356",
    "title": "Service Apartment",
    "address": "Unit No. 30-01, Block E1, Laman Glasier, Persiaran Aliff Harmoni Utama, Country Garden Sentral, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 255200,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "592 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1357",
    "title": "1 Storey Terrace House",
    "address": "No. 36, Jalan Permatang 19, Taman Desa Jaya, 81100 Johor Bahru, Johor",
    "postcode": "81100",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 440000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1358",
    "title": "2 Storey Cluster House",
    "address": "No. 25, Jalan Bestari 10/3, Taman Nusa Bestari, 79150, Iskandar Puteri, Johor",
    "postcode": "79150",
    "state": "Johor",
    "area": "Iskandar Puteri",
    "reservePrice": 1000000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "702 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1359",
    "title": "2 Storey Terrace House",
    "address": "Jalan Enggang 18, Bandar Putra, 81000 Kulai, Johor",
    "postcode": "81000",
    "state": "Johor",
    "area": "Kulai",
    "reservePrice": 550000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1360",
    "title": "Service Apartment",
    "address": "Unit No. #09-02, Block A, KIP Villa Indah, Jalan Titiwangsa 1, Taman Tampoi Indah, 81200, Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 300000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "850 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1361",
    "title": "2 Storey Terrace House",
    "address": "Jalan Nusa Perintis 9/5, Taman Nusa Perintis 2, 79200 Iskandar Puteri, Johor",
    "postcode": "79200",
    "state": "Johor",
    "area": "Iskandar Puteri",
    "reservePrice": 500000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1362",
    "title": "Apartment",
    "address": "Unit No. #21-11, Blok B, Pangsapuri Permas Ville, Jalan Permas 3, Bandar Baru Permas Jaya, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 351000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "108 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1363",
    "title": "Service Apartment",
    "address": "Unit No. #08-17, Block A, Pangsapuri Kempas Indah, Jalan Kempas Indah, Taman Kempas Indah, 81300, Johor Bahru, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 480000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "367 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1364",
    "title": "Service Apartment",
    "address": "Unit No. #03-09, Pangsapuri Lagenda Tasek, Jalan Padi Makmur, Taman Suria Muafakat, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 360000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "130 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1365",
    "title": "2 Storey Terrace House",
    "address": "No. 165, Jalan Sri Jaya 17, Taman Sri Jaya, 86000 Kluang, Johor",
    "postcode": "86000",
    "state": "Johor",
    "area": "Kluang",
    "reservePrice": 180000,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "230 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1366",
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
    "id": "1367",
    "title": "Terrace House",
    "address": "Jalan Wau Kiki 15, Bandar Layangkasa, 81700 Pasir Gudang, Johor",
    "postcode": "81700",
    "state": "Johor",
    "area": "Pasir Gudang",
    "reservePrice": 410000,
    "auctionDate": "29 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "759 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1368",
    "title": "Terrace House",
    "address": "Jalan Wau Barat 5, Bandar Layangkasa, 81700 Pasir Gudang, Johor",
    "postcode": "81700",
    "state": "Johor",
    "area": "Pasir Gudang",
    "reservePrice": 500000,
    "auctionDate": "30 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "104 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1369",
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
    "id": "1370",
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
    "id": "1371",
    "title": "Semi Detached House",
    "address": "Lot 9307, Lorong Angkasa 1D, Taman Jelita, 98000 Miri, Sarawak",
    "postcode": "98000",
    "state": "Sarawak",
    "area": "Miri",
    "reservePrice": 550000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "196 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1372",
    "title": "1 Storey Terrace House",
    "address": "Lot 5292, Lorong Bukit Berangan 7B2, Off Jalan Datuk Mohammad Musa, 94300 Samarahan, Sarawak",
    "postcode": "94300",
    "state": "Sarawak",
    "area": "Samarahan",
    "reservePrice": 360000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "910 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1373",
    "title": "Apartment",
    "address": "Unit No. B5-03-17, Level 3, Block B5, Sienna Residendes @ Matang, Off 5th Mile, Jalan Matang, 93050 Kuching, Sarawak",
    "postcode": "93050",
    "state": "Sarawak",
    "area": "Kuching",
    "reservePrice": 310000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "850 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1374",
    "title": "1 Storey Terrace House",
    "address": "Lot No. 3647, Lorong Satria 1B3, Taman Desa Satria, Off Jalan Sibu Ulu Oya, 96000 Sibu, Sarawak",
    "postcode": "96000",
    "state": "Sarawak",
    "area": "Sibu",
    "reservePrice": 290000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "574 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1375",
    "title": "3 Storey Terrace ShopHouse",
    "address": "No. 29, Lorong Teku 29, 96000, Sibu, Sarawak",
    "postcode": "96000",
    "state": "Sarawak",
    "area": "Sibu",
    "reservePrice": 1000000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "692 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1376",
    "title": "3 Storey Shop House",
    "address": "Lot 5583, Unijaya Commercial Centre, off Jalan Datuk Mohammad Musa, 94300 Kota Samarahan, Sarawak",
    "postcode": "94300",
    "state": "Sarawak",
    "area": "Kota Samarahan",
    "reservePrice": 792000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "034 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1377",
    "title": "2 Storey Terrace House",
    "address": "Lot 2030, Jalan Desa Intan, Taman Ching Ching, Off Jalan Orang Kaya Setia Raja, 96400 Mukah, Sarawak",
    "postcode": "96400",
    "state": "Sarawak",
    "area": "Mukah",
    "reservePrice": 450000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "019 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1378",
    "title": "2 Storey Terrace House",
    "address": "Lot 2031, Jalan Desa Intan, Taman Ching Ching, Off Jalan Orang Kaya Setia Raja, 96400 Mukah, Sarawak",
    "postcode": "96400",
    "state": "Sarawak",
    "area": "Mukah",
    "reservePrice": 450000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "018 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1379",
    "title": "Dwelling House",
    "address": "No. 25, Taman Heritage, Jalan Tun Rahman Yakup, Petra Jaya, 93050 Kuching, Sarawak",
    "postcode": "93050",
    "state": "Sarawak",
    "area": "Kuching",
    "reservePrice": 560000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "873 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1380",
    "title": "Semi Detached House",
    "address": "Lot. 4596, Golden Villa Garden, Jalan Lutong-Kuala Baram, 98100 Miri, Sarawak",
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
    "id": "1381",
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
    "id": "1382",
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
    "id": "1383",
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
    "id": "1384",
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
    "id": "1385",
    "title": "Semi Detached House",
    "address": "No. 9 (Lot 207), Pakan Pasar, 96100 Pakan, Sarawak",
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
    "id": "1386",
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
    "id": "1387",
    "title": "Land",
    "address": "Lot 3319, Ulu Sungai Danan, Batang Igan, Sibu, Sarawak",
    "postcode": "",
    "state": "Sarawak",
    "area": "Sibu",
    "reservePrice": 67500,
    "auctionDate": "31 Jul 2026 (Fri)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1388",
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
    "id": "1389",
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
    "id": "1390",
    "title": "Apartment",
    "address": "Unit No. 1302-3-27, Second Floor, Taman Suria Jaya Apartment, Off 6th Mile, Jalan Matang, 93050 Kuching, Sarawak",
    "postcode": "93050",
    "state": "Sarawak",
    "area": "Kuching",
    "reservePrice": 80200,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "646 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1391",
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
    "id": "1392",
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
    "id": "1393",
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
    "id": "1394",
    "title": "1 Storey Terrace House",
    "address": "No. 15, King's Park, Jalan Bintulu-Sibu, 97200, Tatau, Sarawak",
    "postcode": "97200",
    "state": "Sarawak",
    "area": "Tatau",
    "reservePrice": 230000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "582 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1395",
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
    "id": "1396",
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
    "id": "1397",
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
    "id": "1398",
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
    "id": "1399",
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
    "id": "1400",
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
    "id": "1401",
    "title": "Dwelling House",
    "address": "Lot 457, Sungai Janting, 96500 Bintangor, Sarawak",
    "postcode": "96500",
    "state": "Sarawak",
    "area": "Bintangor",
    "reservePrice": 405000,
    "auctionDate": "21 Aug 2026 (Fri)",
    "landArea": "—",
    "builtUp": "208 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1402",
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
    "id": "1403",
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
    "id": "1404",
    "title": "Terrace House",
    "address": "Taman Lily, Off Jalan Saratok, 95400 Saratok, Sarawak",
    "postcode": "95400",
    "state": "Sarawak",
    "area": "Saratok",
    "reservePrice": 450000,
    "auctionDate": "2 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1405",
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
    "id": "1406",
    "title": "1 Storey Detached House",
    "address": "Lorong Kampung Semariang Batu 6, Jalan Kampung Semariang Batu, Off Jalan Semariang, 93050 Kuching, Sarawak",
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
    "id": "1407",
    "title": "Apartment",
    "address": "Unit No. 3B, Storey No. 3, Sejinjang Tower, Santubong Suites, Jalan Sultan Tengah, 93050 Kuching, Sarawak",
    "postcode": "93050",
    "state": "Sarawak",
    "area": "Kuching",
    "reservePrice": 340200,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "485 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1408",
    "title": "2 Storey Terrace House",
    "address": "Lorong Desa Ilmu 22F, Taman Desa Ilmu, Off Jalan Datuk Mohammad Musa, 94300, Samarahan, Sarawak",
    "postcode": "94300",
    "state": "Sarawak",
    "area": "Samarahan",
    "reservePrice": 520000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "696 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1409",
    "title": "1 Storey Semi Detached House",
    "address": "Lot 3893, Lorong Desa Ilmu 22, Taman Desa Ilmu, Off Jalan Datuk Mohammad Musa, 94300, Samarahan, Sarawak",
    "postcode": "94300",
    "state": "Sarawak",
    "area": "Samarahan",
    "reservePrice": 550000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "204 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1410",
    "title": "1 Storey Detached House",
    "address": "No. 36, Lorong Sungai Isap Damai 36, Perumahan Sungai Isap Fasa III, 25150 Kuantan, Pahang",
    "postcode": "25150",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 198747.24,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "535 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1411",
    "title": "1 Storey Terrace House",
    "address": "No. 36, Lorong Cendur Makmur 2/7, Perumahan Cendor Makmur, 26100 Kuantan, Pahang",
    "postcode": "26100",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 177147,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "342 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1412",
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
    "id": "1413",
    "title": "1 Storey Terrace House",
    "address": "No. 21, Lorong Pandan Aman 1/20, Perumahan Pandan Aman 1, 25150 Kuantan, Pahang",
    "postcode": "25150",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 306000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "122 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1414",
    "title": "2 Storey Terrace House",
    "address": "No. 85, Jalan Seroja 2, Taman Lipis Baru, 27200 Kuala Lipis, Pahang",
    "postcode": "27200",
    "state": "Pahang",
    "area": "Kuala Lipis",
    "reservePrice": 260000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "141 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1415",
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
    "id": "1416",
    "title": "[Strategic Location] Service Apartment [9 min to Genting Premium Outlet]",
    "address": "Unit No. WA-36-08, Windmill Upon Hills, Genting Permai, 69000 Genting Highlands, Pahang",
    "postcode": "69000",
    "state": "Pahang",
    "area": "Genting Highlands",
    "reservePrice": 373000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "783 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1417",
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
    "id": "1418",
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
    "id": "1419",
    "title": "2 Storey Shop Office",
    "address": "No. A17, Jalan Bandar Gambang 4, Pusat Komersial Bandar Gambang, 26300 Kuantan, Pahang",
    "postcode": "26300",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 639000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "781 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1420",
    "title": "2 Storey Shop Office",
    "address": "No. A19, Jalan Bandar Gambang 4, Pusat Komersial Bandar Gambang, 26300 Kuantan, Pahang",
    "postcode": "26300",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 639000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "781 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1421",
    "title": "1 Storey Terrace House",
    "address": "No. 22, Jalan Saga Indah 1/6, Taman Saga Indah, 28400 Mentakab, Pahang",
    "postcode": "28400",
    "state": "Pahang",
    "area": "Mentakab",
    "reservePrice": 168000,
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
    "id": "1422",
    "title": "1 Storey Terrace House",
    "address": "No. 29, Jalan Merbau Indah 1, Taman Merbau Indah, 28300 Triang, Pahang",
    "postcode": "28300",
    "state": "Pahang",
    "area": "Triang",
    "reservePrice": 180000,
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
    "id": "1423",
    "title": "Terrace House",
    "address": "No. 10, Indera Mahkota 2, Lorong IM 2/78, 25200 Kuantan, Pahang",
    "postcode": "25200",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 262440,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "432 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1424",
    "title": "1 Storey Terrace House",
    "address": "No. 14, Lorong Bukit Rangin Damai 13, Perumahan Bukit Rangin Damai, 25150 Kuantan, Pahang",
    "postcode": "25150",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 230000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1425",
    "title": "[5 min to Pantai Balok] Service Apartment [10 min to Balok town & local eateries]",
    "address": "Unit No. TA-3A-7, Timurbay @ Balok, Jalan Kuantan-Kemaman, 26100 Kuantan, Pahang",
    "postcode": "26100",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 214000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "541 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1426",
    "title": "Apartment",
    "address": "Unit No. A-5-17, Palas Horizon Residence, Palas Horizon, 39100 Kea Farm, Cameron Highlands, Pahang",
    "postcode": "39100",
    "state": "Pahang",
    "area": "Cameron Highlands",
    "reservePrice": 267000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "829 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1427",
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
    "id": "1428",
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
    "id": "1429",
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
    "id": "1430",
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
    "id": "1431",
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
    "id": "1432",
    "title": "1 Storey Terrace House",
    "address": "No. 13, Lorong IM 1/43, Indera Mahkota, 25200 Kuantan, Pahang",
    "postcode": "25200",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 252000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "517 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1433",
    "title": "1 Storey Terrace House",
    "address": "No. 13, Lorong Kampung Padang 34, Perumahan Kampung Padang, Jalan Sungai Lembing, 25200 Kuantan, Pahang",
    "postcode": "25200",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 160000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "633 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1434",
    "title": "2 Storey Terrace House",
    "address": "No. 45, Lorong IM 1/43, Taman Anjung Ceria, 25200 Kuantan, Pahang",
    "postcode": "25200",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 675000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "480 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1435",
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
    "id": "1436",
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
    "id": "1437",
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
    "id": "1438",
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
    "id": "1439",
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
    "id": "1440",
    "title": "1 Storey Terrace House",
    "address": "Jalan Tas 7, Perumahan Tas, 25150 Kuantan, Pahang",
    "postcode": "25150",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 131220,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "080 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1441",
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
    "id": "1442",
    "title": "Land",
    "address": "Lot 939, Jalan Simpang Lubuk Kawah, 28000 Temerloh, Pahang",
    "postcode": "28000",
    "state": "Pahang",
    "area": "Temerloh",
    "reservePrice": 4000000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "793 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1443",
    "title": "2.5 Storey Semi Detached House",
    "address": "Lorong Pelindung 77, Jalan Tengku Muhammad, Taman Pelindung, 25050 Kuantan, Pahang",
    "postcode": "25050",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 1049760,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "952 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1444",
    "title": "Service Apartment",
    "address": "Unit No. WA-27-01, Block A, Windmill Upon Hills, Jalan Permai 2, 69000 Genting Highlands, Pahang",
    "postcode": "69000",
    "state": "Pahang",
    "area": "Genting Highlands",
    "reservePrice": 607500,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "818 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1445",
    "title": "1 Storey Terrace House",
    "address": "No. 14, Jalan Chengal Jaya 3, Taman Chengal Jaya, 28200 Bera, Pahang",
    "postcode": "28200",
    "state": "Pahang",
    "area": "Bera",
    "reservePrice": 160000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1446",
    "title": "1 Storey Terrace House",
    "address": "No. 3, Jalan SKM 2, Taman Seri Kerdau Makmur, 28020 Kerdau, Pahang",
    "postcode": "28020",
    "state": "Pahang",
    "area": "Kerdau",
    "reservePrice": 162000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "646 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1447",
    "title": "2 Storey Shop House",
    "address": "No. 40, Jalan Utama, Bandar Baru, 26800 Kuala Rompin, Pahang",
    "postcode": "26800",
    "state": "Pahang",
    "area": "Kuala Rompin",
    "reservePrice": 387000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "200 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1448",
    "title": "2 Storey Shop Office",
    "address": "No. 2, Jalan Star City 3, Star City, 28400 Mentakab, Pahang",
    "postcode": "28400",
    "state": "Pahang",
    "area": "Mentakab",
    "reservePrice": 594000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "466 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1449",
    "title": "3 Storey Shop Office",
    "address": "No. 22, Jalan Bera Utama 3, Taman Bera Utama, 28300 Triang, Pahang",
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
    "id": "1450",
    "title": "1 Storey Terrace House",
    "address": "No. 8, Jalan Belengu Residence 2/1, Taman Belengu Residence, 28000 Temerloh, Pahang",
    "postcode": "28000",
    "state": "Pahang",
    "area": "Temerloh",
    "reservePrice": 135000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "920 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1451",
    "title": "2 Storey Terrace House",
    "address": "Jalan Pine 3, Taman Pine, 27000 Jerantut, Pahang",
    "postcode": "27000",
    "state": "Pahang",
    "area": "Jerantut",
    "reservePrice": 229635,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "224 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1452",
    "title": "2 Storey Shop Office",
    "address": "No. 20, Lorong Dagangan Sri Jaya Makmur 2, 26500 Maran, Pahang",
    "postcode": "26500",
    "state": "Pahang",
    "area": "Maran",
    "reservePrice": 328050,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "906 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1453",
    "title": "1 Storey Semi Detached House",
    "address": "No. 41, Lorong Karyawan 21, Taman Guru 3, 25150 Kuantan, Pahang",
    "postcode": "25150",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 237000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "219 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1454",
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
    "id": "1455",
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
    "id": "1456",
    "title": "1 Storey Terrace House",
    "address": "No. 9, Lorong Bendera 4B, Taman Bukit Bendera, 28400 Mentakab, Pahang",
    "postcode": "28400",
    "state": "Pahang",
    "area": "Mentakab",
    "reservePrice": 153000,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "100 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1457",
    "title": "1 Storey Terrace House",
    "address": "No. 8, Lorong Seri Mahkota Permai 14, Taman Tunas Mahkota, Batu 11, Jalan Gambang, 26070 Kuantan, Pahang",
    "postcode": "26070",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 140000,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "001 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1458",
    "title": "2.5 Storey Terrace House",
    "address": "No. 37, Jalan Seri Merbau 3, Taman Seri Merbau, 28200 Bandar Bera, Pahang",
    "postcode": "28200",
    "state": "Pahang",
    "area": "Bandar Bera",
    "reservePrice": 605000,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "696 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1459",
    "title": "1 Storey Terrace House",
    "address": "No. 33, Lorong DI 3, Taman Desa Indah, 27000 Jerantut, Pahang",
    "postcode": "27000",
    "state": "Pahang",
    "area": "Jerantut",
    "reservePrice": 189000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "573 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1460",
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
    "id": "1461",
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
    "id": "1462",
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
    "id": "1463",
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
    "id": "1464",
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
    "id": "1465",
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
    "id": "1466",
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
    "id": "1467",
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
    "id": "1468",
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
    "id": "1469",
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
    "id": "1470",
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
    "id": "1471",
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
    "id": "1472",
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
    "id": "1473",
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
    "id": "1474",
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
    "id": "1475",
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
    "id": "1476",
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
      "https://drive.google.com/thumbnail?id=1HppuDQ8RNJEtpRJa5EP_eWpvlu1e5p36&sz=w800"
    ]
  },
  {
    "id": "1477",
    "title": "1 Storey Terrace House",
    "address": "No. JB 4147, Jalan Seri Hilir 1, Taman Seri Hilir, 77500 Selandar, Melaka",
    "postcode": "77500",
    "state": "Melaka",
    "area": "Selandar",
    "reservePrice": 110000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "216 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1478",
    "title": "Apartment",
    "address": "Unit No. D-11-25, Pangsapuri Gadong Harmoni @ Ambience Residence, Jalan Pulau Gadong, 75200, Melaka",
    "postcode": "75200",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 176000,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "689 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1LuIs3Co07uiss6tTvU-J5kumK4aRp6Yq&sz=w800"
    ]
  },
  {
    "id": "1479",
    "title": "1 Storey Terrace House",
    "address": "KL 52, Jalan Kelisa 4, Taman Kelisa, 78200 Kuala Sungai Baru, Melaka",
    "postcode": "78200",
    "state": "Melaka",
    "area": "Kuala Sungai Baru",
    "reservePrice": 180000,
    "auctionDate": "24 Jul 2026 (Fri)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1480",
    "title": "Retail Shop Unit in Elements Mall @ Hatten City, Melaka [5 min to Melaka River Park and Cruise & Mahkota Parade; 6 min to Dataran Pahlawan Melaka Megamall & Jonker Walk]",
    "address": "Unit No. L3-067, Elements Mall @ Hatten City, Jalan Melaka Raya 23, Taman Melaka Raya, 75000, Melaka",
    "postcode": "75000",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 84600,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "522 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1bcKjVyyCeGdDZjU2h3NukWLdLHHrw5t7&sz=w800"
    ]
  },
  {
    "id": "1481",
    "title": "Retail Lot [5 min to Melaka River Park and Cruise & Mahkota Parade; 6 min to Dataran Pahlawan Melaka Megamall & Jonker Walk]",
    "address": "Unit No. L4-085, Elements Mall @ Hatten City, Jalan Melaka Raya 23, Taman Melaka Raya, 75000, Melaka",
    "postcode": "75000",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 31300,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "256 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1bcKjVyyCeGdDZjU2h3NukWLdLHHrw5t7&sz=w800"
    ]
  },
  {
    "id": "1482",
    "title": "Commercial Retail Lot [Located in Melaka Raya; 3 min to Hatten Square & Dataran Pahlawan Melaka Megamall; 5 min to Jonker Walk & Mahkota Parade]",
    "address": "Unit No. F1-093A, Level 1, Imperio Mall @ Hatten City, Jalan Syed Abdul Aziz, Taman Melaka Raya, 75000, Melaka",
    "postcode": "75000",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 37200,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "267 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1KeBmvgF2WJ33wW113Nc6Qa_oQsN9h_0m&sz=w800"
    ]
  },
  {
    "id": "1483",
    "title": "Commercial Retail Lot [5 min to Melaka River Park and Cruise & Mahkota Parade; 6 min to Dataran Pahlawan Melaka Megamall & Jonker Walk]",
    "address": "Unit No. L4-094, 4th Floor, Elements Mall @ Hatten City, Jalan Syed Abdul Aziz, 75000, Melaka",
    "postcode": "75000",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 44500,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "234 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1bcKjVyyCeGdDZjU2h3NukWLdLHHrw5t7&sz=w800"
    ]
  },
  {
    "id": "1484",
    "title": "Retail Shop Unit in Elements Mall @ Hatten City, Melaka [5 min to Melaka River Park and Cruise & Mahkota Parade; 6 min to Dataran Pahlawan Melaka Megamall & Jonker Walk]",
    "address": "Unit No. L4-100, Elements Mall @ Hatten City, Jalan Melaka Raya 23, Taman Melaka Raya, 75000, Melaka",
    "postcode": "75000",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 109800,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "271 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1bcKjVyyCeGdDZjU2h3NukWLdLHHrw5t7&sz=w800"
    ]
  },
  {
    "id": "1485",
    "title": "Stratified Retail Lot [5 min to Melaka River Park and Cruise & Mahkota Parade; 6 min to Dataran Pahlawan Melaka Megamall & Jonker Walk]",
    "address": "Unit No. L1-103, Elements Mall @ Hatten City, Jalan Melaka Raya 23, Taman Melaka Raya, 75000, Melaka",
    "postcode": "75000",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 71500,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "256 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1bcKjVyyCeGdDZjU2h3NukWLdLHHrw5t7&sz=w800"
    ]
  },
  {
    "id": "1486",
    "title": "Stratified Retail Lot [5 min to Melaka River Park and Cruise & Mahkota Parade; 6 min to Dataran Pahlawan Melaka Megamall & Jonker Walk]",
    "address": "Unit No. L1-104, Elements Mall @ Hatten City, Jalan Melaka Raya 23, Taman Melaka Raya, 75000, Melaka",
    "postcode": "75000",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 71500,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "256 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1bcKjVyyCeGdDZjU2h3NukWLdLHHrw5t7&sz=w800"
    ]
  },
  {
    "id": "1487",
    "title": "Stratified Retail Lot [5 min to Melaka River Park and Cruise & Mahkota Parade; 6 min to Dataran Pahlawan Melaka Megamall & Jonker Walk]",
    "address": "Unit No. L3-083, Elements Mall @ Hatten City, Jalan Melaka Raya 23, Taman Melaka Raya, 75000, Melaka",
    "postcode": "75000",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 56100,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "256 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1bcKjVyyCeGdDZjU2h3NukWLdLHHrw5t7&sz=w800"
    ]
  },
  {
    "id": "1488",
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
      "https://drive.google.com/thumbnail?id=1bcKjVyyCeGdDZjU2h3NukWLdLHHrw5t7&sz=w800"
    ]
  },
  {
    "id": "1489",
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
      "https://drive.google.com/thumbnail?id=1bcKjVyyCeGdDZjU2h3NukWLdLHHrw5t7&sz=w800"
    ]
  },
  {
    "id": "1490",
    "title": "Commercial Retail Lot [5 min to Melaka River Park and Cruise & Mahkota Parade; 6 min to Dataran Pahlawan Melaka Megamall & Jonker Walk]",
    "address": "Unit No. L3-043, Elements Mall @ Hatten City, Jalan Melaka Raya 23, Taman Melaka Raya, 75000, Melaka",
    "postcode": "75000",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 62400,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "202 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1bcKjVyyCeGdDZjU2h3NukWLdLHHrw5t7&sz=w800"
    ]
  },
  {
    "id": "1491",
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
      "https://drive.google.com/thumbnail?id=1KeBmvgF2WJ33wW113Nc6Qa_oQsN9h_0m&sz=w800"
    ]
  },
  {
    "id": "1492",
    "title": "Behind to DoubleTree by Hilton Melaka and ElementX Mall Service Apartment Easily accessible via Jalan Melaka Raya 23 and Jalan Syed Abdul Aziz",
    "address": "Unit No. B-34-02, 34th Floor, Block B, Silverscape @ Hatten City, Taman Melaka Raya, 75000, Melaka",
    "postcode": "75000",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 170800,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "767 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1A_wQ72DdLVIiZsw1t0-mPeH6AvFtkuos&sz=w800"
    ]
  },
  {
    "id": "1493",
    "title": "Commercial Retail Lot",
    "address": "Unit No. L2-122, 2nd Floor, Elements Mall @ Hatten City, Jalan Melaka Raya 23, Taman Melaka Raya, 75000, Melaka",
    "postcode": "75000",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 114800,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "284 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1bcKjVyyCeGdDZjU2h3NukWLdLHHrw5t7&sz=w800"
    ]
  },
  {
    "id": "1494",
    "title": "[6 min to Dataran Pahlawan Melaka Megamall & Jonker Walk] Stratified Retail Lot",
    "address": "Unit No. F5-147, Hatten @ Melaka Raya (Imperio Mall), Jalan Syed Abdul Aziz, 75000, Melaka",
    "postcode": "75000",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 52700,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "140 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1KeBmvgF2WJ33wW113Nc6Qa_oQsN9h_0m&sz=w800"
    ]
  },
  {
    "id": "1495",
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
      "https://drive.google.com/thumbnail?id=1MMKWXLI1W9Fk5Td9zCeZZQZ2GcRf2WOD&sz=w800"
    ]
  },
  {
    "id": "1496",
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
      "https://drive.google.com/thumbnail?id=1MMKWXLI1W9Fk5Td9zCeZZQZ2GcRf2WOD&sz=w800"
    ]
  },
  {
    "id": "1497",
    "title": "Stratified Retail Lot",
    "address": "Unit No. L8-048, Elements Mall @ Hatten City, Jalan Melaka Raya 23, Taman Melaka Raya, 75000, Melaka",
    "postcode": "75000",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 82200,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "194 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1bcKjVyyCeGdDZjU2h3NukWLdLHHrw5t7&sz=w800"
    ]
  },
  {
    "id": "1498",
    "title": "Commercial Retail Lot [5 min to Melaka River Park and Cruise & Mahkota Parade; 6 min to Dataran Pahlawan Melaka Megamall & Jonker Walk]",
    "address": "Unit No. L2-166, 2nd Floor, Elements Mall @ Hatten City, Jalan Melaka Raya 23, Taman Melaka Raya, 75000, Melaka",
    "postcode": "75000",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 79700,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "157 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1bcKjVyyCeGdDZjU2h3NukWLdLHHrw5t7&sz=w800"
    ]
  },
  {
    "id": "1499",
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
      "https://drive.google.com/thumbnail?id=1bcKjVyyCeGdDZjU2h3NukWLdLHHrw5t7&sz=w800"
    ]
  },
  {
    "id": "1500",
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
      "https://drive.google.com/thumbnail?id=1bcKjVyyCeGdDZjU2h3NukWLdLHHrw5t7&sz=w800"
    ]
  },
  {
    "id": "1501",
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
      "https://drive.google.com/thumbnail?id=1bcKjVyyCeGdDZjU2h3NukWLdLHHrw5t7&sz=w800"
    ]
  },
  {
    "id": "1502",
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
      "https://drive.google.com/thumbnail?id=1bcKjVyyCeGdDZjU2h3NukWLdLHHrw5t7&sz=w800"
    ]
  },
  {
    "id": "1503",
    "title": "Service Apartment",
    "address": "Unit No. A-08-15, 8th Floor, Regalia Beachfront Residence, Jalan Pantai Kundur, 76400, Melaka",
    "postcode": "76400",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 73000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "398 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1504",
    "title": "Retail Lot",
    "address": "Unit No. L3-005, Element Mall & Hatten City, Jalan Melaka Raya 23, Taman Melaka Raya, 75000, Melaka",
    "postcode": "75000",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 26300,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "154 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1bcKjVyyCeGdDZjU2h3NukWLdLHHrw5t7&sz=w800"
    ]
  },
  {
    "id": "1505",
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
      "https://drive.google.com/thumbnail?id=1peLHoxNX9m0h_7dsliYidhQGPgj2dvze&sz=w800"
    ]
  },
  {
    "id": "1506",
    "title": "Stratified Retail Lot",
    "address": "Unit No. L2-141, 2nd Floor, Hatten City, 75000, Melaka",
    "postcode": "75000",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 118100,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "243 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1bcKjVyyCeGdDZjU2h3NukWLdLHHrw5t7&sz=w800"
    ]
  },
  {
    "id": "1507",
    "title": "Stratified Retail Lot",
    "address": "Unit No. L2-098, Elements Mall @ Hatten City, Jalan Melaka Raya, Taman Melaka Raya, 75000, Melaka",
    "postcode": "75000",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 106300,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "220 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1bcKjVyyCeGdDZjU2h3NukWLdLHHrw5t7&sz=w800"
    ]
  },
  {
    "id": "1508",
    "title": "Service Apartment",
    "address": "Unit No. D-05-17, Pangsapuri Gadong Harmoni @ Ambience Residences, Jalan Pulau Gadong, 75200, Melaka",
    "postcode": "75200",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 153000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "689 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1LuIs3Co07uiss6tTvU-J5kumK4aRp6Yq&sz=w800"
    ]
  },
  {
    "id": "1509",
    "title": "1.5 Storey Detached House",
    "address": "No. 7, Jalan Melati 2, Taman Paya Rumput Perdana, 76450, Melaka",
    "postcode": "76450",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 486000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "004 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1510",
    "title": "Retail Unit with a mezzanine floor",
    "address": "Unit No. C-G-10, Pusat Komersial Ayer Keroh, 75450 Hang Tuah Jaya, Bukit Katil, Melaka",
    "postcode": "75450",
    "state": "Melaka",
    "area": "Bukit Katil",
    "reservePrice": 252000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "626 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1511",
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
      "https://drive.google.com/thumbnail?id=1QQvA2xgjYxYz-7XxndTT76k1EPHdDD7h&sz=w800"
    ]
  },
  {
    "id": "1512",
    "title": "Town House",
    "address": "Unit No. 42A, Jalan LP 14, Taman Limbongan Permai, 75200, Melaka",
    "postcode": "75200",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 140000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "742 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1_Hk-891tY66zQ6nmtWAvznKXcgiROGbj&sz=w800"
    ]
  },
  {
    "id": "1513",
    "title": "Apartment",
    "address": "Unit No. T2-9-3, 9th Floor, Tower 2, PR1MA @ Pokok Mangga, 75250, Melaka",
    "postcode": "75250",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 162000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "850 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1514",
    "title": "Town House (Lower Unit)",
    "address": "No. 10, Jalan LP 9, Taman Limbongan Permai, Klebang Kecil, 75200, Melaka",
    "postcode": "75200",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 175000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "770 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1_Hk-891tY66zQ6nmtWAvznKXcgiROGbj&sz=w800"
    ]
  },
  {
    "id": "1515",
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
      "https://drive.google.com/thumbnail?id=1MMKWXLI1W9Fk5Td9zCeZZQZ2GcRf2WOD&sz=w800"
    ]
  },
  {
    "id": "1516",
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
      "https://drive.google.com/thumbnail?id=13AzXPAPugS3Ba160jNIStBwKBKKFfyi9&sz=w800"
    ]
  },
  {
    "id": "1517",
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
      "https://drive.google.com/thumbnail?id=1InN4fEmca5sdeg0sns6vmkwO2USBeCei&sz=w800"
    ]
  },
  {
    "id": "1518",
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
      "https://drive.google.com/thumbnail?id=1BaBLxmtdX1vfZJ8t6loBUprlWZCQQmg7&sz=w800"
    ]
  },
  {
    "id": "1519",
    "title": "2 Storey Terrace House",
    "address": "No. DT 642, Jalan Nuri 22, Taman Nuri Fasa 3, 76100 Durian Tunggal, Melaka",
    "postcode": "76100",
    "state": "Melaka",
    "area": "Durian Tunggal",
    "reservePrice": 284310,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "274 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1520",
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
      "https://drive.google.com/thumbnail?id=13r1pn2EVJG7At5v5QzDbsKH6g6eaRptZ&sz=w800"
    ]
  },
  {
    "id": "1521",
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
      "https://drive.google.com/thumbnail?id=14Uqft3Zv_5J3HKZ0HvJMXHJ9rDppOLHj&sz=w800"
    ]
  },
  {
    "id": "1522",
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
      "https://drive.google.com/thumbnail?id=1rkQlZ_G3IpPzaGSXnQ6ukkMSxc6ejCx-&sz=w800"
    ]
  },
  {
    "id": "1523",
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
      "https://drive.google.com/thumbnail?id=1McuBeTIQaJRJF0rZ_M5n_KYaWck9SucX&sz=w800"
    ]
  },
  {
    "id": "1524",
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
      "https://drive.google.com/thumbnail?id=1jWamGwaXZ7lIgbW8UNpXb2DBLmRjNTHP&sz=w800"
    ]
  },
  {
    "id": "1525",
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
      "https://drive.google.com/thumbnail?id=1AZwZz_Ed8j2yG7EIKO7oKh3jeJElawct&sz=w800"
    ]
  },
  {
    "id": "1526",
    "title": "2 Storey Terrace House",
    "address": "No. 31, Jalan Krubong Heights 12, Taman Krubong Heights, 75260, Melaka",
    "postcode": "75260",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 480000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1527",
    "title": "1 Storey Semi Detached House",
    "address": "No. DT 26, Jalan Nuri 5, Taman Nuri, 76100 Durian Tunggal, Melaka",
    "postcode": "76100",
    "state": "Melaka",
    "area": "Durian Tunggal",
    "reservePrice": 450000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "448 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1528",
    "title": "2 Storey Terrace House",
    "address": "No. DT 4020, Jalan Angsa Mas 5, Taman Angsa Mas, 76100 Hang Tuah Jaya , Durian Tunggal, Melaka",
    "postcode": "76100",
    "state": "Melaka",
    "area": "Durian Tunggal",
    "reservePrice": 450000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "831 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1529",
    "title": "2 Storey Terrace House",
    "address": "No. 44, Jalan Sejahtera 8, Taman Bukit Tambun Perdana 2, 76100 Durian Tunggal, Melaka",
    "postcode": "76100",
    "state": "Melaka",
    "area": "Durian Tunggal",
    "reservePrice": 270000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "324 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1lIqYyviKugwZxokq9Y4_Ta1PpjKrwtMy&sz=w800"
    ]
  },
  {
    "id": "1530",
    "title": "1 Storey Terrace House",
    "address": "DT 1867, Jalan Angkasa Nuri 24, Taman Angkasa Nuri, 76100 Durian Tunggal, Hang Tuah Jaya, Melaka",
    "postcode": "76100",
    "state": "Melaka",
    "area": "Hang Tuah Jaya",
    "reservePrice": 270000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "300 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1XeHqY0PPI2bI40kkZ2r3odjED9IZVa8S&sz=w800"
    ]
  },
  {
    "id": "1531",
    "title": "Office Lot",
    "address": "Unit No. 2-8, Jalan PM 7, Plaza Mahkota, 75000, Melaka",
    "postcode": "75000",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 170000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "162 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=11KQoFDuZh8Ct42M9tpa9xRF2-4hkcuTS&sz=w800"
    ]
  },
  {
    "id": "1532",
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
      "https://drive.google.com/thumbnail?id=1DOBb1aRGsOPk7tKFB_n_t5PC5mgr5W0e&sz=w800"
    ]
  },
  {
    "id": "1533",
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
      "https://drive.google.com/thumbnail?id=1vnriTywdVlNN3uOpuFDC0XeEJ0kedPf6&sz=w800"
    ]
  },
  {
    "id": "1534",
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
      "https://drive.google.com/thumbnail?id=1XeHqY0PPI2bI40kkZ2r3odjED9IZVa8S&sz=w800"
    ]
  },
  {
    "id": "1535",
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
      "https://drive.google.com/thumbnail?id=17XYBR99uiTgGFGwqjLwDllIek0wMrJz1&sz=w800"
    ]
  },
  {
    "id": "1536",
    "title": "2 Storey Terrace House",
    "address": "No. 25, Jalan Siakap 17, Taman Permatang Pasir Perdana, 75460, Melaka",
    "postcode": "75460",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 432000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "751 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1537",
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
      "https://drive.google.com/thumbnail?id=1ekLfY1h1IVQxGy859i5wa9SnkjGjaLiV&sz=w800"
    ]
  },
  {
    "id": "1538",
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
      "https://drive.google.com/thumbnail?id=1O9aqF3xG2QOTufRiWkdcgrX0WplpEpNE&sz=w800"
    ]
  },
  {
    "id": "1539",
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
      "https://drive.google.com/thumbnail?id=1-pjW_5OxGvqS5qSVUBWgB1AIZ97LypfM&sz=w800"
    ]
  },
  {
    "id": "1540",
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
      "https://drive.google.com/thumbnail?id=1PPikL2t8hh93A9gd0tkINFMqUVDDbrDA&sz=w800"
    ]
  },
  {
    "id": "1541",
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
      "https://drive.google.com/thumbnail?id=1hjKFWBEpAL6VBEdqejskC00pYVXAA5Ri&sz=w800"
    ]
  },
  {
    "id": "1542",
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
      "https://drive.google.com/thumbnail?id=1uN23tCkL9wnkpSnSRMaIFZ37BQ6gqNqn&sz=w800"
    ]
  },
  {
    "id": "1543",
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
      "https://drive.google.com/thumbnail?id=1lIqYyviKugwZxokq9Y4_Ta1PpjKrwtMy&sz=w800"
    ]
  },
  {
    "id": "1544",
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
      "https://drive.google.com/thumbnail?id=1XeHqY0PPI2bI40kkZ2r3odjED9IZVa8S&sz=w800"
    ]
  },
  {
    "id": "1545",
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
      "https://drive.google.com/thumbnail?id=1XXo7qlyApvSDC1ZqOuHFCJO6lM6gbr43&sz=w800"
    ]
  },
  {
    "id": "1546",
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
      "https://drive.google.com/thumbnail?id=1gFYkvD_qI23frjSeWbqj1zlguzRrJ2Zu&sz=w800"
    ]
  },
  {
    "id": "1547",
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
      "https://drive.google.com/thumbnail?id=1lIqYyviKugwZxokq9Y4_Ta1PpjKrwtMy&sz=w800"
    ]
  },
  {
    "id": "1548",
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
      "https://drive.google.com/thumbnail?id=1jWamGwaXZ7lIgbW8UNpXb2DBLmRjNTHP&sz=w800"
    ]
  },
  {
    "id": "1549",
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
      "https://drive.google.com/thumbnail?id=1Lc0LQlikO3ZKeZXDM4LY23vSa9yu8f5l&sz=w800"
    ]
  },
  {
    "id": "1550",
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
      "https://drive.google.com/thumbnail?id=1UruJMMcEa5NzPxr8W8XgMLuqIoOhS2o-&sz=w800"
    ]
  },
  {
    "id": "1551",
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
      "https://drive.google.com/thumbnail?id=1P5C6TfU1_KfdwsAyuOW3ccAUfh9XAdi-&sz=w800"
    ]
  },
  {
    "id": "1552",
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
      "https://drive.google.com/thumbnail?id=1e7Bs6OdylB1zN7XQEEvacD_BeJntqqEI&sz=w800"
    ]
  },
  {
    "id": "1553",
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
      "https://drive.google.com/thumbnail?id=1_cu6I8viB2uSzXRhoA4lM-GtBy5e06cg&sz=w800"
    ]
  },
  {
    "id": "1554",
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
      "https://drive.google.com/thumbnail?id=153ft5js9gmz7LVWypouVUwu5kOkBTmiW&sz=w800"
    ]
  },
  {
    "id": "1555",
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
      "https://drive.google.com/thumbnail?id=1uyQzpZLt1OIrChkt_Y9m29YYNE-6V25n&sz=w800"
    ]
  },
  {
    "id": "1556",
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
      "https://drive.google.com/thumbnail?id=1qq7yEu280UAc-291e6enOqZekE66_vka&sz=w800"
    ]
  },
  {
    "id": "1557",
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
      "https://drive.google.com/thumbnail?id=1TcpW3DPDVwtTsgoxfLB4h70pFw3xZbcO&sz=w800"
    ]
  },
  {
    "id": "1558",
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
      "https://drive.google.com/thumbnail?id=1MBWYkfbBoPexxYNmXVIw0lH_ZdB36Kco&sz=w800"
    ]
  },
  {
    "id": "1559",
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
      "https://drive.google.com/thumbnail?id=1_kTuTldDVC6b5EjrsFxAPwgRn2Mqrwm4&sz=w800"
    ]
  },
  {
    "id": "1560",
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
      "https://drive.google.com/thumbnail?id=1aCq97_rTNCjEbt0kmEQI4z0nfcWbnHhJ&sz=w800"
    ]
  },
  {
    "id": "1561",
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
      "https://drive.google.com/thumbnail?id=13Urh-Q_5xzoksUHZY6xoYyP6Cs5pCZA4&sz=w800"
    ]
  },
  {
    "id": "1562",
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
      "https://drive.google.com/thumbnail?id=1HAbK7UOnTwMGIyW16ZjJBywv19VC2sh5&sz=w800"
    ]
  },
  {
    "id": "1563",
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
      "https://drive.google.com/thumbnail?id=1PJbv0xUiO8GMNL7osDADQgpqKRZaJFDW&sz=w800"
    ]
  },
  {
    "id": "1564",
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
      "https://drive.google.com/thumbnail?id=1tMElE1y_8NZZN6zwL4ueaUwktowFcr84&sz=w800"
    ]
  },
  {
    "id": "1565",
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
      "https://drive.google.com/thumbnail?id=1Ru2Jd1vqjvtJ-GW3-eMfKuzDH7CXH0mz&sz=w800"
    ]
  },
  {
    "id": "1566",
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
      "https://drive.google.com/thumbnail?id=1HAbK7UOnTwMGIyW16ZjJBywv19VC2sh5&sz=w800"
    ]
  },
  {
    "id": "1567",
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
      "https://drive.google.com/thumbnail?id=1uMHgpha0kKjmWJO9aj-NRR1dYEWJI1gV&sz=w800"
    ]
  },
  {
    "id": "1568",
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
      "https://drive.google.com/thumbnail?id=1M6FWq7d0iiG18lDzdH8pQOfR40vnG3j5&sz=w800"
    ]
  },
  {
    "id": "1569",
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
      "https://drive.google.com/thumbnail?id=1GYbsADDd4DD5ypVLRz7xWCr5hIZuxMU2&sz=w800"
    ]
  },
  {
    "id": "1570",
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
      "https://drive.google.com/thumbnail?id=11KQoFDuZh8Ct42M9tpa9xRF2-4hkcuTS&sz=w800"
    ]
  },
  {
    "id": "1571",
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
      "https://drive.google.com/thumbnail?id=1cxEhcUmOApQgR-8b7F-r0oXBLR5CrB4x&sz=w800"
    ]
  },
  {
    "id": "1572",
    "title": "1 Storey Terrace House",
    "address": "MP 373 (PT 436), Jalan Indah 9, Taman Pengkalan Indah, 78000 Alor Gajah, Melaka",
    "postcode": "78000",
    "state": "Melaka",
    "area": "Alor Gajah",
    "reservePrice": 220000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "194 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1573",
    "title": "2 Storey Bungalow",
    "address": "No. 632, Jalan Padi Mahsuri 4, Taman Noorbar, Bukit Serindit, 75400, Melaka",
    "postcode": "75400",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 885735,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "623 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1574",
    "title": "1 Storey Bungalow",
    "address": "No. 154, Jalan Belia 11, Taman Belia Antarabangsa, 75450 Ayer Keroh, Melaka",
    "postcode": "75450",
    "state": "Melaka",
    "area": "Ayer Keroh",
    "reservePrice": 720000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "698 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1575",
    "title": "2 Storey Terrace House",
    "address": "No. 32A, Jalan BU 7, Taman Bachang Utama, 75350, Melaka",
    "postcode": "75350",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 380700,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "616 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1576",
    "title": "Terrace House",
    "address": "No. SU 42, Jalan Bidara Setia 7, Taman Bidara Setia, 78300 Masjid Tanah, Melaka",
    "postcode": "78300",
    "state": "Melaka",
    "area": "Masjid Tanah",
    "reservePrice": 180000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "098 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1577",
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
      "https://drive.google.com/thumbnail?id=1rjXKFVJxtb8GmbBJbF2Rr6tWlAvo91ps&sz=w800"
    ]
  },
  {
    "id": "1578",
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
      "https://drive.google.com/thumbnail?id=1aECvpiUJH0ceXFmt7j9l-c3SZwnR6S0S&sz=w800"
    ]
  },
  {
    "id": "1579",
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
      "https://drive.google.com/thumbnail?id=1moUuNwcylSdUI7-g3J2UbEyZDapL37Kg&sz=w800"
    ]
  },
  {
    "id": "1580",
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
      "https://drive.google.com/thumbnail?id=1eUXMVoLWkidcbhg-D4NL1I8bmEeQpmJP&sz=w800"
    ]
  },
  {
    "id": "1581",
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
      "https://drive.google.com/thumbnail?id=1DOBb1aRGsOPk7tKFB_n_t5PC5mgr5W0e&sz=w800"
    ]
  },
  {
    "id": "1582",
    "title": "1 Storey Terrace House",
    "address": "Jalan BI 4, Taman Bertam Impian, Tanjong Minyak, 76450, Melaka",
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
      "https://drive.google.com/thumbnail?id=1Ru2Jd1vqjvtJ-GW3-eMfKuzDH7CXH0mz&sz=w800"
    ]
  },
  {
    "id": "1583",
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
      "https://drive.google.com/thumbnail?id=1apOu-PoUhR8KavYebod1bIWOA_ofqZ79&sz=w800"
    ]
  },
  {
    "id": "1584",
    "title": "Detached House",
    "address": "No. 6, Jalan Bunga Raya 2, Taman Paya Rumput Perdana, 76450, Melaka",
    "postcode": "76450",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 504000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "004 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1585",
    "title": "2 Storey Semi Detached House",
    "address": "No. 21, Jalan OR 1, Taman Ozana Residen, Bukit Katil, 75450 Hang Tuah Jaya, Melaka",
    "postcode": "75450",
    "state": "Melaka",
    "area": "Hang Tuah Jaya",
    "reservePrice": 720000,
    "auctionDate": "21 Aug 2026 (Fri)",
    "landArea": "—",
    "builtUp": "659 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1_cu6I8viB2uSzXRhoA4lM-GtBy5e06cg&sz=w800"
    ]
  },
  {
    "id": "1586",
    "title": "1 Storey Terrace House",
    "address": "No. 7, Jalan PRI 9, Taman Paya Rumput Indah, Paya Rumput, 75650, Melaka",
    "postcode": "75650",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 177147,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1587",
    "title": "2 Storey Terrace House",
    "address": "JD 2933, Jalan BBP 8, Presint 1, Bandar Botani Parkland, Fasa 1B, 77200 Bemban, Melaka",
    "postcode": "77200",
    "state": "Melaka",
    "area": "Bemban",
    "reservePrice": 372600,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "950 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1588",
    "title": "Condominium",
    "address": "Unit No. B-1-3, Tingkat 1, Block B, Casa Lago Condominium (Formerly known as Kondominium Melaka Raya), Jalan Syed Abdul Aziz, Taman Melaka Raya, 75000, Melaka",
    "postcode": "75000",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 110000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "152 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1589",
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
      "https://drive.google.com/thumbnail?id=1UYmluA9RuLwbtluHbGEV0ZYh6VB_wRyY&sz=w800"
    ]
  },
  {
    "id": "1590",
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
      "https://drive.google.com/thumbnail?id=16AtV4340Vb64VDAGJrgT8eaWeKcyUubO&sz=w800"
    ]
  },
  {
    "id": "1591",
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
      "https://drive.google.com/thumbnail?id=1Up3ZXtIJkWfR1A1HCJVHZgwS49EJ1KCX&sz=w800"
    ]
  },
  {
    "id": "1592",
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
      "https://drive.google.com/thumbnail?id=1xSIq16qJcn4L7UCBLix3YhKhoXMFKJe9&sz=w800"
    ]
  },
  {
    "id": "1593",
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
      "https://drive.google.com/thumbnail?id=1XFkyKpBVNVt0RQepgmvs65kQYFbgUkPW&sz=w800"
    ]
  },
  {
    "id": "1594",
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
      "https://drive.google.com/thumbnail?id=17lJWsu_ubEfS9TSN6DNz7HvBD6U45mKr&sz=w800"
    ]
  },
  {
    "id": "1595",
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
      "https://drive.google.com/thumbnail?id=108PXt0ztiqjHXm5l3Bf3sBF0dhGnxogq&sz=w800"
    ]
  },
  {
    "id": "1596",
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
      "https://drive.google.com/thumbnail?id=1AZwZz_Ed8j2yG7EIKO7oKh3jeJElawct&sz=w800"
    ]
  },
  {
    "id": "1597",
    "title": "1 Storey Terrace House",
    "address": "No. 20, Jalan TM 33, Taman Tanjong Minyak, 75250, Melaka",
    "postcode": "75250",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 250000,
    "auctionDate": "13 Nov 2026 (Fri)",
    "landArea": "—",
    "builtUp": "780 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1598",
    "title": "Terrace House",
    "address": "Jalan Kenanga 3/10A, Taman Kenanga, Seksyen 3, Kampung Lapan, 75200, Melaka",
    "postcode": "75200",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 430000,
    "auctionDate": "20 Nov 2026 (Fri)",
    "landArea": "—",
    "builtUp": "133 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1599",
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
      "https://drive.google.com/thumbnail?id=1a0_Bgu9yBJMvyOZnA5Mz4MT5JCzvHX-7&sz=w800"
    ]
  },
  {
    "id": "1600",
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
    "id": "1601",
    "title": "[5 min to AEON Mall Kota Bharu, KB Mall & Lotus's Kota Bharu] Apartment [6 min to KPJ Perdana Specialist Hospital & Siti Khadijah Market]",
    "address": "Unit No. 06-06, Level 6, Tijani Raja Dewa, Jalan Raja Dewa 4/20, 15150 Kota Bharu, Kelantan",
    "postcode": "15150",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 373000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "084 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1602",
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
    "id": "1603",
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
    "id": "1604",
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
    "id": "1605",
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
    "id": "1606",
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
    "id": "1607",
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
    "id": "1608",
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
    "id": "1609",
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
    "id": "1610",
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
    "id": "1611",
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
    "id": "1612",
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
    "id": "1613",
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
    "id": "1614",
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
    "id": "1615",
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
    "id": "1616",
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
    "id": "1617",
    "title": "1 Storey Bungalow",
    "address": "PT 80, Kampung Paya Dusun Nyior, Jelutong, 16150 Kota Bharu, Kelantan",
    "postcode": "16150",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 920000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "665 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1618",
    "title": "1 Storey Terrace House",
    "address": "Lot 3191, Jalan Batu Jong Luar, Taman Sri Nal, Kuala Nal, 18000 Kuala Krai, Kelantan",
    "postcode": "18000",
    "state": "Kuala Krai",
    "area": "Kuala Krai",
    "reservePrice": 82668.6,
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
    "id": "1619",
    "title": "Service Apartment",
    "address": "Unit No. 3-B-30, Kota Bharu City Point, Bandar Kota Bharu, Seksyen 11, 15000 Kota Bharu, Kelantan",
    "postcode": "15000",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 375000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "936 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1620",
    "title": "Terrace House",
    "address": "Lot 1745 (PT 769), Taman Sri Jaza Labok, Belakang Maahad Syamsul Maarif (L), 18500 Machang, Kelantan",
    "postcode": "18500",
    "state": "Machang",
    "area": "Machang",
    "reservePrice": 145000,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "194 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1621",
    "title": "Terrace House",
    "address": "Lot 6787 (PT 4359), Taman Sri Jaza, Kampung Banggol Petai, 18500 Machang, Kelantan",
    "postcode": "18500",
    "state": "Machang",
    "area": "Machang",
    "reservePrice": 140000,
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
    "id": "1622",
    "title": "Duplex Penthouse",
    "address": "Unit No. B-13-1, Level 18 & 19, Sky Riverfront Service Apartment, Lorong Minyak Gas, 15200 Kota Bharu, Kelantan",
    "postcode": "15200",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 1231200,
    "auctionDate": "28 Jul 2026 (Tue)",
    "landArea": "—",
    "builtUp": "132 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1623",
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
    "id": "1624",
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
    "id": "1625",
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
    "id": "1626",
    "title": "Shop Lot",
    "address": "Parcel No. A-101, Bazaar Wakaf Che Yeh, Jalan Kuala Krai - Kota Bharu, 15050 Kota Bharu, Kelantan",
    "postcode": "15050",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 25000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "40 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1627",
    "title": "2 Storey Detached House",
    "address": "No. C81/1, Jalan Tanah Merah, 18500 Machang, Kelantan",
    "postcode": "18500",
    "state": "Machang",
    "area": "Machang",
    "reservePrice": 540000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "940 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1628",
    "title": "Land",
    "address": "Lot 151 - 159, Kampung Pauh Seratus, 16200 Tumpat, Kelantan",
    "postcode": "16200",
    "state": "Tumpat",
    "area": "Tumpat",
    "reservePrice": 186300,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "069 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1629",
    "title": "1 Storey Semi Detached House",
    "address": "PT 517, Taman Pemuda, 16150 Kota Bharu, Kelantan",
    "postcode": "16150",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 310000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "841 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1630",
    "title": "1 Storey Terrace House",
    "address": "PT 558 (Lot 3402), Taman Jintan, Mukim Jabo, Jalan Chetok-Sungai Keladi, 16070 Pasir Mas, Kelantan",
    "postcode": "16070",
    "state": "Pasir Mas",
    "area": "Pasir Mas",
    "reservePrice": 130000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "152 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1631",
    "title": "2 Storey Detached House",
    "address": "Lot 104, S/4, Lorong Paya Purnama, Wakaf Mek Zainab, 15350 Kota Bharu, Kelantan",
    "postcode": "15350",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 972000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "127 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1632",
    "title": "1 Storey Terrace House",
    "address": "Lot 1478 (PT. 763), Perumahan Hutan Pasir, Jalan Tok Akil, 16450 Ketereh, Kelantan",
    "postcode": "16450",
    "state": "Ketereh",
    "area": "Ketereh",
    "reservePrice": 90000,
    "auctionDate": "29 Jul 2026 (Wed)",
    "landArea": "—",
    "builtUp": "098 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1633",
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
    "id": "1634",
    "title": "2 Storey Semi Detached House",
    "address": "PT 3470, Jalan Kampung Telok, Mukim Panji, 16100 Kota Bharu, Kelantan",
    "postcode": "16100",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 440000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "702 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1635",
    "title": "2 Storey Detached House",
    "address": "PT 4887, Taman Kota Harmoni, 17500 Tanah Merah, Kelantan",
    "postcode": "17500",
    "state": "Tanah Merah",
    "area": "Tanah Merah",
    "reservePrice": 495000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "070 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1636",
    "title": "2 Storey Detached House",
    "address": "PT. 855 & PT. 920, Kampung Padang Rokma, Taman Alam Jaya Fasa II, 16250 Tumpat, Kelantan",
    "postcode": "16250",
    "state": "Tumpat",
    "area": "Tumpat",
    "reservePrice": 364500,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "801 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1637",
    "title": "2 Storey Terrace House",
    "address": "PT 508, Jalan Guchil Bayam, 15200 Kota Bharu, Kelantan",
    "postcode": "15200",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 141750,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "732 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1638",
    "title": "Terrace House",
    "address": "Lot 873, Jalan KK 1/6A, 16150 Kota Bharu, Kelantan",
    "postcode": "16150",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 198288,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "883 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1639",
    "title": "2 Storey Office Premise",
    "address": "PT 5678 (Lot 21725), Taman Barakah, Jalan Pasir Mas, 17500 Tanah Merah, kelantan",
    "postcode": "21725",
    "state": "Tanah Merah",
    "area": "Tanah Merah",
    "reservePrice": 261000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1640",
    "title": "2 Storey Bungalow House",
    "address": "Lot 1680, Jalan Sek Saniah, 16800 Pasir Puteh, Kelantan",
    "postcode": "16800",
    "state": "Pasir Puteh",
    "area": "Pasir Puteh",
    "reservePrice": 510300,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "285 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1641",
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
    "id": "1642",
    "title": "1 Storey Bungalow",
    "address": "PT 7026, Kampung Kepas, Taman Sri Megah, 17000 Pasir Mas, Kelantan",
    "postcode": "17000",
    "state": "Pasir Mas",
    "area": "Pasir Mas",
    "reservePrice": 138174,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "026 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1643",
    "title": "1 Storey Detached House",
    "address": "PT 12998, Taman Anjung Jelatok, Kampung Jelatok, Jalan Pasir Mas, 17500 Tanah Merah, Kelantan",
    "postcode": "12998",
    "state": "Tanah Merah",
    "area": "Tanah Merah",
    "reservePrice": 330000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "445 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1644",
    "title": "Shop Lot",
    "address": "Lot 3993, Jalan Sultan Sulaiman, 20000 Bandar Kuala Terengganu, Terengganu",
    "postcode": "20000",
    "state": "Terengganu",
    "area": "Bandar Kuala Terengganu",
    "reservePrice": 1902690,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "196 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1645",
    "title": "1 Storey Semi Detached House",
    "address": "Lot 7242, Kampung Tebing Tembah, Kuala Paka, 23100 Dungun, Terengganu",
    "postcode": "23100",
    "state": "Terengganu",
    "area": "Dungun",
    "reservePrice": 229635,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "952 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1646",
    "title": "2 Storey Bungalow House",
    "address": "No. 1680, Taman Seri Desa, Bukit Chendering, 21080 Kuala Terengganu, Terengganu",
    "postcode": "21080",
    "state": "Terengganu",
    "area": "Kuala Terengganu",
    "reservePrice": 314928,
    "auctionDate": "23 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "521 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1647",
    "title": "1 Storey Bungalow House",
    "address": "No. 79, RAKR Mengabang Lekor, Batu Rakit, 21020 Kuala Nerus, Terengganu",
    "postcode": "21020",
    "state": "Terengganu",
    "area": "Kuala Nerus",
    "reservePrice": 133923.13,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "498 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1648",
    "title": "1 Storey Bungalow",
    "address": "Lot 60768, Kampung Bukit Kolam, Jalan Jerangau, Ajil, 21800 Hulu Terengganu, Terengganu",
    "postcode": "60768",
    "state": "Terengganu",
    "area": "Hulu Terengganu",
    "reservePrice": 199290.38,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "479 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1649",
    "title": "2 Storey Semi Detached House",
    "address": "Lot 8072, Jalan Air Putih, Taman Makmur Jaya, Batu 2 1/2, 24000 Kemaman, Terengganu",
    "postcode": "24000",
    "state": "Terengganu",
    "area": "Kemaman",
    "reservePrice": 420000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "162 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1650",
    "title": "Land",
    "address": "Lot 50382, Jalan Mak Chili Paya 5D, Taman Mak Chili Paya 1, 24000, Cukai, Terengganu",
    "postcode": "50382",
    "state": "Terengganu",
    "area": "Cukai",
    "reservePrice": 360000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "787 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1651",
    "title": "1 Storey Terrace House",
    "address": "Lot 18580, Jalan Batu Rakit, Taman Jaza Sri Iman, 21020 Kuala Terengganu, Terengganu",
    "postcode": "18580",
    "state": "Terengganu",
    "area": "Kuala Terengganu",
    "reservePrice": 207000,
    "auctionDate": "30 Jul 2026 (Thu)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1652",
    "title": "2 Storey Terrace House",
    "address": "PT 33938, Taman Tembesu Perdana, 21300 Kuala Nerus, Terengganu",
    "postcode": "33938",
    "state": "Terengganu",
    "area": "Kuala Nerus",
    "reservePrice": 400000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1653",
    "title": "2 Storey Terrace House",
    "address": "No. 45, Taman Kalungan Murni, Bukit Datu, 21200 Kuala Terengganu, Terengganu",
    "postcode": "21200",
    "state": "Terengganu",
    "area": "Kuala Terengganu",
    "reservePrice": 200000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "883 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1654",
    "title": "1 Storey Detached House",
    "address": "Lot PT. 29540, Kampung Gong Pak Jin, Bukit Rakit, 21020 Kuala Nerus, Terengganu",
    "postcode": "29540",
    "state": "Terengganu",
    "area": "Kuala Nerus",
    "reservePrice": 450000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "614 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1655",
    "title": "1 Storey Semi Detached House",
    "address": "No. 3652, Lorong Ketapang 2, Taman Kediaman Indah, Bukit Kuang, 24000 Kemaman, Terengganu",
    "postcode": "24000",
    "state": "Terengganu",
    "area": "Kemaman",
    "reservePrice": 240570,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "136 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1656",
    "title": "1 Storey Terrace House",
    "address": "No. 14, Taman Kuala Berang, 21700 Kuala Berang, Terengganu",
    "postcode": "21700",
    "state": "Terengganu",
    "area": "Kuala Berang",
    "reservePrice": 200000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "800 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1657",
    "title": "2 Storey Semi Detached House",
    "address": "Lot 11352, Alur Limbat, Taman Seri Binjai, Fasa III, 21400 Marang, Terengganu",
    "postcode": "11352",
    "state": "Terengganu",
    "area": "Marang",
    "reservePrice": 234900,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "422 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1658",
    "title": "Detached House",
    "address": "Lot 26408, Tok Jembal, Taman KT Golf Resort, 21300 Kuala Nerus, Terengganu",
    "postcode": "26408",
    "state": "Terengganu",
    "area": "Kuala Nerus",
    "reservePrice": 583200,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "393 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1659",
    "title": "2 Storey Semi Detached House",
    "address": "No. 1038-N, Taman Sri Pantai, Jalan Sultan Mahmud, 20400 Kuala Terengganu, Terengganu",
    "postcode": "20400",
    "state": "Terengganu",
    "area": "Kuala Terengganu",
    "reservePrice": 600000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "654 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1660",
    "title": "2 Storey Semi Detached House",
    "address": "Lot 1038M, Taman Sri Pantai, Jalan Sultan Mahmud, 20400 Kuala Terengganu, Terengganu",
    "postcode": "20400",
    "state": "Terengganu",
    "area": "Kuala Terengganu",
    "reservePrice": 500000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "820 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1661",
    "title": "Detached House",
    "address": "Kampung Gong Kuin, Jalan Tok Jembal, 21300 Kuala Terengganu, Terengganu",
    "postcode": "21300",
    "state": "Terengganu",
    "area": "Kuala Terengganu",
    "reservePrice": 600000,
    "auctionDate": "23 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "627 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1662",
    "title": "Shop House",
    "address": "Bangunan MAIDAM, Pekan Batu Enam, 21200, Terengganu",
    "postcode": "21200",
    "state": "Terengganu",
    "area": "Terengganu",
    "reservePrice": 790000,
    "auctionDate": "14 Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "002 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1663",
    "title": "Terrace House",
    "address": "Taman Desa Damai, Kampung Belukar Pak Ra, 21600 Marang, Terengganu",
    "postcode": "21600",
    "state": "Terengganu",
    "area": "Marang",
    "reservePrice": 260000,
    "auctionDate": "4 Nov 2026 (Wed)",
    "landArea": "—",
    "builtUp": "238 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1664",
    "title": "Semi Detached House",
    "address": "Jalan Rengas, Taman Bukit Kuang, 24000 Kemaman, Terengganu",
    "postcode": "24000",
    "state": "Terengganu",
    "area": "Kemaman",
    "reservePrice": 390000,
    "auctionDate": "24 Nov 2026 (Tue)",
    "landArea": "—",
    "builtUp": "969 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1665",
    "title": "Semi Detached House",
    "address": "Jalan Rengas, Taman Bukit Kuang, 24000 Kemaman, Terengganu",
    "postcode": "24000",
    "state": "Terengganu",
    "area": "Kemaman",
    "reservePrice": 330000,
    "auctionDate": "24 Nov 2026 (Tue)",
    "landArea": "—",
    "builtUp": "712 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1666",
    "title": "Detached House",
    "address": "Jalan Mak Chili, Kampung Mak Chili Atas, 24000 Chukai, Terengganu",
    "postcode": "24000",
    "state": "Terengganu",
    "area": "Chukai",
    "reservePrice": 370000,
    "auctionDate": "24 Nov 2026 (Tue)",
    "landArea": "—",
    "builtUp": "734 sq.ft",
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
