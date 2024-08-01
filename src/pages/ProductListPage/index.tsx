"use client";
import React from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";
import CategoryPills from "@/components/molecules/CategoryPills";
import ProductCard from "@/components/organisms/Card";
import { RootState } from "@/redux/store";
import { Option, Product } from "@/utils/types";

const ProductsPage = ({
  allProducts,
  allCategories,
}: {
  allProducts: Product[];
  allCategories: Option[];
}) => {
  const handleAddToCart = (productName: string) => {
    console.log(`${productName} added to cart`);
  };

  const query = useSelector((state: RootState) => state.search.query);
  const searchParams = useSearchParams();
  const selectedCategory = searchParams?.get("category");

  const filteredProducts = allProducts.filter((product) => {
    const matchesQuery = query
      ? product.name.toLowerCase().includes(query.toLowerCase())
      : true;

    const matchesCategory = selectedCategory
      ? product.category === selectedCategory
      : true;

    return matchesQuery && matchesCategory;
  });

  return (
    <div className="container mx-auto">
      <p className="text-xl font-bold">Todays Best Deals For You!</p>
      <CategoryPills allCategories={allCategories} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 place-items-center">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.name}
            name={product.name}
            price={product.price}
            description={product.description}
            image={product.image}
            rating={product.rating}
            reviews={product.totalReviews}
            onAddToCart={() => handleAddToCart(product.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
