"use client";

import { useEffect } from "react";
import Image from "next/image";
import {
  X,
  MapPin,
  Calendar,
  MessageCircle,
  Ruler,
  Home,
  FileText,
  Building2,
} from "lucide-react";
import type { Property } from "@/lib/data";
import { formatPrice } from "@/lib/data";
import { buildWhatsAppUrl } from "@/lib/utils";
import LoanCalculator from "./LoanCalculator";

interface PropertyDetailModalProps {
  property: Property | null;
  onClose: () => void;
}

export default function PropertyDetailModal({
  property,
  onClose,
}: PropertyDetailModalProps) {
  useEffect(() => {
    if (!property) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [property, onClose]);

  if (!property) return null;

  const whatsappMessage = `Hi 57Lelong, I'm interested in this property:\n\n${property.title}\n${property.address}, ${property.postcode} ${property.state}\nReserve Price: ${formatPrice(property.reservePrice)}\nAuction Date: ${property.auctionDate}`;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="property-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-zinc-900/60 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close property details"
      />

      <div className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl bg-white shadow-2xl sm:rounded-2xl">
        <div className="relative aspect-[16/9] bg-zinc-100">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 672px"
          />
          <button
            type="button"
            onClick={onClose}
            className="absolute right-3 top-3 rounded-full bg-white/90 p-2 text-zinc-700 shadow-md transition-colors hover:bg-white"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <span className="absolute left-3 top-3 rounded-full bg-red-700 px-3 py-1 text-xs font-semibold text-white shadow">
            Bank Lelong
          </span>
        </div>

        <div className="p-6 sm:p-8">
          <h2
            id="property-modal-title"
            className="text-2xl font-bold text-zinc-900"
          >
            {property.title}
          </h2>

          <div className="mt-2 flex items-start gap-1.5 text-sm text-zinc-600">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-zinc-400" />
            <address className="not-italic">
              {property.address}, {property.postcode} {property.state}
            </address>
          </div>

          <p className="mt-4 text-2xl font-bold text-red-700">
            Reserve Price: {formatPrice(property.reservePrice)}
          </p>

          <div className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-amber-50 px-3 py-2 text-sm font-medium text-amber-800 ring-1 ring-amber-200">
            <Calendar className="h-4 w-4 shrink-0" />
            Auction Date: {property.auctionDate}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-xl bg-zinc-50 p-4">
              <Ruler className="h-5 w-5 text-red-700" />
              <div>
                <p className="text-xs font-semibold uppercase text-zinc-500">
                  Land Area
                </p>
                <p className="font-medium text-zinc-800">{property.landArea}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-zinc-50 p-4">
              <Home className="h-5 w-5 text-red-700" />
              <div>
                <p className="text-xs font-semibold uppercase text-zinc-500">
                  Built-up
                </p>
                <p className="font-medium text-zinc-800">{property.builtUp}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-zinc-50 p-4">
              <FileText className="h-5 w-5 text-red-700" />
              <div>
                <p className="text-xs font-semibold uppercase text-zinc-500">
                  Tenure
                </p>
                <p className="font-medium text-zinc-800">{property.tenure}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-zinc-50 p-4">
              <Building2 className="h-5 w-5 text-red-700" />
              <div>
                <p className="text-xs font-semibold uppercase text-zinc-500">
                  Property Type
                </p>
                <p className="font-medium text-zinc-800">{property.type}</p>
              </div>
            </div>
          </div>

          <p className="mt-6 text-sm leading-relaxed text-zinc-600">
            This bank lelong property in {property.area}, {property.state} is
            available for auction. Contact our specialist for bidding
            registration, deposit requirements, and a full due-diligence
            checklist before auction day.
          </p>

          <LoanCalculator reservePrice={property.reservePrice} />

          <a
            href={buildWhatsAppUrl(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-red-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-800"
          >
            <MessageCircle className="h-4 w-4" />
            Inquire on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
