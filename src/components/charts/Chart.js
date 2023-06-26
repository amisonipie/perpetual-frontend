import rotationIcon from "../../assets/images/rotation-icon.svg";
import downIcon from "../../assets/images/arrow_drop_down_red.svg";
import PlInput from "../plElement/Input";

const Chart = () => {
  return (
    <div className="shadowed-box">
      <div className="chart-wrapper">
        <div className="d-flex justify-content-between align-items-center">
          <div className="chart-title d-flex mt-1">
            <h2>USDT/BTC</h2>
            <span className="ms-2"><img src={rotationIcon} /></span>
          </div>
          <div>
            <PlInput
              type={"withSelectTag"}
              isInput={false}
              optionValue={[
                { label: "24H", value: "24H" },
                { label: "1W", value: "1W" },
                { label: "1M", value: "1M" },
                { label: "1Y", value: "1Y" },
                { label: "ALL", value: "ALL" }
              ]}
            />
          </div>
        </div>
        <div className="d-flex chart-content-price">
          <p>1 USDT = 0.0000357 BTC</p>
          <span className="ms-2 mt-1">-$0.000001
          </span>
          <span className="ms-2 mt-1">
            <img src={downIcon} />
          </span>
          <span className="ms-1 mt-1">
            0.30%
          </span>
        </div>
      </div>
    </div>
  );
};

export default Chart;
