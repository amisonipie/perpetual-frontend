// Will mostly have only UI component imports and placement in this file.

import { Col, Row } from "react-bootstrap";
import EarnCard from "../components/plElement/EarnCard";

const EarnPage = () => {
  return (
    <>
      <Row md={3}>
        {Array.apply(null, Array(5)).map((_, key) => (
          <Col key={key}>
            <EarnCard />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default EarnPage;
