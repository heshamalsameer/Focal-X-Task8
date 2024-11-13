import { useEffect, useState } from "react";
import arrleft from "/imgs/Control.png";
import add from "/imgs/add.png";
import icon from "/imgs/Upload icon.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProduct } from "../../Redux/actions/Actions.js";

const AddItem = () => {
  const navigate = useNavigate();
  const [select, setSelect] = useState(icon);
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [img, setImg] = useState();
  const dispatch = useDispatch();

  const handImgClick = () => {
    document.getElementById("fileInput")?.click();
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0];
    // console.log(typeof file);
    setSelect(URL.createObjectURL(file));
    setImg(file);
  };

  function send(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    axios
      .post(
        "https://test1.focal-x.com/api/items",
        {
          name: name,
          price: price,
          image: img,
        },

        {
          headers: {
            Authorization: localStorage.getItem("token"),
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        // console.log(res);
        dispatch(setProduct(res.data));
        navigate("/");
      });
    // console.log(name, price, img);
  }
  return (
    <div className="w-[81.25%] pt-6">
      <div className="w-[85.214%] mx-auto flex flex-col gap-[8.445vh]">
        <div className="cursor-pointer">
          <img src={arrleft} alt="" onClick={() => navigate("/")} />
        </div>
        <p className="font-semibold text-6xl h-[8.112vh] min-h-fit ">
          ADD NEW ITEM
        </p>
        <form
          action=""
          className="h-[49.223vh] w-full flex flex-col justify-between"
          onSubmit={(event) => send(event)}
        >
          <div className="h-[59.143%] flex justify-between items-center w-full ">
            <div className="h-full w-[41.7127%] flex flex-col justify-between">
              <div className="h-[37.787%]  flex flex-col justify-between">
                <label className="text-[32px] font-medium text-[#6C6C6C]  h-[39px]">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter the product name"
                  className="w-full h-[44.445%] border border-solid border-[#E5E5E5] text-[12px] pl-[15px] rounded"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="h-[37.787%]  flex flex-col justify-between">
                <label className="text-[32px] font-medium text-[#6C6C6C]  h-[39px]">
                  Price
                </label>
                <input
                  type="text"
                  placeholder="Enter the product price"
                  className="w-full h-[44.445%] border border-solid border-[#E5E5E5] text-[12px] pl-[15px] rounded"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>
            <div className="h-full w-[54.865%]">
              <label className="text-[32px] font-medium text-[#6C6C6C]  h-[39px]">
                Image
              </label>
              <div
                className="cursor-pointer h-[79.771%] w-full relative"
                onClick={handImgClick}
              >
                <img src={add} alt="profile..." className="h-full w-full" />
                <img
                  src={select}
                  alt="profile..."
                  className="h-[51.675%] w-[21.938%] absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
                />
              </div>
              <input
                type="file"
                id="fileInput"
                onChange={handleFileChange}
                accept="image/*" // Only accept image files
                className="hidden"
              />
            </div>
          </div>
          <input
            type="submit"
            value="Save"
            className="bg-praymary cursor-pointer text-white h-[13.77%] w-[19.96%] text-[32px] font-medium  rounded-[4px] mx-auto active:bg-[#feae00d3]"
          />
        </form>
      </div>
    </div>
  );
};

export default AddItem;
