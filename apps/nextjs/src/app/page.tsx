"use client";

import { useEffect, useState } from "react";

export const runtime = "edge";

export default function HomePage() {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    fetch("/api/")
      .then((res) => {
        console.log(res);

        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
        setData("error");
      });
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <main className="flex h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container mt-12 flex flex-col items-center justify-center gap-4 py-8">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Create <span className="text-pink-400">T3</span> Turbo
        </h1>
        <main>{JSON.stringify(data)}</main>;
      </div>
    </main>
  );
}
