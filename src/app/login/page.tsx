"use client";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { login } from "@/redux/slices/authSlice";
import { Providers } from "../provider";
import Login from "@/pages/loginPage";

const LoginDashboard: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const formInputs = [
    {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
    },
  ];

  const handleSubmit = (formData: { [key: string]: string }) => {
    const userDataString = localStorage.getItem("users");
    if (userDataString) {
      try {
        const userData = JSON.parse(userDataString);
        const user = userData.find(
          (user: { email: string; password: string }) =>
            user.email === formData.email && user.password === formData.password
        );

        if (user) {
          router.push("/");
          dispatch(login());
          toast.success("User logged in successfully");
        } else {
          toast.error("Invalid email or password");
        }
      } catch (error) {
        toast.error("Error while parsing user data");
      }
    } else {
      toast.error("No user found with the given email");
    }
  };

  const handleBack = () => {
    router.push("/");
  };

  return (
    <Providers>
      <Login
        formInputs={formInputs}
        onSubmit={handleSubmit}
        handleBack={handleBack}
      />
    </Providers>
  );
};

export default LoginDashboard;
