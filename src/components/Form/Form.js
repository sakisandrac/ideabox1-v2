import React from 'react';

const Form = () => {
  return (
    <form>
      <input
        type='text'
        placeholder='Title'
        name='title'
        value={this.state.title}
      />

      <input
        type='text'
        placeholder='Description'
        name='description'
        value={this.state.description}
      />

      <button>SUBMIT</button>
    </form>
  )
}

export default Form