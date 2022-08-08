import React, { useRef } from "react";

export const Tabs = () => {
  const a = "block";
  const b = "none";
  const divRef1 = useRef(null);
  const divRef2 = useRef(null);
  const divRef3 = useRef(null);

  const handleClickdiv1 = () => {
    divRef1.current.style.display = a;
    divRef2.current.style.display = b;
    divRef3.current.style.display = b;
  };
  const handleClickdiv2 = () => {
    divRef1.current.style.display = b;
    divRef2.current.style.display = a;
    divRef3.current.style.display = b;
  };
  const handleClickdiv3 = () => {
    divRef1.current.style.display = b;
    divRef2.current.style.display = b;
    divRef3.current.style.display = a;
  };

  return (
    <>
    <div>
      <div ref={divRef1}>
        <p>div 1 </p>
      </div>
      <button onClick={handleClickdiv1}>click</button>
      <div ref={divRef2}>
        <p>div 2 </p>
      </div>
      <button onClick={handleClickdiv2}>click</button>
      <div ref={divRef3}>
        <p>div 3 </p>
      </div>
      <button onClick={handleClickdiv3}>click</button>
      </div>
    </>
  );
};

export default Tabs;
