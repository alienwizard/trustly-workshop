import React, { createContext, useReducer } from 'react'
import Cakes from './components/Cakes'
import Favorites from './components/Favorites'
import './App.css'

export const CakeContext = createContext()

function favoritesReducer(state, action) {
  console.log(action)
  switch (action.type) {
    case 'add_favorite':
      return [...state, action.payload]
    case 'remove_favorite':
      return state.filter((favorite) => favorite.id !== action.payload.id)
    default:
      return state
  }
}

function App() {
  const [favorites, dispatch] = useReducer(favoritesReducer, [])
  return (
    <div className="app">
      <CakeContext.Provider value={{ favorites, dispatch }}>
        <h1>Johans konditori</h1>
        <Cakes />
        {!!favorites.length && <Favorites favorites={favorites} />}
      </CakeContext.Provider>
    </div>
  )
}

export default App
