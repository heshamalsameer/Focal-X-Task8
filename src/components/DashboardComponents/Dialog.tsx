import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../Redux/actions/Actions.js";
import { useSelector } from "react-redux";

const Dialog = ({ dialog, setDialog }: { dialog: number; setDialog: any }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.allProducts.products).filter(
    (item) => item.id == dialog
  )[0];

  console.log(product, dialog);

  const deletItem = () => {
    axios
      .delete(`https://test1.focal-x.com/api/items/${dialog}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
          Accept: "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        setDialog(null);
        dispatch(deleteProduct(product));
        window.location.reload();
      });
  };
  return (
    <div
      className="relative z-50"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-500 backdrop-blur-[30px] bg-[#00000080] bg-opacity-50 transition-opacity"
        aria-hidden="true"
      ></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative bg-white w-[65.8334vw] h-[35.667vh] py-[8.889vh] flex flex-col justify-between">
            <p className="text-[22px] font-semibold">
              Are you sure you want to delete the product?
            </p>
            <div className="w-[61.92%] h-[37.889%] mx-auto flex justify-between">
              <button
                className="w-[33.90%] h-full bg-praymary text-white text-[32px] font-medium"
                onClick={deletItem}
              >
                Yes
              </button>
              <button
                className="w-[33.90%] h-full bg-praymary text-white text-[32px] font-medium"
                onClick={() => setDialog(null)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
