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


// Define the blog routes
app.get('/', (req, res) => {
  res.render('index');
});

// Function to generate a route path from the URL
function generateRoutePath(url) {
    return url.toLowerCase().replace(/ /g, '-');
}

const markdownPath = path.join(__dirname, './markdown');
const jsonPath = path.join(__dirname, './data');


app.get('/lecturer/:url', (req, res) => {
    const lecturerUrl = req.params.url;

    const markdownFile = path.join(markdownPath, `${lecturerUrl}.md`);
    const jsonFile = path.join(jsonPath, `${lecturerUrl}.json`);

    fs.readFile(markdownFile, 'utf8', function(err, files) {
        if (err) {
            console.error(err);
            res.status(500).send('Markdown File not found');
            return;
        }

    fs.readFile(jsonFile, 'utf8', function(err, data) {
        if (err) {
            console.error(err);
            res.status(500).send('Markdown File not found');
            return;
        }
    

        const blogPost = marked.parse(files);
        const lecturerData = JSON.parse(data);
        
        // Render the page for the lecturer
        res.render('lecturer', { blogPost, lecturerData });
        })
    });
});

  


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


module.exports = app;
