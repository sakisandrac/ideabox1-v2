import React, { useEffect } from 'react';
import './Form.css';

const Form = ({setIdeas}) => {
  const [form, setForm] = React.useState({
    title: '',
    description: ''
  })

  const submitIdea = (event) => {
    event.preventDefault();
    console.log(form);

  fetch('http://localhost:3003/api/v1/ideas', {
    method:'POST',
    body: JSON.stringify({
      id: Date.now(),
      ...form
    }),
    headers: { 
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    setIdeas((prev)=> {
      return [...prev, data.newIdea]
    })
  })
    clearInputs();
  }


  const clearInputs = () => {
    setForm({ title: '', description: '' });
  }

  const handleChange = (event) => {
    setForm(prev=> {
      return {...prev, [event.target.name]: event.target.value }
    });
  }

  return (
    <form>
      <input
        type='text'
        placeholder='Title'
        name='title'
        value={form.title}
        onChange={(event) => handleChange(event)}
      />

      <input
        type='text'
        placeholder='Description'
        name='description'
        value={form.description}
        onChange={(event) => handleChange(event)}
      />

      <button onClick={submitIdea}>SUBMIT</button>
    </form>
  )
}

export default Form