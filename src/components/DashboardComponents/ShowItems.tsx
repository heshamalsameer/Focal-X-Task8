import { useEffect, useState } from "react";
import search from "/imgs/search.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Products from "./items/Products";
import PageNumber from "./items/PageNumber";
import PagesNumbers from "./items/PagesNumbers";
import Dialog from "./Dialog";
import { useDispatch } from "react-redux";
import { setProducts } from "../../Redux/actions/Actions.js";

const ShowItems = () => {
  const navigate = useNavigate();
  interface typeData {
    created_at: string;
    id: number;
    image_url: string;
    name: string;
    price: string;
    updated_at: string;
  }
  const [data, setData] = useState<Array<typeData>>([]);
  const [main, setMain] = useState<Array<typeData>>([]);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const responce = await axios
      .get("https://test1.focal-x.com/api/items", {
        headers: {
          Authorization: localStorage.getItem("token"),
          Accept: "application/json",
        },
      })
      .catch((err) => {
        console.log("Err", err);
      });
    // console.log(responce.data);
    setData(responce.data);
    setMain(responce.data);
    dispatch(setProducts(responce.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // useEffect(() => {
  //   axios
  //     .get("https://test1.focal-x.com/api/items", {
  //       headers: {
  //         Authorization: localStorage.getItem("token"),
  //         Accept: "application/json",
  //       },
  //     })
  //     .then((res) => {
  //       setData(res.data);
  //       setMain(res.data);
  //       // dispatch(data);
  //       console.log(res.data);
  //     })
  //     .catch((error) => console.log(error));
  //   // dispatch(data);
  // }, []);

  const searchfun = (event: string) => {
    let a = main.filter((element) =>
      element.name.toLowerCase().includes(event.toLowerCase())
    );
    setData(a);
    console.log(a);
    console.log(main);
  };
  const [count, setCount] = useState(0);
  let current = count;
  function moveSlider(dircition: string) {
    if (dircition == "next") {
      if (current !== Math.ceil(data.length / 8) - 1) current++;
    }
    if (dircition == "prev") {
      if (current !== 0) current--;
    }
    const slide = document.querySelector(".slide") as HTMLElement;
    let move = -current * 100;
    slide.style.transform = `translateX(${move}%)`;
    setCount(current);
  }
  const changeslide = (ind: number) => {
    setCount(ind);
    current = ind;
    const slide = document.querySelector(".slide") as HTMLElement;
    let move = -current * 100;
    slide.style.transform = `translateX(${move}%)`;
  };
  const [dialog, setDialog] = useState();
  return (
    <div className="relative w-[81.25%] pt-6">
      <div className="flex flex-col items-center w-[81.368%] mx-auto">
        <div className="relative mb-[5.3334vh]">
          <input
            type="text"
            placeholder="Search product by name "
            className="w-[46.112vw] h-[4.445vh] pl-[1.11vw] text-sm border border-solid border-[#E5E5E5]"
            onChange={(event) => searchfun(event.target.value)}
          />
          <img
            src={search}
            alt="search..."
            className="absolute h-[40%] top-[30%] right-[2.11%]"
          />
        </div>
        <div className="flex justify-end w-full mb-[3.5556vh]">
          <button
            className="w-[13.82vw] h-[4.89vh] min-w-[166px] min-h-fit bg-praymary text-white text-sm font-medium active:bg-[#feae00d3]"
            onClick={() => navigate("/addItem")}
          >
            ADD NEW PRODUCT
          </button>
        </div>
        <div className="w-full overflow-hidden mb-[8.889vh] h-[50.667vh]">
          <div className="flex w-full  slide transition-all duration-700">
            <Products data={data} dialog={setDialog} />
          </div>
        </div>
        <div className="flex gap-[5px]">
          <PageNumber value="<" fun={moveSlider} />
          <PagesNumbers
            data={data}
            fun={changeslide}
            count={count}
            setCount={setCount}
          />
          <PageNumber value=">" fun={moveSlider} />
        </div>
      </div>
      {dialog ? <Dialog dialog={dialog} setDialog={setDialog} /> : null}
    </div>
  );
};

export default ShowItems;
