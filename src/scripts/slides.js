import {Util} from './util'
class Slides {
    constructor(typeTime){
        this.createSlideTrack(typeTime)
        this.createSlideArtist(typeTime)
        this.createSlideGenre(typeTime)
    }

    createSlideArtist(typeTime) {
    const queryResults = Util.topArtist(typeTime, 5);

    let artistDiv = document.querySelector('#topArtists');
    artistDiv.h2.innerHTML = ``

    for (i = 0; i < 9; i++) {
        let img = document.createElement('img');
        img.src = queryResults[0][1];
        artistDiv.figure.append(img);
    }

    for (let artist of queryResults) {
        let li = document.createElement('li');
        li.innerHTML = `${artist[0]}`;
        artistDiv.ul.append(li);
    }
}

    createSlideTrack(typeTime) {
        const queryResults = Util.topTracks(typeTime, 5);

        let artistDiv = document.querySelector('#topTracks');
        artistDiv.h2.innerHTML = `Top Tracks of $ { }`;

        for (let track of queryResults) {
            let div = document.createElement('div');
            let p = document.createElement('p');
            let img = document.createElement('img');
            img.src = track[1];
            p.innerHTML = track[0];

            div.append(img);
            div.append(p)
            artistDiv.figure.append(div);
        }
    }

    createSlideGenre(typeTime) {
        const queryResults = Util.topGenres(typeTime, 5);

        for(i = 0; i < 5; i++){
            
        }
    }
}
