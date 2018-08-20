import socialnightsimage from './assets/socialnights.png';
import sweetSpotImage from './assets/sweetspot.png';
import sneakatory from './assets/sneakatory.png';


var data = {};

data.home = [
    { 
        row: 'Home',
        shoes: 
        [
            {
            id: "Spot Nite",
            name: 'Full-Stack Software Engineering Dude from Pittsburgh<br/> I love Web Development, Social Innovation, and Tacos <br/>',
            stack: "Vue, Redis, Socket.io, Passport, MongoDB, SpotifyAPI",
            link: 'https://github.com/grungebob/Spot-Nite',
            github: 'https://github.com/grungebob/Spot-Nite',
            
            },
        ]}, 
    ];

data.applications = [
    { 
        row: 'Top',
        shoes: 
        [
            {
            id: 21,
            name: 'Social Nights',
            description: "Interactive online party game for music selection",
            stack: "Vue, Redis, Socket.io, Passport, MongoDB, SpotifyAPI",
            link: 'https://github.com/grungebob/Spot-Nite',
            github: 'https://github.com/grungebob/Spot-Nite',
            teammates: 'Michael Panetta, Jacob Johnston',
            image: socialnightsimage,
            imgLink: socialnightsimage
            },
        ]}, 
    { 
        row: 4,
        shoes: 
        [
            {
            id: 16,
            name: 'Sweet Spot',
            description: "Mood-based music generator",
            stack: "React, Node, Express, MongoDB, SpotifyAPI",
            link: 'https://bit.ly/SpotSweet',
            github: 'https://github.com/grungebob/Sweet-Spot',
            teammates: 'Solo',
            image: sweetSpotImage,
            imgLink: sweetSpotImage,
            },

        ]}, 
    {
        row: 3,
        shoes: 
        [
            {
            id: 16,
            name: 'Sneaktory',
            description: "Inventory tracker for Stock X",
            stack: "React, Modal, Heroku",
            link: 'https://stockx-inventory.herokuapp.com/',
            github: 'https://github.com/grungebob/Sneakatory',
            teammates: 'Solo',
            image: sneakatory,
            imgLink: sneakatory,
            },
        ]}, 
    ];

    data.media = [
        { 
            row: 'Top',
            shoes: 
            [
                {
                id: 31,
                name: 'Nike',
                style: "AQ7476-016",
                size: 10,
                UPC: 4637287,
                imgLink: 'https://stockx.imgix.net/Air-Jordan-1-Retro-High-Think-16-Pass-The-Torch-Product.jpg'
                },

            ]}, 
        { 
            row: 4,
            shoes: [
                {
                id: 36,
                name: 'New Balance',
                style: "MS574TH",
                size: 13,
                UPC: 352725,
                imgLink: 'https://stockx.imgix.net/New-Balance-574-Sport-Ronnie-Fieg-X-DSM-Navy.png'
                },

            ]}, 
        ];

export default data;
