// EXTERNAL DEPENDENCIES
import { Link } from "react-router-dom";

// INTERNAL DEPENDENCIES
import "/src/styles/Home.css"

const HomePage = () => {
 return (
   <nav className={"home-nav-wrapper"}>
       <div className={"home-nav-element"}>
          <img src={"src/assets/beers.png"} alt={"all beers"}/>
          <Link to={"/beers"} className={"home-nav-links"}> All Beers </Link>
          <p> Lorem ipsum </p>
       </div>
       <div className={"home-nav-element"}>
         <img src={"/src/assets/random-beer.png"} alt={"random beers"}/>
         <Link to={"/random-beer"} className={"home-nav-links"}> Random Beers </Link>
         <p> Lorem ipsum </p>
       </div>
       <div className={"home-nav-element"}>
         <img src={"/src/assets/new-beer.png"} alt={"new beer"}/>
         <Link to={"/new-beer"} className={"home-nav-links"}> New Beer </Link>
         <p> Lorem ipsum </p>
       </div>
   </nav>
 )
}

export default HomePage
