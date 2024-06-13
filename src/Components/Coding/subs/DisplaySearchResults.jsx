import { FaCode, FaEye, FaFileCode, FaHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { LuFileSearch } from "react-icons/lu";
import { useSelector } from "react-redux";
import DisplayResultSub from "./DisplayResultSub";

const DisplaySearchResults = () => {
    const allProjects = useSelector((state) => state.user.projects) || [];
    const searchVal = useSelector((state) => state.user.searchProjects) || '';

    const resultProjects = [];
    for(let i = 0; i < allProjects.length; i++){
        if(allProjects[i].documentName.toLowerCase().includes(searchVal.toLowerCase())){
            resultProjects.push(allProjects[i]);
        }
    }
    console.log("This is all result projects: ", resultProjects);
    console.log(allProjects);
    return (
        <div className="text-white w-full flex flex-col p-4 gap-10">
            <p className="text-xl text-gray-600"><span><LuFileSearch/></span>Search Results</p>
            <div className="flex flex-wrap w-full gap-3">
                {
                    resultProjects.length > 0
                        ? resultProjects.map((each, idx) => (
                            <DisplayResultSub data={each} key={idx} />
                        ))
                        : <p className="text-gray-400">No results found</p>
                }
            </div>
        </div>
    );
};

export default DisplaySearchResults;
