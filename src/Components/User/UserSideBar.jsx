import React from 'react';
import LogoComponent from "../Common/CommonLogo";
import { IoCode } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { RiLogoutCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaHtml5 } from "react-icons/fa";
import { changeOption } from '../Redux/Slices/UserSlice';
import { logoutSuccess } from '../Redux/Slices/LoginSlice';

const UserMenu = () => {
    const dispatch = useDispatch();
    const selectedOption = useSelector((state) => state.user.selectedOption);
    const handleSelection = (str) => {
        dispatch(changeOption(str));
    }
    const handleLogOut = () => {
        dispatch(logoutSuccess());
    }

    return (
        <div className="w-[8%] p-2 flex flex-col items-center rounded-2xl bg-black justify-between border border-gray-900 shadow-xl h-screen gap-4">
            <LogoComponent />
            <div className="flex items-center gap-1 mt-10">
                <svg className="h-10 w-10">
                    <use xlinkHref="#custom-logo" />
                </svg>
            </div>
            <div className="flex flex-col gap-4 w-full text-gray-500">
                <Link to="/user/" className={` text-2xl w-full flex items-center justify-center  hover:text-codeFlow ${selectedOption === 'home' ? "text-codeFlow border-l-codeFlow border-l-2" : ""}`} onClick={()=>handleSelection("home")}>
                    <FaHome />
                </Link>
                <Link to="/user/web" className={`text-2xl w-full flex items-center justify-center hover:text-codeFlow ${selectedOption === 'web' ? "text-codeFlow border-l-codeFlow border-l" : ""}`}onClick={()=>handleSelection("web")}>
                    <FaHtml5 />
                </Link>
                <Link to="/user/coding" className={`text-2xl w-full flex items-center justify-center hover:text-codeFlow ${selectedOption === 'coding' ? "text-codeFlow border-l-codeFlow border-l" : ""}`}onClick={()=>handleSelection("coding")}>
                    <IoCode />
                </Link>
            </div>
            <div>
                <RiLogoutCircleLine className="text-gray-600 text-2xl hover:text-codeFlow cursor-pointer" onClick={handleLogOut} />
            </div>
        </div>
    );
};

export default UserMenu;
