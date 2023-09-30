import React, { useEffect, useState } from "react";
import InputButton from "./Buttons/InputButton";
import History from "./History";

function Calculator() {
  const [displayNumber, setDisplayNumber] = useState("0");
  const [log, setLog] = useState([]);
  const [operator, setOperator] = useState(false);
  const [lastInput, setLastInput] = useState(null);
  const [mathematical, setMathematical] = useState("");
  const [result, setResult] = useState("");

  const lastIndex = log.length - 1;

  const alertMessages = {
    calEnd: '계산이 종료된 상태입니다. "AC" 버튼을 누른 후 새로 시작하세요.',
    noOperator: "식이 올바르지 않아요!",
  };

  useEffect(() => {
    setMathematical((prev) => log.join(""));
  }, [log]);

  useEffect(() => {
    calculateResult();
  }, [mathematical]);

  useEffect(() => {
    if (result.length >= 10) {
      setResult("infinity");
    }
  }, [result]);

  const calculateResult = () => {
    try {
      const expression = mathematical
        .replace(/×/g, "*")
        .replace(/÷/g, "/")
        .slice(0, -1);
      const evalResult = eval(expression);
      setResult((prev) => parseInt(evalResult));
      if (result.length > 10) {
        setResult("infinity");
      } else if (!result) {
        setResult("숫자 아님");
      }
    } catch (error) {
      setResult("에러, 로그를 확인해 주세요.");
      console.log(error);
    }
  };

  const handleButtonClick = (value) => {
    if (value === "AC") {
      clearCalculator();
      return;
    } else if (value === "C") {
      clearDisplay();
      return;
    } else if (!isNaN(value)) {
      handleNumericInput(value);
    } else if (["+", "-", "×", "÷"].includes(value)) {
      handleOperatorInput(value);
    } else if (value === "=") {
      handleEqualsInput();
    }
    setLastInput(value);
  };

  const clearCalculator = () => {
    setLog([]);
    clearDisplay();
    setOperator(false);
    setLastInput(null);
    setMathematical("");
    setResult("");
  };

  const clearDisplay = () => {
    setDisplayNumber("0");
  };

  const handleNumericInput = (value) => {
    if (operator) {
      setOperator(false);
      setDisplayNumber(value);
      return;
    }
    if (["+", "-", "×", "÷"].includes(lastInput) || displayNumber === "0") {
      setDisplayNumber(value);
    } else {
      if (displayNumber.length >= 10) {
        return;
      }
      setDisplayNumber(displayNumber + value);
    }
  };

  const handleOperatorInput = (value) => {
    setOperator(true);
    if (["+", "-", "×", "÷"].includes(lastInput)) {
      const updatedLog = [...log];
      updatedLog[lastIndex] = value;
      setLog(updatedLog);
    } else {
      setLog([...log, displayNumber, value]);
    }
  };

  const handleEqualsInput = () => {
    if (log[lastIndex] === "=") {
      alert(alertMessages.calEnd);
      return;
    } else if (operator) {
      alert(alertMessages.noOperator);
      return;
    }
    setLog([...log, displayNumber, "="]);
  };

  return (
    <div>
      <div className="calculator text-5xl text-white overflow-hidden rounded-xl">
        <div className="display">
          <input
            className="w-full h-32 text-right text-7xl bg-gray-700 pr-3"
            type="text"
            value={displayNumber}
            readOnly
          />
        </div>
        <div className="buttons">
          <div className="button-row">
            {/* 0~9 숫자 버튼, 사칙연산 버튼과 등호, 소숫점 기호 버튼이 포함되어 있습니다. */}
            <InputButton onNumberClick={handleButtonClick} />
          </div>
        </div>
      </div>
      <History log={log} result={result} />
    </div>
  );
}

export default Calculator;
