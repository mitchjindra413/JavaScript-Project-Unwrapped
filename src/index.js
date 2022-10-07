import {auth_url} from './scripts/authorization'

document.addEventListener("DOMContentLoaded", () => {
    if (!window.location.hash.includes('access_token')){
        let bttn = document.querySelector("#login_bttn")
        let url = auth_url()
        bttn.setAttribute("href", url);
        console.log(url);

        document.querySelector('#logged_in').style.display = "none"
        
    } else {
        document.querySelector('#login').style.display = "none"
    }
})

document


