import React from 'react'
import '../styles/cake'

export default function Cake({ name, description, calories }) {
  return (
    <div className="cake">
      <h2>{name}</h2>
      <span>{calories}</span>
      <p>{description}</p>
    </div>
  )
}
