import React, { useState, useEffect } from "react";
import Calculation from "./Calculation";
import Inputs from "./Inputs";

import { parseInputValueAsInteger } from "../../helpers/number";

import "./Calculator.css";

export default function Calculator() {
  // total amount
  const [bill, setBill] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(15);

  const [isCustomTipSelected, setIsCustomTipSelected] = useState(false);

  const [NoP, setNoP] = useState(1); // NoP means "Number of People"//
  const [errorNoP, setErrorNoP] = useState(false);

  const [calculation, setCalculation] = useState({
    tipPerPerson: 0,
    totalPerPerson: 0,
  });

  function NoPOnChange(e) {
    const numberOfPeople = parseInputValueAsInteger(e.target.value);
    setNoP(numberOfPeople);
  }

  function tipCalculatorPerPerson(bill, tipPercent, people) {

    if (bill === 0 || people === 0) { return 0; }
    
    const tip = bill * (tipPercent / 100);
    const tipPerPerson = tip / people;
    return tipPerPerson;
  }

  function totalShareCalculatorPerPerson(bill, tipPercent, people) {

    if (bill === 0 || people === 0) { return 0; }
    
    const tip = bill * (tipPercent / 100);
    const total = parseInt(bill) + parseInt(tip);
    const totalPerPerson = total / people;
    return totalPerPerson;
  }

  const updateTipPercentageHandler = (newValue, isCustom) => {
    setIsCustomTipSelected(isCustom);
    setTipPercentage(newValue);
  };

  useEffect(() => {    
    setErrorNoP(NoP === 0);
  }, [NoP]);

  // second edition:
  useEffect(() => {
    
    // niether NoP nor bill is 0
    if (errorNoP === true) {
      return;
    }

    // update the calculation result
    setCalculation({
      tipPerPerson: tipCalculatorPerPerson(bill, tipPercentage, NoP),
      totalPerPerson: totalShareCalculatorPerPerson(bill, tipPercentage, NoP),
    });
  }, [NoP, bill, tipPercentage, errorNoP]);

  function resetClickHandler() {
    setBill(0);
    setNoP(0);
  }

  return (
    <div className="calcuator">
      <Inputs
        billOnChange={(e) => setBill(e.target.value)}
        billValue={bill}
        updateTipPercentageHandler={updateTipPercentageHandler}
        tipPercentage={tipPercentage}
        isCustomTipSelected={isCustomTipSelected}
        NoPValue={NoP}
        NoPOnChange={NoPOnChange}
        errorNoP={errorNoP}
      />
      <Calculation
        tipAmount={calculation.tipPerPerson.toFixed(2)}
        totalAmount={calculation.totalPerPerson.toFixed(2)}
        resetOnClick={resetClickHandler}
      />
    </div>
  );
}
