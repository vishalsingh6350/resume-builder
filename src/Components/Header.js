import React from "react";
import logo from "../logo.svg";
import "../index.css";
import { FaAngleDoubleDown } from "react-icons/fa";
const Header = ({ mobileView, setshowSideBar, showSideBar }) => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="" srcSet="" />
      </div>
      {mobileView ? (
        <button
          onClick={() => setshowSideBar((prev) => !prev)}
          className="toggleSidebar"
        >
          <FaAngleDoubleDown
            style={{
              transform: showSideBar ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
        </button>
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;
