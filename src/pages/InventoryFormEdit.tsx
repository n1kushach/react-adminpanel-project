import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, useParams } from "react-router-dom";

interface Props {
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

export const InventoryFormEdit = (props: Props) => {
  const navigate = useNavigate();
  const params = useParams();
  const id = Number(params.id);


  const navigateToInventory = () => {
    navigate("/inventory");
  };

  const schema = yup.object().shape({
    productName: yup.string().required("Product name is required!"),
    productDescription: yup
      .string()
      .typeError("Price must be string!")
      .required("Product description is required!"),
    productPrice: yup
      .number()
      .typeError("Price must be number!")
      .positive("Price must be greater than 0!")
      .integer("Price must be a number!")
      .min(50)
      .required("Product price is required!"),
    productQuantity: yup
      .number()
      .typeError("Quantity must be number!")
      .positive("Quantity must be greater than 0!")
      .integer("Quantity must be a number!")
      .min(1)
      .required("Product quantity is requirede!"),
    productCondition: yup
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

  const checkId = (id: number) => {
    const check = (obj: { id: number; }) => obj.id === id;
    return props.inventory.some(check);
  }

  checkId(id);

  const onSubmit = (data: any) => {
      data.id = id;
        //ADD EDITSTATE
        props.setInventory(
          [...props.inventory].map((object) => {
            if (object.id == id) {
              return data;
            } else return object;
          })
        );
    navigateToInventory();
  };

  return (
    <div>
      {checkId(id) === true ?     <div className="flex">
    <Sidebar />
    <div className="w-full mt-20 ">
      <form
        className="flex flex-col bg-slate-400 mx-auto gap-5 h-min w-3/4 p-20 rounded-md items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1>EDIT</h1>
        <div className="flex flex-col items-center">
          <input
            className="bg-indigo-500 p-2 text-white placeholder:text-white placeholder:text-sm rounded-md border-white"
            type="text"
            placeholder="Product name..."
            {...register("productName")}
          />
          <p className="text-red-600">{errors.productName?.message}</p>
        </div>
        <div className="flex flex-col items-center">
          <input
            className="bg-indigo-500 p-2 h-28 text-white placeholder:text-white placeholder:text-sm rounded-md border-white"
            type="text"
            placeholder="Description..."
            {...register("productDescription")}
          />
          <p className="text-red-600">{errors.productDescription?.message}</p>
        </div>
        <div className="flex flex-col items-center">
          <input
            className="bg-indigo-500 p-2 text-white placeholder:text-white placeholder:text-sm rounded-md border-white"
            type="number"
            placeholder="Price..."
            {...register("productPrice")}
          />
          <p className="text-red-600">{errors.productPrice?.message}</p>
        </div>
        <div className="flex flex-col items-center">
          <input
            className="bg-indigo-500 p-2 text-white placeholder:text-white placeholder:text-sm rounded-md border-white"
            type="number"
            placeholder="Quantity..."
            {...register("productQuantity")}
          />
          <p className="text-red-600">{errors.productQuantity?.message}</p>
        </div>
        <div className="flex flex-col items-center">
          <input
            className="bg-indigo-500 p-2 text-white placeholder:text-white placeholder:text-sm rounded-md border-white"
            type="text"
            placeholder="Condition..."
            {...register("productCondition")}
          />
          <p className="text-red-600">{errors.productQuantity?.message}</p>
        </div>
        <div className="flex flex-row items-center justify-center w-full gap-5">
          <button
            onClick={navigateToInventory}
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
  </div>: <h1 className="text-center">FALSE</h1>}
  </div>
  );
};
