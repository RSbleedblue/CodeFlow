import { FaBusinessTime, FaCode, FaHtml5, FaLaptopCode, FaPencilAlt, FaShare } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Codeflow from '../../assets/Codeflow.png'
import StatsSub from "./subs/Stats";
import { FaEye } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";

const stats = [
    {
        icon: <FaHtml5 className="text-xl" />,
        title: "Projects",
        value: 24,
    },
    {
        icon: <FaLaptopCode className="text-xl" />,
        title: "Programs",
        value: 291,
    },
    {
        icon: <FaBusinessTime className="text-xl" />,
        title: "Time Spent",
        value: "14 hrs",
    }
]

const UserHome = () => {
    const user = useSelector((state) => state.user.email);
    const [userName, setUserName] = useState("");

    useEffect(() => {
        getUserName();
    }, []);

    const getUserName = () => {
        const split = user.split("@");
        setUserName(split[0].charAt(0).toUpperCase());
    }

    return (
        <>
            <div className='text-white w-full flex gap-2 flex-col p-2 items-start mt-2 '>
                {/* Header */}
                <div className='p-2 flex justify-between w-full items-center mt-2 mb-2'>
                    <div className="flex items-center gap-2">
                        <img src={Codeflow} className='w-14 h-10' alt="Codeflow" />
                        <p className="text-3xl text-gray-200 font-extrathin">Welcome</p>
                    </div>
                    <p className="w-8 h-8 p-4 rounded-full bg-codeFlow flex justify-center items-center text-xl cursor-pointer hover:scale-105 transition-all text-white">{userName}</p>
                </div>
                {/* Stats */}
                <div className="w-[80%] flex gap-2">
                    {stats.map((ele, idx) => (
                        <StatsSub key={idx} {...ele} />
                    ))}
                </div>
                {/* Users Work */}
                <div className="w-full flex gap-2">
                    <div className="flex flex-col p-4 rounded-lg bg-codePlace w-[70%] gap-4 overflow-auto no-scrollbar h-screen">
                        <p className="text-2xl text-gray-400 flex gap-4 w-full items-center "><span className="text-xl"><FaProjectDiagram/></span>Projects</p>
                        {/* This part will go in loop */}
                        <div className="flex flex-wrap gap-4 items-start justify-center">
                            <div className="flex flex-col rounded-2xl hover:scale-105 gap-4 hover:shadow-lg transform transition-all w-[30%]">
                                <p className="text-xl text-gray-400 bg-black p-3 rounded-lg">Title: <span className="text-lg text-codeFlow">PreLoader</span></p>
                                <iframe srcDoc={`<html> <body><!DOCTYPE html> <h1 class="styling">All the Best</h1></body> <style> body { color: #ffffff; } .styling{ background-color:palevioletred; } </style> <script></script> </html>`} />
                                <div className="flex gap-2 bg-black p-4 rounded-lg">
                                    <button className="text-xl text-gray-400 hover:text-white"><FaEye /></button>
                                    <button className="text-xl text-gray-400 hover:text-white"><FaCode /></button>
                                    <button className="text-xl text-gray-400 hover:text-white"><FaShare /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserHome;
