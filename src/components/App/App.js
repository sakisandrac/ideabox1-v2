import './App.css';
import React from 'react'
import Ideas from '../Ideas/Ideas'
import Form from '../Form/Form'

function App() {
const [ideas, setIdeas] = React.useState([
  { id: 1, title: 'Make IdeaBox app', description: 'Practice using react' },
  { id: 2, title: 'Brainstorm ideas for app', description: 'Apps that will be useful to me' },
  { id: 3, title: 'Build API for ideabox data', description: 'To save ideabox storage and learn a bit of backend' },
])

const addIdea = (newIdea) => {
  setIdeas((prev) => {
   return [...prev, newIdea]
  })

}

const deleteIdea = (id) => {
  const filteredIdeas = ideas.filter(idea => idea.id != id);
  setIdeas(filteredIdeas)
}

  return (
    <main className="app">
      <h1>Saki's IdeaBox</h1>
      <Form addIdea={addIdea} />
      {ideas.length > 0 ? <Ideas ideas={ideas} deleteIdea={deleteIdea}/> : <h2>No ideas yet -- add some!</h2>}
    </main>
  );
}

export default App;
