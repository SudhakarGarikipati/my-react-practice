import React, { useContext, useState } from "react";
import { PriceContext } from "./app";

const Cart = (props) => {

  const [bill, setBillPrice] = useContext(PriceContext);
  const [oldValue, setOldValue] = useState(0);

  const textfocus = ( event) => {
    const val = parseInt(event.target.value) || 0;
    setOldValue(oldValue + parseInt(val));
  }

  const keydown = (event) => {
    if(["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"].includes(event.key))
       return;
    if (event.key < "0" || event.key > "9") {
      event.preventDefault();
    }
    if(event.key == "enter" || event.key == "Enter" )
    {
        setBillPrice((bill) =>parseInt(bill) - oldValue + parseInt(event.target.value))
    }
  };

  return (
    <div>
      <fieldset>
        <legend>Cart Item {props.num}</legend>
        Name: <input type="text" />
        <br />
        Price: <input type="text" onKeyDown={keydown} onClick={textfocus} ></input>
      </fieldset>
    </div>
  );
};

export default Cart;
