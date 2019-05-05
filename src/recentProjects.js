import React, { Component } from "react";
import {
  List,
  Card,
  Avatar,
  Row,
  Col,
  Typography,
  Progress,
  Icon,
  Button
} from "antd";
import IndividualSkill from "./indSkill.js";
const { Meta } = Card;
const { Title } = Typography;

export default class recentProjects extends Component {
  render() {
    return (
      <div style={{ textAlign: "Center" }}>
        <br />
        <Title level={4}>Recent Projects</Title>
        <br />
        <Row
          align="middle"
          gutter={16}
          type="flex"
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <Col>
            <Card
              style={{ width: 300 }}
              actions={[
                <a
                  href="https://github.com/raghu-19/Ethereum-Pet-Shop"
                  target="_blank"
                >
                  <Button type="primary" icon="github">
                    Github Link
                  </Button>
                </a>,
                <Button
                  style={{ backgroundColor: "red", color: "white" }}
                  icon="link"
                >
                  {/* //to-do */}
                  Website
                </Button>
              ]}
            >
              <Meta
                title="Petshop with Ethereum"
                description="Adoption of pets on a DApp built using Ethereum and Solidity platform and Truffle"
              />
            </Card>
          </Col>
          <Col>
            <Card
              style={{ width: 300 }}
              actions={[
                <a
                  href="https://github.com/raghu-19/celebraton-client"
                  target="_blank"
                >
                  <Button type="primary" icon="github">
                    Github Link
                  </Button>
                </a>,
                <a href="https://www.celebraton.in" target="_blank">
                  <Button
                    style={{ backgroundColor: "red", color: "white" }}
                    icon="link"
                  >
                    {/* //to-do */}
                    Website
                  </Button>
                </a>
              ]}
            >
              <Meta
                title="CelebratON with Next JS (React)"
                description="An online event essentials aggregator built using React JS and live in the market"
              />
            </Card>
          </Col>
        </Row>
        <br />
      </div>
    );
  }
}
