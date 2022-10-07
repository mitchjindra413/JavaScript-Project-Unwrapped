const key = window.location.hash
const token = key.slice(key.indexOf("=") + 1, key.indexOf("&"))

function generateTopUserRequestUrl(type, length, time) { 
    let url = 'https://api.spotify.com/v1/me/top';
    url += '/' + type;
    url += '?limit=' + length;
    url += '&time_range=' + time;

    return url;
}

// time can be: long_term, medium_term, short_term
// "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n"

function recieveTopRequest(){
    // let time = some data aspect of the li 
    const total_data = {};
    let length = ['short_term', 'medium_term', 'long_term']
    for(let time in length) {
        fetch(generateTopUserRequestUrl('song', '50', time), {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
            .then((response) => {
                console.log(response);
                // push to total_data
            });

        fetch(generateTopUserRequestUrl('artist', '50', time), {
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
    
}

