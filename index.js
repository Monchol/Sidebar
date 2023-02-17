const sidebar = document.querySelector(".show_sidebar");
const sidebarButton = document.querySelectorAll(".sidebar_button");
const background = document.querySelector(".background");

sidebarButton.forEach((sidebarButton) => {
    sidebarButton.addEventListener("click", function(){
        sidebar.classList.toggle("sidebar");
        background.classList.toggle("no_background");
    })
})