import screenShotimgURL from "./media/screenShot.png";

const imgEl = document.createElement('img');
document.body.append(imgEl)
imgEl.src = screenShotimgURL;

imgEl.addEventListener("click", event => {
    console.log("PeePeePooPoo")
})

console.log("HejHopp")

