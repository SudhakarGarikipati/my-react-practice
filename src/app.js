import React, { createContext, useState } from "react";
import Counter from "./Counter";
import UserData from "./UserData";
import Cart from "./Cart";

const PriceContext = createContext();

const App = () => {
  const [total, setTotal] = useState(0);
  const [bill, setBillPrice] = useState(0);
  
  return (
    <>
      <UserData/>
      <br/>
      {[0, 1, 2].map((i) => {
        return <React.Fragment key={i}>
            Counter {i} defined by {`<Counter init='5' end = '${10+i}' />`} : <br/>
            <Counter init='5' end={10+i} addTotal={setTotal} />
            <br/>
        </React.Fragment>;
      })}
      Total: {total}<br/>
      Cart Items:
      <PriceContext.Provider value={[bill, setBillPrice]}>
      {[0,1,2].map((j) => {
        return <React.Fragment key={j}>
            <Cart num={j} />
        </React.Fragment>
      })}
      Totel Price: {bill}
      </PriceContext.Provider>
    </>
  );
};

// export default App;
export {App, PriceContext};
