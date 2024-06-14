import { FaProjectDiagram } from "react-icons/fa";
import { useSelector } from "react-redux";
import DisplayResultSub from "../Coding/subs/DisplayResultSub";
const CommonExplore = () => {
    const allProjects = useSelector((state) => state.user.projects) || [];
    return (
        <>
              <div className="w-full  bg-black border border-gray-900 rounded-lg p-6 flex flex-col ">
                
                <p className="text-gray-500 flex items-center gap-2 text-2xl "><span><FaProjectDiagram/></span>Projects</p>
               <div className="w-full flex flex-wrap gap-4 p-6 ">
               {
                    allProjects.length > 0 ? (
                        allProjects.map((project, index) => (
                            <DisplayResultSub data={project} key={index}/>
                        ))
                ) : <p>No Projects to display</p>
                }

               </div>
            </div>
        </>
    )
}
export default CommonExplore;