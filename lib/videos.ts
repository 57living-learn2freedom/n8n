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
   * Shown before the video loads.
   */
  posterSrc: string;

  /**
   * VIDEO SOURCE LINK HERE
   */
  videoSrc: string;

  /**
   * DETAILS PAGE LINK HERE
   * Where the user is sent when they click the video card.
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
    description: "Cara Scammer menyamar sebagai ejen sewa rumah dibongkar! Tengok habis video ni dan jangan ditipu!",
    posterSrc: "https://drive.google.com/thumbnail?id=19SpBSRr4-JPVVkGTDkuFqGYCNhImkETK&sz=w1200",
    videoSrc: "https://drive.google.com/uc?export=download&id=1dMT31RRuHYSk8HpVo6RM0dZGvC3GFsxt",
    detailsUrl: "https://youtu.be/dlD30BS_xFM",
  }
];
