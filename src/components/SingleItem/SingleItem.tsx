import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface Props {
  id: number;
  descriptionOne: string;
  descriptionTwo: string;
}

export const SingleItem = (props: Props) => {
  return (
    <div className="bg-slate-300 flex flex-row items-center justify-around w-2/3 p-5 mt-20 mx-auto rounded-lg">
      <div>
        <span>{props.id}</span>
      </div>
      <div className="flex flex-row gap-5">
        <span>{props.descriptionOne}</span>
        <span>{props.descriptionTwo}</span>
      </div>
      <div className="flex flex-row gap-5">
        <button className="bg-white p-1 rounded-md">
          <EditIcon />
        </button>
        <button className="bg-white p-1 rounded-md">
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};
