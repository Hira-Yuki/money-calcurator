import React, { useEffect, useState } from "react";
import NumberButton from "./Buttons/NumberButton";

function Calculator() {
  const [displayNumber, setDisplayNumber] = useState(0);
  const [prevInput, setPrevInput] = useState(null);
  const [operator, setOperator] = useState(null);

  useEffect(() => {
    if (displayNumber.length > 10) {
      setDisplayNumber("Infinity");
    }

    if (displayNumber < 0) {
      // 결과가 0보다 작은 음수의 경우 0으로 초기화
      setDisplayNumber(0);
    }
  }, [displayNumber]);

  const handleButtonClick = (value) => {
    // 버튼 클릭 처리 로직
    if (value === "AC") {
      // AC 버튼을 클릭한 경우
      setDisplayNumber(0);
    }

    if (displayNumber === "Infinity") {
      return;
    }

    if (value === "C") {
      // C 버튼을 클릭한 경우
      if (displayNumber.length > 1) {
        setDisplayNumber((prevInput) => prevInput.slice(0, -1)); // 맨 마지막 글자 삭제
      } else if (displayNumber.length <= 1) {
        setDisplayNumber(0); // 더 이상 지울 글자가 없으면 "0"으로 설정
      }
    }

    if (!isNaN(value)) {
      if (displayNumber === 0) {
        setDisplayNumber(value);
        return;
      }

      if (displayNumber.length < 10) {
        setDisplayNumber((prevInput) => prevInput + value);
      } else {
        setDisplayNumber("Infinity");
      }
    }
  };
  return (
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
          <NumberButton onNumberClick={handleButtonClick} />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
