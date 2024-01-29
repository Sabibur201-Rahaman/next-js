"use client";
import React, { useState } from "react";
import { useEffect } from "react";
function page() {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      let res = await fetch("https://dummyjson.com/products");
      let json = await res.json();
      console.log(json);
      setData(json['products']);
    })();
  }, []);
  return (
    <div>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item["title"]}</h1>
            <p>{item["description"]}</p>
            <p>{item["price"]}</p>
          </div>
        );
      })}
    </div>
  );
}

export default page;
