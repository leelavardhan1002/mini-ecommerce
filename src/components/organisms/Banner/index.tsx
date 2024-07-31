import Image from "next/image";
import React from "react";
import Button from "@/components/atoms/Button";
import BannerImage from "../../../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="relative my-4">
      <Image
        src={BannerImage}
        alt="Banner Image"
        layout="responsive"
        width={1000}
        height={150}
        className="object-cover"
      />

      <div className="bg-green-900 absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 p-4 md:p-6 lg:p-8 w-1/2 max-w-md rounded-lg shadow-lg text-left">
        <h1 className="text-white text-xs md:text-2xl lg:text-4xl font-bold mb-4">
          Get 5% Cash Back on $200
        </h1>
        <p className="text-white mb-4 hidden sm:block mx-auto md:mx-0 w-full md:w-2/3 lg:w-3/4 text-xs sm:text-base lg:text-lg">
          Shopping is a bit of a relaxing hobby for me, which is sometimes
          troubling for the bank balance.
        </p>
        <Button
          text="Learn More"
          className="w-full md:w-2/3 bg-green-900 text-white border-2 border-white sm:py-2 py-0  rounded-full hover:bg-black hover:text-white transition duration-300"
        />
      </div>
    </div>
  );
};

export default Banner;
