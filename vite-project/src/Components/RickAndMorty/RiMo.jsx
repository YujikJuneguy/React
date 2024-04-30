import React from 'react'
import axios from 'axios'

const url = 'https://rickandmortyapi.com/api/character/'; 

const{data}= await axios(url)
const RiMo = () => {
  return (
    <div>
      {
        data.map(({pages,id})=> {
            return <div key={id}>
                {pages}
            </div>    
        })
      }
    </div>
  )
}

export default RiMo
