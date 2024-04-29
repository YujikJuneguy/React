import './style.css'
import Card from './Components/Card';
import {data} from './data';
import Counter from './Counter';
import ShowHide from './ShowHide';
import DarkLightMode from './DarkLightMode';
import React, {useState} from 'react';
import TodoList from './TodoList';
import GetData from './Components/GetData';

const App = () => {
 

// ------------------------------- mode changing ----------------------------
https://turbo.az/autos/8120613-skoda-octavia

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

    // <div className={mode}>
    // <button onClick ={changeMode}>{mode === 'dark' ? 'light': 'dark'}</button>
    // <DarkLightMode/>
    // </div>
    
    // --------------------------------Counter & Showhide------------------------
    <div>            
       {/* <Counter/>  
       <ShowHide/> */}
       {/* <TodoList/> */}
       <GetData/>
    </div>
   
  ) }


export default App;
