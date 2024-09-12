import Image from "next/image";
export async function getExperts() {
  const res = await fetch("http://localhost:4000/experts", {
    next: {
      revalidate: 0,
    },
  });

  return res.json();
}

export default async function Experts() {
  const cards = await getExperts();
  return (
    <main className="ml-20 mr-20 mt-16 flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center mb-10 w-[500px]">
        <h1 className="text-3xl pb-2 font-bold ">Flower Experts</h1>
        <p className="text-center text-gray-500 text-sm">
          A perfect blend of creativity, energy, communication, happiness and
          love. Let us arrange a smile for you.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-10 items-center">
        {cards.map((card) => (
          <div key={card.id}>
            <div className="relative ">
              <Image
                src={card.img}
                alt={card.alt}
                width={300}
                height={300}
                layout="responsive"
                style={{ objectFit: "cover" }}
                className="rounded-full"
              />
            </div>
            <div className="p-2 text-center">
              <h3 className="text-sm text-gray-900 text-center">{card.name}</h3>
              <h3 className="text-gray-500 text-xs text-center">
                {card.profession}
              </h3>
            </div>
          </div>
        ))}
        {cards.length === 0 && (
          <p className="text-center text-gray-500 mt-4">
            There are no open cards, yay!
          </p>
        )}
      </div>
    </main>
  );
}
