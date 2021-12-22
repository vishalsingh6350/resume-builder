import React, { useState } from "react";
import { BiImageAdd } from "react-icons/bi";

const ProfilePic = ({ editing }) => {
  const [imageSrc, setimageSrc] = useState(
    "https://via.placeholder.com/150x150.png"
  );
  const handleFileInput = (e) => {
    // console.log(e);
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setimageSrc(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <div className="profilePic__section">
      <div className="profilePic__wrapper">
        {editing ? (
          <>
            <label htmlFor="picUpload">
              <BiImageAdd />
            </label>
            <input
              type="file"
              name="picUpload"
              id="picUpload"
              accept="image/*"
              className="addImage"
              onChange={handleFileInput}
            />
          </>
        ) : (
          ""
        )}
        <img src={imageSrc} alt="" srcSet="" />
      </div>
    </div>
  );
};

export default ProfilePic;
