// all the business logic will go here in container
// the page will be passed with all the props needed inside

import SwapPage from "../pages/SwapPage";

const swapCardTabs = [
  { title: "MARKET", value: "market" },
  { title: "LIMIT", value: "limit" },
];

const SwapContainer = () => {
  return (
    <div className="swap container">
      <SwapPage swapCardTabs={swapCardTabs} />
    </div>
  );
};

export default SwapContainer;
