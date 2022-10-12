export const Util = {
    
    topArtist(typeTime, limit) {
        const parse = JSON.parse(sessionStorage.total_data)
        if(limit > parse[typeTime].length) limit = parse[typeTime].length;

        let namesArtworks = [];
        for (let i = 0; i < limit; i++) {
            namesArtworks.push([parse[typeTime][i].name, parse[typeTime][i].images[0].url]);
        }

        return namesArtworks;
    },

    topTracks(typeTime, limit) {
        const parse = JSON.parse(sessionStorage.total_data)
        if (limit > parse[typeTime].length) limit = parse[typeTime].length;

        let titlesArtistArtwork = [];
        for (let i = 0; i < limit; i++) {
            titlesArtistArtwork.push([parse[typeTime][i].name, parse[typeTime][i].artists[0].name, parse[typeTime][i].album.images[0].url]);
        }

        return titlesArtistArtwork;
    },

    topGenres(typeTime, limit) {
        const parse = JSON.parse(sessionStorage.total_data)
        const genreCount = {};
        if (limit > parse[typeTime].length) limit = parse[typeTime].length;

        for (let i = 0; i < parse[typeTime].length; i++) {
            let genreList = parse[typeTime][i].genres;
            for (let genre of genreList) {
                if (!genreCount[genre]) {
                    genreCount[genre] = 0;
                }
                genreCount[genre] += 1;
            }
        }
        
        const sorted = Object.entries(genreCount).sort((x, y) => y[1] - x[1]);

        const topGernreList = [];
        
        for (let i = 0; i < limit; i++) {
            topGernreList.push(sorted[i]);
        }

        return topGernreList;
    },

    mostObscure(typeTime, songTime) {
        
        const parse = JSON.parse(sessionStorage.total_data)
        let obscure = 101;
        let name = null;
        let picUrl = null;
        
        for (let i = 0; i < parse[typeTime].length; i++) {
            if (parse[typeTime][i].popularity < obscure) {
                obscure = parse[typeTime][i].popularity;
                name = parse[typeTime][i].name;
                picUrl = parse[typeTime][i].images[0].url;
            }
        }

        let songObscure = 101;
        let track = null;
        let artist = null;
        let songPicUrl = null;
    
        for (let i = 0; i < parse[songTime].length; i++) {
            if (parse[songTime][i].popularity < obscure) {
                songObscure = parse[songTime][i].popularity;
                track = parse[songTime][i].name;
                artist = parse[songTime][i].artists[0].name
                songPicUrl = parse[songTime][i].album.images[0].url
            }
        }

        return [name, picUrl, obscure, track, artist, songObscure, songPicUrl];
    },

    randomColor() {
        const colors = ['#f037a5', '#cdf564']
        let randIndex = Math.floor(Math.random()*2)
        return colors[randIndex]
    }
}
