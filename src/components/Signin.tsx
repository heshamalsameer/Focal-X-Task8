import { useState } from "react";
import logo from "/imgs/logo.png";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function send(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    axios
      .post("https://test1.focal-x.com/api/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("token", `Bearer ${res.data.token}`);
        localStorage.setItem("name", res.data.user.first_name);
        localStorage.setItem("lastName", res.data.user.last_name);
        localStorage.setItem("image", res.data.user.profile_image_url);
        console.log(res.data);
        navigate("/");
      });
  }
  return (
    <div className="bgGrad w-full h-screen min-h-fit  flex justify-center items-center ">
      <div className="w-[33.056%] min-w-96 h-[550px] max-h-[85%] rounded-[20px] bg-white flex flex-col items-center justify-between pb-[41px] pt-[42px]  px-[30.06px]">
        <div className="flex flex-col items-center justify-between h-[29.337%]">
          <img
            src={logo}
            alt="focal..."
            className=" h-[29.928%] w-[10.5084vw] min-h-8"
          />
          <div className="flex flex-col items-center gap-2">
            <p className="font-semibold text-[22px] h-[27px]">SIGN IN</p>
            <p className="text-sm text-dgray  h-[17px]">
              Enter your credentials to access your account
            </p>
          </div>
        </div>
        <div className="w-full h-[59.958%] flex flex-col justify-between items-center">
          <form
            className="flex flex-col justify-between w-full h-[84.286%]"
            onSubmit={(event) => send(event)}
          >
            <div className="h-[30.085%]">
              <label className="text-dgray text-sm font-medium mb-[8px] h-[17px]">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-[61.972%] border border-solid border-[#E5E5E5] text-xs px-[15.03px]  rounded-[4px]"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="h-[30.085%]">
              <label className="text-dgray text-sm font-medium mb-[8px] h-[17px]">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full h-[61.972%] border border-solid border-[#E5E5E5] text-xs px-[15.03px]  rounded-[4px]"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <input
              type="submit"
              value="SIGN IN"
              className="bg-praymary cursor-pointer text-white h-[18.6441%] text-sm font-medium  rounded-[4px] active:bg-[#feae00d3]"
            />
          </form>
          <p className="text-sm text-dgray h-[17px]">
            Don you have an account?{" "}
            <span className=" text-praymary underline ">
              <Link to="/signup">create one </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
