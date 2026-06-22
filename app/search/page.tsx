"use client";

import { Suspense, useCallback, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Building2 } from "lucide-react";
import Header from "@/components/Header";
import SearchFilterBar from "@/components/SearchFilterBar";
import PropertyCard from "@/components/PropertyCard";
import PropertyDetailModal from "@/components/PropertyDetailModal";
import Pagination from "@/components/Pagination";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";
import type { Property } from "@/lib/data";
import { filterProperties } from "@/lib/filters";
import {
  type FilterState,
  filtersToSearchParams,
  getPageFromSearchParams,
  searchParamsToFilters,
} from "@/lib/filterState";
import { paginateItems } from "@/lib/pagination";

const SEARCH_PER_PAGE = 15;

function SearchResultsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null
  );
  const [draftFilters, setDraftFilters] = useState<FilterState>(() =>
    searchParamsToFilters(searchParams)
  );

  const appliedFilters = useMemo(
    () => searchParamsToFilters(searchParams),
    [searchParams]
  );

  const currentPage = useMemo(
    () => getPageFromSearchParams(searchParams),
    [searchParams]
  );

  const filteredProperties = useMemo(
    () => filterProperties(appliedFilters),
    [appliedFilters]
  );

  const { items, totalPages, totalItems, currentPage: safePage } = useMemo(
    () => paginateItems(filteredProperties, currentPage, SEARCH_PER_PAGE),
    [filteredProperties, currentPage]
  );

  const navigateWithFilters = useCallback(
    (filters: FilterState, page = 1) => {
      const query = filtersToSearchParams(filters, page).toString();
      router.push(query ? `/search?${query}` : "/search");
    },
    [router]
  );

  function handleFilterChange(key: keyof FilterState, value: string) {
    const next = { ...draftFilters, [key]: value };
    setDraftFilters(next);

    if (key !== "keyword") {
      navigateWithFilters(next, 1);
    }
  }

  function handleSearch() {
    navigateWithFilters(draftFilters, 1);
  }

  function handlePageChange(page: number) {
    navigateWithFilters(appliedFilters, page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <Header />
      <main className="bg-zinc-50">
        <section className="border-b border-zinc-200 bg-white py-10 sm:py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
              Search Results
            </h1>
            <p className="mt-2 text-zinc-600">
              Refine your search to find bank lelong properties across Malaysia.
            </p>
            <div className="mt-8">
              <SearchFilterBar
                filters={draftFilters}
                onFilterChange={handleFilterChange}
                onSearch={handleSearch}
                resultCount={filteredProperties.length}
                variant="page"
                idPrefix="results"
              />
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center gap-2 text-red-700">
                <Building2 className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wide">
                  Matching Properties
                </span>
              </div>
              <p className="text-sm font-medium text-zinc-500">
                Page {safePage} of {totalPages} · {totalItems} result
                {totalItems !== 1 ? "s" : ""}
              </p>
            </div>

            {items.length > 0 ? (
              <>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  {items.map((property) => (
                    <PropertyCard
                      key={property.id}
                      property={property}
                      onViewDetails={setSelectedProperty}
                    />
                  ))}
                </div>

                <Pagination
                  currentPage={safePage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </>
            ) : (
              <div className="rounded-2xl border border-dashed border-zinc-300 bg-white px-6 py-16 text-center">
                <Building2 className="mx-auto h-12 w-12 text-zinc-300" />
                <h2 className="mt-4 text-lg font-semibold text-zinc-800">
                  No properties match your search
                </h2>
                <p className="mt-2 text-sm text-zinc-500">
                  Try adjusting your keyword, state, property type, or price
                  range.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
      <ChatbotWidget />

      <PropertyDetailModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
      />
    </>
  );
}

export default function SearchResultsPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 text-zinc-500">
          Loading search results...
        </div>
      }
    >
      <SearchResultsContent />
    </Suspense>
  );
}
