import React from 'react'

export default function Favorites({ favorites }) {
  return (
    <div>
      <h2>Favorites:</h2>
      {favorites.map(({ id, name }) => (
        <div key={id}>{name}</div>
      ))}
    </div>
  )
}
