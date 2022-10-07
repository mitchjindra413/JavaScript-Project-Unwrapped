import Util from './util'

require('dotenv').config();
const express = require('express');
const querystring = require('querystring');
const app = express();
const port = 8888;


const stateKey = 'spotify_auth_state'


app.get('/login', (req, res) => {
    let state = res.cookie(stateKey, generateRandomString(16))
    const scope = 'user-read-private user-read-email user-read-recently-played user-top-read playlist-modify-public';

    res.redirect('https://accounts.spotify.com/authorize?' +
        querystring.stringify({
            client_id: CLIENT_ID,
            response_type: 'code',
            redirect_uri: REDIRECT_URI,
            state: state,
            scope: scope,
            show_dialog: true
        })
    )
})