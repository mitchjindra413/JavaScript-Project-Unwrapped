import { auth_url } from './scripts/authorization'
import { recieveRequest } from './scripts/requests'
import { Util } from './scripts/util'
import {Slides} from './scripts/slides'

document.addEventListener("DOMContentLoaded", () => {
    if (!window.location.hash.includes('access_token')){
        let bttn = document.querySelector("#login_spotify")
        let url = auth_url();
        bttn.setAttribute("href", url);

        document.querySelector('#logged_in').style.display = "none"
        
    } else {
        if (sessionStorage.getItem('total_data') === null) {
            recieveRequest();
            console.log('made request')
        }
        requestBttnEvents();
        document.querySelector('#login').style.display = "none";
    }

    console.log(Util.topArtist('artists_long_term', 5));
    console.log(Util.topTracks('tracks_long_term', 5));
    console.log(Util.topGenres('artists_long_term', 5));
    console.log(Util.mostObscure('artists_short_term'));
})

function requestBttnEvents() {
    let short = document.querySelector('#short_bttn');
    let med = document.querySelector('#medium_bttn');
    let long = document.querySelector('#long_bttn');

    short.addEventListener('click', () => new Slides('tracks_short_term', 'artists_short_term'));
    med.addEventListener('click', () => new Slides('tracks_medium_term', 'artists_medium_term'));
    long.addEventListener('click', () => new Slides('tracks_long_term', 'artists_long_term'))
}