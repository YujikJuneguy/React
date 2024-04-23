import React from 'react';
import './style.css'
import Card from './Components/Card';
import { data } from './data';
 
const App = () => {
  return (
    <div className='whybox'>
      <div className='container'>
         {data.map(({id,title,desc,imgSrc}) => {
                return <Card key={id} title ={title} desc={desc} imgSrc = {imgSrc} />;
            })}
      </div>
    </div>
  ) 
}

export default App;
