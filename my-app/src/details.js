import shirts from './shared/shirts';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import {
    getShirtName, getPrice, noPriceString, numberList, getDescription,
    getFirstAvailableColorAndNum, setSelectedImage
} from './shared/utils';
import { useState } from 'react';

function getAllColors(idx) {
    let colors = [];
    for (let color in shirts[idx].colors) {
        colors.push(color);
    }
    return colors;
}

export default function Details({ addCart }) {
    let { productID } = useParams();
    let [side_detail, setSideDetail] = useState("front");
    const { firstColor } = getFirstAvailableColorAndNum(productID);
    let [color_detail, setColorDetail] = useState(firstColor);
    let [size, setSize] = useState("");
    let [qty, setQty] = useState(1);
    let noStock = (getPrice(productID) === noPriceString);

    const colors = getAllColors(productID);
    return (
        <>
            <h2 id="shirt-name">{getShirtName(productID)}</h2>
            <div className="detail-container">

                <div className='detail-pic'>
                    {setSelectedImage(productID, color_detail, side_detail)}
                </div>

                <div className="detail-text">
                    <p id="shirt-price">{getPrice(productID)}</p>
                    <p id="shirt-description">{getDescription(productID)}</p>
                    <div className="detail-selector-container">Side:
                        <button type="button" className="side-btn"
                            onClick={() => { setSideDetail("front"); }}>
                            front
                        </button>
                        <button type="button" className="side-btn"
                            onClick={() => { setSideDetail("back"); }}>
                            back
                        </button>
                    </div>
                    <div className="detail-selector-container">
                        Color:
                        <div id="shirt-color">
                            {
                                colors.map(option => {
                                    return (
                                        <button key={option} type="button" className=
                                            {(option === "white" || option === "yellow") ?
                                                "color-btn light-color" : "color-btn oth-color"}
                                            style={{ backgroundColor: option }}
                                            onClick={() => { setColorDetail(option); }} >
                                            {option}
                                        </button>)

                                })
                            }
                        </div>
                    </div>
                    <div className="detail-selector-container">
                        <label htmlFor='size'>Size:</label>
                        <select id="size" value={size} className='color-btn'
                            onChange={(e) => { setSize(e.target.value); }}>
                            <option value="">Size:</option>
                            <option value="Women's XS">Women's XS</option>
                            <option value="Women's S">Women's S</option>
                            <option value="Women's M">Women's M</option>
                            <option value="Women's L">Women's L</option>
                            <option value="Women's XL">Women's XL</option>
                            <option value="Women's 2XL">Women's 2XL</option>
                            <option value="Men's XS">Men's XS</option>
                            <option value="Men's S">Men's S</option>
                            <option value="Men's M">Men's M</option>
                            <option value="Men's L">Men's L</option>
                            <option value="Men's XL">Men's XL</option>
                            <option value="Men's 2XL">Men's 2XL</option>
                        </select>
                    </div>
                    <div className="detail-selector-container">
                        <label htmlFor='quantity' >Quantity:</label>
                        <select id="quantity" value={qty} className='color-btn'
                            onChange={(e) => { setQty(e.target.value); }}>
                            {
                                numberList.map(quantity =>
                                    <option key={quantity} value={quantity} >
                                        {quantity}
                                    </option>
                                )
                            }
                        </select>
                    </div>
                    <Link to='/shoppingcart'>
                        <button key="add-to-cart" type="button"
                            className="add-cart-btn"
                            disabled={noStock || size === "" ? true : false}
                            onClick={() => { addCart(productID, size, qty, color_detail); }} >
                            Add to Cart
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
};