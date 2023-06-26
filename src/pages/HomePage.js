// Will mostly have only UI component imports and placement in this file.

import PlButton from "../components/plElement/Button";
import PlInput from "../components/plElement/Input";
import arrowSvg from "../assets/images/arrow-forward.svg";

const HomePage = () => {
  return (
    <>
      <h2>HomePage</h2>
      <PlButton label={"Regular"} />
      <br />
      <br />
      <PlButton label={"Tranparent"} className="transparent" />
      <br />
      <br />
      <PlButton src={arrowSvg} className="sqaure" />
      <br />
      <br />
      <PlButton label={"1"} className="sqaure" />
      <br />
      <br />
      <PlButton label={"0.349 ETH"} className="w-balance" />
      <br />
      <br />
      <PlButton label={"0x123...63abc"} className="w-address" />
      <br />
      <br />
      <PlButton type={"percentageButton"} label={"25%"} />
      <br />
      <br />
      <PlInput label={"Default"} placeholder={"0.0"} />
      <br />
      <br />
      <PlInput
        type={"select"}
        label={"Select"}
        placeholder={"0.0"}
        optionValue={[
          { label: "Martket Order", value: "marketOrder" },
          { label: "Limit", value: "limit" },
        ]}
      />
      <br />
      <br />
      <PlInput
        type={"noBoxSelect"}
        label={"Select"}
        placeholder={"0.0"}
        optionValue={[
          { label: "Martket Order", value: "marketOrder" },
          { label: "Limit", value: "limit" },
        ]}
      />
      <br />
      <br />
      <PlInput
        type={"withSelectTag"}
        label={"Select Tag"}
        placeholder={"0.0"}
        optionValue={[
          { label: "BTC", value: "btc" },
          { label: "ETH", value: "eth" },
        ]}
      />
      <br />
      <br />
      <PlInput
        type={"withSelectTag"}
        label={"Select Tag Disabled"}
        placeholder={"0.0"}
        disabled={true}
        optionValue={[
          { label: "BTC", value: "btc" },
          { label: "ETH", value: "eth" },
        ]}
      />
      <br />
      <br />

      <PlInput type={"withTag"} label={"Fixed Tab"} placeholder={"0.0"} disabled={true} tag={"BTC"} />
      <br />
      <br />
    </>
  );
};

export default HomePage;
