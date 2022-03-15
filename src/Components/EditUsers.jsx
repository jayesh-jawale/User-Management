import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

export const EditUsers = () => {
    const {id} = useParams();
    const [users, setUsers] = useState(null);
    useEffect(() => {
        fetch(`https://61988da9164fa60017c230e7.mockapi.io/users/${id}`, {
            method: 'GET',
        })
        .then((data) => data.json())
        .then((usr) => setUsers(usr));
    }, [id]);

   return users ? <UpdateUsers users={users} /> : ""
}

    const UpdateUsers = ({users}) => {
        const [name, setName] = useState(users.name);
        const [username, setUsername] = useState(users.username);
        const [email, setEmail] = useState(users.email);
        const [phone, setPhone] = useState(users.phone);
    
        const history = useHistory();
        const updateUser = () => {
            const editedUser = {
                name,
                username,
                email,
                phone,
            };
            fetch(`https://61988da9164fa60017c230e7.mockapi.io/users/${users.id}`, {
                method: 'PUT',
                body: JSON.stringify(editedUser),
                headers: {'Content-type' : 'application/json'}
            })
            .then(() => history.push('/users'))
        };

    return (
        <div className='user-form-lists'>
        <TextField id="outlined-basic" label="Name" variant="outlined" value={name} onChange={(event) => setName(event.target.value)} />
        <TextField id="outlined-basic" label="Username" variant="outlined" value={username} onChange={(event) => setUsername(event.target.value)} />
        <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(event) => setEmail(event.target.value)} />
        <TextField id="outlined-basic" label="Phone" variant="outlined" value={phone} onChange={(event) => setPhone(event.target.value)} />
        <Button color='success' onClick={updateUser} variant="contained">Save</Button>
        </div>
    )
    };