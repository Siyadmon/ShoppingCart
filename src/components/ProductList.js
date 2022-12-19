import React from 'react';

const ProductList = (props) => {
  const cartId = props.cartArr.map((data) => data.id);

  const Display = props.products.map((data, index) => {
    return (
      <div
        className="card products-list"
        style={{ width: '18rem' }}
        key={index}
      >
        <img className="card-img-top" src={data.img} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          <div className="d-flex justify-content-between">
            <span>{data.description}</span>
            <span>$ {data.price}</span>
          </div>
          <div className="For-AddRemBtn">
            <button
              onClick={() =>
                props.AddOrRemove(
                  data,
                  cartId.includes(data.id) ? 'Remove' : 'Add'
                )
              }
              className={`${
                cartId.includes(data.id)
                  ? 'btn btn-danger m-1'
                  : 'btn btn-primary m-1'
              }`}
            >
              {cartId.includes(data.id) ? 'Remove' : 'Add'}
            </button>

            <span className="for-WishlistBtn">
              {cartId.includes(data.id) ? (
                <button
                  className="btn btn-primary"
                  onClick={() => props.AddMoreBtn(data.id)}
                >
                  Add More To Cart
                </button>
              ) : null}
            </span>

            <span className="for-WishlistBtn">
              <button
                onClick={() =>
                  props.wishcountIncrese(
                    data.id,
                    props.wishArr.includes(data.id)
                      ? 'removefromWish'
                      : 'addtoWish'
                  )
                }
                className={
                  props.wishArr.includes(data.id)
                    ? 'btn btn-info'
                    : 'btn btn-success'
                }
              >
                {props.wishArr.includes(data.id)
                  ? 'Remove Wishlist'
                  : 'Add to Wishlist'}
              </button>
            </span>
          </div>
        </div>
      </div>
    );
  });

  return <div className="display-list">{Display}</div>;
};
export default ProductList;

//   <div>
//     {/* <button className="btn btn-success m-2">Add more to cart</button> */}
//     <button className="btn btn-danger" >Remove from cart</button>
//   </div>
