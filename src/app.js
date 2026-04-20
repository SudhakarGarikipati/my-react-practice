import React from "react";
import Counter from "./Counter";

const App = () => {
  return (
    <>
      {[0, 1, 2].map((i) => {
        return <React.Fragment key={i}>
            Counter {i} defined by {`<Counter init='5' end = '${10+i}' />`} : <br/>
            <Counter init='5' end={10+i} />
            <br/><br/>
        </React.Fragment>;
      })}
    </>
  );
};

export default App;
