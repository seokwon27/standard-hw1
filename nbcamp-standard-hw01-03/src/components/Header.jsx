import React from "react";

function Header({ title, setTitle }) {
  setTitle("Counter App");
  return <h1>{title}</h1>;
}

export default Header;
