import React, { useState } from "react";
import { BiAddToQueue } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
const Qualification = ({ editing }) => {
  const [qualifications, setqualifications] = useState([
    {
      key: 0,
      content: {
        year: "2016-2018",
        qualification: "Matriculation",
        institute: "MIT",
      },
    },
    {
      key: 1,
      content: {
        year: "2016-2018",
        qualification: "Matriculation",
        institute: "MIT",
      },
    },
  ]);
  const deleteField = (id) => {
    setqualifications((prev) => {
      //   console.log(prev);

      return prev.filter((item) => item.key !== id);
    });
  };
  return (
    <div className="section__qualification">
      <div className="section__title">Education</div>
      <div className="section__desc">
        <ul className="qualification__details">
          {qualifications.map((item) => {
            return (
              <li key={item.key}>
                <div
                  className="qualification__year"
                  contentEditable={editing}
                  suppressContentEditableWarning={true}
                >
                  {item.content.year}
                </div>
                <div
                  className="qualification__title"
                  contentEditable={editing}
                  suppressContentEditableWarning={true}
                >
                  {item.content.qualification}
                </div>
                <div
                  className="qualification__institute"
                  contentEditable={editing}
                  suppressContentEditableWarning={true}
                >
                  {item.content.institute}
                </div>
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
              </li>
            );
          })}
        </ul>
      </div>
      {editing ? (
        <button
          className="addFieldBtn"
          onClick={() => {
            setqualifications((prev) => [
              ...prev,
              {
                key: prev[prev.length - 1] ? prev[prev.length - 1].key + 1 : 0,
                content: {
                  year: "2016-2018",
                  qualification: "Matriculation",
                  institute: "MIT",
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

export default Qualification;
