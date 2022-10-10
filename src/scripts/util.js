export const Util = {
    
    topArtist(typeTime, limit) {
        const parse = JSON.parse(sessionStorage.total_data)
        let namesArtworks = [];
        for (let i = 0; i < limit; i++) {
            namesArtworks.push([parse[typeTime][i].name, parse[typeTime][i].images[0].url]);
        }

        return namesArtworks;
    },

    topTracks(typeTime, limit) {
        const parse = JSON.parse(sessionStorage.total_data)
        let titlesArtistArtwork = [];
        for (let i = 0; i < limit; i++) {
            titlesArtistArtwork.push([parse[typeTime][i].name, parse[typeTime][i].artists[0].name, parse[typeTime][0].album.images[0].url]);
        }

        return titlesArtistArtwork;
    },

    topGenres(typeTime, limit) {
        const parse = JSON.parse(sessionStorage.total_data)
        const genreCount = {};

        for (let i = 0; i < 50; i++) {
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

    mostObscure(typeTime) {
        const parse = JSON.parse(sessionStorage.total_data)
        let obscure = 0;
        let name = null;
        let picUrl = null;
        
        for (let i = 0; i < 50; i++) {
            if (parse[typeTime][i].popularity > obscure) {
                obscure = parse[typeTime][i].popularity;
                name = parse[typeTime][i].name;
                picUrl = parse[typeTime][i].images[0];
            }
        }

        return [name, obscure];
    }
}
