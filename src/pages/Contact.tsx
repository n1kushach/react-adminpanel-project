import React from "react";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { MainView } from "../components/MainView/MainView";


export const Contact = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full mt-20 ">Contact</div>
    </div>
  );
};
