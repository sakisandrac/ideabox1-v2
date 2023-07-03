import './App.css';
import React, { useEffect } from 'react'
import Ideas from '../Ideas/Ideas'
import Form from '../Form/Form'

function App() {
const [ideas, setIdeas] = React.useState([]);

useEffect(()=> {
  fetch('http://localhost:3003/api/v1/ideas')
  .then(res => res.json())
  .then(data => {

    setIdeas(data.ideas)
  })
},[])

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
      <Form setIdeas={setIdeas} />
      {ideas?.length > 0 ? <Ideas ideas={ideas} deleteIdea={deleteIdea}/> : <h2>No ideas yet -- add some!</h2>}
    </main>
  );
}

export default App;
