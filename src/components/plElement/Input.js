import Select, { components } from "react-select";
import DropdownArrow from "../../assets/images/arrow-dropdown.svg";
import DropdownArrowBold from "../../assets/images/arrow-dropdown-bold.svg";
import DropdownArrowBlack from "../../assets/images/arrow-dropdown-black.svg";

const customStyles = {
  control: (base) => ({
    ...base,
    height: 24,
    minHeight: 24,
  }),
};

const PlInput = ({ type, label, isInput = true, placeholder, tag, optionValue, disabled, onChange, className }) => {
  switch (type) {
    case "withTag":
      return (
        <>
          <div className={`tag-select ${isInput && "input-wrapper"}`}>
            {label && <label>{label}</label>}
            {isInput && <input placeholder={placeholder} onChange={onChange} />}
            <span className="fixed-tag">{tag}</span>
          </div>
        </>
      );

    case "withSelectTag":
      return (
        <>
          <div className={`tag-select ${isInput && "input-wrapper"}`}>
            {label && <label>{label}</label>}
            {isInput && <input placeholder={placeholder} onChange={onChange} />}
            <Select
              styles={customStyles}
              value={optionValue[0]}
              onChange={() => {}}
              options={optionValue}
              isClearable={false}
              hideSelectedOptions
              isDisabled={disabled}
              classNamePrefix="select select-custom"
              className={`${disabled && "disabled"}`}
              components={{
                IndicatorSeparator: null,
                DropdownIndicator: (props) => (
                  <components.DropdownIndicator {...props}>
                    <img src={DropdownArrowBlack} alt="icon" className="icon" />
                  </components.DropdownIndicator>
                ),
              }}
            />
          </div>
        </>
      );

    case "select":
      return (
        <div className="input-wrapper">
          <label>{label}</label>
          <Select
            value={optionValue[0]}
            onChange={() => {}}
            options={optionValue}
            isClearable={false}
            hideSelectedOptions
            isDisabled={disabled}
            classNamePrefix="select select-custom"
            components={{
              IndicatorSeparator: null,
              DropdownIndicator: (props) => (
                <components.DropdownIndicator {...props}>
                  <img src={DropdownArrow} alt="icon" className="icon" />
                </components.DropdownIndicator>
              ),
            }}
          />
        </div>
      );

    case "noBoxSelect":
      return (
        <div className="w-fit-content">
          <Select
            value={optionValue[0]}
            onChange={() => {}}
            options={optionValue}
            isClearable={false}
            hideSelectedOptions
            isDisabled={disabled}
            classNamePrefix="select no-box select-custom"
            components={{
              IndicatorSeparator: null,
              DropdownIndicator: (props) => (
                <components.DropdownIndicator {...props}>
                  <img src={DropdownArrowBold} alt="icon" className="icon" />
                </components.DropdownIndicator>
              ),
            }}
          />
        </div>
      );

    default:
      return (
        <div className={`input-wrapper ${className}`}>
          <label>{label}</label>
          <input placeholder={placeholder} onChange={onChange} />
        </div>
      );
  }
};

export default PlInput;
