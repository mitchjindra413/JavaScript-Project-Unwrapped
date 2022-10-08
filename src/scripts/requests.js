const key = window.location.hash
const token = key.slice(key.indexOf("=") + 1, key.indexOf("&"))

function generateTopUserRequestUrl(type, length, time) { 
    let url = 'https://api.spotify.com/v1/me/top';
    url += '/' + type;
    url += '?limit=' + length;
    url += '&time_range=' + time;

    return url;
}

// https://api.spotify.com/v1/me/top/song?limit=50&time_range=long_term

export function recieveTopRequest(){
    // let time = some data aspect of the li 
    console.log(token)
    const total_data = {};
    let length = ['short_term', 'medium_term', 'long_term']
    for(let time of length) {
        fetch(generateTopUserRequestUrl('tracks', '50', time), {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
            .then((response) => {
                let converted = response.json()
                console.log(converted);
                // push to total_data
            });

        fetch(generateTopUserRequestUrl('artists', '50', time), {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
            .then((response) => {
                let converted = response.json()
                console.log(converted);
            });
    }
    
}


