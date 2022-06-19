import React, { useState, useEffect } from "react";
import Calculation from "./Calculation";
import Inputs from "./Inputs";

import "./Calculator.css";

export default function Calculator() {
  // so we have here our tip calculator
  // we need to get inputs from user
  // we have to measure amount of whole tip from whole bill number
  // we have to divide whole bill to number of people
  // also we have to divide whole tip between number of people

  const [bill, setBill] = useState(0);
  // const [tipPercent, setTipPercent] = useState({
  //   predefined: 15,
  //   custom: "",
  // });
  const [tipPer, setTipPer] = useState(15);
  const [customTip, setCustomTip] = useState("");
  const [NoP, setNoP] = useState(0); //this NoP means "Number of People"//
  const [error, setError] = useState(false);
  const [calculation, setCalculation] = useState({
    tipPerPerson: 0,
    totalPerPerson: 0,
  });

  function billOnChange(e) {
    setBill(e.target.value);
  }

  // function tipPercentOnChange(e) {
  //   setTipPercent(() => {
  //     return e.target.name === "custom"
  //       ? { predefined: "", custom: parseInt(e.target.value) }
  //       : { predefined: parseInt(e.target.value), custom: "" };
  //   });
  // }
  function tipPercentOnClick(e) {
    // console.log(e.target.value);
    setCustomTip("");
    setTipPer(parseInt(e.target.value));
  }
  // console.log(customTip);
  // console.log(tipPer);

  function customTipOnChange(e) {
    setTipPer(0);
    const value = parseInt(e.target.value);
    if (typeof value === "number") {
      setCustomTip(value);
    }
  }

  function NoPOnChange(e) {
    setNoP(parseInt(e.target.value));
  }

  function tipCalculatorPerPerson(bill, tipPercent, people) {
    let tip = bill * (tipPercent / 100);
    let tipPerPerson = tip / people;
    return tipPerPerson;
  }

  function totalShareCalculatorPerPerson(bill, tipPercent, people) {
    let tip = bill * (tipPercent / 100);
    let total = parseInt(bill) + parseInt(tip);
    let totalPerPerson = total / people;
    return totalPerPerson;
  }

  //first edition:
  // useEffect(() => {
  //   setCalculation((preValues) => {
  //     let newCalculation = preValues;
  //     if (bill && NoP) {
  //       return tipPercent.custom === ""
  //         ? (newCalculation = {
  //             tipPerPerson: tipCalculatorPerPerson(
  //               bill,
  //               tipPercent.predefined,
  //               NoP
  //             ),
  //             totalPerPerson: totalShareCalculatorPerPerson(
  //               bill,
  //               tipPercent.predefined,
  //               NoP
  //             ),
  //           })
  //         : (newCalculation = {
  //             tipPerPerson: tipCalculatorPerPerson(
  //               bill,
  //               tipPercent.custom,
  //               NoP
  //             ),
  //             totalPerPerson: totalShareCalculatorPerPerson(
  //               bill,
  //               tipPercent.custom,
  //               NoP
  //             ),
  //           });
  //     }
  //     return newCalculation;
  //   });
  // }, [NoP, bill, tipPercent, error]);

  //second edition:
  useEffect(() => {
    setCalculation((preValues) => {
      let newCalculation = preValues;

      if (bill > 0) {
        if (NoP === 0) {
          setError(true);
        } else {
          setError(false);
          return !customTip
            ? (newCalculation = {
                tipPerPerson: tipCalculatorPerPerson(bill, tipPer, NoP),
                totalPerPerson: totalShareCalculatorPerPerson(
                  bill,
                  tipPer,
                  NoP
                ),
              })
            : (newCalculation = {
                tipPerPerson: tipCalculatorPerPerson(bill, customTip, NoP),
                totalPerPerson: totalShareCalculatorPerPerson(
                  bill,
                  customTip,
                  NoP
                ),
              });
        }
      } else {
        setError(false);
      }
      return newCalculation;
    });
  }, [NoP, bill, tipPer, customTip, error]);

  function resetClickHandler() {
    setBill(0);
    setNoP(0);
    setCalculation({
      tipPerPerson: 0,
      totalPerPerson: 0,
    });
  }

  // console.log(tipPercent);

  return (
    <div className="calcuator">
      <Inputs
        billOnChange={billOnChange}
        billValue={bill}
        // tipPercentOnChange={tipPercentOnChange}
        tipPercentOnClick={tipPercentOnClick}
        customTipOnChange={customTipOnChange}
        tipPercentSelected={tipPer}
        customTipPercentValue={customTip}
        NoPOnChange={NoPOnChange}
        NoPValue={NoP}
        error={error}
      />
      <Calculation
        tipAmount={calculation.tipPerPerson.toFixed(2)}
        totalAmount={calculation.totalPerPerson.toFixed(2)}
        resetOnClick={resetClickHandler}
      />
    </div>
  );
}
