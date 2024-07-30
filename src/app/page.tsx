import Header from "@/components/organisms/Header";
import React from "react";
import { Providers } from "./provider";
import { fetchCategories } from "@/data/categories";
import { fetchAllProducts } from "@/data/products";
import ProductsPage from "@/pages/ProductListPage";
import { Option } from "@/utils/types";

const Home: React.FC = async () => {
  const categoriesData: Option[] = (await fetchCategories()) as Option[];
  const allProductsData = await fetchAllProducts();

  return (
    <div>
      <Providers>
        <Header sampleOptions={categoriesData} />
        <ProductsPage allProducts={allProductsData} allCategories={categoriesData} />
      </Providers>
    </div>
  );
};

export default Home;
