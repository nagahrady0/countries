
import './App.css';
import { useState , useEffect} from 'react'
import {BrowserRouter , Routes , Route} from "react-router-dom";

import {useSelector} from 'react-redux';
import Header from './components/header/header.js';
import Home from './components/home/home.js';
import Country from './components/country/country.js';

import {useDispatch} from 'react-redux';


function App() {


  const localmode = localStorage.getItem('mode');
  const [mode, setMode] = useState("");

  useEffect(() => {
    if (localmode != null && localmode === "light") {
      setMode("light");
      localStorage.setItem('mode', 'light');
      document.body.style.background = "#FAFAFA";
    } 
    
    else if (localmode != null && localmode === "dark") {
      setMode("dark");
      document.body.style.background = "#202D36";
    } 
    
    else {
      setMode("light");
      localStorage.setItem('mode', 'light');
      document.body.style.background = "#FAFAFA";
    }
  }, [mode]);
  
  

  const lightmode = {
    '--main-background': '#FAFAFA',
    '--second-background': '#fff',
    '--heading-color':'Rgba(0,0,0,.8)',
    '--txt-color':'Rgba(0,0,0,.3)',    
    '--shadow':'box-shadow: 1px 1px 10px #ddd',    
  };

  const darkmode = {
    '--main-background': '#202D36',
    '--second-background': '#2B3743',
    '--heading-color':'Rgba(255,255,255,.8)',
    '--txt-color':'Rgba(255,255,255,.5)',
    '--shadow':'1px 1px 10px rgba(0,0,0,.5)',
  };






  return (
		
		<BrowserRouter basename={`https://nagahrady0.github.io/countries`}>
			<div className="homepage" style={mode === "light" ? lightmode : darkmode}>
				<Header mode={mode} setMode={setMode}/>
				<Routes>
		       			<Route path="/countries/" element={<Home />}/>
		       			<Route path="/countries/:name" element={<Country />}/>
		       		</Routes>
	       		</div>
       		</BrowserRouter>      		

  );
}

export default App;
