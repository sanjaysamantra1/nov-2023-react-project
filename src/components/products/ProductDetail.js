import React from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function ProductDetail() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    console.log(currentParams); // get new values onchange
    console.log(searchParams.get("title"), searchParams.get("price"));
  }, [searchParams]);

  return <div>ProductDetail</div>;
}
