import logo from "./logo.svg";
import "./App.css";
import { Button, Typography, Layout, Menu, Icon, Affix } from "antd";
import React, { Component } from "react";
import Technologies from "./technologies.js";
import Skills from "./skills.js";
import RecentProjects from "./recentProjects.js";
import ContactMe from "./contactMe.js";

import ProfilePic from "./raghu.jpg";
const { Title } = Typography;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Header, Content, Footer, Sider } = Layout;

class App extends Component {
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    return (
      <div>
        <div
          className="background-image App App-header"
          style={{ height: "100%" }}
        >
          <img
            src={ProfilePic}
            height="300px"
            style={{ borderRadius: "10%", boxShadow: "2px 2px 40px black" }}
          />
          <br />
          <Title style={{ color: "white" }}>Shri Raghu Raaman</Title>
          <Title level={4} style={{ color: "white" }}>
            Blockchain Trainer, Developer and Architect | Co-Founder & CEO at
            CelebratON | Web Developer | Hustler
          </Title>

          <Affix offsetTop="0">
            <Button>something</Button>
          </Affix>
        </div>
        <div style={{ backgroundColor: "#f0f2f5" }}>
          <Technologies />
        </div>

        <Skills />

        <div style={{ backgroundColor: "#f0f2f5" }}>
          <RecentProjects />
        </div>
        <ContactMe />
        {/* <Footer>something</Footer> */}
      </div>
    );
  }
}

export default App;
