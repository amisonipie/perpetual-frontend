// Will mostly have only UI component imports and placement in this file.

import { Card, Col, Row } from "react-bootstrap";
import EarnCard from "../components/plElement/EarnCard";
import { ReactComponent as RotationIcon } from "../assets/images/rotation-icon.svg";
import LiquidityCardsDetail from "../components/LiquidityCardsDetail";

const LiquidityDetailsPage = ({cardData}) => {
  return (
    <>
    <Row className="d-flex justify-content-between align-items-center position-relative liquidity-details-wrapper mb-4">
      <div className="d-flex">
      <div className="liquidity-first-round"></div>
      <div className="liquidity-second-round"></div>
      <span className="liquidity-title ms-5">
        <h3>LAMP/ETH</h3>
      </span>
      <span className="ms-4 mt-2">
        <p className="liquidity-value liquidity-details-title">1 LAMP = 500 ETH<span className="ms-2"><RotationIcon /></span></p>
      </span>
      </div>
      <div className="liquidity-details-perdays">
        <p>Earn <span className="liquidity-value ">100 LAMP</span> per day</p>
      </div>
    </Row>
      <Row xs={1} md={4} className="cards-deatils liquidity-details-cards g-5 mt-4">
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
      <Row xs={1} md={3} className="g-5 mt-4">
        <LiquidityCardsDetail />
      </Row>
    </>
  );
};

export default LiquidityDetailsPage;
