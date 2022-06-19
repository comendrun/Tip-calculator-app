import React from "react";
import "./Calculation.css";

export default function Calculation(props) {
  return (
    <div className="calculation-con ">
      <div className="tip-amount-con tip-containers">
        <div className="calculation-headings-con">
          <p className="headings">Tip Amount</p>
          <p className="sub-heading">/ person</p>
        </div>
        <p className="tip-amounts tip-amount small">${props.tipAmount}</p>
        {/* end of tip-amount-con div ==> */}
      </div>
      <div className="total-tip-con tip-containers ">
        <div className="calculation-headings-con">
          <p className="headings">Total</p>
          <p className="sub-heading">/ person</p>
        </div>

        <p className="tip-amounts total-tip bold">${props.totalAmount}</p>
        {/* end of total-tip-con div ==> */}
      </div>
      <button onClick={props.resetOnClick} className="reset-button">
        RESET
      </button>
      {/* end of calculation div ==> */}
    </div>
  );
}
