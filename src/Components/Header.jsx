import React from "react";

function Header({ headertext }) {
  return (<><h1 className="font-mono text-center text-7xl my-8">{headertext}</h1>
  <p className="my-8">소숫점을 제외한 정수값만 입력 받으므로 "." 버튼은 모양만 만들어 두었기 때문에 동작하지 않습니다.</p>
  </>);
}

export default Header;
