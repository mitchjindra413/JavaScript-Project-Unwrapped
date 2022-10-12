import {Util} from './util'

export class Slides {
    constructor(trackTime, artistTime){
        this.createSlideTrack(trackTime);
        this.createSlideArtist(artistTime);
        this.createSlideGenre(artistTime);
        this.createSlideObscure(artistTime, trackTime)
    }

    createSlideArtist(typeTime) {
    const queryResults = Util.topArtist(typeTime, 5);
    
    let col1 = document.querySelector('#col1')
    let col2 = document.querySelector('#col2')
    let col3 = document.querySelector('#col3')
    const cols = [col1, col2, col3]
    
    for (let col of cols){
        for (let i = 0; i < 3; i++) {
            let img = document.createElement('img');
            img.src = queryResults[0][1];
            col.append(img);
        }
    }

    let ol = document.querySelector('#topArtists_ol')
    for (let artist of queryResults) {
        let li = document.createElement('li');
        li.innerHTML = `${artist[0]}`;
        ol.append(li);
    }
}

    createSlideTrack(typeTime) {
        const queryResults = Util.topTracks(typeTime, 5);

        let ol = document.querySelector('#song_names')

        let figure = document.querySelector('#topTracks_figure')
        for (let track of queryResults) {
            let div = document.createElement('div');
            let li = document.createElement('li');
            let img = document.createElement('img');
            img.src = track[2];
            li.innerHTML = track[0] + ' - ' + track[1];

            div.append(img);
            ol.append(li)
            figure.append(div);
        }
    }

    createSlideGenre(typeTime) {
        
        const queryResults = Util.topGenres(typeTime, 5);


        let ul = document.querySelector('#topGenres_ul');
        for(let i = 0; i < 5; i++){
            let li = document.createElement('li');
            li.innerHTML = queryResults[i][0] + '.';
            ul.append(li)
        }
    }

    createSlideObscure(typeTime, trackTime) {
        const queryResults = Util.mostObscure(typeTime, trackTime);

        let figure = document.querySelector('#obscure-imgs')
        for(let i=0; i < 3; i++){
            let div = document.createElement('div');
            let img = document.createElement('img');
            img.src = queryResults[1];
            img.id = `obscure-img-${i}`
            figure.append(img)
        }

        let artist = document.querySelector("#obscure-artist")
        artist.innerHTML = queryResults[0]

        let song = document.querySelector('#obscure-song')
        song.innerHTML = queryResults[3] + ' - ' + queryResults[4]

    }
}
