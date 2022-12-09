import { Listener } from "./listener_util";

const key = window.location.hash
const token = key.slice(key.indexOf("=") + 1, key.indexOf("&"))

function generateRequestUrl(type, length, time) { 
    let url = 'https://api.spotify.com/v1/me/top';
    url += '/' + type;
    url += '?limit=' + length;
    url += '&time_range=' + time;

    return url;
}

// https://api.spotify.com/v1/me/top/song?limit=50&time_range=long_term

export async function recieveRequest(){
    debugger
    const total_data = {};
    let length = ['short_term', 'medium_term', 'long_term']
    for(let time of length) {
        try{
            const response = await fetch(generateRequestUrl('tracks', '50', time), {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            })

            const data = await response.json()
            total_data[`tracks_${time}`] = data.items
        } catch(err) {  

            alert('You have successfully signed in but are not yet preapproved. For demonstration purposes, sample data has been filled in place of your personal data. To see your personal data, please message the creator on LinkedIn.')
            return sessionStorage.setItem('total_data', Listener.exampledata())
        }

        const response2 = await fetch(generateRequestUrl('artists', '50', time), {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        const data2 = await response2.json()

        total_data[`artists_${time}`] = data2.items
    };

    
    const tds = JSON.stringify(total_data)
    
    sessionStorage.setItem('total_data', tds);
    return total_data;
}

