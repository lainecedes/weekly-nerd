const express = require('express');
const fs = require('fs');
const marked = require('marked');
const path = require('path');
const hljs = require('highlight.js');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "src")));
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));


// Function to generate a route path from the URL
function generateRoutePath(url) {
    return url.toLowerCase().replace(/ /g, '-');
}

// Function to shuffle array elements
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const markdownPath = path.join(__dirname, './markdown');
const jsonPath = path.join(__dirname, './data');

// hardcoded lecturers with generated url's
const randomLecturers = [
    { username: '@jeffery.arts', href: '/lecturer/jeffrey-arts', img: "../images/jeffrey-arts.jpeg",  date: "28-02-2024",  tweet: "A self made artist with a cool dev toolkit. Check out my stuff at jeffreyarts.nl", name: "Jeffrey Arts" },
    { username: '@fennadew', href: '/lecturer/fenna-de-wilde', img: "../images/fenna-de-wilde.jpeg", date: "14-02-2024", tweet: "Check out my tips for building accessible sites here!", name: "Fenna de Wilde" },
    { username: '@hackathon', href: '/lecturer/hackathon', img: "../images/hackathon-css-day.jpeg", date: "25-03-2024",  tweet: "Why touch grass when u can make cool shiny globe with data for CSS Day that WORKS", name: "Hackathon" },
    { username: '@adactio', href: '/lecturer/jeremy-keith', img: "../images/jeremy-keith.jpeg", date: "13-03-2024", tweet: "I got to teach students at the AUAS about Browser Technologies.", name: "Jeremy Keith" },
    { username: '@julia_miocene', href: '/lecturer/julia-miocene', img: "../images/julia-miocene.jpeg", date: "18-03-2024", tweet: "I make cool and complex animations with pure CSS. 🙂‍↕️", name: "Julia Miocene" },
    { username: '@kilianvalkhof', href: '/lecturer/kilian-valkhof', img: "../images/kilian.jpeg",  date: "07-02-2024", tweet: "Using Javascript? When HTML and CSS is right there? Be serious for once", name: "Kilian Valkhof" },
    { username: '@digitaaltoegankelijk', href: '/lecturer/pim-marieke', img: "../images/digitaal-toegankelijk.png", date: "03-04-2024", tweet: "Making websites just anyhow 🙂‍↔️, Making websites with accessibility and POUR in mind 🙂‍↕️",  name: "Marieke en Pim" },
    { username: '@roberrrt_s', href: '/lecturer/robert-spier', img: "../images/robert-spier.jpeg", date: "15-05-2024",  tweet: "Get to work BITCH.", name: "Robert Spier" },
    { username: '@rosaschuurmans', href: '/lecturer/rosa-schuurmans', img: "../images/rosa-schuurmans.jpeg", date: "10-04-2024", tweet: "Do not necessarily accept the status-quo like that.", name: "Rosa Schuurmans"},
    { username: '@supremebeing09', href: '/lecturer/nils-binder', img: "../images/nils-binder.jpeg", date: "06-03-2024", tweet: "Grids and container queries are cool ykno", name: "Nils Binder"}
];

app.get('/', (req, res) => {
    const shuffledLecturers = shuffleArray(randomLecturers);
    res.render('index', { shuffledLecturers });
});

app.get('/learning-goals', (req, res) => {
    const shuffledLecturers = shuffleArray(randomLecturers);
    res.render('learning-goals', { shuffledLecturers });
});

// Function to handle the /lecturer/:url route
app.get('/lecturer/:url', (req, res) => {

    const lecturerUrl = req.params.url;

    const markdownFile = path.join(markdownPath, `${lecturerUrl}.md`);
    const jsonFile = path.join(jsonPath, `${lecturerUrl}.json`);

    fs.readFile(markdownFile, 'utf8', (err, files) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Markdown file not found');
        }

        fs.readFile(jsonFile, 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return res.status(500).send('JSON file not found');
            }

            const blogPost = marked.parse(files);
            const lecturerData = JSON.parse(data);

           
            const shuffledLecturers = shuffleArray(randomLecturers);
            console.log(shuffledLecturers);

            res.render('lecturer', { blogPost, lecturerData, shuffledLecturers });
        });
    });
});


  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


module.exports = app;
