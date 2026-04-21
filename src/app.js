import React, { useState } from "react";
import Counter from "./Counter";
import UserData from "./UserData";

const App = () => {
  const [total, setTotal] = useState(0);
  return (
    <>
      {[0, 1, 2].map((i) => {
        return <React.Fragment key={i}>
            Counter {i} defined by {`<Counter init='5' end = '${10+i}' />`} : <br/>
            <Counter init='5' end={10+i} addTotal={setTotal} />
            <br/><br/>
        </React.Fragment>;
      })}
      Total: {total} <br/><br/>
      <UserData/>
    </>
  );
};

export default App;
