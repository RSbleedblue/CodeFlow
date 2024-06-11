import React, { useEffect, useState, useRef } from 'react';
import { Box, TextField } from '@mui/material';
import { FaHtml5, FaCss3Alt, FaChevronDown, FaSave } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import Codeflow from '../../assets/Codeflow.png';
import Monaco from '@monaco-editor/react';
import { collection, addDoc, doc } from 'firebase/firestore';
import { db } from '../utils/Firebase/firebaseConfig';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import codeflowIcon from '../../assets/Codeflow.png'
import 'react-toastify/dist/ReactToastify.css';

const CodingHome = () => {
  const [documentName, setDocumentName] = useState(()=>sessionStorage.getItem("DocumentName") || "");
  const [HTMLcode, setHTMLCode] = useState(() => sessionStorage.getItem('HTMLcode') || "");
  const [CSScode, setCSSCode] = useState(() => sessionStorage.getItem('CSScode') || "");
  const [JScode, setJSCode] = useState(() => sessionStorage.getItem('JScode') || "");
  const iframeRef = useRef(null);
  const userEmail = useSelector((state) => state.user.email);
  
  useEffect(() => {
    sessionStorage.setItem('HTMLcode', HTMLcode);
    sessionStorage.setItem('CSScode', CSScode);
    sessionStorage.setItem('JScode', JScode);
    sessionStorage.setItem('DocumentName',documentName);
  }, [HTMLcode, CSScode, JScode,documentName]);

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

  const handleSave = async () => {
    if(!documentName){
      toast.dark("Title missing",{
        icon: <img src={codeflowIcon}></img>,
        autoClose: 1000
      });
      return;
    }
    if(HTMLcode.length===0){
      toast.dark("Create a Document first",{
        icon: <img src={codeflowIcon}></img>,
        autoClose: 1000
      });
      return;
    }
    const webDevCode = generateSrcDoc();
    const userDocRef = doc(db, "WebDev", userEmail);
    const filesCollectionRef = collection(userDocRef, "files");
    
    toast.promise(
      addDoc(filesCollectionRef, {
        documentName,
        webDevCode,
        timeStamp: new Date(),
      }),
      {
        pending: "Saving...",
        success: "File Saved!",
        error: "Error Saving the document",
        theme: "dark",
        icon: <img src={codeflowIcon} alt="icon" />
      }
    );

    console.log("Document successfully written under user email:", userEmail);
  };

  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.srcdoc = generateSrcDoc();
    }
  }, [HTMLcode, CSScode, JScode]);
 
  return (
    <>
      <div className='text-white w-full flex gap-2 flex-col p-2 items-start mt-2 h-screen'>
        <div className='p-2 flex justify-between w-[80%]'>
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
          <div className='flex items-center gap-2 p-2 text-sm bg-black rounded-lg cursor-pointer hover:scale-105 transition-all text-gray-400' onClick={handleSave}>
            <FaSave />
            <button className=''>Save</button>
          </div>
        </div>
        <div className='flex gap-2 rounded-lg h-[55%] w-full'>
          {/* HTML */}
          <div className='flex flex-col w-[33%] rounded-lg text-gray-400 gap-2 relative h-full'>
            <div className='flex w-full justify-between items-center bg-black p-3 rounded-lg'>
              <div className='flex items-center gap-2 '>
                <FaHtml5 className='text-3xl' />
                <p className='text-sm'>HTML</p>
              </div>
              <div>
                <FaChevronDown />
              </div>
            </div>
            <Monaco
              height="100%"
              theme="vs-dark"
              language="html"
              value={HTMLcode}
              onChange={(value) => setHTMLCode(value)}
            />
          </div>
          {/* CSS */}
          <div className='flex flex-col w-[33%] rounded-lg text-gray-400 gap-2 relative h-full'>
            <div className='flex w-full justify-between items-center bg-black p-3 rounded-lg'>
              <div className='flex items-center gap-2'>
                <FaCss3Alt className='text-3xl' />
                <p className='text-sm'>CSS</p>
              </div>
              <div>
                <FaChevronDown />
              </div>
            </div>
            <Monaco
              height="100%"
              theme="vs-dark"
              language="css"
              value={CSScode}
              onChange={(value) => setCSSCode(value)}
            />
          </div>
          {/* JS */}
          <div className='flex flex-col w-[33%] rounded-lg text-gray-400 gap-2 relative h-full'>
            <div className='flex w-full justify-between items-center bg-black p-3 rounded-lg'>
              <div className='flex items-center gap-2'>
                <IoLogoJavascript className='text-3xl' />
                <p className='text-sm'>JS</p>
              </div>
              <div>
                <FaChevronDown />
              </div>
            </div>
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
          <iframe ref={iframeRef} srcDoc={generateSrcDoc()} width="100%" height="100%" />
        </div>
      </div>
      <ToastContainer stacked />
    </>
  );
};

export default CodingHome;
