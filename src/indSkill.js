import React, { Component } from "react";
import { Row, Col, Progress } from "antd";

export default class indSkill extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={8}>
            <b>
              <p style={{ textAlign: "right", fontSize: "15px" }}>
                {this.props.title}
              </p>
            </b>
          </Col>
          <Col xs={12} sm={14} md={10} lg={10} xl={10}>
            <Progress
              percent={this.props.percent}
              // successPercent={90}
              // size="small"
              format={percent => `${percent / 10}/10`}
              status="active"
            />
          </Col>
          <Col xs={4} sm={2} md={6} lg={6} xl={6} />
        </Row>
      </div>
    );
  }
}
