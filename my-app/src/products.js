import shirts from './shared/shirts';
import { Link, Routes, Route, HashRouter, Redirect, useHistory } from "react-router-dom";
import { getShirtName, getFirstAvailableColorAndNum, getFirstShirtImages } from './shared/utils';

// function getShirtName(idx) {
//     let name = shirts[idx].name;
//     if (name === undefined)
//         name = "Unamed shirt";
//     return name;
// }





function createShirtItem(idx, name, pic, num) {
    return (

        <div key={idx} className="shirt-item">
            <Link to={"/details/" + idx}>
                <img src={pic} alt='t-shirt pic' />
            </Link>
            <p>{name}</p>
            <p className="ava-color">Available in {num} colors</p>
            <Link to={"/details/" + idx} className="side-btn">See more</Link>
        </div>

    );
    var item = document.createElement("div");
    let img = document.createElement("img");
    let pic_a = document.createElement("a");
    pic_a.setAttribute("href", "./details.html");
    pic_a.onclick = () => { localStorage.setItem("index", idx); localStorage.setItem("side", "front") };
    img.src = pic;
    pic_a.appendChild(img);
    item.appendChild(pic_a);
    let p = document.createElement("p");
    p.textContent = name;
    item.appendChild(p);
    let num_p = document.createElement("p");
    num_p.textContent = "Available in " + num + " colors";
    num_p.setAttribute("class", "ava-color");
    item.appendChild(num_p);
    let btn1 = document.createElement("a");
    let btn2 = document.createElement("a");
    btn1.href = "./products.html#quick";
    btn2.href = "./details.html";
    btn1.className = "side-btn";
    btn2.className = "side-btn";
    btn1.textContent = "Quick view";
    btn2.textContent = "See more";
    //btn1.onclick = () => { clickQuickView(idx); };
    btn2.onclick = () => { localStorage.setItem("index", idx); localStorage.setItem("side", "front") };
    item.appendChild(btn1);
    item.appendChild(btn2);
    item.setAttribute("class", "shirt-item");
    return item;
}

function products() {
    return (
        <>
            <h2 className="title">Our T-Shirts</h2>

            <div id="shirts-list">
                {shirts.map((shirt, idx) => {
                    const { firstColor, numColors } = getFirstAvailableColorAndNum(idx);
                    const name = getShirtName(idx);
                    const { front_image } = getFirstShirtImages(idx, firstColor);
                    return createShirtItem(idx, name, front_image, numColors);
                })}
            </div>
        </>
    );
}

export default products;