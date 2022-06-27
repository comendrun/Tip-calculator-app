import React from "react";
import { parseInputValueAsInteger } from "../../helpers/number";

import "./Inputs.css";
import dollarIcon from "../../images/icon-dollar.svg";
import personIcon from "../../images/icon-person.svg";

export default function Inputs({
  billOnChange,
  billValue,

  updateTipPercentageHandler,
  tipPercentage,
  isCustomTipSelected,

  NoPValue,
  NoPOnChange,
  errorNoP,
}) {
  // with this function, when i call it on two of full length inputs, i assing a background-image with css on them and also assigng a couple od styles to that image
  function fullInputsBackground(icon) {
    let style = {
      backgroundImage: `url(${icon})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center left 10px",
      // backgroundColor: "black",
    };
    return style;
  }

  const getSelectedClass = (value, selectedTipPercentage, isCustom) =>
    isCustom === false && value === selectedTipPercentage ? "selected" : "";

  return (
    <div className="inputs">
      <div className="input-cons bill-con">
        <p className="headings">Bill</p>
        <input
          className="inputs--bill--input full-input number-input"
          placeholder="0"
          type="number"
          name="bill"
          style={fullInputsBackground(dollarIcon)}
          onChange={billOnChange}
          value={billValue}
          min="0"
        />
      </div>
      <div className="input-cons tip--percentage-con">
        <p className="headings">Select Tip %</p>
        <div className="percentages-con-grid">
          {/* tipPercentOnClick
customTipOnChange */}
          <button
            type="button"
            className={`percentage--input ${getSelectedClass(
              5,
              tipPercentage,
              isCustomTipSelected
            )}`}
            name="5-percent"
            onClick={(e) => updateTipPercentageHandler(5, false)}
            value={`${5}`}
          >
            %5
          </button>

          <button
            type="button"
            className={`percentage--input ${getSelectedClass(
              10,
              tipPercentage,
              isCustomTipSelected
            )}`}
            name="10-percent"
            onClick={(e) => updateTipPercentageHandler(10, false)}
            value={`${10}`}
          >
            %10
          </button>

          <button
            type="button"
            className={`percentage--input ${getSelectedClass(
              15,
              tipPercentage,
              isCustomTipSelected
            )}`}
            name="15-percent"
            onClick={(e) => updateTipPercentageHandler(15, false)}
            value={`${15}`}
          >
            %15
          </button>

          <button
            type="button"
            className={`percentage--input ${getSelectedClass(
              25,
              tipPercentage,
              isCustomTipSelected
            )}`}
            name="25-percent"
            onClick={(e) => updateTipPercentageHandler(25, false)}
            value={`${25}`}
          >
            %25
          </button>

          <button
            type="button"
            className={`percentage--input ${getSelectedClass(
              50,
              tipPercentage,
              isCustomTipSelected
            )}`}
            name="50-percent"
            onClick={(e) => updateTipPercentageHandler(50, false)}
            value={`${50}`}
          >
            %50
          </button>

          <input
            type="number"
            className="percentage--input custom-input number-input"
            placeholder="Custom"
            name="custom"
            onChange={(e) =>
              updateTipPercentageHandler(
                parseInputValueAsInteger(e.target.value),
                true
              )
            }
            value={isCustomTipSelected ? tipPercentage : 0}
            min="0"
            onFocus={(e) => console.log("F: ", e)}
            onBlur={(e) => console.log("B: ", e)}
          />
          {/* end of percentages-con-grid div ==> */}
        </div>
        {/* end of tip-percentage-con div ==> */}
      </div>
      <div className="input-cons number-of-people-con">
        <div className="nop-p-con">
          <p className="headings">Number of People</p>
          <p className={`headings hidden ${errorNoP ? "alert" : "hidden"}`}>
            Can't be zero
          </p>
        </div>
        <input
          className={`inputs--number-of-people--input full-input number-input ${
            errorNoP && "alert-input"
          }`}
          type="number"
          name="bill"
          style={fullInputsBackground(personIcon)}
          onChange={NoPOnChange}
          value={NoPValue}
          min="0"
        />
        {/* end of number-of-people-con div ==> */}
      </div>
      {/* end of inputs div ==> */}
    </div>
  );
}
