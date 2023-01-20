import "./App.css";
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

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/contacts" element={<Contacts contacts={contacts} setContacts={setContacts} />} />
          <Route path="/inventory" element={<Inventory/>} />
          <Route path="/items" element={<Items/>} />
          <Route path="/users" element={<Users users={users} setUsers={setUsers}/>} />
          <Route path="/editUser" element={<EditUser users={users} setUsers={setUsers}/>} />
          <Route path="/editUser/:id" element={<EditUserId users={users} setUsers={setUsers}/>} />
          <Route path="/editContact" element={<EditContact contacts={contacts} setContacts={setContacts}/>} />
          <Route path="/editContact/:id" element={<EditContactId contacts={contacts} setContacts={setContacts}/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
