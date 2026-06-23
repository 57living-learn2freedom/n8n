"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Hero, { type FilterState } from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import VideoCarousel from "@/components/VideoCarousel";
import PropertyListings from "@/components/PropertyListings";
import HowItWorks from "@/components/HowItWorks";
import ConsultationForm from "@/components/ConsultationForm";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";
import { filterProperties } from "@/lib/filters";
import {
  DEFAULT_FILTERS,
  filtersToSearchParams,
} from "@/lib/filterState";

export default function HomePage() {
  const router = useRouter();
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);

  const resultCount = useMemo(
    () => filterProperties(filters).length,
    [filters]
  );

  function handleFilterChange(key: keyof FilterState, value: string) {
    setFilters((prev) => ({ ...prev, [key]: value }));
  }

  function handleSearch() {
    const query = filtersToSearchParams(filters).toString();
    router.push(query ? `/search?${query}` : "/search");
  }

  return (
    <>
      <main>
        <Hero
          filters={filters}
          onFilterChange={handleFilterChange}
          onSearch={handleSearch}
          resultCount={resultCount}
        />
        <TrustBar />
        <VideoCarousel />
        <PropertyListings />
        <HowItWorks />
        <ConsultationForm />
      </main>
      <Footer />
      <ChatbotWidget />
    </>
  );
}
