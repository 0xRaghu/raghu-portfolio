import "./App.css";
import { Button, Typography, Row, Col } from "antd";
import React, { Component } from "react";
import Technologies from "./technologies.js";
import Skills from "./skills.js";
import Certifications from "./certifications.js";
import RecentProjects from "./recentProjects.js";
import Timeline from "./timeline.js";
import ContactMe from "./contactMe.js";

import ProfilePic from "./raghu.jpg";
const { Title } = Typography;

class App extends Component {
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    return (
      <div>
        <div
          className="background-image App App-header"
          style={{ height: "100%" }}
        >
          <Row type="flex" align="middle">
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <br />
              <img
                src={ProfilePic}
                height="300px"
                style={{ borderRadius: "10%", boxShadow: "2px 2px 40px black" }}
                alt="Profile Pic"
              />
            </Col>
            <Col
              xs={24}
              sm={24}
              md={12}
              lg={12}
              xl={12}
              style={{ padding: "20px" }}
            >
              <Title style={{ color: "white" }}>Shri Raghu Raaman</Title>
              <Title level={4} style={{ color: "white" }}>
                Blockchain Trainer, Developer and Architect | Co-Founder & CEO
                at CelebratON | Web Developer | Hustler
              </Title>
              <div style={{ textAlign: "justify", fontSize: "15px" }}>
                I'm a Blockchain Trainer, Developer and an Architect. I am a
                self taught developer and spend my days working in many
                different areas of Blockchain and Web Development from building
                DApps, permissioned blockchain solutions, back-end programming,
                front-end engineering, decentralization to user experience and
                visual design. I also have worked as an 'Investment Banking
                Analyst' prior to starting my own company - CelebratON and my
                career as a Trainer.
                <br />
                <br />
                I'm extremely passionate about Blockchain and web development in
                all it's forms and love training people on what I know. Aside
                from these, I enjoy spending time with my wife and daughter,
                traveling, taking photos and watching movies.
              </div>
              <br />
              <Button type="primary" size="large">
                <a href="#contactMe">
                  <b>Contact Raghu</b>
                </a>
              </Button>
            </Col>
          </Row>
        </div>
        <div style={{ backgroundColor: "#f0f2f5" }}>
          <Technologies />
        </div>
        <Row align="middle" type="flex">
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <Certifications />
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <Skills />
          </Col>
        </Row>

        <div style={{ backgroundColor: "#f0f2f5" }}>
          <RecentProjects />
        </div>
        <Timeline />
        <div style={{ backgroundColor: "#f0f2f5" }} id="contactMe">
          <ContactMe />
        </div>
        {/* <Footer>something</Footer> */}
      </div>
    );
  }
}

export default App;
