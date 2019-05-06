import React, { Component } from "react";
import { Card, Row, Col, Typography, Button } from "antd";
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
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "0px !important",
            marginRight: "0px !important"
          }}
        >
          <Col>
            <Card
              style={{ width: 250 }}
              actions={[
                <a
                  href="https://github.com/raghu-19/Ethereum-Pet-Shop"
                  target="_blank"
                  rel="noopener noreferrer"
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
              style={{ width: 250 }}
              actions={[
                <a
                  href="https://github.com/raghu-19/celebraton-client"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button type="primary" icon="github">
                    Github Link
                  </Button>
                </a>,
                <a
                  href="https://www.celebraton.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
