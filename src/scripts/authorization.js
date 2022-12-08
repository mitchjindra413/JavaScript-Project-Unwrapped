const client_id = '9b212b049d7743ec9891cd13f67a9b85'
const redirect_uri = 'https://mitchjindra413.github.io/JavaScript-Project-Unwrapped/'

const stateKey = 'spotify_auth_state'
const scope = 'user-read-private user-read-email user-read-recently-played user-top-read';


function generateRandomString(length) {
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    let str = '';
    for (let i = 0; i < length; i++) {
        str += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return str;
};

const state = generateRandomString(16);

export const auth_url = () => {
    let url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(client_id);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
    url += '&state=' + encodeURIComponent(state);

    localStorage.setItem(stateKey, state);
    
    return url;

}




// app.get('/login', (req, res) => {
//     let state = res.cookie(stateKey, generateRandomString(16))
//     const codeVerifier = generateRandomString(64)
//     const scope = 'user-read-private user-read-email user-read-recently-played user-top-read playlist-modify-public';

//     res.redirect(generateUrlWithSearchParams('https://accounts.spotify.com/authorize?',
//         {
//             client_id: client_id,
//             response_type: 'code',
//             redirect_uri: redirect_uri,
//             state: state,
//             scope: scope,
//             code_challange_method: 'S256',
//             code_challange: generateCodeChallenge(codeVerifier)
//         }
//     ))
// });

