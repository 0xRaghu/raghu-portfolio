import React, { Component } from "react";
import { Typography, Collapse, Icon } from "antd";

const { Panel } = Collapse;
const { Title } = Typography;

export default class certifications extends Component {
  render() {
    return (
      <div style={{ textAlign: "Center" }}>
        <br />
        <Title level={3} style={{ color: "black", textAlign: "center" }}>
          Certifications
        </Title>
        <div style={{ padding: "20px" }}>
          <Collapse defaultActiveKey={[]}>
            <Panel
              header="Blockchain Certification Training Course"
              key="1"
              extra={
                <a
                  href="https://intellipaat.com/blockchain-training-course-toronto/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon type="link" />
                </a>
              }
            >
              <div>
                <p>
                  from <b>Intellipaat</b>
                </p>
                <p>
                  course content includes Blockchain, Bitcoins, Ethereum and
                  Hyperledger over a period of 12 weeks
                  <br />
                  <b>Credential ID: </b>31679-90402-58916
                </p>
              </div>
            </Panel>
            <Panel
              header="Master Ethereum & Solidity Programming"
              key="2"
              extra={
                <a
                  href="https://www.udemy.com/certificate/UC-EIQF28B0/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon type="book" />
                </a>
              }
            >
              <div>
                <p>
                  from <b>Udemy</b>
                </p>
                <p>
                  course content includes Blockchain, Ethereum and building a
                  few Real World DApps using Solidity.
                </p>
                <a
                  href="https://www.udemy.com/certificate/UC-EIQF28B0/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </a>
              </div>
            </Panel>
            <Panel header="Space Doggos - Interactive Solidity Course" key="3">
              <div>
                <p>
                  from <b>Bit Degree</b>
                </p>
                <p>
                  Building an interactive game called Space Doggos with Ethereum
                  and Solidity. <br />
                  <b>Credential ID: </b>579951
                </p>
              </div>
            </Panel>
            <Panel
              header="IBM - Blockchain Foundation Developer Course"
              key="4"
              extra={
                <a
                  href="https://www.youracclaim.com/badges/e5e018cc-6953-41de-81b0-b3412e5542fb/linked_in_profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon type="book" />
                </a>
              }
            >
              <div>
                <p>
                  from <b>IBM</b>
                </p>
                <p>
                  Includes an overview of permissioned blockchain and
                  Hyperledger development
                </p>
                <a
                  href="https://www.youracclaim.com/badges/e5e018cc-6953-41de-81b0-b3412e5542fb/linked_in_profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </a>
              </div>
            </Panel>
            <Panel
              header="Blockchain Ambassador for Constellation"
              key="5"
              extra={
                <a
                  href="https://theblockchainu.com/certificate/686fcb8b-0da8-486a-8bf0-5bd961b6de9e"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon type="book" />
                </a>
              }
            >
              <div>
                <p>
                  from <b>Blockchain University</b>
                </p>
                <p>
                  Includes understanding of Constellation blockchain and its
                  use-cases in the IoT space. After clearing the online exam, I
                  am an ambssador for Constellation now
                </p>
                <a
                  href="https://theblockchainu.com/certificate/686fcb8b-0da8-486a-8bf0-5bd961b6de9e"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </a>
              </div>
            </Panel>
            <Panel
              header="Corda Certified Developer"
              key="6"
              extra={
                <a
                  href="https://www.youracclaim.com/badges/eaa5b390-800f-48cd-9cb2-745cf6cf7363/linked_in_profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon type="book" />
                </a>
              }
            >
              <div>
                <p>
                  from <b>R3 Corda</b>
                </p>
                <p>
                  Includes understanding of Corda blockchain and its development
                  and use-cases in the enterprise blockchain space.
                </p>
                <a
                  href="https://www.youracclaim.com/badges/eaa5b390-800f-48cd-9cb2-745cf6cf7363/linked_in_profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </a>
              </div>
            </Panel>
          </Collapse>
        </div>
      </div>
    );
  }
}
