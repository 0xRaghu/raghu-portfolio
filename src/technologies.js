import React from "react";
import { Row, Col, Typography } from "antd";
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
        <Col xs={6} sm={6} md={3} lg={2} xl={2}>
          <img
            src={blockchain}
            width="50px"
            style={{ borderRadius: "10%" }}
            alt="Blockchain"
          />
          <br />
          <p style={{fontSize:"15px"}}>Blockchain</p>
        </Col>
        <Col xs={6} sm={6} md={3} lg={2} xl={2}>
          <img
            src={ethereum}
            width="50px"
            style={{ borderRadius: "10%" }}
            alt="ethereum"
          />
          <br />
          <p style={{fontSize:"15px"}}>Ethereum</p>
        </Col>
        <Col xs={6} sm={6} md={3} lg={2} xl={2}>
          <img
            src={hyperledger}
            width="50px"
            style={{ borderRadius: "10%" }}
            alt="hyperledger"
          />
          <br />
          <p style={{fontSize:"15px"}}>Hyper Ledger</p>
        </Col>
        <Col xs={6} sm={6} md={3} lg={2} xl={2}>
          <img
            src={react}
            width="50px"
            style={{ borderRadius: "10%" }}
            alt="react"
          />
          <br />
          <p style={{fontSize:"15px"}}>React JS</p>
        </Col>
        <Col xs={6} sm={6} md={3} lg={2} xl={2}>
          <img
            src={next}
            width="50px"
            style={{ borderRadius: "10%" }}
            alt="next"
          />
          <br />
          <p style={{fontSize:"15px"}}>Next JS</p>
        </Col>
        <Col xs={6} sm={6} md={3} lg={2} xl={2}>
          <img
            src={meteor}
            width="50px"
            style={{ borderRadius: "10%" }}
            alt="meteor"
          />
          <br />
          <p style={{fontSize:"15px"}}>Meteor JS</p>
        </Col>
        <Col xs={6} sm={6} md={3} lg={2} xl={2}>
          <img
            src={nodejs}
            width="50px"
            style={{ borderRadius: "10%" }}
            alt="nodejs"
          />
          <br />
          <p style={{fontSize:"15px"}}>Node JS</p>
        </Col>
        <Col xs={6} sm={6} md={3} lg={2} xl={2}>
          <img
            src={ruby}
            width="50px"
            style={{ borderRadius: "10%" }}
            alt="ruby"
          />
          <br />
          <p style={{fontSize:"15px"}}>Ruby on Rails</p>
        </Col>
        <Col xs={6} sm={6} md={3} lg={2} xl={2}>
          <img
            src={mongodb}
            width="50px"
            style={{ borderRadius: "10%" }}
            alt="mongodb"
          />
          <br />
          <p style={{fontSize:"15px"}}>Mongo DB</p>
        </Col>
        <Col xs={6} sm={6} md={3} lg={2} xl={2}>
          <img
            src={bootstrap}
            width="50px"
            style={{ borderRadius: "10%" }}
            alt="bootstrap"
          />
          <br />
          <p style={{fontSize:"15px"}}>Bootstrap</p>
        </Col>
        <Col xs={6} sm={6} md={3} lg={2} xl={2}>
          <img
            src={antdesign}
            width="50px"
            style={{ borderRadius: "10%" }}
            alt="ant design"
          />
          <br />
          <p style={{fontSize:"15px"}}>Ant Design</p>
        </Col>
        <Col xs={6} sm={6} md={3} lg={2} xl={2}>
          <img
            src={wordpress}
            width="50px"
            style={{ borderRadius: "10%" }}
            alt="wordpress"
          />
          <br />
          <p style={{fontSize:"15px"}}>Wordpress</p>
        </Col>
        
      </Row>
    </div>
  );
}
