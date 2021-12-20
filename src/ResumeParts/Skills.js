import React, { useState } from "react";
import { BiAddToQueue } from "react-icons/bi";
import { FaBackspace } from "react-icons/fa";
const Skills = ({ editing }) => {
  const [skills, setskills] = useState([
    {
      key: 0,
      content: "SkillName",
    },
    {
      key: 1,
      content: "SkillName",
    },
  ]);
  return (
    <div className="skills__section">
      <div className="skills__title">Skills</div>
      <ul className="skills__list">
        {skills.map((item) => {
          return (
            <li
              className="skills__items"
              contentEditable={editing}
              key={item.key}
              suppressContentEditableWarning={true}
            >
              {item.content}
            </li>
          );
        })}
      </ul>
      {editing ? (
        <div className="btnGroup">
          <button
            className="addFieldBtn"
            onClick={() => {
              setskills((prev) => [
                ...prev,
                {
                  key: prev[prev.length - 1]
                    ? prev[prev.length - 1].key + 1
                    : 0,
                  content: "SkillName",
                },
              ]);
            }}
          >
            <BiAddToQueue />
          </button>
          <button
            className="deletelast"
            data-message="delete last element"
            onClick={() => {
              setskills((prev) =>
                prev.filter((item, index, arr) => {
                  return index !== arr.length - 1;
                })
              );
            }}
          >
            <FaBackspace />
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Skills;
