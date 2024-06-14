import { IoIosSettings } from "react-icons/io";
import { CiCircleChevDown } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/Firebase/firebaseConfig";
import { loadProjects } from "../Redux/Slices/UserSlice";
import { useNavigate } from "react-router-dom";
import DisplayResultSub from "../Coding/subs/DisplayResultSub";

const Landing = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const projects = useSelector((state) => state.user.projects);

    const handleLogin = () => {
        navigate("login");
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const query = await getDocs(collection(db, "Public"));
                const projectData = [];
                query.forEach((doc) => {
                    projectData.push(doc.data());
                });
                dispatch(loadProjects(projectData));
                console.log(projectData);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [dispatch]);

    return (
        <>
            <svg style={{ display: 'none' }}>
                <defs>
                    <symbol id="custom-logo" viewBox="0 0 60 60">
                        <path fill="#FF156D" d="M43.594,12.5c-9.046,0-16.406,7.851-16.406,17.5c0,6.341-4.836,11.5-10.781,11.5S5.625,36.341,5.625,30
                            s4.836-11.5,10.781-11.5c2.146,0,4.218,0.67,5.992,1.938c0.593,0.425,1.147,0.911,1.645,1.445c1.061,1.136,2.914,1.14,3.977,0.009
                            c1.099-1.167,1.103-3.07,0.009-4.243c-0.76-0.813-1.601-1.552-2.499-2.194c-2.704-1.933-5.858-2.954-9.124-2.954
                            C7.36,12.5,0,20.351,0,30s7.36,17.5,16.406,17.5S32.812,39.649,32.812,30c0-6.341,4.836-11.5,10.781-11.5S54.375,23.659,54.375,30
                            s-4.836,11.5-10.781,11.5c-2.879,0-5.586-1.195-7.622-3.366c-1.062-1.133-2.915-1.133-3.978,0c-0.531,0.567-0.823,1.32-0.823,2.121
                            c0,0.802,0.293,1.556,0.824,2.121c3.098,3.305,7.218,5.124,11.599,5.124C52.64,47.5,60,39.649,60,30S52.64,12.5,43.594,12.5z"/>
                    </symbol>
                </defs>
            </svg>
            <div className="w-full h-[84vh]  bg-black border border-gray-900 rounded-lg flex relative">
                <div className="flex flex-col p-10 w-[50%] gap-10">
                    <div className="flex gap-5">
                        <svg className="h-20 w-20">
                            <use xlinkHref="#custom-logo" />
                        </svg>
                        <p className="text-gray-100 text-3xl font-semibold w-[60%] text-sans">
                            Dive into front-end development's ultimate playground for building, testing, and discovering code.
                        </p>
                    </div>
                    <div>
                        <p className="text-gray-400 text-sm text-justify">
                            CodeFlow revolutionizes the front-end development experience, offering a social environment for designers and developers. Create and deploy websites, showcase your brilliance, develop and debug test cases, and ignite your inspiration.
                        </p>
                    </div>
                    <button className="bg-gray-800 p-2 rounded-lg hover:scale-105 transition-all text-white w-[40%]" onClick={handleLogin}>
                        Try it For free
                    </button>
                </div>
                <div className="flex flex-col">
                    <div className="bg-gray-900 z-10 p-4 h-[400px] w-[500px] rounded-lg mt-16 absolute"></div>
                    <div className="text-white mt-10 z-20 ml-[50%] relative bg-black rounded-lg p-2 w-[300px] h-[150px] flex flex-col cursor-pointer hover:scale-105 transition-all">
                        <div className="flex justify-between">
                            <div className="flex gap-2 items-center">
                                <IoIosSettings className="text-2xl text-gray-500" />
                                <p className="text-sm text-gray-500 font-semibold">HTML</p>
                            </div>
                            <div>
                                <CiCircleChevDown className="text-2xl text-gray-500" />
                            </div>
                        </div>
                        <div className="text-white">
                            <pre className="rect p-2 rounded-lg text-sm overflow-auto">
                                <code>
                                    <span className="text-gray-500">&lt;!-- HTML Code --&gt;</span><br />
                                    <span className="text-pink-500">&lt;div</span> <span className="text-yellow-500">class</span>=<span className="text-green-500">"container"</span><span className="text-pink-500">&gt;</span><br />
                                    &nbsp;&nbsp;<span className="text-pink-500">&lt;p&gt;</span><span className="text-white">Hello, world!</span><span className="text-pink-500">&lt;/p&gt;</span><br />
                                    <span className="text-pink-500">&lt;/div&gt;</span>
                                </code>
                            </pre>
                        </div>
                    </div>
                    <div className="text-white mt-2 z-20 ml-[30%] relative bg-black rounded-lg p-2 w-[300px] h-[180px] flex flex-col cursor-pointer hover:scale-105 transition-all">
                        <div className="flex justify-between">
                            <div className="flex gap-2 items-center">
                                <IoIosSettings className="text-2xl text-gray-500" />
                                <p className="text-sm text-gray-500 font-semibold">CSS</p>
                            </div>
                            <div>
                                <CiCircleChevDown className="text-2xl text-gray-500" />
                            </div>
                        </div>
                        <div className="text-white">
                            <pre className="rect p-2 rounded-lg text-sm overflow-auto">
                                <code className="typing-container">
                                    <span className="text-gray-500">/* CSS Code */</span><br />
                                    <span className="text-pink-500">.container</span> <span className="text-yellow-500">{'{'}</span><br />
                                    &nbsp;&nbsp;<span className="text-yellow-500">background-color</span>: <span className="text-green-500">#f0f0f0</span>;<br />
                                    &nbsp;&nbsp;<span className="text-yellow-500">color</span>: <span className="text-green-500">#333</span>;<br />
                                    &nbsp;&nbsp;<span className="text-yellow-500">padding</span>: <span className="text-green-500">20px</span>;<br />
                                    <span className="text-yellow-500">{'}'}</span>
                                </code>
                            </pre>
                        </div>
                    </div>
                    <div className="text-white mt-2 z-20 ml-[50%] relative bg-black rounded-lg p-2 w-[300px] h-[180px] flex flex-col cursor-pointer hover:scale-105 transition-all">
                        <div className="flex justify-between">
                            <div className="flex gap-2 items-center">
                                <IoIosSettings className="text-2xl text-gray-500" />
                                <p className="text-sm text-gray-500 font-semibold">JS</p>
                            </div>
                            <div>
                                <CiCircleChevDown className="text-2xl text-gray-500" />
                            </div>
                        </div>
                        <div className="text-white mt-2">
                            <pre className="rect p-2 rounded-lg text-sm overflow-auto">
                                <code>
                                    <span className="text-gray-500">// JavaScript Code</span><br />
                                    <span className="text-pink-500">const</span> <span className="text-blue-500">greet</span> <span className="text-pink-500">=</span> <span className="text-yellow-500">()</span> <span className="text-pink-500">=</span> <span className="text-yellow-500">{'{'}</span><br />
                                    &nbsp;&nbsp;<span className="text-blue-500">console</span>.<span className="text-green-500">log</span><span className="text-pink-500">(</span><span className="text-green-500">'Hello, world!'</span><span className="text-pink-500">);</span><br />
                                    <span className="text-yellow-500">{'}'}</span>;<br />
                                    <span className="text-blue-500">greet</span><span className="text-pink-500">();</span>
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>
                <img className="absolute w-[450px] right-0 top-0 z-0 opacity-80" src="https://cpwebassets.codepen.io/assets/packs/lines-2-4e66616a5ef291c3566a7ddfe1ffaaa8.svg" alt="Background decoration" />
            </div>
        </>
    );
}

export default Landing;
