// Will mostly have only UI component imports and placement in this file.

import { Col, Row } from "react-bootstrap";
import Chart from "../components/charts/Chart";
import SwapCard from "../components/SwapCard";
import SwapDetail from "../components/SwapDetail";

const SwapPage = ({ swapCardTabs }) => {
  return (
    <>
      <Row>
        <Col md={4}>
          <SwapCard />
        </Col>
        <Col md={8}>
          <Chart />
          <SwapDetail />
        </Col>
      </Row>
    </>
  );
};

export default SwapPage;
