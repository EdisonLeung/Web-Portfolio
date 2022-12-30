import React, { Component } from "react";
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <p>{resumeData.skillsDescription}</p>
            <ul className="skills">
              {resumeData.skills &&
                resumeData.skills.map((item) => {
                  return <li> {item.skillname} </li>;
                })}
            </ul>
          </div>
        </div>

        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.education &&
              resumeData.education.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        <em className="date">{item.date}</em>
                      </p>
                      <ul>
                        {item.info.map((data) => {
                          return <li>{data}</li>;
                        })}
                        <li>
                          <b>Relevant Coursework:</b>
                          <ul className="skills" style={{ marginTop: 0 }}>
                            {item.courses.map((course) => {
                              return (
                                <li style={{ fontSize: 12 }}> {course} </li>
                              );
                            })}
                          </ul>
                        </li>
                        <li>
                          <b>Clubs and Organizations:</b> {item.clubs}
                        </li>
                      </ul>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work Experience</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.work &&
              resumeData.work.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3 className="eleven columns" style={{ padding: "0px" }}>
                        {item.CompanyName}
                        <h5 className="date">{item.date}</h5>
                      </h3>
                      <div className="one columns" style={{ padding: "0px" }}>
                        <img src={item.logo} alt="" />
                      </div>

                      <ul
                        className="twelve columns"
                        style={{ marginTop: "0px" }}
                      >
                        {item.Achievements.map((achievement) => {
                          return <li> {achievement}</li>;
                        })}
                      </ul>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    );
  }
}
