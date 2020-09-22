import React from 'react'
import Cake from './Cake'
import '../styles/cakes.css'

export default function Cakes() {
  const [cakes, setCakes] = React.useState([])

  React.useEffect(() => {
    fetch('/api/cakes')
      .then((data) => data.json())
      .then((cakeResponse) => setCakes(cakeResponse))
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
