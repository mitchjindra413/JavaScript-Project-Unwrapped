function randomArtwork() {
    const artworkUrlsArr = [
        "https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/bebllwzjpsujz9ffwp6s/tyler-the-creator-scum-fuck-flower-boy-cover?fimg-ssr-default",
        "https://media.vogue.co.uk/photos/609be9483a19779128a1509b/1:1/w_2000,h_2000,c_limit/Billie-Eilish-Happier-Than-Ever.jpeg",
        "https://static.wikia.nocookie.net/arianagrande/images/e/ec/Sweetener_Artwork.jpg/revision/latest?cb=20180619023714",
        "https://i.pinimg.com/originals/d2/17/72/d21772ac96dded420a77219e6c7ae0fe.jpg",
        'https://ibighit.com/bts/images/bts/discography/map_of_the_soul-persona/album-cover.jpg',
        "https://upload.wikimedia.org/wikipedia/en/7/76/Eliza_Rose_-_B.O.T.A._%28Baddest_of_Them_All%29.png",
        "https://media.pitchfork.com/photos/61b0d0db542d8cbcee34616a/master/pass/Stromae-Multitude.jpeg",
        "https://upload.wikimedia.org/wikipedia/en/a/a0/Blonde_-_Frank_Ocean.jpeg",
        "https://upload.wikimedia.org/wikipedia/en/0/08/Justin_Bieber_-_Justice.png",
        "https://upload.wikimedia.org/wikipedia/en/thumb/b/b2/Olivia_Rodrigo_-_SOUR.png/220px-Olivia_Rodrigo_-_SOUR.png"
    ];

    let index = Math.floor(Math.random()*artworkUrlsArr.length);
    return artworkUrlsArr[index];
}

