import React from "react";

const AboutMe = ({ state }) => {
  return (
    <div>
      <div className="section__aboutme">
        <div className="section__title">about me</div>
        <div
          className="section__desc"
          contentEditable={state}
          suppressContentEditableWarning={true}
        >
          Add something about yourself here...
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
