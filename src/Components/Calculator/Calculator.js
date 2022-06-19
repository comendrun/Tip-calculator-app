import React, { useState, useEffect } from "react";
import Calculation from "./Calculation";
import Inputs from "./Inputs";

import "./Calculator.css";

export default function Calculator() {
  const [bill, setBill] = useState(0);
  const [tipPer, setTipPer] = useState(15);
  const [customTip, setCustomTip] = useState("");
  const [NoP, setNoP] = useState(0); // NoP means "Number of People"//
  const [error, setError] = useState(false);
  const [calculation, setCalculation] = useState({
    tipPerPerson: 0,
    totalPerPerson: 0,
  });

  function customTipOnChange(e) {
    setTipPer(0);
    const value = parseInt(e.target.value);
    if (!(value === "")) {
      if (typeof value === "number") {
        setCustomTip(value);
      }
    }
  }

  function NoPOnChange(e) {
    const value = e.target.value;
    if (!(value === "")) {
      setError(false);
      setNoP(parseInt(value));
    } else {
      setError(true);
      setNoP(0);
    }
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

  //second edition:
  useEffect(() => {
    setCalculation((preValues) => {
      let newCalculation = preValues;
      if (bill > 0) {
        if (NoP === 0 || typeof NoP === "string") {
          setError(true);
          setCalculation({
            tipPerPerson: 0,
            totalPerPerson: 0,
          });
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

  return (
    <div className="calcuator">
      <Inputs
        billOnChange={(e) => setBill(e.target.value)}
        billValue={bill}
        tipPercentOnClick={(e) => {
          setCustomTip("");
          setTipPer(parseInt(e.target.value));
        }}
        customTipOnChange={customTipOnChange}
        NoPOnChange={NoPOnChange}
        tipPercentSelected={tipPer}
        customTipPercentValue={customTip}
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
