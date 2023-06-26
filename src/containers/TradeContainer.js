// all the business logic will go here in container
// the page will be passed with all the props needed inside

import TradePage from "../pages/TradePage";

const cardData = [
  {
    value: "$28,659.39",
    change: "24h Change",
    changeValue: "+$170.46",
    highTitle: "24h High",
    highValue: "$28,813.36",
    lowTitle: "24h Low",
    lowValue: "$27,946.51",
    totalDeposited: "Total Deposited",
    totalDepositedValue: "$28,018.42",
    volumeBTC: "24h Volume (BTC)",
    volumeValueBTC: "2864.35",
    volumeUSD: "24h Volume (USD)",
    volumeValueUSD: "$80,792.45"
  },
];

const TradeContainer = () => {
  return (
    <div className="trade container">
      <TradePage cardData={cardData}/>
    </div>
  );
};

export default TradeContainer;
