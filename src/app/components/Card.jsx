"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Card ({ card }) { 
  const [isHovered, setIsHovered] = useState(null);

  return (
    <div className="">
      <Link
        href={`/${card.id}`}
        onMouseEnter={() => setIsHovered(card.id)}
        onMouseLeave={() => setIsHovered(null)}
      >
          <div className="relative shadow-gray-300 shadow-md">
            <Image
              src={card.img}
              alt={card.alt}
              width={400}
              height={300}
              layout="responsive"
              style={{ objectFit: "cover" }}
              className="rounded-sm transition-transform transform hover:scale-105"
            />
          </div>
          <div className="p-2 text-center">
            {isHovered === card.id ? (
              <button className="text-xs">ADD TO CART</button>
            ) : (
              <>
                <h3 className="text-sm text-gray-900 text-center">
                  {card.title}
                </h3>
                <h3 className="text-gray-500 text-xs text-center">
                  {card.price}
                </h3>
              </>
            )}
          </div>
      </Link>
    </div>
  );
};


