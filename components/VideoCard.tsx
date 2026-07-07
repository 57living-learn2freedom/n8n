"use client";

import { useRef, type KeyboardEvent, type MouseEvent } from "react";
import { Maximize } from "lucide-react";
import type { VideoItem } from "@/lib/videos";
import { requestVideoFullscreen } from "@/lib/fullscreen";

interface VideoCardProps {
  video: VideoItem;
  index: number;
  videoRef: (el: HTMLVideoElement | null) => void;
  onMouseEnterCard: (index: number) => void;
  onMouseLeaveCard: (index: number) => void;
}

export default function VideoCard({
  video,
  index,
  videoRef,
  onMouseEnterCard,
  onMouseLeaveCard,
}: VideoCardProps) {
  const localVideoRef = useRef<HTMLVideoElement | null>(null);

  function assignRef(el: HTMLVideoElement | null) {
    localVideoRef.current = el;
    videoRef(el);
  }

  function handleCardClick() {
    window.open(video.detailsUrl, "_blank", "noopener,noreferrer");
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
      onMouseLeave={() => onMouseLeaveCard(index)}
      className="group relative aspect-video w-full cursor-pointer overflow-hidden rounded-lg bg-black"
      aria-label={`Watch: ${video.title}`}
    >
      <video
        ref={assignRef}
        data-video-index={index}
        className="h-full w-full object-contain"
        poster={video.posterSrc}
        src={video.videoSrc}
        muted
        playsInline
        loop
        preload="metadata"
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex h-1/2 flex-col justify-end bg-gradient-to-t from-black/90 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:p-5">
        <h3 className="pr-10 text-base font-bold text-white sm:text-lg">
          {video.title}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm text-zinc-300">
          {video.description}
        </p>

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
