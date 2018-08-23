import socialnightsimage from './assets/socialnights.png';
import sweetSpotImage from './assets/sweetspot.png';
import sneakatory from './assets/sneakatory.png';
import elliot from './assets/sidostw.png';


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
            team: true,
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
            team: false,
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
            description: "Inventory tracking system for Stock X",
            stack: "React, React-Modal, Heroku",
            link: 'https://stockx-inventory.herokuapp.com/',
            github: 'https://github.com/grungebob/Sneakatory',
            team: false,
            teammates: 'Solo',
            image: sneakatory,
            imgLink: sneakatory,
            },
        ]}, 
    ];

    data.dreams = [
        { 
            row: 'Top',
            shoes: 
            [
                {
                id: 31,
                type: 'Dreams',
                name: '"Sometimes I dream of saving the world" - Elliot Alderson, Mr. Robot',
                description: ["During the short time I have on earth, I am committed to social innovation.", "This pursuit has lead me to organizations aimed at changing the world, including", "City Year, the Global Social Impact House, and my own venture, SEA Collaborative."],
                image: elliot,
                imgLink: elliot,
                },

            ]}, 
        { 
            row: 4,
            shoes: [
                {
                id: 36,
                type: 'Dreams',
                name: 'SEA Collaborative',
                description: ["Education venture utilizing technology to connect at-risk students", "with tutors and mentors in safe, effective, and convenient methods.", "Proudly partnered with charter school KIPP Bridge in Oakland, CA."],
                image: 'https://stockx.imgix.net/Air-Jordan-1-Retro-High-Think-16-Pass-The-Torch-Product.jpg',
                imgLink: 'https://stockx.imgix.net/New-Balance-574-Sport-Ronnie-Fieg-X-DSM-Navy.png'
                },

            ]}, 
            { 
                row: 3,
                shoes: [
                    {
                    id: 36,
                    type: 'Dreams',
                    name: 'City Year',
                    description: ["Two AmeriCorps terms of service:", "San José / Silicon Valley at K.R. Smith Elementary, '08-'09", "Boston Civic Engagement, '14-'15"],
                    image: 'https://stockx.imgix.net/Air-Jordan-1-Retro-High-Think-16-Pass-The-Torch-Product.jpg',
                    imgLink: 'https://stockx.imgix.net/New-Balance-574-Sport-Ronnie-Fieg-X-DSM-Navy.png'
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
                    type: 'Marketing',
                    name: 'Korner: Commercial',
                    description: ['Produced, managed, and edited commercial for smarthome startup Korner.', 'Managed script language with CEO of company, negotiated deal with film crew, and managed animation team.', 'Arranged footage, recorded voiceover, and edited all audio.'],
                    team: true,
                    teammates: 'Steve Hollis, Jordan Serra, Nicholas Hewitt',
                    stack: 'Adobe Premiere, After Effects, Illustrator, Red Dragon, Celtx',
                    image: 'https://stockx.imgix.net/Air-Jordan-1-Retro-High-Think-16-Pass-The-Torch-Product.jpg',
                    imgLink: 'https://stockx.imgix.net/Air-Jordan-1-Retro-High-Think-16-Pass-The-Torch-Product.jpg'
                    },
    
                ]}, 
            { 
                row: 4,
                shoes: [
                    {
                    id: 36,
                    name: 'Alma Mater Records',
                    type: 'Marketing',
                    description: ['Managed social media for record label, creating promotional campaigns for artist releases and garnering tens of thousands of views.', 'featured across various publications including Complex.'],
                    team: true,
                    teammates: 'Sam Zornow aka DJ Shiftee',
                    stack: 'Adobe Premiere, Photoshop, Illustrator, Hootsuite',
                    image: 'https://stockx.imgix.net/Air-Jordan-1-Retro-High-Think-16-Pass-The-Torch-Product.jpg',
                    imgLink: 'https://stockx.imgix.net/New-Balance-574-Sport-Ronnie-Fieg-X-DSM-Navy.png'
                    },
    
                ]},
                { 
                    row: 3,
                    shoes: [
                        {
                        id: 36,
                        name: 'Korner: Indiegogo Campaign',
                        type: 'Marketing',
                        description: ['Manager of crowdfunding campaign raising over $430,000.', 'Executed social media and marketing strategies,', 'including viral pre-funding campaign with over 500 email acquisitions per day.'],
                        team: true,
                        teammates: 'Steve Hollis',
                        stack: 'Hootsuite, Indiegogo Analytics, Facebook Business Manager',
                        image: 'https://stockx.imgix.net/Air-Jordan-1-Retro-High-Think-16-Pass-The-Torch-Product.jpg',
                        imgLink: 'https://stockx.imgix.net/New-Balance-574-Sport-Ronnie-Fieg-X-DSM-Navy.png'
                        },
        
                    ]}, 
            ];

export default data;
