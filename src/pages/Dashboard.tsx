import React from "react";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { MainView } from "../components/MainView/MainView";


export const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full mt-20 ">Dashboard</div>
    </div>
  );
};
