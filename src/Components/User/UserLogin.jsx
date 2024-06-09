import LogoComponent from "../Common/CommonLogo";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import LoginSub from "./subs/loginSub";
import LoginPage from "./subs/LoginPage";
import { useState } from "react";
import SignUpPage from "./subs/SignUpPage";

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
  const [isLoginSelected, setisLoginSelected] = useState(true);
  const handleSwitch = () => {
    setisLoginSelected(!isLoginSelected);
  }

  return (
    <>
      <div className="w-full h-full bg-black border border-gray-900 rounded-lg p-6 flex flex-col items-center">
        <LogoComponent />
        <div className="w-[70%] flex">
          <div className="flex flex-col w-[40%] items-start">
            <div className="flex items-center gap-1 mt-10 text-3xl font-semibold">
              <p className="text-gray-700 flex items-center gap-1">
                C
                <span>
                  <svg className="h-8 w-8">
                    <use xlinkHref="#custom-logo" />
                  </svg>
                </span>
              </p>
              <p className="text-gray-700">DEFLOW</p>
            </div>
            <div className="text-white text-[60px] font-bold mb-10">{isLoginSelected?"Log In":"Sign UP"}</div>
            {loginTypeData.map((item, index) => (
              <LoginSub type={item} key={index} />
            ))}

            <p className=" text-gray-400 mt-4 text-sm flex items-center gap-2">New user?  <button className="text-codeFlow" onClick={handleSwitch}>Click here</button></p>
          </div>
          {
            isLoginSelected ? (
              <LoginPage />) : <SignUpPage/>
          }
        </div>

      </div>

    </>
  );
};

export default UserLogin;
