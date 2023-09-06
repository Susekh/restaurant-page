

function HomeLoader(){

    let pageLoad = document.getElementById("content")
    let pageContent = document.createElement("div")
    pageContent.classList.add("Home-Style")
    pageContent.innerHTML = "<h4>Welcome to Susekh Bistro<br>-</h4><p>Our restaurant is a culinary gem that consistently delivers a dining experience beyond compare. From the moment you step through our doors, you'll be greeted by an inviting ambiance that sets the stage for an unforgettable meal. Our talented chefs craft each dish with precision and creativity, using only the finest, locally sourced ingredients to ensure a burst of flavor in every bite. Our attentive and friendly staff go above and beyond to cater to your every need, creating a warm and welcoming atmosphere. Whether you're here for a romantic evening, a family celebration, or a casual dinner with friends, our restaurant promises to exceed your expectations, leaving you with lasting memories of exceptional cuisine and unparalleled service. Come and savor the excellence that makes our restaurant truly exceptional.<br></p><h4>-<h4>"
    pageLoad.appendChild(pageContent)
    return pageLoad;


}


export default HomeLoader;