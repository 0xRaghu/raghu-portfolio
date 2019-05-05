import React from "react";
import { List, Card, Avatar, Row, Col, Typography } from "antd";
import blockchain from "./blockchain.jpg";
import ethereum from "./ethereum.png";
import hyperledger from "./hyperledger.png";
import react from "./react.jpg";
import next from "./next.png";
import nodejs from "./node.png";
import ruby from "./ruby.png";
import mongodb from "./mongodb.png";
import wordpress from "./wordpress.png";
import meteor from "./meteor.jpg";
import bootstrap from "./bootstrap.svg";
import antdesign from "./antdesign.svg";
import "./App.css";
const { Meta } = Card;
const { Title } = Typography;

export default function technologies() {
  return (
    <div style={{ textAlign: "Center" }}>
      <br />
      <Title level={3} style={{ color: "black", textAlign: "center" }}>
        Technologies I use
      </Title>
      <br />
      <Row
        align="middle"
        gutter={0}
        type="flex"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <Col xs={12} sm={12} md={8} lg={6} xl={4}>
          <img src={blockchain} width="100px" style={{ borderRadius: "10%" }} />
          <br />
          <Title level={4}>Blockchain</Title>
        </Col>
        <Col xs={12} sm={12} md={8} lg={6} xl={4}>
          <img src={ethereum} width="100px" style={{ borderRadius: "10%" }} />
          <br />
          <Title level={4}>Ethereum</Title>
        </Col>
        <Col xs={12} sm={12} md={8} lg={6} xl={4}>
          <img
            src={hyperledger}
            width="100px"
            style={{ borderRadius: "10%" }}
          />
          <br />
          <Title level={4}>Hyper Ledger</Title>
        </Col>
        <Col xs={12} sm={12} md={8} lg={6} xl={4}>
          <img src={react} width="100px" style={{ borderRadius: "10%" }} />
          <br />
          <Title level={4}>React JS</Title>
        </Col>
        <Col xs={12} sm={12} md={8} lg={6} xl={4}>
          <img src={next} width="100px" style={{ borderRadius: "10%" }} />
          <br />
          <Title level={4}>Next JS</Title>
        </Col>
        <Col xs={12} sm={12} md={8} lg={6} xl={4}>
          <img src={meteor} width="100px" style={{ borderRadius: "10%" }} />
          <br />
          <Title level={4}>Meteor JS</Title>
        </Col>
        <Col xs={12} sm={12} md={8} lg={6} xl={4}>
          <img src={nodejs} width="100px" style={{ borderRadius: "10%" }} />
          <br />
          <Title level={4}>Node JS</Title>
        </Col>
        <Col xs={12} sm={12} md={8} lg={6} xl={4}>
          <img src={ruby} width="100px" style={{ borderRadius: "10%" }} />
          <br />
          <Title level={4}>Ruby on Rails</Title>
        </Col>
        <Col xs={12} sm={12} md={8} lg={6} xl={4}>
          <img src={mongodb} width="100px" style={{ borderRadius: "10%" }} />
          <br />
          <Title level={4}>Mongo DB</Title>
        </Col>

        <Col xs={12} sm={12} md={8} lg={6} xl={4}>
          <img src={bootstrap} width="100px" style={{ borderRadius: "10%" }} />
          <br />
          <Title level={4}>Bootstrap</Title>
        </Col>
        <Col xs={12} sm={12} md={8} lg={6} xl={4}>
          <img src={antdesign} width="100px" style={{ borderRadius: "10%" }} />
          <br />
          <Title level={4}>Ant Design</Title>
        </Col>
        <Col xs={12} sm={12} md={8} lg={6} xl={4}>
          <img src={wordpress} width="100px" style={{ borderRadius: "10%" }} />
          <br />
          <Title level={4}>Wordpress</Title>
        </Col>
      </Row>
    </div>
  );
}
