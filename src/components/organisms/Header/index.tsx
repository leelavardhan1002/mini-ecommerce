"use client";
import Button from "@/components/atoms/Button";
import Dropdown from "@/components/atoms/Dropdown";
import SearchBar from "@/components/molecules/SearchBar";
import { logout } from "@/redux/slices/authSlice";
import { RootState } from "@/redux/store";
import { Option } from "@/utils/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Header = ({ sampleOptions }: { sampleOptions: Option[] }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  const handleLogin = () => {
    router.push("/login");
  };

  const handleLogout = () => {
    dispatch(logout());
    toast.success("User logged out successfully");
  };
  const handleSignup = () => {
    router.push("/signup");
  };

  return (
    <header className="bg-white text-black p-4 flex justify-between items-center container mx-auto">
      <div className="flex space-x-5">
        <Image
          src={
            "https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e86ab4c21faa7bc0bd90dd_Logo.svg"
          }
          alt="ShopcartLogo"
          width={150}
          height={150}
        />
        <Dropdown
          label="Categories"
          title="Popular Categories"
          options={sampleOptions}
        />
      </div>
      <div className="w-1/3">
        <SearchBar />
      </div>
      {isLoggedIn ? (
        <div>
          <Button
            text="Logout"
            onClick={handleLogout}
            className="rounded-lg px-4 py-2 font-bold"
          />
        </div>
      ) : (
        <div className="flex gap-4">
          <Button
            text="Login"
            onClick={handleLogin}
            className="rounded-lg px-4 py-2 font-bold"
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
