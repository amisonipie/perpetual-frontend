// all the business logic will go here in container
// the page will be passed with all the props needed inside

import DashboardPage from "../pages/DashboardPage";
import { ReactComponent as TotalValue } from "../assets/images/totallocked.svg";
import { ReactComponent as TotalTrade } from "../assets/images/totaltrading.svg";
import { ReactComponent as AccruedFee } from "../assets/images/accruedfee.svg";

const cardData = [
  { title: "Total Value Locked", value: "$25,658.764", img: <TotalValue /> },
  { title: "Total Trading Volume", value: "$3,659,124,374", img: <TotalTrade /> },
  { title: "Accrued Fees", value: "$2,934,126", img: <AccruedFee /> },
];

const tradingData = {
  columnTitle: [
    { title: "Pair", className: "" },
    { title: "Last Price", className: "" },
    { title: "24h Change", className: "" },
    { title: "24h High", className: "" },
    { title: "24h Low", className: "" },
    { title: "24h Volume", className: "" },
    { title: "24h Volume (USD)", className: "custom-flex1" },
    { title: "", className: "custom-flex" },
  ],
  coulumnData: [
    {
      pair: "BTC/USD",
      lastPrice: "$28,345.63",
      dayChange: -2.0,
      dayHigh: "$29,172.79",
      dayLow: "$28,018.42",
      dayVol: "2831.23",
      dayVolUsd: "$76,653.948",
    },
    {
      pair: "ETH/USD",
      lastPrice: "$28,345.63",
      dayChange: +4.79,
      dayHigh: "$29,172.79",
      dayLow: "$28,018.42",
      dayVol: "2831.23",
      dayVolUsd: "$76,653.948",
    },
    {
      pair: "BTC/USD",
      lastPrice: "$28,345.63",
      dayChange: -2.0,
      dayHigh: "$29,172.79",
      dayLow: "$28,018.42",
      dayVol: "2831.23",
      dayVolUsd: "$76,653.948",
    },
    {
      pair: "ETH/USD",
      lastPrice: "$28,345.63",
      dayChange: +4.79,
      dayHigh: "$29,172.79",
      dayLow: "$28,018.42",
      dayVol: "2831.23",
      dayVolUsd: "$76,653.948",
    },
    {
      pair: "BTC/USD",
      lastPrice: "$28,345.63",
      dayChange: -2.0,
      dayHigh: "$29,172.79",
      dayLow: "$28,018.42",
      dayVol: "2831.23",
      dayVolUsd: "$76,653.948",
    },
    {
      pair: "ETH/USD",
      lastPrice: "$28,345.63",
      dayChange: +4.79,
      dayHigh: "$29,172.79",
      dayLow: "$28,018.42",
      dayVol: "2831.23",
      dayVolUsd: "$76,653.948",
    },
  ],
};

const DashboardContainer = () => {
  return (
    <div className="container">
      <DashboardPage cardData={cardData} tradingData={tradingData} />
    </div>
  );
};

export default DashboardContainer;
