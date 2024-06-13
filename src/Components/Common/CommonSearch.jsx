import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { loginSelected } from "../Redux/Slices/LoginSlice";
import { useNavigate } from "react-router-dom";

const Search = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
       navigate("login");
    }

    return (
        <div className="w-full text-white p-6 bg-black flex items-center border border-gray-900 rounded-lg justify-between">
            <div className="flex border border-solid border-gray-900 w-[60%] items-center p-2 rounded-lg">
                <CiSearch className="text-2xl text-gray-500" />
                <input
                    className="bg-transparent p-2 focus:outline-none text-gray-500 text-sm w-full"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div className="flex gap-3 items-center">
                <button
                    className="bg-codeFlow p-2 rounded-lg hover:scale-105 transition-all"
                    onClick={handleLogin}
                >
                    Login
                </button>
            </div>
        </div>
    );
}

export default Search;
