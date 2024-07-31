import React from "react";
import Image from "next/image";
import { FaStar, FaRegHeart } from "react-icons/fa";
import Button from "@/components/atoms/Button";
import { ProductCardProps } from "@/utils/types";

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  description,
  image,
  rating,
  reviews,
  onAddToCart,
}) => {
  const handleAddOrRemoveFav = () => {
    console.log("Added from favorites");
  };
  return (
    <div className="border rounded-lg shadow-lg p-4 w-full max-w-sm transition-transform duration-300">
      <div className="relative">
        <div className="w-full flex justify-center overflow-hidden">
          <Image
            src={image}
            alt={name}
            className="rounded-t-lg transition-transform duration-300 transform hover:scale-110"
            width={300}
            height={300}
          />
        </div>
        <Button
          className="absolute top-2 right-2 p-[0.6rem] bg-gray-200 rounded-full text-black hover:text-red-500"
          Icon={FaRegHeart}
          onClick={handleAddOrRemoveFav}
        />
      </div>
      <div className="p-4">
        <div className="flex w-full justify-between">
          <h3 className="text-lg font-bold">{name}</h3>
          <div className="text-lg font-bold">${price.toFixed(2)}</div>
        </div>
        <p className="text-gray-600">{description}</p>
        <div className="flex items-center my-2">
          <div className="flex text-green-500">
            {Array.from({ length: 5 }, (_, index) => (
              <FaStar
                key={index}
                className={index < rating ? "text-green-500" : "text-gray-300"}
              />
            ))}
          </div>
          <span className="ml-2 text-gray-600">({reviews})</span>
        </div>
        <Button
          text="Add to Cart"
          onClick={onAddToCart}
          className="mt-4 w-2/3 bg-white text-green-900 border-2 border-green-900 py-2 rounded-full hover:bg-green-900 hover:text-white transition duration-500"
        />
      </div>
    </div>
  );
};

export default ProductCard;
