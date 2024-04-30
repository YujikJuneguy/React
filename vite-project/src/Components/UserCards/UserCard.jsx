import axios from 'axios'
import React, {useEffect,useState} from 'react'
import styles from '../UserCards/UserCard.module.css';

const url = 'https://jsonplaceholder.typicode.com/users';

const UserCard = () => {
    const [users,setUsers] = useState([])

    useEffect(() => {
      axios(url).then(({data}) => {setUsers(data);})
    },[])
    return (
        <div>{
                users.map(({name,username,email,phone,id}) => {
                    return (
                            <div key={id} className={styles.card}>
                               <h2>{name}</h2>
                               <p>{username}</p>
                               <p>{email}</p>
                               <p>{phone}</p>
                            </div>);
                })
            }
        </div>
    )
}

export default UserCard;
