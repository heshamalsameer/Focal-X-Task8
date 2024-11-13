import { useNavigate, useParams } from "react-router-dom";
import arrleft from "/imgs/Control.png";
import defaultImg from "/imgs/default.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Show = () => {
  const navigate = useNavigate();
  // const params = useParams();
  interface typeData {
    created_at: string;
    id: number;
    image_url: string;
    name: string;
    price: string;
    updated_at: string;
  }
  const [item, setItem] = useState<typeData>();
  const params = useParams();
  // const dispatch = useDispatch();
  const product = useSelector((state) => state.allProducts.products).filter(
    (item) => item.id == params.itemId
  )[0];

  useEffect(() => {
    console.log(product);

    setItem(product);
  }, []);
  // useEffect(() => {
  //   axios
  //     .get(`https://test1.focal-x.com/api/items/${params.itemId}`, {
  //       headers: { Authorization: localStorage.getItem("token") },
  //     })
  //     .then((res) => {
  //       setItem(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);
  return (
    <div className="w-[81.25%] pt-6 ">
      <div className=" mx-auto flex flex-col gap-[8.445vh]">
        <div className="ml-[5.491vw] cursor-pointer">
          <img src={arrleft} alt="" onClick={() => navigate("/")} />
        </div>
        <div className="flex flex-col justify-between h-[79.112vh]">
          <p className="font-semibold text-6xl h-[8.112vh] min-h-fit ml-[5.491vw]">
            {item?.name}
          </p>
          <div className="w-full">
            <img
              src={item?.image_url}
              alt="item..."
              onError={() =>
                setItem((items: any) => ({ ...items, image_url: defaultImg }))
              }
              className="h-[41.445vh] mx-auto "
            />
          </div>
          <div className="font-semibold text-6xl flex gap-x-[15.043%] gap-y-[4.445vh] justify-center flex-wrap">
            <div>
              Price:
              <span className="font-medium text-[40px] text-[#8080808C] ml-6">
                {item?.price}$
              </span>
            </div>
            <div className="">
              Added at:
              <span className="font-medium text-[40px] text-[#8080808C] ml-6">
                {`${item?.created_at.substring(
                  0,
                  4
                )}/${item?.created_at.substring(
                  5,
                  7
                )}/${item?.created_at.substring(8, 10)}`}
              </span>
            </div>
            <div>
              updated at:
              <span className="font-medium text-[40px] text-[#8080808C] ml-6">
                {`${item?.updated_at.substring(
                  0,
                  4
                )}/${item?.updated_at.substring(
                  5,
                  7
                )}/${item?.updated_at.substring(8, 10)}`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Show;
