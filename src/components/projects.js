import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./projects.css";
import { display } from "@mui/system";
export default function Projects() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  var accordian_style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "0 auto",
    width: "50%",
    marginBottom: "20px",
    backgroundColor: "rgba(33,37,41)",
    color: "white",
  };
  var main_project = {
    fontSize: "25px",
  };
  return (
    <div className="main">
      <div className="projects">
        <h1 style={{ fontSize: "50px", color: "white", marginTop: "80px" }}>
          Projects
        </h1>
      </div>
      <div className="projects-container">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          style={accordian_style}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ fill: "white" }} />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              sx={{ width: "33%", flexShrink: 0 }}
              style={main_project}
            >
              Polling Application
            </Typography>
            <a
              exact
              href="https://polling-application-harshhx.herokuapp.com/"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              {" "}
              <Typography>
                https://polling-application-harshhx.herokuapp.com/
              </Typography>
            </a>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              This is a web application that allows users to create polls and
              and vote on them. It was made using django with extensive use of
              ORM's. Default django templates were used to make the frontend. It
              is hosted with herokuapp.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
          style={accordian_style}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ fill: "white" }} />}
            aria-controls="panel5bh-content"
            id="panel5bh-header"
          >
            <Typography
              sx={{ width: "33%", flexShrink: 0 }}
              style={main_project}
            >
              CRM Application
            </Typography>
            <a
              exact
              href="https://harshhx-crm.herokuapp.com/"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              {" "}
              <Typography>
              https://harshhx-crm.herokuapp.com/
              </Typography>
            </a>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              This is a web application that allows an organisation to create 
              agents and leads and then respective leads could be assigned to specific agents. 
              This apps comes with proper permissions such that agents and oranisations have different permissions. 
              It was made using django with extensive use of
              ORM's. Default django templates were used to make the frontend. It
              is hosted with herokuapp.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          style={accordian_style}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ fill: "white" }} />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
            style={{ color: "white" }}
          >
            <Typography
              sx={{ width: "33%", flexShrink: 0 }}
              style={main_project}
            >
              Personal Website
            </Typography>
            <a
              exact
              href="https://www.harshgupta.live/"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              {" "}
              <Typography>https://www.harshgupta.live/</Typography>
            </a>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              This is a website to showcase my profile. It is made on React.js
              and hosted with help of github pages hosting service.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
          style={accordian_style}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ fill: "white" }} />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
            style={{ color: "white" }}
          >
            <Typography
              sx={{ width: "33%", flexShrink: 0 }}
              style={main_project}
            >
              Work at GetWork.org
            </Typography>
            <a
              exact
              href="https://www.getwork.org/"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              {" "}
              <Typography>Software engineering intern - BackEnd</Typography>
            </a>
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              <l1>
                <Typography>
                  Made and maintained many api's with the help of
                  Django-rest-framework.
                </Typography>
              </l1>
              <l1>
                <Typography>
                  Worked on a real time chat feature, made with help of
                  fireStore and React.js
                </Typography>
              </l1>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
          style={accordian_style}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ fill: "white" }} />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
            style={{ color: "white" }}
          >
            <Typography
              sx={{ width: "33%", flexShrink: 0 }}
              style={main_project}
            >
              Work at geeksforgeeks
            </Typography>
            <a
              exact
              href="https://auth.geeksforgeeks.org/user/hg070401/articles"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              {" "}
              <Typography>Technical Content Writer - intern</Typography>
            </a>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Wrote many articles on Data visualisation and python.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
          style={accordian_style}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ fill: "white" }} />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography
              sx={{ width: "33%", flexShrink: 0 }}
              style={main_project}
            >
              Personal data
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion> */}
      </div>
    </div>
  );
}
