import React, { useState } from "react";

function BgChanger() {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-wrap justify-center bottom-10 inset-x-0 px-2">
        <div className="flex flex-wrap gap-3 justify-center shadow-lg bg-white px-3 py-3 rounded-3xl">
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            onClick={() => setColor("red")}
            style={{ background: "red" }}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            onClick={() => setColor("green")}
            style={{ background: "green" }}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            onClick={() => setColor("yellow")}
            style={{ background: "yellow" }}
          >
            Yellow
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            onClick={() => setColor("pink")}
            style={{ background: "pink" }}
          >
            Pink
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            onClick={() => setColor("orange")}
            style={{ background: "orange" }}
          >
            Orange
          </button>
        </div>
      </div>
    </div>
  );
}

export default BgChanger;
