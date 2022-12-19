import React from 'react';
import Products from './Products';

const WishListItems = (props) => {
  const data = Products.map((item, index) =>
    props.wishListArr.includes(item.id) ? (
      <div key={index}>
        <h2>
          <center>Your Wishlist</center>{' '}
        </h2>
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
                    <div className="forWishRemoveBtn card-body text-center">
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          props.onWishDelete(item.id);
                        }}
                      >
                        Remove From Wishlist
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : null
  );
  return <div>{data}</div>;
};

export default WishListItems;
