import React, { useContext } from 'react'
import { CakeContext } from '../App'
import '../styles/cake.css'

const CakeName = ({ children }) => <h2>{children}</h2>

export default function Cake({ name, description, calories, id }) {
  const { favorites, dispatch } = useContext(CakeContext)
  const isFavorited = favorites.find((favorite) => favorite.id === id)

  return (
    <div className="cake" data-testid="cake">
      <div className="cake__header">
        <CakeName>{name}</CakeName>
        <button
          className="cake__favorite"
          data-testid="favoriteButton"
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
