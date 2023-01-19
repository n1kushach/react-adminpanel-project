import React from "react";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { MainView } from "../components/MainView/MainView";
import { SingleItem } from "../components/SingleItem/SingleItem";


export const Inventory = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <div>
          <SingleItem id={1} descriptionOne={"Nike Shoes"} descriptionTwo={"250USD"} />
        </div>
      </div>
    </div>
  );
};
