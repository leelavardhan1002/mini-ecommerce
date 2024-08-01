"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { BiCart } from "react-icons/bi";
import Button from "@/components/atoms/Button";
import Dropdown from "@/components/atoms/Dropdown";
import SearchBar from "@/components/molecules/SearchBar";
import { logout } from "@/redux/slices/authSlice";
import { RootState } from "@/redux/store";
import { Option } from "@/utils/types";
import { RiAccountCircleLine } from "react-icons/ri";

const Header = ({ sampleOptions }: { sampleOptions: Option[] }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const [username, setUsername] = useState<string>("User");

  const handleLogin = () => {
    router.push("/login");
  };

  useEffect(() => {
    // This code runs only on the client side
    if (typeof window !== "undefined") {
      const storedUsers = localStorage.getItem("users");
      if (storedUsers) {
        const users = JSON.parse(storedUsers);
        if (users.length > 0) {
          setUsername(users[0].name);
        }
      }
    }
  }, []);
  const handleLogout = () => {
    dispatch(logout());
    toast.success("User logged out successfully");
  };

  const handleSignup = () => {
    router.push("/signup");
  };
  const options = [
    {
      name: "Logout",
      optionOnClick: handleLogout,
    },
  ];

  return (
    <header className="bg-white text-black p-4 flex flex-col md:flex-row justify-between items-center container mx-auto">
      <div className="flex items-center space-x-5">
        <Image
          src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e86ab4c21faa7bc0bd90dd_Logo.svg"
          alt="ShopcartLogo"
          width={150}
          height={150}
        />
        <Dropdown
          label="Categories"
          title="Popular Categories"
          options={sampleOptions}
          dropdownWidth="w-[20rem] md:w-[30rem]"
        />
      </div>
      <div className="w-full md:w-1/3 mt-4 md:mt-0 flex">
        <SearchBar />
      </div>

      {isLoggedIn ? (
        <div className="flex gap-4 mt-4 md:mt-0">
          <div>
            <Button
              Icon={BiCart}
              className="p-[0.7rem] rounded-md bg-TERTIARY hover:bg-PRIMARY"
            />
          </div>
          <Dropdown
            title={username}
            Icon={RiAccountCircleLine}
            options={options}
            label="Account"
            dropdownWidth="w-fit]"
          />
        </div>
      ) : (
        <div className="flex gap-4 mt-4 md:mt-0">
          <div>
            <Button
              Icon={BiCart}
              className="p-[0.7rem] rounded-md bg-TERTIARY hover:bg-PRIMARY"
            />
          </div>
          <Button
            text="Login"
            onClick={handleLogin}
            className="rounded-lg px-4 py-2 font-bold bg-TERTIARY hover:bg-PRIMARY"
          />
          <Button
            text="Signup"
            onClick={handleSignup}
            className="rounded-lg px-4 border-2 font-bold border-black bg-white text-black hover:border-gray-600 hover:bg-gray-600 hover:text-white"
          />
        </div>
      )}
    </header>
  );
};

export default Header;
