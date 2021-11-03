import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

function WorkExpT() {
  const text_style = {
    fontSize: "40px",
    color: "white",
  };

  const alt_text_style = {
    fontSize: "20px",
    color: "white",
  };

  const dot_style = {
    backgroundColor: "rgba(33,37,41,1)",
    borderWidth: "8px",
  };

  const connector_style = {
    height: "200px",
    backgroundColor: "rgba(33,37,41,1)",
  };

  return (
    <Timeline position="alternate" style={{marginBottom:"0px"}}>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary" style={alt_text_style}>
          August 2021 - October 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot style={dot_style} />
          <TimelineConnector style={connector_style} />
        </TimelineSeparator>
        <TimelineContent style={text_style}>
          Software Engineering Intern Backend - GetWork.org
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary" style={alt_text_style}>
          February 2021 - March 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot style={dot_style} />
          <TimelineConnector style={connector_style} />
        </TimelineSeparator>
        <TimelineContent style={text_style}>
          Intern - GreenYatra
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary" style={alt_text_style}>
          December 2020 - March 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot style={dot_style} />
        </TimelineSeparator>
        <TimelineContent style={text_style}>
          Technical Content Writer - GeeksForGeeks
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export default WorkExpT;
