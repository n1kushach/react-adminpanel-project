import React from "react";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { MainView } from "../components/MainView/MainView";

export const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <MainView />
    </div>
  );
};
