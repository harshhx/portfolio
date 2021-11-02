import React from "react";
import "./work_exp.css";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

import WorkExpT from "./work_exp_t";

function Work() {
  return (
    <div className="main">
      <div className="work">
        <h1 style={{ fontSize: "50px", color: "white", marginTop:"80px" }}>Work Experience</h1>
      </div>
      <div className="timeline">
        <WorkExpT />
      </div>
    </div>
  );
}

export default Work;
