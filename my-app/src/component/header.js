import logo from '../assets/images/logo.png';
import cart from '../assets/images/cart.png';
import { Link } from "react-router-dom";

const headerNotImpText = ["CREATE FROM PICTURE", "CREATE YOUR OWN", "ABOUT US", "LOG IN"];

export default function Heander({ itemNum }) {
    return (
        <>
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
        </>
    );
}