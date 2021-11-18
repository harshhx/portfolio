import React from "react";
import "./skills.css";
import Chip from "@mui/material/Chip";
import { withStyles } from "@mui/styles";
import { color } from "@mui/system";
import skill from "./assets/undraw_working_late_re_0c3y.svg";

function Skills() {
  const style = {
    // backgroundColor: "salmon",
    backgroundColor: "rgba(33,37,41,1)",
    height: "70px",
    fontSize: "30px",
    margin: "15px",
    color: "white",
  };

  const skills = [
    "Django",
    "Django-Rest-Framework",
    "Python",
    "MicroServices",
    "SQL",
    "MySQL",
    "FireStore (FireBase)",
    "React.js",
    "JavaScript",
    "C++",
    "git"
  ];

  return (
    <div className="skill">
      <h1 style={{ fontSize: "50px", color: "white" }}>Skills</h1>
      <div style={{ width: "70%", marginTop: "7vh" }}>
        {skills.map((item) => {
          return (
            <Chip
              id="skill"
              label={item}
              size="medium"
              style={style}
              onClick={() => {}}
              onMouseEnter={() => {
                // console.log("entered");
              }}
              onMouseLeave={() => {
                // console.log("exited");
              }}
            />
          );
        })}
      </div>
      {/* <div style={{width:"100%", marginTop:"100px"}}>
        <img
          src={skill}
          alt="programmer"
          style={{ width: "180px", height: "180px" }}
        />
      </div> */}
    </div>
  );
}

export default Skills;
