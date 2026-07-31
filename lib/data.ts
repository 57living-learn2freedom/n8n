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
    "title": "Retail Lot",
    "address": "Unit No. B-01-05, Ground Floor, Blok B (Vox), Pusat Komersial Southgate, No. 2, Jalan Dua, Off Jalan Chan Sow Lin, 55200, Kuala Lumpur",
    "postcode": "55200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 810000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "206 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=18ZJ2alnqH22ZLWYKutthFFztIvEK8x26&sz=w800"
    ]
  },
  {
    "id": "3",
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
      "https://drive.google.com/thumbnail?id=1td3vCjUufooofPngA9Ldyfhl1m6tSqcQ&sz=w800",
      "https://drive.google.com/thumbnail?id=16eYiPKB25fLb_mSc67pzb0Y8RH4bxxau&sz=w800"
    ]
  },
  {
    "id": "4",
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
      "https://drive.google.com/thumbnail?id=1ehXhv_Ep4-ybG6-tipOT0nwOxCd_8EJZ&sz=w800",
      "https://drive.google.com/thumbnail?id=1grz5SERseJqjziogk_wj-8I4VLi3buxJ&sz=w800"
    ]
  },
  {
    "id": "5",
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
    "id": "6",
    "title": "Condominium",
    "address": "Unit No. A-22-6, Residensi Ascenda, No. 3, Jalan Arena 1, 53200 Setapak, Kuala Lumpur",
    "postcode": "53200",
    "state": "Kuala Lumpur",
    "area": "Setapak",
    "reservePrice": 364500,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "904 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "7",
    "title": "3 Storey Semi Detached House",
    "address": "No. 2, Jalan Dutamas Melor 1, Changkat Kiara (Bayu), 50480, Kuala Lumpur",
    "postcode": "50480",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 4000000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "140 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xSzcv6dLwDLyx1tbgMPusGfjrYfTTfU7&sz=w800"
    ]
  },
  {
    "id": "8",
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
      "https://drive.google.com/thumbnail?id=1vlt3umfimPg3DLT62lzxDJRuNHIaeG9A&sz=w800",
      "https://drive.google.com/thumbnail?id=1eW4tNqtkeKM0FKwCqs7xoaUpqw-sKBuT&sz=w800",
      "https://drive.google.com/thumbnail?id=16f_5ocKRV5BXKSWVTal1sCGG4c21NUSb&sz=w800",
      "https://drive.google.com/thumbnail?id=1GgoVhEVk7p3ov-GljvtBI1MKYkyUwaEe&sz=w800"
    ]
  },
  {
    "id": "9",
    "title": "Shop Lot",
    "address": "No. 25 (Ground Floor), Lorong Sentul Kecil, Off Jalan Sentul, 51100, Kuala Lumpur",
    "postcode": "51100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 1000000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "281 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1kdkDlroDqtDm-RxbpBHD3lhGkZorYiUq&sz=w800"
    ]
  },
  {
    "id": "10",
    "title": "3 Storey Semi Detached House",
    "address": "No. 47, Jalan K7, Amberhill, Taman Melawati, 53100, Kuala Lumpur",
    "postcode": "53100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 1800000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "595 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1Wydo3NbRxKt4wjYIRencX8M0mKaz2fEf&sz=w800"
    ]
  },
  {
    "id": "11",
    "title": "Condominium",
    "address": "Unit No. D-6-3, Tingkat 6, Block D, Residensi Vyne, Jalan 1/108D, 57100 Sungai Besi, Kuala Lumpur",
    "postcode": "57100",
    "state": "Kuala Lumpur",
    "area": "Sungai Besi",
    "reservePrice": 585000,
    "auctionDate": "10 Aug 2026 (Mon)",
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
    "id": "12",
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
    "id": "13",
    "title": "Office Suite",
    "address": "Unit No. A-13A-33, Scott Garden SOHO, Kompleks Rimbunan Scott, No. 289, Jalan Kelang Lama, 58000, Kuala Lumpur",
    "postcode": "58000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 291600,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "764 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1dNwuAer5WlHLQcmQwxfssPhUYgoR0s87&sz=w800",
      "https://drive.google.com/thumbnail?id=1IVQYExclEnNPaYlxcyFeDss3J8odd0HT&sz=w800",
      "https://drive.google.com/thumbnail?id=1CW7HDkmyoz7FPsyuWw72lWW3fbAh-qKV&sz=w800",
      "https://drive.google.com/thumbnail?id=1cucDKfIecpA7r2Cj7RKWmQf07IUXLjoa&sz=w800",
      "https://drive.google.com/thumbnail?id=1ELlch0KYYkfA-pe4rNKnfplQOWH-HnvP&sz=w800",
      "https://drive.google.com/thumbnail?id=1VeJ7qY1feeoBaivb4HgHG7lCGAiq3lTn&sz=w800"
    ]
  },
  {
    "id": "14",
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
      "https://drive.google.com/thumbnail?id=1VBQWmuvutjNIprXFbga1wT9wYY8zC1CA&sz=w800",
      "https://drive.google.com/thumbnail?id=1ZWQL2e5PySNiDPBXMATCNze4Kj0x4tHE&sz=w800",
      "https://drive.google.com/thumbnail?id=1ejeyWcgnvj_xj52n9sq4Y4qP7oXzgzXQ&sz=w800",
      "https://drive.google.com/thumbnail?id=1Y9taOxEAcDhbU4EpUjWunnws4PaGdOfc&sz=w800",
      "https://drive.google.com/thumbnail?id=1fUMy9FXetxTBoaQs6mWdIF4xVkq5H3CC&sz=w800"
    ]
  },
  {
    "id": "15",
    "title": "Land",
    "address": "Lot No 240, Seksyen 63, Bandar Kuala Lumpur, 50450, Kuala Lumpur",
    "postcode": "50450",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 76950000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "327 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1EI0V_qDl22Nz3mwhtBFeinTc0WbeJL6a&sz=w800"
    ]
  },
  {
    "id": "16",
    "title": "SOHO",
    "address": "Unit N. B-18-17, 18th Floor, Block B, The Scott Garden, Kompleks Rimbun Scott Garden, No. 289, Jalan Klang Lama, 58000, Kuala Lumpur",
    "postcode": "58000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 426465,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "764 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1dNwuAer5WlHLQcmQwxfssPhUYgoR0s87&sz=w800",
      "https://drive.google.com/thumbnail?id=1IVQYExclEnNPaYlxcyFeDss3J8odd0HT&sz=w800",
      "https://drive.google.com/thumbnail?id=1CW7HDkmyoz7FPsyuWw72lWW3fbAh-qKV&sz=w800",
      "https://drive.google.com/thumbnail?id=1cucDKfIecpA7r2Cj7RKWmQf07IUXLjoa&sz=w800",
      "https://drive.google.com/thumbnail?id=1ELlch0KYYkfA-pe4rNKnfplQOWH-HnvP&sz=w800",
      "https://drive.google.com/thumbnail?id=1VeJ7qY1feeoBaivb4HgHG7lCGAiq3lTn&sz=w800"
    ]
  },
  {
    "id": "17",
    "title": "Apartment",
    "address": "Unit No. A-18-2, Pangsapuri Mawar, Jalan 7/48A, Sentul Perdana, 51000, Kuala Lumpur",
    "postcode": "51000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 270000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "850 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1DZ7AW7HO8Sa9EbWr3PMUpnx_BwKG383c&sz=w800"
    ]
  },
  {
    "id": "18",
    "title": "Office Unit",
    "address": "Unit No. B-17-17, Tower B, Mercu Summer Suites, No. 8, Jalan Cendana, Off Jalan Sultan Ismail, 50250, Kuala Lumpur",
    "postcode": "50250",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 341000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "495 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "19",
    "title": "Condominium",
    "address": "Unit No. B-23A-05, Residensi Ascenda, Jalan Arena 1, Setapak, 53200, Kuala Lumpur",
    "postcode": "53200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 387000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "20",
    "title": "Service Apartment",
    "address": "Unit No. 3-03, Sucasa Corporate Apartment, No. 2, Jalan Ampang, 50450, Kuala Lumpur",
    "postcode": "50450",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 630000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "21",
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
      "https://drive.google.com/thumbnail?id=1yy_87PnfNnB3D0pS0y1DlTM409FxPmxM&sz=w800",
      "https://drive.google.com/thumbnail?id=1RfyNlzT3uxVI5bC4kO4fKc0dWoqkMqp2&sz=w800",
      "https://drive.google.com/thumbnail?id=1z0_1j3Z8oUm55D9-zP7CrHm2awEq7RQc&sz=w800"
    ]
  },
  {
    "id": "22",
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
    "id": "23",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1d4TqkhQT0jqIdTsrgFBl_Y2r2rj6zRel&sz=w800",
      "https://drive.google.com/thumbnail?id=1M12_PhPVEVoHF0ZhDitMIFF5KNMh75CQ&sz=w800",
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "24",
    "title": "Apartment",
    "address": "Unit No. A-504, Block A, Gugusan Teratai, Jalan Cecawi 6/30, Kota Damansara, 47810 Petaling Jaya, Selangor",
    "postcode": "47810",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 145800,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "753 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "25",
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
      "https://drive.google.com/thumbnail?id=1K38tptOTVIA9Qhmmu2U9cPhSu1NKXjW1&sz=w800",
      "https://drive.google.com/thumbnail?id=1knmlfRz6NVdyyoa9_RJbiCBWj0avYrb2&sz=w800"
    ]
  },
  {
    "id": "26",
    "title": "3 Storey Cluster Town House",
    "address": "Unit No. 42A-2, Jalan D'Alpinia 6, Taman D'Alpinia, 47110 Puchong, Selangor",
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
      "https://drive.google.com/thumbnail?id=1QmQfM4XchdN1zdF2ze3icfXNbrrjan1h&sz=w800",
      "https://drive.google.com/thumbnail?id=12IzfzmMQnPjtnzFCRUXQk0inNCzQWWNz&sz=w800"
    ]
  },
  {
    "id": "27",
    "title": "1 Storey Terrace House",
    "address": "No. 29, Lorong Murni 2, Taman Murni, Sungai Terap, 45500 Tanjung Karang, Selangor",
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
    "id": "28",
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
    "id": "29",
    "title": "2.5 Storey Semi Detached House",
    "address": "No. 16 (PT 53546), Jalan LP 1/5, Taman Lestari Perdana, 43300 Seri Kembangan, Selangor",
    "postcode": "53546",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 1215000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "004 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1YwYt-GaLdUyNg3MM6fk34umwpTQM1LBU&sz=w800"
    ]
  },
  {
    "id": "30",
    "title": "Apartment",
    "address": "Unit No. 1-2-6-A, Blok 1, Jalan Rawang Mutiara 1, Taman Rawang Mutiara, 48000 Rawang, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 144000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "661 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1ky4cNL0_pbgjIB9VGX0it_9QZwcnx-mY&sz=w800"
    ]
  },
  {
    "id": "31",
    "title": "Office Lot",
    "address": "No. 53A, Jalan PSK 6, Pusat Perdagangan Seri Kembangan, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 450000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "013 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "32",
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
      "https://drive.google.com/thumbnail?id=1QK-t9DWAz9gfQ_s3mbyIraPlaMHaDGY-&sz=w800",
      "https://drive.google.com/thumbnail?id=1NJ4nDogiP0iMQ9OhoKaJpo5MDYK45VAh&sz=w800",
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "33",
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
    "id": "34",
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
    "id": "35",
    "title": "Detached House Plot",
    "address": "Lot 2815, Jalan Harmonis, Taman Harmonis, 53100 Gombak, Selangor",
    "postcode": "53100",
    "state": "Selangor",
    "area": "Gombak",
    "reservePrice": 810000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "117 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1GtC9hDJTDH__6DCikNU9m1jR7J1fnpNH&sz=w800"
    ]
  },
  {
    "id": "36",
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
    "id": "37",
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
    "id": "38",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=106vlM-eqBtTwhcaO6Ii01OFCkVdyYy98&sz=w800",
      "https://drive.google.com/thumbnail?id=1xuSMv8JjR_Nq_CLmhD6o98RKt2ELpKJZ&sz=w800"
    ]
  },
  {
    "id": "39",
    "title": "2 Storey Terrace House",
    "address": "No. 32, Jalan Enggang, Bandar Puchong Jaya, 47100 Puchong, Selangor",
    "postcode": "47100",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 750000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "500 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1_xF41Rijq_CLCF83ABmuBTnG0clQEKUP&sz=w800"
    ]
  },
  {
    "id": "40",
    "title": "Apartment",
    "address": "Unit No. B-5-11, Block B, Pangsapuri Belimbing Heights, Jalan Belimbing Indah, Taman Belimbing Indah, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 270000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "861 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=12rCIWbHf7Xu4Pt2tr9C6VAB4Klu70tyo&sz=w800"
    ]
  },
  {
    "id": "41",
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
    "id": "42",
    "title": "Condominium",
    "address": "Unit No. A-20-03, Cova Suite, Jalan Teknologi, PJU 5, Kota Damansara, 47810 Petaling Jaya, Selangor",
    "postcode": "47810",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 440000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "270 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1BFa6VFvpcrbyiCe7opVqBdlxTf1NpP-n&sz=w800"
    ]
  },
  {
    "id": "43",
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
    "id": "44",
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
    "id": "45",
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
    "id": "46",
    "title": "Apartment",
    "address": "Unit No. 3A-11, Blok A, Jalan PJS 3/55, Taman Sri Manja, 46000 Petaling Jaya, Selangor",
    "postcode": "46000",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 200000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "700 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1nLhE9Lc9DXXwxqMbOAH87Os6IwccY94u&sz=w800"
    ]
  },
  {
    "id": "47",
    "title": "2 Storey Terrace House",
    "address": "No. 51, Jalan 4/9C, Seksyen 4, 43650 Bandar Baru Bangi, Selangor",
    "postcode": "43650",
    "state": "Selangor",
    "area": "Bandar Baru Bangi",
    "reservePrice": 652500,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "606 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1sItNrKYFqsPOSHyRdRuWq-doo6ydYMXE&sz=w800"
    ]
  },
  {
    "id": "48",
    "title": "3 Storey Terrace Shop Office",
    "address": "Unit Nos. A-G-9 & A-1-9 & A-2-9, Jalan SP 4/1, Taman Serdang Perdana, Seksyen 4, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 2000000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "324 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1sItNrKYFqsPOSHyRdRuWq-doo6ydYMXE&sz=w800"
    ]
  },
  {
    "id": "49",
    "title": "Apartment",
    "address": "Unit No. 4-4-1, Blok 4, Gugusan Dedap, Jalan Kenyalang 11/1, PJU 5, Kota Damansara, 47810 Petaling Jaya, Selangor",
    "postcode": "47810",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 150000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "667 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=14fQWsNf36BGE_PjOByW1qZdVmPjDm-f8&sz=w800"
    ]
  },
  {
    "id": "50",
    "title": "Apartment",
    "address": "Unit No. C-01-02, Jalan CU 1/A, Taman Cheras Utama, 56000, Kuala Lumpur",
    "postcode": "56000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 230000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "667 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1gLgo3t7uK0WcDWR4tWGpf7iVgsbg8eNH&sz=w800"
    ]
  },
  {
    "id": "51",
    "title": "2 Storey Terrace House",
    "address": "No. 10, Jalan Bayu 1, Taman Desa Sri Bayu, 48000 Rawang, Selangor",
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
    "id": "52",
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
    "id": "53",
    "title": "2 Storey Terrace House",
    "address": "No. 78, Jalan 2, Taman Kajang Baru Sungai Jelok, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 307800,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "863 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "54",
    "title": "Apartment",
    "address": "Unit No. B-5-13, Block B, Pangsapuri Vista Sri Tanjung, Jalan Sri Tanjung 17, Taman Sri Tanjung, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 226800,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "033 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1cyzxPRTOsqpKGw3dx3O3kVMfCd9PJws3&sz=w800",
      "https://drive.google.com/thumbnail?id=1lLjH5bNM9qW32lLAY_0OQynQuVwKR2gD&sz=w800"
    ]
  },
  {
    "id": "55",
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
    "id": "56",
    "title": "Condominium",
    "address": "Unit No. A6-6-7, Block A6, Green Acre Park Condominium, Bandar Sungai Long, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 300000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "012 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=14Z3fWLTYnlnwL1A6F1ZiaPt7RuO6wgpw&sz=w800",
      "https://drive.google.com/thumbnail?id=18apNgPE5bMAoRNa-V81gYFK1lCHC68TH&sz=w800"
    ]
  },
  {
    "id": "57",
    "title": "Apartment",
    "address": "Unit No. B-2-31, Bayu Villa, Jalan Batu Unjur 10, Taman Bayu Perdana, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 243000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "807 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1MMcgqVqxBsYANOJHz8e6jY7uL6L9Wc4R&sz=w800",
      "https://drive.google.com/thumbnail?id=1ZPbW7_yBqsrrQha1TsCXpMi-sB9IwwT5&sz=w800",
      "https://drive.google.com/thumbnail?id=1P79awL1iEcMUOmfCrgGH-GPcR5fkYzNN&sz=w800",
      "https://drive.google.com/thumbnail?id=18drhTMB1jzkjjn0yqvXz5izlC3mwyoqC&sz=w800",
      "https://drive.google.com/thumbnail?id=14ap-hIOTF_ozD5sdlnxRTYSXrbTGLzTD&sz=w800"
    ]
  },
  {
    "id": "58",
    "title": "1 Storey Terrace House",
    "address": "No. 94, Jalan LG3 1/45, Taman Langat Utama 3, Bukit Changgang, 42700 Banting, Selangor",
    "postcode": "42700",
    "state": "Selangor",
    "area": "Banting",
    "reservePrice": 243000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "260 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1SpqPPbOz6ZRHLDo1KM6x9uFN6xHjLXXk&sz=w800"
    ]
  },
  {
    "id": "59",
    "title": "2 Storey Terrace Shop Office",
    "address": "Premises No. 5, Jalan Dato Dagang 39, Taman Sri Sentosa, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 500000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1TkLmOb2XSqNglXYDC0iox-D1hyaZ1pvF&sz=w800"
    ]
  },
  {
    "id": "60",
    "title": "2 Storey Terrace House",
    "address": "No. 11, Jalan SR 2/1D, Taman Saujana Rawang, 48000 Rawang, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 420000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1BsuGPs5OLTs5nMHzJcg1CsFgq3C25xr7&sz=w800"
    ]
  },
  {
    "id": "61",
    "title": "Apartment",
    "address": "Unit No. A-3-02A, Pangsapuri Akasia, Persiaran Kasuarina, Bandar Botanik, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 270000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "753 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1ssdfFnSMOU14fTbupzvu5lQYZVfWkcpC&sz=w800"
    ]
  },
  {
    "id": "62",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1XaEfFrOgJbf0rM3BcZ87PiaWmwamzGuN&sz=w800"
    ]
  },
  {
    "id": "63",
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
    "id": "64",
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
      "https://drive.google.com/thumbnail?id=1ovt_M6dgK5FSeSbXtDpyr8kmnQux42pZ&sz=w800"
    ]
  },
  {
    "id": "65",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1PBpuJnNw80IzoaqTQhrDlGwpyHkTDbLF&sz=w800"
    ]
  },
  {
    "id": "66",
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
    "id": "67",
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
    "id": "68",
    "title": "2 Storey Terrace House",
    "address": "No. 26, Jalan Orbit 2/7, Bandar Mahkota Banting, 42700, Banting, Selangor",
    "postcode": "42700",
    "state": "Selangor",
    "area": "Banting",
    "reservePrice": 400000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "163 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1aMpJ-OXEqtqDxYvgGK25JD3qFYvfqt-I&sz=w800"
    ]
  },
  {
    "id": "69",
    "title": "2 Storey Terrace House",
    "address": "No. 45, Jalan Tulip 1B/1, Bukit Sentosa, 48300 Rawang, Selangor",
    "postcode": "48300",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 218700,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JhWYU2mPIULbg8F8xWb-HaYWfKGYp8qr&sz=w800"
    ]
  },
  {
    "id": "70",
    "title": "2 Storey Terrace House",
    "address": "No. 73, Jalan SP7/5, Bandar Saujana Putra, 42610 Jenjarom, Selangor",
    "postcode": "42610",
    "state": "Selangor",
    "area": "Jenjarom",
    "reservePrice": 610000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "800 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1opmDn-3IHZRIO6kT7vQbTMgkBb6qnKHm&sz=w800"
    ]
  },
  {
    "id": "71",
    "title": "2 Storey Cluster Semi Detached House",
    "address": "No. 15, Jalan Aman Perdana 11C/KU5, Taman Aman Perdana, 41050 Klang, Selangor",
    "postcode": "41050",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 850000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1wsF_6_CXR0UpTAjqwXa8emFD_cJ99_8X&sz=w800"
    ]
  },
  {
    "id": "72",
    "title": "Apartment",
    "address": "Unit No. 54-2-20, Rumah Pangsa Kos Rendah Seksyen 7, Jalan Plumbum 7/100A, Seksyen 7, 40000, Shah Alam, Selangor",
    "postcode": "40000",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 180000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "657 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1KQ9dsjb-pPA01ipGu4UBxcEsclkdzqpg&sz=w800"
    ]
  },
  {
    "id": "73",
    "title": "Condominium",
    "address": "Unit No. B-18-05, Juta Mines Kondominium, Jalan Tanmin Permai 1, Balakong, 43300, Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 340000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "216 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1F9AHb0fMFbweyj5lqcjbCDG6-lMy5gd9&sz=w800"
    ]
  },
  {
    "id": "74",
    "title": "3 Storey Semi Detached House",
    "address": "No. 10, Ambrosia @ Kinrara Residensi, Jalan DU 6/2, Taman Damai Utama, 47180 Puchong, Selangor",
    "postcode": "47180",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 2250000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "197 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "75",
    "title": "2 Storey Detached House",
    "address": "No. 3, Jalan Nova U5/95C, Subang Bestari, Seksyen U5, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 1890000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "438 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1iY6fkOF8OnEQQcFsNJ3ZhZluq4DO5zlH&sz=w800"
    ]
  },
  {
    "id": "76",
    "title": "2 Storey Terrace House",
    "address": "No. 77, Jalan Sari Alamanda 8/6, Sari Alamanda, 48000 Rawang, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 700000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "690 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xVk9STf9pZq6mgDH5qXClBBG_68Qk94j&sz=w800"
    ]
  },
  {
    "id": "77",
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
    "id": "78",
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
    "id": "79",
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
    "id": "80",
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
      "https://drive.google.com/thumbnail?id=1dNwuAer5WlHLQcmQwxfssPhUYgoR0s87&sz=w800",
      "https://drive.google.com/thumbnail?id=1IVQYExclEnNPaYlxcyFeDss3J8odd0HT&sz=w800",
      "https://drive.google.com/thumbnail?id=1CW7HDkmyoz7FPsyuWw72lWW3fbAh-qKV&sz=w800",
      "https://drive.google.com/thumbnail?id=1cucDKfIecpA7r2Cj7RKWmQf07IUXLjoa&sz=w800",
      "https://drive.google.com/thumbnail?id=1ELlch0KYYkfA-pe4rNKnfplQOWH-HnvP&sz=w800",
      "https://drive.google.com/thumbnail?id=1VeJ7qY1feeoBaivb4HgHG7lCGAiq3lTn&sz=w800"
    ]
  },
  {
    "id": "81",
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
    "id": "82",
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
      "https://drive.google.com/thumbnail?id=1rVzddYXcbvcHhUg8r4zzn6YpF9YaSNBy&sz=w800",
      "https://drive.google.com/thumbnail?id=1buvTZchulShUpeK7bgogQz9VnuNM9FMR&sz=w800"
    ]
  },
  {
    "id": "83",
    "title": "Apartment",
    "address": "Unit No. 149-2-1, Jalan Matang 2, Taman Sri Kuching, 51200, Kuala Lumpur",
    "postcode": "51200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
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
    "id": "84",
    "title": "Service Apartment",
    "address": "Unit No. D-22-5, Verve Suites, Jalan Kiara 5, Mont Kiara, 50480, Kuala Lumpur",
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
    "id": "85",
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
    "id": "86",
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
    "id": "87",
    "title": "2 Storey Terrace House",
    "address": "No. 15, Lorong Mengkudu Pertama (On Site Is Lorong Mengkudu Satu), Desa Pahlawan), 55000, Kuala Lumpur",
    "postcode": "55000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 1600000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=19GJzg9wx_Yi9Js6lVkLpfk8ppFhdVdc9&sz=w800"
    ]
  },
  {
    "id": "88",
    "title": "Apartment",
    "address": "Unit No. F-13A-7 (On Site F-14-7), Block F, Menara Menjalara, Jalan 1/62B, Bandar Sri Menjalara, 52200, Kuala Lumpur",
    "postcode": "52200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 364500,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "076 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=11pwq1axvpf9HDrD0zrWDK-MffvC4NG76&sz=w800",
      "https://drive.google.com/thumbnail?id=1r_1QAE31P9nTe30MDYu3ObC_I-iArl4k&sz=w800"
    ]
  },
  {
    "id": "89",
    "title": "Service Apartment",
    "address": "Unit No. A-35-3, Residensi 1 Utara, No. 42, Jalan 1/2B, Off Jalan Ipoh, Selayang, 68100, Kuala Lumpur",
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
    "id": "90",
    "title": "Apartment",
    "address": "Unit No. C-35-20, Puncak Sentul, No. 8, Jalan Sentul Perdana, 51000, Kuala Lumpur",
    "postcode": "51000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 360000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "721 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1jyNyNq4QNhtiQUe1SQcPDv_2EfSyYEOg&sz=w800"
    ]
  },
  {
    "id": "91",
    "title": "Condominium",
    "address": "Unit No. C-16-2, Blok C, Endah Regal Condominium, Jalan 3/149E, Taman Sri Endah, 57000, Kuala Lumpur",
    "postcode": "57000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 340000,
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
    "id": "92",
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
    "id": "93",
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
      "https://drive.google.com/thumbnail?id=1K_KR75R-48GLD-OhFovjBCGlf0BjK6gm&sz=w800",
      "https://drive.google.com/thumbnail?id=1zH4z17zJuRs8sFzTTHtSnfJjwIHVmMUf&sz=w800",
      "https://drive.google.com/thumbnail?id=143RRMrPxaV-d7-3K-qnw0OfJKpZ1gsOL&sz=w800"
    ]
  },
  {
    "id": "94",
    "title": "Flat",
    "address": "Unit No. 53-5-8, Blok 53, Lorong 3/125C, Desa Petaling, 57100, Kuala Lumpur",
    "postcode": "57100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 120000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "506 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "95",
    "title": "Condominium",
    "address": "Unit No. 17-3-5, Block 17, Block Canary, Danau Impian Condominium, Jalan 3/109F, Taman Danau Desa, 58100, Kuala Lumpur",
    "postcode": "58100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 300000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "915 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "96",
    "title": "Apartment",
    "address": "Unit No. B-12-11, Block B, Puncak Banyan, Jalan 3/118B, Taman Seri Cendekia, 56000, Kuala Lumpur",
    "postcode": "56000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 252000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "807 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1_tlqOylhwY7Dc3mEKsahp5VnHgijFLS2&sz=w800"
    ]
  },
  {
    "id": "97",
    "title": "Condominium",
    "address": "Unit No. E-8-6, Dover Park Sri Putramas Condominium, Jalan Putramas 1, Off Jalan Kuching, 51200, Kuala Lumpur",
    "postcode": "51200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 380000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "044 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "98",
    "title": "2 Storey Terrace House",
    "address": "No. 22, Jalan 19/154, Taman Bukit Anggerik, 56000, Kuala Lumpur",
    "postcode": "56000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 380000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "689 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "99",
    "title": "Condominium",
    "address": "No. C-35-02, Block C, Damansara Foresta (Fasa 1), Persiaran Meranti, Bandar Sri Damansara, PJU 9, 52200, Kuala Lumpur",
    "postcode": "52200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 720000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "610 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xNecYSevaw5glr4_RxrcA_QkAmUKWoK0&sz=w800",
      "https://drive.google.com/thumbnail?id=1vhh_AydD4ZkTUFRgKRJH0q_RI5Yuu31m&sz=w800"
    ]
  },
  {
    "id": "100",
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
    "id": "101",
    "title": "2 Storey Terrace House",
    "address": "No. 59, Jalan SG 9/30, Taman Sri Gombak, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 248040,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "000 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1KuK6wiSG1DsPkXTBdRoBSwFePsFQS0Fc&sz=w800"
    ]
  },
  {
    "id": "102",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1PzJ0mhjdcJKtjNjFFf1GbVJSGDEjDZfX&sz=w800"
    ]
  },
  {
    "id": "103",
    "title": "Apartment",
    "address": "Unit No. A-03-06, Block A, Pangsapuri Teratai, Taman Puchong Prima, 47150 Puchong, Selangor",
    "postcode": "47150",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 162000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "807 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1joXGh2pmkYundXQ-rPOpvvvJ8VV-x-_I&sz=w800"
    ]
  },
  {
    "id": "104",
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
    "id": "105",
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
    "id": "106",
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
    "id": "107",
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
    "id": "108",
    "title": "3 Storey Shop Office",
    "address": "No. 23A-G & 23A-1 & 23A-2, Kemaris Avenue, Jalan Rawang - Kuala Selangor, 48000 Rawang, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 1305000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "378 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "109",
    "title": "Service Apartment",
    "address": "Unit No. C-10-21, Menara C, PJ Centrestage, No. 1, Jalan 13/1, Seksyen 13, 46100 Petaling Jaya, Selangor",
    "postcode": "46100",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 279000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "581 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1lmRezHh-Js5zdTxgqoxziRp40COjlgh6&sz=w800"
    ]
  },
  {
    "id": "110",
    "title": "Office Unit",
    "address": "Unit No. 4801-2-05, 2nd Floor, Block 4801, CBD Perdana, Cyber 12, 63000 Cyberjaya, Selangor",
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
    "id": "111",
    "title": "2 Storey Terrace House",
    "address": "No. 72, Jalan Az-Zaharah 10/1, Seksyen 10, 42300 Bandar Puncak Alam, Selangor",
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
    "id": "112",
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
    "id": "113",
    "title": "1 Storey Semi Detached House",
    "address": "No. 17, Jalan Cengal 3, Desa Alam Ria, 44300 Batang Kali, Selangor",
    "postcode": "44300",
    "state": "Selangor",
    "area": "Batang Kali",
    "reservePrice": 400000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "660 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1IQ1UeXMqzHajj30hNoZbYwETqMCwHKld&sz=w800"
    ]
  },
  {
    "id": "114",
    "title": "2 Storey Cluster Semi Detached House",
    "address": "Jalan Alam Suria 16/43, Seksyen 16, 42300 Bandar Puncak Alam, Selangor",
    "postcode": "42300",
    "state": "Selangor",
    "area": "Bandar Puncak Alam",
    "reservePrice": 500000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "798 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1NiI99xZcJIF5sModT8zW9C1h383nxvVP&sz=w800"
    ]
  },
  {
    "id": "115",
    "title": "Terrace House",
    "address": "Jalan Bangi Avenue 7/11, Taman Bangi Avenue, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 670000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1h4cKd5WfTpSeiaJJ8eI8_KRZr7sdFH73&sz=w800"
    ]
  },
  {
    "id": "116",
    "title": "2 Storey Terrace House",
    "address": "No. 7, Jalan SU 16, Taman Selayang Utama, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 280000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "866 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=14OM3WcBtuquV2_He13bxcyt5JLzLvLnO&sz=w800"
    ]
  },
  {
    "id": "117",
    "title": "Vacant Land",
    "address": "Lot 12120, Brogaville Horticultural Village, 43500 Semenyih, Selangor",
    "postcode": "12120",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 720000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "956 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1ZYzofZSPw3-WmTJoh9ZYySfcmskMlCEq&sz=w800"
    ]
  },
  {
    "id": "118",
    "title": "3 Storey Terrace House",
    "address": "No. 19, Jalan Barat 6, D' Island Residence, 47130 Puchong, Selangor",
    "postcode": "47130",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 851000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "745 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=17qFp8YrUAu_OvsZq6a-A5sKunn7cqNDI&sz=w800"
    ]
  },
  {
    "id": "119",
    "title": "Service Apartment",
    "address": "Unit No. A-11-05, Tower A, Amerin Residence, Jalan Impian Indah, Taman Impian Indah, 43300, Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 330000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "861 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1yz66i1SQ6W8_ICPb0_GIhVAaQ8az0pqK&sz=w800"
    ]
  },
  {
    "id": "120",
    "title": "3 Storey Terrace House",
    "address": "No. 8, Jalan Timur 1, D'Island Residence, 47130 Puchong, Selangor",
    "postcode": "47130",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 1080000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "048 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=17qFp8YrUAu_OvsZq6a-A5sKunn7cqNDI&sz=w800"
    ]
  },
  {
    "id": "121",
    "title": "2 Storey Bungalow",
    "address": "No. 5, Jalan Puteri 12/2A, Bandar Puteri, 47100, Puchong, Selangor",
    "postcode": "47100",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 6000000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "765 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "122",
    "title": "2 Storey Semi Detached House",
    "address": "No. 10, Jalan DB 2, Taman Desiran Bayu, 47120 Puchong, Selangor",
    "postcode": "47120",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 860000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "800 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1PzJ0mhjdcJKtjNjFFf1GbVJSGDEjDZfX&sz=w800"
    ]
  },
  {
    "id": "123",
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
    "id": "124",
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
    "id": "125",
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
    "id": "126",
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
    "id": "127",
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
    "id": "128",
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
    "id": "129",
    "title": "3 Storey Shop Office",
    "address": "Unit No. F-G-7, F-1-7, F-2-7, Blok F, Connaught Avenue, Jalan 4/142, Alam Damai, 56000, Kuala Lumpur",
    "postcode": "56000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 1800000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "993 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1snZS_DBmFi0oS7r0BGK894v1AfQP1Ryb&sz=w800"
    ]
  },
  {
    "id": "130",
    "title": "3 Storey Shop Office",
    "address": "No. F-G-6 & F-1-6 & F-2-6, Block F, Connaught Avenue, Jalan 4/142, Alam Damai, 56000, Kuala Lumpur",
    "postcode": "56000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 1810000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "993 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1snZS_DBmFi0oS7r0BGK894v1AfQP1Ryb&sz=w800"
    ]
  },
  {
    "id": "131",
    "title": "Service Apartment",
    "address": "Unit No. 33-2, Parkview Service Apartment, No. 5, Changkat Perak, Off Lorong Perak, 50250, Kuala Lumpur",
    "postcode": "50250",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 495000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "660 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1bV17Mseu8_iZDsDsmelVfr-cFkbWqiVH&sz=w800"
    ]
  },
  {
    "id": "132",
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
    "id": "133",
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
      "https://drive.google.com/thumbnail?id=10Wb-LPlpAivZQnfu5_uHChJ4ORQgIYc0&sz=w800"
    ]
  },
  {
    "id": "134",
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
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1ovP1wv1NGP5-Es_JVMgobI4WWbl0Mlnk&sz=w800"
    ]
  },
  {
    "id": "135",
    "title": "Apartment",
    "address": "Unit No. A-13A-12, Block A, Residensi Max Kolam Air, Jalan Kolam Air 6, Kasipillay, 51200, Kuala Lumpur",
    "postcode": "51200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 300000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "904 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=17JY5B96ZdfJF68kcz3dxRsMmrACCnz15&sz=w800"
    ]
  },
  {
    "id": "136",
    "title": "SOHO",
    "address": "Unit No. B-22-32, Blok B, The Scott Garden SOHO, Kompleks Rimbun Scott Garden, Jalan Klang Lama, 58000, Kuala Lumpur",
    "postcode": "58000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 330000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "764 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "137",
    "title": "Service Apartment",
    "address": "Unit No. A-18-3A, Residensi Pano, No. 556, Batu 3 ½, Jalan Ipoh, 51200, Kuala Lumpur",
    "postcode": "51200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 620000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "001 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "138",
    "title": "2 Storey Semi Detached House",
    "address": "No. 11, Jalan Alam Suria 16/70, Seksyen 16, 42300 Bandar Puncak Alam, Selangor",
    "postcode": "42300",
    "state": "Selangor",
    "area": "Bandar Puncak Alam",
    "reservePrice": 445500,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "556 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1NiI99xZcJIF5sModT8zW9C1h383nxvVP&sz=w800"
    ]
  },
  {
    "id": "139",
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
      "https://drive.google.com/thumbnail?id=1ITaH4NGdRTOlAuwFTPirMKBBmHy5AKVR&sz=w800"
    ]
  },
  {
    "id": "140",
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
    "id": "141",
    "title": "1 Storey Terrace House",
    "address": "No. 88, Jalan 14 (Jalan Sri Cahaya 14), Taman Sri Cahaya 2, 45600 Bestari Jaya, Selangor",
    "postcode": "45600",
    "state": "Selangor",
    "area": "Bestari Jaya",
    "reservePrice": 252000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "186 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "142",
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
    "id": "143",
    "title": "Duplex Apartment",
    "address": "Unit No. C6-02-02, Block C6, Andari Townvilla, Jalan SH 2/1, Selayang Heights, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 372600,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "732 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1PynqKvspVIaRuamQ8Dbry5nL8m4ckim2&sz=w800"
    ]
  },
  {
    "id": "144",
    "title": "1 Storey Terrace House",
    "address": "No. 26, Jalan 3, Taman Seri Setia, 45500 Tanjung Karang, Selangor",
    "postcode": "45500",
    "state": "Selangor",
    "area": "Tanjung Karang",
    "reservePrice": 153900,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "300 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1MZA6A9oWKUxVLvMdInN7h993aCPqVuII&sz=w800"
    ]
  },
  {
    "id": "145",
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
    "id": "146",
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
    "id": "147",
    "title": "2 Storey Terrace House",
    "address": "No. 17, Jalan Harmoni 12, Taman Harmoni, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 500000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "646 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1WdG6-6zr8cZrzAKbyHHaCKCOI5Cw8a47&sz=w800"
    ]
  },
  {
    "id": "148",
    "title": "Condominium",
    "address": "Block U1, Ampang Damai 1, Jalan Wawasan 3/8A, Bandar Baru Ampang, 68000 Ampang, Selangor",
    "postcode": "68000",
    "state": "Selangor",
    "area": "Ampang",
    "reservePrice": 240000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "022 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=15fjbHvJJZbMHVtJSajLm40SFChsbYe9h&sz=w800"
    ]
  },
  {
    "id": "149",
    "title": "Condominium",
    "address": "Unit No. A-23-06, Residensi Sembilan Cheras, Jalan Suria Residen, 43200 Cheras, Selangor",
    "postcode": "43200",
    "state": "Selangor",
    "area": "Cheras",
    "reservePrice": 450000,
    "auctionDate": "13 Aug 2026 (Thu)",
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
    "id": "150",
    "title": "2 Storey Semi Detached House",
    "address": "No. 72, Jalan UP 3/2, Taman Ukay Perdana, 68000 Ampang, Selangor",
    "postcode": "68000",
    "state": "Selangor",
    "area": "Ampang",
    "reservePrice": 1170000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "402 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1BUk0Mg2yPVA7aYrexgiDzqhwg6jr_fnQ&sz=w800"
    ]
  },
  {
    "id": "151",
    "title": "Vacant Residential Land",
    "address": "GM 5508 (Lot 45400), Mukim Dengkil, Sepang, Selangor",
    "postcode": "45400",
    "state": "Selangor",
    "area": "Sepang",
    "reservePrice": 441000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "129 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1C-XvX4taoyK8uDhg4TJ8_KaUXO77DD_M&sz=w800"
    ]
  },
  {
    "id": "152",
    "title": "Service Apartment",
    "address": "Unit No. B-22-13, Tower B, Amerin Residence, Jalan Impian Indah, Taman Impian Indah, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 300000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "915 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1yz66i1SQ6W8_ICPb0_GIhVAaQ8az0pqK&sz=w800"
    ]
  },
  {
    "id": "153",
    "title": "Service Apartment",
    "address": "Unit No. F-03-03A, 3rd Floor, Blok F, Residensi Radia, No. 3, Persiaran Singgahsana, Bukit Jelutong, Seksyen U8, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 390000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "700 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=10f3LczV84NW4G0eaUrPhyqZ4Zq5kixYL&sz=w800",
      "https://drive.google.com/thumbnail?id=1FAwl5xoV8EblNCWJnrUeJSwezsA03AFT&sz=w800"
    ]
  },
  {
    "id": "154",
    "title": "2 Storey Semi Detached House",
    "address": "No. 70, Jalan UP 3/2, Taman Ukay Perdana, 68000 Ampang, Selangor",
    "postcode": "68000",
    "state": "Selangor",
    "area": "Ampang",
    "reservePrice": 1170000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "402 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1BUk0Mg2yPVA7aYrexgiDzqhwg6jr_fnQ&sz=w800"
    ]
  },
  {
    "id": "155",
    "title": "Apartment",
    "address": "Unit No. K7-L4-8, Rumah Pangsa Seri Kristana 7, Persiaran Seri Pristana 1, Seri Pristana, 47000 Sungai Buloh, Selangor",
    "postcode": "47000",
    "state": "Selangor",
    "area": "Sungai Buloh",
    "reservePrice": 90000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "657 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=15QpZP62XQA5W1o1VEcHyWujJH8KZuykf&sz=w800"
    ]
  },
  {
    "id": "156",
    "title": "Small Office Home Office (SOHO)",
    "address": "Unit No. 22-03, Alinea Suites, No. 1, Presint 2.8, Jalan Perdagangan 14/4, Seksyen 14, 40000 Shah Alam, Selangor",
    "postcode": "40000",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 250000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "441 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1noO5YJOaU5NLDOg4YzUsjki0wR73viDP&sz=w800"
    ]
  },
  {
    "id": "157",
    "title": "Apartment",
    "address": "Unit No. 1-24-03, Block 1, Aspire Residence, Jalan Aspire 1, Cyber 10, 63000 Cyberjaya, Selangor",
    "postcode": "63000",
    "state": "Selangor",
    "area": "Cyberjaya",
    "reservePrice": 300000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "900 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1XlCbLlbcMw9MGejAPEmu0ycsBsbpqVxH&sz=w800",
      "https://drive.google.com/thumbnail?id=1f-CCX9UBOHUbOxw3mF1uI5XOXqlRKcn_&sz=w800"
    ]
  },
  {
    "id": "158",
    "title": "2 Storey Terrace House",
    "address": "No. 5, Lorong 5/23, Kampung Tasik Tambahan, 68000 Ampang, Selangor",
    "postcode": "68000",
    "state": "Selangor",
    "area": "Ampang",
    "reservePrice": 320000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "159",
    "title": "Apartment",
    "address": "Unit No. E-19-01, Block E, Flora Damansara, No. 1, Jalan PJU 8/9, Bandar Damansara Perdana, 47820 Petaling Jaya, Selangor",
    "postcode": "47820",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 260000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "080 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1ZXY9X5xbn3Ht0ycSW1FGfUoELZlvGXBH&sz=w800",
      "https://drive.google.com/thumbnail?id=1DXd5TJvEjPl111hihvuB2HJ6BHN1dLoU&sz=w800"
    ]
  },
  {
    "id": "160",
    "title": "Condominium",
    "address": "Unit No. 2-18-11, Blok 2, Prima U1, Jalan Kerjaya, Seksyen U1, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 320000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "980 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "161",
    "title": "1 Storey Terrace House",
    "address": "No. 83, Jalan 3, Taman Maju, Jalan Semenyih Kajang, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 250000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "900 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "162",
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
      "https://drive.google.com/thumbnail?id=1vlt3umfimPg3DLT62lzxDJRuNHIaeG9A&sz=w800",
      "https://drive.google.com/thumbnail?id=1eW4tNqtkeKM0FKwCqs7xoaUpqw-sKBuT&sz=w800",
      "https://drive.google.com/thumbnail?id=16f_5ocKRV5BXKSWVTal1sCGG4c21NUSb&sz=w800",
      "https://drive.google.com/thumbnail?id=1GgoVhEVk7p3ov-GljvtBI1MKYkyUwaEe&sz=w800"
    ]
  },
  {
    "id": "163",
    "title": "2 Storey Terrace House",
    "address": "No. 508, Jalan B 12, Taman Melawati, 53100, Kuala Lumpur",
    "postcode": "53100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 1480000,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "500 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1KlxthQyBcyvaZGflJJ-7kZzUHH8NbA3N&sz=w800"
    ]
  },
  {
    "id": "164",
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
    "id": "165",
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
      "https://drive.google.com/thumbnail?id=1yMQYOHP2RP99OFnkAxDtBYZYN4Un-pkB&sz=w800",
      "https://drive.google.com/thumbnail?id=1WuX229Imnfv0mLDOdgSm6hRVmQbfItbu&sz=w800"
    ]
  },
  {
    "id": "166",
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
    "id": "167",
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
    "id": "168",
    "title": "Residential Land Designated for Detached House",
    "address": "Plot 30 (Lot 18283), Jalan UP 2A, Prima Ukay, Saujana Melawati, 53100, Kuala Lumpur",
    "postcode": "18283",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 533000,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "792 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1S6DDXV343VsOitkouH3J5jrOtdveGUu5&sz=w800"
    ]
  },
  {
    "id": "169",
    "title": "Flat",
    "address": "Unit No. D-3-6, Block D, Pangsapuri Rebana, Jalan Gamelan, Bandar Bukit Raja, 41050 Klang, Selangor",
    "postcode": "41050",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 73812,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "657 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1MMvo2a2opY8QRlHkiNoQHw4rNiF-gJTQ&sz=w800"
    ]
  },
  {
    "id": "170",
    "title": "3 Storey Detached House",
    "address": "PT No. 66648, Jalan Cinta Air, Country Heights, 43000 Kajang, Selangor",
    "postcode": "66648",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 1359000,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "736 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1qBJvuFH08m8gqfkoUqP4MW5HrAeq3aWk&sz=w800"
    ]
  },
  {
    "id": "171",
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
    "id": "172",
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
    "id": "173",
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
    "id": "174",
    "title": "Shop Lot",
    "address": "No. 44G, Block 8, Kompleks Otomobil, Jalan Pahat H 15/H, Seksyen 15, 40200 Shah Alam, Selangor",
    "postcode": "40200",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 680000,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1VgxUgTvbdZyolVdwEvFVcYqNRCoLGfIu&sz=w800"
    ]
  },
  {
    "id": "175",
    "title": "2 Storey Terrace House",
    "address": "No. 65, Jalan USJ 6/4, 47610 Subang Jaya, Selangor",
    "postcode": "47610",
    "state": "Selangor",
    "area": "Subang Jaya",
    "reservePrice": 630000,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "017 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13jTRLrU67Sb77czfLTZuWZuLUtRXpP2Y&sz=w800"
    ]
  },
  {
    "id": "176",
    "title": "2 Storey Linked House",
    "address": "No. 12, Jalan Gambus 13C (Solok Gambus 13C), Taman Desawan, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 350000,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "829 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1foz1a8FcehIsY3_oVXw5i_0410HynSf-&sz=w800"
    ]
  },
  {
    "id": "177",
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
    "id": "178",
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
    "id": "179",
    "title": "2 Storey Terrace House",
    "address": "No. 45, Jalan Aruna 5, M Aruna, 48000 Rawang, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 379080,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "700 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=18LGdGi84lEv9PosNvqGYKdjWVgw7ERO1&sz=w800",
      "https://drive.google.com/thumbnail?id=1G6RDz2tUDn-pbqJZHOgrxOEFaeiKstLt&sz=w800",
      "https://drive.google.com/thumbnail?id=1htOoeNlp1R6_o5ekuo9BWv0afQxbrm6O&sz=w800",
      "https://drive.google.com/thumbnail?id=12Ok8bHaXNBZionTrq3P_lnzBcqf-KYWV&sz=w800",
      "https://drive.google.com/thumbnail?id=1SgEOp5Jb5AuXsqg1CWq-T7nwvC0RRa5j&sz=w800",
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "180",
    "title": "Apartment",
    "address": "Unit No. 7-1-01, Jalan SP 4/3, Rumah Pangsa Impian, 42610 Bandar Saujana Putra, Jenjarom, Selangor",
    "postcode": "42610",
    "state": "Selangor",
    "area": "Jenjarom",
    "reservePrice": 185000,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "635 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=12_MP-Pn_IMcf-dlErYzZmkxpAXFnf1Sb&sz=w800"
    ]
  },
  {
    "id": "181",
    "title": "Town House",
    "address": "Unit No. 37-2, Challis Damansara, Jalan PJU 3/30, Sunway Damansara, 47810 Petaling Jaya, Selangor",
    "postcode": "47810",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 1050000,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "734 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1mPnjajnfkww9cdFH1Z1jSlUrTV0lpNpo&sz=w800"
    ]
  },
  {
    "id": "182",
    "title": "2 Storey Terrace House",
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
    "id": "183",
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
    "id": "184",
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
    "id": "185",
    "title": "3 Storey Cluster Semi Detached House",
    "address": "No. 35, Jalan Setia Utama U13/37C, Setia Alam, 40170 Shah Alam, Selangor",
    "postcode": "40170",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 1300000,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "240 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1bzG4NYOyKNgTP9D1rFsjHpYp3sooV4xS&sz=w800"
    ]
  },
  {
    "id": "186",
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
    "id": "187",
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
      "https://drive.google.com/thumbnail?id=1XwwKUrlXuLWUEbiE-QncpVIMZ9-hQ6xc&sz=w800"
    ]
  },
  {
    "id": "188",
    "title": "2 Storey Terrace House",
    "address": "No. 11, Jalan Kilauan 9/2A, Taman Kilauan, 45600 Bestari Jaya, Selangor",
    "postcode": "45600",
    "state": "Selangor",
    "area": "Bestari Jaya",
    "reservePrice": 120000,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "790 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1iJ1ziXrt6qjSBgQlUyfXxBDRMxUb8cix&sz=w800"
    ]
  },
  {
    "id": "189",
    "title": "2 Storey Terrace House",
    "address": "No. 464, Jalan Samudra Timur 5, Taman Samudra, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 500000,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "580 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=16XQ9AYqo6c2M1pgXwQk_HKgsalcyEgmk&sz=w800"
    ]
  },
  {
    "id": "190",
    "title": "2 Storey Terrace House",
    "address": "No. 28, Jalan Mat Kilau 35/79, Alam Impian, Seksyen 35, 40470 Shah Alam, Selangor",
    "postcode": "40470",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 840000,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "600 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1pFgFQKWwZae7LneXF9-b6FApODwZZ_05&sz=w800"
    ]
  },
  {
    "id": "191",
    "title": "Service Apartment",
    "address": "Unit No. C-13-3A, Blok C, Pangsapuri East Lake, Persiaran Serdang Perdana, Taman Serdang Perdana, Seksyen 3, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 284000,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "130 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "192",
    "title": "Apartment",
    "address": "Unit No. B-19-3, Block B, Villa Lagenda, Jalan 4/2B, Taman Desa Bakti, 68100, Kuala Lumpur",
    "postcode": "68100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 631800,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "100 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "193",
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
    "id": "194",
    "title": "Service Apartment",
    "address": "Unit No. B-10-23, Kompleks Danau Kota, Taman Zeta @ Zetapark, 67, Jalan Taman Ibu Kota, Setapak, 53300, Kuala Lumpur",
    "postcode": "53300",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 550000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "281 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1f2rZMSDOYfXIHQhnJDm0b5Izs-G0eDDU&sz=w800",
      "https://drive.google.com/thumbnail?id=18d7hO_dwHMUOyfBeHtbUZciVBTqzT9_U&sz=w800"
    ]
  },
  {
    "id": "195",
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
      "https://drive.google.com/thumbnail?id=19fxOQrFYtMENX-sDjKD9MyFnlwV5C528&sz=w800",
      "https://drive.google.com/thumbnail?id=14wLLaUj8-g5WRl_vnT4BIlNhZMxR-Fu1&sz=w800",
      "https://drive.google.com/thumbnail?id=1vHrr5huIJOVCc4iizRSfOPYtsA2qFDUJ&sz=w800",
      "https://drive.google.com/thumbnail?id=1Tkz55HqDQAvq4_LF4DM_n30Y9Mq6eVO1&sz=w800",
      "https://drive.google.com/thumbnail?id=1VuiD4B04ei-mPGEL49k7ic8I_06xf672&sz=w800",
      "https://drive.google.com/thumbnail?id=11u0MwgbasIbJeU-ug7jgi6C3SjRVqbLV&sz=w800"
    ]
  },
  {
    "id": "196",
    "title": "Small Office Home Office (SOHO)",
    "address": "Unit No. S-19-23, Block S, Astrum Ampang, Jalan Enggang, Taman Keramat, 54200, Kuala Lumpur",
    "postcode": "54200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 230000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "280 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "197",
    "title": "Apartment",
    "address": "Unit No. E-2-5 (9-2-5), Block E, AC4, Jalan Taman Seri Sentosa, Taman Seri Sentosa, Off Jalan Klang Lama, 58000, Kuala Lumpur",
    "postcode": "58000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 230000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "775 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "198",
    "title": "Small Office Home Office (SOHO)",
    "address": "Unit No. S-35-23, Astrum Ampang, Lorong Enggang 2, Taman Keramat, 54200, Kuala Lumpur",
    "postcode": "54200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 190000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "280 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "199",
    "title": "3 Storey Terrace House",
    "address": "No. 5-7, Anjung Damai, Jalan Murni, 55000, Kuala Lumpur",
    "postcode": "55000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 2000000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1BQ0r6LuzTdeNJ9mHj-fuNgV_8LJUvMiT&sz=w800"
    ]
  },
  {
    "id": "200",
    "title": "2 Storey Terrace House",
    "address": "No. 24, Jalan Prima 7/9, Taman Puchong Prima, 47150 Puchong, Selangor",
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
    "id": "201",
    "title": "2 Storey Detached House",
    "address": "No. 103, Jalan Impian Gemilang 3/3, Saujana Impian Kajang, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 1837080,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "246 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JSqeNHhfbxcnZxC059k8LIDQGXs5Ckm0&sz=w800"
    ]
  },
  {
    "id": "202",
    "title": "Apartment",
    "address": "Unit No. D-10-21, Blok D, Mentari Court, Jalan PJS 8/9, Taman Seri Mentari, 46150 Petaling Jaya, Selangor",
    "postcode": "46150",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 183708,
    "auctionDate": "18 Aug 2026 (Tue)",
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
    "id": "203",
    "title": "2 Storey Terrace House",
    "address": "No. 19, Jalan Alam Suria 16/11, Fasa 5A2, Seksyen 16, 42300 Bandar Puncak Alam, Selangor",
    "postcode": "42300",
    "state": "Selangor",
    "area": "Bandar Puncak Alam",
    "reservePrice": 342000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "648 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1NiI99xZcJIF5sModT8zW9C1h383nxvVP&sz=w800"
    ]
  },
  {
    "id": "204",
    "title": "2 Storey Terrace House",
    "address": "No. 68, Jalan Palma 1/9, Bandar Hillpark, 42300 Bandar Puncak Alam, Selangor",
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
    "id": "205",
    "title": "2 Storey Terrace House",
    "address": "No. 20, Lorong Sanggul 2D, Bandar Puteri, 41200 Klang, Selangor",
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
    "id": "206",
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
    "id": "207",
    "title": "2 Storey Terrace House",
    "address": "No. 56, Jalan Mawar 13C, Taman Mawar, 43900 Sepang, Selangor",
    "postcode": "43900",
    "state": "Selangor",
    "area": "Sepang",
    "reservePrice": 393660,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "520 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1DJD_i5ljGe2FfF8GxNqB6wWWiyP9GqEQ&sz=w800"
    ]
  },
  {
    "id": "208",
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
    "id": "209",
    "title": "2 Storey Cluster House",
    "address": "No. 26, Jalan Ecohill 7/6B, Setia Ecohill 2, 43500 Semenyih, Selangor",
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
    "id": "210",
    "title": "1 Storey Terrace House",
    "address": "No. 18, Jalan Cenderai, Taman Sinaran, 45600 Bestari Jaya, Selangor",
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
    "id": "211",
    "title": "Flat",
    "address": "Unit No. N-3-03, Block N, Rumah Pangsa Bukit Tinggi 2, Jalan Batu Nilam 34, Bandar Bukit Tinggi 2, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 123930,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "646 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "212",
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
    "id": "213",
    "title": "2 Storey Terrace House",
    "address": "No. 40, Jalan Saujana Perdana 19, Saujana Perdana, 47000 Sungai Buloh, Selangor",
    "postcode": "47000",
    "state": "Selangor",
    "area": "Sungai Buloh",
    "reservePrice": 405000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "076 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1nyG-vDNdh3nY74alrJC76mynIBbVuACi&sz=w800"
    ]
  },
  {
    "id": "214",
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
    "id": "215",
    "title": "Duplex Apartment",
    "address": "Unit No. C1-01-01, Block C1, Residensi Sembilan Cheras, Jalan Suria Residen, 43200 Cheras, Selangor",
    "postcode": "43200",
    "state": "Selangor",
    "area": "Cheras",
    "reservePrice": 846000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "723 sq.ft",
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
    "id": "216",
    "title": "Condominium",
    "address": "Unit No. A-13-05, Kondominium Seri Hijauan ,Jalan Bukit Hijau 26/24, Seksyen 26, 40400 Shah Alam, Selangor",
    "postcode": "40400",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 369000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "109 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1ZwfJEYn3y3PJXX6WBhzRorFlU90wona4&sz=w800"
    ]
  },
  {
    "id": "217",
    "title": "2 Storey Terrace House",
    "address": "Jalan Kajang East 1/1, Kajang East, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 780000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "905 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=19nZGoCdrFchKLcl40JeTY7K22T1W0qxG&sz=w800"
    ]
  },
  {
    "id": "218",
    "title": "1 Storey Terrace House",
    "address": "Jalan Emas 32, Bandar Sungai Emas, 42700 Banting, Selangor",
    "postcode": "42700",
    "state": "Selangor",
    "area": "Banting",
    "reservePrice": 390000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "012 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Dlldi89kEjRxQ-DVRdzsh1E1eGYO8Nip&sz=w800"
    ]
  },
  {
    "id": "219",
    "title": "1 Storey Terrace House",
    "address": "No. 8, Jalan Samarinda 28, Taman Mewah Jaya 2, 41000 Klang, Selangor",
    "postcode": "41000",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 420000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1r7iR84675fqZz56E8GaYxG473gNt8H5q&sz=w800"
    ]
  },
  {
    "id": "220",
    "title": "3 Storey Detached House",
    "address": "No. 44, Jalan Desa 6/7, Bandar Country Homes (Hills Residence), 48000 Rawang, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 1004425,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "836 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1qD9if-mvzTe0eoGnXiy0gihkDFIarLuU&sz=w800"
    ]
  },
  {
    "id": "221",
    "title": "Apartment",
    "address": "Unit No. I-4-09, 4th Floor, Blok I, Pangsapuri Seri Mas, Jalan PP 41, Taman Pinggiran Putra, Seksyen 2, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 100000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "678 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1RtWuLGUGekkx6BQxvEUSAeSXZI5njl_j&sz=w800"
    ]
  },
  {
    "id": "222",
    "title": "2 Storey Terrace House",
    "address": "No. 14, Jalan Galaksi 1/2, Bandar Mahkota Banting, 42700 Banting, Selangor",
    "postcode": "42700",
    "state": "Selangor",
    "area": "Banting",
    "reservePrice": 420000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "490 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1aMpJ-OXEqtqDxYvgGK25JD3qFYvfqt-I&sz=w800"
    ]
  },
  {
    "id": "223",
    "title": "3 Storey Semi Detached House with Clubhouse Facilities",
    "address": "No. 39, Jalan Jade Hills 12/1, Jade Hills, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 1312200,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "177 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1qr5l97spmH_l0BIFX0k4lz00Qjl22pnI&sz=w800",
      "https://drive.google.com/thumbnail?id=1oxwM9fJvRgK-jrNHVi-ar5Rqe9H5kcuw&sz=w800",
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "224",
    "title": "Service Apartment",
    "address": "Unit No. B-10-2, Block B, Renai Jelutong, No. 1, Jalan Bazar U8/100, Bukit Jelutong, Seksyen U8, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 550000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "367 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1vWQxbosAnKIM8UgD8cilji6vGNn5oSNH&sz=w800",
      "https://drive.google.com/thumbnail?id=1Gvz2h7ZSHM4xEreqIzQYeXm-nPITDMVr&sz=w800"
    ]
  },
  {
    "id": "225",
    "title": "1 Storey Terrace House",
    "address": "No. AF7, Lorong Kenanga 3/2, Desa Kenanga, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 350000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "650 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1XF4gQCJJrSmteEclUg-HkiW4hfB6QHjM&sz=w800"
    ]
  },
  {
    "id": "226",
    "title": "1 Storey Terrace House",
    "address": "No. 737, Jalan E5/3, Taman Ehsan, 47000 Kepong, Selangor",
    "postcode": "47000",
    "state": "Selangor",
    "area": "Kepong",
    "reservePrice": 560000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "870 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=114w_9jEUfg3MXtp6bXoX69l94FMBM_BM&sz=w800"
    ]
  },
  {
    "id": "227",
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
    "id": "228",
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
      "https://drive.google.com/thumbnail?id=1pKzYzrwxKM1ZnQ-qr3qQjmDDe-OUkDJ3&sz=w800"
    ]
  },
  {
    "id": "229",
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
    "id": "230",
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
      "https://drive.google.com/thumbnail?id=1cyzxPRTOsqpKGw3dx3O3kVMfCd9PJws3&sz=w800",
      "https://drive.google.com/thumbnail?id=1lLjH5bNM9qW32lLAY_0OQynQuVwKR2gD&sz=w800"
    ]
  },
  {
    "id": "231",
    "title": "2 Storey Shop Office",
    "address": "Unit No. 148-G & 1, Jalan Dataran Cheras 9, Dataran Perniagaan Cheras, 43200 Cheras, Selangor",
    "postcode": "43200",
    "state": "Selangor",
    "area": "Cheras",
    "reservePrice": 3150000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1DNQMThjOiEKMC8HP9j22d51OZ1CEAg8R&sz=w800",
      "https://drive.google.com/thumbnail?id=14FK94ghsXbUN7PXDpDuTkdnl1vQGrIQn&sz=w800",
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "232",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1-mkufQCRvywDU-5olZgg7Mdc7aHKdWGm&sz=w800"
    ]
  },
  {
    "id": "233",
    "title": "SOHO",
    "address": "Unit No. A-26-01, Tower A (also known as Aspire Tower), Kanvas, Jalan Teknokrat 6, Cyber 5, 63000 Cyberjaya, Selangor",
    "postcode": "63000",
    "state": "Selangor",
    "area": "Cyberjaya",
    "reservePrice": 250000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1aYmobv89bRaXtqCgldn0pFHJjpDvvRYI&sz=w800"
    ]
  },
  {
    "id": "234",
    "title": "1 Storey Terrace House",
    "address": "No. 18, Jalan AP 1C/11, Alam Perdana, 42300 Bandar Puncak Alam, Selangor",
    "postcode": "42300",
    "state": "Selangor",
    "area": "Bandar Puncak Alam",
    "reservePrice": 320000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "540 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1RdtAWs7mxnhXn3qsI82-gGPApbi3n6A4&sz=w800"
    ]
  },
  {
    "id": "235",
    "title": "2 Storey Semi Detached House",
    "address": "No. 5, Jalan Ecohill 2/3C, Setia Ecohill, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 900000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "046 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1fvRyyVh2sjmAarpN6newXit9PeS1_W-G&sz=w800"
    ]
  },
  {
    "id": "236",
    "title": "2.5 Storey Detached House",
    "address": "Jalan Balau 3/8, Seksyen 3, 40000 Shah Alam, Selangor",
    "postcode": "40000",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 1100000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "660 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1K6-v2UWKVjLNoFALpg1bW5TjIXHHS7eK&sz=w800"
    ]
  },
  {
    "id": "237",
    "title": "Apartment",
    "address": "Unit No. B3-13-9, Banjaria Court, Jalan Samudera Timur, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 268000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "958 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=12sKA-6Pld5XM7HLj909Hbhaqg9bYa1oE&sz=w800"
    ]
  },
  {
    "id": "238",
    "title": "Apartment",
    "address": "Unit No. 6C-07-06, Block C, Kenanga Apartment, Jalan Wawasan 2/3, Pusat Bandar Puchong, 47100 Puchong, Selangor",
    "postcode": "47100",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 300000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "883 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1EAKu53QRgc05Vg9_SDaHVNdRXnBUwgFO&sz=w800"
    ]
  },
  {
    "id": "239",
    "title": "3 Storey Shop Office",
    "address": "No. 20, Jalan Tasik Raja Lumu M U4/M, Seksyen U4, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 1062900,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "650 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1uCksB2OIILebZdUxV5eXPXdMUd2w4zuK&sz=w800"
    ]
  },
  {
    "id": "240",
    "title": "2 Storey Terrace House",
    "address": "No. 25, Jalan Palma 1/5, Bandar Hillpark, 42300 Bandar Puncak Alam, Selangor",
    "postcode": "42300",
    "state": "Selangor",
    "area": "Bandar Puncak Alam",
    "reservePrice": 550000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "604 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1mxHwl2hJhhq_lPJYXdLS08Te7zvJBIbx&sz=w800"
    ]
  },
  {
    "id": "241",
    "title": "2 Storey Terrace House",
    "address": "No. 1, Jalan IK 3/4, Taman Indah KLIA, 43900 Sepang, Selangor",
    "postcode": "43900",
    "state": "Selangor",
    "area": "Sepang",
    "reservePrice": 334814,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "702 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "242",
    "title": "3 Storey Shop Office",
    "address": "No. 12, Jalan Uranus AH U5/AH, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 1100000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "760 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "243",
    "title": "2 Storey Terrace House",
    "address": "No. 109, Jalan Pinggiran 5, Taman Pinggiran Ukay, 68000 Ampang, Selangor",
    "postcode": "68000",
    "state": "Selangor",
    "area": "Ampang",
    "reservePrice": 688500,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "660 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "244",
    "title": "1 Storey Detached House",
    "address": "Lot 438 (PT 588), Jalan 6, Kampung Melayu Subang Tambahan, Seksyen U5, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 540000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "458 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "245",
    "title": "Apartment",
    "address": "Unit No. MC-115, 1st Floor, Rumah Pangsapuri Mewah Cheras II, Jalan Cuepacs 5, Taman Koperasi Cuepacs, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 118098,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "850 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "246",
    "title": "2 Storey Semi Detached House",
    "address": "No. 55, Jalan KE 4, Kota Emerald (Fasa 4A), Kota Emerald, 48000 Rawang, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 855000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "603 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1RPWdUBgq79WlGDLuKWH1DPu_Gq_uITpc&sz=w800"
    ]
  },
  {
    "id": "247",
    "title": "Apartment",
    "address": "Unit No. 08-05, Blok Anggerik, Taman Tun Teja, 48000, Rawang, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 180000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "828 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1t8v2muj_urRfgaAigjWVBrGdaKaE-tE0&sz=w800"
    ]
  },
  {
    "id": "248",
    "title": "Condominium",
    "address": "Unit No. C-20-07, Vista Hijauan, Persiaran Sungai Long 2, Bandar Sungai Long, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 400000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "356 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1z_XYqa208-GNWY_ZkI1M0umiMUedfX9m&sz=w800"
    ]
  },
  {
    "id": "249",
    "title": "Office Suite",
    "address": "No. A208, Blok A, Kelana Square, No. 17, Jalan SS 7/26, Kelana Jaya, 47301 Petaling Jaya, Selangor",
    "postcode": "47301",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 370000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "245 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1iApi3Fnu6leJ1JnhSrvRUPx1aGgEIMrY&sz=w800"
    ]
  },
  {
    "id": "250",
    "title": "Apartment",
    "address": "Unit No. 9-14-09, Block Chengal, Jalan Rimba, Taman Desaminium, Lestari Perdana, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 270000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "130 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=11VqaRNreuU1fYvNqQezYyFrZoB2LT5zP&sz=w800"
    ]
  },
  {
    "id": "251",
    "title": "Apartment",
    "address": "Unit No. P11-C-03A-06, 03Ath Floor, Block C, Apartment Sri Lavender, Jalan Sepakat Indah 2/2, Taman Sepakat Indah 2, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 270000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "001 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "252",
    "title": "Apartment",
    "address": "Unit No. D-G-05, Block D, Pangsapuri Tropicana Aman 1, Jalan Aman Simfoni 1, Bandar Tropicana Aman, 42500 Telok Panglima Garang, Selangor",
    "postcode": "42500",
    "state": "Selangor",
    "area": "Telok Panglima Garang",
    "reservePrice": 330000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "872 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "253",
    "title": "Apartment",
    "address": "Unit No. A-03A-03, Residensi Lavender, Jalan Kiara Sungai Long, Bandar Sungai Long, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 370000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "055 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "254",
    "title": "1 Storey Terrace House",
    "address": "No. 38, Jalan Merak 2/43, Taman Bentara, 42500 Teluk Panglima Garang, Selangor",
    "postcode": "42500",
    "state": "Selangor",
    "area": "Teluk Panglima Garang",
    "reservePrice": 340000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "377 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jzgEVeorCoDEp3gxPokKDuhYzigziuy1&sz=w800"
    ]
  },
  {
    "id": "255",
    "title": "3 Storey Terrace House",
    "address": "No. 32, Jalan Setia Utama U13/37L, Setia Alam, 40170 Shah Alam, Selangor",
    "postcode": "40170",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 820000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "300 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "256",
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
    "id": "257",
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
    "id": "258",
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
    "id": "259",
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
      "https://drive.google.com/thumbnail?id=16daSRRwWj8sfNbWMPNS52D5GzgrPV1FY&sz=w800"
    ]
  },
  {
    "id": "260",
    "title": "Condominium",
    "address": "Unit No. D-16-03, Tingkat 16, Block D, Residensi Vyne, Jalan 1/108D, Sungai Besi, 57100, Kuala Lumpur",
    "postcode": "57100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 468000,
    "auctionDate": "19 Aug 2026 (Wed)",
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
    "id": "261",
    "title": "Apartment",
    "address": "Unit No. D-7-5, Block D, Pangsapuri Laguna Biru, Jalan Tasik Biru 17, Taman Tasik Biru, Kundang, 48050 Rawang, Selangor",
    "postcode": "48050",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 135812.7,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "850 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Qu7Y8--u--bPlc7i1weT7KfLrX2XzLOT&sz=w800",
      "https://drive.google.com/thumbnail?id=1Qpf7VtTiwnifXr3o7Ujapjicl78tdC5h&sz=w800"
    ]
  },
  {
    "id": "262",
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
    "id": "263",
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
    "id": "264",
    "title": "1.5 Storey Terrace House",
    "address": "No. 8, Jalan Kota Puteri 5/5C, Kota Puteri, Seksyen 5, 48100 Batu Arang, Selangor",
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
    "id": "265",
    "title": "2 Storey Terrace House",
    "address": "No. 42A, Jalan Ecohill 7/2M, Setia Ecohill 2, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 393660,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "300 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1pKpMaJsflhJL6QD11kGoXkFDbPb6AIJ2&sz=w800"
    ]
  },
  {
    "id": "266",
    "title": "2 Storey Terrace House",
    "address": "No. 47, Jalan DC 1/17, Desa Coalfields, 47000 Sungai Buloh, Selangor",
    "postcode": "47000",
    "state": "Selangor",
    "area": "Sungai Buloh",
    "reservePrice": 338985,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "664 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1ztCSTHq6KRDNqSHN4GYQLNtqhZxxM-Sq&sz=w800"
    ]
  },
  {
    "id": "267",
    "title": "2 Storey Semi Detached Cluster House",
    "address": "No. 15, Jalan Akuatik 13/77E, Seksyen 13, 40100 Shah Alam, Selangor",
    "postcode": "40100",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 972000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "799 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=106vlM-eqBtTwhcaO6Ii01OFCkVdyYy98&sz=w800",
      "https://drive.google.com/thumbnail?id=1xuSMv8JjR_Nq_CLmhD6o98RKt2ELpKJZ&sz=w800"
    ]
  },
  {
    "id": "268",
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
    "id": "269",
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
    "id": "270",
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
    "id": "271",
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
    "id": "272",
    "title": "2 Storey Terrace House",
    "address": "No. 2, Jalan SL 10, Sejati Lakeside, Cyber 10, 63000 Cyberjaya, Selangor",
    "postcode": "63000",
    "state": "Selangor",
    "area": "Cyberjaya",
    "reservePrice": 1305000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "337 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1P2hL-pe0A0AQSMdc1D2m3OYFHMZpdgPm&sz=w800",
      "https://drive.google.com/thumbnail?id=1gWmAQPSpyuy87X4aMXx9uBBYYnFDMbpK&sz=w800",
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "273",
    "title": "2 Storey Terrace House",
    "address": "No. 14, Jalan Gantang Satu U19/1A, Taman Sri Buloh, Seksyen U19, 40160 Shah Alam, Selangor",
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
    "id": "274",
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
    "id": "275",
    "title": "Apartment",
    "address": "Unit No. G-3-08, Pangsapuri Akasia, Persiaran Kasuarina, Bandar Botanik, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 252000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "753 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1ssdfFnSMOU14fTbupzvu5lQYZVfWkcpC&sz=w800"
    ]
  },
  {
    "id": "276",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1WcjwfPNYir9zZO5doygousWdecQvlIH1&sz=w800"
    ]
  },
  {
    "id": "277",
    "title": "Service Apartment",
    "address": "Unit No. B-10-10, Koi Tropika Serviced Condominium, Jalan Puchong, Batu 13 1/2, 47100 Puchong, Selangor",
    "postcode": "47100",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 300000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "990 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1ZMgF1rIL7csPb_ZeZR5i3JkjV41S3WXP&sz=w800",
      "https://drive.google.com/thumbnail?id=1HuyoCkv4XvZ42ENRLxS4hRgUttN-WG2w&sz=w800"
    ]
  },
  {
    "id": "278",
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
    "id": "279",
    "title": "2 Storey Terrace House",
    "address": "No. 9, Jalan Tasik Raja Lumu U4/14, Seksyen U4, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 460000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "439 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1deCMxXEk_JgV90MRaw6AD_M238NCSrFd&sz=w800"
    ]
  },
  {
    "id": "280",
    "title": "2 Storey Terrace House",
    "address": "No. 8, Jalan AP 1C/24, Alam Perdana, 42300 Bandar Puncak Alam, Selangor",
    "postcode": "42300",
    "state": "Selangor",
    "area": "Bandar Puncak Alam",
    "reservePrice": 370000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "779 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1RdtAWs7mxnhXn3qsI82-gGPApbi3n6A4&sz=w800"
    ]
  },
  {
    "id": "281",
    "title": "SOHO",
    "address": "Unit No. D-26-13, Block D, Jalan Teknokrat 6, Cybersquare, Cyber 5, 63000 Cyberjaya, Selangor",
    "postcode": "63000",
    "state": "Selangor",
    "area": "Cyberjaya",
    "reservePrice": 330000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "775 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1cSw42hsT9w1Zygb9mNa3HkHtLg6gCv7R&sz=w800"
    ]
  },
  {
    "id": "282",
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
    "id": "283",
    "title": "Apartment",
    "address": "Unit No. B-03-12, Jelutong Apartment, Jalan SH 1/2, Selayang Heights, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 210000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "786 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1C7oo3xdhruMc8KS18ieCGE27IwsnDmwu&sz=w800"
    ]
  },
  {
    "id": "284",
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
    "id": "285",
    "title": "Residential Land",
    "address": "No. 29, Jalan LP 2/10, Taman Lestari Perdana, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 583200,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "329 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1QZw3CSaDSsOEyCBeYXhIoEdt7wpEMJKY&sz=w800"
    ]
  },
  {
    "id": "286",
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
      "https://drive.google.com/thumbnail?id=1d5Cb06c9Iq1vByKsCIFmSSsQ2Y41cxgy&sz=w800"
    ]
  },
  {
    "id": "287",
    "title": "2 Storey Terrace House",
    "address": "No. 5, Jalan 4/11, Section 4, Bandar Rinching, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 300000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "960 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1sItNrKYFqsPOSHyRdRuWq-doo6ydYMXE&sz=w800"
    ]
  },
  {
    "id": "288",
    "title": "Apartment",
    "address": "No. 71E, Jalan Dato Dagang 23, Desa Idaman II, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 110000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "786 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=17VgPj221urSxHY4qhgFi4tQilm7Labfm&sz=w800"
    ]
  },
  {
    "id": "289",
    "title": "1 Storey Terrace House",
    "address": "No. 14, Lorong Dato Abdul Hamid 16, Taman Sentosa, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 400000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "199 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Gu0_g_yYCidwKXv8mCwVxgtgmAxWjR1e&sz=w800"
    ]
  },
  {
    "id": "290",
    "title": "Condominium",
    "address": "Unit No. B2-14-3A, Residensi Hijauan, Jalan Budiman 22/3, Seksyen 22, 40300 Shah Alam, Selangor",
    "postcode": "40300",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 450000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "915 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1K38tptOTVIA9Qhmmu2U9cPhSu1NKXjW1&sz=w800",
      "https://drive.google.com/thumbnail?id=1knmlfRz6NVdyyoa9_RJbiCBWj0avYrb2&sz=w800"
    ]
  },
  {
    "id": "291",
    "title": "Town House",
    "address": "No. 69A, Jalan 18/58, Taman Sri Serdang, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 290000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "012 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "292",
    "title": "Flat",
    "address": "Unit No. D8-08-15, Blok D, Pangsapuri Angsana, Persiaran Mewah, USJ 1, 47620 Subang Jaya, Selangor",
    "postcode": "47620",
    "state": "Selangor",
    "area": "Subang Jaya",
    "reservePrice": 130000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "657 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1cRdHcrOhw7i0eK6wJyUK7rK-nUMj_ilf&sz=w800"
    ]
  },
  {
    "id": "293",
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
    "id": "294",
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
      "https://drive.google.com/thumbnail?id=1lNDWYoXYfnArHk3sMFcSQiEfBSOF_E1s&sz=w800",
      "https://drive.google.com/thumbnail?id=1GQW2GkrvNdfEZ7-QB12SCkwLjClBP6lQ&sz=w800"
    ]
  },
  {
    "id": "295",
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
      "https://drive.google.com/thumbnail?id=1Q_awUzUQqUW4vgPDKH5DVM4cWgE5DgN1&sz=w800",
      "https://drive.google.com/thumbnail?id=1atqZ9tCkLkR-w-0gUvTe2wjlQya78P2S&sz=w800"
    ]
  },
  {
    "id": "296",
    "title": "Town House (Lower Unit)",
    "address": "No. 35, Bangsar Ria Townhouse, Jalan 1/80B, Taman Bandaraya, 59100, Kuala Lumpur",
    "postcode": "59100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 927000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "884 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=16z3UarxYwZgJoKmhLRpkYl4lkugkC20y&sz=w800"
    ]
  },
  {
    "id": "297",
    "title": "Apartment",
    "address": "Unit No. 202, Block F4, Wangsa Maju Seksyen 2, 53300, Kuala Lumpur",
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
    "id": "298",
    "title": "Condominium",
    "address": "Unit No. A-7-5, 7th Floor, Block A, Awana Puri Condominium, No. 2, Jalan 15/119, Taman Mutiara Barat, 56000, Kuala Lumpur",
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
    "id": "299",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1U-iZpFS3Vm_3Fffh5ZedmgY00wHNjxWF&sz=w800"
    ]
  },
  {
    "id": "300",
    "title": "Condominium",
    "address": "Unit No. B-2-7, Block B, Medan Putra Condominium, Jalan Medan Putra 2 (Jalan 2/6D), Bandar Sri Menjalara, 52200, Kuala Lumpur",
    "postcode": "52200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 350000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "076 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=124A998bxt726aopFGD_E5uRhF9LQ8q_e&sz=w800"
    ]
  },
  {
    "id": "301",
    "title": "Condominium",
    "address": "Unit No. C-5-12, Block C, Endah Ria Kondominium, Jalan 3/149E, Taman Sri Endah, 57000, Kuala Lumpur",
    "postcode": "57000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 310000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "936 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1gUup_o5w6FFEdFUfIGXtbxNMvCtS9Fd3&sz=w800"
    ]
  },
  {
    "id": "302",
    "title": "Service Apartment",
    "address": "Unit No. 27-03, Residensi Kamar Putra (Chambers Residence), No. 2A, Jalan Ipoh Kecil, 50350, Kuala Lumpur",
    "postcode": "50350",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 585000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "883 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1vd7b7839Hyk3tUoAUvfUydUT46YuxeAo&sz=w800",
      "https://drive.google.com/thumbnail?id=1EQtaPnxkHkftffkV3rybwIib4zMyzrRw&sz=w800"
    ]
  },
  {
    "id": "303",
    "title": "Duplex Small Office Home Office (SOHO)",
    "address": "Unit No. B-06-36, Block B, The Scott Garden SOHO, No. 289, Jalan Klang Lama, Kompleks Rimbun Scott Garden, 58000, Kuala Lumpur",
    "postcode": "58000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 560000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "389 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1dNwuAer5WlHLQcmQwxfssPhUYgoR0s87&sz=w800",
      "https://drive.google.com/thumbnail?id=1IVQYExclEnNPaYlxcyFeDss3J8odd0HT&sz=w800",
      "https://drive.google.com/thumbnail?id=1CW7HDkmyoz7FPsyuWw72lWW3fbAh-qKV&sz=w800",
      "https://drive.google.com/thumbnail?id=1cucDKfIecpA7r2Cj7RKWmQf07IUXLjoa&sz=w800",
      "https://drive.google.com/thumbnail?id=1ELlch0KYYkfA-pe4rNKnfplQOWH-HnvP&sz=w800",
      "https://drive.google.com/thumbnail?id=1VeJ7qY1feeoBaivb4HgHG7lCGAiq3lTn&sz=w800"
    ]
  },
  {
    "id": "304",
    "title": "Apartment",
    "address": "Kuarza 16 Apartment, Jalan Melawati 7B, Taman Kuarza 16, 53100, Kuala Lumpur",
    "postcode": "53100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 603000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "432 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "305",
    "title": "Apartment",
    "address": "Unit No. 06-06, 6th Floor, Madu Mas Apartment, Jalan Air Madu Off Jalan Air Panas, Setapak, 53200, Kuala Lumpur",
    "postcode": "53200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 430000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "163 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "306",
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
    "id": "307",
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
    "id": "308",
    "title": "2 Storey Terrace House",
    "address": "No. 30, Jalan Frekuensi U16/126B, Elmina East, 40160 Shah Alam, Selangor",
    "postcode": "40160",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 812835,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "249 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1v-a3jqK90_lxShG8RxuaStN3Nvj-77RO&sz=w800"
    ]
  },
  {
    "id": "309",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=15-BDIEoQ2HFePLCE4eDfz-7ht7X3NB7C&sz=w800"
    ]
  },
  {
    "id": "310",
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
      "https://drive.google.com/thumbnail?id=1xC6XuDL9sCh2o8ca095tstVTEDN97q52&sz=w800",
      "https://drive.google.com/thumbnail?id=1xP6kIXof-YBI0D8NIXyl9jcV6tBZpLow&sz=w800"
    ]
  },
  {
    "id": "311",
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
    "id": "312",
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
    "id": "313",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1PzJ0mhjdcJKtjNjFFf1GbVJSGDEjDZfX&sz=w800"
    ]
  },
  {
    "id": "314",
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
      "https://drive.google.com/thumbnail?id=1-H4t2gYzOWvN6-Q0I9i79pUrB5hADlFc&sz=w800"
    ]
  },
  {
    "id": "315",
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
    "id": "316",
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
    "id": "317",
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
    "id": "318",
    "title": "Service Apartment",
    "address": "Unit No. D-16-10, Tingkat 16, Block D, Park Apartment, One South, Jalan OS, Taman Serdang Perdana, Seksyen 6, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 350000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "001 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1SbprHX0rF-ZnEr39giDVIUBoMydDlZGe&sz=w800",
      "https://drive.google.com/thumbnail?id=1kPhL7TZ4hEtRKTeb7VFEtQllLkF0fPVo&sz=w800"
    ]
  },
  {
    "id": "319",
    "title": "1 Storey Terrace House",
    "address": "Jalan Taman Garing Jaya 5, Taman Garing Jaya, 48000 Rawang, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 252000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1pyptknqgSOnobgDR_rzaWSO6VYhWMrho&sz=w800"
    ]
  },
  {
    "id": "320",
    "title": "Apartment",
    "address": "Unit No. H6-06-09, Block H, Pangsapuri Angsana, Persiaran Mewah, USJ 1, 47620 Subang Jaya, Selangor",
    "postcode": "47620",
    "state": "Selangor",
    "area": "Subang Jaya",
    "reservePrice": 117000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "657 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1cRdHcrOhw7i0eK6wJyUK7rK-nUMj_ilf&sz=w800"
    ]
  },
  {
    "id": "321",
    "title": "2 Storey Terrace House",
    "address": "No. 19, Jalan TP 8, Taman Tun Perak, 48000 Rawang, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 450000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "540 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1G7067AxJPiWcXJ_PRXAGRxsqC6UcgOGJ&sz=w800"
    ]
  },
  {
    "id": "322",
    "title": "2 Storey Bungalow",
    "address": "No. 20, Jalan Damar Bayu 5, Glenmarie Cove, 42000 Pelabuhan Klang, Selangor",
    "postcode": "42000",
    "state": "Selangor",
    "area": "Pelabuhan Klang",
    "reservePrice": 1700000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "100 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1Qj1YGJw1GDvm3OdTVpnqUjiTGfCAEtbZ&sz=w800"
    ]
  },
  {
    "id": "323",
    "title": "2 Storey Terrace House",
    "address": "Jalan TPS 2/22, Taman Pelangi Semenyih 2, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 440000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "503 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1_ITmeK9Ov3izLeAfYx_RiwW56_QxdLS9&sz=w800"
    ]
  },
  {
    "id": "324",
    "title": "1 Storey Terrace House",
    "address": "No. 15, Lorong Tan Sri Manikavasagam 11A, Taman Menara Maju, 41000 Klang, Selangor",
    "postcode": "41000",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 324000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1UYs5haidS6cKB0exd-w-Qxj_o0sOErdr&sz=w800"
    ]
  },
  {
    "id": "325",
    "title": "2 Storey Cluster Semi Detached House",
    "address": "No. 15, Lorong Kristal 5J, Bandar Parkland, 42000 Klang, Selangor",
    "postcode": "42000",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 827010,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "054 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1WpiRnw2jfxTHhCCAOeS8bZFjPzqiTiXB&sz=w800"
    ]
  },
  {
    "id": "326",
    "title": "2 Storey Semi Detached House",
    "address": "No. 10, Jalan MD 1, Taman Meranti Damai, 47120 Puchong, Selangor",
    "postcode": "47120",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 1300000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "753 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=12vnS5HKp-1d1dSkq8CxPe7w0YOxaf9nu&sz=w800"
    ]
  },
  {
    "id": "327",
    "title": "1 Storey Semi Detached House",
    "address": "Jalan SB 9, Taman Salak Bakti (Desa Salak Bakti), 43900 Sepang, Selangor",
    "postcode": "43900",
    "state": "Selangor",
    "area": "Sepang",
    "reservePrice": 477000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "627 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1hCdWMT0NdfOHZPioa1mo71K9-P1StvSb&sz=w800"
    ]
  },
  {
    "id": "328",
    "title": "2 Storey Semi Detached House",
    "address": "Jalan 4M, Ampang Jaya, 68000 Ampang, Selangor",
    "postcode": "68000",
    "state": "Selangor",
    "area": "Ampang",
    "reservePrice": 1701000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "265 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "329",
    "title": "1 Storey Terrace House",
    "address": "Jalan Damar 8, Rumah Murah Kampung Pendamar, 42000 Klang, Selangor",
    "postcode": "42000",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 342000,
    "auctionDate": "21 Aug 2026 (Fri)",
    "landArea": "—",
    "builtUp": "299 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=19nN7NETTnIrjBcp5KEHvXSMlFIbP7sa6&sz=w800"
    ]
  },
  {
    "id": "330",
    "title": "2 Storey Terrace House",
    "address": "No. 29, Jalan Panglima Awang 35/113, Alam Impian, Seksyen 35, 40470 Shah Alam, Selangor",
    "postcode": "40470",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 702000,
    "auctionDate": "21 Aug 2026 (Fri)",
    "landArea": "—",
    "builtUp": "439 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1pFgFQKWwZae7LneXF9-b6FApODwZZ_05&sz=w800"
    ]
  },
  {
    "id": "331",
    "title": "Stratified Retail Unit",
    "address": "Unit No. PS-UG-07, Block Podium, Residensi Lakeville, Jalan Sibu, Taman Wahyu, 68100, Kuala Lumpur",
    "postcode": "68100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 422000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "184 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1nsZRhs60AIhfD194YJxFaqEw2z2qcYQ5&sz=w800",
      "https://drive.google.com/thumbnail?id=19JbL0x8SRruv6AU7vdFD26oLFFMdSjQ0&sz=w800",
      "https://drive.google.com/thumbnail?id=1xDVEvV31ZQKC75gj7p7XBoo116b_D_6K&sz=w800",
      "https://drive.google.com/thumbnail?id=1E0C6MRDN3XB_u3lQXGGRtMJWIM9BeC8D&sz=w800"
    ]
  },
  {
    "id": "332",
    "title": "Service Apartment",
    "address": "Unit No. B-09-12, The Loft Service Apartment, Kompleks Danau Kota, Taman Zeta @ Zetapark, 67, Jalan Taman lbu Kota, Setapak, 53300, Kuala Lumpur",
    "postcode": "53300",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 504000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "238 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1f2rZMSDOYfXIHQhnJDm0b5Izs-G0eDDU&sz=w800",
      "https://drive.google.com/thumbnail?id=18d7hO_dwHMUOyfBeHtbUZciVBTqzT9_U&sz=w800"
    ]
  },
  {
    "id": "333",
    "title": "Apartment",
    "address": "Unit No. 33-03-17, Pangsapuri Sri Langkawi 2, Blok 33, Off Jalan Gombak, 53000, Kuala Lumpur",
    "postcode": "53000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 190000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "560 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1FPIi1EtiWrtgsi3d_HNpVBuOHLq-wmpO&sz=w800"
    ]
  },
  {
    "id": "334",
    "title": "2 Storey Detached House",
    "address": "No. 24, Jalan Pendita Bestari, Puncak Bestari, 42300 Bandar Puncak Alam, Selangor",
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
    "id": "335",
    "title": "Town House [Close to LRT Ampang Station]",
    "address": "No. 27, Jalan Saga 27, Taman Saga, 68000 Ampang, Selangor",
    "postcode": "68000",
    "state": "Selangor",
    "area": "Ampang",
    "reservePrice": 230291,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "820 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "336",
    "title": "2.5 Storey Terrace House",
    "address": "No. 22, Jalan Aman Putra 2/4, Taman Aman Putra, 47100 Puchong, Selangor",
    "postcode": "47100",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 356000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "379 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "337",
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
    "id": "338",
    "title": "Apartment",
    "address": "Unit No. D-14-7, Blok D, Mentari Court, Jalan PJS 8/9, Taman Seri Mentari, 46150 Petaling Jaya, Selangor",
    "postcode": "46150",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 180700,
    "auctionDate": "26 Aug 2026 (Wed)",
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
    "id": "339",
    "title": "Service Apartment",
    "address": "Unit No. B-21-11, Cerrado (Block B), Southville City, Jalan Southville 1, 43800 Dengkil, Selangor",
    "postcode": "43800",
    "state": "Selangor",
    "area": "Dengkil",
    "reservePrice": 183600,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "635 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1invunWxvyPgEUf5cSBt3HqG4CYvvorlt&sz=w800",
      "https://drive.google.com/thumbnail?id=1iaxgoTPB0TKR5gInpJWHM_pRNEj0O7Wj&sz=w800"
    ]
  },
  {
    "id": "340",
    "title": "2 Storey Terrace House",
    "address": "No. 2A (No. 4), Jalan PP 3/3, Taman Putra Prima, 47130 Puchong, Selangor",
    "postcode": "47130",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 415530,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "402 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Q-9wTkcGNi2DomI7i2usQDUzcchchxmh&sz=w800"
    ]
  },
  {
    "id": "341",
    "title": "2 Storey Terrace House",
    "address": "No. 12A, Jalan PJU 10/16A, Sutera Damansara, 47830 Petaling Jaya, Selangor",
    "postcode": "47830",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 692600,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "084 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1cWWt9-PZDb_hbOtbfuHq-dx-1DQxET_C&sz=w800"
    ]
  },
  {
    "id": "342",
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
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1erqZd0eIjAkF0VHLIZ9KkfWlAwJN728_&sz=w800",
      "https://drive.google.com/thumbnail?id=1Khpto5MbOc5k4Wb5PPJvrMntqo_zz7mC&sz=w800",
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "343",
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
      "https://drive.google.com/thumbnail?id=1XFX0uBe1EkSB_kBMlqlsCVh1pHioKLrA&sz=w800",
      "https://drive.google.com/thumbnail?id=1vKJul1Dct28zLcv7SsDPpHY5odiBx04I&sz=w800"
    ]
  },
  {
    "id": "344",
    "title": "2 Storey Semi Detached House",
    "address": "No. 2, Jalan DJ 1, Taman Delima Jaya, 43800 Dengkil, Selangor",
    "postcode": "43800",
    "state": "Selangor",
    "area": "Dengkil",
    "reservePrice": 792000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "168 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1HlsWgkJNaqe9VIqtrEBik0Q8GUP73WM0&sz=w800"
    ]
  },
  {
    "id": "345",
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
      "https://drive.google.com/thumbnail?id=1lXeoP56IY0T8HVYS4JV4ChEENnxoxwEJ&sz=w800"
    ]
  },
  {
    "id": "346",
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
      "https://drive.google.com/thumbnail?id=1xC6XuDL9sCh2o8ca095tstVTEDN97q52&sz=w800",
      "https://drive.google.com/thumbnail?id=1xP6kIXof-YBI0D8NIXyl9jcV6tBZpLow&sz=w800"
    ]
  },
  {
    "id": "347",
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
    "id": "348",
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
    "id": "349",
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
    "id": "350",
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
    "id": "351",
    "title": "3 Storey Terrace House",
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
      "https://drive.google.com/thumbnail?id=1I16Wp547tUQOPuT99cugnNYpwJtFBOSB&sz=w800"
    ]
  },
  {
    "id": "352",
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
      "https://drive.google.com/thumbnail?id=1pKpMaJsflhJL6QD11kGoXkFDbPb6AIJ2&sz=w800",
      "https://drive.google.com/thumbnail?id=1zgQAAB0fB1d257KDIVb5f0WPoAp2QVUY&sz=w800",
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "353",
    "title": "Condominium",
    "address": "Unit No. 1-3-7, Blok 1, Kondominium Puncak Seri Kelana, Jalan PJU 1A/46, 47301 Petaling Jaya, Selangor",
    "postcode": "47301",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 400000,
    "auctionDate": "26 Aug 2026 (Wed)",
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
    "id": "354",
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
      "https://drive.google.com/thumbnail?id=1znKJVAjjGI0pXc5bmFl919dsOHsifRfo&sz=w800"
    ]
  },
  {
    "id": "355",
    "title": "1 Storey Terrace House",
    "address": "No. 25, Jalan Kancung Darat 28/7, Taman Alam Megah, Seksyen 28, 40400 Shah Alam, Selangor",
    "postcode": "40400",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 455000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "690 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=14cR_mrXDLPFproq9EyKAiN3LY4fJDXlg&sz=w800"
    ]
  },
  {
    "id": "356",
    "title": "3 Storey Terrace House",
    "address": "No. 5, Jalan MM 4, Taman Myra Meranti, 47120 Puchong, Selangor",
    "postcode": "47120",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 850000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "445 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1fE1g7qmAXHtqBfkTaN3HfUqwyiMvPA84&sz=w800"
    ]
  },
  {
    "id": "357",
    "title": "Terrace House",
    "address": "No. 13, Jalan Anggerik 4D/1, Seksyen BS7, Bukit Sentosa, 48300 Rawang, Selangor",
    "postcode": "48300",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 350000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Xy16e_GvbzyvjkqtzbAEfaaawMllLc2H&sz=w800"
    ]
  },
  {
    "id": "358",
    "title": "2 Storey Terrace House",
    "address": "No. 13, Jalan Tun Teja 35/6D, Alam Impian, Seksyen 35, 40470 Shah Alam, Selangor",
    "postcode": "40470",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 850000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "916 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1pFgFQKWwZae7LneXF9-b6FApODwZZ_05&sz=w800"
    ]
  },
  {
    "id": "359",
    "title": "Apartment",
    "address": "Unit No. B-4-23, Blok B, Pangsapuri Putra Impian, Jalan PP 39, Taman Pinggiran Putra, Seksyen 2, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 162000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "753 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1NZ6koNwOy3K7-ADSwQ3SRbE5F5x9qV84&sz=w800"
    ]
  },
  {
    "id": "360",
    "title": "Office unit with a mezzanine floor",
    "address": "Unit No. L-3-2, Block L, Pusat Komersil Parklane, No. 21, Jalan SS7/26, Kelana Jaya, 47301 Petaling Jaya, Selangor",
    "postcode": "47301",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 680000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "124 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "361",
    "title": "Service Apartment",
    "address": "Unit No. B-16-7, Tower B, Amerin Residence, Persiaran Taman Impian, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 450000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "915 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1yz66i1SQ6W8_ICPb0_GIhVAaQ8az0pqK&sz=w800"
    ]
  },
  {
    "id": "362",
    "title": "Small Office Home Office (SOHO)",
    "address": "Unit No. S-01-10, 1st Floor, Block Sapphire, One Soho, Jalan Kemajuan Subang, 47600 Subang Jaya, Selangor",
    "postcode": "47600",
    "state": "Selangor",
    "area": "Subang Jaya",
    "reservePrice": 330000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "484 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "363",
    "title": "Small Office Home Office (SOHO)",
    "address": "Unit No. S-01-11, 1st Floor, Block Sapphire, One Soho, Jalan Kemajuan Subang, 47600 Subang Jaya, Selangor",
    "postcode": "47600",
    "state": "Selangor",
    "area": "Subang Jaya",
    "reservePrice": 330000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "484 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "364",
    "title": "1 Storey Terrace House",
    "address": "No. 7, Jalan Merpati 16, Taman Setia Jaya, 42700 Banting, Selangor",
    "postcode": "42700",
    "state": "Selangor",
    "area": "Banting",
    "reservePrice": 190000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "500 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "365",
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
      "https://drive.google.com/thumbnail?id=1iMCVjDy8jqo196H59LYpu7ulE6tTh4NG&sz=w800"
    ]
  },
  {
    "id": "366",
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
    "id": "367",
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
    "id": "368",
    "title": "Condominium",
    "address": "Unit No. 02-01-10, Kuchai Brem Park, Block B, Jalan Selesa 2, Taman Gembira, 58200, Kuala Lumpur",
    "postcode": "58200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 196830,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "904 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1uAmREFZD00342WIeUFx052rNtCncMCwl&sz=w800"
    ]
  },
  {
    "id": "369",
    "title": "Apartment",
    "address": "Unit No. I-7-2, Block I, Perdana Puri Apartment, Jalan Puri, Desa Aman Puri, 52100, Kuala Lumpur",
    "postcode": "52100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 280000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "904 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=184gDvgbDlIuxcGxa0t3tNjQRb_WnkE9r&sz=w800"
    ]
  },
  {
    "id": "370",
    "title": "Apartment",
    "address": "Unit No. 107-1, Rampai Court Apartment, Blok F, Jalan 35/26, Taman Sri Rampai, 53300, Kuala Lumpur",
    "postcode": "53300",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 220000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "592 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Au_UIgyGTn7j7X2jQxRfOOAosqTyfVf5&sz=w800"
    ]
  },
  {
    "id": "371",
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
    "id": "372",
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
      "https://drive.google.com/thumbnail?id=1_tlqOylhwY7Dc3mEKsahp5VnHgijFLS2&sz=w800"
    ]
  },
  {
    "id": "373",
    "title": "Condominium",
    "address": "Unit No. C-39-07, Block C, Residensi Awani 3 (Sky Awani III Residence), No. 2, Jalan Santuari 2, Setapak, 53200, Kuala Lumpur",
    "postcode": "53200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 300000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "797 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Ou8DUtQnE1KnWd-1aktRd3bZbevPz1tI&sz=w800"
    ]
  },
  {
    "id": "374",
    "title": "1 Storey Linked House",
    "address": "No. 2-102, Jalan Udang Kertas, Taman Sri Segambut, 52000, Kuala Lumpur",
    "postcode": "52000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 490000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "475 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1S1FzYXRV3zrsRk6Ow3CVMlofCS187d4m&sz=w800"
    ]
  },
  {
    "id": "375",
    "title": "Detached House",
    "address": "Lorong Pandan Tambahan 2, 55100, Kuala Lumpur",
    "postcode": "55100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 300000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "174 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1k1QcEE7K_fcl2umjjwkob7-QoW9dspIo&sz=w800"
    ]
  },
  {
    "id": "376",
    "title": "3 Storey Terrace House",
    "address": "No. 48, Jalan Desiran Bayu, Taman Desiran Bayu, 53000, Kuala Lumpur",
    "postcode": "53000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 1350000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "636 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1QMpH7XOvYu719wZHYPpHxBN-RvjRqbEh&sz=w800"
    ]
  },
  {
    "id": "377",
    "title": "2 Storey Bungalow",
    "address": "No. 9, Lingkungan U Thant, Taman U Thant, 55000, Kuala Lumpur",
    "postcode": "55000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 9900000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "098 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "378",
    "title": "3 Storey Detached House",
    "address": "No. 3, Jalan Seroja, Taman P. Ramlee, 53300, Kuala Lumpur",
    "postcode": "53300",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 1377000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "532 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "379",
    "title": "Apartment",
    "address": "Unit No. 1-05 (On Site 01-05), Anggerik Residensi, Taman Anggerik Perdana, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 167000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "012 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Vx6YG0idPtK-br-wpodPF99sG4xUDsNb&sz=w800"
    ]
  },
  {
    "id": "380",
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
    "id": "381",
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
    "id": "382",
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
      "https://drive.google.com/thumbnail?id=147PrIxUsDk9e9LTwN7_eoMlf4yNrJWKO&sz=w800"
    ]
  },
  {
    "id": "383",
    "title": "Apartment",
    "address": "Unit No. 502, Block 5 (Lily), Jalan Nuri 7/1A, PJU 5, 47810 Petaling Jaya, Selangor",
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
    "id": "384",
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
    "id": "385",
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
    "id": "386",
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
    "id": "387",
    "title": "2 Storey Terrace House",
    "address": "No. 38, Jalan Putra Bahagia 8/2P, Putra Heights, 47650 Subang Jaya, Selangor",
    "postcode": "47650",
    "state": "Selangor",
    "area": "Subang Jaya",
    "reservePrice": 1400000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "072 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1cAqHX9h-z9f0UH11hGJH1WGCEmU7q4Kz&sz=w800"
    ]
  },
  {
    "id": "388",
    "title": "1 Storey Terrace House",
    "address": "No. 111, Jalan Utama 42, Taman Jaya Utama, 42500 Telok Panglima Garang, Selangor",
    "postcode": "42500",
    "state": "Selangor",
    "area": "Telok Panglima Garang",
    "reservePrice": 300000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "324 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1eJrONcLoqDP6-aJV4igQ6_DaKmqqRwFK&sz=w800"
    ]
  },
  {
    "id": "389",
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
    "id": "390",
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
    "id": "391",
    "title": "Apartment",
    "address": "Unit No. A-4-08, Block A, Pangsapuri Kenanga, Jalan TBK 1/10, Taman Bukit Kinrara, 47180 Puchong, Selangor",
    "postcode": "47180",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 137700,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "775 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1OWQePnWarg3wwigAurlx1rpFnxQ7YYi5&sz=w800"
    ]
  },
  {
    "id": "392",
    "title": "Apartment",
    "address": "Unit No. B-3-05, Jalan SP 4/2, Rumah Pangsa Sri Saujana, Bandar Saujana Putra, 42610 Jenjarom, Selangor",
    "postcode": "42610",
    "state": "Selangor",
    "area": "Jenjarom",
    "reservePrice": 160000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "743 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1zRxxmcWp1UUze_hfLkl0vwHDTapJ1Mk1&sz=w800"
    ]
  },
  {
    "id": "393",
    "title": "1 Storey Terrace House",
    "address": "No. 26, Jalan Baiduri 1/4, Taman Baiduri, 42700 Banting, Selangor",
    "postcode": "42700",
    "state": "Selangor",
    "area": "Banting",
    "reservePrice": 252000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Tmd3fb0KbTF2mBeTozAGgSgY0dQwdSWy&sz=w800"
    ]
  },
  {
    "id": "394",
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
    "id": "395",
    "title": "2 Storey Terrace House",
    "address": "No. 2, Jalan Bukit Mewah 9/15, Taman Bukit Mewah, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 567000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "723 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1dtt1hZKeGX4vtBa_W8wLkpYakjkhieDI&sz=w800",
      "https://drive.google.com/thumbnail?id=1579h-c6GqdWgud0YKg6X9UU4wl-2u4nd&sz=w800",
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "396",
    "title": "Apartment",
    "address": "Unit No. E-8-3, Kondo Sri Manja Court, Jalan PJS 3/40, Taman Sri Manja, 46000 Petaling Jaya, Selangor",
    "postcode": "46000",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 284310,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "173 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=14Qb-K3tYo61oKWtiGYpIQQkAUJ7WZBWt&sz=w800",
      "https://drive.google.com/thumbnail?id=1x5dXaiblyY6QJIh07shOwztnR5jeL--t&sz=w800"
    ]
  },
  {
    "id": "397",
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
      "https://drive.google.com/thumbnail?id=14Z3fWLTYnlnwL1A6F1ZiaPt7RuO6wgpw&sz=w800",
      "https://drive.google.com/thumbnail?id=18apNgPE5bMAoRNa-V81gYFK1lCHC68TH&sz=w800"
    ]
  },
  {
    "id": "398",
    "title": "Flat",
    "address": "Unit No. B9-4-07, Jalan PJS 2B/1, Desa Mentari 2, 46150 Petaling Jaya, Selangor",
    "postcode": "46150",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 170000,
    "auctionDate": "27 Aug 2026 (Thu)",
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
    "id": "399",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=12vnS5HKp-1d1dSkq8CxPe7w0YOxaf9nu&sz=w800"
    ]
  },
  {
    "id": "400",
    "title": "Apartment",
    "address": "Block D, Pangsapuri Angsana, Persiaran Mewah USJ 1, 47620 Subang Jaya, Selangor",
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
    "id": "401",
    "title": "1 Storey Terrace House",
    "address": "No. 34, Lebuh Pendamar Indah 1, Taman Pendamar Indah, Pendamanran, 42000 Klang, Selangor",
    "postcode": "42000",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 280000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "000 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1vdYFtkttLkM31MPZ3N2hxpRrCVeYvJhZ&sz=w800"
    ]
  },
  {
    "id": "402",
    "title": "Apartment",
    "address": "Unit No. B003, Block B, Pangsapuri Sri Cempaka, 47170 Puchong, Selangor",
    "postcode": "47170",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 350000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "807 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1SQaS2Lf6tArSIgKKhTN2DV_0FyC_Xr2o&sz=w800"
    ]
  },
  {
    "id": "404",
    "title": "2 Storey Terrace House",
    "address": "Jalan Puncak Bestari 2/3, Puncak Bestari 2, 42300 Bandar Puncak Alam, Selangor",
    "postcode": "42300",
    "state": "Selangor",
    "area": "Bandar Puncak Alam",
    "reservePrice": 490500,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "770 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jHusB6jrHIadzeBjPCAT1Z8mfwHWWPMD&sz=w800"
    ]
  },
  {
    "id": "405",
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
    "id": "406",
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
      "https://drive.google.com/thumbnail?id=1vyB4ZOIVVrytGJtxhkFlYv9hKa8XEWeB&sz=w800"
    ]
  },
  {
    "id": "407",
    "title": "2 Storey Detached House",
    "address": "No. 69, Lorong Tanjong 5/4J, 46000 Petaling Jaya, Selangor",
    "postcode": "46000",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 2400000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "088 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1y4nHfZbju5WlJToEsYK3yneKt3nsUb48&sz=w800"
    ]
  },
  {
    "id": "408",
    "title": "2.5 Storey Semi Detached House",
    "address": "No. 5, Jalan BK 6A/2G, Bandar Kinrara, 47180 Puchong, Selangor",
    "postcode": "47180",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 3800000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "874 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1FkBVCL7dGH1_oIHbA-Snjw0NWEOi2bNX&sz=w800"
    ]
  },
  {
    "id": "409",
    "title": "2 Storey Terrace House",
    "address": "No. 49, Jalan Tiang Seri U8/73J, Seksyen U8, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 1749600,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "577 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1_l-1TwALry2VugWGLC5D4KYD9hhWzlNe&sz=w800"
    ]
  },
  {
    "id": "410",
    "title": "1 Storey Semi Detached House",
    "address": "No. 25, Jalan Sukepi 3/12, Taman Srikandi, 42500 Telok Panglima Garang, Selangor",
    "postcode": "42500",
    "state": "Selangor",
    "area": "Telok Panglima Garang",
    "reservePrice": 465000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "701 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "411",
    "title": "2 Storey Semi Detached House",
    "address": "No. 8, Jalan MD 1, Taman Meranti Damai, 47120 Puchong, Selangor",
    "postcode": "47120",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 810000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "799 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=12vnS5HKp-1d1dSkq8CxPe7w0YOxaf9nu&sz=w800"
    ]
  },
  {
    "id": "412",
    "title": "Condominium",
    "address": "Rosvilla Condominium, No. 2, Jalan Prima Pelangi, Bukit Prima Pelangi, 51200, Kuala Lumpur",
    "postcode": "51200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 450000,
    "auctionDate": "31 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1ZrT8kc1OaW8awN3TJsBt-3rnwz0hpVEd&sz=w800",
      "https://drive.google.com/thumbnail?id=1TcYrMAp6_gsLXipPiMJhM6OggMwEOA0I&sz=w800"
    ]
  },
  {
    "id": "413",
    "title": "2 Storey Terrace House",
    "address": "No. 7, Jalan Harmoni 11/3, Taman Harmoni, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 388800,
    "auctionDate": "1 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "604 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1UzzaKs2Ro6lfhMgcIpdKkCQCxKDj4D8v&sz=w800",
      "https://drive.google.com/thumbnail?id=1-kJucbXPSxAIfendhDQpl_LNsFq9xDOy&sz=w800",
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "414",
    "title": "Apartment",
    "address": "Unit No. 1-2-08, Pangsapuri Flora III, Blok 1, Jalan Asteroid U5/30, Seksyen U5, 40150 Shah Alam, Selangor",
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
      "https://drive.google.com/thumbnail?id=1spXRO-8oYVFJ4bVLpSv-oAFedMkkoUQ4&sz=w800"
    ]
  },
  {
    "id": "415",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1OWixzGn3HCGckVEzLICJDmZ9m1F-MAbj&sz=w800"
    ]
  },
  {
    "id": "416",
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
      "https://drive.google.com/thumbnail?id=1xC6XuDL9sCh2o8ca095tstVTEDN97q52&sz=w800",
      "https://drive.google.com/thumbnail?id=1xP6kIXof-YBI0D8NIXyl9jcV6tBZpLow&sz=w800"
    ]
  },
  {
    "id": "417",
    "title": "2.5 Storey Cluster Semi Detached House",
    "address": "No. 25, Jalan Mutiara 1/12, Taman Mutiara Indah, 47160 Puchong, Selangor",
    "postcode": "47160",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 800000,
    "auctionDate": "1 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "916 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1FsUFNVL7dlIWWNviS6YbrDuRXD-KsPME&sz=w800"
    ]
  },
  {
    "id": "418",
    "title": "1 Storey Terrace House",
    "address": "No. 35, Jalan Mahagoni 2B/1, Perumahan Jalan Mahagoni, 44300 Batang Kali, Selangor",
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
    "id": "419",
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
    "id": "420",
    "title": "Terrace House",
    "address": "Jalan DC 3/3, Desa Coalfields, 47000 Sungai Buloh, Selangor",
    "postcode": "47000",
    "state": "Selangor",
    "area": "Sungai Buloh",
    "reservePrice": 400000,
    "auctionDate": "1 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "348 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1ztCSTHq6KRDNqSHN4GYQLNtqhZxxM-Sq&sz=w800"
    ]
  },
  {
    "id": "421",
    "title": "Terrace House",
    "address": "No. 21, Jalan Kesuma 8/2D, Seksyen 8, Bandar Tasik Kesuma, 43700 Beranang, Selangor",
    "postcode": "43700",
    "state": "Selangor",
    "area": "Beranang",
    "reservePrice": 600000,
    "auctionDate": "1 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1GxcLcPSxi3AR4LOBInBtVk9qr_haqo-H&sz=w800"
    ]
  },
  {
    "id": "422",
    "title": "Agricultural Land",
    "address": "Lot 1189, Off Jalan Gombak, Kampong Sungai Chinchin, 9th Mile, 53100 Ulu Gombak, Selangor",
    "postcode": "53100",
    "state": "Selangor",
    "area": "Ulu Gombak",
    "reservePrice": 930000,
    "auctionDate": "1 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "107 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1Cn4HZWlMfVjrp5e2VGSUX_QQQrGcnAWJ&sz=w800"
    ]
  },
  {
    "id": "423",
    "title": "2 Storey Terrace House",
    "address": "No. 33, Lorong Taming Sari 2, Taman Taming Jaya, 43200, Batu 9, Cheras, Selangor",
    "postcode": "43200",
    "state": "Selangor",
    "area": "Cheras",
    "reservePrice": 335000,
    "auctionDate": "1 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "975 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "424",
    "title": "Apartment",
    "address": "Unit No. B-08-07, Blok B, Pangsapuri Sri Penara, Jalan Sri Permaisuri 1, Bandar Sri Permaisuri, 56000, Kuala Lumpur",
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
      "https://drive.google.com/thumbnail?id=1VhqXFFZCPA_mMxqJhDfLdNRRDway0I7T&sz=w800",
      "https://drive.google.com/thumbnail?id=1-QkrmQcBM7aS_Q6rFKbEHQ-5vcxZw0bs&sz=w800"
    ]
  },
  {
    "id": "425",
    "title": "2 Storey Terrace House",
    "address": "No. 39, Jalan Bukit Permai 2/1, Taman Bukit Permai 2, Cheras, 56100, Kuala Lumpur",
    "postcode": "56100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 470000,
    "auctionDate": "2 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "800 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HC9CmbF6TQMoZP1GNLXlV4HnaPJ4T3RY&sz=w800"
    ]
  },
  {
    "id": "426",
    "title": "Shop Office",
    "address": "Unit No. 3-32C, 2nd Floor, Jalan Desa 2/4, Desa Aman Puri, Kepong, 52100, Kuala Lumpur",
    "postcode": "52100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 150000,
    "auctionDate": "2 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "710 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=19OwJCw01UaMRHOa0b7rlKKJ5WYxtJvI1&sz=w800"
    ]
  },
  {
    "id": "427",
    "title": "1 Storey Terrace House",
    "address": "No. 9, Lorong Dato Dagang 39C, Taman Sri Sentosa, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 332100,
    "auctionDate": "2 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1TkLmOb2XSqNglXYDC0iox-D1hyaZ1pvF&sz=w800"
    ]
  },
  {
    "id": "428",
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
      "https://drive.google.com/thumbnail?id=1SKFgM3XeUjyNUH5WLzxLSEtAyGu1T5jk&sz=w800"
    ]
  },
  {
    "id": "429",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1NiI99xZcJIF5sModT8zW9C1h383nxvVP&sz=w800"
    ]
  },
  {
    "id": "430",
    "title": "2 Storey Terrace House",
    "address": "No. 36, Jalan Hulubalang 27, Taman Sentosa, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 430000,
    "auctionDate": "2 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "076 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Gu0_g_yYCidwKXv8mCwVxgtgmAxWjR1e&sz=w800"
    ]
  },
  {
    "id": "431",
    "title": "Apartment",
    "address": "Unit No. 810, 8th Floor, Block B, Damai Apartment, No. 1A, Jalan PJS 8/9, 46000 Petaling Jaya, Selangor",
    "postcode": "46000",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 160000,
    "auctionDate": "2 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "603 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1pyQrbt3C1jN9K6b7FJz-58QyJxo8pae8&sz=w800"
    ]
  },
  {
    "id": "432",
    "title": "2 Storey Terrace House",
    "address": "No. 2, Jalan Prima 4/3, Taman Puchong Prima, 47100 Puchong, Selangor",
    "postcode": "47100",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 1250000,
    "auctionDate": "2 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "880 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1h2F8O9Iwhqn-osJh8mGvSj_r9Se6F-HY&sz=w800"
    ]
  },
  {
    "id": "433",
    "title": "Shop",
    "address": "Unit No. A-G-7, Pangsapuri Bukit Kuda, Jalan Perak, Klang 41300, Selangor",
    "postcode": "41300",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 283500,
    "auctionDate": "2 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "293 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1HCREUNRZqzTA_jSPhluH6OBdy2dBu-fM&sz=w800"
    ]
  },
  {
    "id": "434",
    "title": "Terrace House",
    "address": "Jalan Dart 13/22, Seksyen 13, 40100 Shah Alam, Selangor",
    "postcode": "40100",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 735000,
    "auctionDate": "2 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "754 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=10bBuu-22MHNdeS0qZmmrEC_OEzaA32Wi&sz=w800"
    ]
  },
  {
    "id": "435",
    "title": "2.5 Storey Bungalow House",
    "address": "No. 7, Jalan Bayu 5/1, (on site is Jalan Bayu 5-1), Bukit Bayu (Bukit Gita Bayu), 43300 Kajang, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 4500000,
    "auctionDate": "2 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "945 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "436",
    "title": "Office",
    "address": "Unit No. CT-01-11, Corporate Tower, Subang Square, Jalan SS 15/4G, SS 15, 47500 Subang Jaya, Selangor",
    "postcode": "47500",
    "state": "Selangor",
    "area": "Subang Jaya",
    "reservePrice": 180000,
    "auctionDate": "2 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "437",
    "title": "Bungalow",
    "address": "PT 1802 (Plot 20), Kampung Sungai Bakau, 48000 Rawang, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 135000,
    "auctionDate": "2 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "438",
    "title": "1 Storey Terrace House",
    "address": "No. 28, Jalan 5A/2, Ladang West Country, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 540000,
    "auctionDate": "2 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "338 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "439",
    "title": "3 Storey Shop Office",
    "address": "No. 22, Jalan Tasik Raja Lumu L U4/L, Seksyen U4, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 1100000,
    "auctionDate": "2 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "950 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1uCksB2OIILebZdUxV5eXPXdMUd2w4zuK&sz=w800"
    ]
  },
  {
    "id": "440",
    "title": "2 Storey Terrace House",
    "address": "No. 20, Jalan Baiduri 28, Taman Baiduri, 42700 Banting, Selangor",
    "postcode": "42700",
    "state": "Selangor",
    "area": "Banting",
    "reservePrice": 370000,
    "auctionDate": "2 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "788 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Tmd3fb0KbTF2mBeTozAGgSgY0dQwdSWy&sz=w800"
    ]
  },
  {
    "id": "441",
    "title": "Duplex Apartment",
    "address": "Unit No. P2-A-15-P3, Sri Camellia Apartment, Jalan Sepakat Indah 3, Taman Sepakat Indah, Sungai Chua, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 500000,
    "auctionDate": "2 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "486 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=12pmSRootCoQKJnNLafIv6TwO48KuR59p&sz=w800",
      "https://drive.google.com/thumbnail?id=1l1-LhmGUDlY9XLnRNu2Oe6NQ6iQaVT7u&sz=w800"
    ]
  },
  {
    "id": "442",
    "title": "Semi Detached House",
    "address": "Jalan UP 3/8, Taman Ukay Perdana, 68000 Ampang, Selangor",
    "postcode": "68000",
    "state": "Selangor",
    "area": "Ampang",
    "reservePrice": 1500000,
    "auctionDate": "3 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "983 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1BUk0Mg2yPVA7aYrexgiDzqhwg6jr_fnQ&sz=w800"
    ]
  },
  {
    "id": "443",
    "title": "Condominium",
    "address": "Casa Mila Condo, Jalan Bukit Idaman 3/1, Taman Bukit Idaman, 68100 Selayang, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Selayang",
    "reservePrice": 250000,
    "auctionDate": "3 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "444",
    "title": "Apartment",
    "address": "Vista Bayu Apartment, Jalan Batu Unjur 9, Taman Bayu Perdana, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 205000,
    "auctionDate": "7 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "152 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1blpcMoJx6x8M0brP8X7ncPd-GqyB5VHN&sz=w800"
    ]
  },
  {
    "id": "445",
    "title": "Condominium",
    "address": "Vista Hijauan, Bandar Sungai Long (Rumah Pangsa), 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 473850,
    "auctionDate": "7 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "356 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1z_XYqa208-GNWY_ZkI1M0umiMUedfX9m&sz=w800"
    ]
  },
  {
    "id": "446",
    "title": "1 Storey Terrace House",
    "address": "No. 35, Jalan 3, Taman Paduka, 45000 Kuala Selangor, Selangor",
    "postcode": "45000",
    "state": "Selangor",
    "area": "Kuala Selangor",
    "reservePrice": 167670,
    "auctionDate": "7 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "529 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1FCLnOyo3erUoIdttVoHRAiwdKOrzTv9Y&sz=w800"
    ]
  },
  {
    "id": "447",
    "title": "2.5 Storey Semi Detached House",
    "address": "Jalan MA 2, Taman Meranti Aman, 47120 Puchong, Selangor",
    "postcode": "47120",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 1012500,
    "auctionDate": "7 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "799 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1qz1Usd1HG0dyWMRoWxfsabWtwZk7D8SL&sz=w800"
    ]
  },
  {
    "id": "448",
    "title": "1 Storey Semi Detached House",
    "address": "No. 15, Jalan Dato Hormat 14A/KS13, Taman Sungai Pinang, 42920 Pulau Indah, Selangor",
    "postcode": "42920",
    "state": "Selangor",
    "area": "Pulau Indah",
    "reservePrice": 315000,
    "auctionDate": "7 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "691 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1WXPekyRyR-8VJMp1V9ZcSTUuW8gKZ4aC&sz=w800"
    ]
  },
  {
    "id": "449",
    "title": "2 Storey Terrace House",
    "address": "No. 118, Jalan Pending 5, Bandar Puteri, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 510000,
    "auctionDate": "7 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "173 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1I5nasFaqK43b091QviHNjiPxEBLKGMws&sz=w800"
    ]
  },
  {
    "id": "450",
    "title": "1 Storey Terrce House",
    "address": "Lorong Serunai 3, Taman Desa Utama, 41200, Klang, Selangor",
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
      "https://drive.google.com/thumbnail?id=1DHxQxuTnqknhr59Tg8uwefcJ9giaS_2E&sz=w800"
    ]
  },
  {
    "id": "451",
    "title": "1 Storey Terrace House",
    "address": "No. 5, Jalan 5/29, Seksyen 5, Bandar Rinching, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 310000,
    "auctionDate": "7 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HA7ob6kncprEsR3NMwNadmsece9q4psj&sz=w800"
    ]
  },
  {
    "id": "452",
    "title": "2 Storey Terrace House",
    "address": "Premises No. 7, Lorong Gelang 5C, Bandar Puteri, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 540000,
    "auctionDate": "7 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "346 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1I5nasFaqK43b091QviHNjiPxEBLKGMws&sz=w800"
    ]
  },
  {
    "id": "453",
    "title": "2 Storey Terrace House",
    "address": "No. 9, Jalan Anggerik Doritis 31/135, Kota Kemuning, Seksyen 31, 40460 Shah Alam, Selangor",
    "postcode": "40460",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 710000,
    "auctionDate": "7 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "647 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "454",
    "title": "Terrace House",
    "address": "No. 13, Jalan Kebun Nenas 2H/KS07, Bandar Putera, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 450000,
    "auctionDate": "7 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "173 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1gjAK2tW-c4hmhADJECuC7UYoeYWCTb-L&sz=w800"
    ]
  },
  {
    "id": "455",
    "title": "Terrace House",
    "address": "No. 134, Jalan Dato Dagang 6, Taman Sentosa Baru, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 342000,
    "auctionDate": "7 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "100 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Gu0_g_yYCidwKXv8mCwVxgtgmAxWjR1e&sz=w800"
    ]
  },
  {
    "id": "456",
    "title": "2 Storey Terrace House",
    "address": "No. 52, Jalan Penghulu 12/3, Bandar Mahkota Cheras, 43200 Cheras, Selangor",
    "postcode": "43200",
    "state": "Selangor",
    "area": "Cheras",
    "reservePrice": 469800,
    "auctionDate": "7 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "992 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1K6-v2UWKVjLNoFALpg1bW5TjIXHHS7eK&sz=w800"
    ]
  },
  {
    "id": "457",
    "title": "Condominium",
    "address": "Unit No. B-22-6, Block B, Jalan 2/109C, Abadi Villa Condo, Off Jalan Kelang Lama, Taman Abadi Indah, 58100, Kuala Lumpur",
    "postcode": "58100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 328050,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "194 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1oPuk3DfvU6FUQt2_a8x-Q6O6yvdFDPo2&sz=w800"
    ]
  },
  {
    "id": "458",
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
      "https://drive.google.com/thumbnail?id=1x5sAPzbVEc--MvBIT496zzjFcttJPvkk&sz=w800",
      "https://drive.google.com/thumbnail?id=1geRABXFOpclu3c50PG6LrgWSp6Tg58aY&sz=w800",
      "https://drive.google.com/thumbnail?id=1DV3puGoRmoLHPrAReoYU_puuKKHqesc1&sz=w800",
      "https://drive.google.com/thumbnail?id=16T8Q-Z-ocq5L7U7TTMq2pUmFdcXwng49&sz=w800",
      "https://drive.google.com/thumbnail?id=1HcQJHEwxJ1R44tPUkltTTUqjPu3O1ZaC&sz=w800"
    ]
  },
  {
    "id": "459",
    "title": "Penthouse",
    "address": "Seputih Permai Condominium, Jalan Taman Seputeh, Taman Seputeh, 58000, Kuala Lumpur",
    "postcode": "58000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 949500,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "605 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1-AcN68VDKvxwVcLQ8_vnWNfoeJOQYFYL&sz=w800"
    ]
  },
  {
    "id": "460",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1mnFaGggXQaMUyWPoNQWP_SVgzGIzV5kr&sz=w800"
    ]
  },
  {
    "id": "461",
    "title": "Flat",
    "address": "Unit No. C-16-21, Block C, Pangsapuri Sri Penara, Jalan Sri Permaisuri 1, Bandar Sri Permaisuri, 56000 Cheras, Kuala Lumpur",
    "postcode": "56000",
    "state": "Kuala Lumpur",
    "area": "Cheras",
    "reservePrice": 207000,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "646 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1VhqXFFZCPA_mMxqJhDfLdNRRDway0I7T&sz=w800",
      "https://drive.google.com/thumbnail?id=1-QkrmQcBM7aS_Q6rFKbEHQ-5vcxZw0bs&sz=w800"
    ]
  },
  {
    "id": "462",
    "title": "Apartment",
    "address": "Block A4, Residensi Pr1ma Alam Damai, Persiaran Bistari, Alam Damai, 56000, Kuala Lumpur",
    "postcode": "56000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 350000,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1cVC8feyuqT6bv3Ox9QQj3N_olhUPIDJ2&sz=w800",
      "https://drive.google.com/thumbnail?id=1i749Y7s8vbPefO4V5bIrhwaAKXozEVxN&sz=w800",
      "https://drive.google.com/thumbnail?id=1jt5SYVwwSojpMmUBpFfI8kTCqDk6txCH&sz=w800"
    ]
  },
  {
    "id": "463",
    "title": "Service Apartment",
    "address": "Unit No. B-12-7, Block B, Putra Majestik, Jalan Kasipillay, 51200, Kuala Lumpur",
    "postcode": "51200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 350000,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "011 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1mgJuLDaEDIsgkZQ2lP1yUPrgOinJK-Bu&sz=w800",
      "https://drive.google.com/thumbnail?id=15Pl3oVwh4WdPmysq-nfXXIivhxMCLedu&sz=w800",
      "https://drive.google.com/thumbnail?id=1iMpIlqTpuBreMXnYvII2FpLa7Kp5WhvI&sz=w800",
      "https://drive.google.com/thumbnail?id=1ZaW1TUE1HNCX0T-tsS84Ob6bJJuJdooF&sz=w800"
    ]
  },
  {
    "id": "464",
    "title": "Apartment",
    "address": "Unit No. 3-10-N, Desa Dua Apartment, Lorong D 1/5, Desa Aman Puri, 52100, Kuala Lumpur",
    "postcode": "52100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 270000,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "839 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1MTbiVobVfoHtLS7c6j3vrFWPSYecQp9X&sz=w800"
    ]
  },
  {
    "id": "465",
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
    "id": "466",
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
    "id": "467",
    "title": "1 Storey Terrace House",
    "address": "No. 20, Jalan Temenggung 21, Taman Seri Bahagia, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 450000,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "468",
    "title": "2 Storey Terrace House",
    "address": "Premises No. 21, Jalan Mirage 4, Mirage By The Lake, Perdana Lakeview West, Cyber 7, 63000 Cyberjaya, Selangor",
    "postcode": "63000",
    "state": "Selangor",
    "area": "Cyberjaya",
    "reservePrice": 1000000,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "260 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1IIbe0c81_zBE9VoCNRUMmH9v71w1UuHM&sz=w800",
      "https://drive.google.com/thumbnail?id=1UVBGLCVmKHDKYY5zTdw8pW2p6K3nj9kv&sz=w800",
      "https://drive.google.com/thumbnail?id=1h1qj8hbbo2Fdq6j50AE-UpzE6bvuLzFS&sz=w800",
      "https://drive.google.com/thumbnail?id=1h9v9nmNBuYJUWWrtAyY2xI2fevaH2u6w&sz=w800",
      "https://drive.google.com/thumbnail?id=125VRc2N4PabGGHtrcW0NQs_fHhCd46Ue&sz=w800"
    ]
  },
  {
    "id": "469",
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
    "id": "470",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1wsF_6_CXR0UpTAjqwXa8emFD_cJ99_8X&sz=w800"
    ]
  },
  {
    "id": "471",
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
      "https://drive.google.com/thumbnail?id=1EjaYHEecxBxUcEovlonWNn4qHXPBnXRX&sz=w800"
    ]
  },
  {
    "id": "472",
    "title": "Condominium",
    "address": "Unit No. A-13-7, Block A, Hillcrest Heights, Jalan Puchong Utama 1, Taman Puchong Utama, 47140 Puchong, Selangor",
    "postcode": "47140",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 630000,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "324 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HsGMUjA1SsPJfZw0pslS0KwT2N9Gh8VB&sz=w800"
    ]
  },
  {
    "id": "473",
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
      "https://drive.google.com/thumbnail?id=1PXeBhk5uudOjaE0dOdXNM85pfBP5vzg3&sz=w800"
    ]
  },
  {
    "id": "474",
    "title": "Office Unit",
    "address": "Block D, Jalan 6, Kosmoplex, Bandar Baru Salak Tinggi, 43900 Sepang, Selangor",
    "postcode": "43900",
    "state": "Selangor",
    "area": "Sepang",
    "reservePrice": 102000,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "259 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "475",
    "title": "Duplex Condominium",
    "address": "Unit No. A-15-16, Putra Villa Condominium, No. 1, Jalan Terminal Putra, Taman Melati, 53100, Kuala Lumpur",
    "postcode": "53100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 945000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "369 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "476",
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
    "id": "477",
    "title": "Condominium",
    "address": "231TR Service Suites, No. 231, Jalan Tun Razak, 50400, Kuala Lumpur",
    "postcode": "50400",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 720000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "087 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Lrd4iA2QY8yXkD9jkfh9fESnr5gMc3PP&sz=w800"
    ]
  },
  {
    "id": "478",
    "title": "Apartment",
    "address": "Unit No. 102-9-24, Block 102, PPR Seri Pantai, Jalan Pantai Dalam, 59200, Kuala Lumpur",
    "postcode": "59200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 170000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1F6x_YS9JwhXH_VJk0x06lSsgLsC2N7aO&sz=w800"
    ]
  },
  {
    "id": "479",
    "title": "Apartment",
    "address": "Unit No. 30, Blok I, Rampai Court Apartment, Jalan 35/26, Taman Sri Rampai, 53300, Kuala Lumpur",
    "postcode": "53300",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 216000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "592 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Au_UIgyGTn7j7X2jQxRfOOAosqTyfVf5&sz=w800"
    ]
  },
  {
    "id": "480",
    "title": "Commercial Retail Lot",
    "address": "Unit No. T076, Sungai Wang Plaza, Jalan Sultan Ismail, 55100, Kuala Lumpur",
    "postcode": "55100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 725000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "152 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1bloJO_NLEZOgEH5hvG7dsxAuS7qu8zju&sz=w800",
      "https://drive.google.com/thumbnail?id=12ruCYeGsk3GkYlUTZvVnMDWBgKhQQu7u&sz=w800"
    ]
  },
  {
    "id": "481",
    "title": "Apartment",
    "address": "Unit No. D-4-5, Block D, Pangsapuri Orkid, Jalan Cemara, Taman Bukit Serdang, Seksyen 13, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 105300,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "753 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "482",
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
    "id": "483",
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
    "id": "484",
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
    "id": "485",
    "title": "1 Storey Terrace House",
    "address": "No. 21, Jalan Melur, Taman Musabika, 44100 Kalumpang, Selangor",
    "postcode": "44100",
    "state": "Selangor",
    "area": "Kalumpang",
    "reservePrice": 90000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Esn3VEzHj_TFuWboR7kLYoYcVnkyukOF&sz=w800"
    ]
  },
  {
    "id": "486",
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
    "id": "487",
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
    "id": "488",
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
    "id": "489",
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
      "https://drive.google.com/thumbnail?id=1RB-qU048p-shE2bRl8EOPxi3t9iRBM9x&sz=w800"
    ]
  },
  {
    "id": "490",
    "title": "Condominium",
    "address": "Unit No. C-11-09, Block C, Ameera Residence, Jalan Mutiara 3, Mutiara Heights, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 400000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "249 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1q5N7E-0b-m-meQnfYveLltKGAW1lIsuU&sz=w800"
    ]
  },
  {
    "id": "491",
    "title": "Small Office Home Office (SOHO)",
    "address": "Unit No. 9-1, Menara Infiniti, No. 28, Jalan SS6/3, Kelana Jaya, 47301 Petaling Jaya, Selangor",
    "postcode": "47301",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 500000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "786 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1NNF5JGaK_bAP7ceuktntd5H6Aa93oCcd&sz=w800",
      "https://drive.google.com/thumbnail?id=1cOUaXMH9zRGOac5n9J5DMX848w4SVdnI&sz=w800"
    ]
  },
  {
    "id": "492",
    "title": "Condominium",
    "address": "Unit No. B1/A/11-3, (Tower 1), Persiaran Puteri 1, Taman Puteri (Venice Hills), 43200 Cheras, Selangor",
    "postcode": "43200",
    "state": "Selangor",
    "area": "Cheras",
    "reservePrice": 250000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1GzItjmVn930FVcnA-IbPXi2UFPLihyfT&sz=w800"
    ]
  },
  {
    "id": "493",
    "title": "Apartment",
    "address": "Block A, Pangsapuri Sri Cempaka, 47170 Puchong, Selangor",
    "postcode": "47170",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 250000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "807 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1SQaS2Lf6tArSIgKKhTN2DV_0FyC_Xr2o&sz=w800"
    ]
  },
  {
    "id": "494",
    "title": "1.5 Storey Terrace House",
    "address": "No. 11, Jalan KP 2/13, Taman Kajang Prima, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 650000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "230 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "495",
    "title": "1 Storey Terrace House",
    "address": "No. 319, Jalan 8A, Taman Tan Yew Lai, 58200, Kuala Lumpur",
    "postcode": "58200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 550000,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "320 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VgNemN1c1hQcySLcs4LQCMr1lvt5a6e2&sz=w800"
    ]
  },
  {
    "id": "496",
    "title": "Condominium",
    "address": "Unit No. B-47-03, Residensi Awani 3, Jalan Santuari 2, 53200 Setapak, Kuala Lumpur",
    "postcode": "53200",
    "state": "Kuala Lumpur",
    "area": "Setapak",
    "reservePrice": 300000,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "801 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Ou8DUtQnE1KnWd-1aktRd3bZbevPz1tI&sz=w800"
    ]
  },
  {
    "id": "497",
    "title": "Apartment",
    "address": "Unit No. 51-3-1, Abadi Indah Kondo, Jalan 3/109C, Taman Abadi Indah, 58100, Kuala Lumpur",
    "postcode": "58100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 230000,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "829 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1SSB6FFLYqvPpZajVmsWMQ9XsiuyFDMJL&sz=w800",
      "https://drive.google.com/thumbnail?id=1HhKWhY9QUGZYy8PGXOWA4VAslTdMMR-S&sz=w800",
      "https://drive.google.com/thumbnail?id=1VPJ7jXjU3rByNUnh_I_aTcI7UoTeTaOb&sz=w800"
    ]
  },
  {
    "id": "498",
    "title": "Condominium",
    "address": "Unit No. D-13-2, Endah Ria Condominium, Jalan 3/149E, Taman Sri Endah, 57000, Kuala Lumpur",
    "postcode": "57000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 320000,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "947 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1gUup_o5w6FFEdFUfIGXtbxNMvCtS9Fd3&sz=w800"
    ]
  },
  {
    "id": "499",
    "title": "Service Apartment",
    "address": "Unit No. B-04-03, Residensi Estetika, Jalan Dagang SB, The Mines Resort City, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 247860,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "560 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13Dj3quwRdF3-Kbt-L164Bg8m1g1oi7rt&sz=w800"
    ]
  },
  {
    "id": "500",
    "title": "Office Lot",
    "address": "Unit No. 2-1C, Jalan Bandar Sembilan, Pusat Bandar Puchong, 47160 Puchong, Selangor",
    "postcode": "47160",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 245000,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "883 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "501",
    "title": "Flat",
    "address": "Unit No. D-01-01, Block D, Jalan CU 1/A, Fasa 3, Taman Cheras Utama, 43200 Cheras, Selangor",
    "postcode": "43200",
    "state": "Selangor",
    "area": "Cheras",
    "reservePrice": 145800,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "667 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xTqIDSRYSS8jL1FtRNWtVwbWrhV-5mM3&sz=w800"
    ]
  },
  {
    "id": "502",
    "title": "2 Storey Semi Detached Cluster House",
    "address": "No. 15, Lorong Az-Zaharah 10/11, Seksyen 10, 42300 Bandar Puncak Alam, Selangor",
    "postcode": "42300",
    "state": "Selangor",
    "area": "Bandar Puncak Alam",
    "reservePrice": 324000,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "321 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1-1CQkP7DMQGek8XB66sE4nIiIcQikRou&sz=w800"
    ]
  },
  {
    "id": "503",
    "title": "Apartment",
    "address": "Unit No. D-9-01, Blok D (Dahlia), Pelangi Damansara, PJU 6, Persiaran Surian, 47800 Petaling Jaya, Selangor",
    "postcode": "47800",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 252000,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "764 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xC6XuDL9sCh2o8ca095tstVTEDN97q52&sz=w800",
      "https://drive.google.com/thumbnail?id=1xP6kIXof-YBI0D8NIXyl9jcV6tBZpLow&sz=w800"
    ]
  },
  {
    "id": "504",
    "title": "2 Storey Terrace House",
    "address": "No. 82, Jalan Lingkaran Nur 1/5, Taman Lingkaran Nur, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 300000,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "900 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1MzzBkjC2hMMqf1P2t0wGc1v1rkFZqsO-&sz=w800"
    ]
  },
  {
    "id": "505",
    "title": "2 Storey Terrace House",
    "address": "No. 75, Jalan Iris 5, Perumahan Jalan Iris, 48300 Taman Bunga Raya, Selangor",
    "postcode": "48300",
    "state": "Selangor",
    "area": "Taman Bunga Raya",
    "reservePrice": 320000,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1R2WnTR4hjYKuqYZ_RFDHnfJejaOCZhT8&sz=w800"
    ]
  },
  {
    "id": "506",
    "title": "1 Storey Terrace House",
    "address": "No. 50, Jalan BK 1/4, Bandar Kinrara, 47180 Puchong, Selangor",
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
      "https://drive.google.com/thumbnail?id=1MZZzk6rM0iQQTWnyX7XN52xqSkmOXirj&sz=w800"
    ]
  },
  {
    "id": "507",
    "title": "Apartment",
    "address": "Unit No. E-09-17, Block E, Mentari Court, Jalan PJS 8/9, Taman Seri Mentari, 46150 Petaling Jaya, Selangor",
    "postcode": "46150",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 250000,
    "auctionDate": "10 Sep 2026 (Thu)",
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
    "id": "508",
    "title": "Apartment",
    "address": "Unit No. E-6-15, Blok E (Anggerik), Pelangi Damansara, PJU 6, Persiaran Surian, 47800 Petaling Jaya, Selangor",
    "postcode": "47800",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 310000,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "764 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xC6XuDL9sCh2o8ca095tstVTEDN97q52&sz=w800",
      "https://drive.google.com/thumbnail?id=1xP6kIXof-YBI0D8NIXyl9jcV6tBZpLow&sz=w800"
    ]
  },
  {
    "id": "509",
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
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1gVd79WuwQE7h-1ZLAbbX-2pMuceoZkYH&sz=w800"
    ]
  },
  {
    "id": "510",
    "title": "2.5 Storey Detached House",
    "address": "No. 2, Jalan Villa Merab 3, Desa Villa Merab, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 1100000,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "213 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1MxW6GasBYWiZmB2SgWawE0GyxhFKkyzE&sz=w800"
    ]
  },
  {
    "id": "511",
    "title": "2 Storey Terrace House",
    "address": "No. 87, Jalan Kesuma 8/3H, Seksyen 8, Bandar Tasik Kesuma, 43700 Beranang, Selangor",
    "postcode": "43700",
    "state": "Selangor",
    "area": "Beranang",
    "reservePrice": 420000,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "184 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1GxcLcPSxi3AR4LOBInBtVk9qr_haqo-H&sz=w800"
    ]
  },
  {
    "id": "512",
    "title": "2 Storey Detached House",
    "address": "No. 2, Jalan Ukay Seraya 2, Taman Ukay Seraya, 68000 Ampang, Selangor",
    "postcode": "68000",
    "state": "Selangor",
    "area": "Ampang",
    "reservePrice": 3240000,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "900 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1G-MfqZHX-wthnQpTZfp-AxDRlhpr3zT7&sz=w800"
    ]
  },
  {
    "id": "513",
    "title": "2 Storey Terrace House",
    "address": "No. 12, Jalan Iris 3, Taman Bunga Raya, 48300 Bukit Beruntung, Selangor",
    "postcode": "48300",
    "state": "Selangor",
    "area": "Bukit Beruntung",
    "reservePrice": 330000,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1R2WnTR4hjYKuqYZ_RFDHnfJejaOCZhT8&sz=w800"
    ]
  },
  {
    "id": "514",
    "title": "Town House",
    "address": "Andari Townvilla, Jalan SH 2/1, Selayang Heights, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 405000,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "732 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1PynqKvspVIaRuamQ8Dbry5nL8m4ckim2&sz=w800"
    ]
  },
  {
    "id": "515",
    "title": "1 Storey Terrace House",
    "address": "No. 70, Jalan Sri Cahaya 14, Taman Cahaya 2, 45600 Bestari Jaya, Selangor",
    "postcode": "45600",
    "state": "Selangor",
    "area": "Bestari Jaya",
    "reservePrice": 200000,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "950 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "516",
    "title": "2 Storey Terrace House",
    "address": "No. 23, Jalan TK 2/1B, Taman Kinrara, Seksyen 2, 47190 Puchong, Selangor",
    "postcode": "47190",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 600000,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "494 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1QZw3CSaDSsOEyCBeYXhIoEdt7wpEMJKY&sz=w800"
    ]
  },
  {
    "id": "517",
    "title": "2 Storey Terrace House",
    "address": "No. 27, Jalan Kemuning Bayu 33/32K, Taman Kemuning Utama, Seksyen 33, 40400 Shah Alam, Selangor",
    "postcode": "40400",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 1000000,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "508 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "518",
    "title": "1.5 Storey Terrace Shop Office",
    "address": "No. 30-1 & 30-2, Jalan Puteri 7/7, Bandar Puteri, 47100 Puchong, Selangor",
    "postcode": "47100",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 1200000,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "519",
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
    "id": "520",
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
      "https://drive.google.com/thumbnail?id=101QspVZa_v5qcI_9fFj1mdL_6Kab_CCa&sz=w800"
    ]
  },
  {
    "id": "521",
    "title": "1 Storey Terrace House",
    "address": "No. 10, Lorong Tan Sri Manickavasagam 2A (Lorong Manickavasagam 2A), Taman Menara Maju, 41200 (41000) Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "() Klang",
    "reservePrice": 364500,
    "auctionDate": "14 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "571 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1UYs5haidS6cKB0exd-w-Qxj_o0sOErdr&sz=w800"
    ]
  },
  {
    "id": "522",
    "title": "2 Storey Terrace House",
    "address": "Jalan Titian U8/41, Bukit Jelutong, Seksyen U8, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 1035000,
    "auctionDate": "14 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "250 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d4TqkhQT0jqIdTsrgFBl_Y2r2rj6zRel&sz=w800"
    ]
  },
  {
    "id": "523",
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
    "id": "524",
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
    "id": "525",
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
    "id": "526",
    "title": "Bungalow",
    "address": "No. 16, Jalan 3/2A, Templer Height, Perangsang Templer Golf, 48000, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Selangor",
    "reservePrice": 5200000,
    "auctionDate": "14 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "527",
    "title": "2 Storey Detached House with Swimming Pool @ Sungai Penchala / TTDI, Taman Tun Dr Ismail",
    "address": "Jalan Puncak Penchala, Puncak Penchala, Off Jalan Penchala Link, 60000, Kuala Lumpur",
    "postcode": "60000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 3780000,
    "auctionDate": "15 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "112 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1pl67hY38ClFW9hm5MITHgBEZPRRHngJn&sz=w800"
    ]
  },
  {
    "id": "528",
    "title": "Service Apartment",
    "address": "Unit No. C-21-08, Tower C, Megan Legasi @ Millerz Square, No. 357, Jalan Kelang Lama, 58000, Kuala Lumpur",
    "postcode": "58000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 560000,
    "auctionDate": "15 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "657 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=19dsbqT58nd1zUAbiDzPvTAkWkfCktz1d&sz=w800",
      "https://drive.google.com/thumbnail?id=1HLZ63ltRTcqA8UrNp-8fNSb3Yjy0aMYC&sz=w800",
      "https://drive.google.com/thumbnail?id=1A-JneWpjSAVE0R3Ym6tR0lq7DmatSk5B&sz=w800",
      "https://drive.google.com/thumbnail?id=1i52AqHVvlqXjPehUVBit1o2Tf5IAfh8o&sz=w800"
    ]
  },
  {
    "id": "529",
    "title": "3 Plots Detached Residential Land",
    "address": "No. 13, Jalan Merah Pulasan U9/4B, Seksyen U9, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 940410,
    "auctionDate": "15 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "930 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1W_gmxWVPxGXLR2am1ZrjVIFaaLgfORl0&sz=w800"
    ]
  },
  {
    "id": "530",
    "title": "Bungalow Land",
    "address": "PT 80639, Bandar Country Height, Ulu Langat, Selangor",
    "postcode": "80639",
    "state": "Selangor",
    "area": "Ulu Langat",
    "reservePrice": 954150,
    "auctionDate": "15 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "538 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=14Iff-hPCYTlDJnvKFB1Z-NNd9oq7tHOI&sz=w800"
    ]
  },
  {
    "id": "531",
    "title": "2 Storey Terrace House",
    "address": "Jalan Perkasa 25/16, Taman Sri Muda, Seksyen 25, 40400 Shah Alam, Selangor",
    "postcode": "40400",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 229635,
    "auctionDate": "15 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "840 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1tXpjjoQnhF6gGxXXqSlvUJ-28lWfMWgl&sz=w800"
    ]
  },
  {
    "id": "532",
    "title": "2 Storey Cluster Semi Detached House",
    "address": "No. 3, Lorong Lautan Samudera 9/2A, Seksyen 9, 42300 Bandar Puncak Alam, Selangor",
    "postcode": "42300",
    "state": "Selangor",
    "area": "Bandar Puncak Alam",
    "reservePrice": 324000,
    "auctionDate": "15 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "500 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1SHjT8Lm0wCqWSfZEbrP-RGX_pcbU5DL_&sz=w800"
    ]
  },
  {
    "id": "533",
    "title": "Apartment",
    "address": "Unit No. R02-18-07, Block R02 (On Site D'Cerrum B), Pangsapuri Serumpun (On Site D'Cerrum Pangsapuri Serumpun), Setia Ecohill, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 227000,
    "auctionDate": "15 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "947 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "534",
    "title": "Apartment",
    "address": "Unit No. Blok 27-04-12, Apartment Seroja, Jalan Arca U8/80, Bukit Jelutong, Seksyen U8, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 270000,
    "auctionDate": "15 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "840 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=12j2EGNvLei6cx_gOuwmLXGyoQ_z9v99s&sz=w800"
    ]
  },
  {
    "id": "535",
    "title": "Service Condominium",
    "address": "Unit No. D-11-10, Block D (Taisho), Koi Tropika Condominium, Jalan Puchong, Batu 13 1/2, 47100 Puchong, Selangor",
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
      "https://drive.google.com/thumbnail?id=1ZMgF1rIL7csPb_ZeZR5i3JkjV41S3WXP&sz=w800",
      "https://drive.google.com/thumbnail?id=1HuyoCkv4XvZ42ENRLxS4hRgUttN-WG2w&sz=w800"
    ]
  },
  {
    "id": "536",
    "title": "1 Storey Terrace House",
    "address": "No. 110, Jalan Dato Yusof Shahbudin 21, Taman Sentosa, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 354780,
    "auctionDate": "15 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "860 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Gu0_g_yYCidwKXv8mCwVxgtgmAxWjR1e&sz=w800"
    ]
  },
  {
    "id": "537",
    "title": "2 Storey Terrace House",
    "address": "Jalan Orbit 2/7, Bandar Mahkota Banting, 42700 Banting, Selangor",
    "postcode": "42700",
    "state": "Selangor",
    "area": "Banting",
    "reservePrice": 370000,
    "auctionDate": "15 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1aMpJ-OXEqtqDxYvgGK25JD3qFYvfqt-I&sz=w800"
    ]
  },
  {
    "id": "538",
    "title": "Apartment",
    "address": "Unit No C-3-42, Blok Nipah, Pangsapuri Las Palmas, Jalan Desa Ria, Bandar Country Homes, 48000 Rawang, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 150000,
    "auctionDate": "15 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "775 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=15eylhMSOztY09oM7npH7ClqyViBYGVOe&sz=w800"
    ]
  },
  {
    "id": "539",
    "title": "1 Storey Terrace House",
    "address": "No. 5, Jalan ST 1D/10, Taman Cempaka, Bandar Baru Salak Tinggi, 43900 Sepang, Selangor",
    "postcode": "43900",
    "state": "Selangor",
    "area": "Sepang",
    "reservePrice": 220000,
    "auctionDate": "15 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "753 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1cNDlwjr25MVmcrbtK2KnJaI_LaRSD3Jf&sz=w800"
    ]
  },
  {
    "id": "540",
    "title": "2 Storey Terrace House",
    "address": "No. 46, Jalan Iris 7, Perumahan Jalan Iris, Taman Bunga Raya, 48300 Rawang, Selangor",
    "postcode": "48300",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 330000,
    "auctionDate": "15 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "972 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1R2WnTR4hjYKuqYZ_RFDHnfJejaOCZhT8&sz=w800"
    ]
  },
  {
    "id": "541",
    "title": "1 Storey Terrace House",
    "address": "No. 8, Jalan Hamzah Alang 24, Taman Intan 6, Di Jalan Tahir Manan, 42200 Kapar, Selangor",
    "postcode": "42200",
    "state": "Selangor",
    "area": "Kapar",
    "reservePrice": 243000,
    "auctionDate": "15 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1zS3wSPQaEP6a1aPq4_7j-AlaYcKjs8d_&sz=w800"
    ]
  },
  {
    "id": "542",
    "title": "Apartment",
    "address": "Unit No. A-14-24, Blok A, Mentari Court, Jalan PJS 8/9, Taman Seri Mentari, 46150 Petaling Jaya, Selangor",
    "postcode": "46150",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 202500,
    "auctionDate": "15 Sep 2026 (Tue)",
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
    "id": "543",
    "title": "Apartment",
    "address": "Blok 5, Pangsapuri Seri Jati, No. 2, Jalan Setia Gemilang U13/45C, 40170 Shah Alam, Selangor",
    "postcode": "40170",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 300000,
    "auctionDate": "15 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "544",
    "title": "Condominium",
    "address": "Blok A, Palm Spring @ Damansara, No. 1, Jalan PJU 3/29, Kota Damansara, 47810 Petaling Jaya, Selangor",
    "postcode": "47810",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 370000,
    "auctionDate": "15 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1XFX0uBe1EkSB_kBMlqlsCVh1pHioKLrA&sz=w800",
      "https://drive.google.com/thumbnail?id=1vKJul1Dct28zLcv7SsDPpHY5odiBx04I&sz=w800"
    ]
  },
  {
    "id": "545",
    "title": "Apartment",
    "address": "Unit No. B-16-16, Pangsapuri Damai Mewah B (On site known as Block B, Selesa I-Resort Apartment), Taman Damai Mewah, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 230000,
    "auctionDate": "15 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1LfbElYxP4QorbWOO_XRbJcZ2Lwoi9uO8&sz=w800"
    ]
  },
  {
    "id": "546",
    "title": "Apartment",
    "address": "Unit No. B-3-18, Pangsapuri Sri Mutiara, Jalan Putra Indah 9/1C, Putra Heights, 47650 Subang Jaya, Selangor",
    "postcode": "47650",
    "state": "Selangor",
    "area": "Subang Jaya",
    "reservePrice": 153000,
    "auctionDate": "15 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "646 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=10BteZDcoGPIRFlWuAjjtrtKLqFqHlh6T&sz=w800"
    ]
  },
  {
    "id": "547",
    "title": "Apartment",
    "address": "Unit No. B-5-15, Pangsapuri Sri Anggerik, Jalan Bandar Puchong Jaya, 47170 Puchong, Selangor",
    "postcode": "47170",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 174960,
    "auctionDate": "15 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "786 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1tLasfJpL-s11ootQcW15_qLzRm5PvLhF&sz=w800"
    ]
  },
  {
    "id": "548",
    "title": "1 Storey Terrace House",
    "address": "No. 54, Jalan Dato Abdul Hamid 9, Taman Sentosa, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 324000,
    "auctionDate": "15 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "820 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Gu0_g_yYCidwKXv8mCwVxgtgmAxWjR1e&sz=w800"
    ]
  },
  {
    "id": "549",
    "title": "Apartment",
    "address": "Vista Saujana, Jalan Wangsa 2/6, Taman Wangsa Permai, 52200 Kepong, Selangor",
    "postcode": "52200",
    "state": "Selangor",
    "area": "Kepong",
    "reservePrice": 270000,
    "auctionDate": "17 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "001 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1fHoq3rBva8DYg-3IDoG-dKmR3NlJigwH&sz=w800"
    ]
  },
  {
    "id": "550",
    "title": "Apartment",
    "address": "Unit No. B-40-3A, The Goodwood Residence, No. 8, Jalan Kerinchi Kanan, Bangsar South, 59200, Kuala Lumpur",
    "postcode": "59200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 990000,
    "auctionDate": "21 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Kz8pZE6OzNNoVEjLGmPGWtSYoKYjW_SB&sz=w800"
    ]
  },
  {
    "id": "551",
    "title": "2 Storey Detached House",
    "address": "Jalan BM 1/2, Seksyen 1, Bandar Bukit Mahkota, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 1890000,
    "auctionDate": "21 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "500 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1YwYt-GaLdUyNg3MM6fk34umwpTQM1LBU&sz=w800"
    ]
  },
  {
    "id": "552",
    "title": "Condominium",
    "address": "Unit No. A-31-03, Kiara 1888, No. 17, Jalan Kiara 3, Mont Kiara, 50480, Kuala Lumpur",
    "postcode": "50480",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 1094000,
    "auctionDate": "22 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "713 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "553",
    "title": "Service Apartment",
    "address": "Unit No. 19-10, Idaman KL 128 (Saville Residence), No. 128, Jalan Klang Lama, 58000, Kuala Lumpur",
    "postcode": "58000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 610000,
    "auctionDate": "22 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "389 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1TycpbqrRsrmMOsZLRjSGZ4D_ADcEKMiE&sz=w800"
    ]
  },
  {
    "id": "554",
    "title": "Apartment",
    "address": "Unit No. D-506, Block D, Pandan Terrace, Jalan Perdana, Pandan Perdana, 53300, Kuala Lumpur",
    "postcode": "53300",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 220000,
    "auctionDate": "22 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "829 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "555",
    "title": "2 Storey Terrace House",
    "address": "Lorong Sungai Puloh 9, Off Jalan Haji Sirat, Taman Klang Utama, 42100 Klang, Selangor",
    "postcode": "42100",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 350000,
    "auctionDate": "22 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "880 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1841v5SvHhiF-ppB9bTYD51A_KhisykGs&sz=w800"
    ]
  },
  {
    "id": "556",
    "title": "2 Storey Terrace House",
    "address": "Jalan Zaitun 8/3, Bandar Hill park, 42300 Bandar Puncak Alam, Selangor",
    "postcode": "42300",
    "state": "Selangor",
    "area": "Bandar Puncak Alam",
    "reservePrice": 500000,
    "auctionDate": "22 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "647 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1mxHwl2hJhhq_lPJYXdLS08Te7zvJBIbx&sz=w800"
    ]
  },
  {
    "id": "557",
    "title": "2 Storey Terrace House",
    "address": "No. 18, Jalan Fauna 3/27, Bandar Rimbayu (Fauna), 42500 Telok Panglima Garang, Selangor",
    "postcode": "42500",
    "state": "Selangor",
    "area": "Telok Panglima Garang",
    "reservePrice": 620000,
    "auctionDate": "22 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "173 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1XNkXEe4RHv0vZjZaAp0o_EWmTh_HhoVu&sz=w800"
    ]
  },
  {
    "id": "558",
    "title": "Service Apartment",
    "address": "Unit No. B-29-09, Residensi Palmera, Laman Puteri 3, Bandar Puteri Bangi, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 380000,
    "auctionDate": "22 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "850 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1FSC7OfzeGBsB7ArEUdf-m5tVtj3h5uvi&sz=w800",
      "https://drive.google.com/thumbnail?id=1rkLdMd11P2ylQgVcEvoCOnu2B4xMdvic&sz=w800"
    ]
  },
  {
    "id": "559",
    "title": "2 Storey Terrace House",
    "address": "No. 92, Jalan Palma 1/4, Bandar Hillpark, 42300 Bandar Puncak Alam, Selangor",
    "postcode": "42300",
    "state": "Selangor",
    "area": "Bandar Puncak Alam",
    "reservePrice": 730000,
    "auctionDate": "22 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "106 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1mxHwl2hJhhq_lPJYXdLS08Te7zvJBIbx&sz=w800"
    ]
  },
  {
    "id": "560",
    "title": "2 Storey Terrace House",
    "address": "No. 32, Jalan BSC 4B/7, Bandar Seri Coalfields, Presint 4B1, 47000 Sungai Buloh, Selangor",
    "postcode": "47000",
    "state": "Selangor",
    "area": "Sungai Buloh",
    "reservePrice": 950000,
    "auctionDate": "22 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "605 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "561",
    "title": "Town House",
    "address": "Unit No. 33-3A, Kondo Sri Mahligai, Jalan 9/20, Seksyen 9, 40100 Shah Alam, Selangor",
    "postcode": "40100",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 3245000,
    "auctionDate": "22 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "065 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "562",
    "title": "Apartment",
    "address": "Tower A, Sensory Residence, Jalan Southville 1, Southville City, 43800 Dengkil, Selangor",
    "postcode": "43800",
    "state": "Selangor",
    "area": "Dengkil",
    "reservePrice": 200000,
    "auctionDate": "22 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xPs23092N7_V_6xMvsuub24nePO8sM2m&sz=w800",
      "https://drive.google.com/thumbnail?id=1Akm3-kH9PRzZMN-JMpjb_baO1vVl_XVk&sz=w800",
      "https://drive.google.com/thumbnail?id=1NZWQSsd2nmN94XQjymDSNdIeVpNnQzuH&sz=w800"
    ]
  },
  {
    "id": "563",
    "title": "Apartment",
    "address": "Unit No. VS-5-25, Vista Saujana, Jalan Wangsa 2/6, Taman Wangsa Permai, 52200, Kuala Lumpur",
    "postcode": "52200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 171242.1,
    "auctionDate": "23 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "958 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1L3UIQZ1jpMpd5A5gLa7DzJ1cyG_qHBC6&sz=w800"
    ]
  },
  {
    "id": "564",
    "title": "Desa Villa Condominium",
    "address": "Unit No. 24-5-2, Blok 24, Desa Villa Condominium, Jalan Bukit Desa 3, Taman Bukit Desa, 58100, Kuala Lumpur",
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
      "https://drive.google.com/thumbnail?id=1FoQ2NRDYQR8EWQOD-aMr2pdxZ-WVWLF6&sz=w800",
      "https://drive.google.com/thumbnail?id=1GyEa6oqMs9iRq3R6xTW4r2dxbv_P3FIg&sz=w800"
    ]
  },
  {
    "id": "565",
    "title": "Apartment",
    "address": "Block A, Anjung Hijau, Jalan 1/155B, Bukit Jalil, 57000, Kuala Lumpur",
    "postcode": "57000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 333000,
    "auctionDate": "23 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "012 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1WAvmDSZIHWKAy86Gz83YQ79RygQ_xTcz&sz=w800",
      "https://drive.google.com/thumbnail?id=1ZUeSkcRrjJCNhGDOiwHkRnWYD4tWGebJ&sz=w800"
    ]
  },
  {
    "id": "566",
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
      "https://drive.google.com/thumbnail?id=1eysz5XcM2knSdjrSmDfvoW9-rPGCGhWM&sz=w800"
    ]
  },
  {
    "id": "567",
    "title": "Office Lot",
    "address": "No. 16-5, Menara Permata Damansara, Jalan Damansara, 60000, Kuala Lumpur",
    "postcode": "60000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 774000,
    "auctionDate": "23 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "572 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1DzTvH7uDi99Q0vQrqaO2ov42sbmucEKp&sz=w800",
      "https://drive.google.com/thumbnail?id=1UOVPwNFCw_Bo7C-I26t9yIvK9VrdGuZ7&sz=w800"
    ]
  },
  {
    "id": "568",
    "title": "Service Apartment",
    "address": "Unit No. C-3-1, Vogue Tower C Mont Kiara Verve Suites, Jalan Kiara 5, Mont Kiara, 50480, Kuala Lumpur",
    "postcode": "50480",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 800000,
    "auctionDate": "23 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "936 sq.ft",
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
    "id": "569",
    "title": "Apartment",
    "address": "Block B, Putra Majestik, Jalan Kasipillay, Off Jalan Ipoh, 51200, Kuala Lumpur",
    "postcode": "51200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 320000,
    "auctionDate": "23 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1mgJuLDaEDIsgkZQ2lP1yUPrgOinJK-Bu&sz=w800",
      "https://drive.google.com/thumbnail?id=15Pl3oVwh4WdPmysq-nfXXIivhxMCLedu&sz=w800",
      "https://drive.google.com/thumbnail?id=1iMpIlqTpuBreMXnYvII2FpLa7Kp5WhvI&sz=w800",
      "https://drive.google.com/thumbnail?id=1ZaW1TUE1HNCX0T-tsS84Ob6bJJuJdooF&sz=w800"
    ]
  },
  {
    "id": "570",
    "title": "2 Storey Terrace House",
    "address": "No. 8, Jalan 30/154, Taman Bukit Anggerik, 56000, Kuala Lumpur",
    "postcode": "56000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 530000,
    "auctionDate": "23 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "762 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "571",
    "title": "Flat",
    "address": "Block D, No. 3, Jalan Bukit Jalil Indah 4, Taman LTAT, Bukit Jalil, 57000, Kuala Lumpur",
    "postcode": "57000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 220000,
    "auctionDate": "23 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "743 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "572",
    "title": "Service Apartment",
    "address": "Unit No. C-8-1, Block C, Putra Majestik, Jalan Kasipillay, 51200, Kuala Lumpur",
    "postcode": "51200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 350000,
    "auctionDate": "23 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "012 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1mgJuLDaEDIsgkZQ2lP1yUPrgOinJK-Bu&sz=w800",
      "https://drive.google.com/thumbnail?id=15Pl3oVwh4WdPmysq-nfXXIivhxMCLedu&sz=w800",
      "https://drive.google.com/thumbnail?id=1iMpIlqTpuBreMXnYvII2FpLa7Kp5WhvI&sz=w800",
      "https://drive.google.com/thumbnail?id=1ZaW1TUE1HNCX0T-tsS84Ob6bJJuJdooF&sz=w800"
    ]
  },
  {
    "id": "573",
    "title": "Condominium",
    "address": "Unit No. A-5-7, Block A, Endah Regal Condominium, No. 7, Jalan 3/149E, Taman Sri Endah, 57000, Kuala Lumpur",
    "postcode": "57000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 300000,
    "auctionDate": "23 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "023 sq.ft",
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
    "id": "574",
    "title": "Service Apartment",
    "address": "Pavilion (Le Pavilion), Jalan Puteri 7/13, Bandar Puteri, 47100 Puchong, Selangor",
    "postcode": "47100",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 473850,
    "auctionDate": "23 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "958 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1_hPtsYOqrzOxIqbaQGDMwDR5RI1QkkWo&sz=w800",
      "https://drive.google.com/thumbnail?id=1pPAPQ1uhRdVEXIbk52KjD1t2nQwPy3t6&sz=w800"
    ]
  },
  {
    "id": "575",
    "title": "Apartment",
    "address": "Unit No. 01-07-05, Block 1, Pangsapuri Seri Jati, No. 2, Jalan Setia Gemilang U13/45C, 40170 Shah Alam, Selangor",
    "postcode": "40170",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 243000,
    "auctionDate": "23 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "818 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "576",
    "title": "Apartment",
    "address": "Block 11, Tingkat 1, Jalan Dawai 16/2. Seksyen 16, 40200 Shah Alam, Selangor",
    "postcode": "40200",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 100000,
    "auctionDate": "23 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "560 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1KrveDWWF9zcUuEpgtlYKhrNOV66RcSga&sz=w800"
    ]
  },
  {
    "id": "577",
    "title": "Apartment",
    "address": "Unit No. C-410, Block C, Saujana Apartment, No. 1, Jalan PJU 10/1C, Damansara Damai, 47830 Petaling Jaya, Selangor",
    "postcode": "47830",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 200000,
    "auctionDate": "23 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "710 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=17xvqg8C7nYWfitcW2LCnqSqR9HMDV8Ga&sz=w800"
    ]
  },
  {
    "id": "578",
    "title": "2 Storey Cluster House",
    "address": "No. 12, Jalan Ecohill 7/3L, Setia Ecohill 2, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 650000,
    "auctionDate": "23 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "920 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1pKpMaJsflhJL6QD11kGoXkFDbPb6AIJ2&sz=w800"
    ]
  },
  {
    "id": "579",
    "title": "Apartment",
    "address": "Unit No. 2C-03-09, Pangsapuri Merdeka Villa, Jalan Merdeka Permai 1, 68000 Ampang, Selangor",
    "postcode": "68000",
    "state": "Selangor",
    "area": "Ampang",
    "reservePrice": 280000,
    "auctionDate": "23 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "926 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1m6qErKsyxM4DyZNEr3s_zYnWaHu367FS&sz=w800"
    ]
  },
  {
    "id": "580",
    "title": "Apartment",
    "address": "Unit No. 291-2F (Premis No 291), Jalan Hulubalang 28, Taman Sentosa, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 80000,
    "auctionDate": "23 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "797 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Gu0_g_yYCidwKXv8mCwVxgtgmAxWjR1e&sz=w800"
    ]
  },
  {
    "id": "581",
    "title": "2 Storey Terrace House",
    "address": "No. 26, Jalan Ecohill 1/1D, Setia Ecohill, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 522000,
    "auctionDate": "23 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1fvRyyVh2sjmAarpN6newXit9PeS1_W-G&sz=w800"
    ]
  },
  {
    "id": "582",
    "title": "2 Storey Terrace House",
    "address": "Jalan Putra Indah 9/13, Putra Heights, 47650 Subang Jaya, Selangor",
    "postcode": "47650",
    "state": "Selangor",
    "area": "Subang Jaya",
    "reservePrice": 800000,
    "auctionDate": "23 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "583",
    "title": "Condominium",
    "address": "Westminster Park, Sri Putramas Condominium, Jalan Putramas 1, Off Jalan Kuching, 51200, Kuala Lumpur",
    "postcode": "51200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 360000,
    "auctionDate": "24 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "098 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "584",
    "title": "Apartment",
    "address": "Unit No. 285-1-2, Casa Ria Apartment, Jalan Jejaka, Taman Maluri, 55100, Kuala Lumpur",
    "postcode": "55100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 262440,
    "auctionDate": "24 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "904 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Ak1fJ201NPWWD0nUZV6jiR59IXo5kr5_&sz=w800"
    ]
  },
  {
    "id": "585",
    "title": "Service Apartment",
    "address": "Unit No. D-23A-8, Block D, Seasons Garden, No. 7, Jalan 1/27E, Seksyen 10, Wangsa Maju, 53300, Kuala Lumpur",
    "postcode": "53300",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 400000,
    "auctionDate": "24 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "893 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1rHxpSSOKsJOjEwOq-DZmn7MmIxh9GRe2&sz=w800"
    ]
  },
  {
    "id": "586",
    "title": "Apartment",
    "address": "Block C, Mentari Court Apartment, Jalan PJS 8/9, Taman Seri Mentari, 46150 Petaling Jaya, Selangor",
    "postcode": "46150",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 196830,
    "auctionDate": "24 Sep 2026 (Thu)",
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
    "id": "588",
    "title": "2.5 Storey Terrace House",
    "address": "Jalan DU 3/4, Taman Damai Utama, 47180 Puchong, Selangor",
    "postcode": "47180",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 950000,
    "auctionDate": "24 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "647 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Wf9gErbIYK8N0yRxchlsHgxLpyIbtRVC&sz=w800"
    ]
  },
  {
    "id": "589",
    "title": "Apartment",
    "address": "Orchis Apartment, Jalan Delima 9/KS09, Bandar Parklands, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 265000,
    "auctionDate": "24 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "829 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1txu-htHHaa7ANytDXiDVDLBI5xSSSrsE&sz=w800"
    ]
  },
  {
    "id": "590",
    "title": "Apartment",
    "address": "Unit No. B-3A-20, Blok B, Pangsapuri Vista Sri Tanjung, Jalan Sri Tanjung 17, Taman Sri Tanjung, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 280000,
    "auctionDate": "24 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "033 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1cyzxPRTOsqpKGw3dx3O3kVMfCd9PJws3&sz=w800",
      "https://drive.google.com/thumbnail?id=1lLjH5bNM9qW32lLAY_0OQynQuVwKR2gD&sz=w800"
    ]
  },
  {
    "id": "591",
    "title": "2 Storey Terrace House",
    "address": "No. 8, Jalan Sungai Kapar Indah 9A, Sungai Kapar Indah, 42200 Kapar, Selangor",
    "postcode": "42200",
    "state": "Selangor",
    "area": "Kapar",
    "reservePrice": 280000,
    "auctionDate": "24 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "829 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "592",
    "title": "1 Storey Terrace House",
    "address": "No. 21, Jalan Kebun Nenas 6A/KS8, Bandar Putera 2, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 420000,
    "auctionDate": "24 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "100 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1QxSR4JREleciEmEZNFcuFd_wvU1fVO6L&sz=w800"
    ]
  },
  {
    "id": "593",
    "title": "Apartment",
    "address": "Unit No. B9-17-06, Block 9, Desa Mentari 2, Jalan PJS 2B/1, 46150 Petaling Jaya, Selangor",
    "postcode": "46150",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 131220,
    "auctionDate": "24 Sep 2026 (Thu)",
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
    "id": "594",
    "title": "1 Storey Terrace House",
    "address": "No. 12, Jalan Tulip Jingga 3, Taman Tulip, Kanchong Darat, 42700 Banting, Selangor",
    "postcode": "42700",
    "state": "Selangor",
    "area": "Banting",
    "reservePrice": 243000,
    "auctionDate": "24 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "595",
    "title": "2 Storey Terrace House",
    "address": "No. 15, Jalan JS 5, Taman Bentara, 42500 Telok Panglima Garang, Selangor",
    "postcode": "42500",
    "state": "Selangor",
    "area": "Telok Panglima Garang",
    "reservePrice": 400000,
    "auctionDate": "24 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "798 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jzgEVeorCoDEp3gxPokKDuhYzigziuy1&sz=w800"
    ]
  },
  {
    "id": "596",
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
    "id": "597",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=12FRmAacUHYX62NcP-_3tUbiZEPZCdKpy&sz=w800"
    ]
  },
  {
    "id": "598",
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
    "id": "599",
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
      "https://drive.google.com/thumbnail?id=1FNv9rLoPjGg-PU0Aq7YVGmaTFJgMZkZj&sz=w800"
    ]
  },
  {
    "id": "600",
    "title": "Apartment",
    "address": "Unit No. A-7-4, Teratak Muhibbah 1 Blok A, Jalan Desa Bahagia, Taman Danau Desa, 58100, Kuala Lumpur",
    "postcode": "58100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 124000,
    "auctionDate": "28 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "602 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "601",
    "title": "Apartment",
    "address": "Unit No. B-02-11, Block B, Pangsapuri Sri Penara, Jalan Sri Permaisuri 1, Bandar Sri Permaisuri, 56000, Kuala Lumpur",
    "postcode": "56000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 203000,
    "auctionDate": "28 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "646 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1VhqXFFZCPA_mMxqJhDfLdNRRDway0I7T&sz=w800",
      "https://drive.google.com/thumbnail?id=1-QkrmQcBM7aS_Q6rFKbEHQ-5vcxZw0bs&sz=w800"
    ]
  },
  {
    "id": "602",
    "title": "3 Storey Terrace House",
    "address": "Jalan Damai Impian 2, Alam Damai, 56000, Kuala Lumpur",
    "postcode": "56000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 1233000,
    "auctionDate": "28 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "440 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1O24Y9eOwRwQwDfd9xUCEqbZNWigMNtyc&sz=w800"
    ]
  },
  {
    "id": "603",
    "title": "Apartment",
    "address": "Unit No. 02-02-27, Pangsapuri Subang Suria, Jalan Bintang U5/33, Seksyen U5, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 175000,
    "auctionDate": "28 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "775 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1IosFr9O1GJPG8-Q9MMmela7kfPtjJd1v&sz=w800"
    ]
  },
  {
    "id": "604",
    "title": "Residensi Hijauan Condominium (The Greens)",
    "address": "Residensi Hijauan (The Greens), Jalan Budiman 22/3, Seksyen 22, 40300 Shah Alam, Selangor",
    "postcode": "40300",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 307800,
    "auctionDate": "28 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "915 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1K38tptOTVIA9Qhmmu2U9cPhSu1NKXjW1&sz=w800",
      "https://drive.google.com/thumbnail?id=1knmlfRz6NVdyyoa9_RJbiCBWj0avYrb2&sz=w800"
    ]
  },
  {
    "id": "605",
    "title": "Apartment",
    "address": "Unit No D208, Blok D, Pangsapuri Sri Cempaka, Bandar Puchong Jaya, 47170 Puchong, Selangor",
    "postcode": "47170",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 300000,
    "auctionDate": "28 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "807 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1SQaS2Lf6tArSIgKKhTN2DV_0FyC_Xr2o&sz=w800"
    ]
  },
  {
    "id": "606",
    "title": "2 Storey Terrace House",
    "address": "Jalan Kebun Nenas 6G/KS8, Bandar Putera 2, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 500000,
    "auctionDate": "28 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1QxSR4JREleciEmEZNFcuFd_wvU1fVO6L&sz=w800"
    ]
  },
  {
    "id": "607",
    "title": "1 Storey Terrace House",
    "address": "No. 9, Jalan BK 1/2, Bandar Kinrara, 47180 Puchong, Selangor",
    "postcode": "47180",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 370000,
    "auctionDate": "28 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "098 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1MZZzk6rM0iQQTWnyX7XN52xqSkmOXirj&sz=w800"
    ]
  },
  {
    "id": "608",
    "title": "2.5 Storey Semi Detached House",
    "address": "No. 5, Jalan SP 5A/8, Laman Granview, Saujana Puchong, 47110 Puchong, Selangor",
    "postcode": "47110",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 1296000,
    "auctionDate": "28 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "208 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "609",
    "title": "Flat",
    "address": "Unit No. B-4-16, Block B, Kondominium Indah, Jalan PJU 10/9, Prima Damansara, 47830 Petaling Jaya, Selangor",
    "postcode": "47830",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 150000,
    "auctionDate": "28 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "753 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1QwNs4tSTUrZ_qAIBWvPJ_KwOk6KfoOTd&sz=w800"
    ]
  },
  {
    "id": "610",
    "title": "2 Storey Terrace House",
    "address": "No. 43, Jalan Palma 1/5, Bandar Hill Park, 42300 Bandar Puncak Alam, Selangor",
    "postcode": "42300",
    "state": "Selangor",
    "area": "Bandar Puncak Alam",
    "reservePrice": 600000,
    "auctionDate": "28 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "604 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1mxHwl2hJhhq_lPJYXdLS08Te7zvJBIbx&sz=w800"
    ]
  },
  {
    "id": "611",
    "title": "Service Apartment",
    "address": "Vogue Tower C, Mont' Kiara Verve Suites, No. 8, Jalan Kiara 5, Mont Kiara, 50480, Kuala Lumpur",
    "postcode": "50480",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 630000,
    "auctionDate": "30 Sep 2026 (Wed)",
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
    "id": "612",
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
      "https://drive.google.com/thumbnail?id=1wSA29JFOLQWxleQzSfeChymjKdSj7ktd&sz=w800",
      "https://drive.google.com/thumbnail?id=1OUT_0Uk_KdrWd5aRyLLBjIUvg9JQL8VI&sz=w800"
    ]
  },
  {
    "id": "613",
    "title": "2 Storey Terrace House",
    "address": "Jalan 3/60C, Taman Segambut Muda, 51200, Kuala Lumpur",
    "postcode": "51200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 340000,
    "auctionDate": "30 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "700 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1RgMOUhHAhrjiw0mfQSk2TR9rItR4Yz2k&sz=w800"
    ]
  },
  {
    "id": "614",
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
    "id": "615",
    "title": "Condominium",
    "address": "Unit No. A-L26-12B, Block A, Residensi Hijauan Bukit Jalil, Jalan Jalil Perwira 2, Bukit Jalil, 58200, Kuala Lumpur",
    "postcode": "58200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 340000,
    "auctionDate": "30 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "829 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1iLPuYTF2-1BHLPG_oOg0uYeOfl5hsg_f&sz=w800"
    ]
  },
  {
    "id": "616",
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
      "https://drive.google.com/thumbnail?id=1Es75GcFGRVbDuAcaC-H1kKwVI4_0ugZI&sz=w800",
      "https://drive.google.com/thumbnail?id=1DE-h7SMbMTVAr7hx5TH1tebT4rO2VSZj&sz=w800",
      "https://drive.google.com/thumbnail?id=1UQu8-AlQkMN9t8dViNTFLoWzuef-Wrv6&sz=w800"
    ]
  },
  {
    "id": "617",
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
    "id": "618",
    "title": "Condominium",
    "address": "Putra Court, Jalan Ipoh Kecil, 50350, Kuala Lumpur",
    "postcode": "50350",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 295245,
    "auctionDate": "1 Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "130 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=11LbKbRMcj6-CMQtjxUwuayW5G--GEfRJ&sz=w800",
      "https://drive.google.com/thumbnail?id=1zNHhNoNXtMrK2SycRRQdRT20WfhlIPx9&sz=w800"
    ]
  },
  {
    "id": "619",
    "title": "Condominium",
    "address": "Block G, Ketumbar Hill Condominium, No. 79, Jalan Ketumbar, Taman Cheras Utama, 56100, Kuala Lumpur",
    "postcode": "56100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 340200,
    "auctionDate": "1 Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1-LZS3jiuFVS_dgPEsJPbNOd24s4B45gD&sz=w800",
      "https://drive.google.com/thumbnail?id=1lGJCkGO9PrupCO_BUwrrqA_XmshHtaNx&sz=w800"
    ]
  },
  {
    "id": "620",
    "title": "2 Storey Terrace House",
    "address": "Jalan KE 11/3, Kota Emerald, 48000 Rawang, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 576000,
    "auctionDate": "1 Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "370 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1RPWdUBgq79WlGDLuKWH1DPu_Gq_uITpc&sz=w800"
    ]
  },
  {
    "id": "621",
    "title": "2 Storey Terrace House",
    "address": "Jalan Tun Perak 9, Taman Tun Perak, 48000 Rawang, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 600000,
    "auctionDate": "1 Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "542 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1G7067AxJPiWcXJ_PRXAGRxsqC6UcgOGJ&sz=w800"
    ]
  },
  {
    "id": "622",
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
      "https://drive.google.com/thumbnail?id=1tQA-veQiIKE7GtAraBNJ5j2u6VCuI4O2&sz=w800"
    ]
  },
  {
    "id": "623",
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
    "id": "624",
    "title": "1 Storey Terrace House",
    "address": "No. 26, Jalan Tan Sri Manikavasagam 11 (on site known as Jalan Manikavasagam 11), Taman Menara Maju, 41000 Klang, Selangor",
    "postcode": "41000",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 256000,
    "auctionDate": "7 Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1UYs5haidS6cKB0exd-w-Qxj_o0sOErdr&sz=w800"
    ]
  },
  {
    "id": "625",
    "title": "Service Apartment",
    "address": "Unit No. B-18-02, Tower B, Astetica Residences (Residensi Estetika), Jalan Dagang SB, The Mines Resort City, 43300 Seri Kembangan, Selangor",
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
      "https://drive.google.com/thumbnail?id=13Dj3quwRdF3-Kbt-L164Bg8m1g1oi7rt&sz=w800"
    ]
  },
  {
    "id": "626",
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
    "id": "627",
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
      "https://drive.google.com/thumbnail?id=12T0ez8r9ndRRzZOIjuvEvYfQDQWKBRHZ&sz=w800"
    ]
  },
  {
    "id": "628",
    "title": "Terrace House",
    "address": "No. 10, Jalan Sepah Puteri 5/20A, Damansara Emas, PJU 5, Kota Damansara, 47810 Petaling Jaya, Selangor",
    "postcode": "47810",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 840000,
    "auctionDate": "8 Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=12a6Mv3tdxm72Y21KmaqKOd0le5hh8Lu_&sz=w800"
    ]
  },
  {
    "id": "629",
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
      "https://drive.google.com/thumbnail?id=1SKFebSLfJBILyG258_uEyd92uMh5r8s4&sz=w800"
    ]
  },
  {
    "id": "630",
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
    "id": "631",
    "title": "2 Storey Terrace House",
    "address": "Jalan SB 7/4, Taman Seri Bestari, 43900 Sepang, Selangor",
    "postcode": "43900",
    "state": "Selangor",
    "area": "Sepang",
    "reservePrice": 450000,
    "auctionDate": "22 Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "632",
    "title": "1 Storey Terrace House",
    "address": "Lorong Dato Harun 38C/KS13, Taman Dato Harun 7, Kampung Sungai Kembong, 42920 Pulau Indah, Selangor",
    "postcode": "42920",
    "state": "Selangor",
    "area": "Pulau Indah",
    "reservePrice": 300000,
    "auctionDate": "23 Oct 2026 (Fri)",
    "landArea": "—",
    "builtUp": "281 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "633",
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
    "id": "634",
    "title": "Apartment",
    "address": "Teratai Mewah Apartment, Blok 4, Jalan Langkawi, Taman Teratai Mewah, 53000, Kuala Lumpur",
    "postcode": "53000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 230000,
    "auctionDate": "28 Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "656 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1ergYckYfRvkdT0anTeE5KwDhmyZcIJq1&sz=w800"
    ]
  },
  {
    "id": "635",
    "title": "Condominium",
    "address": "Unit No. 42B-5-2, Bam Villa, Jalan Pria, Taman Maluri, 55100, Kuala Lumpur",
    "postcode": "55100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 340000,
    "auctionDate": "28 Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "173 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "636",
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
      "https://drive.google.com/thumbnail?id=1xq9ekk1ux7VpsJBH7-1vqoh6L_NhPB3X&sz=w800",
      "https://drive.google.com/thumbnail?id=1CrH1PehQzobzwCG1obdB2S2VMwRZsmHC&sz=w800"
    ]
  },
  {
    "id": "637",
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
    "id": "638",
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
      "https://drive.google.com/thumbnail?id=1bi90OANkrDsZfslyrZ4td_2CugJMXfGy&sz=w800"
    ]
  },
  {
    "id": "639",
    "title": "Condominium",
    "address": "Block A, Vista Amani Condominium, Jalan Tasik Permaisuri 3, Bandar Tun Razak, 56000, Kuala Lumpur",
    "postcode": "56000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 410000,
    "auctionDate": "1 Dec 2026 (Tue)",
    "landArea": "—",
    "builtUp": "109 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Q8JvckZhZl0P0azccy4pBBZVESfN3dL9&sz=w800"
    ]
  },
  {
    "id": "640",
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
      "https://drive.google.com/thumbnail?id=1Bn5cv3ZPBaFv3_aNcq54JiMen-WKhivA&sz=w800"
    ]
  },
  {
    "id": "641",
    "title": "2 Storey Terrace House",
    "address": "No. 56, Jalan USJ 1/4E, Taman Subang Mewah, 47620 Subang Jaya, Selangor",
    "postcode": "47620",
    "state": "Selangor",
    "area": "Subang Jaya",
    "reservePrice": 580000,
    "auctionDate": "10 Dec 2026 (Thu)",
    "landArea": "—",
    "builtUp": "194 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1nKFAYHz6qFyg4flSZZcXmaL4El0CBLZw&sz=w800"
    ]
  },
  {
    "id": "642",
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
    "id": "643",
    "title": "3 Storey Semi Detached House",
    "address": "Vila Laman Cahaya, Jalan Cahaya 3, Off Jalan Datuk Sulaiman, 60000, Kuala Lumpur",
    "postcode": "60000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 2500000,
    "auctionDate": "19 Dec 2026 (Sat)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1mnFaGggXQaMUyWPoNQWP_SVgzGIzV5kr&sz=w800"
    ]
  },
  {
    "id": "644",
    "title": "[9 min to Pantai Tanjung Biru] Apartment [Close to Tanjung Tuan Recreational Forest]",
    "address": "Unit No. D-5-36, PD Tiara Bay Apartment (Tiara Beach Resort), Batu 13 Jalan Pantai, 71250 Pasir Panjang, Port Dickson, Negeri Sembilan",
    "postcode": "71250",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 25800,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "592 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=18Ia_r1ryFB19mCz5DKzn3JEug3LuX00-&sz=w800",
      "https://drive.google.com/thumbnail?id=1ukGrTZoQIqpeSkMMRXdey2y1WC5IqCpo&sz=w800"
    ]
  },
  {
    "id": "645",
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
    "id": "646",
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
    "id": "647",
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
    "id": "648",
    "title": "1 Storey Terrace House",
    "address": "No. 310, Jalan Desa PD 2/5, Taman Desa PD 2, 71200 Port Dickson, Negeri Sembilan",
    "postcode": "71200",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 162000,
    "auctionDate": "10 Aug 2026 (Mon)",
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
    "id": "649",
    "title": "Apartment",
    "address": "Unit No. Blok F-4-16, Jalan Sikamat, Seremban Putra, 70400 Seremban, Negeri Sembilan",
    "postcode": "70400",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 129600,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "818 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "650",
    "title": "1 Storey Terrace House",
    "address": "No. 2213, Jalan RJ 1/25, Taman Rasah Jaya, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 160000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1kZv29DthQRe4BUjXdxzICN1lMGumEs0E&sz=w800",
      "https://drive.google.com/thumbnail?id=1yYW_v03nncFf9JgzSwZkWbYANWmuckgo&sz=w800",
      "https://drive.google.com/thumbnail?id=1aGaxR4gvFRn2O_-qqMdaFnbZmU96v3kp&sz=w800"
    ]
  },
  {
    "id": "651",
    "title": "1 Storey Terrace House",
    "address": "No. 1623, Jalan Semarak 44, Taman Panchor Jaya, 70400 Seremban, Negeri Sembilan",
    "postcode": "70400",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 300000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "679 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1oTsSUAhkjxvrRuKfn1qH8oFRMdOd8AHT&sz=w800",
      "https://drive.google.com/thumbnail?id=1dXcs4MQ7dErtri493G84ZtYMZNa7zTFa&sz=w800",
      "https://drive.google.com/thumbnail?id=1c_CoRDaThn_sDqFqw7dvzDDm5AZNMWQ7&sz=w800",
      "https://drive.google.com/thumbnail?id=1DrvbJa39b9NPQWr5krQF_HGITitUJ9CR&sz=w800",
      "https://drive.google.com/thumbnail?id=1fg6QuN8LxrD3K023zwlDQlt-7SGQvFaP&sz=w800"
    ]
  },
  {
    "id": "652",
    "title": "Flat",
    "address": "Unit No. 3-G-9, Blok 3, Rumah Pangsa Semarak II, Taman Semarak II, 71800 Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 110000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "678 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "653",
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
    "id": "654",
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
    "id": "655",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1vXJyfqD8IjX5ANnZ69Gt55yUFId59rBe&sz=w800"
    ]
  },
  {
    "id": "656",
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
    "id": "657",
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
    "id": "658",
    "title": "2 Storey Bungalow",
    "address": "Lot 10078, Jalan Tasik Senangin 9/8, 71750, Bandar Tasik Senangin, Lenggeng, Negeri Sembilan",
    "postcode": "10078",
    "state": "Negeri Sembilan",
    "area": "Lenggeng",
    "reservePrice": 513000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "004 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1nhM7zphX0EDYJFO8UzKHHxWvVT-1ie63&sz=w800"
    ]
  },
  {
    "id": "659",
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
    "id": "660",
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
    "id": "661",
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
    "id": "662",
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
    "id": "663",
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
    "id": "664",
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
    "id": "665",
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
    "id": "666",
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
    "id": "667",
    "title": "1 Storey Terrace House",
    "address": "No. 103, Jalan Rasa Sayang 4, Taman Rasa Sayang, 72000 Kuala Pilah, Negeri Sembilan",
    "postcode": "72000",
    "state": "Negeri Sembilan",
    "area": "Kuala Pilah",
    "reservePrice": 90000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "194 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1-LnxnlW_SQvzqC2B3CMAaCo-aPjmMCjO&sz=w800",
      "https://drive.google.com/thumbnail?id=1qjJPmA7Q5S5KyDMRcvhx_ZWddYDBwVLn&sz=w800",
      "https://drive.google.com/thumbnail?id=1hYADJkNyleGOtgrA8VcbHhxHQtvgR4Uw&sz=w800"
    ]
  },
  {
    "id": "668",
    "title": "3 Storey Terrace House",
    "address": "No. 132, Jalan Forest Heights 3/7, Precinct 3, Seremban Forest Heights, 70450 Seremban, Negeri Sembilan",
    "postcode": "70450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 800000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "920 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1wEkJGISHjuGxEuDK8uvWrD0uXjQRURRy&sz=w800",
      "https://drive.google.com/thumbnail?id=11zdgOHLTu5n9CZkjLDFX2f5-vqv8T4q7&sz=w800"
    ]
  },
  {
    "id": "669",
    "title": "1 Storey Terrace House",
    "address": "No. 117, Jalan Zamrud 10, Taman Zamrud, 72200 Batu Kikir, Negeri Sembilan",
    "postcode": "72200",
    "state": "Negeri Sembilan",
    "area": "Batu Kikir",
    "reservePrice": 283500,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "594 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1dxBG-GAllJ9WPE5N33TB011vHa5pjkvb&sz=w800"
    ]
  },
  {
    "id": "670",
    "title": "2 Storey Detached House",
    "address": "No. 8, Jalan Markisa 2 (Jalan Markisa 1), Taman Pinggiran Markisa, 71800 Labu, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Labu",
    "reservePrice": 720000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "920 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13-zihJhvauKpVjgk3yJ5ZF1r0mIyDche&sz=w800"
    ]
  },
  {
    "id": "671",
    "title": "Apartment",
    "address": "No. D-5-31, Block D, PD Tiara Bay Apartment, Batu 13, Jalan Pantai, 71250, Port Dickson, Negeri Sembilan",
    "postcode": "71250",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 40500,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "355 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=18Ia_r1ryFB19mCz5DKzn3JEug3LuX00-&sz=w800",
      "https://drive.google.com/thumbnail?id=1ukGrTZoQIqpeSkMMRXdey2y1WC5IqCpo&sz=w800"
    ]
  },
  {
    "id": "672",
    "title": "2 Storey Terrace House",
    "address": "No. 74, Jalan SP 5, Taman Senawang Perdana, 71450 Seremban, Negeri Sembilan",
    "postcode": "71450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 666000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "300 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1owzwKvwzLNvAEFNSHril1YcvaCsuz6ml&sz=w800"
    ]
  },
  {
    "id": "673",
    "title": "Vacant Land",
    "address": "Lot 23790, Jalan Palma Jaya 9, Taman Palma Jaya, 70400 Seremban, Negeri Sembilan",
    "postcode": "23790",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 116640,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "197 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1_-bujcEFmspPni31Nhm9CDD9NdiNF0a6&sz=w800"
    ]
  },
  {
    "id": "674",
    "title": "2 Storey Terrace House",
    "address": "No. 1457, Jalan RJ 2/18, Taman Rasah Jaya, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 162000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "396 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1kZv29DthQRe4BUjXdxzICN1lMGumEs0E&sz=w800",
      "https://drive.google.com/thumbnail?id=1yYW_v03nncFf9JgzSwZkWbYANWmuckgo&sz=w800",
      "https://drive.google.com/thumbnail?id=1aGaxR4gvFRn2O_-qqMdaFnbZmU96v3kp&sz=w800"
    ]
  },
  {
    "id": "675",
    "title": "Land",
    "address": "Lot 5578, Kampung Baru, Blok A, Ampangan, 70400 Seremban, Negeri Sembilan",
    "postcode": "70400",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 200000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "095 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "676",
    "title": "2 Storey Terrace House",
    "address": "No. 1285, Jalan Nusa Intan 1/11, Taman Nusa Intan, 70400 Seremban, Negeri Sembilan",
    "postcode": "70400",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 490000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1FZov8d-C9GHUfbntXJm4mVM7WC2zBV58&sz=w800",
      "https://drive.google.com/thumbnail?id=1J9PP_Q05m0jz4teAqLmJGr1GkAoi5RLc&sz=w800"
    ]
  },
  {
    "id": "677",
    "title": "1 Storey Terrace House",
    "address": "No. 237, Jalan Pinggiran Bayu 2/2, Desa Pinggiran Bayu, 71700 Mantin, Negeri Sembilan",
    "postcode": "71700",
    "state": "Negeri Sembilan",
    "area": "Mantin",
    "reservePrice": 280000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "496 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "678",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1sOR4EDqXMtQzVz7EeBOxOmiu3h5EjIey&sz=w800",
      "https://drive.google.com/thumbnail?id=1R7TfEVn0i7yrfBXNuotCNlIRrLltLLkA&sz=w800"
    ]
  },
  {
    "id": "679",
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
    "id": "680",
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
    "id": "681",
    "title": "1 Storey Terrace House",
    "address": "Taman Senawang Jaya, 70450 Seremban, Negeri Sembilan",
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
    "id": "682",
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
    "id": "683",
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
    "id": "684",
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
    "id": "685",
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
    "id": "686",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1qgas9ZCxAt9sz65vkJNZSKExHQt-RFd9&sz=w800"
    ]
  },
  {
    "id": "687",
    "title": "Agricultural Land",
    "address": "Lot 6308, Hijauan Height, 71300 Rembau, Negeri Sembilan",
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
      "https://drive.google.com/thumbnail?id=1mENTNe_4Xf8mRwut7xai1sr6RI-LSORa&sz=w800"
    ]
  },
  {
    "id": "688",
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
      "https://drive.google.com/thumbnail?id=1G1Zz1aMmjO2Idd8VQcH5BcZdSAjDjtKW&sz=w800"
    ]
  },
  {
    "id": "689",
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
    "id": "690",
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
    "id": "691",
    "title": "1 Storey Detached House",
    "address": "No. 102, Jalan Bukit Senawang Perdana 3, Taman Bukit Senawang Perdana, 71450 Seremban, Negeri Sembilan",
    "postcode": "71450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 360000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "251 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xtVyA6ukYJTTJBRoj35RH5RiN9VUa9r-&sz=w800"
    ]
  },
  {
    "id": "692",
    "title": "2 Storey Shop Office",
    "address": "Unit No. 13, Jalan Prima 1, Lukut Prima, 71010 Port Dickson, Negeri Sembilan",
    "postcode": "71010",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 650000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1N-OUPP1LKyH9s6pB0cMSh0HrlUrZBwl8&sz=w800"
    ]
  },
  {
    "id": "693",
    "title": "1 Storey Terrace House",
    "address": "Jalan Politeknik 15, Taman Politeknik, 71050 Port Dickson, Negeri Sembilan",
    "postcode": "71050",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 210000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1ayIrqFMEx_0L830SyXJg8p45CCJu86GN&sz=w800"
    ]
  },
  {
    "id": "694",
    "title": "2 Storey Terrace House",
    "address": "No. 569, Lorong Iringan Bayu 35/9, Precint 3, Taman Iringan Bayu, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 297000,
    "auctionDate": "13 Aug 2026 (Thu)",
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
    "id": "695",
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
    "id": "696",
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
    "id": "697",
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
    "id": "698",
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
    "id": "699",
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
    "id": "700",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xtVyA6ukYJTTJBRoj35RH5RiN9VUa9r-&sz=w800"
    ]
  },
  {
    "id": "701",
    "title": "1 Storey Terrace House",
    "address": "No. 94, Jalan Bunga Raya 2, Taman Bunga Raya, 71700 Mantin, Negeri Sembilan",
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
    "id": "702",
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
    "id": "703",
    "title": "2 Storey Terrace House",
    "address": "No. 592, Jalan Sejahtera 28 (Lorong 28), Taman Acbe, 72100 Bahau, Negeri Sembilan",
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
      "https://drive.google.com/thumbnail?id=1Ht2y4JGcnX8AUCsr2LcZ1KnZWHStxU3P&sz=w800"
    ]
  },
  {
    "id": "704",
    "title": "2 Storey Terrace House",
    "address": "Jalan Laman Sendayan 1A/4, Laman Sendayan, 71950 Bandar Sri Sendayan, Negeri Sembilan",
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
    "id": "705",
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
    "id": "706",
    "title": "2 Storey Terrace House",
    "address": "No. 86, Jalan Springhill 2/18, 71010 Bandar Springhill, Port Dickson, Negeri Sembilan",
    "postcode": "71010",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 109350,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "796 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1iX33VkUNNWAgg2Ctl3xhhMEQwWB11bFS&sz=w800"
    ]
  },
  {
    "id": "707",
    "title": "1 Storey Terrace House",
    "address": "No. 6, Jalan Ros Merah 9, Taman Kobena, Senawang, 70450 Seremban, Negeri Sembilan",
    "postcode": "70450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 145800,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "205 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JwRgcRCMKhjxgyzTie6kfUYhwu7sKX60&sz=w800",
      "https://drive.google.com/thumbnail?id=1fK7EE8OPJG4fFn59sV53XC48bIZOKKRZ&sz=w800"
    ]
  },
  {
    "id": "708",
    "title": "1 Storey Terrace House",
    "address": "No. 280, Jalan Sri Pulasan 6, Taman Sri Pulasan, 70200 Seremban, Negeri Sembilan",
    "postcode": "70200",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 100000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1u9UgmboYfKhGxW6FFbahtCpKRPQlCTKv&sz=w800"
    ]
  },
  {
    "id": "709",
    "title": "Land",
    "address": "Lot 13024, Bandar Tasik Senangin, 71750 Lengeng, Negeri Sembilan",
    "postcode": "13024",
    "state": "Negeri Sembilan",
    "area": "Lengeng",
    "reservePrice": 130000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "004 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1nhM7zphX0EDYJFO8UzKHHxWvVT-1ie63&sz=w800"
    ]
  },
  {
    "id": "710",
    "title": "Apartment",
    "address": "Unit No. M2-2-1, Flat Taman Andalas, Jalan Andalas, 71700 Mantin, Negeri Sembilan",
    "postcode": "71700",
    "state": "Negeri Sembilan",
    "area": "Mantin",
    "reservePrice": 40000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "645 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1TFSno8ZNVRv4GhFEH3odemsqVOf7i8aP&sz=w800"
    ]
  },
  {
    "id": "711",
    "title": "1 Storey Terrace House",
    "address": "No. 274, Jalan Desa PD 2/4, Taman Desa PD 2, 71200 Port Dickson, Negeri Sembilan",
    "postcode": "71200",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 117450,
    "auctionDate": "13 Aug 2026 (Thu)",
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
    "id": "712",
    "title": "2 Storey Terrace House",
    "address": "No. 238, Jalan Nada Alam 3/1, Taman Nada Alam, 71700 Mantin, Negeri Sembilan",
    "postcode": "71700",
    "state": "Negeri Sembilan",
    "area": "Mantin",
    "reservePrice": 349920,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1nwgiOw4LN5GbZrHtbQjzUNvdfcOFc48H&sz=w800"
    ]
  },
  {
    "id": "713",
    "title": "Commercial Land",
    "address": "Lot No. 12832, Taman Seremban Jaya, 70450 Seremban, Negeri Sembilan",
    "postcode": "12832",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 1296000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "673 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1x5qa4tzadNrbPLYnuJqAQEvFsK_-kiB6&sz=w800",
      "https://drive.google.com/thumbnail?id=1kkx413dPRxjPpbzMsTOPGBu8s2Fq743R&sz=w800"
    ]
  },
  {
    "id": "714",
    "title": "1 Storey Semi Detached House",
    "address": "Lot 7063, Taman Merak, 73200 Gemencheh, Negeri Sembilan",
    "postcode": "73200",
    "state": "Negeri Sembilan",
    "area": "Gemencheh",
    "reservePrice": 251100,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "342 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "715",
    "title": "2 Storey Terrace House",
    "address": "No. 97, Jalan Nusa Intan 2/6, Taman Nusa Intan, 70400 Seremban, Negeri Sembilan",
    "postcode": "70400",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 570000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "293 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1FZov8d-C9GHUfbntXJm4mVM7WC2zBV58&sz=w800",
      "https://drive.google.com/thumbnail?id=1J9PP_Q05m0jz4teAqLmJGr1GkAoi5RLc&sz=w800"
    ]
  },
  {
    "id": "716",
    "title": "Apartment",
    "address": "Unit No. M2-3-15, Block M2, Tingkat Tiga, Jalan Mekanikal 2, Taman Nilai 3, 71800 Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 70000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "727 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "717",
    "title": "1 Storey Terrace House",
    "address": "No. 1680, Off Jalan Rasah, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 225000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "765 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "718",
    "title": "1 Storey Terrace House",
    "address": "No. 76, Taman Gadong, 71350, Rembau, Negeri Sembilan",
    "postcode": "71350",
    "state": "Negeri Sembilan",
    "area": "Rembau",
    "reservePrice": 200000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "948 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "719",
    "title": "2 Storey Split Level Detached House",
    "address": "No. 1031, Jalan Rasah, Taman Bukit Rasah, 70300 Seremban, Negeri Sembilan",
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
    "id": "720",
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
    "id": "721",
    "title": "1 Storey Terrace House",
    "address": "No. 1055, Jalan Politeknik 20, Taman Politeknik, 71050 Port Dickson, Negeri Sembilan",
    "postcode": "71050",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 178200,
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
    "id": "722",
    "title": "Flat",
    "address": "Unit No. Block 16-4-11, Taman Semarak 2, 71800 Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 100000,
    "auctionDate": "18 Aug 2026 (Tue)",
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
    "id": "723",
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
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1oob7lX4ZxA2lg78ibHdAHQ-JmR_2IsT0&sz=w800"
    ]
  },
  {
    "id": "724",
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
    "id": "725",
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
    "id": "726",
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
    "id": "727",
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
    "id": "728",
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
    "id": "729",
    "title": "2 Storey Terrace Shop Office",
    "address": "No. 73, Jalan S2 F2, Garden Homes, Seremban 2, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 972000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "056 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1PzBfuOkXaVpxpb0CB2roo7GR5BZ8osO7&sz=w800"
    ]
  },
  {
    "id": "730",
    "title": "2 Storey Terrace Shop Office",
    "address": "No. 74, Jalan S2 F2, Garden Homes, Seremban 2, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 729000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1PzBfuOkXaVpxpb0CB2roo7GR5BZ8osO7&sz=w800"
    ]
  },
  {
    "id": "731",
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
    "id": "732",
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
    "id": "733",
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
    "id": "734",
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
    "id": "735",
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
    "id": "736",
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
    "id": "737",
    "title": "2 Storey Terrace House",
    "address": "No. 963, Jalan Suriaman 3/4, Suriaman 3, 71950 Bandar Sri Sendayan, Negeri Sembilan",
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
    "id": "738",
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
    "id": "739",
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
    "id": "740",
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
    "id": "741",
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
    "id": "742",
    "title": "1 Storey Terrace House",
    "address": "No. 1308, Jalan BIL 44, Taman Bayu Indera Lukut, 71010 Port Dickson, Negeri Sembilan",
    "postcode": "71010",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 330000,
    "auctionDate": "26 Aug 2026 (Wed)",
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
    "id": "743",
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
    "id": "744",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1nhM7zphX0EDYJFO8UzKHHxWvVT-1ie63&sz=w800"
    ]
  },
  {
    "id": "745",
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
    "id": "746",
    "title": "1 Storey Terrace House",
    "address": "No. 177, Jalan Rasa Sayang 6, Taman Rasa Sayang, 72000 Kuala Pilah, Negeri Sembilan",
    "postcode": "72000",
    "state": "Negeri Sembilan",
    "area": "Kuala Pilah",
    "reservePrice": 87480,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "194 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1-LnxnlW_SQvzqC2B3CMAaCo-aPjmMCjO&sz=w800",
      "https://drive.google.com/thumbnail?id=1qjJPmA7Q5S5KyDMRcvhx_ZWddYDBwVLn&sz=w800",
      "https://drive.google.com/thumbnail?id=1hYADJkNyleGOtgrA8VcbHhxHQtvgR4Uw&sz=w800"
    ]
  },
  {
    "id": "747",
    "title": "1 Storey Terrace House",
    "address": "No. 469, Jalan Bayan 10, Taman Desa Rasah, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 186300,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "646 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1nonRdphGcU5OvPPUCbYcGvMbiXJ-tBej&sz=w800"
    ]
  },
  {
    "id": "748",
    "title": "1 Storey Terrace House",
    "address": "No. 368, Jalan Politeknik 6A, Taman Politeknik, Batu 9, Jalan Pantai, 71050 Port Dickson, Negeri Sembilan",
    "postcode": "71050",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 137700,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1ayIrqFMEx_0L830SyXJg8p45CCJu86GN&sz=w800"
    ]
  },
  {
    "id": "749",
    "title": "1 Storey Terrace House",
    "address": "No. 526, Jalan Bukit Sendayan 20, Taman Bukit Sendayan, 71900 Labu, Negeri Sembilan",
    "postcode": "71900",
    "state": "Negeri Sembilan",
    "area": "Labu",
    "reservePrice": 168000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "750",
    "title": "1 Storey Terrace House",
    "address": "No. 172, Jalan Desa PD 4, Taman Desa PD, 71200 Port Dickson, Negeri Sembilan",
    "postcode": "71200",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 105300,
    "auctionDate": "26 Aug 2026 (Wed)",
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
    "id": "751",
    "title": "1 Storey Terrace House",
    "address": "No. 616, Jalan Desa PD 15, Taman Desa PD, 71200 Port Dickson, Negeri Sembilan",
    "postcode": "71200",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 130500,
    "auctionDate": "26 Aug 2026 (Wed)",
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
    "id": "752",
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
    "id": "753",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1owzwKvwzLNvAEFNSHril1YcvaCsuz6ml&sz=w800",
      "https://drive.google.com/thumbnail?id=1Cuk-QId0ZyR5EfUYigCAdPnnKuxYEq5A&sz=w800",
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "754",
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
    "id": "755",
    "title": "2 Storey Terrace House",
    "address": "No. 435, Jalan Bayu Sutera 2/2, Taman Bayu Sutera, 71960 Port Dickson, Negeri Sembilan",
    "postcode": "71960",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 650000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "218 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1PnWeRa4cMSRnRlyAz9urHCDUqt4ZSl1Y&sz=w800"
    ]
  },
  {
    "id": "756",
    "title": "2 Storey Detached House",
    "address": "No. 37, Jalan Kayangan 4, Taman Kayangan, 71700 Mantin, Negeri Sembilan",
    "postcode": "71700",
    "state": "Negeri Sembilan",
    "area": "Mantin",
    "reservePrice": 680000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "065 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1ZS41vc3sjHeCDtJTthddYRDnayRRrt3s&sz=w800"
    ]
  },
  {
    "id": "757",
    "title": "2 Storey Terrace House",
    "address": "No. 143, Jalan Bukit Citra 2/8, Taman Bukit Citra, 71700 Mantin, Negeri Sembilan",
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
    "id": "758",
    "title": "1 Storey Terrace House",
    "address": "No. 1450, Jalan BIL 49, Taman Bayu Indera Lukut, 71010 Port Dickson, Negeri Sembilan",
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
    "id": "759",
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
    "id": "760",
    "title": "2 Storey Terrace House",
    "address": "No. 1194, Jalan Suriaman 3/14, Suriaman 3, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 405000,
    "auctionDate": "7 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "765 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1tLpQnqQjR0AX-lgYHl8F-rhv_E7DyVFt&sz=w800",
      "https://drive.google.com/thumbnail?id=1-a2q43KaD5drsWu587ZhonHMmPlqS2Rz&sz=w800"
    ]
  },
  {
    "id": "761",
    "title": "2 Storey Terrace House",
    "address": "No. 1505, Jalan Hijayu 3/57, Hijayu 3, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 433350,
    "auctionDate": "7 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "760 sq.ft",
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
    "id": "762",
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
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1smxQpEijUvJ7pi8StlV-a8RrKvoGZkn_&sz=w800"
    ]
  },
  {
    "id": "763",
    "title": "2 Storey Terrace House",
    "address": "No. 111, Jalan Springhill 9/1, Bandar Springhill, 71100 Port Dickson, Negeri Sembilan",
    "postcode": "71100",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 198000,
    "auctionDate": "7 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "960 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1iX33VkUNNWAgg2Ctl3xhhMEQwWB11bFS&sz=w800"
    ]
  },
  {
    "id": "764",
    "title": "Apartment",
    "address": "Unit No. D-1-13, Blok D, Taman Semarak 2, 71800 Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 117000,
    "auctionDate": "7 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "721 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1pwy_t-wqVncP8oO3d63boqBDgH52jaMn&sz=w800",
      "https://drive.google.com/thumbnail?id=1ZMVpTUQnbtbHafXwaVVz_p47y3Aeo7-l&sz=w800",
      "https://drive.google.com/thumbnail?id=19L2QFOlYwihDglXGqKHMb9XU4NHHOsw3&sz=w800"
    ]
  },
  {
    "id": "765",
    "title": "2 Storey Bungalow",
    "address": "Lot 10928, Jalan Tasik Senangin 5/15, 71750, Bandar Tasik Senangin, Lenggeng, Negeri Sembilan",
    "postcode": "10928",
    "state": "Negeri Sembilan",
    "area": "Lenggeng",
    "reservePrice": 513000,
    "auctionDate": "7 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "004 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1nhM7zphX0EDYJFO8UzKHHxWvVT-1ie63&sz=w800"
    ]
  },
  {
    "id": "766",
    "title": "1 Storey Terrace House",
    "address": "No. 41, Jalan Belida 17, Taman Bukit Chedang Fasa 2, 70300 Seremban, Negeri Sembilan",
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
    "id": "767",
    "title": "2 Storey Terrace House",
    "address": "No. 826, Taman Mok Sum, Jalan Rasah, 70300 Seremban, Negeri Sembilan",
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
    "id": "768",
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
    "id": "769",
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
    "id": "770",
    "title": "2 Storey Terrace House",
    "address": "Jalan Sena 1/8, Taman Sena, Sungai Gadut, 71450 Seremban, Negeri Sembilan",
    "postcode": "71450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 480000,
    "auctionDate": "7 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1nXuwn_C-I0lvxOSuiHmfzzKkaIK4cswS&sz=w800"
    ]
  },
  {
    "id": "771",
    "title": "1 Storey Terrace House",
    "address": "No. 24, Jalan Desa PD 1, Taman Desa PD, 71200 Port Dickson, Negeri Sembilan",
    "postcode": "71200",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 129600,
    "auctionDate": "7 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "937 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=17Dc93rKtf4cUtlxOVvgQtMNIK0I1tK_L&sz=w800",
      "https://drive.google.com/thumbnail?id=1_VgjMs_3X9aXEwqqsYe1aWqT3tvzEVHp&sz=w800"
    ]
  },
  {
    "id": "772",
    "title": "1 Storey Terrace House",
    "address": "No. 701, Jalan Desa PD 10, Taman Desa PD, 71200 Port Dickson, Negeri Sembilan",
    "postcode": "71200",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 110000,
    "auctionDate": "7 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "475 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=17Dc93rKtf4cUtlxOVvgQtMNIK0I1tK_L&sz=w800",
      "https://drive.google.com/thumbnail?id=1_VgjMs_3X9aXEwqqsYe1aWqT3tvzEVHp&sz=w800"
    ]
  },
  {
    "id": "773",
    "title": "1 Storey Terrace House",
    "address": "No. 371, Jalan Jasper Jaya 11, Taman Jasper Jaya, 70200 Seremban, Negeri Sembilan",
    "postcode": "70200",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 225000,
    "auctionDate": "7 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "774",
    "title": "1 Storey Terrace House",
    "address": "No. 5583, Jalan Pinggiran Felda 5, Taman Pinggiran Felda, 73400 Gemas, Negeri Sembilan",
    "postcode": "73400",
    "state": "Negeri Sembilan",
    "area": "Gemas",
    "reservePrice": 108000,
    "auctionDate": "7 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1oNXeoGsMIX9_jXyABaWt0Jg4Dbu9kUdN&sz=w800",
      "https://drive.google.com/thumbnail?id=1AsK1Um9-TbOlsR2PA9Ojq2t8ORz4WMtT&sz=w800"
    ]
  },
  {
    "id": "775",
    "title": "1 Storey Terrace House",
    "address": "No. 70, Lorong Wawasan 17, Taman Wawasan, 71010 Lukut, Port Dickson, Negeri Sembilan",
    "postcode": "71010",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 162000,
    "auctionDate": "7 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "431 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1qgas9ZCxAt9sz65vkJNZSKExHQt-RFd9&sz=w800"
    ]
  },
  {
    "id": "776",
    "title": "1 Storey Terrace House",
    "address": "No. 176, Jalan Rasa Sayang 6, Taman Rasa Sayang, 72000 Kuala Pilah, Negeri Sembilan",
    "postcode": "72000",
    "state": "Negeri Sembilan",
    "area": "Kuala Pilah",
    "reservePrice": 90000,
    "auctionDate": "7 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "194 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1-LnxnlW_SQvzqC2B3CMAaCo-aPjmMCjO&sz=w800",
      "https://drive.google.com/thumbnail?id=1qjJPmA7Q5S5KyDMRcvhx_ZWddYDBwVLn&sz=w800",
      "https://drive.google.com/thumbnail?id=1hYADJkNyleGOtgrA8VcbHhxHQtvgR4Uw&sz=w800"
    ]
  },
  {
    "id": "777",
    "title": "Office Lot (First Floor)",
    "address": "Unit No. 85-1, Jalan Taman Komersial Senawang 4, Taman Komersial Senawang, 70450 Seremban, Negeri Sembilan",
    "postcode": "70450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 250000,
    "auctionDate": "7 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "388 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "778",
    "title": "1 Storey Terrace House",
    "address": "No. 18Y, Jalan Enclave Y, Persada Murni Enstek, 71760 Bandar Enstek, Negeri Sembilan",
    "postcode": "71760",
    "state": "Negeri Sembilan",
    "area": "Bandar Enstek",
    "reservePrice": 370000,
    "auctionDate": "7 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "679 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "779",
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
    "id": "780",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1exzRKIsYcnaADRGSwN62JHso9lQaNxiR&sz=w800"
    ]
  },
  {
    "id": "781",
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
    "id": "782",
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
    "id": "783",
    "title": "2 Storey Bungalow House",
    "address": "No. 104 (Lot 5527), Jalan SBJ 4, Mon't Jade, 70200 Seremban, Negeri Sembilan",
    "postcode": "70200",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 1100000,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "900 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1exzRKIsYcnaADRGSwN62JHso9lQaNxiR&sz=w800"
    ]
  },
  {
    "id": "784",
    "title": "Apartment",
    "address": "Unit No. E-5-16, PD Tiara Bay Apartments (Formerly Tiara Beach Resort), 71250 Pasir Panjang, Port Dickson, Negeri Sembilan",
    "postcode": "71250",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 50000,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "355 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=18Ia_r1ryFB19mCz5DKzn3JEug3LuX00-&sz=w800",
      "https://drive.google.com/thumbnail?id=1ukGrTZoQIqpeSkMMRXdey2y1WC5IqCpo&sz=w800"
    ]
  },
  {
    "id": "785",
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
    "id": "786",
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
    "id": "787",
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
    "id": "788",
    "title": "2 Storey Terrace House",
    "address": "No. 260, Jalan Nusari Aman 2/2, Nusari Aman 1, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 650000,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "165 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1V5_kCR_ZBH2zz6gU7nQYSm8BBgdbsiAw&sz=w800"
    ]
  },
  {
    "id": "789",
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
    "id": "790",
    "title": "2 Storey Terrace House",
    "address": "No. 709, Jalan Ekar 5/1, Residensi Prima Bandar Ekar, Bandar Ekar, 71200 Rantau, Negeri Sembilan",
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
    "id": "791",
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
    "id": "792",
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
    "id": "793",
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
      "https://drive.google.com/thumbnail?id=1BiE3DsOq_5DsgDpxuYmRCubBMzIBoJiu&sz=w800"
    ]
  },
  {
    "id": "794",
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
    "id": "795",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1gYPM59kK9_sx4ISuC21TNodle7HfoKby&sz=w800"
    ]
  },
  {
    "id": "796",
    "title": "1 Storey House",
    "address": "No. 16, Jalan Desa Rhu 21, Taman Desa Rhu, Sikamat, 70400 Seremban, Negeri Sembilan",
    "postcode": "70400",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 230000,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "076 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1I67GlC34DZMy3nJxS77ahjg7Ek7n4SIb&sz=w800"
    ]
  },
  {
    "id": "797",
    "title": "1 Storey Semi Detached House",
    "address": "No. 1086, Jalan Nusari Bayu 3/4, Nusari Bayu 1, Bandar Sri Sendayan, 71950 Seremban, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 328050,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "197 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1rQeJvRhC0kp-Iry4PlvbqwNoedZLnS0V&sz=w800"
    ]
  },
  {
    "id": "798",
    "title": "2 Storey Detached House",
    "address": "Jalan Laman Kemboja 3, Kota Seriemas, 71800 Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 494100,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "004 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=15cJO6uSWR-lrIA06NtCO6tlNF1Qz_gKi&sz=w800"
    ]
  },
  {
    "id": "799",
    "title": "2 Storey Terrace House",
    "address": "Jalan Laman Mawar A/10, Taman Kota Seriemas, 71800 Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 389000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "800",
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
    "id": "801",
    "title": "2 Storey Terrace House",
    "address": "Jalan Hijayu 1/17, Hijayu 1, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 819000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "090 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1DtxiHPjHw9-Gi87fBkpl_lVfgLWL4Eyl&sz=w800",
      "https://drive.google.com/thumbnail?id=1-Mkp_uz6aNHKQ73WGRDMbgB2MXxfEmu3&sz=w800",
      "https://drive.google.com/thumbnail?id=1sPowbW900Nar5MRcSD9tNOh4tjU2Uj6D&sz=w800"
    ]
  },
  {
    "id": "802",
    "title": "2 Storey Detached House",
    "address": "Taman Clonlee, 73000 Tampin, Negeri Sembilan",
    "postcode": "73000",
    "state": "Negeri Sembilan",
    "area": "Tampin",
    "reservePrice": 1260000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "964 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1NtDPfNPzLwOFPN4nNDgYXjjfhPPGuuf8&sz=w800"
    ]
  },
  {
    "id": "803",
    "title": "2 Storey Terrace House",
    "address": "No. 10, Jalan Jati 1/1, Desa Jati, Putra Nilai, 71800 Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 301500,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "206 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "804",
    "title": "2 Storey Terrace House",
    "address": "No. 11, Jalan Suriaman 1/1, Suriaman 1, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 600000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "250 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1FeyWTl2pOdVwzmpLNhYn-Po9ojEyDwYi&sz=w800"
    ]
  },
  {
    "id": "805",
    "title": "2 Storey Terrace House",
    "address": "Jalan SJ 5/10, Taman Seremban Jaya, 70450 Seremban, Negeri Sembilan",
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
    "id": "806",
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
      "https://drive.google.com/thumbnail?id=1TFSno8ZNVRv4GhFEH3odemsqVOf7i8aP&sz=w800"
    ]
  },
  {
    "id": "807",
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
    "id": "808",
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
      "https://drive.google.com/thumbnail?id=1Ew3jNZd9_eZaC0icQEgnsgU_PTEDzaqV&sz=w800"
    ]
  },
  {
    "id": "809",
    "title": "2 Storey Terrace House",
    "address": "No. 7319, Jalan Taman Gunung Mas 2/2, Taman Gunung Mas 2, 73000 Tampin, Negeri Sembilan",
    "postcode": "73000",
    "state": "Negeri Sembilan",
    "area": "Tampin",
    "reservePrice": 348300,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "140 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1C70DgaEBPl5AC5P8Xh5BnraGum0gz2PB&sz=w800"
    ]
  },
  {
    "id": "810",
    "title": "1 Storey Terrace House",
    "address": "No. 829, Lorong Iringan Bayu 36/7, Precint 3, Taman Iringan Bayu, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 342000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "600 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1bNqnqXq_7mnG9qQeo1ZlyrXtz5hLCPFG&sz=w800",
      "https://drive.google.com/thumbnail?id=1YRQpJ-xxWr3y_uPDdpt7RH90NqQws_fo&sz=w800"
    ]
  },
  {
    "id": "811",
    "title": "2 Storey Terrace House",
    "address": "No. 171, Jalan Nusari Bayu 6/1L, Nusari Bayu 2, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 405000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "108 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1WRHCuC8xa714ZeP7uXHZE28F9ej2FucL&sz=w800"
    ]
  },
  {
    "id": "812",
    "title": "1 Storey Terrace House",
    "address": "No. 759, Lorong Iringan Bayu 36/5, Precint 3, Taman Iringan Bayu, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 350000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "068 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1bNqnqXq_7mnG9qQeo1ZlyrXtz5hLCPFG&sz=w800",
      "https://drive.google.com/thumbnail?id=1YRQpJ-xxWr3y_uPDdpt7RH90NqQws_fo&sz=w800"
    ]
  },
  {
    "id": "813",
    "title": "2 Storey Semi Detached House",
    "address": "No. 619, Lorong Bukit Emas 1/6, Taman Bukit Emas, 70450 Seremban, Negeri Sembilan",
    "postcode": "70450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 820000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "391 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1MkhwHiOZJAhTeRLLDYSNQBef24HO-pFZ&sz=w800"
    ]
  },
  {
    "id": "814",
    "title": "2 Storey Terrace House",
    "address": "No. 190, Jalan Springhill 9/7, Bandar Springhill, 71100 Port Dickson, Negeri Sembilan",
    "postcode": "71100",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 230000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "112 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1iX33VkUNNWAgg2Ctl3xhhMEQwWB11bFS&sz=w800"
    ]
  },
  {
    "id": "815",
    "title": "1 Storey Terrace House",
    "address": "No. 555, Lorong Bukit Mutiara 13/1, Taman Bukit Mutiara, 70200 Seremban, Negeri Sembilan",
    "postcode": "70200",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 250000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1e3lm0hjLQQNxKhcIeHFPeDoSLC1sgmzQ&sz=w800"
    ]
  },
  {
    "id": "816",
    "title": "1 Storey Terrace House",
    "address": "No. 390, Lorong Nusari Bayu 1/1B, Nusari Bayu 1, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 560000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "710 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1rQeJvRhC0kp-Iry4PlvbqwNoedZLnS0V&sz=w800"
    ]
  },
  {
    "id": "817",
    "title": "2 Storey Terrace House",
    "address": "No. 2621, Jalan Tiara Sendayan 8/4, Taman Tiara Sendayan, 71900 Labu, Negeri Sembilan",
    "postcode": "71900",
    "state": "Negeri Sembilan",
    "area": "Labu",
    "reservePrice": 440000,
    "auctionDate": "9 Sep 2026 (Wed)",
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
    "id": "818",
    "title": "Terrace House",
    "address": "Jalan SJ 5/10D, Taman Seremban Jaya, 70450 Seremban, Negeri Sembilan",
    "postcode": "70450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 300000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "080 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1x5qa4tzadNrbPLYnuJqAQEvFsK_-kiB6&sz=w800",
      "https://drive.google.com/thumbnail?id=1kkx413dPRxjPpbzMsTOPGBu8s2Fq743R&sz=w800"
    ]
  },
  {
    "id": "819",
    "title": "2 Storey Terrace House",
    "address": "No. 128, Jalan Tasik Senangin 1C/3, Bandar Tasik Senangin, 71750 Lenggeng, Negeri Sembilan",
    "postcode": "71750",
    "state": "Negeri Sembilan",
    "area": "Lenggeng",
    "reservePrice": 410000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "756 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1nhM7zphX0EDYJFO8UzKHHxWvVT-1ie63&sz=w800"
    ]
  },
  {
    "id": "820",
    "title": "2 Storey Semi Detached House",
    "address": "Lorong Iringan Bayu 39/1, Precint 8, Taman Iringan Bayu, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 615600,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "280 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1bNqnqXq_7mnG9qQeo1ZlyrXtz5hLCPFG&sz=w800",
      "https://drive.google.com/thumbnail?id=1YRQpJ-xxWr3y_uPDdpt7RH90NqQws_fo&sz=w800"
    ]
  },
  {
    "id": "821",
    "title": "1 Storey Terrace House",
    "address": "No. 758, Lorong S2 G7/4, Garden Avenue, Seremban 2, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 410000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "200 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=15wvNjBAkSMTodYbeqkFOws-UcsDL09LC&sz=w800"
    ]
  },
  {
    "id": "822",
    "title": "Terrace House",
    "address": "Jalan Kirby 8, Taman Kirby, Batu 9, Jalan Labu, 71900 Labu, Negeri Sembilan",
    "postcode": "71900",
    "state": "Negeri Sembilan",
    "area": "Labu",
    "reservePrice": 310000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1TgfpFhdB1WimLHQUMdieTQ8Si2f7iid5&sz=w800"
    ]
  },
  {
    "id": "823",
    "title": "Terrace House",
    "address": "Lorong Widuri Indah 6/4, Taman Widuri Indah, 70450 Seremban, Negeri Sembilan",
    "postcode": "70450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 250000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1fLa6Q8WBCdrPA3Kw113aU_iir3F9NhTT&sz=w800"
    ]
  },
  {
    "id": "824",
    "title": "2 Storey Terrace House",
    "address": "No. 1043, Jalan Ara Sendayan 5/6, Ara Sendayan, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 396000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "496 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Nom0Qy-H63zOkykopvsYilfaLhU1gEX9&sz=w800",
      "https://drive.google.com/thumbnail?id=1Hs0Vm8hq9vSIoKWOz4DWFTnPNZzO4hrV&sz=w800"
    ]
  },
  {
    "id": "825",
    "title": "1 Storey Detached House",
    "address": "No. 11, Jalan Tasik Senangin 18/3, Bandar Tasik Senangin, 71750 Lenggeng, Negeri Sembilan",
    "postcode": "71750",
    "state": "Negeri Sembilan",
    "area": "Lenggeng",
    "reservePrice": 330000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "004 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1nhM7zphX0EDYJFO8UzKHHxWvVT-1ie63&sz=w800"
    ]
  },
  {
    "id": "826",
    "title": "2 Storey Terrace House",
    "address": "Jalan Kayangan 6, Taman Kayangan, 71700 Mantin, Negeri Sembilan",
    "postcode": "71700",
    "state": "Negeri Sembilan",
    "area": "Mantin",
    "reservePrice": 270000,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "578 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1ZS41vc3sjHeCDtJTthddYRDnayRRrt3s&sz=w800"
    ]
  },
  {
    "id": "827",
    "title": "2 Storey Semi Detached House",
    "address": "No. 22, Jalan Lukut Lagenda 1, Taman Lukut Lagenda, 71010 Port Dickson, Negeri Sembilan",
    "postcode": "71010",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 546750,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "402 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1kdnygEQgCJWQARlBepHpxWQTuAitUJ_g&sz=w800"
    ]
  },
  {
    "id": "828",
    "title": "2 Storey Terrace House",
    "address": "No. 7, Jalan D'Palma 3, Taman Bandar Senawang, 70450 Seremban, Negeri Sembilan",
    "postcode": "70450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 320760,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "560 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1SB-5MnFt-5avpsBuplnJiHDvBexR4gnO&sz=w800"
    ]
  },
  {
    "id": "829",
    "title": "2 Storey Terrace House",
    "address": "Jalan Suriaman 2/7, Suriaman 2, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 365000,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "500 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1yk8-nBkuW2Yzmp2OmhJmbQVWQlYURH1w&sz=w800",
      "https://drive.google.com/thumbnail?id=1sc6hXTW_VBGGiVfp7u4RiJpHdop3Sg7i&sz=w800",
      "https://drive.google.com/thumbnail?id=1VamGpec3-jLfUtz9BaIPoo4IgSIaw606&sz=w800"
    ]
  },
  {
    "id": "830",
    "title": "2 Storey Terrace House",
    "address": "No. 2422, Jalan Tiara Sendayan 7/4, Taman Tiara Sendayan, 71900 Labu, Negeri Sembilan",
    "postcode": "71900",
    "state": "Negeri Sembilan",
    "area": "Labu",
    "reservePrice": 372600,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "300 sq.ft",
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
    "id": "831",
    "title": "2 Storey Terrace House",
    "address": "No. 2087, Jalan Tiara Sendayan 6/3, Taman Tiara Sendayan, 71900 Labu, Negeri Sembilan",
    "postcode": "71900",
    "state": "Negeri Sembilan",
    "area": "Labu",
    "reservePrice": 432000,
    "auctionDate": "10 Sep 2026 (Thu)",
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
    "id": "832",
    "title": "1 Storey Terrace House",
    "address": "No. 399, Lorong TSR 12, Taman Seri Rembau, Fasa 1, 71300 Rembau, Negeri Sembilan",
    "postcode": "71300",
    "state": "Negeri Sembilan",
    "area": "Rembau",
    "reservePrice": 230000,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1RXLZKdXiWssDZa_y2WH62ljuoNxLx11C&sz=w800"
    ]
  },
  {
    "id": "833",
    "title": "1 Storey Terrace House",
    "address": "Jalan Tasik Senangin 16/12, Bandar Tasik Senangin, 71750 Lenggeng, Negeri Sembilan",
    "postcode": "71750",
    "state": "Negeri Sembilan",
    "area": "Lenggeng",
    "reservePrice": 360000,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1nhM7zphX0EDYJFO8UzKHHxWvVT-1ie63&sz=w800"
    ]
  },
  {
    "id": "834",
    "title": "1 Storey Terrace House",
    "address": "No. 778, Lorong Iringan Bayu 36/5, Precint 3, Taman Iringan Bayu, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 350000,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "080 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1bNqnqXq_7mnG9qQeo1ZlyrXtz5hLCPFG&sz=w800",
      "https://drive.google.com/thumbnail?id=1YRQpJ-xxWr3y_uPDdpt7RH90NqQws_fo&sz=w800"
    ]
  },
  {
    "id": "835",
    "title": "1.5 Storey Terrace House",
    "address": "No. 1262, Jalan RJ 3/9, Taman Rasah Jaya, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 380000,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "105 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1kZv29DthQRe4BUjXdxzICN1lMGumEs0E&sz=w800",
      "https://drive.google.com/thumbnail?id=1yYW_v03nncFf9JgzSwZkWbYANWmuckgo&sz=w800",
      "https://drive.google.com/thumbnail?id=1aGaxR4gvFRn2O_-qqMdaFnbZmU96v3kp&sz=w800"
    ]
  },
  {
    "id": "836",
    "title": "Freehold 2 Storey Terrace House, Corner Lot [Next to Universiti Sains Islam Malaysia & Nilai Indoor Stadium; 6 min to AEON Mall Nilai]",
    "address": "PT 5735, Jalan BBN 9/2A, Desa Anggerik, Putra Nilai, 71800 Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 580000,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "197 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1ouRv_MO_Lo_kNhPfWEAXG1Dq7mC01WHJ&sz=w800"
    ]
  },
  {
    "id": "837",
    "title": "2 Storey Terrace House",
    "address": "No. 2803, Jalan Tiara Sendayan 8/10, Taman Tiara Sendayan, 71900, Negeri Sembilan",
    "postcode": "71900",
    "state": "Negeri Sembilan",
    "area": "Negeri Sembilan",
    "reservePrice": 450000,
    "auctionDate": "10 Sep 2026 (Thu)",
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
    "id": "838",
    "title": "1 Storey Terrace House",
    "address": "Taman Pertama, 71000 Port Dickson, Negeri Sembilan",
    "postcode": "71000",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 250000,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "540 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1SR0pn0LmaCKIuxLQVPjvetv2hvBe2ODQ&sz=w800"
    ]
  },
  {
    "id": "839",
    "title": "2 Storey Terrace House",
    "address": "No. 50, Jalan Laman Sendayan 1A/3, Laman Sendayan, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 470000,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "120 sq.ft",
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
    "id": "840",
    "title": "Town House",
    "address": "Unit No. 32-G, Jalan 1A/5, Bandar Ainsdale, 70200 Seremban, Negeri Sembilan",
    "postcode": "70200",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 280000,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "926 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1mXM_nzvbKOsMyQMOWD6kNB6R6TVTQ-Sn&sz=w800",
      "https://drive.google.com/thumbnail?id=1Pi71FDkrCrweWrumc3m2qY9oFJ6swyv-&sz=w800"
    ]
  },
  {
    "id": "841",
    "title": "1 Storey Terrace House",
    "address": "No. 744, Jalan Nusari Bayu 2/8, Nusari Bayu 1, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 430000,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "052 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1rQeJvRhC0kp-Iry4PlvbqwNoedZLnS0V&sz=w800"
    ]
  },
  {
    "id": "842",
    "title": "2 Storey Terrace House",
    "address": "No. 310, Jalan Forest Heights 2/14, Precint 2, Forest Heights, 70450 Seremban, Negeri Sembilan",
    "postcode": "70450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 480000,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1wEkJGISHjuGxEuDK8uvWrD0uXjQRURRy&sz=w800",
      "https://drive.google.com/thumbnail?id=11zdgOHLTu5n9CZkjLDFX2f5-vqv8T4q7&sz=w800"
    ]
  },
  {
    "id": "843",
    "title": "1 Storey Terrace House",
    "address": "Lorong Selasih 4, Taman Selasih, 71000 Port Dickson, Negeri Sembilan",
    "postcode": "71000",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 111600,
    "auctionDate": "14 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "098 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "844",
    "title": "1 Storey Semi Detached House",
    "address": "Lorong Rahmat 2, Taman Temiang Jaya, 70400 Seremban, Negeri Sembilan",
    "postcode": "70400",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 648000,
    "auctionDate": "14 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "341 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "845",
    "title": "2 Storey Terrace House",
    "address": "No. 643, Jalan Hijayu 1/24, Hijayu 1, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 446000,
    "auctionDate": "14 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "765 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1DtxiHPjHw9-Gi87fBkpl_lVfgLWL4Eyl&sz=w800",
      "https://drive.google.com/thumbnail?id=1-Mkp_uz6aNHKQ73WGRDMbgB2MXxfEmu3&sz=w800",
      "https://drive.google.com/thumbnail?id=1sPowbW900Nar5MRcSD9tNOh4tjU2Uj6D&sz=w800"
    ]
  },
  {
    "id": "846",
    "title": "2 Storey Terrace House",
    "address": "Jalan Bayu Sutera 1/9, Taman Bayu Sutera, 71960 Port Dickson, Negeri Sembilan",
    "postcode": "71960",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 450000,
    "auctionDate": "14 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1PnWeRa4cMSRnRlyAz9urHCDUqt4ZSl1Y&sz=w800"
    ]
  },
  {
    "id": "847",
    "title": "2 Storey Terrace House",
    "address": "Jalan Nada Alam 6/2, Taman Nada Alam, 71700 Mantin, Negeri Sembilan",
    "postcode": "71700",
    "state": "Negeri Sembilan",
    "area": "Mantin",
    "reservePrice": 423000,
    "auctionDate": "14 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "027 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1nwgiOw4LN5GbZrHtbQjzUNvdfcOFc48H&sz=w800"
    ]
  },
  {
    "id": "848",
    "title": "1 Storey Terrace House",
    "address": "No. 1343, Jalan BIL 45, Taman Bayu Indera Lukut, 71010 Port Dickson, Negeri Sembilan",
    "postcode": "71010",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 330000,
    "auctionDate": "14 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "210 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1NzpokR03hf6GtJzT9qg1JXRIIEsGfG-Y&sz=w800",
      "https://drive.google.com/thumbnail?id=1TtdFr94rJc4mdli1Wt7YH_5IzeMu3_0g&sz=w800",
      "https://drive.google.com/thumbnail?id=1gkZdKabziqlIzawraO6beVPwcUJa_d3f&sz=w800"
    ]
  },
  {
    "id": "849",
    "title": "1 Storey Terrace House",
    "address": "No. 12, Jalan Belida 1, Taman Belida, 71050 Port Dickson, Negeri Sembilan",
    "postcode": "71050",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 340000,
    "auctionDate": "14 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "320 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1cm4YEhmorS15XfVya5cYF_-uZdjxQLGp&sz=w800"
    ]
  },
  {
    "id": "850",
    "title": "2 Storey Terrace House",
    "address": "Jalan Tiara Sendayan 14/7, Taman Tiara Sendayan, 71900 Labu, Negeri Sembilan",
    "postcode": "71900",
    "state": "Negeri Sembilan",
    "area": "Labu",
    "reservePrice": 480000,
    "auctionDate": "14 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
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
    "id": "851",
    "title": "Flat",
    "address": "Block C, Rumah Pangsa, Bandar Baru Ampangan, Batu 2, Jalan Kuala Pilah, 70400 Seremban, Negeri Sembilan",
    "postcode": "70400",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 87480,
    "auctionDate": "15 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "087 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Tvf-ldv7XnzipC4tYD2Pik0DcbFLGc3y&sz=w800"
    ]
  },
  {
    "id": "852",
    "title": "2 Storey Terrace House",
    "address": "No. 221, Jalan Laman Sendayan 1A/5, Laman Sendayan, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 405000,
    "auctionDate": "15 Sep 2026 (Tue)",
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
    "id": "853",
    "title": "2 Storey Terrace House",
    "address": "No. 404, Jalan Tiara Sendayan 2/6, Taman Tiara Sendayan, 71900 Labu, Negeri Sembilan",
    "postcode": "71900",
    "state": "Negeri Sembilan",
    "area": "Labu",
    "reservePrice": 414000,
    "auctionDate": "15 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "157 sq.ft",
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
    "id": "854",
    "title": "2 Storey Terrace House",
    "address": "No. 31, Jalan Sena 1/8, Taman Sena, Sungai Gadut, 71450 Seremban, Negeri Sembilan",
    "postcode": "71450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 515000,
    "auctionDate": "15 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "208 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1nXuwn_C-I0lvxOSuiHmfzzKkaIK4cswS&sz=w800"
    ]
  },
  {
    "id": "855",
    "title": "1 Storey Terrace House",
    "address": "No. 1148, Jalan BIL 39, Taman Bayu Indera Lukut, 71010 Port Dickson, Negeri Sembilan",
    "postcode": "71010",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 260000,
    "auctionDate": "15 Sep 2026 (Tue)",
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
    "id": "856",
    "title": "1 Storey Terrace House",
    "address": "No. 373, Jalan Desa PD 2/6, Taman Desa PD, 71200 Port Dickson, Negeri Sembilan",
    "postcode": "71200",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 170000,
    "auctionDate": "15 Sep 2026 (Tue)",
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
    "id": "857",
    "title": "Retail Lot",
    "address": "First Floor, Terminal One Shopping Centre, Jalan Lintang, 70000 Seremban, Negeri Sembilan",
    "postcode": "70000",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 72000,
    "auctionDate": "21 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "430 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=19JH9AoMLg87aTgJ_MRHX7ubZXyLtBBY_&sz=w800"
    ]
  },
  {
    "id": "858",
    "title": "1 Storey Terrace House",
    "address": "No. 570, Jalan Bukit Mutiara 13, Taman Bukit Mutiara, 70200 Seremban, Negeri Sembilan",
    "postcode": "70200",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 340000,
    "auctionDate": "21 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "058 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1e3lm0hjLQQNxKhcIeHFPeDoSLC1sgmzQ&sz=w800"
    ]
  },
  {
    "id": "859",
    "title": "2 Storey Terrace House",
    "address": "No. 530, Persiaran Bukit Coral 1, Taman Bukit Coral, Sikamat, 70400 Seremban, Negeri Sembilan",
    "postcode": "70400",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 370000,
    "auctionDate": "22 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "464 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "860",
    "title": "2 Storey Semi Detached House",
    "address": "No. 6, Jalan Orkid 2/1, Taman Orkid 2, 73200 Gemencheh, Negeri Sembilan",
    "postcode": "73200",
    "state": "Negeri Sembilan",
    "area": "Gemencheh",
    "reservePrice": 550000,
    "auctionDate": "22 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "584 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1Crmo647AwGv11vjvCpfjSofU_BlRQplu&sz=w800"
    ]
  },
  {
    "id": "861",
    "title": "2 Storey Terrace House",
    "address": "Jalan Arowana 5, Taman Arowana, 71750 Lenggeng, Negeri Sembilan",
    "postcode": "71750",
    "state": "Negeri Sembilan",
    "area": "Lenggeng",
    "reservePrice": 414000,
    "auctionDate": "23 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=10jMTgy7pNe0uMdmz6Hbmg85n0ptfT-Zh&sz=w800"
    ]
  },
  {
    "id": "862",
    "title": "2 Storey Terrace House",
    "address": "No. 34, Jalan Bukit Mantin 9, Taman Bukit Mantin, 71700 Mantin, Negeri Sembilan",
    "postcode": "71700",
    "state": "Negeri Sembilan",
    "area": "Mantin",
    "reservePrice": 576000,
    "auctionDate": "24 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "423 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "863",
    "title": "Town House",
    "address": "No. 68A, Cempaka Seri 1, Jalan Laman Cempaka 2, Laman Cempaka, Kota Seriemas, 71800 Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 400000,
    "auctionDate": "28 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "442 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "864",
    "title": "2 Storey Terrace House",
    "address": "Jalan Irama Sendayan 2/3F, Taman Irama Sendayan 2, 71900 Labu, Negeri Sembilan",
    "postcode": "71900",
    "state": "Negeri Sembilan",
    "area": "Labu",
    "reservePrice": 450000,
    "auctionDate": "14 Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
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
    "id": "865",
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
    "id": "866",
    "title": "2 Storey Terrace House",
    "address": "No. 408, Jalan Bayu Sutera 2/1, Taman Bayu Sutera, 71010 Port Dickson, Negeri Sembilan",
    "postcode": "71010",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 450000,
    "auctionDate": "12 Nov 2026 (Thu)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1PnWeRa4cMSRnRlyAz9urHCDUqt4ZSl1Y&sz=w800"
    ]
  },
  {
    "id": "867",
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
    "id": "868",
    "title": "2 Storey Terrace House",
    "address": "No. 625, Jalan PR1MA Tapah 10, Residensi PR1MA Tapah, 35000 Tapah, Perak",
    "postcode": "35000",
    "state": "Perak",
    "area": "Tapah",
    "reservePrice": 225000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "380 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "869",
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
    "id": "870",
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
    "id": "871",
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
    "id": "872",
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
    "id": "873",
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
    "id": "874",
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
    "id": "875",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "876",
    "title": "1 Storey Cluster House",
    "address": "House No. 878, Jalan Residen 8/22, Residen 8, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 207000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "798 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "877",
    "title": "2 Storey Semi Detached House",
    "address": "House No. 3, Jalan Lakeville 19, Bandar Universiti, 32610 Seri Iskandar, Perak",
    "postcode": "32610",
    "state": "Perak",
    "area": "Seri Iskandar",
    "reservePrice": 530000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "197 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "878",
    "title": "1 Storey Terrace House",
    "address": "No. 66, Persiaran Presint 1/2, Presint 1, Bandar Baru Segari, 32200 Lumut, Perak",
    "postcode": "32200",
    "state": "Perak",
    "area": "Lumut",
    "reservePrice": 250000,
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
    "id": "879",
    "title": "1 Storey Terrace House",
    "address": "No. 2, Lorong Bakti 2, Taman Bakti, Jalan Tapah Road, 35400 Tapah Road, Perak",
    "postcode": "35400",
    "state": "Perak",
    "area": "Tapah Road",
    "reservePrice": 153900,
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
    "id": "880",
    "title": "1 Storey Detached House",
    "address": "No. 61132, Jalan Kledang, Kampung Tengku Hussein Baru, 30020, Ipoh, Perak",
    "postcode": "61132",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 280000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "664 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "881",
    "title": "1 Storey Terrace House",
    "address": "No. 257, Jalan Residen 4/9, Residen 4, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 220000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "882",
    "title": "1 Storey Terrace House",
    "address": "No. 13, Jalan Meru Perdana 13, Taman Meru Perdana, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 250000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "883",
    "title": "1 Storey Terrace House",
    "address": "No. 65, Persiaran Presint 1/2, Presint 1, Bandar Baru Segari, 32200 Lumut, Perak",
    "postcode": "32200",
    "state": "Perak",
    "area": "Lumut",
    "reservePrice": 250000,
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
    "id": "884",
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
    "id": "885",
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
    "id": "886",
    "title": "Flat",
    "address": "Unit No. 7A-10-19, Jalan Seri Tanjung Pinang, 10470 Georgetown, Penang",
    "postcode": "10470",
    "state": "Penang",
    "area": "Georgetown",
    "reservePrice": 160745,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "657 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1S217QcFejdcOnj12gjKmOjFPAiR2lJw5&sz=w800"
    ]
  },
  {
    "id": "887",
    "title": "3 Storey Terrace Shop Office",
    "address": "No. 54, Jalan Perniagaan 2, Pusat Perniagaan Alma, 14000 Bukit Mertajam, Penang",
    "postcode": "14000",
    "state": "Penang",
    "area": "Bukit Mertajam",
    "reservePrice": 700000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "888",
    "title": "1 Storey Terrace House",
    "address": "No. 33, Persiaran Seksyen 3/9, Bandar Putra Bertam, 13200 Kepala Batas, Penang",
    "postcode": "13200",
    "state": "Penang",
    "area": "Kepala Batas",
    "reservePrice": 330000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "291 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "889",
    "title": "2 Storey Terrace House",
    "address": "No. 20, Persiaran Pantai Jerjak, Taman Seri Anggun, 11900 Bayan Lepas, Penang",
    "postcode": "11900",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 940000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "367 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "890",
    "title": "2 Storey Terrace House",
    "address": "No. 17, Persiaran Seksyen 3/18, Bandar Putera Bertam, 13200 Kepala Batas, Penang",
    "postcode": "13200",
    "state": "Penang",
    "area": "Kepala Batas",
    "reservePrice": 284310,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "292 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "891",
    "title": "Apartment",
    "address": "Unit No. 4-11, Blok A, Lorong Bunga Rampai 5, Taman Pandan, 13400 Butterworth, Penang",
    "postcode": "13400",
    "state": "Penang",
    "area": "Butterworth",
    "reservePrice": 189540,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "936 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "892",
    "title": "Apartment",
    "address": "Unit No. 3C-09-02, Jalan Batu Uban, Mukim 13, 11700 Glugor, Penang",
    "postcode": "11700",
    "state": "Penang",
    "area": "Glugor",
    "reservePrice": 252000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "700 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=10ryUPJG5LTPIvFR-mjDfguxKN65I3Ji1&sz=w800"
    ]
  },
  {
    "id": "893",
    "title": "2 Storey Semi Detached House",
    "address": "No. 18, Lorong Santuari 18, Taman Santuari, 14000 Bukit Mertajam, Penang",
    "postcode": "14000",
    "state": "Penang",
    "area": "Bukit Mertajam",
    "reservePrice": 850000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "583 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "894",
    "title": "Condominium",
    "address": "Unit No. 17-05, Kondominium Berjaya, Lorong Berjaya Baru 2, 14000 Bukit Mertajam, Penang",
    "postcode": "14000",
    "state": "Penang",
    "area": "Bukit Mertajam",
    "reservePrice": 540000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "733 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "895",
    "title": "Flat",
    "address": "No. 633D, Gerbang Tuna, Seberang Jaya, 13700 Perai, Penang",
    "postcode": "13700",
    "state": "Penang",
    "area": "Perai",
    "reservePrice": 120000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "584 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "896",
    "title": "Apartment",
    "address": "Unit No. MB-8-22, Pangsapuri Delima Intan, Jalan Delima 1, Taman Seri Delima, 14100 Simpang Ampat, Penang",
    "postcode": "14100",
    "state": "Penang",
    "area": "Simpang Ampat",
    "reservePrice": 280000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "786 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "897",
    "title": "1 Storey Detached House",
    "address": "No. 78, Jalan Permaipura 5, Permaipura, 08100 Bedong, Kedah",
    "postcode": "08100",
    "state": "Kedah",
    "area": "Bedong",
    "reservePrice": 165240,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "250 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "898",
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
    "id": "899",
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
    "id": "900",
    "title": "1 Storey Terrace House",
    "address": "Persiaran Desa Aman S2/7, Seksyen 2, Desa Aman, 09410 Padang Serai, Kedah",
    "postcode": "09410",
    "state": "Kedah",
    "area": "Padang Serai",
    "reservePrice": 270000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "324 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "901",
    "title": "1 Storey Terrace House",
    "address": "No. 194, Lorong KTC 2/6, Kulim Techno-city, Kulim Hi-tech Park, 09090 Kulim, Kedah",
    "postcode": "09090",
    "state": "Kedah",
    "area": "Kulim",
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
    "id": "902",
    "title": "2 Storey Semi Detached House",
    "address": "No. 211, Persiaran Utama 1/7, Kulim Utama, Kulim Hi-tech Park, 09090 Kulim, Kedah",
    "postcode": "09090",
    "state": "Kedah",
    "area": "Kulim",
    "reservePrice": 485000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "562 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "903",
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
    "id": "904",
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
    "id": "905",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "906",
    "title": "2 Storey Semi Detached House",
    "address": "No. 932, Jalan Kempas 5/14, Taman Kempas Indah, 09000 Kulim, Kedah",
    "postcode": "09000",
    "state": "Kedah",
    "area": "Kulim",
    "reservePrice": 600000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "960 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "907",
    "title": "1 Storey Terrace House",
    "address": "No. 45, Jalan Kenanga 2/1, Bandar Amanjaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 220000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "100 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "908",
    "title": "Shop Lot",
    "address": "No. 68, Jalan Seroja 1/2, Bandar Amanjaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 276000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "909",
    "title": "1 Storey Terrace House",
    "address": "No. 2119, Lorong Serai Wangi 5/4, Taman Serai Wangi, 09400 Padang Serai, Kedah",
    "postcode": "09400",
    "state": "Kedah",
    "area": "Padang Serai",
    "reservePrice": 261000,
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
    "id": "910",
    "title": "2 Storey Terrace House",
    "address": "No. 1224, Jalan PR1MA 37, PR1MA Residensi Puteri Jaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 297000,
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
    "id": "911",
    "title": "1 Storey Terrace House",
    "address": "No. 326, Jalan Kelisa Ria 1/12, Taman Kelisa Ria, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 230000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "630 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "912",
    "title": "2 Storey Terrace House",
    "address": "No. 93, Jalan Bukit Puteri 12/5, Bandar Puteri Jaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 385000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "829 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "913",
    "title": "2 Storey Terrace House",
    "address": "No. 1121, Lorong Permai Utama 33, Taman Permai Utama, 08300 Gurun, Kedah",
    "postcode": "08300",
    "state": "Kedah",
    "area": "Gurun",
    "reservePrice": 287550,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "540 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "914",
    "title": "Semi Detached House",
    "address": "No. 1071, Jalan Kelisa Ria 6/17, Taman Kelisa Ria, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 279000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "240 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "915",
    "title": "1 Storey Semi Detached House",
    "address": "No. 101, Lorong Kijang 2, Taman Kijang, 09600 Lunas, Kedah",
    "postcode": "09600",
    "state": "Kedah",
    "area": "Lunas",
    "reservePrice": 320000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "798 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "916",
    "title": "1 Storey Terrace House",
    "address": "No. 23, Persiaran Desa Pinji Utara 3, Taman Desa Pinji, 31500 Lahat, Perak",
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
    "id": "917",
    "title": "2 Storey Terrace House",
    "address": "No. 63A, Lorong Sejati 2, Taman Melor Sejati, 36000 Teluk Intan, Perak",
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
    "id": "918",
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
    "id": "919",
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
    "id": "920",
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
    "id": "921",
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
    "id": "922",
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
    "id": "923",
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
    "id": "924",
    "title": "1 Storey Terrace House",
    "address": "No. 39, Persiaran Murni 4, Taman Indah, 31250 Tanjung Rambutan, Perak",
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
    "id": "925",
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
    "id": "926",
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
    "id": "927",
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
    "id": "928",
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
    "id": "929",
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
    "id": "930",
    "title": "1 Storey Terrace House",
    "address": "No. 797, Jalan Residen 3/19, Residen 3, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 160380,
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
    "id": "931",
    "title": "1 Storey Terrace House",
    "address": "No. 752, Taman Kledang, 31100, Sungai Siput (U), Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput (U)",
    "reservePrice": 150000,
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
    "id": "932",
    "title": "1 Storey Terrace House",
    "address": "No. 951, Laluan Kledang 4/1, Taman Kledang, 31100 Sungai Siput (U), Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput (U)",
    "reservePrice": 99000,
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
    "id": "933",
    "title": "1 Storey Terrace House",
    "address": "No. 16, Jalan Suria Indah 5, Taman Gelung Permai, 32600, Bota, Perak",
    "postcode": "32600",
    "state": "Perak",
    "area": "Bota",
    "reservePrice": 180000,
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
    "id": "934",
    "title": "1 Storey Terrace House",
    "address": "No. 114, Jalan Residen 3/2, Residen 3, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 160380,
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
    "id": "935",
    "title": "1 Storey Terrace House",
    "address": "No. 1488, Jalan Residen 4/21, Residen 4, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 186300,
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
    "id": "936",
    "title": "1 Storey Cluster Semi Detached House",
    "address": "No. 900, Jalan Residen 7/16, Residen 7, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 182250,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "916 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "937",
    "title": "2 Storey Terrace House",
    "address": "No. 37, Laluan Klebang Ria 23, Taman Klebang Ria, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 351000,
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
    "id": "938",
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
    "id": "939",
    "title": "1 Storey Terrace House",
    "address": "No. 28, Lorong Kuala Bekah 5/2, Taman Kuala Bekah, 13100 Penaga, Penang",
    "postcode": "13100",
    "state": "Penang",
    "area": "Penaga",
    "reservePrice": 270000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "119 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "940",
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
    "id": "941",
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
    "id": "942",
    "title": "2 Storey Terrace House",
    "address": "No. 407, Jalan Bukit Puteri 12/12, Bandar Puteri Jaya, 08000 Sungai Petani, Kedah",
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
    "id": "943",
    "title": "2 Storey Terrace House",
    "address": "Jalan Bintang Maya 2/1, Bintang Maya, 08000 Sungai Petani, Kedah",
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
    "id": "944",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "945",
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
    "id": "946",
    "title": "1 Storey Terrace House",
    "address": "No. 233, Lorong 8-C, Taman Nilam, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 270000,
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
    "id": "947",
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
    "id": "948",
    "title": "1 Storey Semi Detached House",
    "address": "No. 45, Jalan Bukit Puteri 3A/3A, Bandar Puteri Jaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 432000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "736 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "949",
    "title": "Semi Detached House",
    "address": "No. 117, Persiaran KTC 4/3, Kulim Techno-City, 09090 Kulim Hi-Tech Park, Kedah",
    "postcode": "09090",
    "state": "Kedah",
    "area": "Kulim Hi-Tech Park",
    "reservePrice": 371790,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "798 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "950",
    "title": "1 Storey Terrace House",
    "address": "No. 504, Lorong Residensi B19, Taman Residensi Mesra, 08300, Gurun, Kedah",
    "postcode": "08300",
    "state": "Kedah",
    "area": "Gurun",
    "reservePrice": 235000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "453 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "951",
    "title": "1 Storey Semi Detached House",
    "address": "No. 305, Jalan SP Heights 8, SP Heights, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 198450,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "637 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "952",
    "title": "1 Storey Terrace House",
    "address": "No. A38, Jalan Sinar Mentari A2, Taman Sinar Mentari, 08100 Bedong, Kedah",
    "postcode": "08100",
    "state": "Kedah",
    "area": "Bedong",
    "reservePrice": 118000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "475 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "953",
    "title": "2 Storey Terrace House",
    "address": "No. 103A, Jalan Bukit Puteri 12/5, Bandar Puteri Jaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 280000,
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
    "id": "954",
    "title": "1 Storey Terrace House",
    "address": "No. 2876, Lorong Serai Wangi 4/11, Taman Serai Wangi, 09400 Padang Serai, Kedah",
    "postcode": "09400",
    "state": "Kedah",
    "area": "Padang Serai",
    "reservePrice": 315000,
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
    "id": "955",
    "title": "Terrace House",
    "address": "No. 157, Jalan Mahsuri 6/B, Taman Mahsuri, 09400 Padang Serai, Kedah",
    "postcode": "09400",
    "state": "Kedah",
    "area": "Padang Serai",
    "reservePrice": 250000,
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
    "id": "956",
    "title": "1 Storey Semi Detached House",
    "address": "No. 179, Persiaran SP Heights, SP Heights, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 202500,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "637 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "957",
    "title": "1 Storey Terrace House",
    "address": "No. 575, Jalan Bukit Puteri 11/26, Bandar Puteri Jaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 218700,
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
    "id": "958",
    "title": "1 Storey Terrace House",
    "address": "No. 88-A, Jalan Lembah Merbok 1/5, Taman Lembah Merbok, 08400 Merbok, Kedah",
    "postcode": "08400",
    "state": "Kedah",
    "area": "Merbok",
    "reservePrice": 156735,
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
    "id": "959",
    "title": "1 Storey Terrace House",
    "address": "No. 755, Jalan Kemboja 31, Bandar Amanjaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 160380,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "100 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "960",
    "title": "1 Storey Terrace House",
    "address": "No. 115, Persiaran Rishah 3, Taman Rishah, 30100 Ipoh, Perak",
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
    "id": "961",
    "title": "1 Storey Detached House",
    "address": "Lot 294, Tanjung Rambutan, 31250 Tanjung Rambutan, Perak",
    "postcode": "31250",
    "state": "Perak",
    "area": "Tanjung Rambutan",
    "reservePrice": 135000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "960 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "962",
    "title": "1 Storey Terrace House",
    "address": "No. 508, Jalan Tropika 7, Residensi Lagenda Tropika, 35350 Temoh, Perak",
    "postcode": "35350",
    "state": "Perak",
    "area": "Temoh",
    "reservePrice": 171000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "900 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "963",
    "title": "1 Storey Terrace House",
    "address": "No. 492, Jalan Residen 4/10, Residen 4, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 171000,
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
    "id": "964",
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
    "id": "965",
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
    "id": "966",
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
    "id": "967",
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
    "id": "968",
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
    "id": "969",
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
    "id": "970",
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
    "id": "971",
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
    "id": "972",
    "title": "1 Storey Terrace House",
    "address": "No. 42, Laluan Kinta Permai 2/7, Taman Kinta Permai, 31000 Batu Gajah, Perak",
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
    "id": "973",
    "title": "2 Storey Terrace House",
    "address": "No. 27, Jalan Lahat Mines 11, Bandar Lahat Mines, 31500 Lahat, Perak",
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
    "id": "974",
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
    "id": "975",
    "title": "2 Storey Semi Detached House",
    "address": "No. 66, Lorong Raz Intan 3, Taman Raz Intan Cassia, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 502200,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "218 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "976",
    "title": "2 Storey Shop House",
    "address": "No. 5, Jalan Niaga 1, Kampung Sungai Tapah, 30020 Ipoh, Perak",
    "postcode": "30020",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 360000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "977",
    "title": "2 Storey Terrace House",
    "address": "No. 1204, Jalan PR1MA 2, PR1MA @ Bandar Baru Setia Awam Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 251100,
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
    "id": "978",
    "title": "1 Storey Terrace House",
    "address": "No. 479, Laluan Kledang 5/3, Taman Kledang, 31100 Sungai Siput, Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput",
    "reservePrice": 99000,
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
    "id": "979",
    "title": "1 Storey Terrace House",
    "address": "No. 176, Jalan Aman 9, Taman Aman Mambang Diawan, 31900 Kampar, Perak",
    "postcode": "31900",
    "state": "Perak",
    "area": "Kampar",
    "reservePrice": 140000,
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
    "id": "980",
    "title": "1 Storey Terrace House",
    "address": "No. 137, Hala Permata 2, Taman Permata, 35500 Bidor, Perak",
    "postcode": "35500",
    "state": "Perak",
    "area": "Bidor",
    "reservePrice": 140000,
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
    "id": "981",
    "title": "2 Storey Terrace House",
    "address": "No. 7, Dataran Bercham Timur 15, Taman Pakatan, 31400 Ipoh, Perak",
    "postcode": "31400",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 190000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "291 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "982",
    "title": "1 Storey Terrace House",
    "address": "No. 190, Lorong Warisan 8, Bandar Baru Seri Manjung Fasa 3B, 32040 Seri Manjung, Perak",
    "postcode": "32040",
    "state": "Perak",
    "area": "Seri Manjung",
    "reservePrice": 180000,
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
    "id": "983",
    "title": "1 Storey Terrace House",
    "address": "No. 20, Jalan LB 1/2, Lembah Beriah 1, 34310 Bagan Serai, Perak",
    "postcode": "34310",
    "state": "Perak",
    "area": "Bagan Serai",
    "reservePrice": 150000,
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
    "id": "984",
    "title": "1 Storey Terrace House",
    "address": "No. 15, Lorong Teja 9, 31800 Tanjong Tualang, Perak",
    "postcode": "31800",
    "state": "Perak",
    "area": "Tanjong Tualang",
    "reservePrice": 100000,
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
    "id": "985",
    "title": "Land",
    "address": "Lot 59236, Kampung Padang Tembak, 36000 Teluk Intan, Perak",
    "postcode": "59236",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 291600,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "187 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "986",
    "title": "1 Storey Terrace House",
    "address": "No. 20, Laluan Tronoh Universiti 3, Taman Tronoh Universiti, 31750, Tronoh, Perak",
    "postcode": "31750",
    "state": "Perak",
    "area": "Tronoh",
    "reservePrice": 220000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "797 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "987",
    "title": "Residential Land",
    "address": "PT 6597, Jalan Lekir, 32000 Lekir, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Lekir",
    "reservePrice": 100000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "091 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "988",
    "title": "1 Storey Terrace House",
    "address": "No. 29, Laluan Permai 3A, Taman Bemban Permai, 31000 Batu Gajah, Perak",
    "postcode": "31000",
    "state": "Perak",
    "area": "Batu Gajah",
    "reservePrice": 216000,
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
    "id": "989",
    "title": "1 Storey Terrace House",
    "address": "No. 1, Jalan Klebang Harmoni 3, Taman Klebang Harmoni, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 320000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "914 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "990",
    "title": "1.5 Storey Terrace House",
    "address": "No. 30, Laluan Klebang Jaya 41, Taman Klebang Jaya, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 160000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "958 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "991",
    "title": "1 Storey Terrace House",
    "address": "No. 280, Jalan Seri Lekir 10, Taman Seri Lekir, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 230000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "992",
    "title": "1 Storey Terrace House",
    "address": "No. 6569, Jalan Baru 9, Taman Aman Baru, 31950 Mambang Diawan, Perak",
    "postcode": "31950",
    "state": "Perak",
    "area": "Mambang Diawan",
    "reservePrice": 135000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "920 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "993",
    "title": "1 Storey Terrace House",
    "address": "No. 68, Jalan Bidor Perkasa 5, Taman Bidor Perkasa, 35500 Bidor, Perak",
    "postcode": "35500",
    "state": "Perak",
    "area": "Bidor",
    "reservePrice": 192000,
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
    "id": "994",
    "title": "Apartment",
    "address": "Unit No. 33-19-05, Pangsapuri Idaman Iris, Lilitan Sungai Ara, 11900 Bayan Lepas, Penang",
    "postcode": "11900",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 298890,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "872 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "995",
    "title": "Apartment",
    "address": "Unit No. 11-13, Pangsapuri Luminari, Jalan Harbour Place 1, 12100 Butterworth, Penang",
    "postcode": "12100",
    "state": "Penang",
    "area": "Butterworth",
    "reservePrice": 405000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "958 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1IxdObrTkEGOFpwut8Ta5H3sls7HMM4Xj&sz=w800"
    ]
  },
  {
    "id": "996",
    "title": "Flat",
    "address": "Unit No. 8-4-6, Persiaran Mayang Pasir 5, MK 12, 11950 Bandar Bayan Baru, Penang",
    "postcode": "11950",
    "state": "Penang",
    "area": "Bandar Bayan Baru",
    "reservePrice": 109350,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "507 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "997",
    "title": "2 Storey Shop House",
    "address": "Unit No. 18, Lorong Rozhan 2, Pusat Perniagaan Jalan Rozhan, 14000, Bukit Mertajam, Penang",
    "postcode": "14000",
    "state": "Penang",
    "area": "Bukit Mertajam",
    "reservePrice": 500000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "998",
    "title": "Apartment",
    "address": "Unit No. 1-04, Block B, Pangsapuri Sutera, Jalan Sutera 3, Taman Sutera, Seberang Jaya, 13700 Perai, Penang",
    "postcode": "13700",
    "state": "Penang",
    "area": "Perai",
    "reservePrice": 170000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "646 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "999",
    "title": "2 Storey Terrace House",
    "address": "No. 19, Lorong Idaman 2/2, Taman Idaman, 14100 Simpang Ampat, Penang",
    "postcode": "14100",
    "state": "Penang",
    "area": "Simpang Ampat",
    "reservePrice": 364500,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "474 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1000",
    "title": "Apartment",
    "address": "Unit No. 5-08, Block A, Pangsapuri Sutera, Jalan Sutera 3, Taman Sutera, Seberang Jaya, 13700 Perai, Penang",
    "postcode": "13700",
    "state": "Penang",
    "area": "Perai",
    "reservePrice": 170000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "645 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1001",
    "title": "1 Storey Terrace House",
    "address": "No. 31, Lorong Sepadu Jaya 4/1, Taman Sepadu Jaya, 13300, Tasek Gelugor, Penang",
    "postcode": "13300",
    "state": "Penang",
    "area": "Tasek Gelugor",
    "reservePrice": 330000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "496 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1sIdxEAoqAF_S3fw6IEqwwAUkj3YTSGFD&sz=w800"
    ]
  },
  {
    "id": "1002",
    "title": "Duplex Apartment",
    "address": "Unit No. 3-11-5, Block 3, Krystal Suria, Medan Kampung Relau 1, 11900 Bayan Lepas, Penang",
    "postcode": "11900",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 550000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "378 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1003",
    "title": "Apartment",
    "address": "Unit No. 8P-06-05, Tanjong Court, Lebuhraya Thean Teik, 11500, Ayer Itam, Penang",
    "postcode": "11500",
    "state": "Penang",
    "area": "Ayer Itam",
    "reservePrice": 280000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "786 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1004",
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
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1005",
    "title": "1 Storey Terrace House",
    "address": "No. 1348, Jalan Kelisa Ria 6/30, Taman Kelisa Ria, 08000 Sungai Petani, Kedah",
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
    "id": "1006",
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
    "id": "1007",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1008",
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
    "id": "1009",
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
    "id": "1010",
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
    "id": "1011",
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
    "id": "1012",
    "title": "2 Storey Cluster House",
    "address": "No. 8, Laman Cindai 3A, Taman Cindai Jaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 270000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "388 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1013",
    "title": "1 Storey Semi Detached House",
    "address": "No. 45, Jalan Selat 2, Taman Selat, 06900 Yan, Kedah",
    "postcode": "06900",
    "state": "Kedah",
    "area": "Yan",
    "reservePrice": 390000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "725 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1014",
    "title": "1 Storey Semi Detached House",
    "address": "No. 517, Jalan Kenanga 4, Bandar Amanjaya, 08000, Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 420000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "748 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1015",
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
    "id": "1016",
    "title": "2 Storey Terrace House",
    "address": "No. 36, Selasar Rokam 4, Taman Ipoh Jaya, 31350 Ipoh, Perak",
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
    "id": "1017",
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
    "id": "1018",
    "title": "2 Storey Terrace House",
    "address": "No. 7, Taman Kenangan, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 350000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "132 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1019",
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
    "id": "1020",
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
    "id": "1021",
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
    "id": "1022",
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
    "id": "1023",
    "title": "1 Storey Terrace House",
    "address": "No. 7, Jalan Sari 8, Taman Gerbang Siputeh Sari, 31650 Siputeh, Perak",
    "postcode": "31650",
    "state": "Perak",
    "area": "Siputeh",
    "reservePrice": 165000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "800 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1024",
    "title": "1 Storey Terrace House",
    "address": "No. 28, Jalan Seri Rubiah 3, Taman Seri Rubiah, 32040 Seri Manjung, Perak",
    "postcode": "32040",
    "state": "Perak",
    "area": "Seri Manjung",
    "reservePrice": 178200,
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
    "id": "1025",
    "title": "1 Storey Terrace House",
    "address": "No. 417, Jalan Lagenda 13, Residensi Lagenda Tropika, 35350 Temoh, Perak",
    "postcode": "35350",
    "state": "Perak",
    "area": "Temoh",
    "reservePrice": 144500,
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
    "id": "1026",
    "title": "2 Storey Terrace House",
    "address": "No. 127, Persiaran Seri Buloh 5, Taman Seri Buloh, 31100, Sungai Siput, Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput",
    "reservePrice": 290000,
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
    "id": "1027",
    "title": "1 Storey Terrace House",
    "address": "No. 127, Jalan Bidor Perkasa 7, Taman Bidor Perkasa, 35500 Bidor, Perak",
    "postcode": "35500",
    "state": "Perak",
    "area": "Bidor",
    "reservePrice": 243000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "293 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1028",
    "title": "2 Storey Terrace House",
    "address": "No. 443, Jalan Perdana 9, Taman Kampar Perdana, 31900 Kampar, Perak",
    "postcode": "31900",
    "state": "Perak",
    "area": "Kampar",
    "reservePrice": 250000,
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
    "id": "1029",
    "title": "1 Storey Terrace House",
    "address": "No. 20, Lahat Sri Wang 5, Desa Lahat Sri Wang, 31500 Lahat, Perak",
    "postcode": "31500",
    "state": "Perak",
    "area": "Lahat",
    "reservePrice": 207000,
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
    "id": "1030",
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
    "id": "1031",
    "title": "2 Storey Semi Detached House",
    "address": "No. 28, Solok Kampung Jawa 3, 11900 Bayan Lepas, Penang",
    "postcode": "11900",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 648000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "228 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1032",
    "title": "Apartment",
    "address": "Unit No. 1-02, Blok A, Lorong Bagan Lallang 14, Taman Bagan Lallang, 13400 Butterworth, Penang",
    "postcode": "13400",
    "state": "Penang",
    "area": "Butterworth",
    "reservePrice": 153000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "850 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1033",
    "title": "Flat",
    "address": "Unit No. 2B-2-19, Tingkat 2, Block 2B, Taman Desa Genting, Jalan Pulau Betong, 11000 Balik Pulau, Penang",
    "postcode": "11000",
    "state": "Penang",
    "area": "Balik Pulau",
    "reservePrice": 109350,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "495 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HXGI8vnxdJtvkFyi-TVQMP1T4IxsUy0v&sz=w800"
    ]
  },
  {
    "id": "1034",
    "title": "2 Storey Terrace House",
    "address": "No. 9, Jalan Bagan 41, Taman Bagan, 13400 Butterworth, Penang",
    "postcode": "13400",
    "state": "Penang",
    "area": "Butterworth",
    "reservePrice": 650000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "324 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1035",
    "title": "Apartment",
    "address": "Unit No. 4-07, Blok B, Lebuh Kampung Benggali, Pangsa Ria, 12200, Butterworth, Penang",
    "postcode": "12200",
    "state": "Penang",
    "area": "Butterworth",
    "reservePrice": 250000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "785 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1fuPKr6hbsh2tnKybwwHLJIeFTqsWzdZv&sz=w800"
    ]
  },
  {
    "id": "1036",
    "title": "Flat",
    "address": "Unit No. 2B-2-7, Jalan Sungai Tiram 6, Mukim 12, 11900 Bayan Lepas, Penang",
    "postcode": "11900",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 192000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "667 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1037",
    "title": "2 Storey Terrace House",
    "address": "No. 95, Jalan Bintang Maya 2/3, Bintang Maya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 328050,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1038",
    "title": "1 Storey Semi Detached House",
    "address": "No. 22, Jalan Raya Murni 3, Taman Raya Murni, 09400 Padang Serai, Kedah",
    "postcode": "09400",
    "state": "Kedah",
    "area": "Padang Serai",
    "reservePrice": 234000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "240 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1039",
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
    "id": "1040",
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
    "id": "1041",
    "title": "1 Storey Terrace House",
    "address": "No. 238, Jalan Yarra 5/10, Bandar Puteri Jaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 306000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "283 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1042",
    "title": "1 Storey Terrace House",
    "address": "No. 710, Jalan Kelisa Ria 1/24, Taman Kelisa Ria, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 220000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "200 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1043",
    "title": "1 Storey Terrace House",
    "address": "No. 1426, Jalan Mutiara 1/6, Taman Mutiara, 09700 Karangan, Kedah",
    "postcode": "09700",
    "state": "Kedah",
    "area": "Karangan",
    "reservePrice": 240000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "800 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1044",
    "title": "1 Storey Terrace House",
    "address": "No. 180, Jalan Yarra 5/8, Bandar Puteri Jaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 330000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "385 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1045",
    "title": "2 Storey Terrace House",
    "address": "No. 246, Lorong Residensi A8, Taman Residensi Mesra, 08300 Gurun, Kedah",
    "postcode": "08300",
    "state": "Kedah",
    "area": "Gurun",
    "reservePrice": 279000,
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
    "id": "1046",
    "title": "Terrace House",
    "address": "No. 1167, Jalan Lagenda 15/2, Taman Lagenda, 09400 Padang Serai, Kedah",
    "postcode": "09400",
    "state": "Kedah",
    "area": "Padang Serai",
    "reservePrice": 270000,
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
    "id": "1047",
    "title": "Commercial Lot",
    "address": "Unit No. 1-2, Jitra Mall, Pekan Jitra 3, 06000, Jitra, Kedah",
    "postcode": "06000",
    "state": "Kedah",
    "area": "Jitra",
    "reservePrice": 80000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "506 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1048",
    "title": "1 Storey Terraced House",
    "address": "No. 1013, Lorong Ria Mesra 45 , Taman Ria Mesra II, Gurun 08300, Kedah",
    "postcode": "08300",
    "state": "Kedah",
    "area": "Gurun",
    "reservePrice": 180000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "200 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1049",
    "title": "1 Storey Terrace House",
    "address": "No. 243-B, Jalan Desa Aman 3, Taman Desa Aman, Sungai Lalang, 08100 Bedong, Kedah",
    "postcode": "08100",
    "state": "Kedah",
    "area": "Bedong",
    "reservePrice": 230000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "604 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1050",
    "title": "2 Storey Detached House",
    "address": "No. 160, Kampong Tradisi Lembah Keriang, 06010 Changlun, Kedah",
    "postcode": "06010",
    "state": "Kedah",
    "area": "Changlun",
    "reservePrice": 230000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "356 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1051",
    "title": "1 Storey Semi Detached House",
    "address": "No. 190, Taman Pasu, Off Jalan Hospital, 06000 Jitra, Kedah",
    "postcode": "06000",
    "state": "Kedah",
    "area": "Jitra",
    "reservePrice": 218700,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "668 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1052",
    "title": "2 Storey Bungalow House",
    "address": "No. 274, Jalan Damai 3/2, Taman Damai, 09400 Padang Serai, Kedah",
    "postcode": "09400",
    "state": "Kedah",
    "area": "Padang Serai",
    "reservePrice": 312000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "146 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1053",
    "title": "1 Storey Terrace House",
    "address": "No. 215, Jalan Anggerik 8/10, Bandar Amanjaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 218700,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "497 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1054",
    "title": "2 Storey Terrace House",
    "address": "No. 165, Lorong Jati 1D/1, Taman Jati, 09000, Kulim, Kedah",
    "postcode": "09000",
    "state": "Kedah",
    "area": "Kulim",
    "reservePrice": 340000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "044 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1055",
    "title": "1 Storey Terrace House",
    "address": "No. 1025, Jalan Kelisa Ria 3/10, Taman Kelisa Ria, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 225000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "650 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1056",
    "title": "Terrace House",
    "address": "No. 530, Lorong Serai Wangi 1/2, Taman Serai Wangi, 09400 Padang Serai, Kedah",
    "postcode": "09400",
    "state": "Kedah",
    "area": "Padang Serai",
    "reservePrice": 180000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1057",
    "title": "Terrace House",
    "address": "No. 664A, Lorong Astana 23/2, Bandar Seri Astana, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 170100,
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
    "id": "1058",
    "title": "Terrace House",
    "address": "No. 1587, Jalan Bandar Mutiara 3/1, Bandar Mutiara, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 220500,
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
    "id": "1059",
    "title": "Shop House",
    "address": "No. 38, Pekan Gurun, 08300 Gurun, Kedah",
    "postcode": "08300",
    "state": "Kedah",
    "area": "Gurun",
    "reservePrice": 410000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "622 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1060",
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
    "id": "1061",
    "title": "2 Storey Terrace House",
    "address": "No. 49S, Jalan Jelapang Ria 1, Taman Jelapang Ria, 30020 Ipoh, Perak",
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
    "id": "1062",
    "title": "2 Storey Semi Detached House",
    "address": "No. 257, Persiaran Venice Intan 5/9, Desa Manjung Raya, 32200 Lumut, Perak",
    "postcode": "32200",
    "state": "Perak",
    "area": "Lumut",
    "reservePrice": 432000,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "626 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1063",
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
    "id": "1064",
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
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1065",
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
    "id": "1066",
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
    "id": "1067",
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
    "id": "1068",
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
    "id": "1069",
    "title": "1.5 Storey Terrace House",
    "address": "No. 29, Jalan Mewah Prima 5, Taman Mewah Prima, 35500 Bidor, Perak",
    "postcode": "35500",
    "state": "Perak",
    "area": "Bidor",
    "reservePrice": 234000,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "250 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1070",
    "title": "2 Storey Semi Detached House",
    "address": "No. 17, Solok Bukit Jambul 5, Mukim 13, 11900 Bayan Lepas, Penang",
    "postcode": "11900",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 1579500,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "585 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1071",
    "title": "1 Storey Terrace House",
    "address": "No. 19, Lorong Belibis 21, Taman Tangling, 14100 Simpang Ampat, Penang",
    "postcode": "14100",
    "state": "Penang",
    "area": "Simpang Ampat",
    "reservePrice": 333000,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "561 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1072",
    "title": "1 Storey Terrace House",
    "address": "No. 22, Lorong Seri Indah 6/1, Taman Seri Indah, 13200 Kepala Batas, Penang",
    "postcode": "13200",
    "state": "Penang",
    "area": "Kepala Batas",
    "reservePrice": 346500,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "883 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1073",
    "title": "Town House",
    "address": "No. 51-F, Tingkat Paya Terubong 4, Taman Suria Vista, 11060 Ayer Itam, Penang",
    "postcode": "11060",
    "state": "Penang",
    "area": "Ayer Itam",
    "reservePrice": 451980,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "600 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1074",
    "title": "Flat",
    "address": "Unit No. 31-03-02, Persiaran Sungai Emas, Ferringhi Delima, 11100 Batu Ferringhi, Penang",
    "postcode": "11100",
    "state": "Penang",
    "area": "Batu Ferringhi",
    "reservePrice": 230000,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "721 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1075",
    "title": "Flat",
    "address": "Unit No. 1-1-8, Tingkat Teluk Kumbar, 11920 Bayan Lepas, Penang",
    "postcode": "11920",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 108000,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "506 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1076",
    "title": "2 Storey Terrace House",
    "address": "No. 59, Lorong Bukit Minyak 17, Taman Bukit Minyak Indah, 14000 Bukit Mertajam, Penang",
    "postcode": "14000",
    "state": "Penang",
    "area": "Bukit Mertajam",
    "reservePrice": 500000,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "679 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1077",
    "title": "2 Storey Semi Detached House",
    "address": "No. 30, Lorong Bertam Indah 1/8, Taman Bertam Indah, 13200 Kepala Batas, Penang",
    "postcode": "13200",
    "state": "Penang",
    "area": "Kepala Batas",
    "reservePrice": 650000,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "218 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1078",
    "title": "Flat",
    "address": "Unit No. 10-12-13, Jalan Sungai Satu, Taman Pinang Emas, 11100 Batu Ferringgi, Penang",
    "postcode": "11100",
    "state": "Penang",
    "area": "Batu Ferringgi",
    "reservePrice": 123930,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "560 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1fxejLBfSo-n_Jq8q7TCw1ELcoNWrVLv3&sz=w800"
    ]
  },
  {
    "id": "1079",
    "title": "Flat",
    "address": "Unit No. 4-10, Blok T, Apartment Permata, Jalan Perda Barat, Bandar Perda, 14000 Bukit Mertajam, Penang",
    "postcode": "14000",
    "state": "Penang",
    "area": "Bukit Mertajam",
    "reservePrice": 117000,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "624 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1nJOW9j9QZWPGIhd1Ymqj-mKS9jaIEi2w&sz=w800"
    ]
  },
  {
    "id": "1080",
    "title": "Flat",
    "address": "Unit No. P-4-8, Jalan Tanjong Tokong, Pangsapuri Uda, 10470, Penang",
    "postcode": "10470",
    "state": "Penang",
    "area": "Penang",
    "reservePrice": 132861,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "646 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1081",
    "title": "1 Storey Terrace House",
    "address": "No. 46, Jalan Seruling Emas 2, Taman Seruling Emas, 14200 Sungai Jawi, Penang",
    "postcode": "14200",
    "state": "Penang",
    "area": "Sungai Jawi",
    "reservePrice": 243000,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "200 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1082",
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
    "id": "1083",
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
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1084",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1085",
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
    "id": "1086",
    "title": "2 Storey Terrace House",
    "address": "No. 16, Regat Taman Tasek, Taman Tasek Baru, 31400 Ipoh, Perak",
    "postcode": "31400",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 280000,
    "auctionDate": "18 Aug 2026 (Tue)",
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
    "id": "1088",
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
    "id": "1089",
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
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1090",
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
    "id": "1091",
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
    "id": "1092",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1093",
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
    "id": "1094",
    "title": "1 Storey Terrace House",
    "address": "No. 1, Jalan Bemban Indah 1, Taman Bemban Indah, 31000 Batu Gajah, Perak",
    "postcode": "31000",
    "state": "Perak",
    "area": "Batu Gajah",
    "reservePrice": 340000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "078 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1095",
    "title": "1 Storey Terrace House",
    "address": "No. 385, Lorong 13, Taman Desa Bernam, 36400 Hutan Melintang, Perak",
    "postcode": "36400",
    "state": "Perak",
    "area": "Hutan Melintang",
    "reservePrice": 140000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "098 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1096",
    "title": "1 Storey Terrace House",
    "address": "No. 218, Jalan Pantai Damai 7, Taman Pantai Damai, 34900 Pantai Remis, Perak",
    "postcode": "34900",
    "state": "Perak",
    "area": "Pantai Remis",
    "reservePrice": 297000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "293 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1097",
    "title": "1 Storey Terrace House",
    "address": "No. 1101, Laluan Kledang 4/5, Taman Kledang, 31100 Sungai Siput (U), Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput (U)",
    "reservePrice": 170000,
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
    "id": "1098",
    "title": "Terrace House",
    "address": "No. 16, Laluan Pengkalan Timah 4, Desa Pengkalan Timah, 31500 Lahat, Perak",
    "postcode": "31500",
    "state": "Perak",
    "area": "Lahat",
    "reservePrice": 250000,
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
    "id": "1099",
    "title": "1 Storey Terrace House",
    "address": "No. 65, Lebohraya First Garden, Taman Pertama, 30100 Ipoh, Perak",
    "postcode": "30100",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 220000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "540 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1100",
    "title": "1 Storey Terrace House",
    "address": "No. 435, Jalan Pantai Damai 2/16, Taman Pantai Damai Ii, 34900 Pantai Remis, Perak",
    "postcode": "34900",
    "state": "Perak",
    "area": "Pantai Remis",
    "reservePrice": 260000,
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
    "id": "1101",
    "title": "2 Storey Terrace House",
    "address": "No. 393, Taman Manjung Point, Seksyen 2, 32040 Seri Manjung, Perak",
    "postcode": "32040",
    "state": "Perak",
    "area": "Seri Manjung",
    "reservePrice": 400000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "605 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1102",
    "title": "1 Storey Terrace House",
    "address": "No. 115, Jalan Residen 1/3, Residen 1, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 170100,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1103",
    "title": "1 Storey Terrace House",
    "address": "No. 29, Taman Seri Batik, Teluk Muruh, 32200 Lumut, Perak",
    "postcode": "32200",
    "state": "Perak",
    "area": "Lumut",
    "reservePrice": 120000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "485 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1104",
    "title": "1 Storey Terrace House",
    "address": "No. 43, Persiaran Putra 5, Bandar Baru Putra, 31400 Ipoh, Perak",
    "postcode": "31400",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 200000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1105",
    "title": "1 Storey Terrace House",
    "address": "No. 12, Jalan Kinding Perdana 9, Taman Kinding Perdana, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 178200,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "432 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1106",
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
    "id": "1107",
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
    "id": "1108",
    "title": "2 Storey Cluster House",
    "address": "No. 19, Jalan Lapangan Bayu 3, Taman Lapangan Bayu, 31350 Ipoh, Perak",
    "postcode": "31350",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 650000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "271 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1109",
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
    "id": "1110",
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
    "id": "1111",
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
    "id": "1112",
    "title": "2 Storey Detached House",
    "address": "No. 3, Jalan Setia Maju 2/1, Taman Setia Maju II, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 838000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "725 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1113",
    "title": "1 Storey Terrace House",
    "address": "No. 1086, Laluan Kledang 4/5, Taman Kledang, 31100 Sungai Siput (U), Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput (U)",
    "reservePrice": 153000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1114",
    "title": "2 Storey Terrace Shop House",
    "address": "No. K5, Fasa 1C3, 32040 Seri Manjung, Perak",
    "postcode": "32040",
    "state": "Perak",
    "area": "Seri Manjung",
    "reservePrice": 280000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "765 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1115",
    "title": "1 Storey Terrace House",
    "address": "No. 16, Laluan Tronoh Universiti 17, Taman Tronoh Universiti, 31750 Tronoh, Perak",
    "postcode": "31750",
    "state": "Perak",
    "area": "Tronoh",
    "reservePrice": 200000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "021 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1116",
    "title": "1 Storey Terrace House",
    "address": "No. 3, Jalan Lahat Indah 6, Taman Lahat Indah, 31500 Ipoh, Perak",
    "postcode": "31500",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 162000,
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
    "id": "1117",
    "title": "2 Storey Shop House",
    "address": "No. 330, Jalan Sultan Kampung Baru Pasir Pinji, 31650 Ipoh, Perak",
    "postcode": "31650",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 400000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "396 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1118",
    "title": "2 Storey Semi Detached House",
    "address": "No. 11C (Also Known As No. 11B), (Also Known As No. 11B), Lorong Silibin, Taman Grand Silibin, 30100 Ipoh, Perak",
    "postcode": "30100",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 348300,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "821 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1119",
    "title": "1 Storey Terrace House",
    "address": "No. T343, Taman Kinta, 31600 Gopeng, Perak",
    "postcode": "31600",
    "state": "Perak",
    "area": "Gopeng",
    "reservePrice": 90000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "990 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1120",
    "title": "1 Storey Terrace House",
    "address": "No. 6, Lebuh Bercham Selatan 1/3, Taman Desa Impian, 31400 Ipoh, Perak",
    "postcode": "31400",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 90000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "194 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1121",
    "title": "1 Storey Terrace House",
    "address": "No. 1110, Jalan Residen 4/6, Residen 4, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 170000,
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
    "id": "1122",
    "title": "Apartment",
    "address": "Unit No. 188-2-1, Sri Sayang, Jalan Batu Ferringgi, 11100 Batu Ferringgi, Penang",
    "postcode": "11100",
    "state": "Penang",
    "area": "Batu Ferringgi",
    "reservePrice": 307100,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1123",
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
      "https://drive.google.com/thumbnail?id=1pBu8ngvSU5ys5sRY2VaB4YVcA4SNroBK&sz=w800"
    ]
  },
  {
    "id": "1124",
    "title": "Service Apartment",
    "address": "Unit No. B-2-02, Pangsapuri Perkhidmatan Suasana, Jalan Cassia Barat 2, 14110 Bandar Cassia, Penang",
    "postcode": "14110",
    "state": "Penang",
    "area": "Bandar Cassia",
    "reservePrice": 469800,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "076 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1125",
    "title": "Flat",
    "address": "Unit No. 88-14-65, Puncak Erskine, Jalan Fettes, 10470 Tanjong Tokong, Penang",
    "postcode": "10470",
    "state": "Penang",
    "area": "Tanjong Tokong",
    "reservePrice": 123930,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "603 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1126",
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
    "id": "1127",
    "title": "2.5 Storey Terrace House",
    "address": "No. 36, Persiaran Pegoh Aman 10, Taman Pegoh, 31500 Lahat, Perak",
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
    "id": "1128",
    "title": "1 Storey Terrace House",
    "address": "No. 451, Jalan Residen 4/10, Residen 4, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 198000,
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
    "id": "1129",
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
    "id": "1130",
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
    "id": "1131",
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
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1132",
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
    "id": "1133",
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
    "id": "1134",
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
    "id": "1135",
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
    "id": "1136",
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
    "id": "1137",
    "title": "2 Storey Terrace House",
    "address": "No. 43, Lintang PR1MA 24, Residensi PR1MA Bagan Serai, 34300 Bagan Serai, Perak",
    "postcode": "34300",
    "state": "Perak",
    "area": "Bagan Serai",
    "reservePrice": 252000,
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
    "id": "1138",
    "title": "1 Storey Terrace House",
    "address": "No. 2065, Taman Samudera, 32040 Seri Manjung, Perak",
    "postcode": "32040",
    "state": "Perak",
    "area": "Seri Manjung",
    "reservePrice": 260000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "401 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1139",
    "title": "2 Storey Terrace Shop House",
    "address": "No. 17, Halaman Pasar (Market Square), 34000, Taiping, Perak",
    "postcode": "34000",
    "state": "Perak",
    "area": "Taiping",
    "reservePrice": 760000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "657 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1140",
    "title": "1 Storey Terrace House",
    "address": "No. 108, Jalan Lakeville 30, Bandar Universiti, 32610 Seri Iskandar, Perak",
    "postcode": "32610",
    "state": "Perak",
    "area": "Seri Iskandar",
    "reservePrice": 225000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "561 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1141",
    "title": "1 Storey Terrace House",
    "address": "No. 1399, Jalan Residen 4/19, Residen 4, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 220500,
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
    "id": "1142",
    "title": "Condominium",
    "address": "Jalan Batu Uban, Mukim 13, 11700 Glugor, Penang",
    "postcode": "11700",
    "state": "Penang",
    "area": "Glugor",
    "reservePrice": 288684,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "904 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1oeKuq9HzQREHIoOceKdz7OiZNnjvaXP9&sz=w800"
    ]
  },
  {
    "id": "1143",
    "title": "Flat",
    "address": "Unit No. 42-17-21, Jalan Van Praagh, Desa Green, 11600 Jelutong, Penang",
    "postcode": "11600",
    "state": "Penang",
    "area": "Jelutong",
    "reservePrice": 188960,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "709 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1gwRtVS7ov0h0VHeGC8kaTcL9vnu5UBvD&sz=w800"
    ]
  },
  {
    "id": "1144",
    "title": "Condominium",
    "address": "Unit No. A-7-12A, Taman Casa Utopia, Lorong Sungai Dua Utama 34, 13800 Butterworth, Penang",
    "postcode": "13800",
    "state": "Penang",
    "area": "Butterworth",
    "reservePrice": 325000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "313 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1145",
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
    "id": "1146",
    "title": "2 Storey Shop House",
    "address": "Lorong BLM 1/7, Bandar Laguna Merbok, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 690000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1147",
    "title": "Terrace House",
    "address": "Jalan Mutiara BPJ 1, Mutiara Bandar Puteri Jaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 290000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "581 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1148",
    "title": "1 Storey Terrace House",
    "address": "No. 113A, Jalan Bukit Puteri 1/13A, Bandar Puteri Jaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 225000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "347 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1149",
    "title": "2 Storey Terrace House",
    "address": "No. 6, Laluan Chepor Permai 5, Taman Chepor Permai, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 240000,
    "auctionDate": "24 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "960 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1150",
    "title": "1 Storey Terrace House",
    "address": "No. 30, Hala Puncak Jelapang 8B, Puncak Jelapang Indah, 30020 Ipoh, Perak",
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
    "id": "1151",
    "title": "1 Storey Terrace House",
    "address": "Kampung Muhibbah Fasa 1, 31100 Sungai Siput (U), Perak",
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
    "id": "1152",
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
    "id": "1153",
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
    "id": "1154",
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
    "id": "1155",
    "title": "2 Storey Terrace ShopHouse",
    "address": "No. 15, Halaman Pasar (Market Square), 34000, Taiping, Perak",
    "postcode": "34000",
    "state": "Perak",
    "area": "Taiping",
    "reservePrice": 850000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "944 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1156",
    "title": "1 Storey House",
    "address": "Lot. 60223, Off Jalan Berlian, Kampong Dato Ahmad Said, 30020 Ipoh, Perak",
    "postcode": "60223",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 118000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "866 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1157",
    "title": "1 Storey Terrace House",
    "address": "No. 1, Jalan Gopeng Perdana 10, Taman Gopeng Perdana, 31600 Gopeng, Perak",
    "postcode": "31600",
    "state": "Perak",
    "area": "Gopeng",
    "reservePrice": 288000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "756 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1158",
    "title": "Town House",
    "address": "Unit No. 61-03, The Meadow Park, Taman Kampar Makmur, 31900 Kampar, Perak",
    "postcode": "31900",
    "state": "Perak",
    "area": "Kampar",
    "reservePrice": 130000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "087 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1159",
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
    "id": "1160",
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
    "id": "1161",
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
    "id": "1162",
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
    "id": "1163",
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
    "id": "1164",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1165",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1166",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1167",
    "title": "1 Storey Terrace House",
    "address": "Lorong Utama 18, Taman Pengkalan Utama, 34700 Simpang, Perak",
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
    "id": "1168",
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
    "id": "1169",
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
    "id": "1170",
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
    "id": "1171",
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
    "id": "1172",
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
    "id": "1173",
    "title": "1 Storey Terrace House",
    "address": "No. 657, Persiaran Hulu Bercham 1, Bandar Baru Putra, 31400 Ipoh, Perak",
    "postcode": "31400",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 230000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "179 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1174",
    "title": "Shop Office",
    "address": "Unit No. A-2-19, 1 Casuarina Corporate Park, Jalan Raja Dr. Nazrin Shah, 30250 Ipoh, Perak",
    "postcode": "30250",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 247500,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "249 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1175",
    "title": "Town House (Upper Unit)",
    "address": "Unit No. 342B, Persiaran Kledang 5, Taman Kledang, 31100 Sungai Siput (U), Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput (U)",
    "reservePrice": 80000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "775 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1176",
    "title": "1 Storey Terrace House",
    "address": "No. 81, Hala Desa Pantai 2/7, Taman Desa Pantai II, 34900 Pantai Remis, Perak",
    "postcode": "34900",
    "state": "Perak",
    "area": "Pantai Remis",
    "reservePrice": 200000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1177",
    "title": "1 Storey Semi Detached House",
    "address": "No. 152, Lorong Manjung Baru 2, Taman Manjung Baru, 32040 Seri Manjung, Perak",
    "postcode": "32040",
    "state": "Perak",
    "area": "Seri Manjung",
    "reservePrice": 236196,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "798 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1178",
    "title": "Flat",
    "address": "Unit No. A-4-24, Block A, Jalan Gertak Sanggul, Taman Gertak Sanggul, 11920 Teluk Kumbar, Penang",
    "postcode": "11920",
    "state": "Penang",
    "area": "Teluk Kumbar",
    "reservePrice": 85293,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "495 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1179",
    "title": "Apartment",
    "address": "Unit No. 16-9-8, Hilir Sungai Pinang, Serina Bay, 11600 Jelutong, Penang",
    "postcode": "11600",
    "state": "Penang",
    "area": "Jelutong",
    "reservePrice": 225000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "700 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1mMm_HNVaFTiBB7GeBm_Ny76bJz8pLctT&sz=w800"
    ]
  },
  {
    "id": "1180",
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
    "id": "1181",
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
    "id": "1182",
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
    "id": "1183",
    "title": "1 Storey Terrace House",
    "address": "No. 182B, Jalan Bujang Saujana 3/2A, Taman Lembah Bujang Saujana, 08400 Merbok, Kedah",
    "postcode": "08400",
    "state": "Kedah",
    "area": "Merbok",
    "reservePrice": 194400,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "528 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1184",
    "title": "1 Storey Terrace House",
    "address": "No. 152, Lorong Makmur 4/3, Taman Makmur, 09600, Lunas, Kedah",
    "postcode": "09600",
    "state": "Kedah",
    "area": "Lunas",
    "reservePrice": 220000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1185",
    "title": "2 Storey Terrace House",
    "address": "Lengkok Sinar Intan 4/2, Taman Sinar Intan 3, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 243000,
    "auctionDate": "1 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1186",
    "title": "2 Storey Terrace House",
    "address": "Jalan Yarra 7/7, Bandar Puteri Jaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 360000,
    "auctionDate": "1 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1187",
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
    "id": "1188",
    "title": "1 Storey Terrace House",
    "address": "Jalan Mutiara 9/5, Taman Mutiara, 09700 Karangan, Kedah",
    "postcode": "09700",
    "state": "Kedah",
    "area": "Karangan",
    "reservePrice": 234000,
    "auctionDate": "1 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "800 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1189",
    "title": "2 Storey Terrace House",
    "address": "No. 310, Jalan Batik 1/1, Taman Batik, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 236196,
    "auctionDate": "1 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "161 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1190",
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
    "id": "1191",
    "title": "1 Storey Terrace House",
    "address": "No. 22A, Jalan Mahkota Kampar 4, Taman Mahkota Kampar, 31900 Kampar, Perak",
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
    "id": "1192",
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
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1193",
    "title": "1 Storey Terrace House",
    "address": "No. 157, Jalan RB 5, Residensi Bidoria, 35500 Bidor, Perak",
    "postcode": "35500",
    "state": "Perak",
    "area": "Bidor",
    "reservePrice": 189000,
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
    "id": "1194",
    "title": "2 Storey Terrace House",
    "address": "No. 1, Lintasan Perajurit 17, Taman Bersatu, 31400 Ipoh, Perak",
    "postcode": "31400",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 500000,
    "auctionDate": "2 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "846 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1195",
    "title": "1 Storey Terrace House",
    "address": "Jalan Bakawali 4, Taman Bakawali, 13300 Tasek Gelugor, Penang",
    "postcode": "13300",
    "state": "Penang",
    "area": "Tasek Gelugor",
    "reservePrice": 250000,
    "auctionDate": "2 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "080 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1196",
    "title": "2 Storey Terrace House",
    "address": "No. 15, Lorong Seri Juru 18, Taman Seri Juru, 14100 Simpang Ampat, Penang",
    "postcode": "14100",
    "state": "Penang",
    "area": "Simpang Ampat",
    "reservePrice": 485000,
    "auctionDate": "2 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "800 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1197",
    "title": "Flat",
    "address": "Unit No. 09-01, Block C, Pangsa Ria, Lebuh Kampung Benggali, 12200 Butterworth, Penang",
    "postcode": "12200",
    "state": "Penang",
    "area": "Butterworth",
    "reservePrice": 225000,
    "auctionDate": "2 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "786 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1fuPKr6hbsh2tnKybwwHLJIeFTqsWzdZv&sz=w800"
    ]
  },
  {
    "id": "1198",
    "title": "2 Storey Terrace House",
    "address": "No. 18, Solok Kampung Jawa 3, 11900 Bayan Lepas, Penang",
    "postcode": "11900",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 600000,
    "auctionDate": "2 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "600 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1199",
    "title": "Apartment",
    "address": "Unit No. 7C-11-11, Pangsapuri Palm Court, Jalan Seri Tanjung Pinang, 10470 Tanjung Tokong, Penang",
    "postcode": "10470",
    "state": "Penang",
    "area": "Tanjung Tokong",
    "reservePrice": 206550,
    "auctionDate": "2 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "635 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1S217QcFejdcOnj12gjKmOjFPAiR2lJw5&sz=w800"
    ]
  },
  {
    "id": "1200",
    "title": "2 Storey Terrace House",
    "address": "No. 926, Jalan Saujana 2/4, Bandar SP Saujana, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 393660,
    "auctionDate": "2 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "448 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1201",
    "title": "2 Storey Terrace House",
    "address": "Jalan B.M. 2/14, Bandar Mutiara, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 387000,
    "auctionDate": "2 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1202",
    "title": "2 Storey Terrace House",
    "address": "No. 60, Lorong BLM 3/5, Bandar Laguna Merbok, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 400000,
    "auctionDate": "2 Sep 2026 (Wed)",
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
    "address": "No. 7, Jalan Yarra 1/2, Bandar Puteri Jaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 648000,
    "auctionDate": "2 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "671 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1204",
    "title": "1 Storey Semi Detached House",
    "address": "No. 524, Jalan Kempas 20, Taman Kempas Merah, 09000 Kulim, Kedah",
    "postcode": "09000",
    "state": "Kedah",
    "area": "Kulim",
    "reservePrice": 430000,
    "auctionDate": "2 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "039 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1205",
    "title": "2 Storey Terrace House",
    "address": "No. 815, Jalan PR1MA 27, PR1MA Residensi Puteri Jaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 342000,
    "auctionDate": "2 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "692 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1206",
    "title": "2 Storey Terrace House",
    "address": "No. 47, Persiaran Klebang Selatan 31, Taman Bertuah, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 150000,
    "auctionDate": "7 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "840 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1207",
    "title": "Flat",
    "address": "Unit No. 3-3-12, Taman Sri Indah, Tingkat Seri Genting 1, 11000 Balik Pulau, Penang",
    "postcode": "11000",
    "state": "Penang",
    "area": "Balik Pulau",
    "reservePrice": 118098,
    "auctionDate": "7 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "603 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1ROIF0Ypkzr7niv8ajGfHPo3IKNURZ6Zo&sz=w800"
    ]
  },
  {
    "id": "1208",
    "title": "2 Storey Terrace House",
    "address": "No. 53, Lorong Tasek Gelugor Utama 3/11, Taman Tasek Gelugor Utama, 13300 Tasek Gelugor, Penang",
    "postcode": "13300",
    "state": "Penang",
    "area": "Tasek Gelugor",
    "reservePrice": 340200,
    "auctionDate": "7 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "572 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Ro0M95wbY4SBDK9bY2eiul9Ro5Wv9Eb9&sz=w800"
    ]
  },
  {
    "id": "1209",
    "title": "Flat",
    "address": "Unit No. 2-3-4, Tingkat Teluk Kumbar, MK. 9, 11920 Bayan Lepas, Penang",
    "postcode": "11920",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 135000,
    "auctionDate": "7 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "506 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1210",
    "title": "3 Storey Terrace House",
    "address": "Gerbang Mak Mandin 6, Taman Sri Nasib, 13400 Butterworth, Penang",
    "postcode": "13400",
    "state": "Penang",
    "area": "Butterworth",
    "reservePrice": 810000,
    "auctionDate": "7 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1211",
    "title": "2 Storey Bungalow House",
    "address": "No. 283L, Mukim 13, Jalan Pekeliling, 11700 Gelugor, Penang",
    "postcode": "11700",
    "state": "Penang",
    "area": "Gelugor",
    "reservePrice": 710000,
    "auctionDate": "7 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "841 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1212",
    "title": "Flat",
    "address": "Unit No. B-4-16, Jalan Gertak Sanggul, MK 12, Taman Gertak Sanggul, 11920 Bayan Lepas, Penang",
    "postcode": "11920",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 97200,
    "auctionDate": "7 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "506 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1213",
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
    "id": "1214",
    "title": "1 Storey Terrace House",
    "address": "Lorong Lagenda 43 (TIC67A/44), Seksyen 3, Bandar Lagenda Teluk Intan, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 144000,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "919 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1215",
    "title": "1 Storey Terrace House",
    "address": "Jalan Residen 8/12, Residen 8, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 162000,
    "auctionDate": "8 Sep 2026 (Tue)",
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
    "title": "1 Storey Terrace House",
    "address": "No. 2, Lorong Sungai Choh 6, Taman Berjaya Selatan, 31250 Tanjung Rambutan, Perak",
    "postcode": "31250",
    "state": "Perak",
    "area": "Tanjung Rambutan",
    "reservePrice": 340000,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "025 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1217",
    "title": "2 Storey Terrace Shop Office",
    "address": "No. 48 & 48A, Jalan Klebang Ria 1, Taman Klebang Ria, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 450000,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "959 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1218",
    "title": "3 Adjoining Units of 4 Storey Terraced Shop Office",
    "address": "No. 2 & 4 & 6, Jalan Putra, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 2880000,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "194 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1219",
    "title": "1 Storey Semi Detached House",
    "address": "No. 133, Jalan Mesra 11, Taman Mesra Rakyat, 31900 Kampar, Perak",
    "postcode": "31900",
    "state": "Perak",
    "area": "Kampar",
    "reservePrice": 180000,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "701 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1220",
    "title": "1 Storey Terrace House",
    "address": "No. 41, Laluan Permai 8, Taman Bemban Permai, 31000 Batu Gajah, Perak",
    "postcode": "31000",
    "state": "Perak",
    "area": "Batu Gajah",
    "reservePrice": 240000,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "300 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1221",
    "title": "1 Storey Terrace House",
    "address": "No. 460, Laluan Kledang 5/3, Taman Kledang, 31100 Sungai Siput (U), Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput (U)",
    "reservePrice": 200000,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1222",
    "title": "1 Storey Terrace House",
    "address": "No. 49, Lorong Lagenda 52, Seksyen 3, Bandar Lagenda Teluk Intan, 36000, Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 220000,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1223",
    "title": "1 Storey Terrace House",
    "address": "No. 35, Jalan Nakhoda Bestari 2, Taman Nakhoda Bestari, 32200 Lumut, Perak",
    "postcode": "32200",
    "state": "Perak",
    "area": "Lumut",
    "reservePrice": 170000,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1224",
    "title": "1 Storey Terrace House",
    "address": "No. 179, Jalan Residen 4/3, Residen 4, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 230000,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1225",
    "title": "1 Storey Cluster Semi Detached House",
    "address": "No. 88, Jalan Residen 7/2, Residen 7, Bandar Baru Setia Awan Perdana, 32000, Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 250000,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "916 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1226",
    "title": "2 Storey Terrace House",
    "address": "No. 2, Lorong Kijang Indah 1, Taman Kijang Indah, 14000 Bukit Mertajam, Penang",
    "postcode": "14000",
    "state": "Penang",
    "area": "Bukit Mertajam",
    "reservePrice": 620000,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "153 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1227",
    "title": "1 Storey Terrace House",
    "address": "No. 1524, Lorong Angsana 43, Taman Keladi, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 198000,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "200 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1228",
    "title": "1 Storey Terrace House",
    "address": "Jalan Harmonis 2, Taman Harmonis, 32610 Seri Iskandar, Perak",
    "postcode": "32610",
    "state": "Perak",
    "area": "Seri Iskandar",
    "reservePrice": 186300,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "099 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1229",
    "title": "1 Storey Terrace House",
    "address": "Lorong Segari Maju 4, Taman Segari Maju, 32200 Lumut, Perak",
    "postcode": "32200",
    "state": "Perak",
    "area": "Lumut",
    "reservePrice": 171000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "851 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1230",
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
    "id": "1231",
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
    "id": "1232",
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
    "id": "1233",
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
    "id": "1234",
    "title": "Industrial Land",
    "address": "No. 136 (Lot 15724), Kawasan Perusahaan Fasa 2, 31100 Sungai Siput (U), Perak",
    "postcode": "15724",
    "state": "Perak",
    "area": "Sungai Siput (U)",
    "reservePrice": 1749600,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "513 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1235",
    "title": "1 Storey Terrace House",
    "address": "No. 37-L, Lorong Bentara 9, Taman Sri Manggis, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 210600,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "474 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1236",
    "title": "Town House",
    "address": "Unit No. 73-3, Blok 73, Aras 3, Persiaran Residensi, Bandar Agacia (The Residence @ Kampar), 31910 Kampar, Perak",
    "postcode": "31910",
    "state": "Perak",
    "area": "Kampar",
    "reservePrice": 100000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "098 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1237",
    "title": "1 Storey Terrace House",
    "address": "No. 23, Jalan Kinding Perdana 2, Taman Kinding Perdana, 31250 Tanjong Rambutan, Perak",
    "postcode": "31250",
    "state": "Perak",
    "area": "Tanjong Rambutan",
    "reservePrice": 225000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1238",
    "title": "1 Storey Terrace House",
    "address": "No. 155-A, Lorong Kenari Biru 7/2, Taman Mawar, 05200 Alor Setar, Kedah",
    "postcode": "05200",
    "state": "Kedah",
    "area": "Alor Setar",
    "reservePrice": 243000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1239",
    "title": "1 Storey Terrace House",
    "address": "No. 17, Jalan LB 1/6, Lembah Beriah 1, 34310 Bagan Serai, Perak",
    "postcode": "34310",
    "state": "Perak",
    "area": "Bagan Serai",
    "reservePrice": 39366,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "085 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1240",
    "title": "2 Storey Semi Detached House",
    "address": "Taman Laksamana, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 420000,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "268 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1241",
    "title": "2 Storey Terrace House",
    "address": "No. 4, Lorong Yayasan 13, Taman Yayasan, 34600 Kamunting, Perak",
    "postcode": "34600",
    "state": "Perak",
    "area": "Kamunting",
    "reservePrice": 284310,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "899 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1242",
    "title": "1 Storey Detached House",
    "address": "No. 454, Jalan Baru, Kampung Pinang, 34600 Kamunting, Perak",
    "postcode": "34600",
    "state": "Perak",
    "area": "Kamunting",
    "reservePrice": 182250,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "513 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1243",
    "title": "2 Storey Terrace House",
    "address": "Laluan Klebang Jaya 45, Taman Klebang Jaya, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 144000,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "831 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1244",
    "title": "2 Storey Terrace House",
    "address": "Jalan Aman 16, Taman Aman Fasa 2, 31950 Mambang Diawan, Perak",
    "postcode": "31950",
    "state": "Perak",
    "area": "Mambang Diawan",
    "reservePrice": 177000,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1245",
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
    "id": "1246",
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
    "id": "1247",
    "title": "1 Storey Terrace House",
    "address": "No. 21, Lorong SS3, Taman Semesti Selesa, 36400 Hutan Melintang, Perak",
    "postcode": "36400",
    "state": "Perak",
    "area": "Hutan Melintang",
    "reservePrice": 280000,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "239 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1248",
    "title": "1 Storey Terrace House",
    "address": "No. 133, Taman Bunga Matahari, 32400 Ayer Tawar, Perak",
    "postcode": "32400",
    "state": "Perak",
    "area": "Ayer Tawar",
    "reservePrice": 130000,
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
    "id": "1249",
    "title": "1 Storey Terrace House",
    "address": "No. 19, Lorong Lagenda 68, Seksyen 3, Bandar Lagenda Teluk Intan, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 220000,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1250",
    "title": "2 Storey Terrace House",
    "address": "No. 706, Taman Bersatu, Jalan Batas Paip, 06600 Kuala Kedah, Kedah",
    "postcode": "06600",
    "state": "Kedah",
    "area": "Kuala Kedah",
    "reservePrice": 144000,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "700 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1251",
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
    "id": "1252",
    "title": "1 Storey Terrace House",
    "address": "No. 29, Jalan 7, Taman Sungai Mas, 34000 Taiping, Perak",
    "postcode": "34000",
    "state": "Perak",
    "area": "Taiping",
    "reservePrice": 150000,
    "auctionDate": "14 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "098 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1253",
    "title": "1 Storey Terrace House",
    "address": "Laluan Tronoh Universiti 9, Taman Tronoh Universiti, 31750 Tronoh, Perak",
    "postcode": "31750",
    "state": "Perak",
    "area": "Tronoh",
    "reservePrice": 162000,
    "auctionDate": "14 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "206 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1254",
    "title": "1 Storey Terrace House",
    "address": "Kampung Tersusun Keledang Utama, 31100 Sungai Siput (U), Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput (U)",
    "reservePrice": 280000,
    "auctionDate": "14 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1255",
    "title": "2 Storey Terrace House",
    "address": "No. 8, Lahat Permai 3, Taman Lahat Permai, 31500 Lahat, Perak",
    "postcode": "31500",
    "state": "Perak",
    "area": "Lahat",
    "reservePrice": 180000,
    "auctionDate": "15 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1256",
    "title": "2 Storey Terrace House",
    "address": "No. 48, Jalan Taman Marisa, Taman Marisa, 34000 Taiping, Perak",
    "postcode": "34000",
    "state": "Perak",
    "area": "Taiping",
    "reservePrice": 225180,
    "auctionDate": "15 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1257",
    "title": "1 Storey Semi Detached House",
    "address": "Lorong 22, Taman Kota Jaya, 34700 Simpang, Perak",
    "postcode": "34700",
    "state": "Perak",
    "area": "Simpang",
    "reservePrice": 230850,
    "auctionDate": "15 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "000 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1258",
    "title": "Office Building",
    "address": "Jalan Meru Bestari D1, Kompleks Perdagangan DWJ@Meru, 30020 Ipoh, Perak",
    "postcode": "30020",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 207000,
    "auctionDate": "15 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "603 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1259",
    "title": "Apartment",
    "address": "Unit No. J-5-16, Jalan Klebang Sentosa 2, Apartmen Casa Klebang 1, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 170000,
    "auctionDate": "15 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "850 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1260",
    "title": "1 Storey Semi Detached House",
    "address": "No. 245, Persiaran Liman 5/1, Taman Liman, 33020 Kuala Kangsar, Perak",
    "postcode": "33020",
    "state": "Perak",
    "area": "Kuala Kangsar",
    "reservePrice": 224000,
    "auctionDate": "15 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "293 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1261",
    "title": "2 Storey Terrace House",
    "address": "No. 36, Lorong Desa Sitiawan 3, Taman Desa Sitiawan, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 226800,
    "auctionDate": "15 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "324 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1262",
    "title": "1 Storey Terrace House",
    "address": "No. 6, Jalan Akasia 6, Taman Kinding Akasia, 31200, Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 200000,
    "auctionDate": "15 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1263",
    "title": "Flat",
    "address": "Unit No. 3-23-3, Tingkat Paya Terubong 5, Mukim 13, 11060 Paya Terubong, Penang",
    "postcode": "11060",
    "state": "Penang",
    "area": "Paya Terubong",
    "reservePrice": 225000,
    "auctionDate": "15 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "700 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1264",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1265",
    "title": "1 Storey Terrace House",
    "address": "Lorong Ara Suria 2, Taman Ara Suria, 13310 Tasek Gelugor, Penang",
    "postcode": "13310",
    "state": "Penang",
    "area": "Tasek Gelugor",
    "reservePrice": 324000,
    "auctionDate": "15 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1266",
    "title": "Apartment",
    "address": "Unit No. 7B-11-12, Pangsapuri Palm Court, Jalan Seri Tanjung Pinang, 10470 Tanjung Tokong, Penang",
    "postcode": "10470",
    "state": "Penang",
    "area": "Tanjung Tokong",
    "reservePrice": 194400,
    "auctionDate": "15 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "657 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1S217QcFejdcOnj12gjKmOjFPAiR2lJw5&sz=w800"
    ]
  },
  {
    "id": "1267",
    "title": "1.5 Storey Terrace House",
    "address": "No. 13, Jalan Angsana 1, Taman Angsana, Fasa 1, 33300 Gerik, Perak",
    "postcode": "33300",
    "state": "Perak",
    "area": "Gerik",
    "reservePrice": 284000,
    "auctionDate": "21 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "725 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1268",
    "title": "1 Storey Terrace House",
    "address": "Lorong Mewah 11, Taman Mewah, 34600 Kamunting, Perak",
    "postcode": "34600",
    "state": "Perak",
    "area": "Kamunting",
    "reservePrice": 170000,
    "auctionDate": "21 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1269",
    "title": "1 Storey Terrace House",
    "address": "No. 404-U21, Kampung Muhibbah Fasa 2, 31100, Sungai Siput (U), Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput (U)",
    "reservePrice": 190000,
    "auctionDate": "21 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1270",
    "title": "Terrace House",
    "address": "Laluan Seri Rahmat 4, Halaman Seri Rahmat, 31000 Batu Gajah, Perak",
    "postcode": "31000",
    "state": "Perak",
    "area": "Batu Gajah",
    "reservePrice": 200000,
    "auctionDate": "21 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1271",
    "title": "1 Storey Terrace House",
    "address": "No. 8, Lorong Lagenda 47, Seksyen 3, Bandar Lagenda Teluk Intan, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 144000,
    "auctionDate": "21 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "880 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1272",
    "title": "1 Storey Terrace House",
    "address": "No. 17, Jalan Putra Harmoni 4, Taman Putra Harmoni, 31400 Ipoh, Perak",
    "postcode": "31400",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 270000,
    "auctionDate": "21 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "320 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1273",
    "title": "1 Storey Terrace House",
    "address": "No. 367, Jalan RB 8, Residensi Bidoria, 35500 Bidor, Perak",
    "postcode": "35500",
    "state": "Perak",
    "area": "Bidor",
    "reservePrice": 350000,
    "auctionDate": "21 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "880 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1274",
    "title": "2 Storey Shop Office",
    "address": "No. 27 & 27A, Jalan Meru Utama A1, Medan Maru Utama, 30020 Ipoh, Perak",
    "postcode": "30020",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 900000,
    "auctionDate": "21 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "560 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1275",
    "title": "1 Storey Terrace House",
    "address": "No. 29, Lebuh Bercham Selatan 1/5, Desa Impian, 31400 Ipoh, Perak",
    "postcode": "31400",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 81000,
    "auctionDate": "21 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "200 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1276",
    "title": "Residential Land",
    "address": "Lot No. PT 1339, Lorong Anggerik 1, Kampung Tersusun Batu 7 Lekir, 32020 Lekir, Perak",
    "postcode": "32020",
    "state": "Perak",
    "area": "Lekir",
    "reservePrice": 130000,
    "auctionDate": "21 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "976 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1277",
    "title": "1 Storey Terrace House",
    "address": "No. 517, Laluan Kledang 5/4, Taman Kledang, 31100 Sungai Siput (U), Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput (U)",
    "reservePrice": 135000,
    "auctionDate": "21 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1278",
    "title": "1 Storey Terrace House",
    "address": "No. 471, Lorong 10, Taman Desa Bakti, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 170000,
    "auctionDate": "21 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1279",
    "title": "Terrace House",
    "address": "Jalan Tropika 1, Residensi Lagenda Tropika, 35350 Temoh, Perak",
    "postcode": "35350",
    "state": "Perak",
    "area": "Temoh",
    "reservePrice": 218000,
    "auctionDate": "21 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "059 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1280",
    "title": "Terrace House",
    "address": "Jalan Residen 4/8, Residen 4, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 200000,
    "auctionDate": "21 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "880 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1281",
    "title": "Apartment",
    "address": "Unit No. 17-23-10, Hilir Sungai Pinang, Serina Bay, 11600 Jelutong, Penang",
    "postcode": "11600",
    "state": "Penang",
    "area": "Jelutong",
    "reservePrice": 249320,
    "auctionDate": "21 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "700 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1mMm_HNVaFTiBB7GeBm_Ny76bJz8pLctT&sz=w800"
    ]
  },
  {
    "id": "1282",
    "title": "Flat",
    "address": "Unit No. 1062-19-23, Jalan Paya Terubong, Mukim 13, 11060, Penang",
    "postcode": "11060",
    "state": "Penang",
    "area": "Penang",
    "reservePrice": 126000,
    "auctionDate": "21 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "538 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1283",
    "title": "Apartment",
    "address": "Unit No. 46-17-18, Desa Green, Jalan Van Praagh, 11600 Jelutong, Penang",
    "postcode": "11600",
    "state": "Penang",
    "area": "Jelutong",
    "reservePrice": 234000,
    "auctionDate": "21 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "700 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1gwRtVS7ov0h0VHeGC8kaTcL9vnu5UBvD&sz=w800"
    ]
  },
  {
    "id": "1284",
    "title": "2 Storey Semi Detached House",
    "address": "No. 26, Jalan Nusa Cinta 2, Taman Nusa Cinta, Bandar Setia Fontaines, 13200 Kepala Batas, Penang",
    "postcode": "13200",
    "state": "Penang",
    "area": "Kepala Batas",
    "reservePrice": 607500,
    "auctionDate": "21 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "305 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1285",
    "title": "1 Storey Terrace House",
    "address": "Jalan Residen 1/10, Residen 1, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 168000,
    "auctionDate": "22 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "879 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1286",
    "title": "2 Storey Terrace House",
    "address": "Jalan Putra Berlian 3A, Kampar Putra, 31900 Kampar, Perak",
    "postcode": "31900",
    "state": "Perak",
    "area": "Kampar",
    "reservePrice": 461700,
    "auctionDate": "22 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "939 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1287",
    "title": "2 Storey Terrace House",
    "address": "Jalan Taman Jana Setia, Taman Jana Setia, 34600 Kamunting, Perak",
    "postcode": "34600",
    "state": "Perak",
    "area": "Kamunting",
    "reservePrice": 340000,
    "auctionDate": "22 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1288",
    "title": "2 Storey Semi Detached House",
    "address": "Laluan Desa Chemor 3, Taman Chemor Indah, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 320000,
    "auctionDate": "22 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1289",
    "title": "1 Storey Terrace House",
    "address": "No. 55, Jalan Meranti, Taman Pelangi, 31000 Batu Gajah, Perak",
    "postcode": "31000",
    "state": "Perak",
    "area": "Batu Gajah",
    "reservePrice": 120000,
    "auctionDate": "22 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "216 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1290",
    "title": "2 Storey Terrace House",
    "address": "No. 119, Laluan Bercham Utara 5, Taman Utama, 31400 Ipoh, Perak",
    "postcode": "31400",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 250000,
    "auctionDate": "22 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "728 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1291",
    "title": "1 Storey Terrace House",
    "address": "No. 8, Dataran Pengkalan Barat 12, Taman Temara, 31650 Ipoh, Perak",
    "postcode": "31650",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 110000,
    "auctionDate": "22 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1292",
    "title": "1 Storey Cluster Semi Detached House",
    "address": "No. 1453, Jalan Residen 8/36, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 220000,
    "auctionDate": "22 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "797 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1293",
    "title": "1 Storey Terrace House",
    "address": "No. 93, Jalan SM 3C/4, Fasa 3C, 32040 Seri Manjung, Perak",
    "postcode": "32040",
    "state": "Perak",
    "area": "Seri Manjung",
    "reservePrice": 208000,
    "auctionDate": "22 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1294",
    "title": "2 Storey Terrace Shop Office",
    "address": "No. 85 & 85A, Jalan Klebang Sentosa 2, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 412200,
    "auctionDate": "22 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1295",
    "title": "2 Storey Terrace House",
    "address": "No. 7, Lorong Gunung Rapat 5, Taman Cemerlang Emas, 31350, Ipoh, Perak",
    "postcode": "31350",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 270000,
    "auctionDate": "22 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1296",
    "title": "1 Storey Terrace House",
    "address": "No. 214, Jalan Residen 3/5, Residen 3, Bandar Baru Setia Awan Perdana, 32000, Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 200000,
    "auctionDate": "22 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1297",
    "title": "1 Storey Terrace House",
    "address": "No. 139, Lorong 4, Taman Melor, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 184000,
    "auctionDate": "22 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1298",
    "title": "Terrace House",
    "address": "Jalan Tasik Indah 26, Bandar Universiti, 32610 Seri Iskandar, Perak",
    "postcode": "32610",
    "state": "Perak",
    "area": "Seri Iskandar",
    "reservePrice": 250000,
    "auctionDate": "22 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "770 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1299",
    "title": "2 Storey Terrace House",
    "address": "Taman Pelangi, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 400000,
    "auctionDate": "22 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "765 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1300",
    "title": "Terrace House",
    "address": "Jalan RB 6, Residensi Bidoria, 35500 Bidor, Perak",
    "postcode": "35500",
    "state": "Perak",
    "area": "Bidor",
    "reservePrice": 225000,
    "auctionDate": "22 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "079 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1301",
    "title": "Terrace House",
    "address": "Persiaran Tapah Indah 3, Taman Tapah Indah, 35000 Tapah, Perak",
    "postcode": "35000",
    "state": "Perak",
    "area": "Tapah",
    "reservePrice": 200000,
    "auctionDate": "22 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "854 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1302",
    "title": "Apartment",
    "address": "Unit No. A-5-1, Jalan Impiana 2, Taman Meru Impiana, 30020 Ipoh, Perak",
    "postcode": "30020",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 110000,
    "auctionDate": "22 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "753 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1303",
    "title": "2 Storey Terrace House",
    "address": "No. 58, Lorong Tasek Gelugor Utama 3/6, Taman Tasek Gelugor Utama, 13300 Tasek Gelugor, Penang",
    "postcode": "13300",
    "state": "Penang",
    "area": "Tasek Gelugor",
    "reservePrice": 303750,
    "auctionDate": "22 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "087 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Ro0M95wbY4SBDK9bY2eiul9Ro5Wv9Eb9&sz=w800"
    ]
  },
  {
    "id": "1304",
    "title": "Apartment",
    "address": "Kayangan Puri Mutiara, Medan Fettes, 10470 Tanjung Tokong, Penang",
    "postcode": "10470",
    "state": "Penang",
    "area": "Tanjung Tokong",
    "reservePrice": 350000,
    "auctionDate": "22 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "807 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1305",
    "title": "Apartment",
    "address": "Unit No. 6-9-3A, Sri Kristal, Lengkok Angsana, 11500 Ayer Itam, Penang",
    "postcode": "11500",
    "state": "Penang",
    "area": "Ayer Itam",
    "reservePrice": 333000,
    "auctionDate": "22 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "710 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1306",
    "title": "2 Storey Terrace House",
    "address": "No. 64, Sri Klebang D/7, Bandar Baru Sri Klebang, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 324000,
    "auctionDate": "23 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "518 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1307",
    "title": "Semi Detached House",
    "address": "Jalan Karisma Suria 1, Taman Karisma Suria, Kampung China, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 450000,
    "auctionDate": "23 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "084 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1308",
    "title": "1 Storey Terrace House",
    "address": "No. 31, Lorong Seberang 19, Taman Pinang Seberang, 34600 Kamunting, Perak",
    "postcode": "34600",
    "state": "Perak",
    "area": "Kamunting",
    "reservePrice": 200000,
    "auctionDate": "23 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "917 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1309",
    "title": "Service Apartment",
    "address": "Unit No. 22-3A, Menara Agacia @ Kampar (Champs Elysees), Lingkaran Agacia, Bandar Agacia, 31910 Kampar, Perak",
    "postcode": "31910",
    "state": "Perak",
    "area": "Kampar",
    "reservePrice": 97200,
    "auctionDate": "23 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "430 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1310",
    "title": "1 Storey Terrace House",
    "address": "No. 1050, Laluan Kledang 4/4, Taman Kledang, 31100 Sungai Siput (U), Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput (U)",
    "reservePrice": 105300,
    "auctionDate": "23 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "098 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1311",
    "title": "2 Storey Terrace House",
    "address": "Sri Klebang D/1, Bandar Baru Sri Klebang, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 460000,
    "auctionDate": "23 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "163 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1312",
    "title": "1 Storey Terrace House",
    "address": "No. 48, Jalan Mahsuri 10, Taman Mahsuri Jaya, 31900 Kampar, Perak",
    "postcode": "31900",
    "state": "Perak",
    "area": "Kampar",
    "reservePrice": 130000,
    "auctionDate": "23 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1313",
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
    "id": "1314",
    "title": "2 Storey Semi Detached House",
    "address": "No. 1F, Jalan Beriksa 4, Mukim 13, 11500 Ayer Itam, Penang",
    "postcode": "11500",
    "state": "Penang",
    "area": "Ayer Itam",
    "reservePrice": 1000000,
    "auctionDate": "23 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "208 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1315",
    "title": "1 Storey Terrace House",
    "address": "No. 28, Taman Seri Kemuning, 06000 Jitra, Kedah",
    "postcode": "06000",
    "state": "Kedah",
    "area": "Jitra",
    "reservePrice": 150000,
    "auctionDate": "23 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "020 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1316",
    "title": "1 Storey Cluster House",
    "address": "Jalan Residen 6/18, Residen 6, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 192000,
    "auctionDate": "24 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "916 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1317",
    "title": "2 Storey Terrace House",
    "address": "No. 5, Laluan Lapangan, Taman Sri Perkasa, 31650 Ipoh, Perak",
    "postcode": "31650",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 340200,
    "auctionDate": "24 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1318",
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
    "id": "1319",
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
    "id": "1320",
    "title": "1 Storey Semi Detached House",
    "address": "No. 9, Jalan Melati 1, Taman Selinsing Melati, 34400 Simpang Ampat Semanggol, Perak",
    "postcode": "34400",
    "state": "Perak",
    "area": "Simpang Ampat Semanggol",
    "reservePrice": 300000,
    "auctionDate": "24 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "464 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1321",
    "title": "2 Storey Terrace House",
    "address": "No. 81, Jalan Kasturi 5, Taman Kasturi, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 400000,
    "auctionDate": "24 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1322",
    "title": "1 Storey Terrace House",
    "address": "Jalan Kelisa Ria 1/23, Taman Kelisa Ria, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 145800,
    "auctionDate": "24 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1323",
    "title": "2 Storey Terrace House",
    "address": "Jalan Desa Jaya 10, Taman Desa Jaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 178200,
    "auctionDate": "24 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "119 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1324",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1325",
    "title": "2 Storey Terrace House",
    "address": "No. 30, Lorong BLM 5/2, Bandar Laguna Merbok, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 337500,
    "auctionDate": "24 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "091 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1326",
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
    "id": "1327",
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
    "id": "1328",
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
    "id": "1329",
    "title": "1 Storey Terrace House",
    "address": "No. 20, Taman Sheikh Fadzir, 09310 Baling, Kedah",
    "postcode": "09310",
    "state": "Kedah",
    "area": "Baling",
    "reservePrice": 150000,
    "auctionDate": "24 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "001 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1330",
    "title": "1.5 Storey Terrace House",
    "address": "No. 187, Jalan Mutiara BPJ 1, Mutiara Bandar Puteri Jaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 280000,
    "auctionDate": "24 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "468 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1331",
    "title": "1 Storey Terrace House",
    "address": "Jalan Kota Kenari 3, Taman Kota Kenari, 09000 Kulim, Kedah",
    "postcode": "09000",
    "state": "Kedah",
    "area": "Kulim",
    "reservePrice": 315000,
    "auctionDate": "24 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1332",
    "title": "2 Storey Terrace House",
    "address": "Lorong Astana 7/8, Bandar Seri Astana, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 360000,
    "auctionDate": "24 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1333",
    "title": "1 Storey Terrace House",
    "address": "Lorong Lagenda 56, Bandar Lagenda Teluk Intan, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 178000,
    "auctionDate": "28 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "899 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1334",
    "title": "2 Storey Terrace House",
    "address": "No. 11, Jalan Chemor Setia 4, Taman Chemor Setia, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 315900,
    "auctionDate": "28 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "282 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1335",
    "title": "Town Villa",
    "address": "Blok 83, Aras 3, The Residence @ Kampar, Persiaran Residensi, Bandar Agacia, 31910 Kampar, Perak",
    "postcode": "31910",
    "state": "Perak",
    "area": "Kampar",
    "reservePrice": 180000,
    "auctionDate": "28 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "098 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1336",
    "title": "Office Lot",
    "address": "Jalan Meru Bestari D1, Kompleks Perdagangan DWJ @ Meru, 30020 Ipoh, Perak",
    "postcode": "30020",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 207000,
    "auctionDate": "28 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "527 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1337",
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
    "id": "1338",
    "title": "3 Storey Shop Office",
    "address": "Unit No. 63A-G & 63A-1 & 63A-2, Disney Avenue, Bandar Agacia, 31910 Kampar, Perak",
    "postcode": "31910",
    "state": "Perak",
    "area": "Kampar",
    "reservePrice": 650000,
    "auctionDate": "28 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "647 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1339",
    "title": "Flat",
    "address": "Unit No. A-2-13, Persiaran Lapangan Perdana 3, Panorama Lapangan Perdana, 31650 Ipoh, Perak",
    "postcode": "31650",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 56000,
    "auctionDate": "28 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "688 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1340",
    "title": "1 Storey Terrace House",
    "address": "No. 3, Laluan Wawasan 4, Taman Tronoh Wawasan, 31750 Tronoh, Perak",
    "postcode": "31750",
    "state": "Perak",
    "area": "Tronoh",
    "reservePrice": 81000,
    "auctionDate": "28 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1341",
    "title": "3 Storey Shop Office",
    "address": "No. 50 & 50A & 50B, Medan Stesen 18/3, Station 18, 31650 Ipoh, Perak",
    "postcode": "31650",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 560000,
    "auctionDate": "28 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1342",
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
    "id": "1343",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1344",
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
    "id": "1345",
    "title": "2 Storey Semi Detached House",
    "address": "No. 53, Jalan Helang 3, Taman Helang Perdana, 09000 Kulim, Kedah",
    "postcode": "09000",
    "state": "Kedah",
    "area": "Kulim",
    "reservePrice": 570000,
    "auctionDate": "30 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "885 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1346",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1347",
    "title": "2 Storey Shop House",
    "address": "No. 50, Jalam PPMP 7, Pusat Perniagaan Manjung Point 1, 32040 Seri Manjung, Perak",
    "postcode": "32040",
    "state": "Perak",
    "area": "Seri Manjung",
    "reservePrice": 495000,
    "auctionDate": "5 Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1348",
    "title": "2 Storey Semi Detached House",
    "address": "No. 5, Jalan Pelangi Indah 1, Taman Pelangi Indah, Kampung Koh, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 470000,
    "auctionDate": "7 Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "831 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1349",
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
    "id": "1350",
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
    "id": "1351",
    "title": "Terrace House",
    "address": "Lorong Lagenda 79, Seksyen 3, Bandar Lagenda Teluk Intan, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 230000,
    "auctionDate": "15 Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1352",
    "title": "Residential Land",
    "address": "Kampung Tersusun Kamuning, 31100 Sungai Siput, Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput",
    "reservePrice": 35000,
    "auctionDate": "20 Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1353",
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
    "id": "1354",
    "title": "2 Storey Terrace House",
    "address": "No. 60, Laluan Klebang Ria 2, Taman Klebang Ria, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 330000,
    "auctionDate": "26 Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "099 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1355",
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
    "id": "1356",
    "title": "1 Storey Terrace House",
    "address": "No. 53, Lorong Budiman 2, Taman Desa Budiman, 08100 Sungai Lalang, Kedah",
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
    "id": "1357",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1358",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1359",
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
    "id": "1360",
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
    "id": "1361",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1362",
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
    "id": "1363",
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
    "id": "1364",
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
    "id": "1365",
    "title": "2 Storey Terrace House",
    "address": "No. 15, Persiaran Desa Rishah 11A, Taman Rishah Permai, 30100 Ipoh, Perak",
    "postcode": "30100",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 400000,
    "auctionDate": "26 Nov 2026 (Thu)",
    "landArea": "—",
    "builtUp": "420 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1366",
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
    "id": "1367",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1368",
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
    "id": "1369",
    "title": "Service Apartment",
    "address": "Unit No. #04-03A, Blok D, Pangsapuri Suriamas, Jalan Serantau, Taman Dato Onn, 80350 Johor Bahru, Johor",
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
    "id": "1370",
    "title": "Apartment",
    "address": "Unit No. #11-02, Blok B1, Impian Senibong, Jalan Persiaran Senibong, Taman Bayu Senibong, 81750 Masai, Johor",
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
    "id": "1371",
    "title": "1 Storey Terrace House",
    "address": "No. 298, Jalan Pulai Jaya 18, Bandar Pulai Jaya, 81300 Skudai, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Skudai",
    "reservePrice": 340200,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1372",
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
    "id": "1373",
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
    "id": "1374",
    "title": "1 Storey Terrace House",
    "address": "No. 57, Jalan Pulai Indah 3/14, Taman Pulai Indah 2, 81110 Kangkar, Pulai, Johor",
    "postcode": "81110",
    "state": "Johor",
    "area": "Pulai",
    "reservePrice": 520000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "885 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1375",
    "title": "Service Apartment",
    "address": "Unit No. #20-03, Residensi Pandan, Jalan Pandan Ria 7, Pusat Perdagangan Pandan, 81100 Johor Bahru, Johor",
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
    "id": "1376",
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
    "id": "1377",
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
    "id": "1378",
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
    "id": "1379",
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
    "id": "1380",
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
    "id": "1381",
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
    "id": "1382",
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
    "id": "1383",
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
    "id": "1384",
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
    "id": "1385",
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
    "id": "1386",
    "title": "1 Storey Terrace House",
    "address": "No. 210, Jalan Rawa 1, Taman Perling, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 440000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "657 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1387",
    "title": "Condominium",
    "address": "Unit No. #05-05 (known as L-5-03A), Jalan Sri Laguna 1, Bukit Laguna, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 880000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "712 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1388",
    "title": "Seri Bayan Apartment",
    "address": "Unit No. 03-06, Block A, Pangsapuri Seri Bayan, Jalan Bayan 11, Bandar Baru Kota Puteri, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 275400,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "162 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1389",
    "title": "Service Apartment",
    "address": "Unit No. #06-11, Blok D, KIP Indah Villa, Jalan Titiwangsa 1, Taman Tampoi Indah, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 270000,
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
    "id": "1390",
    "title": "1 Storey Terrace House",
    "address": "No. 49, Jalan PI 11/9, Taman Pulai Indah, 81110 Kangkar Pulai, Johor",
    "postcode": "81110",
    "state": "Johor",
    "area": "Kangkar Pulai",
    "reservePrice": 360000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1391",
    "title": "Apartment",
    "address": "Unit No. #02-06A, Jalan Mawar 1, Taman Tampoi Indah II, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 170000,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "710 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1392",
    "title": "2 Storey Terrace House",
    "address": "No. 78, Jalan Lavender 2, Taman Sri Penawar, 81930 Bandar Penawar, Johor",
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
    "id": "1393",
    "title": "2 Storey Terrace House",
    "address": "No. 355, Jalan Impiana Damai 1/13, Bandar Seri Impian, 86000 Kluang, Johor",
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
    "id": "1394",
    "title": "Service Apartment",
    "address": "Unit No. A-09-02, Villa Krystal, Jalan Silat Lincah, Bandar Selesa Jaya, 81300 Skudai, Johor",
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
    "id": "1395",
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
    "id": "1396",
    "title": "2 Storey Terrace House",
    "address": "No. 84, Pangsapuri Pinggiran Bayu, Jalan Pendas 4, Leisure Farm, 81560 Gelang Patah, Johor",
    "postcode": "81560",
    "state": "Johor",
    "area": "Gelang Patah",
    "reservePrice": 510300,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "485 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1397",
    "title": "Shop Unit",
    "address": "Unit No. FF-08, Kompleks Perniagaan Medan Kota, Jalan Yusof / Jalan Tambatan, 81900 Kota Tinggi, Johor",
    "postcode": "81900",
    "state": "Johor",
    "area": "Kota Tinggi",
    "reservePrice": 20250,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "183 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1398",
    "title": "2 Storey Terrace House",
    "address": "No. 10, Jalan Padi Malinja 4, Bandar Baru Uda, 81200 Johor Bahru, Johor",
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
    "id": "1399",
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
    "id": "1400",
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
    "id": "1401",
    "title": "Service Apartment",
    "address": "Unit No. #11-16, Block A, Lake View Suites, Jalan Austin Perdana 1, Taman Austin Perdana, 81100 Johor Bahru, Johor",
    "postcode": "81100",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 283500,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "947 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1402",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1403",
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
    "id": "1404",
    "title": "1 Storey Terrace House",
    "address": "Jalan Kancil 14, Taman Scientex, 81700 Pasir Gudang, Johor",
    "postcode": "81700",
    "state": "Johor",
    "area": "Pasir Gudang",
    "reservePrice": 400000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "848 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1405",
    "title": "Service Apartment",
    "address": "Unit No. #06-08, Block C, Apartment Suriamas, Jalan Serantau, Taman Dato Onn, 80350 Johor Bahru, Johor",
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
    "id": "1406",
    "title": "2 Storey Terrace House",
    "address": "No. 70, Jalan Indah 9/2, Taman Bukit Indah, 79100 Iskandar Puteri, Johor",
    "postcode": "79100",
    "state": "Johor",
    "area": "Iskandar Puteri",
    "reservePrice": 750000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "816 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1407",
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
    "id": "1408",
    "title": "2 Storey Terrace House",
    "address": "Jalan Sekuntum 20, Taman Bukit Dahlia, 81700 Pasir Gudang, Johor",
    "postcode": "81700",
    "state": "Johor",
    "area": "Pasir Gudang",
    "reservePrice": 400000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "260 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1409",
    "title": "Apartment",
    "address": "Unit No. #05-06, Block 8 (Savoy Court), Prima Regency Service Apartment, Jalan Masai Baru, 81100 Masai, Johor",
    "postcode": "81100",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 360000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "057 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1410",
    "title": "2 Storey Terrace House",
    "address": "No. 86, Jalan Uda Utama 7, Bandar Uda Utama, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 880000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "498 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1411",
    "title": "Apartment",
    "address": "Unit No. 04-06, Block A2, Jalan Idaman Utama, Taman Larkin Idaman, 80350 Johor Bahru, Johor",
    "postcode": "80350",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 240000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "742 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1412",
    "title": "Vacant Land",
    "address": "PTD 24368, Batu Dua, Off Jalan Yong Peng - Labis (Jalan Besar), 83700 Yong Peng, Johor",
    "postcode": "24368",
    "state": "Johor",
    "area": "Yong Peng",
    "reservePrice": 594045,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "792 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1413",
    "title": "Detached House Plot",
    "address": "PTD 24367, Batu Dua, Off Jalan Yong Peng - Labis (Jalan Besar), 83700 Yong Peng, Johor",
    "postcode": "24367",
    "state": "Johor",
    "area": "Yong Peng",
    "reservePrice": 73180,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "500 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1414",
    "title": "Detached House Plot",
    "address": "PTD 24363, Batu Dua, Off Jalan Yong Peng - Labis (Jalan Besar), 83700 Yong Peng, Johor",
    "postcode": "24363",
    "state": "Johor",
    "area": "Yong Peng",
    "reservePrice": 68875,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "999 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1415",
    "title": "2 Storey Terrace House",
    "address": "No. 133, Persiaran Residensi PRIMA 1, Taman Residensi PR1MA Kota Tinggi, 81900 Kota Tinggi, Johor",
    "postcode": "81900",
    "state": "Johor",
    "area": "Kota Tinggi",
    "reservePrice": 226800,
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
    "id": "1416",
    "title": "Vacant Plot",
    "address": "PTD 24364, Batu Dua, Off Jalan Yong Peng - Labis (Jalan Besar), 83700 Yong Peng, Johor",
    "postcode": "24364",
    "state": "Johor",
    "area": "Yong Peng",
    "reservePrice": 68875,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "999 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1417",
    "title": "Vacant Plot",
    "address": "PTD 24336, Batu Dua, Off Jalan Yong Peng - Labis (Jalan Besar), 83700 Yong Peng, Johor",
    "postcode": "24336",
    "state": "Johor",
    "area": "Yong Peng",
    "reservePrice": 99007,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "512 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1418",
    "title": "Vacant Land",
    "address": "PTD 24381, Batu Dua, Off Jalan Yong Peng - Labis (Jalan Besar), 83700 Yong Peng, Johor",
    "postcode": "24381",
    "state": "Johor",
    "area": "Yong Peng",
    "reservePrice": 73180,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "609 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1419",
    "title": "Detached House Plot",
    "address": "PTD 24380, Batu Dua, Off Jalan Yong Peng - Labis (Jalan Besar), 83700 Yong Peng, Johor",
    "postcode": "24380",
    "state": "Johor",
    "area": "Yong Peng",
    "reservePrice": 68875,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "249 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1420",
    "title": "Detached House Plot",
    "address": "PTD 24370, Batu Dua, Off Jalan Yong Peng - Labis (Jalan Besar), 83700 Yong Peng, Johor",
    "postcode": "24370",
    "state": "Johor",
    "area": "Yong Peng",
    "reservePrice": 142054,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "702 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1421",
    "title": "Detached House Plot",
    "address": "PTD 24346, Batu Dua, Off Jalan Yong Peng - Labis (Jalan Besar), 83700 Yong Peng, Johor",
    "postcode": "24346",
    "state": "Johor",
    "area": "Yong Peng",
    "reservePrice": 77485,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "249 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1422",
    "title": "Vacant Land",
    "address": "PTD 24365, Batu Dua, Off Jalan Yong Peng - Labis (Jalan Besar), 83700 Yong Peng, Johor",
    "postcode": "24365",
    "state": "Johor",
    "area": "Yong Peng",
    "reservePrice": 86093,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "032 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1423",
    "title": "Vacant Land",
    "address": "PTD 24361, Batu Dua, Off Jalan Yong Peng - Labis (Jalan Besar), 83700 Yong Peng, Johor",
    "postcode": "24361",
    "state": "Johor",
    "area": "Yong Peng",
    "reservePrice": 64571,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "999 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1424",
    "title": "Vacant Plot",
    "address": "PTD 24347, Batu Dua, Off Jalan Yong Peng - Labis (Jalan Besar), 83700 Yong Peng, Johor",
    "postcode": "24347",
    "state": "Johor",
    "area": "Yong Peng",
    "reservePrice": 103312,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "837 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1425",
    "title": "Vacant Land",
    "address": "PTD 24366, Batu Dua, Off Jalan Yong Peng - Labis (Jalan Besar), 83700 Yong Peng, Johor",
    "postcode": "24366",
    "state": "Johor",
    "area": "Yong Peng",
    "reservePrice": 73180,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "500 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1426",
    "title": "Vacant Land",
    "address": "PTD 24379, Batu Dua, Off Jalan Yong Peng - Labis (Jalan Besar), 83700 Yong Peng, Johor",
    "postcode": "24379",
    "state": "Johor",
    "area": "Yong Peng",
    "reservePrice": 68875,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "249 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1427",
    "title": "Vacant Plot",
    "address": "PTD 24369, Batu Dua, Off Jalan Yong Peng - Labis (Jalan Besar), 83700 Yong Peng, Johor",
    "postcode": "24369",
    "state": "Johor",
    "area": "Yong Peng",
    "reservePrice": 167882,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "580 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1428",
    "title": "1 Storey Terrace House",
    "address": "No. 49, Jalan Tembaga Merah 1, Taman Sri Skudai, 81300 Skudai, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Skudai",
    "reservePrice": 450000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1429",
    "title": "2 Storey Terrace House",
    "address": "No. 90, Jalan Impiana Damai 1/3, Bandar Seri Impian, 86000 Kluang, Johor",
    "postcode": "86000",
    "state": "Johor",
    "area": "Kluang",
    "reservePrice": 328050,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "765 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1430",
    "title": "1 Storey Detached House",
    "address": "No. 3, Jalan Teguh 5, Taman Sri Lambak, 86000 Kluang, Johor",
    "postcode": "86000",
    "state": "Johor",
    "area": "Kluang",
    "reservePrice": 277000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "212 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1431",
    "title": "Apartment",
    "address": "Unit No. #04-09, Pangsapuri Delima Larkin, Jalan Idaman 1, Taman Larkin Idaman, 80350 Johor Bahru, Johor",
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
    "id": "1432",
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
    "id": "1433",
    "title": "Service Apartment",
    "address": "Unit No. #17-08, Block D, Pangsapuri Amara Larkin, Jalan Larkin, 80350 Johor Bahru, Johor",
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
    "id": "1434",
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
    "id": "1435",
    "title": "Town House",
    "address": "Unit No. G-14, TH 2, Vista Seri Alam, Bandar Seri Alam, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 280000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "334 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1436",
    "title": "Apartment",
    "address": "Unit No. #02-06, Blok A, Pangsapuri Pulai View, Jalan Skudai, 81200 Johor Bahru, Johor",
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
    "id": "1437",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1438",
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
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1439",
    "title": "Service Apartment",
    "address": "Unit No. #18-10, Blok B, Pangsapuri Suriamas, Jalan Serantau, Taman Dato Onn, 80350 Johor Bahru, Johor",
    "postcode": "80350",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 243000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "786 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1440",
    "title": "1 Storey Terrace House",
    "address": "No. 5170, Jalan Kenari 6, Bandar Putra, 81000 Kulai, Johor",
    "postcode": "81000",
    "state": "Johor",
    "area": "Kulai",
    "reservePrice": 450000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "872 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1441",
    "title": "1 Storey Terrace House",
    "address": "No. 6, Jalan Sri Bahagia 2, Taman Sri Bahagia, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 220000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "076 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1442",
    "title": "1 Storey Terrace House",
    "address": "No. 14, Jalan Mahsuri, Taman Era, 86200 Simpang Renggam, Johor",
    "postcode": "86200",
    "state": "Johor",
    "area": "Simpang Renggam",
    "reservePrice": 275400,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "046 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1443",
    "title": "1 Storey Terrace House",
    "address": "No. 7, Jalan Gading 2, Taman Gading, 83300 Sri Gading, Batu Pahat, Johor",
    "postcode": "83300",
    "state": "Johor",
    "area": "Batu Pahat",
    "reservePrice": 131000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "080 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1444",
    "title": "1 Storey Terrace House",
    "address": "No. 60, Jalan Hang Jebat 1, Taman Skudai Baru, 81300 Skudai, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Skudai",
    "reservePrice": 600000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "239 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1445",
    "title": "Terrace House",
    "address": "No. 17, Jalan Pakis 11, Taman Sri Pulai, 81300 Skudai, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Skudai",
    "reservePrice": 400000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "125 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1446",
    "title": "2 Storey Semi Detached House",
    "address": "No. 4, Jalan Mersawa 15, Taman Cahaya Kota Puteri, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 1200000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "197 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1447",
    "title": "1 Storey Terrace House",
    "address": "No. 15, Jalan Kelasi 3, Taman Desa Paya Mengkuang, 81550 Gelang Patah, Johor Bahru, Johor",
    "postcode": "81550",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 370000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "060 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1448",
    "title": "2 Storey Terrace House",
    "address": "No. 23, Jalan Murai 3, Taman Scientex, 81700 Pasir Gudang, Johor",
    "postcode": "81700",
    "state": "Johor",
    "area": "Pasir Gudang",
    "reservePrice": 460000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "013 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1449",
    "title": "1 Storey Terrace House",
    "address": "No. 30, Jalan Melati Ria, Taman Melati, 84000 Muar, Johor",
    "postcode": "84000",
    "state": "Johor",
    "area": "Muar",
    "reservePrice": 165337.2,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "410 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1450",
    "title": "2 Storey Terrace House",
    "address": "No. 207, Jalan Riang, Taman Dato' Abd Rahman Jaafar, 83000 Batu Pahat, Johor",
    "postcode": "83000",
    "state": "Johor",
    "area": "Batu Pahat",
    "reservePrice": 170000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "915 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1451",
    "title": "2 Storey Terrace House",
    "address": "No. 16, Jalan Seri Suria 5, Taman Seri Suria, 86000 Kluang, Johor",
    "postcode": "86000",
    "state": "Johor",
    "area": "Kluang",
    "reservePrice": 135000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "775 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1452",
    "title": "2 Storey Terrace House",
    "address": "No. 1286, Jalan Scientex Jaya 25, Taman Scientex Senai, 81400 Senai, Johor",
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
    "id": "1453",
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
    "id": "1454",
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
    "id": "1455",
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
    "id": "1456",
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
    "id": "1457",
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
    "id": "1458",
    "title": "2 Storey Terrace House",
    "address": "Jalan Ceria 8, Taman Nusa Indah, 79100 Iskandar Puteri, Johor",
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
    "id": "1459",
    "title": "Service Apartment",
    "address": "Unit No. #22-04, Residensi Pandan, Jalan Pandan Ria 7, Pusat Perdagangan Pandan, 81100 Johor Bahru, Johor",
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
    "id": "1460",
    "title": "Apartment",
    "address": "Unit No. B12-2-6, Vista Seri Alam, Jalan Persiaran Seri Alam, Bandar Seri Alam, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 194400,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "850 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1461",
    "title": "Studio Service Apartment",
    "address": "Unit No. 14-07, Blok B, Pangsapuri Kempas Indah, Jalan Kempas Indah, Taman Kempas Indah, 81300 Johor Bahru, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 230000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "517 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1462",
    "title": "Service Apartment",
    "address": "Unit No. 13-07, Menara B, Residensi KSL Kangkar Tebrau, Jalan Kesum, 81100 Johor Bahru, Johor",
    "postcode": "81100",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 190000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "463 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1463",
    "title": "3 Storey Terrace House",
    "address": "No. 29, Pangsapuri Lagun, Jalan Seri Austin 3/56, Taman Seri Austin, 81100 Johor Bahru, Johor",
    "postcode": "81100",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 850000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "464 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1464",
    "title": "2 Storey Terrace House",
    "address": "No. 11, Jalan Ekoflora 3/7, Taman Ekoflora, 81100 Johor Bahru, Johor",
    "postcode": "81100",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 1050000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "800 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1465",
    "title": "Shop Office",
    "address": "Unit No. 53, Jalan Susur Larkin Perdana 1, Taman Larkin Perdana, 80350, Johor Bahru, Johor",
    "postcode": "80350",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 480000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "421 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1466",
    "title": "2 Storey Terrace House",
    "address": "No. 33, Jalan Kedidi 1, Taman Scientex, 81700 Pasir Gudang, Johor",
    "postcode": "81700",
    "state": "Johor",
    "area": "Pasir Gudang",
    "reservePrice": 330000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "770 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1467",
    "title": "Lily & Jasmine Apartment",
    "address": "Unit No. E-2-05, Blok E, Pangsapuri Lily & Jasmine, Jalan Persisiran Titiwangsa Utama, Taman Tampoi Indah, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 320000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "001 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1468",
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
    "id": "1469",
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
    "id": "1470",
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
    "id": "1471",
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
    "id": "1472",
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
    "id": "1473",
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
    "id": "1474",
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
    "id": "1475",
    "title": "Condominium",
    "address": "Unit No. #05-03, Laguna Heights, Jalan Sri Laguna 1, Bukit Laguna, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 878850,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "712 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1476",
    "title": "2 Storey Terrace House",
    "address": "No. 6, Jalan Melati 1C, Taman Sri Penawar, 81930 Bandar Penawar, Johor",
    "postcode": "81930",
    "state": "Johor",
    "area": "Bandar Penawar",
    "reservePrice": 387000,
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
    "id": "1477",
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
    "id": "1478",
    "title": "1 Storey Terrace House",
    "address": "No. 41, Jalan Panti, Taman Johor, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 460000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "100 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1479",
    "title": "Flat",
    "address": "Block M, Rumah Pangsa Sri Lanang, Jalan Harmonium, Taman Desa Tebrau, 81100 Johor Bahru, Johor",
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
    "id": "1480",
    "title": "2 Storey Terrace House",
    "address": "Jalan Kempas Utama 1/15, Taman Kempas Utama, 81300 Skudai, Johor",
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
    "id": "1481",
    "title": "2 Storey Cluster House",
    "address": "No. 11, Jalan Kempas Utama 1/45, Taman Kempas Utama, 81300 Johor Bahru, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 1057050,
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
    "id": "1482",
    "title": "2 Storey Terrace House",
    "address": "Jalan Nusaria 1/4, Taman Nusantara, 79200 Iskandar Puteri, Johor",
    "postcode": "79200",
    "state": "Johor",
    "area": "Iskandar Puteri",
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
    "id": "1483",
    "title": "Service Apartment",
    "address": "Unit No. #06-05, Pangsapuri Lagenda Tasek, Jalan Padi Makmur, Taman Suria Muafakat, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 262440,
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
    "id": "1484",
    "title": "2 Storey Terrace House",
    "address": "Jalan Enggang 18, Bandar Putra, 81000 Kulai, Johor",
    "postcode": "81000",
    "state": "Johor",
    "area": "Kulai",
    "reservePrice": 550000,
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
    "id": "1485",
    "title": "Service Apartment",
    "address": "Unit No. #09-01, Menara A, Pangsapuri Palma (juga dikenali Centra Residences), Jalan Palma Perak 1, Desa Palma, 81100 Johor Bahru, Johor",
    "postcode": "81100",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 437400,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "690 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1486",
    "title": "2 Storey Semi Detached House",
    "address": "No. 41, Jalan Sutera Chengal 6/17, Taman Sutera Utama, 81300 Skudai, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Skudai",
    "reservePrice": 1560000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "200 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1487",
    "title": "2 Storey Cluster House",
    "address": "Jalan Adda 2/2, Taman Adda (Yellow Horizon), 81100 Johor Bahru, Johor",
    "postcode": "81100",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 1000000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "380 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1488",
    "title": "Agricultural Land",
    "address": "Lot No. 11656, Kampung Parit Permatang Duku, 82000 Pontian, Johor",
    "postcode": "11656",
    "state": "Johor",
    "area": "Pontian",
    "reservePrice": 135000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1489",
    "title": "2 Storey Terrace House",
    "address": "No. 10, Jalan Kempas Utama 1/15, Taman Kempas Utama, 81300 Johor Bahru, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Johor Bahru",
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
    "id": "1490",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1491",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1492",
    "title": "1 Storey Terrace House",
    "address": "No. 187, Jalan Anggerik, Taman Selatan, 83700 Yong Peng, Johor",
    "postcode": "83700",
    "state": "Johor",
    "area": "Yong Peng",
    "reservePrice": 250000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "320 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1493",
    "title": "2 Storey Terrace House",
    "address": "No. 195, Jalan Scientex Jaya 8, Taman Scientex, 81400 Senai, Johor",
    "postcode": "81400",
    "state": "Johor",
    "area": "Senai",
    "reservePrice": 380700,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "790 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1494",
    "title": "Apartment",
    "address": "Tingkat 5, Skudai Villa, Jalan Aman, Taman Skudai Baru, 81300 Skudai, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Skudai",
    "reservePrice": 204120,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "861 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1495",
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
    "id": "1496",
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
    "id": "1497",
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
    "id": "1498",
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
    "id": "1499",
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
    "id": "1500",
    "title": "1 Storey Terrace House",
    "address": "No. 32, Jalan Saujana Desa 2, Taman Saujana, 86000 Kluang, Johor",
    "postcode": "86000",
    "state": "Johor",
    "area": "Kluang",
    "reservePrice": 297000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "210 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1501",
    "title": "Apartment",
    "address": "Unit No. #16-02, Tingkat 16, Blok E, Dwi Mahkota Condominium, Jalan Susur 1/1, Persiaran Tanjung, Taman Bukit Alif, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 288000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "076 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1502",
    "title": "1 Storey Terrace House",
    "address": "No. 63, Jalan Tasik Indah 7/5, Taman Tasik Indah, 86000 Kluang, Johor",
    "postcode": "86000",
    "state": "Johor",
    "area": "Kluang",
    "reservePrice": 194400,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "006 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1503",
    "title": "Apartment",
    "address": "Unit No. 02-05, Blok P, Taman Seri Setanggi, 80250 Johor Bahru, Johor",
    "postcode": "80250",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 225000,
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
    "id": "1504",
    "title": "2 Storey Terrace House",
    "address": "No. 45, Jalan PI 6/1, Taman Pulai Indah, 81110 Johor Bahru, Johor",
    "postcode": "81110",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 350000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "257 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1505",
    "title": "2 Storey Terrace House",
    "address": "No. 24, Jalan Kemboja 8, Bandar Bestari Perdana, 81700 Pasir Gudang, Johor",
    "postcode": "81700",
    "state": "Johor",
    "area": "Pasir Gudang",
    "reservePrice": 510000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1506",
    "title": "2 Storey Terrace House",
    "address": "No. 13, Jalan Nusaria 6/6, Taman Nusantara, 81550 Gelang Patah, Johor",
    "postcode": "81550",
    "state": "Johor",
    "area": "Gelang Patah",
    "reservePrice": 440000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "876 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1507",
    "title": "2 Storey Terrace House",
    "address": "No. 18, Jalan Pulasan 21, Taman Kota Masai, 81700 Pasir Gudang, Johor",
    "postcode": "81700",
    "state": "Johor",
    "area": "Pasir Gudang",
    "reservePrice": 380000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "184 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1508",
    "title": "Apartment",
    "address": "Block B, Pangsapuri Perling, Jalan Undan 8, Taman Perling, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 373000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "508 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1509",
    "title": "Apartment",
    "address": "Pangsapuri Adamai, Lorong 2C, Jalan Abdul Samad, 80100 Johor Bahru, Johor",
    "postcode": "80100",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 321489,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "625 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1510",
    "title": "Apartment",
    "address": "Blok M, Pangsapuri Lily & Jasmine, Jalan Persisiran Titiwangsa Utama, Taman Tampoi Indah, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 190000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "001 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1511",
    "title": "1 Storey Terrace House",
    "address": "No. 19, Jalan Bacang 23, Taman Kota Masai, 81700 Pasir Gudang, Johor",
    "postcode": "81700",
    "state": "Johor",
    "area": "Pasir Gudang",
    "reservePrice": 324000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "200 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1512",
    "title": "Apartment",
    "address": "Blok E, Pangsapuri Lily & Jasmine, Jalan Persisiran Titiwangsa Utama, Taman Tampoi Indah, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 226800,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "001 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1513",
    "title": "2 Storey Terrace House",
    "address": "No. 4, Jalan Jasmin 1/3, Bandar Bistari Perdana, 81700 Pasir Gudang, Johor",
    "postcode": "81700",
    "state": "Johor",
    "area": "Pasir Gudang",
    "reservePrice": 550000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "672 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1514",
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
    "id": "1515",
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
    "id": "1516",
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
    "id": "1517",
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
    "id": "1518",
    "title": "Apartment",
    "address": "Unit No. 05-02, Block A, Pangsapuri Sri Kenari, Jalan Titiwangsa Utama, Taman Tampoi Indah, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 259200,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "904 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1519",
    "title": "Flat",
    "address": "Unit No. F-02-05, Block F, Pangsapuri Sri Intan, Jalan Tasek, Bandar Seri Alam, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 178200,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "850 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1520",
    "title": "Condominium",
    "address": "Unit No. 01-02, Block C, Pangsapuri Seri Mutiara, Bandar Seri Alam, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 291600,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "324 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1521",
    "title": "Apartment",
    "address": "Unit No. 16-04, Block B, Pangsapuri Mutiara Idaman, Jalan Idaman Utama, Taman Larkin Idaman, 80350 Johor Bahru, Johor",
    "postcode": "80350",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 262440,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "001 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1522",
    "title": "Condominium",
    "address": "Unit No. 21-05, Block A, Pangsapuri Seri Mutiara, Bandar Seri Alam, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 269001,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "345 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1523",
    "title": "Apartment",
    "address": "Unit No. A-01-03, Pangsapuri Sri Awana, Jalan Silat Lincah, Bandar Selesa Jaya, 81300 Skudai, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Skudai",
    "reservePrice": 255150,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "044 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1524",
    "title": "2 Storey Terrace House",
    "address": "No. 1337, Jalan Scientex 25, Taman Scientex, Kelapa Sawit, 81030 Kulai, Johor",
    "postcode": "81030",
    "state": "Johor",
    "area": "Kulai",
    "reservePrice": 360000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "960 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1525",
    "title": "Apartment",
    "address": "Unit No. 03-17, Block B, Pangsapuri Sri Akasia, Jalan Persisiran Titiwangsa Utama, Taman Tampoi Indah, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 291600,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "044 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1526",
    "title": "Apartment",
    "address": "Unit No. F-4-8, Skudai Villa, Jalan Aman, Taman Skudai Baru, 81300 Skudai, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Skudai",
    "reservePrice": 299700,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "109 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1527",
    "title": "2 Storey Terrace House",
    "address": "No. 69, Jalan Sejambak 13, Taman Bukit Dahlia, 81700 Pasir Gudang, Johor",
    "postcode": "81700",
    "state": "Johor",
    "area": "Pasir Gudang",
    "reservePrice": 441000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "520 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1528",
    "title": "Apartment",
    "address": "Block B, Kip Villa Indah, Jalan Titiwangsa 1, Taman Tampoi Indah, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 380000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "926 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1529",
    "title": "2 Storey Cluster House",
    "address": "No. 8013, Jalan Sri Putri 5/23, Taman Putri Kulai, 81000 Kulai, Johor",
    "postcode": "81000",
    "state": "Johor",
    "area": "Kulai",
    "reservePrice": 675000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "378 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1530",
    "title": "Service Apartment",
    "address": "Unit No. #13-03, Blok B, Residensi Seri Mega, Jalan Kempas 14, Taman Megah Ria, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 283500,
    "auctionDate": "1 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "915 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1531",
    "title": "1 Storey Terrace House",
    "address": "Jalan Sutera 2/9, Taman Puteri, 86000 Kluang, Johor",
    "postcode": "86000",
    "state": "Johor",
    "area": "Kluang",
    "reservePrice": 220000,
    "auctionDate": "1 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "410 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1532",
    "title": "1 Storey Terrace House",
    "address": "Jalan Hang Lekiu 5, Taman Skudai Baru, 81300 Skudai, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Skudai",
    "reservePrice": 510000,
    "auctionDate": "1 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1533",
    "title": "1 Storey Terrace House",
    "address": "No. 3, Jalan Kejayaan 55, Taman Universiti, 81300 Skudai, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Skudai",
    "reservePrice": 420000,
    "auctionDate": "1 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1534",
    "title": "2 Storey Terrace House",
    "address": "No. 60, Jalan Bayan 23, Bandar Baru Kota Puteri, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 280000,
    "auctionDate": "1 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "896 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1535",
    "title": "Flat",
    "address": "Unit No. B-05-05, Jalan Impian Emas 25, Taman Impian Ehsan, 81300 Skudai, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Skudai",
    "reservePrice": 160000,
    "auctionDate": "1 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "657 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1536",
    "title": "Apartment",
    "address": "Unit No. K-4-02, Block K, Pangsapuri Lily & Jasmine, Jalan Persisiran Titiwangsa Utama, Taman Tampoi Indah, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 204120,
    "auctionDate": "1 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "001 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1537",
    "title": "2 Storey Terrace House",
    "address": "No. 20, Jalan Laman Citra 17, Laman Citra, Pekan Nanas, 81500, Johor",
    "postcode": "81500",
    "state": "Johor",
    "area": "Johor",
    "reservePrice": 670000,
    "auctionDate": "1 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "705 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1538",
    "title": "2 Storey Terrace House",
    "address": "No. 16, Jalan Intan 5, Taman Cahaya Masai, 81700 Pasir Gudang, Johor",
    "postcode": "81700",
    "state": "Johor",
    "area": "Pasir Gudang",
    "reservePrice": 300000,
    "auctionDate": "1 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "042 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1539",
    "title": "2 Storey Terrace House",
    "address": "No. 18, Jalan SS 5/3, Taman Sri Saujana, 81900 Kota Tinggi, Johor",
    "postcode": "81900",
    "state": "Johor",
    "area": "Kota Tinggi",
    "reservePrice": 500000,
    "auctionDate": "1 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "564 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1540",
    "title": "2 Storey Terrace House",
    "address": "Jalan Laman Citra 16, Laman Citra, 81500 Pekan Nenas, Johor",
    "postcode": "81500",
    "state": "Johor",
    "area": "Pekan Nenas",
    "reservePrice": 740000,
    "auctionDate": "2 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "074 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1541",
    "title": "2 Storey Terrace House",
    "address": "No. 26, Jalan Nusa Perintis 9/4, Taman Nusa Perintis 2, 79200 Iskandar Puteri, Johor",
    "postcode": "79200",
    "state": "Johor",
    "area": "Iskandar Puteri",
    "reservePrice": 500000,
    "auctionDate": "2 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "085 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1542",
    "title": "2 Storey Terrace House",
    "address": "No. 41, Jalan Hang Tuah 4/4, Taman Muhibbah, 86000 Kluang, Johor",
    "postcode": "86000",
    "state": "Johor",
    "area": "Kluang",
    "reservePrice": 261000,
    "auctionDate": "2 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "174 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1543",
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
    "id": "1544",
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
    "id": "1545",
    "title": "1 Storey Terrace House",
    "address": "No. 2, Jalan Kerisi, Taman Seri Paya, 86000 Kluang, Johor",
    "postcode": "86000",
    "state": "Johor",
    "area": "Kluang",
    "reservePrice": 360000,
    "auctionDate": "24 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "033 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1546",
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
    "id": "1547",
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
    "id": "1548",
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
    "id": "1585",
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
    "id": "1586",
    "title": "1 Storey Terrace House",
    "address": "No. 3, Lorong IS 38, Perumahan Indera Sempurna, 25150 Kuantan, Pahang",
    "postcode": "25150",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 194400,
    "auctionDate": "10 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "194 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1587",
    "title": "2.5 Storey Semi Detached House",
    "address": "No. 10, Lorong Pelindung 77, Jalan Tengku Muhammad, Taman Pelindung, 25050 Kuantan, Pahang",
    "postcode": "25050",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 1049760,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "952 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1588",
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
    "id": "1589",
    "title": "Vacant Detached House Land",
    "address": "Lot 39407 (PM 6231), Lorong IM 13/2, Indera Mahkota 13, (Formerly known as Astana Villa, Jalan Sungai Lembing), 25200 Kuantan, Pahang",
    "postcode": "39407",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 279000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "586 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1590",
    "title": "Industrial Land",
    "address": "Lot 74379, Mukim Kuala Kuantan, Daerah Kuantan, 26300 Gambang, Pahang",
    "postcode": "74379",
    "state": "Pahang",
    "area": "Gambang",
    "reservePrice": 12000000,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1591",
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
    "id": "1592",
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
    "id": "1593",
    "title": "1 Storey Terrace House",
    "address": "No. 37, Lorong S.D.S 15, Perumahan Seri Damai Sejahtera, 25150 Kuantan, Pahang",
    "postcode": "25150",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 210600,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1594",
    "title": "1 Storey Terrace House",
    "address": "No. 37, Lorong SDS 16, Perumahan Seri Damai Sejahtera, 25150 Kuantan, Pahang",
    "postcode": "25150",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 170100,
    "auctionDate": "11 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1595",
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
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1596",
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
    "id": "1597",
    "title": "1 Storey Terrace House",
    "address": "No. 44, Lorong Balok Baru 2, Perumahan Balok Baru, 26100 Kuantan, Pahang",
    "postcode": "26100",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 135000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "780 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1598",
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
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1599",
    "title": "2 Storey Terrace House",
    "address": "No. 35, Lorong Bukit Setongkol 1, Taman Cenderawasih 1, 25200 Kuantan, Pahang",
    "postcode": "25200",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 160000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "775 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1600",
    "title": "3 Storey Shop Office",
    "address": "No. B20, Lorong Seri Damai Perdana 5, Perumahan Seri Damai Perdana, 25150 Kuantan, Pahang",
    "postcode": "25150",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 620000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1601",
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
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1602",
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
    "id": "1603",
    "title": "Apartment",
    "address": "Unit No. F7-07H, Tingkat 7, Amber Court, Jalan Ion D'elemen, 69000 Genting Highlands, Pahang",
    "postcode": "69000",
    "state": "Pahang",
    "area": "Genting Highlands",
    "reservePrice": 198000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1604",
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
    "id": "1605",
    "title": "Studio Unit",
    "address": "Unit No. B-L5-18, Valley Suite Apartment, Jalan IM 9/2, Bandar Indera Mahkota, 25200, Kuantan, Pahang",
    "postcode": "25200",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 295000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "463 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1606",
    "title": "Service Apartment",
    "address": "Unit No. 20-10, Vista Residence, Genting Permai Avenue, 69000 Genting Highlands, Pahang",
    "postcode": "69000",
    "state": "Pahang",
    "area": "Genting Highlands",
    "reservePrice": 800000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "076 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1607",
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
    "id": "1608",
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
    "id": "1609",
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
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1610",
    "title": "1 Storey Terrace House",
    "address": "No. 1, Jalan KS 6/10, Kota Sultan Ahmad Shah, 25200 Kuala Kuantan, Pahang",
    "postcode": "25200",
    "state": "Pahang",
    "area": "Kuala Kuantan",
    "reservePrice": 490000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "854 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1611",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1612",
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
    "id": "1613",
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
    "id": "1614",
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
    "id": "1615",
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
    "id": "1616",
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
    "id": "1617",
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
    "id": "1618",
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
    "id": "1619",
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
    "id": "1620",
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
    "id": "1621",
    "title": "1 Storey Terrace House",
    "address": "No. 4, Jalan Desa Jaya Permai 4, Taman Desa Jaya Permai, 28500 Lanchang, Pahang",
    "postcode": "28500",
    "state": "Pahang",
    "area": "Lanchang",
    "reservePrice": 170100,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1622",
    "title": "2 Storey Semi Detached House",
    "address": "No. 11, Jalan Jelutong 7, Taman Rimba Mutiara, 28400 Mentakab, Pahang",
    "postcode": "28400",
    "state": "Pahang",
    "area": "Mentakab",
    "reservePrice": 450000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "741 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1623",
    "title": "1 Storey Semi Detached House",
    "address": "No. 25, Lorong Sri Makmur 2, Taman Sri Makmur, 27000 Jerantut, Pahang",
    "postcode": "27000",
    "state": "Pahang",
    "area": "Jerantut",
    "reservePrice": 200000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1624",
    "title": "2 Storey Semi Detached House",
    "address": "Jalan KS 7/2, Kota Sultan Ahmad Shah, 25200 Kuantan, Pahang",
    "postcode": "25200",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 720000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "197 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1625",
    "title": "1 Storey Terrace House",
    "address": "No. 40, Lorong Mentiga Jaya 22, Taman Mentiga Jaya, 26600 Pekan, Pahang",
    "postcode": "26600",
    "state": "Pahang",
    "area": "Pekan",
    "reservePrice": 93925,
    "auctionDate": "1 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "032 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1626",
    "title": "Studio Apartment",
    "address": "Jalan IM 9/2, Indera Mahkota 9, Valley Suite Apartment, 25200 Kuantan, Pahang",
    "postcode": "25200",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 204120,
    "auctionDate": "2 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "465 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1627",
    "title": "1 Storey Terrace House",
    "address": "Jalan KS 6/16, Kota Sultan Ahmad Shah, 25200 Kuantan, Pahang",
    "postcode": "25200",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 350000,
    "auctionDate": "7 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "679 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1628",
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
    "id": "1629",
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
    "id": "1630",
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
    "id": "1631",
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
    "id": "1632",
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
    "id": "1633",
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
    "id": "1634",
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
    "id": "1635",
    "title": "2 Storey Bungalow House",
    "address": "Lorong TJM 7, Taman Jengka Mahkota, 26400 Bandar Tun Abdul Razak Jengka, Pahang",
    "postcode": "26400",
    "state": "Pahang",
    "area": "Bandar Tun Abdul Razak Jengka",
    "reservePrice": 380900,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "854 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1636",
    "title": "2 Storey Terrace House",
    "address": "Lorong Dato' Abdul Rashid Salleh 1, Perumahan Dato' Abdul Rashid Salleh, 25300 Kuantan, Pahang",
    "postcode": "25300",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 288684,
    "auctionDate": "14 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "713 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1637",
    "title": "1 Storey Semi Detached House",
    "address": "Lorong Seri Mahkota 52, Perumahan Seri Mahkota, 26300 Kuantan, Pahang",
    "postcode": "26300",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 250000,
    "auctionDate": "14 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1638",
    "title": "1 Storey Semi Detached House",
    "address": "No. 3, Lorong Gemilang 5, Taman Desa Gemilang 2, 27000 Jerantut, Pahang",
    "postcode": "27000",
    "state": "Pahang",
    "area": "Jerantut",
    "reservePrice": 256000,
    "auctionDate": "15 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "389 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1639",
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
    "id": "1640",
    "title": "1 Storey Terrace House",
    "address": "Lorong Seberang Balok 104, Perumahan Seberang Balok, 26100 Kuantan, Pahang",
    "postcode": "26100",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 180000,
    "auctionDate": "30 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1641",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1642",
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
    "id": "1643",
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
    "id": "1644",
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
    "id": "1645",
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
    "id": "1646",
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
    "id": "1647",
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
    "id": "1648",
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
    "id": "1649",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1650",
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
    "id": "1651",
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
    "id": "1652",
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
    "id": "1653",
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
    "id": "1654",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1655",
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
    "id": "1656",
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
    "id": "1657",
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
    "id": "1658",
    "title": "Terrace House",
    "address": "Lorong Seri Setali 13, Taman Cahaya Timur, 25300 Kuantan, Pahang",
    "postcode": "25300",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 279000,
    "auctionDate": "25 Nov 2026 (Wed)",
    "landArea": "—",
    "builtUp": "313 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1659",
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
    "id": "1660",
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
    "id": "1661",
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
    "id": "1662",
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
    "id": "1663",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1664",
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
    "id": "1665",
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
    "id": "1666",
    "title": "2 Storey Terrace House",
    "address": "No. 32A, Jalan BU 7, Taman Bachang Utama, 75350, Melaka",
    "postcode": "75350",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 380600,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "330 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1667",
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
    "id": "1668",
    "title": "2 Storey Terrace House",
    "address": "No. 5, Lorong 1, Jalan Bayan 9, Taman Bukit Katil, 75460, Melaka",
    "postcode": "75460",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 174960,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "360 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1v33XS5B37FzxPzrWiYHyjgH5f6hntUn7&sz=w800"
    ]
  },
  {
    "id": "1669",
    "title": "2 Storey Terrace House",
    "address": "No. 27, Jalan Desa Duyong 7, Taman Desa Duyong, 75460 Ayer Molek, Melaka",
    "postcode": "75460",
    "state": "Melaka",
    "area": "Ayer Molek",
    "reservePrice": 287550,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "368 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1670",
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
    "id": "1671",
    "title": "Apartment",
    "address": "Unit No. B1-07, Tingkat 1, Block B, Pangsapuri Kasturi, Semabok, Taman Kasturi, 75050, Melaka",
    "postcode": "75050",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 122400,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "893 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1672",
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
    "id": "1673",
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
    "id": "1674",
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
    "id": "1675",
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
    "id": "1676",
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
    "id": "1677",
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
    "id": "1678",
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
    "id": "1679",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1cxEhcUmOApQgR-8b7F-r0oXBLR5CrB4x&sz=w800"
    ]
  },
  {
    "id": "1680",
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
    "id": "1681",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1682",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1683",
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
    "id": "1684",
    "title": "2 Storey Semi Detached House",
    "address": "No. 8, Jalan Vista Kirana 7F, Taman Vista Kirana, Bukit Katil, 75450 Hang Tuah Jaya, Melaka",
    "postcode": "75450",
    "state": "Melaka",
    "area": "Hang Tuah Jaya",
    "reservePrice": 620000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "789 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1685",
    "title": "2 Storey Terrace House",
    "address": "No. 1, Lorong 1, Jalan CP 1/9A, Taman Desa Cheng Perdana 1, Cheng, 75250, Melaka",
    "postcode": "75250",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 690000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "885 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1ekLfY1h1IVQxGy859i5wa9SnkjGjaLiV&sz=w800"
    ]
  },
  {
    "id": "1686",
    "title": "1 Storey Terrace House",
    "address": "SI 352, Jalan Seruling Jaya 14, Taman Seruling Jaya, 78300 Masjid Tanah, Melaka",
    "postcode": "78300",
    "state": "Melaka",
    "area": "Masjid Tanah",
    "reservePrice": 220000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "300 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1PPikL2t8hh93A9gd0tkINFMqUVDDbrDA&sz=w800"
    ]
  },
  {
    "id": "1687",
    "title": "1 Storey Terrace House",
    "address": "SI 489, Jalan Seruling Jaya 18, Taman Seruling Jaya, 78300 Masjid Tanah, Melaka",
    "postcode": "78300",
    "state": "Melaka",
    "area": "Masjid Tanah",
    "reservePrice": 250000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "969 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1PPikL2t8hh93A9gd0tkINFMqUVDDbrDA&sz=w800"
    ]
  },
  {
    "id": "1688",
    "title": "1 Storey Terrace House",
    "address": "No. 24, Jalan MJ 56/1, Taman Merdeka Raya (Taman Merdeka Jaya), Batu Berendam, 75350 Hang Tuah Jaya, Melaka",
    "postcode": "75350",
    "state": "Melaka",
    "area": "Hang Tuah Jaya",
    "reservePrice": 275400,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "765 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1689",
    "title": "1 Storey Terrace House",
    "address": "PS 2034, Jalan Mahsuri 7, Taman Mahsuri, Pulau Sebang, 78000 Alor Gajah, Melaka",
    "postcode": "78000",
    "state": "Melaka",
    "area": "Alor Gajah",
    "reservePrice": 178200,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1690",
    "title": "2 Storey Terrace House",
    "address": "No. JD 401, Jalan BSJ P1/2, Bandar Scientex Jasin, Presint 1 (Fasa 1A1), 77300 Merlimau, Melaka",
    "postcode": "77300",
    "state": "Melaka",
    "area": "Merlimau",
    "reservePrice": 218700,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "173 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1rkQlZ_G3IpPzaGSXnQ6ukkMSxc6ejCx-&sz=w800"
    ]
  },
  {
    "id": "1691",
    "title": "1 Storey Terrace House",
    "address": "No. SU 363, Jalan Indah 16, Taman Indah, 78300 Masjid Tanah, Melaka",
    "postcode": "78300",
    "state": "Melaka",
    "area": "Masjid Tanah",
    "reservePrice": 310000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "520 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1692",
    "title": "1 Storey Terrace House",
    "address": "No. 18, Jalan Merak Mas 13, Taman Merak Mas, 75450 Hang Tuah Jaya, Bukit Katil, Melaka",
    "postcode": "75450",
    "state": "Melaka",
    "area": "Bukit Katil",
    "reservePrice": 185000,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "345 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1y2cMb5DZFz1No_7nXgxlsQZQZED6LQfC&sz=w800"
    ]
  },
  {
    "id": "1693",
    "title": "1 Storey Terrace House",
    "address": "No. 32, Jalan BBB 2, Taman Bukit Beruang Bistari, 75450 Hang Tuah Jaya, Melaka",
    "postcode": "75450",
    "state": "Melaka",
    "area": "Hang Tuah Jaya",
    "reservePrice": 210600,
    "auctionDate": "12 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "560 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1694",
    "title": "Apartment",
    "address": "Unit No. D-11-03, 11th Floor, Block D, Residensi Seri Serindit, Jalan Taman Bandaraya, 75400, Melaka",
    "postcode": "75400",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 270000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "883 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1g7iIkxvERBjjdhPLkTdD7JcqqP9b21Sv&sz=w800"
    ]
  },
  {
    "id": "1695",
    "title": "Service Apartment",
    "address": "Unit No. B-31-01, Storey No. 31, Tower B, Kondominium Kota Syahbandar, Kota Syahbandar, 75200, Melaka",
    "postcode": "75200",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 490000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "932 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1696",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1rjXKFVJxtb8GmbBJbF2Rr6tWlAvo91ps&sz=w800"
    ]
  },
  {
    "id": "1697",
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
    "id": "1698",
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
    "id": "1699",
    "title": "1 Storey Terrace House",
    "address": "No. 7564, Rumah Murah Pantei Peringgit (1), 75400, Melaka",
    "postcode": "75400",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 144000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "880 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1700",
    "title": "2 Storey Semi Detached House",
    "address": "No. 41, Jalan Desa Bertam 20, Taman Desa Bertam, 76450, Melaka",
    "postcode": "76450",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 570000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "324 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1eUXMVoLWkidcbhg-D4NL1I8bmEeQpmJP&sz=w800"
    ]
  },
  {
    "id": "1701",
    "title": "1 Storey Terrace House",
    "address": "Jalan Impiana Delima 6, Taman Impiana Kesang, Ayer Panas, 77000 Hang Tuah Jaya, Melaka",
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
    "id": "1702",
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
    "id": "1703",
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
    "id": "1704",
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
    "id": "1705",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1_cu6I8viB2uSzXRhoA4lM-GtBy5e06cg&sz=w800"
    ]
  },
  {
    "id": "1706",
    "title": "2 Plot Vacant Land",
    "address": "Lot 2820 & 2821, Jalan TBC 13, Taman Bukit Cheng, 75250, Melaka",
    "postcode": "75250",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 225000,
    "auctionDate": "21 Aug 2026 (Fri)",
    "landArea": "—",
    "builtUp": "794 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1707",
    "title": "[ROI > 5%] Retail Lot [A prime spot frequented by tourists]",
    "address": "Unit No. BE-011, Lower Ground Floor, Dataran Pahlawan Melaka Megamall, Jalan Merdeka, Bandar Hilir, 75000, Melaka",
    "postcode": "75000",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 723300,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "794 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1708",
    "title": "Condominium",
    "address": "Unit No. B-1-3, Tingkat 1, Block B, Casa Lago Condominium (Formerly known as Kondominium Melaka Raya), Jalan Syed Abdul Aziz, Taman Melaka Raya, 75000, Melaka",
    "postcode": "75000",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 109917,
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
    "id": "1709",
    "title": "1 Storey Semi Detached House",
    "address": "No. BB 139, Jalan Vista Belimbing 8, Taman Vista Belimbing, 76100 Durian Tunggal, Melaka",
    "postcode": "76100",
    "state": "Melaka",
    "area": "Durian Tunggal",
    "reservePrice": 280800,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "046 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1710",
    "title": "2 Storey Terrace House",
    "address": "JD 2933, Jalan BBP 8, Presint 1, Bandar Botani Parkland Presint 1 (Fasa 1B), 77200 Bemban, Melaka",
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
    "id": "1711",
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
    "id": "1712",
    "title": "2 Storey Terrace House",
    "address": "No. 66, Jalan MJ 6, Taman Merdeka Jaya, Batu Berendam, 75350 Hang Tuah Jaya, Melaka",
    "postcode": "75350",
    "state": "Melaka",
    "area": "Hang Tuah Jaya",
    "reservePrice": 243000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "713 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1713",
    "title": "1 Storey Terrace House",
    "address": "RM 1556, Jalan Rembia Perkasa 19, Taman Rembia Perkasa, 78000 Alor Gajah, Melaka",
    "postcode": "78000",
    "state": "Melaka",
    "area": "Alor Gajah",
    "reservePrice": 300000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "283 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1gv2HoJGtLjZAYvAI9MbhYgBIUJO8IxFH&sz=w800"
    ]
  },
  {
    "id": "1714",
    "title": "Terrace House",
    "address": "Jalan PE 2, Taman Paya Emas, 76450, Melaka",
    "postcode": "76450",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 260000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "109 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1715",
    "title": "2 Storey Terrace House",
    "address": "No. 3, Jalan Semabok Jaya 14, Taman Semabok Jaya, 75050, Melaka",
    "postcode": "75050",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 350000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "205 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1716",
    "title": "2 Storey Terrace House",
    "address": "No. 39, Jalan Takh 5, Taman Ayer Keroh Heights, Ayer Keroh, 75450 Hang Tuah Jaya, Melaka",
    "postcode": "75450",
    "state": "Melaka",
    "area": "Hang Tuah Jaya",
    "reservePrice": 153090,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "840 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1717",
    "title": "1.5 Storey Terrace House",
    "address": "No. 32, Jalan TMU 23, Taman Tanjong Minyak Utama, 75260, Melaka",
    "postcode": "75260",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 324000,
    "auctionDate": "2 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "100 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1718",
    "title": "1 Storey Terrace House",
    "address": "Jalan Saujana Permai 7, Taman Saujana Permai, Bukit Katil, 75450 Hang Tuah Jaya, Melaka",
    "postcode": "75450",
    "state": "Melaka",
    "area": "Hang Tuah Jaya",
    "reservePrice": 310000,
    "auctionDate": "2 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "862 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1719",
    "title": "Service Apartment",
    "address": "Unit No. A-08-03, Blok A, Pangsapuri Tun Perak @ Sungai Melaka, Jalan Tun Perak, 75300, Melaka",
    "postcode": "75300",
    "state": "Perak",
    "area": "Melaka",
    "reservePrice": 376000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "087 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1kV5TV_oQbJuEvNPnxBbXTwqWXW5iqUxI&sz=w800"
    ]
  },
  {
    "id": "1720",
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
    "id": "1721",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=16AtV4340Vb64VDAGJrgT8eaWeKcyUubO&sz=w800"
    ]
  },
  {
    "id": "1722",
    "title": "1 Storey Terrace House",
    "address": "Jalan Seri Pelangi 6, Taman Seri Pelangi, Rembia, 78000 Alor Gajah, Melaka",
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
    "id": "1723",
    "title": "1 Storey Detached House",
    "address": "No. KM 1414, Taman Jaya, Kelemak, 78000 Alor Gajah, Melaka",
    "postcode": "78000",
    "state": "Melaka",
    "area": "Alor Gajah",
    "reservePrice": 280000,
    "auctionDate": "23 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "448 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1724",
    "title": "2 Storey Terrace House",
    "address": "No. 39, Jalan S.S 9, Taman Seri Selendang, 75350 Hang Tuah Jaya, Batu Berendam, Melaka",
    "postcode": "75350",
    "state": "Melaka",
    "area": "Batu Berendam",
    "reservePrice": 304000,
    "auctionDate": "23 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "098 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1725",
    "title": "2 Storey Terrace House",
    "address": "No. 2, Jalan TBC 37, Taman Bukit Cheng, 75260, Melaka",
    "postcode": "75260",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 423000,
    "auctionDate": "25 Sep 2026 (Fri)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1726",
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
    "id": "1727",
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
    "id": "1728",
    "title": "2 Storey Terrace House",
    "address": "Jalan BP 15, Taman Bertam Perdana, 75200, Melaka",
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
    "id": "1729",
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
    "id": "1730",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1AZwZz_Ed8j2yG7EIKO7oKh3jeJElawct&sz=w800"
    ]
  },
  {
    "id": "1731",
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
    "id": "1732",
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
    "id": "1733",
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
    "id": "1734",
    "title": "1 Storey Semi Detached House",
    "address": "Jalan Melawi - Tok Bali, Kampung Telong, 16310 Bachok, Kelantan",
    "postcode": "16310",
    "state": "Bachok",
    "area": "Bachok",
    "reservePrice": 230000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "233 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1735",
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
    "id": "1736",
    "title": "1 Storey Terrace House",
    "address": "Lot 4541 (PT 2345), Taman Sri Mesa, Jalan Batu Karang, Gual Periok, 17200 Pasir Mas, Kelantan",
    "postcode": "17200",
    "state": "Pasir Mas",
    "area": "Pasir Mas",
    "reservePrice": 190000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1737",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1738",
    "title": "Land",
    "address": "PM 1008 (Lot 16851), Kampung Sungai Rual, 17600 Jajahan Jeli, Kelantan",
    "postcode": "16851",
    "state": "Jajahan Jeli",
    "area": "Jajahan Jeli",
    "reservePrice": 180000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1739",
    "title": "1 Storey Terrace House",
    "address": "PT. 164 (Lot. 1822), Jalan Bukit Marak, Taman Sri Ara, 16150 Kota Bharu, Kelantan",
    "postcode": "16150",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 103500,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1740",
    "title": "Agricultural Land",
    "address": "PT. 5248, Mukim Lawang, 17500 Tanah Merah, Kelantan",
    "postcode": "17500",
    "state": "Tanah Merah",
    "area": "Tanah Merah",
    "reservePrice": 180000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "319 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1741",
    "title": "Agricultural Land",
    "address": "Lot No. 23994, Kampung Serai Lima, Apam, Pasir Mas, Kelantan",
    "postcode": "23994",
    "state": "Pasir Mas",
    "area": "Pasir Mas",
    "reservePrice": 153000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1742",
    "title": "4 Storey Shop Office",
    "address": "Unit No. S22/2723-F, Jalan Kota Darul Naim, 15050 Kota Bharu, Kelantan",
    "postcode": "15050",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 488149.2,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "680 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1743",
    "title": "2 Storey Semi Detached House",
    "address": "PT. 414, Kampung Padang Rokma, 16250 Wakaf Bharu, Kelantan",
    "postcode": "16250",
    "state": "Wakaf Bharu",
    "area": "Wakaf Bharu",
    "reservePrice": 178386.3,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "134 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1744",
    "title": "3 Storey Shop Office",
    "address": "PT 779, Kawasan Pasar Borong Wakaf Che Yeh, Jalan Kuala Krai, Wakaf Che Yeh, 15050 Kota Bharu, Kelantan",
    "postcode": "15050",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 284108.31,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1745",
    "title": "2.5 Storey Detached House",
    "address": "PT 379, Kampung Padang Rokma, 16250 Wakaf Bharu, Kelantan",
    "postcode": "16250",
    "state": "Wakaf Bharu",
    "area": "Wakaf Bharu",
    "reservePrice": 395392.1,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "231 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1746",
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
    "id": "1747",
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
    "id": "1748",
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
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1749",
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
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1750",
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
    "id": "1751",
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
    "id": "1752",
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
    "id": "1753",
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
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1754",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1755",
    "title": "2 Storey Terrace House",
    "address": "No. 58 (PT 15052), Jalan Prima A1/7, Residensi Prima Lubok Jong, 17070 Pasir Mas, Kelantan",
    "postcode": "15052",
    "state": "Pasir Mas",
    "area": "Pasir Mas",
    "reservePrice": 164025,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1756",
    "title": "Residential Land",
    "address": "Lot 23126, Kampung Lubok Jong, Apam, 17070 Pasir Mas, Kelantan",
    "postcode": "23126",
    "state": "Pasir Mas",
    "area": "Pasir Mas",
    "reservePrice": 162000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "077 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1757",
    "title": "1 Storey Terrace House",
    "address": "Bandar Sri Aman, Pulai Chondong, 16600 Machang, Kelantan",
    "postcode": "16600",
    "state": "Machang",
    "area": "Machang",
    "reservePrice": 30132,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "200 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1758",
    "title": "3 Storey Permanent Building (Bird Nesting)",
    "address": "PT 846, Kampung Padang Bongor, Jalan Hospital, 15200 Kota Bharu, Kelantan",
    "postcode": "15200",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 729000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "660 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1759",
    "title": "3 Storey Shop Office",
    "address": "Lot 3447, Kawasan Pasar Borong Wakaf Che Yeh, Jalan Kuala Krai, 15050 Kota Bharu, Kelantan",
    "postcode": "15050",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 656100,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "200 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1760",
    "title": "Shop Lot",
    "address": "PT 1115 & PT 1116, Pusat Perniagaan Dataran Rakyat, Bandar Baru Tunjong, 16010 Kota Bharu, Kelantan",
    "postcode": "16010",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 87480,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "258 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1761",
    "title": "1 Storey Detached House",
    "address": "Kampung Jambu Merah, Melor, 16400 Kota Bharu, Kelantan",
    "postcode": "16400",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 306180,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "773 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1762",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1763",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1764",
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
    "id": "1765",
    "title": "4 Storey Shop House used for Bird Nest Industry",
    "address": "Lot. 4400, Kampung Gong Kua, 16800 Pasir Puteh, Kelantan",
    "postcode": "16800",
    "state": "Pasir Puteh",
    "area": "Pasir Puteh",
    "reservePrice": 78452.66,
    "auctionDate": "14 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "779 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1766",
    "title": "2 Storey Semi Detached House",
    "address": "PT 997, Kampung Terbak, Taman Indah, 16200 Tumpat, Kelantan",
    "postcode": "16200",
    "state": "Tumpat",
    "area": "Tumpat",
    "reservePrice": 380000,
    "auctionDate": "14 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "714 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1767",
    "title": "4 Storey Terrace Shop Office",
    "address": "PT 5452, Lorong Hajah Nik Mariam, 18000 Kuala Krai, Kelantan",
    "postcode": "18000",
    "state": "Kuala Krai",
    "area": "Kuala Krai",
    "reservePrice": 450000,
    "auctionDate": "14 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1768",
    "title": "3 Storey Shop Office",
    "address": "PT 358, Section 17, Bandar Baru Lembah Sireh, 15050 Kota Bharu, Kelantan",
    "postcode": "15050",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 984150,
    "auctionDate": "14 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "561 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1769",
    "title": "3 Storey Shop Office",
    "address": "PT 728, Jalan Kuala Krai, Kawasan Pasar Borong Wakaf Che Yeh, 15050 Kota Bharu, Kelantan",
    "postcode": "15050",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 450000,
    "auctionDate": "14 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "345 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1770",
    "title": "1 Storey Terrace House",
    "address": "Lot 1255, Taman Wira, 17200 Rantau Panjang, Kelantan",
    "postcode": "17200",
    "state": "Rantau Panjang",
    "area": "Rantau Panjang",
    "reservePrice": 64800,
    "auctionDate": "24 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "870 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1771",
    "title": "1.5 Storey Shop Office",
    "address": "PT 1870, Taman Sri Bayu, 16200 Tumpat, Kelantan",
    "postcode": "16200",
    "state": "Tumpat",
    "area": "Tumpat",
    "reservePrice": 300000,
    "auctionDate": "24 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "604 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1772",
    "title": "1 Storey Terrace House",
    "address": "Taman Binjai Kerak, Kampung Kerak Hulu, Batu 11, 16450 Ketereh, Kelantan",
    "postcode": "16450",
    "state": "Ketereh",
    "area": "Ketereh",
    "reservePrice": 150000,
    "auctionDate": "24 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "749 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1773",
    "title": "3 Storey Shop Office",
    "address": "Lot 2777, Kampung Jambu Merah, 16400 Melor, Kota Bharu, Kelantan",
    "postcode": "16400",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 531500,
    "auctionDate": "24 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "864 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1774",
    "title": "1 Storey Detached House",
    "address": "Lot 13628, Kampung Seterpa, Banggu, 16150 Kota Bharu, Kelantan",
    "postcode": "13628",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 380000,
    "auctionDate": "24 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "490 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1775",
    "title": "1 Storey Detached House",
    "address": "PT 20791, Off Jalan Mat Tassan, Taman Jelatok Kasturi, 17500 Tanah Merah, Kelantan",
    "postcode": "20791",
    "state": "Tanah Merah",
    "area": "Tanah Merah",
    "reservePrice": 350000,
    "auctionDate": "24 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "264 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1776",
    "title": "2 Storey Shop House",
    "address": "Lot 3552, Taman Sungai Durian, 18000 Kuala Krai, Kelantan",
    "postcode": "18000",
    "state": "Kuala Krai",
    "area": "Kuala Krai",
    "reservePrice": 450000,
    "auctionDate": "28 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "200 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1777",
    "title": "1 Storey Detached House",
    "address": "Lot 3045, Taman Kala Perdana, 16450 Melor, Kelantan",
    "postcode": "16450",
    "state": "Melor",
    "area": "Melor",
    "reservePrice": 210000,
    "auctionDate": "28 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "681 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1778",
    "title": "1 Storey Semi Detached House",
    "address": "Jalan Melawi - Tok Bali, Kampung Telong, 16310 Bachok, Kelantan",
    "postcode": "16310",
    "state": "Bachok",
    "area": "Bachok",
    "reservePrice": 230000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "233 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1779",
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
    "id": "1780",
    "title": "1 Storey Terrace House",
    "address": "Lot 4541 (PT 2345), Taman Sri Mesa, Jalan Batu Karang, Gual Periok, 17200 Pasir Mas, Kelantan",
    "postcode": "17200",
    "state": "Pasir Mas",
    "area": "Pasir Mas",
    "reservePrice": 190000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1781",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1782",
    "title": "Land",
    "address": "PM 1008 (Lot 16851), Kampung Sungai Rual, 17600 Jajahan Jeli, Kelantan",
    "postcode": "16851",
    "state": "Jajahan Jeli",
    "area": "Jajahan Jeli",
    "reservePrice": 180000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1783",
    "title": "1 Storey Terrace House",
    "address": "PT. 164 (Lot. 1822), Jalan Bukit Marak, Taman Sri Ara, 16150 Kota Bharu, Kelantan",
    "postcode": "16150",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 103500,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1784",
    "title": "Agricultural Land",
    "address": "PT. 5248, Mukim Lawang, 17500 Tanah Merah, Kelantan",
    "postcode": "17500",
    "state": "Tanah Merah",
    "area": "Tanah Merah",
    "reservePrice": 180000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "319 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1785",
    "title": "Agricultural Land",
    "address": "Lot No. 23994, Kampung Serai Lima, Apam, Pasir Mas, Kelantan",
    "postcode": "23994",
    "state": "Pasir Mas",
    "area": "Pasir Mas",
    "reservePrice": 153000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1786",
    "title": "4 Storey Shop Office",
    "address": "Unit No. S22/2723-F, Jalan Kota Darul Naim, 15050 Kota Bharu, Kelantan",
    "postcode": "15050",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 488149.2,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "680 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1787",
    "title": "2 Storey Semi Detached House",
    "address": "PT. 414, Kampung Padang Rokma, 16250 Wakaf Bharu, Kelantan",
    "postcode": "16250",
    "state": "Wakaf Bharu",
    "area": "Wakaf Bharu",
    "reservePrice": 178386.3,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "134 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1788",
    "title": "3 Storey Shop Office",
    "address": "PT 779, Kawasan Pasar Borong Wakaf Che Yeh, Jalan Kuala Krai, Wakaf Che Yeh, 15050 Kota Bharu, Kelantan",
    "postcode": "15050",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 284108.31,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1789",
    "title": "2.5 Storey Detached House",
    "address": "PT 379, Kampung Padang Rokma, 16250 Wakaf Bharu, Kelantan",
    "postcode": "16250",
    "state": "Wakaf Bharu",
    "area": "Wakaf Bharu",
    "reservePrice": 395392.1,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "231 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1790",
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
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1791",
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
    "id": "1792",
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
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1793",
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
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1794",
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
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1795",
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
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1796",
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
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1797",
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
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1798",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1799",
    "title": "2 Storey Terrace House",
    "address": "No. 58 (PT 15052), Jalan Prima A1/7, Residensi Prima Lubok Jong, 17070 Pasir Mas, Kelantan",
    "postcode": "15052",
    "state": "Pasir Mas",
    "area": "Pasir Mas",
    "reservePrice": 164025,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1800",
    "title": "Residential Land",
    "address": "Lot 23126, Kampung Lubok Jong, Apam, 17070 Pasir Mas, Kelantan",
    "postcode": "23126",
    "state": "Pasir Mas",
    "area": "Pasir Mas",
    "reservePrice": 162000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "077 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1801",
    "title": "1 Storey Terrace House",
    "address": "Bandar Sri Aman, Pulai Chondong, 16600 Machang, Kelantan",
    "postcode": "16600",
    "state": "Machang",
    "area": "Machang",
    "reservePrice": 30132,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "200 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1802",
    "title": "3 Storey Permanent Building (Bird Nesting)",
    "address": "PT 846, Kampung Padang Bongor, Jalan Hospital, 15200 Kota Bharu, Kelantan",
    "postcode": "15200",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 729000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "660 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1803",
    "title": "3 Storey Shop Office",
    "address": "Lot 3447, Kawasan Pasar Borong Wakaf Che Yeh, Jalan Kuala Krai, 15050 Kota Bharu, Kelantan",
    "postcode": "15050",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 656100,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "200 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1804",
    "title": "Shop Lot",
    "address": "PT 1115 & PT 1116, Pusat Perniagaan Dataran Rakyat, Bandar Baru Tunjong, 16010 Kota Bharu, Kelantan",
    "postcode": "16010",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 87480,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "258 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1805",
    "title": "1 Storey Detached House",
    "address": "Kampung Jambu Merah, Melor, 16400 Kota Bharu, Kelantan",
    "postcode": "16400",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 306180,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "773 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1806",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1807",
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
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1808",
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
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1809",
    "title": "4 Storey Shop House used for Bird Nest Industry",
    "address": "Lot. 4400, Kampung Gong Kua, 16800 Pasir Puteh, Kelantan",
    "postcode": "16800",
    "state": "Pasir Puteh",
    "area": "Pasir Puteh",
    "reservePrice": 78452.66,
    "auctionDate": "14 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "779 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1810",
    "title": "2 Storey Semi Detached House",
    "address": "PT 997, Kampung Terbak, Taman Indah, 16200 Tumpat, Kelantan",
    "postcode": "16200",
    "state": "Tumpat",
    "area": "Tumpat",
    "reservePrice": 380000,
    "auctionDate": "14 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "714 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1811",
    "title": "4 Storey Terrace Shop Office",
    "address": "PT 5452, Lorong Hajah Nik Mariam, 18000 Kuala Krai, Kelantan",
    "postcode": "18000",
    "state": "Kuala Krai",
    "area": "Kuala Krai",
    "reservePrice": 450000,
    "auctionDate": "14 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1812",
    "title": "3 Storey Shop Office",
    "address": "PT 358, Section 17, Bandar Baru Lembah Sireh, 15050 Kota Bharu, Kelantan",
    "postcode": "15050",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 984150,
    "auctionDate": "14 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "561 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1813",
    "title": "3 Storey Shop Office",
    "address": "PT 728, Jalan Kuala Krai, Kawasan Pasar Borong Wakaf Che Yeh, 15050 Kota Bharu, Kelantan",
    "postcode": "15050",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 450000,
    "auctionDate": "14 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "345 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1814",
    "title": "1 Storey Terrace House",
    "address": "Lot 1255, Taman Wira, 17200 Rantau Panjang, Kelantan",
    "postcode": "17200",
    "state": "Rantau Panjang",
    "area": "Rantau Panjang",
    "reservePrice": 64800,
    "auctionDate": "24 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "870 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1815",
    "title": "1.5 Storey Shop Office",
    "address": "PT 1870, Taman Sri Bayu, 16200 Tumpat, Kelantan",
    "postcode": "16200",
    "state": "Tumpat",
    "area": "Tumpat",
    "reservePrice": 300000,
    "auctionDate": "24 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "604 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1816",
    "title": "1 Storey Terrace House",
    "address": "Taman Binjai Kerak, Kampung Kerak Hulu, Batu 11, 16450 Ketereh, Kelantan",
    "postcode": "16450",
    "state": "Ketereh",
    "area": "Ketereh",
    "reservePrice": 150000,
    "auctionDate": "24 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "749 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1817",
    "title": "3 Storey Shop Office",
    "address": "Lot 2777, Kampung Jambu Merah, 16400 Melor, Kota Bharu, Kelantan",
    "postcode": "16400",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 531500,
    "auctionDate": "24 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "864 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1818",
    "title": "1 Storey Detached House",
    "address": "Lot 13628, Kampung Seterpa, Banggu, 16150 Kota Bharu, Kelantan",
    "postcode": "13628",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 380000,
    "auctionDate": "24 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "490 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1819",
    "title": "1 Storey Detached House",
    "address": "PT 20791, Off Jalan Mat Tassan, Taman Jelatok Kasturi, 17500 Tanah Merah, Kelantan",
    "postcode": "20791",
    "state": "Tanah Merah",
    "area": "Tanah Merah",
    "reservePrice": 350000,
    "auctionDate": "24 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "264 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1820",
    "title": "2 Storey Shop House",
    "address": "Lot 3552, Taman Sungai Durian, 18000 Kuala Krai, Kelantan",
    "postcode": "18000",
    "state": "Kuala Krai",
    "area": "Kuala Krai",
    "reservePrice": 450000,
    "auctionDate": "28 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "200 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1821",
    "title": "1 Storey Detached House",
    "address": "Lot 3045, Taman Kala Perdana, 16450 Melor, Kelantan",
    "postcode": "16450",
    "state": "Melor",
    "area": "Melor",
    "reservePrice": 210000,
    "auctionDate": "28 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "681 sq.ft",
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
