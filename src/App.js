import "./App.css";
import Registration from "./Components/Registration/Registration";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About/About";
import Service from "./Components/Service/Service";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
