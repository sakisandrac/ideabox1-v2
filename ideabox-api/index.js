const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3003;
const app = express();
const ideas = require('./data/ideas');

app.locals = {
  title: 'Ideabox',
  ideas,
}

app.use(cors());
app.use(express.json());

app.listen(3003, () => {
  console.log('listening on port 3003')
});

app.get('/api/v1/ideas', (req, res) => {
  const { ideas } = app.locals;
  res.status(200).json({ ideas });
});

app.post('/api/v1/ideas', (req, res) => {
  const { title, description, id } = req.body;
  const requiredProperties = ['title', 'description'];

  for (let requiredParameter of requiredProperties) {
    if (req.body[requiredParameter] === undefined) {
      return res.status(422).json({
        message: `You are missing a required parameter of ${requiredParameter}`
      });
    }
  }


    // Check that the userID is a number
    // if (typeof userID !== 'number') {
    //   return res.status(422).json({
    //     message: `Invalid userID data type. userID must be a number.`
    //   })
    // }

    const newId = String(Date.now());

    app.locals.ideas.push({ id, title, description })
    res.status(201).json({ 
      message: `your idea for ${title} was successfully added`,
      newIdea: {
        id, 
        title,
        description,
      }
    });
})