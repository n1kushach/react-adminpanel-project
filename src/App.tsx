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
import ItemsForm from "./pages/ItemsForm";
import { ItemsFormEdit } from "./pages/ItemsFormEdit";
import { Login } from "./pages/Login";

function App() {



  const [inventory, setInventory] = useState<any>(() => {
    return JSON.parse(localStorage.getItem("inventory") || "[]")
  })

  useEffect(() => {
    localStorage.setItem("inventory", JSON.stringify(inventory))
  }, [inventory])

  const [items, setItems] = useState<any>(() => {
    return JSON.parse(localStorage.getItem("items") || "[]")
  })

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items))
  }, [items])



  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/inventory" element={<Inventory inventory={inventory} setInventory={setInventory}/>} />
          <Route path="/inventoryForm" element={<InventoryForm inventory={inventory} setInventory={setInventory}/>} />
          <Route path="/inventoryForm/:id" element={<InventoryFormEdit inventory={inventory} setInventory={setInventory}/>}/>
          <Route path="/items" element={<Items items={items} setItems={setItems}/>} />
          <Route path="/itemsForm" element={<ItemsForm items={items} setItems={setItems}/>}/>
          <Route path="/itemsForm/:id" element={<ItemsFormEdit items={items} setItems={setItems}/>}/>
          <Route path="/users" element={<Users/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
