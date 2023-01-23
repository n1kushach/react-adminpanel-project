import React from "react";
import { useForm } from "react-hook-form";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

// ADD REACT SELECT
// import Select from "react-select"

interface Props {
  items: any;
  setItems: React.Dispatch<React.SetStateAction<any>>;
}

export const ItemsForm = (props: Props) => {
  const navigate = useNavigate();
  const navigateToItems = () => {
    navigate("/items");
  };

// FOR REACT SELECT

  // const options = [
  //   {value: "Good", label: "good"},
  //   {value: "Bad", label: "Bad"},
  //   {value: "Excellent", label: "Excellent"},
  // ]

  const schema = yup.object().shape({
    itemName: yup.string().required("Product name is required!"),
    itemStorage: yup
      .number()
      .positive()
      .typeError("Price must be string!")
      .required("Product description is required!"),
    itemPrice: yup
      .number()
      .typeError("Price must be number!")
      .positive("Price must be greater than 0!")
      .integer("Price must be a number!")
      .min(50)
      .required("Product price is required!"),
    itemPicture: yup
      .string()
      .typeError("Quantity must be number!")
      .required("Product picture is required!"),
    itemCondition: yup
      .string()
      .typeError("Condition must be string!")
      .min(3)
      .required("Product condition is required!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  }: any = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    data.id =
    props.items.length === 0
      ? 1
      : props.items[props.items.length - 1].id + 1;
    props.setItems([...props.items, data]);
    navigateToItems();
  };


  return (
    <div className="flex">
    <Sidebar />
    <div className="w-full mt-20 ">
      <form
        className="flex flex-col bg-slate-400 mx-auto gap-5 h-min w-3/4 p-20 rounded-md items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col items-center">
          <input
            className="bg-indigo-500 p-2 text-white placeholder:text-white placeholder:text-sm rounded-md border-white"
            type="text"
            placeholder="Item name..."
            {...register("itemName")}
          />
          <p className="text-red-600">{errors.itemName?.message}</p>
        </div>
        <div className="flex flex-col items-center">
          <input
            className="bg-indigo-500 p-2 h-28 text-white placeholder:text-white placeholder:text-sm rounded-md border-white"
            type="number"
            placeholder="Item Storage..."
            {...register("itemStorage")}
          />
          <p className="text-red-600">{errors.itemStorage?.message}</p>
        </div>
        <div className="flex flex-col items-center">
          <input
            className="bg-indigo-500 p-2 text-white placeholder:text-white placeholder:text-sm rounded-md border-white"
            type="number"
            placeholder="Item Price..."
            {...register("itemPrice")}
          />
          <p className="text-red-600">{errors.itemPrice?.message}</p>
        </div>
        <div className="flex flex-col items-center">
          <input
            className="bg-indigo-500 p-2 text-white placeholder:text-white placeholder:text-sm rounded-md border-white"
            type="text"
            placeholder="Item Condition..."
            {...register("itemCondition")}
          />
          <p className="text-red-600">{errors.itemCondition?.message}</p>
        </div>
        <div className="flex flex-col items-center">
          <input
            className="bg-indigo-500 p-2 text-white placeholder:text-white placeholder:text-sm rounded-md border-white"
            type="text"
            placeholder="Picture link..."
            {...register("itemPicture")}
          />
          <p className="text-red-600">{errors.itemPicture?.message}</p>
        </div>
        <div className="flex flex-row items-center justify-center w-full gap-5">
          <button
            onClick={navigateToItems}
            className="cursor-pointer bg-indigo-700 text-white w-[50px] p-2 w-fit rounded-lg"
          >
            X
          </button>
          <input
            className="cursor-pointer bg-indigo-700 text-white p-2 w-fit rounded-lg"
            type="submit"
          ></input>
        </div>
      </form>
    </div>
  </div>
  )
}

export default ItemsForm