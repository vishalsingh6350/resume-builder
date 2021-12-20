import React, { useState } from "react";
import { BiAddToQueue } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";

const Experience = ({ editing }) => {
  const [experience, setexperience] = useState([
    {
      key: 0,
      content: {
        designation: "Designation",
        companyName: "Company Name",
        description:
          "Add some description about your company and your role in it...",
      },
    },
    {
      key: 1,
      content: {
        designation: "Designation",
        companyName: "Company Name",
        description:
          "Add some description about your company and your role in it...",
      },
    },
  ]);
  const deleteField = (id) => {
    setexperience((prev) => {
      return prev.filter((item) => item.key !== id);
    });
  };
  return (
    <div className="section__experience">
      <div className="section__title">Experience</div>
      <div className="section__desc">
        {experience.map((item) => {
          return (
            <ul className="experienceDetails" key={item.key}>
              <li
                contentEditable={editing}
                suppressContentEditableWarning={true}
                className="experienceDetails__title"
              >
                {item.content.designation}
              </li>
              <li
                contentEditable={editing}
                suppressContentEditableWarning={true}
                className="experienceDetails__companyDetails"
              >
                {item.content.companyName}
              </li>
              <li
                contentEditable={editing}
                suppressContentEditableWarning={true}
                className="experienceDetails__description"
              >
                {item.content.description}
              </li>
              {editing ? (
                <button
                  data-message="delete"
                  className="delete"
                  onClick={() => {
                    deleteField(item.key);
                  }}
                >
                  <FaTrash />
                </button>
              ) : (
                ""
              )}
            </ul>
          );
        })}
      </div>
      {editing ? (
        <button
          className="addFieldBtn"
          onClick={() => {
            setexperience((prev) => [
              ...prev,
              {
                key: prev[prev.length - 1] ? prev[prev.length - 1].key + 1 : 0,
                content: {
                  designation: "Designation",
                  companyName: "Company Name",
                  description:
                    "Add some description about your company and your role in it...",
                },
              },
            ]);
          }}
        >
          <BiAddToQueue />
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Experience;
