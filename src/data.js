import socialnightsimage from './assets/socialNights3.png';
import sweetSpotImage from './assets/sweetspot.png';
import sneakatory from './assets/sneakatory.png';
import elliot from './assets/sidostw.png';
import cyb from './assets/cyb.png';
import kVid from './assets/kornerVideo.png';
import alma from './assets/alma.png';
import kornerIG from './assets/kornerIG.png';
import seaLogo from './assets/seaLogo.png';
import seaCover from './assets/seaCover.png';
import cy from './assets/cityYear.jpg';
import cy3 from './assets/cy3.png';
import gsih from './assets/gsih.jpg';
import gsihSpeech from './assets/gsihSpeech.png'


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
                image: seaCover,
                imgLink: seaLogo,
                link: 'seacollab.com'
                },

            ]}, 
            { 
            row: 3,
            shoes: [
                {
                id: 36,
                type: 'Dreams',
                name: 'Global Social Impact House 2014',
                description: ["Selected for Inaugaral residential fellowship in social entrepreneurship", '"The Center for Social Impact Strategy gathered 24 of the most promising', 'social entrepreneurs from across the globe in Vieques, Puerto Rico."'],
                image: gsih,
                imgLink: gsihSpeech,
                link: 'http://socialimpactstrategy.org/residential/gsih/'
                },

            ]}, 
            { 
                row: 2,
                shoes: [
                    {
                    id: 36,
                    type: 'Dreams',
                    name: 'City Year',
                    description: ["Two AmeriCorps terms of service:", "San José / Silicon Valley at K.R. Smith Elementary, '08-'09", "Boston Civic Engagement, '14-'15"],
                    image: cy3,
                    imgLink: cy,
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
                    image: kVid,
                    imgLink: kVid,
                    link: 'https://www.youtube.com/watch?v=JfN7ni0RL14',
                    linkText: 'Watch the Commercial'
                    },
    
                ]}, 
            { 
                row: 4,
                shoes: [
                    {
                    id: 36,
                    name: 'Alma Mater Records',
                    type: 'Marketing',
                    description: ['Managed social media for record label, creating promotional campaigns for artist releases', 'garnering tens of thousands of views.', 'featured across various publications including Complex.'],
                    team: true,
                    teammates: 'Sam Zornow aka DJ Shiftee',
                    stack: 'Adobe Premiere, Photoshop, Illustrator, Hootsuite',
                    image: alma,
                    imgLink: alma,
                    link: 'http://almamaterrecs.com/',
                    linkText: 'Visit AMR',
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
                        image: kornerIG,
                        imgLink: kornerIG,
                        link: 'igg.me/at/korner',
                        linkText: "See the Campaign"
                        },
        
                    ]}, 
                    { 
                        row: 2,
                        shoes: [
                            {
                            id: 36,
                            name: 'City Year: Blog',
                            type: 'Marketing',
                            description: ['"The Volunteer Experience with City Year Boston"', 'Writer for official City Year Blog',  'Filmed and edited video'],
                            team: true,
                            teammates: 'Kylie Pratt',
                            stack: 'GoPro, Pen, Paper, WordPress',
                            image: cyb,
                            imgLink: cyb,
                            link: 'https://www.cityyear.org/boston/blog/volunteer-experience-city-year-boston',
                            linkText: 'Read The post'
                            },
            
                        ]},
            ];

export default data;
