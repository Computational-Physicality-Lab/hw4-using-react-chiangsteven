import logo from './assets/images/logo.png';
import cart from './assets/images/cart.png';
import './style.css';
import Home from './home';
import NotImp from './notImp';
import Footer from './component/footer';
import Products from './products';
import Details from './details';
import Cart from './cart';
import { Link, Routes, Route, HashRouter } from "react-router-dom";
import { useState } from 'react';

const headerNotImpText = ["CREATE FROM PICTURE", "CREATE YOUR OWN", "ABOUT US", "LOG IN"];

function App() {
  let [itemNum, setItemNum] = useState(0);
  let [myCart, setMyCart] = useState([]);
  let [cartItemUid, setUid] = useState(0);
  const addCart = (id, size, quantity, color) => {
    setItemNum(parseInt(itemNum) + parseInt(quantity));
    setMyCart([{ id: id, size: size, quantity: quantity, color: color, cartId: cartItemUid }, ...myCart]);
    setUid(cartItemUid + 1);
  };
  const removeCartItem = (id) => {
    console.log('remove qty:' + parseInt(myCart[id].quantity));
    setItemNum(parseInt(itemNum) - parseInt(myCart[id].quantity));
    let tmpCart = [...myCart];
    tmpCart.splice(id, 1);
    console.log(tmpCart);
    console.log(myCart);
    setMyCart(tmpCart);
  };
  const changeCartItemQty = (id, qty) => {
    let originQty = myCart[id].quantity;
    console.log(`change qty from: ${originQty} to ${qty}`);
    setItemNum(parseInt(itemNum) - parseInt(originQty) + parseInt(qty));
    let tmpCart = myCart;
    tmpCart[id].quantity = qty;
    setMyCart(tmpCart);
  };

  return (
    <HashRouter>
      <header>
        <div className="head-container">
          <Link className="logo" to="/"><img src={logo} alt="logo.png" /></Link>
          <h1 className="name">Scotty Shirts U Illustrate (SSUI)</h1>
          <Link className="shopping-cart" to="/shoppingcart">
            <img src={cart} alt="shopping-cart" />
            <p>{itemNum}</p>
          </Link>
        </div>
        <div className="head-link">
          <Link to="/products">T-SHIRTS</Link>
          {headerNotImpText.map((text, id) =>
            (<Link key={id} to="/not_implemented">{text}</Link>))}
        </div>
      </header>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/details/:productID" element={<Details addCart={addCart} />} />
        <Route path="/shoppingcart"
          element={<Cart num={itemNum} myCart={myCart} removeCartItem={removeCartItem} changeQty={changeCartItemQty} />} />
        <Route path="/not_implemented" element={<NotImp />} />

      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
