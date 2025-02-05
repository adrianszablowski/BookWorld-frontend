"use client";

import { Button } from "@/components/ui/button";
import { books } from "@/mocks/mocks";
import { Filter } from "lucide-react";
import { useState } from "react";
import { BooksGrid } from "../_components/books-grid";
import FilterPanel from "./_components/filter-panel";
import SearchBar from "./_components/search-bar";

export default function Library() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleToggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Library</h1>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <SearchBar />
        <Button onClick={handleToggleFilter}>
          <Filter className="mr-2 size-4" /> Filters
        </Button>
      </div>
      <FilterPanel isOpen={isFilterOpen} onClose={handleToggleFilter} />
      <BooksGrid header="Books" books={books} />
    </div>
  );
}
