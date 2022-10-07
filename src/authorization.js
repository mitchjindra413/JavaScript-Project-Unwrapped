import Util from './util'
const client_id = '9b212b049d7743ec9891cd13f67a9b85'; // how do a make a backend to hide this?
const redirect_uri = ''; //what should i use to test?

let app = express();


app.get('/login', (req, res) => {
    let state = generateRandomString(16)
    const scope = 'user-read-recently-played user-top-read playlist-modify-public';

    res.redirect('https://accounts.spotify.com/authorize?' +
        querystring.stringify({
            client_id: client_id,
            response_type: 'code',
            redirect_uri: redirect_uri,
            state: state,
            scope: scope,
            show_dialog: true,
            code_chalenge_method: 'S256',
            code_challenge: sha256(state)
        })
    )
})