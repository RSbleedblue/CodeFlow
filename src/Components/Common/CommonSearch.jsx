import { useState } from "react";
import { CiSearch } from "react-icons/ci";
const Search = () => {
    const [search, setSearch] = useState("");
    return (
        <>
            <div className="w-full  text-white p-6 bg-black flex items-center  border border-gray-900 rounded-lg justify-between">
                <div className="flex border border-solid border-gray-900 w-[60%] items-center p-2 rounded-lg">
                    <CiSearch className="text-2xl text-gray-500" />
                    <input className="bg-transparent p-2 focus:outline-none text-gray-500 text-sm w-full " value={search} onChange={(e) => setSearch(e.target.value)}></input>
                </div>
                <div className="flex gap-2 items-center">
                    <button className="bg-rose-800 p-2 rounded-lg">Log In</button>
                    
                    <button className="bg-gray-800 p-2 rounded-lg">Sign Up</button>
                </div>
            </div>
        </>
    )
}
export default Search;