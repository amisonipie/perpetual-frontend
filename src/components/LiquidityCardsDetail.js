import { Tab, Tabs } from "react-bootstrap";
import PlButton from "./plElement/Button";
import PlInput from "./plElement/Input";
import SwapIcon from "../assets/images/swap-icon.svg";
import SwapLeftRightIcon from "../assets/images/swap-leftright-icon.svg";

const LiquidityCardsDetail = () => {
  return (
    <>
      <div className="shadowed-box bordered card-main-content">
        <div className='card-title mb-3'>
          <h3>DEPOSIT</h3>
        </div>
        <div className="mt-4">
          <PlInput type={"withTag"} label={"From"} placeholder={"0.0"} disabled={true} tag={"ETH"} />
          <div className="d-flex justify-content-between align-items-center mt-2">
            <span className="balance">Balance : 0.345 ETH</span>
            <div className="d-flex gap-2">
              <PlButton type={"percentageButton"} label={"25%"} />
              <PlButton type={"percentageButton"} label={"50%"} />
              <PlButton type={"percentageButton"} label={"75%"} />
              <PlButton type={"percentageButton"} label={"100%"} />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <PlInput type={"withTag"} label={"To"} placeholder={"0.0"} disabled={true} tag={"LAMP/ETH"} />
        </div>

        <div className="mt-4">
          <p className="d-flex justify-content-between align-items-center mb-1">
            Est. Allocated LAMP <span className="fw-600">XX</span>
          </p>
          <p className="d-flex justify-content-between align-items-center mb-1">
            Est. Allocated ETH <span className="fw-600">XX</span>
          </p>
          <p className="d-flex justify-content-between align-items-center mb-1">
            Minimum Received <span className="fw-600">XX LAMP/ETH</span>
          </p>
          <p className="d-flex justify-content-between align-items-center mb-1">
            Est. Daily Income <span className="fw-600">XX LAMP</span>
          </p>
          <p className="d-flex justify-content-between align-items-center mb-1">
            Price Impact <span className="fw-600">XX%</span>
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

        <div className="mt-5 mb-4">
          <PlButton label={"DEPOSIT"} />
        </div>
      </div>

      <div className="shadowed-box bordered card-main-content">
        <div className='card-title mb-3'>
          <h3>WITHDRAW</h3>
        </div>
        <div className="mt-4">
          <PlInput type={"withTag"} label={"Amount"} placeholder={"0.0"} disabled={true} tag={"LAMP"} />
          <div className="d-flex justify-content-between align-items-center mt-2">
            <span className="balance">Balance : 945.51 LAMP/ETH</span>
            <div className="d-flex gap-2">
              <PlButton type={"percentageButton"} label={"25%"} />
              <PlButton type={"percentageButton"} label={"50%"} />
              <PlButton type={"percentageButton"} label={"75%"} />
              <PlButton type={"percentageButton"} label={"100%"} />
            </div>
          </div>
        </div>

        <div className="deposite-button mt-4">
          <PlButton label={"WITHDRAW"} />
        </div>

        <div className="deposite-button mt-4 mb-4">
          <PlButton label={"Remove Liquidity"} className="transparent" />
        </div>
      </div>


      <div className="shadowed-box bordered card-main-content">
        <div className='card-title mb-3'>
          <h3>CLAIM</h3>
        </div>
        <div className="mt-4">
          <PlInput type={"withTag"} label={"Amount"} placeholder={"0.0"} disabled={true} tag={"LAMP"} />
          <div className="d-flex justify-content-between align-items-center mt-2">
            <span className="balance">Unclaimable Rewards : 105.12 LAMP</span>
            <div className="d-flex gap-2">
              <PlButton type={"percentageButton"} label={"25%"} />
              <PlButton type={"percentageButton"} label={"50%"} />
              <PlButton type={"percentageButton"} label={"75%"} />
              <PlButton type={"percentageButton"} label={"100%"} />
            </div>
          </div>
        </div>

        <div className="claim-button mt-4 mb-4">
          <PlButton label={"Claim"}  />
        </div>
        </div>
    </>
  );
};

export default LiquidityCardsDetail;
