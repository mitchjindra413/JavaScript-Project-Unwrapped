const parse = JSON.parse(sessionStorage.total_data)

function topArtist(typeTime, limit) {
    let namesArtworks = [];
    for(i = 0; i < limit; i++){
        namesArtworks.push([parse[typeTime][i].name, parse[typeTime][i].images[0].url]);
    }

    return namesPics;
}

function topTracks(typeTime, limit) {
    let titlesArtistArtwork = [];
    for(i = 0; i < limit; i++){
        titlesArtistArtwork.push([parse[typeTime][i].name, parse[typeTime].artists[0].name, parse[typeTime][i].images[0].url]);
    }

    return titlesArtistArtwork;
}

function topGenres(typeTime, limit) {
    const genreCount = {};
    for(let artists in parse[typeTime]) {
        let genreList = artists.genres;
        for(let genre of genreList) {
            if(!genreCount[genre]) {
                genreCount[genre] = 0;
            } 
            genreCount[genre] += 1;
        }
    }
    const sorted = Object.entries(genreCount).sort((x,y) => y[1]-x[1]);

    const topGernreList = [];
    for(i = 0; i < limit; i++) {
        topGernreList.push(sorted[i]);
    }

    return topGernreList;
}

function mostObscure(typeTime) {
    let obscure = 0;
    let name = null;
    for(i = 0; i < 50; i++){
        if(parse[typeTime].popularity > obscure){
            obscure = parse[typeTime].popularity;
            name = parse[typeTime].name
        }
    }

    return [name, obscure];
}