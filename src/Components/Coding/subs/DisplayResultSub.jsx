import { useState } from "react";
import { CgClose, CgProfile } from "react-icons/cg";
import { FaCode, FaCss3, FaCss3Alt, FaEye, FaFileCode, FaHeart, FaHtml5, FaJs } from "react-icons/fa";
import { Modal, Paper, IconButton, Grow } from "@mui/material";
import { Editor } from "@monaco-editor/react";

const DisplayResultSub = ({ data }) => {
    const formatEmail = data.userEmail ? data.userEmail.split("@")[0] : null;
    const webDevCode = data.webDevCode ? data.webDevCode : "<p>No content available</p>";
    const JScode = data.JScode;
    const HTMLcode = data.HTMLcode;
    const CSScode = data.CSScode;
    const [isLiked, setIsLiked] = useState(false);
    const [isViewModalOpen, setisViewModalOpen] = useState(false);
    const [isCodeModalOpen, setIsCodeModalOpen] = useState(false);

    const handleLikeToggle = () => {
        setIsLiked(!isLiked);
    };

    const handleShowCode = () => {
        setIsCodeModalOpen(true);
    };

    const OpenModalView = () => {
        setisViewModalOpen(true);
    };

    const closeViewModal = () => {
        setisViewModalOpen(false);
    };

    const closeCodeModal = () => {
        setIsCodeModalOpen(false);
    };

    return (
        <>
            <div className="w-[24%] rounded-lg bg-codePlace hover:bg-gray-800 flex items-center justify-center transition-all ease-in-out">
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
                            <FaEye className="hover:text-white" onClick={OpenModalView} />
                            <FaCode className="hover:text-gray-300" onClick={handleShowCode} />
                        </div>
                        <div className="flex gap-2 items-center">
                            <CgProfile />
                            {formatEmail}
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                open={isViewModalOpen}
                onClose={closeViewModal}
                className="transition-all"
                sx={{
                    "& .MuiDialog-paper": {
                        padding: 0,
                    },
                }}
            >
                <Grow in={isViewModalOpen}>
                    <Paper className="modal-paper" sx={{ overflow: "hidden" }}>
                        <IconButton
                            aria-label="close"
                            onClick={closeViewModal}
                            sx={{ position: "absolute", right: 8, top: 8, color: (theme) => theme.palette.grey[500] }}
                        >
                            <CgClose className="text-white text-3xl" />
                        </IconButton>
                        <iframe
                            srcDoc={webDevCode}
                            className="w-full h-[80vh] p-2"
                            title="projectPreviewModal"
                        />
                    </Paper>
                </Grow>
            </Modal>
            <Modal
                open={isCodeModalOpen}
                onClose={closeCodeModal}
                className="transition-all"
            >
                <Grow in={isCodeModalOpen}>
                    <Paper className="modal-paper" sx={{ maxHeight: '100vh', overflowY: 'auto' }}>
                        <IconButton
                            aria-label="close"
                            onClick={closeCodeModal}
                            sx={{ position: "absolute", right: 8, top: 8, color: (theme) => theme.palette.grey[600] }}
                        >
                            <CgClose className="text-white text-3xl" />
                        </IconButton>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-black p-3">
                            <div className="flex flex-col items-center">
                                <div className="text-gray-400 flex items-center justify-center text-2xl gap-2 mb-2">
                                    <FaHtml5/>
                                    <h2 className="text-lg">HTML</h2>
                                </div>
                                <Editor
                                    height="60vh"
                                    language="html"
                                    value={HTMLcode}
                                    options={{
                                        readOnly: true,
                                        minimap: { enabled: false },
                                    }}
                                    theme="vs-dark"
                                />
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="text-gray-400 flex items-center justify-center text-2xl gap-2 mb-2">
                                    <FaCss3Alt/>
                                    <h2 className="text-lg">CSS</h2>
                                </div>
                                <Editor
                                    height="60vh"
                                    language="css"
                                    value={CSScode}
                                    options={{
                                        readOnly: true,
                                        minimap: { enabled: false },
                                    }}
                                    theme="vs-dark"
                                />
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="text-gray-400 flex items-center justify-center text-2xl gap-2 mb-2">
                                    <FaJs/>
                                    <h2 className="text-lg">JS</h2>
                                </div>
                                <Editor
                                    height="60vh"
                                    language="javascript"
                                    value={JScode}
                                    options={{
                                        readOnly: true,
                                        minimap: { enabled: false },
                                    }}
                                    theme="vs-dark"
                                />
                            </div>
                            
                        </div>
                        <div className="w-full h-[31vh] border border-solid">
                            <iframe
                                srcDoc={webDevCode}
                                className="w-full h-full p-2"
                                title="projectPreviewModal"
                            />
                        </div>
                    </Paper>
                </Grow>
            </Modal>
        </>
    );
};

export default DisplayResultSub;
