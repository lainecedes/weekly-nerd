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

app.get('/lecturer/:url', (req, res) => {
    const lecturerUrl = req.params.url;
    const dataPath = path.join(process.cwd(), 'data');

    // Read JSON files dynamically
    fs.readdir(dataPath, function(err, files) {
        if (err) {
            console.error(err);
            res.status(500).send('JSON file not found: Internal Server Error');
            return;
        }

        // Find the JSON file for the requested lecturer
        const lecturerFile = files.find(function(file) {
            return file.endsWith('.json') && file.startsWith(lecturerUrl);
        });

        if (!lecturerFile) {
            res.status(404).send('Lecturer not found');
            return;
        }

        const jsonFilePath = path.join(dataPath, lecturerFile); // Adjusted the JSON file path

        // Read the JSON file
        fs.readFile(jsonFilePath, 'utf8', function(err, data) {
            if (err) {
                console.error(err);
                res.status(500).send('JSON file not read: Internal Server Error');
                return;
            }

            // Parse the JSON data
            const lecturer = JSON.parse(data);

            // Read the Markdown content from the file path
            const markdownFilePath = path.join(process.cwd(), lecturer.markdownFilePath);
            console.log('Markdown File Path:', markdownFilePath);

            fs.readFile(markdownFilePath, 'utf8', function(err, markdownContent) {
                if (err) {
                    console.error(err);
                    res.status(500).send('Markdown not read: Internal Server Error');
                    return;
                }

                // Convert Markdown content to HTML
                const htmlContent = marked.parse(markdownContent);

                // Render the page for the lecturer
                res.render('lecturer', { lecturer: lecturer, htmlContent: htmlContent });
            });
        });
    });
});

  


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


module.exports = app;
