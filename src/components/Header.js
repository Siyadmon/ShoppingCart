import React from 'react';

const Header = (props) => {
  return (
    <div className="m-4">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Header
        </a>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <button className="btn btn-link" onClick={props.ListBtnClick}>
                List
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-link" onClick={props.WishBtnClick}>
                WishList
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-link" onClick={props.cartBtnClick}>
                Cart
              </button>
            </li>
            <li className="nav-item">
              <span className="m-4 pt-4">CartCount : {props.cart.length}</span>
              <span className="m-4 pt-4">WishList : {props.wish.length}</span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
