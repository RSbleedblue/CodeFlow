
import { FaCode, FaDumpster, FaEye, FaShare } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const ProjectSub = ({data}) => {
    const handleDelete = () => {
        console.log("delete",data.id);
    }
    return (
        <>
            <div className="flex flex-col rounded-2xl hover:scale-105 gap-4 hover:shadow-lg transform transition-all w-[30%] shadow-xl">
                <p className="text-xl text-gray-600 bg-gray-900 p-3 rounded-lg">Title: <span className="text-lg text-gray-400">{data.documentName}</span></p>
                <iframe srcDoc={`${data.webDevCode}`} />
                <div className="flex gap-2 bg-gray-900 p-4 ">
                    <button className="text-xl text-gray-400 hover:text-white" onClick={handleDelete}><MdDelete /></button>
                    <button className="text-xl text-gray-400 hover:text-white" ><FaCode /></button>
                    <button className="text-xl text-gray-400 hover:text-white"><FaShare /></button>
                </div>
            </div>

        </>
    )
}
export default ProjectSub;