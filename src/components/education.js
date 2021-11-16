import React from "react";
import "./education.css";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

import EducationT from "./education_t";

function Education() {
    return (
      <div className="main">
        <div className="work">
          <h1 style={{ fontSize: "50px", color: "white", marginTop:"80px" }}>Education</h1>
        </div>
        <div className="timeline" style={{marginBottom:"0px"}}>
          <EducationT />
        </div>
      </div>
    );
  }
  
  export default Education;