"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
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

  return <main>{JSON.stringify(data)}</main>;
}
