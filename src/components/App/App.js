import './App.css';
import React from 'react'

function App() {
const [ideas, setIdeas] = React.useState([
  { id: 1, title: 'Prank Travis', description: 'Stick googly eyes on all his stuff' },
  { id: 2, title: 'Make a secret password app', description: 'So you and your rideshare driver can both know neither one of you is lying' },
  { id: 3, title: 'Learn a martial art', description: 'To exact vengeance upon my enemies' },
])

const ideaTitles= ideas.map((idea) => {
  return <p>{idea.title}</p>
})

  return (
    <div>
      <h1>IdeaBox</h1>
      <p>{ideaTitles}</p>
    </div>
  );
}

export default App;
