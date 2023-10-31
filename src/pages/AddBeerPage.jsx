// EXTERNAL DEPENDENCIES
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

// INTERNAL DEPENDENCIES
import "/src/styles/NewBeer.css"

// CONSTANTS
const API_URL = "https://ih-beers-api2.herokuapp.com/beers/new"


const AddBeerPage = () => {

  const [name, setName] = useState("")
  const [tagline, setTagline] = useState("")
  const [description, setDescription] = useState("")
  const [firstBrewed, setFirstBrewed] = useState("")
  const [tips, setTips] = useState("")
  const [attenuation, setAttenuation] = useState(0)
  const [contributed, setContributed] = useState("")

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const body = {
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: firstBrewed,
      brewers_tips: tips,
      attenuation_level: attenuation,
      contributed_by: contributed
    }

    axios
      .post(API_URL, body)
      .then(() => {
        setName("")
        setTagline("")
        setDescription("")
        setFirstBrewed("")
        setTips("")
        setAttenuation(0)
        setContributed("")

        navigate("/")
      })

  }

  return (
    <div>

      <h1 className={"add-beer-header"}> Add a new beer: </h1>

      <form onSubmit={handleSubmit} className={"new-beer-form"}>
          <label> Name </label>
          <input
            type={"text"}
            name={"name"}
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <label> Tagline </label>
          <input
            type={"text"}
            name={"tagline"}
            onChange={(e) => setTagline(e.target.value)}
            value={tagline}
          />
          <label> Description </label>
          <input
            type={"text"}
            name={"description"}
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          <label> First Brewed </label>
          <input
            type={"text"}
            name={"first_brewed"}
            onChange={(e) => setFirstBrewed(e.target.value)}
            value={firstBrewed}
          />
          <label> Brewer's tips </label>
          <input
            type={"text"}
            name={"brewers_tips"}
            onChange={(e) => setTips(e.target.value)}
            value={tips}
          />
          <label> Attenuation Level </label>
          <input
            type={"number"}
            name={"attenuation_level"}
            onChange={(e) => setAttenuation(e.target.value)}
            value={attenuation}
          />
          <label> Contributed by </label>
          <input
            type={"text"}
            name={"contributed_by"}
            onChange={(e) => setContributed(e.target.value)}
            value={contributed}
          />
          <button type={"submit"} className={"add-beer-button"}> Add Beer </button>
      </form>

    </div>
  )
}

export default AddBeerPage;
