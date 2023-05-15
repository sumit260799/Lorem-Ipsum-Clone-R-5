import { useState } from "react";
import data from "./Data";

export default function App() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setText(data.slice(0, count));
  };

  return (
    <main className="w-[80vw] max-w-[700px] mx-auto my-10 md:my-[130px]  text-center">
      <h4 className="uppercase text-2xl text-zinc-700">
        tired of boring lorem ipsum?
      </h4>
      <form
        className="grid grid-flow-col justify-center mt-7 mb-10"
        onSubmit={handleSubmit}
      >
        <p className="capitalize text-xl tracking-wide px-2 text-zinc-700 text">
          Paragraphs:
        </p>
        <input
          className=" bg-gray-400 text-center p-1 mr-3 rounded-lg text-white"
          type="number"
          min="1"
          max="8"
          name="amount"
          step="1"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button
          className="bg-green-500 rounded-md px-2 py-1 text-white"
          type="sumbit"
        >
          Generate
        </button>
      </form>
      <article className="text-justify ">
        {text.map((item) => {
          return <p className="gap-y-[20px] mb-5 md:mb-10">{item}</p>;
        })}
      </article>
    </main>
  );
}
