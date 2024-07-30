"use client";
import Signup from "@/pages/signupPage";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const SignupDashboard: React.FC = () => {
  const router = useRouter();
  const formInputs = [
    {
      id: "name",
      label: "Name",
      type: "text",
      placeholder: "Enter your email",
    },
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
    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
    existingUsers.push(formData);
    localStorage.setItem("users", JSON.stringify(existingUsers));
    router.push("/login");
    toast.success("User created successfully");
  };

  const handleBack = () => {
    router.push("/");
  };
  return (
    <>
      <Signup
        formInputs={formInputs}
        onSubmit={handleSubmit}
        handleBack={handleBack}
      />
    </>
  );
};

export default SignupDashboard;
