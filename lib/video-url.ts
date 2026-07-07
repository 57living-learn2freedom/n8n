/** Extract a Google Drive file ID from common share / download URL formats. */
export function extractDriveFileId(url: string): string | null {
  const patterns = [
    /\/file\/d\/([^/?]+)/,
    /[?&]id=([^&]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match?.[1]) return match[1];
  }

  return null;
}

/**
 * Turn a Google Drive video URL into a same-origin stream URL the <video> tag can play.
 * Non-Drive URLs are returned unchanged.
 */
export function toPlaybackUrl(videoSrc: string): string {
  const id = extractDriveFileId(videoSrc);
  if (id) return `/api/video?id=${encodeURIComponent(id)}`;
  return videoSrc;
}
