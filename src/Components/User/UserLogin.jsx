import LogoComponent from "../Common/CommonLogo";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import LoginSub from "./subs/loginSub";
import { useState } from "react";
import { Button, Input, Typography } from "@material-tailwind/react";
const loginTypeData = [
  {
    logo: <FaGoogle className="text-red-500 text-3xl" />,
    text: "Login with Google",
    name: "google",
  },
  {
    logo: <FaGithub className="text-white text-3xl" />,
    text: "Login with Github",
    name: "github",
  },
  {
    logo: <FaFacebook className="text-blue-800 text-3xl" />,
    text: "Login with Facebook",
    name: "facebook",
  },
];
const UserLogin = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  return (
    <>
      <div className="w-full h-full bg-black border border-gray-900 rounded-lg p-6 flex flex-col items-center">
        <LogoComponent />
        <div className="w-[70%] flex">
          <div className="flex flex-col w-[40%]">
            <div className="flex items-center gap-1 mt-10 text-3xl font-semibold">
              <p className="text-gray-700 flex items-center  gap-1">
                C{" "}
                <span>
                  <svg className="h-8 w-8">
                    <use xlinkHref="#custom-logo" />
                  </svg>
                </span>
              </p>
              <p className=" text-gray-700">DEFLOW</p>
            </div>
            <div className="text-white text-[60px] font-bold mb-10">Log In</div>
            {loginTypeData.map((item, index) => (
              <LoginSub type={item} key={index} />
            ))}
          </div>
          <div className="text-white mt-[20%] flex flex-col gap-10 w-[40%]">
            <Input
              variant="standard"
              label="Username"
              placeholder="username or email"
              className="text-white::placeholder opacity-50 text-3xl"
              color="white"
              height={"100%"}
              width={"100%"}
              value={userName}
              onChange={(e)=>setUserName(e.target.value)}
            />
            <div>
              <Input
                variant="standard"
                type="password"
                label="Password"
                className="text-white::placeholder opacity-50 text-3xl"
                color="white"
                size="100%"
                value={userPassword}
                onChange={(e)=>setUserPassword(e.target.value)}
              />
              <Typography
                variant="small"
                color="gray"
                className="mt-2 flex items-center gap-1 font-normal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="-mt-px h-4 w-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clipRule="evenodd"
                  />
                </svg>
                Use at least 8 characters, one uppercase, one lowercase and one
                number.
              </Typography>
            </div>
            <Button
              variant="text"
              className="rounded-full text-white border border-solid"
              color="white"
            >
              LogIn
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserLogin;
