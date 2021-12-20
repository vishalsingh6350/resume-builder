import React from "react";

const Theme = ({ color1, color2 }) => {
  return (
    <div
      className="themeOption"
      style={{
        background: `linear-gradient(135deg,${color1},${color2})`,
      }}
      onClick={() => {
        document.documentElement.style.setProperty(
          "--resume_primary_color",
          color1
        );
        document.documentElement.style.setProperty(
          "--resume_secondary_color",
          color2
        );
      }}
    ></div>
  );
};

export default Theme;
