import { Col, Row, Tab, Tabs } from "react-bootstrap";
import PlButton from "./plElement/Button";

import closeIcon from "../assets/images/close-icon.svg";
import DownArrowIcon from "../assets/images/down-arrow-button.svg";
import UpArrowIcon from "../assets/images/up-arrow-button.svg";

const OrderDetail = ({positionData}) => {
  return (
    <div className="shadowed-box order-details-wrappper">
      <Tabs defaultActiveKey="positions" id="uncontrolled-tab-example" className="mb-3 trade-details-tabs">
        <Tab eventKey="positions" title="Positions">
        <div className="trading-section">
            <Row className="heading swap-content-wrapper mt-4">
              {positionData?.columnTitle?.map((item, i) => (
                <Col key={i} className={item?.className}>
                  <p>{item?.title}</p>
                </Col>
              ))}
            </Row>
            <Row className="swap-order-wrapper">
              {positionData.coulumnData.map((item, i) => (
                <Row className="swap-data data" key={i}>
                  <Col className="ps-0">
                    <span>{item.position}</span>
                    {/* <span className="fw-600 ms-2">USDT</span> */}
                  </Col>
                  <Col>
                    <span>{item.size}</span>
                    {/* <span className="fw-600 ms-2">BNB</span> */}
                  </Col>
                  <Col>
                    <span>{item.netValue}</span>
                  </Col>
                  <Col>
                    <span>{item.marketPrice}</span>
                  </Col>
                  <Col>
                    <span>{item.entryPrice}</span>
                  </Col>
                  <Col>
                    <span>{item.liquidationPrice}</span>
                  </Col>
                  <Col>
                    <span>{item.collateralAsset}</span>
                  </Col>
                  <Col className="">
                    <PlButton src={DownArrowIcon} className="action-button" />
                    <PlButton src={UpArrowIcon} className="action-button" />
                    <PlButton src={closeIcon} className="action-button" />
                  </Col>
                </Row>
              ))}
            </Row>
          </div>

        </Tab>
        <Tab eventKey="orders" title="Orders"></Tab>
        <Tab eventKey="history" title="History"></Tab>
        </Tabs>
    </div>
  );
};

export default OrderDetail;
