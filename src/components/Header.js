import { Form, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import PlButton from "./plElement/Button";

const Header = () => {
  return (
    <div className="header container">
      <Navbar bg="dark" expand="lg" className={"header-main"}>
        <NavLink className={"header-logo"} to={"/"}>
          pLamp
        </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            <NavLink to={`/dashboard`}>Dashboard</NavLink>
            <NavLink to={`/trade`}>Trade</NavLink>
            <NavLink to={`/swap`}>Swap</NavLink>
            <NavLink to={`/earn`}>Earn</NavLink>
            <NavLink to={`/liquidity`}>Liquidity</NavLink>
            <NavLink to={`/auction`}>Auction</NavLink>
            <NavLink to={`/dao`}>DAO</NavLink>
            <NavLink to={`/analytics`}>Analytics</NavLink>
          </Nav>
          <Form className="d-flex gap-4">
            <PlButton label={"0.349 ETH"} className="w-balance" />
            <PlButton label={"0x123...63abc"} className="w-address" />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
