import './App.css';
import React from 'react'
import Ideas from '../Ideas/Ideas'
import Form from '../Form/Form'

function App() {
const [ideas, setIdeas] = React.useState([
  { id: 1, title: 'Prank Travis', description: 'Stick googly eyes on all his stuff' },
  { id: 2, title: 'Make a secret password app', description: 'So you and your rideshare driver can both know neither one of you is lying' },
  { id: 3, title: 'Learn a martial art', description: 'To exact vengeance upon my enemies' },
])

const addIdea = (newIdea) => {
  setIdeas((prev) => {
   return [...prev, newIdea]
  })
  console.log(ideas)
}

  return (
    <main className="app">
      <h1>IdeaBox</h1>
      <Form addIdea={addIdea}/>
      {ideas.length > 0 ? <Ideas ideas={ideas}/> : <h2>No ideas yet -- add some!</h2>}
    </main>
  );
}

export default App;
