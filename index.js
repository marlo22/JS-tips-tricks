const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'pug');

const contentFiles = fs.readdirSync(__dirname + '/content').map(fileName => fileName.split('.')[0]);

app.get('/', (req, res) => {
  res.render('index', {
    contentFiles
  });
});

app.get('/:chapter', (req, res) => {
  const { chapter } = req.params;
  const {
    title,
    example,
    badExample,
    goodExample,
    description
  } = require(`./content/${chapter}`);

  res.render('practice', {
    title,
    example,
    badExample,
    goodExample,
    description,
    contentFiles,
    currentChapter: chapter
  });
});

app.listen(3000, () => {
  console.log('Ready - http://localhost:3000');
});