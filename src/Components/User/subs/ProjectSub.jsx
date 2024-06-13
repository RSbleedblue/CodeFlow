import { deleteDoc, doc, setDoc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { FaCode, FaShare } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import { db } from "../../utils/Firebase/firebaseConfig";
import codeFlow from '../../../assets/Codeflow.png';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";

const ProjectSub = ({ data, onDelete }) => {
    const [isDeleting, setIsDeleting] = useState(false);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
        sessionStorage.setItem("HTMLcode", data.HTMLcode);
        sessionStorage.setItem("JScode", data.JScode);
        sessionStorage.setItem("CSScode", data.CSScode);
        sessionStorage.setItem("DocumentName", data.documentName);
        sessionStorage.setItem("WebDevID", data.id);
        navigate("web");
    };
    const handleShare = async () => {
        const userEmail = sessionStorage.getItem("email");
        const ProgramID = data.id;
        const publicDocRef = doc(db, "Public", ProgramID);
        const docSnap = await getDoc(publicDocRef);

        if (docSnap.exists()) {
            toast.error("This project is already shared publicly.", {
                icon: <img src={codeFlow} />,
                theme: "dark"
            });
        } else {
            const HTMLcode = sessionStorage.getItem("HTMLcode");
            const CSScode = sessionStorage.getItem("CSScode");
            const JScode = sessionStorage.getItem("JScode");
            const toBeDoc = `
                <html>
                    <body>${HTMLcode}</body>
                    <style>
                    body {
                        color: #ffffff;
                        margin: 0;
                        padding: 0;
                        overflow: auto;
                    }
                    ${CSScode}
                    </style>
                    <script>${JScode}<\/script>
                </html>
            `;

            const docData = {
                userEmail,
                ProgramID,
                documentName: data.documentName,
                webDevCode: toBeDoc
            };

            await setDoc(publicDocRef, docData);
            setIsPublic(true);
            toast.success("Project shared successfully.", {
                icon: <img src={codeFlow} />,
                theme: "dark"
            });
            handleClose();
        }
    };
    return (
        <>
            <div className="flex flex-col rounded-2xl border border-solid p-1 border-opacity-10 border-gray-400 hover:scale-105 hover:bg-gray-900 transform transition-all w-[28%] shadow-lg cursor-pointer delay-75 max-h-[700px]">
                <p className="text-sm text-gray-600 bg-gray-900 p-3 rounded-t-lg ">
                    Title: <span className="text-sm text-gray-400">{data.documentName}</span>
                </p>
                <iframe srcDoc={`${data.webDevCode}`} className="w-full h-[200px] " />
                <div className="flex gap-2 bg-gray-900 p-4 rounded-b-lg">
                    <button
                        className="text-xl text-gray-600 hover:text-codeFlow"
                        onClick={handleDelete}
                        disabled={isDeleting}
                    >
                        <MdDelete />
                    </button>
                    <button className="text-xl text-gray-600 hover:text-white" onClick={handleShowCode} ><FaCode /></button>
                    <button className="text-xl text-gray-600 hover:text-white" onClick={handleOpen}><FaShare /></button>
                </div>
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                color="black"
                className="bg-black bg-opacity-40"
            >
                <DialogTitle id="alert-dialog-title">{"Share this project?"}</DialogTitle>
                <DialogContent>
                    <Typography>
                        Do you want to share this project publicly? It will be visible to everyone.
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleShare} color="primary" autoFocus>
                        Share
                    </Button>
                </DialogActions>
            </Dialog>
            <ToastContainer stacked></ToastContainer>
        </>
    );
};

export default ProjectSub;
