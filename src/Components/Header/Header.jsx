import React from "react";
import { Navbar } from "../Navbar/Navbar";
import "./Header.css";
export const Header = () => {
  return (
    <>
      <header className="header center dark">
        <h3>
          <a href="#home" className="link">
            imbickydutta
          </a>
        </h3>
        <Navbar />
      </header>
    </>
  );
};
