import React from 'react';
import './Form.css';

const Form = (props) => {
  const [form, setForm] = React.useState({
    title: '',
    description: ''
  })

  const submitIdea = (event) => {
    event.preventDefault()
    const newIdea = {
      id: Date.now(),
      ...form
    }
    console.log(newIdea)
    props.addIdea(newIdea);
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