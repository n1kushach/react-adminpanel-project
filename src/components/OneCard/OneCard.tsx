import React, { SetStateAction } from "react";
import "../../../src/App.css";

// SINGLE ITEM FOR ITEMS PAGE

interface Props {
  itemName: string;
  itemStorage: string;
  itemPrice: number;
  itemCondition: string;
  itemPicture: string;
  id: number;
  items: any;
  setItems: React.Dispatch<SetStateAction<any>>;
}

export const OneCard = (props: Props) => {

  const handleDelete = (id: number) => {
    const newItems = props.items.filter((item: any) => item.id !== id);
    props.setItems(newItems);
  }

  return (
    <div className="flex justify-center border p-2 rounded-lg">
      <div className="flex flex-col items-center gap-2">
        <img className="customImg" src={props.itemPicture}></img>
        <h2 className="font-bold">
          {props.itemName} - {props.itemStorage} GB
        </h2>
        <h2>{props.itemPrice}$</h2>
        <h2>Condition - {props.itemCondition}</h2>
        <div className="flex flex-row justify-center gap-5 mt-5">
          <button className="bg-slate-400 p-2 rounded-sm text-white">Edit</button>
          <button onClick={() => handleDelete(props.id)} className="bg-red-600 p-2 text-white rounded-sm">Delete</button>
        </div>
      </div>
    </div>
  );
};
