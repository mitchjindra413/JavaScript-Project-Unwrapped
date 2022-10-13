import { Slides } from './slides'

export const Listener = {
    requestBttnEvents() {
        let short = document.querySelector('#short_bttn');
        let med = document.querySelector('#medium_bttn');
        let long = document.querySelector('#long_bttn');

        short.addEventListener('click', () => {
            new Slides('tracks_short_term', 'artists_short_term')
            this.individualSlide();
        });
        med.addEventListener('click', () => {
            new Slides('tracks_medium_term', 'artists_medium_term')
            this.individualSlide();
        });
        long.addEventListener('click', () => {
            new Slides('tracks_long_term', 'artists_long_term')
            this.individualSlide()
        });
    },


    setup() {
        document.querySelector('#login').style.display = 'block';
        document.querySelector('#logged_in').style.display = 'none';
        let section = document.getElementsByClassName("slide");
        console.log('section:', section)
        for (let i = 0; i < section.length; i++) {
            section[i].style.display = 'none';
        }
        document.querySelector(".slide-movement").style.display = 'none';
    },

    redirected() {
        document.querySelector('#login').style.display = 'none';
        document.querySelector('#logged_in').style.display = 'block';

        let section = document.getElementsByClassName("slide");

        for (let i = 0; i < section.length; i++) {
            section[i].style.display = 'none';
        }

        document.querySelector(".slide-movement").style.display = 'none';
    },

    individualSlide(slide = 'topTracks') {
        document.querySelector('#login').style.display = 'none';
        document.querySelector('#logged_in').style.display = 'none';

        let section = document.getElementsByClassName("slide");

        for (let i = 0; i < section.length; i++) {
            if (section[i].id === slide) {
                if (slide === 'topArtists') {
                    section[i].style.display = 'flex';
                } else {
                    section[i].style.display = 'block';
                }
            } else {
                section[i].style.display = 'none';
            }
        }

        document.querySelector(".slide-movement").style.display = 'flex';
    },

    slideButtonListener() {
        let bttn_section = document.querySelector('.slide-movement')
        bttn_section.addEventListener('click', (e) => {
            this.individualSlide(e.target.dataset.slide)
        })
    },


    restartButtonListener() {
        document.querySelector('#restart-bttn').addEventListener('click', () => {
            location.reload();
        });
    }

    
}