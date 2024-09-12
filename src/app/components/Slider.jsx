"use client";
import {useState} from "react";
import Image from "next/image";

//icons import
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

//fonts import
import { Freehand } from "next/font/google";
const freehand = Freehand({ subsets: ["latin"], weight: ["400"] });

const images = [
  {
    url: "/images/buquet-roses-rmbg.png",
    alt: "Roses",
  },
  {
    url: "/images/karanfil-rmbg.png",
    alt: "tulips",
  },
];

export default function Slider() {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextSlide = () => {
    if (currentImage < images.length - 1) {
      setCurrentImage(currentImage + 1);
    } else {
      setCurrentImage(0);
    }
  };

  const handlePrevSlide = () => {
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1);
    } else {
      setCurrentImage(images.length - 1);
    }
  };

  return (
    <main className="relative w-full h-[500px] bg-gray-100 overflow-hidden mt-10 flex items-center justify-center">
      <div className="flex justify-between items-center ml-20 mr-20">
        <div className="w-[500px]">
          <p className="text-4xl">
            Send <span className="text-orange-600">flowers</span> like
          </p>
          <p className="text-4xl pb-5">you mean it.</p>
          <p className="text-sm text-gray-500">
            Where flowers are our inspiration to create lasting memories.
            Whatever the occasion, our flowers will make it special cursus a sit
            amet mauris.
          </p>
          <p
            className={freehand.className}
            style={{
              color: ["#F72F32"],
              fontSize: ["40px"],
              paddingTop: ["15px"],
            }}
          >
            Sara
          </p>
        </div>
        <div className="bg-gray-100 p-2 shadow-lg shadow-gray-400 rounded-full border border-gray-700">
          <Image
            className="rounded-full"
            src={images[currentImage].url}
            alt={images[currentImage].alt}
            width={400}
            height={500}
          />
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 ml-2"
            onClick={handlePrevSlide}
          >
            <IoIosArrowRoundBack className="text-4xl hover:text-orange-600" />
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 mr-2"
            onClick={handleNextSlide}
          >
            <IoIosArrowRoundForward className="text-4xl hover:text-orange-600" />
          </button>
        </div>
      </div>
    </main>
  );
}
