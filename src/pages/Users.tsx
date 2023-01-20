import React from "react";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { MainView } from "../components/MainView/MainView";
import { OneCard } from "../components/OneCard/OneCard"


export const Users = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full mt-20 ">
        users
      </div>
    </div>
  );
};
