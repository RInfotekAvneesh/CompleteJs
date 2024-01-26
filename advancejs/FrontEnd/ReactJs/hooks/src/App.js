import "./App.css";
import { useState } from "react";
import Tailwind from "./Tailwind";
import Card from "./components/card";
import Counter from "./components/Counter";
import BgChanger from "./components/BgChanger";
import UseEffect from "./components/UseEffect";

function App() {
  const myobj = {
    name: "avneesh",
    email: "avneesh832@gmail.com",
    age: 20,
  };
  const myArr = [10, 2, 3, 4, 5, 6, 7, 8, 9, 90];

  return (
    <div className="App-header">
      <Tailwind />
      <Card someObj={myArr} someObj2={myobj} />
      <Counter />
      <BgChanger />
      <UseEffect />
    </div>
  );
}

export default App;
