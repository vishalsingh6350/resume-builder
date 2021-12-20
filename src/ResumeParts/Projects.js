import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaBackspace } from "react-icons/fa";
import { BiAddToQueue } from "react-icons/bi";
const Projects = ({ editing }) => {
  const [projects, setprojects] = useState([
    {
      key: 0,
      title: "Your Project Title",
      links: {
        githubLink: "https://github.com/",
        liveLink: "https://google.com/",
      },
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia exercitationem mollitia, asperiores veniam distinctio minima eos culpa beatae necessitatibus aspernatur.",
    },
    {
      key: 1,
      title: "Your Project Title",
      links: {
        githubLink: "https://github.com/",
        liveLink: "https://google.com/",
      },
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia exercitationem mollitia, asperiores veniam distinctio minima eos culpa beatae necessitatibus aspernatur.",
    },
    {
      key: 2,
      title: "Your Project Title",
      links: {
        githubLink: "https://github.com/",
        liveLink: "https://google.com/",
      },
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia exercitationem mollitia, asperiores veniam distinctio minima eos culpa beatae necessitatibus aspernatur.",
    },
  ]);
  return (
    <div className="projects__section">
      <h2 className="project__section__title">Projects</h2>
      <ul className="projectsList">
        {projects.map((item) => {
          return (
            <li className="eachProject" key={item.key}>
              <div
                className="project_title"
                contentEditable={editing}
                suppressContentEditableWarning={true}
              >
                {item.title}
              </div>
              <div className="project_links">
                <div className="project_link_wrapper">
                  {item.links.githubLink && editing ? (
                    <input
                      type="text"
                      placeholder="Enter corresponding link"
                      className="project_link_input"
                      value={item.links.githubLink}
                      onChange={(e, id = item.key) => {
                        const newArr = [...projects];
                        newArr[
                          newArr.findIndex((item) => item.key === id)
                        ].links.githubLink = e.target.value;
                        setprojects(newArr);
                      }}
                    />
                  ) : (
                    ""
                  )}
                  <a
                    href={item.links.githubLink}
                    style={{ pointerEvents: editing ? "none" : "auto" }}
                  >
                    <FaGithub />
                  </a>
                </div>
                <div className="project_link_wrapper" contentEditable={false}>
                  {item.links.liveLink && editing ? (
                    <input
                      type="text"
                      placeholder="Enter corresponding link"
                      className="project_link_input"
                      value={item.links.liveLink}
                      onChange={(e, id = item.key) => {
                        const newArr = [...projects];
                        newArr[
                          newArr.findIndex((item) => item.key === id)
                        ].links.liveLink = e.target.value;
                        setprojects(newArr);
                      }}
                    />
                  ) : (
                    ""
                  )}
                  <a
                    href={item.links.liveLink}
                    style={{ pointerEvents: editing ? "none" : "auto" }}
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              <div
                className="project_desc"
                contentEditable={editing}
                suppressContentEditableWarning={true}
              >
                {item.desc}
              </div>
            </li>
          );
        })}
        {/* <li className="eachProject">
          <div
            className="project_title"
            contentEditable={editing}
            suppressContentEditableWarning={true}
          >
            quizz app
          </div>
          <div className="project_links">
            <div className="project_link_wrapper">
              {editing ? (
                <input
                  type="text"
                  placeholder="Enter corresponding link"
                  className="project_link_input"
                />
              ) : (
                ""
              )}
              <a href="https://google.com" target="_blank">
                <FaGithub />
              </a>
            </div>
            <div className="project_link_wrapper">
              {editing ? (
                <input
                  type="text"
                  placeholder="Enter corresponding link"
                  className="project_link_input"
                />
              ) : (
                ""
              )}
              <a href="https://google.com">
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
          <div
            className="project_desc"
            contentEditable={editing}
            suppressContentEditableWarning={true}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            cumque voluptatibus perferendis ex ea veniam!
          </div>
        </li> */}
      </ul>
      {editing ? (
        <div className="btnGroup">
          <button
            className="addFieldBtn"
            onClick={() => {
              setprojects((prev) => [
                ...prev,
                {
                  key: prev[prev.length - 1]
                    ? prev[prev.length - 1].key + 1
                    : 0,
                  title: "Your Project Title",
                  links: {
                    githubLink: "https://github.com/",
                    liveLink: "https://google.com/",
                  },
                  desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia exercitationem mollitia, asperiores veniam distinctio minima eos culpa beatae necessitatibus aspernatur.",
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
              setprojects((prev) =>
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

export default Projects;
