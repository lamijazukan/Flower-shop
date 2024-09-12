import Card from "../components/Card";

export async function getFlowers() {
  const res = await fetch("http://localhost:4000/flowers", {
    next: {
      revalidate: 0,
    },
  });

  return res.json();
}

export default async function CardsList () {
  const cards = await getFlowers();
  return (
    <main className="ml-20 mr-20 mt-16">
      <h1 className="text-2xl pb-5 font-bold">Featured Products</h1>

      <div className="grid grid-cols-4 gap-7">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
        {cards.length === 0 && (
          <p className="text-center text-gray-500 mt-4">
            There are no open cards, yay!
          </p>
        )}
      </div>
    </main>
  );
};


