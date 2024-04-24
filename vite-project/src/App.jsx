import React from 'react';
import './style.css'
import Card from './Components/Card';
import { data } from './data';
import Counter from './Counter';
import ShowHide from './ShowHide';
import DarkLightMode from './DarkLightMode';
 

// ------------------------------- mode changing ----------------------------
const App = () => {
    const [mode,setMode] = useState ('light')
    const changeMode =()=> {
        if (mode === "dark") {
            setMode('light')            
        } else {
            setMode('dark')            
        }
    }

    // ------------------------------- first react task (JED whybox) ----------------------------
  return (
    // <div className='whybox'>
    //   <div className='container'>
    //      {data.map(({id,title,desc,imgSrc}) => {
    //             return <Card key={id} title ={title} desc={desc} imgSrc = {imgSrc} />;
    //         })}
    //   </div>
    // </div>
    
    // ------------------------------- mode changing ----------------------------

    <div className={mode}>
    <button onClick ={changeMode}>dark</button>
    <DarkLightMode/>
    </div>
    
    // --------------------------------Counter & Showhide------------------------
    // <div>            
    //    <Counter/>  
    //    <ShowHide/>
    // </div>
   
  ) 
}

export default App;
