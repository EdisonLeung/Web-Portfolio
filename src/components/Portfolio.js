import React, { Component, useState } from "react";
import { Link } from "react-router-dom";

function Porfolio(props) {
  let resumeData = props.resumeData;
  const [readMore, setReadMore] = useState(false);
  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>
            <span>Some of My Projects</span>
          </h1>
          <ul>
            {resumeData.portfolio &&
              resumeData.portfolio.map((item) => {
                return (
                  <li className="projects-grid">
                    <div className="project-content">
                      <div>
                        <p className="project-overline">Featured Project</p>
                        <h3 className="project-title">{item.name}</h3>
                        <div className="project-description" style={{}}>
                          {item.description
                            .slice(0, readMore ? item.description.length : 2)
                            .map((paragraph) => (
                              <p>{paragraph}</p>
                            ))}
                          {item.description.length > 2 && (
                            <div
                              className="read-more"
                              onClick={() => setReadMore(!readMore)}
                            >
                              <button>
                                {readMore ? "read less" : "read more"}
                              </button>
                            </div>
                          )}
                        </div>
                        <ul className="project-tech-list">
                          {item.skills.map((skill) => (
                            <li>{skill}</li>
                          ))}
                        </ul>
                        <div className="project-links">
                          {item.gitLink !== undefined && (
                            <a
                              href="https://github.com/EdisonLeung/Campus-Map"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fa fa-github"></i>
                            </a>
                          )}

                          {item.textLinks.map((link) => (
                            <a href={link.link}>
                              <div style={{ fontSize: 15 }}>
                                {link.text} &nbsp;
                              </div>
                              <i class="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="project-image portfolio-item">
                      <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained img">
                        <div style={{ maxWidth: 700, display: "block" }}>
                          <a href={item.link}>
                            <div className="item-wrap">
                              <img src={item.imgurl} alt="" />
                              <div className="overlay">
                                <div className="portfolio-item-meta">
                                  <h5>{item.name}</h5>
                                  <p>View Project</p>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
          </ul>
          {/* <h1 style={{ marginTop: "10%", textAlign: "center" }}>
              Other Noteworthy Projects
            </h1>
            <ul className="gg">
              {resumeData.noteworthy_projects.map((item) => (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li>
                    <div className="project-inner">
                      <div style={{ display: "block" }}>
                        <div className="project-top">
                          <div className="folder">
                            <i class="fa-regular fa-folder"></i>
                          </div>
                          <div className="project-links">
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i class="fa fa-github"></i>
                            </a>
                          </div>
                        </div>
                        <h3 className="project-title">{item.name}</h3>
                        <div className="project-description">
                          <p>{item.description}</p>
                        </div>
                      </div>
                      <div style={{ display: "block" }}>
                        <ul className="project-tech-list">
                          {item.skills.map((skill) => (
                            <li>{skill}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                </a>
              ))}
            </ul> */}
        </div>
      </div>
    </section>
  );
}

export default Porfolio;
