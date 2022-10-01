var menus = document.querySelector(".menus")
var sidebar = document.querySelector(".sidebar")

menus.onclick = function(){
    sidebar.classList.toggle("small-sidebar")
}