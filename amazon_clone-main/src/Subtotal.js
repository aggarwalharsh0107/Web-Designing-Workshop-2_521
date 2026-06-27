import React from "react";
import "./Subtotal.css";
import { NumericFormat } from "react-number-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
function Subtotal() {
  const [{ basket }] = useStateValue();
  return (
    <div className="subtotal">
      <NumericFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This Order Contains a gift
            </small>
          </>
        )}
        value={getBasketTotal(basket)}
  displayType="text"
  thousandSeparator
  prefix="$"
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
