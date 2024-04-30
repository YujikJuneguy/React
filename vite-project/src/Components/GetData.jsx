import axios from 'axios'
import React, {useEffect,useState} from 'react'


const url = 'https://jsonplaceholder.typicode.com/users';
const GetData = () => {
  const [users,setUsers] = useState([])

  useEffect(() => {
    axios(url).then(({data}) => {
      setUsers(data)
    })
  },[])
   return (
    <div>
      {
        users.map(({username,id}) => {
          return <div key={id}>
            {username}
          </div>
      })
      }</div>
  )
}

export default GetData;
