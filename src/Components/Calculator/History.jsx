import React from "react";

function History({ log, result }) {
  return (
    <div>
      <h3 className="font-mono text-center text-4xl my-8 rounded-md border-2 border-orange-600">
        기록
      </h3>
      <div className="border min-h-min rounded-md border-gray-600">
        {log ? log.map((log) => <p>{log}</p>) : ""}
      </div>
      <p className="text-3xl"> 계산 결과 : {result}</p>
    </div>
  );
}

export default History;
