const imgs = [
    "img0.jpg" , "img1.jpg" , "img2.jpg", "img3.jpg" ,"img4.jpg"
]
const img = document.querySelector("#img")

function setBg() {
    const todayBackground = imgs[Math.floor(Math.random() * imgs.length)]
    const child = document.createElement("img");
    child.src = `img/${todayBackground}` 
    child.classList.add("bg");  
    img.appendChild(child);
}


setBg();
//const bgImage = img.querySelector("img")



//bgImage.src = `img/${todayBackground}`
