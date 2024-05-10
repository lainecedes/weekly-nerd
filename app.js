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

  // Read JSON files dynamically
  fs.readdir('./data', (err, files) => {
      if (err) {
          console.error(err);
          res.status(500).send('Internal Server Error');
          return;
      }

      // Log the current directory
        console.log('__dirname:', __dirname);


      // Find the JSON file for the requested lecturer
      const lecturerFile = files.find(file => file.endsWith('.json') && file.startsWith(lecturerUrl));

      if (!lecturerFile) {
          res.status(404).send('Lecturer not found');
          return;
      }

      const filePath = path.join(__dirname, 'data', lecturerFile);

      // Read the JSON file
      fs.readFile(filePath, 'utf8', (err, data) => {
          if (err) {
              console.error(err);
              res.status(500).send('Internal Server Error');
              return;
          }

          // Parse the JSON data
          const lecturer = JSON.parse(data);

          // Read the Markdown content from the file path
          const markdownFilePath = path.join(__dirname, lecturer.markdownFilePath);
          fs.readFile(markdownFilePath, 'utf8', (err, markdownContent) => {
              if (err) {
                  console.error(err);
                  res.status(500).send('Internal Server Error');
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
