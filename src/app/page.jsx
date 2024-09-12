import React from "react";
import Slider from "./components/Slider";
import DiscountsImg from "./components/DiscountsImg";
import CardsList from "./components/CardsList";
import Image from "next/image";
import { IoIosHeart } from "react-icons/io";
import Experts from "./components/Experts";


export default function Home() {
  return (
    <div>
      <Slider />
      <DiscountsImg />
      <CardsList />
      <div className="h-[400px] w-full bg-gray-100 mt-16 flex justify-center items-center">
        <div className="flex gap-7">
          <div>
            <Image
              src={"/images/gift-friend.jpeg"}
              alt="firend-gift"
              width={400}
              height={300}
              className="rounded-sm shadow-sm shadow-gray-600"
            />
          </div>
          <div className="w-[400px]">
            <h1 className="text-3xl pb-2">
              Suprise Your <span className="text-orange-600">Friend!</span>
            </h1>
            <h1 className="text-3xl pb-10">Let us arrange a smile.</h1>
            <p className="text-sm text-gray-600 pb-8">
              Where flowers are our inspiration to create lasting memories.
              Whatever the occasion...
            </p>
            <h2 className="flex items-center text-sm pb-2">
              <IoIosHeart className="mr-2 text-orange-600 "/>
              Hand picked just for you.
            </h2>
            <h2 className="flex items-center text-sm pb-2">
              <IoIosHeart className="mr-2 text-orange-600" />
              Unique flower arrangements
            </h2>
            <h2 className="flex items-center text-sm">
              <IoIosHeart className="mr-2 text-orange-600"/>
              Best way to say you care.
            </h2>
          </div>
        </div>
      </div>
      <Experts/>
    </div>
  );
}
