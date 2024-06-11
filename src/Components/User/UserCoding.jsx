import { useState } from 'react';
import { Box, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { FaSave, FaFileCode, FaPlayCircle } from "react-icons/fa";
import { AiFillCode } from "react-icons/ai";
import Monaco from '@monaco-editor/react';
import Codeflow from '../../assets/Codeflow.png';
import Languages from "../utils/Languages";
import { toast } from 'react-toastify';
import codeFlow from '../../assets/Codeflow.png'
import { executeCode } from '../utils/CompilerAPI';
import ClipLoader from "react-spinners/ClipLoader";
import { useSelector } from 'react-redux';

const UserCoding = () => {
    const [documentName, setDocumentName] = useState("");
    const [language, setLanguage] = useState('');
    const [codeData, setCodeData] = useState('');
    const [output, setOutput] = useState('');
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const userEmail = useSelector((state) => state.user.email)

    const handleChange = (event) => {
        setLanguage(event.target.value);
    };

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

    return (
        <div className='text-white w-[90%] flex gap-2 flex-col p-2 items-start mt-2 '>
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
                <div className='flex items-center gap-2 p-2 text-sm bg-black rounded-lg cursor-pointer hover:scale-105 transition-all text-gray-400'>
                    <FaSave />
                    <button className=''>Save</button>
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
                <div className="w-[35%] flex flex-col ">
                    <div className="w-full flex items-center gap-2 bg-black rounded-lg p-4 mb-2 text-gray-500 ">
                        <AiFillCode className="text-2xl" />
                        <p className="text-sm">Output</p>
                    </div>
                    <div className="h-full bg-codePlace rounded-lg">
                        {
                            output ? (
                                <p className={`text-sm p-3 ${isError ? "text-red-600" : "text-gray-500"}`}>{output}</p>
                            ) : (
                                <p className="text-gray-600 text-sm p-3">Run your code to see the output</p>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserCoding;
