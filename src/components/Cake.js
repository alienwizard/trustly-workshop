import React, { useContext } from 'react'
import { CakeContext } from '../App'
import '../styles/cake.css'

export default function Cake({ name, description, calories, id }) {
  const { favorites, dispatch } = useContext(CakeContext)
  const isFavorited = favorites.find((favorite) => favorite.id === id)

  return (
    <div className="cake">
      <div className="cake__header">
        <h2>{name}</h2>
        <button
          className="cake__favorite"
          onClick={() =>
            dispatch({
              type: isFavorited ? 'remove_favorite' : 'add_favorite',
              payload: { id, name },
            })
          }
        >
          {isFavorited ? 'remove Favorite' : 'Favorite'}
        </button>
      </div>
      <span>{calories}</span>
      <p>{description}</p>
    </div>
  )
}
