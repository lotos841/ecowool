let open_button = document.getElementById('open-menu-button')
let close_button = document.getElementById('close-menu-button')
let modal = document.getElementById('menu-modal')

let modal_value = false;

open_button.addEventListener('click', (e) => {
    if (!modal_value) {
        modal.style.display = "block";
        modal_value = true;
    }
    e.preventDefault();
})
close_button.addEventListener('click', (e) => {
    if (modal_value) {
        modal.style.display = "none";
        modal_value = false;
    }
    e.preventDefault();
})