import React, { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { Option } from "@/utils/types";
import Pill from "@/components/atoms/Pill";

const CategoryPills = ({ allCategories }: { allCategories: Option[] }) => {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    () => {
      return searchParams?.get("category") || null;
    }
  );

  const updateURL = useCallback(
    (category: string | null) => {
      const params = new URLSearchParams(searchParams?.toString());
      if (category) {
        params.set("category", category);
      } else {
        params.delete("category");
      }

      window.history.replaceState({}, "", `?${params.toString()}`);
    },
    [searchParams]
  );

  useEffect(() => {
    updateURL(selectedCategory);
  }, [selectedCategory, updateURL]);

  const handleCategorySelect = useCallback((category: string | null) => {
    setSelectedCategory(category);
    console.log(`Category selected: ${category || "All Products"}`);
  }, []);

  return (
    <div className="flex flex-wrap gap-2 my-4">
      <Pill
        label="All Products"
        isSelected={selectedCategory === null}
        onClick={() => handleCategorySelect(null)}
        onSelect={() => handleCategorySelect(null)}
      />
      {allCategories.map((category) => (
        <Pill
          key={category.name}
          label={category.name}
          isSelected={selectedCategory === category.name}
          onClick={() => handleCategorySelect(category.name)}
          onSelect={() => handleCategorySelect(category.name)}
        />
      ))}
    </div>
  );
};

export default CategoryPills;
