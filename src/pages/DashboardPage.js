// Will mostly have only UI component imports and placement in this file.

import { Card, Col, Row } from "react-bootstrap";
import arrowSvg from "../assets/images/arrow-forward.svg";
import PlButton from "../components/plElement/Button";

const DashboardPage = ({ cardData, tradingData }) => {
  return (
    <>
      <Row xs={1} md={3} className="cards-deatils g-5">
        {cardData.map((item, id) => (
          <Col key={id}>
            <Card className="shadowed-box">
              <Card.Body>
                <div>
                  <p>{item.title}</p>
                  <span>{item.value}</span>
                </div>
                {item.img}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="trading-section">
        <p className="title">Trading Pairs</p>
        <Row className="heading">
          {tradingData.columnTitle.map((item, i) => (
            <Col key={i} className={item.className}>
              <p>{item.title}</p>
            </Col>
          ))}
        </Row>
        {tradingData.coulumnData.map((item, i) => (
          <Row className="data shadowed-box" key={i}>
            <Col className="pl-4">
              <span className="bold">{item.pair}</span>
            </Col>
            <Col>
              <span>{item.lastPrice}</span>
            </Col>
            <Col>
              <span className={item.dayChange < 0 ? "loss" : "profit"}>{`${item.dayChange}%`}</span>
            </Col>
            <Col>
              <span>{item.dayHigh}</span>
            </Col>
            <Col>
              <span>{item.dayLow}</span>
            </Col>
            <Col>
              <span>{item.dayVol}</span>
            </Col>
            <Col>
              <span>{item.dayVolUsd}</span>
            </Col>
            <Col className="justify-content-end custom-flex">
              <PlButton src={arrowSvg} className="sqaure" />
            </Col>
          </Row>
        ))}
      </div>
    </>
  );
};

export default DashboardPage;
