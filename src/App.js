import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeContainer from "./containers/HomeContainer";
import DashboardContainer from "./containers/DashboardContainer";
import SwapContainer from "./containers/SwapContainer";
import TradeContainer from "./containers/TradeContainer";
import NotFond from "./pages/NotFond";
import EarnContainer from "./containers/EarnContainer";
import LiquidityContainer from "./containers/LiquidityContainer";
import LiquidityDetailsContainer from "./containers/LiquidityDetailsContainer";

const AllRoutes = [
  {
    path: "/",
    Component: HomeContainer,
    isPrivate: false,
  },
  {
    path: "/dashboard",
    Component: DashboardContainer,
    isPrivate: true,
  },
  {
    path: "/trade",
    Component: TradeContainer,
    isPrivate: true,
  },
  {
    path: "/swap",
    Component: SwapContainer,
    isPrivate: true,
  },
  {
    path: "/earn",
    Component: EarnContainer,
    isPrivate: true,
  },
  {
    path: "/liquidity",
    Component: LiquidityContainer,
    isPrivate: true,
  },
  {
    path: "/liquidity/deatils",
    Component: LiquidityDetailsContainer,
    isPrivate: true,
  },
  {
    path: "*",
    Component: NotFond,
    isPrivate: false,
  },
];

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        {AllRoutes.map(({ Component, path, isPrivate }, i) => (
          <Route exact={true} path={path} key={i} element={<Component />} />
        ))}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
