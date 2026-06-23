/**
 * =============================================================================
 * VIDEO CAROUSEL — DATA CONFIGURATION
 * =============================================================================
 * Edit this file to add, remove, or update carousel slides.
 * Each entry maps directly to one video card in the carousel.
 * =============================================================================
 */

export interface VideoItem {
  id: string;
  title: string;
  description: string;

  /**
   * VIDEO THUMBNAIL / POSTER IMAGE LINK HERE
   * Shown before the video loads and as the <video poster="..."> attribute.
   * Replace with your own hosted image URL.
   */
  posterSrc: string;

  /**
   * VIDEO SOURCE LINK HERE
   * Direct .mp4 (or .webm) URL used inside the <video><source> tag.
   * Leave empty string if you only want a poster image with no playback.
   */
  videoSrc: string;

  /**
   * DETAILS PAGE LINK HERE
   * Where the user is sent when they click the video card.
   * Use a full path (e.g. "/videos/puchong-lelong-tour") or external URL.
   */
  detailsUrl: string;
}

// =============================================================================
// CAROUSEL SLIDES — update posterSrc, videoSrc, and detailsUrl per slide below
// =============================================================================

export const VIDEO_ITEMS: VideoItem[] = [
  {
    id: "video-1",
    title: "Puchong Terrace Lelong Walkthrough",
    description:
      "Full property tour of a 2-storey terrace with below-market reserve price in Bandar Bukit Puchong.",
    // VIDEO THUMBNAIL/IMAGE LINK HERE
    posterSrc:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1280&q=80",
    // VIDEO SOURCE LINK HERE
    videoSrc:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    // DETAILS PAGE LINK HERE
    detailsUrl: "/videos/puchong-terrace-lelong-walkthrough",
  },
  {
    id: "video-2",
    title: "PJ Service Apartment Auction Preview",
    description:
      "See the layout, facilities, and auction highlights for this Petaling Jaya condo unit.",
    // VIDEO THUMBNAIL/IMAGE LINK HERE
    posterSrc:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1280&q=80",
    // VIDEO SOURCE LINK HERE
    videoSrc:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    // DETAILS PAGE LINK HERE
    detailsUrl: "/videos/pj-service-apartment-auction-preview",
  },
  {
    id: "video-3",
    title: "How Bank Lelong Works in Malaysia",
    description:
      "A quick guide to deposits, bidding registration, and completing your purchase within 90 days.",
    // VIDEO THUMBNAIL/IMAGE LINK HERE
    posterSrc:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1280&q=80",
    // VIDEO SOURCE LINK HERE
    videoSrc:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    // DETAILS PAGE LINK HERE
    detailsUrl: "/videos/how-bank-lelong-works-malaysia",
  },
  {
    id: "video-4",
    title: "Kajang Semi-D Investment Opportunity",
    description:
      "Explore land size, built-up area, and estimated ROI for this freehold semi-detached listing.",
    // VIDEO THUMBNAIL/IMAGE LINK HERE
    posterSrc:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1280&q=80",
    // VIDEO SOURCE LINK HERE
    videoSrc:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    // DETAILS PAGE LINK HERE
    detailsUrl: "/videos/kajang-semi-d-investment-opportunity",
  },
  {
    id: "video-5",
    title: "Ipoh Commercial Shop Lot Tour",
    description:
      "Ground-floor shop lot near Ipoh city centre — ideal for retail or F&B businesses.",
    // VIDEO THUMBNAIL/IMAGE LINK HERE
    posterSrc:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1280&q=80",
    // VIDEO SOURCE LINK HERE
    videoSrc:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    // DETAILS PAGE LINK HERE
    detailsUrl: "/videos/ipoh-commercial-shop-lot-tour",
  },
];
