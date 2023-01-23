import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { UserObj } from "../../Interfaces/UserObj";
import { Link } from "react-router-dom";

interface Props {
  id: number;
  descriptionOne: string;
  descriptionTwo: string;
  users: UserObj[];
  setUsers: React.Dispatch<React.SetStateAction<UserObj[]>>;
}

export const SingleItemUser = (props: Props) => {
  return (
    <div className="bg-slate-300 flex flex-row items-center justify-between w-2/3 p-5 mt-20 mx-auto min-w-[425px] rounded-lg ">
      <div className="flex flex-row gap-5">
        <span>{props.id}</span>
        <span>{props.descriptionOne}</span>
        <span>{props.descriptionTwo}</span>
      </div>
      <div className="flex flex-row gap-5">
        <Link to={`/editUser/${props.id}`}>
            <button className="bg-white p-1 rounded-md">
            <EditIcon />
            </button>
        </Link>
        <button onClick={(id) => {
            let newUsers = props.users.filter((user) => user.id !== props.id);
            props.setUsers(newUsers);
        }} className="bg-white p-1 rounded-md">
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};
