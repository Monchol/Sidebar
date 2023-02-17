const sidebar = document.querySelector(".show_sidebar");
const sidebarButton = document.querySelectorAll(".sidebar_button");
const background = document.querySelector(".background");

sidebarButton.forEach((sidebarButton) => {
    sidebarButton.addEventListener("click", function(){
        if(sidebar.classList.contains("sidebar")){
            sidebar.classList.remove("sidebar");
            background.classList.remove("no_background");
        } else {
            sidebar.classList.add("sidebar");
            background.classList.add("no_background")
        }
    })
})