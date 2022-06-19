import React from "react";
import "./Inputs.css";
import dollarIcon from "../../images/icon-dollar.svg";
import personIcon from "../../images/icon-person.svg";

export default function Inputs(props) {
  function fullInputsBackground(icon) {
    let style = {
      backgroundImage: `url(${icon})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center left 10px",
      // backgroundColor: "black",
    };
    return style;
  }

  function buttonSelected(value) {
    if (props.tipPercentSelected === value) {
      return "selected";
    }
  }

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
          onChange={props.billOnChange}
          value={props.billValue}
          min="0"
        />
        {/* <img src={dollarIcon} alt="" /> */}
        {/* end of bill-con div ==> */}
      </div>
      <div className="input-cons tip--percentage-con">
        <p className="headings">Select Tip %</p>
        <div className="percentages-con-grid">
          {/* tipPercentOnClick
customTipOnChange */}
          <button
            type="button"
            className={`percentage--input ${buttonSelected(5)}`}
            name="5-percent"
            onClick={props.tipPercentOnClick}
            value={`${5}`}
          >
            %5
          </button>

          <button
            type="button"
            className={`percentage--input ${buttonSelected(10)}`}
            name="10-percent"
            onClick={props.tipPercentOnClick}
            value={`${10}`}
          >
            %10
          </button>

          <button
            type="button"
            className={`percentage--input ${buttonSelected(15)}`}
            name="15-percent"
            onClick={props.tipPercentOnClick}
            value={`${15}`}
          >
            %15
          </button>

          <button
            type="button"
            className={`percentage--input ${buttonSelected(25)}`}
            name="25-percent"
            onClick={props.tipPercentOnClick}
            value={`${25}`}
          >
            %25
          </button>

          <button
            type="button"
            className={`percentage--input ${buttonSelected(50)}`}
            name="50-percent"
            onClick={props.tipPercentOnClick}
            value={`${50}`}
          >
            %50
          </button>

          <input
            type="number"
            className="percentage--input custom-input number-input"
            placeholder="Custom"
            name="custom"
            onChange={props.customTipOnChange}
            value={props.customTipPercentValue}
          />
          {/* end of percentages-con-grid div ==> */}
        </div>
        {/* end of tip-percentage-con div ==> */}
      </div>
      <div className="input-cons number-of-people-con">
        <div className="nop-p-con">
          <p className="headings">Number of People</p>
          <p className={`headings hidden ${props.error ? "alert" : "hidden"}`}>
            Can't be zero
          </p>
        </div>
        <input
          className={`inputs--number-of-people--input full-input number-input ${
            props.error && "alert-input"
          }`}
          placeholder="1"
          type="number"
          name="bill"
          style={fullInputsBackground(personIcon)}
          onChange={props.NoPOnChange}
          value={props.NoPValue}
          min="0"
        />
        {/* end of number-of-people-con div ==> */}
      </div>
      {/* end of inputs div ==> */}
    </div>
  );
}
