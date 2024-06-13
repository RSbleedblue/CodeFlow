import { useEffect, useState } from 'react';
import { Box, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { FaSave, FaFileCode, FaPlayCircle } from "react-icons/fa";
import { AiFillCode } from "react-icons/ai";
import Monaco from '@monaco-editor/react';
import Codeflow from '../../assets/Codeflow.png';
import Languages from "../utils/Languages";
import { ToastContainer, toast } from 'react-toastify';
import codeFlow from '../../assets/Codeflow.png'
import { executeCode } from '../utils/CompilerAPI';
import ClipLoader from "react-spinners/ClipLoader";
import { db } from '../utils/Firebase/firebaseConfig';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import 'react-toastify/dist/ReactToastify.css';
import { BsFillFileEarmarkCodeFill } from 'react-icons/bs';

const UserCoding = () => {
    const [documentName, setDocumentName] = useState(()=>sessionStorage.getItem("codingFileName") || "");
    const [language, setLanguage] = useState(()=>sessionStorage.getItem("language") || "");
    const [codeData, setCodeData] = useState(()=>sessionStorage.getItem("codeData") || "");
    const [output, setOutput] = useState('');
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const userEmail = sessionStorage.getItem("email");

    const handleChange = (event) => {
        setLanguage(event.target.value);
    };
    useEffect(()=>{
        sessionStorage.setItem("codingFileName",documentName);
        sessionStorage.setItem("language",language);
        sessionStorage.setItem("codeData",codeData);
    },[documentName,language,codeData]);

    const handleCode = async () => {
        if(!codeData){
            toast.dark("Write a program first!",{
                icon:<img src={codeFlow}/>
            })
            return
        }
        setIsLoading(true);
        const result = await executeCode(language,codeData);
        setIsLoading(false);
        if(result.run.stderr){
            setIsError(true);
        } else {
            setIsError(false);
        }
        setOutput(result.run.output);
    };
    const handleSave = async () => {
        console.log("clicked");
        if (!documentName && !codeData) {
            toast.dark("Incomplete Fields",{
                icon:<img src = {codeFlow} alt = "icon"/>,
            });
            return;
        }
        if(!documentName){
            toast.dark("Fill the Document Name",{
                icon: <img src = {codeFlow} alt = "icon"/>,
            });
            return;
        }
        if(!codeData){
            toast.dark("Code Something First",{
                icon: <img src = {codeFlow} alt='icon'/>,
            });
            return;
        }
        const codeID = sessionStorage.getItem("ProgramCodeID") || null;
        const userDocRef = doc(db, "Coding", userEmail);
        const filesCollectionRef = collection(userDocRef,"files");
        if(!codeID){
            toast.promise(
                addDoc(filesCollectionRef,{
                    documentName,
                    codeData,
                    language,
                    timeStamp: new Date(),
                }),
                {
                    pending:{
                        render:"Saving",
                        theme:"dark",
                        icon:<img src = {codeFlow}/>,
                        autoClose: 1000,
                    },
                    success:{
                        render:"Code Saved",
                        theme: "dark",
                        icon: <img src = {codeFlow}/>,
                        autoClose:1000,
                    },
                    error:{
                        render:"Error",
                        theme: "dark",
                        icon: <img src = {codeFlow} alt = "icon"/>,
                        autoClose: 1000
                    }
                }
            );
            return;
        }
        const existingDocRef = doc(filesCollectionRef, codeID);
        toast.promise(
            updateDoc(existingDocRef,{
                documentName,
                codeData,
                language,
                timeStamp: new Date(),
            }),
            {
                pending:{
                    render:"Saving",
                    theme:"dark",
                    icon:<img src = {codeFlow}/>,
                    autoClose: 1000,
                },
                success:{
                    render:"Code Updated",
                    theme: "dark",
                    icon: <img src = {codeFlow}/>,
                    autoClose:1000,
                },
                error:{
                    render:"Error",
                    theme: "dark",
                    icon: <img src = {codeFlow} alt = "icon"/>,
                    autoClose: 1000
                }
            }
        );
        
        console.log("completed!");
    }
    
    const handleNew = () => {
        setCodeData("");
        setLanguage("");
        setDocumentName("");
        sessionStorage.removeItem("ProgramCodeID");
    }

    return (
        <div className='text-white w-full flex gap-2 flex-col p-2 items-start mt-2 h-screen'>
            {/* Header */}
            <div className='p-2 flex justify-between w-[80%] items-center'>
                <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 2 }}>
                    <img src={Codeflow} className='w-14 h-10' alt="Codeflow" />
                    <TextField
                        id="input-with-sx"
                        label="Title"
                        variant="standard"
                        color="secondary"
                        className='text-3xl text-white'
                        value={documentName}
                        onChange={(e) => setDocumentName(e.target.value)}
                        sx={{
                            '& .MuiInputLabel-root': { color: 'white' },
                            '& .MuiInputBase-input': { color: 'white' },
                            '& .MuiInput-underline:before': { borderBottomColor: 'secondary.main' },
                            '& .MuiInput-underline:after': { borderBottomColor: 'secondary.main' },
                        }}
                    />
                </Box>
                <FormControl variant="standard" sx={{ minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label" sx={{ color: 'white' }}>Language</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={language}
                        onChange={handleChange}
                        label="Language"
                        sx={{
                            '& .MuiInputLabel-root': { color: 'white' },
                            '& .MuiSelect-select': { color: 'white' },
                            '& .MuiSelect-icon': { color: 'white' },
                            '& .MuiInput-underline:before': { border: 'secondary.main' },
                            '& .MuiInput-underline:after': { borderBottomColor: 'secondary.main' },
                        }}
                        MenuProps={{
                            PaperProps: {
                                style: {
                                    maxHeight: 200,
                                    backgroundColor: '#2c2c2c',
                                    color: 'white',
                                },
                            },
                        }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {Languages.map(lang => (
                            <MenuItem key={lang.id} value={lang.val.toLowerCase()}>{lang.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <div className='flex gap-2'>
            <div className='flex items-center gap-2 p-2 text-sm bg-black rounded-lg cursor-pointer hover:scale-105 transition-all text-gray-400' onClick={handleNew}>
              <BsFillFileEarmarkCodeFill />
              <button className=''>New</button>
            </div>
            <div className='flex items-center gap-2 p-2 text-sm bg-black rounded-lg cursor-pointer hover:scale-105 transition-all text-gray-400' onClick={handleSave}>
              <FaSave />
              <button className=''>Save</button>
            </div>
          </div>
            </div>
            {/* CodeArea */}
            <div className="flex gap-2 w-full h-full">
                {/* Input */}
                <div className="w-[65%] flex flex-col ">
                    <div className="w-full flex items-center gap-2 bg-black rounded-lg p-4 mb-2 text-gray-500 justify-between ">
                        <div className="flex items-center gap-2">
                            <FaFileCode className="text-2xl" />
                            <p className="text-sm">INPUT</p>
                        </div>
                        {
                            isLoading? (
                                <div className="flex items-center gap-2">
                                    <ClipLoader
                                        size={20}
                                        color={"#FF156D"}
                                        aria-label="Loading Spinner"
                                        data-testid="loader"
                                    />
                                </div>
                            ) : (
                                <FaPlayCircle className="text-2xl hover:text-codeFlow cursor-pointer" onClick={handleCode} />
                            )
                        }
                    </div>
                    <Monaco
                        theme="vs-dark"
                        height="100%"
                        language={language}
                        value={codeData}
                        onChange={(value) => setCodeData(value || '')}
                    />
                </div>
                {/* Output */}
                <div className="w-[35%] flex flex-col max-h-[700px]">
                    <div className="w-full flex items-center gap-2 bg-black rounded-lg p-4 mb-2 text-gray-500 ">
                        <AiFillCode className="text-2xl" />
                        <p className="text-sm">Output</p>
                    </div>
                    <div className="h-full bg-codePlace rounded-lg">
                        {
                            output ? (
                                <pre className={`text-sm p-3 ${isError ? "text-red-600" : "text-gray-500"}`}>{output}</pre>
                            ) : (
                                <p className="text-gray-600 text-sm p-3">Run your code to see the output</p>
                            )
                        }
                    </div>
                </div>
            </div>
            <ToastContainer stacked/>
        </div>
    );
}

export default UserCoding;
