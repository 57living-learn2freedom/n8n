"use client";

import { useRef, type KeyboardEvent, type MouseEvent } from "react";
import { useRouter } from "next/navigation";
import { Maximize } from "lucide-react";
import type { VideoItem } from "@/lib/videos";
import { requestVideoFullscreen } from "@/lib/fullscreen";

interface VideoCardProps {
  video: VideoItem;
  /** Global index across all carousel videos — used for play/pause coordination */
  index: number;
  videoRef: (el: HTMLVideoElement | null) => void;
  onMouseEnterCard: (index: number) => void;
}

/**
 * VideoCard — edge-to-edge video block with hover gradient overlay.
 *
 * Media & navigation are driven entirely by the `video` prop from lib/videos.ts:
 *   • posterSrc  → VIDEO THUMBNAIL/IMAGE LINK
 *   • videoSrc   → VIDEO SOURCE LINK
 *   • detailsUrl → DETAILS PAGE LINK
 *
 * Playback (.play() / .pause()) is controlled by the parent VideoCarousel via refs.
 */
export default function VideoCard({
  video,
  index,
  videoRef,
  onMouseEnterCard,
}: VideoCardProps) {
  const router = useRouter();
  const localVideoRef = useRef<HTMLVideoElement | null>(null);

  function assignRef(el: HTMLVideoElement | null) {
    localVideoRef.current = el;
    videoRef(el);
  }

  function handleCardClick() {
    /*
     * DETAILS PAGE LINK HERE
     * Navigates to `video.detailsUrl` when the card is clicked.
     * Update the destination per slide in lib/videos.ts → detailsUrl.
     */
    router.push(video.detailsUrl);
  }

  function handleFullscreenClick(e: MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    e.preventDefault();

    if (localVideoRef.current) {
      requestVideoFullscreen(localVideoRef.current);
    }
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleCardClick}
      onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleCardClick();
        }
      }}
      onMouseEnter={() => onMouseEnterCard(index)}
      className="group relative aspect-video w-full cursor-pointer overflow-hidden"
      aria-label={`Watch: ${video.title}`}
    >
      {/*
       * VIDEO SOURCE LINK HERE — `video.videoSrc` → <source src="...">
       * VIDEO THUMBNAIL/IMAGE LINK HERE — `video.posterSrc` → poster attribute
       */}
      <iframe
        ref={assignRef}
        data-video-index={index}
        className="h-full w-full object-cover"
        poster={video.posterSrc}
        muted
        playsInline
        loop
        preload="metadata"
      >
        <source src={video.videoSrc} type="video/mp4" />
      </iframe>

      {/* Hover mask — half-height gradient, fades in on group-hover */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex h-1/2 flex-col justify-end bg-gradient-to-t from-black/90 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:p-5">
        <h3 className="pr-10 text-base font-bold text-white sm:text-lg">
          {video.title}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm text-zinc-300">
          {video.description}
        </p>

        {/* Fullscreen button — bottom-right inside gradient overlay */}
        <button
          type="button"
          onClick={handleFullscreenClick}
          className="pointer-events-auto absolute bottom-4 right-4 flex h-8 w-8 items-center justify-center rounded text-white/90 transition-colors hover:bg-white/20 hover:text-white sm:bottom-5 sm:right-5"
          aria-label={`Fullscreen: ${video.title}`}
        >
          <Maximize className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
