import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Error from "../pages/Error"
import "../styles/pages/app.scss"

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element ={<Home />} />
        <Route path = "/about" element={<About />} />
        <Route path = "/Error" element ={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
