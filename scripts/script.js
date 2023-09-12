const menu = document.querySelector("#menu")
const navLink = document.querySelector("#navLink")
const img1 = document.querySelector("#imgbutton")

menu.addEventListener("click", function(){
    if(navLink.style.display == "none"){
        navLink.style.display = "block"        
        img1.style.backgroundImage = "../icons/close_FILL0_wght400_GRAD0_opsz24.svg"
        // window.alert("oi");
        

        
    } else{
        navLink.style.display = "none"
        img1.style.backgroundImage = "url('../icons/menu_FILL0_wght400_GRAD0_opsz24.svg')"
    }

})