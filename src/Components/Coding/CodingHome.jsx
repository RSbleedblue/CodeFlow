import React, { useEffect, useState, useRef } from 'react';
import { Box, TextField } from '@mui/material';
import { FaHtml5, FaCss3Alt, FaChevronDown } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import Codeflow from '../../assets/Codeflow.png';
import  Monaco  from '@monaco-editor/react';

const CodingHome = () => {
  const [documentName, setDocumentName] = useState("");
  const [HTMLcode, setHTMLCode] = useState("");
  const [CSScode, setCSSCode] = useState("");
  const [JScode, setJSCode] = useState("");
  const iframeRef = useRef(null);
  const generateSrcDoc = () => {
    return `
      <html>
        <body>${HTMLcode}</body>
        <style>
          body {
            color: #ffffff;
          }
          ${CSScode}
        </style>
        <script>${JScode}<\/script>
      </html>
    `;
  };

  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.srcdoc = generateSrcDoc();
    }
  }, [HTMLcode, CSScode, JScode]);

  return (
    <>
      <div className='text-white w-full flex gap-2 flex-col p-2 items-start'>
        <div className='p-2 flex'>
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
        </div>
        <div className='flex gap-2 rounded-lg h-[55%] p-2 justify-center w-full'>
          {/* HTML */}
          <div className='flex flex-col w-[33%] bg-black rounded-lg p-4 text-gray-400 gap-2 relative'>
            <div className='flex w-full justify-between items-center'>
              <div className='flex items-center gap-2'>
                <FaHtml5 className='text-3xl' />
                <p className='text-sm'>HTML</p>
              </div>
              <div>
                <FaChevronDown />
              </div>
            </div>
            <hr className='opacity-20'></hr>
            <Monaco
              height="100%"
              theme="vs-dark"
              language="html"
              value={HTMLcode}
              onChange={(value) => setHTMLCode(value)}
            />
          </div>
          {/* CSS */}
          <div className='flex flex-col w-[33%] bg-black rounded-lg p-4 text-gray-400 gap-2 relative'>
            <div className='flex w-full justify-between items-center'>
              <div className='flex items-center gap-2'>
                <FaCss3Alt className='text-3xl' />
                <p className='text-sm'>CSS</p>
              </div>
              <div>
                <FaChevronDown />
              </div>
            </div>
            <hr className='opacity-20'></hr>
            <Monaco
              height="100%"
              theme="vs-dark"
              language="css"
              value={CSScode}
              onChange={(value) => setCSSCode(value)}
            />
          </div>
          {/* JS */}
          <div className='flex flex-col w-[33%] bg-black rounded-lg p-4 text-gray-400 gap-2 relative'>
            <div className='flex w-full justify-between items-center'>
              <div className='flex items-center gap-2'>
                <IoLogoJavascript className='text-3xl' />
                <p className='text-sm'>JS</p>
              </div>
              <div>
                <FaChevronDown />
              </div>
            </div>
            <hr className='opacity-20'></hr>
            <Monaco
              height="100%"
              theme="vs-dark"
              language="javascript"
              value={JScode}
              className='rounded-lg bg-black'
              onChange={(value) => setJSCode(value)}
            />
          </div>
        </div>
        <div className='w-full p-4 rounded-lg h-[40%] bg-black text-white'>
          <iframe ref={iframeRef} srcDoc={generateSrcDoc()} frameBorder="0" width="100%" height="100%" />
        </div>
      </div>
    </>
  );
};

export default CodingHome;