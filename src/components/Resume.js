import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

export default function Resume(props) {
  let resumeData = props.resumeData;
  const [selectedComp, setSelectedComp] = useState(resumeData.work[0]);

  return (
    <section id="resume">
      <div className="row skill">
        <ScrollAnimation
          animateIn="animate__fadeInUp"
          animateOnce={true}
          duration={0.5}
        >
          <h1>
            <span>My Resume</span>
          </h1>
          <div className="resume-container">
            <div className="title">Softwares / Skills</div>
            <ScrollAnimation
              animateIn="animate__fadeInUp"
              animateOnce={false}
              duration={0.5}
            >
              <ul className="skills">
                {resumeData.skills &&
                  resumeData.skills.map((item) => {
                    return <li> {item.skillname} </li>;
                  })}
              </ul>
            </ScrollAnimation>
            <div className="title">Education</div>
            {resumeData.education.map((item) => {
              return (
                <div className="description">
                  <div className="title">{item.UniversityName}</div>

                  <div>{item.date}</div>

                  <ul>
                    {item.info.map((data) => {
                      return <li>{data}</li>;
                    })}
                    <li>
                      <b>Relevant Coursework:</b>
                      <ul className="skills">
                        <ScrollAnimation
                          animateIn="animate__fadeInUp"
                          animateOnce={false}
                          duration={1}
                        >
                          {item.courses.map((course) => {
                            return <li style={{ fontSize: 12 }}> {course} </li>;
                          })}
                        </ScrollAnimation>
                      </ul>
                    </li>
                    <li>
                      <b>Clubs and Organizations:</b> {item.clubs}
                    </li>
                  </ul>
                </div>
              );
            })}

            <div className="title">Work Experience</div>
            <div className="work-section">
              <div className="select">
                <ul>
                  {resumeData.work.map((item) => {
                    return (
                      <li
                        className="smoothscroll"
                        style={{
                          borderLeft: `4px solid ${
                            item.CompanyName === selectedComp.CompanyName
                              ? "#64ffda"
                              : ""
                          }`,
                        }}
                      >
                        <button
                          key={item.CompanyName}
                          onClick={() => setSelectedComp(item)}
                        >
                          {item.CompanyName}
                        </button>{" "}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="description">
                <div className="title">
                  {selectedComp.CompanyName}
                  <img
                    src={selectedComp.logo}
                    alt=""
                    style={{
                      position: "absolute",
                      paddingRight: "4rem",
                      right: 0,
                      width: "auto",
                      height: "5.5rem",
                    }}
                  />
                </div>

                <div>{selectedComp.date}</div>

                <ul>
                  {resumeData.work
                    .filter(
                      (item) => item.CompanyName === selectedComp.CompanyName
                    )[0]
                    .Achievements.map((achievement) => {
                      return <li>{achievement}</li>;
                    })}
                </ul>
              </div>
            </div>
          </div>
        </ScrollAnimation>{" "}
      </div>
    </section>
  );
}
