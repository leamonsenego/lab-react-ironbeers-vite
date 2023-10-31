// EXTERNAL DEPENDENCIES
import { Routes, Route } from "react-router-dom"

// INTERNAL DEPENDENCIES
import "./App.css"

// PAGES
import HomePage from "./pages/HomePage.jsx"
import AllBeersPage from "./pages/AllBeersPage.jsx"
import RandomBeerPage from "./pages/RandomBeerPage"
import AddBeerPage from "./pages/AddBeerPage.jsx"
import BeerDetailsPage from "./pages/BeerDetailsPage.jsx"
import ErrorPage from "./pages/ErrorPage.jsx"
import Navbar from "./components/Navbar.jsx"

const App = () => {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path={"/"} element={<HomePage/>}/>
        <Route path={"/beers"} element={<AllBeersPage/>}/>
        <Route path={"/random-beer"} element={<RandomBeerPage/>}/>
        <Route path={"/new-beer"} element={<AddBeerPage/>}/>
        <Route path={"/beers/:beerId"} element={<BeerDetailsPage/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </div>
  );
}

export default App
