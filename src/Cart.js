import React, { useContext } from "react";
import { PriceContext } from "./app";

const Cart = (props) => {

  const [bill, setBillPrice] = useContext(PriceContext);
  const keydown = (event) => {
    if (event.key < "0" || event.key > "9") {
      event.preventDefault();
    }
    if(event.key == "enter" || event.key == "Enter" )
    {
        setBillPrice((bill) =>parseInt(bill) + parseInt(event.target.value))
    }
  };

  return (
    <div>
      <fieldset>
        <legend>Cart Item {props.num}</legend>
        Name: <input type="text" />
        <br />
        Price: <input type="text" onKeyDown={keydown} ></input>
      </fieldset>
    </div>
  );
};

export default Cart;
