'use client'

import { FC, useState, useEffect } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Header } from "@/components/sections/header";
import { Button } from "@/components/ui/button";
import { Hotel, SearchParams } from "@/lib/types";
// import { hotels } from "@/lib/data";
import SearchBar from "@/components/sections/search-bar";
import FilterSidebar from "@/components/sections/filter-sidebar";
import { Filter } from "lucide-react";
import HotelResults from "@/components/sections/hotel-results";
import { useSearchStore } from "@/store/useSearchStore";

/**
 * Props for `SortBy`.
 */
export type SortByProps = SliceComponentProps<Content.SortBySlice>;

/**
 * Component for "SortBy" Slices.
 */
const SortBy: FC<SortByProps> = ({ slice }) => {
  const [filteredHotels, setFilteredHotels] = useState(slice.primary?.hotel_list);
  const [images, setImages] = useState(slice.primary?.images);
  const [sortBy, setSortBy] = useState("popularity");
  const [viewType, setViewType] = useState<"grid" | "list">("grid");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000000]); // Default price range
  const [originalHotels, setOriginalHotels] = useState(slice.primary?.hotel_list);
  const [starRatings, setStarRatings] = useState<number[]>([]);

  useEffect(() => {
    setOriginalHotels(slice.primary?.hotel_list);
  }, [slice.primary?.hotel_list]);

  const searchParams: SearchParams = {
    location: "",
    checkIn: new Date(),
    checkOut: new Date(),
    rooms: 0,
    guests: 0
  };

  const handleSearch = (params: SearchParams) => {
    const filtered = originalHotels.filter((hotel) => {
      if (params.location && !hotel?.location_name?.toLowerCase().includes(params.location.toLowerCase())) {
        return false;
      }
      if (params.rooms && hotel.rooms < params.rooms) {
        return false;
      }
      if (hotel.price_ori < priceRange[0] || hotel.price_ori > priceRange[1]) {
        return false;
      }
      if (starRatings.length > 0 && !starRatings.includes(hotel.rating)) {
        return false;
      }
      return true;
    });
    setFilteredHotels(filtered);
  };

  const handleFilterChange = (filters: any) => {
    const newPriceRange = filters.priceRange || priceRange;
    const newStarRatings = filters.starRatings || starRatings;
    
    setPriceRange(newPriceRange);
    setStarRatings(newStarRatings);

    const filtered = originalHotels.filter((hotel) => {
      if (hotel.price_ori && (hotel.price_ori < newPriceRange[0] || hotel.price_ori > newPriceRange[1])) {
        return false;
      }
      if (newStarRatings.length > 0 && !newStarRatings.includes(hotel.rating)) {
        return false;
      }
      return true;
    });
    setFilteredHotels(filtered);
  };

  const handleSortChange = (value: string) => {
    let sortedHotels = [...filteredHotels];
    
    switch (value) {
      case 'rating':
        sortedHotels.sort((a, b) => b.rating - a.rating);
        break;
      case 'price-asc':
        sortedHotels.sort((a, b) => a.price_ori - b.price_ori);
        break;
      case 'price-desc':
        sortedHotels.sort((a, b) => b.price_ori - a.price_ori);
        break;
      case 'popularity':
        sortedHotels.sort((a, b) => +b.travel_review_origin - +a.travel_review_origin);
        break;
      default:
        break;
    }

    setFilteredHotels(sortedHotels);
  };

  useEffect(() => {
    const filtered = originalHotels.filter((hotel) => {
      const meetsPrice = hotel.price_ori >= priceRange[0] && hotel.price_ori <= priceRange[1];
      const meetsStarRating = starRatings.length === 0 || starRatings.includes(hotel.rating);
      return meetsPrice && meetsStarRating;
    });
    setFilteredHotels(filtered);
  }, [priceRange, starRatings, originalHotels]);

  console.log(originalHotels)
  console.log(filteredHotels)

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="min-h-screen flex flex-col bg-gray-50">
        <div style={{ marginTop: "6rem" }} className={`
          transition-all duration-300 transform
          ${isScrolled
            ? 'fixed top-0 left-0 right-0 z-50 translate-y-0'
            : 'relative -translate-y-0'}
          bg-white border-b shadow-sm
        `}>
          <div className="container mx-auto px-4">
            <SearchBar initialParams={searchParams} onSearch={handleSearch} />
          </div>
        </div>
        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="flex gap-8">
            <aside className="w-80">
              <div className="sticky top-[140px]">
                <FilterSidebar
                  onFilterChange={handleFilterChange}
                  currentPriceRange={priceRange}
                />
              </div>
            </aside>

            <div className="flex-1">
              <HotelResults
                hotels={filteredHotels}
                images={images}
                sortBy={sortBy}
                onSortChange={handleSortChange}
                viewType={viewType}
                onViewChange={setViewType}
                searchParams={searchParams}
              />
            </div>
          </div>
        </main>
      </div>
      {/* Placeholder component for sort_by (variation: {slice.variation}) Slices */}
    </section>
  );
};

export default SortBy;
