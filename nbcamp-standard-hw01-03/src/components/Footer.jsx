import React from "react";

function Footer({ year, setYear }) {
  setYear(() => {
    return new Date().getFullYear();
  });
  return <footer>© {year} My Website</footer>;
}

export default Footer;
