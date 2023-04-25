import logo from './assets/images/logo.png';
import cart from './assets/images/cart.png';
import './style.css';
import Home from './home';
import NotImp from './notImp';
import Footer from './component/footer';
import Products from './products';
import Details from './details';
import { Link, Routes, Route, HashRouter, Redirect, useHistory } from "react-router-dom";

const headerNotImpText = ["CREATE FROM PICTURE", "CREATE YOUR OWN", "ABOUT US", "LOG IN"];

function App() {
  return (
    <HashRouter>
      <header>
        <div className="head-container">
          <Link className="logo" to="/"><img src={logo} alt="logo.png" /></Link>
          <h1 className="name">Scotty Shirts U Illustrate (SSUI)</h1>
          <a className="shopping-cart" href="./not_implemented.html">
            <img src={cart} alt="shopping-cart" />
            <p>0</p>
          </a>
        </div>
        <div className="head-link">
          <Link to="/products">T-SHIRTS</Link>
          {headerNotImpText.map((text, id) =>
            (<Link key={id} to="/not_impemented">{text}</Link>))}
        </div>
      </header>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/details/:productID" element={<Details />} />
        <Route path="/not_impemented" element={<NotImp />} />


      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
