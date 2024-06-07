import React, { useCallback, useEffect, useState } from "react";

const App = () => {
  const [len, setLen] = useState(8);
  const [char, setChar] = useState(false);
  const [num, setNum] = useState(false);
  const [psd, setpsd] = useState(false);
  const [copy, setCopy] = useState("copy");



  
  const copyy = () => {
    window.navigator.clipboard.writeText(psd)
    setCopy("Copied");
  };

  useEffect((e) => {

pass()

setCopy('Copy')

  }, [setpsd,num,char,len, ]);

  
// useEffect(()=>{
//   },[psd]);

  const range = (e) => {
    setLen(e.target.value);
  };

  const includeChar = ()=> {
    setChar(!char);
  };
  const includeNum = () => {
    setNum(!num);
  };

  const pass =  () => {
    let password = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (char) password += "#&-?/@_!";

    if (num) password += "1234567890";
    let randomPass = " ";
    for (let i = 1; i <= len; i++) {
      const randomNum = Math.floor(Math.random() * password.length);
      randomPass += password[randomNum];
    }
    setpsd(randomPass);
  }

  return (
    <div className="h-screen w-screen bg-black flex justify-center pt-10 ">
      <div className="w-1/2 h-44  rounded-xl bg-slate-900 px-10 p-6   ">
        <div className="flex  h-10">
          <div
            className="w-full rounded-l-2xl bg-white text-2xl px-4 "
            
          >
            {psd}
          </div>
          <button
            className="bg-blue-600 px-4 rounded-r-2xl text-white "
            onClick={copyy}
          >
            {copy}
          </button>
        </div>
        <div className="flex  text-orange-400   text-xl gap-3 pt-4">
          <input
            type="range"
            min="8"
            max="25"
            defaultValue="0"
            // onChange={(e) => {
            //   setLen(e.target.value);
            // }}
            onChange={range}
          />
          <h3>length({len})</h3>
          <input type="checkbox" onClick={includeNum} /> numbers
          <input type="checkbox" onClick={includeChar} /> special characters
        </div>
      </div>
    </div>
  );
};

export default App;
