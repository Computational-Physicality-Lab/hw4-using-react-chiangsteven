import shirts from './shared/shirts'
import defaultFrontShirt from "./assets/shirt_images/default-m-back.png";
import defaultBackShirt from "./assets/shirt_images/default-m-back.png";

import { useParams } from 'react-router-dom'
import {
    getShirtName, getPrice, getDescription,
    getFirstAvailableColorAndNum, getFirstShirtImages
} from './shared/utils';
import { useState } from 'react';

function getAllColors(idx) {
    let colors = [];
    for (let color in shirts[idx].colors) {
        colors.push(color);
    }
    return colors;
}

function setSelectedImage(idx, color_detail, side_detail) {
    let image;
    if (shirts[idx].colors === undefined)
        return (<img id="shirt-pic" src={defaultFrontShirt} alt="shirt picture" />);;
    if (shirts[idx].colors[color_detail][side_detail] === undefined && side_detail === "front")
        image = defaultFrontShirt;
    else if (shirts[idx].colors[color_detail][side_detail] === undefined && side_detail === "back")
        image = defaultBackShirt;
    else
        image = shirts[idx].colors[color_detail][side_detail];
    return (<img id="shirt-pic" src={image} alt="shirt picture" />);

}

export default function Details() {
    let { productID } = useParams();
    let [side_detail, setSideDetail] = useState("front");
    const { firstColor } = getFirstAvailableColorAndNum(productID);
    let [color_detail, setColorDetail] = useState(firstColor);

    const { front_image, back_image } = getFirstShirtImages(productID, firstColor);
    //  color_detail = firstColor;
    // setColorDetail(firstColor);


    const colors = getAllColors(productID);
    return (
        <>
            <h2 id="shirt-name">{getShirtName(productID)}</h2>
            <div className="detail-container">
                {/* {side_detail == "back" ? */}
                {setSelectedImage(productID, color_detail, side_detail)}
                {/* <img id="shirt-pic" src={back_image} alt="shirt picture" /> :
                    <img id="shirt-pic" src={front_image} alt="shirt picture" />} */}

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
                    <div className="detail-selector-container">Color:
                        <div id="shirt-color">
                            {
                                colors.map(option => {
                                    if (option === "white" || option === "yellow")
                                        return (
                                            <button key={option} type="button" className="color-btn light-color" style={{ backgroundColor: option }}
                                                onClick={() => { setColorDetail(option); }} >
                                                {option}
                                            </button>)
                                    else
                                        return (
                                            <button key={option} type="button" className="color-btn oth-color" style={{ backgroundColor: option }}
                                                onClick={() => { setColorDetail(option); }} >
                                                {option}
                                            </button>)
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};