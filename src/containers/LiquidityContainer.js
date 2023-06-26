// all the business logic will go here in container
// the page will be passed with all the props needed inside

import LiquidityPage from "../pages/LiquidityPage";

const cardData = [
  {
    title: "LAMP/ETH",
    value: "1 LAMP = 500 ETH",
    earnTitle: "Earn",
    earnValue: "100 LAMP",
    aprTitle: "APR",
    aprValue: "210.54%",
    totalDeposited: "Total Deposited",
    totalDepositedValue: "$28,018.42",
    volume: "24h Volume",
    volumeValue: "$23,846.57"
  },
];

const liquidityData = {
  columnTitle: [
    { title: "Token", className: "" },
    { title: "Price", className: "" },
    { title: "Amount", className: "" },
    { title: "Value", className: "" },
    { title: "Weight/Target", className: "" },
    { title: "Utilization", className: "" }
  ],
  coulumnData: [
    {
      token: "BTC",
      price: "$28,345.63",
      amount: "100.548",
      value: "$2,850,096.405",
      weight: "20.45",
      target: "21.75",
      utilization: "16.82",
    },
    {
      token: "ETH",
      price: "$1,876.49",
      amount: "5160.459",
      value: "$9,683,549.708",
      weight: "16.19",
      target: "17.66",
      utilization: "9.73",
    },
    {
      token: "USDT",
      price: "$1.007",
      amount: "9,124,683.12",
      value: "$9,188,555.751",
      weight: "42.88",
      target: "39.37",
      utilization: "15.76",
    },
    {
      token: "ETH",
      price: "$1,876.49",
      amount: "5160.459",
      value: "$9,683,549.708",
      weight: "16.19",
      target: "17.66",
      utilization: "9.73",
    },
  ],
};

const LiquidityContainer = () => {
  return (
    <div className="container">
      <LiquidityPage cardData={cardData} liquidityData={liquidityData} />
    </div>
  );
};

export default LiquidityContainer;
