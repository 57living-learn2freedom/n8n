/**
 * =============================================================================
 * VIDEO CAROUSEL — DATA CONFIGURATION
 * =============================================================================
 * Populated from Google Sheet via n8n.
 * =============================================================================
 */

export function hasDetailsUrl(detailsUrl: string): boolean {
  return detailsUrl.trim().length > 0;
}

export interface VideoItem {
  id: string;
  title: string;
  description: string;
  posterSrc: string;
  videoSrc: string;
  detailsUrl: string;
}

export const VIDEO_ITEMS: VideoItem[] = [
  {
    id: "video-1",
    title: "Cara Scammer menyamar",
    description: "Cara Scammer menyamar sebagai ejen sewa rumah dibongkar! Tengok habis video ni dan jangan ditipu!",
    posterSrc: "https://drive.google.com/thumbnail?id=19SpBSRr4-JPVVkGTDkuFqGYCNhImkETK&sz=w1200",
    videoSrc: "https://drive.google.com/uc?export=download&id=1dMT31RRuHYSk8HpVo6RM0dZGvC3GFsxt",
    detailsUrl: "",
  }
];
