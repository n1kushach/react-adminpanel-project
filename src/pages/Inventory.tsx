import React from "react";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { MainView } from "../components/MainView/MainView";
import { SingleItem } from "../components/SingleItem/SingleItem";
import { Link } from "react-router-dom";

interface Props {
  inventory: any
    
  setInventory: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        productName: string;
        productDescription: string;
        productPrice: number;
        productQuantity: number;
        productCondition: string;
      }[]
    >
  >;
}

export const Inventory = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <div className="w-full">
        <div className="mx-auto w-3/4">
          <Link to="/inventoryForm">
            <button className="rounded-sm bg-green-500 text-white mt-5 p-3 hover:bg-green-800">
              New Inventory Item
            </button>
          </Link>
        </div>
        <div className="mt-20 flex flex-col gap-5">
          {props.inventory.map((item: any, index:any) => {
            return (
              <SingleItem key={index} setInventory={props.setInventory} inventory={props.inventory} id={item.id} descriptionOne={item.productName} descriptionTwo={item.productPrice}/>
            )
          })}
        </div>
      </div>
    </div>
  );
};
