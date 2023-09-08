import Icon1 from "./imgs/pexels-cindy-lucero-13751270.jpg"
import Icon2 from "./imgs/pexels-kevin-menajang-982612.jpg"
import Icon3 from "./imgs/pexels-nida-kurt-9564629.jpg"
import Icon4 from "./imgs/pexels-solodsha-8105034.jpg"
import Icon5 from "./imgs/pexels-ya-demenina-13456212.jpg"

function HomeLoader(){

    let pageLoad = document.getElementById("content")
    let imgTxtCnt = document.createElement("div")
    imgTxtCnt.classList.add("img-txt-cnt", "cnt-rm")
    let pageText = document.createElement("div")
    pageText.classList.add("Home-Style")
    pageText.innerHTML = "<h4>Welcome to Susekh Bistro<br>-</h4><p>Our restaurant is a culinary gem that consistently delivers a dining experience beyond compare. From the moment you step through our doors, you'll be greeted by an inviting ambiance that sets the stage for an unforgettable meal. Our talented chefs craft each dish with precision and creativity, using only the finest, locally sourced ingredients to ensure a burst of flavor in every bite. Our attentive and friendly staff go above and beyond to cater to your every need, creating a warm and welcoming atmosphere. Whether you're here for a romantic evening, a family celebration, or a casual dinner with friends, our restaurant promises to exceed your expectations, leaving you with lasting memories of exceptional cuisine and unparalleled service. Come and savor the excellence that makes our restaurant truly exceptional.<br></p><h4>-<h4>"
    imgTxtCnt.appendChild(pageText)

    let pageImageDiv = document.createElement("div");
    pageImageDiv.classList.add("home-img-div");
    let img1 = document.createElement("img")
    img1.classList.add("home-img")
    img1.classList.add("img-st-1")
    img1.src = Icon1;
    let img2 = document.createElement("img")
    img2.classList.add("cofe")
    img2.src = Icon2;
    let img3 = document.createElement("img")
    img3.classList.add("home-img")
    img3.src = Icon3;
    let img4 = document.createElement("img")
    img4.classList.add("home-img")
    img4.classList.add("img-st-4")
    img4.src = Icon4;
    let img5 = document.createElement("img")
    img5.classList.add("home-img")
    img5.classList.add("img-st-5")
    img5.src = Icon5;
    pageImageDiv.append(img1,img2,img3,img4,img5)

    imgTxtCnt.appendChild(pageImageDiv)


    pageLoad.appendChild(imgTxtCnt)
    



}


export default HomeLoader;
