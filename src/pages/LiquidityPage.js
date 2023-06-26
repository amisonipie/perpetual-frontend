// Will mostly have only UI component imports and placement in this file.

import { Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { ReactComponent as RotationIcon } from "../assets/images/rotation-icon.svg";
import arrowSvg from "../assets/images/arrow-forward.svg";
import PlButton from "../components/plElement/Button";


const LiquidityPage = ({ cardData, liquidityData }) => {
  const navigate = useNavigate();
  return (
    <>
      <Row>
        <div className="liquidity-title mb-5">
          <h3>LAMP/ETH Liquidity Pool</h3>
        </div>
        {cardData?.map((item, id) => (
          <Col key={id}>
            <Card className="shadowed-box">
              <Card.Body className="liquidity-card-wrapper">
                <div className="d-flex justify-content-between aligh-center">
                  <div className="liquidity-card-content">
                    <h2>{item.title}</h2>
                    <h6>{item.value}<span className="ms-2"><RotationIcon /></span></h6>
                  </div>
                  <div className="liquidity-card-content">
                    <p>{item.earnTitle}</p>
                    <span><span className="liquidity-value">{item.earnValue}</span><span className="ms-2">per day</span></span>
                  </div>
                  <div className="liquidity-card-content">
                    <p>{item.aprTitle}</p>
                    <span>{item.aprValue}</span>
                  </div>
                  <div className="liquidity-card-content">
                    <p>{item.totalDeposited}</p>
                    <span>{item.totalDepositedValue}</span>
                  </div>
                  <div className="liquidity-card-content">
                    <p>{item.volume}</p>
                    <span>{item.volumeValue}</span>
                  </div>
                  <div className="liquidity-card-arrowIcon" onClick={() => navigate("/liquidity/deatils")}>
                    <PlButton src={arrowSvg} className="sqaure" />
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        <div className="trading-section">
          <p className="title">Token Distribution</p>
          <Row className="heading">
            {liquidityData?.columnTitle?.map((item, i) => (
              <Col key={i} className={item.className}>
                <p>{item.title}</p>
              </Col>
            ))}
          </Row>
          {liquidityData?.coulumnData?.map((item, i) => (
            <Row className="data shadowed-box" key={i}>
              <Col className="ps-1">
                <span className="bold">{item.token}</span>
              </Col>
              <Col>
                <span className="liquidity-value">{item.price}</span>
              </Col>
              <Col>
                <span>{item.amount}</span>
              </Col>
              <Col>
                <span>{item.value}</span>
              </Col>
              <Col>
                <span>{`${item.weight}% / ${item.target}%`}</span>
              </Col>
              <Col>
                <span>{`${item.utilization}%`}</span>
              </Col>
            </Row>
          ))}
        </div>
      </Row>
    </>
  );
};

export default LiquidityPage;
