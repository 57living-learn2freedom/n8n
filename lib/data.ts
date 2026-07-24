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
    "title": "Apartment",
    "address": "Unit No. Begonial Kristal 03-11, Jalan Residensi Warnasari 13/1, Residensi Warnasari, Seksyen 13, 42300 Bandar Puncak Alam, Selangor",
    "postcode": "42300",
    "state": "Selangor",
    "area": "Bandar Puncak Alam",
    "reservePrice": 120000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "721 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1MTVA4HRdQQo_fTlDxHIqmBm0VQbtjX7w&sz=w800"
    ]
  },
  {
    "id": "3",
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
    "id": "4",
    "title": "2 Storey Semi Detached House",
    "address": "No. 3, Jalan TR 3/1, Tropicana Golf & Country Resort, 47410 Petaling Jaya, Selangor",
    "postcode": "47410",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 2332800,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "948 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=134mMPrbyZo25aQ0_JxK4YXGnxS6aX53n&sz=w800",
      "https://drive.google.com/thumbnail?id=1fYmuO2QgxvHmn-YJgILe3Jkrdf0H9wo0&sz=w800",
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "5",
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
    "id": "6",
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
    "id": "7",
    "title": "2 Storey Terrace House",
    "address": "No. 25, Jalan Putra Harmoni 1/4F, Putra Heights, 47650 Subang Jaya, Selangor",
    "postcode": "47650",
    "state": "Selangor",
    "area": "Subang Jaya",
    "reservePrice": 688500,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "230 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=129zBRicrGPGvjqiY9TQKAGwCUHDfpemk&sz=w800"
    ]
  },
  {
    "id": "8",
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
    "id": "9",
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
      "https://drive.google.com/thumbnail?id=1EFAE6vlI0gdUXmdmepnR77E_uz43DWro&sz=w800",
      "https://drive.google.com/thumbnail?id=15obB2oh4sw3_A-u6PkEQwT_dvcrjx_Td&sz=w800"
    ]
  },
  {
    "id": "10",
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
    "id": "11",
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
    "id": "12",
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
    "id": "13",
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
    "id": "14",
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
    "id": "15",
    "title": "2 Storey Terrace House",
    "address": "Premises No. 10, Jalan Selampit 28, Taman Desawan, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 600000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1foz1a8FcehIsY3_oVXw5i_0410HynSf-&sz=w800"
    ]
  },
  {
    "id": "16",
    "title": "1 Storey Terrace House",
    "address": "No. 6, Lorong Samarinda 31B, Taman Mesra 3A, 41000 Klang, Selangor",
    "postcode": "41000",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 390000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "180 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1eNO-OYNLuC63ch3VhO99G1BgQQN4t4SS&sz=w800"
    ]
  },
  {
    "id": "17",
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
    "id": "18",
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
    "id": "19",
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
    "id": "20",
    "title": "2.5 Storey Terrace House",
    "address": "No. 11, Jalan Puncak 2, Taman Puncak Bukit Utama, Bukit Antarabangsa, 68000 Ampang, Selangor",
    "postcode": "68000",
    "state": "Selangor",
    "area": "Ampang",
    "reservePrice": 568600,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "544 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1RxNdovzwiwWssEtnvJsKZs0ecnBoC6kO&sz=w800",
      "https://drive.google.com/thumbnail?id=1_sEvZgngxEKdcx_V43w08E6RlFuc86GN&sz=w800",
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "21",
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
    "id": "22",
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
    "id": "23",
    "title": "2 Storey Terrace House",
    "address": "No. 33, Lorong Kulim, Di Jalan Meru, 41050 Klang, Selangor",
    "postcode": "41050",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 430000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "593 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1wrO8lVmNVkP2VimxUQNl9OO1888FmeAN&sz=w800"
    ]
  },
  {
    "id": "24",
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
    "id": "25",
    "title": "3 Storey Detached House",
    "address": "No. 11A, Jalan PJU 7/22E, Mutiara Damansara, 47800 Petaling Jaya, Selangor",
    "postcode": "47800",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 5550000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "317 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1cGC6mujzMqVouiYDXXLvHiY5pP3acqss&sz=w800"
    ]
  },
  {
    "id": "26",
    "title": "2 Storey Terrace House",
    "address": "No. 4, Jalan Gambus 1, Kawasan 3, Taman Desawan, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 580000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1foz1a8FcehIsY3_oVXw5i_0410HynSf-&sz=w800"
    ]
  },
  {
    "id": "27",
    "title": "2 Storey Terrace House",
    "address": "No. 23, Lorong Naluri Sukma 8/14, Seksyen 8, Bandar Puncak Alam, 42300 Puncak Alam, Selangor",
    "postcode": "42300",
    "state": "Selangor",
    "area": "Puncak Alam",
    "reservePrice": 410000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "621 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1v_OOPkZy5JC8lAxE3De4ZK6RUdt-1c3-&sz=w800"
    ]
  },
  {
    "id": "28",
    "title": "2 Storey Terrace House",
    "address": "No. 1, Jalan Sentosa Villa 1/5, Sentosa Villas @ Kajang, Taman Sentosa Villa, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 657000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "916 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1dAkbLnxHCReiFzBjSU6MrS3V5lhR9rFB&sz=w800"
    ]
  },
  {
    "id": "29",
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
    "id": "30",
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
    "id": "31",
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
    "id": "32",
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
    "id": "33",
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
    "id": "34",
    "title": "1 Storey Terrace House",
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
    "id": "35",
    "title": "2.5 Storey Terrace House",
    "address": "No. 7, Jalan BB 6/1, Taman Banting Baru, 42700 Banting, Selangor",
    "postcode": "42700",
    "state": "Selangor",
    "area": "Banting",
    "reservePrice": 600000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1ulmtT3Cb6qCXiH6-XnQfYeKoMhzEDlEj&sz=w800"
    ]
  },
  {
    "id": "36",
    "title": "2 Storey Semi Detached House",
    "address": "No. 7, Jalan TH 3/1, Tiara Heights, 43900 Sepang, Selangor",
    "postcode": "43900",
    "state": "Selangor",
    "area": "Sepang",
    "reservePrice": 544000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "035 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1fhg19QFMQODSkPM4ITAnzlOLlI2mI88e&sz=w800"
    ]
  },
  {
    "id": "37",
    "title": "1 Storey Terrace House",
    "address": "No. R22, Jalan Kelubi, Taman Kota, Sungai Rambai, 42600 Jenjarom, Selangor",
    "postcode": "42600",
    "state": "Selangor",
    "area": "Jenjarom",
    "reservePrice": 270000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "679 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1OVWLZ7RZfly44KYUC8v-GAY-HW9XqSx1&sz=w800"
    ]
  },
  {
    "id": "38",
    "title": "2 Storey Terrace House",
    "address": "No. 9, Jalan Persiaran Minang 6, Taman Minang (Fasa 2), 56000 Cheras, Selangor",
    "postcode": "56000",
    "state": "Selangor",
    "area": "Cheras",
    "reservePrice": 437400,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "647 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xjEpih9RzGNwNUsBr4mLodvl7uynrOlm&sz=w800"
    ]
  },
  {
    "id": "39",
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
    "id": "40",
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
    "id": "41",
    "title": "Service Apartment",
    "address": "Unit No. L27-02, 27th Floor, Residensi Convena (JRK Convena), Jalan 9/155, 58200, Kuala Lumpur",
    "postcode": "58200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 352000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "732 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1SgDPqR5bzKBYuTGeG5_HmW7MRbgGBaxQ&sz=w800"
    ]
  },
  {
    "id": "42",
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
      "https://drive.google.com/thumbnail?id=14Z3fWLTYnlnwL1A6F1ZiaPt7RuO6wgpw&sz=w800",
      "https://drive.google.com/thumbnail?id=18apNgPE5bMAoRNa-V81gYFK1lCHC68TH&sz=w800"
    ]
  },
  {
    "id": "43",
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
    "id": "44",
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
      "https://drive.google.com/thumbnail?id=12pmSRootCoQKJnNLafIv6TwO48KuR59p&sz=w800",
      "https://drive.google.com/thumbnail?id=1l1-LhmGUDlY9XLnRNu2Oe6NQ6iQaVT7u&sz=w800"
    ]
  },
  {
    "id": "45",
    "title": "2 Storey Terrace House",
    "address": "No. 39, Jalan Frekuensi U16/126B, Elmina East, Seksyen U16, 40160 Shah Alam, Selangor",
    "postcode": "40160",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 828000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "063 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1v-a3jqK90_lxShG8RxuaStN3Nvj-77RO&sz=w800"
    ]
  },
  {
    "id": "46",
    "title": "2 Storey Cluster House",
    "address": "No. 42, Lorong Lautan Samudera 9/16, Seksyen 9, 42300 Bandar Puncak Alam, Selangor",
    "postcode": "42300",
    "state": "Selangor",
    "area": "Bandar Puncak Alam",
    "reservePrice": 360000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "501 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1SHjT8Lm0wCqWSfZEbrP-RGX_pcbU5DL_&sz=w800"
    ]
  },
  {
    "id": "47",
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
    "id": "48",
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
    "id": "49",
    "title": "1 Storey Terrace House",
    "address": "No. 5, Lengkuk Sungai Keramat 8, Taman Klang Utama, 42100 Klang, Selangor",
    "postcode": "42100",
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
    "id": "50",
    "title": "2 Storey Semi Detached House",
    "address": "No. 5, Jalan Kemuning Permai 33/42G, Taman Kemuning Utama, Seksyen 33, 40400 Shah Alam, Selangor",
    "postcode": "40400",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 2300000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "020 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1IX3bxobijt9d4g7ivbyo_2VBUwf2ce6e&sz=w800"
    ]
  },
  {
    "id": "51",
    "title": "2 Storey Terrace House",
    "address": "No. 53, Jalan Sierra 2/8, Bandar 16 Sierra, 47120 Puchong, Selangor",
    "postcode": "47120",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 855000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "765 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=11bGfpY_EWKoCOFk52XjL8qR88HYBcaO-&sz=w800",
      "https://drive.google.com/thumbnail?id=1dEn_UzH11WNKRJv7YMJJZ2rTqkcKYfGD&sz=w800",
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "52",
    "title": "2.5 Storey Semi Detached Cluster House",
    "address": "No. 24, Jalan BRP 2/1H, Bukit Rahman Putra, 40160 Shah Alam, Selangor",
    "postcode": "40160",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 2250000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "176 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1XbZwTarx1ypg2hC0GxdrMeehnj8gESBe&sz=w800"
    ]
  },
  {
    "id": "53",
    "title": "2 Storey Terrace House",
    "address": "No. 32, Jalan Pulau Indah U10/57B, Subang Impian, Seksyen U10, 40170 Shah Alam, Selangor",
    "postcode": "40170",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 500000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "000 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1ypi06FYodVJYBPGHsQUvmoXq0fHkkMDb&sz=w800"
    ]
  },
  {
    "id": "54",
    "title": "2 Storey Terrace House",
    "address": "Jalan Cassia U17/88A, Elmina West, Seksyen U17, 40170, Shah Alam, Selangor",
    "postcode": "40170",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 1380000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "100 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1vwVE2oxjXSLHkvNabZnlVyrINYZs5Le_&sz=w800"
    ]
  },
  {
    "id": "55",
    "title": "2 Storey Terrace House",
    "address": "No. 2, Jalan DC 1/23, Desa Coalfields, 47000 Sungai Buloh, Selangor",
    "postcode": "47000",
    "state": "Selangor",
    "area": "Sungai Buloh",
    "reservePrice": 650000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "799 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1ztCSTHq6KRDNqSHN4GYQLNtqhZxxM-Sq&sz=w800"
    ]
  },
  {
    "id": "56",
    "title": "2.5 Storey Semi Detached House",
    "address": "No. 2 (on-site is C2), Jalan Balau, Villa Kristal Heights, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 2580000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "252 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Y2CRGTgnP5B_Xgdvl9N3gvpDdDRqYrR1&sz=w800"
    ]
  },
  {
    "id": "57",
    "title": "2 Storey Bungalow House",
    "address": "No. 3, Jalan Jeram Empat 8/22D, Seksyen 8, 40000 Shah Alam, Selangor",
    "postcode": "40000",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 2340000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "647 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Pt5pmSYSxHduHrFIV3CRvYIuM7RIP0IY&sz=w800"
    ]
  },
  {
    "id": "58",
    "title": "2 Storey Terrace House",
    "address": "No. 11, Jalan Bukit Ria 7, Taman Bukit Ria, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 408240,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1X3zOc77fBuGau_fPvOMooEQLR2t_948z&sz=w800"
    ]
  },
  {
    "id": "59",
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
      "https://drive.google.com/thumbnail?id=1PGPCvCNGL_SDWCXw7ciboiqABGaBzvsT&sz=w800",
      "https://drive.google.com/thumbnail?id=1ykLqMeXx5oMRlAFD-oL4uHLOG_fFQBmN&sz=w800"
    ]
  },
  {
    "id": "60",
    "title": "2 Storey Terrace House",
    "address": "No. 58, Lorong Dato Dagang 50B/KS7, Taman Sentosa, 41200 Klang, Selangor",
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
    "id": "61",
    "title": "1.5 Storey Terrace House",
    "address": "No. 65, Jalan Cemperaisari 1B, Bandar Sungai Buaya, 48010 Rawang, Selangor",
    "postcode": "48010",
    "state": "Selangor",
    "area": "Rawang",
    "reservePrice": 300000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "647 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1IlQV0QEslfqvifVn3E3X0xNzXvi1cT2j&sz=w800"
    ]
  },
  {
    "id": "62",
    "title": "Apartment",
    "address": "Unit No. C-3-01, Block C, Pangsapuri Cempaka, Bandar Bukit Puchong 2, 47120 Puchong, Selangor",
    "postcode": "47120",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 150000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "667 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1m6qErKsyxM4DyZNEr3s_zYnWaHu367FS&sz=w800"
    ]
  },
  {
    "id": "63",
    "title": "Condominium",
    "address": "Unit No. C-3-3, Block C, Unipark Condominium, Jalan US 1, Off Jalan Ikram-Uniten, Taman Unipark Suria, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 320000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1WLxGQqFGlUc0aUXDliGxckWzBF-2THJ6&sz=w800"
    ]
  },
  {
    "id": "64",
    "title": "Condominium",
    "address": "Unit No. C-03-02, Block C (Carallia), Residensi Bayu 1 (Brezza One Residency), Jalan Bayu Utama, Bukit Ampang Permai, 68000 Ampang, Selangor",
    "postcode": "68000",
    "state": "Selangor",
    "area": "Ampang",
    "reservePrice": 360000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "073 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1bgVIzEmE7AtbCKCNxGoAn8BazWp9zjF2&sz=w800",
      "https://drive.google.com/thumbnail?id=1MjWT-OiV_zi1HW_Sn6mQ7Ad9dAfgk3EI&sz=w800"
    ]
  },
  {
    "id": "65",
    "title": "Condominium",
    "address": "Unit No. A-15-2, 15th Floor, Block A, V-Residensi @ Selayang Heights, Persiaran Selayang Heights, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 259200,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1qk2sdELsK6kUUxSVSI9lHpMG4dUXQyMD&sz=w800",
      "https://drive.google.com/thumbnail?id=1uSDY2bEfk0ZwuQIoxgYpUcGEMuthEDyb&sz=w800",
      "https://drive.google.com/thumbnail?id=1IfddANEQ_CXGFnHZ2abgr4w2aOqk8wcT&sz=w800",
      "https://drive.google.com/thumbnail?id=1AzPEWrutarGYHc3Mu_6Hpw-88COAZsV1&sz=w800"
    ]
  },
  {
    "id": "66",
    "title": "Duplex Condominium",
    "address": "Unit No. B-5-1, Block B, Armanee Condominium, Jalan PJU 10/1C, Damansara Damai, 47830 Petaling Jaya, Selangor",
    "postcode": "47830",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 430000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "645 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Hkgr-q6lD0aeLssIyKcnI83LTil10odY&sz=w800"
    ]
  },
  {
    "id": "67",
    "title": "Apartment",
    "address": "Unit No. A-02-07, Block A, Residensi Bukit Tiara, Jalan Karunmas 10, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 320000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "904 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=12ECJempC_erWbPa3MlkepEK4q4ip5nRZ&sz=w800"
    ]
  },
  {
    "id": "68",
    "title": "Apartment",
    "address": "Unit No. C-3-08, Rumah Pangsa Rampai Idaman, Jalan PJU 10/9, Prima Damansara, 47830 Petaling Jaya, Selangor",
    "postcode": "47830",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 120000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "657 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Pm6CYM327h41NjqdJhNKHZy2lDME5-9B&sz=w800"
    ]
  },
  {
    "id": "69",
    "title": "Condominium",
    "address": "Unit No. A-10-7, Tower A, Mutiara Hilltop Puchong, Jalan Mutiara 2, Taman Mutiara Indah, 47100 Puchong, Selangor",
    "postcode": "47100",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 500000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "044 sq.ft",
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
    "id": "70",
    "title": "SOHO",
    "address": "Unit No. B-12-12, 12th Floor, Block B, Kiara Plaza, Jalan Semenyih, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 130000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "476 sq.ft",
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
    "id": "71",
    "title": "Apartment",
    "address": "Unit No. 24-G-05, Block 24, Rista Villa Apartment, Taman Putra Perdana, 47130 Puchong, Selangor",
    "postcode": "47130",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 115200,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "606 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1ySEads1NNZ1Dt2w-7XhM0Jp6TpRLDZrr&sz=w800",
      "https://drive.google.com/thumbnail?id=1bEUD4d8ZeVYIALtp-eeSPjgBOywDE0An&sz=w800",
      "https://drive.google.com/thumbnail?id=1MfB8JcWpHl8fIpUD3pOONbwMRGS42eWb&sz=w800",
      "https://drive.google.com/thumbnail?id=1lv5UvV1pjIXtZVEMJrvaMMh6m4Z3m6Uy&sz=w800"
    ]
  },
  {
    "id": "72",
    "title": "Apartment",
    "address": "Unit No. B-G-05, Ground Floor, Block B, Jalan Sabha Impian 3, Taman Sabha Impian, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 223200,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "901 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Aq5TLkBTDtsiuGWTOtiy5i3U4hYA7zec&sz=w800"
    ]
  },
  {
    "id": "73",
    "title": "Flat",
    "address": "Unit No. A5-4-45, Block A5, Jalan Permai 1/2, Taman Puchong Permai, 47100 Puchong, Selangor",
    "postcode": "47100",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 120000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "581 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1AqEchBl9hC-TQCrPj3mjzYen4qoo6ixa&sz=w800"
    ]
  },
  {
    "id": "74",
    "title": "3 Storey Terrace House",
    "address": "No. 1, Jalan Diamond 2, Diamond Residence, 43500 Semenyih, Selangor",
    "postcode": "43500",
    "state": "Selangor",
    "area": "Semenyih",
    "reservePrice": 548000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "288 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HqtXddoAq0_15AdSKlu_zZkcZDbfZ3AT&sz=w800"
    ]
  },
  {
    "id": "75",
    "title": "Perkasa Apartment",
    "address": "Unit No. 18-3A, Apartment Perkasa, Jalan 15/1F, Seksyen 15, 43560 Bandar Baru Bangi, Selangor",
    "postcode": "43560",
    "state": "Selangor",
    "area": "Bandar Baru Bangi",
    "reservePrice": 94482,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "807 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1wH6f6e4G-N_nawrXOs25rggM4ls-BQg7&sz=w800"
    ]
  },
  {
    "id": "76",
    "title": "Apartment",
    "address": "Unit No. 7- 46-C, Impian Sentosa, Jalan Dato Dagang 6, Taman Sentosa, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 240000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "753 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1BuK-9xg81wFtQYs_La2mdTLgAnqKWtI4&sz=w800"
    ]
  },
  {
    "id": "77",
    "title": "2 Storey Terrace House",
    "address": "No. 29, Jalan Frekuensi U16/119, Elmina East, Seksyen U16, 40160 Shah Alam, Selangor",
    "postcode": "40160",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 729000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "063 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1v-a3jqK90_lxShG8RxuaStN3Nvj-77RO&sz=w800"
    ]
  },
  {
    "id": "78",
    "title": "Green Acre Park Condominium",
    "address": "Unit No. A2-2-2, 2nd Floor, Block A2, Green Acre Condominium, Jalan Sungai Long, Bandar Sungai Long, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 283500,
    "auctionDate": "4 Aug 2026 (Tue)",
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
    "id": "79",
    "title": "1 Storey Terrace House",
    "address": "No. 51, Lorong Dato Dagang 26B, Taman Sentosa, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 360000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "300 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Gu0_g_yYCidwKXv8mCwVxgtgmAxWjR1e&sz=w800"
    ]
  },
  {
    "id": "80",
    "title": "Condominium",
    "address": "Unit No. PL-18-14, Laksamana Puri Condominium, Jalan Laksamana 5, Kampung Laksamana Jaya, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 204120,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "915 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1MVxAsiJ-etzfM3Uf2sCq7exbWxy5Ugjs&sz=w800"
    ]
  },
  {
    "id": "81",
    "title": "3 Storey Semi Detached House",
    "address": "No. 46, Jalan Setia Perdana U13/30A, Setia Alam, 40170, Shah Alam, Selangor",
    "postcode": "40170",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 2600000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "004 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J58iL_Y1YlW1IST5gGOxggsg0A7NiHQM&sz=w800"
    ]
  },
  {
    "id": "82",
    "title": "Office Unit",
    "address": "Unit No. G-03-03A, Blok G, Pejabat Radia, Persiaran Arked, Bukit Jelutong, Seksyen U8, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 540000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "087 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1znKJVAjjGI0pXc5bmFl919dsOHsifRfo&sz=w800"
    ]
  },
  {
    "id": "83",
    "title": "2 Storey Terrace House",
    "address": "No. 82A, Jalan Pending 7, Bandar Puteri, 41200 Klang, Selangor",
    "postcode": "41200",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 520000,
    "auctionDate": "4 Aug 2026 (Tue)",
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
    "title": "1 Storey Terrace House",
    "address": "No. 11, Jalan Sungai Gong 27/78, Taman Alam Megah, Seksyen 27, 40400 Shah Alam, Selangor",
    "postcode": "40400",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 420000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "650 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=14cR_mrXDLPFproq9EyKAiN3LY4fJDXlg&sz=w800"
    ]
  },
  {
    "id": "85",
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
    "id": "86",
    "title": "Apartment",
    "address": "Unit No. B-06-15, Block B, Lake View Apartment, Taman Jasa Perwira, Off Jalan Sungai Tua, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 320000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "871 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=14eL66B2POSL5Zm4XkRHAUFx-YtKQzkKi&sz=w800"
    ]
  },
  {
    "id": "87",
    "title": "Condominium",
    "address": "Unit No. A-5-1, Vista Hijauan, Bandar Sungai Long, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 380000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "356 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1z_XYqa208-GNWY_ZkI1M0umiMUedfX9m&sz=w800"
    ]
  },
  {
    "id": "88",
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
    "id": "89",
    "title": "2.5 Storey Semi Detached House",
    "address": "No. 1, Jalan MA 1, Taman Meranti Aman (Bayu), 47120 Puchong, Selangor",
    "postcode": "47120",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 721710,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "714 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1qz1Usd1HG0dyWMRoWxfsabWtwZk7D8SL&sz=w800",
      "https://drive.google.com/thumbnail?id=1tvIDFgs4yaCRdd5zdDL1kNnehbksoBqi&sz=w800",
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "90",
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
      "https://drive.google.com/thumbnail?id=18npMBm6xb4YOcexL1WgV3Xsuyomf37Cz&sz=w800"
    ]
  },
  {
    "id": "91",
    "title": "Terrace House",
    "address": "No. 2, Jalan Pulau Angsa U10/33C, Bandar Nusa Rhu, Seksyen U10, 40170 Shah Alam, Selangor",
    "postcode": "40170",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 810000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "880 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1M8tTtmc4CFcKcL1Ql3GKXHHjyjWd3Mqa&sz=w800"
    ]
  },
  {
    "id": "92",
    "title": "Apartment",
    "address": "Unit No. L6-5-12, Pangsapuri Pendekar, Jalan Tun Perak 1, Taman Tun Perak, 43200 Cheras, Selangor",
    "postcode": "43200",
    "state": "Selangor",
    "area": "Cheras",
    "reservePrice": 87480,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "667 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=13-e1xcDSt38KnqeCacXmmYNhUXhl5s_1&sz=w800"
    ]
  },
  {
    "id": "93",
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
    "id": "94",
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
    "id": "95",
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
    "id": "96",
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
      "https://drive.google.com/thumbnail?id=135fqF5KK7jHD0mbiB4qyUT6wD9FsDsiy&sz=w800",
      "https://drive.google.com/thumbnail?id=1y_wIM5CM4CJGG0bTkv0rCF6_EK6BP170&sz=w800"
    ]
  },
  {
    "id": "97",
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
      "https://drive.google.com/thumbnail?id=1VhqXFFZCPA_mMxqJhDfLdNRRDway0I7T&sz=w800",
      "https://drive.google.com/thumbnail?id=1-QkrmQcBM7aS_Q6rFKbEHQ-5vcxZw0bs&sz=w800"
    ]
  },
  {
    "id": "98",
    "title": "4 Storey Building with 5 units shop & 15 units Apartment",
    "address": "No. 160, Jalan Raja Abdullah, 53000, Kampung Baru, Kuala Lumpur",
    "postcode": "53000",
    "state": "Kuala Lumpur",
    "area": "Kampung Baru",
    "reservePrice": 16000000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "727 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VhA-cbsUN_0IyQSEtXSW_H8P3rlMKGrR&sz=w800"
    ]
  },
  {
    "id": "99",
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
    "id": "100",
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
    "id": "101",
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
    "id": "102",
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
      "https://drive.google.com/thumbnail?id=1bloJO_NLEZOgEH5hvG7dsxAuS7qu8zju&sz=w800",
      "https://drive.google.com/thumbnail?id=12ruCYeGsk3GkYlUTZvVnMDWBgKhQQu7u&sz=w800"
    ]
  },
  {
    "id": "103",
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
    "id": "104",
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
    "id": "105",
    "title": "Shop Unit",
    "address": "Unit No.286-00-01, Heritage Condominium, Jalan Pahang, 53000, Kuala Lumpur",
    "postcode": "53000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 210600,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "872 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1Zp96m3_XxhVNQfzaLrXmemb9yq5Sdu-G&sz=w800"
    ]
  },
  {
    "id": "106",
    "title": "Condominium",
    "address": "Intan Kenny Condominium, Persiaran Bukit Tunku, Bukit Tunku, 50480, Kuala Lumpur",
    "postcode": "50480",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 1290000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "347 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1NF4TBdbYCvk2kO8J_gsOFEHQoUIavLPI&sz=w800"
    ]
  },
  {
    "id": "107",
    "title": "Condominium",
    "address": "Unit No. A-36-03, The Pearl@KLCC, Jalan Stonor, 50450, Kuala Lumpur",
    "postcode": "50450",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 1539000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "089 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1n06gSJNRWUMN_fJeJY1dHOokM3pJPEFH&sz=w800"
    ]
  },
  {
    "id": "108",
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
      "https://drive.google.com/thumbnail?id=1ZWhG2xyQrIwzTutQFkBr9t8dj4yrfxsA&sz=w800",
      "https://drive.google.com/thumbnail?id=1CcLsmBVY88VWgBntyV9c4mgtoWJnvKCC&sz=w800"
    ]
  },
  {
    "id": "109",
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
    "id": "110",
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
      "https://drive.google.com/thumbnail?id=1COapnoakavW6bb77QzU2h-UYaySpdb2L&sz=w800"
    ]
  },
  {
    "id": "111",
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
      "https://drive.google.com/thumbnail?id=12YbwTEDdP8Z934lPBCkePUdhWxwL4ZuG&sz=w800"
    ]
  },
  {
    "id": "112",
    "title": "Service Apartment",
    "address": "Unit No. C-39-06, Mercu Kenwingston, No. 81, Jalan Gombak, 53000, Kuala Lumpur",
    "postcode": "53000",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 265500,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "657 sq.ft",
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
    "id": "113",
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
    "id": "114",
    "title": "Apartment",
    "address": "Unit No. B-05-02, Desa Idaman, Jalan Prima Utama 1, Taman Puchong Prima, 47150 Puchong, Selangor",
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
    "id": "115",
    "title": "2 Storey Terrace Cluster House",
    "address": "No. 17, Lorong Hulubalang 9/KS07, Taman Sentosa, 41200 Klang, Selangor",
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
    "id": "116",
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
    "id": "117",
    "title": "Apartment",
    "address": "Unit No. B2-8-43, Block 2, Jalan PJS 6/5G, Desa Mentari, 46000 Petaling Jaya, Selangor",
    "postcode": "46000",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 135000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "657 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1YTf_-8Y7BCjDQSS7e2xXVzemvSHgk2Xn&sz=w800"
    ]
  },
  {
    "id": "118",
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
    "id": "119",
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
    "id": "120",
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
    "id": "121",
    "title": "2 Storey Terrace House",
    "address": "No. 4, Jalan Hijau 11/7, Bandar Tasik Puteri, 48020 Rawang, Selangor",
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
    "id": "122",
    "title": "Apartment",
    "address": "Unit No. E-4-001, Block E, Pangsapuri Seri Melati, Jalan Seri Putra 3/1, Bandar Seri Putra, 43000 Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 153000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "786 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1tQ96vfeQRg2dv1UaDRPmo0yGuZ9uh_ak&sz=w800"
    ]
  },
  {
    "id": "123",
    "title": "2.5 Storey Detached House",
    "address": "No. 3, Jalan UP 3/7, Taman Ukay Perdana, 68000 Ampang, Selangor",
    "postcode": "68000",
    "state": "Selangor",
    "area": "Ampang",
    "reservePrice": 1350000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "862 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1BUk0Mg2yPVA7aYrexgiDzqhwg6jr_fnQ&sz=w800"
    ]
  },
  {
    "id": "124",
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
      "https://drive.google.com/thumbnail?id=1ZMgF1rIL7csPb_ZeZR5i3JkjV41S3WXP&sz=w800",
      "https://drive.google.com/thumbnail?id=1HuyoCkv4XvZ42ENRLxS4hRgUttN-WG2w&sz=w800"
    ]
  },
  {
    "id": "125",
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
    "id": "126",
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
    "id": "127",
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
    "id": "128",
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
      "https://drive.google.com/thumbnail?id=1Qu7Y8--u--bPlc7i1weT7KfLrX2XzLOT&sz=w800",
      "https://drive.google.com/thumbnail?id=1Qpf7VtTiwnifXr3o7Ujapjicl78tdC5h&sz=w800"
    ]
  },
  {
    "id": "129",
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
    "id": "130",
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
    "id": "131",
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
    "id": "132",
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
    "id": "133",
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
    "id": "134",
    "title": "Apartment",
    "address": "Unit No. A6-16, Pangsapuri Penaga Mas, Jalan Pinggiran Mas 1, Taman Mas, 47130 Puchong, Selangor",
    "postcode": "47130",
    "state": "Selangor",
    "area": "Puchong",
    "reservePrice": 162000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "850 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1RlVnaRUVDsLzx8GjQd9jP-qcNkmQNej-&sz=w800",
      "https://drive.google.com/thumbnail?id=1qTuhbf85NCQQNMAJrRsqnOsOrbo9cMr3&sz=w800",
      "https://drive.google.com/thumbnail?id=10krEZq0rmmOQCnocwIG-XyunEE9uhZ7X&sz=w800"
    ]
  },
  {
    "id": "135",
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
    "id": "136",
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
    "id": "137",
    "title": "Residential Land",
    "address": "Lot 4656, Mukim Of Dengkil, Sepang, Selangor",
    "postcode": "",
    "state": "Selangor",
    "area": "Sepang",
    "reservePrice": 1500000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1a3M-6MYm0IVtupTi6DyoLgMNOxlpugs3&sz=w800"
    ]
  },
  {
    "id": "138",
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
    "id": "139",
    "title": "Apartment",
    "address": "Unit No. D-4-11, Pangsapuri Golden Height, Jalan Pinggiran Mas 2, Taman Mas, 47130 Puchong, Selangor",
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
      "https://drive.google.com/thumbnail?id=1tIZsLbVrYl3CmEsUiWcNmqED8L6ZULZZ&sz=w800"
    ]
  },
  {
    "id": "140",
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
      "https://drive.google.com/thumbnail?id=1GyURExX9hcEwNG84xMvFAmSf-bmgvGSy&sz=w800"
    ]
  },
  {
    "id": "141",
    "title": "Office Unit",
    "address": "Unit No. C-01-07, Block C, Sfera Residensi, Jalan Atmosphere Utama 1, Bandar Putra Permai, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 1080000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "823 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1d_kfRcAXQRY8mtdkkVFFJ0PzqQJFEcnB&sz=w800",
      "https://drive.google.com/thumbnail?id=1zRrOI_17eYWOI1af2pO75aFDaUVEMrrw&sz=w800"
    ]
  },
  {
    "id": "142",
    "title": "SOHO",
    "address": "Unit No. 20-18, Residensi 280, 1KM Lebuhraya Selayang-Kepong, 68100 Batu Caves, Selangor",
    "postcode": "68100",
    "state": "Selangor",
    "area": "Batu Caves",
    "reservePrice": 266400,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "840 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=10wSucDVtCeG_VDpidPhgey34RvBtWCkY&sz=w800",
      "https://drive.google.com/thumbnail?id=1Fx0ConyozHp-gmm8YAz2yJRGiJEBUzVO&sz=w800",
      "https://drive.google.com/thumbnail?id=1aDv--6Nn1zetM24n_hhRcBHxPIym15p_&sz=w800",
      "https://drive.google.com/thumbnail?id=1_CaXiRHgT8Zz9IfDv3gy8jwej3Z2uCDY&sz=w800",
      "https://drive.google.com/thumbnail?id=1EqRQ8rAHFoxcK2v4M8Pup7w57_su1C4J&sz=w800"
    ]
  },
  {
    "id": "143",
    "title": "Apartment",
    "address": "Unit No. B-8-5, Vista Hijauan, Bandar Sungai Long (R/Pangsa), 43000, Kajang, Selangor",
    "postcode": "43000",
    "state": "Selangor",
    "area": "Kajang",
    "reservePrice": 380000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "356 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1z_XYqa208-GNWY_ZkI1M0umiMUedfX9m&sz=w800"
    ]
  },
  {
    "id": "144",
    "title": "Apartment",
    "address": "Unit No. 51-5-509, RP Kos Rendah, Seksyen 7, 40000 Shah Alam, Selangor",
    "postcode": "40000",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 171000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "667 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1KQ9dsjb-pPA01ipGu4UBxcEsclkdzqpg&sz=w800"
    ]
  },
  {
    "id": "145",
    "title": "1 Storey Terrace House",
    "address": "No. 9, Jalan Meranti Putih 18A/KU10, Taman Desa Permai, 41050 Klang, Selangor",
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
    "id": "146",
    "title": "1 Storey Terrace House",
    "address": "No. 33, Jalan Raja Nala 16, Taman Intan Jaya, 42200 Kapar, Selangor",
    "postcode": "42200",
    "state": "Selangor",
    "area": "Kapar",
    "reservePrice": 387000,
    "auctionDate": "7 Aug 2026 (Fri)",
    "landArea": "—",
    "builtUp": "088 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1dCLoD2uN7VvZq8YNzb7LmMGare3WUai9&sz=w800"
    ]
  },
  {
    "id": "147",
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
    "id": "148",
    "title": "2 Storey Terrace House",
    "address": "No. 23, Jalan Panglima Awang 35/126B, Alam Impian, Seksyen 35, 40470 Shah Alam, Selangor",
    "postcode": "40470",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 720000,
    "auctionDate": "7 Aug 2026 (Fri)",
    "landArea": "—",
    "builtUp": "640 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1pFgFQKWwZae7LneXF9-b6FApODwZZ_05&sz=w800"
    ]
  },
  {
    "id": "149",
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
    "id": "150",
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
      "https://drive.google.com/thumbnail?id=12pjIV34LK2JZzyXjXKQyA4ggb5lthESN&sz=w800"
    ]
  },
  {
    "id": "151",
    "title": "1 Storey Semi Detached House",
    "address": "PT 153988 (No. 10), Lorong Masjid Sultan 28/KS13, Kampung Perigi Nenas, Pulau Indah, 42920 Pelabuhan Klang, Selangor",
    "postcode": "42920",
    "state": "Selangor",
    "area": "Pelabuhan Klang",
    "reservePrice": 400000,
    "auctionDate": "7 Aug 2026 (Fri)",
    "landArea": "—",
    "builtUp": "723 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JA_xNqkYp7s1FAR87pIW8y1E2YnPKDfj&sz=w800"
    ]
  },
  {
    "id": "152",
    "title": "Apartment",
    "address": "Unit No. 7A-F2-07, Pangsapuri Pendamar A, Jalan Pendamaran/KS5, 42000 Port Klang, Selangor",
    "postcode": "42000",
    "state": "Selangor",
    "area": "Port Klang",
    "reservePrice": 15300,
    "auctionDate": "7 Aug 2026 (Fri)",
    "landArea": "—",
    "builtUp": "657 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1DMJyEHahia63C47k4j8w0AIqevu3ZIcL&sz=w800"
    ]
  },
  {
    "id": "153",
    "title": "1 Storey Terrace House",
    "address": "No. 41, Jalan 8E/KU4, Taman Sri Rantau, Rantau Panjang, 42100 Klang, Selangor",
    "postcode": "42100",
    "state": "Selangor",
    "area": "Klang",
    "reservePrice": 370000,
    "auctionDate": "7 Aug 2026 (Fri)",
    "landArea": "—",
    "builtUp": "184 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1DEf7_q31cCrPxw7HjU_ZAGs2KEJOvNBy&sz=w800"
    ]
  },
  {
    "id": "154",
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
    "id": "155",
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
    "id": "156",
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
    "id": "157",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xSzcv6dLwDLyx1tbgMPusGfjrYfTTfU7&sz=w800"
    ]
  },
  {
    "id": "158",
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
    "id": "159",
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
    "id": "160",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Wydo3NbRxKt4wjYIRencX8M0mKaz2fEf&sz=w800"
    ]
  },
  {
    "id": "161",
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
    "id": "162",
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
    "id": "163",
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
    "id": "164",
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
    "id": "165",
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
    "id": "166",
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
    "id": "167",
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
    "id": "168",
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
    "id": "169",
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
    "id": "170",
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
    "id": "171",
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
    "id": "172",
    "title": "Cluster Town House",
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
    "id": "173",
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
    "id": "174",
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
    "id": "175",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1YwYt-GaLdUyNg3MM6fk34umwpTQM1LBU&sz=w800"
    ]
  },
  {
    "id": "176",
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
    "id": "177",
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
    "id": "178",
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
    "id": "179",
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
    "id": "180",
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
    "id": "181",
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
    "id": "182",
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
    "id": "183",
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
      "https://drive.google.com/thumbnail?id=106vlM-eqBtTwhcaO6Ii01OFCkVdyYy98&sz=w800",
      "https://drive.google.com/thumbnail?id=1xuSMv8JjR_Nq_CLmhD6o98RKt2ELpKJZ&sz=w800"
    ]
  },
  {
    "id": "184",
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
    "id": "185",
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
    "id": "186",
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
    "id": "187",
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
    "id": "188",
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
    "id": "189",
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
    "id": "190",
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
    "id": "191",
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
    "id": "192",
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
    "id": "193",
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
    "id": "194",
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
    "id": "195",
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
    "id": "196",
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
    "id": "197",
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
    "id": "198",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1TkLmOb2XSqNglXYDC0iox-D1hyaZ1pvF&sz=w800"
    ]
  },
  {
    "id": "199",
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
    "id": "200",
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
    "id": "201",
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
    "id": "202",
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
    "id": "203",
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
    "id": "204",
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
    "id": "205",
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
    "id": "206",
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
    "id": "207",
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
    "id": "208",
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
    "id": "209",
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
    "id": "210",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1wsF_6_CXR0UpTAjqwXa8emFD_cJ99_8X&sz=w800"
    ]
  },
  {
    "id": "211",
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
    "id": "212",
    "title": "Condominium",
    "address": "Unit No. B- 18-05, Juta Mines Kondominium, Jalan Tanmin Permai 1, Balakong, 43300, Seri Kembangan, Selangor",
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
    "id": "213",
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
    "id": "214",
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
    "id": "215",
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
    "id": "216",
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
    "id": "217",
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
    "id": "218",
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
    "id": "219",
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
    "id": "220",
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
    "id": "221",
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
    "id": "222",
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
    "id": "223",
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
    "id": "224",
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
    "id": "225",
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
    "id": "226",
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
    "id": "227",
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
    "id": "228",
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
    "id": "229",
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
    "id": "230",
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
    "id": "231",
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
    "id": "232",
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
    "id": "233",
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
    "id": "234",
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
    "id": "235",
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
    "id": "236",
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
    "id": "237",
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
    "id": "238",
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
    "id": "239",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1IQ1UeXMqzHajj30hNoZbYwETqMCwHKld&sz=w800"
    ]
  },
  {
    "id": "240",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1NiI99xZcJIF5sModT8zW9C1h383nxvVP&sz=w800"
    ]
  },
  {
    "id": "241",
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
    "id": "242",
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
    "id": "243",
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
      "https://drive.google.com/thumbnail?id=1Az8yMIZPUmDjR6XFdzQWtykZRfce3vdz&sz=w800"
    ]
  },
  {
    "id": "244",
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
      "https://drive.google.com/thumbnail?id=1Ite2ucjGCRRU9sQSjckNfOrnUEOBPfGN&sz=w800"
    ]
  },
  {
    "id": "245",
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
    "id": "246",
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
    "id": "247",
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
    "id": "248",
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
    "id": "249",
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
    "id": "250",
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
    "id": "251",
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
    "id": "252",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1snZS_DBmFi0oS7r0BGK894v1AfQP1Ryb&sz=w800"
    ]
  },
  {
    "id": "253",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1snZS_DBmFi0oS7r0BGK894v1AfQP1Ryb&sz=w800"
    ]
  },
  {
    "id": "254",
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
    "id": "255",
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
    "id": "256",
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
    "id": "257",
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
    "id": "258",
    "title": "Apartment",
    "address": "Unit No. A-13A-12, Block A, Residensi Max Kolam Air, Jalan Kolam Air 6, Kasipillay, 51200, Kuala Lumpur",
    "postcode": "51200",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 300000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=17JY5B96ZdfJF68kcz3dxRsMmrACCnz15&sz=w800"
    ]
  },
  {
    "id": "259",
    "title": "Apartment",
    "address": "Unit No. 37-19, Pangsapuri Vista Danau Kota, Jalan Danau Saujana 1, Setapak, 53300, Kuala Lumpur",
    "postcode": "53300",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 300000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "818 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1VHiAUgUp5MTfQ5oaVfA04X0f6BI1IKRC&sz=w800"
    ]
  },
  {
    "id": "260",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1NiI99xZcJIF5sModT8zW9C1h383nxvVP&sz=w800"
    ]
  },
  {
    "id": "261",
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
    "id": "262",
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
    "id": "263",
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
    "id": "264",
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
    "id": "265",
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
    "id": "266",
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
    "id": "267",
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
    "id": "268",
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
    "id": "269",
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
    "id": "270",
    "title": "Condominium",
    "address": "Sunway Sutera Condominium, No. 2, Jalan Tropicana Utara, PJU 3, 47810 Sunway Damansara, Petaling Jaya, Selangor",
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
      "https://drive.google.com/thumbnail?id=1n4IrIMb7gadnp9MouY54bGzPXrgt7qxd&sz=w800"
    ]
  },
  {
    "id": "271",
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
      "https://drive.google.com/thumbnail?id=1vYxucqWlz3rxtqNZgBJvlTvG9sAEI3e-&sz=w800"
    ]
  },
  {
    "id": "272",
    "title": "Apartment",
    "address": "Unit No. M1-4-10, Pangsapuri Merak, Jalan Uranus U5/125, Seksyen U5, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 148050,
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
    "id": "273",
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
    "id": "274",
    "title": "1 Storey Terrace House",
    "address": "No. 2, Jalan PUJ 9/21, Taman Puncak Jalil, 43300 Seri Kembangan, Selangor",
    "postcode": "43300",
    "state": "Selangor",
    "area": "Seri Kembangan",
    "reservePrice": 650000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "900 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1NJZO4snLeKtiYGOCsCuAWMMmQzdxO9e0&sz=w800"
    ]
  },
  {
    "id": "275",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1BUk0Mg2yPVA7aYrexgiDzqhwg6jr_fnQ&sz=w800"
    ]
  },
  {
    "id": "276",
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
    "id": "277",
    "title": "Apartment",
    "address": "Unit No. D-4-21, Rumah Pangsa Rampai Idaman, Jalan PJU 10/9, Prima Damansara, 47830 Petaling Jaya, Selangor",
    "postcode": "47830",
    "state": "Selangor",
    "area": "Petaling Jaya",
    "reservePrice": 130000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Pm6CYM327h41NjqdJhNKHZy2lDME5-9B&sz=w800"
    ]
  },
  {
    "id": "278",
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
    "id": "279",
    "title": "Service Apartment",
    "address": "Unit No. F-03-03A, 3rd Floor, Blok F, Residensi Radia, No. 3, Persiaran Singgahsana, Bukit Jelutong, Seksyen U8, 40150 Shah Alam, Selangor",
    "postcode": "40150",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 390000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "695 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=10f3LczV84NW4G0eaUrPhyqZ4Zq5kixYL&sz=w800",
      "https://drive.google.com/thumbnail?id=1FAwl5xoV8EblNCWJnrUeJSwezsA03AFT&sz=w800"
    ]
  },
  {
    "id": "280",
    "title": "Apartment",
    "address": "Unit No. B-16-01, 16th Floor, Pangsapuri Kemuning Idaman, Persiaran Kemuning Damai, Seksyen 32, 40460 Shah Alam, Selangor",
    "postcode": "40460",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 250000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "807 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1OUMweMU_tJgsJeQafvpcUEWjhHzQsFLU&sz=w800"
    ]
  },
  {
    "id": "281",
    "title": "Condominium",
    "address": "Unit No. T5-01-01, 1st Floor, Tower 5, Lakefront Residence, Persiaran Semarak Api, Cyber 11, 63000 Cyberjaya, Selangor",
    "postcode": "63000",
    "state": "Selangor",
    "area": "Cyberjaya",
    "reservePrice": 450000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1QbPdhk6J-rIQ7eeOF-kMbMDoctr94l79&sz=w800",
      "https://drive.google.com/thumbnail?id=1LctoGf9GIVtLrWy3R67j7bn-RWLYGWzx&sz=w800",
      "https://drive.google.com/thumbnail?id=1JEFDYFWE4vg6P7sKlyt-gbCWwaXyNVAP&sz=w800"
    ]
  },
  {
    "id": "282",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1BUk0Mg2yPVA7aYrexgiDzqhwg6jr_fnQ&sz=w800"
    ]
  },
  {
    "id": "283",
    "title": "Apartment",
    "address": "Unit No. K7-L4-8, Rumah Pangsa Seri Kristana 7, Persiaran Seri Pristana 1, Seri Pristana, 47000 Sungai Buloh, Selangor",
    "postcode": "47000",
    "state": "Selangor",
    "area": "Sungai Buloh",
    "reservePrice": 90000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=15QpZP62XQA5W1o1VEcHyWujJH8KZuykf&sz=w800"
    ]
  },
  {
    "id": "284",
    "title": "Small Office Home Office (SOHO)",
    "address": "Unit No. 22-03, Alinea Suites, No. 1, Presint 2.8, Jalan Perdagangan 14/4, Seksyen 14, 40000 Shah Alam, Selangor",
    "postcode": "40000",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 250000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1noO5YJOaU5NLDOg4YzUsjki0wR73viDP&sz=w800"
    ]
  },
  {
    "id": "285",
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
    "id": "286",
    "title": "2 Storey Terrace House",
    "address": "Jalan B 12, Taman Melawati, 53100, Kuala Lumpur",
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
    "id": "287",
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
    "id": "288",
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
    "id": "289",
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
    "id": "290",
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
    "id": "291",
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
    "id": "292",
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
    "id": "293",
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
    "id": "294",
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
    "id": "295",
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
    "id": "296",
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
    "id": "297",
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
    "id": "298",
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
    "id": "299",
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
    "id": "300",
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
    "id": "301",
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
    "id": "302",
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
    "id": "303",
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
    "id": "304",
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
    "id": "305",
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
    "id": "306",
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
    "id": "307",
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
    "id": "308",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1bzG4NYOyKNgTP9D1rFsjHpYp3sooV4xS&sz=w800"
    ]
  },
  {
    "id": "309",
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
    "id": "310",
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
    "id": "311",
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
    "id": "312",
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
    "id": "313",
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
    "id": "314",
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
      "https://drive.google.com/thumbnail?id=1525A4qLDhxF0LuVG9qdbyZuZ6Ylhb6Dn&sz=w800"
    ]
  },
  {
    "id": "315",
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
    "id": "316",
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
    "id": "317",
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
    "id": "318",
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
    "id": "319",
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
    "id": "320",
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
    "id": "321",
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
    "id": "322",
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
    "id": "323",
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
    "id": "324",
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
    "id": "325",
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
    "id": "326",
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
    "id": "327",
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
    "id": "328",
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
    "id": "329",
    "title": "2 Storey Terrace House",
    "address": "No. 21, Jalan Kajang East 1/1, Kajang East, 43500 Semenyih, Selangor",
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
    "id": "330",
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
    "id": "331",
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
    "id": "332",
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
    "id": "333",
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
    "id": "334",
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
    "id": "335",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1qr5l97spmH_l0BIFX0k4lz00Qjl22pnI&sz=w800",
      "https://drive.google.com/thumbnail?id=1oxwM9fJvRgK-jrNHVi-ar5Rqe9H5kcuw&sz=w800",
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "336",
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
    "id": "337",
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
    "id": "338",
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
    "id": "339",
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
    "id": "340",
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
    "id": "341",
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
    "id": "342",
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
    "id": "343",
    "title": "2 Storey Terrace House",
    "address": "No. 56, Jalan Mawar 13C, Taman Mawar, Bandar Baru Salak Tinggi, 43900 Sepang, Selangor",
    "postcode": "43900",
    "state": "Selangor",
    "area": "Sepang",
    "reservePrice": 393660,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "939 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1DJD_i5ljGe2FfF8GxNqB6wWWiyP9GqEQ&sz=w800"
    ]
  },
  {
    "id": "344",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1DNQMThjOiEKMC8HP9j22d51OZ1CEAg8R&sz=w800",
      "https://drive.google.com/thumbnail?id=14FK94ghsXbUN7PXDpDuTkdnl1vQGrIQn&sz=w800",
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "345",
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
    "id": "346",
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
    "id": "347",
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
    "id": "348",
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
    "id": "349",
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
      "https://drive.google.com/thumbnail?id=1MySchxaEd3FQKUne4eoeppugzznR-tXS&sz=w800"
    ]
  },
  {
    "id": "350",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1fvRyyVh2sjmAarpN6newXit9PeS1_W-G&sz=w800"
    ]
  },
  {
    "id": "351",
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
    "id": "352",
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
    "id": "353",
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
    "id": "354",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1uCksB2OIILebZdUxV5eXPXdMUd2w4zuK&sz=w800"
    ]
  },
  {
    "id": "355",
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
    "id": "356",
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
    "id": "357",
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
    "id": "358",
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
    "id": "359",
    "title": "Retail Unit",
    "address": "Unit No. LG 10-12 (also known as LG 10 - LG 12), Selayang Capitol Complex, Selayang - Kepong Expressway, 68100 Selayang, Selangor",
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
    "id": "360",
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
    "id": "361",
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
    "id": "362",
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
    "id": "363",
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
    "id": "364",
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
    "id": "365",
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
    "id": "366",
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
    "id": "367",
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
    "id": "368",
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
    "id": "369",
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
      "https://drive.google.com/thumbnail?id=106vlM-eqBtTwhcaO6Ii01OFCkVdyYy98&sz=w800",
      "https://drive.google.com/thumbnail?id=1xuSMv8JjR_Nq_CLmhD6o98RKt2ELpKJZ&sz=w800"
    ]
  },
  {
    "id": "370",
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
    "id": "371",
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
    "id": "372",
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
    "id": "373",
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
    "id": "374",
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
    "id": "375",
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
    "id": "376",
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
    "id": "377",
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
    "id": "378",
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
    "id": "379",
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
    "id": "380",
    "title": "Terrace House",
    "address": "No. 8, Jalan AP 1C/24, Alam Perdana, 42300 Bandar Puncak Alam, Selangor",
    "postcode": "42300",
    "state": "Selangor",
    "area": "Bandar Puncak Alam",
    "reservePrice": 370000,
    "auctionDate": "19 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1RdtAWs7mxnhXn3qsI82-gGPApbi3n6A4&sz=w800"
    ]
  },
  {
    "id": "381",
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
    "id": "382",
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
    "id": "383",
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
    "id": "384",
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
    "id": "385",
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
    "id": "386",
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
    "id": "387",
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
    "id": "388",
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
    "id": "389",
    "title": "Terrace House",
    "address": "Lorong Dato Abdul Hamid 16, Taman Sentosa, 41200 Klang, Selangor",
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
    "id": "390",
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
    "id": "391",
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
    "id": "392",
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
    "id": "393",
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
    "id": "394",
    "title": "Town House (Lower Unit)",
    "address": "No. 35, Bangsar Ria Townhouse, Jalan 1/80B, Taman Bandaraya, 59100, Kuala Lumpur",
    "postcode": "59100",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 972000,
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
    "id": "395",
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
    "id": "396",
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
    "id": "397",
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
    "id": "398",
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
    "id": "399",
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
    "id": "400",
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
      "https://drive.google.com/thumbnail?id=1EQtaPnxkHkftffkV3rybwIib4zMyzrRw&sz=w800",
      "https://drive.google.com/thumbnail?id=10ggVMjkHd-LBo1gSjedSQ8ByisDXXVnb&sz=w800",
      "https://drive.google.com/thumbnail?id=1lnTnBvAUHJAEMOw3EXAJJEZL9wLuiFgj&sz=w800",
      "https://drive.google.com/thumbnail?id=1hiGQN5isULoRImionWs-vU3K5M9j6wyh&sz=w800"
    ]
  },
  {
    "id": "401",
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
    "id": "402",
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
    "id": "403",
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
    "id": "404",
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
    "id": "405",
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
    "id": "406",
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
    "id": "407",
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
    "id": "408",
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
    "id": "409",
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
    "id": "410",
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
    "id": "411",
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
    "id": "412",
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
    "id": "413",
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
    "id": "414",
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
    "id": "415",
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
    "id": "416",
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
    "id": "417",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Qj1YGJw1GDvm3OdTVpnqUjiTGfCAEtbZ&sz=w800"
    ]
  },
  {
    "id": "418",
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
    "id": "419",
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
    "id": "420",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1WpiRnw2jfxTHhCCAOeS8bZFjPzqiTiXB&sz=w800"
    ]
  },
  {
    "id": "421",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=12vnS5HKp-1d1dSkq8CxPe7w0YOxaf9nu&sz=w800"
    ]
  },
  {
    "id": "422",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1hCdWMT0NdfOHZPioa1mo71K9-P1StvSb&sz=w800"
    ]
  },
  {
    "id": "423",
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
    "id": "424",
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
    "id": "425",
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
    "id": "426",
    "title": "Office Lot",
    "address": "Unit No. 4801-2-03, Second Floor, Block 4801, CBD Perdana, Cyber 12, 63000 Cyberjaya, Selangor",
    "postcode": "63000",
    "state": "Selangor",
    "area": "Cyberjaya",
    "reservePrice": 286980,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "045 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1-qYkYPtZWjwfBmK1gn5VpvX-FSu_TZ0F&sz=w800"
    ]
  },
  {
    "id": "427",
    "title": "Apartment",
    "address": "Blok D, Mentari Court, Jalan PJS 8/9, Taman Seri Mentari, 46150 Petaling Jaya, Selangor",
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
    "id": "428",
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
    "id": "429",
    "title": "Service Apartment",
    "address": "Cerrado (Block B), Southville City, Jalan Southville 1, 43800 Dengkil, Selangor",
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
    "id": "430",
    "title": "2 Storey Terrace House",
    "address": "Jalan PP 3/3, Taman Putra Prima, 47130 Puchong, Selangor",
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
    "id": "431",
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
    "id": "432",
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
      "https://drive.google.com/thumbnail?id=1erqZd0eIjAkF0VHLIZ9KkfWlAwJN728_&sz=w800",
      "https://drive.google.com/thumbnail?id=1Khpto5MbOc5k4Wb5PPJvrMntqo_zz7mC&sz=w800",
      "https://drive.google.com/thumbnail?id=13sIzjmn2ICtzc7M8xPdDQ_xLj_TtlrMw&sz=w800"
    ]
  },
  {
    "id": "433",
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
    "id": "434",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HlsWgkJNaqe9VIqtrEBik0Q8GUP73WM0&sz=w800"
    ]
  },
  {
    "id": "435",
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
    "id": "436",
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
    "id": "437",
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
    "id": "438",
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
    "id": "439",
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
    "id": "440",
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
    "id": "441",
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
    "id": "442",
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
    "id": "443",
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
    "id": "444",
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
    "id": "445",
    "title": "1 Storey Terrace House",
    "address": "No. 25, Jalan Kancung Darat 28/7, Taman Alam Megah, Seksyen 28, 40400 Shah Alam, Selangor",
    "postcode": "40400",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 455000,
    "auctionDate": "26 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "200 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=14cR_mrXDLPFproq9EyKAiN3LY4fJDXlg&sz=w800"
    ]
  },
  {
    "id": "446",
    "title": "Terrace House",
    "address": "Jalan MM 4, Taman Myra Meranti, 47120 Puchong, Selangor",
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
    "id": "447",
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
    "id": "448",
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
    "id": "449",
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
    "id": "450",
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
    "id": "451",
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
    "id": "452",
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
    "id": "453",
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
    "id": "454",
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
    "id": "455",
    "title": "Apartment",
    "address": "Unit No. 107-1, Rampai Court Apartment, Blok F, Jalan 35/26, Taman Sri Rampai, 53300, Kuala Lumpur",
    "postcode": "53300",
    "state": "Kuala Lumpur",
    "area": "Kuala Lumpur",
    "reservePrice": 220000,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Au_UIgyGTn7j7X2jQxRfOOAosqTyfVf5&sz=w800"
    ]
  },
  {
    "id": "456",
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
    "id": "457",
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
    "id": "458",
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
    "id": "459",
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
    "id": "460",
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
    "id": "461",
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
    "id": "462",
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
    "id": "463",
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
    "id": "464",
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
    "id": "465",
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
    "id": "466",
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
    "id": "467",
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
    "id": "468",
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
    "id": "469",
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
      "https://drive.google.com/thumbnail?id=1vdYFtkttLkM31MPZ3N2hxpRrCVeYvJhZ&sz=w800"
    ]
  },
  {
    "id": "470",
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
    "id": "471",
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
    "id": "472",
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
    "id": "473",
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
    "id": "474",
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
    "id": "475",
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
    "id": "476",
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
    "id": "477",
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
    "id": "478",
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
    "id": "479",
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
    "id": "480",
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
    "id": "481",
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
    "id": "482",
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
    "id": "483",
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
    "id": "485",
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
    "id": "486",
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
      "https://drive.google.com/thumbnail?id=1swnCxjcyG1kX1cCoc3k2WwVSAD4fTTGz&sz=w800"
    ]
  },
  {
    "id": "487",
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
      "https://drive.google.com/thumbnail?id=1sItNrKYFqsPOSHyRdRuWq-doo6ydYMXE&sz=w800"
    ]
  },
  {
    "id": "488",
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
    "id": "489",
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
    "id": "490",
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
    "id": "491",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1FkBVCL7dGH1_oIHbA-Snjw0NWEOi2bNX&sz=w800"
    ]
  },
  {
    "id": "492",
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
    "id": "494",
    "title": "Apartment",
    "address": "Unit No. 19-08, Block 4, Pangsapuri Seri Era, Jalan Nagasari 36/2, Seksyen 36, 40470 Shah Alam, Selangor",
    "postcode": "40470",
    "state": "Selangor",
    "area": "Shah Alam",
    "reservePrice": 53145,
    "auctionDate": "1 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "689 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1WEwx2htNzrd3kBAAUkGEkgLrbDvzb4wg&sz=w800"
    ]
  },
  {
    "id": "495",
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
    "id": "496",
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
    "id": "497",
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
      "https://drive.google.com/thumbnail?id=1OWixzGn3HCGckVEzLICJDmZ9m1F-MAbj&sz=w800"
    ]
  },
  {
    "id": "498",
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
    "id": "499",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1FsUFNVL7dlIWWNviS6YbrDuRXD-KsPME&sz=w800"
    ]
  },
  {
    "id": "500",
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
    "id": "501",
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
    "id": "502",
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
    "id": "503",
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
    "id": "504",
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
    "id": "505",
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
    "id": "506",
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
    "id": "507",
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
    "id": "508",
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
    "id": "509",
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
    "id": "510",
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
    "id": "511",
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
    "id": "512",
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
    "id": "513",
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
    "id": "514",
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
    "id": "515",
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
    "id": "516",
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
    "id": "517",
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
    "id": "518",
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
    "id": "519",
    "title": "1 Storey Terrace House",
    "address": "Jalan 3, Taman Paduka, 45000 Kuala Selangor, Selangor",
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
    "id": "520",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1WXPekyRyR-8VJMp1V9ZcSTUuW8gKZ4aC&sz=w800"
    ]
  },
  {
    "id": "521",
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
    "id": "522",
    "title": "2 Storey Terrace House",
    "address": "No. 24, Jalan Desa 12/5, Bandar Country Homes, 48000 Rawang, Selangor",
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
    "id": "523",
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
    "id": "524",
    "title": "Terrace House",
    "address": "Jalan 5/29, Seksyen 5, Bandar Rinching, 43500 Semenyih, Selangor",
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
    "id": "525",
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
    "id": "526",
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
    "id": "527",
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
    "id": "528",
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
    "id": "529",
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
    "id": "530",
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
    "id": "531",
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
    "id": "532",
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
    "id": "533",
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
    "id": "534",
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
    "id": "535",
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
    "id": "536",
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
    "id": "537",
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
    "id": "538",
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
    "id": "539",
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
    "id": "540",
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
      "https://drive.google.com/thumbnail?id=1HsGMUjA1SsPJfZw0pslS0KwT2N9Gh8VB&sz=w800"
    ]
  },
  {
    "id": "541",
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
      "https://drive.google.com/thumbnail?id=12a6Mv3tdxm72Y21KmaqKOd0le5hh8Lu_&sz=w800"
    ]
  },
  {
    "id": "542",
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
    "id": "543",
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
    "id": "544",
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
    "id": "545",
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
    "id": "546",
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
    "id": "547",
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
    "id": "548",
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
    "id": "549",
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
    "id": "550",
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
    "id": "551",
    "title": "Condominium",
    "address": "Unit No. B1/A/11-3, Tower 1, Persiaran Puteri 1, Taman Puteri (Venice Hills), 43200 Cheras, Selangor",
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
    "id": "552",
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
    "id": "553",
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
    "id": "554",
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
    "id": "555",
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
    "id": "556",
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
    "id": "557",
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
    "id": "558",
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
    "id": "559",
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
    "id": "560",
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
    "id": "561",
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
    "id": "562",
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
    "id": "563",
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
    "id": "564",
    "title": "Sunway Sutera Apartment",
    "address": "Unit No. D-201, Block D, Sunway Sutera Condominium, No. 2, Jalan Tropicana Utara, PJU 3, Sunway Damansara, 47810 Petaling Jaya, Selangor",
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
      "https://drive.google.com/thumbnail?id=1n4IrIMb7gadnp9MouY54bGzPXrgt7qxd&sz=w800"
    ]
  },
  {
    "id": "565",
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
    "id": "566",
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
    "id": "567",
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
    "id": "568",
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
    "id": "569",
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
    "id": "570",
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
    "id": "571",
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
    "id": "572",
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
    "id": "573",
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
    "id": "574",
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
    "id": "575",
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
    "id": "576",
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
    "id": "577",
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
    "id": "578",
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
    "id": "579",
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
    "id": "580",
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
    "id": "581",
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
    "id": "582",
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
    "id": "583",
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
    "id": "584",
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
    "id": "585",
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
    "id": "586",
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
    "id": "587",
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
    "id": "588",
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
    "id": "589",
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
    "id": "590",
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
    "id": "591",
    "title": "Service Apartment",
    "address": "Idaman KL 128 (Saville Residence), No. 128, Jalan Klang Lama, 58000, Kuala Lumpur",
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
    "id": "592",
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
    "id": "593",
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
    "id": "594",
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
    "id": "595",
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
    "id": "596",
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
    "id": "597",
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
    "id": "598",
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
    "id": "599",
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
    "id": "600",
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
      "https://drive.google.com/thumbnail?id=114waHhL-7f6-SHL3OYnO1KlQXZY1Ci89&sz=w800"
    ]
  },
  {
    "id": "601",
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
    "id": "602",
    "title": "Apartment",
    "address": "Block D, Seasons Garden, No. 7, Jalan 1/27E, Seksyen 10, Wangsa Maju, 53300, Kuala Lumpur",
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
    "id": "604",
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
    "id": "605",
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
    "id": "606",
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
    "id": "607",
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
    "id": "608",
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
    "id": "609",
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
    "id": "610",
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
    "id": "611",
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
    "id": "612",
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
    "id": "613",
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
    "id": "614",
    "title": "2 Storey Terrace House",
    "address": "No. 62, Jalan 3/60C, Taman Segambut Muda, 51200, Kuala Lumpur",
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
    "id": "616",
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
      "https://drive.google.com/thumbnail?id=1Es75GcFGRVbDuAcaC-H1kKwVI4_0ugZI&sz=w800",
      "https://drive.google.com/thumbnail?id=1DE-h7SMbMTVAr7hx5TH1tebT4rO2VSZj&sz=w800",
      "https://drive.google.com/thumbnail?id=1UQu8-AlQkMN9t8dViNTFLoWzuef-Wrv6&sz=w800"
    ]
  },
  {
    "id": "618",
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
    "id": "619",
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
    "id": "620",
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
    "id": "621",
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
    "id": "622",
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
      "https://drive.google.com/thumbnail?id=13Dj3quwRdF3-Kbt-L164Bg8m1g1oi7rt&sz=w800"
    ]
  },
  {
    "id": "623",
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
    "id": "624",
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
    "id": "625",
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
    "id": "626",
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
    "id": "627",
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
    "id": "628",
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
    "id": "629",
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
    "id": "630",
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
    "id": "631",
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
    "id": "632",
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
    "id": "633",
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
    "id": "634",
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
    "id": "635",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1mnFaGggXQaMUyWPoNQWP_SVgzGIzV5kr&sz=w800"
    ]
  },
  {
    "id": "636",
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
    "id": "637",
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
    "id": "638",
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
    "id": "639",
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
    "id": "640",
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
    "id": "641",
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
    "id": "642",
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
    "id": "643",
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
    "id": "644",
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
    "id": "645",
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
    "id": "646",
    "title": "2 Storey Terrace House",
    "address": "Jalan Laman Bakawali B/8, Laman Bakawali, Kota Seriemas, 71800 Nilai, Negeri Sembilan",
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
    "id": "647",
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
    "id": "648",
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
    "id": "649",
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
    "id": "650",
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
    "id": "651",
    "title": "1 Storey Terrace House",
    "address": "No. 86, Jalan Desa PD 2/2, Taman Desa PD 2, 71200 Port Dickson, Negeri Sembilan",
    "postcode": "71200",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 150000,
    "auctionDate": "3 Aug 2026 (Mon)",
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
    "id": "652",
    "title": "1 Storey Terrace House",
    "address": "No. 1781, Jalan Nusari Aman 7/8, Nusari Aman 3, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 300000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "603 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1S1LGIKQlHmZWhpUuoia6O98e-q0sX-zw&sz=w800",
      "https://drive.google.com/thumbnail?id=1xRp5EtHoOBkZcU9YmJu8kjYVos-b5lRB&sz=w800",
      "https://drive.google.com/thumbnail?id=1S1LvJLEvz0W0DQmfiG7UKxn-CjhBEamr&sz=w800"
    ]
  },
  {
    "id": "653",
    "title": "1 Storey Terrace House",
    "address": "No. 621, Lorong Anggerik 18, Bandar Baru Sunggala, 71050, Port Dickson, Negeri Sembilan",
    "postcode": "71050",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 160000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1BiE3DsOq_5DsgDpxuYmRCubBMzIBoJiu&sz=w800"
    ]
  },
  {
    "id": "654",
    "title": "1 Storey Terrace House",
    "address": "No. 371, Jalan Murai 5, Taman South East, 70100, Seremban, Negeri Sembilan",
    "postcode": "70100",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 350000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "275 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1okJSWMjPmcIDi3JCsOW9BWujyqrVfsFC&sz=w800"
    ]
  },
  {
    "id": "655",
    "title": "1 Storey Terrace House",
    "address": "No. 667, Lorong Iringan Bayu 36/2, Precint 3, Taman Iringan Bayu, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 345000,
    "auctionDate": "3 Aug 2026 (Mon)",
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
    "id": "656",
    "title": "1 Storey Terrace House",
    "address": "No. 74, Jalan Ros Merah 5, Taman Kobena, Senawang, 70450 Seremban, Negeri Sembilan",
    "postcode": "70450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 160000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1JwRgcRCMKhjxgyzTie6kfUYhwu7sKX60&sz=w800",
      "https://drive.google.com/thumbnail?id=1fK7EE8OPJG4fFn59sV53XC48bIZOKKRZ&sz=w800"
    ]
  },
  {
    "id": "657",
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
    "id": "658",
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
    "id": "659",
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
    "id": "660",
    "title": "1.5 Storey Detached House",
    "address": "No. 1335, Jalan Warisan Puteri A49, Precinct 9, Bandar Warisan Puteri, 70400 Seremban, Negeri Sembilan",
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
    "id": "661",
    "title": "3 Storey Semi Detached House",
    "address": "No. 6, Jalan Rasah Kemayan 3/2A, Rasah Kemayan, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 950000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "499 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1tF5qr0lfBePPAIwqzKX-l6u23D6HCDa9&sz=w800"
    ]
  },
  {
    "id": "662",
    "title": "1 Storey Terraced House",
    "address": "No. 1115, Jalan Gadong Jaya 25, Taman Gadong Jaya, 71900 Labu, Negeri Sembilan",
    "postcode": "71900",
    "state": "Negeri Sembilan",
    "area": "Labu",
    "reservePrice": 250000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "300 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=181-59r33y1BjXlo-BXkhONlxiV6LrAU_&sz=w800",
      "https://drive.google.com/thumbnail?id=1HzM5dU8z-MHhtYn8N9I5pxQysstHu7VN&sz=w800"
    ]
  },
  {
    "id": "663",
    "title": "2 Storey Terrace House",
    "address": "No. 23, Jalan GV 17, Taman Green View, 71250 Port Dickson, Negeri Sembilan",
    "postcode": "71250",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 186300,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1-BFj-cVbWipUGpFNTsNRTW6u1xp5F4UA&sz=w800"
    ]
  },
  {
    "id": "664",
    "title": "2 Storey Shop Office",
    "address": "PT 2190 (No. 9), Jalan Pusat Komersial Perwira 1, Pusat Komersial Perwira, 73400 Gemas, Negeri Sembilan",
    "postcode": "73400",
    "state": "Negeri Sembilan",
    "area": "Gemas",
    "reservePrice": 486000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "518 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1NGCAh9UCLrvFqddu87U8kmmlVhcGufE-&sz=w800"
    ]
  },
  {
    "id": "665",
    "title": "2 Storey Town House",
    "address": "No. 447, Jalan Ara Sendayan 2/4, Bandar Ara Sendayan, 70300, Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 500000,
    "auctionDate": "4 Aug 2026 (Tue)",
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
    "id": "666",
    "title": "1 Storey Terrace House",
    "address": "No. 12, Jalan TBK 2/9, Taman Harmonium Indah, S2 Heights, 70200 Seremban, Negeri Sembilan",
    "postcode": "70200",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 300000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "432 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Nq87X44_SCfLamq7DuV5PiGYBU-uILNt&sz=w800"
    ]
  },
  {
    "id": "667",
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
    "id": "668",
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
    "id": "669",
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
    "id": "670",
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
    "id": "671",
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
    "id": "672",
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
    "id": "673",
    "title": "2 Storey Bungalow House",
    "address": "Lot 9707 (also known as No. 53), Jalan Tasik Senangin 15/5, 71750, Bandar Tasik Senangin, Lenggeng, Negeri Sembilan",
    "postcode": "71750",
    "state": "Negeri Sembilan",
    "area": "Lenggeng",
    "reservePrice": 513000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "004 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1nhM7zphX0EDYJFO8UzKHHxWvVT-1ie63&sz=w800"
    ]
  },
  {
    "id": "674",
    "title": "Shop Office",
    "address": "Unit No. 270-2B, Jalan Haruan 5/7, Pusat Komersial Oakland II, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 90000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "710 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1-ezumHbjfooGN2tfIB8lqkQCozAqT6Ep&sz=w800"
    ]
  },
  {
    "id": "675",
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
    "id": "676",
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
    "id": "677",
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
    "id": "678",
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
    "id": "679",
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
    "id": "680",
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
    "id": "681",
    "title": "1 Storey Chalet",
    "address": "No. H167, Garden Wing Deluxe Suite, The Grand Lexis Port Dickson, 71000 Port Dickson, Negeri Sembilan",
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
    "id": "682",
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
    "id": "683",
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
    "id": "684",
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
    "id": "685",
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
    "id": "686",
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
    "id": "687",
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
    "id": "688",
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
    "id": "689",
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
    "id": "690",
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
    "id": "691",
    "title": "1 Storey Terrace House",
    "address": "No. 49, Jalan 3/5, Taman Intan Perdana, Batu 9, Jalan Pantai, 71050 Port Dickson, Negeri Sembilan",
    "postcode": "71050",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 178200,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=12It2xq9W9D19TSVd2mURE9hQgf0IzthD&sz=w800"
    ]
  },
  {
    "id": "692",
    "title": "1 Storey Terrace House",
    "address": "No. 30, Jalan Cempaka 8/1, Taman Cempaka, 70450 Seremban, Negeri Sembilan",
    "postcode": "70450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 225000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "442 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Y4zCvk_lqPjxlOW_R51AcNdPyPoSriaI&sz=w800"
    ]
  },
  {
    "id": "693",
    "title": "2 Storey Terrace House",
    "address": "No. 276, Jalan Tiara Sendayan 2/4, Taman Tiara Sendayan, 71900 Labu, Negeri Sembilan",
    "postcode": "71900",
    "state": "Negeri Sembilan",
    "area": "Labu",
    "reservePrice": 400000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "910 sq.ft",
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
    "id": "694",
    "title": "1 Storey Terrace House",
    "address": "No. 573, Jalan Palas 17, Taman Pelangi, 70400 Seremban, Negeri Sembilan",
    "postcode": "70400",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 180000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "647 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1tezVTBgg4Ev08lfQD9LG9waJuNIPd2iw&sz=w800"
    ]
  },
  {
    "id": "695",
    "title": "3 Storey Terrace House",
    "address": "No. 388, Jalan Forest Heights 3/14, Forest Heights, 70450 Seremban, Negeri Sembilan",
    "postcode": "70450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 800000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "680 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1wEkJGISHjuGxEuDK8uvWrD0uXjQRURRy&sz=w800",
      "https://drive.google.com/thumbnail?id=11zdgOHLTu5n9CZkjLDFX2f5-vqv8T4q7&sz=w800"
    ]
  },
  {
    "id": "696",
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
    "id": "697",
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
    "id": "698",
    "title": "2 Storey Terrace Shop Office",
    "address": "No. 17, Jalan Prima 1, Pusat Perniagaan Lukut Prima, 71000 Port Dickson, Negeri Sembilan",
    "postcode": "71000",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 551000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1N-OUPP1LKyH9s6pB0cMSh0HrlUrZBwl8&sz=w800"
    ]
  },
  {
    "id": "699",
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
      "https://drive.google.com/thumbnail?id=1Ml-nMQLhK3jsLoN_oEXxxp_3VgFaavTt&sz=w800"
    ]
  },
  {
    "id": "700",
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
    "id": "701",
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
    "id": "702",
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
    "id": "703",
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
    "id": "704",
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
    "id": "705",
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
    "id": "706",
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
    "id": "707",
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
    "id": "708",
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
    "id": "709",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1nhM7zphX0EDYJFO8UzKHHxWvVT-1ie63&sz=w800"
    ]
  },
  {
    "id": "710",
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
    "id": "711",
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
    "id": "712",
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
    "id": "713",
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
    "id": "714",
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
    "id": "715",
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
    "id": "716",
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
    "id": "717",
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
    "id": "718",
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
    "id": "719",
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
    "id": "720",
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
    "id": "721",
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
    "id": "722",
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
    "id": "723",
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
    "id": "724",
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
    "id": "725",
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
    "id": "726",
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
    "id": "727",
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
    "id": "728",
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
    "id": "729",
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
    "id": "730",
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
    "id": "731",
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
    "id": "732",
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
    "id": "733",
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
    "id": "734",
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
      "https://drive.google.com/thumbnail?id=1qgas9ZCxAt9sz65vkJNZSKExHQt-RFd9&sz=w800"
    ]
  },
  {
    "id": "735",
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
      "https://drive.google.com/thumbnail?id=1mENTNe_4Xf8mRwut7xai1sr6RI-LSORa&sz=w800"
    ]
  },
  {
    "id": "736",
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
    "id": "737",
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
    "id": "738",
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
    "id": "739",
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
    "id": "741",
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
    "id": "742",
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
    "id": "743",
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
    "id": "744",
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
    "id": "745",
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
    "id": "746",
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
    "id": "747",
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
    "id": "748",
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
    "id": "749",
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
    "id": "750",
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
      "https://drive.google.com/thumbnail?id=1Ht2y4JGcnX8AUCsr2LcZ1KnZWHStxU3P&sz=w800"
    ]
  },
  {
    "id": "751",
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
    "id": "752",
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
    "id": "753",
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
    "id": "754",
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
    "id": "755",
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
    "id": "756",
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
    "id": "757",
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
    "id": "758",
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
    "id": "759",
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
    "id": "760",
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
    "id": "761",
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
      "https://drive.google.com/thumbnail?id=1oob7lX4ZxA2lg78ibHdAHQ-JmR_2IsT0&sz=w800"
    ]
  },
  {
    "id": "762",
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
    "id": "763",
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
    "id": "764",
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
    "id": "765",
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
    "id": "766",
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
    "id": "767",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1PzBfuOkXaVpxpb0CB2roo7GR5BZ8osO7&sz=w800"
    ]
  },
  {
    "id": "768",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1PzBfuOkXaVpxpb0CB2roo7GR5BZ8osO7&sz=w800"
    ]
  },
  {
    "id": "769",
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
    "id": "770",
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
    "id": "771",
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
    "id": "772",
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
    "id": "773",
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
    "id": "774",
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
    "id": "775",
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
    "id": "776",
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
    "id": "777",
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
    "id": "778",
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
    "id": "779",
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
    "id": "780",
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
    "id": "781",
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
    "id": "782",
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
    "id": "783",
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
    "id": "784",
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
    "id": "785",
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
    "id": "786",
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
    "id": "787",
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
    "id": "788",
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
    "id": "789",
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
    "id": "790",
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
    "id": "791",
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
    "id": "792",
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
    "id": "793",
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
    "id": "794",
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
    "id": "795",
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
    "id": "796",
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
    "id": "797",
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
    "id": "798",
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
    "id": "799",
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
    "id": "800",
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
    "id": "801",
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
    "id": "802",
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
    "id": "803",
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
    "id": "804",
    "title": "2 Storey Semi Detached House",
    "address": "Jalan Lukut Lagenda 1, Taman Lukut Lagenda, 71010 Port Dickson, Negeri Sembilan",
    "postcode": "71010",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 546750,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "402 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1kdnygEQgCJWQARlBepHpxWQTuAitUJ_g&sz=w800"
    ]
  },
  {
    "id": "805",
    "title": "2 Storey Terrace House",
    "address": "Jalan D'Palma 3, Taman Bandar Senawang, 70450 Seremban, Negeri Sembilan",
    "postcode": "70450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 320760,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "560 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1SB-5MnFt-5avpsBuplnJiHDvBexR4gnO&sz=w800"
    ]
  },
  {
    "id": "806",
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
    "id": "807",
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
    "id": "808",
    "title": "2 Storey Terrace House",
    "address": "Jalan Tiara Sendayan 7/4, Taman Tiara Sendayan, 71900 Labu, Negeri Sembilan",
    "postcode": "71900",
    "state": "Negeri Sembilan",
    "area": "Labu",
    "reservePrice": 372600,
    "auctionDate": "8 Sep 2026 (Tue)",
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
    "id": "809",
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
    "id": "810",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1exzRKIsYcnaADRGSwN62JHso9lQaNxiR&sz=w800"
    ]
  },
  {
    "id": "811",
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
    "id": "812",
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
    "id": "813",
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
    "id": "814",
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
    "id": "815",
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
    "id": "816",
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
      "https://drive.google.com/thumbnail?id=1V5_kCR_ZBH2zz6gU7nQYSm8BBgdbsiAw&sz=w800"
    ]
  },
  {
    "id": "817",
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
    "id": "818",
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
    "id": "819",
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
    "id": "820",
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
    "id": "821",
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
    "id": "822",
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
    "id": "823",
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
    "id": "824",
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
    "id": "825",
    "title": "Terrace House",
    "address": "Lorong Nusari Bayu 1/1B, Nusari Bayu 1, 71950 Bandar Sri Sendayan, Negeri Sembilan",
    "postcode": "71950",
    "state": "Negeri Sembilan",
    "area": "Bandar Sri Sendayan",
    "reservePrice": 560000,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "433 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1rQeJvRhC0kp-Iry4PlvbqwNoedZLnS0V&sz=w800"
    ]
  },
  {
    "id": "826",
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
    "id": "827",
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
    "id": "828",
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
    "id": "829",
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
    "id": "830",
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
    "id": "831",
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
    "id": "832",
    "title": "2 Storey Terrace House",
    "address": "Jalan Tiara Sendayan 2/6, Taman Tiara Sendayan, 71900 Labu, Negeri Sembilan",
    "postcode": "71900",
    "state": "Negeri Sembilan",
    "area": "Labu",
    "reservePrice": 414000,
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
    "id": "833",
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
    "id": "834",
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
    "id": "835",
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
    "id": "836",
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
    "id": "837",
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
    "id": "838",
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
    "id": "839",
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
    "id": "840",
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
    "id": "841",
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
    "id": "842",
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
    "id": "843",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1MkhwHiOZJAhTeRLLDYSNQBef24HO-pFZ&sz=w800"
    ]
  },
  {
    "id": "844",
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
    "id": "845",
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
    "id": "846",
    "title": "Terrace House",
    "address": "Jalan Tiara Sendayan 8/4, Taman Tiara Sendayan, 71900 Labu, Negeri Sembilan",
    "postcode": "71900",
    "state": "Negeri Sembilan",
    "area": "Labu",
    "reservePrice": 440000,
    "auctionDate": "9 Sep 2026 (Wed)",
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
    "id": "847",
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
    "id": "848",
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
    "id": "849",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1bNqnqXq_7mnG9qQeo1ZlyrXtz5hLCPFG&sz=w800",
      "https://drive.google.com/thumbnail?id=1YRQpJ-xxWr3y_uPDdpt7RH90NqQws_fo&sz=w800"
    ]
  },
  {
    "id": "850",
    "title": "Terrace House",
    "address": "Jalan Tiara Sendayan 8/10, Taman Tiara Sendayan, 71900, Negeri Sembilan",
    "postcode": "71900",
    "state": "Negeri Sembilan",
    "area": "Negeri Sembilan",
    "reservePrice": 450000,
    "auctionDate": "9 Sep 2026 (Wed)",
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
    "id": "851",
    "title": "1 Storey Terrace House",
    "address": "Lorong S2 G7/4, Garden Avenue, Seremban 2, 70300 Seremban, Negeri Sembilan",
    "postcode": "70300",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 410000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "379 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=15wvNjBAkSMTodYbeqkFOws-UcsDL09LC&sz=w800"
    ]
  },
  {
    "id": "852",
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
    "id": "853",
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
    "id": "854",
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
    "id": "855",
    "title": "Flat",
    "address": "Block C, Rumah Pangsa, Bandar Baru Ampangan, Batu 2, Jalan Kuala Pilah, 70400 Seremban, Negeri Sembilan",
    "postcode": "70400",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 87480,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "087 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1Tvf-ldv7XnzipC4tYD2Pik0DcbFLGc3y&sz=w800"
    ]
  },
  {
    "id": "856",
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
    "id": "857",
    "title": "1 Storey Terrace House",
    "address": "No. 570, Jalan Bukit Mutiara 13, Taman Bukit Mutiara, 70200 Seremban, Negeri Sembilan",
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
      "https://drive.google.com/thumbnail?id=1e3lm0hjLQQNxKhcIeHFPeDoSLC1sgmzQ&sz=w800"
    ]
  },
  {
    "id": "858",
    "title": "1 Storey Terrace House",
    "address": "No. 1148, Jalan BIL 39, Taman Bayu Indera Lukut, 71010 Port Dickson, Negeri Sembilan",
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
    "id": "859",
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
    "id": "860",
    "title": "2 Storey Terrace House",
    "address": "Jalan Sena 1/8, Taman Sena, Sungai Gadut, 71450 Seremban, Negeri Sembilan",
    "postcode": "71450",
    "state": "Negeri Sembilan",
    "area": "Seremban",
    "reservePrice": 480000,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1nXuwn_C-I0lvxOSuiHmfzzKkaIK4cswS&sz=w800"
    ]
  },
  {
    "id": "861",
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
    "id": "862",
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
    "id": "863",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1ouRv_MO_Lo_kNhPfWEAXG1Dq7mC01WHJ&sz=w800"
    ]
  },
  {
    "id": "864",
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
    "id": "865",
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
    "id": "866",
    "title": "Terrace House",
    "address": "Jalan BIL 45, Taman Bayu Indera Lukut, 71010 Port Dickson, Negeri Sembilan",
    "postcode": "71010",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 330000,
    "auctionDate": "14 Sep 2026 (Mon)",
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
    "id": "867",
    "title": "Terrace House",
    "address": "Jalan Belida 1, Taman Belida, 71050 Port Dickson, Negeri Sembilan",
    "postcode": "71050",
    "state": "Negeri Sembilan",
    "area": "Port Dickson",
    "reservePrice": 340000,
    "auctionDate": "14 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1cm4YEhmorS15XfVya5cYF_-uZdjxQLGp&sz=w800"
    ]
  },
  {
    "id": "868",
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
    "id": "869",
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
    "id": "870",
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
    "id": "871",
    "title": "Retail Lot",
    "address": "Unit No. CII-2-22, KOMTAR, Jalan Penang, 10000 Georgetown, Penang",
    "postcode": "10000",
    "state": "Penang",
    "area": "Georgetown",
    "reservePrice": 129907.8,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "635 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "872",
    "title": "Flat",
    "address": "Unit No. 10-21-25, Jalan Sungai Satu, Taman Pinang Emas, 11100 Batu Ferringhi, Penang",
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
      "https://drive.google.com/thumbnail?id=1fxejLBfSo-n_Jq8q7TCw1ELcoNWrVLv3&sz=w800"
    ]
  },
  {
    "id": "873",
    "title": "Apartment",
    "address": "Unit No. 7-25-08, Sri Impian, Lengkok Angsana, Mukim 13, 11500 Ayer Itam, Penang",
    "postcode": "11500",
    "state": "Penang",
    "area": "Ayer Itam",
    "reservePrice": 260000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "700 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "874",
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
      "https://drive.google.com/thumbnail?id=14Kp-opFMXwe0zc50FAajlc_cIUuxfAwD&sz=w800"
    ]
  },
  {
    "id": "875",
    "title": "2 Storey Terrace House",
    "address": "Lorong Machang Bubok 25, Taman Machang Bubok, 14020 Bukit Mertajam, Penang",
    "postcode": "14020",
    "state": "Penang",
    "area": "Bukit Mertajam",
    "reservePrice": 440000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "195 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1pBu8ngvSU5ys5sRY2VaB4YVcA4SNroBK&sz=w800"
    ]
  },
  {
    "id": "876",
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
      "https://drive.google.com/thumbnail?id=1EEO2prahaVkUiuVdUP16sczKbAEE1k1x&sz=w800"
    ]
  },
  {
    "id": "877",
    "title": "Flat",
    "address": "Unit No. 48-3-9, Jalan Sekolah La Salle, Lahat Court, 11400 Georgetown, Penang",
    "postcode": "11400",
    "state": "Penang",
    "area": "Georgetown",
    "reservePrice": 320000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "893 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "878",
    "title": "Apartment",
    "address": "Unit No. G-4-1, Melati Apartment, Lebuh Bukit Kecil 3, Taman Sri Nibong, 11900 Bayan Lepas, Penang",
    "postcode": "11900",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 324000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "990 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "879",
    "title": "Flat",
    "address": "Unit No. 22A-3-4, Persiaran Mayang Pasir 5, Mukim 12, Bandar Bayan Baru, 11950 Bayan Lepas, Penang",
    "postcode": "11950",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 170000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "495 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "880",
    "title": "1.5 Storey Detached House",
    "address": "Lot 378377, Laluan Meru Indah E6, Gerbang Meru Indah, 30020 Ipoh, Perak",
    "postcode": "30020",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 738000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "288 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "881",
    "title": "1 Storey Terrace House",
    "address": "No. 289, Lorong Mutiara 4, Taman Intan Mutiara, 36000 Teluk Intan, Perak",
    "postcode": "36000",
    "state": "Perak",
    "area": "Teluk Intan",
    "reservePrice": 190000,
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
    "id": "882",
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
    "id": "883",
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
    "id": "884",
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
    "id": "885",
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
    "id": "886",
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
    "id": "887",
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
    "id": "888",
    "title": "1 Storey Terrace House",
    "address": "No. 760, Laluan Kledang 3/3, Taman Kledang, 31100 Sungai Siput, Perak",
    "postcode": "31100",
    "state": "Perak",
    "area": "Sungai Siput",
    "reservePrice": 144000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "867 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "889",
    "title": "1 Storey Terrace House",
    "address": "No. 5, Jalan Kinding Perdana 6, Taman Kinding Perdana, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 162000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "890",
    "title": "2 Storey Terrace House",
    "address": "No. 68, Pesiaran Chempaka Sari 1, Taman Cempaka, 31400 Ipoh, Perak",
    "postcode": "31400",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 162000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "839 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "891",
    "title": "1 Storey Terrace House",
    "address": "No. 5, Laluan Puspa Indah 38, Taman Puspa Indah, 31550 Pusing, Perak",
    "postcode": "31550",
    "state": "Perak",
    "area": "Pusing",
    "reservePrice": 160000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "646 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "892",
    "title": "1 Storey Terrace House",
    "address": "No. 71, Lorong Lekir Indah 5, Taman Lekir Indah, 32020 Lekir, Perak",
    "postcode": "32020",
    "state": "Perak",
    "area": "Lekir",
    "reservePrice": 99000,
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
    "id": "893",
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
    "id": "894",
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
    "id": "895",
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
    "id": "896",
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
    "id": "897",
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
    "id": "898",
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
    "id": "899",
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
    "id": "900",
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
    "id": "901",
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
    "id": "902",
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
    "id": "903",
    "title": "1 Storey Terrace House",
    "address": "No. 885, Lorong 2/1, Taman Sri Wang, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 160000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "200 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "904",
    "title": "1 Storey Terrace House",
    "address": "No. 473, Jalan Bestari 14, Taman Bestari, 09000 Kulim, Kedah",
    "postcode": "09000",
    "state": "Kedah",
    "area": "Kulim",
    "reservePrice": 240000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "097 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "905",
    "title": "1 Storey Terrace House",
    "address": "No. 1303, Jalan Cempaka Indah 20, Taman Cempaka Indah, 08010 Bukit Selambau, Kedah",
    "postcode": "08010",
    "state": "Kedah",
    "area": "Bukit Selambau",
    "reservePrice": 160000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "496 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "906",
    "title": "1 Storey Semi Detached House",
    "address": "No. 62, Persiaran Suasana 1, Harvard Suasana Resort, 08300 Gurun, Kedah",
    "postcode": "08300",
    "state": "Kedah",
    "area": "Gurun",
    "reservePrice": 243000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "294 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "907",
    "title": "Terrace House",
    "address": "No. 67, Jalan Seroja Indah 3, Taman Seroja Indah, 08010 Bukit Selambau, Kedah",
    "postcode": "08010",
    "state": "Kedah",
    "area": "Bukit Selambau",
    "reservePrice": 195000,
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
    "id": "908",
    "title": "1 Storey Terrace House",
    "address": "No. 1608, Jalan Seri Bayu 2/41, Taman Seri Bayu, 08000 Sungai Lalang, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Lalang",
    "reservePrice": 190000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "001 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "909",
    "title": "1 Storey Semi Detached House",
    "address": "No. 396, Jalan SP Heights 10, SP Heights, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 270000,
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
    "id": "910",
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
      "https://drive.google.com/thumbnail?id=1R7mzWMREgcE1NuNCHT-cszUdJOD23uKy&sz=w800"
    ]
  },
  {
    "id": "911",
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
      "https://drive.google.com/thumbnail?id=1yNCrc-XsxzYgiA0Q0lae67jbUBwdQ3LQ&sz=w800"
    ]
  },
  {
    "id": "912",
    "title": "Flat",
    "address": "Unit No.1062-20-31, Block 1062, Green Garden, Jalan Paya Terubong, 11060, Penang",
    "postcode": "11060",
    "state": "Penang",
    "area": "Penang",
    "reservePrice": 123930,
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
    "id": "913",
    "title": "Apartment",
    "address": "Unit No. 1062-19-48, Green Garden, Jalan Paya Terubong, 11060, Penang",
    "postcode": "11060",
    "state": "Penang",
    "area": "Penang",
    "reservePrice": 116640,
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
    "id": "914",
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
      "https://drive.google.com/thumbnail?id=1EF3byxnU35qfWDZUKazR-Ryk5U7Rq6o_&sz=w800"
    ]
  },
  {
    "id": "915",
    "title": "Flat",
    "address": "Unit No. G-11, Block H, Apartment Permata, Jalan Perda Utama, Bandar Perda, 14000 Bukit Mertajam, Penang",
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
      "https://drive.google.com/thumbnail?id=1nJOW9j9QZWPGIhd1Ymqj-mKS9jaIEi2w&sz=w800"
    ]
  },
  {
    "id": "916",
    "title": "2 Storey Terrace House",
    "address": "No. 47, Lorong Desa Impian 12, Desa Impian, 14000 Bukit Mertajam, Penang",
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
      "https://drive.google.com/thumbnail?id=1bf8mPfUOOaQj-YpIO7UBThM251IDc3UR&sz=w800"
    ]
  },
  {
    "id": "917",
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
      "https://drive.google.com/thumbnail?id=1BwjlQD4Tp9V0X08NXAaVf4FSl0-XrRlP&sz=w800"
    ]
  },
  {
    "id": "918",
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
      "https://drive.google.com/thumbnail?id=1IsjakXEP-GvusiQLJv2ShtxDf6UiS2pS&sz=w800"
    ]
  },
  {
    "id": "919",
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
      "https://drive.google.com/thumbnail?id=1TPipyF2UBkONOlmXI_f-AcYanJkYLhki&sz=w800"
    ]
  },
  {
    "id": "920",
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
      "https://drive.google.com/thumbnail?id=1RFHLaNQwWDVSjMQiuNQ5nbH_Kk8AEfDV&sz=w800"
    ]
  },
  {
    "id": "921",
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
      "https://drive.google.com/thumbnail?id=1OSsskIeItwQIWfL1yXZsAIclsCVv9_6-&sz=w800"
    ]
  },
  {
    "id": "922",
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
      "https://drive.google.com/thumbnail?id=1OzGjvx2278qa8Oaeh1YsPnCwZJdVYtWk&sz=w800"
    ]
  },
  {
    "id": "923",
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
      "https://drive.google.com/thumbnail?id=1llRwuN-zrvObYvLMuuj6HMdLhE7MhF7m&sz=w800"
    ]
  },
  {
    "id": "924",
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
      "https://drive.google.com/thumbnail?id=1PaLJPpZ71HmJceKv6yQTq2L57a-qQusT&sz=w800"
    ]
  },
  {
    "id": "925",
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
      "https://drive.google.com/thumbnail?id=1mMm_HNVaFTiBB7GeBm_Ny76bJz8pLctT&sz=w800"
    ]
  },
  {
    "id": "926",
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
      "https://drive.google.com/thumbnail?id=1gwRtVS7ov0h0VHeGC8kaTcL9vnu5UBvD&sz=w800"
    ]
  },
  {
    "id": "927",
    "title": "1 Storey Terrace House",
    "address": "Lorong Seri Kijang 17, Taman Seri Kijang, 14000 Bukit Mertajam, Penang",
    "postcode": "14000",
    "state": "Penang",
    "area": "Bukit Mertajam",
    "reservePrice": 300000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "098 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=10Xi6MpEkBgjkVIclwGnbNJxs1WxEaNFj&sz=w800"
    ]
  },
  {
    "id": "928",
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
      "https://drive.google.com/thumbnail?id=1FAKHZsmUn4BLAXC6N2hORIo082uHW_hP&sz=w800"
    ]
  },
  {
    "id": "929",
    "title": "Flat",
    "address": "Unit No. 3-05, Blok C, Pangsapuri Pauh Damai, Jalan Pauh 1, 13600 Permatang Pauh, Penang",
    "postcode": "13600",
    "state": "Penang",
    "area": "Permatang Pauh",
    "reservePrice": 171000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "635 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "930",
    "title": "1 Storey Terrace House",
    "address": "No. 34, Lorong Sukun 8, Taman Sukun, 14000 Bukit Mertajam, Penang",
    "postcode": "14000",
    "state": "Penang",
    "area": "Bukit Mertajam",
    "reservePrice": 300000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "800 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "931",
    "title": "Apartment",
    "address": "Unit No. 163B-31-01, Centrio Avenue, Jalan Permai, 11700 Gelugor, Penang",
    "postcode": "11700",
    "state": "Penang",
    "area": "Gelugor",
    "reservePrice": 270000,
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
    "id": "932",
    "title": "Flat",
    "address": "Unit No. 2-3-6, Jalan Haji Ahmad, Taman Pusaka, 11600 Jelutong, Penang",
    "postcode": "11600",
    "state": "Penang",
    "area": "Jelutong",
    "reservePrice": 190000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "678 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "933",
    "title": "2.5 Storey Terrace House",
    "address": "No. 23, Lorong Seri Murni 3, Taman Seri Murni, 13800 Butterworth, Penang",
    "postcode": "13800",
    "state": "Penang",
    "area": "Butterworth",
    "reservePrice": 445500,
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
    "id": "934",
    "title": "Flat",
    "address": "Unit No. 55-3-4, Taman Sri Nibong, Jalan Pantai Aziz Ibrahim, 11900 Bayan Lepas, Penang",
    "postcode": "11900",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 160000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "549 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "935",
    "title": "Apartment",
    "address": "Unit No. 88-12-26, Block 88, Puncak Erskine, Jalan Fettes, 10470, Tanjung Tokong, Penang",
    "postcode": "10470",
    "state": "Penang",
    "area": "Tanjung Tokong",
    "reservePrice": 170000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "603 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "936",
    "title": "Apartment",
    "address": "Unit No. 9B-9-5, Jalan Van Praagh, Taman Kheng Tian, 11600 Georgetown, Penang",
    "postcode": "11600",
    "state": "Penang",
    "area": "Georgetown",
    "reservePrice": 350000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "667 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "937",
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
    "id": "938",
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
    "id": "939",
    "title": "1 Storey Terrace House",
    "address": "No. 897, Jalan Residen 4/14, Residen 4, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 162000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "940",
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
    "id": "941",
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
    "id": "942",
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
    "id": "943",
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
    "id": "944",
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
    "id": "945",
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
    "id": "946",
    "title": "Flat",
    "address": "Unit No. B-5-01, Block B, Rumah Pangsa Kulim Square, Kulim Square, 09600 Lunas, Kedah",
    "postcode": "09600",
    "state": "Kedah",
    "area": "Lunas",
    "reservePrice": 59940,
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
    "id": "947",
    "title": "1 Storey Semi Detached House",
    "address": "No. 269, Jalan SP Heights 7, SP Heights, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 216000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "637 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "948",
    "title": "Terrace House",
    "address": "No. 390, Lorong Jelutong 2/1, Taman Jelutong, 06010 Changloon, Kedah",
    "postcode": "06010",
    "state": "Kedah",
    "area": "Changloon",
    "reservePrice": 171000,
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
    "id": "949",
    "title": "1 Storey Terrace House",
    "address": "No. A-87, Jalan Kota Sarang Semut 10, Taman Kota Sarang Semut 2, 06650 Alor Setar, Kedah",
    "postcode": "06650",
    "state": "Kedah",
    "area": "Alor Setar",
    "reservePrice": 260000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "132 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "950",
    "title": "1 Storey Terrace House",
    "address": "No. 457B, Jalan Bujang Utama 7/3, Taman Lembah Bujang Utama, 08100, Bedong, Kedah",
    "postcode": "08100",
    "state": "Kedah",
    "area": "Bedong",
    "reservePrice": 150000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "130 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "951",
    "title": "2 Storey Detached House",
    "address": "No. 1, Batu 2, Jalan Kuala Kedah, 05400 Alor Setar,Kedah",
    "postcode": "05400",
    "state": "Kedah",
    "area": "Alor Setar",
    "reservePrice": 1150000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "783 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "952",
    "title": "1 Storey Semi Detached House",
    "address": "No.2922, Jalan Mahsuri 4/K, Taman Mahsuri, 09400, Padang Serai, Kedah",
    "postcode": "09400",
    "state": "Kedah",
    "area": "Padang Serai",
    "reservePrice": 480000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "682 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "953",
    "title": "1 Storey Semi Detached House",
    "address": "No. 23, 23, Taman Pesona, Jalan Alor Janggus, 06250, Alor Setar, Kedah",
    "postcode": "06250",
    "state": "Kedah",
    "area": "Alor Setar",
    "reservePrice": 291600,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "938 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "954",
    "title": "Terrace House",
    "address": "No. 30, Jalan Semarak Utama, Taman Semarak, Bukit Jenun, 06700 Pendang, Kedah",
    "postcode": "06700",
    "state": "Kedah",
    "area": "Pendang",
    "reservePrice": 234000,
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
    "id": "955",
    "title": "1 Storey Terrace House",
    "address": "No. 441, Jalan PJS 2, Residensi Junjong, 09000 Kulim, Kedah",
    "postcode": "09000",
    "state": "Kedah",
    "area": "Kulim",
    "reservePrice": 300000,
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
    "id": "956",
    "title": "1 Storey Terrace House",
    "address": "No. 13, Jalan Wira 4, Taman Wira Mas, 06200 Jitra, Kedah",
    "postcode": "06200",
    "state": "Kedah",
    "area": "Jitra",
    "reservePrice": 162000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "194 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "957",
    "title": "1 Storey Terrace House",
    "address": "No. 27, Jalan 5/24, Darulaman Perdana, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 200000,
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
    "id": "958",
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
      "https://drive.google.com/thumbnail?id=1vuy9DJrXp8AjGYOtJvgSlF-t3vtuqj6S&sz=w800"
    ]
  },
  {
    "id": "959",
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
    "id": "960",
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
    "id": "961",
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
    "id": "962",
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
    "id": "963",
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
    "id": "964",
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
    "id": "965",
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
    "id": "966",
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
    "id": "967",
    "title": "1 Storey Terrace House",
    "address": "No. 12A, Jalan Orkid 4, Taman Bukit Slim, 35800, Slim River, Perak",
    "postcode": "35800",
    "state": "Perak",
    "area": "Slim River",
    "reservePrice": 230000,
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
    "id": "968",
    "title": "1 Storey Terrace House",
    "address": "No. 19, Jalan Chenderong 2, Taman Chenderong Jaya, 31000 Batu Gajah, Perak",
    "postcode": "31000",
    "state": "Perak",
    "area": "Batu Gajah",
    "reservePrice": 105300,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "206 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "969",
    "title": "1 Storey Terrace House",
    "address": "House No. 15, Jalan Bunga Anggerik, Taman Parit Jaya, 32800 Parit, Perak",
    "postcode": "32800",
    "state": "Perak",
    "area": "Parit",
    "reservePrice": 81000,
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
    "id": "970",
    "title": "1 Storey Terrace House",
    "address": "No. 36, Jalan Baru 13, Taman Tronoh Baru, 31750 Tronoh, Perak",
    "postcode": "31750",
    "state": "Perak",
    "area": "Tronoh",
    "reservePrice": 192000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "971",
    "title": "1 Storey Terrace House",
    "address": "No. 20, Regat Menglembu Timur 11, Taman Menglembu Timur, 31450 Menglembu, Perak",
    "postcode": "31450",
    "state": "Perak",
    "area": "Menglembu",
    "reservePrice": 210000,
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
    "id": "972",
    "title": "1 Storey Terrace House",
    "address": "No. 6, Laluan Panorama 2, Panorama Rapat Indah, 31350 Ipoh, Perak",
    "postcode": "31350",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 240000,
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
    "id": "973",
    "title": "1 Storey Terrace House",
    "address": "No. 82, Lorong Cemerlang 8, Taman Cemerlang, 36400 Hutan Melintang, Perak",
    "postcode": "36400",
    "state": "Perak",
    "area": "Hutan Melintang",
    "reservePrice": 330000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "924 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "974",
    "title": "1 Storey Terrace House",
    "address": "No. 279, Jalan Cempaka 12, Taman Cempaka, 09810 Selama, Kedah",
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
    "id": "975",
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
    "id": "976",
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
    "id": "977",
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
    "id": "978",
    "title": "1 Storey Detached House",
    "address": "No. 21, Lorong Permaipura Villa 2, Permaipura Villa, 08100 Bedong, Kedah",
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
    "id": "979",
    "title": "1 Storey Terrace House",
    "address": "Jalan Mahsuri 1/C, Taman Mahsuri, 09400 Padang Serai, Kedah",
    "postcode": "09400",
    "state": "Kedah",
    "area": "Padang Serai",
    "reservePrice": 260000,
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
    "id": "980",
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
    "id": "981",
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
    "id": "982",
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
    "id": "983",
    "title": "Terrace House",
    "address": "No. 775, Lorong Makmur 9/1, Taman Makmur, 09600 Lunas, Kedah",
    "postcode": "09600",
    "state": "Kedah",
    "area": "Lunas",
    "reservePrice": 180000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "984",
    "title": "1 Storey Terrace Shop",
    "address": "No. 3171, Jalan Mahsuri 7/J, Taman Mahsuri, 09400 Padang Serai, Kedah",
    "postcode": "09400",
    "state": "Kedah",
    "area": "Padang Serai",
    "reservePrice": 182250,
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
    "id": "985",
    "title": "1 Storey Terrace House",
    "address": "No. 2032, Lorong Serai Wangi 12/4, Taman Serai Wangi, 09400 Padang Serai, Kedah",
    "postcode": "09400",
    "state": "Kedah",
    "area": "Padang Serai",
    "reservePrice": 280000,
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
    "id": "986",
    "title": "2 Storey Terrace House",
    "address": "No. 321, Jalan Saujana 1, Bandar SP Saujana, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 490000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "520 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "987",
    "title": "2 Storey Terrace House",
    "address": "No. 8, Lorong Tasek Gelugor Utama 3/6, Taman Tasek Gelugor Utama, 13300 Tasek Gelugor, Penang",
    "postcode": "13300",
    "state": "Penang",
    "area": "Tasek Gelugor",
    "reservePrice": 267300,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "087 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Ro0M95wbY4SBDK9bY2eiul9Ro5Wv9Eb9&sz=w800"
    ]
  },
  {
    "id": "988",
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
      "https://drive.google.com/thumbnail?id=1o5mPVv7RjefK9vh3SFj46AlwxiDQEwen&sz=w800"
    ]
  },
  {
    "id": "989",
    "title": "Flat",
    "address": "Unit No. 7-22-07, Jalan Gangsa, Greenlane Heights, 11600 Jelutong, Penang",
    "postcode": "11600",
    "state": "Penang",
    "area": "Jelutong",
    "reservePrice": 342000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "700 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HOI7-WYLI4N1TJgn24qeLRNCGN3ugHT0&sz=w800"
    ]
  },
  {
    "id": "990",
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
      "https://drive.google.com/thumbnail?id=16-Nucny_cMIAjcKZ-XUC7BuXnj1Ytl7H&sz=w800"
    ]
  },
  {
    "id": "991",
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
      "https://drive.google.com/thumbnail?id=16_RFKlr-2GFkMZl1TjRLC64RbobYJbiT&sz=w800"
    ]
  },
  {
    "id": "992",
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
      "https://drive.google.com/thumbnail?id=1UoSwkQSTLk7ekfQinSeQC_hdV5wm619C&sz=w800"
    ]
  },
  {
    "id": "993",
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
      "https://drive.google.com/thumbnail?id=19sLZt0O_9iu59H_dL9pxN4gCNCQ7Mqda&sz=w800"
    ]
  },
  {
    "id": "994",
    "title": "Apartment",
    "address": "Unit No. 2-10, Blok B, Pangsa Ria, Lebuh Kampung Benggali, 12200 Butterworth, Penang",
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
      "https://drive.google.com/thumbnail?id=1fuPKr6hbsh2tnKybwwHLJIeFTqsWzdZv&sz=w800"
    ]
  },
  {
    "id": "995",
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
    "id": "996",
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
    "id": "997",
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
    "id": "998",
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
    "id": "999",
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
      "https://drive.google.com/thumbnail?id=1ejRh4oo1wln7eOIbrkqbt5dqW-F8DzHy&sz=w800"
    ]
  },
  {
    "id": "1000",
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
      "https://drive.google.com/thumbnail?id=1JfGIPbGSydwjlhDjNMWcuDUMnbuX91z7&sz=w800"
    ]
  },
  {
    "id": "1001",
    "title": "Apartment",
    "address": "Gurney Villa, Jalan Kelawei, 10250 Georgetown, Penang",
    "postcode": "10250",
    "state": "Penang",
    "area": "Georgetown",
    "reservePrice": 730000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "163 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1002",
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
      "https://drive.google.com/thumbnail?id=104Aaf5Pw9TduPdEh6YiJF6PsYwh6SiFv&sz=w800"
    ]
  },
  {
    "id": "1003",
    "title": "3 Storey Terrace Shop Office",
    "address": "No. 36, (Ground Floor, 1 & 2), Medan Angsana 4, Mukim 13, 11500 Ayer Itam, Penang",
    "postcode": "11500",
    "state": "Penang",
    "area": "Ayer Itam",
    "reservePrice": 1900000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "948 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1004",
    "title": "3 Storey Semi Detached Iight Industrial Factory",
    "address": "No. 15, Lorong Valdor Jaya 3, Golden Gateway Perindustrian Valdor, 14200, Sungai Jawi, Penang",
    "postcode": "14200",
    "state": "Penang",
    "area": "Sungai Jawi",
    "reservePrice": 3900000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "817 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1005",
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
    "id": "1006",
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
    "id": "1007",
    "title": "1 Storey Terrace House",
    "address": "No. 162, Jalan Bukit Puteri 1/13A, Bandar Puteri Jaya, 08000 Sungai Petani, Kedah",
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
    "id": "1008",
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
    "id": "1009",
    "title": "1 Storey Terrace House",
    "address": "No. 40, Jalan Sepakat 1, Taman Sepakat, 09600 Lunas, Kedah",
    "postcode": "09600",
    "state": "Kedah",
    "area": "Lunas",
    "reservePrice": 144000,
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
    "id": "1010",
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
    "id": "1011",
    "title": "2.5 Storey Semi Detached House",
    "address": "Jalan Perdana Heights 1/7, Perdana Heights, 08000 Sungai Petani, Kedah",
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
    "id": "1012",
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
    "id": "1013",
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
    "id": "1014",
    "title": "1 Storey Detached House",
    "address": "No. 103, Jalan Yarra 3/3, Bandar Puteri Jaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 570000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "403 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1015",
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
    "id": "1016",
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
    "id": "1017",
    "title": "1 Storey Terrace House",
    "address": "No. 2603, Jalan Lagenda 7/5, Taman Lagenda, 09400 Padang Serai, Kedah",
    "postcode": "09400",
    "state": "Kedah",
    "area": "Padang Serai",
    "reservePrice": 224000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "194 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1018",
    "title": "1 Storey Terrace House",
    "address": "No. 454, Jalan Yarra 5/17, Bandar Puteri Jaya, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 310000,
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
    "id": "1019",
    "title": "Semi Detached House",
    "address": "No. 203, Jalan Cempaka Indah 9, Taman Cempaka Indah, 08010 Bukit Selambau, Kedah",
    "postcode": "08010",
    "state": "Kedah",
    "area": "Bukit Selambau",
    "reservePrice": 224000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "800 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1020",
    "title": "Semi Detached House",
    "address": "No. 386, Jalan SP Heights, SP Heights, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 208000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "637 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1021",
    "title": "1 Storey Terrace House",
    "address": "No. 839, Lorong Kenangan 15, Taman Kenangan, 09410 Padang Serai, Kedah",
    "postcode": "09410",
    "state": "Kedah",
    "area": "Padang Serai",
    "reservePrice": 166050,
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
    "id": "1022",
    "title": "1 Storey Semi Detached House",
    "address": "No. 207, Persiaran SP Heights, SP Heights, 08000 Sungai Petani, Kedah",
    "postcode": "08000",
    "state": "Kedah",
    "area": "Sungai Petani",
    "reservePrice": 234900,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "393 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1023",
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
    "id": "1024",
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
    "id": "1025",
    "title": "3 Storey Shop Office",
    "address": "No. 54, Jalan Perniagaan 2, Pusat Perniagaan Alma, 14000 Bukit Mertajam, Penang",
    "postcode": "14000",
    "state": "Penang",
    "area": "Bukit Mertajam",
    "reservePrice": 700000,
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
    "id": "1026",
    "title": "Terrace House",
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
    "id": "1027",
    "title": "2 Storey Terrace House",
    "address": "No. 625, Jalan PR1MA Tapah 10, Residensi PR1MA Tapah, 35000 Tapah, Perak",
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
    "id": "1028",
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
    "id": "1029",
    "title": "2 Storey Terrace House",
    "address": "No. 5, Persiaran Pengkalan Timur 3, Desa Pakatan, 31650 Ipoh, Perak",
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
    "id": "1030",
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
    "id": "1031",
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
    "id": "1032",
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
    "id": "1033",
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
    "id": "1034",
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
    "id": "1035",
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
    "id": "1036",
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
    "id": "1037",
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
    "id": "1038",
    "title": "1 Storey Terrace House",
    "address": "No. 11, Persiaran Desa Aman S2/7, Seksyen 2, Desa Aman, 09410 Padang Serai, Kedah",
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
    "id": "1039",
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
    "id": "1040",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1041",
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
    "id": "1042",
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
    "id": "1043",
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
    "id": "1044",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1045",
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
    "id": "1046",
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
    "id": "1047",
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
    "id": "1048",
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
    "id": "1049",
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
    "id": "1050",
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
    "id": "1051",
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
    "id": "1052",
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
    "id": "1053",
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
    "id": "1054",
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
    "id": "1055",
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
    "id": "1056",
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
    "id": "1057",
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
    "id": "1058",
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
    "id": "1059",
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
    "id": "1060",
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
    "id": "1061",
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
    "id": "1062",
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
    "id": "1063",
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
    "id": "1064",
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
    "id": "1065",
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
    "id": "1066",
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
    "id": "1067",
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
    "id": "1068",
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
    "id": "1069",
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
    "id": "1070",
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
    "id": "1071",
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
    "id": "1072",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1073",
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
    "id": "1074",
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
    "id": "1075",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1076",
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
    "id": "1077",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1078",
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
    "id": "1079",
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
    "id": "1080",
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
    "id": "1081",
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
    "id": "1082",
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
    "id": "1083",
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
    "id": "1084",
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
    "id": "1085",
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
    "id": "1086",
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
    "id": "1087",
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
    "id": "1088",
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
    "id": "1089",
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
    "id": "1090",
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
    "id": "1091",
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
    "id": "1092",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1093",
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
    "id": "1094",
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
    "id": "1095",
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
    "id": "1096",
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
    "id": "1097",
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
    "id": "1098",
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
    "id": "1099",
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
    "id": "1100",
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
    "id": "1101",
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
    "id": "1102",
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
    "id": "1103",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1104",
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
    "id": "1105",
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
    "id": "1106",
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
    "id": "1107",
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
    "id": "1108",
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
    "id": "1109",
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
    "id": "1110",
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
    "id": "1111",
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
    "id": "1112",
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
    "id": "1113",
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
    "id": "1114",
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
    "id": "1115",
    "title": "1 Storey Terrace House",
    "address": "Jalan Yarra 5/8, Bandar Puteri Jaya, 08000 Sungai Petani, Kedah",
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
    "id": "1116",
    "title": "2 Storey Terrace House",
    "address": "Lorong Residensi A8, Taman Residensi Mesra, 08300 Gurun, Kedah",
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
    "id": "1117",
    "title": "2 Storey Semi Detached House",
    "address": "Solok Bukit Jambul 5, Mukim 13, 11900 Bayan Lepas, Penang",
    "postcode": "11900",
    "state": "Penang",
    "area": "Bayan Lepas",
    "reservePrice": 1579500,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "585 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1118",
    "title": "1 Storey Terrace House",
    "address": "Lorong Belibis 21, Taman Tangling, 14100 Simpang Ampat, Penang",
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
    "id": "1119",
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
    "id": "1120",
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
    "id": "1121",
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
    "id": "1122",
    "title": "2 Storey Terrace House",
    "address": "Lorong Bukit Minyak 17, Taman Bukit Minyak Indah, 14000 Bukit Mertajam, Penang",
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
    "id": "1123",
    "title": "2 Storey Semi Detached House",
    "address": "Persiaran Venice Intan 5/9, Desa Manjung Raya, 32200 Lumut, Perak",
    "postcode": "32200",
    "state": "Perak",
    "area": "Lumut",
    "reservePrice": 432000,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "626 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1124",
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
    "id": "1125",
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
    "id": "1126",
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
    "id": "1127",
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
    "id": "1128",
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
    "id": "1129",
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
    "id": "1130",
    "title": "1 Storey Cluster Semi Detached House",
    "address": "No. 1086, Jalan Residen 2/7, Residen 2, Bandar Baru Setia Awan Perdana, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 198000,
    "auctionDate": "17 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "980 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1131",
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
    "id": "1132",
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
    "id": "1133",
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
    "id": "1134",
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
    "id": "1135",
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
    "id": "1136",
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
    "id": "1137",
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
    "id": "1138",
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
    "id": "1139",
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
    "id": "1140",
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
    "id": "1141",
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
    "id": "1142",
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
    "id": "1143",
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
    "id": "1144",
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
    "id": "1145",
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
    "id": "1146",
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
    "id": "1147",
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
    "id": "1148",
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
    "id": "1149",
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
    "id": "1150",
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
    "id": "1151",
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
    "id": "1152",
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
    "id": "1153",
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
    "id": "1154",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1155",
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
    "id": "1156",
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
    "id": "1157",
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
    "id": "1158",
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
    "id": "1159",
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
    "id": "1160",
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
    "id": "1161",
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
    "id": "1162",
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
    "id": "1163",
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
    "id": "1164",
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
    "id": "1165",
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
    "id": "1166",
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
    "id": "1167",
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
    "id": "1168",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1169",
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
    "id": "1170",
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
    "id": "1171",
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
    "id": "1172",
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
    "id": "1173",
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
    "id": "1174",
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
    "id": "1175",
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
    "id": "1176",
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
    "id": "1177",
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
    "id": "1178",
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
    "id": "1179",
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
    "id": "1180",
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
    "id": "1181",
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
    "id": "1182",
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
    "id": "1183",
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
    "id": "1184",
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
    "id": "1185",
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
    "id": "1186",
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
    "id": "1187",
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
    "id": "1188",
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
    "id": "1189",
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
    "id": "1190",
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
    "id": "1191",
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
    "id": "1192",
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
    "id": "1193",
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
    "id": "1194",
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
    "id": "1195",
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
    "id": "1196",
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
    "id": "1197",
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
    "id": "1198",
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
    "id": "1199",
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
    "id": "1200",
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
    "id": "1201",
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
    "id": "1202",
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
    "id": "1203",
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
    "id": "1204",
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
    "id": "1205",
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
    "id": "1206",
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
    "id": "1207",
    "title": "Terrace House",
    "address": "Jalan Melati Indah 3, Taman Melati Indah, 32200 Lumut, Perak",
    "postcode": "32200",
    "state": "Perak",
    "area": "Lumut",
    "reservePrice": 430000,
    "auctionDate": "7 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1208",
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
    "id": "1209",
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
    "id": "1210",
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
    "id": "1211",
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
    "id": "1212",
    "title": "2 Storey Terrace House",
    "address": "Laluan Batu Gajah Perdana 3, Taman Batu Gajah Perdana, 31550 Pusing, Perak",
    "postcode": "31550",
    "state": "Perak",
    "area": "Pusing",
    "reservePrice": 310000,
    "auctionDate": "8 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1213",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1214",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1215",
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
    "id": "1216",
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
    "id": "1217",
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
    "id": "1218",
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
    "id": "1219",
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
    "id": "1220",
    "title": "1 Storey Semi Detached House",
    "address": "Jalan Ixora 3, Taman Ixora, Jalan Pahang, 35000 Tapah, Perak",
    "postcode": "35000",
    "state": "Perak",
    "area": "Tapah",
    "reservePrice": 450000,
    "auctionDate": "9 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "644 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1221",
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
    "id": "1222",
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
    "id": "1223",
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
    "id": "1224",
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
    "id": "1225",
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
    "id": "1226",
    "title": "2 Storey Terrace House",
    "address": "Hala Kledang Emas 3, Taman Kledang Emas, 30100 Ipoh, Perak",
    "postcode": "30100",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 330000,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "173 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1227",
    "title": "Terrace House",
    "address": "Jalan Aman Damai 2/5, Taman Aman Damai II, Lekir, 32000 Sitiawan, Perak",
    "postcode": "32000",
    "state": "Perak",
    "area": "Sitiawan",
    "reservePrice": 290000,
    "auctionDate": "10 Sep 2026 (Thu)",
    "landArea": "—",
    "builtUp": "099 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1228",
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
    "id": "1229",
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
    "id": "1230",
    "title": "Terrace House",
    "address": "Laluan BTI 1/23A, Bandar Tasik Idaman, 31000 Batu Gajah, Perak",
    "postcode": "31000",
    "state": "Perak",
    "area": "Batu Gajah",
    "reservePrice": 460000,
    "auctionDate": "14 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1231",
    "title": "Apartment",
    "address": "Lapangan Perdana 19, Pangsapuri Lapangan Perdana, 31350 Ipoh, Perak",
    "postcode": "31350",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 360000,
    "auctionDate": "14 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "324 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1232",
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
    "id": "1233",
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
    "id": "1234",
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
    "id": "1235",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1236",
    "title": "1 Storey Semi Detached House",
    "address": "No. 30, Lorong Biru 2/1, Taman Biru II, 32400 Ayer Tawar, Perak",
    "postcode": "32400",
    "state": "Perak",
    "area": "Ayer Tawar",
    "reservePrice": 270000,
    "auctionDate": "21 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "971 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1237",
    "title": "2 Storey Terrace House",
    "address": "No. 48, Jalan Tasek Lama, Taman Tasek, 31400 Ipoh, Perak",
    "postcode": "31400",
    "state": "Perak",
    "area": "Ipoh",
    "reservePrice": 450000,
    "auctionDate": "21 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "831 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1238",
    "title": "1 Storey Terrace House",
    "address": "No. 22, Jalan Mahkota Kampar 7, Taman Mahkota Kampar, 31900 Kampar, Perak",
    "postcode": "31900",
    "state": "Perak",
    "area": "Kampar",
    "reservePrice": 300000,
    "auctionDate": "22 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "357 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1239",
    "title": "2 Storey Terrace House",
    "address": "No. 1, Lintasan Sungai Chemor 3, Taman Bunga Raya, 31200 Chemor, Perak",
    "postcode": "31200",
    "state": "Perak",
    "area": "Chemor",
    "reservePrice": 370000,
    "auctionDate": "22 Sep 2026 (Tue)",
    "landArea": "—",
    "builtUp": "755 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1240",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1241",
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
    "id": "1242",
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
    "id": "1243",
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
    "id": "1244",
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
    "id": "1245",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1246",
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
    "id": "1247",
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
    "id": "1248",
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
    "id": "1249",
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
    "id": "1250",
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
    "id": "1251",
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
    "id": "1252",
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
    "id": "1253",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1254",
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
    "id": "1255",
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
    "id": "1256",
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
    "id": "1257",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1258",
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
    "id": "1259",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1xkuIMQJzZbdstTCDI81J9FHtqKQ-sQqF&sz=w800"
    ]
  },
  {
    "id": "1260",
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
    "id": "1261",
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
    "id": "1262",
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
    "id": "1263",
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
    "id": "1264",
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
    "id": "1265",
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
    "id": "1266",
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
    "id": "1267",
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
    "id": "1268",
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
    "id": "1269",
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
    "id": "1270",
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
    "id": "1271",
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
    "id": "1272",
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
    "id": "1273",
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
    "id": "1274",
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
    "id": "1275",
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
    "id": "1276",
    "title": "Apartment",
    "address": "Unit No. 04-08, Blok Q, Jalan Cenderai 19, Bandar Baru Kota Puteri, 81750 Masai, Johor",
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
      "https://drive.google.com/thumbnail?id=1Mden_k5q8UGyYaoPn-rOHLQPZCIHPAQ-&sz=w800"
    ]
  },
  {
    "id": "1277",
    "title": "1 Storey Terrace House",
    "address": "No. 109, Jalan Bestari 17/1, Taman Bestari Indah 1, 81800 Ulu Tiram, Johor",
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
    "id": "1278",
    "title": "1 Storey Terrace House",
    "address": "No. 52, Jalan Terkukur, Taman Sia Her Yam, 85000 Segamat, Johor",
    "postcode": "85000",
    "state": "Johor",
    "area": "Segamat",
    "reservePrice": 162000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "760 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1279",
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
    "id": "1280",
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
    "id": "1281",
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
    "id": "1282",
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
    "id": "1283",
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
    "id": "1284",
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
    "id": "1285",
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
    "id": "1286",
    "title": "1 Storey Terrace House",
    "address": "No. 2447, Jalan Belian 2, Bandar Putra, 81000 Kulai, Johor",
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
    "id": "1287",
    "title": "Apartment",
    "address": "Unit No. #07-08, Blok B, Pangsapuri Sri Akasia, Jalan Titiwangsa Utama, Taman Tampoi Indah, 81200, Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 342000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "044 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1288",
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
    "id": "1289",
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
    "id": "1290",
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
    "id": "1291",
    "title": "2 Storey Terrace House",
    "address": "No. 22, Jalan Laman Citra 18, Laman Citra, 81500 Pontian, Johor",
    "postcode": "81500",
    "state": "Johor",
    "area": "Pontian",
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
    "id": "1292",
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
    "id": "1293",
    "title": "2 Storey Terrace House",
    "address": "No. 18, Jalan Oren 5, Taman Sri Pelangi, 85000 Segamat, Johor",
    "postcode": "85000",
    "state": "Johor",
    "area": "Segamat",
    "reservePrice": 120000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "732 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1294",
    "title": "2 Storey Terrace House",
    "address": "No. 23, Jalan Mawar 16, Taman Mawar, 81700 Pasir Gudang, Johor",
    "postcode": "81700",
    "state": "Johor",
    "area": "Pasir Gudang",
    "reservePrice": 330000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "097 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1295",
    "title": "2 Storey Semi Detached House",
    "address": "No. 6, Jalan Jati 12, Taman Desaru Utama, 81930 Bandar Penawar, Pengerang, Johor",
    "postcode": "81930",
    "state": "Johor",
    "area": "Pengerang",
    "reservePrice": 583200,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "004 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1296",
    "title": "Bayu Puteri 2 Apartment",
    "address": "Unit No. #02-05, Blok D, Bayu Puteri 2 Apartment, Jalan Bayu Puteri 1/2, Taman Bayu Puteri, 80150 Johor Bahru, Johor",
    "postcode": "80150",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 225000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "904 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1297",
    "title": "1 Storey Semi Detached House",
    "address": "No. 46, Jalan Sri Ehsan 3, Taman Sri Ehsan, 86000 Kluang, Johor",
    "postcode": "86000",
    "state": "Johor",
    "area": "Kluang",
    "reservePrice": 230291,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "326 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1298",
    "title": "2 Storey Terrace House",
    "address": "No. 49, Jalan Durian, Taman Kota Jaya, 81900 Kota Tinggi, Johor",
    "postcode": "81900",
    "state": "Johor",
    "area": "Kota Tinggi",
    "reservePrice": 330000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "002 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1299",
    "title": "Town House",
    "address": "Unit No. J-04-12, Pangsapuri Sri Awana, Jalan Silat Lincah, Bandar Selesa Jaya, 81300 Skudai, Johor",
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
    "id": "1300",
    "title": "1 Storey Terrace House",
    "address": "No. 234, Jalan Azam 3, Taman Kangkar Baru, 84400 Bukit Kangkar, Johor",
    "postcode": "84400",
    "state": "Johor",
    "area": "Bukit Kangkar",
    "reservePrice": 405000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "938 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1301",
    "title": "2 Storey Terrace House",
    "address": "No. 9, Jalan Eko Tropika 2/28 (Eco Tropics), Taman Kota Masai, 81700 Pasir Gudang, Johor",
    "postcode": "81700",
    "state": "Johor",
    "area": "Pasir Gudang",
    "reservePrice": 495000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1302",
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
    "id": "1303",
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
    "id": "1304",
    "title": "1 Storey Terrace House",
    "address": "No. 21, Jalan Lembing 23, Taman Puteri Wangsa, 81800 Ulu Tiram, Johor",
    "postcode": "81800",
    "state": "Johor",
    "area": "Ulu Tiram",
    "reservePrice": 430000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1305",
    "title": "2 Storey Terrace House",
    "address": "Residensi Botani 1, Persiaran Eko Botani 2, Taman Eko Botani 2, 79100 Iskandar Puteri, Johor",
    "postcode": "79100",
    "state": "Johor",
    "area": "Iskandar Puteri",
    "reservePrice": 940000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "328 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1306",
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
    "id": "1307",
    "title": "1 Storey Terrace House",
    "address": "No. 26, Jalan Jambu Bertih, Taman Sentosa, 83000 Batu Pahat, Johor",
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
    "id": "1308",
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
    "id": "1309",
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
    "id": "1310",
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
    "id": "1311",
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
    "id": "1312",
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
    "title": "Apartment",
    "address": "Unit No. 02-01, Blok G, Pangsapuri Seri Mutiara, Bandar Seri Alam, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 291600,
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
    "id": "1315",
    "title": "1 Storey Terrace House",
    "address": "No. 8, Jalan Dahlia 24/7, Taman Dahlia, 81200 Johor Bahru, Johor",
    "postcode": "81200",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 280000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "040 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1316",
    "title": "1 Storey Terrace House",
    "address": "No. 73, Jalan Kempas Indah 4/2, Taman Kempas Indah, 81300 Skudai, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Skudai",
    "reservePrice": 450000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1317",
    "title": "Apartment",
    "address": "Unit No. 06-03, Blok B, Pangsapuri Meridian Medini, Jalan Legoland, Bandar Medini Iskandar, 79250 Iskandar Puteri, Johor",
    "postcode": "79250",
    "state": "Johor",
    "area": "Iskandar Puteri",
    "reservePrice": 470000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "744 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1318",
    "title": "Agricultural Land",
    "address": "Lot 6004, Mukim Minyak Beku, 83000, Daerah Batu Pahat, Johor",
    "postcode": "83000",
    "state": "Johor",
    "area": "Daerah Batu Pahat",
    "reservePrice": 1110000,
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
    "id": "1319",
    "title": "Apartment",
    "address": "Unit No. 08-01, Block C, Pangsapuri Seri Mutiara, Bandar Seri Alam, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 254000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "323 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1320",
    "title": "1 Storey Terrace House",
    "address": "No. 10434, Jalan Merbuk 8, Bandar Putra, 81000, Kualai, Johor",
    "postcode": "10434",
    "state": "Johor",
    "area": "Kualai",
    "reservePrice": 400000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1321",
    "title": "1 Storey Terrace House",
    "address": "No. 2, Jalan Kejayaan 30, Taman Universiti, 81300, Skudai, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Skudai",
    "reservePrice": 380000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "883 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1322",
    "title": "Agricultural Land",
    "address": "Lot 6003, Mukim Minyak Beku, 83000, Daerah Batu Pahat, Johor",
    "postcode": "83000",
    "state": "Johor",
    "area": "Daerah Batu Pahat",
    "reservePrice": 1066000,
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
    "id": "1323",
    "title": "Agricultural Land",
    "address": "Lot 7395, Mukim Minyak Beku, 83000 Batu Pahat, Johor",
    "postcode": "83000",
    "state": "Johor",
    "area": "Batu Pahat",
    "reservePrice": 1150000,
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
    "id": "1324",
    "title": "1 Storey Terrace House",
    "address": "No. 1, Jalan EH 38, Taman Evergreen Heights, 83000 Batu Pahat, Johor",
    "postcode": "83000",
    "state": "Johor",
    "area": "Batu Pahat",
    "reservePrice": 620000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "156 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1325",
    "title": "1 Storey Terrace House",
    "address": "No. 86, Jalan Impian Emas 16, Taman Impian Emas, 81300 Skudai, Johor",
    "postcode": "81300",
    "state": "Johor",
    "area": "Skudai",
    "reservePrice": 500000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "492 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1326",
    "title": "Flat",
    "address": "Unit No. 03-10, Block LM13, Jalan Enau 16, Taman Daya, 81100 Johor Bahru, Johor",
    "postcode": "81100",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 180000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "667 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1327",
    "title": "Apartment",
    "address": "Unit No. 02-04, Blok E, Pangsapuri Seri Mutiara, Jalan Persiaran Seri Alam, Bandar Seri Alam, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 340200,
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
    "id": "1328",
    "title": "Shop Office",
    "address": "Unit No. A-04-21, Block A, Pusat Perdagangan Ekoflora, Jalan Ekoflora 7/3, Taman Ekoflora, 81100 Johor Bahru, Johor",
    "postcode": "81100",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 520000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "194 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1329",
    "title": "Apartment",
    "address": "Unit No. 20-03, Block C, Pangsapuri Seri Mutiara, Jalan Persiaran Seri Alam, Bandar Seri Alam, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 306180,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "410 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1330",
    "title": "2 Storey Terrace House",
    "address": "No. 32, Jalan Mutiara Gading Utama 3/1, Taman Mutiara Gading, 83000 Batu Pahat, Johor",
    "postcode": "83000",
    "state": "Johor",
    "area": "Batu Pahat",
    "reservePrice": 459000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1331",
    "title": "2 Storey Terrace House",
    "address": "No. 1052, Jalan Seri Impian 6/42, Bandar Seri Impian, 86000, Kluang, Johor",
    "postcode": "86000",
    "state": "Johor",
    "area": "Kluang",
    "reservePrice": 460000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "722 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1332",
    "title": "2 Storey Terrace House",
    "address": "No. 28, Jalan Jed Sadu 3, Bandar Seri Alam, 81750 Masai, Johor",
    "postcode": "81750",
    "state": "Johor",
    "area": "Masai",
    "reservePrice": 600000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "856 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1333",
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
    "id": "1334",
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
    "id": "1335",
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
    "id": "1336",
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
    "id": "1337",
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
    "id": "1338",
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
    "id": "1339",
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
    "id": "1340",
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
    "id": "1341",
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
    "id": "1342",
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
    "id": "1343",
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
    "id": "1344",
    "title": "2 Storey Terrace House",
    "address": "No. 46, Jalan Impian 2/6, Taman Kota Impian, 81800 Ulu Tiram, Johor",
    "postcode": "81800",
    "state": "Johor",
    "area": "Ulu Tiram",
    "reservePrice": 600000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "650 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1345",
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
    "id": "1346",
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
    "id": "1347",
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
    "id": "1348",
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
    "id": "1349",
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
    "id": "1350",
    "title": "1 Storey Terrace House",
    "address": "No. 57, Jalan Pulai Indah 3/14, Taman Pulai Indah 2, 81110 Kangkar, Pulai, Johor",
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
    "id": "1351",
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
    "id": "1352",
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
    "id": "1353",
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
    "id": "1354",
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
    "id": "1355",
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
    "id": "1356",
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
    "id": "1357",
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
    "id": "1358",
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
    "id": "1359",
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
    "id": "1360",
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
    "id": "1361",
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
    "id": "1362",
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
    "id": "1363",
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
    "id": "1364",
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
    "id": "1365",
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
    "id": "1366",
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
    "id": "1367",
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
    "id": "1368",
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
    "id": "1369",
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
    "id": "1370",
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
    "id": "1371",
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
    "id": "1372",
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
    "id": "1373",
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
    "id": "1374",
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
    "id": "1375",
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
    "id": "1376",
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
    "id": "1377",
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
    "id": "1378",
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
    "id": "1379",
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
    "id": "1380",
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
    "id": "1381",
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
    "id": "1382",
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
    "id": "1383",
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
    "id": "1384",
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
    "id": "1385",
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
    "id": "1386",
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
    "id": "1387",
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
    "id": "1388",
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
    "id": "1389",
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
    "id": "1390",
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
    "id": "1391",
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
    "id": "1392",
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
    "id": "1393",
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
    "id": "1394",
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
    "id": "1395",
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
    "id": "1396",
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
    "id": "1397",
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
    "id": "1398",
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
    "id": "1399",
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
    "id": "1400",
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
    "id": "1401",
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
    "id": "1402",
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
    "id": "1403",
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
    "id": "1404",
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
    "id": "1405",
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
    "id": "1406",
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
    "id": "1407",
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
    "id": "1408",
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
    "id": "1409",
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
    "id": "1410",
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
    "id": "1411",
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
    "id": "1412",
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
    "id": "1413",
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
    "id": "1414",
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
    "id": "1415",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1416",
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
    "id": "1417",
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
    "id": "1418",
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
    "id": "1419",
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
    "id": "1420",
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
    "id": "1421",
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
    "id": "1422",
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
    "id": "1423",
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
    "id": "1424",
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
    "id": "1425",
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
    "id": "1426",
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
    "id": "1427",
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
    "id": "1428",
    "title": "2 Storey Terrace House",
    "address": "No. 11, Jalan Ekoflora 3/7, Taman Ekoflora, 81100 Johor Bahru, Johor",
    "postcode": "81100",
    "state": "Johor",
    "area": "Johor Bahru",
    "reservePrice": 1050000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1429",
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
    "id": "1430",
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
    "id": "1431",
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
    "id": "1432",
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
    "id": "1433",
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
    "id": "1434",
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
    "id": "1435",
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
    "id": "1436",
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
    "id": "1437",
    "title": "2 Storey Terrace House",
    "address": "Jalan Melati 1C, Taman Sri Penawar, 81930 Bandar Penawar, Johor",
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
    "id": "1438",
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
    "id": "1439",
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
    "id": "1440",
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
    "id": "1441",
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
    "id": "1442",
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
    "id": "1443",
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
    "id": "1444",
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
    "id": "1445",
    "title": "2 Storey Terrace House",
    "address": "Jalan Serindit 14, Taman Scientex, 81700 Pasir Gudang, Johor",
    "postcode": "81700",
    "state": "Johor",
    "area": "Pasir Gudang",
    "reservePrice": 340000,
    "auctionDate": "18 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1446",
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
    "id": "1447",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1HGvdmFmI1ZI-vfhtPfAN6BBC9Jxw-xOg&sz=w800"
    ]
  },
  {
    "id": "1448",
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
    "id": "1449",
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
    "id": "1450",
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
    "id": "1451",
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
    "id": "1452",
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
    "id": "1453",
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
    "id": "1454",
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
    "id": "1455",
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
    "id": "1456",
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
    "id": "1457",
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
    "id": "1458",
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
    "id": "1459",
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
    "id": "1460",
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
    "id": "1461",
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
    "id": "1462",
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
    "id": "1463",
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
    "id": "1464",
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
    "id": "1465",
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
    "id": "1466",
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
    "id": "1467",
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
    "id": "1468",
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
    "id": "1469",
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
    "id": "1470",
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
    "id": "1471",
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
    "id": "1472",
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
    "id": "1473",
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
    "id": "1474",
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
    "id": "1475",
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
    "id": "1476",
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
    "id": "1477",
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
    "id": "1478",
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
    "id": "1479",
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
    "id": "1480",
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
    "id": "1481",
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
    "id": "1482",
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
    "id": "1483",
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
    "id": "1484",
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
    "id": "1485",
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
    "id": "1486",
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
    "id": "1487",
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
    "id": "1488",
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
    "id": "1489",
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
    "id": "1490",
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
    "id": "1491",
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
    "id": "1492",
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
    "id": "1493",
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
    "id": "1494",
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
    "id": "1495",
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
    "id": "1496",
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
    "id": "1497",
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
    "id": "1498",
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
    "id": "1499",
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
    "id": "1500",
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
    "id": "1501",
    "title": "2 Storey Terrace House",
    "address": "No. 298, Lorong Seng Goon Garden 5A2, Taman Springfield, 93250 Kuching, Sarawak",
    "postcode": "93250",
    "state": "Sarawak",
    "area": "Kuching",
    "reservePrice": 640000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "908 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1502",
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
    "id": "1503",
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
    "id": "1504",
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
    "id": "1505",
    "title": "1 Storey Terrace House",
    "address": "No. 15, King's Park (Phase II) , Jalan Bintulu-Sibu, 97200, Tatau, Sarawak",
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
    "id": "1506",
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
    "id": "1507",
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
    "id": "1508",
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
    "id": "1509",
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
    "id": "1510",
    "title": "2 Storey Terrace Shop House",
    "address": "Lot 560, Sepupok Bazaar, Off Jalan Sungai Saeh, 98200 Batu Niah, Sarawak",
    "postcode": "98200",
    "state": "Sarawak",
    "area": "Batu Niah",
    "reservePrice": 364500,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "126 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1511",
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
    "id": "1512",
    "title": "Detached House",
    "address": "Lot 3350, Block 13, Desa Bahagia, 98000 Miri, Sarawak",
    "postcode": "98000",
    "state": "Sarawak",
    "area": "Miri",
    "reservePrice": 510300,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "597 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1513",
    "title": "1 Storey Terrace Dwelling House",
    "address": "Lot 7008, Lorong Murni 2A-1A, Desa Murni, Bandar Baru Permyjaya, Tudan, 98000 Miri, Sarawak",
    "postcode": "98000",
    "state": "Sarawak",
    "area": "Miri",
    "reservePrice": 300000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "614 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1514",
    "title": "Dwelling House",
    "address": "Lot 13840, Lorong Pahlawan 2A/1, Taman Jelita Off, Taman Tunku, 98000 Miri, Sarawak",
    "postcode": "13840",
    "state": "Sarawak",
    "area": "Miri",
    "reservePrice": 620000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "429 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1515",
    "title": "Dwelling House",
    "address": "Lot 4100, Block 5, Lambir Land District, 98000 Miri, Sarawak",
    "postcode": "98000",
    "state": "Sarawak",
    "area": "Miri",
    "reservePrice": 290000,
    "auctionDate": "20 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "115 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1516",
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
    "id": "1517",
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
    "id": "1518",
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
    "id": "1519",
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
    "id": "1520",
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
    "id": "1521",
    "title": "2 Storey Terrace Dwelling House",
    "address": "Lot 7453, Greenville, Off Jalan Lutong-Kuala Baram, 98000 Miri, Sarawak",
    "postcode": "98000",
    "state": "Sarawak",
    "area": "Miri",
    "reservePrice": 400950,
    "auctionDate": "27 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "444 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1522",
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
    "id": "1523",
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
    "id": "1524",
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
    "id": "1525",
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
    "id": "1526",
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
    "id": "1527",
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
    "id": "1528",
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
    "id": "1529",
    "title": "Semi Detached House",
    "address": "Jalan Poh Yew, Off Jalan Upper Lanang, 96000 Sibu, Sarawak",
    "postcode": "96000",
    "state": "Sarawak",
    "area": "Sibu",
    "reservePrice": 142155,
    "auctionDate": "25 Sep 2026 (Fri)",
    "landArea": "—",
    "builtUp": "271 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1530",
    "title": "1 Storey Terrace House",
    "address": "Section 65, Lorong Matang Jaya 6A9, Taman Peony, Matang Jaya, Off 4th Miles, 93050 Kuching, Sarawak",
    "postcode": "93050",
    "state": "Sarawak",
    "area": "Kuching",
    "reservePrice": 348300,
    "auctionDate": "30 Sep 2026 (Wed)",
    "landArea": "—",
    "builtUp": "656 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1Glf8M4XESX-efnPKnqjd5DYWv3Naqar8&sz=w800"
    ]
  },
  {
    "id": "1531",
    "title": "1 Storey Terrace House",
    "address": "No. 37, Jalan Melur Impian 6, Taman Melur Impian, 28300 Triang, Pahang",
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
    "id": "1532",
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
    "id": "1533",
    "title": "1 Storey Terrace House",
    "address": "No. 23, Lorong Kempadang Sejahtera 16, Kempadang, 26060 Kuantan, Pahang",
    "postcode": "26060",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 230000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "518 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1534",
    "title": "1 Storey Terrace House",
    "address": "No. 21, Lorong IM 15/23, Indera Mahkota 15, 25200 Kuantan, Pahang",
    "postcode": "25200",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 315900,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "940 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1535",
    "title": "1 Storey Terrace House",
    "address": "No. 25, Lorong Pandan Damai 1/14, Taman Pandan Damai 1, 25150 Kuantan, Pahang",
    "postcode": "25150",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 200000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "496 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1536",
    "title": "1 Storey Semi Detached House",
    "address": "No. 68, Jalan Shahbandar 3, 27600 Raub, Pahang",
    "postcode": "27600",
    "state": "Pahang",
    "area": "Raub",
    "reservePrice": 300000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "200 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1537",
    "title": "Studio Apartment",
    "address": "Unit No. B-L5-35, IM 9/2, Indera Mahkota 9, Valley Suite Apartment, 25200 Kuantan, Pahang",
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
    "id": "1538",
    "title": "2 Storey Semi Detached House",
    "address": "No. 9, Lorong Bandar Putra 3/3, Perumahan Bandar Putra, 26060 Kuantan, Pahang",
    "postcode": "26060",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 393660,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "447 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1539",
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
    "id": "1540",
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
    "id": "1541",
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
    "id": "1542",
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
    "id": "1543",
    "title": "Semi Detached House",
    "address": "No. 21, Jalan Bahagia 34, Bahagia Residence, 28000 Temerloh, Pahang",
    "postcode": "28000",
    "state": "Pahang",
    "area": "Temerloh",
    "reservePrice": 580000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "911 sq.ft",
    "tenure": "Freehold",
    "type": "Semi-D/Bungalow",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1544",
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
    "id": "1545",
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
    "id": "1546",
    "title": "2 Storey Shop Office",
    "address": "No. 44, Lorong Zamrud 2, Nadi Kota, 26400 Bandar Tun Abdul Razak Jengka, Pahang",
    "postcode": "26400",
    "state": "Pahang",
    "area": "Bandar Tun Abdul Razak Jengka",
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
    "id": "1547",
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
    "id": "1548",
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
    "id": "1549",
    "title": "Shop Office",
    "address": "Unit No. A-61, Perumahan Rasau Aman, 25150 Kuantan, Pahang",
    "postcode": "25150",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 334700,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "399 sq.ft",
    "tenure": "Freehold",
    "type": "Commercial",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1550",
    "title": "1 Storey Terrace House",
    "address": "No. 20, Lorong SDS 4, Perumahan Seri Damai Sejahtera, 25150 Kuantan, Pahang",
    "postcode": "25150",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 159672.5,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "302 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1551",
    "title": "2 Storey Shop Office",
    "address": "Unit No. A-121, Lorong IM 16/1, Indera Mahkota 16, 25200 Kuantan, Pahang",
    "postcode": "25200",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 328050,
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
    "id": "1552",
    "title": "1 Storey Semi Detached House",
    "address": "No. 373, Taman Sepekan Jaya, 26600 Pekan, Pahang",
    "postcode": "26600",
    "state": "Pahang",
    "area": "Pekan",
    "reservePrice": 122825,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "948 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1553",
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
    "id": "1554",
    "title": "3 Storey Shop Office",
    "address": "No. 3, Jalan Chengal Baru 6, Pusat Perniagaan Chengal, 28000 Temerloh, Pahang",
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
    "id": "1555",
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
    "id": "1556",
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
    "id": "1557",
    "title": "2 Storey Semi Detached House",
    "address": "No. 53, Lorong IM 10/15, Bukit Istana, Bandar Indera Mahkota, 25200 Kuantan, Pahang",
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
    "id": "1558",
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
    "id": "1559",
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
    "id": "1560",
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
    "id": "1561",
    "title": "1 Storey Terrace House",
    "address": "No. 1, Lorong Seri Mahkota Permai 28, Taman Tunas Mahkota, 25150 Kuantan, Pahang",
    "postcode": "25150",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 300000,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "200 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1562",
    "title": "2 Storey Semi Detached House",
    "address": "No. 16, Jalan KS 1/2, Bandar Kota Sri Ahmad Shah, 25200 Kuantan, Pahang",
    "postcode": "25200",
    "state": "Pahang",
    "area": "Kuantan",
    "reservePrice": 425152.8,
    "auctionDate": "6 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "240 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1563",
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
    "id": "1564",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1565",
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
    "id": "1566",
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
    "id": "1567",
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
    "id": "1568",
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
    "id": "1569",
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
    "id": "1570",
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
    "id": "1571",
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
    "id": "1572",
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
    "id": "1573",
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
    "id": "1574",
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
    "id": "1575",
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
    "id": "1576",
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
    "id": "1577",
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
    "id": "1578",
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
    "id": "1579",
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
    "id": "1580",
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
    "id": "1581",
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
    "id": "1582",
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
    "id": "1583",
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
    "id": "1584",
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
    "id": "1585",
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
    "id": "1586",
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
    "id": "1587",
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
    "id": "1588",
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
    "id": "1589",
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
    "id": "1590",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1591",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1jwJ55WbImFLo_6zZETKZy0n2p7EhWrF1&sz=w800"
    ]
  },
  {
    "id": "1592",
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
    "id": "1593",
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
    "id": "1594",
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
    "id": "1595",
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
    "id": "1596",
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
    "id": "1597",
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
    "id": "1598",
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
    "id": "1599",
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
    "id": "1600",
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
    "id": "1601",
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
    "id": "1602",
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
    "id": "1603",
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
    "id": "1604",
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
    "id": "1605",
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
    "id": "1606",
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
    "id": "1607",
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
    "id": "1608",
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
    "id": "1609",
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
    "id": "1610",
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
    "id": "1611",
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
    "id": "1612",
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
    "id": "1613",
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
    "id": "1614",
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
    "id": "1615",
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
    "id": "1616",
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
    "id": "1617",
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
    "id": "1618",
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
    "id": "1619",
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
    "id": "1620",
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
    "id": "1621",
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
    "id": "1622",
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
    "id": "1623",
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
    "id": "1624",
    "title": "Apartment",
    "address": "Unit No. C-03-07, Pangsapuri Gadong Harmoni @ Ambience Residence, Jalan Pulau Gadong, 75200, Melaka",
    "postcode": "75200",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 280000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "087 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1LuIs3Co07uiss6tTvU-J5kumK4aRp6Yq&sz=w800"
    ]
  },
  {
    "id": "1625",
    "title": "2 Storey Terrace House",
    "address": "No. 43, Jalan OZ 12, Taman Ozana Impian, 75450 Bukit Katil, Melaka",
    "postcode": "75450",
    "state": "Melaka",
    "area": "Bukit Katil",
    "reservePrice": 248000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "539 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1rjXKFVJxtb8GmbBJbF2Rr6tWlAvo91ps&sz=w800"
    ]
  },
  {
    "id": "1626",
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
    "id": "1627",
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
    "id": "1628",
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
    "id": "1629",
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
    "id": "1630",
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
    "id": "1631",
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
    "id": "1632",
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
    "id": "1633",
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
    "id": "1634",
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
    "id": "1635",
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
    "id": "1636",
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
    "id": "1637",
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
    "id": "1638",
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
    "id": "1639",
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
    "id": "1640",
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
    "id": "1641",
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
    "id": "1642",
    "title": "2 Storey Terrace House",
    "address": "Jalan KJ 59, Taman Krubong Jaya, 75250 Krubong, Melaka",
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
    "id": "1643",
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
    "id": "1644",
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
    "id": "1645",
    "title": "Apartment",
    "address": "Unit No. A-3-8 (Developer Parcel No. A4-4-B), Block A, Pangsapuri Bunga Raya, Hang Tuah Jaya, Bukit Beruang, 75450, Melaka",
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
    "id": "1646",
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
    "id": "1647",
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
    "id": "1648",
    "title": "2 Storey Terrace House",
    "address": "No. 104, Jalan Abadi 5, Taman Malim Jaya, 75250 Hang Tuah Jaya, Melaka",
    "postcode": "75250",
    "state": "Melaka",
    "area": "Hang Tuah Jaya",
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
    "id": "1649",
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
    "id": "1650",
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
    "id": "1651",
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
    "id": "1652",
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
    "id": "1653",
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
    "id": "1654",
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
    "id": "1655",
    "title": "Hotel Suite",
    "address": "Unit No. S2145 (11 Unit), Tingkat 22, Hatten Hotel, Jalan Merdeka, Bandar Hilir, 75000, Melaka",
    "postcode": "75000",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 5274000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1-pjW_5OxGvqS5qSVUBWgB1AIZ97LypfM&sz=w800"
    ]
  },
  {
    "id": "1656",
    "title": "1 Storey Terrace House",
    "address": "No. 14, Lorong 2, Jalan RI 2, Taman Rambai Idaman, 75260 Bukit Rambai, Melaka",
    "postcode": "75260",
    "state": "Melaka",
    "area": "Bukit Rambai",
    "reservePrice": 220000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "400 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1657",
    "title": "Hotel Suite",
    "address": "Unit No. H1210 (11 Unit), No. 13, Hatten Hotel, Jalan Merdeka, Bandar Hilir, 75000, Melaka",
    "postcode": "75000",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 2997000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1-pjW_5OxGvqS5qSVUBWgB1AIZ97LypfM&sz=w800"
    ]
  },
  {
    "id": "1658",
    "title": "1 Storey Terrace House",
    "address": "No. JB 3348, Jalan MU 9, Taman Merlimau Utara, 77300 Merlimau, Melaka",
    "postcode": "77300",
    "state": "Melaka",
    "area": "Merlimau",
    "reservePrice": 160000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "840 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1659",
    "title": "Hotel Suite",
    "address": "Unit No. H2125 (7 Unit), Tingkat 22, Hatten Hotel, Jalan Merdeka, Bandar Hilir, 75000, Melaka",
    "postcode": "75000",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 6552000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1-pjW_5OxGvqS5qSVUBWgB1AIZ97LypfM&sz=w800"
    ]
  },
  {
    "id": "1660",
    "title": "1 Storey Terrace House",
    "address": "No. JB 7634, Jalan TSP 3D, Taman Seri Pertam, 77300 Merlimau, Melaka",
    "postcode": "77300",
    "state": "Melaka",
    "area": "Merlimau",
    "reservePrice": 180000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "200 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1661",
    "title": "2 Storey Cluster House",
    "address": "No. 262, Jalan Kasa Height 29, Taman Kasa Height Fasa II, 78000, Alor Gajah, Melaka",
    "postcode": "78000",
    "state": "Melaka",
    "area": "Alor Gajah",
    "reservePrice": 380000,
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
    "id": "1662",
    "title": "Terrace House",
    "address": "SI 139, Jalan Seruling Jaya Utama, Taman Seruling Jaya, 78300 Masjid Tanah, Melaka",
    "postcode": "78300",
    "state": "Melaka",
    "area": "Masjid Tanah",
    "reservePrice": 240000,
    "auctionDate": "5 Aug 2026 (Wed)",
    "landArea": "—",
    "builtUp": "300 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1PPikL2t8hh93A9gd0tkINFMqUVDDbrDA&sz=w800"
    ]
  },
  {
    "id": "1663",
    "title": "1 Storey Terrace House",
    "address": "SI 319, Jalan Seruling Jaya 13, Taman Seruling Jaya, 78300 Masjid Tanah, Melaka",
    "postcode": "78300",
    "state": "Melaka",
    "area": "Masjid Tanah",
    "reservePrice": 178200,
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
    "id": "1664",
    "title": "1 Storey Terrace House",
    "address": "SI 371, Jalan Seruling Jaya 14, Taman Seruling Jaya, 78300 Masjid Tanah, Melaka",
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
    "id": "1665",
    "title": "2 Storey Terrace House",
    "address": "No. 39, Jalan Angkasa Nuri 37, Taman Angkasa Nuri, 76100, Hang Tuah Jaya, Durian Tunggal, Melaka",
    "postcode": "76100",
    "state": "Melaka",
    "area": "Durian Tunggal",
    "reservePrice": 400000,
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
    "id": "1666",
    "title": "2 Storey Terrace House",
    "address": "No. 120, Jalan Selendang 8, Taman Satu Krubong, 75260, Melaka",
    "postcode": "75260",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 364500,
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
    "id": "1667",
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
    "id": "1668",
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
    "id": "1669",
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
    "id": "1670",
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
    "id": "1671",
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
    "id": "1672",
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
    "id": "1673",
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
    "id": "1674",
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
    "id": "1675",
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
    "id": "1676",
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
    "id": "1677",
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
    "id": "1678",
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
    "id": "1679",
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
    "id": "1680",
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
    "id": "1681",
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
    "id": "1682",
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
    "id": "1683",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1684",
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
    "id": "1685",
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
    "id": "1686",
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
    "id": "1687",
    "title": "Apartment",
    "address": "Unit No. D-11-03, 11th Floor, Block D, Residensi Seri Serindit, Jalan Taman Bandaraya, 75400, Melaka",
    "postcode": "75400",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 270000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1g7iIkxvERBjjdhPLkTdD7JcqqP9b21Sv&sz=w800"
    ]
  },
  {
    "id": "1688",
    "title": "Service Apartment",
    "address": "Unit No. B-31-01, Storey No. 31, Tower B, Kondominium Kota Syahbandar, Kota Syahbandar, 75200, Melaka",
    "postcode": "75200",
    "state": "Melaka",
    "area": "Melaka",
    "reservePrice": 490000,
    "auctionDate": "13 Aug 2026 (Thu)",
    "landArea": "—",
    "builtUp": "—",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1d2dq29PkhRL5EQvd_NCOBCfOqcgISZh9&sz=w800"
    ]
  },
  {
    "id": "1689",
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
    "id": "1690",
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
    "id": "1691",
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
    "id": "1692",
    "title": "1 Storey Terrace House",
    "address": "Rumah Murah Pantei Peringgit (1), 75400, Melaka",
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
    "id": "1693",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1eUXMVoLWkidcbhg-D4NL1I8bmEeQpmJP&sz=w800"
    ]
  },
  {
    "id": "1694",
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
    "id": "1695",
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
    "id": "1696",
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
    "id": "1697",
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
    "id": "1698",
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
    "id": "1699",
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
    "id": "1700",
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
    "id": "1701",
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
    "id": "1702",
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
    "id": "1703",
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
    "id": "1704",
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
    "id": "1705",
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
    "id": "1706",
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
    "id": "1707",
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
    "id": "1708",
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
    "id": "1709",
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
    "id": "1710",
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
    "id": "1711",
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
    "id": "1712",
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
    "id": "1713",
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
    "id": "1714",
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
    "id": "1715",
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
    "id": "1716",
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
    "id": "1717",
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
    "id": "1718",
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
    "id": "1719",
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
    "id": "1720",
    "title": "Apartment",
    "address": "Unit No. 08-08, Level 8, Tijani Raja Dewa, Jalan Raja Dewa 4/20, 15150 Kota Bharu, Kelantan",
    "postcode": "15150",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 410400,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "933 sq.ft",
    "tenure": "Freehold",
    "type": "Condo/Apartment",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1721",
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
    "id": "1722",
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
    "id": "1723",
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
    "id": "1724",
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
    "id": "1725",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1726",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1727",
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
    "id": "1728",
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
    "id": "1729",
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
    "id": "1730",
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
    "id": "1731",
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
    "id": "1732",
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
    "id": "1733",
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
    "id": "1734",
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
    "id": "1735",
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
    "id": "1736",
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
    "id": "1737",
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
    "id": "1738",
    "title": "3 Storey Permanent Building (Bird Nesting)",
    "address": "Kampung Padang Bongor, Jalan Hospital, 15200 Kota Bharu, Kelantan",
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
    "id": "1739",
    "title": "3 Storey Shop Office",
    "address": "Kawasan Pasar Borong Wakaf Che Yeh, Jalan Kuala Krai, 15050 Kota Bharu, Kelantan",
    "postcode": "15050",
    "state": "Kota Bharu",
    "area": "Kota Bharu",
    "reservePrice": 656100,
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
    "id": "1740",
    "title": "Office Unit",
    "address": "Pusat Perniagaan Dataran Rakyat, Bandar Baru Tunjong, 16010 Kota Bharu, Kelantan",
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
    "id": "1741",
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
    "id": "1742",
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
    "id": "1743",
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
    "id": "1744",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1745",
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
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1746",
    "title": "2 Storey Shop House",
    "address": "Taman Sungai Durian, 18000 Kuala Krai, Kelantan",
    "postcode": "18000",
    "state": "Kuala Krai",
    "area": "Kuala Krai",
    "reservePrice": 450000,
    "auctionDate": "28 Sep 2026 (Mon)",
    "landArea": "—",
    "builtUp": "200 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1VbjDKY1nVrnKCObFfDnBOpLsozOaoTBE&sz=w800"
    ]
  },
  {
    "id": "1747",
    "title": "2 Storey Detached House",
    "address": "No. 8073-1, Jalan Gong Pauh, Kampung Gong Pauh, 24000 Kemaman, Terengganu",
    "postcode": "24000",
    "state": "Terengganu",
    "area": "Kemaman",
    "reservePrice": 414524,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "481 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1748",
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
    "id": "1749",
    "title": "1 Storey Semi Detached House",
    "address": "Lot PT 24764P, Taman Nerus, Gong Badak, 21300 Kuala Nerus, Terengganu",
    "postcode": "21300",
    "state": "Terengganu",
    "area": "Kuala Nerus",
    "reservePrice": 324000,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "647 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1750",
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
    "id": "1751",
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
    "id": "1752",
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
    "id": "1753",
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
    "id": "1754",
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
    "id": "1755",
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
    "id": "1756",
    "title": "1 Storey Terrace House",
    "address": "PT 2874, Jalan Padang Landak, Taman Selasih, 22000 Jerteh, Terengganu",
    "postcode": "22000",
    "state": "Terengganu",
    "area": "Jerteh",
    "reservePrice": 80190,
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
    "id": "1757",
    "title": "1 Storey Detached House",
    "address": "Lot 7807, Kampung Sungai Siput, Ajil, 21800 Hulu Terengganu, Terengganu",
    "postcode": "21800",
    "state": "Terengganu",
    "area": "Hulu Terengganu",
    "reservePrice": 225990,
    "auctionDate": "3 Aug 2026 (Mon)",
    "landArea": "—",
    "builtUp": "892 sq.ft",
    "tenure": "Freehold",
    "type": "Terrace",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1758",
    "title": "Land",
    "address": "GM 2138 (Lot 60), Gong Balai, Mercang, 21610 Marang, Terengganu",
    "postcode": "21610",
    "state": "Terengganu",
    "area": "Marang",
    "reservePrice": 108000,
    "auctionDate": "4 Aug 2026 (Tue)",
    "landArea": "—",
    "builtUp": "923 sq.ft",
    "tenure": "Freehold",
    "type": "Land",
    "images": [
      "https://drive.google.com/thumbnail?id=1J9WdiCnhaA0fFXpK0gNX9iq2XKC59qWU&sz=w800"
    ]
  },
  {
    "id": "1759",
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
    "id": "1760",
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
    "id": "1761",
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
    "id": "1762",
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
    "id": "1763",
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
    "id": "1764",
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
    "id": "1765",
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
    "id": "1766",
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
