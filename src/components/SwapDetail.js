import { Col, Row, Tab, Tabs } from "react-bootstrap";
import PlButton from "./plElement/Button";

import closeIcon from "../assets/images/close-icon.svg";

const actionOrderData = {
  columnTitle: [
    { title: "From", className: "" },
    { title: "To", className: "" },
    { title: "Trigger Price", className: "" },
    { title: "Mark Price", className: "" },
    { title: "Action", className: "" },
  ],
  coulumnData: [
    {
      from: "1",
      to: "0.0032",
      triggerPrice: "313",
      marketPrice: "313",
    },
    {
      from: "1",
      to: "0.0032",
      triggerPrice: "313",
      marketPrice: "313",
    },
    {
      from: "1",
      to: "0.0032",
      triggerPrice: "313",
      marketPrice: "313",
    },
    {
      from: "1",
      to: "0.0032",
      triggerPrice: "313",
      marketPrice: "313",
    },
    {
      from: "1",
      to: "0.0032",
      triggerPrice: "313",
      marketPrice: "313",
    },
    {
      from: "1",
      to: "0.0032",
      triggerPrice: "313",
      marketPrice: "313",
    },
  ],
};

const historyData = {
  columnTitle: [
    { title: "Action", className: "" },
    { title: "Condition", className: "" },
    { title: "Type", className: "" },
    { title: "Status", className: "" },
  ],
  coulumnData: [],
};

const SwapDetail = () => {
  return (
    <div className="shadowed-box mt-5">
      <Tabs defaultActiveKey="orders" id="uncontrolled-tab-example" className="mb-3 swap-details-tabs">
        <Tab eventKey="orders" title="Active Orders">
          <div className="trading-section">
            <Row className="heading swap-content-wrapper mt-4">
              {actionOrderData?.columnTitle?.map((item, i) => (
                <Col key={i} className={item?.className}>
                  <p>{item?.title}</p>
                </Col>
              ))}
            </Row>
            <Row className="swap-order-wrapper">
              {actionOrderData.coulumnData.map((item, i) => (
                <Row className="swap-data data" key={i}>
                  <Col className="ps-0">
                    <span>{item.from}</span>
                    <span className="fw-600 ms-2">USDT</span>
                  </Col>
                  <Col>
                    <span>{item.to}</span>
                    <span className="fw-600 ms-2">BNB</span>
                  </Col>
                  <Col>
                    <span>{`1 BNB < ${item.triggerPrice} USDT`}</span>
                  </Col>
                  <Col className="">
                    <span>{`1 BNB = ${item.marketPrice} USDT`}</span>
                  </Col>
                  <Col className="justify-content-start">
                    <PlButton src={closeIcon} className="action-button" />
                  </Col>
                </Row>
              ))}
            </Row>
          </div>
        </Tab>
        <Tab eventKey="history" title="History">
          <div className="trading-section">
            <Row className="heading swap-content-wrapper mt-4">
              {historyData?.columnTitle?.map((item, i) => (
                <Col key={i} className={item?.className}>
                  <p>{item?.title}</p>
                </Col>
              ))}
            </Row>
            <Row className="swap-order-wrapper">
              {historyData.coulumnData.map((item, i) => (
                <Row className="swap-data data" key={i}>
                  <Col className="ps-0">
                    <span>{item.from}</span>
                    <span className="bold ms-2">USDT</span>
                  </Col>
                  <Col>
                    <span>{item.to}</span>
                    <span className="bold ms-2">BNB</span>
                  </Col>
                  <Col>
                    <span>{`1 BNB < ${item.triggerPrice} USDT`}</span>
                  </Col>
                  <Col className="">
                    <span>{`1 BNB = ${item.marketPrice} USDT`}</span>
                  </Col>
                  <Col className="justify-content-start">
                    <PlButton src={closeIcon} className="action-button" />
                  </Col>
                </Row>
              ))}
            </Row>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default SwapDetail;
