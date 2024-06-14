import { useState } from "react";
import { CgClose, CgProfile } from "react-icons/cg";
import { FaCode, FaEye, FaFileCode, FaHeart } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import codeFlow from '../../../assets/Codeflow.png';
import { Modal, Paper, Button, IconButton, Grow } from "@mui/material";

const DisplayResultSub = ({ data }) => {
    const formatEmail = data.userEmail ? data.userEmail.split("@")[0] : null;
    const webDevCode = data.webDevCode ? data.webDevCode : "<p>No content available</p>";
    const [isLiked, setIsLiked] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleLikeToggle = () => {
        setIsLiked(!isLiked);
    };

    const handleShowCode = () => {
        const isLoggedIn = sessionStorage.getItem("isLoggedIn");
        if (isLoggedIn) {
            console.log("clicked");
            toast.dark("Log In First!", {
                icon: <img src={codeFlow}/>
            },
            { position: "top-center", autoClose: 2000 });
            return;
        }
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
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
                            <FaEye className="hover:text-white" onClick={openModal} />
                            <FaCode className="hover:text-gray-300" onClick={handleShowCode}/>
                        </div>
                        <div className="flex gap-2 items-center">
                            <CgProfile />
                            {formatEmail}
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                open={isModalOpen}
                onClose={closeModal}
                className="transition-all"
                sx={{
                    "& .MuiDialog-paper": {
                        padding: 0,
                    },
                }}
            >
                <Grow in={isModalOpen}>
                    <Paper className="modal-paper" sx={{ overflow: "hidden" }}>
                        <IconButton
                            aria-label="close"
                            onClick={closeModal}
                            sx={{ position: "absolute", right: 8, top: 8, color: (theme) => theme.palette.grey[500] }}
                        >
                            <CgClose className="text-white text-3xl"/>
                        </IconButton>
                        <iframe
                            srcDoc={webDevCode}
                            className="w-full h-[80vh] p-2"
                            title="projectPreviewModal"
                        />
                    </Paper>
                </Grow>
            </Modal>
        </>
    );
};

export default DisplayResultSub;
