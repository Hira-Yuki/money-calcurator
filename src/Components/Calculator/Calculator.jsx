import React, { useEffect, useState } from "react";
import InputButton from "./Buttons/InputButton";

function Calculator() {
  const [displayNumber, setDisplayNumber] = useState("0");
  const [log, setLog] = useState([]);
  const [operator, setOperator] = useState(null);
  const [lastInput, setLastInput] = useState(null);
  const lastIndex = log.length - 1;

  const alertMsg = {
    calEnd: '계산이 종료된 상태입니다. "AC" 버튼을 누른 후 새로 시작하세요.',
    noOperator: "식이 올바르지 않아요!",
  };

  const handleButtonClick = (value) => {
    if (value === "AC") {
      setLog([]);
      setDisplayNumber("0");
      setOperator(null);
      setLastInput(null);
      return;
    } else if (value === "C") {
      setDisplayNumber("0");
      return;
    } else if (!isNaN(value)) {
      if (["+", "-", "×", "÷"].includes(lastInput)) {
        setDisplayNumber(value);
      } else if (displayNumber === "0") {
        setDisplayNumber(value);
      } else {
        setDisplayNumber(displayNumber + value);
      }
    } else if (["+", "-", "×", "÷"].includes(value)) {
      if (["+", "-", "×", "÷"].includes(lastInput)) {
        const updatedLog = [...log];
        updatedLog[lastIndex] = value;
        setLog(updatedLog);
      }
      setLog([...log, displayNumber, value]);
    }

    setLastInput((prev) => value);
    console.log(log);
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
      <div>
        <h2>기록</h2>
        {log.map((log) => (
          <p>{log}</p>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
