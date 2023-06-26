// all the business logic will go here in container
// the page will be passed with all the props needed inside
import LiquidityDetailsPage from "../pages/LiquidityDetailsPage";

import { ReactComponent as TotalTrade } from "../assets/images/totaltrading.svg";
import { ReactComponent as TotalPercentag } from "../assets/images/totalPercentag.svg";
import { ReactComponent as TotalDolarIcon } from "../assets/images/totaldolarIcon.svg";

const cardData = [
  { title: "Total Deposited", value: "$28,018.42", img: <TotalDolarIcon /> },
  { title: "APR", value: "210.54%", img: <TotalPercentag /> },
  { title: "24h Volume", value: "$23,846.57", img: <TotalTrade /> },
  { title: "Your Deposit", value: "$0.0", img: <TotalDolarIcon /> }
];

const LiquidityDetailsContainer = () => {
  return (
    <div className="liquidity-details-main container">
      <LiquidityDetailsPage cardData={cardData} />
    </div>
  );
};

export default LiquidityDetailsContainer;
