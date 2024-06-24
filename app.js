const express = require('express');
const fs = require('fs');
const marked = require('marked');
const path = require('path');
const hljs = require('highlight.js');
const { parse } = require('date-fns');
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

// Sort the lecturers by date
function sortLecturersByDate(lecturers) {
    return lecturers.slice().sort((a, b) => {
      const dateA = parse(a.date, 'dd-MM-yyyy', new Date());
      const dateB = parse(b.date, 'dd-MM-yyyy', new Date());

      // Reverse, so that most recent one is the first one
      return dateB - dateA; 
    });
  }
  

// function to count JSON files as number of blogs
function countJsonFiles(directory) {
    return fs.readdirSync(directory).filter(file => path.extname(file) === '.json').length;
}

const markdownPath = path.join(__dirname, './markdown');
const jsonPath = path.join(__dirname, './data');
const lecturersFilePath = path.join(jsonPath, 'shuffledLecturers.json');
const jsonFilesCount = countJsonFiles(jsonPath);

fs.readFile(lecturersFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading lecturers JSON file:', err);
    } else {
        randomLecturers = JSON.parse(data);
    }
});


app.get('/', (req, res) => {
     // First, use the original structure of randomLecturers to make a timeline
    const timelineLecturers = sortLecturersByDate(randomLecturers);

    // then, make a shuffled one to showcase random lecturers at the side bar
    const shuffledLecturers = shuffleArray(randomLecturers);
    res.render('index', { shuffledLecturers, timelineLecturers, blogs: jsonFilesCount });
});

app.get('/learning-goals', (req, res) => {
    const shuffledLecturers = shuffleArray(randomLecturers);
    res.render('learning-goals', { shuffledLecturers });
});


app.get('/favorite', (req, res) => {
    const favorites = JSON.parse(req.query.favorites || '[]');
    const favoriteLecturers = randomLecturers.filter(lecturer => favorites.includes(lecturer.username));

    res.render('favorites', { favoriteLecturers });
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
            res.render('lecturer', { blogPost, lecturerData, shuffledLecturers });
        });
    });
});


  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


module.exports = app;
