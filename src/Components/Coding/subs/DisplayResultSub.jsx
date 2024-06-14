import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaCode, FaEye, FaFileCode, FaHeart } from "react-icons/fa";

const DisplayResultSub = ({ data }) => {
    const formatEmail = data.userEmail ? data.userEmail.split("@")[0] : null;
    const webDevCode = data.webDevCode ? data.webDevCode : "<p>No content available</p>";
    const [isLiked, setIsLiked] = useState(false);

    const handleLikeToggle = () => {
        setIsLiked(!isLiked);
    };

    const handleShowCode = () => {
        const isLoggedIn = sessionStorage.getItem("");
        // Handle showing code
    };

    return (
        <div className="w-[24%] rounded-lg bg-codePlace hover:bg-gray-800  flex items-center justify-center transition-all ease-in-out">
            <div className="w-[99%] h-[99%] flex flex-col rounded-lg bg-codePlace cursor-pointer">
                <iframe
                    srcDoc={webDevCode}
                    className="rounded-t-lg h-[300px] p-2"
                    title="projectPreview"
                />
                <div className="flex items-center gap-2 p-2 text-sm text-gray-500 w-full justify-between">
                    <div className="flex gap-2">
                        <FaFileCode className="text-lg" />
                        <p>{data.documentName}</p>
                    </div>
                    <p className="text-xs">{data.timeUploaded}</p>
                </div>
                <div className="flex items-center justify-between gap-2 p-2 text-gray-500">
                    <div className="flex gap-2 items-center">
                        <FaHeart 
                            className={`${isLiked ? "text-codeFlow" : ""} hover:text-codeFlow`} 
                            onClick={handleLikeToggle}
                        />
                        <FaEye className="hover:text-white" />
                        <FaCode className="hover:text-gray-300" onClick={handleShowCode}/>
                    </div>
                    <div className="flex gap-2 items-center">
                        <CgProfile />
                        {formatEmail}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayResultSub;
