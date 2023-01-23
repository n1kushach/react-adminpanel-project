import React from "react";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { MainView } from "../components/MainView/MainView";
import { UserObj } from "../Interfaces/UserObj";
import { useNavigate } from "react-router-dom";
import {SingleItemUser} from "../components/SingleItem/SingleItemUser";

interface Props {
  users: UserObj[];
  setUsers: React.Dispatch<React.SetStateAction<UserObj[]>>;
}


export const Users = ({users, setUsers} : Props) => {

  let navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <div className="flex-col w-full  ">
        <button className="bg-stone-600 h-min" onClick={() => {navigate('/editUser')}}>Add User</button>
        <div className="flex flex-col">
          {users.map((user) => {
            return (
              <SingleItemUser id={user.id} descriptionOne={user.firstName} descriptionTwo={user.lastName} users={users} setUsers={setUsers}/>
            );
          })}
        </div>
      </div>
    </div>
  );
};
