import React from 'react'
import Cake from './Cake'
import '../styles/cakes.css'

export default function Cakes() {
  const [cakes, setCakes] = React.useState([])

  React.useEffect(() => {
    async function getCakes() {
      const data = await fetch('/api/cakes')
      const cakes = await data.json()
      setCakes(cakes)
    }

    getCakes()
  }, [])

  return (
    <div className="cakes">
      {!!cakes.length &&
        cakes.map(({ id, name, description, calories }) => (
          <Cake
            key={id}
            id={id}
            name={name}
            description={description}
            calories={calories}
          />
        ))}
    </div>
  )
}
