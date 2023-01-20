import React from "react";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { MainView } from "../components/MainView/MainView";
import { UserObj } from "../Interfaces/UserObj";
import { useNavigate } from "react-router-dom";
import {SingleItemUser} from "../components/SingleItem/SingleItemUser";
import { ContactObj } from "../Interfaces/ContactObj";
import { SingleItemContact } from "../components/SingleItem/SingleItemContact";

interface Props {
  contacts: ContactObj[];
  setContacts: React.Dispatch<React.SetStateAction<ContactObj[]>>;
}


export const Contacts = ({contacts, setContacts} : Props) => {

  let navigate = useNavigate();

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-col w-full  ">
        <button className="bg-stone-600 h-min" onClick={() => {navigate('/editContact')}}>Add Contact</button>
        <div className="flex flex-col">
          {contacts.map((contact) => {
            return (
              <SingleItemContact id={contact.id} descriptionOne={contact.personalId} descriptionTwo={contact.email} contacts={contacts} setContacts={setContacts}/>
            );
          })}
        </div>
      </div>
    </div>
  );
};
