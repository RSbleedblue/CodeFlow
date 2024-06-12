import { FaBusinessTime, FaCode, FaHtml5, FaLaptopCode, FaPencilAlt, FaShare } from "react-icons/fa";
import { FaFileCode } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { IoIosCode } from "react-icons/io";
import Codeflow from '../../assets/Codeflow.png'
import StatsSub from "./subs/Stats";
import { FaProjectDiagram } from "react-icons/fa";
import { db } from '../utils/Firebase/firebaseConfig';
import { collection, doc, getDocs } from "firebase/firestore";
import { SiCodeforces } from "react-icons/si";
import ProjectSub from "./subs/ProjectSub";
import { MdDelete } from "react-icons/md";
import ProgramSub from "./subs/ProgramSub";


const UserHome = () => {
    const user = sessionStorage.getItem("email");
    const [userName, setUserName] = useState("");
    const [projects, setProjects] = useState([]);
    const [programs, setPrograms] = useState([]);
    useEffect(() => {
        getUserName();
        fetchProject(user);
        fetchPrograms(user);
    }, [user]);
    console.log(programs);
    const getUserName = () => {
        const split = user.split("@");
        setUserName(split[0].charAt(0).toUpperCase());
    }
    const fetchProject = async (user) => {
        try {
            console.log(user);
            const userDocRef = collection(db, "WebDev", user, "files");

            const query = await getDocs(userDocRef);
            const projectsLists = query.docs.map(doc => (console.log(doc), {
                id: doc.id,
                ...doc.data()
            }));
            setProjects(projectsLists);
        }
        catch (e) {
            console.log(e);
        }
    }
    const fetchPrograms = async (user) => {
        try {
            const userDocRef = collection(db, "Coding", user, "files");
            const query = await getDocs(userDocRef);
            const programsList = query.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setPrograms(programsList);
        }
        catch (e) {
            console.log(e);
        }
    }
    const handleProjectDelete = (Projectid) => {
        setProjects(prevProjects => prevProjects.filter(project => project.id !== Projectid));
    }
    const handleProgramDelete = (Programid) => {
        setPrograms(prevPrograms => prevPrograms.filter(program => program.id !== Programid));
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
            value: programs.length,
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
                        <StatsSub key={idx} {...ele} />
                    ))}
                </div>
                {/* Users Work */}
                <div className="w-full flex gap-2">
                    <div className="flex flex-col p-4 rounded-lg border border-solid  border-opacity-10 border-gray-400 bg-codePlace w-[70%] gap-4 overflow-auto no-scrollbar h-screen">
                        <p className="text-2xl text-gray-400 flex gap-4 w-full items-center "><span className="text-xl"><FaProjectDiagram /></span>Projects</p>
                        {/* This part will go in loop */}
                        <div className="flex flex-wrap gap-10 items-center ">
                            {
                                projects.map((ele, idx) => (
                                    <ProjectSub data={ele} key={idx} onDelete={handleProjectDelete} />
                                ))
                            }
                        </div>
                    </div>
                    <div className="flex flex-col p-4 rounded-lg border border-solid  border-opacity-10 border-gray-400 bg-codePlace w-[30%] gap-4 overflow-auto no-scrollbar h-screen">
                        <p className="text-2xl text-gray-400 flex gap-4 w-full items-center "><span className="text-xl"><FaFileCode /></span>Programs</p>
                        {/* Loop From here */}
                            {
                                programs.map((ele,idx)=>(
                                    <ProgramSub data={ele} key={idx} onDelete={handleProgramDelete} />
                                ))
                            }
                        {/* End */}
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserHome;
