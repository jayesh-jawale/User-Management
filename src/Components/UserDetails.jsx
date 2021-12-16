import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const UserDetails = () => {
    const {id} = useParams();
    const [users, setUsers] = useState({});
    useEffect(() => {
        fetch(`https://61988da9164fa60017c230e7.mockapi.io/users/${id}`, {
            method: 'GET',
        })
        .then((data) => data.json())
        .then((usr) => setUsers(usr));
    }, []);

    return (
    <div className='user-details'>
      <img className='user-image' src={users.image} alt="" />
      <div className='user-names'>
      <h2>Name: {users.name}</h2>
      <h3>Username: {users.username}</h3>
      <h3>Phone: {users.phone}</h3>
      </div>
    </div>
    )
}