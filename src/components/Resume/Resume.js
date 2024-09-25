import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import { AiOutlineDownload } from "react-icons/ai";
import ReactGA from "react-ga";

function Resume() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
       
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="B.tech"
              date="2021-2025"
              content={[
                "DKTE Society's Textile & Engineering Institute - 2021-2025 | CGPA: 7.29",
              ]}
            />
            <Resumecontent
              title="HSC"
              date="2020 - 2021"
              content={[
                "J R Gunjal, Janata Vidyalay, Chandwad, Nashik | 2021 | 12th | Percentage: 73 / 100",
              ]}
            />
            <Resumecontent
              title="SSC"
              date="2018-2019"
              content={[
                "J R Gunjal, Janata Vidyalay, Nashik | 2019 | 10th | SSC | Percentage: 70.80 / 100",
              ]}
            />
          </Col>
                 <Col md={6} className="resume-right">

            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `I won the "BYTE BATTLE" competition at DKTE's Yashwantrao Chavan Polytechnic,`,
                ` demonstrating my expertise in solving complex problems with data structures and algorithms.`,
              ]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
