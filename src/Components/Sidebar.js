import React, { useState, useEffect } from "react";
import Theme from "./Theme";
const Sidebar = ({ editing, setediting }) => {
  const [themes, setthemes] = useState([
    {
      key: 0,
      color1: "#1ac144",
      color2: "#f5fff5",
    },
    {
      key: 1,
      color1: "#9fc33c",
      color2: "#fbfde7",
    },
    {
      key: 2,
      color1: "#ff9500",
      color2: "#fff4e0",
    },
    {
      key: 3,
      color1: "#ff4d4d",
      color2: "#ffe0e0",
    },
  ]);

  function HEXtoHSL(hex) {
    hex = hex.replace(/#/g, "");
    if (hex.length === 3) {
      hex = hex
        .split("")
        .map(function (hex) {
          return hex + hex;
        })
        .join("");
    }
    var result = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})[\da-z]{0,0}$/i.exec(
      hex
    );
    if (!result) {
      return null;
    }
    var r = parseInt(result[1], 16);
    var g = parseInt(result[2], 16);
    var b = parseInt(result[3], 16);
    r /= 255;
    g /= 255;
    b /= 255;
    var max = Math.max(r, g, b),
      min = Math.min(r, g, b);
    var h,
      s,
      l = (max + min) / 2;
    if (max === min) {
      h = s = 0;
    } else {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
        default:
          break;
      }
      h /= 6;
    }
    s = s * 100;
    s = Math.round(s);
    l = l * 100;
    l = Math.round(l);
    h = Math.round(360 * h);

    return {
      h: h,
      s: s,
      l: l,
    };
  }

  return (
    <div className="sidebar">
      <div className="toggle-wrapper">
        <span>Toggle Edit mode</span>
        <div
          className="toggleBtn"
          onClick={() => {
            setediting((prev) => !prev);
          }}
          style={{
            justifyContent: editing ? "flex-end" : "flex-start",
            background: editing ? "#0177ff" : "#b8d6f8",
          }}
        >
          <div className="switch">{editing ? "I" : "o"}</div>
        </div>
      </div>
      <div className="colors-manager">
        <div className="colorOption">
          <span>select primary accent</span>
          <input
            type="color"
            name="colorInput"
            autoComplete="true"
            id=""
            defaultValue="#0066dc"
            onChangeCapture={(e) => {
              // console.log(e.target.value);
              let value = HEXtoHSL(e.target.value);
              document.documentElement.style.setProperty(
                "--resume_primary_color",
                `hsl(${value.h},${value.s}%,${value.l}%)`
              );
              document.documentElement.style.setProperty(
                "--resume_primary_compliment_color",
                `hsl(${value.h},${value.s}%,${
                  value.l > 70 ? value.l - 10 : value.l - 30
                }%)`
              );
            }}
          />
        </div>
        <div className="colorOption">
          <span>select secondary color</span>
          <input
            type="color"
            name="colorInput"
            autoComplete="true"
            id=""
            defaultValue="#e1eeff"
            onChangeCapture={(e) => {
              // console.log(e.target.value);
              let value = HEXtoHSL(e.target.value);
              document.documentElement.style.setProperty(
                "--resume_secondary_color",
                `hsl(${value.h},${value.s}%,${value.l}%)`
              );
            }}
          />
        </div>
      </div>
      <div className="themesSelector">
        select from the predefined themes...
        <ul className="themesCollections">
          {themes.map((item) => (
            <Theme color1={item.color1} color2={item.color2} key={item.key} />
          ))}
        </ul>
      </div>
      <button
        className="print"
        onClick={() => {
          setediting(false);
          let name = "";
          document
            .querySelector(".personalDetails__name")
            .querySelectorAll("span")
            .forEach((item) => {
              name += item.innerText;
            });
          console.log(name);
          document.title = name;
          window.print();
        }}
      >
        save pdf
      </button>
    </div>
  );
};

export default Sidebar;
