import { deleteDoc, doc } from "firebase/firestore";
import { FaCode, FaShare } from "react-icons/fa";
import { IoIosCode } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { SiCodeforces } from "react-icons/si";
import { ToastContainer, toast } from "react-toastify";
import codeFlow from '../../../assets/Codeflow.png';
import 'react-toastify/dist/ReactToastify.css';
import { db } from "../../utils/Firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

const ProgramSub = ({ data,onDelete }) => {
    const navigate = useNavigate();
    const handleDelete = async() => {
        toast.promise(
            async() => {
                const userEmail = sessionStorage.getItem("email");
                const docRef = doc(db,"Coding",userEmail,"files",data.id);
                await deleteDoc(docRef);
                onDelete(data.id);
            },
            {
                pending:{
                    render(){
                        return "Deleting...";
                    },
                    icon: <img src = {codeFlow}/>,
                    theme: "dark",
                    autoClose:3000,
                },
                success: {
                    render(){
                        return "File successfully deleted";
                    },
                    icon: <img src = {codeFlow}/>,
                    theme: "dark",
                    autoClose: 1000,
                },
                error: {
                    render(){
                        return "Error Deleting the file";
                    },
                    icon: <img src={codeFlow}/>,
                    theme:"dark",
                    autoClose: 1000,
                }
            }
        ).finally(()=>{
            console.log("process done");
        })
    }
    const handleShowCode = () => {
        sessionStorage.setItem("codeData",data.codeData);
        sessionStorage.setItem("language",data.language);
        sessionStorage.setItem("codingFileName",data.documentName);
        sessionStorage.setItem("ProgramCodeID",data.id);
        navigate("coding");
    }
    return (
        <>
            <div className="flex flex-col text-gray-400 w-full  p-1 gap-2 border-l-2 border-gray-400 border-opacity-30 hover:shadow-xl transition-all cursor-pointer hover:border-codeFlow" onClick={handleShowCode}>
                <p className="flex items-center gap-2"><span className=" text-2xl"><IoIosCode /></span>{data.documentName}</p>
                <div className="w-[80%] flex justify-between">
                    <div className="flex gap-1 items-center ml-[10%]">
                        <button className="text-xs text-gray-400 hover:text-codeFlow" onClick={handleDelete}><MdDelete /></button>
                        <button className="text-xs text-gray-400 hover:text-white" onClick={handleShowCode}><FaCode /></button>
                        
                    </div>
                    <p className="text-sm flex items-center gap-2"><span className="text-sm"><SiCodeforces /></span>{data.language.toUpperCase()}</p>
                </div>
            </div>
            <ToastContainer stacked/>
        </>
    )
}
export default ProgramSub;