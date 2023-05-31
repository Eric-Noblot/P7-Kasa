import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Loader from "../components/Loader/Loader"
import Error from "../pages/Error"
import "../styles/pages/app.scss"
import Accomodation from "./Accomodation"
import NavBar from "../components/Header/NavBar"
import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer"

function App() {

  const [accomodations, setAccomodations] = useState([])

  useEffect(() => {
    // setDataLoading(true)

        fetch("http://localhost:3000/data/data.json")
        .then(res => res.json())
        .then(data => setAccomodations(data))
        // setDataLoading(true)
        .catch(error => "Erreur de connexion avec l'API:" + error)    

},[])

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path = "/" element ={<Home datas={accomodations} />} />
        <Route path = "/about" element={<About />} />
        <Route path = "/loader" element={<Loader />} />
        <Route path = "/accomodation/:id" element ={<Accomodation datas={accomodations} />} />
        <Route path = "*" element ={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
