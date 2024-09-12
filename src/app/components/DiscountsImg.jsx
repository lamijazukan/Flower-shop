import Image from "next/image";
import Link from "next/link";

export default function DiscountsImg() {
  return (
    <main className="flex justify-between items-center ml-20 mr-20 mt-10">
      <Link href={"/"}>
        <div className="relative h-[200px]">
          <Image
            src="/images/redroses.webp"
            alt="Red Roses"
            width={300}
            height={300}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-center">
            <div>
              <h2 className="text-lg">BIG RED ROSE</h2>
              <h1 className="text-3xl font-bold">40% OFF</h1>
            </div>
          </div>
        </div>
      </Link>

      <Link href={"/"}>
        <div className="relative h-[200px]">
          <Image
            src="/images/colorfultulips.webp"
            alt="Colorful Tulips"
            width={300}
            height={300}
          />

          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-center">
            <div>
              <h1 className="text-2xl font-bold">COLORFUL TULIPS</h1>
              <h2 className="text-lg">UP TO 30% OFF</h2>
            </div>
          </div>
        </div>
      </Link>
      <Link href={"/"}>
        <div className="relative h-[200px]">
          <Image
            src="/images/chrysanthemum.jpg"
            alt="Chrysanthemum"
            width={300}
            height={300}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-center">
            <div>
              <h2 className="text-lg">CHRYSANTHEMUM</h2>
              <h1 className="text-3xl font-bold">30% OFF</h1>
            </div>
          </div>
        </div>
      </Link>
    </main>
  );
}
