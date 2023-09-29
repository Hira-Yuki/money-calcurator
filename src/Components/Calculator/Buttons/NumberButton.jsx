import React from "react";
import Button from "./Button";

function NumberButton({ onNumberClick }) {
  const numbers = [
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];

  return (
    <div className="number-buttons w-30 h-96 border border-black">
      <div className="button-row h-1/5">
        <Button
          className="allclear-button w-2/4 h-full bg-gray-700 border border-black"
          key="AC"
          label="AC"
          onClick={onNumberClick}
        />
        <Button
          className="clear-button w-1/4 h-full bg-gray-700 border border-black"
          key="C"
          label="C"
          onClick={onNumberClick}
        />
        <Button
          className="obelus-button w-1/4 h-full bg-yellow-500 border border-black"
          key="Obelus"
          label="÷"
          onClick={onNumberClick}
        />
      </div>
      <div className="button-row h-1/5">
        {numbers.slice(0, 3).map((number) => (
          <Button
            className="calc-button w-1/4 h-full bg-gray-500 border border-black"
            key={number}
            label={number}
            onClick={onNumberClick}
          />
        ))}
        <Button
          className="times-button w-1/4 h-full bg-yellow-500 border border-black"
          key="times"
          label="×"
          onClick={onNumberClick}
        />
      </div>
      <div className="button-row h-1/5">
        {numbers.slice(4, 7).map((number) => (
          <Button
            className="calc-button w-1/4 h-full bg-gray-500 border border-black"
            key={number}
            label={number}
            onClick={onNumberClick}
          />
        ))}
        <Button
          className="minus-button w-1/4 h-full bg-yellow-500 border border-black"
          key="minus"
          label="-"
          onClick={onNumberClick}
        />
      </div>
      <div className="button-row h-1/5">
        {numbers.slice(8, 11).map((number) => (
          <Button
            className="calc-button w-1/4 h-full bg-gray-500 border border-black"
            key={number}
            label={number}
            onClick={onNumberClick}
          />
        ))}
        <Button
          className="plus-button w-1/4 h-full bg-yellow-500 border border-black"
          key="+"
          label="+"
          onClick={onNumberClick}
        />
      </div>
      <div className="button-row h-1/5">
        <Button
          className="zero-button w-2/4 h-full bg-gray-500 border border-black"
          key="zero"
          label="0"
          onClick={onNumberClick}
        />
        <Button
          className="decimal-button w-1/4 h-full bg-gray-500 border border-black"
          key="decimal"
          label="."
          onClick={onNumberClick}
        />
        <Button
          className="equal-button w-1/4 h-full bg-yellow-500 border border-black"
          key="equal"
          label="="
          onClick={onNumberClick}
        />
      </div>
    </div>
  );
}

export default NumberButton;
