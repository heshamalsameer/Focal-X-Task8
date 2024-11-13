import logo from "/imgs/logo.png";
import personal from "/imgs/personall.png";
import cubs from "/imgs/cubs.png";
import favorites from "/imgs/favorites.png";
import order from "/imgs/order.png";
import logoutt from "/imgs/logout.png";
import Item from "./Item";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const SideBar = () => {
  const navigate = useNavigate();
  const [src, setSrc] = useState(localStorage.getItem("image"));
  const menu: Array<{ img: string; title: string }> = [
    { img: cubs, title: "Products" },
    { img: favorites, title: "Favorites" },
    { img: order, title: "order list" },
  ];
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };
  return (
    <div className="w-[18.75%] min-w-fit h-full bg-[#F2EAE1] pl-[39px] pr-[38px] pt-[35px] pb-[31px] flex flex-col items-center justify-between">
      <div className="h-[29.497%] w-full flex flex-col items-center justify-between">
        <img src={logo} alt="logo..." className="h-[23px]" />
        <div className="h-[68.7%] min-w-fit  flex flex-col items-center justify-between">
          <img
            src={src}
            alt="personal.."
            className="w-[8.889vw] rounded-full"
            onError={() => setSrc(personal)}
          />
          <p className="text-[17px] font-bold text-center h-[21px]">
            {`${localStorage
              .getItem("name")
              ?.substring(0, 1)
              .toUpperCase()}${localStorage
              .getItem("name")
              ?.substring(1)} ${localStorage
              .getItem("lastName")
              ?.substring(0, 1)
              .toUpperCase()}${localStorage.getItem("lastName")?.substring(1)}`}
          </p>
        </div>
      </div>
      <div className="h-[59.593%] w-full flex flex-col justify-between items-center">
        <div className="flex flex-col gap-[22px] w-full">
          {menu.map((item, ind) => (
            <Item img={item?.img} title={item?.title} ind={ind} key={ind} />
          ))}
        </div>

        <button className="flex gap-[23px] items-center" onClick={logout}>
          <p className="text-sm font-medium">Logout</p>
          <img src={logoutt} alt="logout..." />
        </button>
      </div>
    </div>
  );
};

export default SideBar;
