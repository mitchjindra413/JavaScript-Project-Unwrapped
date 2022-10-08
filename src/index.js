import { auth_url } from './scripts/authorization'
import { recieveTopRequest } from './scripts/requests'

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

    let short = document.querySelector('#short_bttn')
    short.addEventListener("click", recieveTopRequest)
})





