import { useNavigate } from "react-router-dom";
import defaultImg from "/imgs/default.png";
import { useState } from "react";
const Product = ({
  id,
  img,
  name,
  dialog,
}: {
  id: number;
  img: string;
  name: string;
  dialog: any;
}) => {
  const navigate = useNavigate();
  const [src, setSrc] = useState(img);

  return (
    <div className="relative h-[23.112vh] w-fit min-w-fit shadow[8px_8px_4px_0px_#00000040]  rounded-2xl ">
      <img
        src={src}
        alt="product..."
        className="h-[23.112vh] w-[23.112vh] rounded-2xl"
        onError={() => setSrc(defaultImg)}
      />
      <div className="absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center gap-[3.556vh] bg-[#F2EAE1B2] opacity-0 hover:opacity-100 rounded-2xl  ">
        <div
          className="absolute w-full h-full top-0 left-0 cursor-pointer"
          onClick={() => navigate(`/show/${id}`)}
        ></div>
        <p
          className=" text-3xl font-medium cursor-pointer text-center"
          onClick={() => navigate(`/show/${id}`)}
        >
          {name}
        </p>
        <div className="h-[16.347%] w-[81.731%] flex justify-between">
          <button
            className="w-[47.648%] h-full min-w-fit min-h-fit bg-praymary z-10 rounded text-white text-sm"
            onClick={() => navigate(`/edit/${id}`)}
          >
            Edit
          </button>
          <button
            className="w-[47.648%] h-full min-w-fit min-h-fit bg-[#FE0000] z-10 rounded text-white text-sm"
            onClick={() => dialog(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
