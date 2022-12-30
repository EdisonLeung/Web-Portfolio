import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>
              <span>My Projects</span>
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
                          <div className="project-description">
                            <p>{item.description}</p>
                          </div>
                          <ul className="project-tech-list">
                            {item.skills.map((skill) => (
                              <li>{skill}</li>
                            ))}
                          </ul>
                          <div className="project-links">
                            <a
                              href="https://github.com/EdisonLeung/Campus-Map"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fa fa-github"></i>
                            </a>

                            <Link to={item.link}>
                              <div style={{ fontSize: 15 }}>
                                View Project &nbsp;
                              </div>
                              <i class="fa-solid fa-arrow-up-right-from-square"></i>
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="project-image portfolio-item">
                        <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained img">
                          <div style={{ maxWidth: 700, display: "block" }}>
                            <Link to={item.link}>
                              <div className="item-wrap">
                                <img src={item.thumbnail} />
                                <div className="overlay">
                                  <div className="portfolio-item-meta">
                                    <h5>{item.name}</h5>
                                    <p>View Project</p>
                                  </div>
                                </div>
                              </div>
                            </Link>
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
}
