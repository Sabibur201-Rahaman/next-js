'use client'

import Menu from "../components/Menu";

async function getData() {
  let res = await fetch("https://dummyjson.com/products");
  let json = await res.json();
  console.log(json);
  return json["products"];
}

async function page() {
  let data = await getData();
  return (
    <div>
      <button onClick={()=>{alert("Hello")}}>click</button>
    <Menu/>
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
