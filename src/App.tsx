import "./App.css";
import { useEffect, useState } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { Contact } from "./pages/Contact";
import { Inventory } from "./pages/Inventory";
import { Items } from "./pages/Items";
import { Users } from "./pages/Users";
import { InventoryForm } from "./pages/InventoryForm";
import { InventoryFormEdit } from "./pages/InventoryFormEdit";

function App() {


  const [inventory, setInventory] = useState([
    {
      id: 1,
      productName: "JBL 305P mkII",
      productDescription: "Active Studio Monitor",
      productPrice: 199.99,
      productQuantity: 2,
      productCondition: "Near Mint",
    }
  ]);

 


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/inventory" element={<Inventory inventory={inventory} setInventory={setInventory}/>} />
          <Route path="/inventoryForm" element={<InventoryForm inventory={inventory} setInventory={setInventory}/>} />
          <Route path="/inventoryForm/:id" element={<InventoryFormEdit inventory={inventory} setInventory={setInventory}/>}/>
          <Route path="/items" element={<Items/>} />
          <Route path="/users" element={<Users/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
