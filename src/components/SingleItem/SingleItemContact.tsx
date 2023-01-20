import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { UserObj } from "../../Interfaces/UserObj";
import { Link } from "react-router-dom";
import { ContactObj } from "../../Interfaces/ContactObj";

interface Props {
  id: number;
  descriptionOne: string;
  descriptionTwo: string;
  contacts: ContactObj[];
  setContacts: React.Dispatch<React.SetStateAction<ContactObj[]>>;
}

export const SingleItemContact = (props: Props) => {
  return (
    <div className="bg-slate-300 flex flex-row items-center justify-around w-2/3 p-5 mt-20 mx-auto rounded-lg">
      <div>
        <span>{props.id}</span>
      </div>
      <div className="flex flex-row gap-5">
        <span>{props.descriptionOne}</span>
        <span>{props.descriptionTwo}</span>
      </div>
      <div className="flex flex-row gap-5">
        <Link to={`/editContact/${props.id}`}>
            <button className="bg-white p-1 rounded-md">
            <EditIcon />
            </button>
        </Link>
        <button onClick={(id) => {
            let newContacts = props.contacts.filter((contact) => contact.id !== props.id);
            props.setContacts(newContacts);
        }} className="bg-white p-1 rounded-md">
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};
