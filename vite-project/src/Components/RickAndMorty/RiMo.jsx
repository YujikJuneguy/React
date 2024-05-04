import axios from "axios";
import React, { useEffect, useState } from "react";
// import 'bootstrap/dist/css/bootstrap.css'



const RiMo=() => {
  const url = 'https://rickandmortyapi.com/api/character/'; 
const [data,setData] =useState([])

useEffect(() => {
  (async() => {
    const {data} = await axios(url)
    setData(data.results)
    console.log();
  })()
},[])

return (
  <div>{
    data.map(({name,id}) => {
      return <h3 key={id}>{name}</h3>
    })
}</div>
)
}


export default RiMo
