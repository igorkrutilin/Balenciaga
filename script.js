function open_menu() {
    menu.style.width = "100%";
    menu.style.color = "inherit";
    body_man.style.width = "0%";
    body_man.style.color = "transparent";
}

function close_menu() {
    menu.style.width = "0%";
    menu.style.color = "transparent";
    body_man.style.width = "100%";
    body_man.style.color = "inherit";
}

function change_menu_state() {
    if (opened) {
        close_menu();
        opened = false;
    } else {
        open_menu();
        opened = true;
    }
}

var menu = document.getElementsByClassName("menu")[0];
var body_man = document.getElementsByClassName("body-man")[0];

var opened = false;
document.getElementsByClassName("head-menu")[0].addEventListener("click", change_menu_state);
