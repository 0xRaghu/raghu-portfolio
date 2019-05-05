import React from "react";
import { List, Card, Avatar, Row, Col, Typography, Progress } from "antd";
import "./App.css";
import IndividualSkill from "./indSkill.js";
const { Meta } = Card;
const { Title } = Typography;

export default function technologies() {
  return (
    <div style={{ textAlign: "Center" }}>
      <br />
      <Title level={3} style={{ color: "black", textAlign: "center" }}>
        Skills
      </Title>
      <br />
      <IndividualSkill title="Blockchain: " percent={90} />
      <IndividualSkill title="Ethereum: " percent={90} />
      <IndividualSkill title="React JS: " percent={90} />
      <IndividualSkill title="Next JS: " percent={80} />
      <IndividualSkill title="Node JS: " percent={80} />
      <IndividualSkill title="Others: " percent={70} />
    </div>
  );
}
