import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NoProjects from "../Coding/subs/NoProjects";
import DisplaySearchResults from "../Coding/subs/DisplaySearchResults";

const CommonSearchPage = () => {
    const projects = useSelector((state) => state.user.projects);
    const search = useSelector((state)=> state.user.searchProjects);
    return(
        <>
            <div className="w-full h-[84vh] p-2 rounded-lg bg-black">
                {
                    search.length === 0 ? <NoProjects/>:<DisplaySearchResults/>
                }
            </div>
        </>
    )
}
export default CommonSearchPage;
