import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  const title = () => {
    return <h1>My Website</h1>;
  };

  const year = () => {
    return new Date().getFullYear();
  };

  return (
    <div>
      <Header title={title} />
      <Content />
      <Footer year={year} />
    </div>
  );
}

export default App;
