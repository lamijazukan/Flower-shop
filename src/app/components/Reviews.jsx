async function getReviews() {
  const res = await fetch("http://localhost:4000/reviews", {
    next: {
      revalidate: 0, // use 0 to opt out of using cache
    },
  });

  return res.json();
}

export default async function Reviews() {
  const reviews = await getReviews();

  return (
    <main className="ml-20 mr-20 mt-10">
      <div className="border-t border-black">
        <h1 className="text-2xl font-semibold pt-5">Reviews</h1>
      </div>

      {reviews.map((review) => (
        <div key={review.id} className="mt-8 border-t border-black pt-4">
          <div className="flex gap-2 items-center mb-2">
        
            <h3 className="text-sm font-semibold">{review.name}</h3>
            <h3 className="text-xs text-gray-600">{review.date}</h3>
          </div>

          <p className="text-sm">{review.comment}</p>
        </div>
      ))}
      {reviews.length === 0 && (
        <p className="text-center">There are no open tickets, yay!</p>
      )}
    </main>
  );
}
