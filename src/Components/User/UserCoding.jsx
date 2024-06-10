import { Box, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import Codeflow from '../../assets/Codeflow.png';
import { FaSave } from "react-icons/fa";
import { useState } from "react";
import Languages from "../utils/Languages";
import Monaco from '@monaco-editor/react';
import { FaFileCode } from "react-icons/fa";
const UserCoding = () => {
    const [documentName, setDocumentName] = useState("");
    const [language, setLanguage] = useState('');
    
    const [codeData, setCodeData] = useState('');

    const handleChange = (event) => {
        setLanguage(event.target.value);
    };

    return (
        <>
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
                                <MenuItem key={lang.id} value={lang.val}>{lang.name}</MenuItem>
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
                    <div className="w-[75%] flex flex-col ">
                        <div className="w-full flex items-center gap-2 bg-black rounded-lg p-4 mb-2 text-gray-500 ">
                            <FaFileCode className="text-2xl"/>
                            <p className="text-sm">INPUT</p>
                        </div>
                        <Monaco
                            theme="vs-dark"
                            
              height="100%"
                            language={language}
                            value={codeData}
                            onChange={(value) => setCSSCode(value)}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserCoding;
