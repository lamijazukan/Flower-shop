"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddComment() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const newComment = {
      name,
      email: "user@gmail.com",
      date: "30.04.2018",
      comment,
    };

    const res = await fetch("http://localhost:4000/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newComment),
    });

    if (res.status === 201) {
      router.refresh();
      router.push("#");
    }
  };

  return (
    <main className="ml-20 mr-20 mt-8">
      <h1 className="text-2xl pb-5">Add a review</h1>
      <form onSubmit={handleSubmit} className="flex flex-col ">
        <label className="pb-3">
          <span>Your Name:</span>
        </label>
        <input
          required
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="border border-gray-400 w-[150px]"
        />

        <label className="pt-5 pb-3">
          <span>Your Comment:</span>
        </label>
        <textarea
          required
          onChange={(e) => setComment(e.target.value)}
          value={comment}
          className="border border-gray-400 h-[250px] mb-8"
        />

        <button className="btn-primary" disabled={isLoading}>
          {isLoading && <span>Adding...</span>}
          {!isLoading && (
            <span className="border-2 border-black bg-black text-white rounded-sm py-2 px-2">
              Add Comment
            </span>
          )}
        </button>
      </form>
    </main>
  );
}
