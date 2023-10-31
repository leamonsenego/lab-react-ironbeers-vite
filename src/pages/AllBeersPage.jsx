// EXTERNAL DEPENDENCIES
import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

// INTERNAL DEPENDENCIES
import "/src/styles/AllBeersPage.css"

// CONSTANTS
const API_URL = "https://ih-beers-api2.herokuapp.com/beers"

const AllBeersPage = () => {
  const [allBeers, setAllBeers] = useState([])


  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
       console.log('response data: ', response.data)
        setAllBeers(response.data)
        })
  }, [])


  return (
    <div className={"all-beers-wrapper"}>
       <h1> All beers: </h1>


      { allBeers.map((beer) => (

        <div key={beer._id} className={"all-beers-element"}>
          <img src={beer.image_url} alt={"beer image"} className={"beer-image"}/>
          <Link to={`/beers/${beer._id}`} className={"beer-name"}> {beer.name} </Link>
          <i> {beer.tagline} </i>
          <h5> {beer.contributed_by} by</h5>
        </div>
      )
      )}
        </div>
      )

}

export default AllBeersPage
