const data = [
    {
        id: 0,
        song: 'Say yes',
        artist: 'Floetry',
        album: 'Floetic',
        year: 2002,
        genre: 'RnB',
        res: "../res/Floetic.jfif",
        url: 'https://music.youtube.com/watch?v=vTFg3QjSfw4&list=RDAMVMvTFg3QjSfw4'
    },
    {
        id: 1,
        song: 'Limo Wreck',
        artist: 'Soundgarden',
        album: 'Superunknown',
        year: 1994,
        genre: 'Rock',
        res: "../res/Superunknown.jpg",
        url: 'https://music.youtube.com/watch?v=1rtNlV9Ytlk&list=RDAMVM1rtNlV9Ytlk'
    },
    {
        id: 2,
        song: 'Dance with Me Tonight',
        artist: 'Bheki Mseleku',
        album: 'Home at Last',
        year: 2003,
        genre: 'Jazz',
        res: "../res/Homeatlast.jpg",
        url: 'https://music.youtube.com/watch?v=CWewHqinajk&list=RDAMVMCWewHqinajk'
    },
    {
        id: 3,
        song: 'Hip Hop',
        artist: 'Dead Prez',
        album: 'Let\'s get Free',
        year: 2000,
        genre: 'Hip Hop',
        res: "../res/Letsgetfree.jfif",
        url: 'https://music.youtube.com/watch?v=8OK-u9IH2X4&list=RDAMVM8OK-u9IH2X4'
    },
    {
        id: 4,
        song: 'Getting Late',
        artist: 'Floetry',
        album: 'Floetic',
        year: 2002,
        genre: 'RnB',
        res: "../res/Floetic.jfif",
        url: 'https://music.youtube.com/watch?v=LGy-QTEVZOA&list=RDAMVMLGy-QTEVZOA'
    },
    {
        id: 5,
        song: 'Sunshine',
        artist: 'Floetry',
        album: 'Floetic',
        year: 2002,
        genre: 'RnB',
        res: "../res/Floetic.jfif",
        url: 'https://music.youtube.com/watch?v=PyPnLY0Bzok&list=RDAMVMPyPnLY0Bzok'
    },
    {
        id: 6,
        song: 'If I was a Bird',
        artist: 'Floetry',
        album: 'Floetic',
        year: 2002,
        genre: 'RnB',
        res: "../res/Floetic.jfif",
        url: 'https://music.youtube.com/watch?v=p1TWftWyS88&list=RDAMVMp1TWftWyS88'
    },
    {
        id: 7,
        song: 'Mailman',
        artist: 'Soundgarden',
        album: 'Superunknown',
        year: 1994,
        genre: 'Rock',
        res: "../res/Superunknown.jpg",
        url: 'https://music.youtube.com/watch?v=y4FCpOBZPlk&list=RDAMVMy4FCpOBZPlk'
    },
    {
        id: 8,
        song: 'Black Hole Sun',
        artist: 'Soundgarden',
        album: 'Superunknown',
        year: 1994,
        genre: 'Rock',
        res: "../res/Superunknown.jpg",
        url: 'https://music.youtube.com/watch?v=9kIv6vVRKpw&list=RDAMVM9kIv6vVRKpw'
    },
    {
        id: 9,
        song: 'Beyond the Wheel',
        artist: 'Soundgarden',
        album: 'Ultramega OK',
        year: 1994,
        genre: 'Rock',
        res: "../res/Superunknown.jpg",
        url: 'https://music.youtube.com/watch?v=gaq-Z0gZTG0&list=RDAMVMgaq-Z0gZTG0'
    },
    {
        id: 10,
        song: 'Qula Kwedini',
        artist: 'Zim Ngqawana',
        album: 'Zimology',
        year: 1998,
        genre: 'Jazz',
        res: "../res/Homeatlast.jpg",
        url: 'https://music.youtube.com/watch?v=rfw6LT-q04s&list=RDAMVMrfw6LT-q04s'
    },
    {
        id: 11,
        song: 'Thrrr... Phaaa!',
        artist: 'Selaelo Selota',
        album: 'Enchanted Gardens',
        year: 2001,
        genre: 'Jazz',
        res: "../res/Homeatlast.jpg",
        url: 'https://music.youtube.com/watch?v=_IisP38Mdv8&list=RDAMVMrfw6LT-q04s'
    },
    {
        id: 11,
        song: 'Whoza Mtwana',
        artist: 'Abdullah Ibrahim',
        album: 'Dollor Brand at Montreux',
        year: 1989,
        genre: 'Jazz',
        res: "../res/Homeatlast.jpg",
        url: 'https://music.youtube.com/watch?v=4DzJD_8va34&list=PLggRTYJHrl2tc4MoYOY22gT_ZLcaAx_jL'
    },

]

const clean = item => {
    var bool = true;
    var _hold = [];
        for(var i = 0; i < _hold.length; i++){
            if(item != _hold[i]){
                
            }
    }
    return _hold
}

var genre = data.map(item => item.genre)
genre = genre.map(()=>clean(genre))



console.log(genre)

export default data;
