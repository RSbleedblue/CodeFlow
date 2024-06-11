import { FaBusinessTime, FaCode, FaHtml5, FaLaptopCode, FaPencilAlt, FaShare } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Codeflow from '../../assets/Codeflow.png'
import StatsSub from "./subs/Stats";
import { FaProjectDiagram } from "react-icons/fa";
import {db} from '../utils/Firebase/firebaseConfig';
import { collection, getDocs } from "firebase/firestore";
import ProjectSub from "./subs/ProjectSub";


const UserHome = () => {
    const user = sessionStorage.getItem("email");
    const [userName, setUserName] = useState("");
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        getUserName();
        fetchProject(user);
    }, [user]);
    const getUserName = () => {
        const split = user.split("@");
        setUserName(split[0].charAt(0).toUpperCase());
    }
    const fetchProject = async(user)=>{
        try{
            console.log(user);
            const userDocRef = collection(db,"WebDev",user, "files");

            const query = await getDocs(userDocRef);
            const projectsLists = query.docs.map(doc=>(console.log(doc),{
                id:doc.id,
                ...doc.data()
            }));
            setProjects(projectsLists);
        }
        catch(e){
            console.log(e);
        }
    }
    const handleDelete = (Projectid)=> {
        setProjects(prevProjects => prevProjects.filter(project => project.id !== Projectid));
    }
    const stats = [
        {
            icon: <FaHtml5 className="text-xl" />,
            title: "Projects",
            value: projects.length,
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
                        <StatsSub key={idx} {...ele}  />
                    ))}
                </div>
                {/* Users Work */}
                <div className="w-full flex gap-2">
                    <div className="flex flex-col p-4 rounded-lg border border-solid p-1 border-opacity-10 border-gray-400 bg-codePlace w-[70%] gap-4 overflow-auto no-scrollbar h-screen">
                        <p className="text-2xl text-gray-400 flex gap-4 w-full items-center "><span className="text-xl"><FaProjectDiagram/></span>Projects</p>
                        {/* This part will go in loop */}
                        <div className="flex flex-wrap gap-10 items-center ">
                            {
                                projects.map((ele,idx) => (
                                    <ProjectSub data={ele} key={idx} onDelete={handleDelete}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserHome;
