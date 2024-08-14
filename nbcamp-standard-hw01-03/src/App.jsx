import React, { useState } from "react";
import Counter from "./components/Counter";
import Status from "./components/Status";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("");
  const [year, setYear] = useState(0);

  return (
    <div>
      <Header title={title} setTitle={setTitle} />
      <Content />
      <Counter count={count} setCount={setCount} />
      <Status count={count} />
      <Footer year={year} setYear={setYear} />
    </div>
  );
}

export default App;
