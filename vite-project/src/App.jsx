import './Components/JED/Jed.css'
import './Components/DM Mode/DM.css'
import './Components/TodoList/ToDo.css'
import Card from './Components/JED/Card';
import {data} from './Components/JED/data';
import Counter from './Components/Counter/Counter';
import ShowHide from './Components/ShowHide/ShowHide';
import DarkLightMode from './Components/DM Mode/DarkLightMode';
import React,{useState}  from 'react';
import TodoList from './Components/TodoList/TodoList';
import GetData from './Components/GetData';
import UserCard from './Components/UserCards/UserCard';
import RiMo from './Components/RickAndMorty/RiMo';


const App = () => {

  // ------------------------------- mode changing ---------------------------
  // const [mode, setMode] = useState('light');

  // const changeMode = () => {
  //   setMode(mode === 'dark' ? 'light' : 'dark'); 
  // };
    // ------------------------------- first react task (JED whybox) ----------------------------
  return (
    // <div className='whybox'>
    //   <div className='container'>
    //      {data.map(({id,title,desc,imgSrc}) => {
    //         return <Card key={id} title ={title} desc={desc} imgSrc ={imgSrc} />;
    //       })}
    //   </div>
    // </div>
    
    // ------------------------------- mode changing ----------------------------
   
    // <div className={mode}>
    // <button onClick ={changeMode}>{mode === 'dark' ? 'light': 'dark'}</button>
    // <DarkLightMode/>
    // </div>
    
    // --------------------------------Counter & Showhide------------------------
    <div>            
       {/* <Counter/>   */}
       {/* <ShowHide/> */}
       <TodoList/>
       {/* <GetData/> */}
       {/* <UserCard/> */}
       {/* <RiMo/> */}
    </div>
  ); 
}


export default App;
