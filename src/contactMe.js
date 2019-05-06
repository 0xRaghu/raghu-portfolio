import React, { Component } from "react";
import { Row, Col, Typography } from "antd";
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
              rel="noopener noreferrer"
            >
              <img
                src="https://lh3.googleusercontent.com/00APBMVQh3yraN704gKCeM63KzeQ-zHUi5wK6E9TjRQ26McyqYBt-zy__4i8GXDAfeys"
                width="50px"
                style={{ borderRadius: "10%" }}
                alt="Linkedin Profile"
              />
            </a>
          </Col>

          <Col>
            <a
              href="https://github.com/raghu-19"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://avatars0.githubusercontent.com/u/9919?s=280&v=4"
                width="50px"
                style={{ borderRadius: "10%" }}
                alt="Github"
              />
            </a>
          </Col>
          <Col>
            <a
              href="skype:live:shriraghuraman?call"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="data:image/png;base64,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"
                width="50px"
                style={{ borderRadius: "10%" }}
                alt="Skype"
              />
            </a>
          </Col>
          <Col>
            <a
              href="https://www.facebook.com/shriraghuraaman"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEU6VZ////81Up0yT5xgc61+jbsvTZyXo8hFXaOirM0nSJmlrs7O1OUkRpkfQ5doerLr7fTHzeE9WKHV2umHlcDy9Pnd4eyut9O1vtdZbat5ibmWoceGk7/M0eSrs9G/xtxMY6ZvgLVIYaWJ8OFBAAAC40lEQVR4nO3c63KqMBRAYU9iqaLg/d7W2vd/yE5nzt/ihjTsvTNrPQDDNxIDJDqZEBERERERERERERERERFZL4QYqydF7ZMcXKyadju97m/zzhZ7n8SqCY/T8Z+kXa19sv2LdbztRLqflu6EsXm8i3kOhbF9WffxeROG9tHT50xYbTd9fb6E7Vt/nydhqO9DgH6EcdZ7BPoSVpdhPjfCajUU6EQYhwN9COPncKALYdgeChe2socIv8LmnAJ0IIzXJKADYZMyCD0IE69R+8Iw+F7Gi7CVv67wKQzTVKB1YbMsXBhSbtdcCOtT6cLUudC8MD7SgbaFdepsb17YDHw140YYZn8ANC2M+78QWl57qvoMw8PuvHC3fljL70k3q7qu/a0Bt9LZ8HhpgvbJDioKgffWp28SvqRA7TMdmvDJ6egWKBV+Ob1EJ1LhyfB09yyZ0PFHKBMeG+3TTEgkPFXap5mQSGj5nuxpIuELQsshRGg/hAjthxCh/RAitB9ChPZDiNB+CBHarwxh6PiJci3ZWnptnv3SWRm4ev2920IgPN86jvDTfKsqrD4EiMR0V98qyceU1kF3iXgEofLy2wjCe/FX6Yful+kIwn3xwpXuOv8Iws/ihcr3NPmFa+UdU/mFS+XdKPmFZ+UtU/mFr8WPQ+3nx/zCi/K2t/xC7VcA2YUH7b2Z2YXqWxezCzfFf4bqmzOzC2/Ff9M8ihdqT4f5hdrDMLtQ+VXiCEL93x7mFiq/ShxBOC9+HL5pTxbZhVPtySK7UNuXXXhQH4a5hWvtZ6fswnf1ySL3GvBZ/yqdbGcdSf4O8q3rCLpL+P8LvxdFu02qjiNo455Vxn6arhAitB9ChPZDiNB+CBHaDyFC+yFEaD+ECO2HEKH9ECK0H0KE9kOI0H4IEdoPIUL7IURoP4QI7YcQof0QIrQfQoT2Q4jQfggR2g8hQvshRGg/hAjthxCh/RAitB9ChPZDiNB+CBH26BsaQkVVLImVewAAAABJRU5ErkJggg=="
                width="50px"
                style={{ borderRadius: "10%" }}
                alt="Facebook"
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
          <b>Skype: </b>
          <a href="skype:live:shriraghuraman?call">live:shriraghuraman</a>
        </p>
        <p style={{ fontSize: "20px" }}>
          Indian National & Permanent Resident in Canada
        </p>
      </div>
    );
  }
}
