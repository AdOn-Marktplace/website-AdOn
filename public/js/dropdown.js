var menu = document.getElementsByClassName('menu-dropdown')[0];


function dropdown() {
        
    if(menu.style.display != "block"){
        menu.style.display="block";
    }else{
        menu.style.display="none";
    }
    
}