const key = window.location.hash
const token = key.slice(key.indexOf("=") + 1, key.indexOf("&"))

function generateTopUserRequestUrl(type, length, time) {
    let url = 'https://api.spotify.com/v1/me/top';
    url += '/' + type;
    url += '?limit=' + length;
    url += '&time_range=' + time

    return url;
}
// time can be: long_term, medium_term, short_term
// "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n"

function recieveTopSongRequest(){
    let type = 'song';
    let length = '5'; //should I query all 50? or make multiple queries?
    // let time = some data aspect of the li 

    fetch('https://api.spotify.com/v1/me/top/tracks', {
        method: 'GET', 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
        .then((response) => {
            console.log(response);
        });
}

