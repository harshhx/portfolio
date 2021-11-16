import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

function Education_T() {
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
    <Timeline position="alternate" style={{marginBottom:"0px", paddingLeft:"40px", paddingRight:"40px", paddingBottom:"50px"}}>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary" style={alt_text_style}>
          Bachelor of Technology (B.Tech) in Information Technology (2019-2023)
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot style={dot_style} />
          <TimelineConnector style={connector_style} />
        </TimelineSeparator>
        <TimelineContent style={text_style}>
          Maharaja Agrasen Institute of Technology
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary" style={alt_text_style}>
        Intermediate (2017-2019)
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot style={dot_style} />
          {/* <TimelineConnector style={connector_style} /> */}
        </TimelineSeparator>
        <TimelineContent style={text_style}>
          Modern Vidya Niketan
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export default Education_T;
