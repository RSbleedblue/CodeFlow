import { useSelector } from "react-redux";
import LogoComponent from "./CommonLogo";
import { toast } from "react-toastify";
import codeFlow from '../../assets/Codeflow.png';
import { NavLink, useNavigate } from "react-router-dom";
import { FaHome, FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";

const Menu = () => {
    const navigate = useNavigate();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        setIsLogged(isLoggedIn);
    }, [isLoggedIn]);

    const handleCoding = () => {
        if (!isLogged) {
            toast.dark("Log In First!", {
                icon: <img src={codeFlow} />,
            });
            return;
        }
        navigate("/user/web");
    };

    return (
        <>
            <div className="w-[15%] p-2 flex flex-col items-center rounded-2xl bg-black border border-gray-900 shadow-xl h-screen gap-4 justify-between">
                <div className="flex flex-col gap-10 items-center">
                    <LogoComponent />
                    <div className="flex items-center gap-1 mt-10">
                        <p className="text-white flex items-center text-xl gap-1">C <span>
                            <svg className="h-6 w-6">
                                <use xlinkHref="#custom-logo" />
                            </svg>
                        </span></p>
                        <p className="text-white text-xl">DEFLOW</p>
                    </div>
                    <p className="text-gray-400 text-[12px] font-mono -mt-8">Try our Online Editor</p>
                    <button className="rounded-md bg-gradient-to-r from-red-600 via-red-500 to-yellow-600 p-1 hover:from-yellow-600 hover:via-red-500 hover:to-red-600 transition-all">
                        <div className="bg-gray-800 hover:bg-gray-900 transition-all cursor-pointer" onClick={handleCoding}>
                            <h1 className="text-sm font-mono text-white p-4">Workspace</h1>
                        </div>
                    </button>
                </div>
                <div className="flex flex-col w-full gap-4 items-center justify-center">
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => 
                            isActive ? "text-codeFlow flex justify-center gap-2 p-2 border-l-2 border-codeFlow w-full cursor-pointer transition-all" 
                                     : "text-gray-500 flex items-center gap-2 p-2 border-l-2 justify-center border-gray-400 border-opacity-0 hover:border-codeFlow w-full hover:text-codeFlow cursor-pointer transition-all"
                        }
                    >
                        <span className="text-xl"><FaHome/></span>Home
                    </NavLink>
                    <NavLink 
                        to="search" 
                        className={({ isActive }) => 
                            isActive ? "text-codeFlow flex items-center gap-2 p-2 border-l-2 justify-center border-codeFlow w-full cursor-pointer transition-all" 
                                     : "text-gray-500 flex items-center gap-2 p-2 border-l-2 justify-center border-gray-400 border-opacity-0 hover:border-codeFlow w-full hover:text-codeFlow cursor-pointer transition-all"
                        }
                    >
                        <span className="text-xl"><FaSearch /></span>Search 
                    </NavLink>
                </div>
                <div className="text-gray-600 text-xs">
                    V 1.0.1
                </div>
            </div>
        </>
    );
};

export default Menu;
