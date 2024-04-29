import axios from 'axios'
import React from 'react'

const url = 'https://jsonplaceholder.typicode.com/users';


const {data} = await axios(url)
const GetData = () => {
   return (
    <div>
      {
        data.map(({username,id}) => {
          return <div key={id} 
         >
            {username}
          </div>
      })
      }</div>
  )
}

export default GetData;
