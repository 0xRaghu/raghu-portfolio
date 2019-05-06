import React, { Component } from "react";
import { List, Card, Avatar, Row, Col, Typography, Progress } from "antd";
import "./App.css";
import IndividualSkill from "./indSkill.js";
const { Meta } = Card;
const { Title } = Typography;

export default class contactMe extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <br />
        <Title level={4}>Contact Me</Title>
        <br />
        <Row
          type="flex"
          align="middle"
          gutter={16}
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "0px !important",
            marginRight: "0px !important"
          }}
        >
          <Col>
            <a
              href="https://www.linkedin.com/in/shriraghuraaman/"
              target="_blank"
            >
              <img
                src="https://lh3.googleusercontent.com/00APBMVQh3yraN704gKCeM63KzeQ-zHUi5wK6E9TjRQ26McyqYBt-zy__4i8GXDAfeys"
                width="75px"
                style={{ borderRadius: "10%" }}
              />
            </a>
          </Col>

          <Col>
            <a href="https://github.com/raghu-19" target="_blank">
              <img
                src="https://avatars0.githubusercontent.com/u/9919?s=280&v=4"
                width="75px"
                style={{ borderRadius: "10%" }}
              />
            </a>
          </Col>

          <Col>
            <a href="https://www.facebook.com/shriraghuraaman" target="_blank">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEU6VZ////81Up0yT5xgc61+jbsvTZyXo8hFXaOirM0nSJmlrs7O1OUkRpkfQ5doerLr7fTHzeE9WKHV2umHlcDy9Pnd4eyut9O1vtdZbat5ibmWoceGk7/M0eSrs9G/xtxMY6ZvgLVIYaWJ8OFBAAAC40lEQVR4nO3c63KqMBRAYU9iqaLg/d7W2vd/yE5nzt/ihjTsvTNrPQDDNxIDJDqZEBERERERERERERERERFZL4QYqydF7ZMcXKyadju97m/zzhZ7n8SqCY/T8Z+kXa19sv2LdbztRLqflu6EsXm8i3kOhbF9WffxeROG9tHT50xYbTd9fb6E7Vt/nydhqO9DgH6EcdZ7BPoSVpdhPjfCajUU6EQYhwN9COPncKALYdgeChe2socIv8LmnAJ0IIzXJKADYZMyCD0IE69R+8Iw+F7Gi7CVv67wKQzTVKB1YbMsXBhSbtdcCOtT6cLUudC8MD7SgbaFdepsb17YDHw140YYZn8ANC2M+78QWl57qvoMw8PuvHC3fljL70k3q7qu/a0Bt9LZ8HhpgvbJDioKgffWp28SvqRA7TMdmvDJ6egWKBV+Ob1EJ1LhyfB09yyZ0PFHKBMeG+3TTEgkPFXap5mQSGj5nuxpIuELQsshRGg/hAjthxCh/RAitB9ChPZDiNB+CBHarwxh6PiJci3ZWnptnv3SWRm4ev2920IgPN86jvDTfKsqrD4EiMR0V98qyceU1kF3iXgEofLy2wjCe/FX6Yful+kIwn3xwpXuOv8Iws/ihcr3NPmFa+UdU/mFS+XdKPmFZ+UtU/mFr8WPQ+3nx/zCi/K2t/xC7VcA2YUH7b2Z2YXqWxezCzfFf4bqmzOzC2/Ff9M8ihdqT4f5hdrDMLtQ+VXiCEL93x7mFiq/ShxBOC9+HL5pTxbZhVPtySK7UNuXXXhQH4a5hWvtZ6fswnf1ySL3GvBZ/yqdbGcdSf4O8q3rCLpL+P8LvxdFu02qjiNo455Vxn6arhAitB9ChPZDiNB+CBHaDyFC+yFEaD+ECO2HEKH9ECK0H0KE9kOI0H4IEdoPIUL7IURoP4QI7YcQof0QIrQfQoT2Q4jQfggR2g8hQvshRGg/hAjthxCh/RAitB9ChPZDiNB+CBH26BsaQkVVLImVewAAAABJRU5ErkJggg=="
                width="75px"
                style={{ borderRadius: "10%" }}
              />
            </a>
          </Col>
        </Row>
        <br />
        <p style={{ fontSize: "20px" }}>
          <b>Mobile Number: </b>
          <a href="tel:+917036063377">+917036063377</a>
        </p>
        <p style={{ fontSize: "20px" }}>
          <b>Mail: </b>
          <a href="mailto:contact@raghu.page">contact@raghu.page</a>
        </p>
        <p style={{ fontSize: "20px" }}>
          Indian National & Permanent Resident in Canada
        </p>
      </div>
    );
  }
}
