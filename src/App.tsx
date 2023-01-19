import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { Contact } from "./pages/Contact";
import { Inventory } from "./pages/Inventory";
import { Items } from "./pages/Items";
import { Users } from "./pages/Users";

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/inventory" element={<Inventory/>} />
          <Route path="/items" element={<Items/>} />
          <Route path="/users" element={<Users/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
