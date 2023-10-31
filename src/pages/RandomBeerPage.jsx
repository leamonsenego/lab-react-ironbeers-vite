// EXTERNAL DEPENDENCIES
import { useState, useEffect } from "react"
import axios from "axios"

// INTERNAL DEPENDENCIES
import "/src/styles/BeerDetails.css"

// CONSTANTS
const API_URL = "https://ih-beers-api2.herokuapp.com/beers/random"

const RandomBeersPage = () => {
  const [randomBeer, setRandomBeer] = useState([])

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setRandomBeer(response.data)
        console.log(response.data)
      })
  }, [])

  return (
    <div className={"beer-details-wrapper"}>
      <img src={randomBeer.image_url} alt={randomBeer.name} className={"beer-image"}/>
      <h2> {randomBeer.name} </h2>
      <i> {randomBeer.tagline} </i>
      <p> First brewed : {randomBeer.first_brewed} </p>
      <p> Attenuation level: <em> {randomBeer.attenuation_level} % </em></p>
      <p> {randomBeer.description}</p>
      <p> Contributed by: {randomBeer.contributed_by}</p>
    </div>
  )

}

export default RandomBeersPage
