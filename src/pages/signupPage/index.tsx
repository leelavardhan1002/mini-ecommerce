import React from "react";
import Image from "next/image";
import Link from "next/link";
import SignupImage from "../../assets/Signup_Image.png";
import Form from "@/components/molecules/Form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Button from "@/components/atoms/Button";
import { IoArrowBack } from "react-icons/io5";

interface SignupProps {
  formInputs: {
    id: string;
    label: string;
    type: string;
    placeholder?: string;
  }[];
  onSubmit: (formData: { [key: string]: string }) => void;
  handleBack: () => void;
}
const Signup: React.FC<SignupProps> = ({
  formInputs,
  onSubmit,
  handleBack,
}) => {
  return (
    <div className="bg-gray-300 h-screen w-screen flex justify-center items-center">
      <div className="container flex h-3/4">
        <div className="p-8 rounded-lg w-1/2 bg-SECONDARY flex items-center justify-center">
          <div className="w-3/4">
            <Button
              Icon={IoArrowBack}
              className="p-4 rounded-full"
              onClick={handleBack}
            />
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-center">
                Create an Account
              </h2>
              <Form
                inputs={formInputs}
                buttonText="Signup"
                onSubmit={onSubmit}
              />
            </div>
            <div className="text-center">
              <p className="text-lg  my-4">- OR -</p>
              <span>Already have an account? </span>
              <Link href={"/login"} className="text-blue-600 font-bold">
                Login
              </Link>
            </div>
          </div>
        </div>
        <div className="p-8 rounded-r-lg w-1/2  bg-PRIMARY flex items-center justify-center">
          <div className="flex justify-center mt-10">
            <Image src={SignupImage} alt="SignInImage" height={300} priority />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;