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
    "id": "3",
    "title": "Apartment",
    "address": "Unit No. 19-08, Block 4, Pangsapuri Seri Era, Jalan Nagasari 36/2, Seksyen 36, 40470 Shah Alam, Selangor",
    "postcode": "40470",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 53145,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "689 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1WEwx2htNzrd3kBAAUkGEkgLrbDvzb4wg&sz=w800"
    ]
  },
  {
    "id": "4",
    "title": "Service Apartment",
    "address": "Unit No. A-21-8, Tower A, Amerin Residence, Jalan Impian Indah, Taman Impian Indah, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 477000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "367 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1yz66i1SQ6W8_ICPb0_GIhVAaQ8az0pqK&sz=w800"
    ]
  },
  {
    "id": "5",
    "title": "2 Storey Terrace House",
    "address": "No. 7, Jalan Harmoni 11/3, Taman Harmoni, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 388800,
    "auctionDate": "1st Sep 2026 (Tue)",
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
    "id": "6",
    "title": "Service Apartment",
    "address": "Unit No. E-8-8, Blok E, Pangsapuri East Lake, Persiaran Serdang Perdana, Taman Serdang Perdana, Seksyen 3, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 324000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "313 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1cKNoKbAwA_RN3sLSNaXfyadVguFXAmPV&sz=w800"
    ]
  },
  {
    "id": "7",
    "title": "2 Storey Terrace House",
    "address": "No. 71, Jalan Platinum 7/44, Seksyen 7, 40000 Shah Alam, Selangor",
    "postcode": "40000",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 567000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "050 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1DSHTsOFM9mmGWnjw7sqjS6TvNXRIu6qO&sz=w800"
    ]
  },
  {
    "id": "8",
    "title": "Apartment",
    "address": "Unit No. 1-2-08, Pangsapuri Flora III, Blok 1, Jalan Asteroid U5/30, Seksyen U5, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 216000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "904 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1spXRO-8oYVFJ4bVLpSv-oAFedMkkoUQ4&sz=w800"
    ]
  },
  {
    "id": "9",
    "title": "2.5 Storey Semi Detached House",
    "address": "Premises No. 43, Jalan Camar 4/15, Sierra Damansara, Kota Damansara, 47810 Petaling Jaya, Selangor",
    "postcode": "47810",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 1890000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "200 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1OWixzGn3HCGckVEzLICJDmZ9m1F-MAbj&sz=w800"
    ]
  },
  {
    "id": "10",
    "title": "Apartment",
    "address": "Unit No. A-10-2, Blok A, Pelangi Damansara, PJU 6, Persiaran Surian, 46200 Petaling Jaya, Selangor",
    "postcode": "46200",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 144000,
    "auctionDate": "1st Sep 2026 (Tue)",
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
    "id": "11",
    "title": "Vacant Land",
    "address": "PM 5251 (Lot 17012), Jalan Kampung Tengah, Kampung Sungai Merab, 43000 Mukim Dengkil, Selangor",
    "postcode": "17012",
    "state": "Selangor",
    "area": "Mukim Dengkil",
    "reservePrice": 450000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "742 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1TmN4gVvDdoUBAQXHWg4Vnc11bh3IPfuY&sz=w800"
    ]
  },
  {
    "id": "12",
    "title": "2.5 Storey Cluster Semi Detached House",
    "address": "No. 25, Jalan Mutiara 1/12, Taman Mutiara Indah, 47160 Puchong, Selangor",
    "postcode": "47160",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 800000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "916 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1FsUFNVL7dlIWWNviS6YbrDuRXD-KsPME&sz=w800"
    ]
  },
  {
    "id": "13",
    "title": "1 Storey Terrace House",
    "address": "No. 35, Jalan Mahagoni 2B/1, Perumahan Jalan Mahagoni, 44300 Batang Kali, Selangor",
    "postcode": "44300",
    "state": "Selangor",
    "area": "Batang Kali",
    "reservePrice": 320000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "779 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1is-Yenwxk-NKCzNXWD17WqwZJ-ekgFll&sz=w800"
    ]
  },
  {
    "id": "14",
    "title": "2 Storey Terrace House",
    "address": "No. 20, Jalan Aruna 6, Taman M Aruna, 48020 Rawang, Selangor",
    "postcode": "48020",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 486000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "650 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=18LGdGi84lEv9PosNvqGYKdjWVgw7ERO1&sz=w800"
    ]
  },
  {
    "id": "15",
    "title": "2 Storey Terrace House",
    "address": "Jalan DC 3/3, Desa Coalfields, 47000 Sungai Buloh, Selangor",
    "postcode": "47000",
    "state": "Selangor",
    "area": "Sungai Buloh",
    "reservePrice": 400000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "348 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1ztCSTHq6KRDNqSHN4GYQLNtqhZxxM-Sq&sz=w800"
    ]
  },
  {
    "id": "16",
    "title": "2 Storey Terrace House",
    "address": "No. 21, Jalan Kesuma 8/2D, Seksyen 8, Bandar Tasik Kesuma, 43700 Beranang, Selangor",
    "postcode": "43700",
    "state": "Selangor",
    "area": "Beranang",
    "reservePrice": 600000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "002 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1GxcLcPSxi3AR4LOBInBtVk9qr_haqo-H&sz=w800"
    ]
  },
  {
    "id": "17",
    "title": "Agricultural Land",
    "address": "Lot 1189, Off Jalan Gombak, Kampong Sungai Chinchin, 9th Mile, 53100 Ulu Gombak, Selangor",
    "postcode": "53100",
    "state": "Selangor",
    "area": "Ulu Gombak",
    "reservePrice": 930000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "107 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1Cn4HZWlMfVjrp5e2VGSUX_QQQrGcnAWJ&sz=w800"
    ]
  },
  {
    "id": "18",
    "title": "2 Storey Terrace House",
    "address": "No. 33, Lorong Taming Sari 2, Taman Taming Jaya, 43200 Cheras, Selangor",
    "postcode": "43200",
    "state": "Selangor",
    "area": "Cheras",
    "reservePrice": 335000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "975 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1wtmFLmdSlDu6QCLLHCGV0zsuhfd_Mi0_&sz=w800"
    ]
  },
  {
    "id": "19",
    "title": "Condominium",
    "address": "Unit No. B-27-5, Block B, Green Residence, Jalan Sayang 1, 43200 Cheras, Selangor",
    "postcode": "43200",
    "state": "Selangor",
    "area": "Cheras",
    "reservePrice": 437400,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "421 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1W_uymK7wf9HwgJ5mcnlPdcXCANhIPWX6&sz=w800"
    ]
  },
  {
    "id": "20",
    "title": "2 Storey Linked House",
    "address": "No. 9, Jalan Suakasih 3/5, Bandar Tun Hussein Onn, 43200 Cheras, Selangor",
    "postcode": "43200",
    "state": "Selangor",
    "area": "Cheras",
    "reservePrice": 750000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=18zbZe_tqPA2jNVHOAMklh-t4dnJq1M1Z&sz=w800"
    ]
  },
  {
    "id": "21",
    "title": "Apartment",
    "address": "Unit No. A-4-2, Block A, Lebuh Damar Merah, Taman Pendamar Indah 2, 42000 Pelabuhan Klang, Selangor",
    "postcode": "42000",
    "state": "Selangor",
    "area": "Pelabuhan Klang",
    "reservePrice": 190000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "786 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1_q4_cocL95yuZAt9Vf3YM6rigjaOfp0M&sz=w800"
    ]
  },
  {
    "id": "22",
    "title": "2 Storey Terrace House",
    "address": "No. 67, Jalan Batu Nilam 8, Bandar Bukit Tinggi, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 550000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1i8IqBZih-S-Ssa58RJIGVT01C86sxiO5&sz=w800"
    ]
  },
  {
    "id": "23",
    "title": "2 Storey Terrace House",
    "address": "No. 92, Jalan PP 2/10, Taman Putra Prima, 47130, Puchong, Selangor",
    "postcode": "47130",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 760000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "430 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Q-9wTkcGNi2DomI7i2usQDUzcchchxmh&sz=w800"
    ]
  },
  {
    "id": "24",
    "title": "2 Storey Terrace House",
    "address": "No. 17, Jalan Sri Tanjung 3, Taman Seri Tanjong, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 260000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "828 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1DDjFu-dZj9QXuF85z4QkHP20ChmxQm58&sz=w800"
    ]
  },
  {
    "id": "25",
    "title": "2 Storey Terrace House",
    "address": "No. 9, Jalan SR 2/1C, Saujana Rawang, 48000 Rawang, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 390000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1BsuGPs5OLTs5nMHzJcg1CsFgq3C25xr7&sz=w800"
    ]
  },
  {
    "id": "26",
    "title": "Condominium",
    "address": "Unit No. Blok Bougainvilla 03A-01, Pangsapuri Vista Millenium, Jalan DM 1, 47150 Puchong, Selangor",
    "postcode": "47150",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 243000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "001 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Bf1G37-NJ0ax5dS6jaCmcwCOn_lDeAhg&sz=w800",
      "https://drive.google.com/thumbnail?id=1OOOm0R00O9RmpS3T9hu-mvEyqpIrmU6D&sz=w800",
      "https://drive.google.com/thumbnail?id=1pTjiWpvDeCx4TMl8UGBgnDRs-Bnujsu6&sz=w800"
    ]
  },
  {
    "id": "27",
    "title": "Semi Detached House",
    "address": "No. 1, Jalan Pekaka 8/17, Kota Damansara, 47810 Petaling Jaya, Selangor",
    "postcode": "47810",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 2340000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "375 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1Pt5pmSYSxHduHrFIV3CRvYIuM7RIP0IY&sz=w800"
    ]
  },
  {
    "id": "28",
    "title": "Apartment",
    "address": "Unit No. AD1-12-L, Aman Dua Apartment, Desa Aman Puri, 52100, Kuala Lumpur",
    "postcode": "52100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 270000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "840 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=12jKMkKfQtpQLpsSCsdjPLrbe5NhtKYsE&sz=w800",
      "https://drive.google.com/thumbnail?id=1Cmdb_blVrTrMYTbbDJ7GOOjDmhbssSBc&sz=w800"
    ]
  },
  {
    "id": "29",
    "title": "Condominium",
    "address": "Unit No. A-1-07, Tingkat 1, Block A, Residensi Sembilan Cheras, Jalan Suria Residen, 43200 Cheras, Selangor",
    "postcode": "43200",
    "state": "Selangor",
    "area": "Cheras",
    "reservePrice": 460000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "496 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Yxyn3IrlYKNyS5e0y26jVGWAgBrbEZjU&sz=w800",
      "https://drive.google.com/thumbnail?id=16ofI6BN6W6gq63djtmclg_IPoKgGBhO-&sz=w800"
    ]
  },
  {
    "id": "30",
    "title": "1 Storey Terrace House",
    "address": "No. 9, Lorong Dato Dagang 39C, Taman Sri Sentosa, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 332100,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1TkLmOb2XSqNglXYDC0iox-D1hyaZ1pvF&sz=w800"
    ]
  },
  {
    "id": "31",
    "title": "Condominium",
    "address": "Unit No. 105, 1st Floor, Aman Condominium (Subang Ville Aman Luxury Condominiums), Jalan PJS 10/11, Taman Sri Subang, 46000 Petaling Jaya, Selangor",
    "postcode": "46000",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 262440,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "163 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1R66yqA8pGBbdf_rV7HEyRJtXBKz0978n&sz=w800",
      "https://drive.google.com/thumbnail?id=1I0L4bivn8Bc_F9wPLWRSEXLFWGntx8GF&sz=w800"
    ]
  },
  {
    "id": "32",
    "title": "2 Storey Terrace House",
    "address": "No. 60, Jalan Saujana KLIA 1/3, Taman Saujana KLIA, 43900 Sepang, Selangor",
    "postcode": "43900",
    "state": "Selangor",
    "area": "Sepang",
    "reservePrice": 500000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1diCMPMZ4-SvGCGf8vzJhvtoIAk4pykVv&sz=w800"
    ]
  },
  {
    "id": "33",
    "title": "Land",
    "address": "PT. 5898, Kampung Sungai Pusu, Gombak, Selangor",
    "postcode": "",
    "state": "Selangor",
    "area": "Gombak",
    "reservePrice": 196900,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "490 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1SKFgM3XeUjyNUH5WLzxLSEtAyGu1T5jk&sz=w800"
    ]
  },
  {
    "id": "34",
    "title": "2 Storey Cluster Semi Detached House",
    "address": "No. 8, Jalan Alam Suria 16/63, Seksyen 16, 42300 Bandar Puncak Alam, Selangor",
    "postcode": "42300",
    "state": "Selangor",
    "area": "Bandar Puncak Alam",
    "reservePrice": 510000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "798 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1NiI99xZcJIF5sModT8zW9C1h383nxvVP&sz=w800"
    ]
  },
  {
    "id": "35",
    "title": "2 Storey Terrace House",
    "address": "No. 36, Jalan Hulubalang 27, Taman Sentosa, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 430000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "076 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Gu0_g_yYCidwKXv8mCwVxgtgmAxWjR1e&sz=w800"
    ]
  },
  {
    "id": "36",
    "title": "Apartment",
    "address": "Unit No. 810, 8th Floor, Block B, Damai Apartment, No. 1A, Jalan PJS 8/9, 46000 Petaling Jaya, Selangor",
    "postcode": "46000",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 160000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "603 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1pyQrbt3C1jN9K6b7FJz-58QyJxo8pae8&sz=w800"
    ]
  },
  {
    "id": "37",
    "title": "Shop",
    "address": "Unit No. A-G-7, Pangsapuri Bukit Kuda, Jalan Perak, 41300 Klang, Selangor",
    "postcode": "41300",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 283500,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "293 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1HCREUNRZqzTA_jSPhluH6OBdy2dBu-fM&sz=w800"
    ]
  },
  {
    "id": "38",
    "title": "2 Storey Terrace House",
    "address": "No. 21, Jalan Dart 13/22, Seksyen 13, 40100 Shah Alam, Selangor",
    "postcode": "40100",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 735000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "754 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=10bBuu-22MHNdeS0qZmmrEC_OEzaA32Wi&sz=w800"
    ]
  },
  {
    "id": "39",
    "title": "2.5 Storey Bungalow House",
    "address": "No. 7, Jalan Bayu 5/1, (on site is Jalan Bayu 5-1), Bukit Bayu (Bukit Gita Bayu), 43300 Kajang, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 4500000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "945 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=18E8qdoqKY__QvNhFwnExkUfnQdyFsdkv&sz=w800"
    ]
  },
  {
    "id": "40",
    "title": "Office",
    "address": "Unit No. CT-01-11, Corporate Tower, Subang Square, Jalan SS 15/4G, SS 15, 47500 Subang Jaya, Selangor",
    "postcode": "47500",
    "state": "Selangor",
    "area": "Subang Jaya",
    "reservePrice": 180000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "420 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=14n-6u14Hn16Khlf3_QYj7jHYQDIrJvSw&sz=w800"
    ]
  },
  {
    "id": "41",
    "title": "Bungalow",
    "address": "No. 20, Jalan Batu Arang, Kampung Sungai Bakau Tambahan, 48000 Rawang, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 135000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "370 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=130lAeTFV3-dp7H2lzpq3I0rNZXS8gAbP&sz=w800"
    ]
  },
  {
    "id": "42",
    "title": "1 Storey Terrace House",
    "address": "No. 28, Jalan 5A/2, Ladang West Country, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 540000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "338 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1RMWtd4H6YokoVqNTtPIwmSMgYzBltBxk&sz=w800"
    ]
  },
  {
    "id": "43",
    "title": "3 Storey Shop Office",
    "address": "No. 22, Jalan Tasik Raja Lumu L U4/L, Seksyen U4, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 1100000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "950 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1uCksB2OIILebZdUxV5eXPXdMUd2w4zuK&sz=w800"
    ]
  },
  {
    "id": "44",
    "title": "2 Storey Terrace House",
    "address": "No. 20, Jalan Baiduri 28, Taman Baiduri, 42700 Banting, Selangor",
    "postcode": "42700",
    "state": "Selangor",
    "area": "Banting",
    "reservePrice": 370000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "788 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Tmd3fb0KbTF2mBeTozAGgSgY0dQwdSWy&sz=w800"
    ]
  },
  {
    "id": "45",
    "title": "Duplex Apartment",
    "address": "Unit No. P2-A-15-P3, Sri Camellia Apartment, Jalan Sepakat Indah 3, Taman Sepakat Indah, Sungai Chua, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 500000,
    "auctionDate": "2nd Sep 2026 (Wed)",
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
    "id": "46",
    "title": "2 Storey Terrace House",
    "address": "No. 26, Lorong Sentosa 6A, Batu Unjur (Taman Bayu Tinggi), Bandar Bukit Tinggi, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 680000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "865 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1H3rUkGi8SwU5Ec5ypID2FYI6HSVXvntA&sz=w800"
    ]
  },
  {
    "id": "47",
    "title": "2 Storey Shop House",
    "address": "No. 8, Jalan PUJ 3/8, Taman Puncak Jalil, 43300, Bandar Putra Permai, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Bandar Putra Permai",
    "reservePrice": 1100000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "650 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1NJZO4snLeKtiYGOCsCuAWMMmQzdxO9e0&sz=w800"
    ]
  },
  {
    "id": "48",
    "title": "2 Storey Semi Detached House",
    "address": "No. 22, Jalan Bukit Melawati U17/2, Avanti Residences, Seksyen U17, 40160 Shah Alam, Selangor",
    "postcode": "40160",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 810000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "196 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1heWQ6Igp4L1RVDYq8BbTyckBjzWJCN6N&sz=w800"
    ]
  },
  {
    "id": "49",
    "title": "Condominium",
    "address": "Unit No. B-27-12, Block B, Skylake Residence, Jalan Putra Perdana 5A, Taman Putra Perdana, 47130 Puchong, Selangor",
    "postcode": "47130",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 340000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "883 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1DeUqPx7O6a5EOgNMRlTZhrRPEOPuQ6xU&sz=w800"
    ]
  },
  {
    "id": "50",
    "title": "Commercial Land",
    "address": "Lot PT 1278, Jalan Melor, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 33000000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1lNDlILNCEprNFzUlU2gwv2EyP5s6dD_w&sz=w800"
    ]
  },
  {
    "id": "51",
    "title": "Development Land",
    "address": "Lot No. 16862, Jalan Sungai Jati, Kampung Jawa, 41000 Klang, Selangor",
    "postcode": "16862",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 3280500,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1mxR_aka_j_pNNwbYsoKe1rKB6_0qtujy&sz=w800"
    ]
  },
  {
    "id": "52",
    "title": "2 Storey Terrace House",
    "address": "No. 32, Jalan Pending 7, Bandar Puteri, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 489000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "340 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1I5nasFaqK43b091QviHNjiPxEBLKGMws&sz=w800"
    ]
  },
  {
    "id": "53",
    "title": "Apartment",
    "address": "Unit No. D-2-10, Rumah Pangsa, Bandar Bukit Puchong, Jalan BP 1/2, 47120 Puchong, Selangor",
    "postcode": "47120",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 150000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "657 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1KQuo9Rf1z9_Un2nOryozaq9tNjsqzBtz&sz=w800"
    ]
  },
  {
    "id": "54",
    "title": "Service Apartment",
    "address": "Unit No. B-24-10, Residensi Equine, Jalan Equine, Taman Equine, Bandar Putra Permai, 43300,Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 450000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "840 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1bbIDibYjwOxLAM_F6gvoGYgHqttLKlnN&sz=w800"
    ]
  },
  {
    "id": "55",
    "title": "Apartment",
    "address": "Unit No. B4-21, Jalan 4/1, Taman Sri Indah (Rumah Pangsa), 43200 Cheras, Selangor",
    "postcode": "43200",
    "state": "Selangor",
    "area": "Cheras",
    "reservePrice": 65610,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "592 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1yUyZZb2P9dIDabrfHoj-FgaoPT7mhXGD&sz=w800"
    ]
  },
  {
    "id": "56",
    "title": "1 Storey Terrace House",
    "address": "No. 37, Jalan JM 2C, Taman Jenderam Murni, 43800, Dengkil, Selangor",
    "postcode": "43800",
    "state": "Selangor",
    "area": "Dengkil",
    "reservePrice": 480000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "164 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "57",
    "title": "2 Storey Terrace House",
    "address": "No. 9, Jalan Tiang Seri U8/73A, Seksyen U8, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 1100000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "217 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1_l-1TwALry2VugWGLC5D4KYD9hhWzlNe&sz=w800"
    ]
  },
  {
    "id": "58",
    "title": "2 Storey Terrace House",
    "address": "No. 22, Jalan Tun Teja 35/6F, Seksyen 35, 40470 Shah Alam, Selangor",
    "postcode": "40470",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 756000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "916 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1pFgFQKWwZae7LneXF9-b6FApODwZZ_05&sz=w800"
    ]
  },
  {
    "id": "59",
    "title": "Condominium",
    "address": "Unit No. B-15-3A, Blok B, Kondominium Juta Mines Balakong, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 360000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "216 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1F9AHb0fMFbweyj5lqcjbCDG6-lMy5gd9&sz=w800"
    ]
  },
  {
    "id": "60",
    "title": "1 Storey Terrace House",
    "address": "No. 25, Jalan ST 1D/1, Taman Cempaka, Bandar Baru Salak Tinggi, 43900 Sepang, Selangor",
    "postcode": "43900",
    "state": "Selangor",
    "area": "Sepang",
    "reservePrice": 240000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "378 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1cNDlwjr25MVmcrbtK2KnJaI_LaRSD3Jf&sz=w800"
    ]
  },
  {
    "id": "61",
    "title": "Service Apartment",
    "address": "Unit No. B-30-03A, Emporis, Persiaran Surian, Seksyen 3, Taman Sains Selangor 1, Kota Damansara, 47810 Petaling Jaya, Selangor",
    "postcode": "47810",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 620000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "807 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1vGhFr4grJ5SlZE98KoYyOy4ljXf8T5qn&sz=w800",
      "https://drive.google.com/thumbnail?id=1kHmdx0bgkcn0PB4qRlw461AC89MVlbmO&sz=w800"
    ]
  },
  {
    "id": "62",
    "title": "2 Storey Terrace House",
    "address": "No. 21, Jalan Eco Grandeur 13/1E, Eco Grandeur, 42300 Bandar Puncak Alam, Selangor",
    "postcode": "42300",
    "state": "Selangor",
    "area": "Bandar Puncak Alam",
    "reservePrice": 388800,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1rLHGA7D4C9le88v_8o4XyuG3rYJF1UM5&sz=w800"
    ]
  },
  {
    "id": "63",
    "title": "Apartment",
    "address": "Unit No. B-01-02, Jalan Emas 33, Bandar Sungai Emas, Sungai Manggis, 42700 Banting, Selangor",
    "postcode": "42700",
    "state": "Selangor",
    "area": "Banting",
    "reservePrice": 141750,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "893 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Dlldi89kEjRxQ-DVRdzsh1E1eGYO8Nip&sz=w800"
    ]
  },
  {
    "id": "64",
    "title": "2 Storey Terrace House",
    "address": "No. 67, Jalan SM 1/1, Taman Selayang Mulia, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 503000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "927 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1oehQOXUoV3Sm3MfhC_0GbiivFSKPdNCJ&sz=w800"
    ]
  },
  {
    "id": "65",
    "title": "1 Storey Bungalow",
    "address": "Lot 1221, Lorong Imam Aminuddin, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 648000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "953 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=114waHhL-7f6-SHL3OYnO1KlQXZY1Ci89&sz=w800"
    ]
  },
  {
    "id": "66",
    "title": "2 Storey Terrace House",
    "address": "No. 20, Jalan Sambau 17, Taman Bayu Mas, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 650000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "636 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=11aZjKPUliEmiOCxgVZeH-0QPcvPiWP0N&sz=w800",
      "https://drive.google.com/thumbnail?id=1oPhKSFKFVHgMppzqLw-CFmpIFvLqBr5W&sz=w800"
    ]
  },
  {
    "id": "67",
    "title": "1 Storey Bungalow",
    "address": "No. 293/91, Jalan 8, Taman Gembira, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 600000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "613 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "68",
    "title": "2 Storey Bungalow House",
    "address": "No. 12, Jalan Shahbandar 16/6, 43200 Mahkota Cheras, Selangor",
    "postcode": "43200",
    "state": "Selangor",
    "area": "Mahkota Cheras",
    "reservePrice": 2900000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "793 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1k1W5yHRaDS4Xcq9c67CBb_kantbr6sKr&sz=w800"
    ]
  },
  {
    "id": "69",
    "title": "Apartment",
    "address": "Unit No. B-08-07, Blok B, Pangsapuri Sri Penara, Jalan Sri Permaisuri 1, Bandar Sri Permaisuri, 56000, Kuala Lumpur",
    "postcode": "56000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 270000,
    "auctionDate": "2nd Sep 2026 (Wed)",
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
    "id": "70",
    "title": "2 Storey Terrace House",
    "address": "No. 39, Jalan Bukit Permai 2/1, Taman Bukit Permai 2, 56100 Cheras, Kuala Lumpur",
    "postcode": "56100",
    "state": "Kuala Lumpur",
    "area": "Cheras",
    "reservePrice": 470000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "800 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HC9CmbF6TQMoZP1GNLXlV4HnaPJ4T3RY&sz=w800"
    ]
  },
  {
    "id": "71",
    "title": "Shop Office",
    "address": "Unit No. 3-32C, 2nd Floor, Jalan Desa 2/4, Desa Aman Puri, Kepong, 52100, Kuala Lumpur",
    "postcode": "52100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 150000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "710 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=19OwJCw01UaMRHOa0b7rlKKJ5WYxtJvI1&sz=w800"
    ]
  },
  {
    "id": "72",
    "title": "Terrace House",
    "address": "No. 1, Jalan Margosa SD 10/6A, 52200, Bandar Sri Damansara, Kuala Lumpur",
    "postcode": "52200",
    "state": "Kuala Lumpur",
    "area": "Bandar Sri Damansara",
    "reservePrice": 1400000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "037 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VHQJcpv6QaYM7TgTiQWj93Bdq4Y9TiXL&sz=w800"
    ]
  },
  {
    "id": "73",
    "title": "Semi Detached House",
    "address": "Jalan UP 3/8, Taman Ukay Perdana, 68000 Ampang, Selangor",
    "postcode": "68000",
    "state": "Selangor",
    "area": "Ampang",
    "reservePrice": 1500000,
    "auctionDate": "3rd Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "983 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1BUk0Mg2yPVA7aYrexgiDzqhwg6jr_fnQ&sz=w800"
    ]
  },
  {
    "id": "74",
    "title": "Condominium",
    "address": "Suite No. 12A-02A, Casa Mila Condo, Jalan Bukit Idaman 3/1, Taman Bukit Idaman, 68100 Selayang, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Selayang",
    "reservePrice": 250000,
    "auctionDate": "3rd Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1l8vbooS_d7_xXV9RI1M_mLar0CjTWMRf&sz=w800"
    ]
  },
  {
    "id": "75",
    "title": "Service Apartment",
    "address": "Unit No. A-39-07, Blok A, Residensi Xtreme Meridian (also known as Astoria Ampang), Jalan Bemban, 55000, Kuala Lumpur",
    "postcode": "55000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 830000,
    "auctionDate": "3rd Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "464 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1GQod_yAz8ledsCDFxMnj1neLpbzgINpc&sz=w800"
    ]
  },
  {
    "id": "76",
    "title": "Apartment",
    "address": "Unit No. B-1-10, Vista Bayu Apartment, Jalan Batu Unjur 9, Taman Bayu Perdana, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 205000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "152 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1blpcMoJx6x8M0brP8X7ncPd-GqyB5VHN&sz=w800"
    ]
  },
  {
    "id": "77",
    "title": "1 Storey Terrace House",
    "address": "No. 35, Jalan 3, Taman Paduka, 45000 Kuala Selangor, Selangor",
    "postcode": "45000",
    "state": "Selangor",
    "area": "Kuala Selangor",
    "reservePrice": 167670,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "529 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1FCLnOyo3erUoIdttVoHRAiwdKOrzTv9Y&sz=w800"
    ]
  },
  {
    "id": "78",
    "title": "2.5 Storey Semi Detached House",
    "address": "No. 9, Jalan MA 2, Taman Meranti Aman, 47120 Puchong, Selangor",
    "postcode": "47120",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 1012500,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "799 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1qz1Usd1HG0dyWMRoWxfsabWtwZk7D8SL&sz=w800"
    ]
  },
  {
    "id": "79",
    "title": "2 Storey Terrace House",
    "address": "No. 52, Jalan Penghulu 12/3, Bandar Mahkota Cheras, 43200 Cheras, Selangor",
    "postcode": "43200",
    "state": "Selangor",
    "area": "Cheras",
    "reservePrice": 469800,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "514 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1K6-v2UWKVjLNoFALpg1bW5TjIXHHS7eK&sz=w800"
    ]
  },
  {
    "id": "80",
    "title": "1 Storey Semi Detached House",
    "address": "No. 15, Jalan Dato Hormat 14A/KS13, Taman Sungai Pinang, 42920 Pulau Indah, Selangor",
    "postcode": "42920",
    "state": "Selangor",
    "area": "Pulau Indah",
    "reservePrice": 315000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "691 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1WXPekyRyR-8VJMp1V9ZcSTUuW8gKZ4aC&sz=w800"
    ]
  },
  {
    "id": "81",
    "title": "Condominium",
    "address": "Unit No. B2-3-11, Block B, Residensi Hijauan, No. 4, Jalan Budiman 22/3, Seksyen 22, 40300 Shah Alam, Selangor",
    "postcode": "40300",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 450000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "914 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1K38tptOTVIA9Qhmmu2U9cPhSu1NKXjW1&sz=w800",
      "https://drive.google.com/thumbnail?id=1knmlfRz6NVdyyoa9_RJbiCBWj0avYrb2&sz=w800"
    ]
  },
  {
    "id": "82",
    "title": "2 Storey Terrace House",
    "address": "No. 25, Jalan Balam 4/4, Taman Bentara, 42500 Telok Panglima Garang, Selangor",
    "postcode": "42500",
    "state": "Selangor",
    "area": "Telok Panglima Garang",
    "reservePrice": 430000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "692 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jzgEVeorCoDEp3gxPokKDuhYzigziuy1&sz=w800"
    ]
  },
  {
    "id": "83",
    "title": "2 Storey Terrace House",
    "address": "No. 118, Jalan Pending 5, Bandar Puteri, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 510000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "173 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1I5nasFaqK43b091QviHNjiPxEBLKGMws&sz=w800"
    ]
  },
  {
    "id": "84",
    "title": "2 Storey Terrace House",
    "address": "No. 24, Jalan Desa 12/5, Bandar Country Homes, 48000 Rawang, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 350000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1vtafcnl3uqb6YpeQ_5omP6NbxpsRHaQ_&sz=w800"
    ]
  },
  {
    "id": "85",
    "title": "1 Storey Terrce House",
    "address": "Lorong Serunai 3, Taman Desa Utama, 41200, Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 720000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "210 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1DHxQxuTnqknhr59Tg8uwefcJ9giaS_2E&sz=w800"
    ]
  },
  {
    "id": "86",
    "title": "1 Storey Terrace House",
    "address": "No. 5, Jalan 5/29, Seksyen 5, Bandar Rinching, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 310000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HA7ob6kncprEsR3NMwNadmsece9q4psj&sz=w800"
    ]
  },
  {
    "id": "87",
    "title": "2 Storey Terrace House",
    "address": "Premises No. 7, Lorong Gelang 5C, Bandar Puteri, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 540000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "346 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1I5nasFaqK43b091QviHNjiPxEBLKGMws&sz=w800"
    ]
  },
  {
    "id": "88",
    "title": "2 Storey Terrace House",
    "address": "No. 9, Jalan Anggerik Doritis 31/135, Kota Kemuning, Seksyen 31, 40460 Shah Alam, Selangor",
    "postcode": "40460",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 710000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "647 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Qx1UcxEBa-0vDUNoPBApiDonv63aRjho&sz=w800"
    ]
  },
  {
    "id": "89",
    "title": "2 Storey Terrace House",
    "address": "No. 13, Jalan Kebun Nenas 2H/KS07, Bandar Putera, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 450000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "173 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1gjAK2tW-c4hmhADJECuC7UYoeYWCTb-L&sz=w800"
    ]
  },
  {
    "id": "90",
    "title": "Terrace House",
    "address": "No. 134, Jalan Dato Dagang 6, Taman Sentosa Baru, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 342000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "100 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Gu0_g_yYCidwKXv8mCwVxgtgmAxWjR1e&sz=w800"
    ]
  },
  {
    "id": "91",
    "title": "2 Storey Detached House",
    "address": "No. 6, Lorong Cinta Alam F, Country Heights, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 4723000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "471 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=14Iff-hPCYTlDJnvKFB1Z-NNd9oq7tHOI&sz=w800"
    ]
  },
  {
    "id": "92",
    "title": "Condominium",
    "address": "Unit No. C13-07, Block C, Magna Ville Selayang, Selayang Bahagia, Lebuhraya Selayang-Kepong, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 203391,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "001 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=178TxjfmJZDNxcpne0xZ0_1o6LGHfJC2T&sz=w800"
    ]
  },
  {
    "id": "93",
    "title": "Apartment",
    "address": "Pangsapuri Putra Laksamana, Jalan Laksamana 4, Sungai Tua, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 300000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1KFgETtps6YzeR4iS8vT9cLfTJD0Cfsfr&sz=w800",
      "https://drive.google.com/thumbnail?id=1sw_hlWZteuzBJPfbR7eftcScS8_jGWFM&sz=w800"
    ]
  },
  {
    "id": "94",
    "title": "Apartment",
    "address": "Unit No. B-4-17, Tingkat 5, Pangsapuri Seri Mawar, Jalan Seri Putra 4, Bandar Seri Putra, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 90000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "721 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1crD-zDt7CzGNMByQvNFjMpiXDQDHCpje&sz=w800"
    ]
  },
  {
    "id": "95",
    "title": "2 Storey Terrace House",
    "address": "No. 1, Jalan Selasih U12/18B, Seksyen U12, 40170 Shah Alam, Selangor",
    "postcode": "40170",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 891000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "455 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1PBpuJnNw80IzoaqTQhrDlGwpyHkTDbLF&sz=w800"
    ]
  },
  {
    "id": "96",
    "title": "Duplex Town House (Upper Unit)",
    "address": "Unit No. 58, Seri Puteri Hills Townvilla, Jalan Puteri 11/1, Bandar Puteri, 47100 Puchong, Selangor",
    "postcode": "47100",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 1500000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "800 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1NREg-jOyyisvPRYNHMhHKCAI3VMmxxPP&sz=w800"
    ]
  },
  {
    "id": "97",
    "title": "2 Storey Terrace House",
    "address": "No. 21, Jalan 13/19, Seksyen 13, 40100, Shah Alam, Selangor",
    "postcode": "40100",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 700000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "916 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=10bBuu-22MHNdeS0qZmmrEC_OEzaA32Wi&sz=w800"
    ]
  },
  {
    "id": "98",
    "title": "Apartment",
    "address": "Unit No. B8-3-2, Tingkat 3, Block 8, Pangsapuri Palma, Jalan Desa Ria, Bandar Country Homes, 48000 Rawang, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 59130,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "646 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "99",
    "title": "3 Storey Terrace Shop Office",
    "address": "No. 43, Jalan Puteri 5/7, Bandar Puteri, 47100 Puchong, Selangor",
    "postcode": "47100",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 2250000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "650 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "100",
    "title": "1 Storey Semi Detached House",
    "address": "No. 2, Jalan SD 7, Desa Salak Damai, 43900 Sepang, Selangor",
    "postcode": "43900",
    "state": "Selangor",
    "area": "Sepang",
    "reservePrice": 321489,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "746 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "101",
    "title": "2 Storey Terrace House",
    "address": "No. 3, Jalan Elektron U16/62, Denai Alam, 40160, Shah Alam, Selangor",
    "postcode": "40160",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 750000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "760 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1r54n3deFZ5QYOqyGXh33P-d9g6mxHK_w&sz=w800"
    ]
  },
  {
    "id": "102",
    "title": "1 Storey Terrace House",
    "address": "No. 3, Jalan Pinang 4/3, Bandar Hillpark, 42300 Bandar Puncak Alam, Selangor",
    "postcode": "42300",
    "state": "Selangor",
    "area": "Bandar Puncak Alam",
    "reservePrice": 387000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "432 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1mxHwl2hJhhq_lPJYXdLS08Te7zvJBIbx&sz=w800"
    ]
  },
  {
    "id": "103",
    "title": "Condominium",
    "address": "Unit No.A8-9-6, Blok A8, Green Acre Park Kondo, Bandar Sungai Long (R/Pangsa), 43000, Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 300000,
    "auctionDate": "7th Sep 2026 (Mon)",
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
    "id": "104",
    "title": "1 Storey Terrace House",
    "address": "No. 27, Jalan Merbuk 7/53, Taman Bentara, 42500 Telok Panglima Garang, Selangor",
    "postcode": "42500",
    "state": "Selangor",
    "area": "Telok Panglima Garang",
    "reservePrice": 390000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "270 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jzgEVeorCoDEp3gxPokKDuhYzigziuy1&sz=w800"
    ]
  },
  {
    "id": "105",
    "title": "2 Storey Detached House",
    "address": "No. 28, Jalan Desa 8/4, Bandar Country Homes, 48000 Rawang, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 607500,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "000 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Pt5pmSYSxHduHrFIV3CRvYIuM7RIP0IY&sz=w800"
    ]
  },
  {
    "id": "106",
    "title": "Condominium",
    "address": "Block D, Palm Spring @ Damansara, Jalan PJU 3/29, Section 13, Kota Damansara, 47810 Petaling Jaya, Selangor",
    "postcode": "47810",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 315000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "926 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1XFX0uBe1EkSB_kBMlqlsCVh1pHioKLrA&sz=w800",
      "https://drive.google.com/thumbnail?id=1vKJul1Dct28zLcv7SsDPpHY5odiBx04I&sz=w800"
    ]
  },
  {
    "id": "107",
    "title": "2 Storey Terrace Factory",
    "address": "No. 42, Jalan SS 25/28, 47301 Petaling Jaya, Selangor",
    "postcode": "47301",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 1520000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "000 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=107z1z0se80-P0SUZ4u9x6MxQ4jrBJYT8&sz=w800"
    ]
  },
  {
    "id": "108",
    "title": "1 Storey Terrace House",
    "address": "No.12, Jalan BB 3/18, Taman Banting Baru, 42700 Banting, Selangor",
    "postcode": "42700",
    "state": "Selangor",
    "area": "Banting",
    "reservePrice": 290000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "098 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1ulmtT3Cb6qCXiH6-XnQfYeKoMhzEDlEj&sz=w800"
    ]
  },
  {
    "id": "109",
    "title": "Apartment",
    "address": "Unit No. B-32-03A, Block B, Skylake Residense, Jalan Putra Perdana, Putra Perdana, 47130, Puchong, Selangor",
    "postcode": "47130",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 385000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "893 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1DeUqPx7O6a5EOgNMRlTZhrRPEOPuQ6xU&sz=w800"
    ]
  },
  {
    "id": "110",
    "title": "2.5 Storey Terrace House",
    "address": "Premises No. 62, Jalan SW 3A, Taman Suria Warisan, 43900 Sepang, Selangor",
    "postcode": "43900",
    "state": "Selangor",
    "area": "Sepang",
    "reservePrice": 780000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "777 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=18ZovHoXZyUvzlj-wpDQfcEcvz9qhT4Et&sz=w800"
    ]
  },
  {
    "id": "111",
    "title": "1 Storey Terrace House",
    "address": "No. 6, Jalan LG3 1/39, Taman Langat Utama 3, Bukit Changgang, 42700 Banting, Selangor",
    "postcode": "42700",
    "state": "Selangor",
    "area": "Banting",
    "reservePrice": 250000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1SpqPPbOz6ZRHLDo1KM6x9uFN6xHjLXXk&sz=w800"
    ]
  },
  {
    "id": "112",
    "title": "2 Storey Terrace House",
    "address": "No. 9, Jalan SP 4/6, Bandar Saujana Putra, Lebuhraya Elite, 42610 Jenjarom, Selangor",
    "postcode": "42610",
    "state": "Selangor",
    "area": "Jenjarom",
    "reservePrice": 315000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "990 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1opmDn-3IHZRIO6kT7vQbTMgkBb6qnKHm&sz=w800"
    ]
  },
  {
    "id": "113",
    "title": "1 Storey Semi Detached House",
    "address": "No. 23, Jalan IP 3, Taman Indah Putera, 43900 Sepang, Selangor",
    "postcode": "43900",
    "state": "Selangor",
    "area": "Sepang",
    "reservePrice": 460000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "078 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "114",
    "title": "Apartment",
    "address": "Unit No. C-4-5, Desa Saujana Apartments, Taman Sungai Besi Indah, Seksyen 3, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 139000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "947 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1EHbGrnphCAEAZHU87sZBJyNmOERkZPGD&sz=w800",
      "https://drive.google.com/thumbnail?id=1z9-cF05R1W6uiXN5T3eUNz77OZdfwvWB&sz=w800"
    ]
  },
  {
    "id": "115",
    "title": "2 Storey Terrace House",
    "address": "No. 37, Jalan Dato Dagang 30, Taman Sentosa, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 364500,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "380 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Gu0_g_yYCidwKXv8mCwVxgtgmAxWjR1e&sz=w800"
    ]
  },
  {
    "id": "116",
    "title": "Office Unit",
    "address": "Unit No. D553, Block D, Jalan 6, Kosmopleks, Bandar Baru Salak Tinggi, 43900 Sepang, Selangor",
    "postcode": "43900",
    "state": "Selangor",
    "area": "Sepang",
    "reservePrice": 102000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "259 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1r34H4BhNMUFr_uZ00ToDNDadoIkwpKoS&sz=w800"
    ]
  },
  {
    "id": "117",
    "title": "2 Storey Terrace House",
    "address": "No. 5, Jalan Kebun Nenas 1L/KS7, Bandar Putera, 41100 Klang, Selangor",
    "postcode": "41100",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 342000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "449 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1gjAK2tW-c4hmhADJECuC7UYoeYWCTb-L&sz=w800"
    ]
  },
  {
    "id": "118",
    "title": "2 Storey Terrace House",
    "address": "No. 20, Jalan Temenggung 21, Taman Seri Bahagia, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 450000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1AID9l_Lksir6HnSEUTBteG95Mnr8cZPM&sz=w800"
    ]
  },
  {
    "id": "119",
    "title": "Vacant detached house plot",
    "address": "No. 11, Lorong 5/10F, Seksyen 5, 46000 Petaling Jaya, Selangor",
    "postcode": "46000",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 1305000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "238 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1y4nHfZbju5WlJToEsYK3yneKt3nsUb48&sz=w800"
    ]
  },
  {
    "id": "120",
    "title": "2 Storey Terrace House",
    "address": "No. 36, Jalan Alam Suria 15/3/3, Seksyen 15, 42300 Bandar Puncak Alam, Selangor",
    "postcode": "42300",
    "state": "Selangor",
    "area": "Bandar Puncak Alam",
    "reservePrice": 468000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=147PrIxUsDk9e9LTwN7_eoMlf4yNrJWKO&sz=w800"
    ]
  },
  {
    "id": "121",
    "title": "1 Storey Terrace House",
    "address": "No. 27, Jalan Belalang Dua 20/7B, Seksyen 20, 40300 Shah Alam, Selangor",
    "postcode": "40300",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 315000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "081 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1LwYSc20EwpA7TdA3iAq8EFujCyIKX-zy&sz=w800"
    ]
  },
  {
    "id": "122",
    "title": "2 Storey Terrace House",
    "address": "Premises No. 21, Jalan Mirage 4, Mirage By The Lake, Perdana Lakeview West, Cyber 7, 63000 Cyberjaya, Selangor",
    "postcode": "63000",
    "state": "Selangor",
    "area": "Cyberjaya",
    "reservePrice": 1000000,
    "auctionDate": "8th Sep 2026 (Tue)",
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
    "id": "123",
    "title": "Condominium",
    "address": "Unit No. B8/J/28-12, Palazzo Caprini (Tower 8), Venice Hill Condominium & Golf Resort, Persiaran Puteri 1, Taman Puteri Batu 9, 43200 Cheras, Selangor",
    "postcode": "43200",
    "state": "Selangor",
    "area": "Cheras",
    "reservePrice": 225000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=11PJSF-9fma_o2-philmurShH0duTl4Qt&sz=w800"
    ]
  },
  {
    "id": "124",
    "title": "2 Storey Semi Detached House",
    "address": "No. 29, Jalan Aman Perdana 11L/KU5, Taman Aman Perdana, 41050 Klang, Selangor",
    "postcode": "41050",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 800000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "084 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1wsF_6_CXR0UpTAjqwXa8emFD_cJ99_8X&sz=w800"
    ]
  },
  {
    "id": "125",
    "title": "2.5 Storey Terrace House",
    "address": "Jalan Permata Hijau, Taman Selayang Permata, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 800000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "315 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1EjaYHEecxBxUcEovlonWNn4qHXPBnXRX&sz=w800"
    ]
  },
  {
    "id": "126",
    "title": "Condominium",
    "address": "Unit No. A-13-7, Block A, Hillcrest Heights, Jalan Puchong Utama 1, Taman Puchong Utama, 47140 Puchong, Selangor",
    "postcode": "47140",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 630000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "324 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HsGMUjA1SsPJfZw0pslS0KwT2N9Gh8VB&sz=w800"
    ]
  },
  {
    "id": "127",
    "title": "2 Storey Terrace House",
    "address": "Jalan Seri Cheras 7, Taman Seri Cheras, 43200 Cheras, Selangor",
    "postcode": "43200",
    "state": "Selangor",
    "area": "Cheras",
    "reservePrice": 1250000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "830 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1PXeBhk5uudOjaE0dOdXNM85pfBP5vzg3&sz=w800"
    ]
  },
  {
    "id": "128",
    "title": "2 Storey Detached Bungalow",
    "address": "No. 9, Jalan Bukit OPU Daeng, Bukit Perani Satu 9/1A, Seksyen 9, 40100 Shah Alam, Selangor",
    "postcode": "40100",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 2500000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "163 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=12YElpT3TY5L8u2hsq3kzka4z8yyamTB6&sz=w800"
    ]
  },
  {
    "id": "129",
    "title": "1 Storey Terrace House",
    "address": "No. 23, Lorong Pandangan, Kampung Raja Uda, 42000 Port Klang, Selangor",
    "postcode": "42000",
    "state": "Selangor",
    "area": "Port Klang",
    "reservePrice": 297000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "680 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1lhe_kXBHyS_yccB5OGnX1RZejMRAmtFp&sz=w800"
    ]
  },
  {
    "id": "130",
    "title": "2 Storey Semi Detached House",
    "address": "No. 31, Jalan Kekwa, Bluwater Estate, The Mines Resort City, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 2700000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "808 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1k5xYQ6Pp6LA_8iuC_GOt-Xw2q517VsD7&sz=w800"
    ]
  },
  {
    "id": "131",
    "title": "2 Storey Terrace House",
    "address": "No. 22, Jalan Kerongsang 6, Bandar Puteri Klang, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 650000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "118 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1I5nasFaqK43b091QviHNjiPxEBLKGMws&sz=w800"
    ]
  },
  {
    "id": "132",
    "title": "Apartment",
    "address": "Begonia Kristal No. 01-33, Residensi Warnasari, Jalan Residensi Warnasari 13/1, Seksyen 13, 42300 Bandar Puncak Alam, Selangor",
    "postcode": "42300",
    "state": "Selangor",
    "area": "Bandar Puncak Alam",
    "reservePrice": 171000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "721 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1MTVA4HRdQQo_fTlDxHIqmBm0VQbtjX7w&sz=w800"
    ]
  },
  {
    "id": "133",
    "title": "2 Storey Terrace House",
    "address": "No. 19, Jalan Sungai Kelubi 32/102A, Kemuning Greenhills, Seksyen 32, 40460 Shah Alam, Selangor",
    "postcode": "40460",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 468000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "150 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Fw6BMGc7Xy20U9cAASG12OJiE84Jplb8&sz=w800"
    ]
  },
  {
    "id": "134",
    "title": "2 Storey Terrace Shop Office",
    "address": "No. 35, Jalan Meranti 2C, Bandar Utama Batang Kali, 44300, Batang Kali, Selangor",
    "postcode": "44300",
    "state": "Selangor",
    "area": "Batang Kali",
    "reservePrice": 600000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "120 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1K6-v2UWKVjLNoFALpg1bW5TjIXHHS7eK&sz=w800"
    ]
  },
  {
    "id": "135",
    "title": "2 Storey Terrace House",
    "address": "No. 34A, Lorong Hulubalang 10C/KS07, Taman Sentosa, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 390000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "920 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Gu0_g_yYCidwKXv8mCwVxgtgmAxWjR1e&sz=w800"
    ]
  },
  {
    "id": "136",
    "title": "2 Storey Terrace House",
    "address": "No. 71, Jalan Bayu Impian 28F/KS9, Kota Bayuemas, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 1000000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "167 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1ajfuozmlbE52Sqq6G0iWHA4xVwBY-dcn&sz=w800"
    ]
  },
  {
    "id": "137",
    "title": "Apartment",
    "address": "Unit No. A-5-11, Pangsapuri Kasuarina, Persiaran Kasuarina/Ks6, Bandar Botanik, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 270000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "904 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Viw3ox_NvGN41HbD6GwGHkcvL_fbktnT&sz=w800"
    ]
  },
  {
    "id": "138",
    "title": "1.5 Storey Terrace House",
    "address": "No. 23, Jalan Zapin 1C, Bandar Bukit Raja, 41050 Klang, Selangor",
    "postcode": "41050",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 500000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1FpNJwd1Em1IQjwP_SUXVKksNVD7Lb22M&sz=w800"
    ]
  },
  {
    "id": "139",
    "title": "3 Storey Semi Detached House",
    "address": "No. 132, Jalan Sri Tasik Timur, Perdana Lakeview East, 63300, Cyberjaya, Selangor",
    "postcode": "63300",
    "state": "Selangor",
    "area": "Cyberjaya",
    "reservePrice": 4000000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "064 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1d-K-b2wpabSYrfIVUvfvtBuSIVhWksky&sz=w800"
    ]
  },
  {
    "id": "140",
    "title": "2 Storey Terrace House",
    "address": "No. 65, Jalan Palma 1/8, Bandar Hillpark, 42300, Bandar Puncak Alam, Selangor",
    "postcode": "42300",
    "state": "Selangor",
    "area": "Bandar Puncak Alam",
    "reservePrice": 570000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "496 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1mxHwl2hJhhq_lPJYXdLS08Te7zvJBIbx&sz=w800"
    ]
  },
  {
    "id": "141",
    "title": "Town House",
    "address": "No. 1, Jalan Balakong Jaya 24A, Taman Balakong Jaya, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 320000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "893 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1sFOK5KwrRJ7Zf7tDHSAdCX-hBnwL1W8i&sz=w800"
    ]
  },
  {
    "id": "142",
    "title": "2 Storey Terrace House",
    "address": "No. 82, Jalan 2, Taman Sri Semenyih, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 280000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "005 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1fimVAWIYBpZr62nWrXfia4v-Aw3cHbNY&sz=w800"
    ]
  },
  {
    "id": "143",
    "title": "2 Storey Terrace House",
    "address": "No. 58, Jalan Aman Suria U17/44, Seksyen U17, 40160 Shah Alam, Selangor",
    "postcode": "40160",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 610000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "470 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1kFRQvwpjiHj27sz9AB_PuYlEzEF4VeoQ&sz=w800",
      "https://drive.google.com/thumbnail?id=1Vzc6mN50L3JMZVqHL8AKqJm2ZCoMr7rk&sz=w800"
    ]
  },
  {
    "id": "144",
    "title": "Condominium",
    "address": "Unit No. B-22-6, Block B, Jalan 2/109C, Abadi Villa Condo, Off Jalan Kelang Lama, Taman Abadi Indah, 58100, Kuala Lumpur",
    "postcode": "58100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 328050,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "194 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1oPuk3DfvU6FUQt2_a8x-Q6O6yvdFDPo2&sz=w800"
    ]
  },
  {
    "id": "145",
    "title": "Service Apartment",
    "address": "Unit No. 15-8, The Annex @ Medan Connaught, Jalan 3/144A, 56000, Kuala Lumpur",
    "postcode": "56000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 364500,
    "auctionDate": "8th Sep 2026 (Tue)",
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
    "id": "146",
    "title": "Condominium",
    "address": "Unit No. A-12-1, Hartamas Regency 2, Jalan Duta Hartamas, Off Persiaran Dutamas, 50480, Kuala Lumpur",
    "postcode": "50480",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 972000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "788 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1LIVWIrLHXpn9mhtietKs57ALzM0mFZ14&sz=w800"
    ]
  },
  {
    "id": "147",
    "title": "Condominium",
    "address": "Unit No. E-25-12, Residensi Mizumi, No. 3, Persiaran Metro Perdana, Taman Metropolitan Kepong, 52100, Kuala Lumpur",
    "postcode": "52100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 356400,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "936 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1yMQYOHP2RP99OFnkAxDtBYZYN4Un-pkB&sz=w800",
      "https://drive.google.com/thumbnail?id=1WuX229Imnfv0mLDOdgSm6hRVmQbfItbu&sz=w800"
    ]
  },
  {
    "id": "148",
    "title": "Penthouse",
    "address": "Unit No. P1-B-2, Seputih Permai Condominium, Jalan Taman Seputeh, Taman Seputeh, 58000, Kuala Lumpur",
    "postcode": "58000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 949500,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "605 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1-AcN68VDKvxwVcLQ8_vnWNfoeJOQYFYL&sz=w800"
    ]
  },
  {
    "id": "149",
    "title": "3 Storey Semi Detached House",
    "address": "No. 3, Vila Laman Cahaya, Jalan Cahaya 3, Off Jalan Datuk Sulaiman, 60000, Kuala Lumpur",
    "postcode": "60000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 2100000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "294 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1mnFaGggXQaMUyWPoNQWP_SVgzGIzV5kr&sz=w800"
    ]
  },
  {
    "id": "150",
    "title": "Flat",
    "address": "Block C, Pangsapuri Sri Penara, Jalan Sri Permaisuri 1, Bandar Sri Permaisuri, 56000 Cheras, Kuala Lumpur",
    "postcode": "56000",
    "state": "Kuala Lumpur",
    "area": "Cheras",
    "reservePrice": 207000,
    "auctionDate": "8th Sep 2026 (Tue)",
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
    "id": "151",
    "title": "Apartment",
    "address": "Unit No. A4-39-05, Block A4, Residensi Pr1ma Alam Damai, Persiaran Bistari, Alam Damai, 56000, Kuala Lumpur",
    "postcode": "56000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 350000,
    "auctionDate": "8th Sep 2026 (Tue)",
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
    "id": "152",
    "title": "Service Apartment",
    "address": "Unit No. B-12-7, Block B, Putra Majestik, Jalan Kasipillay, 51200, Kuala Lumpur",
    "postcode": "51200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 350000,
    "auctionDate": "8th Sep 2026 (Tue)",
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
    "id": "153",
    "title": "Apartment",
    "address": "Unit No. 3-10-N, Desa Dua Apartment, Lorong D 1/5, Desa Aman Puri, 52100, Kuala Lumpur",
    "postcode": "52100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 270000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "839 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1MTbiVobVfoHtLS7c6j3vrFWPSYecQp9X&sz=w800"
    ]
  },
  {
    "id": "154",
    "title": "Shop Unit",
    "address": "Unit No. 1-62, Kenanga Wholesale City, No. 2, Jalan Gelugor, 55200, Kuala Lumpur",
    "postcode": "55200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 769500,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "366 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1T2SCZKShk9Y4PCPQ_vpC_OTnoxPmDNOX&sz=w800",
      "https://drive.google.com/thumbnail?id=1NfE4fqlSgxhb37KvUrnkV9ZWkKMExZ0W&sz=w800",
      "https://drive.google.com/thumbnail?id=1u_vUr0FXQEBPBs7b0ieWkiEhSuwmY0t-&sz=w800"
    ]
  },
  {
    "id": "155",
    "title": "Apartment",
    "address": "Unit No. 01-17-10, Block 1, Jalan 1/2D, Taman Sri Murni, 68100, Kuala Lumpur",
    "postcode": "68100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 180000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "818 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=17_fTLQ0LzYc2IuWiLr4fQ4ORmxMkA_jG&sz=w800",
      "https://drive.google.com/thumbnail?id=1Ee_8dKtihIhsnZ0WT0xAf0uK66yfXmFW&sz=w800"
    ]
  },
  {
    "id": "156",
    "title": "Retail Lot",
    "address": "Unit No. 3-53A, Kompleks Kenanga Wholesale City, No. 2, Jalan Gelugor, 55200, Kuala Lumpur",
    "postcode": "55200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 656100,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "657 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1T2SCZKShk9Y4PCPQ_vpC_OTnoxPmDNOX&sz=w800",
      "https://drive.google.com/thumbnail?id=1NfE4fqlSgxhb37KvUrnkV9ZWkKMExZ0W&sz=w800",
      "https://drive.google.com/thumbnail?id=1u_vUr0FXQEBPBs7b0ieWkiEhSuwmY0t-&sz=w800"
    ]
  },
  {
    "id": "157",
    "title": "Hotel Suite",
    "address": "Unit No. 16-01, One @ Bukit Ceylon (Invito Hotel), Lorong Ceylon, 50200, Kuala Lumpur",
    "postcode": "50200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 526000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "764 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Mu_1quRUMnHAIMLQw5p9fx0SoYQq_dv5&sz=w800",
      "https://drive.google.com/thumbnail?id=1paSZqKil1GxSzrs8QiJbbRBvVvdyBLPu&sz=w800"
    ]
  },
  {
    "id": "158",
    "title": "Apartment",
    "address": "Unit No. A7-4-4, Block A7, Jalan 2/76A, Desa Pandan, Jalan Kampung Pandan, 55100, Kuala Lumpur",
    "postcode": "55100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 200000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "721 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1k9-2_Ai9zRevS7bhXZ8M-wjknnvkxbPL&sz=w800",
      "https://drive.google.com/thumbnail?id=1AgR-Y1JZz9FCfphlL3rwN3m9xBq-tQvC&sz=w800"
    ]
  },
  {
    "id": "159",
    "title": "Service Apartment",
    "address": "Unit No. B-7-10, Pangsapuri Suria Perdana (Fortune Park), Taman Serdang Perdana, Seksyen 4, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 171315,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "958 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1qxB-foyWgwSb5Jq7gTW3Sy0ytaYXF3iB&sz=w800",
      "https://drive.google.com/thumbnail?id=1yTHAP2__Su0yHx4hfHrDOUD0mTjF12vJ&sz=w800",
      "https://drive.google.com/thumbnail?id=1VZ-VvQdzi8H6F3DoKGRmln0JmOL3sNSj&sz=w800"
    ]
  },
  {
    "id": "160",
    "title": "Apartment",
    "address": "Unit No. D-4-5, Block D, Pangsapuri Orkid, Jalan Cemara, Taman Bukit Serdang, Seksyen 13, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 105300,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "753 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1tdVl93kJ_2veMdOEtgT43lvO8zuhKRaw&sz=w800"
    ]
  },
  {
    "id": "161",
    "title": "Service Apartment",
    "address": "Unit No. PS-8-02, Floor 8, Block Pelangi Sentral, Pelangi Damansara, Persiaran Surian, 47800 Petaling Jaya, Selangor",
    "postcode": "47800",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 284310,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "861 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Q7qzyi4gkq40QzU1CrBJmEggklOusbka&sz=w800",
      "https://drive.google.com/thumbnail?id=1rfpAv3_nubn-XD11hzFTGA3ivBP5FBnC&sz=w800"
    ]
  },
  {
    "id": "162",
    "title": "2 Storey Terrace House",
    "address": "No. 92, Jalan TPS 2/23, Taman Pelangi Semenyih 2, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 364500,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "420 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1_ITmeK9Ov3izLeAfYx_RiwW56_QxdLS9&sz=w800"
    ]
  },
  {
    "id": "163",
    "title": "Condominium",
    "address": "Unit No. A-16-3A, Block A, Kondominium Juta Mines, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 243000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "216 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1F9AHb0fMFbweyj5lqcjbCDG6-lMy5gd9&sz=w800"
    ]
  },
  {
    "id": "164",
    "title": "1 Storey Terrace House",
    "address": "No. 65, Jalan Klang Perdana 4A (Lorong Klang Perdana 4A), Taman Klang Perdana, 42100 Klang, Selangor",
    "postcode": "42100",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 387000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "314 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Pu1HN-eWbjlC2jsTwzFvaamK34WDazFb&sz=w800"
    ]
  },
  {
    "id": "165",
    "title": "Apartment",
    "address": "Unit No. B-16-20, Pangsapuri Damai Mewah B, Jalan Damai Mewah 2, Taman Damai Mewah, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 234000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "861 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1LfbElYxP4QorbWOO_XRbJcZ2Lwoi9uO8&sz=w800"
    ]
  },
  {
    "id": "166",
    "title": "1 Storey Terrace House",
    "address": "No. 21, Jalan Melur, Taman Musabika, 44100 Kalumpang, Selangor",
    "postcode": "44100",
    "state": "Selangor",
    "area": "Kalumpang",
    "reservePrice": 90000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Esn3VEzHj_TFuWboR7kLYoYcVnkyukOF&sz=w800"
    ]
  },
  {
    "id": "167",
    "title": "2 Storey Bungalow",
    "address": "No. 11, Jalan Kubah U8/57B, Bukit Jelutong, Section U8, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 3800000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "018 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1d4TqkhQT0jqIdTsrgFBl_Y2r2rj6zRel&sz=w800"
    ]
  },
  {
    "id": "168",
    "title": "Condominium",
    "address": "Unit No. B-05-10, Sutera Pines, Jalan Sutera Pines, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 420000,
    "auctionDate": "9th Sep 2026 (Wed)",
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
    "id": "169",
    "title": "2 Storey Terrace House",
    "address": "No. 1A, Jalan Kebun Nenas 2J/KS7, Bandar Putera, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 534600,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "540 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1gjAK2tW-c4hmhADJECuC7UYoeYWCTb-L&sz=w800"
    ]
  },
  {
    "id": "170",
    "title": "1 Storey Terrace House",
    "address": "No. 59, Jalan Intan 5, Taman Yayasan, 42600 Jenjarom, Selangor",
    "postcode": "42600",
    "state": "Selangor",
    "area": "Jenjarom",
    "reservePrice": 320000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "954 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1RB-qU048p-shE2bRl8EOPxi3t9iRBM9x&sz=w800"
    ]
  },
  {
    "id": "171",
    "title": "Condominium",
    "address": "Unit No. C-11-09, Block C, Ameera Residence, Jalan Mutiara 3, Mutiara Heights, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 400000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "249 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1q5N7E-0b-m-meQnfYveLltKGAW1lIsuU&sz=w800"
    ]
  },
  {
    "id": "172",
    "title": "Small Office Home Office (SOHO)",
    "address": "Unit No. 9-1, Menara Infiniti, No. 28, Jalan SS6/3, Kelana Jaya, 47301 Petaling Jaya, Selangor",
    "postcode": "47301",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 500000,
    "auctionDate": "9th Sep 2026 (Wed)",
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
    "id": "173",
    "title": "Condominium",
    "address": "Unit No. B1/A/11-3, (Tower 1), Persiaran Puteri 1, Taman Puteri (Venice Hills), 43200 Cheras, Selangor",
    "postcode": "43200",
    "state": "Selangor",
    "area": "Cheras",
    "reservePrice": 250000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1GzItjmVn930FVcnA-IbPXi2UFPLihyfT&sz=w800"
    ]
  },
  {
    "id": "174",
    "title": "Apartment",
    "address": "Unit No. A409, Block A, Pangsapuri Sri Cempaka, 47170 Puchong, Selangor",
    "postcode": "47170",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 250000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "807 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1SQaS2Lf6tArSIgKKhTN2DV_0FyC_Xr2o&sz=w800"
    ]
  },
  {
    "id": "175",
    "title": "1.5 Storey Terrace House",
    "address": "No. 11, Jalan KP 2/13, Taman Kajang Prima, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 650000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "230 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=11EQU7a0KJsk4oNiy9vNt-W768tfS2_Ha&sz=w800"
    ]
  },
  {
    "id": "176",
    "title": "Service Apartment",
    "address": "Unit No. D-10-05, Block D, Residensi Amara, Jalan Raintree Utama, 68100, Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 330000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "023 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1PGPCvCNGL_SDWCXw7ciboiqABGaBzvsT&sz=w800",
      "https://drive.google.com/thumbnail?id=1ykLqMeXx5oMRlAFD-oL4uHLOG_fFQBmN&sz=w800"
    ]
  },
  {
    "id": "177",
    "title": "Condominium",
    "address": "Unit No. 301, Block A, Paradesa Tropica, Persiaran Meranti, PJU 9, Bandar Sri Damansara, 52200, Petaling Jaya, Selangor",
    "postcode": "52200",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 600000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "658 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "178",
    "title": "Apartment",
    "address": "Unit No. B-5-06, Pangsapuri Kasuarina, Persiaran Kasuarina/KS6, Bandar Botanik, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 243000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "904 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Viw3ox_NvGN41HbD6GwGHkcvL_fbktnT&sz=w800"
    ]
  },
  {
    "id": "179",
    "title": "1 Storey Terrace House",
    "address": "No. 54, Jalan DA 3/1, Taman Dataran Abadi, 43900 Sepang, Selangor",
    "postcode": "43900",
    "state": "Selangor",
    "area": "Sepang",
    "reservePrice": 330000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "604 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Z-aaMqt8VhPdYlyrU0XT6MkrRhwHfTeL&sz=w800"
    ]
  },
  {
    "id": "180",
    "title": "Service Apartment",
    "address": "Unit No. B2-13A-09, Blok B2, Gravit 8, Jalan Bayu Laut/KS9, Kota Bayuemas, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 440000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "872 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1J_uorahG0KpkU0Dku7Cmc6Q1Nu2Lg8p0&sz=w800",
      "https://drive.google.com/thumbnail?id=1kudS7JiJEf0hZmwpBm89DHjJvVwfKFWT&sz=w800"
    ]
  },
  {
    "id": "181",
    "title": "Apartment",
    "address": "Unit No. 29-01-9, Block 29, Pangsapuri Melor, Jalan Metafasa U16/3, Taman Bukit Subang, 40160 Shah Alam, Selangor",
    "postcode": "40160",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 280000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "753 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "182",
    "title": "Terrace House",
    "address": "No. 13, Jalan Selasih U12/15, Taman Cahaya Alam, Seksyen U12, 40170 Shah Alam, Selangor",
    "postcode": "40170",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 765000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "916 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1PBpuJnNw80IzoaqTQhrDlGwpyHkTDbLF&sz=w800"
    ]
  },
  {
    "id": "183",
    "title": "Industrial Land",
    "address": "Lot 4006 (Lot 7922, PT No. 37575), Jalan Bukit Badak, Kampung Baru Subang, 40150 Shah Alam, Selangor",
    "postcode": "37575",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 2000000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "554 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1gen_0Yz-Zag6OxJEYYiVVVA2DUN4cc8q&sz=w800"
    ]
  },
  {
    "id": "184",
    "title": "Apartment",
    "address": "Unit No. 23-05, Akoya Residence, Jalan Mutiara 3, Mutiara Heights, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 307800,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "270 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1quZDmRHLmmHtHjNh2X3s8WvFoBw5jGxW&sz=w800",
      "https://drive.google.com/thumbnail?id=1-mhaVY4v5bfIDDIdcEA3uxo0f3I0Ql6a&sz=w800"
    ]
  },
  {
    "id": "185",
    "title": "2 Storey Terrace House",
    "address": "No. 115, Jalan Jujur 25/30, Taman Sri Muda, Seksyen 25, 40400 Shah Alam, Selangor",
    "postcode": "40400",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 320000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "840 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1tXpjjoQnhF6gGxXXqSlvUJ-28lWfMWgl&sz=w800"
    ]
  },
  {
    "id": "186",
    "title": "Service Apartment",
    "address": "Unit No. A-25-05, Pavilion, Jalan Puteri 7/13, Bandar Puteri, 47100 Puchong, Selangor",
    "postcode": "47100",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 504000,
    "auctionDate": "9th Sep 2026 (Wed)",
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
    "id": "187",
    "title": "2 Storey Terrace House",
    "address": "Jalan Laksamana 9/KS7, Taman Sentosa, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 550000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Gu0_g_yYCidwKXv8mCwVxgtgmAxWjR1e&sz=w800"
    ]
  },
  {
    "id": "188",
    "title": "1 Storey Terrace House",
    "address": "No. 38, Jalan 5/24, Bandar Rinching, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 350000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1sItNrKYFqsPOSHyRdRuWq-doo6ydYMXE&sz=w800"
    ]
  },
  {
    "id": "189",
    "title": "1 Storey Terrace House",
    "address": "No. 27, Jalan Dato Abdul Hamid 7, Taman Sentosa, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 370000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "200 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Gu0_g_yYCidwKXv8mCwVxgtgmAxWjR1e&sz=w800"
    ]
  },
  {
    "id": "190",
    "title": "Apartment",
    "address": "Unit No. B-7-03, Pangsapuri Puchong Permata, Jalan Permai 4, Taman Puchong Permai, 47100 Puchong, Selangor",
    "postcode": "47100",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 159432.3,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "850 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1oFRmcwDmjWHW1TJivgbmZV7LD482ivXP&sz=w800",
      "https://drive.google.com/thumbnail?id=1zDJB0Lc9qgoW23o8NWjr2UepDwj-oYLT&sz=w800"
    ]
  },
  {
    "id": "191",
    "title": "Flat",
    "address": "Unit No. 06-05-02, Block 6, Pangsapuri Seroja, No. 2, Jalan Setia Murni U13/50, Seksyen U13, Setia Alam, 40170 Shah Alam, Selangor",
    "postcode": "40170",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 110160,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "667 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=12j2EGNvLei6cx_gOuwmLXGyoQ_z9v99s&sz=w800"
    ]
  },
  {
    "id": "192",
    "title": "Service Apartment",
    "address": "Unit No. N-16-09, 16th Floor, Northwood Suite, Edusphere Suite, Jalan Edusphere 2, Edusphere, Cyber 11, 63000 Cyberjaya, Selangor",
    "postcode": "63000",
    "state": "Selangor",
    "area": "Cyberjaya",
    "reservePrice": 380000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "790 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "193",
    "title": "Apartment",
    "address": "Unit No. 30, Blok I, Rampai Court Apartment, Jalan 35/26, Taman Sri Rampai, 53300, Kuala Lumpur",
    "postcode": "53300",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 216000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "592 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Au_UIgyGTn7j7X2jQxRfOOAosqTyfVf5&sz=w800"
    ]
  },
  {
    "id": "194",
    "title": "Duplex Condominium",
    "address": "Unit No. A-15-16, Putra Villa Condominium, No. 1, Jalan Terminal Putra, Taman Melati, 53100, Kuala Lumpur",
    "postcode": "53100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 945000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "369 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1tswLa-a7O32JKj6ZPfLDFWXSvWy6hAG8&sz=w800"
    ]
  },
  {
    "id": "195",
    "title": "Office Unit",
    "address": "Unit No. 27-4-2, 4th Floor, Block G2, Cheras Business Centre, Jalan 3/101C, 56100, Kuala Lumpur",
    "postcode": "56100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 190000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "635 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=10mWR7wWRLAe12FVqQ7mYucjv7WDhVEUL&sz=w800"
    ]
  },
  {
    "id": "196",
    "title": "Service Apartment",
    "address": "Unit No. 9-03, 231TR Service Suites, No. 231, Jalan Tun Razak, 50400, Kuala Lumpur",
    "postcode": "50400",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 720000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "087 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Lrd4iA2QY8yXkD9jkfh9fESnr5gMc3PP&sz=w800"
    ]
  },
  {
    "id": "197",
    "title": "Apartment",
    "address": "Unit No. 102-9-24, Block 102, PPR Seri Pantai, Jalan Pantai Dalam, 59200, Kuala Lumpur",
    "postcode": "59200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 170000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "549 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1F6x_YS9JwhXH_VJk0x06lSsgLsC2N7aO&sz=w800"
    ]
  },
  {
    "id": "198",
    "title": "Commercial Retail Lot",
    "address": "Unit No. T076, Sungai Wang Plaza, Jalan Sultan Ismail, 55100, Kuala Lumpur",
    "postcode": "55100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 725000,
    "auctionDate": "9th Sep 2026 (Wed)",
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
    "id": "199",
    "title": "Shop Lot",
    "address": "Unit No. 2-55, Kompleks Kenanga Wholesale City, Jalan Gelugor, 55200, Kuala Lumpur",
    "postcode": "55200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 679063.5,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "579 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1T2SCZKShk9Y4PCPQ_vpC_OTnoxPmDNOX&sz=w800",
      "https://drive.google.com/thumbnail?id=1NfE4fqlSgxhb37KvUrnkV9ZWkKMExZ0W&sz=w800",
      "https://drive.google.com/thumbnail?id=1u_vUr0FXQEBPBs7b0ieWkiEhSuwmY0t-&sz=w800"
    ]
  },
  {
    "id": "200",
    "title": "2.5 Storey Terrace House",
    "address": "No. 29, Jalan 5/38C, Taman Sri Kepong Baru, 52100, Kuala Lumpur",
    "postcode": "52100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 500000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "292 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1XP-zmb-ieSjksGKwE71OEiRyNeSf2avP&sz=w800"
    ]
  },
  {
    "id": "201",
    "title": "Altitude 236 Condominium",
    "address": "Unit No. 31-6, Altitude 236 Condominium, No. 9, Jalan Alam Damai, 56000, Kuala Lumpur",
    "postcode": "56000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 580000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "389 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1ciZ01s65yCb6GEPo40VBqECTDpsXbty_&sz=w800",
      "https://drive.google.com/thumbnail?id=1iWliYrSBza2jsbJEs-LDhfEQ_teQFcKa&sz=w800"
    ]
  },
  {
    "id": "202",
    "title": "Apartment",
    "address": "Unit No. A-23-1, Block A, Desa Sri Puteri, No. 6, Jalan 1/125G, Desa Petaling, 57100, Kuala Lumpur",
    "postcode": "57100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 154183.5,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "829 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1c7FHEu5MoBUmMDE3YdCx4vOZsFsY-Hz5&sz=w800",
      "https://drive.google.com/thumbnail?id=1CY4L0JDV3F37hM2leKcgiUME7Q_cAyat&sz=w800"
    ]
  },
  {
    "id": "203",
    "title": "Service Apartment",
    "address": "Unit No. B-30-02, No. 3, Residensi Jalil Idaman @ Twin Arkz, Jalan Jalil Perkasa 1, 57000 Bukit Jalil, Kuala Lumpur",
    "postcode": "57000",
    "state": "Kuala Lumpur",
    "area": "Bukit Jalil",
    "reservePrice": 850500,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "517 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1WW2aoWM8tKkKw9dDRIAiSJHAXpRXBK7Z&sz=w800",
      "https://drive.google.com/thumbnail?id=1hbz0BUZ1K9E0a6k9g9KkOjVzZRmwCNxF&sz=w800"
    ]
  },
  {
    "id": "204",
    "title": "1 Storey Terrace House",
    "address": "No. 14, Jalan Gamelan 1F/KU5, Off Jalan Haji Sirat, Bandar Bukit Raja, 41050 Klang, Selangor",
    "postcode": "41050",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 328050,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "930 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1FpNJwd1Em1IQjwP_SUXVKksNVD7Lb22M&sz=w800"
    ]
  },
  {
    "id": "205",
    "title": "Office Unit",
    "address": "Unit No. B-04-03, Residensi Estetika, Jalan Dagang SB, The Mines Resort City, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 247860,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "560 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=13Dj3quwRdF3-Kbt-L164Bg8m1g1oi7rt&sz=w800"
    ]
  },
  {
    "id": "206",
    "title": "Office Lot",
    "address": "Unit No. 2-1C, Jalan Bandar Sembilan, Pusat Bandar Puchong, 47160 Puchong, Selangor",
    "postcode": "47160",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 245000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "883 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1Vv7aeeqfQjtA5Q90l-KdPSINfK7vBwmW&sz=w800"
    ]
  },
  {
    "id": "207",
    "title": "Flat",
    "address": "Unit No. D-01-01, Block D, Jalan CU 1/A, Fasa 3, Taman Cheras Utama, 43200 Cheras, Selangor",
    "postcode": "43200",
    "state": "Selangor",
    "area": "Cheras",
    "reservePrice": 145800,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "667 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xTqIDSRYSS8jL1FtRNWtVwbWrhV-5mM3&sz=w800"
    ]
  },
  {
    "id": "208",
    "title": "2 Storey Semi Detached Cluster House",
    "address": "No. 15, Lorong Az-Zaharah 10/11, Seksyen 10, 42300 Bandar Puncak Alam, Selangor",
    "postcode": "42300",
    "state": "Selangor",
    "area": "Bandar Puncak Alam",
    "reservePrice": 324000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "321 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1-1CQkP7DMQGek8XB66sE4nIiIcQikRou&sz=w800"
    ]
  },
  {
    "id": "209",
    "title": "Apartment",
    "address": "Unit No. H-03A, Pangsapuri Ria, Taman Bukit Mewah, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 162000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "958 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "210",
    "title": "Apartment",
    "address": "Unit No. D-9-01, Blok D (Dahlia), Pelangi Damansara, PJU 6, Persiaran Surian, 47800 Petaling Jaya, Selangor",
    "postcode": "47800",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 252000,
    "auctionDate": "10th Sep 2026 (Thu)",
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
    "id": "211",
    "title": "1 Storey Terrace House",
    "address": "No. 37, Jalan Perkasa 10, Taman Perkasa, 42500 Telok Panglima Garang, Selangor",
    "postcode": "42500",
    "state": "Selangor",
    "area": "Telok Panglima Garang",
    "reservePrice": 288000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "453 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1rooFHmiYrCGk2ZULHXWvg2-_zHHZrazF&sz=w800"
    ]
  },
  {
    "id": "212",
    "title": "2 Storey Terrace House",
    "address": "No. 82, Jalan Lingkaran Nur 1/5, Taman Lingkaran Nur, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 300000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "900 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1MzzBkjC2hMMqf1P2t0wGc1v1rkFZqsO-&sz=w800"
    ]
  },
  {
    "id": "213",
    "title": "2 Storey Terrace House",
    "address": "No. 75, Jalan Iris 5, Perumahan Jalan Iris, 48300 Taman Bunga Raya, Selangor",
    "postcode": "48300",
    "state": "Selangor",
    "area": "Taman Bunga Raya",
    "reservePrice": 320000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1R2WnTR4hjYKuqYZ_RFDHnfJejaOCZhT8&sz=w800"
    ]
  },
  {
    "id": "214",
    "title": "1 Storey Terrace House",
    "address": "Jalan BK 1/4, Bandar Kinrara, 47180 Puchong, Selangor",
    "postcode": "47180",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 380000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "098 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1MZZzk6rM0iQQTWnyX7XN52xqSkmOXirj&sz=w800"
    ]
  },
  {
    "id": "215",
    "title": "Apartment",
    "address": "Block E, Mentari Court, Jalan PJS 8/9, Taman Seri Mentari, 46150 Petaling Jaya, Selangor",
    "postcode": "46150",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 250000,
    "auctionDate": "10th Sep 2026 (Thu)",
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
    "id": "216",
    "title": "Apartment",
    "address": "Unit No. E-6-15, Blok E (Anggerik), Pelangi Damansara, PJU 6, Persiaran Surian, 47800 Petaling Jaya, Selangor",
    "postcode": "47800",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 310000,
    "auctionDate": "10th Sep 2026 (Thu)",
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
    "id": "217",
    "title": "Terrace House [4 min to Econsave Semenyih; 10 min to Lotus's Semenyih (Tesco)]",
    "address": "No. 37, Jalan Semenyih Mewah 2, Taman Semenyih Mewah, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 510000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "692 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1gVd79WuwQE7h-1ZLAbbX-2pMuceoZkYH&sz=w800"
    ]
  },
  {
    "id": "218",
    "title": "2.5 Storey Detached House",
    "address": "No. 2, Jalan Villa Merab 3, Desa Villa Merab, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 1100000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "213 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1MxW6GasBYWiZmB2SgWawE0GyxhFKkyzE&sz=w800"
    ]
  },
  {
    "id": "219",
    "title": "2 Storey Terrace House",
    "address": "No. 87, Jalan Kesuma 8/3H, Seksyen 8, Bandar Tasik Kesuma, 43700 Beranang, Selangor",
    "postcode": "43700",
    "state": "Selangor",
    "area": "Beranang",
    "reservePrice": 420000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "184 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1GxcLcPSxi3AR4LOBInBtVk9qr_haqo-H&sz=w800"
    ]
  },
  {
    "id": "220",
    "title": "2 Storey Detached House",
    "address": "No. 2, Jalan Ukay Seraya 2, Taman Ukay Seraya, 68000 Ampang, Selangor",
    "postcode": "68000",
    "state": "Selangor",
    "area": "Ampang",
    "reservePrice": 3240000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "900 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1G-MfqZHX-wthnQpTZfp-AxDRlhpr3zT7&sz=w800"
    ]
  },
  {
    "id": "221",
    "title": "2 Storey Terrace House",
    "address": "No. 12, Jalan Iris 3, Taman Bunga Raya, 48300 Bukit Beruntung, Selangor",
    "postcode": "48300",
    "state": "Selangor",
    "area": "Bukit Beruntung",
    "reservePrice": 330000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1R2WnTR4hjYKuqYZ_RFDHnfJejaOCZhT8&sz=w800"
    ]
  },
  {
    "id": "222",
    "title": "Town House",
    "address": "Andari Townvilla, Jalan SH 2/1, Selayang Heights, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 405000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "732 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1PynqKvspVIaRuamQ8Dbry5nL8m4ckim2&sz=w800"
    ]
  },
  {
    "id": "223",
    "title": "1 Storey Terrace House",
    "address": "No. 70, Jalan Sri Cahaya 14, Taman Cahaya 2, 45600 Bestari Jaya, Selangor",
    "postcode": "45600",
    "state": "Selangor",
    "area": "Bestari Jaya",
    "reservePrice": 200000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "950 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1TUXC01WNF8yFoJZznDzvbYl-F6BZ4hhi&sz=w800"
    ]
  },
  {
    "id": "224",
    "title": "2 Storey Terrace House",
    "address": "No. 23, Jalan TK 2/1B, Taman Kinrara, Seksyen 2, 47190 Puchong, Selangor",
    "postcode": "47190",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 600000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "494 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1QZw3CSaDSsOEyCBeYXhIoEdt7wpEMJKY&sz=w800"
    ]
  },
  {
    "id": "225",
    "title": "2 Storey Terrace House",
    "address": "No. 27, Jalan Kemuning Bayu 33/32K, Taman Kemuning Utama, Seksyen 33, 40400 Shah Alam, Selangor",
    "postcode": "40400",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 1000000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "508 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1DlmX4Aw5cjY4P2HWtAI10RF6dQ-gWAUb&sz=w800"
    ]
  },
  {
    "id": "226",
    "title": "1.5 Storey Terrace Shop Office",
    "address": "No. 30-1 & 30-2, Jalan Puteri 7/7, Bandar Puteri, 47100 Puchong, Selangor",
    "postcode": "47100",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 1200000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=16WRYhYH1luCMldvBhEFRGs6fM_EbwW5X&sz=w800"
    ]
  },
  {
    "id": "227",
    "title": "Flat",
    "address": "Block B, Jalan Pinggiran Delima 2/1, Taman Pinggiran Delima, 43100 Hulu Langat, Selangor",
    "postcode": "43100",
    "state": "Selangor",
    "area": "Hulu Langat",
    "reservePrice": 140000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "710 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1VECSafuGA6HbomrO5mLGR6CDZiv940bJ&sz=w800"
    ]
  },
  {
    "id": "228",
    "title": "2 Storey Terrace House",
    "address": "No. 19, Jalan TS 3, Taman Taming Setia, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 650000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "020 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=12kH4RUlQn0Z0gDKAm-D5PTGwBTqCOW91&sz=w800"
    ]
  },
  {
    "id": "229",
    "title": "2 Storey Terrace House",
    "address": "No. 2, Jalan SP 8/8, Saujana Puchong, Seksyen 8, Bandar Putra Permai, 47110 Puchong, Selangor",
    "postcode": "47110",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 422820,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "269 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Pt5pmSYSxHduHrFIV3CRvYIuM7RIP0IY&sz=w800"
    ]
  },
  {
    "id": "230",
    "title": "Office Unit",
    "address": "Unit No. C15-1, 1st Floor, Block C, Jalan Selaman 1, Dataran Palma, 68000 Ampang, Selangor",
    "postcode": "68000",
    "state": "Selangor",
    "area": "Ampang",
    "reservePrice": 810000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "595 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1hVHumbGQErjXJko30_HlL8A8fmU16zHp&sz=w800"
    ]
  },
  {
    "id": "231",
    "title": "2 Storey Terrace House",
    "address": "Jalan Mas 3, Taman Cheras Mas, 43200 Cheras, Selangor",
    "postcode": "43200",
    "state": "Selangor",
    "area": "Cheras",
    "reservePrice": 720000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1IplJ8XjKuKncNmTpUv2tz5Saw1wq1opf&sz=w800"
    ]
  },
  {
    "id": "232",
    "title": "2 Storey Terrace House",
    "address": "No. 381, Jalan TKP 5, Taman Kantan Permai, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 340000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "059 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1PIDq0xxYxxkBoCHoYrrU6mQooCePCsg_&sz=w800"
    ]
  },
  {
    "id": "233",
    "title": "2 Storey Terrace House",
    "address": "No. 18, Jalan Seri Mewah 2/5, Taman Seri Mewah, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 456000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "765 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "234",
    "title": "2.5 Storey Terrace House",
    "address": "No. 9, Jalan Kencana 15, Taman Kencana, 68000 Ampang, Selangor",
    "postcode": "68000",
    "state": "Selangor",
    "area": "Ampang",
    "reservePrice": 750000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "235",
    "title": "2 Storey Terrace House",
    "address": "No. 4, Jalan SV 2/2, Taman Desa Seri Vista, 43900 Sepang, Selangor",
    "postcode": "43900",
    "state": "Selangor",
    "area": "Sepang",
    "reservePrice": 405000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1eSNDYYk3L0Gw7H5lvoY4Z2D7BEj5aZNu&sz=w800"
    ]
  },
  {
    "id": "236",
    "title": "2 Storey Terrace House",
    "address": "No. 15, Jalan Inai 6A, Seksyen BB3, Bandar Bukit Beruntung, 48300, Rawang, Selangor",
    "postcode": "48300",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 410000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "658 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "237",
    "title": "2 Storey Terrace House",
    "address": "No. 19, Jalan Kajang East 4/2, Kajang East, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 477000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=19nZGoCdrFchKLcl40JeTY7K22T1W0qxG&sz=w800"
    ]
  },
  {
    "id": "238",
    "title": "Condominium",
    "address": "Unit No. B-10-5, 10th Floor, Blok B, Menara Sri Damansara, Jalan Magosa SD 10/1E, 52200 Bandar Sri Damansara,Petaling Jaya, Selangor",
    "postcode": "52200",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 360000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "098 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1df2G0a9MVAjRcfSNwaiyJokU0A1R6Itm&sz=w800"
    ]
  },
  {
    "id": "239",
    "title": "1 Storey Terrace House",
    "address": "No. C2 (Lot 4420), Jalan 1, Taman Tan Sri Manickavasagam, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 415000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "743 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "240",
    "title": "Service Apartment",
    "address": "Unit No. A-30-07, Block A, Ecosky Residence, Jalan Ipoh, Batu 6 1/2, 68100, Kuala Lumpur",
    "postcode": "68100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 473850,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "097 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "241",
    "title": "Condominium",
    "address": "Le Jardine Condominium, Jalan Pandan Indah 26, Pandan Indah, 55100, Kuala Lumpur",
    "postcode": "55100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 288000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "012 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1A4Zthu25zgDuAcs0p4YXFimJtBadOIVa&sz=w800"
    ]
  },
  {
    "id": "242",
    "title": "1 Storey Terrace House",
    "address": "Jalan 8A, Taman Tan Yew Lai, 58200, Kuala Lumpur",
    "postcode": "58200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 550000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "320 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VgNemN1c1hQcySLcs4LQCMr1lvt5a6e2&sz=w800"
    ]
  },
  {
    "id": "243",
    "title": "Condominium",
    "address": "Unit No. B-47-03, Residensi Awani 3, Jalan Santuari 2, 53200 Setapak, Kuala Lumpur",
    "postcode": "53200",
    "state": "Kuala Lumpur",
    "area": "Setapak",
    "reservePrice": 300000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "801 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Ou8DUtQnE1KnWd-1aktRd3bZbevPz1tI&sz=w800"
    ]
  },
  {
    "id": "244",
    "title": "Apartment",
    "address": "Unit No. 51-3-1, Abadi Indah Kondo, Jalan 3/109C, Taman Abadi Indah, 58100, Kuala Lumpur",
    "postcode": "58100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 230000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "829 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1SSB6FFLYqvPpZajVmsWMQ9XsiuyFDMJL&sz=w800",
      "https://drive.google.com/thumbnail?id=1VPJ7jXjU3rByNUnh_I_aTcI7UoTeTaOb&sz=w800"
    ]
  },
  {
    "id": "245",
    "title": "Condominium",
    "address": "Unit No. D-13-2, Endah Ria Condominium, Jalan 3/149E, Taman Sri Endah, 57000, Kuala Lumpur",
    "postcode": "57000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 320000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "947 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1gUup_o5w6FFEdFUfIGXtbxNMvCtS9Fd3&sz=w800"
    ]
  },
  {
    "id": "246",
    "title": "Commercial Retail Lot",
    "address": "Unit No. T077, Sungai Wang Plaza, Jalan Sultan Ismail, 55100, Kuala Lumpur",
    "postcode": "55100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 413100,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "635 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1bloJO_NLEZOgEH5hvG7dsxAuS7qu8zju&sz=w800",
      "https://drive.google.com/thumbnail?id=12ruCYeGsk3GkYlUTZvVnMDWBgKhQQu7u&sz=w800"
    ]
  },
  {
    "id": "247",
    "title": "Condominium",
    "address": "Unit No. H2-11-6, Tingkat 11, Jalan 2/76E, Menara Polo, Desa Pandan, 55100, Kuala Lumpur",
    "postcode": "55100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 450000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "485 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1VAHCsXw_S7nos3UAibR6RdakDgLYE7JU&sz=w800",
      "https://drive.google.com/thumbnail?id=1EUDlmtbXjMpNXblFtDk8VkpTfQW9E2ZH&sz=w800"
    ]
  },
  {
    "id": "248",
    "title": "2 Storey Terrace House",
    "address": "No. 20, Jalan Pandan Indah 4/9, Pandan Indah, 55100, Kuala Lumpur",
    "postcode": "55100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 670000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "076 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1zq6t92QkpN7uzLWguHssbh_iEpsRQD3C&sz=w800"
    ]
  },
  {
    "id": "249",
    "title": "Condominium",
    "address": "Unit No. C-4-4, 4th Floor, Block C, Menara Menjalara, Jalan 1/62B, Bandar Menjalara, 52200, Kuala Lumpur",
    "postcode": "52200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 292000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "980 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=11pwq1axvpf9HDrD0zrWDK-MffvC4NG76&sz=w800",
      "https://drive.google.com/thumbnail?id=1r_1QAE31P9nTe30MDYu3ObC_I-iArl4k&sz=w800"
    ]
  },
  {
    "id": "250",
    "title": "Residential Land",
    "address": "Lot 55113, Taman Tun Dr Ismail, 60000, Kuala Lumpur",
    "postcode": "55113",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 3600000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "201 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "251",
    "title": "1.5 Storey Terrace Factory",
    "address": "No. 38, Jalan 12/152, Jalan Puchong, Taman Perindustrian OUG, Batu 6, 58200, Kuala Lumpur",
    "postcode": "58200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 2000000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "702 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "252",
    "title": "Condominium",
    "address": "Unit No. C-18-03, Endah Regal Condominium, Blok C, Jalan 3/149E, Taman Sri Endah, 57000, Kuala Lumpur",
    "postcode": "57000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 340000,
    "auctionDate": "10th Sep 2026 (Thu)",
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
    "id": "253",
    "title": "Flat",
    "address": "Block 5, Jalan 5/149B, Taman Sri Endah, Bandar Baru Sri Petaling, 57000, Kuala Lumpur",
    "postcode": "57000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 146000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "646 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "254",
    "title": "Town House",
    "address": "No. 14, Jalan Taman Melati 2, Taman Melati, 53100, Kuala Lumpur",
    "postcode": "53100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 400000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "839 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "255",
    "title": "Service Apartment",
    "address": "Unit No. D-17-03, Residensi Vyne, No. 8, Jalan 1/108D, Sungai Besi, 57100, Kuala Lumpur",
    "postcode": "57100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 486000,
    "auctionDate": "10th Sep 2026 (Thu)",
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
    "id": "256",
    "title": "Apartment",
    "address": "Unit No. D-03-08, Block D, Flora Damansara, No. 1, Jalan PJU 8/9, Bandar Damansara Perdana, 47820 Petaling Jaya, Selangor",
    "postcode": "47820",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 126000,
    "auctionDate": "11th Sep 2026 (Fri)",
    "landArea": "—",
    "builtUp": "750 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1ZXY9X5xbn3Ht0ycSW1FGfUoELZlvGXBH&sz=w800",
      "https://drive.google.com/thumbnail?id=1DXd5TJvEjPl111hihvuB2HJ6BHN1dLoU&sz=w800"
    ]
  },
  {
    "id": "257",
    "title": "Condominium",
    "address": "Unit No. T2-5-10, Tower 2, Skyvilla, Persiaran Utara, D'Island Residence, 47130 Puchong, Selangor",
    "postcode": "47130",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 295200,
    "auctionDate": "11th Sep 2026 (Fri)",
    "landArea": "—",
    "builtUp": "023 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1jcF29EJlZkU2Xm8lZ90v5zIh5PbkOFEd&sz=w800"
    ]
  },
  {
    "id": "258",
    "title": "Flat",
    "address": "Unit No. 12-6-11, Pangsapuri Subang Hijauan, Jalan Bintang U5/33, Seksyen U5, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 86400,
    "auctionDate": "11th Sep 2026 (Fri)",
    "landArea": "—",
    "builtUp": "650 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1bNwNmC7c0bnAjnxvilWGWOYQgHskhCOc&sz=w800"
    ]
  },
  {
    "id": "259",
    "title": "Service Apartment",
    "address": "Unit No. B-11-08, BSP 21, Persiaran Saujana Putra Utama, Bandar Saujana Putra, 42610 Jenjarom, Selangor",
    "postcode": "42610",
    "state": "Selangor",
    "area": "Jenjarom",
    "reservePrice": 216000,
    "auctionDate": "11th Sep 2026 (Fri)",
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
    "id": "260",
    "title": "Apartment",
    "address": "Unit No. K7-L4-8, Rumah Pangsa Seri Kristana 7, Persiaran Seri Pristana 1, Seri Pristana, 47000 Sungai Buloh, Selangor",
    "postcode": "47000",
    "state": "Selangor",
    "area": "Sungai Buloh",
    "reservePrice": 70000,
    "auctionDate": "11th Sep 2026 (Fri)",
    "landArea": "—",
    "builtUp": "657 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=15QpZP62XQA5W1o1VEcHyWujJH8KZuykf&sz=w800"
    ]
  },
  {
    "id": "261",
    "title": "Condominium",
    "address": "Unit No. 2-18-11, Blok 2, Prima U1, Jalan Kerjaya, Seksyen U1, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 256000,
    "auctionDate": "11th Sep 2026 (Fri)",
    "landArea": "—",
    "builtUp": "980 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=15-9s-TjgEKnJdHAnY1O8qcqk6P7ePpwj&sz=w800"
    ]
  },
  {
    "id": "262",
    "title": "Small Office Home Office (SOHO)",
    "address": "Unit No. 22-03, Alinea Suites, No. 1, Presint 2.8, Jalan Perdagangan 14/4, Seksyen 14, 40000 Shah Alam, Selangor",
    "postcode": "40000",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 200000,
    "auctionDate": "11th Sep 2026 (Fri)",
    "landArea": "—",
    "builtUp": "441 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1noO5YJOaU5NLDOg4YzUsjki0wR73viDP&sz=w800"
    ]
  },
  {
    "id": "263",
    "title": "Condominium",
    "address": "Unit No. A-23-06, Residensi Sembilan Cheras, Jalan Suria Residen, 43200 Cheras, Selangor",
    "postcode": "43200",
    "state": "Selangor",
    "area": "Cheras",
    "reservePrice": 360000,
    "auctionDate": "11th Sep 2026 (Fri)",
    "landArea": "—",
    "builtUp": "216 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Yxyn3IrlYKNyS5e0y26jVGWAgBrbEZjU&sz=w800",
      "https://drive.google.com/thumbnail?id=16ofI6BN6W6gq63djtmclg_IPoKgGBhO-&sz=w800"
    ]
  },
  {
    "id": "264",
    "title": "Service Apartment",
    "address": "Unit No. A-16-17, Menara Simfoni, Jalan Simfoni 2, Balakong, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 280000,
    "auctionDate": "11th Sep 2026 (Fri)",
    "landArea": "—",
    "builtUp": "893 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=15lbgMeaEpjLt26bU68ZIWzCVQgVa3xJY&sz=w800",
      "https://drive.google.com/thumbnail?id=1loNFiSpeRuTKq0HHRpc8CpiogOJxpvUB&sz=w800"
    ]
  },
  {
    "id": "265",
    "title": "Service Apartment",
    "address": "Unit No. A-26-07, Residensi Sini, No. 2, Jalan Setia Perdana AZ U13/AZ, Seksyen U13, Setia Alam, 40170 Shah Alam, Selangor",
    "postcode": "40170",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 400000,
    "auctionDate": "11th Sep 2026 (Fri)",
    "landArea": "—",
    "builtUp": "926 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1f40xMp4vaf-UwPmxBtWX0QjuosQBDaTb&sz=w800"
    ]
  },
  {
    "id": "266",
    "title": "Apartment",
    "address": "Unit No. A-5-2, Block A, Pangsapuri Seri Perantau, Persiaran Sireh Junjung/KS4, 42000 Pelabuhan Klang, Selangor",
    "postcode": "42000",
    "state": "Selangor",
    "area": "Pelabuhan Klang",
    "reservePrice": 105000,
    "auctionDate": "11th Sep 2026 (Fri)",
    "landArea": "—",
    "builtUp": "657 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "267",
    "title": "Apartment",
    "address": "Unit No. E-19-01, Block E, Flora Damansara, No. 1, Jalan PJU 8/9, Bandar Damansara Perdana, 47820 Petaling Jaya, Selangor",
    "postcode": "47820",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 210000,
    "auctionDate": "11th Sep 2026 (Fri)",
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
    "id": "268",
    "title": "1 Storey Terrace House",
    "address": "Jalan 3B/KU11, Taman Desa Bukit Permata, Bukit Kapar, 42200 Kapar, Selangor",
    "postcode": "42200",
    "state": "Selangor",
    "area": "Kapar",
    "reservePrice": 324000,
    "auctionDate": "11th Sep 2026 (Fri)",
    "landArea": "—",
    "builtUp": "507 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1o92H2ArlaFCikQmSDtgv0dspGYVXLo2T&sz=w800"
    ]
  },
  {
    "id": "269",
    "title": "Service Apartment",
    "address": "Unit No. A-13-16, Block A, Jalan Zamrud Utama, Residensi Zamrud, Sungai Tangkas, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 260000,
    "auctionDate": "11th Sep 2026 (Fri)",
    "landArea": "—",
    "builtUp": "990 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Cv2XLlZQACzyNBiJjM3Kg7wO4NnN3yXb&sz=w800"
    ]
  },
  {
    "id": "270",
    "title": "Service Apartment",
    "address": "Unit No. KSA-G-18, Pangsapuri Kita Sejati, Persiaran Cybersouth Perdana, Cybersouth, 43800 Dengkil, Selangor",
    "postcode": "43800",
    "state": "Selangor",
    "area": "Dengkil",
    "reservePrice": 180000,
    "auctionDate": "11th Sep 2026 (Fri)",
    "landArea": "—",
    "builtUp": "850 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=12jIpRTu6iSjREsbdE39xenKf-JPg0kkG&sz=w800"
    ]
  },
  {
    "id": "271",
    "title": "2 Storey Terrace House",
    "address": "No. 10, Lorong Sultan Abdul Samad 45D, Bandar Sultan Suleiman, 42000 Pelabuhan Klang, Selangor",
    "postcode": "42000",
    "state": "Selangor",
    "area": "Pelabuhan Klang",
    "reservePrice": 440000,
    "auctionDate": "11th Sep 2026 (Fri)",
    "landArea": "—",
    "builtUp": "552 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1NVkpd_sfHAJtYMOqve-qqDp9eIkwNtS0&sz=w800"
    ]
  },
  {
    "id": "272",
    "title": "2 Storey Terrace House",
    "address": "No. 29, Lorong Raja Nala 6C, Di Jalan Bukit Kapar, 42200 Kapar, Selangor",
    "postcode": "42200",
    "state": "Selangor",
    "area": "Kapar",
    "reservePrice": 270000,
    "auctionDate": "11th Sep 2026 (Fri)",
    "landArea": "—",
    "builtUp": "700 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=101QspVZa_v5qcI_9fFj1mdL_6Kab_CCa&sz=w800"
    ]
  },
  {
    "id": "273",
    "title": "Apartment",
    "address": "Unit No. A-08-05, Pangsapuri Damai Senja, No. 2A, Jalan PJS 1/52, Taman Petaling Utama, 46000 Petaling Jaya, Selangor",
    "postcode": "46000",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 270000,
    "auctionDate": "11th Sep 2026 (Fri)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "274",
    "title": "Apartment",
    "address": "Unit No. A-502, Iris Apartment, Persiaran Saujana 4, Taman Saujana Utama, 47000 Sungai Buloh, Selangor",
    "postcode": "47000",
    "state": "Selangor",
    "area": "Sungai Buloh",
    "reservePrice": 180000,
    "auctionDate": "11th Sep 2026 (Fri)",
    "landArea": "—",
    "builtUp": "753 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "275",
    "title": "Apartment",
    "address": "Unit No. A-2-17, Block A, Jalan Bunga Raya 1, Apartment Kemuning, Taman Bunga Raya, 48300 Rawang, Selangor",
    "postcode": "48300",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 80000,
    "auctionDate": "11th Sep 2026 (Fri)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1wyC8B48eNkA1EdH_GGnOFBu7asXDOTQT&sz=w800"
    ]
  },
  {
    "id": "276",
    "title": "3 Storey Cluster Semi Detached House",
    "address": "No. 9, Jalan Tropicana Heights 2/3A, Tropicana Heights (Parkfield Residences), 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 1100000,
    "auctionDate": "11th Sep 2026 (Fri)",
    "landArea": "—",
    "builtUp": "211 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "277",
    "title": "Office Suite with mezzanine floor",
    "address": "Unit No. C1-12-02, 12th Floor, Block C1, Menara Seni Cheras (Arte Cheras), Jalan Cheras, Taman Midah, 56000, Kuala Lumpur",
    "postcode": "56000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 332000,
    "auctionDate": "11th Sep 2026 (Fri)",
    "landArea": "—",
    "builtUp": "570 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1mxaGQNuzxEGuVIx7OcT87RoanXQ1C2wy&sz=w800"
    ]
  },
  {
    "id": "278",
    "title": "Apartment",
    "address": "Unit No. C-23-08, Block C, Laman Seri Harmoni (LSH 33), No. 3, Jalan Batu Muda Tambahan 3, 51100, Sentul, Kuala Lumpur",
    "postcode": "51100",
    "state": "Kuala Lumpur",
    "area": "Sentul",
    "reservePrice": 340000,
    "auctionDate": "11th Sep 2026 (Fri)",
    "landArea": "—",
    "builtUp": "947 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1cyOZS3AwdAXg5XI41a2F8X-5C2aZpAql&sz=w800"
    ]
  },
  {
    "id": "279",
    "title": "Service Apartment",
    "address": "Unit No. 5-3, Medan Connaught, Jalan 3/144A, 56000, Kuala Lumpur",
    "postcode": "56000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 500000,
    "auctionDate": "11th Sep 2026 (Fri)",
    "landArea": "—",
    "builtUp": "141 sq.ft",
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
    "id": "280",
    "title": "Apartment",
    "address": "Unit No. 1-2-6-A, Blok 1, Jalan Rawang Mutiara 1, Taman Rawang Mutiara, 48000 Rawang, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 128000,
    "auctionDate": "14th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "661 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1ky4cNL0_pbgjIB9VGX0it_9QZwcnx-mY&sz=w800"
    ]
  },
  {
    "id": "281",
    "title": "Apartment",
    "address": "Unit No. D-05-02, Pangsapuri Ceria, Jalan TK 4/5, Taman Kinrara, Seksyen 4, 47100 Puchong, Selangor",
    "postcode": "47100",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 112000,
    "auctionDate": "14th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "650 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1ph4kQDS-HPEh_OU0qyOAN3ONXbvE6Mn6&sz=w800",
      "https://drive.google.com/thumbnail?id=1kV13kTEHiN9SXZRh6b6J249lxrbIUye-&sz=w800"
    ]
  },
  {
    "id": "282",
    "title": "1 Storey Terrace House",
    "address": "No. 10, Lorong Tan Sri Manickavasagam 2A (Lorong Manickavasagam 2A), Taman Menara Maju, 41200 (41000) Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "() Klang",
    "reservePrice": 364500,
    "auctionDate": "14th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "571 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1UYs5haidS6cKB0exd-w-Qxj_o0sOErdr&sz=w800"
    ]
  },
  {
    "id": "283",
    "title": "2 Storey Terrace House",
    "address": "Jalan Titian U8/41, Bukit Jelutong, Seksyen U8, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 1035000,
    "auctionDate": "14th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "250 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d4TqkhQT0jqIdTsrgFBl_Y2r2rj6zRel&sz=w800"
    ]
  },
  {
    "id": "284",
    "title": "2 Storey Detached House",
    "address": "Lot No. 11895, Jalan Haji Abdullah, Kampong Sungai Merab Hulu, 46350 Bangi, Selangor",
    "postcode": "11895",
    "state": "Selangor",
    "area": "Bangi",
    "reservePrice": 524880,
    "auctionDate": "14th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "000 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1C-XvX4taoyK8uDhg4TJ8_KaUXO77DD_M&sz=w800"
    ]
  },
  {
    "id": "285",
    "title": "2.5 Storey Terrace House",
    "address": "No. 9, Jalan SU 2B, Taman Sering Ukay, 68000 Ampang, Selangor",
    "postcode": "68000",
    "state": "Selangor",
    "area": "Ampang",
    "reservePrice": 1100000,
    "auctionDate": "14th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "647 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=19UeOHuno5fQUoqKqCBThtcBVXG6i77NJ&sz=w800"
    ]
  },
  {
    "id": "286",
    "title": "2 Storey Terrace House",
    "address": "No. 1, Jalan SP 6/3, Bandar Saujana Putra, 42610 Lebuhraya Eiite, Jenjarom, Selangor",
    "postcode": "42610",
    "state": "Selangor",
    "area": "Jenjarom",
    "reservePrice": 580000,
    "auctionDate": "14th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "900 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1opmDn-3IHZRIO6kT7vQbTMgkBb6qnKHm&sz=w800"
    ]
  },
  {
    "id": "287",
    "title": "2 Storey Terrace House",
    "address": "No. 18, Jalan SKJ 2/6, Taman Scientex Kundang Jaya, 48020 Rawang, Selangor",
    "postcode": "48020",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 391500,
    "auctionDate": "14th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "170 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1wwR1KYAM-RJrtcPH9z0J-udAVQdE_Eze&sz=w800"
    ]
  },
  {
    "id": "288",
    "title": "Bungalow",
    "address": "No. 16, Jalan 3/2A, Templer Height, Perangsang Templer Golf, 48000, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Selangor",
    "reservePrice": 5200000,
    "auctionDate": "14th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=121vyHNT7fW_oxpWiNOdPjmWXDvHhkJHl&sz=w800"
    ]
  },
  {
    "id": "289",
    "title": "3 Adjoining Parcel of Vacant Residential Land",
    "address": "No. 13, Jalan Merah Pulasan U9/4B, Kayangan Heights, Seksyen U9, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 940410,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "930 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1W_gmxWVPxGXLR2am1ZrjVIFaaLgfORl0&sz=w800"
    ]
  },
  {
    "id": "290",
    "title": "Bungalow Land",
    "address": "PT 80639, Jalan Senyum Bintang, Country Heights Kajang, 43000 Kajang, Selangor",
    "postcode": "80639",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 984150,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "538 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=14Iff-hPCYTlDJnvKFB1Z-NNd9oq7tHOI&sz=w800"
    ]
  },
  {
    "id": "291",
    "title": "2 Storey Terrace House",
    "address": "No. 29, Jalan Perkasa 25/16, Taman Sri Muda, Seksyen 25, 40400 Shah Alam, Selangor",
    "postcode": "40400",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 229635,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "840 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1tXpjjoQnhF6gGxXXqSlvUJ-28lWfMWgl&sz=w800"
    ]
  },
  {
    "id": "292",
    "title": "Duplex Town House",
    "address": "Unit No. E-99-B, Cyberia Smarthomes, Cyber 11, Persiaran Multimedia, 63000 Cyberjaya, Selangor",
    "postcode": "63000",
    "state": "Selangor",
    "area": "Cyberjaya",
    "reservePrice": 263000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "239 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1vEIO7xWSImX0uQEPKakr0mEV-vNbIpzn&sz=w800"
    ]
  },
  {
    "id": "293",
    "title": "Flat",
    "address": "Unit No. 10-04, Blok I, Rumah Pangsa Taman Taming Jaya, 43200 Cheras, Selangor",
    "postcode": "43200",
    "state": "Selangor",
    "area": "Cheras",
    "reservePrice": 81000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "527 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=183w9tvL0vLzFqViE2j94tnYuOV7OUEp4&sz=w800"
    ]
  },
  {
    "id": "294",
    "title": "1 Storey Terrace House",
    "address": "No. 110, Jalan Dato Yusof Shahbudin 21, Taman Sentosa, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 354780,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "050 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Gu0_g_yYCidwKXv8mCwVxgtgmAxWjR1e&sz=w800"
    ]
  },
  {
    "id": "295",
    "title": "1 Storey Terrace House",
    "address": "No. 8, Jalan Hamzah Alang 24, Taman Intan 6, Di Jalan Tahir Manan, 42200 Kapar, Selangor",
    "postcode": "42200",
    "state": "Selangor",
    "area": "Kapar",
    "reservePrice": 243000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1zS3wSPQaEP6a1aPq4_7j-AlaYcKjs8d_&sz=w800"
    ]
  },
  {
    "id": "296",
    "title": "Apartment",
    "address": "Unit No. A-14-24, Blok A, Mentari Court, Jalan PJS 8/9, Taman Seri Mentari, 46150 Petaling Jaya, Selangor",
    "postcode": "46150",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 202500,
    "auctionDate": "15th Sep 2026 (Tue)",
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
    "id": "297",
    "title": "2 Storey Cluster Semi Detached House",
    "address": "No. 3, Lorong Lautan Samudera 9/2A, Seksyen 9, 42300 Bandar Puncak Alam, Selangor",
    "postcode": "42300",
    "state": "Selangor",
    "area": "Bandar Puncak Alam",
    "reservePrice": 324000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "500 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1SHjT8Lm0wCqWSfZEbrP-RGX_pcbU5DL_&sz=w800"
    ]
  },
  {
    "id": "298",
    "title": "Apartment",
    "address": "Unit No. R02-18-07, Block R02 (On Site D'Cerrum B), Pangsapuri Serumpun (On Site D'Cerrum Pangsapuri Serumpun), Setia Ecohill, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 227000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "947 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Mg4n0vGH2i5v5o5j590hkp7leX5rpKio&sz=w800"
    ]
  },
  {
    "id": "299",
    "title": "1 Storey Terrace House",
    "address": "No. 83, Jalan Dato Abdul Hamid 27, Taman Sentosa, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 350000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "010 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Gu0_g_yYCidwKXv8mCwVxgtgmAxWjR1e&sz=w800"
    ]
  },
  {
    "id": "300",
    "title": "2 Storey Terrace House",
    "address": "No. 2, Jalan 12, Taman Putra, 68000 Ampang, Selangor",
    "postcode": "68000",
    "state": "Selangor",
    "area": "Ampang",
    "reservePrice": 710000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "316 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jWpsMbrPGPXeoOq_qajCqC92IfX4ylnD&sz=w800"
    ]
  },
  {
    "id": "301",
    "title": "Apartment",
    "address": "Unit No. Blok 27-04-12, Apartment Seroja, Jalan Arca U8/80, Bukit Jelutong, Seksyen U8, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 270000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "840 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=12j2EGNvLei6cx_gOuwmLXGyoQ_z9v99s&sz=w800"
    ]
  },
  {
    "id": "302",
    "title": "Apartment",
    "address": "Unit No. B-3-18, Pangsapuri Sri Mutiara, Jalan Putra Indah 9/1C, Putra Heights, 47650 Subang Jaya, Selangor",
    "postcode": "47650",
    "state": "Selangor",
    "area": "Subang Jaya",
    "reservePrice": 153000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "646 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=10BteZDcoGPIRFlWuAjjtrtKLqFqHlh6T&sz=w800"
    ]
  },
  {
    "id": "303",
    "title": "Condominium",
    "address": "Unit No. A-13-03, Block A, Desa Impiana, Jalan Prima Utama 2, Taman Puchong Prima, 47150 Puchong, Selangor",
    "postcode": "47150",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 288000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "044 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xJYgYADJ1BFpsRM5pMg3InV1gPAAmZFA&sz=w800"
    ]
  },
  {
    "id": "304",
    "title": "Service Condominium",
    "address": "Unit No. D-11-10, Block D (Taisho), Koi Tropika Condominium, Jalan Puchong, Batu 13 1/2, 47100 Puchong, Selangor",
    "postcode": "47100",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 300000,
    "auctionDate": "15th Sep 2026 (Tue)",
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
    "id": "305",
    "title": "2 Storey Terrace House",
    "address": "No. 45, Jalan Orbit 2/7, Bandar Mahkota Banting, 42700 Banting, Selangor",
    "postcode": "42700",
    "state": "Selangor",
    "area": "Banting",
    "reservePrice": 370000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1aMpJ-OXEqtqDxYvgGK25JD3qFYvfqt-I&sz=w800"
    ]
  },
  {
    "id": "306",
    "title": "Apartment",
    "address": "Unit No C-3-42, Blok Nipah, Pangsapuri Las Palmas, Jalan Desa Ria, Bandar Country Homes, 48000 Rawang, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 150000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "775 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=15eylhMSOztY09oM7npH7ClqyViBYGVOe&sz=w800"
    ]
  },
  {
    "id": "307",
    "title": "1 Storey Terrace House",
    "address": "No. 5, Jalan ST 1D/10, Taman Cempaka, Bandar Baru Salak Tinggi, 43900 Sepang, Selangor",
    "postcode": "43900",
    "state": "Selangor",
    "area": "Sepang",
    "reservePrice": 220000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "753 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1cNDlwjr25MVmcrbtK2KnJaI_LaRSD3Jf&sz=w800"
    ]
  },
  {
    "id": "308",
    "title": "2 Storey Terrace House",
    "address": "No. 46, Jalan Iris 7, Perumahan Jalan Iris, Taman Bunga Raya, 48300 Rawang, Selangor",
    "postcode": "48300",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 330000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "972 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1R2WnTR4hjYKuqYZ_RFDHnfJejaOCZhT8&sz=w800"
    ]
  },
  {
    "id": "309",
    "title": "Apartment",
    "address": "Blok 5, Pangsapuri Seri Jati, No. 2, Jalan Setia Gemilang U13/45C, 40170 Shah Alam, Selangor",
    "postcode": "40170",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 300000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "812 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HXzYELBnu0CK6-aROjaCqAQxu0QxJ309&sz=w800"
    ]
  },
  {
    "id": "310",
    "title": "Condominium",
    "address": "Unit No. A-610, Blok A, Palm Spring @ Damansara, No. 1, Jalan PJU 3/29, Kota Damansara, 47810 Petaling Jaya, Selangor",
    "postcode": "47810",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 370000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "001 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1XFX0uBe1EkSB_kBMlqlsCVh1pHioKLrA&sz=w800",
      "https://drive.google.com/thumbnail?id=1vKJul1Dct28zLcv7SsDPpHY5odiBx04I&sz=w800"
    ]
  },
  {
    "id": "311",
    "title": "Apartment",
    "address": "Unit No. B-16-16, Pangsapuri Damai Mewah B (On site known as Block B, Selesa I-Resort Apartment), Taman Damai Mewah, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 230000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "969 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1LfbElYxP4QorbWOO_XRbJcZ2Lwoi9uO8&sz=w800"
    ]
  },
  {
    "id": "312",
    "title": "Apartment",
    "address": "Unit No. B-5-15, Pangsapuri Sri Anggerik, Jalan Bandar Puchong Jaya, 47170 Puchong, Selangor",
    "postcode": "47170",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 174960,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "786 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1tLasfJpL-s11ootQcW15_qLzRm5PvLhF&sz=w800"
    ]
  },
  {
    "id": "313",
    "title": "1 Storey Terrace House",
    "address": "No. 54, Jalan Dato Abdul Hamid 9, Taman Sentosa, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 324000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "820 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Gu0_g_yYCidwKXv8mCwVxgtgmAxWjR1e&sz=w800"
    ]
  },
  {
    "id": "314",
    "title": "2 Storey Terrace House",
    "address": "No. 27, Jalan BM 2/5 Seksyen 2, Bandar Bukit Mahkota, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 500000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "990 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1QZw3CSaDSsOEyCBeYXhIoEdt7wpEMJKY&sz=w800"
    ]
  },
  {
    "id": "315",
    "title": "Terrace House",
    "address": "Jalan Dato Abdul Hamid 5, Taman Sentosa, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 430000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Gu0_g_yYCidwKXv8mCwVxgtgmAxWjR1e&sz=w800"
    ]
  },
  {
    "id": "316",
    "title": "2 Storey Bungalow House",
    "address": "No. 21 (Lot 127), Persiaran Cinta Alam, Country Heights Kajang, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 4200000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "103 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=14Iff-hPCYTlDJnvKFB1Z-NNd9oq7tHOI&sz=w800"
    ]
  },
  {
    "id": "317",
    "title": "Apartment",
    "address": "Unit No. 5B-06-01, Tingkat 6, Blok B, Wawasan 4/12, D'Kiara Apartment, 47160 Pusat Bandar Puchong, Selangor",
    "postcode": "47160",
    "state": "Selangor",
    "area": "Pusat Bandar Puchong",
    "reservePrice": 270000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "904 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=10CuCdDrGDYzYFhRL_iVVPjEAOhXNMlWM&sz=w800",
      "https://drive.google.com/thumbnail?id=1HYwa3effZqfqliSI0Z8o8sEGg7WrxT4j&sz=w800"
    ]
  },
  {
    "id": "318",
    "title": "Flat",
    "address": "Unit No. F-4-19, Blok F, Jalan Puchong Utama 7, Court 1, Taman Tasik Prima, 47160 Puchong, Selangor",
    "postcode": "47160",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 153000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "785 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1newZTa5tf-quWP2Cp_kaCVYZmX08xL4V&sz=w800",
      "https://drive.google.com/thumbnail?id=1dR8rJrgkfxFUeQybDYfsgd6Z_VBIAEZd&sz=w800"
    ]
  },
  {
    "id": "319",
    "title": "2 Storey Linked House",
    "address": "No. 20, Jalan Selasih U12/14C, Cahaya Alam Seksyen U12, 40170 Shah Alam, Selangor",
    "postcode": "40170",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 591300,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "646 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1PBpuJnNw80IzoaqTQhrDlGwpyHkTDbLF&sz=w800"
    ]
  },
  {
    "id": "320",
    "title": "2 Storey Terrace House",
    "address": "No. 43, Jalan 1/12, Taman Seri Jaromas, 42600 Jenjarom, Selangor",
    "postcode": "42600",
    "state": "Selangor",
    "area": "Jenjarom",
    "reservePrice": 500000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1w8gvbYhkKPt_eC5u3ni1oUVX_2jmfqcP&sz=w800"
    ]
  },
  {
    "id": "321",
    "title": "Apartment",
    "address": "Unit No. 348, Block 3, Lafite Apartment, Jalan SS 17/1G, 47500 Subang Jaya, Selangor",
    "postcode": "47500",
    "state": "Selangor",
    "area": "Subang Jaya",
    "reservePrice": 369000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "936 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1ojR4zspWbJFIqoDuJjVipO6QJR6WsZTe&sz=w800",
      "https://drive.google.com/thumbnail?id=14Ry5FE_Hwvd_HX-f161-nTwUYMxnBMGr&sz=w800"
    ]
  },
  {
    "id": "322",
    "title": "2 Storey Semi Detached House",
    "address": "No. 2A, Jalan Impian 2B/KU7, Taman Seri Residensi, 42200 Kapar, Selangor",
    "postcode": "42200",
    "state": "Selangor",
    "area": "Kapar",
    "reservePrice": 738000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "800 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1fmzb1BoV62nKWsLljlvrUgRzxbPfsfWe&sz=w800"
    ]
  },
  {
    "id": "323",
    "title": "Condominium",
    "address": "Unit No. F-2213, Blok F, Palm Spring @ Damansara, No. 1, Jalan PJU 3/29, Kota Damansara, 47810 Petaling Jaya, Selangor",
    "postcode": "47810",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 348000,
    "auctionDate": "15th Sep 2026 (Tue)",
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
    "id": "324",
    "title": "2 Storey Terrace House",
    "address": "No. 14, Jalan Meringin Indah 1, Taman Meringin Indah, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 650000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Q9_31FJpGSfbIoriNTe59Bp8awjo-oI8&sz=w800"
    ]
  },
  {
    "id": "325",
    "title": "Condominium",
    "address": "Unit No. D-3A-09, Tiara Parkhomes, Jalan Bukit Ria, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 410000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "259 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1eSTHXbXwNRePYZKUZ2I60JSaUGEj_m-a&sz=w800"
    ]
  },
  {
    "id": "326",
    "title": "Apartment",
    "address": "Unit No. B-304, Blok B, Pangsapuri Sri Puteri, Jalan UP 2/1, Taman Ukay Perdana, 68000 Ampang, Selangor",
    "postcode": "68000",
    "state": "Selangor",
    "area": "Ampang",
    "reservePrice": 250000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "829 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "327",
    "title": "Bungalow Land",
    "address": "No.13, Jalan Mihrab U8/12, Seksyen U8, Bukit Jelutong, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 1250000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "461 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1d4TqkhQT0jqIdTsrgFBl_Y2r2rj6zRel&sz=w800"
    ]
  },
  {
    "id": "328",
    "title": "2 Storey Terrace House",
    "address": "No.48, Jalan Semanja 2/7, Tamana Semanja, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 780000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "647 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "329",
    "title": "Apartment",
    "address": "Unit No. 403, Block 41, Seksyen 24, 40300 Shah Alam, Selangor",
    "postcode": "40300",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 153900,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "753 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "330",
    "title": "Service Apartment",
    "address": "Unit No. A-32-07, Residensi Palmera, Laman Puteri 3, Bandar Puteri Bangi, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 360000,
    "auctionDate": "15th Sep 2026 (Tue)",
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
    "id": "331",
    "title": "2 Storey Detached House with Swimming Pool @ Sungai Penchala / TTDI, Taman Tun Dr Ismail",
    "address": "No. 6 (Lot 55079 & Lot 55080), Jalan Puncak Penchala, Puncak Penchala, Off Jalan Penchala Link, 60000, Kuala Lumpur",
    "postcode": "55079",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 3780000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "112 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1pl67hY38ClFW9hm5MITHgBEZPRRHngJn&sz=w800"
    ]
  },
  {
    "id": "332",
    "title": "Service Apartment",
    "address": "Unit No. C-21-08, Tower C, Megan Legasi @ Millerz Square, No. 357, Jalan Kelang Lama, 58000, Kuala Lumpur",
    "postcode": "58000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 560000,
    "auctionDate": "15th Sep 2026 (Tue)",
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
    "id": "333",
    "title": "Condominium",
    "address": "9th Floor, Jade Tower, Serimas Condominium, Jalan 4/89A, Batu 3 1/2, Jalan Cheras, 56000, Kuala Lumpur",
    "postcode": "56000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 370000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "367 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1V51V43DBqaiDFilwYFHm-4xQFsXZLJD9&sz=w800",
      "https://drive.google.com/thumbnail?id=1GD5JJmrTOuUchvpZuCsMF5uX1dd869p1&sz=w800"
    ]
  },
  {
    "id": "334",
    "title": "Apartment",
    "address": "Vista Saujana, Jalan Wangsa 2/6, Taman Wangsa Permai, 52200 Kepong, Selangor",
    "postcode": "52200",
    "state": "Selangor",
    "area": "Kepong",
    "reservePrice": 270000,
    "auctionDate": "17th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "001 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1fHoq3rBva8DYg-3IDoG-dKmR3NlJigwH&sz=w800"
    ]
  },
  {
    "id": "335",
    "title": "Condominium",
    "address": "Unit No. 7A-03-10, Tiara Intan Condominium, Jalan Bukit Indah 3/19, Taman Bukit Indah, 68000, Ampang, Selangor",
    "postcode": "68000",
    "state": "Selangor",
    "area": "Ampang",
    "reservePrice": 350000,
    "auctionDate": "17th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "904 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1kMW5TYY1Nd12tpjd9UJX7o1_JzmbQcQW&sz=w800"
    ]
  },
  {
    "id": "336",
    "title": "Apartment",
    "address": "Suite 1602A, Casa Mila Tower, Jalan Bukit Idaman 3/1, Bukit Idaman, 68100, Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 250000,
    "auctionDate": "17th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "818 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1l8vbooS_d7_xXV9RI1M_mLar0CjTWMRf&sz=w800"
    ]
  },
  {
    "id": "337",
    "title": "2 Storey Terrace House",
    "address": "No. 15, Jalan Bestari 3/3, Puncak Bestari, 42300 Bandar Puncak Alam, Selangor",
    "postcode": "42300",
    "state": "Selangor",
    "area": "Bandar Puncak Alam",
    "reservePrice": 459270,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "290 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jHusB6jrHIadzeBjPCAT1Z8mfwHWWPMD&sz=w800"
    ]
  },
  {
    "id": "338",
    "title": "Apartment",
    "address": "Unit No. B9-4, Block B, Gardenia Court, Jalan SG 9/21, Taman Sri Gombak, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 222345,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "893 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1cZ1o4MioJVKKUthe5aEpMLHMgGJli6OU&sz=w800"
    ]
  },
  {
    "id": "339",
    "title": "Apartment",
    "address": "Unit No. B-3-24, Blok B, Pangsapuri Baiduri, Bandar Tasik Kesuma, 43700 Beranang, Selangor",
    "postcode": "43700",
    "state": "Selangor",
    "area": "Beranang",
    "reservePrice": 72900,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "764 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1e_zLExGAXtMDqPORj8OLgZvUBlaFpNP0&sz=w800",
      "https://drive.google.com/thumbnail?id=1YoeaOBfq6vNuzwri983ZMPJSscbm-9oA&sz=w800"
    ]
  },
  {
    "id": "340",
    "title": "2 Storey Detached House",
    "address": "No. 2, Jalan BM 1/2, Seksyen 1, Bandar Bukit Mahkota, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 1890000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "500 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1YwYt-GaLdUyNg3MM6fk34umwpTQM1LBU&sz=w800"
    ]
  },
  {
    "id": "341",
    "title": "Apartment",
    "address": "Unit No. 1A-4-04, Block A, Rose Apartment, Jalan Bukit Indah 1/20, Taman Bukit Indah, 68000 Ampang, Selangor",
    "postcode": "68000",
    "state": "Selangor",
    "area": "Ampang",
    "reservePrice": 162000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "753 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13n_2ywwpPg9zJg1sT48yBiV3RpAOsJb5&sz=w800"
    ]
  },
  {
    "id": "342",
    "title": "2 Storey Cluster Semi Detached House",
    "address": "No. 22, Jalan Alam Suria 16/34, Nusa Suria, Seksyen 16, 42300 Bandar Puncak Alam, Selangor",
    "postcode": "42300",
    "state": "Selangor",
    "area": "Bandar Puncak Alam",
    "reservePrice": 520000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1NiI99xZcJIF5sModT8zW9C1h383nxvVP&sz=w800"
    ]
  },
  {
    "id": "343",
    "title": "Apartment",
    "address": "Unit No. 15-04-06, Pangsapuri Melati, Jalan Metafasa U16/3, Seksyen U16, Taman Bukit Subang, 40160 Shah Alam, Selangor",
    "postcode": "40160",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 130000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "656 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1-KDrC4DQAI2m6CEQTPO0Wxv2J1w2zQPg&sz=w800"
    ]
  },
  {
    "id": "344",
    "title": "2 Storey Terrace House",
    "address": "No. 55, Jalan Orbit 2/7, Bandar Mahkota Banting, 42700 Banting, Selangor",
    "postcode": "42700",
    "state": "Selangor",
    "area": "Banting",
    "reservePrice": 315900,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1aMpJ-OXEqtqDxYvgGK25JD3qFYvfqt-I&sz=w800"
    ]
  },
  {
    "id": "345",
    "title": "2 Storey Terrace House",
    "address": "No. 28, Jalan Caledonia 2A/4, 45600 Bestari Jaya, Selangor",
    "postcode": "45600",
    "state": "Selangor",
    "area": "Bestari Jaya",
    "reservePrice": 450000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "615 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1EPd9Ms3_oBvOkxMpO9f5L-bThwu7xthh&sz=w800"
    ]
  },
  {
    "id": "346",
    "title": "Service Apartment",
    "address": "Unit No. A-17-08, Block A, Residensi Amara, Jalan Raintree Utama, Taman Raintree, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 330000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "990 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1PGPCvCNGL_SDWCXw7ciboiqABGaBzvsT&sz=w800",
      "https://drive.google.com/thumbnail?id=1ykLqMeXx5oMRlAFD-oL4uHLOG_fFQBmN&sz=w800"
    ]
  },
  {
    "id": "347",
    "title": "Shop House",
    "address": "Unit No. 3-1B, Jalan Hulubalang 37A, Taman Millenium Sentosa, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 108000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "710 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "348",
    "title": "2 Storey Terrace House",
    "address": "No. 42, Jalan Alamanda 10/6, Sari Alamanda, 48000 Rawang, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 480000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "760 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xVk9STf9pZq6mgDH5qXClBBG_68Qk94j&sz=w800"
    ]
  },
  {
    "id": "349",
    "title": "1 Storey Semi Detached House",
    "address": "No. 21, Jalan Helang Tiram 2, Pantai Sepang Putra, 43950 Sungai Pelek, Selangor",
    "postcode": "43950",
    "state": "Selangor",
    "area": "Sungai Pelek",
    "reservePrice": 280000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "886 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "350",
    "title": "2 Storey Terrace House",
    "address": "Premises No. 45, Jalan Terap, Taman Palm Grove, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 540000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "600 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "351",
    "title": "2 Storey Terrace House",
    "address": "Premises No. 21, Jalan Frekuensi U16/114, Elmina East, Section U16, 40160, Shah Alam, Selangor",
    "postcode": "40160",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 1250000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "994 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1v-a3jqK90_lxShG8RxuaStN3Nvj-77RO&sz=w800"
    ]
  },
  {
    "id": "352",
    "title": "Commercial Land",
    "address": "Lot 37653, Jalan Sinar Pagi, Country Heights, 43000 Kajang, Selangor",
    "postcode": "37653",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 55000000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=14Iff-hPCYTlDJnvKFB1Z-NNd9oq7tHOI&sz=w800"
    ]
  },
  {
    "id": "353",
    "title": "2 Storey Terrace House",
    "address": "No. 20, Lorong Kristal 7H, Bandar Parklands, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 675000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "800 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1WpiRnw2jfxTHhCCAOeS8bZFjPzqiTiXB&sz=w800"
    ]
  },
  {
    "id": "354",
    "title": "2.5 Storey Bungalow House",
    "address": "No. 19, Jalan U2/49, Palmview Bungalows Saujana Resort, Seksyen U2, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 7400000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "383 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "355",
    "title": "1 Storey Terrace House",
    "address": "No. 33, Jalan Angkasa 1C/6, Bandar Mahkota Banting, 42700 Banting, Selangor",
    "postcode": "42700",
    "state": "Selangor",
    "area": "Banting",
    "reservePrice": 360000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "646 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1aMpJ-OXEqtqDxYvgGK25JD3qFYvfqt-I&sz=w800"
    ]
  },
  {
    "id": "356",
    "title": "Apartment",
    "address": "Unit No. B-40-3A, The Goodwood Residence, No. 8, Jalan Kerinchi Kanan, Bangsar South, 59200, Kuala Lumpur",
    "postcode": "59200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 990000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Kz8pZE6OzNNoVEjLGmPGWtSYoKYjW_SB&sz=w800"
    ]
  },
  {
    "id": "357",
    "title": "Apartment",
    "address": "Unit No. B-06-15, Blok B, Damansara Suria Apartment, Taman KIP, Kepong, 52100, Kuala Lumpur",
    "postcode": "52100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 279000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "947 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1wPG6vX91ZwYodMIr5oGL52zQcliYgLyM&sz=w800"
    ]
  },
  {
    "id": "358",
    "title": "2 Storey Detached House",
    "address": "No. 7A, Jalan Mutiara, Gombak Setia, 53100, Kuala Lumpur",
    "postcode": "53100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 810000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "511 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=15t4q2ak0X-Hgxx19Vtd9GtNkG_1T06w7&sz=w800"
    ]
  },
  {
    "id": "359",
    "title": "Terrace House",
    "address": "No. 500, Jalan F14, Taman Melawati, 53100, Kuala Lumpur",
    "postcode": "53100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 750000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "259 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1KlxthQyBcyvaZGflJJ-7kZzUHH8NbA3N&sz=w800"
    ]
  },
  {
    "id": "360",
    "title": "2 Storey Terrace House",
    "address": "No. 29, Jalan PJS 2C/11, PJS 2, 46000 Petaling Jaya, Selangor",
    "postcode": "46000",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 277100,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "344 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=16A9dypHG9jVA2YzYToQKGxTy3zJxole7&sz=w800"
    ]
  },
  {
    "id": "361",
    "title": "Town House",
    "address": "Unit No. 33-3A, Kondo Sri Mahligai, Jalan 9/20, Seksyen 9, 40100 Shah Alam, Selangor",
    "postcode": "40100",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 324000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "065 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=15OFePVel2-zR3p1dVr52046j_EInbWsO&sz=w800"
    ]
  },
  {
    "id": "362",
    "title": "2 Storey Terrace House",
    "address": "No. 35, Jalan Alam Suria 15/3/1, Seksyen 15, 42300 Bandar Puncak Alam, Selangor",
    "postcode": "42300",
    "state": "Selangor",
    "area": "Bandar Puncak Alam",
    "reservePrice": 468000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1NiI99xZcJIF5sModT8zW9C1h383nxvVP&sz=w800"
    ]
  },
  {
    "id": "363",
    "title": "3 Storey Terrace House",
    "address": "No. 10, Jalan Denai Camelia 1, Camelia (Fasa 1B), Taman Sari, 48000 Rawang, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 900000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "368 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "364",
    "title": "2 Storey Terrace House",
    "address": "No. 33, Lorong Sungai Puloh 9, Off Jalan Haji Sirat, Taman Klang Utama, 42100 Klang, Selangor",
    "postcode": "42100",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 350000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "880 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1841v5SvHhiF-ppB9bTYD51A_KhisykGs&sz=w800"
    ]
  },
  {
    "id": "365",
    "title": "2 Storey Terrace House",
    "address": "No. 61, Jalan Zaitun 8/3, Bandar Hill park, 42300 Bandar Puncak Alam, Selangor",
    "postcode": "42300",
    "state": "Selangor",
    "area": "Bandar Puncak Alam",
    "reservePrice": 500000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "647 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1mxHwl2hJhhq_lPJYXdLS08Te7zvJBIbx&sz=w800"
    ]
  },
  {
    "id": "366",
    "title": "2 Storey Terrace House",
    "address": "No. 18, Jalan Fauna 3/27, Bandar Rimbayu (Fauna), 42500 Telok Panglima Garang, Selangor",
    "postcode": "42500",
    "state": "Selangor",
    "area": "Telok Panglima Garang",
    "reservePrice": 620000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "173 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1XNkXEe4RHv0vZjZaAp0o_EWmTh_HhoVu&sz=w800"
    ]
  },
  {
    "id": "367",
    "title": "Service Apartment",
    "address": "Unit No. B-29-09, Residensi Palmera, Laman Puteri 3, Bandar Puteri Bangi, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 380000,
    "auctionDate": "22nd Sep 2026 (Tue)",
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
    "id": "368",
    "title": "2 Storey Terrace House",
    "address": "No. 92, Jalan Palma 1/4, Bandar Hillpark, 42300 Bandar Puncak Alam, Selangor",
    "postcode": "42300",
    "state": "Selangor",
    "area": "Bandar Puncak Alam",
    "reservePrice": 730000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "106 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1mxHwl2hJhhq_lPJYXdLS08Te7zvJBIbx&sz=w800"
    ]
  },
  {
    "id": "369",
    "title": "2 Storey Terrace House",
    "address": "No. 32, Jalan BSC 4B/7, Bandar Seri Coalfields, Presint 4B1, 47000 Sungai Buloh, Selangor",
    "postcode": "47000",
    "state": "Selangor",
    "area": "Sungai Buloh",
    "reservePrice": 950000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "522 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jVKpyhrZIC1P5YAtgiXC57NhvKihKVTO&sz=w800"
    ]
  },
  {
    "id": "370",
    "title": "Service Apartment",
    "address": "Unit No. A-36-06, Tower A, Sensory Residence, Jalan Southville 1, Southville City, 43800 Dengkil, Selangor",
    "postcode": "43800",
    "state": "Selangor",
    "area": "Dengkil",
    "reservePrice": 200000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "549 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xPs23092N7_V_6xMvsuub24nePO8sM2m&sz=w800",
      "https://drive.google.com/thumbnail?id=1Akm3-kH9PRzZMN-JMpjb_baO1vVl_XVk&sz=w800",
      "https://drive.google.com/thumbnail?id=1NZWQSsd2nmN94XQjymDSNdIeVpNnQzuH&sz=w800"
    ]
  },
  {
    "id": "371",
    "title": "1 Storey Terrace House",
    "address": "No. 30, Jalan Ara 3/KU14, Taman Tok Muda Sejahtera, 42200 Kapar, Selangor",
    "postcode": "42200",
    "state": "Selangor",
    "area": "Kapar",
    "reservePrice": 410000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "604 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Zvpp28t0OKQGctd3y9Wj-g0pYdPjrJRx&sz=w800"
    ]
  },
  {
    "id": "372",
    "title": "2 Storey Terrace House",
    "address": "No. 52, Jalan Puteri 7/6, Bandar Puteri, 47100 Puchong, Selangor",
    "postcode": "47100",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 810000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=16WRYhYH1luCMldvBhEFRGs6fM_EbwW5X&sz=w800"
    ]
  },
  {
    "id": "373",
    "title": "1 Storey Terrace House",
    "address": "No. 64, Jalan Sempilau 15, Taman Bayu Indah, Morib, 42700 Banting, Selangor",
    "postcode": "42700",
    "state": "Selangor",
    "area": "Banting",
    "reservePrice": 333000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "819 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1SKFebSLfJBILyG258_uEyd92uMh5r8s4&sz=w800"
    ]
  },
  {
    "id": "374",
    "title": "Condominium",
    "address": "Unit No. B-18-5, Block B, Vista Hijauan (Greenview Residence), Persiaran Sungai Long 2, Bandar Sungai Long, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 400000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "356 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1z_XYqa208-GNWY_ZkI1M0umiMUedfX9m&sz=w800"
    ]
  },
  {
    "id": "375",
    "title": "2 Storey Terrace House",
    "address": "No. 19, Jalan Akasia 12/KS6, Bandar Botanik, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 891000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "315 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=19-qrrwHakotx4bE_v2RQEknd63TCm7ca&sz=w800"
    ]
  },
  {
    "id": "376",
    "title": "Condominium",
    "address": "Unit No. A-31-03, Kiara 1888, No. 17, Jalan Kiara 3, Mont Kiara, 50480, Kuala Lumpur",
    "postcode": "50480",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 1094000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "713 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1XosovfGfqxt48-3RNkLbrn1o6ilE1ySw&sz=w800"
    ]
  },
  {
    "id": "377",
    "title": "Service Apartment",
    "address": "Unit No. 19-10, Idaman KL 128 (Saville Residence), No. 128, Jalan Klang Lama, 58000, Kuala Lumpur",
    "postcode": "58000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 610000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "389 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1TycpbqrRsrmMOsZLRjSGZ4D_ADcEKMiE&sz=w800"
    ]
  },
  {
    "id": "378",
    "title": "Apartment",
    "address": "Unit No. D-506, Block D, Pandan Terrace, Jalan Perdana, Pandan Perdana, 53300, Kuala Lumpur",
    "postcode": "53300",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 220000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "829 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1KvXCYVYvS241UODtEXX-8z5lqt3tZ1vc&sz=w800"
    ]
  },
  {
    "id": "379",
    "title": "Apartment",
    "address": "Unit No. 18, Blok C (Chryssa), Astaria Apartment, Jalan Kosas Utama, Taman Kosas, 68000 Ampang, Selangor",
    "postcode": "68000",
    "state": "Selangor",
    "area": "Ampang",
    "reservePrice": 177000,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "936 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1K4FLnNrrp3fbW13nJje-Z-kK0kjsdwYT&sz=w800"
    ]
  },
  {
    "id": "380",
    "title": "Service Apartment",
    "address": "Pavilion (Le Pavilion), Jalan Puteri 7/13, Bandar Puteri, 47100 Puchong, Selangor",
    "postcode": "47100",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 473850,
    "auctionDate": "23rd Sep 2026 (Wed)",
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
    "id": "381",
    "title": "Apartment",
    "address": "Unit No. 01-07-05, Block 1, Pangsapuri Seri Jati, No. 2, Jalan Setia Gemilang U13/45C, 40170 Shah Alam, Selangor",
    "postcode": "40170",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 243000,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "818 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HXzYELBnu0CK6-aROjaCqAQxu0QxJ309&sz=w800"
    ]
  },
  {
    "id": "382",
    "title": "2 Storey Terrace House",
    "address": "No. 26, Jalan Ecohill 1/1D, Setia Ecohill, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 522000,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "860 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1fvRyyVh2sjmAarpN6newXit9PeS1_W-G&sz=w800"
    ]
  },
  {
    "id": "383",
    "title": "Apartment",
    "address": "Unit No. A-5-01, Pangsapuri Akasia, Persiaran Kasuarina, Bandar Botanik, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 243000,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "753 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1ssdfFnSMOU14fTbupzvu5lQYZVfWkcpC&sz=w800"
    ]
  },
  {
    "id": "384",
    "title": "1 Storey Terrace House",
    "address": "No. 5, Jalan AP 1C/9, Alam Perdana, 42300 Bandar Puncak Alam, Selangor",
    "postcode": "42300",
    "state": "Selangor",
    "area": "Bandar Puncak Alam",
    "reservePrice": 261000,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "764 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1RdtAWs7mxnhXn3qsI82-gGPApbi3n6A4&sz=w800"
    ]
  },
  {
    "id": "385",
    "title": "Apartment",
    "address": "Block 11, Tingkat 1, Rumah Pangsa PKNS, Jalan Dawai 16/2, Seksyen 16, 40200 Shah Alam, Selangor",
    "postcode": "40200",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 100000,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "560 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1KrveDWWF9zcUuEpgtlYKhrNOV66RcSga&sz=w800"
    ]
  },
  {
    "id": "386",
    "title": "Apartment",
    "address": "Unit No. C-410, Block C, Saujana Apartment, No. 1, Jalan PJU 10/1C, Damansara Damai, 47830 Petaling Jaya, Selangor",
    "postcode": "47830",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 200000,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "710 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=17xvqg8C7nYWfitcW2LCnqSqR9HMDV8Ga&sz=w800"
    ]
  },
  {
    "id": "387",
    "title": "2 Storey Cluster House",
    "address": "No. 12, Jalan Ecohill 7/3L, Setia Ecohill 2, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 650000,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "920 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1pKpMaJsflhJL6QD11kGoXkFDbPb6AIJ2&sz=w800"
    ]
  },
  {
    "id": "388",
    "title": "Apartment",
    "address": "Unit No. 2C-03-09, Pangsapuri Merdeka Villa, Jalan Merdeka Permai 1, 68000 Ampang, Selangor",
    "postcode": "68000",
    "state": "Selangor",
    "area": "Ampang",
    "reservePrice": 280000,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "926 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1m6qErKsyxM4DyZNEr3s_zYnWaHu367FS&sz=w800"
    ]
  },
  {
    "id": "389",
    "title": "Apartment",
    "address": "Jalan Hulubalang 28, Taman Sentosa, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 80000,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "797 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Gu0_g_yYCidwKXv8mCwVxgtgmAxWjR1e&sz=w800"
    ]
  },
  {
    "id": "390",
    "title": "2 Storey Terrace House",
    "address": "Jalan Putra Indah 9/13, Putra Heights, 47650 Subang Jaya, Selangor",
    "postcode": "47650",
    "state": "Selangor",
    "area": "Subang Jaya",
    "reservePrice": 800000,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=14BpKJy6og_4Q535bTH9M1FGBty5p8cH1&sz=w800"
    ]
  },
  {
    "id": "391",
    "title": "2 Storey Terrace House",
    "address": "No. 2A, Jalan Aman Serenia 11/12, Bandar Serenia (Anira), 43900 Sepang, Selangor",
    "postcode": "43900",
    "state": "Selangor",
    "area": "Sepang",
    "reservePrice": 600000,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "401 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1FCE6tT9PJ_uZXEDvK9tclK2C3dBSDN-Y&sz=w800"
    ]
  },
  {
    "id": "392",
    "title": "Office Unit",
    "address": "Unit No. 15E, Block 1, Worldwide Business Park, Jalan Tinju 13/50, Seksyen 13, 40100 Shah Alam, Selangor",
    "postcode": "40100",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 263250,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=14b-tiiDKEtNI6Afb0Q-n9dBwREcwNG3M&sz=w800"
    ]
  },
  {
    "id": "393",
    "title": "Terrace House",
    "address": "Jalan Cendana 2, Taman Salak Perdana, 43900 Sepang, Selangor",
    "postcode": "43900",
    "state": "Selangor",
    "area": "Sepang",
    "reservePrice": 530000,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Iqup1yZ1mzlzhdoXIC0AKyPgadyTeZuP&sz=w800",
      "https://drive.google.com/thumbnail?id=1hwCBFr2SUnAKdB10vWHEdDqYetIG2d_2&sz=w800"
    ]
  },
  {
    "id": "394",
    "title": "Apartment",
    "address": "Unit No. H-3-3, Puchong Permata 3, Jalan Persiaran Permai, 47100 Puchong, Selangor",
    "postcode": "47100",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 240000,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "850 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1NXjFFAFEBSR2In5G2TGMsDZkmJEb1dFN&sz=w800",
      "https://drive.google.com/thumbnail?id=1oM1ZiltjsvyElvEQZhuVsNtIivO-v3es&sz=w800"
    ]
  },
  {
    "id": "395",
    "title": "2 Storey Terrace House",
    "address": "No. 43, Jalan Tar Timur 3A, Taman Anggun Residensi, 48000 Rawang, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 690000,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "900 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "396",
    "title": "Town House",
    "address": "No. 8, 28 Residences, Jalan Orkid 2/1,Taman Orkid, 43900 Sepang, Selangor",
    "postcode": "43900",
    "state": "Selangor",
    "area": "Sepang",
    "reservePrice": 450000,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "397",
    "title": "Duplex Service Apartment",
    "address": "Unit No. 19-11, 19th Floor, Diamond Regency, No. 18, Jalan Semarak Api 2 (Previously Jalan 3/50), Off Jalan Gombak, 53000, Kuala Lumpur",
    "postcode": "53000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 298170,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "398",
    "title": "Apartment",
    "address": "Unit No. VS-5-25, Vista Saujana, Jalan Wangsa 2/6, Taman Wangsa Permai, 52200, Kuala Lumpur",
    "postcode": "52200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 171242.1,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "958 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1L3UIQZ1jpMpd5A5gLa7DzJ1cyG_qHBC6&sz=w800"
    ]
  },
  {
    "id": "399",
    "title": "Desa Villa Condominium",
    "address": "Unit No. 24-5-2, Blok 24, Desa Villa Condominium, Jalan Bukit Desa 3, Taman Bukit Desa, 58100, Kuala Lumpur",
    "postcode": "58100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 405000,
    "auctionDate": "23rd Sep 2026 (Wed)",
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
    "id": "400",
    "title": "Apartment",
    "address": "Villa Mewah, Jalan Perkasa, Taman Salak Selatan, 57100, Kuala Lumpur",
    "postcode": "57100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 178200,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "796 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "401",
    "title": "Apartment",
    "address": "Block A, Anjung Hijau, Jalan 1/155B, Bukit Jalil, 57000, Kuala Lumpur",
    "postcode": "57000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 333000,
    "auctionDate": "23rd Sep 2026 (Wed)",
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
    "id": "402",
    "title": "Condominium",
    "address": "Unit No. B-18-7, Vista Kiara Condominium, No. 7, Jalan Kiara 3, Bukit Kiara, 50480, Kuala Lumpur",
    "postcode": "50480",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 630000,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1eysz5XcM2knSdjrSmDfvoW9-rPGCGhWM&sz=w800"
    ]
  },
  {
    "id": "403",
    "title": "Office Lot",
    "address": "No. 16-5, Menara Permata Damansara, Jalan Damansara, 60000, Kuala Lumpur",
    "postcode": "60000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 774000,
    "auctionDate": "23rd Sep 2026 (Wed)",
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
    "id": "404",
    "title": "Service Apartment",
    "address": "Unit No. C-3-1, Vogue Tower C Mont Kiara Verve Suites, Jalan Kiara 5, Mont Kiara, 50480, Kuala Lumpur",
    "postcode": "50480",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 800000,
    "auctionDate": "23rd Sep 2026 (Wed)",
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
    "id": "405",
    "title": "Service Apartment",
    "address": "Unit No. B-23-1, Block B, Putra Majestik, Jalan Kasipillay, Off Jalan Ipoh, 51200, Kuala Lumpur",
    "postcode": "51200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 320000,
    "auctionDate": "23rd Sep 2026 (Wed)",
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
    "id": "406",
    "title": "2 Storey Terrace House",
    "address": "No. 8, Jalan 30/154, Taman Bukit Anggerik, 56000, Kuala Lumpur",
    "postcode": "56000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 530000,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "762 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1SaqQlxMsrJo3GbI0meelrberXAwYA59Q&sz=w800"
    ]
  },
  {
    "id": "407",
    "title": "Flat",
    "address": "Unit No. D-0-8, Block D, No. 3, Jalan Bukit Jalil Indah 4, Taman LTAT, Bukit Jalil, 57000, Kuala Lumpur",
    "postcode": "57000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 220000,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "743 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1YjHGwdO7NWdpsvof045BNpyCqtpBrjGh&sz=w800"
    ]
  },
  {
    "id": "408",
    "title": "Service Apartment",
    "address": "Unit No. C-8-1, Block C, Putra Majestik, Jalan Kasipillay, 51200, Kuala Lumpur",
    "postcode": "51200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 350000,
    "auctionDate": "23rd Sep 2026 (Wed)",
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
    "id": "409",
    "title": "Condominium",
    "address": "Unit No. A-5-7, Block A, Endah Regal Condominium, No. 7, Jalan 3/149E, Taman Sri Endah, 57000, Kuala Lumpur",
    "postcode": "57000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 300000,
    "auctionDate": "23rd Sep 2026 (Wed)",
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
    "id": "410",
    "title": "Service Apartment",
    "address": "Unit No. C-6-6, Vogue Tower C, Mont Kiara, Verve Suites, Jalan Kiara 5, Mont Kiara, 50480, Kuala Lumpur",
    "postcode": "50480",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 711000,
    "auctionDate": "23rd Sep 2026 (Wed)",
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
    "id": "411",
    "title": "Condominium",
    "address": "Unit No. A-12-05, Sky Vista Condominium, Jalan Senjolong, Taman Bukit Ria, 56000, Kuala Lumpur",
    "postcode": "56000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 590000,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "453 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1ic22oshvhWVAR_WnnAs2OR1sYHBpdekY&sz=w800",
      "https://drive.google.com/thumbnail?id=1XhXM0bOXUpAcgBwTGal-8kGuzcNVhpYi&sz=w800"
    ]
  },
  {
    "id": "412",
    "title": "Condominium",
    "address": "Unit No. E-16-2, Villa Wangsamas Condominium, Jalan Seri Wangsa 2, Wangsa Maju, 53300, Kuala Lumpur",
    "postcode": "53300",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 405000,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "270 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=129dne8z41XnbFmnPiAplQ1TKDUwaeZso&sz=w800",
      "https://drive.google.com/thumbnail?id=16Ebfj8YKY1uuD54YTwcBLMI7zSm7eOti&sz=w800"
    ]
  },
  {
    "id": "413",
    "title": "Service Apartment",
    "address": "Unit No. B-16-10, Tingkat 16, Marc Service Residence, No. 3, Jalan Pinang, 50450, Kuala Lumpur",
    "postcode": "50450",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 801900,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "936 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1gQWIzKbmZzPB4LN_ZQuR00kfCRW7hhrl&sz=w800",
      "https://drive.google.com/thumbnail?id=1iyPwb-yndvh5DjTx-Kb423tQlkNUgGld&sz=w800"
    ]
  },
  {
    "id": "414",
    "title": "Shop Office",
    "address": "Unit No. 32-3, Jalan Wangsa Delima 6, Pusat Bandar Wangsa Maju, 53300, Kuala Lumpur",
    "postcode": "53300",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 283435.2,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "969 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "415",
    "title": "Office Unit",
    "address": "Unit No. 32-1, Jalan Wangsa Delima 6, Pusat Bandar Wangsa Maju, 53300, Kuala Lumpur",
    "postcode": "53300",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 362167.2,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "948 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "416",
    "title": "Shop Office",
    "address": "Unit No. 32-2, Jalan Wangsa Delima 6, Pusat Bandar Wangsa Maju (KLSC), 53300, Kuala Lumpur",
    "postcode": "53300",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 362167.2,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "948 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "417",
    "title": "3.5 Storey Shop Office",
    "address": "Unit Nos. 53, 53-1, 53-2, Kompleks Bandar Park, Jalan Mega Mendung, Bandar Park, 58200, Kuala Lumpur",
    "postcode": "58200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 2025000,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "013 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "418",
    "title": "Apartment",
    "address": "Unit No. A4-12-03, Block A4, Residensi Pr1ma Alam Damai, No. 8, Persiaran Bistari, Alam Damai, 56000, Kuala Lumpur",
    "postcode": "56000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 340000,
    "auctionDate": "23rd Sep 2026 (Wed)",
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
    "id": "419",
    "title": "2 Storey Terrace House",
    "address": "Jalan Bukit Maluri 7, Taman Bukit Maluri, 52100, Kuala Lumpur",
    "postcode": "52100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 1000000,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "873 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "420",
    "title": "Apartment",
    "address": "Unit No. C-17-22, Block C, Mentari Court Apartment, Jalan PJS 8/9, Taman Seri Mentari, 46150 Petaling Jaya, Selangor",
    "postcode": "46150",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 196830,
    "auctionDate": "24th Sep 2026 (Thu)",
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
    "id": "421",
    "title": "Apartment",
    "address": "Unit No. H537, Blok H, Pangsapuri Sri Tanjung, Jalan Bandar Puchong Jaya, 47170 Puchong, Selangor",
    "postcode": "47170",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 300000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "012 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1nMee5eAWgK5J-leoWLY9a95g-SpV46Xr&sz=w800"
    ]
  },
  {
    "id": "422",
    "title": "2 Storey Terrace House",
    "address": "No. 27, Jalan BSC 4A/5, Presint 4, Bandar Seri Coalfields, 47000 Sungai Buloh, Selangor",
    "postcode": "47000",
    "state": "Selangor",
    "area": "Sungai Buloh",
    "reservePrice": 702000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "164 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jVKpyhrZIC1P5YAtgiXC57NhvKihKVTO&sz=w800"
    ]
  },
  {
    "id": "423",
    "title": "1 Storey Terrace House",
    "address": "No. 2, Jalan 1/9A, Seksyen 1, 43650 Bandar Baru Bangi, Selangor",
    "postcode": "43650",
    "state": "Selangor",
    "area": "Bandar Baru Bangi",
    "reservePrice": 522000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "543 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1YwYt-GaLdUyNg3MM6fk34umwpTQM1LBU&sz=w800"
    ]
  },
  {
    "id": "425",
    "title": "2.5 Storey Terrace House",
    "address": "Jalan DU 3/4, Taman Damai Utama, 47180 Puchong, Selangor",
    "postcode": "47180",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 950000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "647 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Wf9gErbIYK8N0yRxchlsHgxLpyIbtRVC&sz=w800"
    ]
  },
  {
    "id": "426",
    "title": "Apartment",
    "address": "Unit No. C-0-11, Orchis Apartment, Jalan Delima 9/KS09, Bandar Parklands, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 265000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "829 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1txu-htHHaa7ANytDXiDVDLBI5xSSSrsE&sz=w800"
    ]
  },
  {
    "id": "427",
    "title": "Apartment",
    "address": "Unit No. B-3A-20, Blok B, Pangsapuri Vista Sri Tanjung, Jalan Sri Tanjung 17, Taman Sri Tanjung, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 280000,
    "auctionDate": "24th Sep 2026 (Thu)",
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
    "id": "428",
    "title": "2 Storey Terrace House",
    "address": "No. 8, Jalan Sungai Kapar Indah 9A, Sungai Kapar Indah, 42200 Kapar, Selangor",
    "postcode": "42200",
    "state": "Selangor",
    "area": "Kapar",
    "reservePrice": 280000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "829 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1ccfYhkw_pZbBHguc8XsFUTqAXik6tbvS&sz=w800"
    ]
  },
  {
    "id": "429",
    "title": "1 Storey Terrace House",
    "address": "No. 21, Jalan Kebun Nenas 6A/KS8, Bandar Putera 2, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 420000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "100 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1QxSR4JREleciEmEZNFcuFd_wvU1fVO6L&sz=w800"
    ]
  },
  {
    "id": "430",
    "title": "Apartment",
    "address": "Unit No. B9-17-06, Block 9, Desa Mentari 2, Jalan PJS 2B/1, 46150 Petaling Jaya, Selangor",
    "postcode": "46150",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 131220,
    "auctionDate": "24th Sep 2026 (Thu)",
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
    "id": "431",
    "title": "1 Storey Terrace House",
    "address": "No. 12, Jalan Tulip Jingga 3, Taman Tulip, Kanchong Darat, 42700 Banting, Selangor",
    "postcode": "42700",
    "state": "Selangor",
    "area": "Banting",
    "reservePrice": 243000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1lXFWBC9py8-ei5fAEIVGtCKYEa4RSM_l&sz=w800"
    ]
  },
  {
    "id": "432",
    "title": "2 Storey Terrace House",
    "address": "No. 15, Jalan JS 5, Taman Bentara, 42500 Telok Panglima Garang, Selangor",
    "postcode": "42500",
    "state": "Selangor",
    "area": "Telok Panglima Garang",
    "reservePrice": 400000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "798 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jzgEVeorCoDEp3gxPokKDuhYzigziuy1&sz=w800"
    ]
  },
  {
    "id": "433",
    "title": "Condominium",
    "address": "Unit No. B-203A, Block B, Palm Spring @ Damansara, No. 1, Jalan PJU 3/29, Kota Damansara, 47810 Petaling Jaya, Selangor",
    "postcode": "47810",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 350000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "023 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1XFX0uBe1EkSB_kBMlqlsCVh1pHioKLrA&sz=w800",
      "https://drive.google.com/thumbnail?id=1vKJul1Dct28zLcv7SsDPpHY5odiBx04I&sz=w800"
    ]
  },
  {
    "id": "434",
    "title": "3.5 Storey Detached House",
    "address": "No. 10, Jalan SP 5A/1, Taman Saujana Puchong, Bandar Putra Permai, 47110 Puchong, Selangor",
    "postcode": "47110",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 1800000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "316 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1CoBwV4Hvo2KgxX641DHGdERdrAhO8EXk&sz=w800"
    ]
  },
  {
    "id": "435",
    "title": "2 Storey Terrace House",
    "address": "No. 15, Jalan Selaseh 20, Taman Selaseh, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 630000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "436",
    "title": "2 Storey Terrace House",
    "address": "No. 18, Jalan Kenyalang 11/4B, Bayu Perdana, PJU 5, Kota Damansara, 47810 Petaling Jaya, Selangor",
    "postcode": "47810",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 1550000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "234 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1dzm5BbCwC0I9LYWIyP-VJHGwv84RROp1&sz=w800"
    ]
  },
  {
    "id": "437",
    "title": "Terrace House",
    "address": "Jalan JD 3/2, Taman Jenderam Damai, 43800 Dengkil, Selangor",
    "postcode": "43800",
    "state": "Selangor",
    "area": "Dengkil",
    "reservePrice": 550000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "603 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "438",
    "title": "Town House",
    "address": "Blok A, Apartment Sri Rinching, Jalan 4 (Jalan Mutiara Rinching 4), Taman Mutiara Rinching, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 280000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "904 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "439",
    "title": "Condominium",
    "address": "Unit No. B3/A/3-25, (Tower 3), Venice Hills, Persiaran Puteri 1, Taman Puteri, 43200 Cheras, Selangor",
    "postcode": "43200",
    "state": "Selangor",
    "area": "Cheras",
    "reservePrice": 270000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "440",
    "title": "Apartment",
    "address": "Unit No. V1-9-A, Block L, Jalan Plumbum V 7/V, Pusat Komersial Seksyen 7, 40000, Shah Alam, Selangor",
    "postcode": "40000",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 300000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "797 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1GYl-0lupb4BI_MI99USjp7cFElgTRCuU&sz=w800"
    ]
  },
  {
    "id": "441",
    "title": "1 Storey Terrace House",
    "address": "No. 37, Jalan Lima, Rumah Murah Batu 13, Simpang Balak, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 280000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "200 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "442",
    "title": "3 Storey Bungalow",
    "address": "No. 3, Jalan 3A, Sunway Puncak Melawati, 53100 Hulu Kelang, Selangor",
    "postcode": "53100",
    "state": "Selangor",
    "area": "Hulu Kelang",
    "reservePrice": 1980000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "950 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1DFW87RSZjpNdsGEgIpzt9QcAyi-kGfyt&sz=w800",
      "https://drive.google.com/thumbnail?id=1uXisQn9VU5yOOOT8A7ZHJmU7wj5Pj94z&sz=w800"
    ]
  },
  {
    "id": "443",
    "title": "Apartment",
    "address": "Unit No. 01-01, Blok B05, Apartment Melor, Taman Sutera, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 170000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "657 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "444",
    "title": "Condominium",
    "address": "Unit No. D-20-9, Westminster Park, Sri Putramas Condominium, Jalan Putramas 1, Off Jalan Kuching, 51200, Kuala Lumpur",
    "postcode": "51200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 360000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "098 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1_4oC2Dvn-5qsHz-V01q4IseSnXn6ZrAo&sz=w800"
    ]
  },
  {
    "id": "445",
    "title": "Apartment",
    "address": "Unit No. 285-1-2, Casa Ria Apartment, Jalan Jejaka, Taman Maluri, 55100, Kuala Lumpur",
    "postcode": "55100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 262440,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "904 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Ak1fJ201NPWWD0nUZV6jiR59IXo5kr5_&sz=w800"
    ]
  },
  {
    "id": "446",
    "title": "Service Apartment",
    "address": "Unit No. D-23A-8, Block D, Seasons Garden, No. 7, Jalan 1/27E, Seksyen 10, Wangsa Maju, 53300, Kuala Lumpur",
    "postcode": "53300",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 400000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "893 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1rHxpSSOKsJOjEwOq-DZmn7MmIxh9GRe2&sz=w800"
    ]
  },
  {
    "id": "447",
    "title": "Condominium",
    "address": "Unit No. A-19-05, Residensi Rabung KL Timur, MRRII, 53100, Kuala Lumpur",
    "postcode": "53100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 550000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "861 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xq5ozqojrfndW_q_9j4SvQtNQ0bD_b8I&sz=w800",
      "https://drive.google.com/thumbnail?id=1D324ATOBqrfU4U9FpwoiAl4BQbrhjawZ&sz=w800"
    ]
  },
  {
    "id": "448",
    "title": "Service Apartment",
    "address": "Unit No. C-31-2, Tower C, The Troika, No. 19, Persiaran KLCC, 50450, Kuala Lumpur",
    "postcode": "50450",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 2400000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "605 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1XQ7GoAnekz0UXLKK6A5IRCncfh8BxSxE&sz=w800",
      "https://drive.google.com/thumbnail?id=1UlDUP9uaGz4PvDdsvxOQopHO5sz9GqPc&sz=w800"
    ]
  },
  {
    "id": "449",
    "title": "Apartment",
    "address": "Vista Saujana Apartment, No. 1, Jalan Wangsa 2/6, Taman Wangsa Permai, 52200, Kuala Lumpur",
    "postcode": "52200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 226800,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "958 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1L3UIQZ1jpMpd5A5gLa7DzJ1cyG_qHBC6&sz=w800"
    ]
  },
  {
    "id": "450",
    "title": "Apartment",
    "address": "Unit No. A-11-16, Tower A, Residensi Metro Kepong, No. 5, Jalan Metro Perdana Barat, Taman Metropolitan Kepong, 52100, Kuala Lumpur",
    "postcode": "52100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 200000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "797 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=14hOCvMCFuAclqZJ9Tw-s7AwB5tto7yhK&sz=w800"
    ]
  },
  {
    "id": "451",
    "title": "2 Storey Terrace House",
    "address": "No. 20, Lorong Zamrud, Taman Gembira, 41100 Klang, Selangor",
    "postcode": "41100",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 480000,
    "auctionDate": "25th Sep 2026 (Fri)",
    "landArea": "—",
    "builtUp": "320 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1mVFB6sKF7x1iduZ30pNQTY9jC0G8qR4U&sz=w800"
    ]
  },
  {
    "id": "452",
    "title": "1 Storey Semi Detached House",
    "address": "Jalan Lombong Emas 29/33, Kampung Lombong, Section 29, 40460 Shah Alam, Selangor",
    "postcode": "40460",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 540000,
    "auctionDate": "25th Sep 2026 (Fri)",
    "landArea": "—",
    "builtUp": "144 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=12FRmAacUHYX62NcP-_3tUbiZEPZCdKpy&sz=w800"
    ]
  },
  {
    "id": "453",
    "title": "2 Storey Terrace House",
    "address": "Lorong Sultan Abdul Samad 45J, Bandar Sultan Suleiman, 42000 Pelabuhan Klang, Selangor",
    "postcode": "42000",
    "state": "Selangor",
    "area": "Pelabuhan Klang",
    "reservePrice": 400000,
    "auctionDate": "25th Sep 2026 (Fri)",
    "landArea": "—",
    "builtUp": "540 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1NVkpd_sfHAJtYMOqve-qqDp9eIkwNtS0&sz=w800"
    ]
  },
  {
    "id": "454",
    "title": "1.5 Storey Terrace House",
    "address": "No. 46, Jalan Sungai Long 32/133, Taman Harmoni Utama, Bukit Naga, Seksyen 32, 40460 Shah Alam, Selangor",
    "postcode": "40460",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 380000,
    "auctionDate": "25th Sep 2026 (Fri)",
    "landArea": "—",
    "builtUp": "344 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1FNv9rLoPjGg-PU0Aq7YVGmaTFJgMZkZj&sz=w800"
    ]
  },
  {
    "id": "455",
    "title": "2 Storey Semi Detached House",
    "address": "No. 100, Jalan Seri Putra 9/4, Bandar Seri Putra, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 656000,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "122 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "456",
    "title": "Apartment",
    "address": "Unit No. 02-02-27, Pangsapuri Subang Suria, Jalan Bintang U5/33, Seksyen U5, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 175000,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "775 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1IosFr9O1GJPG8-Q9MMmela7kfPtjJd1v&sz=w800"
    ]
  },
  {
    "id": "457",
    "title": "Apartment",
    "address": "Pangsapuri Kristal Heights, Lot 2A, Jalan 7/70G, Fasa 3B, Seksyen 7, 40000 Shah Alam, Selangor",
    "postcode": "40000",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 284000,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "001 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1u7x-YafEjoaoga-uiBUJCttDEphUMhuO&sz=w800"
    ]
  },
  {
    "id": "458",
    "title": "1 Storey Semi Detached House",
    "address": "No. 19, Jalan Mahkota 12/KU2, Mutiara Bukit Raja 2, 41050 Klang, Selangor",
    "postcode": "41050",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 400950,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "350 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "459",
    "title": "2 Storey Terrace House",
    "address": "No. 10, Jalan PP 6/5, Taman Putra Prima, 47130 Puchong, Selangor",
    "postcode": "47130",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 692550,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "068 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Q-9wTkcGNi2DomI7i2usQDUzcchchxmh&sz=w800"
    ]
  },
  {
    "id": "460",
    "title": "Residensi Hijauan Condominium (The Greens)",
    "address": "Unit No. A1-08-05, Residensi Hijauan (The Greens), Jalan Budiman 22/3, Seksyen 22, 40300 Shah Alam, Selangor",
    "postcode": "40300",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 307800,
    "auctionDate": "28th Sep 2026 (Mon)",
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
    "id": "461",
    "title": "Apartment",
    "address": "Unit No D208, Blok D, Pangsapuri Sri Cempaka, Bandar Puchong Jaya, 47170 Puchong, Selangor",
    "postcode": "47170",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 300000,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "807 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1SQaS2Lf6tArSIgKKhTN2DV_0FyC_Xr2o&sz=w800"
    ]
  },
  {
    "id": "462",
    "title": "2 Storey Terrace House",
    "address": "Jalan Kebun Nenas 6G/KS8, Bandar Putera 2, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 500000,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1QxSR4JREleciEmEZNFcuFd_wvU1fVO6L&sz=w800"
    ]
  },
  {
    "id": "463",
    "title": "1 Storey Terrace House",
    "address": "Jalan BK 1/2, Bandar Kinrara, 47180 Puchong, Selangor",
    "postcode": "47180",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 370000,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "098 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1MZZzk6rM0iQQTWnyX7XN52xqSkmOXirj&sz=w800"
    ]
  },
  {
    "id": "464",
    "title": "2.5 Storey Semi Detached House",
    "address": "No. 5, Jalan SP 5A/8, Laman Granview, Saujana Puchong, 47110 Puchong, Selangor",
    "postcode": "47110",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 1296000,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "208 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1CoBwV4Hvo2KgxX641DHGdERdrAhO8EXk&sz=w800"
    ]
  },
  {
    "id": "465",
    "title": "Flat",
    "address": "Unit No. B-4-16, Block B, Kondominium Indah, Jalan PJU 10/9, Prima Damansara, 47830 Petaling Jaya, Selangor",
    "postcode": "47830",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 150000,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "753 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1QwNs4tSTUrZ_qAIBWvPJ_KwOk6KfoOTd&sz=w800"
    ]
  },
  {
    "id": "466",
    "title": "2 Storey Terrace House",
    "address": "No. 43, Jalan Palma 1/5, Bandar Hill Park, 42300 Bandar Puncak Alam, Selangor",
    "postcode": "42300",
    "state": "Selangor",
    "area": "Bandar Puncak Alam",
    "reservePrice": 600000,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "604 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1mxHwl2hJhhq_lPJYXdLS08Te7zvJBIbx&sz=w800"
    ]
  },
  {
    "id": "467",
    "title": "2 Storey Semi Detached House",
    "address": "No. 2, Jalan Damar Bayu 1/KS9, Teluk Glenmarie, 42000 Pelabuhan Klang, Selangor",
    "postcode": "42000",
    "state": "Selangor",
    "area": "Pelabuhan Klang",
    "reservePrice": 1200000,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "642 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1Qj1YGJw1GDvm3OdTVpnqUjiTGfCAEtbZ&sz=w800"
    ]
  },
  {
    "id": "468",
    "title": "2.5 Storey Terrace House",
    "address": "No. 31, Jalan Minang Ria 3, Taman Minang Ria, 43200 Cheras, Selangor",
    "postcode": "43200",
    "state": "Selangor",
    "area": "Cheras",
    "reservePrice": 648000,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "367 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "469",
    "title": "2 Storey Semi Detached House",
    "address": "No. 28, Jalan Semenyih Mewah 13A, Taman Semenyih Mewah, Fasa 5, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 1000000,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "983 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "470",
    "title": "3 Storey Detached House",
    "address": "No. 6, Jalan Setia Perdana U13/29C, Bandar Setia Alam, 40170 Shah Alam, Selangor",
    "postcode": "40170",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 2600000,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "801 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J58iL_Y1YlW1IST5gGOxggsg0A7NiHQM&sz=w800"
    ]
  },
  {
    "id": "471",
    "title": "2 Storey Detached House",
    "address": "No. 42, Jalan Ecohill 3/1B, Setia Ecohill, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 1500000,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "718 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1fvRyyVh2sjmAarpN6newXit9PeS1_W-G&sz=w800"
    ]
  },
  {
    "id": "472",
    "title": "1 Storey Terrace House",
    "address": "No. 51, Jalan Kemboja 4C/4, Perumahan Jalan Kemboja, Seksyen BS8, 48300 Rawang, Selangor",
    "postcode": "48300",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 301500,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "076 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "473",
    "title": "Apartment",
    "address": "Unit No. 113, Block D, Jalan PJS 3/55, Taman Sri Manja, 46000 Petaling Jaya, Selangor",
    "postcode": "46000",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 139968,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "807 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1nLhE9Lc9DXXwxqMbOAH87Os6IwccY94u&sz=w800"
    ]
  },
  {
    "id": "474",
    "title": "Apartment",
    "address": "Unit No. A-7-4, Teratak Muhibbah 1 Blok A, Jalan Desa Bahagia, Taman Danau Desa, 58100, Kuala Lumpur",
    "postcode": "58100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 124000,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "602 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1PJeM-dcVntQz9AzXJm3TC44Ml5KsttjS&sz=w800"
    ]
  },
  {
    "id": "475",
    "title": "Apartment",
    "address": "Unit No. B-02-11, Block B, Pangsapuri Sri Penara, Jalan Sri Permaisuri 1, Bandar Sri Permaisuri, 56000, Kuala Lumpur",
    "postcode": "56000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 203000,
    "auctionDate": "28th Sep 2026 (Mon)",
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
    "id": "476",
    "title": "3 Storey Terrace House",
    "address": "Jalan Damai Impian 2, Alam Damai, 56000, Kuala Lumpur",
    "postcode": "56000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 1233000,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "440 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1O24Y9eOwRwQwDfd9xUCEqbZNWigMNtyc&sz=w800"
    ]
  },
  {
    "id": "477",
    "title": "Apartment",
    "address": "Unit No. F-4-12, Blok F, Jalan Bukit Jalil Indah 4, Taman LTAT, 57000, Kuala Lumpur",
    "postcode": "57000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 230000,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "656 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1YjHGwdO7NWdpsvof045BNpyCqtpBrjGh&sz=w800"
    ]
  },
  {
    "id": "478",
    "title": "2 Storey Terrace House",
    "address": "No. 50, Jalan Manjoi 6, Taman Kok Lian, 51200, Kuala Lumpur",
    "postcode": "51200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 350000,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "699 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "479",
    "title": "Service Apartment",
    "address": "Unit No. B-13A-01, Residensi Pavilion Bukit Ceylon, Changkat Raja Chulan, 50200, Kuala Lumpur",
    "postcode": "50200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 1800000,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "367 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "480",
    "title": "Condominium",
    "address": "PV20 Platinum Lake Condominium, No. 5, Jalan Usahawan 2, Off Jalan Genting Klang, Setapak, 53200, Kuala Lumpur",
    "postcode": "53200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 343000,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "389 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "481",
    "title": "Service Apartment",
    "address": "Unit No. C-3-6, Vogue Tower C, Mont' Kiara Verve Suites, No. 8, Jalan Kiara 5, Mont Kiara, 50480, Kuala Lumpur",
    "postcode": "50480",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 630000,
    "auctionDate": "30th Sep 2026 (Wed)",
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
    "id": "482",
    "title": "Condominium",
    "address": "Unit No. A-28-03A, Vila Kristal, Jalan 6/38A, Taman Sri Sinar, Segambut, 51200, Kuala Lumpur",
    "postcode": "51200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 630000,
    "auctionDate": "30th Sep 2026 (Wed)",
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
    "id": "483",
    "title": "2 Storey Terrace House",
    "address": "Jalan 3/60C, Taman Segambut Muda, 51200, Kuala Lumpur",
    "postcode": "51200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 340000,
    "auctionDate": "30th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "700 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1RgMOUhHAhrjiw0mfQSk2TR9rItR4Yz2k&sz=w800"
    ]
  },
  {
    "id": "484",
    "title": "Condominium",
    "address": "Unit No. B-9-2, Kondo Villa Angsana, Block B, Jalan Krian, Taman Rainbow, 51100, Kuala Lumpur",
    "postcode": "51100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 420000,
    "auctionDate": "30th Sep 2026 (Wed)",
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
    "id": "485",
    "title": "Condominium",
    "address": "Unit No. A-L26-12B, Block A, Residensi Hijauan Bukit Jalil, Jalan Jalil Perwira 2, Bukit Jalil, 58200, Kuala Lumpur",
    "postcode": "58200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 340000,
    "auctionDate": "30th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "829 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1iLPuYTF2-1BHLPG_oOg0uYeOfl5hsg_f&sz=w800"
    ]
  },
  {
    "id": "486",
    "title": "Service Apartment",
    "address": "Unit No. 9-10, MH Platinum Residence, Jalan Gombak Sejahtera, Off Jalan Gombak, Setapak, 53000, Kuala Lumpur",
    "postcode": "53000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 420000,
    "auctionDate": "30th Sep 2026 (Wed)",
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
    "id": "487",
    "title": "Service Apartment",
    "address": "Unit No. A-21-11, Residensi Skymeridien, No. 1, Jalan 1/48A, Sentul Timur, 51000, Kuala Lumpur",
    "postcode": "51000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 680000,
    "auctionDate": "30th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "324 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1W6NkkSMAtyNJYHf_aXnHYSb863obwwvu&sz=w800"
    ]
  },
  {
    "id": "488",
    "title": "Condominium",
    "address": "Unit No. 3A-05, Rosvilla Condominium, No. 2, Jalan Prima Pelangi, Bukit Prima Pelangi, 51200, Kuala Lumpur",
    "postcode": "51200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 450000,
    "auctionDate": "30th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1ZrT8kc1OaW8awN3TJsBt-3rnwz0hpVEd&sz=w800",
      "https://drive.google.com/thumbnail?id=1TcYrMAp6_gsLXipPiMJhM6OggMwEOA0I&sz=w800"
    ]
  },
  {
    "id": "489",
    "title": "Condominium",
    "address": "Unit No. A-16-08, Block Ametrine, Villa Kristal (Villa Crystal), No. 1, Jalan 6/38A, Taman Sri Rinar, Segambut, 51200, Kuala Lumpur",
    "postcode": "51200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 549000,
    "auctionDate": "30th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "216 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1wSA29JFOLQWxleQzSfeChymjKdSj7ktd&sz=w800",
      "https://drive.google.com/thumbnail?id=1OUT_0Uk_KdrWd5aRyLLBjIUvg9JQL8VI&sz=w800"
    ]
  },
  {
    "id": "490",
    "title": "Flat",
    "address": "Unit No. 05-06, 5th Floor, Block Mawar, No. 1, Jalan Tun Teja 3, Taman Tun Teja, 48000 Rawang, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 85293,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "807 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1t8v2muj_urRfgaAigjWVBrGdaKaE-tE0&sz=w800"
    ]
  },
  {
    "id": "491",
    "title": "Apartment",
    "address": "Unit No. D-04-07, Block D, Apartment Mawar, Jalan 1/5, Section 1, Taman Sutera, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 138510,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "775 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1f6CxaNiGvAP_WNhF4ltEJGL7HlsPlK7O&sz=w800"
    ]
  },
  {
    "id": "492",
    "title": "Apartment",
    "address": "Unit No. B3-1-24, Block 3, Jalan PJS 5/12, Desa Mentari, 46000 Petaling Jaya, Selangor",
    "postcode": "46000",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 109350,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "657 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1YTf_-8Y7BCjDQSS7e2xXVzemvSHgk2Xn&sz=w800"
    ]
  },
  {
    "id": "493",
    "title": "4 Storey Super Link House",
    "address": "No. 28, Jalan 3/9, Taman Residen Tiara, Bandar Baru Selayang, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 1053000,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "056 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1ohpFaxQWUZzwFjEzTeTXxMDTeAgNH9ex&sz=w800"
    ]
  },
  {
    "id": "494",
    "title": "2 Storey Linked House",
    "address": "No. 68, Lorong Cakera Purnama 12/19, Seksyen 12, 42300 Bandar Puncak Alam, Selangor",
    "postcode": "42300",
    "state": "Selangor",
    "area": "Bandar Puncak Alam",
    "reservePrice": 307800,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "080 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1QxDVV8CR4jdZ9YaLXh4MkV4Wdlp_EFCu&sz=w800"
    ]
  },
  {
    "id": "495",
    "title": "2 Storey Terrace House",
    "address": "No. 15, Jalan Makyong 6D/KU5, Bandar Bukit Raja, 41050 Klang, Selangor",
    "postcode": "41050",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 576000,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "486 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1FpNJwd1Em1IQjwP_SUXVKksNVD7Lb22M&sz=w800"
    ]
  },
  {
    "id": "496",
    "title": "2 Storey Terrace House",
    "address": "No. 58, Jalan KE 11/3, Kota Emerald, 48000 Rawang, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 576000,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "370 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1RPWdUBgq79WlGDLuKWH1DPu_Gq_uITpc&sz=w800"
    ]
  },
  {
    "id": "497",
    "title": "2 Storey Semi Detached House",
    "address": "Premises No. 4, Jalan Bukit Melawati U17/2, Avanti Residences, Section U17, 40160 Shah Alam, Selangor",
    "postcode": "40160",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 1170000,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "197 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1heWQ6Igp4L1RVDYq8BbTyckBjzWJCN6N&sz=w800"
    ]
  },
  {
    "id": "498",
    "title": "Apartment",
    "address": "Unit No. H-403, Pangsapuri Sri Anggerik, Bandar Puchong Jaya, 47170 Puchong, Selangor",
    "postcode": "47170",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 225000,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "829 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1tLasfJpL-s11ootQcW15_qLzRm5PvLhF&sz=w800",
      "https://drive.google.com/thumbnail?id=1uJRX1H9XA8r_HkeXn_JBzQVo5QhE_dNa&sz=w800"
    ]
  },
  {
    "id": "499",
    "title": "Town House",
    "address": "Unit No. B-7-2, Idaman Pkns Selangorku @ Kota Puteri 1, Persiaran Kota Puteri 5, Seksyen 5, Kota Puteri, 48100 Batu Arang, Selangor",
    "postcode": "48100",
    "state": "Selangor",
    "area": "Batu Arang",
    "reservePrice": 167000,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "044 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HA7ob6kncprEsR3NMwNadmsece9q4psj&sz=w800"
    ]
  },
  {
    "id": "500",
    "title": "2 Storey Terrace House",
    "address": "No. 3, Jalan Tun Perak 9, Taman Tun Perak, 48000 Rawang, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 600000,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "542 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1G7067AxJPiWcXJ_PRXAGRxsqC6UcgOGJ&sz=w800"
    ]
  },
  {
    "id": "501",
    "title": "Shop Office",
    "address": "Jalan Putra Permai 1A, Taman Equine, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 1700000,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1vy8qeKhLkJkpul4kxiNXwe2k6oPHrNT-&sz=w800"
    ]
  },
  {
    "id": "502",
    "title": "Condominium",
    "address": "Unit No. A-07-03, Tower A, Desaria Villa Condominium, Jalan Desaria, Kampung Sungai Rasau/Pulau Meranti, 47100 Puchong, Selangor",
    "postcode": "47100",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 200000,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "205 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1MGPIDEojtU09c89ZsDSwOYPrhADknEjj&sz=w800",
      "https://drive.google.com/thumbnail?id=194HHvhuJWwqHRqM76OVQAiMxDuc5eReR&sz=w800"
    ]
  },
  {
    "id": "503",
    "title": "2.5 Storey Terrace House",
    "address": "No. 76, Jalan Puteri 8/2, Bandar Puteri, 47100 Puchong, Selangor",
    "postcode": "47100",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 1200000,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "647 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=16WRYhYH1luCMldvBhEFRGs6fM_EbwW5X&sz=w800"
    ]
  },
  {
    "id": "504",
    "title": "Town House",
    "address": "No. 2, Jalan Puteri 5D/5, Bandar Puteri Bangi, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 585000,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "507 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=12xzT4v9BiuimdJsY3NX9zyFaOgDrwJyf&sz=w800",
      "https://drive.google.com/thumbnail?id=1lBEyAITqxoaVDJ4AgklmJ-rC1tyFdSXZ&sz=w800"
    ]
  },
  {
    "id": "505",
    "title": "Apartment",
    "address": "Unit No. B-G-53, Block B, Vista Bayu Apartment, Jalan Batu Unjur 9, Taman Bayu Perdana, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 300000,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "163 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1blpcMoJx6x8M0brP8X7ncPd-GqyB5VHN&sz=w800"
    ]
  },
  {
    "id": "506",
    "title": "2 Storey Terrace House",
    "address": "No. 9, Jalan Baiduri 5, Taman Baiduri, 43800 Dengkil, Selangor",
    "postcode": "43800",
    "state": "Selangor",
    "area": "Dengkil",
    "reservePrice": 460000,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "583 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Tmd3fb0KbTF2mBeTozAGgSgY0dQwdSWy&sz=w800"
    ]
  },
  {
    "id": "507",
    "title": "2 Storey Terrace House",
    "address": "No. 1, Jalan Kebun Nenas 6J/KS8, Bandar Putera 2, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 650000,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "731 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1QxSR4JREleciEmEZNFcuFd_wvU1fVO6L&sz=w800"
    ]
  },
  {
    "id": "508",
    "title": "Apartment",
    "address": "Unit No. 2-11-2A, Pangsapuri Kemuning Aman, Kemuning Damai, Kemuning Utama, Seksyen 32, 40460 Shah Alam, Selangor",
    "postcode": "40460",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 290000,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "732 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1-shpIjIz42gDAVHt8U4OTNVQsFZsSJYe&sz=w800"
    ]
  },
  {
    "id": "509",
    "title": "2 Storey Terrace House",
    "address": "No. 1, Jalan Sari Alamanda 1/6, Sari Alamanda, 48000, Rawang, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 540000,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "456 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xVk9STf9pZq6mgDH5qXClBBG_68Qk94j&sz=w800"
    ]
  },
  {
    "id": "510",
    "title": "2 Storey Terrace House",
    "address": "No. 17, Jalan Caledonia 2A/2, Caledonia, 45600 Bestari Jaya, Selangor",
    "postcode": "45600",
    "state": "Selangor",
    "area": "Bestari Jaya",
    "reservePrice": 650000,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "615 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1EPd9Ms3_oBvOkxMpO9f5L-bThwu7xthh&sz=w800"
    ]
  },
  {
    "id": "511",
    "title": "2.5 Storey Detached House",
    "address": "No. 3, Jalan UP 3/7, Taman Ukay Perdana, 68000 Ampang, Selangor",
    "postcode": "68000",
    "state": "Selangor",
    "area": "Ampang",
    "reservePrice": 1215000,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "862 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1BUk0Mg2yPVA7aYrexgiDzqhwg6jr_fnQ&sz=w800"
    ]
  },
  {
    "id": "512",
    "title": "Condominium",
    "address": "Unit No. G-04-02, Block G, Ketumbar Hill Condominium, Jalan Ketumbar, Taman Cheras Utama, 56100, Kuala Lumpur",
    "postcode": "56100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 306180,
    "auctionDate": "1st Oct 2026 (Thu)",
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
    "id": "513",
    "title": "Condominium",
    "address": "Unit No. B-3A-1, Block B, Casa Idaman Condominium, Jalan 1/12D, Kampung Batu Muda, 51100, Kuala Lumpur",
    "postcode": "51100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 292000,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "184 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1lNDWYoXYfnArHk3sMFcSQiEfBSOF_E1s&sz=w800",
      "https://drive.google.com/thumbnail?id=1GQW2GkrvNdfEZ7-QB12SCkwLjClBP6lQ&sz=w800"
    ]
  },
  {
    "id": "514",
    "title": "Condominium",
    "address": "Unit No. 10B-12-5, Putra Court, Jalan Ipoh Kecil, 50350, Kuala Lumpur",
    "postcode": "50350",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 295245,
    "auctionDate": "1st Oct 2026 (Thu)",
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
    "id": "515",
    "title": "Condominium",
    "address": "Unit No. C-17-05, Block C, Residensi Renai Jalil @ The Rainz, Jalan Jalil Perwira 2, Bukit Jalil, 58200, Kuala Lumpur",
    "postcode": "58200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 712800,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "474 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1fM3WvkX-1co1uXz_O8hCf4fy_72lr7Oa&sz=w800"
    ]
  },
  {
    "id": "516",
    "title": "Apartment",
    "address": "Unit No. 21-4-5, 4th Floor, Block 21, Winner Court A, Jalan 1/125A, Desa Petaling, 57100, Kuala Lumpur",
    "postcode": "57100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 250000,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "786 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1-V6NVMBdpXThkphFPmVmOJtpJpQuafnt&sz=w800",
      "https://drive.google.com/thumbnail?id=1N8BF7vI-HOiQVyCwFTjEPO70QvWyLJ54&sz=w800"
    ]
  },
  {
    "id": "517",
    "title": "Apartment",
    "address": "Unit No. B-20-13A, Residensi Aman Bukit Jalil, Jalan Jalil Impian 1, Bukit Jalil, 57000, Kuala Lumpur",
    "postcode": "57000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 300000,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "904 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1BO0uxDwkLve6HK_eefXtslUPcXtnPKcA&sz=w800"
    ]
  },
  {
    "id": "518",
    "title": "Vacant Semi Detached Plot",
    "address": "Lot 56096, Along Lorong Pantai Prima, 59200, Kuala Lumpur",
    "postcode": "56096",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 802480,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "651 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1EuHIe6vMt7z0CxmY8Ve9yyOhqsTw-x1j&sz=w800"
    ]
  },
  {
    "id": "519",
    "title": "Condominium",
    "address": "Unit No. 11-23, Amaya Maluri, No. 2, Jalan Jejaka 2, Taman Maluri, 55100, Kuala Lumpur",
    "postcode": "55100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 340000,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "130 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1z0upP04GGivzdvu9cCJX2Le1KhaLua7Z&sz=w800"
    ]
  },
  {
    "id": "520",
    "title": "Condominium",
    "address": "Unit No. A2-15-3A, Blok A2, Sri Putramas II, Jalan Putramas, Off Jalan Kuching, 51200, Kuala Lumpur",
    "postcode": "51200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 500000,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "238 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1ZWhG2xyQrIwzTutQFkBr9t8dj4yrfxsA&sz=w800",
      "https://drive.google.com/thumbnail?id=1E2PxQ_s_UKleebFePp46o5tvmPZ-hBWf&sz=w800"
    ]
  },
  {
    "id": "521",
    "title": "Apartment",
    "address": "Block 14, Jalan 5/112A, Taman Bukit Angkasa, Pantai Dalam, 59200, Kuala Lumpur",
    "postcode": "59200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 230000,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "689 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "522",
    "title": "Condominium",
    "address": "Unit No. C-25-03, Block C, Kondominium Tinggian Titiwangsa, No.1, Jalan Tiara Titiwangsa, 53200, Kuala Lumpur",
    "postcode": "53200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 1062000,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "830 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=15xuWoXZbveVxIWJDbXgtuKCj_ueUpG7P&sz=w800"
    ]
  },
  {
    "id": "523",
    "title": "SOHO",
    "address": "Unit No. A-23A-3A, The Scott Garden, No. 289, Jalan Klang Lama, Block A, 58000, Kuala Lumpur",
    "postcode": "58000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 284310,
    "auctionDate": "1st Oct 2026 (Thu)",
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
    "id": "524",
    "title": "Service Apartment",
    "address": "Unit No. A1-26-11, Avara Seputeh, No. 8, Jalan Kelang Lama, 58100, Kuala Lumpur",
    "postcode": "58100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 400950,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "689 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1AGLQdXAiVjrxmMwCCXgEXr_5-TPsCOEK&sz=w800",
      "https://drive.google.com/thumbnail?id=12kzcIaem7jV8p0cHTWyyL3dUoTG8uxvb&sz=w800"
    ]
  },
  {
    "id": "525",
    "title": "Condominium",
    "address": "Unit No. B-0-1, Block B, Seri Cendekia Condominium, Jalan 4/124, Taman Connaught, Cheras, 56000, Kuala Lumpur",
    "postcode": "56000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 340000,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "130 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "526",
    "title": "Condominium",
    "address": "Unit No. 4-3-18, Meadow Park II, Jalan 1/130, Taman Gembira, 58200, Kuala Lumpur",
    "postcode": "58200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 219000,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "926 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=141POWH9bjyDjMYaA7wQVVZqmoqeM7Wni&sz=w800",
      "https://drive.google.com/thumbnail?id=1w42Qy0E0lg9G8EDYLfpM1xPncDnt1BBs&sz=w800",
      "https://drive.google.com/thumbnail?id=1VJkK0IBH9xhJ9d7T38j1DZG-N-xF56Td&sz=w800"
    ]
  },
  {
    "id": "527",
    "title": "Apartment",
    "address": "Unit No. 21-4B, Block 18, Kompleks Otomobil, Jalan Pahat K 15/K, Seksyen 15, 40200 Shah Alam, Selangor",
    "postcode": "40200",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 132840,
    "auctionDate": "5th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "829 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1VgxUgTvbdZyolVdwEvFVcYqNRCoLGfIu&sz=w800"
    ]
  },
  {
    "id": "528",
    "title": "2 Storey Terrace House",
    "address": "No. 29, Jalan Ecohill 1/1M, Setia Ecohill, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 619650,
    "auctionDate": "5th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "151 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1fvRyyVh2sjmAarpN6newXit9PeS1_W-G&sz=w800"
    ]
  },
  {
    "id": "529",
    "title": "2 Storey Terrace House",
    "address": "No. 9, Jalan Kenanga, Taman Bangi Jaya, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 405000,
    "auctionDate": "5th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "244 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "530",
    "title": "Vacant Land",
    "address": "No. 34, Jalan Merah Pulasan U9/4A, Kayangan Heights, Seksyen U9, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 851000,
    "auctionDate": "5th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "291 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1W_gmxWVPxGXLR2am1ZrjVIFaaLgfORl0&sz=w800"
    ]
  },
  {
    "id": "531",
    "title": "1 Storey Terrace House",
    "address": "No. 41, Jalan Dato Dagang 35, Taman Sri Sentosa, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 365000,
    "auctionDate": "5th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1TkLmOb2XSqNglXYDC0iox-D1hyaZ1pvF&sz=w800"
    ]
  },
  {
    "id": "532",
    "title": "Flat",
    "address": "Unit No. G8-08-14, Block G, Pangsapuri Angsana, Persiaran Mewah, USJ 1, 47620 Subang Jaya, Selangor",
    "postcode": "47620",
    "state": "Selangor",
    "area": "Subang Jaya",
    "reservePrice": 122000,
    "auctionDate": "5th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "657 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1cRdHcrOhw7i0eK6wJyUK7rK-nUMj_ilf&sz=w800"
    ]
  },
  {
    "id": "533",
    "title": "Apartment",
    "address": "Unit No. 01-02-14, Pangsapuri Seri Kasturi 1, Jalan Setia Gemilang U13/45B, Setia Alam, 40170 Shah Alam, Selangor",
    "postcode": "40170",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 283500,
    "auctionDate": "5th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "958 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1_xPMq3_ylV2G_S1aGC_JR-RRPqtLNp4O&sz=w800"
    ]
  },
  {
    "id": "534",
    "title": "2 Storey Terrace House",
    "address": "No. 27, Jalan U19/6, Taman Sri Subang, Seksyen U19, 40160 Shah Alam, Selangor",
    "postcode": "40160",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 450000,
    "auctionDate": "5th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "650 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1tQA-veQiIKE7GtAraBNJ5j2u6VCuI4O2&sz=w800"
    ]
  },
  {
    "id": "535",
    "title": "2 Storey Terrace House",
    "address": "No. 11, Jalan BJ/28, Taman Balakong Jaya, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 526500,
    "auctionDate": "5th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1sFOK5KwrRJ7Zf7tDHSAdCX-hBnwL1W8i&sz=w800"
    ]
  },
  {
    "id": "536",
    "title": "1 Storey Terrace House",
    "address": "No. 10, Jalan Impian 2, Taman Seri Impian, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 190269,
    "auctionDate": "5th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "076 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1ZfkLbViYk-Oz9t7ywrypUuOJOWz2rf_J&sz=w800"
    ]
  },
  {
    "id": "537",
    "title": "3 Storey Semi Detached House",
    "address": "No. 19, Jalan PJU 8/12F, The Rafflesia, Bandar Damansara Perdana, 47820 Petaling Jaya, Selangor",
    "postcode": "47820",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 2800000,
    "auctionDate": "5th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "008 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1B2ISdkC_Arabsgi64Qqmy4yQvSYoCPOf&sz=w800",
      "https://drive.google.com/thumbnail?id=1otxp6uKUOejPK6egqZMFRsGWZ3dUqrmm&sz=w800"
    ]
  },
  {
    "id": "538",
    "title": "1 Storey Terrace House",
    "address": "No. 417, Jalan Songket, Taman Maznah, 41000 Klang, Selangor",
    "postcode": "41000",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 380000,
    "auctionDate": "5th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "955 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "539",
    "title": "Flat",
    "address": "Unit No. A-1-04, Blok A (Blok Siantan), Taman Selayang Makmur, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 100000,
    "auctionDate": "5th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "646 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "540",
    "title": "Apartment",
    "address": "Unit No. 1-3-08, Rumah Pangsa Impian, Jalan SP 4/3, 42610 Bandar Saujana Putra, Selangor",
    "postcode": "42610",
    "state": "Selangor",
    "area": "Bandar Saujana Putra",
    "reservePrice": 117000,
    "auctionDate": "5th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "635 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=12_MP-Pn_IMcf-dlErYzZmkxpAXFnf1Sb&sz=w800"
    ]
  },
  {
    "id": "541",
    "title": "Service Apartment",
    "address": "Unit No. C-29-10, Block C, Regalia Service Apartment, Jalan Anjung Putra, Off Jalan Sultan Ismail, 50250, Kuala Lumpur",
    "postcode": "50250",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 450000,
    "auctionDate": "5th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "893 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1I-8m2WPipDNSIYhx17sksJgSl64JRx_T&sz=w800",
      "https://drive.google.com/thumbnail?id=1RSnKl6cjr0_W-_UBSWGqGQR7Ya45sbZs&sz=w800",
      "https://drive.google.com/thumbnail?id=1sA5UK6AsmgPgHRmW2wObGlxl5ZiAYJKI&sz=w800",
      "https://drive.google.com/thumbnail?id=1VyVhgRVbw92qBeC2_o6EbkWA72dLAO6g&sz=w800"
    ]
  },
  {
    "id": "542",
    "title": "3 Storey Semi Detached House",
    "address": "No. 3E, Jalan Awan Kelarai, 8 Villas, Taman Yarl, 58200, Kuala Lumpur",
    "postcode": "58200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 1863000,
    "auctionDate": "5th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "971 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "543",
    "title": "2 Storey Terrace House",
    "address": "No. 23, Jalan 1/149H, Taman Sri Endah, 57000, Kuala Lumpur",
    "postcode": "57000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 950000,
    "auctionDate": "5th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "528 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1wcyDb-X0t6F_Ww0a3LElf7LpchUL72ZB&sz=w800"
    ]
  },
  {
    "id": "544",
    "title": "SOHO",
    "address": "Unit No. B-08-22, Blok B, The Scott Garden SOHO, Jalan Klang Lama, 58100, Kuala Lumpur",
    "postcode": "58100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 283500,
    "auctionDate": "5th Oct 2026 (Mon)",
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
    "id": "545",
    "title": "Service Apartment",
    "address": "Unit No. C-28-09, 28th Floor, Block C, Regalia Service Apartment, Jalan Anjung Putra, Off Jalan Sultan Ismail, 50250, Kuala Lumpur",
    "postcode": "50250",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 314928,
    "auctionDate": "5th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "807 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1I-8m2WPipDNSIYhx17sksJgSl64JRx_T&sz=w800",
      "https://drive.google.com/thumbnail?id=1RSnKl6cjr0_W-_UBSWGqGQR7Ya45sbZs&sz=w800",
      "https://drive.google.com/thumbnail?id=1sA5UK6AsmgPgHRmW2wObGlxl5ZiAYJKI&sz=w800",
      "https://drive.google.com/thumbnail?id=1VyVhgRVbw92qBeC2_o6EbkWA72dLAO6g&sz=w800"
    ]
  },
  {
    "id": "546",
    "title": "Service Apartment",
    "address": "Unit No. B-20-9, Pangsapuri Suria Perdana (Fortune Park Serviced Apartments), Taman Serdang Perdana, Seksyen 4, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 155495.7,
    "auctionDate": "6th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "098 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1qxB-foyWgwSb5Jq7gTW3Sy0ytaYXF3iB&sz=w800",
      "https://drive.google.com/thumbnail?id=1yTHAP2__Su0yHx4hfHrDOUD0mTjF12vJ&sz=w800",
      "https://drive.google.com/thumbnail?id=1VZ-VvQdzi8H6F3DoKGRmln0JmOL3sNSj&sz=w800"
    ]
  },
  {
    "id": "547",
    "title": "Apartment",
    "address": "Unit No. B2-3-6, Forest Green Apartment, Bandar Sungai Long, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 307800,
    "auctionDate": "6th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "001 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1yGsMYUWWtwe_EOCaLXGnMg7XrtIH-bTe&sz=w800",
      "https://drive.google.com/thumbnail?id=18KCuv6x7tcsAjPpZ2QDekD0w76JSIBv7&sz=w800"
    ]
  },
  {
    "id": "548",
    "title": "2 Storey Terrace House",
    "address": "No. 1, Lorong Pending 1A, Bandar Puteri, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 810000,
    "auctionDate": "6th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "412 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1I5nasFaqK43b091QviHNjiPxEBLKGMws&sz=w800"
    ]
  },
  {
    "id": "549",
    "title": "Apartment",
    "address": "Unit No. 42A-5, Block D, Sri Manja Square 1, Jalan PJS 3/46, Taman Sri Manja, 46000 Petaling Jaya, Selangor",
    "postcode": "46000",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 250000,
    "auctionDate": "6th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "958 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1nLhE9Lc9DXXwxqMbOAH87Os6IwccY94u&sz=w800"
    ]
  },
  {
    "id": "550",
    "title": "Detached House",
    "address": "No. 29, Jalan Pulau Angsa U10/2A, Perdana Heights, Seksyen U10, 40170 Shah Alam, Selangor",
    "postcode": "40170",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 1750000,
    "auctionDate": "6th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "551",
    "title": "1 Storey Terrace House",
    "address": "No. 15, Jalan Koop Cuepacs 4, Taman Cuepacs, 43200 Cheras, Selangor",
    "postcode": "43200",
    "state": "Selangor",
    "area": "Cheras",
    "reservePrice": 410000,
    "auctionDate": "6th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "100 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "552",
    "title": "2 Storey Terrace House",
    "address": "No. 51, Jalan 5/4C, BTP 5, Bandar Tasik Puteri, 48020, Rawang, Selangor",
    "postcode": "48020",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 440000,
    "auctionDate": "6th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "900 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=10Sv2NTGf_R3EJRRdJsQ9k7xdJDypD582&sz=w800"
    ]
  },
  {
    "id": "553",
    "title": "Apartment",
    "address": "Unit No. B-3-9, 3rd Floor, Block B, Pangsapuri Vista Serdang, Jalan Kasturi, Taman Bukit Serdang, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 220000,
    "auctionDate": "6th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "797 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "554",
    "title": "Apartment",
    "address": "Unit No. B-10-03, Aliran Damai Apartment, Jalan Damai Perdana 5/2, Bandar Damai Perdana, 56000 Cheras, Selangor",
    "postcode": "56000",
    "state": "Selangor",
    "area": "Cheras",
    "reservePrice": 204200,
    "auctionDate": "6th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "976 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "555",
    "title": "Terrace House",
    "address": "Jalan TKP 23, Taman Kantan Permai, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 310000,
    "auctionDate": "6th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "990 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1PIDq0xxYxxkBoCHoYrrU6mQooCePCsg_&sz=w800"
    ]
  },
  {
    "id": "556",
    "title": "Service Apartment",
    "address": "Unit No. 34-19, Residensi Inspiria Setapak, Jalan Gombak, 53000, Kuala Lumpur",
    "postcode": "53000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 300000,
    "auctionDate": "6th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "840 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1F0kZkLxDuSAgQ8NdcrcLnyppp0pG7uPx&sz=w800",
      "https://drive.google.com/thumbnail?id=1pti5ujU2dtfLIIcD5_QN9UTDmqQL96uz&sz=w800"
    ]
  },
  {
    "id": "557",
    "title": "Apartment",
    "address": "Unit No. B-13A-15, Arena Green Apartment, Jalan 1/115A, Bukit Jalil 57000, Kuala Lumpur",
    "postcode": "57000",
    "state": "Kuala Lumpur",
    "area": "Bukit Jalil",
    "reservePrice": 480000,
    "auctionDate": "6th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "701 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1aehIMEoF40KtVdw-waBer8k4WIkUYpFe&sz=w800",
      "https://drive.google.com/thumbnail?id=185zE_WCyY_hYadNM4eicZ08qoreUGADb&sz=w800"
    ]
  },
  {
    "id": "558",
    "title": "Apartment",
    "address": "Unit No. 21-3, Block D, Rampai Court Apartment, Jalan 35/26, Taman Sri Rampai, 53300, Kuala Lumpur",
    "postcode": "53300",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 220000,
    "auctionDate": "6th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "592 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Au_UIgyGTn7j7X2jQxRfOOAosqTyfVf5&sz=w800"
    ]
  },
  {
    "id": "559",
    "title": "Condominium",
    "address": "Unit No. B-6-5, PV6 Platinum Hill Condominium, Jalan Melati Utama, Taman Melati Utama, 53100, Kuala Lumpur",
    "postcode": "53100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 450000,
    "auctionDate": "6th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "335 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "560",
    "title": "2 Storey Terrace House",
    "address": "No. 83, Jalan Sri Hartamas 17, Taman Sri Hartamas, 50480, Kuala Lumpur",
    "postcode": "50480",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 1677000,
    "auctionDate": "6th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "723 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "561",
    "title": "Apartment",
    "address": "Menara Alpha Condominium, Jalan 4/27A, Wangsa Maju, Seksyen 2, 53300, Kuala Lumpur",
    "postcode": "53300",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 280000,
    "auctionDate": "6th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "926 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "562",
    "title": "Service Apartment",
    "address": "Unit No. A-08-10, Tingkat 8, Pangsapuri Suria Perdana, Seksyen 4, Taman Serdang Perdana, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 230000,
    "auctionDate": "7th Oct 2026 (Wed)",
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
    "id": "563",
    "title": "Service Apartment",
    "address": "Unit No. A-08-6, Tingkat 8, Pangsapuri Suria Perdana, Seksyen 4, Taman Serdang Perdana, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 225000,
    "auctionDate": "7th Oct 2026 (Wed)",
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
    "id": "564",
    "title": "Apartment",
    "address": "Unit No. 57-02B, Blok 6, Jalan Juara 1/6, Taman Juara Jaya, 43200 Cheras, Selangor",
    "postcode": "43200",
    "state": "Selangor",
    "area": "Cheras",
    "reservePrice": 58320,
    "auctionDate": "7th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "732 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "565",
    "title": "1 Storey Terrace House",
    "address": "No. 26, Jalan Tan Sri Manikavasagam 11 (on site known as Jalan Manikavasagam 11), Taman Menara Maju, 41000 Klang, Selangor",
    "postcode": "41000",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 256000,
    "auctionDate": "7th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1UYs5haidS6cKB0exd-w-Qxj_o0sOErdr&sz=w800"
    ]
  },
  {
    "id": "566",
    "title": "Small Office Home Office (SOHO)",
    "address": "Unit No. A-15-9, Menara A, Arc @ Ampang Ukay, 68000 Ampang, Selangor",
    "postcode": "68000",
    "state": "Selangor",
    "area": "Ampang",
    "reservePrice": 197000,
    "auctionDate": "7th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "452 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "567",
    "title": "1.5 Storey Semi Detached House",
    "address": "No. 20, Jalan Mahkota 10/KU2, Mutiara Bukit Raja 2, 41050 Klang, Selangor",
    "postcode": "41050",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 550800,
    "auctionDate": "7th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "500 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "568",
    "title": "Apartment",
    "address": "Unit No. E-2-03, Pangsapuri D'Rimba, No. 11, Jalan Kenyalang 11/14, Kota Damansara, 47810 Petaling Jaya, Selangor",
    "postcode": "47810",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 342000,
    "auctionDate": "7th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "001 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=16NIr_wThNmq-ATKqsvIYJY5TJ0CracxD&sz=w800"
    ]
  },
  {
    "id": "569",
    "title": "1 Storey Terrace House",
    "address": "No. 15, Jalan 1, Taman Sri Cahaya, 45600 Bestari Jaya, Selangor",
    "postcode": "45600",
    "state": "Selangor",
    "area": "Bestari Jaya",
    "reservePrice": 171000,
    "auctionDate": "7th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "046 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "570",
    "title": "Apartment",
    "address": "Unit No. B-7-23, Blok B, Mentari Court Apartment, Jalan PJS 8/9, Taman Seri Mentari, 46150 Petaling Jaya, Selangor",
    "postcode": "46150",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 252000,
    "auctionDate": "7th Oct 2026 (Wed)",
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
    "id": "571",
    "title": "2 Storey Detached House",
    "address": "No. 7, Jalan TR 6/1, Tropicana Golf & Country Resort, 47410 Petaling Jaya, Selangor",
    "postcode": "47410",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 3805400,
    "auctionDate": "7th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "500 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=134mMPrbyZo25aQ0_JxK4YXGnxS6aX53n&sz=w800"
    ]
  },
  {
    "id": "572",
    "title": "2 Storey Terrace House",
    "address": "No. 44, Jalan USJ 11/4L, USJ 11, 47620 Subang Jaya, Selangor",
    "postcode": "47620",
    "state": "Selangor",
    "area": "Subang Jaya",
    "reservePrice": 720000,
    "auctionDate": "7th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Y7zis-nMPjjGavZGNI4gXpBXLFb7Wj9g&sz=w800"
    ]
  },
  {
    "id": "573",
    "title": "Apartment",
    "address": "Unit No. KH-10-05, Kristal Heights 2, Off Jalan SG 9/8, Taman Sri Gombak, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 320000,
    "auctionDate": "7th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "936 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1icj5Ci2daS1B-08rRm0jbrKdTCzUYo3h&sz=w800",
      "https://drive.google.com/thumbnail?id=1J3rIdq41iBWyg82SC5w6HUTEVSVe8sek&sz=w800"
    ]
  },
  {
    "id": "574",
    "title": "2 Storey Terrace House",
    "address": "No. 15, Jalan Desa 4/9, Bandar Country Homes, 48000, Rawang, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 450000,
    "auctionDate": "7th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "262 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1sItNrKYFqsPOSHyRdRuWq-doo6ydYMXE&sz=w800"
    ]
  },
  {
    "id": "575",
    "title": "2 Storey Terrace House",
    "address": "No. 24, Jalan Mercu 25/3, Taman Sri Muda, 40400 Shah Alam, Selangor",
    "postcode": "40400",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 450000,
    "auctionDate": "7th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "901 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1tXpjjoQnhF6gGxXXqSlvUJ-28lWfMWgl&sz=w800"
    ]
  },
  {
    "id": "576",
    "title": "Apartment",
    "address": "Unit No. C-05-19, Block C (Cempaka), Pelangi Damansara, PJU 6, Persiaran Surian, 46200 Petaling Jaya, Selangor",
    "postcode": "46200",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 144000,
    "auctionDate": "7th Oct 2026 (Wed)",
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
    "id": "577",
    "title": "Terrace House",
    "address": "No. 65, Lorong Mahkota Impian 2/16, Bandar Puncak Alam, Selangor",
    "postcode": "",
    "state": "Selangor",
    "area": "Bandar Puncak Alam",
    "reservePrice": 330000,
    "auctionDate": "7th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "890 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "578",
    "title": "Apartment",
    "address": "Unit No. C-02-09, Desa Idaman, Jalan Prima Utama 1, Taman Puchong Prima, 47150 Puchong, Selangor",
    "postcode": "47150",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 330000,
    "auctionDate": "7th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "958 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1SftiRfwbUu0Ug5RTO_BWhB-b9oSwqr3N&sz=w800"
    ]
  },
  {
    "id": "579",
    "title": "Apartment",
    "address": "Unit No. B1-1-10, 1st Floor, Block B1, Banjaria Court, Jalan Samudera Timur, Taman Samudera, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 320000,
    "auctionDate": "7th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "936 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=12sKA-6Pld5XM7HLj909Hbhaqg9bYa1oE&sz=w800"
    ]
  },
  {
    "id": "580",
    "title": "Terrace House",
    "address": "Jalan TPS 4/14, Taman Pelangi Semenyih, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 350000,
    "auctionDate": "7th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1_ITmeK9Ov3izLeAfYx_RiwW56_QxdLS9&sz=w800"
    ]
  },
  {
    "id": "581",
    "title": "Apartment",
    "address": "Unit No. 87-03-08, Block 87, Jalan 2/48A, Bandar Baru Sentul, 51000, Kuala Lumpur",
    "postcode": "51000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 160000,
    "auctionDate": "7th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "582",
    "title": "Office Lot",
    "address": "Unit No. A-21-2, Tower A, Menara UOA Bangsar, No. 5, Jalan Bangsar Utama 1, 59000, Kuala Lumpur",
    "postcode": "59000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 755000,
    "auctionDate": "7th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "936 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "583",
    "title": "Apartment",
    "address": "Damai Residence (also known as Residensi Damai Indah), No. 26, Jalan Sungai Besi, 57100, Kuala Lumpur",
    "postcode": "57100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 480000,
    "auctionDate": "7th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "893 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "584",
    "title": "2 Storey Office Unit",
    "address": "Unit No. 26-3B, Blok C, Jalan Tasik Prima 5/2, Prima Biz Hub, Taman Tasik Prima, 47150 Puchong, Selangor",
    "postcode": "47150",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 245000,
    "auctionDate": "8th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "980 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "585",
    "title": "1 Storey Terrace House",
    "address": "No. 16, Jalan Mutiara 6, Taman Dusun Nanding, 43100 Hulu Langat, Selangor",
    "postcode": "43100",
    "state": "Selangor",
    "area": "Hulu Langat",
    "reservePrice": 196830,
    "auctionDate": "8th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "033 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=10wiTxzQQJAXgXPsIhV3eYgXBMZ-ri6Ea&sz=w800"
    ]
  },
  {
    "id": "586",
    "title": "2 Storey Terrace House",
    "address": "Jalan Lili 5, Taman Saujana Utama, 47000 Sungai Buloh, Selangor",
    "postcode": "47000",
    "state": "Selangor",
    "area": "Sungai Buloh",
    "reservePrice": 343000,
    "auctionDate": "8th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1dEHEOWD47j9EinyxtA7MoaSlh1JMv7cU&sz=w800"
    ]
  },
  {
    "id": "587",
    "title": "2.5 Storey Semi Detached House",
    "address": "No. 12A, Jalan SL 3, Sejati Lakeside, Cyber 10, 63000 Cyberjaya, Selangor",
    "postcode": "63000",
    "state": "Selangor",
    "area": "Cyberjaya",
    "reservePrice": 1458000,
    "auctionDate": "8th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "337 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1P2hL-pe0A0AQSMdc1D2m3OYFHMZpdgPm&sz=w800"
    ]
  },
  {
    "id": "588",
    "title": "Duplex Town House (Upper Unit)",
    "address": "Unit No. D-10-B, Town Villa 1, Cyberia, Cyber 11, 63000 Cyberjaya, Selangor",
    "postcode": "63000",
    "state": "Selangor",
    "area": "Cyberjaya",
    "reservePrice": 307800,
    "auctionDate": "8th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "905 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1vEIO7xWSImX0uQEPKakr0mEV-vNbIpzn&sz=w800"
    ]
  },
  {
    "id": "589",
    "title": "2 Storey Terrace House",
    "address": "No. 16, Jalan Putra Bahagia 8/3D, Putra Heights, 47650 Subang Jaya, Selangor",
    "postcode": "47650",
    "state": "Selangor",
    "area": "Subang Jaya",
    "reservePrice": 729000,
    "auctionDate": "8th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "428 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1cAqHX9h-z9f0UH11hGJH1WGCEmU7q4Kz&sz=w800"
    ]
  },
  {
    "id": "590",
    "title": "2 Storey Terrace House",
    "address": "No. 13, Jalan Kajang East 1/15, Kajang East, Precinct 1, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 510300,
    "auctionDate": "8th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "831 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=19nZGoCdrFchKLcl40JeTY7K22T1W0qxG&sz=w800"
    ]
  },
  {
    "id": "591",
    "title": "Service Apartment",
    "address": "Unit No. B-18-02, Tower B, Astetica Residences (Residensi Estetika), Jalan Dagang SB, The Mines Resort City, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 450000,
    "auctionDate": "8th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "044 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13Dj3quwRdF3-Kbt-L164Bg8m1g1oi7rt&sz=w800"
    ]
  },
  {
    "id": "592",
    "title": "Apartment",
    "address": "Unit No. 6-4-17, Block 6, Pangsapuri Seroja, No. 2, Jalan Setia Murni U13/50, 40170 Shah Alam, Selangor",
    "postcode": "40170",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 144000,
    "auctionDate": "8th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "667 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=12j2EGNvLei6cx_gOuwmLXGyoQ_z9v99s&sz=w800"
    ]
  },
  {
    "id": "593",
    "title": "2 Storey Terrace House",
    "address": "No. 25, Jalan Semenyih Mewah, Taman Semenyih Mewah, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 324000,
    "auctionDate": "8th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "044 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1gVd79WuwQE7h-1ZLAbbX-2pMuceoZkYH&sz=w800"
    ]
  },
  {
    "id": "594",
    "title": "Apartment",
    "address": "Unit No. F-15-25, 15th Floor, Block F, Mentari Court, Jalan PJS 8/9, Taman Seri Mentari, 46150 Petaling Jaya, Selangor",
    "postcode": "46150",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 216000,
    "auctionDate": "8th Oct 2026 (Thu)",
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
    "id": "595",
    "title": "1 Storey Terrace House",
    "address": "No. 5, Jalan Dato Abdul Hamid 21, Taman Sentosa, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 405000,
    "auctionDate": "8th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "799 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Gu0_g_yYCidwKXv8mCwVxgtgmAxWjR1e&sz=w800"
    ]
  },
  {
    "id": "596",
    "title": "Apartment",
    "address": "Unit No. AD1-11-I, Aman Dua Apartment, Desa Aman Puri, 52100 Kepong, Selangor",
    "postcode": "52100",
    "state": "Selangor",
    "area": "Kepong",
    "reservePrice": 198000,
    "auctionDate": "8th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "840 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "597",
    "title": "3 Storey Terrace Shop Office",
    "address": "Nos. 17-1 & 17-2 & 17-3, Jalan Tasik Raja Lumu K U4/K, Taman Subang Delima, Seksyen U4, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 1170000,
    "auctionDate": "8th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "950 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1deCMxXEk_JgV90MRaw6AD_M238NCSrFd&sz=w800"
    ]
  },
  {
    "id": "598",
    "title": "Apartment",
    "address": "Pangsapuri Golden Height, Jalan Pinggiran Mas 2, Taman Mas, 47130 Puchong, Selangor",
    "postcode": "47130",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 162000,
    "auctionDate": "8th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "872 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1tIZsLbVrYl3CmEsUiWcNmqED8L6ZULZZ&sz=w800"
    ]
  },
  {
    "id": "599",
    "title": "2 Storey Terrace House",
    "address": "No. 11, Jalan PJS 2C/11, Petaling Jaya Selatan, 46000 Petaling Jaya, Selangor",
    "postcode": "46000",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 340000,
    "auctionDate": "8th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "470 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=16A9dypHG9jVA2YzYToQKGxTy3zJxole7&sz=w800"
    ]
  },
  {
    "id": "600",
    "title": "1 Storey Terrace House",
    "address": "Jalan Mengkuang 8, Taman Seri Mengkuang, 45000 Kuala Selangor, Selangor",
    "postcode": "45000",
    "state": "Selangor",
    "area": "Kuala Selangor",
    "reservePrice": 300000,
    "auctionDate": "8th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "431 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=12T0ez8r9ndRRzZOIjuvEvYfQDQWKBRHZ&sz=w800"
    ]
  },
  {
    "id": "601",
    "title": "2 Storey Terrace House",
    "address": "No. 10, Jalan Sepah Puteri 5/20A, Damansara Emas, PJU 5, Kota Damansara, 47810 Petaling Jaya, Selangor",
    "postcode": "47810",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 840000,
    "auctionDate": "8th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "647 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=12a6Mv3tdxm72Y21KmaqKOd0le5hh8Lu_&sz=w800"
    ]
  },
  {
    "id": "602",
    "title": "Apartment",
    "address": "Unit No. A-4-025, Jalan 2, Pinggiran Indah, Taman Pinggiran Indah, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 140000,
    "auctionDate": "8th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "657 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "603",
    "title": "2 Storey Terrace House",
    "address": "No. 20, Jalan Kesuma 8/2A, Bandar Tasik Kesuma, 43700 Beranang, Selangor",
    "postcode": "43700",
    "state": "Selangor",
    "area": "Beranang",
    "reservePrice": 420000,
    "auctionDate": "8th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "733 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1GxcLcPSxi3AR4LOBInBtVk9qr_haqo-H&sz=w800"
    ]
  },
  {
    "id": "604",
    "title": "2 Storey Terrace House",
    "address": "No. 14, Jalan Rawa, Taman Sinaran, 45600 Batang Berjuntai, Selangor",
    "postcode": "45600",
    "state": "Selangor",
    "area": "Batang Berjuntai",
    "reservePrice": 110000,
    "auctionDate": "8th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "882 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1h3Z1Ngzgf6dwCvpsqWqAq6A-I_UtdCY6&sz=w800"
    ]
  },
  {
    "id": "605",
    "title": "2.5 Storey Terrace House",
    "address": "No. 7, Jalan Selasih U12/21E, Taman Cahaya Alam, 40170, Shah Alam, Selangor",
    "postcode": "40170",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 720000,
    "auctionDate": "8th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "048 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1PBpuJnNw80IzoaqTQhrDlGwpyHkTDbLF&sz=w800"
    ]
  },
  {
    "id": "606",
    "title": "Service Apartment",
    "address": "Unit No. A-22-3A, Block A, Residensi Amara, Jalan Raintree Utama, Taman Raintree, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 350000,
    "auctionDate": "8th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "980 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1PGPCvCNGL_SDWCXw7ciboiqABGaBzvsT&sz=w800",
      "https://drive.google.com/thumbnail?id=1ykLqMeXx5oMRlAFD-oL4uHLOG_fFQBmN&sz=w800"
    ]
  },
  {
    "id": "607",
    "title": "Apartment",
    "address": "Unit No. P2-B-13-16 (on site Unit No. B-13-16), Sri Camelia Apartment, Taman Sepakat Indah, Sungai Chua, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 200000,
    "auctionDate": "8th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "926 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=12pmSRootCoQKJnNLafIv6TwO48KuR59p&sz=w800",
      "https://drive.google.com/thumbnail?id=1l1-LhmGUDlY9XLnRNu2Oe6NQ6iQaVT7u&sz=w800"
    ]
  },
  {
    "id": "608",
    "title": "2 Storey Terrace House",
    "address": "No. 23, Jalan 4/7N, Seksyen 4, 43650 Bandar Baru Bangi, Selangor",
    "postcode": "43650",
    "state": "Selangor",
    "area": "Bandar Baru Bangi",
    "reservePrice": 401000,
    "auctionDate": "8th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "647 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1sItNrKYFqsPOSHyRdRuWq-doo6ydYMXE&sz=w800"
    ]
  },
  {
    "id": "609",
    "title": "2 Storey Terrace House",
    "address": "No. 12, Jalan 2, Taman Seri Cheras Jaya, 43200 Cheras, Selangor",
    "postcode": "43200",
    "state": "Selangor",
    "area": "Cheras",
    "reservePrice": 300000,
    "auctionDate": "8th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "800 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "610",
    "title": "Terrace House",
    "address": "No. 7, Jalan M Senyumia 1/1, Taman M Senyumia, 43900 Bandar Baru Selak Tinggi, Selangor",
    "postcode": "43900",
    "state": "Selangor",
    "area": "Bandar Baru Selak Tinggi",
    "reservePrice": 480000,
    "auctionDate": "8th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1vYxucqWlz3rxtqNZgBJvlTvG9sAEI3e-&sz=w800"
    ]
  },
  {
    "id": "611",
    "title": "3 Storey Terrace House",
    "address": "No. 18, Jalan Elektron U16/66B, Denai Alam, 40160 Shah Alam, Selangor",
    "postcode": "40160",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 1000000,
    "auctionDate": "8th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "660 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1r54n3deFZ5QYOqyGXh33P-d9g6mxHK_w&sz=w800"
    ]
  },
  {
    "id": "612",
    "title": "Condominium",
    "address": "Unit No. A8-1-7, Block A8, Green Acre Park Condominium, Bandar Sungai Long, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 251100,
    "auctionDate": "8th Oct 2026 (Thu)",
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
    "id": "613",
    "title": "2 Storey Terrace House",
    "address": "No. 78, Jalan Meranti 3A/5, Bandar Utama Batang Kali, 44300 Batang Kali, Selangor",
    "postcode": "44300",
    "state": "Selangor",
    "area": "Batang Kali",
    "reservePrice": 170100,
    "auctionDate": "8th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "690 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1K6-v2UWKVjLNoFALpg1bW5TjIXHHS7eK&sz=w800"
    ]
  },
  {
    "id": "614",
    "title": "2 Storey Terrace House",
    "address": "No. 59, Jalan SS 14/8G, 47500 Subang Jaya, Selangor",
    "postcode": "47500",
    "state": "Selangor",
    "area": "Subang Jaya",
    "reservePrice": 850000,
    "auctionDate": "8th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "600 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=18npMBm6xb4YOcexL1WgV3Xsuyomf37Cz&sz=w800"
    ]
  },
  {
    "id": "615",
    "title": "Apartment",
    "address": "Unit No. 1-08, Pangsapuri Mahkota Residence, Persiaran Mahkota Residence, Bandar Mahkota Cheras, 43200 Cheras, Selangor",
    "postcode": "43200",
    "state": "Selangor",
    "area": "Cheras",
    "reservePrice": 283500,
    "auctionDate": "8th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "076 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "616",
    "title": "Apartment",
    "address": "Tingkat 11, Pangsapuri Servis Brunsfield, No. 3, Jalan Yoga 13/422, Seksyen 13, 40100 Shah Alam, Selangor",
    "postcode": "40100",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 360000,
    "auctionDate": "8th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "087 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1noemUe-Nyy8o-FtkDO97GpzfunVd2-B-&sz=w800",
      "https://drive.google.com/thumbnail?id=1IwAomid2jY9virLj8EfwBpyBFmWZJTzm&sz=w800"
    ]
  },
  {
    "id": "617",
    "title": "Terrace House",
    "address": "Jalan Matang Jaya 6, Taman Matang Jaya, 47200 Sungai Buloh, Selangor",
    "postcode": "47200",
    "state": "Selangor",
    "area": "Sungai Buloh",
    "reservePrice": 340000,
    "auctionDate": "8th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "618",
    "title": "Apartment",
    "address": "Unit No. 2-0-2, Block 2, Meadow Park 1, Jalan 1/130, Off Jalan Klang Lama, 58200, Kuala Lumpur",
    "postcode": "58200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 291600,
    "auctionDate": "8th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "152 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=141POWH9bjyDjMYaA7wQVVZqmoqeM7Wni&sz=w800",
      "https://drive.google.com/thumbnail?id=1w42Qy0E0lg9G8EDYLfpM1xPncDnt1BBs&sz=w800",
      "https://drive.google.com/thumbnail?id=1VJkK0IBH9xhJ9d7T38j1DZG-N-xF56Td&sz=w800"
    ]
  },
  {
    "id": "619",
    "title": "Condominium",
    "address": "Unit No. B-3A-3, Menjalara 18 (Block B), Lebuh Menjalara (Jalan 1/62B), Bandar Menjalara, 52200, Kuala Lumpur",
    "postcode": "52200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 486000,
    "auctionDate": "8th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "291 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "620",
    "title": "Condominium",
    "address": "Unit No. B-12-02, Endah Puri Condominium, Jalan 3/149E, Taman Sri Endah, 57000, Kuala Lumpur",
    "postcode": "57000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 369000,
    "auctionDate": "8th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "216 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "621",
    "title": "Apartment",
    "address": "Block B3, Residensi Prima Alam Damai, Persiaran Bistari, Alam Damai, 56000, Kuala Lumpur",
    "postcode": "56000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 330000,
    "auctionDate": "8th Oct 2026 (Thu)",
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
    "id": "622",
    "title": "Apartment",
    "address": "Menara Pelangi, No. 8, Lorong Ang Seng 2, Brickfields, 50470, Kuala Lumpur",
    "postcode": "50470",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 420000,
    "auctionDate": "8th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "926 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "623",
    "title": "2 Storey Terrace House",
    "address": "No. 45, Jalan TC 1/7, Taman Cemerlang, 53100, Kuala Lumpur",
    "postcode": "53100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 470000,
    "auctionDate": "8th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "883 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "624",
    "title": "Service Apartment",
    "address": "Unit No. C-35-2, Seasons Garden Residensi, Lot 7, No. 7, Jalan 1/27E, Seksyen 10, Wangsa Maju, 53300, Kuala Lumpur",
    "postcode": "53300",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 350000,
    "auctionDate": "8th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "775 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1rHxpSSOKsJOjEwOq-DZmn7MmIxh9GRe2&sz=w800"
    ]
  },
  {
    "id": "625",
    "title": "Vacant Land",
    "address": "Lot 3019, Fronting onto Jalan Sungai Penchala 10, Kampung Sungai Penchala, 60000, Kuala Lumpur",
    "postcode": "60000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 2268000,
    "auctionDate": "8th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "056 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "626",
    "title": "Condominium",
    "address": "Unit No. 128-16-11, Block 128, Sri Pelangi Condominium, Jalan Genting Kelang, Setapak, 53300, Kuala Lumpur",
    "postcode": "53300",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 300000,
    "auctionDate": "8th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "926 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Q_awUzUQqUW4vgPDKH5DVM4cWgE5DgN1&sz=w800",
      "https://drive.google.com/thumbnail?id=1atqZ9tCkLkR-w-0gUvTe2wjlQya78P2S&sz=w800"
    ]
  },
  {
    "id": "627",
    "title": "Flat",
    "address": "Unit No. C-3-10, Block C, Jalan 1A, Pangsapuri Segar Ria, Taman Segar, 56100, Kuala Lumpur",
    "postcode": "56100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 170000,
    "auctionDate": "8th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "657 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1e418cRK5F2oUyoeXG-mnBTDqNByNRAgI&sz=w800"
    ]
  },
  {
    "id": "628",
    "title": "2 Storey Detached House",
    "address": "Jalan Batai Barat, Damansara Heights, 50490, Kuala Lumpur",
    "postcode": "50490",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 5950000,
    "auctionDate": "8th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "426 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1phQNA8215G6HkYX_GywtJ3rs-UsDMRmJ&sz=w800"
    ]
  },
  {
    "id": "629",
    "title": "Condominium",
    "address": "Idaman Sutera Condominium, No. 2, Jalan 13/21D, Medan Idaman, 53100, Kuala Lumpur",
    "postcode": "53100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 250000,
    "auctionDate": "8th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "850 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1hwNPNt2lfmdmqWxMnKEG6rFV3hPxAJmN&sz=w800"
    ]
  },
  {
    "id": "630",
    "title": "SOHO",
    "address": "Unit No. C-18-22, Tingkat 18, Blok C, The Scott Garden Soho, Kompleks Rimbun Scott Garden, 289, Jalan Klang Lama, 58000, Kuala Lumpur",
    "postcode": "58000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 288900,
    "auctionDate": "8th Oct 2026 (Thu)",
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
    "id": "631",
    "title": "1 Storey Terrace House",
    "address": "No. 40, Jalan Dato Harun 1D/KS13, Taman Bayu Indah, Kampung Sungai Pinang, 42920, Pulau Indah, Selangor",
    "postcode": "42920",
    "state": "Selangor",
    "area": "Pulau Indah",
    "reservePrice": 310000,
    "auctionDate": "9th Oct 2026 (Fri)",
    "landArea": "—",
    "builtUp": "834 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1SKFebSLfJBILyG258_uEyd92uMh5r8s4&sz=w800"
    ]
  },
  {
    "id": "632",
    "title": "2 Storey Linked House",
    "address": "No. 42A, Jalan Budiman 4/1, Taman Putra Budiman, 43200 Cheras, Selangor",
    "postcode": "43200",
    "state": "Selangor",
    "area": "Cheras",
    "reservePrice": 642000,
    "auctionDate": "12th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "566 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "633",
    "title": "Apartment",
    "address": "Blok 10, Pangsapuri PKNS, Jalan Selar 17/26, Seksyen 17, 40200 Shah Alam, Selangor",
    "postcode": "40200",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 149850,
    "auctionDate": "12th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "753 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "634",
    "title": "Condominium",
    "address": "Unit No. A-17-07, Block A, Casa Indah 2 Condominium, No. 2B, Persiaran Surian, Damansara Indah, 47410 Petaling Jaya, Selangor",
    "postcode": "47410",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 478000,
    "auctionDate": "12th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "163 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "635",
    "title": "Shop Unit",
    "address": "Residensi Estetika (Astetica Residences), Jalan Dagang SB, The Mines Resort City, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 729000,
    "auctionDate": "12th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=13Dj3quwRdF3-Kbt-L164Bg8m1g1oi7rt&sz=w800"
    ]
  },
  {
    "id": "636",
    "title": "Apartment",
    "address": "Unit No. H-5-01, Pangsapuri Akasia, Persiaran Kasuarina, Bandar Botanic, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 240000,
    "auctionDate": "12th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "753 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1ssdfFnSMOU14fTbupzvu5lQYZVfWkcpC&sz=w800"
    ]
  },
  {
    "id": "637",
    "title": "Condominium",
    "address": "Residensi Hijauan (The Greens), No. 4, Jalan Budiman 22/3, Seksyen 22, 40300 Shah Alam, Selangor",
    "postcode": "40300",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 315000,
    "auctionDate": "13th Oct 2026 (Tue)",
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
    "id": "638",
    "title": "Condominium",
    "address": "Forest Green Park Condominium, Jalan Sungai Long, Batu 11 1/4, Bandar Sungai Long, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 283500,
    "auctionDate": "13th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "001 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1yGsMYUWWtwe_EOCaLXGnMg7XrtIH-bTe&sz=w800",
      "https://drive.google.com/thumbnail?id=18KCuv6x7tcsAjPpZ2QDekD0w76JSIBv7&sz=w800"
    ]
  },
  {
    "id": "639",
    "title": "2 Storey Terrace House",
    "address": "Premises No. 9, Jalan Dahlia 2/8, Taman Dahlia, 43900 Sepang, Selangor",
    "postcode": "43900",
    "state": "Selangor",
    "area": "Sepang",
    "reservePrice": 342000,
    "auctionDate": "13th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1p6Q9diLG5hAPtV-vYQnpL8dttKl7fwdt&sz=w800"
    ]
  },
  {
    "id": "640",
    "title": "2.5 Storey Semi Detached House",
    "address": "Jalan Pilus 27/24, Seksyen 27, 40400 Shah Alam, Selangor",
    "postcode": "40400",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 1350000,
    "auctionDate": "13th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "458 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1OsJBm1HyJoFUbf4IxTtV-BfMaNcDxQs8&sz=w800"
    ]
  },
  {
    "id": "641",
    "title": "Seri Tanjung Apartment",
    "address": "Unit No. A-7-13, Pangsapuri Seri Tanjung, Jalan USJ 16/6, UEP Subang Jaya, 47630 Subang Jaya, Selangor",
    "postcode": "47630",
    "state": "Selangor",
    "area": "Subang Jaya",
    "reservePrice": 180000,
    "auctionDate": "13th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "646 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "642",
    "title": "2 Storey Terrace House",
    "address": "No. 12A, Jalan Aruna 2, Taman M Aruna, 48000 Rawang, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 468000,
    "auctionDate": "13th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "200 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=18LGdGi84lEv9PosNvqGYKdjWVgw7ERO1&sz=w800"
    ]
  },
  {
    "id": "643",
    "title": "Condominium",
    "address": "Unit No. 10-1-20, Blok 20, Condominium Elaeis 1, Jalan Bait U8/1, Bukit Jelutong, Seksyen U8, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 390000,
    "auctionDate": "13th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "904 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "644",
    "title": "1 Storey Terrace House",
    "address": "No. 124, Jalan Semangat 25/8, Taman Sri Muda, Seksyen 25, 40400 Shah Alam, Selangor",
    "postcode": "40400",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 262440,
    "auctionDate": "14th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1tXpjjoQnhF6gGxXXqSlvUJ-28lWfMWgl&sz=w800"
    ]
  },
  {
    "id": "645",
    "title": "1 Storey Terrace House",
    "address": "No. 36, Jalan SP 8/24, Bandar Saujana Putra, 42610 Jenjarom, Selangor",
    "postcode": "42610",
    "state": "Selangor",
    "area": "Jenjarom",
    "reservePrice": 324000,
    "auctionDate": "14th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "850 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1opmDn-3IHZRIO6kT7vQbTMgkBb6qnKHm&sz=w800"
    ]
  },
  {
    "id": "646",
    "title": "Apartment",
    "address": "Unit No. 412, Block 15, Section 24, 40300 Shah Alam, Selangor",
    "postcode": "40300",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 135000,
    "auctionDate": "14th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "592 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "647",
    "title": "Apartment",
    "address": "Unit No. P4-B-01-02, Sri Raya Apartment, Off Jalan Pasir Emas, Taman Sepakat Indah, Sungai Chua, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 234000,
    "auctionDate": "14th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "958 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "648",
    "title": "Apartment",
    "address": "Unit No. F-4-19, Block F, Jalan Indah, Taman Desa Mutiara, Sungai Jelok, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 160000,
    "auctionDate": "14th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "850 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "649",
    "title": "Apartment",
    "address": "Unit No. A-7-14, Blok A, Pangsapuri Belimbing Heights, Jalan Belimbing Indah, Taman Belimbing Indah, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 280000,
    "auctionDate": "14th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "969 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=12rCIWbHf7Xu4Pt2tr9C6VAB4Klu70tyo&sz=w800"
    ]
  },
  {
    "id": "650",
    "title": "1 Storey Terrace House",
    "address": "Jalan SKJ 4/6, Taman Scientex Kundang Jaya, 48020 Rawang, Selangor",
    "postcode": "48020",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 450000,
    "auctionDate": "14th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "626 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1wwR1KYAM-RJrtcPH9z0J-udAVQdE_Eze&sz=w800"
    ]
  },
  {
    "id": "651",
    "title": "2 Storey Detached House",
    "address": "No. 13, Jalan Mawar 3A/2, Prima Beruntung, 48300 Rawang, Selangor",
    "postcode": "48300",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 495000,
    "auctionDate": "14th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "005 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Lhi18uTGLiUckDjyu3MXcz0P4cGsgW3Y&sz=w800"
    ]
  },
  {
    "id": "652",
    "title": "Apartment",
    "address": "Unit No. C-2-11 (On Site C-211), Rumah Pangsa Sri Saujana, Jalan SP 4/2, Bandar Saujana Putra, 42610 Jenjarom, Selangor",
    "postcode": "42610",
    "state": "Selangor",
    "area": "Jenjarom",
    "reservePrice": 153000,
    "auctionDate": "14th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "743 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1zRxxmcWp1UUze_hfLkl0vwHDTapJ1Mk1&sz=w800"
    ]
  },
  {
    "id": "653",
    "title": "2 Storey Terrace House",
    "address": "No. 23, Jalan Buah Melaka 36/15, Taman Sri Wangi, Seksyen 36, 40470 Shah Alam, Selangor",
    "postcode": "40470",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 500000,
    "auctionDate": "14th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "730 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1DZSccXnqpHoFm_UtbAp0n6z-eRHyGamU&sz=w800"
    ]
  },
  {
    "id": "654",
    "title": "Apartment",
    "address": "Unit No. J-3-2, 3rd Floor, Block J, Sri Angkasa Apartment, Jalan Batu Unjur 10, Taman Bayu Perdana, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 140000,
    "auctionDate": "14th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "646 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "655",
    "title": "Terrace House",
    "address": "Jalan Bayu 2, Desa Sri Bayu, Batu 16, 48000 Rawang, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 550000,
    "auctionDate": "14th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "560 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1r_zNXyiTtRb3Ai3T_TuAXp_2JgaD0DyJ&sz=w800"
    ]
  },
  {
    "id": "656",
    "title": "Apartment",
    "address": "Residensi Riverville, No. 6, Jalan Taman Seri Sentosa, Taman Seri Sentosa, 58000, Kuala Lumpur",
    "postcode": "58000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 426465,
    "auctionDate": "14th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1TxGSoS_W1lHpItuvFVoaTmDoTc87jMY4&sz=w800",
      "https://drive.google.com/thumbnail?id=1mVzwb44peJrVaL0LaBsmfWBDqlLCow7o&sz=w800",
      "https://drive.google.com/thumbnail?id=1bFb4p5faP7ZTd__ls5u4u3Tvg1FJzyBO&sz=w800",
      "https://drive.google.com/thumbnail?id=15eYIoEqX-IQ2OqO8HYBjZBook1ULP9sM&sz=w800"
    ]
  },
  {
    "id": "657",
    "title": "Condominium",
    "address": "Unit No. D-04-02, Desa Cahaya Condominium, No. 202, Jalan Ampang, 50450, Kuala Lumpur",
    "postcode": "50450",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 656100,
    "auctionDate": "14th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "690 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "658",
    "title": "Condominium",
    "address": "Block B1, Sri Putramas II, Jalan Putramas, 51200, Kuala Lumpur",
    "postcode": "51200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 486000,
    "auctionDate": "14th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "389 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1ZWhG2xyQrIwzTutQFkBr9t8dj4yrfxsA&sz=w800",
      "https://drive.google.com/thumbnail?id=1E2PxQ_s_UKleebFePp46o5tvmPZ-hBWf&sz=w800"
    ]
  },
  {
    "id": "659",
    "title": "Condominium",
    "address": "Unit No. 332B-13F (on site is No. 13F), GCB Court, Jalan Ampang, 50450, Kuala Lumpur",
    "postcode": "50450",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 360000,
    "auctionDate": "14th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "184 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "660",
    "title": "Flat",
    "address": "Unit No. A-3-2, Block A, Jalan 12/42A, Taman Sejahtera, Off Jalan Kuching, 51200, Kuala Lumpur",
    "postcode": "51200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 130000,
    "auctionDate": "14th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "549 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "661",
    "title": "2 Storey Detached House",
    "address": "No. 7, Jalan Warisan Setia 5/7, Kota Warisan, 43900 Sepang, Selangor",
    "postcode": "43900",
    "state": "Selangor",
    "area": "Sepang",
    "reservePrice": 1488035,
    "auctionDate": "15th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "172 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "662",
    "title": "2 Storey Terrace House",
    "address": "No. 92A, Jalan Aruna 6, Taman M Aruna, 48000 Rawang, Selangor",
    "postcode": "48000",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 590490,
    "auctionDate": "15th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "833 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=18LGdGi84lEv9PosNvqGYKdjWVgw7ERO1&sz=w800"
    ]
  },
  {
    "id": "663",
    "title": "2 Storey Terrace House",
    "address": "Jalan Alam Suria 15/2/2, Section 15, 42300 Bandar Puncak Alam, Selangor",
    "postcode": "42300",
    "state": "Selangor",
    "area": "Bandar Puncak Alam",
    "reservePrice": 453600,
    "auctionDate": "15th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "496 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=147PrIxUsDk9e9LTwN7_eoMlf4yNrJWKO&sz=w800"
    ]
  },
  {
    "id": "664",
    "title": "3 Storey Terrace House",
    "address": "No. 52, Jalan ST Utama Samudra Teres, Taman Samudera, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 850000,
    "auctionDate": "15th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "220 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "665",
    "title": "2 Storey Terrace House",
    "address": "Jalan USJ 2/5L, USJ 2, 47600 Subang Jaya, Selangor",
    "postcode": "47600",
    "state": "Selangor",
    "area": "Subang Jaya",
    "reservePrice": 850000,
    "auctionDate": "15th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "088 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "666",
    "title": "Service Apartment",
    "address": "Unit No. A-34-11, Block A (Asagi), Koi Tropika, Jalan Puchong, Batu 13 1/2, 47100 Puchong, Selangor",
    "postcode": "47100",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 300000,
    "auctionDate": "15th Oct 2026 (Thu)",
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
    "id": "667",
    "title": "3 Storey Terrace House",
    "address": "Jalan Teratak U8/106, Bukit Jelutong, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 1858500,
    "auctionDate": "15th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "558 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d4TqkhQT0jqIdTsrgFBl_Y2r2rj6zRel&sz=w800"
    ]
  },
  {
    "id": "668",
    "title": "Condominium",
    "address": "Hartamas Regency 2, No. 2, Jalan Duta Hartamas, Sri Hartamas, 50480, Kuala Lumpur",
    "postcode": "50480",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 623700,
    "auctionDate": "15th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "518 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1LIVWIrLHXpn9mhtietKs57ALzM0mFZ14&sz=w800"
    ]
  },
  {
    "id": "669",
    "title": "Apartment",
    "address": "No. 8, Jalan Perumahan Gurney, 54100, Kuala Lumpur",
    "postcode": "54100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 1440000,
    "auctionDate": "15th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "766 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "670",
    "title": "Condominium",
    "address": "Westminster Park, Sri Putramas Condo, Jalan Putramas 1, Off Jalan Kuching, 51200, Kuala Lumpur",
    "postcode": "51200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 440000,
    "auctionDate": "15th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1_4oC2Dvn-5qsHz-V01q4IseSnXn6ZrAo&sz=w800"
    ]
  },
  {
    "id": "671",
    "title": "Service Apartment",
    "address": "Block A, Taman Residensi Xtreme Meridian (also known as Astoria Ampang), Jalan Bemban, Ampang, 55000, Kuala Lumpur",
    "postcode": "55000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 850000,
    "auctionDate": "15th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "464 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1GQod_yAz8ledsCDFxMnj1neLpbzgINpc&sz=w800"
    ]
  },
  {
    "id": "672",
    "title": "Service Apartment",
    "address": "Unit No 06-07/B7, 38 Bidara Service Apartment, No. 30, Jalan Bedara, 50250, Kuala Lumpur",
    "postcode": "50250",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 364500,
    "auctionDate": "15th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "689 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=12XVxbdWgUXqWcupTGAbSHrQubwLxYvVa&sz=w800",
      "https://drive.google.com/thumbnail?id=1hekL4kntblxsy_YAUhvveTXAJq5NPj3Y&sz=w800",
      "https://drive.google.com/thumbnail?id=1Jp4HOyge5VRwhBUgreMfRiPaitXtl3M9&sz=w800",
      "https://drive.google.com/thumbnail?id=1gTzVj95QS0qaJX_wEV4F5ec0z7H69UEC&sz=w800"
    ]
  },
  {
    "id": "673",
    "title": "Semi Detached House",
    "address": "Jalan 1/3U, Seksyen 1 Tambahan, 43650 Bandar Baru Bangi, Selangor",
    "postcode": "43650",
    "state": "Selangor",
    "area": "Bandar Baru Bangi",
    "reservePrice": 900000,
    "auctionDate": "19th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "373 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1YwYt-GaLdUyNg3MM6fk34umwpTQM1LBU&sz=w800"
    ]
  },
  {
    "id": "674",
    "title": "Terrace House",
    "address": "Jalan DB 11, Taman Desiran Bayu, 47120 Puchong, Selangor",
    "postcode": "47120",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 480000,
    "auctionDate": "19th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "030 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1PzJ0mhjdcJKtjNjFFf1GbVJSGDEjDZfX&sz=w800"
    ]
  },
  {
    "id": "675",
    "title": "Apartment",
    "address": "Unit No. B4-7-31, Block 4, Jalan PJS 6/5D, Desa Mentari, 46000 Petaling Jaya, Selangor",
    "postcode": "46000",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 111780,
    "auctionDate": "21st Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "657 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1YTf_-8Y7BCjDQSS7e2xXVzemvSHgk2Xn&sz=w800"
    ]
  },
  {
    "id": "676",
    "title": "3 Storey Semi Detached House",
    "address": "No. 6, Jalan PJU 8/12E, The Rafflesia, Bandar Damansara Perdana, 47820 Petaling Jaya, Selangor",
    "postcode": "47820",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 1890000,
    "auctionDate": "21st Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "286 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1B2ISdkC_Arabsgi64Qqmy4yQvSYoCPOf&sz=w800",
      "https://drive.google.com/thumbnail?id=1otxp6uKUOejPK6egqZMFRsGWZ3dUqrmm&sz=w800"
    ]
  },
  {
    "id": "677",
    "title": "Condominium",
    "address": "Unit No. 11-01, Richmond Kiara 3, Jalan Kiara 3, Mont Kiara, 51200, Kuala Lumpur",
    "postcode": "51200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 656100,
    "auctionDate": "21st Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "422 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1b1XCUdFQHUyRf_2-krnSKZCVYFLBQc3l&sz=w800",
      "https://drive.google.com/thumbnail?id=1k0_GjtmCKlJIK8pWbPTu0osGZcHhBYn0&sz=w800",
      "https://drive.google.com/thumbnail?id=1TaHtSjMsD4k-GWFwej_Sz36yayFJJttW&sz=w800"
    ]
  },
  {
    "id": "678",
    "title": "Apartment",
    "address": "Tingkat 16, Blok A, Plaza Metro Prima, Jalan Metro 1, Metro Prima, 52100, Kuala Lumpur",
    "postcode": "52100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 283500,
    "auctionDate": "21st Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "098 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "679",
    "title": "Service Apartment",
    "address": "Unit No. 1-27-06, Block 1, M City, Jalan Ampang, 50450, Kuala Lumpur",
    "postcode": "50450",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 369000,
    "auctionDate": "21st Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "786 sq.ft",
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
    "id": "680",
    "title": "Service Apartment",
    "address": "Unit No. E-17-07, Residensi Lakeville, Jalan Sibu, Taman Wahyu, 68100, Kuala Lumpur",
    "postcode": "68100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 540000,
    "auctionDate": "21st Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "980 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1nsZRhs60AIhfD194YJxFaqEw2z2qcYQ5&sz=w800",
      "https://drive.google.com/thumbnail?id=19JbL0x8SRruv6AU7vdFD26oLFFMdSjQ0&sz=w800",
      "https://drive.google.com/thumbnail?id=1xDVEvV31ZQKC75gj7p7XBoo116b_D_6K&sz=w800",
      "https://drive.google.com/thumbnail?id=1E0C6MRDN3XB_u3lQXGGRtMJWIM9BeC8D&sz=w800"
    ]
  },
  {
    "id": "681",
    "title": "1 Storey Terrace House",
    "address": "No. 1, Jalan Indah 1/1, Taman Puchong Indah, 47150, Puchong, Selangor",
    "postcode": "47150",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 480000,
    "auctionDate": "22nd Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "910 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1BBbF46GO2IpFjIkg-rTQ3waVREf4_Cq8&sz=w800"
    ]
  },
  {
    "id": "682",
    "title": "2 Storey Terrace House",
    "address": "Jalan SB 7/4, Taman Seri Bestari, 43900 Sepang, Selangor",
    "postcode": "43900",
    "state": "Selangor",
    "area": "Sepang",
    "reservePrice": 450000,
    "auctionDate": "22nd Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1YV8BLrsKtrGHW7WUDk-daSJsnz7gbfdt&sz=w800"
    ]
  },
  {
    "id": "683",
    "title": "Condominium",
    "address": "Unit No. 2-8-12, Block Lotus, Putra Intan Condominium, 43800 Dengkil, Selangor",
    "postcode": "43800",
    "state": "Selangor",
    "area": "Dengkil",
    "reservePrice": 220000,
    "auctionDate": "22nd Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "001 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "684",
    "title": "2 Storey Terrace House",
    "address": "No. 1, Jalan Indah Gemilang 2/1, Taman Indah Gemilang, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 1050000,
    "auctionDate": "22nd Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "290 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "685",
    "title": "1 Storey Terrace House",
    "address": "Lorong Dato Harun 38C/KS13, Taman Dato Harun 7, Kampung Sungai Kembong, 42920 Pulau Indah, Selangor",
    "postcode": "42920",
    "state": "Selangor",
    "area": "Pulau Indah",
    "reservePrice": 300000,
    "auctionDate": "23rd Oct 2026 (Fri)",
    "landArea": "—",
    "builtUp": "281 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1IRu9VeJpCMwwbh3_mrRYgG-pBtrTvzii&sz=w800"
    ]
  },
  {
    "id": "686",
    "title": "2 Storey Terrace House",
    "address": "No. 25, Jalan Solok Pandamaran 98, 42000 Pelabuhan Klang, Selangor",
    "postcode": "42000",
    "state": "Selangor",
    "area": "Pelabuhan Klang",
    "reservePrice": 300000,
    "auctionDate": "23rd Oct 2026 (Fri)",
    "landArea": "—",
    "builtUp": "902 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1K5FeVKt2NVMIZWjEUraeqvYA8q7zmKBr&sz=w800"
    ]
  },
  {
    "id": "687",
    "title": "Condominium",
    "address": "Idaman Sutera Condominium, No. 2, Jalan 13/21D, Medan Idaman, 53100, Kuala Lumpur",
    "postcode": "53100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 250000,
    "auctionDate": "28th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "850 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1hwNPNt2lfmdmqWxMnKEG6rFV3hPxAJmN&sz=w800"
    ]
  },
  {
    "id": "688",
    "title": "Apartment",
    "address": "Teratai Mewah Apartment, Blok 4, Jalan Langkawi, Taman Teratai Mewah, 53000, Kuala Lumpur",
    "postcode": "53000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 230000,
    "auctionDate": "28th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "656 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1ergYckYfRvkdT0anTeE5KwDhmyZcIJq1&sz=w800"
    ]
  },
  {
    "id": "689",
    "title": "Condominium",
    "address": "Unit No. 42B-5-2, Bam Villa, Jalan Pria, Taman Maluri, 55100, Kuala Lumpur",
    "postcode": "55100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 340000,
    "auctionDate": "28th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "173 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1p2C-CEn9TTsG0CC9csosQMA2kOETboVG&sz=w800"
    ]
  },
  {
    "id": "690",
    "title": "Service Apartment",
    "address": "Unit No. 2-32-6, Tower 2, Residensi Opus, No. 8, Jalan Talalla, 50460, Kuala Lumpur",
    "postcode": "50460",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 900000,
    "auctionDate": "28th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "023 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "691",
    "title": "2 Storey Terrace House",
    "address": "No. 1, Jalan Wawasan 2/20, Pusat Bandar Puchong, 47160 Puchong, Selangor",
    "postcode": "47160",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 1010000,
    "auctionDate": "3rd Nov 2026 (Tue)",
    "landArea": "—",
    "builtUp": "917 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "692",
    "title": "Condominium",
    "address": "Prima Setapak II Condominium, Jalan Gombak Sejahtera, Off Jalan Gombak, 53000, Kuala Lumpur",
    "postcode": "53000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 590000,
    "auctionDate": "4th Nov 2026 (Wed)",
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
    "id": "693",
    "title": "Residential Land",
    "address": "PT 86822, Seksyen 4, Jalan 4/3, 43650 Bandar Baru Bangi, Selangor",
    "postcode": "86822",
    "state": "Selangor",
    "area": "Bandar Baru Bangi",
    "reservePrice": 560000,
    "auctionDate": "5th Nov 2026 (Thu)",
    "landArea": "—",
    "builtUp": "232 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1sItNrKYFqsPOSHyRdRuWq-doo6ydYMXE&sz=w800"
    ]
  },
  {
    "id": "694",
    "title": "Terrace House",
    "address": "Jalan USJ 18/3, USJ 18, 47630 Subang Jaya, Selangor",
    "postcode": "47630",
    "state": "Selangor",
    "area": "Subang Jaya",
    "reservePrice": 940000,
    "auctionDate": "11th Nov 2026 (Wed)",
    "landArea": "—",
    "builtUp": "647 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "695",
    "title": "Service Apartment",
    "address": "Unit No. C-19-11, Blok C, Koi Tropika Condominium, No. 1, Koi Tropika, Jalan Puchong 13 1/2, 47100 Puchong, Selangor",
    "postcode": "47100",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 310000,
    "auctionDate": "16th Nov 2026 (Mon)",
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
    "id": "696",
    "title": "Condominium",
    "address": "Unit No. 10E-02-01-07, Blok 2, Sri Kinabalu Condominium, Jalan 4/27E, Wangsa Maju Seksyen 10, 53300, Kuala Lumpur",
    "postcode": "53300",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 360000,
    "auctionDate": "16th Nov 2026 (Mon)",
    "landArea": "—",
    "builtUp": "130 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "697",
    "title": "1 Storey Detached House",
    "address": "Jalan 10A, Kampung Baru Salak Selatan, 57100, Kuala Lumpur",
    "postcode": "57100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 850000,
    "auctionDate": "18th Nov 2026 (Wed)",
    "landArea": "—",
    "builtUp": "340 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "698",
    "title": "2 Storey Semi Detached House",
    "address": "Lengkuk Rhu 2/KS6, Bandar Botanic, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 1350000,
    "auctionDate": "25th Nov 2026 (Wed)",
    "landArea": "—",
    "builtUp": "747 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=19-qrrwHakotx4bE_v2RQEknd63TCm7ca&sz=w800"
    ]
  },
  {
    "id": "699",
    "title": "Service Apartment",
    "address": "Unit No. 3-19-10, Kuchai Avenue, Block 3, Jalan Kuchai Maju 13, Kuchai Entrepreneurs Park, 58200, Kuala Lumpur",
    "postcode": "58200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 380000,
    "auctionDate": "25th Nov 2026 (Wed)",
    "landArea": "—",
    "builtUp": "926 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1TkWSIauXxVvqn8LsVGmZR7cxxnxjEExW&sz=w800"
    ]
  },
  {
    "id": "700",
    "title": "Apartment",
    "address": "Unit No. 7-4-8, Block 7, Jalan 1/127A, Taman Gembira, 58200, Kuala Lumpur",
    "postcode": "58200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 200000,
    "auctionDate": "25th Nov 2026 (Wed)",
    "landArea": "—",
    "builtUp": "689 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1bi90OANkrDsZfslyrZ4td_2CugJMXfGy&sz=w800"
    ]
  },
  {
    "id": "701",
    "title": "Service Apartment",
    "address": "Unit No. B-13-8, Blok B, Citizen @ Old Klang Road (Residensi Nusantara Petaling), Jalan Nusantara Petaling, 58000, Kuala Lumpur",
    "postcode": "58000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 550000,
    "auctionDate": "25th Nov 2026 (Wed)",
    "landArea": "—",
    "builtUp": "076 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1E8KRL7dyBYVZcLMFGvSwqRlIgL0enLlZ&sz=w800"
    ]
  },
  {
    "id": "702",
    "title": "Service Apartment",
    "address": "Unit No. 12-07, Tingkat 12, Residensi 222, Jalan Semarak Api, Off Jalan Gombak, 53300, Kuala Lumpur",
    "postcode": "53300",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 420000,
    "auctionDate": "25th Nov 2026 (Wed)",
    "landArea": "—",
    "builtUp": "141 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "703",
    "title": "Duplex Town House",
    "address": "Jalan Matang 3, Taman Sri Kuching, 51200, Kuala Lumpur",
    "postcode": "51200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 670000,
    "auctionDate": "25th Nov 2026 (Wed)",
    "landArea": "—",
    "builtUp": "916 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1s7dm2sF7oTsS6e5TGnDRHCboym0FRkUv&sz=w800"
    ]
  },
  {
    "id": "704",
    "title": "Service Apartment",
    "address": "Unit No. 11-10, Tiara Mutiara Service Apartment, No. 139, Jalan Puchong, 58200, Kuala Lumpur",
    "postcode": "58200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 360000,
    "auctionDate": "25th Nov 2026 (Wed)",
    "landArea": "—",
    "builtUp": "850 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "705",
    "title": "2 Storey Terrace House",
    "address": "Jalan Balam 5/53, Taman Bentara, 42500 Telok Panglima Garang, Selangor",
    "postcode": "42500",
    "state": "Selangor",
    "area": "Telok Panglima Garang",
    "reservePrice": 480000,
    "auctionDate": "26th Nov 2026 (Thu)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jzgEVeorCoDEp3gxPokKDuhYzigziuy1&sz=w800"
    ]
  },
  {
    "id": "706",
    "title": "4 Storey Terrace Shop Office",
    "address": "No. 5, Jalan Tiara 3, Bandar Baru Klang, 41050 Klang, Selangor",
    "postcode": "41050",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 800000,
    "auctionDate": "27th Nov 2026 (Fri)",
    "landArea": "—",
    "builtUp": "647 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "707",
    "title": "Condominium",
    "address": "Unit No. A-10-7, Block A, Vista Amani Condominium, No. 7, Jalan Tasik Permaisuri 3, Bandar Tun Razak, 56000, Kuala Lumpur",
    "postcode": "56000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 410000,
    "auctionDate": "1st Dec 2026 (Tue)",
    "landArea": "—",
    "builtUp": "109 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Q8JvckZhZl0P0azccy4pBBZVESfN3dL9&sz=w800"
    ]
  },
  {
    "id": "708",
    "title": "Condominium",
    "address": "Unit No. 3A-2-1, Block 3A, Sri Lojing Condominiums, No. 1, Jalan 4/27E, Seksyen 10, Bandar Wangsa Maju, 53300, Kuala Lumpur",
    "postcode": "53300",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 540000,
    "auctionDate": "7th Dec 2026 (Mon)",
    "landArea": "—",
    "builtUp": "765 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "709",
    "title": "Condominium",
    "address": "Block 26, Prima Midah Heights, Jalan Midah 8, Taman Midah, Cheras, 56000, Kuala Lumpur",
    "postcode": "56000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 560000,
    "auctionDate": "9th Dec 2026 (Wed)",
    "landArea": "—",
    "builtUp": "485 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Bn5cv3ZPBaFv3_aNcq54JiMen-WKhivA&sz=w800"
    ]
  },
  {
    "id": "710",
    "title": "Apartment",
    "address": "Pangsapuri Aston Kiara 3, No. 27, Jalan Kiara 3, Mont Kiara, 51200, Kuala Lumpur",
    "postcode": "51200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 575000,
    "auctionDate": "9th Dec 2026 (Wed)",
    "landArea": "—",
    "builtUp": "593 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "711",
    "title": "2 Storey Terrace House",
    "address": "No. 56, Jalan USJ 1/4E, Taman Subang Mewah, 47620 Subang Jaya, Selangor",
    "postcode": "47620",
    "state": "Selangor",
    "area": "Subang Jaya",
    "reservePrice": 580000,
    "auctionDate": "10th Dec 2026 (Thu)",
    "landArea": "—",
    "builtUp": "194 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1nKFAYHz6qFyg4flSZZcXmaL4El0CBLZw&sz=w800"
    ]
  },
  {
    "id": "712",
    "title": "2.5 Storey Detached House",
    "address": "No. 1, Jalan Bukit Impiana 5C, Taman Bukit Impiana, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 2100000,
    "auctionDate": "17th Dec 2026 (Thu)",
    "landArea": "—",
    "builtUp": "900 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1QmKpSIR1a01BG1Vnf92lgKe45JnwS4GS&sz=w800"
    ]
  },
  {
    "id": "713",
    "title": "2 Storey Terrace House",
    "address": "No. 1, Jalan Panglima Awang 35/124A, Alam Impian (On-site Viola Residence, Alam Impian), Section 35, 40470 Shah Alam, Selangor",
    "postcode": "40470",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 1180000,
    "auctionDate": "18th Dec 2026 (Fri)",
    "landArea": "—",
    "builtUp": "267 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "714",
    "title": "3 Storey Semi Detached House",
    "address": "Vila Laman Cahaya, Jalan Cahaya 3, Off Jalan Datuk Sulaiman, 60000, Kuala Lumpur",
    "postcode": "60000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 2500000,
    "auctionDate": "19th Dec 2026 (Sat)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1mnFaGggXQaMUyWPoNQWP_SVgzGIzV5kr&sz=w800"
    ]
  },
  {
    "id": "715",
    "title": "2 Storey Terrace House",
    "address": "No. 517, Lorong Iringan Bayu 41/6, Taman Iringan Bayu, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 295245,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "776 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1bNqnqXq_7mnG9qQeo1ZlyrXtz5hLCPFG&sz=w800",
      "https://drive.google.com/thumbnail?id=1YRQpJ-xxWr3y_uPDdpt7RH90NqQws_fo&sz=w800"
    ]
  },
  {
    "id": "716",
    "title": "2 Storey Terrace House",
    "address": "No. 143, Jalan Bukit Citra 2/8, Taman Bukit Citra, 71700 Mantin, Negeri Sembilan",
    "postcode": "71700",
    "state": "Negeri Sembilan",
    "area": "Mantin",
    "reservePrice": 354400,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "765 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1uwizljoS-YXIUpqAQIHP029Ju_DtxZtb&sz=w800"
    ]
  },
  {
    "id": "717",
    "title": "1 Storey Terrace House",
    "address": "No. 1450, Jalan BIL 49, Taman Bayu Indera Lukut, 71010 Port Dickson, Negeri Sembilan",
    "postcode": "71010",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 204120,
    "auctionDate": "7th Sep 2026 (Mon)",
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
    "id": "718",
    "title": "2 Storey Terrace House",
    "address": "No. 240, Jalan Laman Bakawali B/8, Laman Bakawali, Kota Seriemas, 71800 Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 336000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1ArWjVwEhxeLZmWj7TDUapJRQMNh3KrfX&sz=w800"
    ]
  },
  {
    "id": "719",
    "title": "2 Storey Terrace House",
    "address": "No. 1194, Jalan Suriaman 3/14, Suriaman 3, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 405000,
    "auctionDate": "7th Sep 2026 (Mon)",
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
    "id": "720",
    "title": "2 Storey Terrace House",
    "address": "No. 1505, Jalan Hijayu 3/57, Hijayu 3, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 433350,
    "auctionDate": "7th Sep 2026 (Mon)",
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
    "id": "721",
    "title": "Agricultural Land erected with 3 Storey Individually Designed Detached House",
    "address": "No. 28, Persiaran Alamanda, Planters' Haven, 71900 Nilai, Negeri Sembilan",
    "postcode": "71900",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 4050000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1smxQpEijUvJ7pi8StlV-a8RrKvoGZkn_&sz=w800"
    ]
  },
  {
    "id": "722",
    "title": "2 Storey Semi Detached House",
    "address": "No. 212, Lorong Iringan Bayu 39/1, Precint 8, Taman Iringan Bayu, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 615600,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "240 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1bNqnqXq_7mnG9qQeo1ZlyrXtz5hLCPFG&sz=w800",
      "https://drive.google.com/thumbnail?id=1YRQpJ-xxWr3y_uPDdpt7RH90NqQws_fo&sz=w800"
    ]
  },
  {
    "id": "723",
    "title": "2 Storey Terrace House",
    "address": "No. 301, Jalan Hijayu 3/14, Hijayu 3, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 459000,
    "auctionDate": "7th Sep 2026 (Mon)",
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
    "id": "724",
    "title": "2 Storey Terrace House",
    "address": "No. 111, Jalan Springhill 9/1, Bandar Springhill, 71100 Port Dickson, Negeri Sembilan",
    "postcode": "71100",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 198000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "960 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Hdpwgw3kd08q5i02dPq5vtniC7pTHXo-&sz=w800",
      "https://drive.google.com/thumbnail?id=1iX33VkUNNWAgg2Ctl3xhhMEQwWB11bFS&sz=w800"
    ]
  },
  {
    "id": "725",
    "title": "Apartment",
    "address": "Unit No. D-1-13, Blok D, Taman Semarak 2, 71800 Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 117000,
    "auctionDate": "7th Sep 2026 (Mon)",
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
    "id": "726",
    "title": "2 Storey Bungalow",
    "address": "Lot 10928, Jalan Tasik Senangin 5/15, 71750, Bandar Tasik Senangin, Lenggeng, Negeri Sembilan",
    "postcode": "10928",
    "state": "Negeri Sembilan",
    "area": "Lenggeng",
    "reservePrice": 513000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "004 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1OtMQNgbHvKsmcOcWxoEzErwWqOYE2da_&sz=w800",
      "https://drive.google.com/thumbnail?id=1nhM7zphX0EDYJFO8UzKHHxWvVT-1ie63&sz=w800"
    ]
  },
  {
    "id": "727",
    "title": "2 Storey Shop Office",
    "address": "No. 34, Jalan TTJ S/B, Taman Tuanku Jaafar, 71450 Seremban, Negeri Sembilan",
    "postcode": "71450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 405000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "647 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1gYPM59kK9_sx4ISuC21TNodle7HfoKby&sz=w800"
    ]
  },
  {
    "id": "728",
    "title": "1 Storey Terrace House",
    "address": "No. 41, Jalan Belida 17, Taman Bukit Chedang Fasa 2, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 280000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "431 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=153p8vK11o8SdxZA3ATSdGpVdriIoJVsh&sz=w800"
    ]
  },
  {
    "id": "729",
    "title": "2 Storey Terrace House",
    "address": "No. 826, Taman Mok Sum, Jalan Rasah, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 255150,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "600 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1c10sjz3p-zdM8YrBhPR_veuqNW4JWczV&sz=w800"
    ]
  },
  {
    "id": "730",
    "title": "1 Storey Terrace House",
    "address": "No.1250, Jalan BIL 43, Taman Indera Bayu Lukut, 71010 Port Dickson, Negeri Sembilan",
    "postcode": "71010",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 340000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "337 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1NzpokR03hf6GtJzT9qg1JXRIIEsGfG-Y&sz=w800",
      "https://drive.google.com/thumbnail?id=1TtdFr94rJc4mdli1Wt7YH_5IzeMu3_0g&sz=w800",
      "https://drive.google.com/thumbnail?id=1gkZdKabziqlIzawraO6beVPwcUJa_d3f&sz=w800"
    ]
  },
  {
    "id": "731",
    "title": "Residential Land",
    "address": "Persiaran Kuliah 1, College Heights Garden Resort, 71700 Mantin, Negeri Sembilan",
    "postcode": "71700",
    "state": "Negeri Sembilan",
    "area": "Mantin",
    "reservePrice": 220000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "759 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1YD17FyF6GGVZ8CmuMM6ex38bYOdnrqSI&sz=w800"
    ]
  },
  {
    "id": "732",
    "title": "2 Storey Terrace House",
    "address": "No. 44, Jalan Sena 1/8, Taman Sena, Sungai Gadut, 71450 Seremban, Negeri Sembilan",
    "postcode": "71450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 480000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1nXuwn_C-I0lvxOSuiHmfzzKkaIK4cswS&sz=w800"
    ]
  },
  {
    "id": "733",
    "title": "2 Storey Terrace House",
    "address": "No. 7319, Jalan Taman Gunung Mas 2/2, Taman Gunung Mas 2, 73000 Tampin, Negeri Sembilan",
    "postcode": "73000",
    "state": "Negeri Sembilan",
    "area": "Tampin",
    "reservePrice": 348300,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "140 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1C70DgaEBPl5AC5P8Xh5BnraGum0gz2PB&sz=w800"
    ]
  },
  {
    "id": "734",
    "title": "1 Storey Terrace House",
    "address": "No. 24, Jalan Desa PD 1, Taman Desa PD, 71200 Port Dickson, Negeri Sembilan",
    "postcode": "71200",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 129600,
    "auctionDate": "7th Sep 2026 (Mon)",
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
    "id": "735",
    "title": "1 Storey Terrace House",
    "address": "No. 701, Jalan Desa PD 10, Taman Desa PD, 71200 Port Dickson, Negeri Sembilan",
    "postcode": "71200",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 110000,
    "auctionDate": "7th Sep 2026 (Mon)",
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
    "id": "736",
    "title": "1 Storey Terrace House",
    "address": "No. 371, Jalan Jasper Jaya 11, Taman Jasper Jaya, 70200 Seremban, Negeri Sembilan",
    "postcode": "70200",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 225000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=11QVhMAYUsPaIWfuVSs6DpYWGhVX5s8Um&sz=w800"
    ]
  },
  {
    "id": "737",
    "title": "1 Storey Terrace House",
    "address": "No. 5583, Jalan Pinggiran Felda 5, Taman Pinggiran Felda, 73400 Gemas, Negeri Sembilan",
    "postcode": "73400",
    "state": "Negeri Sembilan",
    "area": "Gemas",
    "reservePrice": 108000,
    "auctionDate": "7th Sep 2026 (Mon)",
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
    "id": "738",
    "title": "1 Storey Terrace House",
    "address": "No. 70, Lorong Wawasan 17, Taman Wawasan, 71010 Lukut, Port Dickson, Negeri Sembilan",
    "postcode": "71010",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 162000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "431 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1qgas9ZCxAt9sz65vkJNZSKExHQt-RFd9&sz=w800"
    ]
  },
  {
    "id": "739",
    "title": "1 Storey Terrace House",
    "address": "No. 176, Jalan Rasa Sayang 6, Taman Rasa Sayang, 72000 Kuala Pilah, Negeri Sembilan",
    "postcode": "72000",
    "state": "Negeri Sembilan",
    "area": "Kuala Pilah",
    "reservePrice": 90000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "194 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=17nTPS3fu19OJiElHGLTO64FjaLvBmLUZ&sz=w800",
      "https://drive.google.com/thumbnail?id=1-LnxnlW_SQvzqC2B3CMAaCo-aPjmMCjO&sz=w800",
      "https://drive.google.com/thumbnail?id=1qjJPmA7Q5S5KyDMRcvhx_ZWddYDBwVLn&sz=w800",
      "https://drive.google.com/thumbnail?id=1hYADJkNyleGOtgrA8VcbHhxHQtvgR4Uw&sz=w800"
    ]
  },
  {
    "id": "740",
    "title": "Office Lot (First Floor)",
    "address": "Unit No. 85-1, Jalan Taman Komersial Senawang 4, Taman Komersial Senawang, 70450 Seremban, Negeri Sembilan",
    "postcode": "70450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 250000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "388 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1ca1nvaJQpvJTPS2FB_lEZoBUDALpYbao&sz=w800"
    ]
  },
  {
    "id": "741",
    "title": "1 Storey Terrace House",
    "address": "No. 18Y, Jalan Enclave Y, Persada Murni Enstek, 71760 Bandar Enstek, Negeri Sembilan",
    "postcode": "71760",
    "state": "Negeri Sembilan",
    "area": "Bandar Enstek",
    "reservePrice": 370000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "679 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1GeLD8nSzg53ouNaPkVkTrty950li7CCJ&sz=w800"
    ]
  },
  {
    "id": "742",
    "title": "2 Storey Terrace House",
    "address": "No. 308, Jalan Arowana 6, Taman Arowana, 71750 Lenggeng, Negeri Sembilan",
    "postcode": "71750",
    "state": "Negeri Sembilan",
    "area": "Lenggeng",
    "reservePrice": 480000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=10jMTgy7pNe0uMdmz6Hbmg85n0ptfT-Zh&sz=w800"
    ]
  },
  {
    "id": "743",
    "title": "1 Storey Terrace House",
    "address": "No. 97, Jalan Mantau Indah 3/4, Taman Mantau Indah 3, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 240000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "377 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Nsq6COVCPJ7LcL-d5if6FTTY24GOgStW&sz=w800",
      "https://drive.google.com/thumbnail?id=1G5IXORcAqFFTMhUPpvkZhOQSTIRpUIhC&sz=w800"
    ]
  },
  {
    "id": "744",
    "title": "2 Storey Terrace House",
    "address": "No. 88, Jalan Sejahtera 4, Taman ACBE, 72100 Bahau, Negeri Sembilan",
    "postcode": "72100",
    "state": "Negeri Sembilan",
    "area": "Bahau",
    "reservePrice": 320000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "760 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Ht2y4JGcnX8AUCsr2LcZ1KnZWHStxU3P&sz=w800"
    ]
  },
  {
    "id": "745",
    "title": "2 Storey Terrace House",
    "address": "No. 493, Jalan Ara Sendayan 2/5, Ara Sendayan, 70300, Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 500000,
    "auctionDate": "7th Sep 2026 (Mon)",
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
    "id": "746",
    "title": "1.5 Storey Semi Detached House",
    "address": "No. 31, Jalan TTJS 3/10, Taman Tuanku Jaafar, 71450 Seremban, Negeri Sembilan",
    "postcode": "71450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 450000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "240 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1gYPM59kK9_sx4ISuC21TNodle7HfoKby&sz=w800"
    ]
  },
  {
    "id": "747",
    "title": "2 Storey Terrace House",
    "address": "No. 361, Jalan Ekar 4/8, Residensi PR1MA, Bandar Ekar, 71200, Rantau, Negeri Sembilan",
    "postcode": "71200",
    "state": "Negeri Sembilan",
    "area": "Rantau",
    "reservePrice": 250000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "301 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1ZdVhvCUiOQ83VngigICZpwGsg30uuIwk&sz=w800"
    ]
  },
  {
    "id": "748",
    "title": "1 Storey Terrace House",
    "address": "No. 2902, Jalan SJ 3/2, Taman Seremban Jaya, 70450 Seremban, Negeri Sembilan",
    "postcode": "70450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 270000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1x5qa4tzadNrbPLYnuJqAQEvFsK_-kiB6&sz=w800",
      "https://drive.google.com/thumbnail?id=1kkx413dPRxjPpbzMsTOPGBu8s2Fq743R&sz=w800"
    ]
  },
  {
    "id": "749",
    "title": "2 Storey Terrace House",
    "address": "No. 328, Lorong TM 7/4, Taman Merpati, 70450, Seremban, Negeri Sembilan",
    "postcode": "70450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 420000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "088 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=16P2JfadmK7y9q2cagTk6YgpT2kz2uYC-&sz=w800"
    ]
  },
  {
    "id": "750",
    "title": "1 Storey Terrace House",
    "address": "No. 13, Jalan Orkid 3, Taman Senawang Indah 2, 70450 Seremban, Negeri Sembilan",
    "postcode": "70450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 320000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "873 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1UCqYmbAEVDXCG-VABKbq9KpkjyZvGD0e&sz=w800"
    ]
  },
  {
    "id": "751",
    "title": "2 Storey Semi Detached House",
    "address": "No. 8, Jalan NSV 4/2, Nilai Spring Villa, 71800 Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 1000000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "916 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=10XCijZ9OxiFJOdqkH_Y_1YaZ_ArGZQ9_&sz=w800"
    ]
  },
  {
    "id": "752",
    "title": "Condominium",
    "address": "Unit No. A-08-04, Residensi Lili @ Taman Bucida Hijauan, Taman Bucida Hijauan, 71800, Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 320000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "721 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1GACQEwSSkF_4cH0XRgPSqB5zkUEqd8yI&sz=w800",
      "https://drive.google.com/thumbnail?id=1hg-3Ysc61S1cCzGM56C_ep8nNeMzRRbC&sz=w800",
      "https://drive.google.com/thumbnail?id=116gi1N_lwdtvIAt4QdveNCOBtih-a0DM&sz=w800"
    ]
  },
  {
    "id": "753",
    "title": "2 Storey Terrace House",
    "address": "No. 6, Jalan 2/10, Taman Tuanku Najihah, 71450 Sungai Gadut, Negeri Sembilan",
    "postcode": "71450",
    "state": "Negeri Sembilan",
    "area": "Sungai Gadut",
    "reservePrice": 270000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "783 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=10JdKOGoFIGYoPUfRU6VsDYwIUlG_Pkem&sz=w800"
    ]
  },
  {
    "id": "754",
    "title": "Condominium",
    "address": "Unit No. B-02-06, Residensi Lili @ Taman Bucida Hijauan, Taman Bucida Hijauan, 71800, Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 320000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "721 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1GACQEwSSkF_4cH0XRgPSqB5zkUEqd8yI&sz=w800",
      "https://drive.google.com/thumbnail?id=1hg-3Ysc61S1cCzGM56C_ep8nNeMzRRbC&sz=w800",
      "https://drive.google.com/thumbnail?id=116gi1N_lwdtvIAt4QdveNCOBtih-a0DM&sz=w800"
    ]
  },
  {
    "id": "755",
    "title": "2 Storey Terrace House",
    "address": "No. 25, Jalan Desa Melor Indah 2, Taman Desa Melor Indah, 70450 Seremban, Negeri Sembilan",
    "postcode": "70450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 430000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "604 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "756",
    "title": "2 Storey Terrace House",
    "address": "No. 344, Lorong Alamanda 2/4, Taman Alamanda, Senawang, 70450 Seremban, Negeri Sembilan",
    "postcode": "70450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 308610,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "186 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Z_0nSxILEIqVATy66NHqFOuOM3ikpyQW&sz=w800"
    ]
  },
  {
    "id": "757",
    "title": "2 Storey Terrace House",
    "address": "No. 1702, Jalan Hijayu 3/62, Hijayu 3, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 427500,
    "auctionDate": "8th Sep 2026 (Tue)",
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
    "id": "758",
    "title": "1 Storey Terrace House",
    "address": "No. 14, Taman Gemilang, 71000 Port Dickson, Negeri Sembilan",
    "postcode": "71000",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 145800,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "900 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1P8IKBbICrLnNTkiKn7dyBjW36nF13Ys2&sz=w800"
    ]
  },
  {
    "id": "759",
    "title": "1 Storey Semi Detached House",
    "address": "No. 205, Jalan Bukit Jed 7/2, Taman Seri Bukit Jed, 70200 Seremban, Negeri Sembilan",
    "postcode": "70200",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 511000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "423 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1exzRKIsYcnaADRGSwN62JHso9lQaNxiR&sz=w800"
    ]
  },
  {
    "id": "760",
    "title": "2 Storey Terrace House",
    "address": "No. 713, Jalan Tiara Sendayan 2/10, Taman Tiara Sendayan, 71900 Labu, Negeri Sembilan",
    "postcode": "71900",
    "state": "Negeri Sembilan",
    "area": "Labu",
    "reservePrice": 405000,
    "auctionDate": "8th Sep 2026 (Tue)",
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
    "id": "761",
    "title": "1 Storey Detached House",
    "address": "No. 42, Jalan Tasik Senangin 7/15, Bandar Tasik Senangin, 71750 Lenggeng, Negeri Sembilan",
    "postcode": "71750",
    "state": "Negeri Sembilan",
    "area": "Lenggeng",
    "reservePrice": 387000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "004 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1OtMQNgbHvKsmcOcWxoEzErwWqOYE2da_&sz=w800",
      "https://drive.google.com/thumbnail?id=1nhM7zphX0EDYJFO8UzKHHxWvVT-1ie63&sz=w800"
    ]
  },
  {
    "id": "762",
    "title": "2 Storey Terrace House",
    "address": "No. 502, Jalan Hijayu 1/17, Hijayu 1, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 819000,
    "auctionDate": "8th Sep 2026 (Tue)",
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
    "id": "763",
    "title": "2 Storey Bungalow House",
    "address": "No. 104 (Lot 5527), Jalan SBJ 4, Mon't Jade, 70200 Seremban, Negeri Sembilan",
    "postcode": "70200",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 1100000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "900 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1exzRKIsYcnaADRGSwN62JHso9lQaNxiR&sz=w800"
    ]
  },
  {
    "id": "764",
    "title": "Apartment",
    "address": "Unit No. E-5-16, PD Tiara Bay Apartments (Formerly Tiara Beach Resort), 71250 Pasir Panjang, Port Dickson, Negeri Sembilan",
    "postcode": "71250",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 50000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "355 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=19ZebStGyOtSnnEZZMosy0sVEe3VJD4RX&sz=w800",
      "https://drive.google.com/thumbnail?id=18Ia_r1ryFB19mCz5DKzn3JEug3LuX00-&sz=w800",
      "https://drive.google.com/thumbnail?id=1ukGrTZoQIqpeSkMMRXdey2y1WC5IqCpo&sz=w800"
    ]
  },
  {
    "id": "765",
    "title": "2 Storey Terrace House",
    "address": "No. 620, Lorong Iringan Bayu 35/9, Precint 3, Taman Iringan Bayu, Mambau, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 400950,
    "auctionDate": "8th Sep 2026 (Tue)",
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
    "id": "766",
    "title": "2 Storey Terrace House",
    "address": "No. 499, Lorong Iringan Bayu 41/6, Precint 8, Taman Iringan Bayu, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 364500,
    "auctionDate": "8th Sep 2026 (Tue)",
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
    "id": "767",
    "title": "2 Storey Cluster House",
    "address": "No. 458, Lorong S2 K13/1, Vision Homes, Seremban 2, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 470000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "778 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1R6elFz2pje8Q8vKx013d6OGr7V03Mj5w&sz=w800"
    ]
  },
  {
    "id": "768",
    "title": "2 Storey Terrace House",
    "address": "No. 260, Jalan Nusari Aman 2/2, Nusari Aman 1, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 650000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "165 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1V5_kCR_ZBH2zz6gU7nQYSm8BBgdbsiAw&sz=w800"
    ]
  },
  {
    "id": "769",
    "title": "2 Storey Terrace House",
    "address": "No. 2449, Jalan Tiara Sendayan 7/3, Taman Tiara Sendayan, 71900 Labu, Negeri Sembilan",
    "postcode": "71900",
    "state": "Negeri Sembilan",
    "area": "Labu",
    "reservePrice": 440000,
    "auctionDate": "8th Sep 2026 (Tue)",
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
    "id": "770",
    "title": "2 Storey Terrace House",
    "address": "No. 709, Jalan Ekar 5/1, Residensi Prima Bandar Ekar, Bandar Ekar, 71200 Rantau, Negeri Sembilan",
    "postcode": "71200",
    "state": "Negeri Sembilan",
    "area": "Rantau",
    "reservePrice": 320000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "824 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1ZdVhvCUiOQ83VngigICZpwGsg30uuIwk&sz=w800"
    ]
  },
  {
    "id": "771",
    "title": "2 Storey Terrace House",
    "address": "No. 212, Jalan Ekar 4/4, Residensi Prima Bandar Ekar, Bandar Ekar, 71200 Rantau, Negeri Sembilan",
    "postcode": "71200",
    "state": "Negeri Sembilan",
    "area": "Rantau",
    "reservePrice": 320000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "824 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1ZdVhvCUiOQ83VngigICZpwGsg30uuIwk&sz=w800"
    ]
  },
  {
    "id": "772",
    "title": "2 Storey Terrace House",
    "address": "Jalan Hijayu 1/15, Hijayu 1, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 730000,
    "auctionDate": "8th Sep 2026 (Tue)",
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
    "id": "773",
    "title": "1 Storey Terrace House",
    "address": "No. 604, Lorong Anggerik 20, Bandar Sunggala, 71050 Port Dickson, Negeri Sembilan",
    "postcode": "71050",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 210000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1BiE3DsOq_5DsgDpxuYmRCubBMzIBoJiu&sz=w800"
    ]
  },
  {
    "id": "774",
    "title": "2 Storey Terrace House",
    "address": "No. 2047, Jalan RJ 2/27, Taman Rasah Jaya, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 330000,
    "auctionDate": "8th Sep 2026 (Tue)",
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
    "id": "775",
    "title": "1 Storey Semi Detached House",
    "address": "No. 16, Jalan TTJS 6/D, Taman Tuanku Jaafar, 71450 Seremban, Negeri Sembilan",
    "postcode": "71450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 400000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "809 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1gYPM59kK9_sx4ISuC21TNodle7HfoKby&sz=w800"
    ]
  },
  {
    "id": "776",
    "title": "1 Storey House",
    "address": "No. 16, Jalan Desa Rhu 21, Taman Desa Rhu, Sikamat, 70400 Seremban, Negeri Sembilan",
    "postcode": "70400",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 230000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "076 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1I67GlC34DZMy3nJxS77ahjg7Ek7n4SIb&sz=w800"
    ]
  },
  {
    "id": "777",
    "title": "Apartment",
    "address": "Unit No. D-1-3, Tiara Beach Resort, Pasir Panjang, 71250 Port Dickson, Negeri Sembilan",
    "postcode": "71250",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 80000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "527 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=19ZebStGyOtSnnEZZMosy0sVEe3VJD4RX&sz=w800",
      "https://drive.google.com/thumbnail?id=18Ia_r1ryFB19mCz5DKzn3JEug3LuX00-&sz=w800",
      "https://drive.google.com/thumbnail?id=1ukGrTZoQIqpeSkMMRXdey2y1WC5IqCpo&sz=w800"
    ]
  },
  {
    "id": "778",
    "title": "1 Storey Terrace House",
    "address": "No. 3624, Jalan 3/6F, Taman Seremban Jaya, 70450 Seremban, Negeri Sembilan",
    "postcode": "70450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 300000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1x5qa4tzadNrbPLYnuJqAQEvFsK_-kiB6&sz=w800",
      "https://drive.google.com/thumbnail?id=1kkx413dPRxjPpbzMsTOPGBu8s2Fq743R&sz=w800"
    ]
  },
  {
    "id": "779",
    "title": "Flat",
    "address": "Unit No. B-G-12, Block B, Rumah Pangsa Taman Semarak II, 71800 Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 110000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "689 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1pwy_t-wqVncP8oO3d63boqBDgH52jaMn&sz=w800",
      "https://drive.google.com/thumbnail?id=1ZMVpTUQnbtbHafXwaVVz_p47y3Aeo7-l&sz=w800",
      "https://drive.google.com/thumbnail?id=19L2QFOlYwihDglXGqKHMb9XU4NHHOsw3&sz=w800"
    ]
  },
  {
    "id": "780",
    "title": "Apartment",
    "address": "Unit No. 2-16A, Second Floor, Block A, Taman Cengal Utama, 70400 Seremban, Negeri Sembilan",
    "postcode": "70400",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 100000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "602 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=12g0DztC7K_OdZclPJKzZvHM9bkLFMIw6&sz=w800"
    ]
  },
  {
    "id": "781",
    "title": "1 Storey Semi Detached House",
    "address": "No. 1086, Jalan Nusari Bayu 3/4, Nusari Bayu 1, Bandar Sri Sendayan, 71950 Seremban, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 328050,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "197 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1rQeJvRhC0kp-Iry4PlvbqwNoedZLnS0V&sz=w800"
    ]
  },
  {
    "id": "782",
    "title": "1 Storey Terrace House",
    "address": "No. 38, Jalan Tasik Senangin 16/13, Bandar Tasik Senangin, 71750 Lenggeng, Negeri Sembilan",
    "postcode": "71750",
    "state": "Negeri Sembilan",
    "area": "Lenggeng",
    "reservePrice": 217080,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "870 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1OtMQNgbHvKsmcOcWxoEzErwWqOYE2da_&sz=w800",
      "https://drive.google.com/thumbnail?id=1nhM7zphX0EDYJFO8UzKHHxWvVT-1ie63&sz=w800"
    ]
  },
  {
    "id": "783",
    "title": "1 Storey Terrace House",
    "address": "No. 269, Jalan Nusari Bayu 1/4, Nusari Bayu 1, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 213840,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "230 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1rQeJvRhC0kp-Iry4PlvbqwNoedZLnS0V&sz=w800"
    ]
  },
  {
    "id": "784",
    "title": "Flat",
    "address": "Unit No. M2/5/10, Flat Taman Andalas, 71700 Mantin, Negeri Sembilan",
    "postcode": "71700",
    "state": "Negeri Sembilan",
    "area": "Mantin",
    "reservePrice": 23200,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "650 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1TFSno8ZNVRv4GhFEH3odemsqVOf7i8aP&sz=w800"
    ]
  },
  {
    "id": "785",
    "title": "2 Storey Detached House",
    "address": "No. 45, Jalan Laman Kemboja 3, Kota Seriemas, 71800 Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 494100,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "004 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=15cJO6uSWR-lrIA06NtCO6tlNF1Qz_gKi&sz=w800"
    ]
  },
  {
    "id": "786",
    "title": "2 Storey Terrace House",
    "address": "No. 10, Jalan Jati 1/1, Desa Jati, Putra Nilai, 71800 Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 301500,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "173 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1nBFA7hnPFrQKQxdTS4gUpoReID0jprz4&sz=w800"
    ]
  },
  {
    "id": "787",
    "title": "2 Storey Terrace House",
    "address": "Jalan Suriaman 1/1, Suriaman 1, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 600000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "250 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1N445avg5Xaw7Aw5nchtrpLgbUBu1nI9b&sz=w800",
      "https://drive.google.com/thumbnail?id=1FeyWTl2pOdVwzmpLNhYn-Po9ojEyDwYi&sz=w800"
    ]
  },
  {
    "id": "788",
    "title": "2 Storey Terrace House",
    "address": "Jalan SJ 5/10, Taman Seremban Jaya, 70450 Seremban, Negeri Sembilan",
    "postcode": "70450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 340000,
    "auctionDate": "9th Sep 2026 (Wed)",
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
    "id": "789",
    "title": "2 Storey Terrace House",
    "address": "Jalan Suriaman 3/8, Suriaman 3, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 520000,
    "auctionDate": "9th Sep 2026 (Wed)",
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
    "id": "790",
    "title": "1 Storey Terrace House",
    "address": "Jalan CU 6, Taman Chembong Utama (Formerly known as Taman Seri Utama), 71300 Rembau, Negeri Sembilan",
    "postcode": "71300",
    "state": "Negeri Sembilan",
    "area": "Rembau",
    "reservePrice": 230000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "450 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Ew3jNZd9_eZaC0icQEgnsgU_PTEDzaqV&sz=w800"
    ]
  },
  {
    "id": "791",
    "title": "1 Storey Terrace House",
    "address": "No. 829, Lorong Iringan Bayu 36/7, Precint 3, Taman Iringan Bayu, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 342000,
    "auctionDate": "9th Sep 2026 (Wed)",
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
    "id": "792",
    "title": "2 Storey Terrace House",
    "address": "No. 171, Jalan Nusari Bayu 6/1L, Nusari Bayu 2, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 405000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "108 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1WRHCuC8xa714ZeP7uXHZE28F9ej2FucL&sz=w800"
    ]
  },
  {
    "id": "793",
    "title": "2 Storey Semi Detached House",
    "address": "No. 619, Lorong Bukit Emas 1/6, Taman Bukit Emas, 70450 Seremban, Negeri Sembilan",
    "postcode": "70450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 820000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "391 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1MkhwHiOZJAhTeRLLDYSNQBef24HO-pFZ&sz=w800"
    ]
  },
  {
    "id": "794",
    "title": "2 Storey Terrace House",
    "address": "No. 190, Jalan Springhill 9/7, Bandar Springhill, 71100 Port Dickson, Negeri Sembilan",
    "postcode": "71100",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 230000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "112 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Hdpwgw3kd08q5i02dPq5vtniC7pTHXo-&sz=w800",
      "https://drive.google.com/thumbnail?id=1iX33VkUNNWAgg2Ctl3xhhMEQwWB11bFS&sz=w800"
    ]
  },
  {
    "id": "795",
    "title": "1 Storey Terrace House",
    "address": "No. 555, Lorong Bukit Mutiara 13/1, Taman Bukit Mutiara, 70200 Seremban, Negeri Sembilan",
    "postcode": "70200",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 250000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1e3lm0hjLQQNxKhcIeHFPeDoSLC1sgmzQ&sz=w800"
    ]
  },
  {
    "id": "796",
    "title": "1 Storey Terrace House",
    "address": "No. 390, Lorong Nusari Bayu 1/1B, Nusari Bayu 1, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 560000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "710 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1rQeJvRhC0kp-Iry4PlvbqwNoedZLnS0V&sz=w800"
    ]
  },
  {
    "id": "797",
    "title": "2 Storey Terrace House",
    "address": "No. 2621, Jalan Tiara Sendayan 8/4, Taman Tiara Sendayan, 71900 Labu, Negeri Sembilan",
    "postcode": "71900",
    "state": "Negeri Sembilan",
    "area": "Labu",
    "reservePrice": 440000,
    "auctionDate": "9th Sep 2026 (Wed)",
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
    "id": "798",
    "title": "2 Storey Terrace House",
    "address": "No. 128, Jalan Tasik Senangin 1C/3, Bandar Tasik Senangin, 71750 Lenggeng, Negeri Sembilan",
    "postcode": "71750",
    "state": "Negeri Sembilan",
    "area": "Lenggeng",
    "reservePrice": 410000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "756 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1OtMQNgbHvKsmcOcWxoEzErwWqOYE2da_&sz=w800",
      "https://drive.google.com/thumbnail?id=1nhM7zphX0EDYJFO8UzKHHxWvVT-1ie63&sz=w800"
    ]
  },
  {
    "id": "799",
    "title": "1 Storey Terrace House",
    "address": "No. 758, Lorong S2 G7/4, Garden Avenue, Seremban 2, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 410000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "200 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=15wvNjBAkSMTodYbeqkFOws-UcsDL09LC&sz=w800"
    ]
  },
  {
    "id": "800",
    "title": "Terrace House",
    "address": "Jalan Kirby 8, Taman Kirby, Batu 9, Jalan Labu, 71900 Labu, Negeri Sembilan",
    "postcode": "71900",
    "state": "Negeri Sembilan",
    "area": "Labu",
    "reservePrice": 310000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1TgfpFhdB1WimLHQUMdieTQ8Si2f7iid5&sz=w800"
    ]
  },
  {
    "id": "801",
    "title": "2 Storey Terrace House",
    "address": "No. 1043, Jalan Ara Sendayan 5/6, Ara Sendayan, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 396000,
    "auctionDate": "9th Sep 2026 (Wed)",
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
    "id": "802",
    "title": "1 Storey Detached House",
    "address": "No. 11, Jalan Tasik Senangin 18/3, Bandar Tasik Senangin, 71750 Lenggeng, Negeri Sembilan",
    "postcode": "71750",
    "state": "Negeri Sembilan",
    "area": "Lenggeng",
    "reservePrice": 330000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "004 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1OtMQNgbHvKsmcOcWxoEzErwWqOYE2da_&sz=w800",
      "https://drive.google.com/thumbnail?id=1nhM7zphX0EDYJFO8UzKHHxWvVT-1ie63&sz=w800"
    ]
  },
  {
    "id": "803",
    "title": "1 Storey Terrace House",
    "address": "No. 711, Jalan Nusa Intan 5/1, Taman Nusa Intan, 70400 Seremban, Negeri Sembilan",
    "postcode": "70400",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 350000,
    "auctionDate": "9th Sep 2026 (Wed)",
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
    "id": "804",
    "title": "Apartment",
    "address": "Unit No. 20-G-3, Blok Dahlia F, Jalan S2 G5, Garden Avenue, Seremban 2, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 130000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "624 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1mvloA-ROoryxiHdiB3xy-XGPzxCZY5jN&sz=w800"
    ]
  },
  {
    "id": "805",
    "title": "PD Tiara Bay Apartment",
    "address": "Unit No. C-3-34, Block C, PD Tiara Bay Apartments (Tiara Beach Resort), Batu 13, Jalan Pantai, Pasir Panjang, 71250 Port Dickson, Negeri Sembilan",
    "postcode": "71250",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 53100,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "505 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=19ZebStGyOtSnnEZZMosy0sVEe3VJD4RX&sz=w800",
      "https://drive.google.com/thumbnail?id=18Ia_r1ryFB19mCz5DKzn3JEug3LuX00-&sz=w800",
      "https://drive.google.com/thumbnail?id=1ukGrTZoQIqpeSkMMRXdey2y1WC5IqCpo&sz=w800"
    ]
  },
  {
    "id": "806",
    "title": "Apartment",
    "address": "Unit No. 1-G-22, Apartment Ixora, Garden Avenue, Jalan S2 G3, Seremban 2, 70300, Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 170000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "797 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1KKPYg-gzv6gr26LOCg4aatacYu1Nlq6E&sz=w800"
    ]
  },
  {
    "id": "807",
    "title": "2 Storey Semi Detached House",
    "address": "No. 22, Jalan Lukut Lagenda 1, Taman Lukut Lagenda, 71010 Port Dickson, Negeri Sembilan",
    "postcode": "71010",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 546750,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "402 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1kdnygEQgCJWQARlBepHpxWQTuAitUJ_g&sz=w800"
    ]
  },
  {
    "id": "808",
    "title": "2 Storey Terrace House",
    "address": "No. 7, Jalan D'Palma 3, Taman Bandar Senawang, 70450 Seremban, Negeri Sembilan",
    "postcode": "70450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 320760,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "560 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1SB-5MnFt-5avpsBuplnJiHDvBexR4gnO&sz=w800"
    ]
  },
  {
    "id": "809",
    "title": "2 Storey Terrace House",
    "address": "No. 2422, Jalan Tiara Sendayan 7/4, Taman Tiara Sendayan, 71900 Labu, Negeri Sembilan",
    "postcode": "71900",
    "state": "Negeri Sembilan",
    "area": "Labu",
    "reservePrice": 372600,
    "auctionDate": "10th Sep 2026 (Thu)",
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
    "id": "810",
    "title": "2 Storey Terrace House",
    "address": "No. 2087, Jalan Tiara Sendayan 6/3, Taman Tiara Sendayan, 71900 Labu, Negeri Sembilan",
    "postcode": "71900",
    "state": "Negeri Sembilan",
    "area": "Labu",
    "reservePrice": 432000,
    "auctionDate": "10th Sep 2026 (Thu)",
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
    "id": "811",
    "title": "1 Storey Terrace House",
    "address": "No. 399, Lorong TSR 12, Taman Seri Rembau, Fasa 1, 71300 Rembau, Negeri Sembilan",
    "postcode": "71300",
    "state": "Negeri Sembilan",
    "area": "Rembau",
    "reservePrice": 230000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1RXLZKdXiWssDZa_y2WH62ljuoNxLx11C&sz=w800"
    ]
  },
  {
    "id": "812",
    "title": "1 Storey Terrace House",
    "address": "Jalan Tasik Senangin 16/12, Bandar Tasik Senangin, 71750 Lenggeng, Negeri Sembilan",
    "postcode": "71750",
    "state": "Negeri Sembilan",
    "area": "Lenggeng",
    "reservePrice": 360000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1OtMQNgbHvKsmcOcWxoEzErwWqOYE2da_&sz=w800",
      "https://drive.google.com/thumbnail?id=1nhM7zphX0EDYJFO8UzKHHxWvVT-1ie63&sz=w800"
    ]
  },
  {
    "id": "813",
    "title": "1 Storey Terrace House",
    "address": "No. 759, Lorong Iringan Bayu 36/5, Precint 3, Taman Iringan Bayu, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 350000,
    "auctionDate": "10th Sep 2026 (Thu)",
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
    "id": "814",
    "title": "1 Storey Terrace House",
    "address": "No. 778, Lorong Iringan Bayu 36/5, Precint 3, Taman Iringan Bayu, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 350000,
    "auctionDate": "10th Sep 2026 (Thu)",
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
    "id": "815",
    "title": "1.5 Storey Terrace House",
    "address": "No. 1262, Jalan RJ 3/9, Taman Rasah Jaya, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 380000,
    "auctionDate": "10th Sep 2026 (Thu)",
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
    "id": "816",
    "title": "2 Storey Terrace House",
    "address": "Jalan SJ 5/10D, Taman Seremban Jaya, 70450 Seremban, Negeri Sembilan",
    "postcode": "70450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 300000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "715 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1x5qa4tzadNrbPLYnuJqAQEvFsK_-kiB6&sz=w800",
      "https://drive.google.com/thumbnail?id=1kkx413dPRxjPpbzMsTOPGBu8s2Fq743R&sz=w800"
    ]
  },
  {
    "id": "817",
    "title": "2 Storey Terrace House",
    "address": "No. 2803, Jalan Tiara Sendayan 8/10, Taman Tiara Sendayan, 71900 Labu, Negeri Sembilan",
    "postcode": "71900",
    "state": "Negeri Sembilan",
    "area": "Labu",
    "reservePrice": 450000,
    "auctionDate": "10th Sep 2026 (Thu)",
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
    "id": "818",
    "title": "1 Storey Terrace House",
    "address": "No. 132, Taman Pertama, 71000 Port Dickson, Negeri Sembilan",
    "postcode": "71000",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 250000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "188 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1SR0pn0LmaCKIuxLQVPjvetv2hvBe2ODQ&sz=w800"
    ]
  },
  {
    "id": "819",
    "title": "2 Storey Terrace House",
    "address": "No. 310, Jalan Forest Heights 2/14, Precint 2, Forest Heights, 70450 Seremban, Negeri Sembilan",
    "postcode": "70450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 480000,
    "auctionDate": "10th Sep 2026 (Thu)",
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
    "id": "820",
    "title": "1 Storey Terrace House",
    "address": "No. 6, Jalan Desa Dahlia 5, Taman Desa Dahlia, Senawang, 70450 Seremban, Negeri Sembilan",
    "postcode": "70450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 250000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1sEA929taI4BmRC725HsYz9FTjmXllcxL&sz=w800",
      "https://drive.google.com/thumbnail?id=1evBQTlPcx3SCT_o4QjM8C9IUTlRz2U_E&sz=w800",
      "https://drive.google.com/thumbnail?id=1mdh-A4I4QmE1YMl292klerBgHHGflwYZ&sz=w800"
    ]
  },
  {
    "id": "821",
    "title": "Apartment",
    "address": "Unit No. 714, The Legend Water Chalet Resort, 71000 Port Dickson, Negeri Sembilan",
    "postcode": "71000",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 180000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "602 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1OWIcWu3diSHCv8dtygJTDnylBjYppoJD&sz=w800"
    ]
  },
  {
    "id": "822",
    "title": "1 Storey Terrace House",
    "address": "No. 5578, Jalan Pinggiran Felda 5, Taman Pinggiran Felda, 73400 Gemas, Negeri Sembilan",
    "postcode": "73400",
    "state": "Negeri Sembilan",
    "area": "Gemas",
    "reservePrice": 108000,
    "auctionDate": "10th Sep 2026 (Thu)",
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
    "id": "823",
    "title": "1 Storey Terrace House",
    "address": "No. 49, Jalan Desa PD 2/2, Taman Desa PD 2, 71200 Port Dickson, Negeri Sembilan",
    "postcode": "71200",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 150000,
    "auctionDate": "10th Sep 2026 (Thu)",
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
    "id": "824",
    "title": "1 Storey Terrace House",
    "address": "No. 41, Jalan Sri Pulasan 2, Taman Sri Pulasan, 70200 Seremban, Negeri Sembilan",
    "postcode": "70200",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 250000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1u9UgmboYfKhGxW6FFbahtCpKRPQlCTKv&sz=w800"
    ]
  },
  {
    "id": "825",
    "title": "2 Storey Terrace House",
    "address": "No. 21, Jalan Jati 19, Jati Heights, Putra Nilai, 71800 Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 450000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1GFnI-LmEiZEkKKIpFv-RpKVKQ2wsXrhY&sz=w800"
    ]
  },
  {
    "id": "826",
    "title": "2 Storey Terrace House",
    "address": "No. 270, Jalan Hijayu 1/9, Hijayu 1, 70950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "70950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 520000,
    "auctionDate": "10th Sep 2026 (Thu)",
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
    "id": "827",
    "title": "1 Storey Terrace House",
    "address": "No. 1860, Jalan Bayu Sutera 4/15, Taman Bayu Sutera, 71960 Port Dickson, Negeri Sembilan",
    "postcode": "71960",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 550000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1PnWeRa4cMSRnRlyAz9urHCDUqt4ZSl1Y&sz=w800"
    ]
  },
  {
    "id": "828",
    "title": "1 Storey Terrace House",
    "address": "No. 122, Jalan Desa PD 3, Taman Desa PD, 71200 Port Dickson, Negeri Sembilan",
    "postcode": "71200",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 100000,
    "auctionDate": "10th Sep 2026 (Thu)",
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
    "id": "829",
    "title": "Vacant Detached House Land",
    "address": "Lot 21726, Jalan Aminuddin Baki, 70100 Seremban, Negeri Sembilan",
    "postcode": "21726",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 328050,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "840 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "830",
    "title": "2 Storey Terrace House",
    "address": "No. 18, Jalan Suriaman 1/1, Taman Suriaman 1, 71950, Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 490000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "496 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1N445avg5Xaw7Aw5nchtrpLgbUBu1nI9b&sz=w800",
      "https://drive.google.com/thumbnail?id=1FeyWTl2pOdVwzmpLNhYn-Po9ojEyDwYi&sz=w800"
    ]
  },
  {
    "id": "831",
    "title": "1 Storey Terrace House",
    "address": "No. 247, Jalan Zamrud 10, Taman Zamrud, 72200 Batu Kikir, Negeri Sembilan",
    "postcode": "72200",
    "state": "Negeri Sembilan",
    "area": "Batu Kikir",
    "reservePrice": 250000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1dxBG-GAllJ9WPE5N33TB011vHa5pjkvb&sz=w800",
      "https://drive.google.com/thumbnail?id=1iRiC797din_sWG9ahsfThxHF3IXR6o-J&sz=w800"
    ]
  },
  {
    "id": "832",
    "title": "1 Storey Terrace House",
    "address": "No. 2262, Jalan Ekar 5, Taman Bandar Ekar, 71200 Rantau, Negeri Sembilan",
    "postcode": "71200",
    "state": "Negeri Sembilan",
    "area": "Rantau",
    "reservePrice": 330000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "497 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1ZdVhvCUiOQ83VngigICZpwGsg30uuIwk&sz=w800"
    ]
  },
  {
    "id": "833",
    "title": "1 Storey Terrace House",
    "address": "No. 131, Lorong Selasih 4, Taman Selasih, 71000 Port Dickson, Negeri Sembilan",
    "postcode": "71000",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 111600,
    "auctionDate": "14th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "098 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1tuKyaBkG2gniIQp5bZbUQvU5nf5VQdBx&sz=w800"
    ]
  },
  {
    "id": "834",
    "title": "1 Storey Semi Detached House",
    "address": "No. 283, Lorong Rahmat 2, Taman Temiang Jaya, 70400 Seremban, Negeri Sembilan",
    "postcode": "70400",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 648000,
    "auctionDate": "14th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "341 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1WaLjGM5SQgoqnbx4JIRoQ6IzNce36YCh&sz=w800",
      "https://drive.google.com/thumbnail?id=1vmQEyIss9mbvSUlKCGM7QJ98tlwz82lh&sz=w800",
      "https://drive.google.com/thumbnail?id=1RrZRP7mZh6klVscQKXO_VorVmj__ddtb&sz=w800",
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "835",
    "title": "2 Storey Terrace House",
    "address": "No. 643, Jalan Hijayu 1/24, Hijayu 1, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 446000,
    "auctionDate": "14th Sep 2026 (Mon)",
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
    "id": "836",
    "title": "2 Storey Terrace House",
    "address": "No. 347, Jalan Bayu Sutera 1/9, Taman Bayu Sutera, 71960 Port Dickson, Negeri Sembilan",
    "postcode": "71960",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 450000,
    "auctionDate": "14th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1PnWeRa4cMSRnRlyAz9urHCDUqt4ZSl1Y&sz=w800"
    ]
  },
  {
    "id": "837",
    "title": "2 Storey Terrace House",
    "address": "No. 754, Jalan Nada Alam 6/2, Taman Nada Alam, 71700 Mantin, Negeri Sembilan",
    "postcode": "71700",
    "state": "Negeri Sembilan",
    "area": "Mantin",
    "reservePrice": 423000,
    "auctionDate": "14th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "027 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1nwgiOw4LN5GbZrHtbQjzUNvdfcOFc48H&sz=w800",
      "https://drive.google.com/thumbnail?id=1jQpzjB3OidOfx0LGK3YLtGsvnznUXR6m&sz=w800",
      "https://drive.google.com/thumbnail?id=1H6ZGg28nJyq_Aoj5UlFLCozyVr1DFKdQ&sz=w800",
      "https://drive.google.com/thumbnail?id=1j-rIiHlWNBGMx26Mm_prnpzRhuI2-2C9&sz=w800",
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "838",
    "title": "1 Storey Terrace House",
    "address": "Jalan BIL 45, Taman Bayu Indera Lukut, 71010 Port Dickson, Negeri Sembilan",
    "postcode": "71010",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 330000,
    "auctionDate": "14th Sep 2026 (Mon)",
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
    "id": "839",
    "title": "1 Storey Terrace House",
    "address": "No. 12, Jalan Belida 1, Taman Belida, 71050 Port Dickson, Negeri Sembilan",
    "postcode": "71050",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 340000,
    "auctionDate": "14th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "320 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1cm4YEhmorS15XfVya5cYF_-uZdjxQLGp&sz=w800"
    ]
  },
  {
    "id": "840",
    "title": "2 Storey Terrace House",
    "address": "No. 610, Jalan Tiara Sendayan 14/7, Taman Tiara Sendayan, 71900 Labu, Negeri Sembilan",
    "postcode": "71900",
    "state": "Negeri Sembilan",
    "area": "Labu",
    "reservePrice": 480000,
    "auctionDate": "14th Sep 2026 (Mon)",
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
    "id": "841",
    "title": "2 Storey Terrace House",
    "address": "No. 965, Jalan Hijayu 2/62, Resort Residence , Hijayu 2, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 495000,
    "auctionDate": "14th Sep 2026 (Mon)",
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
    "id": "842",
    "title": "2 Storey Terrace House",
    "address": "No. 914, Jalan Iringan Bayu 42/10, Precint 8, Taman Iringan Bayu, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 388800,
    "auctionDate": "14th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "120 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1bNqnqXq_7mnG9qQeo1ZlyrXtz5hLCPFG&sz=w800",
      "https://drive.google.com/thumbnail?id=1YRQpJ-xxWr3y_uPDdpt7RH90NqQws_fo&sz=w800"
    ]
  },
  {
    "id": "843",
    "title": "2 Storey Terrace House",
    "address": "No. 1631, Jalan Bukit Galena 31, Taman Bukit Galena, 70200 Seremban, Negeri Sembilan",
    "postcode": "70200",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 540000,
    "auctionDate": "14th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "431 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1YvbcQ1XBMo1V6uKgXdJSboFfBJsT_5GS&sz=w800",
      "https://drive.google.com/thumbnail?id=1zmMHjhtkQDd4OHkotRhrltEHTJfIC5OY&sz=w800"
    ]
  },
  {
    "id": "844",
    "title": "2 Storey Terrace House",
    "address": "No. 66, Lorong Desa Melor 1/1, Taman Desa Melor, 70450 Senawang, Negeri Sembilan",
    "postcode": "70450",
    "state": "Negeri Sembilan",
    "area": "Senawang",
    "reservePrice": 219000,
    "auctionDate": "14th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "076 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=10msmz7XbB8co5IR-xjyRUWOInxKs6lyQ&sz=w800"
    ]
  },
  {
    "id": "845",
    "title": "2 Storey Terrace House",
    "address": "No. 146, Jalan Kayangan 6, Taman Kayangan, 71700 Mantin, Negeri Sembilan",
    "postcode": "71700",
    "state": "Negeri Sembilan",
    "area": "Mantin",
    "reservePrice": 270000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "578 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1ZS41vc3sjHeCDtJTthddYRDnayRRrt3s&sz=w800"
    ]
  },
  {
    "id": "846",
    "title": "Flat",
    "address": "Unit No. C-3-1, Block C, Rumah Pangsa, Bandar Baru Ampangan, Batu 2, Jalan Kuala Pilah, 70400 Seremban, Negeri Sembilan",
    "postcode": "70400",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 87480,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "087 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Tvf-ldv7XnzipC4tYD2Pik0DcbFLGc3y&sz=w800"
    ]
  },
  {
    "id": "847",
    "title": "Residential Land",
    "address": "No. 11, Jalan Tasik Senangin 9/3, Bandar Akademia, Bandar Tasik Senangin, 71750 Lenggeng, Negeri Sembilan",
    "postcode": "71750",
    "state": "Negeri Sembilan",
    "area": "Lenggeng",
    "reservePrice": 113400,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "004 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1OtMQNgbHvKsmcOcWxoEzErwWqOYE2da_&sz=w800",
      "https://drive.google.com/thumbnail?id=1nhM7zphX0EDYJFO8UzKHHxWvVT-1ie63&sz=w800"
    ]
  },
  {
    "id": "848",
    "title": "2 Storey Terrace House",
    "address": "No. 218, Jalan Laman Mawar A/10, Taman Kota Seriemas, 71800 Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 389000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1dXiSJqm2HyQUWH7M0mH9vMjPHuTf-V1i&sz=w800"
    ]
  },
  {
    "id": "849",
    "title": "2 Storey Terrace House",
    "address": "No. 221, Jalan Laman Sendayan 1A/5, Laman Sendayan, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 405000,
    "auctionDate": "15th Sep 2026 (Tue)",
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
    "id": "850",
    "title": "2 Storey Detached House",
    "address": "PT. 727, Taman Clonlee, 73000 Tampin, Negeri Sembilan",
    "postcode": "73000",
    "state": "Negeri Sembilan",
    "area": "Tampin",
    "reservePrice": 1260000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "964 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1NtDPfNPzLwOFPN4nNDgYXjjfhPPGuuf8&sz=w800"
    ]
  },
  {
    "id": "851",
    "title": "1 Storey Terrace House",
    "address": "PT. 20748, Jalan Cempaka 18, Taman Desa Cempaka 3, 71800 Nilai, Negeri Sembilan",
    "postcode": "20748",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 306000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1nDp77_y5oLMPP99tuotzyhzkWmanbIw7&sz=w800"
    ]
  },
  {
    "id": "852",
    "title": "2 Storey Terrace House",
    "address": "No. 404, Jalan Tiara Sendayan 2/6, Taman Tiara Sendayan, 71900 Labu, Negeri Sembilan",
    "postcode": "71900",
    "state": "Negeri Sembilan",
    "area": "Labu",
    "reservePrice": 414000,
    "auctionDate": "15th Sep 2026 (Tue)",
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
    "id": "853",
    "title": "2 Storey Terrace House",
    "address": "No. 31, Jalan Sena 1/8, Taman Sena, Sungai Gadut, 71450 Seremban, Negeri Sembilan",
    "postcode": "71450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 515000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "208 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1nXuwn_C-I0lvxOSuiHmfzzKkaIK4cswS&sz=w800"
    ]
  },
  {
    "id": "854",
    "title": "1 Storey Terrace House",
    "address": "Jalan BIL 39, Taman Bayu Indera Lukut, 71010 Port Dickson, Negeri Sembilan",
    "postcode": "71010",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 260000,
    "auctionDate": "15th Sep 2026 (Tue)",
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
    "id": "855",
    "title": "1 Storey Terrace House",
    "address": "Jalan Desa PD 2/6, Taman Desa PD, 71200 Port Dickson, Negeri Sembilan",
    "postcode": "71200",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 170000,
    "auctionDate": "15th Sep 2026 (Tue)",
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
    "id": "856",
    "title": "2 Storey Terrace House",
    "address": "PT 5735, Jalan BBN 9/2A, Desa Anggerik, Putra Nilai, 71800 Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 580000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "197 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1ouRv_MO_Lo_kNhPfWEAXG1Dq7mC01WHJ&sz=w800"
    ]
  },
  {
    "id": "857",
    "title": "1 Storey Terrace House",
    "address": "No. 211, Lorong Widuri Indah 6/4, Taman Widuri Indah, 70450 Seremban, Negeri Sembilan",
    "postcode": "70450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 250000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "048 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1fLa6Q8WBCdrPA3Kw113aU_iir3F9NhTT&sz=w800"
    ]
  },
  {
    "id": "858",
    "title": "1 Storey Terrace House",
    "address": "No. 287, Jalan Lukut Makmur 4, Taman Lukut Makmur, 71010 Lukut, Negeri Sembilan",
    "postcode": "71010",
    "state": "Negeri Sembilan",
    "area": "Lukut",
    "reservePrice": 153000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1pxb_QHVFTOSxkz9G3X9i2G8PDZDwUX7J&sz=w800"
    ]
  },
  {
    "id": "859",
    "title": "Detached House",
    "address": "No. 536, Jalan S2 H15, Park Avenue, Seremban 2, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 630000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "800 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1q2DygKLCEnpTi2uaQbZt9LKDbcympW0I&sz=w800"
    ]
  },
  {
    "id": "860",
    "title": "1 Storey Terrace Factory",
    "address": "No. 536, Jalan Nilai 3/13, Kawasan Perindustrian Nilai 3, 71800 Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 600000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "003 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1SWLQfWVmXCnWV-QddDVzWcDSAe6X37_7&sz=w800"
    ]
  },
  {
    "id": "861",
    "title": "2 Storey Terrace House",
    "address": "No. 810, Jalan Ara Sendayan 3/8, Ara Sendayan, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 540000,
    "auctionDate": "15th Sep 2026 (Tue)",
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
    "id": "862",
    "title": "2 Storey Terrace House",
    "address": "No. 70, Jalan TME 5, Taman Mawar Ehsan Fasa 2, 71400 Pedas, Negeri Sembilan",
    "postcode": "71400",
    "state": "Negeri Sembilan",
    "area": "Pedas",
    "reservePrice": 364500,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "413 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1TCoVfuJeZ45cCzF88aiVt8YMEmtw5_KC&sz=w800"
    ]
  },
  {
    "id": "863",
    "title": "2 Storey Terrace Shop Office",
    "address": "No. 313, Jalan Bandar Senawang 17, Pusat Bandar Senawang, 70450 Seremban, Negeri Sembilan",
    "postcode": "70450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 670000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "604 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1_xFb-PPg9rYeOmvCvBnDyQws0_g4Xyss&sz=w800"
    ]
  },
  {
    "id": "864",
    "title": "Shop Lot",
    "address": "Unit No. LG-35, Lower Ground Floor, Terminal One Shopping Centre, No. 20B, Jalan Lintang, 70200 Seremban, Negeri Sembilan",
    "postcode": "70200",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 236196,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "734 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=19JH9AoMLg87aTgJ_MRHX7ubZXyLtBBY_&sz=w800"
    ]
  },
  {
    "id": "865",
    "title": "2 Storey Semi Detached House",
    "address": "No. 14, Jalan Laman Cempaka C/2, Kota Seriemas, 71800 Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 900000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "939 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1bE1HcIwCL-pU3hwdjIEmyP8ZTb9iVOaV&sz=w800"
    ]
  },
  {
    "id": "866",
    "title": "2 Storey Terrace House",
    "address": "No. 506, Jalan Ara Sendayan 2/6, Ara Sendayan, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 500000,
    "auctionDate": "15th Sep 2026 (Tue)",
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
    "id": "867",
    "title": "2 Storey Terrace House",
    "address": "No. 749, Jalan Ekar 5/1, Residensi PR1MA, Bandar Ekar, 71200 Rantau, Negeri Sembilan",
    "postcode": "71200",
    "state": "Negeri Sembilan",
    "area": "Rantau",
    "reservePrice": 250000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "301 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1ZdVhvCUiOQ83VngigICZpwGsg30uuIwk&sz=w800"
    ]
  },
  {
    "id": "868",
    "title": "Terrace House",
    "address": "No. 20, Lorong Permata 5/2, Taman Permata, 70200 Seremban, Negeri Sembilan",
    "postcode": "70200",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 280000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "206 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d9FWqDgQkUlafpHBdtODiBwgvWF2slOb&sz=w800"
    ]
  },
  {
    "id": "869",
    "title": "1 Storey Semi Detached House",
    "address": "No. 243, Jalan Palma Jaya 8, Taman PJ Perdana, 70400 Seremban, Negeri Sembilan",
    "postcode": "70400",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 342000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "197 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1_-bujcEFmspPni31Nhm9CDD9NdiNF0a6&sz=w800"
    ]
  },
  {
    "id": "870",
    "title": "2 Storey Semi Detached House",
    "address": "No. 208, Jalan Hijayu 2/29, Hijayu 2, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 1215000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "005 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1cHhxddEgKVbkOtmAOBBJ6XuxtBG5ktl4&sz=w800",
      "https://drive.google.com/thumbnail?id=1dxAoaW9t-UGvzLPoMTTnxFeYgUuZsHme&sz=w800",
      "https://drive.google.com/thumbnail?id=1AS-fvrbSl6eV2ov6BR9lFgo4X6WygOzD&sz=w800"
    ]
  },
  {
    "id": "871",
    "title": "1 Storey Terrace House",
    "address": "No. 1064, Lorong Seremban Tiga 35/2, Taman Seremban 3, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 330000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "300 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HsgDbBmGQ2u1F-aNdiHHYpXDUrEIIuBA&sz=w800"
    ]
  },
  {
    "id": "872",
    "title": "2 Storey Terrace House",
    "address": "No. 537, Lorong Iringan Bayu 35/8, Mekary, Precint 3, Taman Iringan Bayu, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 378000,
    "auctionDate": "15th Sep 2026 (Tue)",
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
    "id": "873",
    "title": "1 Storey Terrace House",
    "address": "No. 84, Jalan BIL 7, Taman Bayu Indera, 71010 Port Dickson, Negeri Sembilan",
    "postcode": "71010",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 300000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1NzpokR03hf6GtJzT9qg1JXRIIEsGfG-Y&sz=w800",
      "https://drive.google.com/thumbnail?id=1TtdFr94rJc4mdli1Wt7YH_5IzeMu3_0g&sz=w800",
      "https://drive.google.com/thumbnail?id=1gkZdKabziqlIzawraO6beVPwcUJa_d3f&sz=w800"
    ]
  },
  {
    "id": "874",
    "title": "2.5 Storey Semi Detached House",
    "address": "No. 77, Jalan TTJS 3/10, Taman Tuanku Jaafar, 71450 Seremban, Negeri Sembilan",
    "postcode": "71450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 600000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "348 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1gYPM59kK9_sx4ISuC21TNodle7HfoKby&sz=w800"
    ]
  },
  {
    "id": "875",
    "title": "1 Storey Terrace House",
    "address": "No. 431, Jalan Desa PD 2/6, Taman Desa PD 2, 71200 Port Dickson, Negeri Sembilan",
    "postcode": "71200",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 129600,
    "auctionDate": "15th Sep 2026 (Tue)",
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
    "id": "876",
    "title": "1 Storey Terrace House",
    "address": "No. 196, Jalan Desa PD 2/3, Taman Desa PD 2, 71200 Port Dickson, Negeri Sembilan",
    "postcode": "71200",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 113400,
    "auctionDate": "15th Sep 2026 (Tue)",
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
    "id": "877",
    "title": "2 Storey Terrace House",
    "address": "No. 683, Jalan S2 D22, Garden City Homes, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 540000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "819 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "878",
    "title": "1 Storey Terrace House",
    "address": "No. 228, Jalan Desa PD 2/4, Taman Desa PD 2, 71200 Port Dickson, Negeri Sembilan",
    "postcode": "71200",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 121500,
    "auctionDate": "15th Sep 2026 (Tue)",
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
    "id": "879",
    "title": "1 Storey Terrace House",
    "address": "No. 81, Lengkok Redani, Taman Redani, 72500 Juasseh, Negeri Sembilan",
    "postcode": "72500",
    "state": "Negeri Sembilan",
    "area": "Juasseh",
    "reservePrice": 216000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1uSrGKTEX9SOK7j9PlbNeFw_czXoE1Puv&sz=w800"
    ]
  },
  {
    "id": "880",
    "title": "1 Storey Terrace House",
    "address": "No. 154, Jalan Lily 4, Taman Lily, 72100, Bahau, Negeri Sembilan",
    "postcode": "72100",
    "state": "Negeri Sembilan",
    "area": "Bahau",
    "reservePrice": 225000,
    "auctionDate": "18th Sep 2026 (Fri)",
    "landArea": "—",
    "builtUp": "032 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Ml-nMQLhK3jsLoN_oEXxxp_3VgFaavTt&sz=w800"
    ]
  },
  {
    "id": "881",
    "title": "1 Storey Terrace House",
    "address": "No. 291, Lorong Iringan Bayu 34/9, Precint 3, Taman Iringan Bayu, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 262440,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "205 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1bNqnqXq_7mnG9qQeo1ZlyrXtz5hLCPFG&sz=w800",
      "https://drive.google.com/thumbnail?id=1YRQpJ-xxWr3y_uPDdpt7RH90NqQws_fo&sz=w800"
    ]
  },
  {
    "id": "882",
    "title": "2 Storey Terrace House",
    "address": "No. 340, Jalan Suriaman 2/7, Suriaman 2, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 365000,
    "auctionDate": "21st Sep 2026 (Mon)",
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
    "id": "883",
    "title": "2 Storey Cluster House",
    "address": "No. 104, Jalan Jaya 1/8, Taman Jaya 1, 71700 Mantin, Negeri Sembilan",
    "postcode": "71700",
    "state": "Negeri Sembilan",
    "area": "Mantin",
    "reservePrice": 438000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "686 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1oLk61PWyKvRptC-TGTRW3ZebbLcXmPq4&sz=w800",
      "https://drive.google.com/thumbnail?id=1U3sWV2Ko6qukI8ONpAGgF0s-LtVk8Kyc&sz=w800"
    ]
  },
  {
    "id": "884",
    "title": "1 Storey Terrace House",
    "address": "No. 5603, Jalan Pinggiran Felda 6, Taman Pinggiran Felda, 73400 Gemas, Negeri Sembilan",
    "postcode": "73400",
    "state": "Negeri Sembilan",
    "area": "Gemas",
    "reservePrice": 121500,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "902 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1oNXeoGsMIX9_jXyABaWt0Jg4Dbu9kUdN&sz=w800",
      "https://drive.google.com/thumbnail?id=1AsK1Um9-TbOlsR2PA9Ojq2t8ORz4WMtT&sz=w800"
    ]
  },
  {
    "id": "885",
    "title": "2 Storey Terrace House",
    "address": "No. 2236, Jalan Tiara Sendayan 7/7, Tiara Sendayan, 71900 Labu, Negeri Sembilan",
    "postcode": "71900",
    "state": "Negeri Sembilan",
    "area": "Labu",
    "reservePrice": 414000,
    "auctionDate": "21st Sep 2026 (Mon)",
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
    "id": "886",
    "title": "Retail Lot",
    "address": "Unit No. F-04, First Floor, Terminal One Shopping Centre, Jalan Lintang, 70000 Seremban, Negeri Sembilan",
    "postcode": "70000",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 72000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "430 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=19JH9AoMLg87aTgJ_MRHX7ubZXyLtBBY_&sz=w800"
    ]
  },
  {
    "id": "887",
    "title": "2 Storey Terrace House",
    "address": "No. 180, Jalan Nada Alam 2/6, Taman Nada Alam, 71700 Mantin, Negeri Sembilan",
    "postcode": "71700",
    "state": "Negeri Sembilan",
    "area": "Mantin",
    "reservePrice": 567000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "895 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1nwgiOw4LN5GbZrHtbQjzUNvdfcOFc48H&sz=w800"
    ]
  },
  {
    "id": "888",
    "title": "2 Storey Cluster House",
    "address": "No. 112, Jalan Impiana, Impiana Residence, 71800 Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 495000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "271 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1oMg5OIz6qeI5zxFmuDFOSrGCXVTsMEBp&sz=w800"
    ]
  },
  {
    "id": "889",
    "title": "1 Storey Terrace House",
    "address": "No. 67, Jalan NS 5, Taman Nada Seruni, 72500 Juasseh, Negeri Sembilan",
    "postcode": "72500",
    "state": "Negeri Sembilan",
    "area": "Juasseh",
    "reservePrice": 216000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1CXX0FqiKjlRd4MZ1noSXCQzCc5ftYSBA&sz=w800"
    ]
  },
  {
    "id": "890",
    "title": "1 Storey Terrace House",
    "address": "No. 570, Jalan Bukit Mutiara 13, Taman Bukit Mutiara, 70200 Seremban, Negeri Sembilan",
    "postcode": "70200",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 340000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "058 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1e3lm0hjLQQNxKhcIeHFPeDoSLC1sgmzQ&sz=w800"
    ]
  },
  {
    "id": "891",
    "title": "2 Storey Terrace House",
    "address": "Jalan Laman Sendayan 1A/3, Laman Sendayan, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 470000,
    "auctionDate": "21st Sep 2026 (Mon)",
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
    "id": "892",
    "title": "Town House",
    "address": "Unit No. 32-G, Jalan 1A/5, Bandar Ainsdale, 70200 Seremban, Negeri Sembilan",
    "postcode": "70200",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 280000,
    "auctionDate": "21st Sep 2026 (Mon)",
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
    "id": "893",
    "title": "1 Storey Terrace House",
    "address": "No. 744, Jalan Nusari Bayu 2/8, Nusari Bayu 1, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 430000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "052 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1rQeJvRhC0kp-Iry4PlvbqwNoedZLnS0V&sz=w800"
    ]
  },
  {
    "id": "894",
    "title": "1 Storey Terrace House",
    "address": "No. 1140, Jalan TBK 4-2/9, Taman Bukit Kepayang, 70200 Seremban, Negeri Sembilan",
    "postcode": "70200",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 360000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "608 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1sOR4EDqXMtQzVz7EeBOxOmiu3h5EjIey&sz=w800",
      "https://drive.google.com/thumbnail?id=1R7TfEVn0i7yrfBXNuotCNlIRrLltLLkA&sz=w800"
    ]
  },
  {
    "id": "895",
    "title": "Flat",
    "address": "Unit No. F-5-1, 5th Floor, Block F, Flat Wangsa Delima, Jalan Tun Sri Manickavasagam, 70200 Seremban, Negeri Sembilan",
    "postcode": "70200",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 45000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "689 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1E1u1sT04L-lM1N3OlaP_ux9kUgKt8Zs4&sz=w800"
    ]
  },
  {
    "id": "896",
    "title": "2 Storey Shop House",
    "address": "No. 65, Jalan KU 5, Pusat Komersil Universiti, Seremban 3, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 388800,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "876 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1oob7lX4ZxA2lg78ibHdAHQ-JmR_2IsT0&sz=w800"
    ]
  },
  {
    "id": "897",
    "title": "2 Storey Terrace Shop Office",
    "address": "Premises No. 3799 (Unit Nos. 3799 & 3799-1), Jalan RJ 6/9, Taman Rasah Jaya, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 495000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "798 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1kZv29DthQRe4BUjXdxzICN1lMGumEs0E&sz=w800",
      "https://drive.google.com/thumbnail?id=1yYW_v03nncFf9JgzSwZkWbYANWmuckgo&sz=w800",
      "https://drive.google.com/thumbnail?id=1aGaxR4gvFRn2O_-qqMdaFnbZmU96v3kp&sz=w800"
    ]
  },
  {
    "id": "898",
    "title": "2 Storey Terrace House",
    "address": "No. 139, Jalan Hijayu 3/7, Hijayu 3, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 437400,
    "auctionDate": "21st Sep 2026 (Mon)",
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
    "id": "899",
    "title": "1 Storey Terrace House",
    "address": "No. 2113, Jalan Ekar 4/22, Taman Bandar Ekar, 71200, Rantau, Negeri Sembilan",
    "postcode": "71200",
    "state": "Negeri Sembilan",
    "area": "Rantau",
    "reservePrice": 400000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "155 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1ZdVhvCUiOQ83VngigICZpwGsg30uuIwk&sz=w800"
    ]
  },
  {
    "id": "900",
    "title": "Apartment",
    "address": "Unit No. S2-4-15, Seroja Apartment, Jalan Bunga Raya 21, Taman Tasik Jaya, 70400 Seremban, Negeri Sembilan",
    "postcode": "70400",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 100000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "646 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "901",
    "title": "2 Storey Terrace House",
    "address": "No. 1237, Jalan Nusa Intan 1/10, Taman Nusa Intan, 70400 Seremban, Negeri Sembilan",
    "postcode": "70400",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 355000,
    "auctionDate": "21st Sep 2026 (Mon)",
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
    "id": "902",
    "title": "1 Storey Terrace House",
    "address": "No. 201 (PT 2725), Taman Musytari, 72200 Batu Kikir, Negeri Sembilan",
    "postcode": "72200",
    "state": "Negeri Sembilan",
    "area": "Batu Kikir",
    "reservePrice": 216000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=14q3SPpH7bPDc4SBhHAT1KLIb6HVUZhpZ&sz=w800",
      "https://drive.google.com/thumbnail?id=1wTFc4_wrnMkP5iF5G1zp9DBz7kVcRopg&sz=w800",
      "https://drive.google.com/thumbnail?id=1LAawNF63WUamkHgG6rDz6NrlPRSuLc2h&sz=w800"
    ]
  },
  {
    "id": "903",
    "title": "3 Storey Shop Office",
    "address": "PT 7398, Jalan BBN 1/2J, Putra Point, Putra Nilai, 71800 Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 750000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "798 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "904",
    "title": "1 Storey Terrace House",
    "address": "No. 7, Lorong Desa Rhu 6/4, Taman Desa Rhu, Sikamat, 70400 Seremban, Negeri Sembilan",
    "postcode": "70400",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 180000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "194 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1I67GlC34DZMy3nJxS77ahjg7Ek7n4SIb&sz=w800"
    ]
  },
  {
    "id": "905",
    "title": "2 Storey Terrace House",
    "address": "No. 530, Persiaran Bukit Coral 1, Taman Bukit Coral, Sikamat, 70400 Seremban, Negeri Sembilan",
    "postcode": "70400",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 370000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "464 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1F01wJntxmdfjXdgIkiLMLfxtDfkqIu0R&sz=w800"
    ]
  },
  {
    "id": "906",
    "title": "2 Storey Semi Detached House",
    "address": "No. 6, Jalan Orkid 2/1, Taman Orkid 2, 73200 Gemencheh, Negeri Sembilan",
    "postcode": "73200",
    "state": "Negeri Sembilan",
    "area": "Gemencheh",
    "reservePrice": 550000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "584 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1Crmo647AwGv11vjvCpfjSofU_BlRQplu&sz=w800"
    ]
  },
  {
    "id": "907",
    "title": "1 Storey Terrace House",
    "address": "No. 133, Jalan Sri Aman 6, Taman Sri Aman Lukut, 71010, Port Dickson, Negeri Sembilan",
    "postcode": "71010",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 250000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "194 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Phd4LQx3WebFpmT1oOt5yprF7vsh02g6&sz=w800"
    ]
  },
  {
    "id": "908",
    "title": "2 Storey Terrace House",
    "address": "No. 246, Jalan Arowana 5, Taman Arowana, 71750 Lenggeng, Negeri Sembilan",
    "postcode": "71750",
    "state": "Negeri Sembilan",
    "area": "Lenggeng",
    "reservePrice": 414000,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=10jMTgy7pNe0uMdmz6Hbmg85n0ptfT-Zh&sz=w800"
    ]
  },
  {
    "id": "909",
    "title": "1 Storey Terrace House",
    "address": "No. 58, Jalan Tasik Senangin 16/12, Bandar Tasik Senangin, 71750 Lenggeng, Negeri Sembilan",
    "postcode": "71750",
    "state": "Negeri Sembilan",
    "area": "Lenggeng",
    "reservePrice": 500000,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "691 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1OtMQNgbHvKsmcOcWxoEzErwWqOYE2da_&sz=w800",
      "https://drive.google.com/thumbnail?id=1nhM7zphX0EDYJFO8UzKHHxWvVT-1ie63&sz=w800"
    ]
  },
  {
    "id": "910",
    "title": "Shop Office",
    "address": "No. 143, Jalan Bandar Senawang 7, Pusat Bandar Senawang, 70450 Senawang, Negeri Sembilan",
    "postcode": "70450",
    "state": "Negeri Sembilan",
    "area": "Senawang",
    "reservePrice": 500000,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1_xFb-PPg9rYeOmvCvBnDyQws0_g4Xyss&sz=w800"
    ]
  },
  {
    "id": "911",
    "title": "2 Storey Terrace House",
    "address": "No. 34, Jalan Bukit Mantin 9, Taman Bukit Mantin, 71700 Mantin, Negeri Sembilan",
    "postcode": "71700",
    "state": "Negeri Sembilan",
    "area": "Mantin",
    "reservePrice": 576000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "423 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VfSAqK4pu9i2qDfBkz0Zse8f5bYaNm9G&sz=w800"
    ]
  },
  {
    "id": "912",
    "title": "Town House",
    "address": "No. 68A, Cempaka Seri 1, Jalan Laman Cempaka 2, Laman Cempaka, Kota Seriemas, 71800 Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 400000,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "442 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1bE1HcIwCL-pU3hwdjIEmyP8ZTb9iVOaV&sz=w800"
    ]
  },
  {
    "id": "913",
    "title": "2 Storey Terrace House",
    "address": "No. 1011, Lorong Iringan Bayu 37/5, Precint 3, Taman Iringan Bayu, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 296000,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "678 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1bNqnqXq_7mnG9qQeo1ZlyrXtz5hLCPFG&sz=w800",
      "https://drive.google.com/thumbnail?id=1YRQpJ-xxWr3y_uPDdpt7RH90NqQws_fo&sz=w800"
    ]
  },
  {
    "id": "914",
    "title": "Town House",
    "address": "Unit No. 37A, Cempaka Seri 1, Jalan Laman Cempaka 2, Kota Seriemas, Labu, 71800 Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 324000,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "442 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=17Hdi9eW8aaJprPsKX1s9iIngYlgzSqt8&sz=w800"
    ]
  },
  {
    "id": "915",
    "title": "1 Storey Terrace House",
    "address": "No. 2374, Jalan Ekar 5/3, Bandar Ekar, 71200 Rantau, Negeri Sembilan",
    "postcode": "71200",
    "state": "Negeri Sembilan",
    "area": "Rantau",
    "reservePrice": 186000,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1ZdVhvCUiOQ83VngigICZpwGsg30uuIwk&sz=w800"
    ]
  },
  {
    "id": "916",
    "title": "1 Storey Semi Detached House",
    "address": "No. 1134, Jalan BSS 2/6B, Bandar Seremban Selatan, 71450 Seremban, Negeri Sembilan",
    "postcode": "71450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 345000,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "449 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1VHEketmllxMqadBCasUBK2muf245MLcj&sz=w800"
    ]
  },
  {
    "id": "917",
    "title": "1 Storey Terrace House",
    "address": "PT 15063, Jalan Cempaka 23, Desa Cempaka 2, Putra Nilai, 71800 Nilai, Negeri Sembilan",
    "postcode": "15063",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 590000,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "740 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1nDp77_y5oLMPP99tuotzyhzkWmanbIw7&sz=w800"
    ]
  },
  {
    "id": "918",
    "title": "2 Storey Terrace House",
    "address": "No. 25, Jalan Orkid 2/2, Taman Orkid 2, 73200 Gemencheh, Negeri Sembilan",
    "postcode": "73200",
    "state": "Negeri Sembilan",
    "area": "Gemencheh",
    "reservePrice": 218700,
    "auctionDate": "5th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "581 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Crmo647AwGv11vjvCpfjSofU_BlRQplu&sz=w800"
    ]
  },
  {
    "id": "919",
    "title": "2 Storey Terrace House",
    "address": "No. 221, Jalan Bakti YNS 1/6, Taman Bakti YNS, 71900 Labu, Negeri Sembilan",
    "postcode": "71900",
    "state": "Negeri Sembilan",
    "area": "Labu",
    "reservePrice": 405000,
    "auctionDate": "5th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "108 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1vb4H0900Pg8xOoWRInzT7KNNVxRaTHOS&sz=w800"
    ]
  },
  {
    "id": "920",
    "title": "Apartment",
    "address": "Block 7, Cempakapuri Apartment, Taman Desa Cempaka, Putra Nilai, 71800 Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 141750,
    "auctionDate": "5th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "850 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1hvGxuZc3BU9cEmNpH-YoMRpApxh-gPHW&sz=w800",
      "https://drive.google.com/thumbnail?id=1h3Yq-cFXvhyotpLZk2P1NTz5TXmQhf_F&sz=w800"
    ]
  },
  {
    "id": "921",
    "title": "2 Storey Terrace House",
    "address": "No. 656, Jalan Suriaman 2/25, Suriaman 2, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 608000,
    "auctionDate": "5th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "907 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1yk8-nBkuW2Yzmp2OmhJmbQVWQlYURH1w&sz=w800",
      "https://drive.google.com/thumbnail?id=1sc6hXTW_VBGGiVfp7u4RiJpHdop3Sg7i&sz=w800",
      "https://drive.google.com/thumbnail?id=1VamGpec3-jLfUtz9BaIPoo4IgSIaw606&sz=w800"
    ]
  },
  {
    "id": "922",
    "title": "Flat",
    "address": "Rumah Pangsa Taman Senangin, Taman Senangin, 70450 Seremban, Negeri Sembilan",
    "postcode": "70450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 81000,
    "auctionDate": "5th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "624 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1MMbq3w7LKPZFDNTpNMyBvgzJvjzwqcsQ&sz=w800"
    ]
  },
  {
    "id": "923",
    "title": "Apartment",
    "address": "Block F, Tiara Beach Resort, Batu 13, Jalan Pasir Panjang, 71250 Port Dickson, Negeri Sembilan",
    "postcode": "71250",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 40500,
    "auctionDate": "5th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "344 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=19ZebStGyOtSnnEZZMosy0sVEe3VJD4RX&sz=w800",
      "https://drive.google.com/thumbnail?id=18Ia_r1ryFB19mCz5DKzn3JEug3LuX00-&sz=w800",
      "https://drive.google.com/thumbnail?id=1ukGrTZoQIqpeSkMMRXdey2y1WC5IqCpo&sz=w800"
    ]
  },
  {
    "id": "924",
    "title": "1 Storey Semi Detached House",
    "address": "No. 232, Jalan Bunga Sejati 9, Taman Bunga Sejati, 71200 Rantau, Negeri Sembilan",
    "postcode": "71200",
    "state": "Negeri Sembilan",
    "area": "Rantau",
    "reservePrice": 283500,
    "auctionDate": "5th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "230 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1ktCGAhaJQzbXoTwFJaCjeVxY1FeXj7wZ&sz=w800"
    ]
  },
  {
    "id": "925",
    "title": "2 Storey Terrace House",
    "address": "No. 113, Jalan Residensi SIGC 5, Residensi SIGC, 70400 Seremban, Negeri Sembilan",
    "postcode": "70400",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 747000,
    "auctionDate": "5th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "068 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HSrU_3HJhijRDjwEVm_fLwXHSpXlb4_C&sz=w800",
      "https://drive.google.com/thumbnail?id=1tlVQQnwXocFjdj9mGzJqBKXNAxT6Z98r&sz=w800"
    ]
  },
  {
    "id": "926",
    "title": "1 Storey Terrace House",
    "address": "No. 865, Jalan Politeknik 16, Taman Politeknik, 71050 Port Dickson, Negeri Sembilan",
    "postcode": "71050",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 240000,
    "auctionDate": "5th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1ayIrqFMEx_0L830SyXJg8p45CCJu86GN&sz=w800"
    ]
  },
  {
    "id": "927",
    "title": "2 Storey Terrace Shop Office",
    "address": "PT. 47, Jalan PKRB 2, Pusat Komersil Repah, 73000 Tampin, Negeri Sembilan",
    "postcode": "73000",
    "state": "Negeri Sembilan",
    "area": "Tampin",
    "reservePrice": 225000,
    "auctionDate": "5th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "928",
    "title": "2 Storey Terrace House",
    "address": "No. 474, Jalan Forest Heights 3/19, Precinct 3A, Forest Heights, 70450 Seremban, Negeri Sembilan",
    "postcode": "70450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 650000,
    "auctionDate": "7th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "304 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1wEkJGISHjuGxEuDK8uvWrD0uXjQRURRy&sz=w800",
      "https://drive.google.com/thumbnail?id=11zdgOHLTu5n9CZkjLDFX2f5-vqv8T4q7&sz=w800"
    ]
  },
  {
    "id": "929",
    "title": "2 Storey Terrace House",
    "address": "No. 61, Jalan Laman Orkid 4/2, Nilai Impian (on site known as Laman Orkid), 71800 Nilai, Negeri Sembilan",
    "postcode": "71800",
    "state": "Negeri Sembilan",
    "area": "Nilai",
    "reservePrice": 348000,
    "auctionDate": "8th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "304 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "930",
    "title": "2 Storey Terrace House",
    "address": "No. 290, Jalan Forest Heights 2/13, Precint 2, Forest Heights, 70450 Seremban, Negeri Sembilan",
    "postcode": "70450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 477000,
    "auctionDate": "8th Oct 2026 (Thu)",
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
    "id": "931",
    "title": "2 Storey Terrace House",
    "address": "Jalan Bukit Citra 5, Taman Bukit Citra, 71700 Mantin, Negeri Sembilan",
    "postcode": "71700",
    "state": "Negeri Sembilan",
    "area": "Mantin",
    "reservePrice": 441000,
    "auctionDate": "12th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1uwizljoS-YXIUpqAQIHP029Ju_DtxZtb&sz=w800"
    ]
  },
  {
    "id": "932",
    "title": "2 Storey Terrace House",
    "address": "No. 479, Lorong Iringan Bayu 41/5, Precinct 8, Taman Iringan Bayu, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 364500,
    "auctionDate": "12th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "783 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1bNqnqXq_7mnG9qQeo1ZlyrXtz5hLCPFG&sz=w800",
      "https://drive.google.com/thumbnail?id=1YRQpJ-xxWr3y_uPDdpt7RH90NqQws_fo&sz=w800"
    ]
  },
  {
    "id": "933",
    "title": "1 Storey Terrace House",
    "address": "No. 126, Lorong Iringan Bayu 34/6, Precint 3, Taman Iringan Bayu, Mambau, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 315000,
    "auctionDate": "12th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "040 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1bNqnqXq_7mnG9qQeo1ZlyrXtz5hLCPFG&sz=w800",
      "https://drive.google.com/thumbnail?id=1YRQpJ-xxWr3y_uPDdpt7RH90NqQws_fo&sz=w800"
    ]
  },
  {
    "id": "934",
    "title": "Terrace House",
    "address": "Lorong Iringan Bayu 42/10, Precint 8, Taman Iringan Bayu, 70300, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Negeri Sembilan",
    "reservePrice": 400000,
    "auctionDate": "12th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "903 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1bNqnqXq_7mnG9qQeo1ZlyrXtz5hLCPFG&sz=w800",
      "https://drive.google.com/thumbnail?id=1YRQpJ-xxWr3y_uPDdpt7RH90NqQws_fo&sz=w800"
    ]
  },
  {
    "id": "935",
    "title": "2 Storey Terrace House",
    "address": "No. 62, Jalan Rimbun Alam 6, Rimbun Alam, Seremban 2 Heights, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 585000,
    "auctionDate": "13th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "764 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "936",
    "title": "2 Storey Terrace House",
    "address": "No. 322, Jalan Springhill 7/8, Residence 7, Bandar Springhill, 71010 Port Dickson, Negeri Sembilan",
    "postcode": "71010",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 396000,
    "auctionDate": "13th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1vgeMy-PI1sEcOcjTBCDu9G10lPFxGbBZ&sz=w800"
    ]
  },
  {
    "id": "937",
    "title": "2 Storey Terrace House",
    "address": "Jalan Bunga Raya 35, Taman Tasik Jaya 2, 70400 Seremban, Negeri Sembilan",
    "postcode": "70400",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 440000,
    "auctionDate": "13th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "981 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JfUY3PfTiURg3qMuhDPJi0dj70id9Mz1&sz=w800"
    ]
  },
  {
    "id": "938",
    "title": "Detached House",
    "address": "Jalan Bukit Senawang Perdana 23, Taman Bukit Senawang Perdana, 71450 Seremban, Negeri Sembilan",
    "postcode": "71450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 730000,
    "auctionDate": "13th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "420 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xtVyA6ukYJTTJBRoj35RH5RiN9VUa9r-&sz=w800"
    ]
  },
  {
    "id": "939",
    "title": "Terrace House",
    "address": "Jalan Sendayan Indah 11, Taman Sendayan Indah, 71900 Labu, Negeri Sembilan",
    "postcode": "71900",
    "state": "Negeri Sembilan",
    "area": "Labu",
    "reservePrice": 245000,
    "auctionDate": "13th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=19KQPXwzfXTFZzayOBQiCPq1CAaeOoDS1&sz=w800",
      "https://drive.google.com/thumbnail?id=1UL930fiAxx1S-DzsuzhXGQ1EZLt7X3Lc&sz=w800",
      "https://drive.google.com/thumbnail?id=1P1rPHk1dX0qmzZq25MGDmo2pnB8BC8q5&sz=w800"
    ]
  },
  {
    "id": "940",
    "title": "2 Storey Terrace House",
    "address": "Jalan Irama Sendayan 2/3F, Taman Irama Sendayan 2, 71900 Labu, Negeri Sembilan",
    "postcode": "71900",
    "state": "Negeri Sembilan",
    "area": "Labu",
    "reservePrice": 450000,
    "auctionDate": "14th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1EVoTilvWYkMuJB72XrKaqeuZ0ef0lZj3&sz=w800",
      "https://drive.google.com/thumbnail?id=1lUxVjS25wEKl4j0CHgrYMDQoSG-MeNlB&sz=w800",
      "https://drive.google.com/thumbnail?id=1igNO6UBpOIVw1ZoS69xeFsBwkVjUkSlz&sz=w800",
      "https://drive.google.com/thumbnail?id=1RgFhNnJfIFM5wDcWcpqFKvK6-IWYAqpC&sz=w800",
      "https://drive.google.com/thumbnail?id=1vQTymssqwriLFmG3OrqlcRh53lm1UI7h&sz=w800"
    ]
  },
  {
    "id": "941",
    "title": "2 Storey Terrace House",
    "address": "Jalan Nusari Bayu 6/1G, Taman Nusari Bayu 2, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 440000,
    "auctionDate": "14th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1WRHCuC8xa714ZeP7uXHZE28F9ej2FucL&sz=w800"
    ]
  },
  {
    "id": "942",
    "title": "1 Storey Terrace House",
    "address": "Jalan MIEL 14/S1, Taman Pedas Perdana, 71400 Pedas, Negeri Sembilan",
    "postcode": "71400",
    "state": "Negeri Sembilan",
    "area": "Pedas",
    "reservePrice": 90000,
    "auctionDate": "19th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "200 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1dK8edbJUhT4FDGRJymAA1JlQDi4zagot&sz=w800"
    ]
  },
  {
    "id": "943",
    "title": "Terrace House",
    "address": "Jalan Tiara Sendayan 14/11, Taman Tiara Sendayan, 71900 Labu, Negeri Sembilan",
    "postcode": "71900",
    "state": "Negeri Sembilan",
    "area": "Labu",
    "reservePrice": 480000,
    "auctionDate": "21st Oct 2026 (Wed)",
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
    "id": "944",
    "title": "Terrace House",
    "address": "Jalan Irama Sendayan 2/1E, Taman Irama Sendayan, 71900 Labu, Negeri Sembilan",
    "postcode": "71900",
    "state": "Negeri Sembilan",
    "area": "Labu",
    "reservePrice": 650000,
    "auctionDate": "11th Nov 2026 (Wed)",
    "landArea": "—",
    "builtUp": "337 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1EVoTilvWYkMuJB72XrKaqeuZ0ef0lZj3&sz=w800",
      "https://drive.google.com/thumbnail?id=1lUxVjS25wEKl4j0CHgrYMDQoSG-MeNlB&sz=w800",
      "https://drive.google.com/thumbnail?id=1igNO6UBpOIVw1ZoS69xeFsBwkVjUkSlz&sz=w800",
      "https://drive.google.com/thumbnail?id=1RgFhNnJfIFM5wDcWcpqFKvK6-IWYAqpC&sz=w800",
      "https://drive.google.com/thumbnail?id=1vQTymssqwriLFmG3OrqlcRh53lm1UI7h&sz=w800"
    ]
  },
  {
    "id": "945",
    "title": "2 Storey Terrace House",
    "address": "No. 408, Jalan Bayu Sutera 2/1, Taman Bayu Sutera, 71010 Port Dickson, Negeri Sembilan",
    "postcode": "71010",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 450000,
    "auctionDate": "12th Nov 2026 (Thu)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1PnWeRa4cMSRnRlyAz9urHCDUqt4ZSl1Y&sz=w800"
    ]
  },
  {
    "id": "946",
    "title": "2 Storey Terrace House",
    "address": "No. 47A, Lengkok Sinar Intan 4/2, Taman Sinar Intan 3, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 243000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "947",
    "title": "2 Storey Terrace House",
    "address": "No. 237, Jalan Yarra 7/7, Bandar Puteri Jaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 360000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "948",
    "title": "Agricultural Land",
    "address": "Lot 11598, Jalan Bukit Tegor, Cerkam Jaya, Kampung Bukit Mat Insun, 06700 Pendang, Kedah",
    "postcode": "11598",
    "state": "Kedah",
    "area": "Pendang",
    "reservePrice": 1291402,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "949",
    "title": "1 Storey Terrace House",
    "address": "No. 2973, Jalan Mutiara 9/5, Taman Mutiara, 09700 Karangan, Kedah",
    "postcode": "09700",
    "state": "Kedah",
    "area": "Karangan",
    "reservePrice": 234000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "800 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "950",
    "title": "2 Storey Terrace House",
    "address": "No. 310, Jalan Batik 1/1, Taman Batik, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 236196,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "161 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "951",
    "title": "1 Storey Semi Detached House",
    "address": "No. 437, Jalan SP Heights 12, SP Heights, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 194400,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "640 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "952",
    "title": "1 Storey Semi Detached House",
    "address": "No. 677, Jalan Kenanga 7, Bandar Amanjaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 230400,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "809 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "953",
    "title": "Semi Detached House",
    "address": "No. 156, Jalan SP Heights 5, SP Heights, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 234900,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "198 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "954",
    "title": "1 Storey Semi Detached House",
    "address": "No. 483, Jalan SP Heights 14, SP Heights, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 186300,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "640 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "955",
    "title": "1 Storey Semi Detached House",
    "address": "No. 353, Jalan SP Heights 9, SP Heights, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 243000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "640 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "956",
    "title": "1 Storey Terrace House",
    "address": "No. 46, Jalan Kobis 2, Taman Kobis, 09600 Lunas, Kedah",
    "postcode": "09600",
    "state": "Kedah",
    "area": "Lunas",
    "reservePrice": 230000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "957",
    "title": "1 Storey Semi Detached House",
    "address": "No. 128, Jalan Cahaya Kristal 10, Taman Cahaya Kristal, 34950 Bandar Baharu, Kedah",
    "postcode": "34950",
    "state": "Kedah",
    "area": "Bandar Baharu",
    "reservePrice": 430000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "057 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "958",
    "title": "2 Storey Terrace House",
    "address": "No. 1127, Lorong Permai Utama 33, Taman Permai Utama, 08300 Gurun, Kedah",
    "postcode": "08300",
    "state": "Kedah",
    "area": "Gurun",
    "reservePrice": 252000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "540 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "959",
    "title": "Flat",
    "address": "Unit No. 7-B, Solok Dunlop, 10400 George Town, Penang",
    "postcode": "10400",
    "state": "Penang",
    "area": "George Town",
    "reservePrice": 348300,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "142 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1UoSwkQSTLk7ekfQinSeQC_hdV5wm619C&sz=w800"
    ]
  },
  {
    "id": "960",
    "title": "Flat",
    "address": "Unit No. 99-15-13A, Lintang Sungai Pinang, Taman Pelangi Indah, 11600 Jelutong, Penang",
    "postcode": "11600",
    "state": "Penang",
    "area": "Jelutong",
    "reservePrice": 306000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "689 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "961",
    "title": "1 Storey Terrace House",
    "address": "Jalan Bakawali 4, Taman Bakawali, 13300 Tasek Gelugor, Penang",
    "postcode": "13300",
    "state": "Penang",
    "area": "Tasek Gelugor",
    "reservePrice": 250000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "080 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "962",
    "title": "2 Storey Terrace House",
    "address": "Lorong Seri Juru 18, Taman Seri Juru, 14100 Simpang Ampat, Penang",
    "postcode": "14100",
    "state": "Penang",
    "area": "Simpang Ampat",
    "reservePrice": 485000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "800 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "963",
    "title": "Flat",
    "address": "Unit No. 09-01, Block C, Pangsa Ria, Lebuh Kampung Benggali, 12200 Butterworth, Penang",
    "postcode": "12200",
    "state": "Penang",
    "area": "Butterworth",
    "reservePrice": 225000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "786 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1fuPKr6hbsh2tnKybwwHLJIeFTqsWzdZv&sz=w800"
    ]
  },
  {
    "id": "964",
    "title": "2 Storey Terrace House",
    "address": "No. 18, Solok Kampung Jawa 3, 11900 Bayan Lepas, Penang",
    "postcode": "11900",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 600000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "600 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "965",
    "title": "Apartment",
    "address": "Unit No. 7C-11-11, Pangsapuri Palm Court, Jalan Seri Tanjung Pinang, 10470 Tanjung Tokong, Penang",
    "postcode": "10470",
    "state": "Penang",
    "area": "Tanjung Tokong",
    "reservePrice": 206550,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "635 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1S217QcFejdcOnj12gjKmOjFPAiR2lJw5&sz=w800"
    ]
  },
  {
    "id": "966",
    "title": "Flat",
    "address": "Unit No. 7-03-27, Medan Ria Apartment, Lintang Paya Terubong 3, 11060, Ayer itam, Penang",
    "postcode": "11060",
    "state": "Penang",
    "area": "Ayer itam",
    "reservePrice": 270000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "700 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1gtUFYANw10GAD2X7BBZY5Vfm228FMMZ0&sz=w800"
    ]
  },
  {
    "id": "967",
    "title": "Flat",
    "address": "Unit No. B-4-13, Block B, Mutiara Jaya, Jalan Puteri Gunung 1, Bandar Tasek Mutiara, 14120, Simpang Ampat, Penang",
    "postcode": "14120",
    "state": "Penang",
    "area": "Simpang Ampat",
    "reservePrice": 90000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "603 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "968",
    "title": "2 Storey Terrace House",
    "address": "No. 116, Jalan Besar, Taman Bintang, 34900 Pantai Remis, Perak",
    "postcode": "34900",
    "state": "Perak",
    "area": "Pantai Remis",
    "reservePrice": 180000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "561 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "969",
    "title": "1 Storey Terrace House",
    "address": "No. 22A, Jalan Mahkota Kampar 4, Taman Mahkota Kampar, 31900 Kampar, Perak",
    "postcode": "31900",
    "state": "Perak",
    "area": "Kampar",
    "reservePrice": 225000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "970",
    "title": "3 Storey Terrace Shop Office",
    "address": "No. 57, Disney Avenue, Bandar Agacia, 31910 Kampar, Perak",
    "postcode": "31910",
    "state": "Perak",
    "area": "Kampar",
    "reservePrice": 900000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "591 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "971",
    "title": "1 Storey Terrace House",
    "address": "No. 157, Jalan RB 5, Residensi Bidoria, 35500 Bidor, Perak",
    "postcode": "35500",
    "state": "Perak",
    "area": "Bidor",
    "reservePrice": 189000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "972",
    "title": "1 Storey Terrace House",
    "address": "No. 121, Jalan Residen 8/4, Residen 8, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 170000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "082 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "973",
    "title": "2 Storey Terrace House",
    "address": "No. 1, Lintasan Perajurit 17, Taman Bersatu, 31400 Ipoh, Perak",
    "postcode": "31400",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 500000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "846 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "974",
    "title": "1 Storey Terrace House",
    "address": "No. 22, Lorong Lagenda 66, Seksyen 3, Bandar Lagenda Teluk Intan, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 138510,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "975",
    "title": "1 Storey Terrace House",
    "address": "No. 20, Laluan Wawasan 4, Taman Tronoh Wawasan, 31750 Tronoh, Perak",
    "postcode": "31750",
    "state": "Perak",
    "area": "Tronoh",
    "reservePrice": 90000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "976",
    "title": "4 Storey Shop Office",
    "address": "Unit No. 37 & 37A-C, Jalan Lim Bo Seng, 30300 Ipoh, Perak",
    "postcode": "30300",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 1000000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "600 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "977",
    "title": "Apartment",
    "address": "Unit No. B-9-3A, Jalan Paloh, Residensi Pr1ma Kampung Paloh, 30200 Ipoh, Perak",
    "postcode": "30200",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 135000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "775 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "978",
    "title": "1 Storey Terrace House",
    "address": "No. 10, Jalan Seri Rubiah 2, Taman Seri Rubiah, 32040 Seri Manjung, Perak",
    "postcode": "32040",
    "state": "Perak",
    "area": "Seri Manjung",
    "reservePrice": 350000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "025 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "979",
    "title": "2 Storey Terrace House",
    "address": "No. 926, Jalan Saujana 2/4, Bandar SP Saujana, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 393660,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "448 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "980",
    "title": "2 Storey Terrace House",
    "address": "No. 10, Jalan B.M. 2/14, Bandar Mutiara, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 387000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "981",
    "title": "2 Storey Semi Detached House",
    "address": "No. 54, Off Lorong Bunga Raya 3, Taman Cempaka, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 418500,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "749 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "982",
    "title": "2 Storey Terrace House",
    "address": "No. 60, Lorong BLM 3/5, Bandar Laguna Merbok, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 400000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "983",
    "title": "2 Storey Semi Detached House",
    "address": "No. 7, Jalan Yarra 1/2, Bandar Puteri Jaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 648000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "671 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "984",
    "title": "1 Storey Semi Detached House",
    "address": "No. 524, Jalan Kempas 20, Taman Kempas Merah, 09000 Kulim, Kedah",
    "postcode": "09000",
    "state": "Kedah",
    "area": "Kulim",
    "reservePrice": 430000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "039 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "985",
    "title": "2 Storey Terrace House",
    "address": "No. 815, Jalan PR1MA 27, PR1MA Residensi Puteri Jaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 342000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "692 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "986",
    "title": "2 Storey Terrace House",
    "address": "No. 198, Jalan Bukit Puteri 12/6, Bandar Puteri Jaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 255150,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "987",
    "title": "Terrace House",
    "address": "No. 474, Lorong 10, Taman Bandar Baru, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 157950,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "764 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "988",
    "title": "1 Storey Terrace House",
    "address": "No. 10, Lorong 4, Taman Gurun Jaya, 08300 Gurun, Kedah",
    "postcode": "08300",
    "state": "Kedah",
    "area": "Gurun",
    "reservePrice": 150000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "464 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "989",
    "title": "1 Storey Terrace House",
    "address": "No. 43, Jalan Mawar 2/4, Persiaran Amanjaya 3, Bandar Amanjaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 240000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "540 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "990",
    "title": "2 Storey Terrace House",
    "address": "No. 1200, Jalan PR1MA 37, PR1MA Residensi Puteri Jaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 262440,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "026 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "991",
    "title": "1 Storey Terrace House",
    "address": "No. 1509, Lorong Angsana 43, Taman Keladi Fasa 1, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 200000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "992",
    "title": "1 Storey Semi Detached House",
    "address": "No. 53, Jalan Angsana 2, Taman Angsana, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 259200,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "649 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "993",
    "title": "2 Storey Terrace House",
    "address": "No. 473, Lorong 10, Taman Bandar Baru, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 157950,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "764 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "994",
    "title": "Terrace House",
    "address": "No. 78, Jalan Pr1ma 2, Pr1ma Residensi, Bandar Puteri Jaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 225000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "995",
    "title": "1 Storey Detached House",
    "address": "No. 190, Jalan Kenanga 7/2, 08000 Bandar Amanjaya, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Bandar Amanjaya",
    "reservePrice": 580000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "404 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "996",
    "title": "1 Storey Terrace House",
    "address": "No. 46, Lorong Lagenda 62, Seksyen 3, Bandar Lagenda Teluk Intan, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 176000,
    "auctionDate": "3rd Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "100 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "997",
    "title": "Flat",
    "address": "Unit No. 3-3-12, Taman Sri Indah, Tingkat Seri Genting 1, 11000 Balik Pulau, Penang",
    "postcode": "11000",
    "state": "Penang",
    "area": "Balik Pulau",
    "reservePrice": 118098,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "603 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1ROIF0Ypkzr7niv8ajGfHPo3IKNURZ6Zo&sz=w800"
    ]
  },
  {
    "id": "998",
    "title": "2 Storey Terrace House",
    "address": "No. 53, Lorong Tasek Gelugor Utama 3/11, Taman Tasek Gelugor Utama, 13300 Tasek Gelugor, Penang",
    "postcode": "13300",
    "state": "Penang",
    "area": "Tasek Gelugor",
    "reservePrice": 340200,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "572 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Ro0M95wbY4SBDK9bY2eiul9Ro5Wv9Eb9&sz=w800"
    ]
  },
  {
    "id": "999",
    "title": "2 Storey Terrace Shop Office",
    "address": "No. 36, Jalan Helang 2 (Lorong Helang 2), 11700 Glugor, Penang",
    "postcode": "11700",
    "state": "Penang",
    "area": "Glugor",
    "reservePrice": 852930,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "842 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1000",
    "title": "Flat",
    "address": "Unit No. 2-3-4, Tingkat Teluk Kumbar, MK. 9, 11920 Bayan Lepas, Penang",
    "postcode": "11920",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 135000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "506 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1001",
    "title": "3 Storey Terrace House",
    "address": "No. 10, Gerbang Mak Mandin 6, Taman Sri Nasib, 13400 Butterworth, Penang",
    "postcode": "13400",
    "state": "Penang",
    "area": "Butterworth",
    "reservePrice": 810000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1002",
    "title": "2 Storey Detached House",
    "address": "No. 283L, Mukim 13, Jalan Pekeliling, 11700 Gelugor, Penang",
    "postcode": "11700",
    "state": "Penang",
    "area": "Gelugor",
    "reservePrice": 710000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "841 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1003",
    "title": "Flat",
    "address": "Unit No. B-4-16, Jalan Gertak Sanggul, MK 12, Taman Gertak Sanggul, 11920 Bayan Lepas, Penang",
    "postcode": "11920",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 97200,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "506 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1004",
    "title": "Apartment",
    "address": "Unit No. 3C-27-04, Jalan Batu Uban, Mukim 13, 11700 Glugor, Penang",
    "postcode": "11700",
    "state": "Penang",
    "area": "Glugor",
    "reservePrice": 265720.5,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "700 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=10ryUPJG5LTPIvFR-mjDfguxKN65I3Ji1&sz=w800"
    ]
  },
  {
    "id": "1005",
    "title": "Apartment",
    "address": "Unit No. 1-4-13, Block 1, Mutiara Perdana 2, Lorong Kelicap, 11900 Bayan Lepas, Penang",
    "postcode": "11900",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 125000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "527 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1006",
    "title": "1 Storey Terrace House",
    "address": "No. 10, Lorong Alma Jaya 29, Taman Alma Jaya, 14000, Bukit Mertajam, Penang",
    "postcode": "14000",
    "state": "Penang",
    "area": "Bukit Mertajam",
    "reservePrice": 350000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "205 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1007",
    "title": "2 Storey Terrace House",
    "address": "No. 116, Lorong Seri Juru 22, Taman Seri Juru, 14100 Simpang Ampat, Penang",
    "postcode": "14100",
    "state": "Penang",
    "area": "Simpang Ampat",
    "reservePrice": 405000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1008",
    "title": "1 Storey Terrace House",
    "address": "No. 41, Lorong Pinggiran Bertam 18, Pinggiran Bertam Perdana 4, 13200 Kepala Batas, Penang",
    "postcode": "13200",
    "state": "Penang",
    "area": "Kepala Batas",
    "reservePrice": 400000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "604 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1009",
    "title": "2 Storey Semi Detached House",
    "address": "No. 30, Lorong Cendana Permai 8, Taman Cendana Permai, 14100 Simpang Ampat, Penang",
    "postcode": "14100",
    "state": "Penang",
    "area": "Simpang Ampat",
    "reservePrice": 640000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "594 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1010",
    "title": "2.5 Storey Terrace House",
    "address": "No. 25, Persiaran Halaman Ampang 16, Taman Pelangi, 31350 Ipoh, Perak",
    "postcode": "31350",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 165600,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "367 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1011",
    "title": "2 Storey Terrace House",
    "address": "Jalan Melati Indah 3, Taman Melati Indah, 32200 Lumut, Perak",
    "postcode": "32200",
    "state": "Perak",
    "area": "Lumut",
    "reservePrice": 430000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "647 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1012",
    "title": "2 Storey Terrace House",
    "address": "No. 47, Persiaran Klebang Selatan 31, Taman Bertuah, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 150000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "840 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1013",
    "title": "2 Storey Shop House",
    "address": "No. 9, Persiaran Slim Permai 1, Taman Slim Permai, 35800 Slim River, Perak",
    "postcode": "35800",
    "state": "Perak",
    "area": "Slim River",
    "reservePrice": 275400,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "259 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1014",
    "title": "1 Storey Cluster House",
    "address": "No. 30, Lorong Lagenda 12, Seksyen 1, Bandar Lagenda Teluk Intan, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 208000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "981 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1015",
    "title": "1 Storey Terrace House",
    "address": "No. 23, Dataran Setia 3, Taman Bemban Setia, 31000 Batu Gajah, Perak",
    "postcode": "31000",
    "state": "Perak",
    "area": "Batu Gajah",
    "reservePrice": 230000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1016",
    "title": "Town House",
    "address": "No. 349B, Taman Kledang, 31100 Sungai Siput (U), Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput (U)",
    "reservePrice": 88000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "775 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1017",
    "title": "Town House (Upper Unit)",
    "address": "Unit No. 364B, Taman Kledang, 31100 Sungai Siput (U), Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput (U)",
    "reservePrice": 102060,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "775 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1018",
    "title": "2 Storey Terrace House",
    "address": "No. 99, Lorong 4, Taman Sri Bahagia, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 120000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "840 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1019",
    "title": "1 Storey Detached House",
    "address": "No. 90, Taman Bunga Raya, 06000 Jitra, Kedah",
    "postcode": "06000",
    "state": "Kedah",
    "area": "Jitra",
    "reservePrice": 500000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "628 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1020",
    "title": "2 Storey Terrace House",
    "address": "No. 2, Lorong Kijang Indah 1, Taman Kijang Indah, 14000 Bukit Mertajam, Penang",
    "postcode": "14000",
    "state": "Penang",
    "area": "Bukit Mertajam",
    "reservePrice": 620000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "153 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1021",
    "title": "1 Storey Terrace House",
    "address": "No. 20, Lorong Lagenda 43 (TIC67A/44), Seksyen 3, Bandar Lagenda Teluk Intan, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 144000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "919 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1022",
    "title": "2 Storey Shop Office",
    "address": "Unit No. 13 & 13A, Jalan Perniagaan Ampang 4, Pusat Perniagaan Ampang, 31350 Ipoh, Perak",
    "postcode": "31350",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 445500,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "799 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1023",
    "title": "1 Storey Terrace House",
    "address": "No. 473, Jalan Residen 8/12, Residen 8, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 162000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1024",
    "title": "1 Storey Terrace House",
    "address": "No. 32, Lorong Lagenda 63, Seksyen 3, Bandar Lagenda Teluk Intan, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 198000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1025",
    "title": "2 Storey Terrace House",
    "address": "No. 113, Persiaran Cempaka Sari 5, Taman Cempaka, 31400 Ipoh, Perak",
    "postcode": "31400",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 160200,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "742 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1026",
    "title": "1 Storey Terrace House",
    "address": "No. 2, Lorong Sungai Choh 6, Taman Berjaya Selatan, 31250 Tanjung Rambutan, Perak",
    "postcode": "31250",
    "state": "Perak",
    "area": "Tanjung Rambutan",
    "reservePrice": 340000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "025 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1027",
    "title": "2 Storey Terrace House",
    "address": "Laluan Batu Gajah Perdana 3, Taman Batu Gajah Perdana, 31550 Pusing, Perak",
    "postcode": "31550",
    "state": "Perak",
    "area": "Pusing",
    "reservePrice": 310000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1028",
    "title": "2 Storey Terrace Shop Office",
    "address": "No. 48 & 48A, Jalan Klebang Ria 1, Taman Klebang Ria, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 450000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "959 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1029",
    "title": "3 Adjoining Units of 4 Storey Terraced Shop Office",
    "address": "No. 2 & 4 & 6, Jalan Putra, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 2880000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "194 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1030",
    "title": "1 Storey Semi Detached House",
    "address": "No. 133, Jalan Mesra 11, Taman Mesra Rakyat, 31900 Kampar, Perak",
    "postcode": "31900",
    "state": "Perak",
    "area": "Kampar",
    "reservePrice": 180000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "701 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1031",
    "title": "1 Storey Terrace House",
    "address": "No. 41, Laluan Permai 8, Taman Bemban Permai, 31000 Batu Gajah, Perak",
    "postcode": "31000",
    "state": "Perak",
    "area": "Batu Gajah",
    "reservePrice": 240000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "300 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1032",
    "title": "1 Storey Terrace House",
    "address": "No. 460, Laluan Kledang 5/3, Taman Kledang, 31100 Sungai Siput (U), Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput (U)",
    "reservePrice": 200000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1033",
    "title": "1 Storey Terrace House",
    "address": "No. 49, Lorong Lagenda 52, Seksyen 3, Bandar Lagenda Teluk Intan, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 220000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1034",
    "title": "1 Storey Terrace House",
    "address": "No. 35, Jalan Nakhoda Bestari 2, Taman Nakhoda Bestari, 32200 Lumut, Perak",
    "postcode": "32200",
    "state": "Perak",
    "area": "Lumut",
    "reservePrice": 170000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1035",
    "title": "1 Storey Terrace House",
    "address": "No. 179, Jalan Residen 4/3, Residen 4, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 230000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1036",
    "title": "1 Storey Cluster Semi Detached House",
    "address": "No. 88, Jalan Residen 7/2, Residen 7, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 250000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "916 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1037",
    "title": "1.5 Storey Terrace House",
    "address": "No. 113, Taman Bukit Maju, 32200 Lumut, Perak",
    "postcode": "32200",
    "state": "Perak",
    "area": "Lumut",
    "reservePrice": 190000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "939 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1038",
    "title": "2 Storey Terrace House",
    "address": "No. 16, Jalan Seri Selamat, Taman Seri Selamat, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 72900,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "872 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1039",
    "title": "2 Storey Terrace House",
    "address": "No. 125, Persiaran Bukit Hijau, Taman Kuning Emas, 35000 Tapah, Perak",
    "postcode": "35000",
    "state": "Perak",
    "area": "Tapah",
    "reservePrice": 385000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "119 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1040",
    "title": "2 Storey Terrace House",
    "address": "No. 553, Jalan 5/3, Taman Bunga Raya, 35000 Tapah, Perak",
    "postcode": "35000",
    "state": "Perak",
    "area": "Tapah",
    "reservePrice": 405000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "874 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1041",
    "title": "1 Storey Terrace House",
    "address": "No. 68, Taman Bistari, Sungai Wangi, 32400 Ayer Tawar, Perak",
    "postcode": "32400",
    "state": "Perak",
    "area": "Ayer Tawar",
    "reservePrice": 180000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1042",
    "title": "1 Storey Terrace House",
    "address": "No. 81, Persiaran Sungai Pari Timur 10, Taman Mas Falim, 30100 Ipoh, Perak",
    "postcode": "30100",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 153900,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "958 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1043",
    "title": "1 Storey Terrace House",
    "address": "No. 3, Taman Seri Batik Teluk Muruh, 32200 Lumut, Perak",
    "postcode": "32200",
    "state": "Perak",
    "area": "Lumut",
    "reservePrice": 180000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1044",
    "title": "1 Storey Semi Detached House",
    "address": "No. 27, Laluan Seri Raia 8, Taman Seri Raia, 31300 Kampung Kepayang, Perak",
    "postcode": "31300",
    "state": "Perak",
    "area": "Kampung Kepayang",
    "reservePrice": 130000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "099 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1045",
    "title": "1 Storey Cluster House",
    "address": "No. 611, Jalan Residen 6/19, Residen 6, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 187000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "916 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1046",
    "title": "1 Storey Terrace House",
    "address": "No. 421, Jalan Residen 3/11, Residen 3, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 137700,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1047",
    "title": "2 Storey Terrace House",
    "address": "No. 75, Persiaran Zarib 3, Taman Pinji Mewah, 31500 Lahat, Perak",
    "postcode": "31500",
    "state": "Perak",
    "area": "Lahat",
    "reservePrice": 275400,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1048",
    "title": "1 Storey Terrace House",
    "address": "No. 729, Laluan Kledang 3/4, Taman Kledang, 31100 Sungai Siput (U), Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput (U)",
    "reservePrice": 145800,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1049",
    "title": "2 Storey Semi Detached House",
    "address": "No. 317, Laluan Intan 2, Taman Intan Baru II, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 480000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "605 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1050",
    "title": "1 Storey Terrace House",
    "address": "No. 646, Laluan Kledang 5/8, Taman Kledang, 31100 Sungai Siput (U), Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput (U)",
    "reservePrice": 120000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1051",
    "title": "1 Storey Detached House",
    "address": "No. 32, Jalan Sri Klebang 3, RPT Sri Klebang Tambahan 1, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 288000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "081 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1052",
    "title": "1 Storey Semi Detached Cluster House",
    "address": "No. 667, Jalan Residen 6/20, Residen 6, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 194400,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "916 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1053",
    "title": "1 Storey Terrace House",
    "address": "No. 770, Laluan Kledang 3/2, Taman Kledang, 31100 Sungai Siput (U), Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput (U)",
    "reservePrice": 162000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "099 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1054",
    "title": "1 Storey Terrace House",
    "address": "No. 9, Lorong Mewah 19, Taman Mewah, 34600 Kamunting, Perak",
    "postcode": "34600",
    "state": "Perak",
    "area": "Kamunting",
    "reservePrice": 145800,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1055",
    "title": "Studio Apartment",
    "address": "Unit No. D0-70, Block D, Persiaran Iskandar Prima 11, Taman Iskandar Prima, 32610 Seri Iskandar, Perak",
    "postcode": "32610",
    "state": "Perak",
    "area": "Seri Iskandar",
    "reservePrice": 51000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "323 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1056",
    "title": "Vacant Residential Land",
    "address": "No. 2 (Lot. 68068), Jalan 5, Taman Chong Kwee, 31250 Tanjung Rambutan, Perak",
    "postcode": "68068",
    "state": "Perak",
    "area": "Tanjung Rambutan",
    "reservePrice": 300000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "806 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1057",
    "title": "1 Storey Terrace House",
    "address": "No. 540, Laluan Kledang 5/4, Taman Kledang, 31100 Sungai Siput (U), Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput (U)",
    "reservePrice": 104000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1058",
    "title": "1 Storey Terrace House",
    "address": "No. 1115, Laluan Kledang 4/5, Taman Kledang, 31100 Sungai Siput (U), Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput (U)",
    "reservePrice": 120000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1059",
    "title": "Terrace House",
    "address": "Lorong 6, Taman Desa Bernam Indah Fasa 2, 36400 Hutan Melintang, Perak",
    "postcode": "36400",
    "state": "Perak",
    "area": "Hutan Melintang",
    "reservePrice": 250000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "815 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1060",
    "title": "1 Storey Terrace House",
    "address": "No. 1524, Lorong Angsana 43, Taman Keladi, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 198000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "200 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1061",
    "title": "3 Storey Terrace Shop Office",
    "address": "No. 5, Pavilion Avenue, Bandar Agacia, 31910 Kampar, Perak",
    "postcode": "31910",
    "state": "Perak",
    "area": "Kampar",
    "reservePrice": 597600,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "482 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1062",
    "title": "1 Storey Terrace House",
    "address": "No. 24, Jalan Harmonis 2, Taman Harmonis, 32610 Seri Iskandar, Perak",
    "postcode": "32610",
    "state": "Perak",
    "area": "Seri Iskandar",
    "reservePrice": 186300,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "099 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1063",
    "title": "3 Storey Terrace House",
    "address": "No. 19, Jalan Putra Berlian 13A, Kampar Putra, 31900 Kampar, Perak",
    "postcode": "31900",
    "state": "Perak",
    "area": "Kampar",
    "reservePrice": 259200,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1064",
    "title": "1 Storey Terrace House",
    "address": "No. 59, Lorong Segari Maju 4, Taman Segari Maju, 32200 Lumut, Perak",
    "postcode": "32200",
    "state": "Perak",
    "area": "Lumut",
    "reservePrice": 171000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "851 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1065",
    "title": "1 Storey Terrace House",
    "address": "No. 33, Laluan Pinji Perdana 11, Taman Pinji Perdana, 31500 Lahat, Perak",
    "postcode": "31500",
    "state": "Perak",
    "area": "Lahat",
    "reservePrice": 99000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "958 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1066",
    "title": "2 Storey Terrace House",
    "address": "No. 14, Laluan Taman Meru 31, Taman Meru 2B, 30020 Ipoh, Perak",
    "postcode": "30020",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 280000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "646 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1067",
    "title": "1 Storey Terrace House",
    "address": "No. 154, Laluan Seri Raia 1, Taman Seri Raia, 31300 Kampung Kepayang, Perak",
    "postcode": "31300",
    "state": "Perak",
    "area": "Kampung Kepayang",
    "reservePrice": 200000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "604 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1068",
    "title": "2 Storey Terrace House",
    "address": "No. 14, Pesara Lahat Baru 8, Bandar Lahat Baru, 31500 Lahat, Perak",
    "postcode": "31500",
    "state": "Perak",
    "area": "Lahat",
    "reservePrice": 230000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "500 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1069",
    "title": "Industrial Land",
    "address": "No. 136 (Lot 15724), Kawasan Perusahaan Fasa 2, 31100 Sungai Siput (U), Perak",
    "postcode": "15724",
    "state": "Perak",
    "area": "Sungai Siput (U)",
    "reservePrice": 1749600,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "513 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1070",
    "title": "1 Storey Terrace House",
    "address": "No. 37-L, Lorong Bentara 9, Taman Sri Manggis, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 210600,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "474 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1071",
    "title": "1 Storey Semi Detached House",
    "address": "No. 24, Jalan Ixora 3, Taman Ixora, Jalan Pahang, 35000 Tapah, Perak",
    "postcode": "35000",
    "state": "Perak",
    "area": "Tapah",
    "reservePrice": 450000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "644 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1072",
    "title": "Town House",
    "address": "Unit No. 73-3, Blok 73, Aras 3, Persiaran Residensi, Bandar Agacia (The Residence @ Kampar), 31910 Kampar, Perak",
    "postcode": "31910",
    "state": "Perak",
    "area": "Kampar",
    "reservePrice": 100000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "098 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1073",
    "title": "1 Storey Terrace House",
    "address": "No. 23, Jalan Kinding Perdana 2, Taman Kinding Perdana, 31250 Tanjong Rambutan, Perak",
    "postcode": "31250",
    "state": "Perak",
    "area": "Tanjong Rambutan",
    "reservePrice": 225000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1074",
    "title": "1 Storey Terrace House",
    "address": "No. 2018, Jalan Residen 1/18, Residen 1 Bandar Baru Setia Awan, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 170000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1075",
    "title": "1 Storey Bungalow House",
    "address": "No. 25 (PT 476), RPT Tronoh Mines, Jalan Bota-Siputeh, 31750 Tronoh, Perak",
    "postcode": "31750",
    "state": "Perak",
    "area": "Tronoh",
    "reservePrice": 270000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "499 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1076",
    "title": "1 Storey Terrace House",
    "address": "No. 27, Jalan Aman Damai 2/2, Taman Aman Damai II Lekir, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 216000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1077",
    "title": "2 Storey Terrace House",
    "address": "No. 3, Sri Klebang E/11, Bandar Baru Sri Klebang, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 291600,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1078",
    "title": "1 Storey Terrace House",
    "address": "No. 5, Lorong Emas 2/1, Taman Emas II, Kampung China, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 324000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "564 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1079",
    "title": "1 Storey Terrace House",
    "address": "No. 23, Laluan Prisma 19, Taman Pengkalan Prisma, 31550 Pusing, Perak",
    "postcode": "31550",
    "state": "Perak",
    "area": "Pusing",
    "reservePrice": 162000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "300 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1080",
    "title": "2 Storey Terrace House",
    "address": "No. 213, Persiaran Desa Rishah 1, Taman Desa Rishah, 30100 Ipoh, Perak",
    "postcode": "30100",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 400000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1081",
    "title": "1 Storey Terrace House",
    "address": "No. 281, Jalan SM 3C/12, Bandar Baru Seri Manjung Fasa 3C, 32040 Seri Manjung, Perak",
    "postcode": "32040",
    "state": "Perak",
    "area": "Seri Manjung",
    "reservePrice": 180000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "431 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1082",
    "title": "Town House (Lower Unit)",
    "address": "Unit No. 357A, Taman Kledang, 31100 Sungai Siput (U), Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput (U)",
    "reservePrice": 178200,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "710 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1083",
    "title": "2 Storey Terrace Shop House",
    "address": "No. 3104-E (PT 2672), Jalan Kampar, 36700, Langkap, Perak",
    "postcode": "36700",
    "state": "Perak",
    "area": "Langkap",
    "reservePrice": 500000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "604 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1084",
    "title": "1 Storey Terrace House",
    "address": "No. 586, Laluan Kledang 5/6, Taman Kledang, 31100 Sungai Siput (U), Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput (U)",
    "reservePrice": 176000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "756 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1085",
    "title": "1 Storey Cluster House",
    "address": "No. 15, Lorong Lagenda 3, Seksyen 1, Bandar Lagenda Teluk Intan, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 189000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "981 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1086",
    "title": "Condominium",
    "address": "Unit No. A-G-8, Jalan Meru Idaman 1, Taman Meru Idaman, 30020 Ipoh, Perak",
    "postcode": "30020",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 283500,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "990 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1087",
    "title": "1 Storey Semi Detached Cluster House",
    "address": "No. 258, Persiaran Presint 1/11, Presint 1, Bandar Baru Segari, 32200 Lumut, Perak",
    "postcode": "32200",
    "state": "Perak",
    "area": "Lumut",
    "reservePrice": 330000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "009 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1088",
    "title": "1 Storey Semi Detached Cluster House",
    "address": "No. 26, Lorong Lagenda 32, Seksyen 1, Bandar Lagenda Teluk Intan, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 225000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "980 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1089",
    "title": "1 Storey Terrace House",
    "address": "No. 216, Jalan Residen 3/5, Residen 3, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 200000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1090",
    "title": "1 Storey Terrace House",
    "address": "No. 5386, Jalan Awan 4, Taman Awan Mas, 31950 Mambang Diawan, Perak",
    "postcode": "31950",
    "state": "Perak",
    "area": "Mambang Diawan",
    "reservePrice": 160000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1091",
    "title": "2 Storey Terrace House",
    "address": "No. 37, Lorong 8, Taman Semarak 2, 34000 Taiping, Perak",
    "postcode": "34000",
    "state": "Perak",
    "area": "Taiping",
    "reservePrice": 450000,
    "auctionDate": "9th Sep 2026 (Wed)",
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
    "title": "1 Storey Terrace House",
    "address": "No. 155-A, Lorong Kenari Biru 7/2, Taman Mawar, 05200 Alor Setar, Kedah",
    "postcode": "05200",
    "state": "Kedah",
    "area": "Alor Setar",
    "reservePrice": 243000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1093",
    "title": "Land",
    "address": "PT 1126, Pekan Kota Sarang Semut, Kota Setar, Kedah",
    "postcode": "",
    "state": "Kedah",
    "area": "Kota Setar",
    "reservePrice": 225000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1094",
    "title": "1 Storey Terrace House",
    "address": "No. 151, Jalan Bersatu 16, Taman Bersatu, Fasa 4, Jalan Batas Paip, 06600 Kuala Kedah, Kedah",
    "postcode": "06600",
    "state": "Kedah",
    "area": "Kuala Kedah",
    "reservePrice": 330000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "020 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1095",
    "title": "2 Storey Terrace House",
    "address": "No. 2154-D, Jalan Kota Tanah, Taman Abdul Aziz, 05050 Alor Setar, Kedah",
    "postcode": "05050",
    "state": "Kedah",
    "area": "Alor Setar",
    "reservePrice": 190000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1096",
    "title": "1 Storey Terrace House",
    "address": "No. 1572, Jalan Lagenda 9/3, Taman Lagenda, 09400 Padang Serai, Kedah",
    "postcode": "09400",
    "state": "Kedah",
    "area": "Padang Serai",
    "reservePrice": 260000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "194 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1097",
    "title": "3 Storey Shop House",
    "address": "No. 16-16B, Taman Temusu, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 1134000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "200 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1098",
    "title": "1 Storey Terrace House",
    "address": "No. 17, Jalan LB 1/6, Lembah Beriah 1, 34310 Bagan Serai, Perak",
    "postcode": "34310",
    "state": "Perak",
    "area": "Bagan Serai",
    "reservePrice": 39366,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "085 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1099",
    "title": "2 Storey Terrace House",
    "address": "No. 4, Lorong Yayasan 13, Taman Yayasan, 34600 Kamunting, Perak",
    "postcode": "34600",
    "state": "Perak",
    "area": "Kamunting",
    "reservePrice": 284310,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "899 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1100",
    "title": "1 Storey Detached House",
    "address": "No. 454, Jalan Baru, Kampung Pinang, 34600 Kamunting, Perak",
    "postcode": "34600",
    "state": "Perak",
    "area": "Kamunting",
    "reservePrice": 182250,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "513 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1101",
    "title": "2 Storey Terrace House",
    "address": "No. 33, Laluan Puspa Timur 9, Bandar Baru Puspa, 31550 Pusing, Perak",
    "postcode": "31550",
    "state": "Perak",
    "area": "Pusing",
    "reservePrice": 105300,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "960 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1102",
    "title": "2 Storey Terrace House",
    "address": "No. 47, Laluan Klebang Jaya 45, Taman Klebang Jaya, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 144000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "831 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1103",
    "title": "3 Storey Terrace House",
    "address": "No. 21, Jalan Putra Berlian 13A, Kampar Putra, 31900 Kampar, Perak",
    "postcode": "31900",
    "state": "Perak",
    "area": "Kampar",
    "reservePrice": 200000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1104",
    "title": "1 Storey Terrace House",
    "address": "Taman Seri Kerian, Rumah Awam Bagan Serai, 34300 Bagan Serai, Perak",
    "postcode": "34300",
    "state": "Perak",
    "area": "Bagan Serai",
    "reservePrice": 75600,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "023 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1105",
    "title": "1 Storey Terrace House",
    "address": "No. 340, Jalan Saujana Jaya, Taman Saujana Jaya, Assam Kumbang, 34000 Taiping, Perak",
    "postcode": "34000",
    "state": "Perak",
    "area": "Taiping",
    "reservePrice": 160000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1106",
    "title": "2 Storey Terrace House",
    "address": "No. 93, Jalan Tawas Mewah 8, Taman Tawas Mewah, 30010 Ipoh, Perak",
    "postcode": "30010",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 280000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1107",
    "title": "1 Storey Terrace House",
    "address": "No. 21, Lorong SS3, Taman Semesti Selesa, 36400 Hutan Melintang, Perak",
    "postcode": "36400",
    "state": "Perak",
    "area": "Hutan Melintang",
    "reservePrice": 280000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "239 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1108",
    "title": "2 Storey Semi Detached House",
    "address": "No. 169, Taman Laksamana, Jalan Laksamana, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 420000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "268 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1109",
    "title": "2 Storey Terrace House",
    "address": "No. 24, Hala Kledang Emas 3, Taman Kledang Emas, 30100 Ipoh, Perak",
    "postcode": "30100",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 330000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "173 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1110",
    "title": "1 Storey Terrace House",
    "address": "No. 102, Jalan Aman Damai 2/5, Taman Aman Damai II, Lekir, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 290000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "100 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1111",
    "title": "2 Storey Terrace House",
    "address": "No. 338, Jalan Aman 16, Taman Aman Fasa 2, 31950 Mambang Diawan, Perak",
    "postcode": "31950",
    "state": "Perak",
    "area": "Mambang Diawan",
    "reservePrice": 177000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "047 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1112",
    "title": "1 Storey Terrace House",
    "address": "No. 133, Taman Bunga Matahari, 32400 Ayer Tawar, Perak",
    "postcode": "32400",
    "state": "Perak",
    "area": "Ayer Tawar",
    "reservePrice": 130000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1113",
    "title": "1 Storey Terrace House",
    "address": "No. 19, Lorong Lagenda 68, Seksyen 3, Bandar Lagenda Teluk Intan, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 220000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1114",
    "title": "1 Storey Terrace House",
    "address": "No. 1241, Lorong 36, Taman Kaya, 34000 Taiping, Perak",
    "postcode": "34000",
    "state": "Perak",
    "area": "Taiping",
    "reservePrice": 162000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "100 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1115",
    "title": "1 Storey Terrace House",
    "address": "No. 18, Jalan Menglembu Impiana 22, Taman Menglembu Impiana Adril, 31450 Menglembu, Perak",
    "postcode": "31450",
    "state": "Perak",
    "area": "Menglembu",
    "reservePrice": 180000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1116",
    "title": "2 Storey Terrace House",
    "address": "No. 260, Jalan Burung Camar, Taman Sri Kampar, 31900 Kampar, Perak",
    "postcode": "31900",
    "state": "Perak",
    "area": "Kampar",
    "reservePrice": 80000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "958 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1117",
    "title": "2 Storey Semi Detached House",
    "address": "No. 45, Jalan Murni Jaya 1, Taman Murni Jaya, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 401200,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "788 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1118",
    "title": "1 Storey Terrace House",
    "address": "No. 11, Jalan Kempas, Taman Pelangi, 31000 Batu Gajah, Perak",
    "postcode": "31000",
    "state": "Perak",
    "area": "Batu Gajah",
    "reservePrice": 126000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1119",
    "title": "Town House (Lower Unit)",
    "address": "No. 393A, Taman Kledang, 31100 Sungai Siput, Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput",
    "reservePrice": 108000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "710 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1120",
    "title": "1 Storey Terrace House",
    "address": "No. 22, Putra Sentosa 2, Taman Putra Sentosa, 31400, Ipoh, Perak",
    "postcode": "31400",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 250000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1121",
    "title": "1 Storey Semi Detached Cluster House",
    "address": "No. 238, Persiaran Presint 1/6, Presint 1, Bandar Baru Segari, 32200 Lumut, Perak",
    "postcode": "32200",
    "state": "Perak",
    "area": "Lumut",
    "reservePrice": 216000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "099 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1122",
    "title": "1 Storey Semi Detached House",
    "address": "No. 6, Lorong Kiambang 1, Taman Kiambang, 36000, Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 268000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "131 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1123",
    "title": "2 Storey Terrace House",
    "address": "Lot 209392, Tingkat Zarib 5B, Taman Pinji Mewah, 31500 Lahat, Perak",
    "postcode": "31500",
    "state": "Perak",
    "area": "Lahat",
    "reservePrice": 360000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "099 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1124",
    "title": "3 Storey Shop Office",
    "address": "No. 10, Pavilion Avenue, Bandar Agacia, 31910 Kampar, Perak",
    "postcode": "31910",
    "state": "Perak",
    "area": "Kampar",
    "reservePrice": 600000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "646 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1125",
    "title": "1 Storey Terrace House",
    "address": "No. 52, Jalan Chemor Sejahtera 2, Desa Chemor Sejahtera, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 216000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "475 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1126",
    "title": "2 Storey Terrace House",
    "address": "No. 706, Taman Bersatu, Jalan Batas Paip, 06600 Kuala Kedah, Kedah",
    "postcode": "06600",
    "state": "Kedah",
    "area": "Kuala Kedah",
    "reservePrice": 144000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "700 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1127",
    "title": "Semi Detached House",
    "address": "Jalan Jelutong Indah 1, Taman Jelutong Indah, 06010 Changlun, Kedah",
    "postcode": "06010",
    "state": "Kedah",
    "area": "Changlun",
    "reservePrice": 360000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "509 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1128",
    "title": "1 Storey Terrace House",
    "address": "No. 12A, Laluan Tronoh Universiti 9, Taman Tronoh Universiti, 31750 Tronoh, Perak",
    "postcode": "31750",
    "state": "Perak",
    "area": "Tronoh",
    "reservePrice": 162000,
    "auctionDate": "14th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "206 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1129",
    "title": "1 Storey Terrace House",
    "address": "No. 29, Jalan 7, Taman Sungai Mas, 34000 Taiping, Perak",
    "postcode": "34000",
    "state": "Perak",
    "area": "Taiping",
    "reservePrice": 150000,
    "auctionDate": "14th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "098 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1130",
    "title": "Terrace House",
    "address": "Laluan BTI 1/23A, Bandar Tasik Idaman, 31000 Batu Gajah, Perak",
    "postcode": "31000",
    "state": "Perak",
    "area": "Batu Gajah",
    "reservePrice": 460000,
    "auctionDate": "14th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1131",
    "title": "Apartment",
    "address": "Unit No. C-G-1, Lapangan Perdana 19, Pangsapuri Lapangan Perdana, 31350 Ipoh, Perak",
    "postcode": "31350",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 360000,
    "auctionDate": "14th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "324 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1132",
    "title": "1 Storey Terrace House",
    "address": "Kampung Tersusun Keledang Utama, 31100 Sungai Siput (U), Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput (U)",
    "reservePrice": 280000,
    "auctionDate": "14th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1133",
    "title": "1 Storey Semi Detached House",
    "address": "No. 2, Lorong 5, Taman Cahaya, Jalan Woo Saik Hong, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 220000,
    "auctionDate": "14th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1134",
    "title": "2 Storey Terrace House",
    "address": "No. 33, Laluan Lapangan 4, Taman Sri Perkasa, 31650 Ipoh, Perak",
    "postcode": "31650",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 280000,
    "auctionDate": "14th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1135",
    "title": "2 Storey Terrace House",
    "address": "No. 847, Taman Nuri, Off Jalan Datuk Kumbar, 05300 Alor Setar, Kedah",
    "postcode": "05300",
    "state": "Kedah",
    "area": "Alor Setar",
    "reservePrice": 180000,
    "auctionDate": "14th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1136",
    "title": "2 Storey Semi Detached House",
    "address": "No. B-27, Jalan Langgar, Taman Vistana, 06500 Langgar, Kedah",
    "postcode": "06500",
    "state": "Kedah",
    "area": "Langgar",
    "reservePrice": 590000,
    "auctionDate": "14th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "518 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1137",
    "title": "2 Storey Shop House",
    "address": "No. 4040, Lebuhraya Sultanah Bahiyah, Taman Mutiara, 05350 Alor Setar, Kedah",
    "postcode": "05350",
    "state": "Kedah",
    "area": "Alor Setar",
    "reservePrice": 477000,
    "auctionDate": "14th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "216 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1138",
    "title": "1.5 Storey Terrace House",
    "address": "No. 29, Lorong Kempas 3, Taman Kempas, 06400 Pokok Sena, Kedah",
    "postcode": "06400",
    "state": "Kedah",
    "area": "Pokok Sena",
    "reservePrice": 219000,
    "auctionDate": "14th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "256 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1139",
    "title": "1 Storey Terrace House",
    "address": "No. 63, Lorong Manggis 7, Taman Manggis, Off Jalan Tanjung Bendahara, 05300 Alor Setar, Kedah",
    "postcode": "05300",
    "state": "Kedah",
    "area": "Alor Setar",
    "reservePrice": 350000,
    "auctionDate": "14th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1140",
    "title": "Flat",
    "address": "Unit No. 3-23-3, Tingkat Paya Terubong 5, Mukim 13, 11060 Paya Terubong, Penang",
    "postcode": "11060",
    "state": "Penang",
    "area": "Paya Terubong",
    "reservePrice": 225000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "700 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1141",
    "title": "1 Storey Terrace House",
    "address": "No. 93, Lorong Ara Suria 2, Taman Ara Suria, 13310 Tasek Gelugor, Penang",
    "postcode": "13310",
    "state": "Penang",
    "area": "Tasek Gelugor",
    "reservePrice": 324000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1142",
    "title": "2 Storey Semi Detached House",
    "address": "Lorong Janggus Jaya 1, Taman Janggus Jaya, 13500 Permatang Pauh, Penang",
    "postcode": "13500",
    "state": "Penang",
    "area": "Permatang Pauh",
    "reservePrice": 1011600,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "605 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1143",
    "title": "Flat",
    "address": "Unit No. A-4-3, Jalan Gertak Sanggul, Taman Gertak Sanggul, 11920 Bayan Lepas, Penang",
    "postcode": "11920",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 96000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "495 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1144",
    "title": "Flat",
    "address": "Unit No. 6-4-06, Villa Sri Kenanga, Jalan Batu Uban 2, 11700 Glugor, Penang",
    "postcode": "11700",
    "state": "Penang",
    "area": "Glugor",
    "reservePrice": 215000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "495 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1145",
    "title": "Apartment",
    "address": "Unit No. 3-23-05, Lengkok Angsana, Mukim 13, 11500 Ayer Itam, Penang",
    "postcode": "11500",
    "state": "Penang",
    "area": "Ayer Itam",
    "reservePrice": 170586,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "700 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1YVAzu5cpIdjBlIidOQEfMD_5O6Nx2D14&sz=w800"
    ]
  },
  {
    "id": "1146",
    "title": "Apartment",
    "address": "Unit No. 188-3-3, Sri Sayang Apartment, Jalan Batu Ferringhi, 11100 Batu Ferringhi, Penang",
    "postcode": "11100",
    "state": "Penang",
    "area": "Batu Ferringhi",
    "reservePrice": 270000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "807 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1147",
    "title": "2 Storey Terrace House",
    "address": "No. 8, Lahat Permai 3, Taman Lahat Permai, 31500 Lahat, Perak",
    "postcode": "31500",
    "state": "Perak",
    "area": "Lahat",
    "reservePrice": 180000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1148",
    "title": "2 Storey Terrace House",
    "address": "No. 48, Jalan Taman Marisa, Taman Marisa, 34000 Taiping, Perak",
    "postcode": "34000",
    "state": "Perak",
    "area": "Taiping",
    "reservePrice": 225180,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1149",
    "title": "1 Storey Semi Detached House",
    "address": "No. 331, Lorong 22, Taman Kota Jaya, 34700 Simpang, Perak",
    "postcode": "34700",
    "state": "Perak",
    "area": "Simpang",
    "reservePrice": 230850,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "000 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1150",
    "title": "2 Storey Terrace House",
    "address": "No. 22, Persiaran Pengkalan Timur 16, Medan Pengkalan Impian, 31650 Ipoh, Perak",
    "postcode": "31650",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 477000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "346 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1151",
    "title": "Office Building",
    "address": "Unit No. 6-B2, Jalan Meru Bestari D1, Kompleks Perdagangan DWJ@Meru, 30020 Ipoh, Perak",
    "postcode": "30020",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 207000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "603 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1152",
    "title": "Apartment",
    "address": "Unit No. J-5-16, Jalan Klebang Sentosa 2, Apartmen Casa Klebang 1, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 170000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "850 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1153",
    "title": "1 Storey Semi Detached House",
    "address": "No. 245, Persiaran Liman 5/1, Taman Liman, 33020 Kuala Kangsar, Perak",
    "postcode": "33020",
    "state": "Perak",
    "area": "Kuala Kangsar",
    "reservePrice": 224000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "293 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1154",
    "title": "2 Storey Terrace House",
    "address": "No. 36, Lorong Desa Sitiawan 3, Taman Desa Sitiawan, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 226800,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "324 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1155",
    "title": "1 Storey Terrace House",
    "address": "No. 6, Jalan Akasia 6, Taman Kinding Akasia, 31200, Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 200000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1156",
    "title": "3 Storey Shop Office",
    "address": "No. 3, Persiaran Thaupy 1, Pusat Bandar Baru, 34300 Bagan Serai, Perak",
    "postcode": "34300",
    "state": "Perak",
    "area": "Bagan Serai",
    "reservePrice": 588000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1157",
    "title": "2 Storey Terrace House",
    "address": "No. 60, Laluan Prisma 5, Taman Pengkalan Prisma, 31550 Pusing, Perak",
    "postcode": "31550",
    "state": "Perak",
    "area": "Pusing",
    "reservePrice": 290000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "300 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1158",
    "title": "Town House (Upper Unit)",
    "address": "No. 376B, Taman Kledang, 31100 Sungai Siput (U), Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput (U)",
    "reservePrice": 98000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "775 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1159",
    "title": "1 Storey Terrace House",
    "address": "No. 36, Pesara Kelebang Jaya 12, Taman Klebang Jaya, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 150000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1160",
    "title": "2 Storey Terrace House",
    "address": "No. 21, Lorong Aman 25, Taman Kamunting Aman, 34600 Kamunting, Perak",
    "postcode": "34600",
    "state": "Perak",
    "area": "Kamunting",
    "reservePrice": 234000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "496 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1161",
    "title": "1 Storey Detached House",
    "address": "PT 363, Lorong Taqwa, Kampung Tersusun, Jalan Gula, 34400 Simpang Ampat Semanggol, Perak",
    "postcode": "34400",
    "state": "Perak",
    "area": "Simpang Ampat Semanggol",
    "reservePrice": 186300,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "000 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1162",
    "title": "1 Storey Terrace House",
    "address": "No. 23, Lorong Lagenda 72, Bandar Lagenda Teluk Intan, 36000, Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 215000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1163",
    "title": "2 Storey Terrace House",
    "address": "No. 8, Lintang PR1MA 4, Residensi PR1MA Bagan Serai, 34300 Bagan Serai, Perak",
    "postcode": "34300",
    "state": "Perak",
    "area": "Bagan Serai",
    "reservePrice": 279000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1164",
    "title": "1 Storey Terrace House",
    "address": "No. 28, Jalan Chemor Sejahtera 3, Desa Chemor Sejahtera, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 162000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "194 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1165",
    "title": "1 Storey Terrace House",
    "address": "No. 25, Lorong Lekir Indah 3, Taman Lekir Indah, 32020, Lekir, Perak",
    "postcode": "32020",
    "state": "Perak",
    "area": "Lekir",
    "reservePrice": 180000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1166",
    "title": "1 Storey Terrace House",
    "address": "No. 171, Jalan SM 2A/8, Fasa 2A, 32040 Seri Manjung, Perak",
    "postcode": "32040",
    "state": "Perak",
    "area": "Seri Manjung",
    "reservePrice": 270000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "604 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1167",
    "title": "1 Storey Terrace House",
    "address": "No. 24, Jalan Koperasi 35, Taman Perpaduan Koperasi, 31400 Ipoh, Perak",
    "postcode": "31400",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 250000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1168",
    "title": "Apartment",
    "address": "Unit No. 17-23-10, Hilir Sungai Pinang, Serina Bay, 11600 Jelutong, Penang",
    "postcode": "11600",
    "state": "Penang",
    "area": "Jelutong",
    "reservePrice": 249320,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "700 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1mMm_HNVaFTiBB7GeBm_Ny76bJz8pLctT&sz=w800"
    ]
  },
  {
    "id": "1169",
    "title": "3 Storey Semi Detached House",
    "address": "No. 16, Lengkok Sungai Emas 1, Ferringhi Park, 11100 Batu Ferringhi, Penang",
    "postcode": "11100",
    "state": "Penang",
    "area": "Batu Ferringhi",
    "reservePrice": 1020600,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "154 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1170",
    "title": "3 Storey Terrace House",
    "address": "No. 1, Lorong Sungai Kelian 2, 11200 Tanjong Bungah, Penang",
    "postcode": "11200",
    "state": "Penang",
    "area": "Tanjong Bungah",
    "reservePrice": 1620000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "939 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1171",
    "title": "Condominium",
    "address": "Unit No. 61A-35-8, Shineville Park Condominium, Solok Thean Tek 1, 11400 George Town, Penang",
    "postcode": "11400",
    "state": "Penang",
    "area": "George Town",
    "reservePrice": 495000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "593 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1172",
    "title": "Flat",
    "address": "Unit No. 1062-19-23, Jalan Paya Terubong, Mukim 13, 11060, Penang",
    "postcode": "11060",
    "state": "Penang",
    "area": "Penang",
    "reservePrice": 126000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "538 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1173",
    "title": "Apartment",
    "address": "Unit No. 46-17-18, Desa Green, Jalan Van Praagh, 11600 Jelutong, Penang",
    "postcode": "11600",
    "state": "Penang",
    "area": "Jelutong",
    "reservePrice": 234000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "700 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1gwRtVS7ov0h0VHeGC8kaTcL9vnu5UBvD&sz=w800"
    ]
  },
  {
    "id": "1174",
    "title": "1 Storey Terrace House",
    "address": "No. 155, Jalan Cenderawasih 1, Taman Cenderawasih, 14300 Nibong Tebal, Penang",
    "postcode": "14300",
    "state": "Penang",
    "area": "Nibong Tebal",
    "reservePrice": 260000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "958 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1175",
    "title": "2 Storey Shop Office",
    "address": "No. 58, Kuala Jalan Bahru, 11000 Balik Pulau, Penang",
    "postcode": "11000",
    "state": "Penang",
    "area": "Balik Pulau",
    "reservePrice": 838350,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=16wzXHnknmkUPsi8-LkK01SOy_E1X0AR-&sz=w800"
    ]
  },
  {
    "id": "1176",
    "title": "Apartment",
    "address": "Unit No. 188-8-2 (on site 188-9-2), Jalan Batu Ferringgi, Sri Sayang, 11100 Batu Ferringgi, Penang",
    "postcode": "11100",
    "state": "Penang",
    "area": "Batu Ferringgi",
    "reservePrice": 307800,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "829 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1177",
    "title": "Apartment",
    "address": "Unit No. A-12-02, Pangsapuri Pinang Laguna, Jalan Laguna 2, 13700 Perai, Penang",
    "postcode": "13700",
    "state": "Penang",
    "area": "Perai",
    "reservePrice": 360000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "926 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1178",
    "title": "2 Storey Semi Detached House",
    "address": "No. 102, Lorong 1/SS9, Bandar Tasek Mutiara, 14120 Simpang Ampat, Penang",
    "postcode": "14120",
    "state": "Penang",
    "area": "Simpang Ampat",
    "reservePrice": 650000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "594 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1179",
    "title": "Apartment",
    "address": "Unit No. 10-02, Pangsapuri Prima Aman, Lorong Perai Utama 8, Taman Perai Utama, 13600 Perai, Penang",
    "postcode": "13600",
    "state": "Penang",
    "area": "Perai",
    "reservePrice": 210000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "926 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1PaLJPpZ71HmJceKv6yQTq2L57a-qQusT&sz=w800"
    ]
  },
  {
    "id": "1180",
    "title": "1 Storey Terrace House",
    "address": "No. 5, Jalan Guar Perahu 3, Taman Guar Perahu, 14400, Kubang Semang, Penang",
    "postcode": "14400",
    "state": "Penang",
    "area": "Kubang Semang",
    "reservePrice": 261000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "098 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1181",
    "title": "Apartment",
    "address": "Unit No. 88-6-25, Puncak Erskine, Jalan Fettes, 10470 Tanjung Tokong, Penang",
    "postcode": "10470",
    "state": "Penang",
    "area": "Tanjung Tokong",
    "reservePrice": 129600,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "603 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1182",
    "title": "Apartment",
    "address": "Unit No. 14-09, Jalan Assumption, Park View Tower, 12100 Butterworth, Penang",
    "postcode": "12100",
    "state": "Penang",
    "area": "Butterworth",
    "reservePrice": 243000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "883 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1183",
    "title": "Apartment",
    "address": "Unit No. 2-10-10, Block 2, Lintang Sungai Ara 8, Idaman Melur, 11900 Bayan Lepas, Penang",
    "postcode": "11900",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 216000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "657 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1184",
    "title": "Apartment",
    "address": "Unit No. 6-5-7, Jalan Grik, Suria Mutiara Apartment, 11600 Jelutong, Penang",
    "postcode": "11600",
    "state": "Penang",
    "area": "Jelutong",
    "reservePrice": 410000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "807 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1185",
    "title": "Flat",
    "address": "Unit No.9-9-8, Lebuhraya Batu Lancang, Taman Seri Damai, 11600 Jelutong, Penang",
    "postcode": "11600",
    "state": "Penang",
    "area": "Jelutong",
    "reservePrice": 290000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "743 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1ypzZLSo9MrQYpTSD0JSDQ4sEHeWju_m1&sz=w800"
    ]
  },
  {
    "id": "1186",
    "title": "1.5 Storey Terrace House",
    "address": "No. 13, Jalan Angsana 1, Taman Angsana, Fasa 1, 33300 Gerik, Perak",
    "postcode": "33300",
    "state": "Perak",
    "area": "Gerik",
    "reservePrice": 284000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "725 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1187",
    "title": "1 Storey Terrace House",
    "address": "No. 81, Lorong Mewah 11, Taman Mewah, 34600 Kamunting, Perak",
    "postcode": "34600",
    "state": "Perak",
    "area": "Kamunting",
    "reservePrice": 170000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1188",
    "title": "1 Storey Terrace House",
    "address": "No. 404-U21, Kampung Muhibbah Fasa 2, 31100, Sungai Siput (U), Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput (U)",
    "reservePrice": 190000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1189",
    "title": "1 Storey Semi Detached House",
    "address": "No. 30, Lorong Biru 2/1, Taman Biru II, 32400 Ayer Tawar, Perak",
    "postcode": "32400",
    "state": "Perak",
    "area": "Ayer Tawar",
    "reservePrice": 270000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "971 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1190",
    "title": "2 Storey Terrace House",
    "address": "No. 48, Jalan Tasek Lama, Taman Tasek, 31400 Ipoh, Perak",
    "postcode": "31400",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 450000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "831 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1191",
    "title": "1 Storey Semi Detached House",
    "address": "No. 4, Laluan Seri Rahmat 4, Halaman Seri Rahmat, 31000 Batu Gajah, Perak",
    "postcode": "31000",
    "state": "Perak",
    "area": "Batu Gajah",
    "reservePrice": 200000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "948 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1192",
    "title": "1 Storey Terrace House",
    "address": "No. 8, Lorong Lagenda 47, Seksyen 3, Bandar Lagenda Teluk Intan, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 144000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "880 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1193",
    "title": "1 Storey Terrace House",
    "address": "No. 17, Jalan Putra Harmoni 4, Taman Putra Harmoni, 31400 Ipoh, Perak",
    "postcode": "31400",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 270000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "320 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1194",
    "title": "1 Storey Terrace House",
    "address": "No. 367, Jalan RB 8, Residensi Bidoria, 35500 Bidor, Perak",
    "postcode": "35500",
    "state": "Perak",
    "area": "Bidor",
    "reservePrice": 350000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "880 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1195",
    "title": "2 Storey Shop Office",
    "address": "No. 27 & 27A, Jalan Meru Utama A1, Medan Maru Utama, 30020 Ipoh, Perak",
    "postcode": "30020",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 900000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "560 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1196",
    "title": "1 Storey Terrace House",
    "address": "No. 29, Lebuh Bercham Selatan 1/5, Desa Impian, 31400 Ipoh, Perak",
    "postcode": "31400",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 81000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "200 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1197",
    "title": "Residential Land",
    "address": "Lot No. PT 1339, Lorong Anggerik 1, Kampung Tersusun Batu 7 Lekir, 32020 Lekir, Perak",
    "postcode": "32020",
    "state": "Perak",
    "area": "Lekir",
    "reservePrice": 130000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "976 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1198",
    "title": "1 Storey Terrace House",
    "address": "No. 517, Laluan Kledang 5/4, Taman Kledang, 31100 Sungai Siput (U), Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput (U)",
    "reservePrice": 135000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1199",
    "title": "1 Storey Terrace House",
    "address": "No. 471, Lorong 10, Taman Desa Bakti, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 170000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1200",
    "title": "1 Storey Terrace House",
    "address": "No. 167, Jalan Tropika 1, Residensi Lagenda Tropika, 35350 Temoh, Perak",
    "postcode": "35350",
    "state": "Perak",
    "area": "Temoh",
    "reservePrice": 218000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "059 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1201",
    "title": "1 Storey Terrace House",
    "address": "No. 216, Jalan Residen 4/8, Residen 4, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 200000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "880 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1202",
    "title": "1.5 Storey Terrace House",
    "address": "No .13, Jalan Tamalan 7, Proton City, 35900 Tanjong Malim, Perak",
    "postcode": "35900",
    "state": "Perak",
    "area": "Tanjong Malim",
    "reservePrice": 450000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1203",
    "title": "1 Storey Terrace House",
    "address": "No. 4, Dataran Setia 4, Taman Bemban Setia, 31000 Batu Gajah, Perak",
    "postcode": "31000",
    "state": "Perak",
    "area": "Batu Gajah",
    "reservePrice": 110000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "194 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1204",
    "title": "2 Storey Terrace House",
    "address": "No. 70, Jalan Teratai J4/7, Taman Ros, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 410000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "604 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1205",
    "title": "1 Storey Terrace House",
    "address": "No. 99, Taman Sri Ishaq, 36400 Hutan Melintang, Perak",
    "postcode": "36400",
    "state": "Perak",
    "area": "Hutan Melintang",
    "reservePrice": 170000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1206",
    "title": "2 Storey Terrace House",
    "address": "No. 263, Lorong Melati 6, Taman Melati, 32200 Lumut, Perak",
    "postcode": "32200",
    "state": "Perak",
    "area": "Lumut",
    "reservePrice": 330000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1207",
    "title": "1 Storey Terrace House",
    "address": "No. 636, Laluan Kledang 5/8, Taman Kledang, 31100 Sungai Siput (U), Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput (U)",
    "reservePrice": 180000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1208",
    "title": "Agricultural Land",
    "address": "Lot 2954, Mukim Selama, Daerah Selama, Perak",
    "postcode": "",
    "state": "Perak",
    "area": "Daerah Selama",
    "reservePrice": 265000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1209",
    "title": "Town House",
    "address": "Unit No. 380B, Taman Kledang, 31100 Sungai Siput (U), Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput (U)",
    "reservePrice": 88000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "775 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1210",
    "title": "1 Storey Cluster Terrace House",
    "address": "No. 1276, Jalan Residen 8/33, Residen 8, Bandar Baru Setia Awan Perdana, 32000, Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 200000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "798 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1211",
    "title": "Agricultural Land",
    "address": "Lot 2953, Mukim Selama, Daerah Selama, Perak",
    "postcode": "",
    "state": "Perak",
    "area": "Daerah Selama",
    "reservePrice": 200000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1212",
    "title": "Agricultural Land",
    "address": "Lot 1549, Mukim Selama, Daerah Selama, Perak",
    "postcode": "",
    "state": "Perak",
    "area": "Daerah Selama",
    "reservePrice": 195000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1213",
    "title": "2 Storey Terrace House",
    "address": "No. 28, Jalan Tawas Baru 18, Taman Ehsan, 30010 Ipoh, Perak",
    "postcode": "30010",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 328500,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "702 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1214",
    "title": "2 Storey Adjoining Terrace House",
    "address": "No. 16, Jalan Bougainvillea B/13, Bandar Seri Botani, 31350 Ipoh, Perak",
    "postcode": "31350",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 542700,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "432 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1215",
    "title": "1 Storey Terrace House",
    "address": "No. 400, Jalan Residen 8/12, Residen 8, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 180000,
    "auctionDate": "21st Sep 2026 (Mon)",
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
    "title": "2 Storey Terrace House",
    "address": "No. 254, Jalan TT 2/8, Taman Tapah 2, 35000 Tapah, Perak",
    "postcode": "35000",
    "state": "Perak",
    "area": "Tapah",
    "reservePrice": 300000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "668 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1217",
    "title": "2 Storey Terrace House",
    "address": "No. 58, Lorong Tasek Gelugor Utama 3/6, Taman Tasek Gelugor Utama, 13300 Tasek Gelugor, Penang",
    "postcode": "13300",
    "state": "Penang",
    "area": "Tasek Gelugor",
    "reservePrice": 303750,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "087 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Ro0M95wbY4SBDK9bY2eiul9Ro5Wv9Eb9&sz=w800"
    ]
  },
  {
    "id": "1218",
    "title": "Flat",
    "address": "Unit No. 7D-10-02, Lebuhraya Thean Tek, Bandar Baru Ayer Itam-Desa Intan, 11500 Ayer Itam, Penang",
    "postcode": "11500",
    "state": "Penang",
    "area": "Ayer Itam",
    "reservePrice": 154000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "635 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1219",
    "title": "Flat",
    "address": "Unit No. 24-5-6, Persiaran Mayang Pasir 5, Bandar Bayan Baru, 11950 Bayan Lepas, Penang",
    "postcode": "11950",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 120000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "495 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1220",
    "title": "Apartment",
    "address": "Unit No. 6-17, Jalan Terbilang, Taman Terbilang, 13000 Butterworth, Penang",
    "postcode": "13000",
    "state": "Penang",
    "area": "Butterworth",
    "reservePrice": 297000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "173 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1221",
    "title": "Apartment",
    "address": "Kayangan Puri Mutiara, Medan Fettes, 10470 Tanjung Tokong, Penang",
    "postcode": "10470",
    "state": "Penang",
    "area": "Tanjung Tokong",
    "reservePrice": 350000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "807 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1222",
    "title": "Apartment",
    "address": "Unit No. 6-9-3A, Sri Kristal, Lengkok Angsana, 11500 Ayer Itam, Penang",
    "postcode": "11500",
    "state": "Penang",
    "area": "Ayer Itam",
    "reservePrice": 333000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "710 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1223",
    "title": "Flat",
    "address": "Unit No.6-5-14, Block H, Greenlane Heights, Jalan Gangsa, 11600 Georgetown, Penang",
    "postcode": "11600",
    "state": "Penang",
    "area": "Georgetown",
    "reservePrice": 160000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "549 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1IsjakXEP-GvusiQLJv2ShtxDf6UiS2pS&sz=w800"
    ]
  },
  {
    "id": "1224",
    "title": "2 Storey Terrace House",
    "address": "No. 22, Lorong Damai 4, Taman Permata, 14000 Bukit Mertajam, Penang",
    "postcode": "14000",
    "state": "Penang",
    "area": "Bukit Mertajam",
    "reservePrice": 380000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "300 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1225",
    "title": "2 Storey Terrace House",
    "address": "No. 15, Lorong Mekar Sari 12, Taman Mekar Sari, 13200 Kepala Batas, Penang",
    "postcode": "13200",
    "state": "Penang",
    "area": "Kepala Batas",
    "reservePrice": 413100,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "475 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1ejRh4oo1wln7eOIbrkqbt5dqW-F8DzHy&sz=w800"
    ]
  },
  {
    "id": "1226",
    "title": "2 Storey Terrace House",
    "address": "No. 39, Lorong Tasek Gelugor Utama 3/8, Taman Tasek Gelugor Utama, 13300 Tasek Gelugor, Penang",
    "postcode": "13300",
    "state": "Penang",
    "area": "Tasek Gelugor",
    "reservePrice": 333000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "392 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Ro0M95wbY4SBDK9bY2eiul9Ro5Wv9Eb9&sz=w800"
    ]
  },
  {
    "id": "1227",
    "title": "Apartment",
    "address": "Unit No. 5-03, Pangsapuri Block A, Jalan Mewah 2, 12100 Butterworth, Penang",
    "postcode": "12100",
    "state": "Penang",
    "area": "Butterworth",
    "reservePrice": 170000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "753 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1228",
    "title": "Apartment",
    "address": "Unit No. 33-14-12, Desa Indah, Persiaran Paya Terubong 1, 11900 Bayan Lepas, Penang",
    "postcode": "11900",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 230000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "657 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1V1WFCCyHiOFhITT633HNY8nrwuIRCf4q&sz=w800"
    ]
  },
  {
    "id": "1229",
    "title": "1 Storey Terrace House",
    "address": "No. 610, Jalan Residen 1/10, Residen 1, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 168000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "879 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1230",
    "title": "2 Storey Terrace House",
    "address": "No. 2, Jalan Putra Berlian 3A, Kampar Putra, 31900 Kampar, Perak",
    "postcode": "31900",
    "state": "Perak",
    "area": "Kampar",
    "reservePrice": 461700,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "939 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1231",
    "title": "1 Storey Terrace House",
    "address": "No. 81, Jalan Seri Delima 2, Taman Seri Delima, 32040 Seri Manjung, Perak",
    "postcode": "32040",
    "state": "Perak",
    "area": "Seri Manjung",
    "reservePrice": 195000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "323 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1232",
    "title": "1 Storey Terrace House",
    "address": "No. 22, Jalan Mahkota Kampar 7, Taman Mahkota Kampar, 31900 Kampar, Perak",
    "postcode": "31900",
    "state": "Perak",
    "area": "Kampar",
    "reservePrice": 300000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "357 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1233",
    "title": "2 Storey Terrace House",
    "address": "No. 1, Lintasan Sungai Chemor 3, Taman Bunga Raya, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 370000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "755 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1234",
    "title": "2 Storey Semi Detached House",
    "address": "Laluan Desa Chemor 3, Taman Chemor Indah, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 320000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1235",
    "title": "2 Storey Terrace House",
    "address": "No. 63, Jalan Taman Jana Setia, Taman Jana Setia, 34600 Kamunting, Perak",
    "postcode": "34600",
    "state": "Perak",
    "area": "Kamunting",
    "reservePrice": 340000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1236",
    "title": "1 Storey Terrace House",
    "address": "No. 55, Jalan Meranti, Taman Pelangi, 31000 Batu Gajah, Perak",
    "postcode": "31000",
    "state": "Perak",
    "area": "Batu Gajah",
    "reservePrice": 120000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "216 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1237",
    "title": "2 Storey Terrace House",
    "address": "No. 119, Laluan Bercham Utara 5, Taman Utama, 31400 Ipoh, Perak",
    "postcode": "31400",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 250000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "728 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1238",
    "title": "1 Storey Terrace House",
    "address": "No. 8, Dataran Pengkalan Barat 12, Taman Temara, 31650 Ipoh, Perak",
    "postcode": "31650",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 110000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1239",
    "title": "1 Storey Cluster Semi Detached House",
    "address": "No. 1453, Jalan Residen 8/36, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 220000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "797 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1240",
    "title": "1 Storey Terrace House",
    "address": "No. 93, Jalan SM 3C/4, Fasa 3C, 32040 Seri Manjung, Perak",
    "postcode": "32040",
    "state": "Perak",
    "area": "Seri Manjung",
    "reservePrice": 208000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1241",
    "title": "2 Storey Terrace Shop Office",
    "address": "No. 85 & 85A, Jalan Klebang Sentosa 2, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 412200,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1242",
    "title": "2 Storey Terrace House",
    "address": "No. 7, Lorong Gunung Rapat 5, Taman Cemerlang Emas, 31350, Ipoh, Perak",
    "postcode": "31350",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 270000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1243",
    "title": "1 Storey Terrace House",
    "address": "No. 214, Jalan Residen 3/5, Residen 3, Bandar Baru Setia Awan Perdana, 32000, Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 200000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1244",
    "title": "1 Storey Terrace House",
    "address": "No. 139, Lorong 4, Taman Melor, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 184000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1245",
    "title": "1 Storey Terrace House",
    "address": "No. 18, Jalan Tasik Indah 26, Bandar Universiti, 32610 Seri Iskandar, Perak",
    "postcode": "32610",
    "state": "Perak",
    "area": "Seri Iskandar",
    "reservePrice": 250000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "770 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1246",
    "title": "2 Storey Terrace House",
    "address": "No. 112, Taman Pelangi, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 400000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "765 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1247",
    "title": "1 Storey Terrace House",
    "address": "No. 206, Jalan RB 6, Residensi Bidoria, 35500 Bidor, Perak",
    "postcode": "35500",
    "state": "Perak",
    "area": "Bidor",
    "reservePrice": 225000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "079 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1248",
    "title": "Terrace House",
    "address": "Persiaran Tapah Indah 3, Taman Tapah Indah, 35000 Tapah, Perak",
    "postcode": "35000",
    "state": "Perak",
    "area": "Tapah",
    "reservePrice": 200000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "854 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1249",
    "title": "Apartment",
    "address": "Unit No. A-5-1, Jalan Impiana 2, Taman Meru Impiana, 30020 Ipoh, Perak",
    "postcode": "30020",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 110000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "753 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1250",
    "title": "1 Storey Terrace House",
    "address": "No. 2, Jalan Perdana 3/6, Taman Serai Perdana, 34300 Bagan Serai, Perak",
    "postcode": "34300",
    "state": "Perak",
    "area": "Bagan Serai",
    "reservePrice": 190000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "000 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1251",
    "title": "1 Storey Terrace House",
    "address": "No. 833, Jalan Muhibah, Taman Panglima Jaya, 34000 Taiping, Perak",
    "postcode": "34000",
    "state": "Perak",
    "area": "Taiping",
    "reservePrice": 190000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "990 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1252",
    "title": "1 Storey Terrace House",
    "address": "No. 96, Jalan Tropika 1, Residensi Lagenda Tropika, 35350 Temoh, Perak",
    "postcode": "35350",
    "state": "Perak",
    "area": "Temoh",
    "reservePrice": 170000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1253",
    "title": "1 Storey Terrace House",
    "address": "No. 421, Laluan Kledang 5/2, Taman Kledang, 31100 Sungai Siput (U), Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput (U)",
    "reservePrice": 120000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1254",
    "title": "1 Storey Terrace House",
    "address": "No. 128, Jalan Residen 1/3, Residen 1, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 180000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1255",
    "title": "1 Storey Terrace House",
    "address": "No. 87, Laluan Kledang 2/8, Taman Kledang, 31100 Sungai Siput, Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput",
    "reservePrice": 120000,
    "auctionDate": "22nd Sep 2026 (Tue)",
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
    "title": "1 Storey Semi Detached House",
    "address": "No. 4, Jalan Gopeng Perdana 4, Taman Gopeng Perdana, 31600 Gopeng, Perak",
    "postcode": "31600",
    "state": "Perak",
    "area": "Gopeng",
    "reservePrice": 200000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "863 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1257",
    "title": "1 Storey Terrace House",
    "address": "No. 803, Jalan Tropika 14, Residensi Lagenda Tropika, 35350 Temoh, Perak",
    "postcode": "35350",
    "state": "Perak",
    "area": "Temoh",
    "reservePrice": 153000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1258",
    "title": "2 Storey Terrace House",
    "address": "No. 2, Lorong Limau Manis 6, Taman Limau Manis, 14000 Bukit Mertajam, Penang",
    "postcode": "14000",
    "state": "Penang",
    "area": "Bukit Mertajam",
    "reservePrice": 432000,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1259",
    "title": "2 Storey Semi Detached House",
    "address": "No. 1F, Jalan Beriksa 4, Mukim 13, 11500 Ayer Itam, Penang",
    "postcode": "11500",
    "state": "Penang",
    "area": "Ayer Itam",
    "reservePrice": 1000000,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "208 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1260",
    "title": "Apartment",
    "address": "Unit No. 20-11-4, Bukit Saujana, Lorong Bukit Kukus, 11060 Paya Terubong, Penang",
    "postcode": "11060",
    "state": "Penang",
    "area": "Paya Terubong",
    "reservePrice": 106288.2,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "689 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=14Kp-opFMXwe0zc50FAajlc_cIUuxfAwD&sz=w800"
    ]
  },
  {
    "id": "1261",
    "title": "Flat",
    "address": "Unit No. 55-2-5, Jalan Kampar, Taman Wangi, 10460 Georgetown, Penang",
    "postcode": "10460",
    "state": "Penang",
    "area": "Georgetown",
    "reservePrice": 265000,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "667 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1262",
    "title": "2 Storey Semi Detached House",
    "address": "Premises No. 8, Off Jalan Nelayan, Kampung Nelayan, 11050 Teluk Bahang, Penang",
    "postcode": "11050",
    "state": "Penang",
    "area": "Teluk Bahang",
    "reservePrice": 198000,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "208 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1263",
    "title": "1 Storey Terrace House",
    "address": "No. 63, Jalan Nakhoda Bestari 2, Taman Nakhoda Bestari, 32200 Lumut, Perak",
    "postcode": "32200",
    "state": "Perak",
    "area": "Lumut",
    "reservePrice": 162000,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "829 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1264",
    "title": "2 Storey Terrace House",
    "address": "No. 64, Sri Klebang D/7, Bandar Baru Sri Klebang, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 324000,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "518 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1265",
    "title": "Semi Detached House",
    "address": "Jalan Karisma Suria 1, Taman Karisma Suria, Kampung China, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 450000,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "084 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1266",
    "title": "1 Storey Terrace House",
    "address": "No. 31, Lorong Seberang 19, Taman Pinang Seberang, 34600 Kamunting, Perak",
    "postcode": "34600",
    "state": "Perak",
    "area": "Kamunting",
    "reservePrice": 200000,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "917 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1267",
    "title": "Service Apartment",
    "address": "Unit No. 22-3A, Menara Agacia @ Kampar (Champs Elysees), Lingkaran Agacia, Bandar Agacia, 31910 Kampar, Perak",
    "postcode": "31910",
    "state": "Perak",
    "area": "Kampar",
    "reservePrice": 97200,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "430 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1268",
    "title": "1 Storey Terrace House",
    "address": "No. 1050, Laluan Kledang 4/4, Taman Kledang, 31100 Sungai Siput (U), Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput (U)",
    "reservePrice": 105300,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "098 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1269",
    "title": "2 Storey Terrace House",
    "address": "Sri Klebang D/1, Bandar Baru Sri Klebang, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 460000,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "163 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1270",
    "title": "1 Storey Terrace House",
    "address": "No. 48, Jalan Mahsuri 10, Taman Mahsuri Jaya, 31900 Kampar, Perak",
    "postcode": "31900",
    "state": "Perak",
    "area": "Kampar",
    "reservePrice": 130000,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1271",
    "title": "1 Storey Terrace House",
    "address": "No. 16, Jalan Kinding Perdana 8, Taman Kinding Perdana, 30250 Tanjung Rambutan, Perak",
    "postcode": "30250",
    "state": "Perak",
    "area": "Tanjung Rambutan",
    "reservePrice": 200000,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1272",
    "title": "Semi Detached House",
    "address": "Laluan Pancaran Siputeh 1, Taman Siputeh Pancaran, 31560 Siputeh, Perak",
    "postcode": "31560",
    "state": "Perak",
    "area": "Siputeh",
    "reservePrice": 200000,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "080 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1273",
    "title": "1 Storey Detached House",
    "address": "No. 91, Jalan Padang, Sungai Buloh, 31100 Sungai Siput (U), Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput (U)",
    "reservePrice": 280000,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "708 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1274",
    "title": "1 Storey Terrace House",
    "address": "No. 24, Lorong PK/6, Taman Palma 4, 34600 Kamunting, Perak",
    "postcode": "34600",
    "state": "Perak",
    "area": "Kamunting",
    "reservePrice": 250000,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1275",
    "title": "1 Storey Terrace House",
    "address": "No. 28, Taman Seri Kemuning, 06000 Jitra, Kedah",
    "postcode": "06000",
    "state": "Kedah",
    "area": "Jitra",
    "reservePrice": 150000,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "020 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1276",
    "title": "1 Storey Semi Detached House",
    "address": "No. 25, Taman Perpaduan, Fasa 2, Jalan Kuala Kedah, 06600 Kuala Kedah, Kedah",
    "postcode": "06600",
    "state": "Kedah",
    "area": "Kuala Kedah",
    "reservePrice": 300000,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "282 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1277",
    "title": "1 Storey Cluster House",
    "address": "Jalan Residen 6/18, Residen 6, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 192000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "916 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1278",
    "title": "2 Storey Terrace House",
    "address": "No. 5, Laluan Lapangan, Taman Sri Perkasa, 31650 Ipoh, Perak",
    "postcode": "31650",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 340200,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1279",
    "title": "1 Storey Terrace House",
    "address": "No. 196, Jalan Lestari 12, Lestari IUS, 32610 Seri Iskandar, Perak",
    "postcode": "32610",
    "state": "Perak",
    "area": "Seri Iskandar",
    "reservePrice": 186300,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "920 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1280",
    "title": "1 Storey Semi Detached House",
    "address": "No. 194, Jalan Seri Melur 5, Taman Seri Melur, 32400 Ayer Tawar, Perak",
    "postcode": "32400",
    "state": "Perak",
    "area": "Ayer Tawar",
    "reservePrice": 324000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "886 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1281",
    "title": "1 Storey Terrace House",
    "address": "No. 43, Jalan Rishah 6, Taman Rishah, 30100 Ipoh, Perak",
    "postcode": "30100",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 240000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "661 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1282",
    "title": "Detached House",
    "address": "No. 8, Laluan Tasek Timur 12, Taman Seri Dermawan, 31400 Ipoh, Perak",
    "postcode": "31400",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 600000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "898 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1283",
    "title": "1 Storey Semi Detached House",
    "address": "No. 9, Jalan Melati 1, Taman Selinsing Melati, 34400 Simpang Ampat Semanggol, Perak",
    "postcode": "34400",
    "state": "Perak",
    "area": "Simpang Ampat Semanggol",
    "reservePrice": 300000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "464 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1284",
    "title": "2 Storey Terrace House",
    "address": "Jalan Kasturi 5, Taman Kasturi, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 400000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1285",
    "title": "Terrace House",
    "address": "Lorong Lagenda 79, Seksyen 3, Bandar Lagenda Teluk Intan, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 180000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "899 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1286",
    "title": "2 Storey Terrace House",
    "address": "No. 27, Taman Jati Indah, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 340000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "860 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1287",
    "title": "2 Storey Terrace House",
    "address": "Jalan Lakeville 36, Bandar Universiti, 32610 Seri Iskandar, Perak",
    "postcode": "32610",
    "state": "Perak",
    "area": "Seri Iskandar",
    "reservePrice": 330000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1288",
    "title": "1 Storey Terrace House",
    "address": "No. 40, Persiaran Iskandar Perdana 8, Seksyen 2, Bandar Seri Iskandar, 32610 Seri Iskandar, Perak",
    "postcode": "32610",
    "state": "Perak",
    "area": "Seri Iskandar",
    "reservePrice": 178200,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1289",
    "title": "1 Storey Terrace House",
    "address": "Jalan Bandar Puteri Jaya 2/1, Bandar Puteri Jaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 177147,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1290",
    "title": "2 Storey Terrace House",
    "address": "Jalan Seri Bayu 2/7, Taman Seri Bayu, 08000 Sungai Lalang, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Lalang",
    "reservePrice": 233280,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "380 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1291",
    "title": "1 Storey Terrace House",
    "address": "No. 624, Jalan Kelisa Ria 1/23, Taman Kelisa Ria, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 145800,
    "auctionDate": "24th Sep 2026 (Thu)",
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
    "title": "2 Storey Terrace House",
    "address": "No. 20, Jalan Desa Jaya 10, Taman Desa Jaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 178200,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "119 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1293",
    "title": "2 Storey Semi Detached House",
    "address": "No. 5, Jalan Perdana Heights 3/6, Lot 88 The Residence, Perdana Heights, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 756000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "885 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1294",
    "title": "2 Storey Terrace House",
    "address": "No. 30, Lorong BLM 5/2, Bandar Laguna Merbok, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 337500,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "091 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1295",
    "title": "1 Storey Terrace House",
    "address": "No. 547, Jalan Kota Kenari 3, Taman Kota Kenari, 09000 Kulim, Kedah",
    "postcode": "09000",
    "state": "Kedah",
    "area": "Kulim",
    "reservePrice": 315000,
    "auctionDate": "24th Sep 2026 (Thu)",
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
    "title": "2 Storey Terrace House",
    "address": "No. 174-B, Lorong Astana 7/8, Bandar Seri Astana, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 360000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1297",
    "title": "1 Storey Terrace House",
    "address": "No. 2197, Jalan Bandar Puteri Jaya 1/18, Bandar Puteri Jaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 198000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "100 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1298",
    "title": "1 Storey Terrace House",
    "address": "No. 305, Jalan Damai 2/2, Taman Damai, 09400 Padang Serai, Kedah",
    "postcode": "09400",
    "state": "Kedah",
    "area": "Padang Serai",
    "reservePrice": 270000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1299",
    "title": "2 Storey Detached House",
    "address": "No. 362, Persiaran Cinta Sayang, Kelab Cinta Sayang, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 855000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "535 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1300",
    "title": "1 Storey Terrace House",
    "address": "No. 2201, Jalan Mutiara 6/4, Taman Mutiara, Sungai Kob, 09700 Karangan, Kedah",
    "postcode": "09700",
    "state": "Kedah",
    "area": "Karangan",
    "reservePrice": 290000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "475 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1301",
    "title": "1 Storey Detached House",
    "address": "No. 11, Taman Teratai, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 400000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "033 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1302",
    "title": "Agricultural Land",
    "address": "PT. 415, Kedawang, 07000 Langkawi, Kedah",
    "postcode": "07000",
    "state": "Kedah",
    "area": "Langkawi",
    "reservePrice": 2187000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1303",
    "title": "1 Storey Terrace House",
    "address": "No. 20, Taman Sheikh Fadzir, 09310 Baling, Kedah",
    "postcode": "09310",
    "state": "Kedah",
    "area": "Baling",
    "reservePrice": 150000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "001 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1304",
    "title": "1.5 Storey Terrace House",
    "address": "No. 187, Jalan Mutiara BPJ 1, Mutiara Bandar Puteri Jaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 280000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "468 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1305",
    "title": "1 Storey Semi Detached House",
    "address": "No. 36, Jalan Kenanga 9/4, Bandar Amanjaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 306000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "799 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1306",
    "title": "1 Storey Semi Detached House",
    "address": "No. 716, Lorong Nilam 4/3, Taman Delima, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 243000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "960 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1307",
    "title": "Terrace House",
    "address": "Lorong Teja 6/2, Bandar Perdana, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 215000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "803 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1308",
    "title": "1 Storey Terrace House",
    "address": "No. 303, Lorong Residensi A9, Taman Residensi Mesra, 08300 Gurun, Kedah",
    "postcode": "08300",
    "state": "Kedah",
    "area": "Gurun",
    "reservePrice": 240000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "062 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1309",
    "title": "2 Storey Terrace House",
    "address": "No. 22-A, Lorong BLM 5/2, Bandar Laguna Merbok, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 350000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1310",
    "title": "Terrace House",
    "address": "No. 3518, Lorong Serai Wangi 11/12, Taman Serai Wangi, 09400 Padang Serai, Kedah",
    "postcode": "09400",
    "state": "Kedah",
    "area": "Padang Serai",
    "reservePrice": 250000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "205 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1311",
    "title": "Terrace House",
    "address": "No. 1412, Persiaran Utama 4/8, Kulim Utama Fasa 2, Kulim Hi-Tech Park, 09000 Kulim, Kedah",
    "postcode": "09000",
    "state": "Kedah",
    "area": "Kulim",
    "reservePrice": 430000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1312",
    "title": "1 Storey Terrace House",
    "address": "No. 403, Lorong Baiduri 3/4, Taman Delima, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 208000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "098 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1313",
    "title": "Terrace House",
    "address": "No. 279, Jalan Perdana 9/12, Bandar Perdana, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 370000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "600 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1314",
    "title": "1 Storey Terrace House",
    "address": "No. 26, Lorong 9, Taman Gurun Jaya, 08300 Gurun, Kedah",
    "postcode": "08300",
    "state": "Kedah",
    "area": "Gurun",
    "reservePrice": 220000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "200 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1315",
    "title": "Apartment",
    "address": "Unit No. 3B-17-02, N-Park Resort Condominium, Jalan Batu Uban, 11700 Glugor, Penang",
    "postcode": "11700",
    "state": "Penang",
    "area": "Glugor",
    "reservePrice": 340000,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "700 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=10ryUPJG5LTPIvFR-mjDfguxKN65I3Ji1&sz=w800"
    ]
  },
  {
    "id": "1316",
    "title": "1 Storey Terrace House",
    "address": "Lorong Lagenda 56, Bandar Lagenda Teluk Intan, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 178000,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "899 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1317",
    "title": "2 Storey Terrace House",
    "address": "No. 11, Jalan Chemor Setia 4, Taman Chemor Setia, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 315900,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "282 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1318",
    "title": "2 Storey Terrace House",
    "address": "No. 33, Lorong Desa Jaya 2, Taman Desa Jaya, 32400 Ayer Tawar, Perak",
    "postcode": "32400",
    "state": "Perak",
    "area": "Ayer Tawar",
    "reservePrice": 291600,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "456 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1319",
    "title": "Town Villa",
    "address": "Unit No. 83-3, Blok 83, Aras 3, The Residence @ Kampar, Persiaran Residensi, Bandar Agacia, 31910 Kampar, Perak",
    "postcode": "31910",
    "state": "Perak",
    "area": "Kampar",
    "reservePrice": 180000,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "098 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1320",
    "title": "Office Lot",
    "address": "Jalan Meru Bestari D1, Kompleks Perdagangan DWJ @ Meru, 30020 Ipoh, Perak",
    "postcode": "30020",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 207000,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "527 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1321",
    "title": "Industrial Premises",
    "address": "No. Lot 80 (Lot 68993), Jalan Degong, 31900 Kampar, Perak",
    "postcode": "68993",
    "state": "Perak",
    "area": "Kampar",
    "reservePrice": 3660000,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "587 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1322",
    "title": "3 Storey Shop Office",
    "address": "Unit No. 63A-G & 63A-1 & 63A-2, Disney Avenue, Bandar Agacia, 31910 Kampar, Perak",
    "postcode": "31910",
    "state": "Perak",
    "area": "Kampar",
    "reservePrice": 650000,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "647 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1323",
    "title": "Flat",
    "address": "Unit No. A-2-13, Persiaran Lapangan Perdana 3, Panorama Lapangan Perdana, 31650 Ipoh, Perak",
    "postcode": "31650",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 56000,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "688 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1324",
    "title": "1 Storey Terrace House",
    "address": "No. 3, Laluan Wawasan 4, Taman Tronoh Wawasan, 31750 Tronoh, Perak",
    "postcode": "31750",
    "state": "Perak",
    "area": "Tronoh",
    "reservePrice": 81000,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1325",
    "title": "3 Storey Shop Office",
    "address": "No. 50 & 50A & 50B, Medan Stesen 18/3, Station 18, 31650 Ipoh, Perak",
    "postcode": "31650",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 560000,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1326",
    "title": "3 Storey Terrace House",
    "address": "No. 2, Jalan Putra Berlian 13A, Kampar Putra, 31900 Kampar, Perak",
    "postcode": "31900",
    "state": "Perak",
    "area": "Kampar",
    "reservePrice": 550800,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "904 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1327",
    "title": "3 Storey Shop Office",
    "address": "Unit No. 63-G & 63-1 & 63-2, Disney Avenue, Bandar Agacia, 31910 Kampar, Perak",
    "postcode": "31910",
    "state": "Perak",
    "area": "Kampar",
    "reservePrice": 474300,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "647 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1328",
    "title": "Vacant Commercial Development Land",
    "address": "PT No. 16052, Daerah Manjung, Lumut, Perak",
    "postcode": "16052",
    "state": "Perak",
    "area": "Lumut",
    "reservePrice": 8618400,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1329",
    "title": "1 Storey Terrace House",
    "address": "No. 45, Lorong Lekir Indah 4, Taman Lekir Indah, 32020 Lekir, Perak",
    "postcode": "32020",
    "state": "Perak",
    "area": "Lekir",
    "reservePrice": 81000,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1330",
    "title": "3 Storey Shop Office",
    "address": "Unit No. 68, 68A & 68B, Jalan Jelapang 4, Pusat Komersial Jelapang, 30020 Ipoh, Perak",
    "postcode": "30020",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 630000,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "637 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1331",
    "title": "3 Storey Terrace House",
    "address": "No. 7, Lorong Desa Oren 1, Taman Desa Oren, 13020 Butterworth, Penang",
    "postcode": "13020",
    "state": "Penang",
    "area": "Butterworth",
    "reservePrice": 900000,
    "auctionDate": "30th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "020 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1332",
    "title": "1 Storey Semi Detached House",
    "address": "Jalan Raya Murni 3, Taman Raya Murni, 09400 Padang Serai, Kedah",
    "postcode": "09400",
    "state": "Kedah",
    "area": "Padang Serai",
    "reservePrice": 300000,
    "auctionDate": "30th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1333",
    "title": "1 Storey Terrace House",
    "address": "Lorong Merawan 1/3, Taman Merawan, 09000 Kulim, Kedah",
    "postcode": "09000",
    "state": "Kedah",
    "area": "Kulim",
    "reservePrice": 200000,
    "auctionDate": "30th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "990 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1334",
    "title": "2 Storey Semi Detached House",
    "address": "No. 53, Jalan Helang 3, Taman Helang Perdana, 09000 Kulim, Kedah",
    "postcode": "09000",
    "state": "Kedah",
    "area": "Kulim",
    "reservePrice": 570000,
    "auctionDate": "30th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "885 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1335",
    "title": "2 Storey Semi Detached House",
    "address": "No. 480, Lorong Rambai 2/8, Taman Seri Rambai (Permata Residence), 09000, Kulim, Kedah",
    "postcode": "09000",
    "state": "Kedah",
    "area": "Kulim",
    "reservePrice": 900000,
    "auctionDate": "30th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "017 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1336",
    "title": "Apartment",
    "address": "Jalan Merbah, Desa Bayan, 11900 Bayan Lepas, Penang",
    "postcode": "11900",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 262440,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "710 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xp2bcziDjV9gBEEhscthXja25j0xrigN&sz=w800"
    ]
  },
  {
    "id": "1337",
    "title": "1 Storey Terrace House",
    "address": "Jalan Residen 1/5, Residen 1, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 144342,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1338",
    "title": "Town Villa",
    "address": "Block 11, Aras 3, Persiaran Residensi, Bandar Agacia, 31910 Kampar, Perak",
    "postcode": "31910",
    "state": "Perak",
    "area": "Kampar",
    "reservePrice": 170100,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "098 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1339",
    "title": "1 Storey Terrace House",
    "address": "No. 35, Jalan Klebang Tropika 1, Taman Klebang Tropika, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 300000,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "540 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1340",
    "title": "1 Storey Terrace House",
    "address": "No. 533, Lorong Manjung Point 2/6, Taman Manjung Point Seksyen II, 32040 Seri Manjung, Perak",
    "postcode": "32040",
    "state": "Perak",
    "area": "Seri Manjung",
    "reservePrice": 420000,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "486 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1341",
    "title": "1 Storey Semi Detached House",
    "address": "Lorong Manjung Baru 4, Taman Manjung Baru, 32040 Seri Manjung, Perak",
    "postcode": "32040",
    "state": "Perak",
    "area": "Seri Manjung",
    "reservePrice": 307800,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "799 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1342",
    "title": "1 Storey Detached House",
    "address": "No. 41, Jalan Sri Kinta 13, Kampung Sri Kinta, 31650 Ipoh, Perak",
    "postcode": "31650",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 250000,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "788 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1343",
    "title": "2.5 Storey Terrace House",
    "address": "No. 126, Persiaran Klebang Selatan 3, Panorama Tawas Savana, 31200 Ipoh, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 423000,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "480 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1344",
    "title": "2 Storey Terrace House",
    "address": "No. 52, Jalan Pengkalan Bersatu 5A, Desa Pengkalan Bersatu, 31500 Lahat, Perak",
    "postcode": "31500",
    "state": "Perak",
    "area": "Lahat",
    "reservePrice": 470000,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "878 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1345",
    "title": "2 Storey Terrace House",
    "address": "No. 30, Pengkalan Tiara 14, Taman Pengkalan Tiara, 31650 Ipoh, Perak",
    "postcode": "31650",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 330000,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "765 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1346",
    "title": "2 Storey Shop Office",
    "address": "No. 122 & 122A, Jalan Klebang Indah 1, Medan Klebang Indah, 30010 Ipoh, Perak",
    "postcode": "30010",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 280000,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1347",
    "title": "3 Storey Terrace House",
    "address": "No. 43, Jalan Putra Berlian 13A, Kampar Putra, 31900 Kampar, Perak",
    "postcode": "31900",
    "state": "Perak",
    "area": "Kampar",
    "reservePrice": 315000,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "164 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1348",
    "title": "2 Storey Terrace House",
    "address": "Taman Desa Seraya Fasa IV, Off Lebuhraya Sultanah Bahiyah, 05400 Alor Setar, Kedah",
    "postcode": "05400",
    "state": "Kedah",
    "area": "Alor Setar",
    "reservePrice": 387000,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "561 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1349",
    "title": "2 Storey Detached House",
    "address": "No. 36, Lorong Limonia 7, Bertam Perdana 2, 13200 Kepala Batas, Penang",
    "postcode": "13200",
    "state": "Penang",
    "area": "Kepala Batas",
    "reservePrice": 1036800,
    "auctionDate": "5th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "684 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1350",
    "title": "1 Storey Semi Detached House",
    "address": "No. 6, Jalan Semarak 14, Taman Semarak, 34000 Taiping, Perak",
    "postcode": "34000",
    "state": "Perak",
    "area": "Taiping",
    "reservePrice": 131220,
    "auctionDate": "5th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "798 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1351",
    "title": "2 Storey Shop House",
    "address": "No. 50, Jalam PPMP 7, Pusat Perniagaan Manjung Point 1, 32040 Seri Manjung, Perak",
    "postcode": "32040",
    "state": "Perak",
    "area": "Seri Manjung",
    "reservePrice": 495000,
    "auctionDate": "5th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1352",
    "title": "1 Storey Terrace House",
    "address": "No. 9, Persiaran Bemban Raya 13, Taman Bemban Raya, 31000 Batu Gajah, Perak",
    "postcode": "31000",
    "state": "Perak",
    "area": "Batu Gajah",
    "reservePrice": 160000,
    "auctionDate": "5th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "367 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1353",
    "title": "Town House",
    "address": "Unit No. 87-3, Block 87, Level 3, Persiaran Residensi, Bandar Agacia, 31910 Kampar, Perak",
    "postcode": "31910",
    "state": "Perak",
    "area": "Kampar",
    "reservePrice": 100000,
    "auctionDate": "5th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "098 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1354",
    "title": "1 Storey Semi Detached House",
    "address": "No. 72, Jalan Bunian, Taman Mambang, 31900 Kampar, Perak",
    "postcode": "31900",
    "state": "Perak",
    "area": "Kampar",
    "reservePrice": 170100,
    "auctionDate": "5th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "487 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1355",
    "title": "Terrace House",
    "address": "Jalan Residen 8/12, Residen 8, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 200000,
    "auctionDate": "5th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "879 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1356",
    "title": "1 Storey Terrace House",
    "address": "No. 92, Jalan Koperasi 38, Taman Perpaduan Koperasi, 31400 Ipoh, Perak",
    "postcode": "31400",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 270000,
    "auctionDate": "5th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1357",
    "title": "1 Storey Terrace House",
    "address": "No. 15, Lebuh Bercham Selatan 1/1, Desa Impian, 31400 Ipoh, Perak",
    "postcode": "31400",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 120000,
    "auctionDate": "5th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "880 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1358",
    "title": "2 Storey Terrace House",
    "address": "No. 83, Jalan Lakeville 27, Bandar Universiti, 32610 Seri Iskandar, Perak",
    "postcode": "32610",
    "state": "Perak",
    "area": "Seri Iskandar",
    "reservePrice": 216000,
    "auctionDate": "5th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1359",
    "title": "1 Storey Semi Detached House",
    "address": "Jalan Aman 5, Taman Aman Perdana, 09800 Serdang, Kedah",
    "postcode": "09800",
    "state": "Kedah",
    "area": "Serdang",
    "reservePrice": 320760,
    "auctionDate": "5th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "125 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1360",
    "title": "1 Storey Terrace House",
    "address": "Jalan Universiti Bestari 1, Taman Universiti Bestari, 08100 Bedong, Kedah",
    "postcode": "08100",
    "state": "Kedah",
    "area": "Bedong",
    "reservePrice": 182250,
    "auctionDate": "5th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "240 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1361",
    "title": "2 Storey Terrace House",
    "address": "Lorong BLM 3/11, Bandar Laguna Merbok, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 351000,
    "auctionDate": "5th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1362",
    "title": "Apartment",
    "address": "Unit No. 35-03-03, Century Park, Persiaran Batu Uban, Mukim 13, 11700 Gelugor, Penang",
    "postcode": "11700",
    "state": "Penang",
    "area": "Gelugor",
    "reservePrice": 243000,
    "auctionDate": "6th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "710 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1363",
    "title": "Flat",
    "address": "Jalan Van Praagh, Desa Green, 11600 Jelutong, Penang",
    "postcode": "11600",
    "state": "Penang",
    "area": "Jelutong",
    "reservePrice": 279000,
    "auctionDate": "6th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "709 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1gwRtVS7ov0h0VHeGC8kaTcL9vnu5UBvD&sz=w800"
    ]
  },
  {
    "id": "1364",
    "title": "2 Storey Terrace House",
    "address": "No. 39, Lorong Sutera 4, Taman Sutera Seberang Jaya, 13700, Perai, Penang",
    "postcode": "13700",
    "state": "Penang",
    "area": "Perai",
    "reservePrice": 530000,
    "auctionDate": "6th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1365",
    "title": "Flat",
    "address": "Unit No. 1066-10-43, Green Garden, Jalan Paya Terubong, 11060 Paya Terubong, Penang",
    "postcode": "11060",
    "state": "Penang",
    "area": "Paya Terubong",
    "reservePrice": 160000,
    "auctionDate": "6th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "538 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1366",
    "title": "Apartment",
    "address": "Mak Mandin, 13400 Butterworth, Penang",
    "postcode": "13400",
    "state": "Penang",
    "area": "Butterworth",
    "reservePrice": 100000,
    "auctionDate": "6th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "765 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1367",
    "title": "Apartment",
    "address": "Block 9, Taman Mutiara Indah, Berapit, 14000 Bukit Mertajam, Penang",
    "postcode": "14000",
    "state": "Penang",
    "area": "Bukit Mertajam",
    "reservePrice": 89100,
    "auctionDate": "6th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "560 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1368",
    "title": "2 Storey Terrace House",
    "address": "Laluan Lapangan Perdana 6, Panorama Lapangan Perdana, 31650 Ipoh, Perak",
    "postcode": "31650",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 273600,
    "auctionDate": "6th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "044 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1369",
    "title": "2 Storey Terrace House",
    "address": "No. 12, Jalan Tawas Impiana 1, Anjung Tawas Impiana, 30010 Ipoh, Perak",
    "postcode": "30010",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 336000,
    "auctionDate": "6th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "658 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1370",
    "title": "Condominium",
    "address": "Jalan Meru Idaman 1, Taman Meru Idaman, 30020 Ipoh, Perak",
    "postcode": "30020",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 240000,
    "auctionDate": "6th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "818 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1371",
    "title": "1 Storey Terrace House",
    "address": "Jalan Residen 3/14, Residen 3, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 176000,
    "auctionDate": "6th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "080 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1372",
    "title": "Apartment",
    "address": "Unit No. C-20-3, Hala Meru Raya, Residensi PR1MA Meru, Bandar Meru Raya, 30020 Ipoh, Perak",
    "postcode": "30020",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 216000,
    "auctionDate": "6th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "958 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1373",
    "title": "1 Storey Terrace House",
    "address": "No. 28, Taman Seri Melur, 32400 Ayer Tawar, Perak",
    "postcode": "32400",
    "state": "Perak",
    "area": "Ayer Tawar",
    "reservePrice": 108000,
    "auctionDate": "6th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "281 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1374",
    "title": "1.5 Storey Semi Detached Factory",
    "address": "No. 10, Hala Menglembu Timur 10, Kawasan Perindustrian Ringan Menglembu Timur, 31450 Ipoh, Perak",
    "postcode": "31450",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 765000,
    "auctionDate": "6th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "100 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1375",
    "title": "1 Storey Terrace House",
    "address": "No. 35, Pengkalan Bandaraya 8, Desa Pengkalan Bandaraya, 31500 Lahat, Perak",
    "postcode": "31500",
    "state": "Perak",
    "area": "Lahat",
    "reservePrice": 210000,
    "auctionDate": "6th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1376",
    "title": "2 Storey Terrace House",
    "address": "No. 132, Jalan Sentosa 2/3, Taman Sentosa II, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 234000,
    "auctionDate": "6th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1377",
    "title": "Apartment",
    "address": "Blok A1, Pangsapuri Samudera 1, 32040 Seri Manjung, Perak",
    "postcode": "32040",
    "state": "Perak",
    "area": "Seri Manjung",
    "reservePrice": 190000,
    "auctionDate": "6th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "839 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1378",
    "title": "1 Storey Terrace House",
    "address": "PT No. 1458, Taman Orkid, Batu 12, 36020 Teluk Intan, Perak",
    "postcode": "36020",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 80000,
    "auctionDate": "6th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1379",
    "title": "2 Storey Terrace House",
    "address": "Jalan Yarra 7/6, Bandar Puteri Jaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 298890,
    "auctionDate": "6th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "860 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1380",
    "title": "2 Storey Terrace House",
    "address": "No. 965, Jalan Saujana 2/5, Bandar Sp Saujana, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 421200,
    "auctionDate": "6th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "526 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1381",
    "title": "1 Storey Terrace House",
    "address": "Jalan Kelisa Ria 2/12, Taman Kelisa Ria, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 216000,
    "auctionDate": "6th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "248 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1382",
    "title": "1 Storey Terrace House",
    "address": "No. 271, Lorong Sheikh Fadzir 3/3, Taman Sheikh Fadzir, 09310 Tawar, Kedah",
    "postcode": "09310",
    "state": "Kedah",
    "area": "Tawar",
    "reservePrice": 180000,
    "auctionDate": "6th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "048 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1383",
    "title": "1 Storey Semi Detached House",
    "address": "No. 395, Jalan Kenanga 7/5, Bandar Amanjaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 216513,
    "auctionDate": "6th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "196 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1384",
    "title": "3 Storey Terrace House",
    "address": "No. 45, Lorong Sungai Kelian 2, 11200 Tanjong Bungah, Penang",
    "postcode": "11200",
    "state": "Penang",
    "area": "Tanjong Bungah",
    "reservePrice": 874800,
    "auctionDate": "7th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1385",
    "title": "2 Storey Semi Detached Cluster House",
    "address": "No. 21, Lorong Desa Impian 14, Desa Impian, 14000 Bukit Mertajam, Penang",
    "postcode": "14000",
    "state": "Penang",
    "area": "Bukit Mertajam",
    "reservePrice": 880000,
    "auctionDate": "7th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "343 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1bf8mPfUOOaQj-YpIO7UBThM251IDc3UR&sz=w800"
    ]
  },
  {
    "id": "1386",
    "title": "Apartment",
    "address": "Unit No. 17-12B-5, Serina Bay, Hilir Sungai Pinang, 11600 Jelutong, Penang",
    "postcode": "11600",
    "state": "Penang",
    "area": "Jelutong",
    "reservePrice": 239148.45,
    "auctionDate": "7th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "915 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1mMm_HNVaFTiBB7GeBm_Ny76bJz8pLctT&sz=w800"
    ]
  },
  {
    "id": "1387",
    "title": "Apartment",
    "address": "Unit No. 5-15-02, Lebuh Relau 4, Mukim 13, 11600 Bayan Lepas, Penang",
    "postcode": "11600",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 252000,
    "auctionDate": "7th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "753 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1388",
    "title": "1 Storey Terrace House",
    "address": "No. 274, Laluan Kledang 1/7, Taman Kledang, 31100 Sungai Siput, Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput",
    "reservePrice": 106000,
    "auctionDate": "7th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1389",
    "title": "2 Storey Terrace House",
    "address": "No. 22, Pesara Lahat Baru 8, Bandar Lahat Baru, 31500 Lahat, Perak",
    "postcode": "31500",
    "state": "Perak",
    "area": "Lahat",
    "reservePrice": 136800,
    "auctionDate": "7th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "904 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1390",
    "title": "1 Storey Cluster House",
    "address": "Jalan Residen 7/4, Residen 7, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 202500,
    "auctionDate": "7th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "156 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1391",
    "title": "2 Storey Semi Detached House",
    "address": "No. 5, Jalan Pelangi Indah 1, Taman Pelangi Indah, Kampung Koh, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 470000,
    "auctionDate": "7th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "831 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1392",
    "title": "2 Storey Terrace House",
    "address": "No. 64, Puncak Jelapang Maju, Persiaran Puncak Jelapang 6, 30020 Ipoh, Perak",
    "postcode": "30020",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 396000,
    "auctionDate": "7th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "530 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1393",
    "title": "1 Storey Terrace House",
    "address": "No. 6, Hala Pegoh 2, Taman Pengkalan Jaya, 31650 Ipoh, Perak",
    "postcode": "31650",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 350000,
    "auctionDate": "7th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1394",
    "title": "2 Storey Terrace Shop Office",
    "address": "No. 9., Taman Anggerik, 35400 Tapah Road, Perak",
    "postcode": "35400",
    "state": "Perak",
    "area": "Tapah Road",
    "reservePrice": 600000,
    "auctionDate": "7th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "508 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1395",
    "title": "2 Storey Shop Office",
    "address": "No. 173-R, Lorong 14, Taman Banjar Jaya, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 280000,
    "auctionDate": "7th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1396",
    "title": "2 Storey Terrace House",
    "address": "Hala Pengkalan Barat 14, Taman Pengkalan 18, 31650 Ipoh, Perak",
    "postcode": "31650",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 410000,
    "auctionDate": "7th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "496 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1397",
    "title": "Terrace House",
    "address": "Lorong Lagenda 42, Seksyen 3, Bandar Lagenda Teluk Intan, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 290000,
    "auctionDate": "7th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "148 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1398",
    "title": "1 Storey Terrace House",
    "address": "Persiaran Putri 15, Taman Chandan Putri, 33000 Kuala Kangsar, Perak",
    "postcode": "33000",
    "state": "Perak",
    "area": "Kuala Kangsar",
    "reservePrice": 243000,
    "auctionDate": "7th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "661 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1399",
    "title": "1 Storey Terrace House",
    "address": "Jalan Baiduri 3/1, Taman Teluk Baiduri, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 230000,
    "auctionDate": "7th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1400",
    "title": "2 Storey Terrace House",
    "address": "Jalan Seksyen 4/2, Bandar Barat, 31900 Kampar, Perak",
    "postcode": "31900",
    "state": "Perak",
    "area": "Kampar",
    "reservePrice": 208000,
    "auctionDate": "8th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "076 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1401",
    "title": "2 Storey Terrace House",
    "address": "Lebuh Kledang Utara 7, Taman Arkid, 31450 Menglembu, Perak",
    "postcode": "31450",
    "state": "Perak",
    "area": "Menglembu",
    "reservePrice": 200000,
    "auctionDate": "8th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "044 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1402",
    "title": "Flat",
    "address": "Unit No. E-2-4, Rumah Pangsa Menglembu Impiana Adril, Menglembu, Taman Menglembu Impiana, 31450 Ipoh, Perak",
    "postcode": "31450",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 40500,
    "auctionDate": "8th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "689 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1403",
    "title": "Terrace House",
    "address": "Jalan 10/2, Taman Maju Jaya, 35500 Bidor, Perak",
    "postcode": "35500",
    "state": "Perak",
    "area": "Bidor",
    "reservePrice": 288000,
    "auctionDate": "8th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "816 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1404",
    "title": "2 Storey Terrace House",
    "address": "No. 241, Jalan Seri Bayu 2/7, Taman Seri Bayu, Sungai Lalang, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 288000,
    "auctionDate": "8th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1405",
    "title": "2 Storey Terrace House",
    "address": "No. 1501, Off Jalan Batas Paip, Taman Bersatu, 06600 Kuala Kedah, Kedah",
    "postcode": "06600",
    "state": "Kedah",
    "area": "Kuala Kedah",
    "reservePrice": 162000,
    "auctionDate": "8th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "980 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1406",
    "title": "1 Storey Terrace House",
    "address": "No. 273A, Jalan Seri Bayu 8, Taman Seri Bayu, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 153000,
    "auctionDate": "8th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "000 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1407",
    "title": "Flat",
    "address": "Unit No. 2-16-15, Pusat Bayan, Jalan Merbah, 11900, Bayan Lepas, Penang",
    "postcode": "11900",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 200000,
    "auctionDate": "12th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "517 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1408",
    "title": "Terrace House",
    "address": "No. 30, Lorong Pancur Mutiara 10, Taman Pancur Mutiara, 14300 Nibong Tebal, Penang",
    "postcode": "14300",
    "state": "Penang",
    "area": "Nibong Tebal",
    "reservePrice": 357210,
    "auctionDate": "12th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1409",
    "title": "Terrace House",
    "address": "Jalan Raintree 5, Villa Raintree II, 14120 Simpang Ampat, Penang",
    "postcode": "14120",
    "state": "Penang",
    "area": "Simpang Ampat",
    "reservePrice": 600000,
    "auctionDate": "12th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "323 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1410",
    "title": "1 Storey Terrace House",
    "address": "No. 15, Hala Taman Meru 1, Taman Meru 2B, 30020 Ipoh, Perak",
    "postcode": "30020",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 180000,
    "auctionDate": "12th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1411",
    "title": "2 Storey Terrace House",
    "address": "No. 190, Jalan Sri Asoka 14, Taman Sri Asoka, 35000 Tapah, Perak",
    "postcode": "35000",
    "state": "Perak",
    "area": "Tapah",
    "reservePrice": 150000,
    "auctionDate": "12th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "076 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1412",
    "title": "2 Storey Terrace House",
    "address": "No. 56, Persiaran Halaman Ampang 5, Taman Pelangi, 31350 Ipoh, Perak",
    "postcode": "31350",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 170000,
    "auctionDate": "12th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "957 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1413",
    "title": "2 Storey Terrace House",
    "address": "No. 41, Laluan Lapangan Siber 7, Bandar Cyber, 31350 Ipoh, Perak",
    "postcode": "31350",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 320000,
    "auctionDate": "12th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "540 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1414",
    "title": "1 Storey Detached House",
    "address": "Jalan Klebang Selatan 2/7, Taman Klebang Bayu, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 880000,
    "auctionDate": "12th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "526 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1415",
    "title": "1 Storey Terrace House",
    "address": "Jalan Lembah Merbok 1/3, Taman Lembah Merbok, 08400 Merbok, Kedah",
    "postcode": "08400",
    "state": "Kedah",
    "area": "Merbok",
    "reservePrice": 300000,
    "auctionDate": "12th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "935 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1416",
    "title": "Flat",
    "address": "Unit No. 4-G-15, Tingkat Seri Genting 1, 11000 Balik Pulau, Penang",
    "postcode": "11000",
    "state": "Penang",
    "area": "Balik Pulau",
    "reservePrice": 131220,
    "auctionDate": "13th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "495 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1ROIF0Ypkzr7niv8ajGfHPo3IKNURZ6Zo&sz=w800"
    ]
  },
  {
    "id": "1417",
    "title": "2 Storey Terrace House",
    "address": "No. 2, Lorong Endah 1, 11700 Glugor, Penang",
    "postcode": "11700",
    "state": "Penang",
    "area": "Glugor",
    "reservePrice": 1600000,
    "auctionDate": "13th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "532 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1418",
    "title": "Condominium",
    "address": "Persiaran Sungai Emas 1, Ferringhi Residence 2, 11100 Batu Ferringhi, Penang",
    "postcode": "11100",
    "state": "Penang",
    "area": "Batu Ferringhi",
    "reservePrice": 900000,
    "auctionDate": "13th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1419",
    "title": "2 Storey Terrace House",
    "address": "Jalan Bintang Maya 2/3, Bintang Maya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 275562,
    "auctionDate": "13th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "217 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1420",
    "title": "2 Storey Semi Detached House",
    "address": "No. 154, Jalan Presint 9/1, Darulaman Perdana, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 446148,
    "auctionDate": "13th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "155 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1421",
    "title": "Condominium",
    "address": "Unit No. 33-9-1, Persiaran Sungai Emas, Ferringhi Delima Condominium, 11100 Batu Ferringhi, Penang",
    "postcode": "11100",
    "state": "Penang",
    "area": "Batu Ferringhi",
    "reservePrice": 380000,
    "auctionDate": "14th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "721 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1422",
    "title": "1 Storey Semi Detached Cluster House",
    "address": "Jalan Residen 7/9, Residen 7, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 165600,
    "auctionDate": "14th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "916 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1423",
    "title": "2 Storey Semi Detached House",
    "address": "No. 256, Persiaran Venice Intan 5/9, Desa Manjung Raya, 32200 Lumut, Perak",
    "postcode": "32200",
    "state": "Perak",
    "area": "Lumut",
    "reservePrice": 458000,
    "auctionDate": "14th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "626 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1424",
    "title": "2 Storey Terrace House",
    "address": "No. 33A, Jalan Bunga Raya 2/1, Taman Bunga Raya 1, Kampung Koh, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 342000,
    "auctionDate": "14th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "561 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1425",
    "title": "1 Storey Terrace House",
    "address": "No. 55, Jalan Lengkuas 7, Taman Lengkuas, 06650 Simpang Empat, Kedah",
    "postcode": "06650",
    "state": "Kedah",
    "area": "Simpang Empat",
    "reservePrice": 300000,
    "auctionDate": "14th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "900 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1426",
    "title": "Terrace House",
    "address": "Taman Mutiara, Lebuhraya Sultanah Bahiyah, Alor Setar, Kedah",
    "postcode": "",
    "state": "Kedah",
    "area": "Alor Setar",
    "reservePrice": 421200,
    "auctionDate": "14th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "593 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1427",
    "title": "1 Storey Terrace House",
    "address": "Jalan Diawan 6, Taman Permai, 31950 Mambang Diawan, Perak",
    "postcode": "31950",
    "state": "Perak",
    "area": "Mambang Diawan",
    "reservePrice": 117000,
    "auctionDate": "15th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1428",
    "title": "1 Storey Detached House",
    "address": "Lorong 4, Taman Sungai Lidin, 34000 Taiping, Perak",
    "postcode": "34000",
    "state": "Perak",
    "area": "Taiping",
    "reservePrice": 477000,
    "auctionDate": "15th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "450 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1429",
    "title": "2 Storey Terrace House",
    "address": "Jalan Tronoh Awana 3, Taman Tronoh Awana, 31750 Tronoh, Perak",
    "postcode": "31750",
    "state": "Perak",
    "area": "Tronoh",
    "reservePrice": 315000,
    "auctionDate": "15th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "627 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1430",
    "title": "Terrace House",
    "address": "Lorong Lagenda 79, Seksyen 3, Bandar Lagenda Teluk Intan, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 230000,
    "auctionDate": "15th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1431",
    "title": "1 Storey Terrace House",
    "address": "No. 55, Jalan 7, Taman Sungai Mas, 34000 Taiping, Perak",
    "postcode": "34000",
    "state": "Perak",
    "area": "Taiping",
    "reservePrice": 140000,
    "auctionDate": "15th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "098 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1432",
    "title": "2 Storey Terrace House",
    "address": "No. 66, Lorong BLM 2/3, Bandar Laguna Merbok, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 330000,
    "auctionDate": "15th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "720 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1433",
    "title": "1 Storey Terrace House",
    "address": "No. 1774, Lorong Angsana 46, Taman Keladi, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 180000,
    "auctionDate": "15th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "098 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1434",
    "title": "2 Storey Terrace House",
    "address": "Lorong 9/SS6, Bandar Tasek Mutiara, 14120 Simpang Ampat, Penang",
    "postcode": "14120",
    "state": "Penang",
    "area": "Simpang Ampat",
    "reservePrice": 441000,
    "auctionDate": "19th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1435",
    "title": "Flat",
    "address": "Lebuh Relau 2, Taman Desa Relau, 19000 Bayan Lepas, Penang",
    "postcode": "19000",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 300000,
    "auctionDate": "19th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "700 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1436",
    "title": "1 Storey Terrace House",
    "address": "No. 827, Lorong Kurau 10, Taman Samudera, 32040 Seri Manjung, Perak",
    "postcode": "32040",
    "state": "Perak",
    "area": "Seri Manjung",
    "reservePrice": 179000,
    "auctionDate": "19th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1437",
    "title": "1 Storey Terrace House",
    "address": "No. 355, Taman Tun Sambanthan, 31100 Sungai Siput (U), Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput (U)",
    "reservePrice": 162000,
    "auctionDate": "19th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "060 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1438",
    "title": "Residential Land",
    "address": "Kampung Tersusun Kamuning, 31100 Sungai Siput, Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput",
    "reservePrice": 35000,
    "auctionDate": "20th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1439",
    "title": "2 Storey Detached House",
    "address": "No. 27, Persiaran Indah Lapan, RPT Desa Pengkalan Indah, 31650 Ipoh, Perak",
    "postcode": "31650",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 500000,
    "auctionDate": "22nd Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "595 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1440",
    "title": "Terrace House",
    "address": "Jalan Residen 4/6, Residen 4, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 180000,
    "auctionDate": "22nd Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "879 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1441",
    "title": "2 Storey Terrace House",
    "address": "No. 60, Laluan Klebang Ria 2, Taman Klebang Ria, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 330000,
    "auctionDate": "26th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "099 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1442",
    "title": "Town House",
    "address": "Lengkok Bertam Permata 1, Taman Bertam Permata, 13200 Kepala Batas, Penang",
    "postcode": "13200",
    "state": "Penang",
    "area": "Kepala Batas",
    "reservePrice": 450000,
    "auctionDate": "28th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "164 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1443",
    "title": "1 Storey Terrace House",
    "address": "No. 53, Lorong Budiman 2, Taman Desa Budiman, 08100 Sungai Lalang, Kedah",
    "postcode": "08100",
    "state": "Kedah",
    "area": "Sungai Lalang",
    "reservePrice": 300000,
    "auctionDate": "29th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "099 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1444",
    "title": "2 Storey Semi Detached House",
    "address": "No. 61, Lorong Eugenia 4, Bukit Banyan, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 750000,
    "auctionDate": "29th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "595 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1445",
    "title": "1 Storey Terrace House",
    "address": "No. 22, Tingkat Impian Indah 2, Taman Impian Indah, 14000 Bukit Mertajam, Penang",
    "postcode": "14000",
    "state": "Penang",
    "area": "Bukit Mertajam",
    "reservePrice": 333000,
    "auctionDate": "12th Nov 2026 (Thu)",
    "landArea": "—",
    "builtUp": "194 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1446",
    "title": "Semi Detached House",
    "address": "Persiaran Chandan Indah 2, Taman Chandan Indah, 33000, Perak",
    "postcode": "33000",
    "state": "Perak",
    "area": "Perak",
    "reservePrice": 480000,
    "auctionDate": "12th Nov 2026 (Thu)",
    "landArea": "—",
    "builtUp": "451 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1447",
    "title": "1 Storey Terrace House",
    "address": "Jalan Desa Jaya 6, Taman Desa Jaya, 34600 Kamunting, Perak",
    "postcode": "34600",
    "state": "Perak",
    "area": "Kamunting",
    "reservePrice": 285000,
    "auctionDate": "13th Nov 2026 (Fri)",
    "landArea": "—",
    "builtUp": "475 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1448",
    "title": "2 Storey Terrace House",
    "address": "No. 35, Medan Lahat 4, Medan Lahat Baru, 31500 Lahat, Perak",
    "postcode": "31500",
    "state": "Perak",
    "area": "Lahat",
    "reservePrice": 250000,
    "auctionDate": "16th Nov 2026 (Mon)",
    "landArea": "—",
    "builtUp": "496 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1449",
    "title": "1 Storey Semi Detached House",
    "address": "Taman Sultan Abdul Halim, Off Jalan Tanjung Bendahara, 05300 Alor Setar, Kedah",
    "postcode": "05300",
    "state": "Kedah",
    "area": "Alor Setar",
    "reservePrice": 450000,
    "auctionDate": "18th Nov 2026 (Wed)",
    "landArea": "—",
    "builtUp": "790 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1450",
    "title": "2 Storey Terrace House",
    "address": "No. 433, Taman Nuri, Jalan Datuk Kumbar, 05300 Alor Setar, Kedah",
    "postcode": "05300",
    "state": "Kedah",
    "area": "Alor Setar",
    "reservePrice": 180000,
    "auctionDate": "18th Nov 2026 (Wed)",
    "landArea": "—",
    "builtUp": "288 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1451",
    "title": "Flat",
    "address": "Unit No. G-4, Rumah Pangsa Taman Flora, Kuala Sungai, 06250 Alor Setar, Kedah",
    "postcode": "06250",
    "state": "Kedah",
    "area": "Alor Setar",
    "reservePrice": 115000,
    "auctionDate": "18th Nov 2026 (Wed)",
    "landArea": "—",
    "builtUp": "753 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1452",
    "title": "2 Storey Semi Detached House",
    "address": "No. 6, Lorong Kota Permai 23, Taman Saujana Permai, 14000 Bukit Mertajam, Penang",
    "postcode": "14000",
    "state": "Penang",
    "area": "Bukit Mertajam",
    "reservePrice": 820000,
    "auctionDate": "19th Nov 2026 (Thu)",
    "landArea": "—",
    "builtUp": "256 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1453",
    "title": "2 Storey Terrace House",
    "address": "No. 61, Laluan Meru Perdana 16, Taman Meru Perdana 2, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 420000,
    "auctionDate": "23rd Nov 2026 (Mon)",
    "landArea": "—",
    "builtUp": "102 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1454",
    "title": "1 Storey Detached House",
    "address": "No. 77, Jalan Bukit Kulim 1, Bukit Kulim, 09000 Kulim, Kedah",
    "postcode": "09000",
    "state": "Kedah",
    "area": "Kulim",
    "reservePrice": 550000,
    "auctionDate": "25th Nov 2026 (Wed)",
    "landArea": "—",
    "builtUp": "585 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1455",
    "title": "1 Storey Terrace House",
    "address": "Lorong Bunga Raya 4, Taman Bunga Raya, Padang Serai, Kedah",
    "postcode": "",
    "state": "Kedah",
    "area": "Padang Serai",
    "reservePrice": 150000,
    "auctionDate": "25th Nov 2026 (Wed)",
    "landArea": "—",
    "builtUp": "100 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1456",
    "title": "1 Storey Detached House",
    "address": "No. 271, Hala Jati Meru 12, RPT Jelapang Jaya, 30020 Ipoh, Perak",
    "postcode": "30020",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 280000,
    "auctionDate": "26th Nov 2026 (Thu)",
    "landArea": "—",
    "builtUp": "307 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1457",
    "title": "2 Storey Terrace House",
    "address": "No. 15, Persiaran Desa Rishah 11A, Taman Rishah Permai, 30100 Ipoh, Perak",
    "postcode": "30100",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 400000,
    "auctionDate": "26th Nov 2026 (Thu)",
    "landArea": "—",
    "builtUp": "420 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1458",
    "title": "2 Storey Terrace House",
    "address": "No. 40, Persiaran Botanika 3, Taman Botanika Residen, 32000, Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 500000,
    "auctionDate": "2nd Dec 2026 (Wed)",
    "landArea": "—",
    "builtUp": "562 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1459",
    "title": "Detached House",
    "address": "Tempat Kampong Lalang, Mukim Siong, Daerah Baling, Kedah",
    "postcode": "",
    "state": "Kedah",
    "area": "Daerah Baling",
    "reservePrice": 180000,
    "auctionDate": "9th Dec 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1460",
    "title": "2 Storey Semi Detached House",
    "address": "No. 12, Lorong Santuari 4, Taman Santuari, 14000 Bukit Mertajam, Penang",
    "postcode": "14000",
    "state": "Penang",
    "area": "Bukit Mertajam",
    "reservePrice": 850000,
    "auctionDate": "23rd Dec 2026 (Wed)",
    "landArea": "—",
    "builtUp": "751 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1461",
    "title": "1 Storey Semi Detached House",
    "address": "Jalan Raya Murni 2, Taman Raya Murni, 09400 Padang Serai, Kedah",
    "postcode": "09400",
    "state": "Kedah",
    "area": "Padang Serai",
    "reservePrice": 380000,
    "auctionDate": "30th Dec 2026 (Wed)",
    "landArea": "—",
    "builtUp": "370 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1462",
    "title": "Detached House",
    "address": "Lorong Kedidi 1/1, Taman Kedidi, 09000 Kulim, Kedah",
    "postcode": "09000",
    "state": "Kedah",
    "area": "Kulim",
    "reservePrice": 400000,
    "auctionDate": "30th Dec 2026 (Wed)",
    "landArea": "—",
    "builtUp": "692 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1463",
    "title": "Service Apartment",
    "address": "Unit No. #13-03, Blok B, Residensi Seri Mega, Jalan Kempas 14, Taman Megah Ria, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 283500,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "915 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1464",
    "title": "1 Storey Terrace House",
    "address": "No. 4, Jalan Saujana Bistari 9, Taman Saujana, 86000 Kluang, Johor",
    "postcode": "86000",
    "state": "Johor",
    "area": "Kluang",
    "reservePrice": 270000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "540 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1465",
    "title": "1 Storey Terrace House",
    "address": "Jalan Sutera 2/9, Taman Puteri, 86000 Kluang, Johor",
    "postcode": "86000",
    "state": "Johor",
    "area": "Kluang",
    "reservePrice": 220000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "410 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1466",
    "title": "1 Storey Terrace House",
    "address": "Jalan Hang Lekiu 5, Taman Skudai Baru, 81300 Skudai, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Skudai",
    "reservePrice": 510000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1467",
    "title": "1 Storey Terrace House",
    "address": "No. 3, Jalan Kejayaan 55, Taman Universiti, 81300 Skudai, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Skudai",
    "reservePrice": 420000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1468",
    "title": "2 Storey Terrace House",
    "address": "Jalan Bayan 23, Bandar Baru Kota Puteri, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 280000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "896 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1469",
    "title": "Flat",
    "address": "Unit No. B-05-05, Jalan Impian Emas 25, Taman Impian Ehsan, 81300 Skudai, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Skudai",
    "reservePrice": 160000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "657 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1470",
    "title": "Apartment",
    "address": "Unit No. K-4-02, Block K, Pangsapuri Lily & Jasmine, Jalan Persisiran Titiwangsa Utama, Taman Tampoi Indah, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 204120,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "001 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1471",
    "title": "2 Storey Terrace House",
    "address": "Jalan Laman Citra 17, Laman Citra, 81500 Pekan Nanas, Johor",
    "postcode": "81500",
    "state": "Johor",
    "area": "Pekan Nanas",
    "reservePrice": 670000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "705 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1472",
    "title": "2 Storey Terrace House",
    "address": "No. 16, Jalan Intan 5, Taman Cahaya Masai, 81700 Pasir Gudang, Johor",
    "postcode": "81700",
    "state": "Johor",
    "area": "Pasir Gudang",
    "reservePrice": 300000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "042 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1473",
    "title": "2 Storey Terrace House",
    "address": "No. 18, Jalan SS 5/3, Taman Sri Saujana, 81900 Kota Tinggi, Johor",
    "postcode": "81900",
    "state": "Johor",
    "area": "Kota Tinggi",
    "reservePrice": 500000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "564 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1474",
    "title": "2 Storey Terrace House",
    "address": "No. 21, Jalan Prima 5/2, Taman Nusantara Prima, 79200 Iskandar Puteri, Johor",
    "postcode": "79200",
    "state": "Johor",
    "area": "Iskandar Puteri",
    "reservePrice": 510000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "173 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1475",
    "title": "Apartment",
    "address": "Unit No. C-31-03, Blok C, Pangsapuri Meridian Medini, Jalan Legoland, Bandar Medini Iskandar, 79250 Iskandar Puteri, Johor",
    "postcode": "79250",
    "state": "Johor",
    "area": "Iskandar Puteri",
    "reservePrice": 468000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "065 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1476",
    "title": "2 Storey Terrace House",
    "address": "No. 17, Jalan Camar 1, Taman Scientex, 81700 Pasir Gudang, Johor",
    "postcode": "81700",
    "state": "Johor",
    "area": "Pasir Gudang",
    "reservePrice": 400000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "120 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1477",
    "title": "Service Apartment",
    "address": "Unit No. #11-01, Block C, KIP Villa Indah, Jalan Titiwangsa 1, Taman Tampoi Indah, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 278000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "925 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1478",
    "title": "1 Storey Terrace House",
    "address": "No. 7, Jalan Putera Indah 10/17, Taman Putera Indah, 83010, Tongkang Pechah, Johor",
    "postcode": "83010",
    "state": "Johor",
    "area": "Tongkang Pechah",
    "reservePrice": 220000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1479",
    "title": "2 Storey Terrace House",
    "address": "No. 34, Jalan Pulai 5, Taman Desaru Utama, 81930 Bandar Penawar, Johor",
    "postcode": "81930",
    "state": "Johor",
    "area": "Bandar Penawar",
    "reservePrice": 405000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1480",
    "title": "1 Storey Terrace House",
    "address": "No. 29, Jalan Siantan, Taman Sri Siantan, 84000 Muar, Johor",
    "postcode": "84000",
    "state": "Johor",
    "area": "Muar",
    "reservePrice": 251505,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1481",
    "title": "2 Storey Terrace House",
    "address": "No. 29, Jalan Permas 7/11, Bandar Baru Permas Jaya, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 250000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "732 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1482",
    "title": "2 Storey Terrace Shop Office",
    "address": "No. 20, Jalan Yayasan 1/5, Taman Yayasan, Buoloh Kasap, 85010 Segamat, Johor",
    "postcode": "85010",
    "state": "Johor",
    "area": "Segamat",
    "reservePrice": 360000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1483",
    "title": "Apartment",
    "address": "Block A3, Pangsapuri Seri Mengkuang 2, Desa Paya Mengkuang, 81560 Gelang Patah, Johor",
    "postcode": "81560",
    "state": "Johor",
    "area": "Gelang Patah",
    "reservePrice": 320000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "054 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1484",
    "title": "1 Storey Terrace House",
    "address": "No. 32, Jalan Sepat, Taman Tasek Kampung Jawa, 85000 Segamat, Johor",
    "postcode": "85000",
    "state": "Johor",
    "area": "Segamat",
    "reservePrice": 117000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "540 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1485",
    "title": "Condominium",
    "address": "Unit No. 04-04, Blok D, Pangsapuri Seri Mutiara, Bandar Seri Alam, 81750, Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 410000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "410 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1486",
    "title": "1 Storey Terrace House",
    "address": "No. 509, Jalan Seri Impian 1/12, Taman Seri Impian, 86000 Kluang, Johor",
    "postcode": "86000",
    "state": "Johor",
    "area": "Kluang",
    "reservePrice": 234000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1487",
    "title": "2 Storey Terrace House",
    "address": "No. 1, Jalan Bukit Kempas 2/10, Taman Bukit Kempas, 81200, Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 720000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "348 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1488",
    "title": "2 Storey Terrace House",
    "address": "No. 19, Jalan Zamrud, Taman Seri Menanti (Taman Seri Mernanti), 86000 Kluang, Johor",
    "postcode": "86000",
    "state": "Johor",
    "area": "Kluang",
    "reservePrice": 183051.9,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "244 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1489",
    "title": "2 Storey Semi Detached House",
    "address": "No. 27, Jalan Sutera Indah 7, Taman Sutera Indah, 86000 Kluang, Johor",
    "postcode": "86000",
    "state": "Johor",
    "area": "Kluang",
    "reservePrice": 472392,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "490 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1490",
    "title": "1 Storey Terrace House",
    "address": "No. 35, Jalan Cengal 2, Taman Desaru Utama, 81930 Bandar Penawar, Johor",
    "postcode": "81930",
    "state": "Johor",
    "area": "Bandar Penawar",
    "reservePrice": 300000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1491",
    "title": "1 Storey Terrace House",
    "address": "No. 21, Jalan Permai, Taman Bukit Mor Permai, 84150 Muar, Johor",
    "postcode": "84150",
    "state": "Johor",
    "area": "Muar",
    "reservePrice": 225000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "529 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1492",
    "title": "2 Storey Terrace House",
    "address": "No. 69, Jalan Kencana 1B/6, Taman Pura Kencana, 83300 Sri Gading, Johor",
    "postcode": "83300",
    "state": "Johor",
    "area": "Sri Gading",
    "reservePrice": 440000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "200 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1493",
    "title": "Flat",
    "address": "Unit No. C4-02, Villa Hijauan, Jalan Silat Harimau 34, Bandar Selesa Jaya, 81300 Skudai, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Skudai",
    "reservePrice": 225990,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "173 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1494",
    "title": "Apartment",
    "address": "Unit No. 15-02, Blok B, Pangsapuri Seri Mutiara, Jalan Persiaran Seri Alam, Bandar Seri Alam, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 275562,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "324 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1495",
    "title": "2 Storey Terrace House",
    "address": "Jalan Laman Citra 16, Laman Citra, 81500 Pekan Nenas, Johor",
    "postcode": "81500",
    "state": "Johor",
    "area": "Pekan Nenas",
    "reservePrice": 740000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "074 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1496",
    "title": "2 Storey Terrace House",
    "address": "No. 26, Jalan Nusa Perintis 9/4, Taman Nusa Perintis 2, 79200 Iskandar Puteri, Johor",
    "postcode": "79200",
    "state": "Johor",
    "area": "Iskandar Puteri",
    "reservePrice": 500000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "085 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1497",
    "title": "2 Storey Terrace House",
    "address": "No. 41, Jalan Hang Tuah 4/4, Taman Muhibbah, 86000 Kluang, Johor",
    "postcode": "86000",
    "state": "Johor",
    "area": "Kluang",
    "reservePrice": 261000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "174 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1498",
    "title": "2 Storey Detached House",
    "address": "No. 19, Jalan Tanjong Puteri 2, Tanjong Puteri Resort, 81700 Pasir Gudang, Johor",
    "postcode": "81700",
    "state": "Johor",
    "area": "Pasir Gudang",
    "reservePrice": 1000000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "246 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1499",
    "title": "3 Storey Cluster House",
    "address": "No. 37, Jalan Bandar Cemerlang 1/3, Bandar Cemerlang, 81800 Ulu Tiram, Johor",
    "postcode": "81800",
    "state": "Johor",
    "area": "Ulu Tiram",
    "reservePrice": 900000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "723 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1500",
    "title": "1 Storey Terrace House",
    "address": "No. 1, Jalan Baiduri 8, Taman Intan, 81800 Ulu Tiram, Johor",
    "postcode": "81800",
    "state": "Johor",
    "area": "Ulu Tiram",
    "reservePrice": 461700,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "810 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1501",
    "title": "2 Storey Terrace House",
    "address": "No. 17, Jalan Bestari 4/2, Taman Bestari Indah 1, 81800, Ulu Tiram, Johor",
    "postcode": "81800",
    "state": "Johor",
    "area": "Ulu Tiram",
    "reservePrice": 680000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1zZNzfcjpjCNCvMt74zjUqofGPT658VVU&sz=w800"
    ]
  },
  {
    "id": "1502",
    "title": "1 Storey Terrace House",
    "address": "No. 22, Jalan Nangka, Taman Kota Jaya, 81900 Kota Tinggi, Johor",
    "postcode": "81900",
    "state": "Johor",
    "area": "Kota Tinggi",
    "reservePrice": 310000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "540 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1503",
    "title": "2 Storey Terrace House",
    "address": "No. 3793, Jalan Sri Putri 9/3, Taman Putri Kulai, 81000 Kulai, Johor",
    "postcode": "81000",
    "state": "Johor",
    "area": "Kulai",
    "reservePrice": 480000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "028 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1504",
    "title": "2 Storey Terrace House",
    "address": "No. 1, Jalan Sri Makmur 5, Taman Sri Makmur, Kampung Tengah, 85000 Segamat, Johor",
    "postcode": "85000",
    "state": "Johor",
    "area": "Segamat",
    "reservePrice": 110000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "896 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1505",
    "title": "1 Storey Terrace House",
    "address": "No. 52, Jalan Pulasan, Taman Pantai, 83000 Batu Pahat, Johor",
    "postcode": "83000",
    "state": "Johor",
    "area": "Batu Pahat",
    "reservePrice": 610000,
    "auctionDate": "3rd Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "482 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1506",
    "title": "1 Storey Terrace House",
    "address": "No. 11, Jalan Keruing Gombang, Taman Kota, 83700 Yong Peng, Johor",
    "postcode": "83700",
    "state": "Johor",
    "area": "Yong Peng",
    "reservePrice": 120000,
    "auctionDate": "3rd Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "200 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1507",
    "title": "1 Storey Terrace House",
    "address": "No. 18, Jalan Hang Tuah 6/2, Taman Muhibbah, 86000 Kluang, Johor",
    "postcode": "86000",
    "state": "Johor",
    "area": "Kluang",
    "reservePrice": 225000,
    "auctionDate": "3rd Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "540 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1508",
    "title": "2 Storey Terrace House",
    "address": "No. 21, Jalan Sri Wangsa 13, Taman Sri Wangsa, 83000 Batu Pahat, Johor",
    "postcode": "83000",
    "state": "Johor",
    "area": "Batu Pahat",
    "reservePrice": 460000,
    "auctionDate": "3rd Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "657 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1509",
    "title": "Service Apartment",
    "address": "Unit No. C-14-01, Blok C, Nusa Perdana Service Apartment, Jalan Persiaran Nusa Perdana, Taman Nusa Perintis, 81550 Gelang Patah, Johor",
    "postcode": "81550",
    "state": "Johor",
    "area": "Gelang Patah",
    "reservePrice": 288000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "990 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1510",
    "title": "2 Storey Terrace House",
    "address": "No. 21, Jalan Waja 3, Taman Waja, 86400 Parit Raja, Batu Pahat, Johor",
    "postcode": "86400",
    "state": "Johor",
    "area": "Batu Pahat",
    "reservePrice": 299700,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "568 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1511",
    "title": "2 Storey Terrace House",
    "address": "No. 165, Jalan Sri Jaya 17, Taman Sri Jaya, 86000 Kluang, Johor",
    "postcode": "86000",
    "state": "Johor",
    "area": "Kluang",
    "reservePrice": 180000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "230 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1512",
    "title": "Studio Service Apartment",
    "address": "Unit No. 14-07, Blok B, Pangsapuri Kempas Indah, Jalan Kempas Indah, Taman Kempas Indah, 81300 Johor Bahru, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 180000,
    "auctionDate": "11th Sep 2026 (Fri)",
    "landArea": "—",
    "builtUp": "517 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1513",
    "title": "2 Storey Terrace House",
    "address": "No. 11, Jalan Ekoflora 3/7, Taman Ekoflora, 81100 Johor Bahru, Johor",
    "postcode": "81100",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 840000,
    "auctionDate": "11th Sep 2026 (Fri)",
    "landArea": "—",
    "builtUp": "800 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1514",
    "title": "3 Storey Cluster House",
    "address": "Jalan Keindahan 30, Taman Skudai Indah, 81300 Skudai, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Skudai",
    "reservePrice": 1300000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "348 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1515",
    "title": "2 Storey Terrace House",
    "address": "No. 136, Jalan Setia 1/3, Taman Setia Indah, 81100 Johor Bahru, Johor",
    "postcode": "81100",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 550000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "173 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1516",
    "title": "Service Apartment",
    "address": "Unit No. #17-03A, Block 11B, Royal Strand, Persiaran Danga Perdana, Country Garden Danga Bay, 80200 Johor Bahru, Johor",
    "postcode": "80200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 660000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "378 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1517",
    "title": "2 Storey Terrace House",
    "address": "No. 67, Jalan Kemboja 19, Bandar Bestari Perdana, 81700 Pasir Gudang, Johor",
    "postcode": "81700",
    "state": "Johor",
    "area": "Pasir Gudang",
    "reservePrice": 470000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "170 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1518",
    "title": "Service Apartment",
    "address": "Unit No. #24-08, Block B, Pangsapuri Residensi Pandan II, Jalan Pandan Ria 7, Pusat Perdagangan Pandan, 81100 Johor Bahru, Johor",
    "postcode": "81100",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 349000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "410 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1519",
    "title": "2 Storey Terrace House",
    "address": "No. 28, Jalan Laman Citra 16, Laman Citra, 81500 Pekan Nanas, Johor",
    "postcode": "81500",
    "state": "Johor",
    "area": "Pekan Nanas",
    "reservePrice": 702000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "178 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1520",
    "title": "Service Apartment",
    "address": "Unit No. B-15-07, Blok B, Apartment Dwi Danga (also known as Twin Danga Residence), Jalan Tengah, Kampung Sungai Danga, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 360000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1521",
    "title": "1 Storey Terrace House",
    "address": "No. 26, Jalan Pulai Indah 3/15, Taman Pulai Indah 2, Kangkar Pulai, 81110 Johor Bahru, Johor",
    "postcode": "81110",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 460000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "799 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1522",
    "title": "Service Apartment",
    "address": "Unit No. 13-10, Blok A, Jalan Jentayu, Pangsapuri Jentayu, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 351000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "969 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1523",
    "title": "Condominium",
    "address": "Blok A, Pangsapuri Seri Mutiara, Bandar Seri Alam, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 423000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "668 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1524",
    "title": "2 Storey Terrace House",
    "address": "No. 17, Jalan Pulasan 12, Taman Kota Masai, 81700 Pasir Gudang, Johor",
    "postcode": "81700",
    "state": "Johor",
    "area": "Pasir Gudang",
    "reservePrice": 288000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "775 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1525",
    "title": "2 Storey Terrace House",
    "address": "No. 147, Jalan Kampung Baru, Taman Sri Tengah, 86000 Kluang, Johor",
    "postcode": "86000",
    "state": "Johor",
    "area": "Kluang",
    "reservePrice": 390000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "975 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1526",
    "title": "2 Storey Terrace House",
    "address": "No. 36, Jalan EJ 2/5, Taman Ehsan Jaya, 81100 Johor Bahru, Johor",
    "postcode": "81100",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 600000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "463 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1527",
    "title": "2 Storey Terrace House",
    "address": "No. 2, Jalan Dukong 1, Taman Kota Masai, 81700 Pasir Gudang, Johor",
    "postcode": "81700",
    "state": "Johor",
    "area": "Pasir Gudang",
    "reservePrice": 500000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "819 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1528",
    "title": "1 Storey Terrace House",
    "address": "No. 39, Jalan Geharu 6, Taman Rinting, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 470000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "625 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1529",
    "title": "Condominium",
    "address": "Block C, Pangsapuri Seri Mutiara, Jalan Persiaran Seri Alam, Bandar Seri Alam, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 262440,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "324 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1530",
    "title": "Apartment",
    "address": "Blok B, Pangsapuri Seri Mutiara, Bandar Seri Alam, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 267300,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "227 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1531",
    "title": "Apartment",
    "address": "Blok A, Pangsapuri Sri Kenari, Jalan Persisiran Titiwangsa Utama, Taman Tampoi Indah, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 252000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "926 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1532",
    "title": "Terrace House",
    "address": "Jalan 5, Taman Sri Kluang, 86000 Kluang, Johor",
    "postcode": "86000",
    "state": "Johor",
    "area": "Kluang",
    "reservePrice": 265000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1533",
    "title": "Terrace House",
    "address": "Jalan Permas 15/6, Bandar Baru Permas Jaya, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 650000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1534",
    "title": "2 Storey Terrace House",
    "address": "No. 12, Jalan Indah 29/4, Taman Bukit Indah 2, 79100 Iskandar Puteri, Johor",
    "postcode": "79100",
    "state": "Johor",
    "area": "Iskandar Puteri",
    "reservePrice": 750000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1535",
    "title": "1 Storey Terrace House",
    "address": "Jalan Kejayaan 63, Taman Universiti, 81300 Skudai, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Skudai",
    "reservePrice": 450000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1536",
    "title": "1 Storey Terrace House",
    "address": "No. 43, Jalan 6, Taman Bersatu, 86000 Kluang, Johor",
    "postcode": "86000",
    "state": "Johor",
    "area": "Kluang",
    "reservePrice": 280000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "062 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1537",
    "title": "Apartment",
    "address": "Unit No. B-04-09, Skudai Villa Apartment, Jalan Aman, Taman Skudai Baru, 81300 Skudai, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Skudai",
    "reservePrice": 267300,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "109 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1KrGGWqxr-m1VDnY7d_MIKoZYUvabJWYY&sz=w800"
    ]
  },
  {
    "id": "1538",
    "title": "2 Storey Terrace House",
    "address": "No. 45, Jalan Alam Sitrin 4, Bandar Seri Alam, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 580000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "544 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1539",
    "title": "2 Storey Terrace House",
    "address": "No. 384, Jalan Mutiara Hijau 12, Taman Mutiara Hijau, 81000 Kulai, Johor",
    "postcode": "81000",
    "state": "Johor",
    "area": "Kulai",
    "reservePrice": 600000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "650 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1540",
    "title": "Flat",
    "address": "Unit No. #01-05, Block D, Jalan Pangsa Laman Tasik, Jalan Harmoni Utama, Taman Redang, 81100 Johor Bahru, Johor",
    "postcode": "81100",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 165000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "678 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1541",
    "title": "Apartment",
    "address": "Unit No. #02-16, Block A, Bayu Puteri 3 Apartment, Jalan Bayu Puteri 2, Taman Bayu Puteri, 80150 Johor Bahru, Johor",
    "postcode": "80150",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 340000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "915 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1542",
    "title": "2 Storey Terrace House",
    "address": "No. 877, Jalan Senai Utama 4/3, Taman Senai Utama, 81400, Senai, Johor",
    "postcode": "81400",
    "state": "Johor",
    "area": "Senai",
    "reservePrice": 640000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "160 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1543",
    "title": "2 Storey Terrace House",
    "address": "No. 28, Jalan Bakti 49, Taman Mutiara Rini, 81300 Skudai, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Skudai",
    "reservePrice": 650000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "540 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1544",
    "title": "2 Storey Cluster House",
    "address": "No. 9, Jalan Austin Heights 1/29, Taman Mount Austin, 81100 Johor Bahru, Johor",
    "postcode": "81100",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 1000000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "262 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1545",
    "title": "1 Storey Semi Detached House",
    "address": "No. 11, Jalan Seri Temenggong 16, Taman Sri Temenggong, 84000 Muar, Johor",
    "postcode": "84000",
    "state": "Johor",
    "area": "Muar",
    "reservePrice": 342000,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "956 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1546",
    "title": "1 Storey Terrace House",
    "address": "No. 2, Jalan Kerisi, Taman Seri Paya, 86000 Kluang, Johor",
    "postcode": "86000",
    "state": "Johor",
    "area": "Kluang",
    "reservePrice": 360000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "033 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1547",
    "title": "2 Storey Terrace House",
    "address": "No. 19, Jalan Seri Impian 7/40, Bandar Seri Impian, 86000 Kluang, Johor",
    "postcode": "86000",
    "state": "Johor",
    "area": "Kluang",
    "reservePrice": 291600,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "889 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1548",
    "title": "2 Storey Terrace House",
    "address": "No. 15, Jalan Prima 5/2, Taman Nusantara Prima, 79200 Iskandar Puteri, Johor",
    "postcode": "79200",
    "state": "Johor",
    "area": "Iskandar Puteri",
    "reservePrice": 450000,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "428 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1549",
    "title": "Vacant Commercial Land",
    "address": "Lot PTD 170708 (Plot A61), Zone A, Lebuh Medini Utara, Bandar Medini Iskandar, 79250 Iskandar Puteri, Johor",
    "postcode": "79250",
    "state": "Johor",
    "area": "Iskandar Puteri",
    "reservePrice": 36000000,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1550",
    "title": "2 Storey Terrace House",
    "address": "Jalan Jambu Air 7, Taman Muhibbah, 81400 Saleng, Johor",
    "postcode": "81400",
    "state": "Johor",
    "area": "Saleng",
    "reservePrice": 290000,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1551",
    "title": "2 Storey Terrace House",
    "address": "Jalan Kemboja 9, Taman Sri Penawar, 81930 Bandar Penawar, Johor",
    "postcode": "81930",
    "state": "Johor",
    "area": "Bandar Penawar",
    "reservePrice": 400000,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1b3h22-HftX7PDmoA6_3-ymcvA8d9afX3&sz=w800"
    ]
  },
  {
    "id": "1552",
    "title": "Apartment",
    "address": "Block LM 16, Jalan Nibong 48, Taman Daya, 81100, Johor",
    "postcode": "81100",
    "state": "Johor",
    "area": "Johor",
    "reservePrice": 170000,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1553",
    "title": "Service Apartment",
    "address": "Block 17C, Kings Bay, Persiaran Danga Perdana, Country Garden Danga Bay, 80200 Johor Bahru, Johor",
    "postcode": "80200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 520000,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "764 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1554",
    "title": "Flat",
    "address": "Unit No. 04-13, Blok 5, Jalan Kemuning, Taman Sri Plentong, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 120000,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "667 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1555",
    "title": "2 Storey Terrace House",
    "address": "No. 8, Jalan Kempas 9/12, Kawasan Kempas Baru, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 480000,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "296 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1556",
    "title": "2 Storey Terrace House",
    "address": "No. 825, Jalan Scientex Jaya 16, Taman Scientex Senai, 81400 Senai, Johor",
    "postcode": "81400",
    "state": "Johor",
    "area": "Senai",
    "reservePrice": 510000,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "404 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1557",
    "title": "Service Apartment",
    "address": "Unit No. #09-07, Block A, KIP Villa Indah (Kipark Apartment), Jalan Titiwangsa 1, Taman Tampoi Indah, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 330000,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1558",
    "title": "2 Storey Terrace House",
    "address": "No. 23, Jalan Orkid 7, Taman Sri Penawar, 81930 Bandar Penawar, Johor",
    "postcode": "81930",
    "state": "Johor",
    "area": "Bandar Penawar",
    "reservePrice": 510000,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "115 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1b3h22-HftX7PDmoA6_3-ymcvA8d9afX3&sz=w800"
    ]
  },
  {
    "id": "1559",
    "title": "2 Storey Detached House",
    "address": "No. 9, Jalan Laman Setia 1/6, Taman Laman Setia, 81550 Gelang Patah, Johor",
    "postcode": "81550",
    "state": "Johor",
    "area": "Gelang Patah",
    "reservePrice": 1782000,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "950 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1560",
    "title": "Agricultural Land",
    "address": "Lot 606 (New Lot No. 1379), Mukim Of Pantai Timur, 81620 Pengerang, Johor",
    "postcode": "81620",
    "state": "Johor",
    "area": "Pengerang",
    "reservePrice": 364300,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1561",
    "title": "2 Storey Terrace House",
    "address": "No. 40, Jalan Jaya 8, Taman Mutiara Rini, 81300 Skudai, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Skudai",
    "reservePrice": 800000,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "604 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1562",
    "title": "Service Apartment",
    "address": "Unit No. 19-01, Block A, Kota Lindungan Hijau (Also known as Green Haven), Jalan Mersawa 16, Taman Cahaya Kota Puteri, 81750, Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 650000,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "507 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1563",
    "title": "Apartment",
    "address": "Unit No. 16-05, Blok A, Pangsapuri Seri Mutiara, Bandar Seri Mutiara, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 387000,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "345 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1564",
    "title": "3 Storey Cluster House",
    "address": "No. 17, Jalan Serambi 3/1, Bukit Horizon, 79100 Iskandar Puteri, Johor",
    "postcode": "79100",
    "state": "Johor",
    "area": "Iskandar Puteri",
    "reservePrice": 2000000,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "745 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1565",
    "title": "Terrace House",
    "address": "Jalan Wau Kiki 15, Bandar Layangkasa, 81700 Pasir Gudang, Johor",
    "postcode": "81700",
    "state": "Johor",
    "area": "Pasir Gudang",
    "reservePrice": 410000,
    "auctionDate": "29th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "759 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1566",
    "title": "Terrace House",
    "address": "Jalan Wau Barat 5, Bandar Layangkasa, 81700 Pasir Gudang, Johor",
    "postcode": "81700",
    "state": "Johor",
    "area": "Pasir Gudang",
    "reservePrice": 500000,
    "auctionDate": "30th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "104 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1567",
    "title": "Apartment",
    "address": "Block M2, Mewah View Luxurious Apartments, Jalan Mewah Ria 2/10, Taman Bukit Mewah, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 400000,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1568",
    "title": "1 Storey Terrace House",
    "address": "No. 14, Jalan Jujur 1, Taman Sri Setia, 85400 Chaah, Johor",
    "postcode": "85400",
    "state": "Johor",
    "area": "Chaah",
    "reservePrice": 260000,
    "auctionDate": "5th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "540 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1569",
    "title": "2 Storey Terrace House",
    "address": "Jalan Merak 1, Taman Scientex, 81700 Pasir Gudang, Johor",
    "postcode": "81700",
    "state": "Johor",
    "area": "Pasir Gudang",
    "reservePrice": 360000,
    "auctionDate": "5th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "376 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1570",
    "title": "Apartment",
    "address": "Unit No. #06-16, Block D, Pangsapuri Sri Akasia, Jalan Persisiran Titiwangsa Utama, Taman Tampoi Indah, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 240600,
    "auctionDate": "5th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "044 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1571",
    "title": "1 Storey Semi Detached House",
    "address": "No. 25, Jalan Putera 2/26, Bandar Putera, 85000 Segamat, Johor",
    "postcode": "85000",
    "state": "Johor",
    "area": "Segamat",
    "reservePrice": 600000,
    "auctionDate": "5th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "881 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1572",
    "title": "2 Storey Terrace House",
    "address": "No. 4, Jalan Orkid 6, Taman Sri Penawar, 81930 Bandar Penawar, Johor",
    "postcode": "81930",
    "state": "Johor",
    "area": "Bandar Penawar",
    "reservePrice": 414000,
    "auctionDate": "5th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1b3h22-HftX7PDmoA6_3-ymcvA8d9afX3&sz=w800"
    ]
  },
  {
    "id": "1573",
    "title": "Apartment",
    "address": "Unit No. 23A-06, Block C, Pangsapuri Seri Mutiara, Jalan Persiaran Seri Alam, Bandar Seri Alam, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 360000,
    "auctionDate": "5th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "227 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1574",
    "title": "2 Storey Terrace House",
    "address": "No. 14, Jalan Laman Indah 16, Taman Laman Indah, 81110 Johor Bahru, Johor",
    "postcode": "81110",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 390000,
    "auctionDate": "6th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "214 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1575",
    "title": "2 Storey Terrace House",
    "address": "No. 46, Jalan Sri Kluang 29, Taman Sri Kluang, 86000 Kluang, Johor",
    "postcode": "86000",
    "state": "Johor",
    "area": "Kluang",
    "reservePrice": 200000,
    "auctionDate": "6th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "775 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1576",
    "title": "Terrace House",
    "address": "Jalan Kebangsaan 53, Taman Universiti, 81300 Skudai, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Skudai",
    "reservePrice": 640000,
    "auctionDate": "6th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1577",
    "title": "Apartment",
    "address": "Unit No. 02-17, Block A, Pangsapuri Sri Kenari, Jalan Persiaran Titiwangsa Utama, Taman Tampoi Indah, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 261000,
    "auctionDate": "6th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "904 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1578",
    "title": "Apartment",
    "address": "Unit No. 02-03, Tingkat 2, Blok C, Kondominium Aloha, Jalan Kolam Air, 80100 Johor Bahru, Johor",
    "postcode": "80100",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 409500,
    "auctionDate": "6th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "830 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1579",
    "title": "2 Storey Terrace House",
    "address": "No. 32, Jalan Kemboja 8, Bandar Bestari Perdana, 81700 Pasir Gudang, Johor",
    "postcode": "81700",
    "state": "Johor",
    "area": "Pasir Gudang",
    "reservePrice": 459000,
    "auctionDate": "6th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "645 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1580",
    "title": "2 Storey Terrace House",
    "address": "No. 40, Jalan Cermai 26, Taman Kota Masai, 81700 Pasir Gudang, johor",
    "postcode": "81700",
    "state": "Johor",
    "area": "Pasir Gudang",
    "reservePrice": 470000,
    "auctionDate": "6th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "317 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1581",
    "title": "2 Storey Terrace House",
    "address": "No. 3, Jalan Mutiara Emas 9/8, Taman Mount Austin, 81100 Johor Bahru, Johor",
    "postcode": "81100",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 600000,
    "auctionDate": "7th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "692 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1582",
    "title": "Service Apartment",
    "address": "Unit No. B-19-12, Villa Krystal, Jalan Silat Lincah, Bandar Selesa Jaya, 81300 Skudai, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Skudai",
    "reservePrice": 210600,
    "auctionDate": "7th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "818 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1583",
    "title": "2 Storey Cluster House",
    "address": "Jalan Rimba 6/6, Horizon Hills, 79100 Iskandar Puteri, Johor",
    "postcode": "79100",
    "state": "Johor",
    "area": "Iskandar Puteri",
    "reservePrice": 1500000,
    "auctionDate": "7th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "963 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1584",
    "title": "2 Storey Terrace House",
    "address": "No. 43, Jalan Seri Orkid 18, Taman Seri Orkid, 81300 Skudai, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Skudai",
    "reservePrice": 610000,
    "auctionDate": "8th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "020 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1585",
    "title": "1 Storey Terrace House",
    "address": "No. 15, Jalan Tembaga Kuning 16, Taman Sri Skudai, 81300 Skudai, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Skudai",
    "reservePrice": 300000,
    "auctionDate": "8th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "680 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1586",
    "title": "2 Storey Terrace House",
    "address": "No. 23, Jalan Mewah Ria 3/2, Taman Bukit Mewah, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 580000,
    "auctionDate": "8th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1587",
    "title": "Apartment",
    "address": "Unit No. #02-48A, Park Avenue Apartment, Jalan Mawar 3, Taman Tampoi Indah II, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 190000,
    "auctionDate": "8th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "710 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1588",
    "title": "2 Storey Terrace House",
    "address": "No. 20, Jalan Laman Setia 4/17, Taman Laman Setia, 81550 Johor Bahru, Johor",
    "postcode": "81550",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 780000,
    "auctionDate": "8th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "294 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1589",
    "title": "2 Storey Semi Detached House",
    "address": "Jalan Ponderosa 1/1, Taman Ponderosa, 81100 Johor Bahru, Johor",
    "postcode": "81100",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 1215000,
    "auctionDate": "12th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "484 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1590",
    "title": "Town House",
    "address": "No. 20A, Jalan Titiwangsa 5, Taman Tampoi Indah, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 330000,
    "auctionDate": "12th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "980 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1591",
    "title": "1 Storey Terrace House",
    "address": "No. 11, Jalan Kejayaan 42, Taman Universiti, 81300 Skudai, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Skudai",
    "reservePrice": 300000,
    "auctionDate": "12th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "720 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1592",
    "title": "2 Storey Terrace House",
    "address": "No. 16, Jalan EJ 5/10, Taman Ehsan Jaya, 81100 Johor Bahru, Johor",
    "postcode": "81100",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 600000,
    "auctionDate": "12th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "260 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1593",
    "title": "Service Apartment",
    "address": "Inspira Bestari (D' Inspire Residence), Jalan Bestari 15/2, Taman Nusa Bestari, 79100 Iskandar Puteri, Johor",
    "postcode": "79100",
    "state": "Johor",
    "area": "Iskandar Puteri",
    "reservePrice": 390000,
    "auctionDate": "12th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "893 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1594",
    "title": "2 Storey Terrace House",
    "address": "No. 4, Jalan Tasek 36, Bandar Seri Alam, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 310000,
    "auctionDate": "12th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "000 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1595",
    "title": "1 Storey Terrace House",
    "address": "No. 4, Jalan Jurumudi 2, Desa Paya Mengkuang, 81550 Gelang Patah, Johor",
    "postcode": "81550",
    "state": "Johor",
    "area": "Gelang Patah",
    "reservePrice": 230000,
    "auctionDate": "12th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "496 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1596",
    "title": "2 Storey Cluster House",
    "address": "No. 8, Jalan Ekoflora 1/12, Taman Ekoflora, 81100 Johor Bahru, Johor",
    "postcode": "81100",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 1280000,
    "auctionDate": "12th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "127 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1597",
    "title": "Service Apartment",
    "address": "Block C, Pangsapuri Kempas Indah, Jalan Kempas Indah, Taman Kempas Indah, 81300 Johor Bahru, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 480000,
    "auctionDate": "13th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "367 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1598",
    "title": "2 Storey Terrace House",
    "address": "No. 93, Jalan Ceria 34, Taman Nusa Indah, 79100 Iskandar Puteri, Johor",
    "postcode": "79100",
    "state": "Johor",
    "area": "Iskandar Puteri",
    "reservePrice": 830000,
    "auctionDate": "13th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "440 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1599",
    "title": "1 Storey Terrace House",
    "address": "No. 25, Jalan Cekor Manis, Taman Sri Amar, 81100, Johor Bahru, Johor",
    "postcode": "81100",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 470000,
    "auctionDate": "14th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "199 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1600",
    "title": "2 Storey Terrace House",
    "address": "Jalan Permai 2, Taman Seri Permai, 84300 Bukit Pasir, Muar, Johor",
    "postcode": "84300",
    "state": "Johor",
    "area": "Muar",
    "reservePrice": 730000,
    "auctionDate": "21st Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "004 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1601",
    "title": "2 Storey Terrace House",
    "address": "No. 13, Jalan Sri Mulia 4, Taman Sri Mulia, 83000 Batu Pahat, Johor",
    "postcode": "83000",
    "state": "Johor",
    "area": "Batu Pahat",
    "reservePrice": 190000,
    "auctionDate": "28th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "120 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1602",
    "title": "Terrace House",
    "address": "Jalan Mesra 3, Taman Mesra, 85400 Chaah, Johor",
    "postcode": "85400",
    "state": "Johor",
    "area": "Chaah",
    "reservePrice": 350000,
    "auctionDate": "16th Nov 2026 (Mon)",
    "landArea": "—",
    "builtUp": "270 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1603",
    "title": "1 Storey Terrace House",
    "address": "No. 60, Jalan Setia 4, Taman Setia, 84400 Sungai Mati, Tangkak, Johor",
    "postcode": "84400",
    "state": "Johor",
    "area": "Tangkak",
    "reservePrice": 560000,
    "auctionDate": "16th Dec 2026 (Wed)",
    "landArea": "—",
    "builtUp": "832 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1668",
    "title": "1 Storey Terrace House",
    "address": "No. 40, Lorong Mentiga Jaya 22, Taman Mentiga Jaya, 26600 Pekan, Pahang",
    "postcode": "26600",
    "state": "Pahang",
    "area": "Pekan",
    "reservePrice": 93925,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "032 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1669",
    "title": "1 Storey Terrace House",
    "address": "No. 51, Lorong Seri Inderapura 36, Taman Seri Inderapura, KM 15, Off Jalan Kuantan-Pekan, 25150 Kuantan, Pahang",
    "postcode": "25150",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 180000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "960 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1670",
    "title": "Studio Apartment",
    "address": "Unit No. B-L5-28, Jalan IM 9/2, Indera Mahkota 9, Valley Suite Apartment, 25200 Kuantan, Pahang",
    "postcode": "25200",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 204120,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "465 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1671",
    "title": "1 Storey Terrace House",
    "address": "No. 76, Lorong Chendor Perdana 3/5, Perumahan Chendor Utama, 26080 Kuantan, Pahang",
    "postcode": "26080",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 234000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "646 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1672",
    "title": "1 Storey Terrace House",
    "address": "No. 11, Jalan KS 6/16, Kota Sultan Ahmad Shah, 25200 Kuantan, Pahang",
    "postcode": "25200",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 350000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "679 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1673",
    "title": "Apartment",
    "address": "Unit No. 51A, 1st Floor, Bangunan LKNP, Jalan Besar, 39000 Tanah Rata, Cameron Highlands, Pahang",
    "postcode": "39000",
    "state": "Pahang",
    "area": "Cameron Highlands",
    "reservePrice": 210000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "797 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1674",
    "title": "Apartment",
    "address": "Unit No. 51B, 2nd Floor, Bangunan LKNP, Jalan Besar, 39000 Tanah Rata, Cameron Highlands, Pahang",
    "postcode": "39000",
    "state": "Pahang",
    "area": "Cameron Highlands",
    "reservePrice": 210000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "797 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1675",
    "title": "Shop Lot",
    "address": "Unit No. 51, Bangunan LKNP, Jalan Besar, 39000 Tanah Rata, Cameron Highlands, Pahang",
    "postcode": "39000",
    "state": "Pahang",
    "area": "Cameron Highlands",
    "reservePrice": 550000,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "710 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1676",
    "title": "Semi Detached House",
    "address": "No. 21, Lorong Rompin Permai 2, Taman Rompin Permai, 26800 Kuala Rompin, Pahang",
    "postcode": "26800",
    "state": "Pahang",
    "area": "Kuala Rompin",
    "reservePrice": 164025,
    "auctionDate": "7th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "852 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1677",
    "title": "1 Storey Terrace House",
    "address": "No. 9, Lorong Bendera 4B, Taman Bukit Bendera, 28400 Mentakab, Pahang",
    "postcode": "28400",
    "state": "Pahang",
    "area": "Mentakab",
    "reservePrice": 153000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "100 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1678",
    "title": "Terrace House",
    "address": "Jalan KS 3/2, Kota Sultan Ahmad Shah, Kuantan, Pahang",
    "postcode": "",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 445000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1679",
    "title": "Terrace House",
    "address": "No. 57, Jalan Air Putih 4, Taman Air Putih Indah, 25300 Kuantan, Pahang",
    "postcode": "25300",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 480000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "174 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1680",
    "title": "1 Storey Terrace House",
    "address": "Lorong Seri Mahkota Permai 14, Taman Tunas Mahkota, Batu 11, Jalan Gambang, 26070 Kuantan, Pahang",
    "postcode": "26070",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 140000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "001 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1681",
    "title": "2.5 Storey Terrace House",
    "address": "No. 37, Jalan Seri Merbau 3, Taman Seri Merbau, 28200 Bandar Bera, Pahang",
    "postcode": "28200",
    "state": "Pahang",
    "area": "Bandar Bera",
    "reservePrice": 605000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "696 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1682",
    "title": "1 Storey Terrace House",
    "address": "No. 1, Lorong S.D.S 13, Perumahan Seri Damai Sejahtera, 25150 Kuantan, Pahang",
    "postcode": "25150",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 275400,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "476 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1683",
    "title": "1 Storey Semi Detached House",
    "address": "No. 48, Lorong IPJ 21, Perumahan Makmur Inderapura Jaya, 25150, Kuantan, Pahang",
    "postcode": "25150",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 270000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "296 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1684",
    "title": "Semi Detached House",
    "address": "No. 8, Jalan Jerna Indah 3, Taman Jerna Indah, 28200 Bandar Bera, Pahang",
    "postcode": "28200",
    "state": "Pahang",
    "area": "Bandar Bera",
    "reservePrice": 340000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "122 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1685",
    "title": "2 Storey Terrace House",
    "address": "No. 26, Lorong B.K.P 10, Perumahan Bandar Kuantan Putri, 26060, Kuantan, Pahang",
    "postcode": "26060",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 300000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1686",
    "title": "Semi Detached House",
    "address": "Lorong SSB 1/18, Perumahan Makmur Sungai Soi Jaya, 26060 Kuantan, Pahang",
    "postcode": "26060",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 270000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1687",
    "title": "1 Storey Terrace House",
    "address": "No. 33, Lorong DI 3, Taman Desa Indah, 27000 Jerantut, Pahang",
    "postcode": "27000",
    "state": "Pahang",
    "area": "Jerantut",
    "reservePrice": 189000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "573 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1688",
    "title": "Semi Detached House",
    "address": "No. 5, Lorong GP 12, Taman Gelanggi Perdana, 27000 Jerantut, Pahang",
    "postcode": "27000",
    "state": "Pahang",
    "area": "Jerantut",
    "reservePrice": 320000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "154 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1689",
    "title": "1 Storey Terrace House",
    "address": "Taman Berlian, 27000 Jerantut, Pahang",
    "postcode": "27000",
    "state": "Pahang",
    "area": "Jerantut",
    "reservePrice": 240000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1690",
    "title": "1 Storey Terrace House",
    "address": "No. 692, Lorong Bentong Makmur 26, Taman Bentong Makmur, 28700, Bentong, Pahang",
    "postcode": "28700",
    "state": "Pahang",
    "area": "Bentong",
    "reservePrice": 240000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1691",
    "title": "2 Storey Bungalow House",
    "address": "No. 2, Lorong TJM 7, Taman Jengka Mahkota, 26400 Bandar Tun Abdul Razak Jengka, Pahang",
    "postcode": "26400",
    "state": "Pahang",
    "area": "Bandar Tun Abdul Razak Jengka",
    "reservePrice": 380900,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "854 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1692",
    "title": "1 Storey Terrace House",
    "address": "Lorong KPS 1/3, Taman Pandan Sejahtera, 26070 Kuantan, Pahang",
    "postcode": "26070",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 164025,
    "auctionDate": "14th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "210 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1693",
    "title": "2 Storey Terrace House",
    "address": "Lorong Dato' Abdul Rashid Salleh 1, Perumahan Dato' Abdul Rashid Salleh, 25300 Kuantan, Pahang",
    "postcode": "25300",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 288684,
    "auctionDate": "14th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "713 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1694",
    "title": "1 Storey Semi Detached House",
    "address": "Lorong Seri Mahkota 52, Perumahan Seri Mahkota, 26300 Kuantan, Pahang",
    "postcode": "26300",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 250000,
    "auctionDate": "14th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1695",
    "title": "Terrace House",
    "address": "No. 1, Lorong S.D.S 8, Perumahan Seri Damai Sejahtera, 25150 Kuantan, Pahang",
    "postcode": "25150",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 216513,
    "auctionDate": "14th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "465 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1696",
    "title": "1 Storey Semi Detached House",
    "address": "No. 3, Lorong Gemilang 5, Taman Desa Gemilang, 27000 Jerantut, Pahang",
    "postcode": "27000",
    "state": "Pahang",
    "area": "Jerantut",
    "reservePrice": 256000,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "389 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1697",
    "title": "2 Storey Terrace House",
    "address": "No. 623A, Jalan Karak Indah 11/5, Taman Karak Indah, 28600 Karak, Pahang",
    "postcode": "28600",
    "state": "Pahang",
    "area": "Karak",
    "reservePrice": 450000,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "310 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1698",
    "title": "2 Storey Detached House",
    "address": "No. A-3664, Lorong Tok Sira 17, Perkampungan Tok Sira, 25050 Kuantan, Pahang",
    "postcode": "25050",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 462550.5,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "178 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1699",
    "title": "Agricultural Land",
    "address": "GRN 1350 (Lot 4499), Sabai, 28700 Bentong, Pahang",
    "postcode": "28700",
    "state": "Pahang",
    "area": "Bentong",
    "reservePrice": 1022220,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1700",
    "title": "3 Storey Terrace Shop Office",
    "address": "No. 27, 27A & 27B, Persiaran Oriental Lily 1, Taman Oriental Lily, 39100 Tringkap, Pahang",
    "postcode": "39100",
    "state": "Pahang",
    "area": "Tringkap",
    "reservePrice": 1215000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1701",
    "title": "2 Storey Terrace House",
    "address": "No. 20, Jalan Golden Hills 16, Cameron Golden Hills, 39000 Tanah Rata, Cameron Highlands, Pahang",
    "postcode": "39000",
    "state": "Pahang",
    "area": "Cameron Highlands",
    "reservePrice": 700000,
    "auctionDate": "22nd Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "200 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1702",
    "title": "Studio Apartment",
    "address": "Unit No. B-L5-13, IM 9/2, Indera Mahkota 9, Valley Suites Apartment, 25200 Kuantan, Pahang",
    "postcode": "25200",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 280000,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "465 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1703",
    "title": "Apartment",
    "address": "Unit No. K-21, Desa Anthurium, 39000 Tanah Rata, Pahang",
    "postcode": "39000",
    "state": "Pahang",
    "area": "Tanah Rata",
    "reservePrice": 180000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "968 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1704",
    "title": "3 Storey Shop Office",
    "address": "No. 16, Jalan Bukit Keramat 2, Taman Bukit Keramat, 28400 Mentakab, Pahang",
    "postcode": "28400",
    "state": "Pahang",
    "area": "Mentakab",
    "reservePrice": 583200,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "060 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1705",
    "title": "2 Storey Terrace House",
    "address": "No. B-1478, Lorong Galing 125, Jalan Air Putih, 25300 Kuantan, Pahang",
    "postcode": "25300",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 378000,
    "auctionDate": "30th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "280 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1706",
    "title": "1 Storey Terrace House",
    "address": "Lorong Seberang Balok 104, Perumahan Seberang Balok, 26100 Kuantan, Pahang",
    "postcode": "26100",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 180000,
    "auctionDate": "30th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1707",
    "title": "1 Storey Semi Detached House",
    "address": "Lorong Seri Teruntum 99, Off Jalan Kampung Tengah, 25100 Kuantan, Pahang",
    "postcode": "25100",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 330000,
    "auctionDate": "30th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "890 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1708",
    "title": "1 Storey Terrace House",
    "address": "Lorong Sungai Karang Jaya 10, Perumahan Sungai Karang Jaya, 26100 Kuantan, Pahang",
    "postcode": "26100",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 310000,
    "auctionDate": "30th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1709",
    "title": "1 Storey Terrace House",
    "address": "Jalan Kampung Padang 5, Taman Kampung Padang, Jalan Sungai Lembing, 25200 Kuantan, Pahang",
    "postcode": "25200",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 140000,
    "auctionDate": "30th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "022 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1710",
    "title": "Terrace House",
    "address": "Lorong Inderapura 38, Taman Inderapura, Kuantan, Pahang",
    "postcode": "",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 160000,
    "auctionDate": "30th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1711",
    "title": "1 Storey Terrace House",
    "address": "No. 15, Lorong K.P 1/1, Perumahan Kempadang Perdana 1, 26060 Kuantan, Pahang",
    "postcode": "26060",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 280000,
    "auctionDate": "30th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "474 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1712",
    "title": "Semi Detached House",
    "address": "Lorong IM 12/8, Indera Mahkota 12, 25200 Kuantan, Pahang",
    "postcode": "25200",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 360000,
    "auctionDate": "30th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "612 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1713",
    "title": "Detached House",
    "address": "Lorong IM 5/16, Indera Mahkota, 25200 Kuantan, Pahang",
    "postcode": "25200",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 1485000,
    "auctionDate": "30th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "427 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1714",
    "title": "Terrace House",
    "address": "Lorong Seri Damai Makmur 3, Perumahan Seri Damai Makmur, 25150 Kuantan, Pahang",
    "postcode": "25150",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 207000,
    "auctionDate": "30th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "099 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1715",
    "title": "1 Storey Terrace House",
    "address": "No. 36, Lorong Galing 33, Off Jalan Haji Ahmad, 25300 Kuantan, Pahang",
    "postcode": "25300",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 300000,
    "auctionDate": "30th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "604 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1716",
    "title": "1 Storey Semi Detached House",
    "address": "No. 42, Lorong Alor Ara Dahlia 2, Taman Alor Ara Dahlia, Pekan, Pahang",
    "postcode": "",
    "state": "Pahang",
    "area": "Pekan",
    "reservePrice": 355000,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "444 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1717",
    "title": "1 Storey Terrace House",
    "address": "No. 7, Lorong Air Putih 6, Taman Harapan, 25300 Kuantan, Pahang",
    "postcode": "25300",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 300000,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "701 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1718",
    "title": "Semi Detached House",
    "address": "Lorong GD 28, Perumahan Gambang Damai, 26300 Kuantan, Pahang",
    "postcode": "26300",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 340000,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "403 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1719",
    "title": "Terrace House",
    "address": "Lorong Bukit Rangin 2/34, Perumahan Bukit Rangin Perdana 2, 25150 Kuantan, Pahang",
    "postcode": "25150",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 210000,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "957 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1720",
    "title": "1 Storey Terrace House",
    "address": "Premises No. 1, Lorong Sungai Karang Darat 21, Taman Aneka Jaya IV, 26100 Kuantan, Pahang",
    "postcode": "26100",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 250000,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "906 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1721",
    "title": "1 Storey Semi Detached House",
    "address": "No. 12, Jalan KS 5/5, Kota Sas, Kuantan, Pahang",
    "postcode": "",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 502000,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "758 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1722",
    "title": "2.5 Storey Semi Detached House",
    "address": "No. 11, Jalan KS 3/6, Kota Sultan Ahmad Shah, 25200 Kuantan, Pahang",
    "postcode": "25200",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 583200,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "767 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1723",
    "title": "1 Storey Terrace House",
    "address": "No. 35, Jalan Seri Layang Heights 2, Taman Seri Layang Heights, Mentakab, Pahang",
    "postcode": "",
    "state": "Pahang",
    "area": "Mentakab",
    "reservePrice": 405000,
    "auctionDate": "5th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "160 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1724",
    "title": "2 Storey Terrace House",
    "address": "No. 18, Jalan Mentakab Indah 10, Taman Mentakab Indah, 28400 Mentakab, Pahang",
    "postcode": "28400",
    "state": "Pahang",
    "area": "Mentakab",
    "reservePrice": 144000,
    "auctionDate": "6th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "204 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1725",
    "title": "2 Storey Terrace House",
    "address": "Lorong Pandan Perdana 1/26, Perumahan Pandan Perdana 1, 25150 Kuantan, Pahang",
    "postcode": "25150",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 188956.8,
    "auctionDate": "7th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1726",
    "title": "2 Storey Semi Detached House",
    "address": "Lorong IM 10/23, Taman Bukit Istana, Bandar Indera Mahkota, 25200 Kuantan, Pahang",
    "postcode": "25200",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 560965.5,
    "auctionDate": "7th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "158 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1727",
    "title": "1 Storey Detached House",
    "address": "No. A-3064, Lorong Tok Sira 23, Perkampungan Tok Sira, 25050 Kuantan, Pahang",
    "postcode": "25050",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 558900,
    "auctionDate": "7th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "674 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1728",
    "title": "1.5 Storey Terrace House",
    "address": "No. 11, Lorong BKP 62, Perumahan Bandar Baru Kuantan Putri, 25200 Kuantan, Pahang",
    "postcode": "25200",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 216000,
    "auctionDate": "7th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "505 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1729",
    "title": "1 Storey Terrace House",
    "address": "Lorong Baluk Baru 1/9, Perumahan Baluk Baru, 26100 Kuantan, Pahang",
    "postcode": "26100",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 252000,
    "auctionDate": "7th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "896 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1730",
    "title": "1 Storey Terrace House",
    "address": "No. 13, Lorong Baluk Baru 1/14, Perumahan Baluk Baru, Kuantan, Pahang",
    "postcode": "",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 410000,
    "auctionDate": "7th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "299 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1731",
    "title": "1 Storey Terrace House",
    "address": "No. 21, Lorong IM 2/12, Indera Mahkota 2, 25200 Kuantan, Pahang",
    "postcode": "25200",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 250000,
    "auctionDate": "7th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "968 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1732",
    "title": "1 Storey Terrace House",
    "address": "No. 43, Lorong Seri Mahkota Aman 7, Batu 12, Jalan Gambang, 26070 Kuantan, Pahang",
    "postcode": "26070",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 150000,
    "auctionDate": "7th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "870 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1733",
    "title": "Shop Office",
    "address": "2nd & 3rd Floor, Jalan Teluk Sisek, Seri Kuantan Square, 25300 Kuantan, Pahang",
    "postcode": "25300",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 450000,
    "auctionDate": "8th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "927 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1734",
    "title": "1 Storey Terrace House",
    "address": "Lorong Seri Mahkota Permai 36, Taman Tunas Mahkota, 25150 Kuantan, Pahang",
    "postcode": "25150",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 111537,
    "auctionDate": "12th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "900 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1735",
    "title": "1 Storey Terrace House",
    "address": "Lorong BKP 4, Bandar Kuantan Putri, 26060 Kuantan, Pahang",
    "postcode": "26060",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 174960,
    "auctionDate": "12th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "180 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1736",
    "title": "1 Storey Terrace House",
    "address": "Lorong Pinggiran Putra 4/148, Taman Aneka Jaya VIII, 26060 Kuantan, Pahang",
    "postcode": "26060",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 145800,
    "auctionDate": "12th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "020 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1737",
    "title": "Agricultural Land",
    "address": "Lorong Desa Aspa 9, Aspa Cottage, Jalan Jerangau-Jabor, 26100 Kuantan, Pahang",
    "postcode": "26100",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 333000,
    "auctionDate": "12th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "559 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1738",
    "title": "1 Storey Terrace House",
    "address": "Lorong Seri Mahkota Maju 10, Residensi Prima @ Seri Mahkota Maju, 26070 Kuantan, Pahang",
    "postcode": "26070",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 170100,
    "auctionDate": "14th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "960 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1739",
    "title": "1 Storey Terrace House",
    "address": "Jalan Keladan Impian 7, Taman Keladan Impian, 28000 Temerloh, Pahang",
    "postcode": "28000",
    "state": "Pahang",
    "area": "Temerloh",
    "reservePrice": 184500,
    "auctionDate": "14th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "000 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1740",
    "title": "2 Storey Terrace House",
    "address": "Jalan TJ 9/3, Taman Temerloh Jaya, 28000 Temerloh, Pahang",
    "postcode": "28000",
    "state": "Pahang",
    "area": "Temerloh",
    "reservePrice": 93150,
    "auctionDate": "14th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "979 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1741",
    "title": "Apartment",
    "address": "Jalan Kuantan - Kemaman, Timur Bay, 26100 Kuantan, Pahang",
    "postcode": "26100",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 460000,
    "auctionDate": "28th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "538 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1742",
    "title": "Terrace House",
    "address": "Lorong Pandan Damai 1/36, Perumahan Pandan Damai, 25150 Kuantan, Pahang",
    "postcode": "25150",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 270000,
    "auctionDate": "28th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "113 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1743",
    "title": "Terrace House",
    "address": "Jalan Balok Baru 1, Taman Balok Pelangi, 26100 Kuantan, Pahang",
    "postcode": "26100",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 360000,
    "auctionDate": "28th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "560 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1744",
    "title": "1 Storey Terrace House",
    "address": "No. 4, Lorong Pandan Damai 1/8, Taman Aneka Jaya 31, Jalan Kuantan - By Pass, 25150 Kuantan, Pahang",
    "postcode": "25150",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 198000,
    "auctionDate": "28th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1745",
    "title": "1 Storey Semi Detached House",
    "address": "No. 22, Lorong Berjaya Permai 14, Taman Berjaya Permai, 26060 Kuantan, Pahang",
    "postcode": "26060",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 261000,
    "auctionDate": "28th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "363 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1746",
    "title": "1 Storey Terrace House",
    "address": "No. 8, Lorong Cherating Perdana 9, Taman Cherating Perdana, 26080 Kuantan, Pahang",
    "postcode": "26080",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 225000,
    "auctionDate": "28th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "664 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1747",
    "title": "2 Storey Terrace House",
    "address": "No. 2, Lorong Bukit Ubi 19, Off Jalan Bukit Sekilau, 25200 Kuantan, Pahang",
    "postcode": "25200",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 549000,
    "auctionDate": "28th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "720 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1748",
    "title": "Terrace House",
    "address": "Jalan Pine 3, Taman Pine, 27000 Jerantut, Pahang",
    "postcode": "27000",
    "state": "Pahang",
    "area": "Jerantut",
    "reservePrice": 320000,
    "auctionDate": "29th Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1749",
    "title": "Semi Detached House",
    "address": "Lorong Melur 21, Taman Melur, Kampung Marhum, 26600 Pekan, Pahang",
    "postcode": "26600",
    "state": "Pahang",
    "area": "Pekan",
    "reservePrice": 150000,
    "auctionDate": "5th Nov 2026 (Thu)",
    "landArea": "—",
    "builtUp": "997 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1750",
    "title": "1 Storey Terrace House",
    "address": "No. 74, Taman Sempalit, Mentakab, Pahang",
    "postcode": "",
    "state": "Pahang",
    "area": "Mentakab",
    "reservePrice": 310000,
    "auctionDate": "18th Nov 2026 (Wed)",
    "landArea": "—",
    "builtUp": "849 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1751",
    "title": "1 Storey Semi Detached House",
    "address": "No. 43, Lorong Gambang Jaya 2/6, Perumahan Makmur Gambang Jaya 2, 26300 Kuantan, Pahang",
    "postcode": "26300",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 240000,
    "auctionDate": "25th Nov 2026 (Wed)",
    "landArea": "—",
    "builtUp": "798 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1752",
    "title": "1 Storey Terrace House",
    "address": "No. 3, Lorong Kempadang Damai 7, Taman Kempadang Damai, 26060 Kuantan, Pahang",
    "postcode": "26060",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 260000,
    "auctionDate": "25th Nov 2026 (Wed)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1753",
    "title": "Terrace House",
    "address": "Lorong Pandan Aman 1/21, Perumahan Pandan Aman, 25150 Kuantan, Pahang",
    "postcode": "25150",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 270000,
    "auctionDate": "25th Nov 2026 (Wed)",
    "landArea": "—",
    "builtUp": "280 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1754",
    "title": "Semi Detached House",
    "address": "Jalan IM 10/7, Bukit Istana, Kuantan, Pahang",
    "postcode": "",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 700000,
    "auctionDate": "25th Nov 2026 (Wed)",
    "landArea": "—",
    "builtUp": "017 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1755",
    "title": "Terrace House",
    "address": "Lorong Seri Setali 13, Taman Cahaya Timur, 25300 Kuantan, Pahang",
    "postcode": "25300",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 279000,
    "auctionDate": "25th Nov 2026 (Wed)",
    "landArea": "—",
    "builtUp": "313 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1756",
    "title": "Terrace House",
    "address": "Lorong Pelindung 100, Jalan Beserah, Taman Pelindung, 25300 Kuantan, Pahang",
    "postcode": "25300",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 261000,
    "auctionDate": "25th Nov 2026 (Wed)",
    "landArea": "—",
    "builtUp": "353 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1757",
    "title": "Terrace House",
    "address": "Lorong Permatang Badak Perdana 112, Perumahan Permatang Badak Perdana, 25150 Kuantan, Pahang",
    "postcode": "25150",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 360000,
    "auctionDate": "25th Nov 2026 (Wed)",
    "landArea": "—",
    "builtUp": "927 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1758",
    "title": "2 Storey Terrace House",
    "address": "Jalan Setia 4, Taman Setia, 28000 Temerloh, Pahang",
    "postcode": "28000",
    "state": "Pahang",
    "area": "Temerloh",
    "reservePrice": 120000,
    "auctionDate": "15th Dec 2026 (Tue)",
    "landArea": "—",
    "builtUp": "023 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1759",
    "title": "1 Storey Detached House",
    "address": "Lorong Berjaya Permai 8, Sungai Soi, 25150 Kuantan, Pahang",
    "postcode": "25150",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 550000,
    "auctionDate": "27th Jan 2027 (Wed)",
    "landArea": "—",
    "builtUp": "050 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1760",
    "title": "1 Storey Terrace House",
    "address": "No. 10, Lorong Pelindung 98, Taman Seri Pelindung 1, Jalan Beserah, 25300 Kuantan, Pahang",
    "postcode": "25300",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 180000,
    "auctionDate": "27th Jan 2027 (Wed)",
    "landArea": "—",
    "builtUp": "001 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1761",
    "title": "1 Storey Semi Detached House",
    "address": "No. 26, Lorong IS 12, Perkampungan Indera Sempurna, Jalan Kuantan-Pekan, 25150 Kuantan, Pahang",
    "postcode": "25150",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 402000,
    "auctionDate": "27th Jan 2027 (Wed)",
    "landArea": "—",
    "builtUp": "534 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1762",
    "title": "1 Storey Terrace House",
    "address": "Lorong Seri Setali 17, Taman Setali, 25300 Kuantan, Pahang",
    "postcode": "25300",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 300000,
    "auctionDate": "27th Jan 2027 (Wed)",
    "landArea": "—",
    "builtUp": "959 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1763",
    "title": "1.5 Storey Terrace House",
    "address": "No. 32, Jalan TMU 23, Taman Tanjong Minyak Utama, 75260, Melaka",
    "postcode": "75260",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 324000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "100 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xKvsUAKMiSiMs_-YgadKOPBdMXmadZnD&sz=w800"
    ]
  },
  {
    "id": "1764",
    "title": "1 Storey Terrace House",
    "address": "No. 14, Jalan Saujana Permai 7, Taman Saujana Permai, Bukit Katil, 75450 Hang Tuah Jaya, Melaka",
    "postcode": "75450",
    "state": "Melaka",
    "area": "Hang Tuah Jaya",
    "reservePrice": 310000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "862 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1765",
    "title": "2 Storey Cluster House",
    "address": "KM 93, Jalan Kasa Heights 21, Taman Kasa Heights, 78000 Alor Gajah, Melaka",
    "postcode": "78000",
    "state": "Melaka",
    "area": "Alor Gajah",
    "reservePrice": 420000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "371 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1_esJMlbgQ9eimjEgHhjS8AqHIYH_yuUM&sz=w800"
    ]
  },
  {
    "id": "1766",
    "title": "2 Storey Terrace House",
    "address": "No. 8, Jalan PRB 7, Taman Paya Rumput Bestari, 76450, Melaka",
    "postcode": "76450",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 400000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1767",
    "title": "Town House",
    "address": "No. A6-1, Lorong 2, Jalan TBC 5A, Taman Bukit Cheng, 75250, Melaka",
    "postcode": "75250",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 200000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "248 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1768",
    "title": "2 Adjoining Parcels of Vacant Commercial Land",
    "address": "Lot 12069 & 12070, Jalan Melaka Raya 33, Taman Melaka Raya, 75000, Melaka",
    "postcode": "12069",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 4470000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1769",
    "title": "1 Storey Terrace House",
    "address": "No. ST. 1137, Jalan Bidara Jaya 3, Taman Bidara Jaya, 78300 Masjid Tanah, Melaka",
    "postcode": "78300",
    "state": "Melaka",
    "area": "Masjid Tanah",
    "reservePrice": 240000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "442 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1770",
    "title": "Apartment",
    "address": "Unit No. A1-14, Rumah Pangsa Bakti, Jalan Thamby Abdullah, 75000, Melaka",
    "postcode": "75000",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 88000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "818 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1771",
    "title": "2 Storey Semi Detached House",
    "address": "No. 19, Jalan TU 18, Taman Tasik Utama, Ayer Keroh, 75450 Hang Tuah Jaya, Melaka",
    "postcode": "75450",
    "state": "Melaka",
    "area": "Hang Tuah Jaya",
    "reservePrice": 290000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "647 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1772",
    "title": "2 Storey Terrace House",
    "address": "No. DT 4519, Jalan Angkasa Nuri 14, Taman Angkasa Nuri, 76100, Hang Tuah Jaya, Durian Tunggal, Melaka",
    "postcode": "76100",
    "state": "Melaka",
    "area": "Durian Tunggal",
    "reservePrice": 460000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "765 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1XeHqY0PPI2bI40kkZ2r3odjED9IZVa8S&sz=w800"
    ]
  },
  {
    "id": "1773",
    "title": "2 Storey Terrace House",
    "address": "No. 30, Jalan AP 8, Taman Alai Perdana, 75460, Melaka",
    "postcode": "75460",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 320000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "499 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1774",
    "title": "2 Storey Bungalow",
    "address": "No.9449, Lorong Penghulu Abbas, Bukit Baru, 75150, Melaka",
    "postcode": "75150",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 819000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "599 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1775",
    "title": "Terrace House",
    "address": "No. ST 1150, Jalan Bidara Jaya 3, Taman Bidara Jaya, 78300 Masjid Tanah, Melaka",
    "postcode": "78300",
    "state": "Melaka",
    "area": "Masjid Tanah",
    "reservePrice": 240000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1776",
    "title": "1 Storey Semi Detached House",
    "address": "JC 7244, Jalan Merlimau Timur 1, Taman Merlimau Timur, 77300 Merlimau, Melaka",
    "postcode": "77300",
    "state": "Melaka",
    "area": "Merlimau",
    "reservePrice": 390000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "380 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1777",
    "title": "1 Storey Terrace House",
    "address": "SP 28, Jalan Sungai Petai Permai 1/2, Taman Sungai Petai Permai 1, 78000 Alor Gajah, Melaka",
    "postcode": "78000",
    "state": "Melaka",
    "area": "Alor Gajah",
    "reservePrice": 310000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "680 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1778",
    "title": "1 Storey Terrace House",
    "address": "No. 15, Jalan SD 2/15, Taman Seri Duyong Seksyen 2, 75460, Melaka",
    "postcode": "75460",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 250000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "100 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1TcpW3DPDVwtTsgoxfLB4h70pFw3xZbcO&sz=w800"
    ]
  },
  {
    "id": "1779",
    "title": "1 Storey Terrace House",
    "address": "No. SU 1217, Jalan Masjid Tanah Ria 6, Taman Masjid Tanah Ria, 78300 Masjid Tanah, Melaka",
    "postcode": "78300",
    "state": "Melaka",
    "area": "Masjid Tanah",
    "reservePrice": 162000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "300 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1780",
    "title": "1 Storey Terrace House",
    "address": "No. 23, Jalan Siakap 14, Taman Permatang Pasir Perdana, 75460 Alai, Melaka",
    "postcode": "75460",
    "state": "Melaka",
    "area": "Alai",
    "reservePrice": 250000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1781",
    "title": "Service Suite",
    "address": "Unit No. 2042 (S2032), Hatten Hotel, Jalan Merdeka, 75000, Melaka",
    "postcode": "75000",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 180000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "355 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1-pjW_5OxGvqS5qSVUBWgB1AIZ97LypfM&sz=w800"
    ]
  },
  {
    "id": "1782",
    "title": "Terrace House",
    "address": "SI 437, Jalan Seruling Jaya 15, Taman Seruling Jaya, 78300 Masjid Tanah, Melaka",
    "postcode": "78300",
    "state": "Melaka",
    "area": "Masjid Tanah",
    "reservePrice": 230000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "300 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1PPikL2t8hh93A9gd0tkINFMqUVDDbrDA&sz=w800"
    ]
  },
  {
    "id": "1783",
    "title": "2 Storey Terrace House",
    "address": "No. JD 645, Jalan SJM P1/10, Taman Scientex Jasin Mutiara Fasa 1B2, 77000 Jasin, Melaka",
    "postcode": "77000",
    "state": "Melaka",
    "area": "Jasin",
    "reservePrice": 180000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "958 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1GSh-qEl7lVx-Jg7p4oHczXwrg0baUL_A&sz=w800"
    ]
  },
  {
    "id": "1784",
    "title": "Terrace House",
    "address": "No. 12, Jalan BU 10, Taman Bachang Utama, 75350 Bachang, Melaka",
    "postcode": "75350",
    "state": "Melaka",
    "area": "Bachang",
    "reservePrice": 275400,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1785",
    "title": "1 Storey Terrace House",
    "address": "SI 1605, Jalan Seri Gamelan 13, Taman Seri Gamelan, 78200 Masjid Tanah, Melaka",
    "postcode": "78200",
    "state": "Melaka",
    "area": "Masjid Tanah",
    "reservePrice": 240000,
    "auctionDate": "2nd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "990 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1_kTuTldDVC6b5EjrsFxAPwgRn2Mqrwm4&sz=w800"
    ]
  },
  {
    "id": "1786",
    "title": "Service Apartment",
    "address": "Unit No. A-08-03, Blok A, Pangsapuri Tun Perak @ Sungai Melaka, Jalan Tun Perak, 75300, Melaka",
    "postcode": "75300",
    "state": "Perak",
    "area": "Melaka",
    "reservePrice": 376000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "087 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1kV5TV_oQbJuEvNPnxBbXTwqWXW5iqUxI&sz=w800"
    ]
  },
  {
    "id": "1787",
    "title": "Land",
    "address": "Lot No. 1618, Jalan Perindustrian Rembia 2, Kawasan Perindustrian Rembia, 78000 Alor Gajah, Melaka",
    "postcode": "78000",
    "state": "Melaka",
    "area": "Alor Gajah",
    "reservePrice": 3000000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1VWbFQy2z-KRANKFWX7cF27ABFuOxYch7&sz=w800"
    ]
  },
  {
    "id": "1788",
    "title": "1 Storey Semi Detached House",
    "address": "No. 1, Lorong 3, Jalan PRI 17, Taman Paya Rumput Indah, 76450, Melaka",
    "postcode": "76450",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 388800,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "512 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1k0HDnE1DJC_4dp6XkPfT4F2E8oDuYiFy&sz=w800"
    ]
  },
  {
    "id": "1789",
    "title": "1 Storey Terrace House",
    "address": "No. 4, Jalan RI 6, Taman Rambai Idaman, 75260 Bukit Rambai, Melaka",
    "postcode": "75260",
    "state": "Melaka",
    "area": "Bukit Rambai",
    "reservePrice": 270000,
    "auctionDate": "9th Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1790",
    "title": "1 Storey Semi Detached House",
    "address": "JD 2215, Jalan SRA 1, Taman Sungai Rambai Anggun, 77400 Sungai Rambai, Melaka",
    "postcode": "77400",
    "state": "Melaka",
    "area": "Sungai Rambai",
    "reservePrice": 370000,
    "auctionDate": "10th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "612 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1791",
    "title": "Service Apartment",
    "address": "Unit No. B-31-01, Storey No. 31, Tower B, Kondominium Kota Syahbandar, Kota Syahbandar, 75200, Melaka",
    "postcode": "75200",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 392000,
    "auctionDate": "11th Sep 2026 (Fri)",
    "landArea": "—",
    "builtUp": "932 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1792",
    "title": "Apartment",
    "address": "Unit No. D-11-03, 11th Floor, Block D, Residensi Seri Serindit, Jalan Taman Bandaraya, 75400, Melaka",
    "postcode": "75400",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 216000,
    "auctionDate": "11th Sep 2026 (Fri)",
    "landArea": "—",
    "builtUp": "883 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1g7iIkxvERBjjdhPLkTdD7JcqqP9b21Sv&sz=w800"
    ]
  },
  {
    "id": "1793",
    "title": "Semi Detached House",
    "address": "Jalan RU 13, Taman Rambai Utama, 75300 Bukit Rambai, Melaka",
    "postcode": "75300",
    "state": "Melaka",
    "area": "Bukit Rambai",
    "reservePrice": 350000,
    "auctionDate": "11th Sep 2026 (Fri)",
    "landArea": "—",
    "builtUp": "657 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1UYmluA9RuLwbtluHbGEV0ZYh6VB_wRyY&sz=w800"
    ]
  },
  {
    "id": "1794",
    "title": "2 Storey Semi Detached House",
    "address": "No. 9, Jalan PJ 9, Taman Pengkalan Jaya, Ayer Molek, 75450, Melaka",
    "postcode": "75450",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 650000,
    "auctionDate": "11th Sep 2026 (Fri)",
    "landArea": "—",
    "builtUp": "314 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=16AtV4340Vb64VDAGJrgT8eaWeKcyUubO&sz=w800"
    ]
  },
  {
    "id": "1795",
    "title": "1 Storey Terrace House",
    "address": "Jalan Seri Pelangi 6, Taman Seri Pelangi, Rembia, 78000 Alor Gajah, Melaka",
    "postcode": "78000",
    "state": "Melaka",
    "area": "Alor Gajah",
    "reservePrice": 230000,
    "auctionDate": "18th Sep 2026 (Fri)",
    "landArea": "—",
    "builtUp": "770 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Up3ZXtIJkWfR1A1HCJVHZgwS49EJ1KCX&sz=w800"
    ]
  },
  {
    "id": "1796",
    "title": "1 Storey Terrace House",
    "address": "No. 46, Jalan SD 3/5, Taman Seri Duyong, Seksyen 3, 75460, Melaka",
    "postcode": "75460",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 280000,
    "auctionDate": "18th Sep 2026 (Fri)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1TcpW3DPDVwtTsgoxfLB4h70pFw3xZbcO&sz=w800"
    ]
  },
  {
    "id": "1797",
    "title": "2 Storey Terrace House",
    "address": "No. 39, Jalan S.S 9, Taman Seri Selendang, 75350 Hang Tuah Jaya, Batu Berendam, Melaka",
    "postcode": "75350",
    "state": "Melaka",
    "area": "Batu Berendam",
    "reservePrice": 304000,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "098 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1798",
    "title": "1 Storey Terrace House",
    "address": "No. 50, Jalan Seri Duyong 2/11, Taman Seri Duyong 2, 75450, Melaka",
    "postcode": "75450",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 162000,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "098 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1TcpW3DPDVwtTsgoxfLB4h70pFw3xZbcO&sz=w800"
    ]
  },
  {
    "id": "1799",
    "title": "1 Storey Detached House",
    "address": "No. KM 1414, Taman Jaya, Kelemak, 78000 Alor Gajah, Melaka",
    "postcode": "78000",
    "state": "Melaka",
    "area": "Alor Gajah",
    "reservePrice": 280000,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "448 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1800",
    "title": "1 Storey Terrace House",
    "address": "No. 35, Jalan PR1MA 4, Residensi PR1MA Pulau Sebang, 78000 Alor Gajah, Melaka",
    "postcode": "78000",
    "state": "Melaka",
    "area": "Alor Gajah",
    "reservePrice": 162000,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "431 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1801",
    "title": "2 Storey Terrace House",
    "address": "JD 4525, Jalan BSJ P2/2, Bandar Scientex Jasin Presint 2 (Fasa 1A1), 77300 Merlimau, Melaka",
    "postcode": "77300",
    "state": "Melaka",
    "area": "Merlimau",
    "reservePrice": 310000,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "380 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1rkQlZ_G3IpPzaGSXnQ6ukkMSxc6ejCx-&sz=w800"
    ]
  },
  {
    "id": "1802",
    "title": "Commercial Development Land",
    "address": "Lot 2727, (Serama Camp Melaka), Off Jalan Durian Tunggal, 76100 Alor Gajah, Melaka",
    "postcode": "76100",
    "state": "Melaka",
    "area": "Alor Gajah",
    "reservePrice": 7080777,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1803",
    "title": "Vacant Commercial Land",
    "address": "Lot 2729, Kampung Padang Keladi, Durian Tunggal, 76100 Hang Tuah Jaya, Melaka",
    "postcode": "76100",
    "state": "Melaka",
    "area": "Hang Tuah Jaya",
    "reservePrice": 527067,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "139 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1804",
    "title": "1 Storey Terrace House",
    "address": "No. PS 1475, Jalan Baiduri 1/2, Taman Baiduri, Pulau Sebang, 73000 Tampin, Melaka",
    "postcode": "73000",
    "state": "Melaka",
    "area": "Tampin",
    "reservePrice": 180000,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "840 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1805",
    "title": "Commercial Land",
    "address": "Lot 2948, Berhampiran Plaza Tol Ayer Keroh, 76100 Durian Tunggal, Melaka",
    "postcode": "76100",
    "state": "Melaka",
    "area": "Durian Tunggal",
    "reservePrice": 8500000,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1806",
    "title": "1 Storey Terrace House",
    "address": "No. JC 9786, Jalan BJB 5/21, Fasa 3A, Bandar Jasin Bestari, Seksyen 5, 77200 Bemban, Melaka",
    "postcode": "77200",
    "state": "Melaka",
    "area": "Bemban",
    "reservePrice": 270000,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1807",
    "title": "2 Storey Terrace House",
    "address": "No. 2, Jalan TBC 37, Taman Bukit Cheng, 75260, Melaka",
    "postcode": "75260",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 423000,
    "auctionDate": "25th Sep 2026 (Fri)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1808",
    "title": "1 Storey Terrace House",
    "address": "No. 16, Jalan Murni 10, Taman Mas Merah, Batu Berendam, 75350, Melaka",
    "postcode": "75350",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 324000,
    "auctionDate": "25th Sep 2026 (Fri)",
    "landArea": "—",
    "builtUp": "450 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1809",
    "title": "Terrace House",
    "address": "Jalan BS 8, Taman Bertam Setia, Tanjong Minyak, 76450, Melaka",
    "postcode": "76450",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 260000,
    "auctionDate": "2nd Oct 2026 (Fri)",
    "landArea": "—",
    "builtUp": "126 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xSIq16qJcn4L7UCBLix3YhKhoXMFKJe9&sz=w800"
    ]
  },
  {
    "id": "1810",
    "title": "2 Storey Terrace House",
    "address": "No. 24, Jalan ST 3, Taman Saujana Tehel, Ayer Panas, 77200 Hang Tuah Jaya, Melaka",
    "postcode": "77200",
    "state": "Melaka",
    "area": "Hang Tuah Jaya",
    "reservePrice": 364500,
    "auctionDate": "7th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "604 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1811",
    "title": "1 Storey Detached House",
    "address": "Jalan Dang Anum 2, A'Famosa Golf Resort, Jalan Kemus Simpang Empat, 78000 Alor Gajah, Melaka",
    "postcode": "78000",
    "state": "Melaka",
    "area": "Alor Gajah",
    "reservePrice": 360000,
    "auctionDate": "7th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "133 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1812",
    "title": "2 Storey Semi Detached House",
    "address": "No. SP 1301, Jalan Bukit Emas 7, Taman Bukit Emas, Sungai Petai, 78000 Alor Gajah, Melaka",
    "postcode": "78000",
    "state": "Melaka",
    "area": "Alor Gajah",
    "reservePrice": 450000,
    "auctionDate": "7th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "885 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1813",
    "title": "1 Storey Terrace House",
    "address": "No. ST 1120, Jalan Bidara Jaya 3, Taman Bidara Jaya, 78300 Masjid Tanah, Melaka",
    "postcode": "78300",
    "state": "Melaka",
    "area": "Masjid Tanah",
    "reservePrice": 243000,
    "auctionDate": "7th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "571 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1814",
    "title": "2 Storey Semi Detached House",
    "address": "No. 7351, Jalan Spring 1, Taman Spring, 76400 Tanjong Kling, Melaka",
    "postcode": "76400",
    "state": "Melaka",
    "area": "Tanjong Kling",
    "reservePrice": 288000,
    "auctionDate": "7th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "070 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1815",
    "title": "1 Storey Terrace House",
    "address": "Jalan M 38, Taman Merdeka, Batu Berendam, 75350 Hang Tuah Jaya, Melaka",
    "postcode": "75350",
    "state": "Melaka",
    "area": "Hang Tuah Jaya",
    "reservePrice": 380000,
    "auctionDate": "7th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "505 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1OH3PhdwyP14wS9qakLnoSizRrTX6hiiR&sz=w800"
    ]
  },
  {
    "id": "1816",
    "title": "1 Storey Terrace House",
    "address": "No. 59, Jalan TMU 7, Taman Tanjong Minyak Utama, 75260, Melaka",
    "postcode": "75260",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 252000,
    "auctionDate": "9th Oct 2026 (Fri)",
    "landArea": "—",
    "builtUp": "440 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xKvsUAKMiSiMs_-YgadKOPBdMXmadZnD&sz=w800"
    ]
  },
  {
    "id": "1817",
    "title": "1 Storey Terrace House",
    "address": "No. 58, Jalan ST 4, Taman Saujana Tehel, Ayer Panas, 77200 Hang Tuah Jaya, Melaka",
    "postcode": "77200",
    "state": "Melaka",
    "area": "Hang Tuah Jaya",
    "reservePrice": 330000,
    "auctionDate": "14th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "100 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1818",
    "title": "1 Storey Terrace House",
    "address": "No. 38, Jalan Seri Buana 3, Taman Tangga Batu Perdana, 76400, Melaka",
    "postcode": "76400",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 320000,
    "auctionDate": "14th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "929 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1819",
    "title": "2 Storey Terrace House",
    "address": "No. 22, Jalan Angkasa Nuri 20, Taman Angkasa Nuri, 76100 Durian Tunggal, Melaka",
    "postcode": "76100",
    "state": "Melaka",
    "area": "Durian Tunggal",
    "reservePrice": 360000,
    "auctionDate": "14th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "422 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1XeHqY0PPI2bI40kkZ2r3odjED9IZVa8S&sz=w800"
    ]
  },
  {
    "id": "1820",
    "title": "1 Storey Terrace House",
    "address": "No. 20, Jalan SB 17, Taman Seri Bertam, 76450, Melaka",
    "postcode": "76450",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 260000,
    "auctionDate": "14th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "855 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Gu474BemRsuD5lI8ivveGamnibyS13pf&sz=w800"
    ]
  },
  {
    "id": "1821",
    "title": "1 Storey Terrace House",
    "address": "No. 38, Jalan Desa Bertam 30, Taman Desa Bertam, 76450, Melaka",
    "postcode": "76450",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 450000,
    "auctionDate": "14th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "206 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1eUXMVoLWkidcbhg-D4NL1I8bmEeQpmJP&sz=w800"
    ]
  },
  {
    "id": "1822",
    "title": "1 Storey Terrace House",
    "address": "No. 1, Jalan Puncak 5, Taman Puncak Bukit Katil, Bukit Katil, 75450 Hang Tuah Jaya, Melaka",
    "postcode": "75450",
    "state": "Melaka",
    "area": "Hang Tuah Jaya",
    "reservePrice": 342000,
    "auctionDate": "14th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "541 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1823",
    "title": "2 Storey Terrace House",
    "address": "No. 63 & 63A, Jalan Kota Laksamana 1/11, Taman Kota Laksamana Seksyen 1, 75200, Melaka",
    "postcode": "75200",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 585000,
    "auctionDate": "22nd Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "401 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1824",
    "title": "2 Storey Terrace House",
    "address": "MT 2558, Jalan TBBMT 9, Taman Bandar Baru Masjid Tanah, 78300 Alor Gajah, Melaka",
    "postcode": "78300",
    "state": "Melaka",
    "area": "Alor Gajah",
    "reservePrice": 270000,
    "auctionDate": "23rd Oct 2026 (Fri)",
    "landArea": "—",
    "builtUp": "520 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1XFkyKpBVNVt0RQepgmvs65kQYFbgUkPW&sz=w800"
    ]
  },
  {
    "id": "1825",
    "title": "2 Storey Terrace House",
    "address": "Jalan BP 15, Taman Bertam Perdana, 75200, Melaka",
    "postcode": "75200",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 400000,
    "auctionDate": "23rd Oct 2026 (Fri)",
    "landArea": "—",
    "builtUp": "582 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=17lJWsu_ubEfS9TSN6DNz7HvBD6U45mKr&sz=w800"
    ]
  },
  {
    "id": "1826",
    "title": "2 Storey Terrace House",
    "address": "No. 1, Jalan Pahlawan 6A, Taman Pahlawan, Sungai Udang, 76300, Melaka",
    "postcode": "76300",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 400000,
    "auctionDate": "23rd Oct 2026 (Fri)",
    "landArea": "—",
    "builtUp": "818 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1827",
    "title": "Apartment",
    "address": "Unit No. 7-10, Pangsapuri Residence Merak Kayangan, 75450 Bukit Baru, Melaka",
    "postcode": "75450",
    "state": "Melaka",
    "area": "Bukit Baru",
    "reservePrice": 372000,
    "auctionDate": "30th Oct 2026 (Fri)",
    "landArea": "—",
    "builtUp": "904 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=108PXt0ztiqjHXm5l3Bf3sBF0dhGnxogq&sz=w800"
    ]
  },
  {
    "id": "1828",
    "title": "1 Storey Semi Detached House",
    "address": "No. 4, Jalan BKD 55, Taman Bukit Katil Damai, Bukit Katil, 75450 Hang Tuah Jaya, Melaka",
    "postcode": "75450",
    "state": "Melaka",
    "area": "Hang Tuah Jaya",
    "reservePrice": 625000,
    "auctionDate": "30th Oct 2026 (Fri)",
    "landArea": "—",
    "builtUp": "271 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1AZwZz_Ed8j2yG7EIKO7oKh3jeJElawct&sz=w800"
    ]
  },
  {
    "id": "1829",
    "title": "2 Storey Terrace House",
    "address": "No. 56, Jalan BKD 52, Taman Bukit Katil Damai, Bukit Katil, 75450 Hang Tuah Jaya, Melaka",
    "postcode": "75450",
    "state": "Melaka",
    "area": "Hang Tuah Jaya",
    "reservePrice": 441000,
    "auctionDate": "30th Oct 2026 (Fri)",
    "landArea": "—",
    "builtUp": "881 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1AZwZz_Ed8j2yG7EIKO7oKh3jeJElawct&sz=w800"
    ]
  },
  {
    "id": "1830",
    "title": "1 Storey Terrace House",
    "address": "No. 20, Jalan TM 33, Taman Tanjong Minyak, 75250, Melaka",
    "postcode": "75250",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 250000,
    "auctionDate": "13th Nov 2026 (Fri)",
    "landArea": "—",
    "builtUp": "780 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1831",
    "title": "Terrace House",
    "address": "Jalan Kenanga 3/10A, Taman Kenanga, Seksyen 3, Kampung Lapan, 75200, Melaka",
    "postcode": "75200",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 430000,
    "auctionDate": "20th Nov 2026 (Fri)",
    "landArea": "—",
    "builtUp": "133 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1lSSeIv0-_-6BnhlaIwzsrP9yP2j86nNi&sz=w800"
    ]
  },
  {
    "id": "1832",
    "title": "Terrace House",
    "address": "Jalan Awan Biru 1, Taman Awan Biru, 78000 Alor Gajah, Melaka",
    "postcode": "78000",
    "state": "Melaka",
    "area": "Alor Gajah",
    "reservePrice": 130000,
    "auctionDate": "27th Nov 2026 (Fri)",
    "landArea": "—",
    "builtUp": "023 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1833",
    "title": "Terrace House",
    "address": "Taman Panglima Pak 1, 77300 Merlimau, Melaka",
    "postcode": "77300",
    "state": "Melaka",
    "area": "Merlimau",
    "reservePrice": 170000,
    "auctionDate": "3rd Dec 2026 (Thu)",
    "landArea": "—",
    "builtUp": "377 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1a0_Bgu9yBJMvyOZnA5Mz4MT5JCzvHX-7&sz=w800"
    ]
  },
  {
    "id": "1834",
    "title": "1 Storey Terrace House",
    "address": "No. JA 1716, Jalan Panglima Pak 6, Taman Panglima Pak II, 77300 Merlimau, , Melaka",
    "postcode": "77300",
    "state": "Melaka",
    "area": "",
    "reservePrice": 150000,
    "auctionDate": "28th Jan 2027 (Thu)",
    "landArea": "—",
    "builtUp": "800 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1a0_Bgu9yBJMvyOZnA5Mz4MT5JCzvHX-7&sz=w800"
    ]
  },
  {
    "id": "1835",
    "title": "4 Storey Shop House used for Bird Nest Industry",
    "address": "Lot. 4400, Kampung Gong Kua, 16800 Pasir Puteh, Kelantan",
    "postcode": "16800",
    "state": "Pasir Puteh",
    "area": "Pasir Puteh",
    "reservePrice": 78452.66,
    "auctionDate": "14th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "779 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1836",
    "title": "4 Storey Shop Office",
    "address": "PT 621 & PT 626, Wisma Mutiara, Jalan Sultan Yahya Petra, Seksyen 14, 15200 Kota Bharu, Kelantan",
    "postcode": "15200",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 260193.51,
    "auctionDate": "14th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "721 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1837",
    "title": "2 Storey Semi Detached House",
    "address": "PT 997, Kampung Terbak, Taman Indah, 16200 Tumpat, Kelantan",
    "postcode": "16200",
    "state": "Tumpat",
    "area": "Tumpat",
    "reservePrice": 380000,
    "auctionDate": "14th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "714 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1838",
    "title": "4 Storey Terrace Shop Office",
    "address": "PT 5452, Lorong Hajah Nik Mariam, 18000 Kuala Krai, Kelantan",
    "postcode": "18000",
    "state": "Kuala Krai",
    "area": "Kuala Krai",
    "reservePrice": 450000,
    "auctionDate": "14th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1839",
    "title": "3 Storey Shop Office",
    "address": "PT 358, Section 17, Bandar Baru Lembah Sireh, 15050 Kota Bharu, Kelantan",
    "postcode": "15050",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 984150,
    "auctionDate": "14th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "561 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1840",
    "title": "3 Storey Shop Office",
    "address": "PT 728, Jalan Kuala Krai, Kawasan Pasar Borong Wakaf Che Yeh, 15050 Kota Bharu, Kelantan",
    "postcode": "15050",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 450000,
    "auctionDate": "14th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "345 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1841",
    "title": "2 Storey Terrace House",
    "address": "No. 36 (PT. 15445), Jalan Prima B2/4, Residensi PR1MA Lubok Jong, Jalan Pasir Mas - Rantau Panjang, 17070 Pasir Mas, Kelantan",
    "postcode": "15445",
    "state": "Pasir Mas",
    "area": "Pasir Mas",
    "reservePrice": 202500,
    "auctionDate": "14th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1842",
    "title": "1 Storey Terrace House",
    "address": "No. 5190, Jalan Kuala Krai, Taman Sungai Durian, 18000 Kuala Krai, Kelantan",
    "postcode": "18000",
    "state": "Kuala Krai",
    "area": "Kuala Krai",
    "reservePrice": 153090,
    "auctionDate": "14th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1843",
    "title": "1 Storey Terrace House",
    "address": "Lot 1255, Taman Wira, 17200 Rantau Panjang, Kelantan",
    "postcode": "17200",
    "state": "Rantau Panjang",
    "area": "Rantau Panjang",
    "reservePrice": 64800,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "870 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1844",
    "title": "1.5 Storey Shop Office",
    "address": "PT 1870, Taman Sri Bayu, 16200 Tumpat, Kelantan",
    "postcode": "16200",
    "state": "Tumpat",
    "area": "Tumpat",
    "reservePrice": 300000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "604 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1845",
    "title": "1 Storey Terrace House",
    "address": "PT. 520, Taman Binjai Kerak, Kampung Kerak Hulu, Batu 11, 16450 Ketereh, Kelantan",
    "postcode": "16450",
    "state": "Ketereh",
    "area": "Ketereh",
    "reservePrice": 150000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "749 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1846",
    "title": "3 Storey Shop Office",
    "address": "Lot 2777, Kampung Jambu Merah, 16400 Melor, Kota Bharu, Kelantan",
    "postcode": "16400",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 531500,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "864 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1847",
    "title": "1 Storey Detached House",
    "address": "Lot 13628, Kampung Seterpa, Banggu, 16150 Kota Bharu, Kelantan",
    "postcode": "13628",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 380000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "490 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1848",
    "title": "1 Storey Detached House",
    "address": "PT 20791, Off Jalan Mat Tassan, Taman Jelatok Kasturi, 17500 Tanah Merah, Kelantan",
    "postcode": "20791",
    "state": "Tanah Merah",
    "area": "Tanah Merah",
    "reservePrice": 350000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "264 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1849",
    "title": "2 Storey Terrace House",
    "address": "No. 28 (PT 15557), Jalan Prima B2/8, 17070 Pasir Mas, Kelantan",
    "postcode": "15557",
    "state": "Pasir Mas",
    "area": "Pasir Mas",
    "reservePrice": 129908,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1850",
    "title": "Shop House",
    "address": "Lot 3864, Jalan Kuala Krai, 15050 Kota Bharu, Kelantan",
    "postcode": "15050",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 619650,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1851",
    "title": "Detached House",
    "address": "PT. 311, Jalan Jaya Setia, Pantai Cahaya Bulan, Kampung Tanjong Baru, Badang, 15350 Kota Bharu, Kelantan",
    "postcode": "15350",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 486000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "706 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1852",
    "title": "Agricultural Land",
    "address": "Lot 3119, Mukim Kubang Ketam, Daerah Kuala Lemal, Pasir Mas, Kelantan",
    "postcode": "",
    "state": "Pasir Mas",
    "area": "Pasir Mas",
    "reservePrice": 100000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1853",
    "title": "2 Storey Terrace House",
    "address": "No. 327 (PT 6005), Taman Desa Barakah, 17500 Tanah Merah, Kelantan",
    "postcode": "17500",
    "state": "Tanah Merah",
    "area": "Tanah Merah",
    "reservePrice": 126000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "732 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1854",
    "title": "Land",
    "address": "Lot 2675, Mukim Baung, Tempat Kampung Baung, Daerah Panji, Jajahan Kota Bharu, 16100 Kota Bharu, Kelantan",
    "postcode": "16100",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 525000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "092 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1855",
    "title": "2 Storey Shop Office",
    "address": "PT (B) 1318, Taman Sri Intan, Jalan Kweng Hitam, 18500 Machang, Kelantan",
    "postcode": "18500",
    "state": "Machang",
    "area": "Machang",
    "reservePrice": 320000,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "604 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1856",
    "title": "5 Storey Shop Office",
    "address": "PT 617 & PT 618 & PT 622 & PT 623, Seksyen 14, Jalan Sultan Yahya Petra, 15200 Kota Bharu, Kelantan",
    "postcode": "15200",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 690300,
    "auctionDate": "24th Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "109 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1857",
    "title": "1 Storey Terrace House",
    "address": "PT. 389, Kampung Tanjong, Sering, 16150 Kota Bharu, Kelantan",
    "postcode": "16150",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 230850,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "444 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1858",
    "title": "2 Storey Shop House",
    "address": "Lot 3552, Taman Sungai Durian, 18000 Kuala Krai, Kelantan",
    "postcode": "18000",
    "state": "Kuala Krai",
    "area": "Kuala Krai",
    "reservePrice": 450000,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "200 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1859",
    "title": "1 Storey Detached House",
    "address": "Lot 3045, Taman Kala Perdana, 16450 Melor, Kelantan",
    "postcode": "16450",
    "state": "Melor",
    "area": "Melor",
    "reservePrice": 210000,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "681 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1860",
    "title": "Shop House",
    "address": "Unit No. S62/PT 786, Jalan Kuala Krai, Kawasan Pasar Borong Wakaf Che Yeh, 15050 Kota Bharu, Kelantan",
    "postcode": "15050",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 950000,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "325 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1861",
    "title": "Semi Detached House",
    "address": "No. 15 (PT. 14701), Jalan Prima A2/4, 17070 Pasir Mas, Kelantan",
    "postcode": "14701",
    "state": "Pasir Mas",
    "area": "Pasir Mas",
    "reservePrice": 194400,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "454 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1862",
    "title": "1 Storey Detached House",
    "address": "No. 1396, Jalan Pantai Cahaya Bulan, Kampung Semut Api, 15350 Kota Bharu, Kelantan",
    "postcode": "15350",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 333000,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "349 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1863",
    "title": "3 Storey Shop House",
    "address": "Lot No. 2261, Off Jalan Berangan, 16200 Tumpat, Kelantan",
    "postcode": "16200",
    "state": "Tumpat",
    "area": "Tumpat",
    "reservePrice": 401400,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "186 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1864",
    "title": "3 Storey Shop House",
    "address": "PT. 3330, Batu 40, Taman Lucky Garden, 18000 Kuala Krai, Kelantan",
    "postcode": "18000",
    "state": "Kuala Krai",
    "area": "Kuala Krai",
    "reservePrice": 280800,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "336 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1865",
    "title": "3 Storey Shop House",
    "address": "Lot. 2059, Simpang 4, Pekan Gunong, 16300 Bachok, Kelantan",
    "postcode": "16300",
    "state": "Bachok",
    "area": "Bachok",
    "reservePrice": 153900,
    "auctionDate": "28th Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "776 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1866",
    "title": "Residential Land",
    "address": "Lot. 13208, Kampung Che Arus, Kok Lanas, 16150 Kota Bharu, Kelantan",
    "postcode": "13208",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 30400,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "147 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1867",
    "title": "Residential Land",
    "address": "Lot. 13207, Kampung Che Arus, Kok Lanas, 16150 Kota Bharu, Kelantan",
    "postcode": "13207",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 34700,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "609 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1868",
    "title": "4 Storey Shop Office",
    "address": "PT 5792, Pekan Guchil, 18000 Kuala Krai, Kelantan",
    "postcode": "18000",
    "state": "Kuala Krai",
    "area": "Kuala Krai",
    "reservePrice": 229581,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1869",
    "title": "4 Storey Shop Office",
    "address": "PT 5790, Pekan Guchil, 18000 Kuala Krai, Kelantan",
    "postcode": "18000",
    "state": "Kuala Krai",
    "area": "Kuala Krai",
    "reservePrice": 229581,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1870",
    "title": "4 Storey Shop Office",
    "address": "PT 5789, Pekan Guchil, Jalan Batu Balai, 18000 Kuala Krai, Kelantan",
    "postcode": "18000",
    "state": "Kuala Krai",
    "area": "Kuala Krai",
    "reservePrice": 356330,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "034 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1871",
    "title": "4 Storey Shop Office",
    "address": "PT 5800, Pekan Guchil, 18000 Kuala Krai, Kelantan",
    "postcode": "18000",
    "state": "Kuala Krai",
    "area": "Kuala Krai",
    "reservePrice": 325241,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "862 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1872",
    "title": "2 Storey Shop Office",
    "address": "PT 1158, Jalan Pengkalan Chepa, Taman Bendahara, 16100 Kota Bharu, Kelantan",
    "postcode": "16100",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 292300,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "883 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1873",
    "title": "3.5 Storey Office Unit",
    "address": "No. PT 125 (2631), Block C, Wakaf Che Yeh, Jalan Kuala Krai, 15050 Kota Bharu, Kelantan",
    "postcode": "15050",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 1100000,
    "auctionDate": "1st Oct 2026 (Thu)",
    "landArea": "—",
    "builtUp": "603 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1874",
    "title": "Shop Unit",
    "address": "PT 889, Block 5, Pusat Perniagaan Dataran Rakyat, Bandar Baru Tunjong, 16010 Kota Bharu, Kelantan",
    "postcode": "16010",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 28700,
    "auctionDate": "5th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "129 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1875",
    "title": "1 Storey Terrace House",
    "address": "Lot 1089, Taman Tengku Ahmad Panglima, 15300 Kota Bharu, Kelantan",
    "postcode": "15300",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 270000,
    "auctionDate": "5th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1876",
    "title": "1 Storey Semi Detached House",
    "address": "Taman Sri Juntek, Kampung Pasir Pekan, Belakang Sekolah Kebangsaan Pohon Tanjong, 16250 Tumpat, Kelantan",
    "postcode": "16250",
    "state": "Tumpat",
    "area": "Tumpat",
    "reservePrice": 178200,
    "auctionDate": "12th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "018 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1877",
    "title": "1 Storey Bungalow House",
    "address": "PT 3145 (Lot 3211), Taman Fajar Jaya, Kampung Lalang Luas, 18500 Machang, Kelantan",
    "postcode": "18500",
    "state": "Machang",
    "area": "Machang",
    "reservePrice": 76545,
    "auctionDate": "20th Oct 2026 (Tue)",
    "landArea": "—",
    "builtUp": "166 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1878",
    "title": "1 Storey Semi Permanent House",
    "address": "Lot 1358A & 1358B & 1358C, Kampung Bukit Gasing, 21600 Marang, Terengganu",
    "postcode": "21600",
    "state": "Terengganu",
    "area": "Marang",
    "reservePrice": 197584.5,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "377 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1879",
    "title": "2 Storey Terrace House",
    "address": "PT. 16155, Taman IG Pesona, Kampung Injin Gergaji, 24000 Cukai, Terengganu",
    "postcode": "16155",
    "state": "Terengganu",
    "area": "Cukai",
    "reservePrice": 340200,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "309 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1880",
    "title": "1 Storey Terrace House",
    "address": "PT. 7963, Jalan Akasia 10, Bandar Baru Bukit Mentok, 24000 Kemaman, Terengganu",
    "postcode": "24000",
    "state": "Terengganu",
    "area": "Kemaman",
    "reservePrice": 162000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "858 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1881",
    "title": "Vacant Land",
    "address": "Lot 4875, Jalan Pengkalan Binjai, Kampung Bukit Besar, 24000 Chukai, Terengganu",
    "postcode": "24000",
    "state": "Terengganu",
    "area": "Chukai",
    "reservePrice": 315900,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1882",
    "title": "1 Storey Semi Detached House",
    "address": "Lot 71795 (PT. 19176), Jalan Paka-Dungun, Kampung Nyior, 23100 Paka, Terengganu",
    "postcode": "71795",
    "state": "Terengganu",
    "area": "Paka",
    "reservePrice": 324000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "415 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1883",
    "title": "Land",
    "address": "Lot No. 4874, Jalan Pengkalan Binjai, Kampung Bukit Besar, 24000 Cukai, Terengganu",
    "postcode": "24000",
    "state": "Terengganu",
    "area": "Cukai",
    "reservePrice": 315900,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1884",
    "title": "10 Parcels of Vacant Detached Plot",
    "address": "Lot 8579 to Lot 8588, Wakaf Tapai, Bukit Payung, Marang, Terengganu",
    "postcode": "",
    "state": "Terengganu",
    "area": "Marang",
    "reservePrice": 729000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1885",
    "title": "2 Storey Terrace House",
    "address": "PT. 3874, Residensi Bayas, Fasa 1, Bukit Besar, 21100 Kuala Terengganu, Terengganu",
    "postcode": "21100",
    "state": "Terengganu",
    "area": "Kuala Terengganu",
    "reservePrice": 432000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "825 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1886",
    "title": "2 Storey Detached House",
    "address": "Lot 17065, Kampung Mengabang Telung, 21020 Kuala Nerus, Terengganu",
    "postcode": "17065",
    "state": "Terengganu",
    "area": "Kuala Nerus",
    "reservePrice": 522000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "209 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1887",
    "title": "1 Storey Detached House",
    "address": "Lot 3941, Taman Kurnia Jaya, 21600 Marang, Terengganu",
    "postcode": "21600",
    "state": "Terengganu",
    "area": "Marang",
    "reservePrice": 395000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "489 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1888",
    "title": "3 Storey Shop House",
    "address": "Lot PT 37784, Rimba Jaya Square, Gong Pak Damat, 21300 Kuala Terengganu, Terengganu",
    "postcode": "37784",
    "state": "Terengganu",
    "area": "Kuala Terengganu",
    "reservePrice": 1000000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1889",
    "title": "1 Storey Terrace House",
    "address": "PT 1120, Taman An-Nur, Kampung Gong Guchil, Jalan Kubang Depu, 22000 Besut, Terengganu",
    "postcode": "22000",
    "state": "Terengganu",
    "area": "Besut",
    "reservePrice": 80190,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1890",
    "title": "Agricultural Land",
    "address": "Lot 2526, Hutan Jel, Tenang, 22010 Besut, Terengganu",
    "postcode": "22010",
    "state": "Terengganu",
    "area": "Besut",
    "reservePrice": 43740,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "786 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1891",
    "title": "1 Storey Terrace House",
    "address": "No. PT 1137, Taman An-Nur, Jebak Puyuh, Kampung Alor Keladi, 22000 Jertih, Terengganu",
    "postcode": "22000",
    "state": "Terengganu",
    "area": "Jertih",
    "reservePrice": 97200,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "410 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1892",
    "title": "1 Storey Terrace House",
    "address": "No. 1568, Taman Seroja 1, Jalan Air Putih, Binjai, 24000 Kemaman, Terengganu",
    "postcode": "24000",
    "state": "Terengganu",
    "area": "Kemaman",
    "reservePrice": 243000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "552 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1893",
    "title": "Detached House",
    "address": "Lot 3145, Mukim Keluang, 22200 Besut, Terengganu",
    "postcode": "22200",
    "state": "Terengganu",
    "area": "Besut",
    "reservePrice": 350000,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "077 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1894",
    "title": "1 Storey Terrace House",
    "address": "Lot 4805 (PT 1148), Taman An-Nur, Jebak Puyuh, Kampung Alor Keladi, 22000 Jertih, Terengganu",
    "postcode": "22000",
    "state": "Terengganu",
    "area": "Jertih",
    "reservePrice": 80190,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1895",
    "title": "1 Storey Semi Detached House",
    "address": "Lot 55268, Jalan Undang, Kampung Mak Kemas, 21400 Bukit Payong, Terengganu",
    "postcode": "55268",
    "state": "Terengganu",
    "area": "Bukit Payong",
    "reservePrice": 291600,
    "auctionDate": "1st Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "392 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1896",
    "title": "1 Storey Bungalow House",
    "address": "Lot 12553, Kampung Binjai Rendah, 21400 Marang, Terengganu",
    "postcode": "12553",
    "state": "Terengganu",
    "area": "Marang",
    "reservePrice": 307800,
    "auctionDate": "3rd Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "768 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1897",
    "title": "1 Storey Semi Detached House",
    "address": "MBKT. 3070, Taman Sri Serada, Kampung Banggol Kemang, 20050 Kuala Terengganu, Terengganu",
    "postcode": "20050",
    "state": "Terengganu",
    "area": "Kuala Terengganu",
    "reservePrice": 320000,
    "auctionDate": "3rd Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "143 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1898",
    "title": "Shop Lot",
    "address": "Lot 8520, Kubang Kurus, Taman Cukai Utama, 24000 Cukai, Terengganu",
    "postcode": "24000",
    "state": "Terengganu",
    "area": "Cukai",
    "reservePrice": 490000,
    "auctionDate": "3rd Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "517 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1899",
    "title": "1 Storey Terrace House",
    "address": "Lot 2690, Jalan Padang Landak, 22000 Jerteh, Terengganu",
    "postcode": "22000",
    "state": "Terengganu",
    "area": "Jerteh",
    "reservePrice": 101250,
    "auctionDate": "3rd Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1900",
    "title": "1 Storey Detached House",
    "address": "Lot No. 28682, Kampung Banggol Tok Jiring, 21060 Kuala Nerus, Terengganu",
    "postcode": "28682",
    "state": "Terengganu",
    "area": "Kuala Nerus",
    "reservePrice": 301806,
    "auctionDate": "3rd Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "629 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1901",
    "title": "Terrace House",
    "address": "Taman Residensi Bayas, Jalan Sungai Derhaka, 21100 Kuala Terengganu, Terengganu",
    "postcode": "21100",
    "state": "Terengganu",
    "area": "Kuala Terengganu",
    "reservePrice": 490000,
    "auctionDate": "8th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "678 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1902",
    "title": "2 Storey Semi Detached House",
    "address": "No. 31 (Lot 6005), Taman Sura Gate, 23000 Dungun, Terengganu",
    "postcode": "23000",
    "state": "Terengganu",
    "area": "Dungun",
    "reservePrice": 272160,
    "auctionDate": "15th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "951 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1903",
    "title": "2 Storey Shop Office",
    "address": "PT 11620, Jalan Kemaman-Kuantan, Geliga Besar, 24000 Kemaman, Terengganu",
    "postcode": "11620",
    "state": "Terengganu",
    "area": "Kemaman",
    "reservePrice": 501916.5,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "317 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1904",
    "title": "Bungalow",
    "address": "Lot 5696, Jalan Cempaka, 22200 Besut, Terengganu",
    "postcode": "22200",
    "state": "Terengganu",
    "area": "Besut",
    "reservePrice": 283500,
    "auctionDate": "21st Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "113 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1905",
    "title": "Detached House",
    "address": "Kampung Gong Kuin, Jalan Tok Jembal, 21300 Kuala Terengganu, Terengganu",
    "postcode": "21300",
    "state": "Terengganu",
    "area": "Kuala Terengganu",
    "reservePrice": 600000,
    "auctionDate": "23rd Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "627 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1906",
    "title": "1 Storey Terrace House",
    "address": "No. 1825, Jalan Tempurong, Taman Mawar 2, Kampung Tempurong, 24000 Chukai, Terengganu",
    "postcode": "24000",
    "state": "Terengganu",
    "area": "Chukai",
    "reservePrice": 240000,
    "auctionDate": "29th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1907",
    "title": "2 Storey Terrace House",
    "address": "Taman Geliga Besar, Jalan Kemaman-Kuantan, 24000 Cukai, Terengganu",
    "postcode": "24000",
    "state": "Terengganu",
    "area": "Cukai",
    "reservePrice": 350000,
    "auctionDate": "29th Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "604 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1908",
    "title": "1 Storey Detached House",
    "address": "PT. 10629K, Kampung Pagar Besi, Batu Rakit, 21020 Kuala Nerus, Terengganu",
    "postcode": "21020",
    "state": "Terengganu",
    "area": "Kuala Nerus",
    "reservePrice": 270000,
    "auctionDate": "12th Oct 2026 (Mon)",
    "landArea": "—",
    "builtUp": "432 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1909",
    "title": "Shop House",
    "address": "Bangunan MAIDAM, Pekan Batu Enam, 21200, Terengganu",
    "postcode": "21200",
    "state": "Terengganu",
    "area": "Terengganu",
    "reservePrice": 790000,
    "auctionDate": "14th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "002 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1910",
    "title": "1 Storey Semi Detached House",
    "address": "MBKT-PT 24224 (29594), Taman Desa Baroh, Tanjung Damai, Belakang Sekolah Menengah Kompleks Gong Badak, 21300 Kuala Terengganu, Terengganu",
    "postcode": "24224",
    "state": "Terengganu",
    "area": "Kuala Terengganu",
    "reservePrice": 320000,
    "auctionDate": "14th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "114 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1911",
    "title": "1 Storey Semi Detached House",
    "address": "Taman Paka Delima, Jalan Duku, 23100 Paka, Terengganu",
    "postcode": "23100",
    "state": "Terengganu",
    "area": "Paka",
    "reservePrice": 270000,
    "auctionDate": "28th Oct 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1912",
    "title": "Terrace House",
    "address": "Taman Desa Damai, Kampung Belukar Pak Ra, 21600 Marang, Terengganu",
    "postcode": "21600",
    "state": "Terengganu",
    "area": "Marang",
    "reservePrice": 260000,
    "auctionDate": "4th Nov 2026 (Wed)",
    "landArea": "—",
    "builtUp": "238 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1913",
    "title": "1 Storey Semi Detached House",
    "address": "No. 8, Taman Laut 1, Jalan Kelisa, Paka, 23100, Dungun, Terengganu",
    "postcode": "23100",
    "state": "Terengganu",
    "area": "Dungun",
    "reservePrice": 270000,
    "auctionDate": "11th Nov 2026 (Wed)",
    "landArea": "—",
    "builtUp": "027 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1914",
    "title": "Semi Detached House",
    "address": "Jalan Rengas, Taman Bukit Kuang, 24000 Kemaman, Terengganu",
    "postcode": "24000",
    "state": "Terengganu",
    "area": "Kemaman",
    "reservePrice": 390000,
    "auctionDate": "24th Nov 2026 (Tue)",
    "landArea": "—",
    "builtUp": "969 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1915",
    "title": "Semi Detached House",
    "address": "Jalan Rengas, Taman Bukit Kuang, 24000 Kemaman, Terengganu",
    "postcode": "24000",
    "state": "Terengganu",
    "area": "Kemaman",
    "reservePrice": 330000,
    "auctionDate": "24th Nov 2026 (Tue)",
    "landArea": "—",
    "builtUp": "712 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1916",
    "title": "Detached House",
    "address": "Jalan Mak Chili, Kampung Mak Chili Atas, 24000 Chukai, Terengganu",
    "postcode": "24000",
    "state": "Terengganu",
    "area": "Chukai",
    "reservePrice": 370000,
    "auctionDate": "24th Nov 2026 (Tue)",
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
