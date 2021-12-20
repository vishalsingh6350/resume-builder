import React from "react";

const PersonalDetails = ({ editing }) => {
  return (
    <div className="section__personalDetails">
      <div className="personalDetails__name">
        <span contentEditable={editing} suppressContentEditableWarning={true}>
          Lorem
        </span>{" "}
        <span contentEditable={editing} suppressContentEditableWarning={true}>
          Ipsum
        </span>
      </div>
      <div
        className="personalDetails__designation"
        contentEditable={editing}
        suppressContentEditableWarning={true}
      >
        Add your designation
      </div>
    </div>
  );
};

export default PersonalDetails;
