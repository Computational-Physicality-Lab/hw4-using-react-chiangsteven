import shirts from './shirts';
import defaultFrontShirt from "../assets/shirt_images/default-m-front.png";
import defaultBackShirt from "../assets/shirt_images/default-m-back.png";

function getShirtName(idx) {
    let name = shirts[idx].name;
    if (name === undefined)
        name = "Unamed shirt";
    return name;
}

function getPrice(idx) {
    let price = shirts[idx].price;
    if (price === undefined)
        price = "No price info";
    return price;
}

function getDescription(idx) {
    let description = shirts[idx].description;
    if (description === undefined)
        description = "No description";
    return description;
}

function getFirstAvailableColorAndNum(idx) {
    let firstColor = undefined;
    let numColors = 0;
    for (let color in shirts[idx].colors) {
        numColors++;
        if (firstColor === undefined || shirts[idx].colors[firstColor].front === undefined)
            firstColor = color;
    }
    return { "firstColor": firstColor, "numColors": numColors };
}

function getFirstShirtImages(idx, firstColor) {
    let front_image = undefined;
    let back_image = undefined;
    if (firstColor === undefined || shirts[idx].colors === undefined || shirts[idx].colors[firstColor].front === undefined)
        front_image = defaultFrontShirt;
    else
        front_image = shirts[idx].colors[firstColor].front;
    if (firstColor === undefined || shirts[idx].colors === undefined || shirts[idx].colors[firstColor].back === undefined)
        back_image = defaultBackShirt;
    else
        back_image = shirts[idx].colors[firstColor].back;
    return { "front_image": front_image, "back_image": back_image };
}



export { getShirtName, getPrice, getDescription, getFirstAvailableColorAndNum, getFirstShirtImages };