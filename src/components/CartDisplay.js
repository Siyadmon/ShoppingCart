import React from 'react';

import Products from './Products';
import CartMeta from './CartMeta';

const CartDisplay = (props) => {
  const filterCartItems = props.cartArray.map((data) => data.id);
  const cartItems = Products.filter((data) =>
    filterCartItems.includes(data.id)
  );

  let filterCartQuantity = props.cartArray.filter((data) => data.qty >= 1);

  const data = cartItems.map((item, index) => (
    <div key={index}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 col-xl-4">
            <div className="card text-black">
              <img src={item.img} className="card-img-top" />
              <div className="card-body">
                <div className="text-center">
                  <p className="text-muted mb-4">id :{item.id}</p>
                  <h5 className="card-title">{item.name}</h5>
                </div>
                <div>
                  <div className="d-flex justify-content-between">
                    <span>{item.description}</span>
                    <span>{item.price}</span>
                  </div>
                  <div className="Qty-Incr-Decr card-body text-center">
                    <h5>
                      Quantity:
                      {filterCartQuantity.map((d) =>
                        item.id === d.id ? d.qty : null
                      )}
                      {/* {filterCartItems.map((d) => (data.id === d.id && d.qty ))} */}
                    </h5>
                    <button
                      onClick={() => props.ChangeQty(item.id, 'Add')}
                      className="btn btn-primary"
                    >
                      Add(+)
                    </button>
                    <button
                      onClick={() => props.ChangeQty(item.id, 'Remove')}
                      className="btn btn-danger"
                    >
                      Remove(-)
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div>
      <div>{data}</div>
      <div>
        <CartMeta cart={props.cartArray} products={Products} />
      </div>
    </div>
  );
};

export default CartDisplay;
