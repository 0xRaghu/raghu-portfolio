import React, { Component } from "react";
import { Row, Col, Progress } from "antd";

export default class indSkill extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={12}>
            <b>
              <p style={{ textAlign: "right", fontSize: "15px" }}>
                {this.props.title}
              </p>
            </b>
          </Col>
          <Col xs={8} sm={10} md={6} lg={4} xl={4}>
            <Progress
              percent={this.props.percent}
              // successPercent={90}
              // size="small"
              format={percent => `${percent / 10}/10`}
              status="active"
            />
          </Col>
          <Col xs={4} sm={2} md={18} lg={20} xl={20} />
        </Row>
      </div>
    );
  }
}
