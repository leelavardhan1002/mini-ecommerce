import React from "react";
import { fetchCategories } from "@/data/categories";
import { fetchAllProducts } from "@/data/products";
import ProductsPage from "@/pages/ProductListPage";
import Banner from "@/components/organisms/Banner";
import Header from "@/components/organisms/Header";
import { Option } from "@/utils/types";

const Home: React.FC = async () => {
  const categoriesData: Option[] = (await fetchCategories()) as Option[];
  const allProductsData = await fetchAllProducts();

  return (
    <div>
        <Header sampleOptions={categoriesData} />
        <Banner />
        <ProductsPage
          allProducts={allProductsData}
          allCategories={categoriesData}
        />
    </div>
  );
};

export default Home;
