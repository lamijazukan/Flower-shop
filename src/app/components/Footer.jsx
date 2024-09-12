import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="mt-60 bg-gray-100 h-24 pl-5 pr-5 flex justify-between items-center">
      <span className="text-sm text-gray-700">
        &copy; 2024 <span className="font-bold">Flowers&Co.</span> - All rights reserved
      </span>
      <div className="text-gray-700 font-semibold">
        <FaInstagram className="text-lg float-right ml-2" />
        <FaFacebook className="text-lg float-right" />
      </div>
    </div>
  );
}
