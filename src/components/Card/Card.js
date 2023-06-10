import React from 'react';
import './Card.css'

const Card = (props) => {

  const deleteIdea = (id) => {
    props.deleteIdea(id);
  }

  return (
    <div className='card'>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <button onClick={() => {deleteIdea(props.id)}}>🗑</button>
    </div>
  )
}

export default Card