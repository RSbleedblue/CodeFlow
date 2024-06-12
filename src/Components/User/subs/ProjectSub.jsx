import { deleteDoc, doc } from "firebase/firestore";
import { useState } from "react";
import { FaCode, FaShare } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import { db } from "../../utils/Firebase/firebaseConfig";
import codeFlow from '../../../assets/Codeflow.png'
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeOption } from "../../Redux/Slices/UserSlice";

const ProjectSub = ({ data, onDelete }) => {
    const [isDeleting, setIsDeleting] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleDelete = async () => {
        setIsDeleting(true);
        toast.promise(
            async () => {
                const userEmail = sessionStorage.getItem("email");
                const docRef = doc(db, "WebDev", userEmail, "files", data.id);
                await deleteDoc(docRef);
                onDelete(data.id);
            },
            {
                pending: {
                    render() {
                        return "Deleting...";
                    },
                    icon: <img src={codeFlow} />,
                    theme: "dark",
                    autoClose: 3000,
                },
                success: {
                    render() {
                        return "File successfully deleted ";
                    },
                    icon: <img src={codeFlow} />,
                    theme: "dark",
                    autoClose: 1000,
                },
                error: {
                    render() {
                        return "Error deleting the file ";
                    },
                    icon: <img src={codeFlow} />,
                    theme: "dark"
                },
            }
        ).finally(() => {
            setIsDeleting(false);
        });
    };
    const handleShowCode = () => {
        console.log(data);
        sessionStorage.setItem("HTMLcode",data.HTMLcode);
        sessionStorage.setItem("JScode",data.JScode);
        sessionStorage.setItem("CSScode",data.CSScode);
        sessionStorage.setItem("DocumentName",data.documentName);
        dispatch(changeOption("web"));
        navigate("web");
    }

    return (
        <>
            <div className="flex flex-col rounded-2xl border border-solid p-1 border-opacity-10 border-gray-400  hover:scale-105 hover:bg-gray-900 transform transition-all w-[30%] shadow-lg cursor-pointer delay-75">
                <p className="text-sm text-gray-600 bg-gray-900 p-3 rounded-t-lg ">
                    Title: <span className="text-sm text-gray-400">{data.documentName}</span>
                </p>
                <iframe srcDoc={`${data.webDevCode}`} />
                <div className="flex gap-4 bg-gray-900 p-4 rounded-b-lg">
                    <button
                        className="text-xl text-gray-600 hover:text-codeFlow"
                        onClick={handleDelete}
                        disabled={isDeleting}
                    >
                        <MdDelete />
                    </button>
                    <button className="text-xl text-gray-600 hover:text-white" onClick={handleShowCode} ><FaCode /></button>
                    <button className="text-xl text-gray-600 hover:text-white"><FaShare /></button>
                </div>
            </div>
            <ToastContainer stacked></ToastContainer>
        </>
    );
};

export default ProjectSub;
