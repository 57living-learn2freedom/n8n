/**
 * =============================================================================
 * VIDEO CAROUSEL — DATA CONFIGURATION
 * =============================================================================
 * Edit this file to add, remove, or update carousel slides.
 * Each entry maps directly to one video card in the carousel.
 *
 * Populated from Google Sheet via n8n — posterSrc / videoSrc use Drive file IDs.
 * =============================================================================
 */

export interface VideoItem {
  id: string;
  title: string;
  description: string;

  /** Google Drive thumbnail — shown before hover playback */
  posterSrc: string;

  /** Direct MP4 stream URL (e.g. drive.google.com/uc?export=download&id=…) */
  videoSrc: string;

  /** Optional external link — card click opens a new tab when set */
  detailsUrl?: string;
}

export function hasDetailsUrl(url?: string): boolean {
  return Boolean(url?.trim());
}

export const VIDEO_ITEMS: VideoItem[] = [
  {
    id: "video-1",
    title: "Cara Scammer menyamar",
    description:
      "Cara Scammer menyamar sebagai ejen sewa rumah dibongkar! Tengok habis video ni dan jangan ditipu!",
    posterSrc:
      "https://drive.google.com/thumbnail?id=19SpBSRr4-JPVVkGTDkuFqGYCNhImkETK&sz=w1200",
    videoSrc:
      "https://drive.google.com/uc?export=download&id=1dMT31RRuHYSk8HpVo6RM0dZGvC3GFsxt",
  },
];
