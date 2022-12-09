import { auth_url } from './scripts/authorization'
import { recieveRequest } from './scripts/requests'
import { Util } from './scripts/util'
import {Slides} from './scripts/slides'
import {Listener} from './scripts/listener_util'

document.addEventListener("DOMContentLoaded", () => {
    if (!window.location.hash.includes('access_token')){
        let bttn = document.querySelector("#login_spotify")
        let url = auth_url();
        bttn.setAttribute("href", url);

        Listener.setup()
        Listener.demoButtonListener()
    } else {
        console.log('hi')
        if (sessionStorage.getItem('total_data') === null) {
            console.log('hi1')
            recieveRequest();
        }
        
        Listener.redirected();
    }
    Listener.requestBttnEvents();
    Listener.slideButtonListener();
    Listener.restartButtonListener();
})