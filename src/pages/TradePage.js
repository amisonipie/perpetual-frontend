// Will mostly have only UI component imports and placement in this file.

import TradingSection from "../components/TradingSection";
import OrderDetail from "../components/OrderDetail";
import TradingViewChart from "../components/charts/TradingViewChart";
import { Card, Col, Row } from "react-bootstrap";
import PlInput from "../components/plElement/Input";

import arrowUp from "../assets/images/arrow_drop_down_green.svg";

const positionData = {
  columnTitle: [
    { title: "Position", className: "" },
    { title: "Size", className: "" },
    { title: "Net Value", className: "" },
    { title: "Mark Price", className: "" },
    { title: "Entry Price", className: "" },
    { title: "Liquidation price", className: "" },
    { title: "Collateral Asset", className: "" },
    { title: "Action", className: "" },
  ],
  coulumnData: [
    {
      position: "BTC/USD",
      mode:"Long",
      size: "$3218.15",
      netValue: "$895.50",
      marketPrice: "15,385.20",
      entryPrice: "15,382.64",
      liquidationPrice: "$12,649.37",
      collateralAsset: "BTC"
    },
    {
      position: "BTC/USD",
      mode:"Short",
      size: "$3218.15",
      netValue: "$895.50",
      marketPrice: "15,385.20",
      entryPrice: "15,382.64",
      liquidationPrice: "$12,649.37",
      collateralAsset: "BTC"
    },
    {
      position: "BTC/USD",
      mode:"Short",
      size: "$3218.15",
      netValue: "$895.50",
      marketPrice: "15,385.20",
      entryPrice: "15,382.64",
      liquidationPrice: "$12,649.37",
      collateralAsset: "BTC"
    },
    {
      position: "BTC/USD",
      mode:"Long",
      size: "$3218.15",
      netValue: "$895.50",
      marketPrice: "15,385.20",
      entryPrice: "15,382.64",
      liquidationPrice: "$12,649.37",
      collateralAsset: "BTC"
    },
  ],
};


const TradePage = ({ cardData }) => {
  return (
    <>
      <Row>
        <Col md={9}>
          {cardData?.map((item, id) => (
            <Col key={id}>
              <Card className="shadowed-box">
                <Card.Body className="">
                  <div className="d-flex justify-content-between aligh-center">
                    <div className="trade-main-wrapper">
                      <PlInput
                        type={"noBoxSelect"}
                        label={"Select"}
                        placeholder={"0.0"}
                        optionValue={[
                          { label: "BTC/USDT", value: "BTC/USDT" },
                          { label: "ETH/USDT", value: "ETH/USDT" }
                        ]}
                      />
                    </div>
                    <div className="trade-card-value">
                      {item.value}
                    </div>
                    <div className="trade-card-content">
                      <p>{item.change}</p>
                      <span className="trade-change-value">{item.changeValue}<span className="ms-2"><img src={arrowUp} /></span><span className="ms-1">0.07%</span></span>
                    </div>
                    <div className="trade-card-content">
                      <p>{item.highTitle}</p>
                      <span>{item.highValue}</span>
                    </div>
                    <div className="trade-card-content">
                      <p>{item.lowTitle}</p>
                      <span>{item.lowValue}</span>
                    </div>
                    <div className="trade-card-content">
                      <p>{item.volumeBTC}</p>
                      <span>{item.volumeValueBTC}</span>
                    </div>
                    <div className="trade-card-content">
                      <p>{item.volumeUSD}</p>
                      <span>{item.volumeValueUSD}</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
          <TradingViewChart />
          <OrderDetail positionData={positionData}/>
        </Col>
        <Col md={3}>
          <TradingSection />
        </Col>
      </Row>
    </>
  );
};

export default TradePage;
