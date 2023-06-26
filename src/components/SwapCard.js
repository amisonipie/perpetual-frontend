import { Tab, Tabs } from "react-bootstrap";
import PlButton from "./plElement/Button";
import PlInput from "./plElement/Input";
import SwapIcon from "../assets/images/swap-icon.svg";
import SwapLeftRightIcon from "../assets/images/swap-leftright-icon.svg";

const SwapCard = () => {
  return (
    <div className="shadowed-box bordered">
      <Tabs defaultActiveKey="market" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="market" title="MARKET">
          <div className="mt-4">
            <PlInput
              type={"withSelectTag"}
              label={"From"}
              placeholder={"0.0"}
              optionValue={[
                { label: "USDT", value: "usdt" },
                { label: "PL Token", value: "plToken" },
              ]}
            />
            <div className="d-flex justify-content-between align-items-center mt-2">
              <span className="balance">Balance : 945.51 USDT</span>
              <div className="d-flex gap-2">
                <PlButton type={"percentageButton"} label={"25%"} />
                <PlButton type={"percentageButton"} label={"50%"} />
                <PlButton type={"percentageButton"} label={"75%"} />
                <PlButton type={"percentageButton"} label={"100%"} />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center mt-3">
            <img src={SwapIcon} className="rotate-animation pointer-cursor" />
          </div>
          <div className="mt-3">
            <PlInput
              type={"withSelectTag"}
              label={"To"}
              placeholder={"0.0"}
              optionValue={[
                { label: "BTC", value: "btc" },
                { label: "ETH", value: "eth" },
              ]}
            />
          </div>

          <div className="mt-4">
            <p className="d-flex justify-content-between align-items-center mb-1">
              Price <span className="fw-600">1 USDT = 0.0000357 BTC</span>
            </p>
            <p className="d-flex justify-content-between align-items-center mb-1">
              Available Liquidity <span className="fw-600">100.548 BTC</span>
            </p>
            <p className="d-flex justify-content-between align-items-center mb-1">
              Swap Fee <span className="fw-600">-</span>
            </p>
            <p className="d-flex justify-content-between align-items-center mb-1">
              Minimum Received <span className="fw-600">-</span>
            </p>
            <p className="d-flex justify-content-between align-items-center mb-1">
              Slippage{" "}
              <span className="fw-600">
                <PlInput
                  type={"withSelectTag"}
                  isInput={false}
                  optionValue={[
                    { label: "0.3%", value: "0.3" },
                    { label: "0.5%", value: "0.5" },
                    { label: "0.7%", value: "0.7" },
                  ]}
                />
              </span>
            </p>
          </div>

          <div className="mt-5">
            <PlButton label={"Approve"} />
          </div>
        </Tab>
        <Tab eventKey="limit" title="LIMIT">
          <div className="mt-4">
            <PlInput
              type={"withSelectTag"}
              label={"From"}
              placeholder={"0.0"}
              optionValue={[
                { label: "USDT", value: "usdt" },
                { label: "PL Token", value: "plToken" },
              ]}
            />
            <div className="d-flex justify-content-between align-items-center mt-2">
              <span className="balance">Balance : 945.51 USDT</span>
              <div className="d-flex gap-2">
                <PlButton type={"percentageButton"} label={"25%"} />
                <PlButton type={"percentageButton"} label={"50%"} />
                <PlButton type={"percentageButton"} label={"75%"} />
                <PlButton type={"percentageButton"} label={"100%"} />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center mt-3">
            <img src={SwapIcon} className="rotate-animation pointer-cursor" />
          </div>
          <div className="mt-3">
            <PlInput
              type={"withSelectTag"}
              label={"To"}
              placeholder={"0.0"}
              optionValue={[
                { label: "BTC", value: "btc" },
                { label: "ETH", value: "eth" },
              ]}
            />
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <div className="mt-3">
              <PlInput className="limit-input-wrapper" placeholder={"1 USDT"} />
            </div>
            <div className="align-items-center mt-3 ms-4 me-4">
              <img src={SwapLeftRightIcon} className="rotate-animation pointer-cursor" />
            </div>
            <div className="mt-3">
              <PlInput placeholder={"0.0000357 BTC"} />
            </div>
          </div>

          <div className="d-flex justify-content-end align-items-center mt-2">
            <div className="d-flex gap-2">
              <PlButton type={"percentageButton"} label={"set to Market Price"} />
            </div>
          </div>

          <div className="mt-4">
            <p className="d-flex justify-content-between align-items-center mb-1">
              Price <span className="fw-600">1 USDT = 0.0000357 BTC</span>
            </p>
            <p className="d-flex justify-content-between align-items-center mb-1">
              Available Liquidity <span className="fw-600">100.548 BTC</span>
            </p>
            <p className="d-flex justify-content-between align-items-center mb-1">
              Swap Fee <span className="fw-600">-</span>
            </p>
            <p className="d-flex justify-content-between align-items-center mb-1">
              Minimum Received <span className="fw-600">-</span>
            </p>
          </div>

          <div className="mt-5">
            <PlButton label={"Approve"} />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default SwapCard;
