//import logo from './logo.svg';             // not using app logo right now let it be we may use it in future

import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react';
import Alert from "./components/Alert";


function App() {
  const [mode, setMode] = useState('light'); //weather dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
setAlert({
msg: message,
type: type
})
setTimeout(()=>{
  setAlert(null);
}, 1500);

  }

  const toggleMode =()=>{
    if(mode ==='dark'){
      setMode('light')
      document.body.style.backgroundColor = '#FFFFFF';
      showAlert("Light mode is enabled", "success")
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode is enabled", "success")
    }
  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
        
      </div>
    </>
  );
}
export default App;
