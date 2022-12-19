import React from 'react';

const CartMeta = (props) => {
  console.log(props);
  let total = props.cart.reduce(
    (total, data) => total + data.price * data.qty,
    0
  );

  //  array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

  return (
    <div className="m-2">
      <center>
        <h1>Total Price : {total}</h1>
      </center>
    </div>
  );
};

export default CartMeta;
