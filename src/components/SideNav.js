import React from "react";

function SideNav(props) {
  const resumeData = props.resumeData;
  return (
    <div
      className="sidenav">
      <ul>
        {resumeData.socialLinks.map((item) => {
          return (
            <li key={item.name}>
              <a href={item.url} target="_blank">
                <i className={item.className}></i>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SideNav;
