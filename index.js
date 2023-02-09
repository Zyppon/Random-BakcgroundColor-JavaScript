const btnChange = document.querySelector("#change-btn");
const spanRgb = document.querySelector("#rgb");
const spanHex = document.querySelector("#hex");




btnChange.addEventListener('click' , () => {
    const red = getRandomNumber()
    const green = getRandomNumber()
    const blue = getRandomNumber()
    const rgbString = `rgb(${red} , ${green} , ${blue})`;
    const hexString = `#${convertNumber(red)}${convertNumber(green)}${convertNumber(blue)}`;
    console.log(rgbString)
    console.log(hexString)
    spanRgb.innerHTML = rgbString;
    spanHex.innerHTML = hexString;
    document.body.style.backgroundColor = rgbString;
})

function getRandomNumber() {
    return Math.floor(Math.random() * 256);
}


function convertNumber(value) {
    return value.toString(16).padStart(2,"0");
}