import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import InventoryIcon from "@mui/icons-material/Inventory";
import GroupIcon from "@mui/icons-material/Group";
import CategoryIcon from "@mui/icons-material/Category";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { red } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const color = red[50];
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.clear()
    navigate("/")
  }

  return (
    <div className="w-auto md:h-screen md:w-[350px] bg-gray-700">
      <Link to="/">
        <div className="text-center mt-5">
          <span className="text-white mb-1">ADMIN PANEL</span>
        </div>
      </Link>
      <hr className="mt-5"></hr>
      <div className="mt-5 md:flex-col flex flex-row">
        <ul className="flex flex-row gap-10 md:flex-col mx-auto md:mx-0">
          <Link to="/dashboard">
            <li className="flex flex-row items-center p-4 gap-5 cursor-pointer hover:bg-sky-800">
              <HomeIcon sx={{ color: color }} />
              <span className="hidden md:flex text-white">Dashboard</span>
            </li>
          </Link>
          <Link to="/inventory">
            <li className="flex flex-row items-center p-4 gap-5 cursor-pointer hover:bg-sky-800">
              <InventoryIcon sx={{ color: color }} />
              <span className="hidden md:flex text-white">Inventory</span>
            </li>
          </Link>
          <Link to="/items">
            <li className="flex flex-row items-center p-4 gap-5 cursor-pointer hover:bg-sky-800">
              <CategoryIcon sx={{ color: color }} />
              <span className="text-white hidden md:flex">Items</span>
            </li>
          </Link>
          <Link to="/users">
            <li className="flex flex-row items-center p-4 gap-5 cursor-pointer hover:bg-sky-800">
              <GroupIcon sx={{ color: color }} />
              <span className="text-white hidden md:flex">Users</span>
            </li>
          </Link>
          <Link to="/contacts">
            <li className="flex flex-row items-center p-4 gap-5 cursor-pointer hover:bg-sky-800">
              <ContactPageIcon sx={{ color: color }} />
              <span className="text-white hidden md:flex">Contacts</span>
            </li>
          </Link>
        </ul>
      </div>
      <div onClick={() => handleLogOut()} className="text-center mt-5 text-white cursor-pointer">
        LOG OUT
      </div>
    </div>
  );
};
