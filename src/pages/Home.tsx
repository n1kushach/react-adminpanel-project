import React from "react";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { MainView } from "../components/MainView/MainView";

export const Home = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <MainView />
    </div>
  );
};
