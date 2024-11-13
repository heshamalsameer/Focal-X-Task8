import SideBar from "./DashboardComponents/SideBar/SideBar";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
// import axios from "axios";

export const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) navigate("/signin");
  }, []);
  return (
    <div className="w-screen h-screen flex">
      <SideBar />
      <Outlet />
    </div>
  );
};
