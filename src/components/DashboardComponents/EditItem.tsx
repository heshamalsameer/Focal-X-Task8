import axios from "axios";
import React, { useEffect, useState } from "react";
import arrleft from "/imgs/Control.png";
import add from "/imgs/add.png";
import icon from "/imgs/Upload icon.png";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateProduct } from "../../Redux/actions/Actions.js";

const EditItem = () => {
  const [select, setSelect] = useState<string | undefined>(icon);
  const [name, setName] = useState<string | undefined>();
  const [price, setPrice] = useState<string | undefined>();
  const params = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.allProducts.products).filter(
    (item) => item.id == params.itemId
  )[0];

  useEffect(() => {
    console.log(product);

    setSelect(product.image_url);
    setName(product.name);
    setPrice(product.price);
  }, []);
  // useEffect(() => {
  //   axios
  //     .get(`https://test1.focal-x.com/api/items/${params.itemId}`, {
  //       headers: {
  //         Authorization: localStorage.getItem("token"),
  //         Accept: "application/json",
  //       },
  //     })
  //     .then((res) => {
  //       setSelect(res.data.image_url);
  //       setName(res.data.name);
  //       setPrice(res.data.price);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  const navigate = useNavigate();
  const [img, setImg] = useState();

  const handImgClick = () => {
    document.getElementById("fileInput")?.click();
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    // console.log(typeof file);
    if (file) {
      setSelect(URL.createObjectURL(file));
      setImg(file);
    }
  };
  function send(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    axios
      .post(
        `https://test1.focal-x.com/api/items/${params.itemId}`,
        {
          name: name,
          price: price,
          image: img,
          _method: "PUT",
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
        // console.log(res.data);
        dispatch(updateProduct(res.data));

        navigate("/");
      });
  }
  return (
    <div className="w-[81.25%] pt-6">
      <div className="w-[85.214%] mx-auto flex flex-col gap-[8.445vh]">
        <div className="cursor-pointer">
          <img src={arrleft} alt="" onClick={() => navigate("/")} />
        </div>
        <p className="font-semibold text-6xl h-[8.112vh] min-h-fit ">
          Edit ITEM
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
                  defaultValue={name}
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
                  defaultValue={price}
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
                  className="h-full  absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
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
            className="bg-praymary text-white h-[13.77%] w-[19.96%] text-[32px] font-medium  rounded-[4px] mx-auto"
          />
        </form>
      </div>
    </div>
  );
};

export default EditItem;
