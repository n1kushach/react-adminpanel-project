import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import "../../../src/App.css"

// SINGLE ITEM FOR INVENTORY PAGE

interface Props {
  id: number;
  descriptionOne: string;
  descriptionTwo: string;
  inventory: any;
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

export const SingleItem = (props: Props) => {

  const link = `/inventoryForm/${props.id}`;

  const handleDelete = (id: number) => {
    const newInventory = props.inventory.filter((item: any) => item.id !== id);
    props.setInventory(newInventory);
  };

  return (
    <div className="bg-slate-300 customgrid w-2/3 p-5 mx-auto rounded-lg">
      <div className="flex items-center justify-center">
        <span>{props.id}</span>
      </div>
      <div className="flex flex-row items-center gap-5 justify-center">
        <span>{props.descriptionOne}</span>
        <span>{props.descriptionTwo}</span>
      </div>
      <div className="flex flex-row items-center justify-center gap-5">
        <Link to={link}>
          <button className="bg-white p-1 rounded-md">
            <EditIcon />
          </button>
        </Link>
        <button
          onClick={() => handleDelete(props.id)}
          className="bg-white p-1 rounded-md"
        >
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};
