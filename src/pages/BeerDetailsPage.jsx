// EXTERNAL DEPENDENCIES
import { useParams} from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

// INTERNAL DEPENDENCIES
import "/src/styles/BeerDetails.css"

// CONSTANTS
const API_URL = "https://ih-beers-api2.herokuapp.com/beers"

const BeerDetailsPage = () => {

  const [selectedBeer, setSelectedBeer] = useState(null)
  const {beerId} = useParams()

  useEffect(() => {
    axios
      .get(`${API_URL}/${beerId}`)
      .then((response) => {
        setSelectedBeer(response.data)
        console.log("selected beer data: ", response.data)
      })
  }, [beerId])

  if (!selectedBeer){
    return (<div> Loading... </div>)
  }


  return (
    <div className={"beer-details-wrapper"}>
      <img src={selectedBeer.image_url} alt={selectedBeer.name} className={"beer-image"}/>
      <h2> {selectedBeer.name} </h2>
      <i> {selectedBeer.tagline} </i>
      <p> First brewed : {selectedBeer.first_brewed} </p>
      <p> Attenuation level: <em> {selectedBeer.attenuation_level} % </em></p>
      <p> {selectedBeer.description}</p>
      <p> Contributed by: {selectedBeer.contributed_by}</p>
    </div>
  )


}

export default BeerDetailsPage
