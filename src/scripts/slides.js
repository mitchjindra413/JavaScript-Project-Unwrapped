import {Util} from './util'

export class Slides {
    constructor(trackTime, artistTime){
        this.createSlideTrack(trackTime);
        this.createSlideArtist(artistTime);
        this.createSlideGenre(artistTime);
        this.createSlideObscure(artistTime)
    }

    createSlideArtist(typeTime) {
    const queryResults = Util.topArtist(typeTime, 5);

    let h2 = document.querySelector('#topArtists_h2');
    h2.innerHTML = "Funny sentence"
    
    let figure = document.querySelector('#artist_grid')
    for (let i = 0; i < 9; i++) {
        let img = document.createElement('img');
        img.src = queryResults[0][1];
        figure.append(img);
    }

    let ul = document.querySelector('#topArtists_ul')
    for (let artist of queryResults) {
        let li = document.createElement('li');
        li.innerHTML = `${artist[0]}`;
        ul.append(li);
    }
}

    createSlideTrack(typeTime) {
        const queryResults = Util.topTracks(typeTime, 5);

        let track_h2 = document.querySelector('#topTracks_h2');
        track_h2.innerHTML = 'Top Tracks for $ { }';

        let figure = document.querySelector('#topTracks_figure')
        for (let track of queryResults) {
            let div = document.createElement('div');
            let p = document.createElement('p');
            let img = document.createElement('img');
            img.src = track[1];
            p.innerHTML = track[0];

            div.append(img);
            div.append(p)
            figure.append(div);
        }
    }

    createSlideGenre(typeTime) {
        const queryResults = Util.topGenres(typeTime, 5);

        let h2 = document.querySelector('#topGenres_h2');
        h2.innerHTML = `Top Genres for $ { }`;

        let ul = document.querySelector('#topGenres_ul');
        for(let i = 0; i < 5; i++){
            let li = document.createElement('li');
            li.innerHTML = queryResults[i][0];
            ul.append(li)
        }
    }

    createSlideObscure(typeTime) {
        const queryResults = Util.mostObscure(typeTime);

        let h2 = document.querySelector('#mostObscure_h2');
        h2.innerHTML = `Most Obscure Artist`;

        let h3 = document.querySelector('#mostObscure_h3');
        h3.innerHTML = queryResults[0];

        let img = document.createElement('img');
        img.src = queryResults[1];

        let div = document.querySelector('#obscure_imgs')
        for(let i=0; i < 3; i++){
            obscureDiv.div.append(img)
        }
    }
}
