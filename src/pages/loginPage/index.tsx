import Image from "next/image";
import SigninImage from "../../assets/Login_Image.png";
import Link from "next/link";
import Form from "@/components/molecules/Form";
import Button from "@/components/atoms/Button";
import { IoArrowBack } from "react-icons/io5";

interface LoginProps {
  formInputs: {
    id: string;
    label: string;
    type: string;
    placeholder?: string;
  }[];
  onSubmit: (formData: { [key: string]: string }) => void;
  handleBack: () => void;
}

const Login: React.FC<LoginProps> = ({ formInputs, onSubmit, handleBack }) => {
  return (
    <div className="bg-gray-300 h-screen w-screen flex justify-center items-center">
      <div className="container flex h-3/4">
        <div className="p-8 rounded-l-lg w-1/2  bg-PRIMARY flex items-center justify-center">
          <div className="flex justify-center mt-10">
            <Image src={SigninImage} alt="SignInImage" height={300} priority />
          </div>
        </div>
        <div className="p-8 rounded-lg w-1/2 bg-SECONDARY flex items-center justify-center">
          <div className="w-3/4">
            <Button
              Icon={IoArrowBack}
              className="p-4 rounded-full"
              onClick={handleBack}
            />
            <div className="space-y-8">
              <h2 className="text-2xl font-semibold text-center">
                Login your Account
              </h2>
              <Form
                inputs={formInputs}
                buttonText="Login"
                onSubmit={onSubmit}
              />
            </div>
            <div className="text-center">
              <p className="text-lg  my-10">- OR -</p>
              <span>Don't have an account? </span>
              <Link href={"/signup"} className="text-blue-600 font-bold">
                Sign-Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
