import React, { useEffect, useState } from 'react';
import './Card.css'

const Card = (props) => {

  const deleteIdea = (id) => {
    fetch(`https://ideabox-api.vercel.app/api/v1/ideas/${id}`, {
      method: 'DELETE'
    })
    .then((res) => res.json())
    .then(data => {
      console.log(data.ideas)
      props.setIdeas(data.ideas)
    })
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