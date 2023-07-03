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

app.delete('/api/v1/ideas/:id', (req, res) => {
  const  { id } = req.params;
  const { ideas } = app.locals;

  const filteredIdeas = ideas.filter(idea => {
    return idea.id !== parseInt(id)
  })

  app.locals.ideas = filteredIdeas;

  res.status(200).json({
    message: `Idea #${id} has deleted`,
    ideas: filteredIdeas,
  })
})

app.listen(port, () => {
  console.log(`${app.locals.title} is now running on http://localhost:${port} !`)
});