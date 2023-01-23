import React, { SetStateAction } from "react";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { MainView } from "../components/MainView/MainView";
import { OneCard } from "../components/OneCard/OneCard";
import { Link } from "react-router-dom";

interface Props {
  items: any;
  setItems: React.Dispatch<SetStateAction<any>>;
}

export const Items = (props : Props) => {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="w-full mt-20 p-2">
        <div className="w-3/4 mx-auto">
          <Link to="/itemsForm">
            <button className="rounded-sm bg-green-500 text-white mt-5 p-3 hover:bg-green-800">
              New Item
            </button>
          </Link>
          <div className="wrapper customgrid gap-x-4 gap-y-4">
            {props.items.map((item: any) => {
              return <OneCard items={props.items} setItems={props.setItems} id={item.id} itemName={item.itemName} itemStorage={item.itemStorage} itemPrice={item.itemPrice} itemPicture={item.itemPicture} itemCondition={item.itemCondition}/>
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
