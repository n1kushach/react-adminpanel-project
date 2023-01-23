import "./App.css";
import { useEffect, useState } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { Contacts } from "./pages/Contacts";
import { Inventory } from "./pages/Inventory";
import { Items } from "./pages/Items";
import { Users } from "./pages/Users";

import { EditUser } from "./pages/EditUser";
import { UserObj } from "./Interfaces/UserObj";
import React from "react";
import {EditUserId} from "./pages/EditUserId";
import { ContactObj } from "./Interfaces/ContactObj";
import { EditContact } from "./pages/EditContact";
import { EditContactId } from "./pages/EditContactId";

function App() {

  const [users, setUsers] = React.useState<UserObj[]>(() => {
    return JSON.parse(localStorage.getItem('users') || '[]')
  })

  React.useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
  }, [users])

  const [contacts, setContacts] = React.useState<ContactObj[]>(() => {
    return JSON.parse(localStorage.getItem('contacts') || '[]')
  })

  React.useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

import { InventoryForm } from "./pages/InventoryForm";
import { InventoryFormEdit } from "./pages/InventoryFormEdit";
import ItemsForm from "./pages/ItemsForm";
import { ItemsFormEdit } from "./pages/ItemsFormEdit";

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
          <Route path="/" element={<Home/>} />
          <Route path="/dashboard" element={<Dashboard/>} />

          <Route path="/contacts" element={<Contacts contacts={contacts} setContacts={setContacts} />} />
       
          
          <Route path="/users" element={<Users users={users} setUsers={setUsers}/>} />
          <Route path="/editUser" element={<EditUser users={users} setUsers={setUsers}/>} />
          <Route path="/editUser/:id" element={<EditUserId users={users} setUsers={setUsers}/>} />
          <Route path="/editContact" element={<EditContact contacts={contacts} setContacts={setContacts}/>} />
          <Route path="/editContact/:id" element={<EditContactId contacts={contacts} setContacts={setContacts}/>} />

          
          <Route path="/inventory" element={<Inventory inventory={inventory} setInventory={setInventory}/>} />
          <Route path="/inventoryForm" element={<InventoryForm inventory={inventory} setInventory={setInventory}/>} />
          <Route path="/inventoryForm/:id" element={<InventoryFormEdit inventory={inventory} setInventory={setInventory}/>}/>
          <Route path="/items" element={<Items items={items} setItems={setItems}/>} />
          <Route path="/itemsForm" element={<ItemsForm items={items} setItems={setItems}/>}/>
          <Route path="/itemsForm/:id" element={<ItemsFormEdit items={items} setItems={setItems}/>}/>

        </Routes>
      </Router>
    </div>
  )
}

export default App
