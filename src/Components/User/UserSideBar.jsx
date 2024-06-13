import React from 'react';
import LogoComponent from "../Common/CommonLogo";
import { IoCode } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { RiLogoutCircleLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useDispatch} from "react-redux";
import { FaHtml5 } from "react-icons/fa";
import { logoutSuccess } from '../Redux/Slices/LoginSlice';

const UserMenu = () => {
    const dispatch = useDispatch();
    const handleLogOut = () => {
        dispatch(logoutSuccess());
        sessionStorage.clear();
    }

    return (
        <div className="w-[8%] p-2 flex flex-col fixed items-center rounded-2xl bg-black justify-between border border-gray-900 shadow-xl h-screen gap-4">
            <LogoComponent />
            <div className="flex items-center gap-1 mt-10">
                <svg className="h-10 w-10">
                    <use xlinkHref="#custom-logo" />
                </svg>
            </div>
            <div className="flex flex-col gap-4 w-full text-gray-500">
                <NavLink to="/user" className={`text-2xl w-full flex justify-center  hover:text-codeFlow `} end>
                    {({ isActive }) => (
                        <FaHome className={isActive ? "text-codeFlow border-l-codeFlow border-l text-2xl w-full flex justify-center  hover:text-codeFlow" : ""} />
                    )}
                </NavLink>
                <NavLink to="/user/web" className={`text-2xl w-full flex items-center justify-center hover:text-codeFlow`} >
                    {({ isActive }) => (
                        <FaHtml5 className={isActive ? "text-codeFlow border-l-codeFlow border-l text-2xl w-full flex justify-center  hover:text-codeFlow" : ""} />
                    )}
                </NavLink>
                <NavLink to="/user/coding" className={`text-2xl w-full flex items-center justify-center hover:text-codeFlow`} >
                    {({ isActive }) => (
                        <IoCode className={isActive ? "text-codeFlow border-l-codeFlow border-l text-2xl w-full flex justify-center  hover:text-codeFlow" : ""} />
                    )}
                </NavLink>
            </div>
            <div className='flex flex-col items-center gap-4'>
                <RiLogoutCircleLine className="text-gray-600 text-2xl hover:text-codeFlow cursor-pointer" onClick={handleLogOut} />
                <p className='text-gray-600 text-xs text-semibold'>V 1.0.1</p>
            </div>
        </div>
    );
};

export default UserMenu;
