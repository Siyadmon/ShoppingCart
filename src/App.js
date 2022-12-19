import React, { useState } from 'react';
import CartDisplay from './components/CartDisplay';

import Header from './components/Header';
import ProductList from './components/ProductList';
import Products from './components/Products';
import './components/styles.css';
import WishListItems from './components/WishListItems';

const App = () => {
  const [ListbtnClick, setListBtnClick] = useState(true);
  const [wishbtnClick, setWishbtnClick] = useState(false);
  const [cartbtnClick, setcartbtnClick] = useState(false);

  const [cart, setCart] = useState([]);
  const [wishList, setwishList] = useState([]);

  const setListVal = () => {
    setListBtnClick(true);
    setWishbtnClick(false);
    setcartbtnClick(false);
  };

  const setWishVal = () => {
    setWishbtnClick(true);
    setListBtnClick(false);
    setcartbtnClick(false);
  };

  const setCartVal = () => {
    setcartbtnClick(true);
    setListBtnClick(false);
    setWishbtnClick(false);
  };

  const AddMoreBtn = (id) => {
    setCart(
      cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, qty: cartItem.qty + 1, price: cartItem.price }
          : cartItem
      )
    );
  };

  const AddOrRemove = (data, mode) => {
    setCart(
      mode === 'Add'
        ? [...cart, { id: data.id, qty: 1, price: data.price }]
        : cart.filter((filt) => filt.id !== data.id)
    );
  };

  const wishcountIncrese = (id, wishmode) => {
    wishmode === 'addtoWish'
      ? setwishList([...wishList, id])
      : setwishList(wishList.filter((p) => p !== id));
  };

  const onWishDelete = (id) => {
    setwishList(wishList.filter((data) => data !== id));
  };

  const ChangeQty = (id, Operation) => {
    if (Operation === 'Add') {
      setCart(
        cart.map((data) =>
          data.id === id ? { ...data, qty: data.qty + 1 } : data
        )
      );
    }

    if (Operation === 'Remove') {
      setCart(
        cart.map((data) =>
          data.id === id
            ? { ...data, qty: data.qty <= 1 ? 1 : data.qty - 1 }
            : data
        )
      );
    }
  };

  return (
    <div className="container">
      <Header
        ListBtnClick={setListVal}
        WishBtnClick={setWishVal}
        cartBtnClick={setCartVal}
        cart={cart}
        wish={wishList}
      />
      {ListbtnClick ? (
        <ProductList
          products={Products}
          cartArr={cart}
          wishArr={wishList}
          wishcountIncrese={wishcountIncrese}
          AddOrRemove={AddOrRemove}
          AddMoreBtn={AddMoreBtn}
        />
      ) : null}

      {cartbtnClick ? (
        <CartDisplay ChangeQty={ChangeQty} cartArray={cart} />
      ) : null}
      {wishbtnClick ? (
        <WishListItems onWishDelete={onWishDelete} wishListArr={wishList} />
      ) : null}
    </div>
  );
};

export default App;
