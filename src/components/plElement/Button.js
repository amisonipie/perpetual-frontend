const { Button } = require("react-bootstrap");

const PlButton = ({ type, label, className, onClick, disabled = false, src }) => {
  switch (type) {
    case "percentageButton":
      return <Button className="percentage-btn">{label}</Button>;

    default:
      return (
        <Button className={`pl-btn ${className}`} disabled={disabled} onClick={onClick}>
          {src ? <img src={src}></img> : label}
        </Button>
      );
  }
};

export default PlButton;
