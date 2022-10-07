import {auth_url} from './scripts/authorization'

document.addEventListener("DOMContentLoaded", () => {
    let bttn = document.querySelector("#login_bttn")
    let url = auth_url()
    bttn.setAttribute("href", url);
    console.log(url);
})
