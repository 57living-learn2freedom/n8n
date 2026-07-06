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
    title: "Cara Scammer menyamar",
    description:
      "Cara Scammer menyamar sebagai ejen sewa rumah dibongkar! Tengok habis video ni dan jangan ditipu!",
    // VIDEO THUMBNAIL/IMAGE LINK HERE
    posterSrc:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1280&q=80",
    // VIDEO SOURCE LINK HERE
    videoSrc:
      "https://youtu.be/dlD30BS_xFM",
    // DETAILS PAGE LINK HERE
    detailsUrl: "https://youtu.be/dlD30BS_xFM",
  }
];
