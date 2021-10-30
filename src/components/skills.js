import React from "react";
import "./skills.css";
import Chip from "@mui/material/Chip";
import { withStyles } from "@mui/styles";
import { color } from "@mui/system";
function Skills() {
  const style = {
    // backgroundColor: "salmon",
    backgroundColor : 'rgba(33,37,41,1)',
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
  ];

  return (
    <div className="skill">
      <h1 style={{fontSize:"50px", color:"white"}}>Skills</h1>
      <div style={{ width: "70%", marginTop: "7vh" }}>
        {skills.map((item) => {
          return <Chip label={item} size="medium" style={style} />;
        })}
      </div>
    </div>
  );
}

export default Skills;
