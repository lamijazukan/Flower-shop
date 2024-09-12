
import Image from "next/image";
import { notFound } from "next/navigation";
import Counter from "../components/Counter";
import Reviews from "../components/Reviews";
import AddComment from "../components/AddComment"



export const dynamicParams = true; // default val = true

export async function generateStaticParams() {
  const res = await fetch("http://localhost:4000/flowers");

  const cards = await res.json();

  return cards.map((card) => ({
    id: card.id,
  }));
}
export async function getFlower(id) {
  const res = await fetch("http://localhost:4000/flowers/" + id, {
    next: {
      revalidate: 60,
    },
  });
  if (!res.ok) {
    notFound();
  }

  return res.json();
}

export default async function CardsDetail({ params }) {
  const card = await getFlower(params.id);
  
  return (
    <main>
      <div className="w-full h-[200px] bg-gray-100 mt-10 flex flex-col items-start justify-center pl-20">
        <h1 className="text-4xl">Product List</h1>
        <h2 className="pt-1">
          <i className="text-sm text-gray-600">
            Where flowers are our inspiration
          </i>
        </h2>
      </div>
      <div className="ml-20 mr-20 mt-10 grid grid-cols-2 gap-1">
        <div>
          <Image
            src={card.img}
            alt={card.alt}
            width={380}
            height={200}
            className="rounded-sm shadow-sm"
          />
        </div>

        <div className="">
          <h1 className="text-3xl font-bold pb-2">{card.title}</h1>
          <h3 className="text-lg text-gray-500 pb-8">{card.price}</h3>
          <p className="text-sm text-gray-600 pb-7">{card.description}</p>
          <Counter quantity={1} />
          <h3 className="pt-7 text-sm pb-1 text-gray-500">
            <span className="text-gray-700 font-medium">SKU:</span> {card.sku}
          </h3>
          <h3 className="text-sm pb-1 text-gray-500">
            <span className="text-gray-700 font-medium">Categories:</span>{" "}
            {card.categories}
          </h3>
          <h3 className="text-sm text-gray-500">
            <span className="text-gray-700 font-medium">Tags:</span> {card.tags}
          </h3>
        </div>
      </div>
      <Reviews />
      <AddComment />
    </main>
  );
}
