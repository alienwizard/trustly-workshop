import React from 'react'
import Cake from './Cake'

export default function Cakes() {
  const [cakes, setCakes] = React.useState([])

  React.useEffect(() => {
    fetch('/api/cakes')
      .then((data) => data.json())
      .then((cakeResponse) => setCakes(cakeResponse))
  }, [])

  return (
    <div>
      <h1>Johans konditori</h1>
      {!!cakes.length &&
        cakes.map(({ name, description, calories }) => (
          <Cake name={name} description={description} calories={calories} />
        ))}
    </div>
  )
}
