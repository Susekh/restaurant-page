import HomeLoader from "./homePage";
import menuLoader from "./menu";
import contactLoader from "./contactPage";


function createTab(){
    let tabDiv = document.createElement("div");
    tabDiv.classList.add("tabDiv");
    let btnDiv = document.createElement("div");
    btnDiv.classList.add("btnDiv");
    let homeBtn = document.createElement("button");
    homeBtn.setAttribute("class","home-btn");
    homeBtn.textContent = "HOME";
    homeBtn.addEventListener("click",()=>{
        console.log("working")
        rmHtml();
        HomeLoader();
    })
    let menuBtn = document.createElement("button");
    menuBtn.setAttribute("class","menu-btn");
    menuBtn.textContent = "MENU";
    menuBtn.addEventListener("click",()=>{
        rmHtml();
        menuLoader();
    })
    let contactBtn = document.createElement("button");
    contactBtn.setAttribute("class","contact-btn");
    contactBtn.textContent = "CONTACT";
    contactBtn.addEventListener("click",()=>{
        rmHtml();
        contactLoader();
    })
    btnDiv.append(homeBtn,menuBtn,contactBtn);
    tabDiv.appendChild(btnDiv);
    return tabDiv;

}


function rmHtml(){
    let pageLoad = document.getElementById("content");
    let imgTxtCnt = document.querySelector(".cnt-rm")
    console.log(pageLoad);
        pageLoad.removeChild(imgTxtCnt);
}



function tabLoader(){
    let pageLoad = document.getElementById("content");
    let tabDiv = createTab();
    pageLoad.appendChild(tabDiv);



}

export default tabLoader;