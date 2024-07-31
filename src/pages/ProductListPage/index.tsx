"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Pill from "@/components/atoms/Pill";
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
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleAddToCart = (productName: string) => {
    console.log(`${productName} added to cart`);
  };

  const query = useSelector((state: RootState) => state.search.query);

  useEffect(() => {
    let updatedProducts = allProducts;

    if (query) {
      updatedProducts = updatedProducts.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (selectedCategory) {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    setFilteredProducts(updatedProducts);
  }, [query, selectedCategory, allProducts]);

  return (
    <div className="container mx-auto">
      <p className="text-xl font-bold">Todays Best Deals For You!</p>
      <div className="flex flex-wrap gap-2 my-4">
        <Pill
          label="All Products"
          isSelected={selectedCategory === null}
          onClick={() => console.log("All Products clicked")}
          onSelect={() => setSelectedCategory(null)}
        />
        {allCategories.map((category) => (
          <Pill
            key={category.name}
            label={category.name}
            isSelected={selectedCategory === category.name}
            onClick={() => console.log(`Pill clicked: ${category.name}`)}
            onSelect={(label) => setSelectedCategory(label)}
          />
        ))}
      </div>
      <div className="grid grid-cols-4 gap-4 place-items-center">
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
