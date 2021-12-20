import React, { useState } from "react";
import { FaHome, FaMailBulk, FaPhoneAlt, FaTrash } from "react-icons/fa";
import { BiAddToQueue, BiRefresh } from "react-icons/bi";

const Contact = ({ editing }) => {
  const [contactFields, setcontactFields] = useState([
    {
      key: 0,
      icon: FaPhoneAlt,
      content: 987654321,
    },
    {
      key: 1,
      icon: FaMailBulk,
      content: "username@gmail.com",
    },
    {
      key: 2,
      icon: FaHome,
      content: "address",
    },
  ]);
  const deleteField = (id) => {
    setcontactFields((prev) => {
      //   console.log(prev);

      return prev.filter((item) => item.key !== id);
    });
  };
  return (
    <div className="section__contact">
      <div className="section__title">Contact</div>
      <div className="section__desc">
        <ul className="contactItems">
          {contactFields.map((item) => (
            <li key={item.key} spellCheck={false}>
              <item.icon />
              <span
                contentEditable={editing}
                suppressContentEditableWarning={true}
              >
                {item.content}
              </span>
              {editing ? (
                <button
                  className="delete"
                  data-message="delete"
                  onClick={() => deleteField(item.key)}
                >
                  <FaTrash />
                </button>
              ) : (
                ""
              )}
            </li>
          ))}
          {/* <li>
            <FaHome />
            <span contentEditable={editing}>Just a random address</span>
          </li> */}
        </ul>
      </div>
      {editing ? (
        <div className="btnGroup">
          <div className="addFieldBtn">
            <BiAddToQueue />
            <ul className="optionElements">
              <li
                data-message="Add Email"
                onClick={() => {
                  setcontactFields((prev) => [
                    ...prev,
                    {
                      key: prev[prev.length - 1]
                        ? prev[prev.length - 1].key + 1
                        : 0,
                      icon: FaMailBulk,
                      content: "username@gmail.com",
                    },
                  ]);
                }}
              >
                <FaMailBulk />
                Email
              </li>
              <li
                data-message="Add Phone number"
                onClick={() => {
                  setcontactFields((prev) => [
                    ...prev,
                    {
                      key: prev[prev.length - 1]
                        ? prev[prev.length - 1].key + 1
                        : 0,
                      icon: FaPhoneAlt,
                      content: 987654321,
                    },
                  ]);
                }}
              >
                <FaPhoneAlt />
                Phone
              </li>
              <li
                data-message="Add address"
                onClick={() => {
                  setcontactFields((prev) => [
                    ...prev,
                    {
                      key: prev[prev.length - 1]
                        ? prev[prev.length - 1].key + 1
                        : 0,
                      icon: FaHome,
                      content: "address",
                    },
                  ]);
                }}
              >
                <FaHome /> Address
              </li>
            </ul>
          </div>
          <button
            className="reset"
            data-message="Reset"
            onClick={() => {
              setcontactFields([
                {
                  key: 0,
                  icon: FaPhoneAlt,
                  content: 987654321,
                },
                {
                  key: 1,
                  icon: FaMailBulk,
                  content: "username@gmail.com",
                },
                {
                  key: 2,
                  icon: FaHome,
                  content: "address",
                },
              ]);
            }}
          >
            <BiRefresh />
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Contact;
