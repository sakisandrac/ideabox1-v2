import './App.css';
import React, { useEffect } from 'react'
import Ideas from '../Ideas/Ideas'
import Form from '../Form/Form'

function App() {
const [ideas, setIdeas] = React.useState([]);

useEffect(()=> {
  fetch('https://ideabox-api.vercel.app/api/v1/ideas')
  .then(res => res.json())
  .then(data => {
    setIdeas(data.ideas)
  })
},[])

  return (
    <main className="app">
      <h1>Saki's IdeaBox</h1>
      <Form setIdeas={setIdeas} />
      {ideas?.length > 0 ? <Ideas ideas={ideas} setIdeas={setIdeas}/> : <h2>No ideas yet -- add some!</h2>}
    </main>
  );
}

export default App;
