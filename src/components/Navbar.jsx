// EXTERNAL DEPENDENCIES
import { Link } from "react-router-dom"

// INTERNAL DEPENDENCIES
import "/src/App.css"


const Navbar = () => {
  return(

    <nav className={"navbar"}>
      <Link to={"/"} >
      <img src={"/src/assets/home-icon.png"} alt={"home-icon"}/>
      </Link>
    </nav>
  )

}

export default Navbar
