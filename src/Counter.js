import React, { useEffect, useState } from "react";

const Counter = (props) => {
  const init = parseInt(props.init || 0);
  const end = parseInt(props.end || 0);
  const [count, setCount] = useState(init);
  const [start, setStart] = useState(false);

  function startIteration(){
    setStart(!start);
  }

  useEffect(() => {
    if (start) {
      if (count >= end) return;
      var timer = setInterval(() => {
        setCount(count + 1);
      }, 1000);
      return () => {
        clearInterval(timer);
      };
    }
  });

  return (
    <div>
      Initial value of the counter is: {init}
      <br />
      End of the counter at: {end}
      <br />
      The counter is: {count}
      <br />
      {end && count >= end ? (
        <b>Counter stopped.</b>
      ) : (
        <i>Counter in progress.</i>
      )}
      <button onClick={startIteration}>Click Me</button>
    </div>
  );
};

export default Counter;
