import { auth_url } from './scripts/authorization'
import { recieveRequest } from './scripts/requests'
import { Util } from './scripts/util'

document.addEventListener("DOMContentLoaded", () => {
    if (!window.location.hash.includes('access_token')){
        let bttn = document.querySelector("#login_spotify")
        let url = auth_url();
        bttn.setAttribute("href", url);

        document.querySelector('#logged_in').style.display = "none"
        
    } else {
        document.querySelector('#login').style.display = "none"
        queryButton()
    }

    console.log(Util.topArtist('artists_long_term', 5));
    console.log(Util.topTracks('tracks_long_term', 5));
    console.log(Util.topGenres('artists_long_term', 5))
    console.log(Util.mostObscure('artists_long_term'))
})

function queryButton() {
    let button = document.querySelector('.request_bttn')
    if (sessionStorage.getItem('total_data') === null) {
        button.addEventListener("click", recieveRequest())
    }
    
}






