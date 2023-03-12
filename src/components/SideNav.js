import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

function SideNav(props) {
  const resumeData = props.resumeData;
  return (
    <div
      className="sidenav">
        <ScrollAnimation
          animateIn="animate__fadeInUp"
          animateOnce={true}
          duration={1}
        >      <ul>
        {resumeData.socialLinks.map((item) => {
          return (
            <li key={item.name}>
              <a href={item.url} target="_blank" title={item.name}>
                <i className={item.className}></i>
              </a>
            </li>
          );
        })}
      </ul>
      </ScrollAnimation>
    </div>
  );
}

export default SideNav;
