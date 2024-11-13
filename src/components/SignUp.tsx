import { useEffect, useState } from "react";
import logo from "/imgs/logo.png";
import photos from "/imgs/photos.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const SignUp = () => {
  const navigate = useNavigate();
  const [select, setSelect] = useState(photos);
  const [name, setName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [pass, setPass] = useState<string>();
  const [conpass, setConPass] = useState<string>();
  const [img, setImg] = useState();

  const handImgClick = () => {
    document.getElementById("fileInput")?.click();
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // console.log(typeof file);
    setSelect(URL.createObjectURL(file));
    setImg(file);
  };
  function send(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    axios
      .post(
        "https://test1.focal-x.com/api/register",
        {
          first_name: name,
          last_name: lastName,
          user_name: `${name}_${lastName}`,
          email: email,
          password: pass,
          password_confirmation: conpass,
          profile_image: img,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        // console.log(res);

        localStorage.setItem("token", `Bearer ${res.data.data.token}`);
        localStorage.setItem("name", res.data.data.user.first_name);
        localStorage.setItem("lastName", res.data.data.user.last_name);
        localStorage.setItem("image", res.data.data.user.profile_image_url);
        // console.log(res.data);
        navigate("/");
      });
  }
  return (
    <div className="bgGrad w-full h-screen min-h-fit  flex justify-center items-center ">
      <div className="w-[33.056%] min-w-96 h-[710px] max-h-[95%] rounded-[20px] bg-white flex flex-col items-center justify-between pb-5 pt-[42px] pb- pl-[30.06px] pr-[21.04px]">
        <div className="flex flex-col items-center justify-between h-[20.834%]">
          <img src={logo} alt="focal..." className=" h-[30.38%] min-h-8" />
          <div className="flex flex-col items-center gap-2">
            <p className="font-semibold text-[22px] h-[27px]">SIGN UP</p>
            <p className="text-sm text-dgray  h-[17px]">
              Fill in the following fields to create an account.
            </p>
          </div>
        </div>
        <div className="w-full h-[75.463%] flex flex-col justify-between items-center">
          <form
            className="flex flex-col justify-between w-full h-[91.616%]"
            onSubmit={(event) => send(event)}
          >
            <div className="h-[15.402%]">
              <label className="text-dgray text-sm font-medium mb-[8px] h-[17px]">
                Name
              </label>
              <div className="flex justify-between  h-[63.77%] ">
                <input
                  type="text"
                  placeholder="First Name"
                  className=" w-[47.17%]  border border-solid border-[#E5E5E5] text-xs px-[15.03px] rounded-[4px]"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-[47.17%]  border border-solid border-[#E5E5E5] text-xs px-[15.03px]  rounded-[4px]"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className="h-[15.402%]">
              <label className="text-dgray text-sm font-medium mb-[8px] h-[17px]">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-[63.77%] border border-solid border-[#E5E5E5] text-xs px-[15.03px]  rounded-[4px]"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="h-[15.402%]">
              <label className="text-dgray text-sm font-medium mb-[8px] h-[17px]">
                Password
              </label>
              <div className="flex justify-between  h-[63.77%]">
                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-[47.17%]  border border-solid border-[#E5E5E5] text-xs px-[15.03px]  rounded-[4px]"
                  onChange={(e) => setPass(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Re-enter your password"
                  className="w-[47.17%]  border border-solid border-[#E5E5E5] text-xs px-[15.03px]  rounded-[4px]"
                  onChange={(e) => setConPass(e.target.value)}
                />
              </div>
            </div>
            <div className="h-[29.911%]">
              <label className="text-dgray text-sm font-medium mb-[17px] h-[17px]">
                Profile Image
              </label>
              <div className="cursor-pointer h-[74.63%]" onClick={handImgClick}>
                <img src={select} alt="profile..." className="h-full" />
              </div>
              <input
                type="file"
                id="fileInput"
                onChange={handleFileChange}
                accept="image/*" // Only accept image files
                className="hidden"
              />
            </div>

            <input
              type="submit"
              value="SIGN UP"
              className="bg-praymary text-white h-[9.822%] text-sm font-medium  rounded-[4px] active:bg-[#feae00d3]"
            />
          </form>
          <p className="text-sm text-dgray h-[17px]">
            Don you have an account?{" "}
            <span className=" text-praymary underline">
              <Link to="/signin">Sign in </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
