import { useState } from "react";

function SecondComonet() {
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");
  const [color, setColor] = useState("red");

  const clickButton = ()=>{
    setBrand("Tata");
    setModel("Naino");
    setYear("2012");
    setColor("red");
    console.log(brand,model,year,color);
  }

  return (
    <>
      <h1>My {brand}</h1>
      <p> It is a {color} {model} from {year}. </p>
      <button onClick={()=>clickButton()}> update data </button>
    </>
  )
}

export default SecondComonet;