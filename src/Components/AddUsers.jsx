import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import { useHistory } from "react-router-dom";

export const AddUsers = () => {

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [image, setImage] = useState('')

    const history = useHistory();

    const adddUsers = () => {
        const users = {
            name,
            username,
            email,
            phone,
            image,
        };

        fetch('https://61988da9164fa60017c230e7.mockapi.io/users', {
            method: "POST",
            body: JSON.stringify(users),
            headers: {'Content-type': 'application/json'}
          }) 
          .then(() => history.push('/users'))
    }

    return (
        <div className='user-form-lists'>
        <TextField id="outlined-basic" label="Name" variant="outlined" onChange={(event) => setName(event.target.value)} />
        <TextField id="outlined-basic" label="Username" variant="outlined" onChange={(event) => setUsername(event.target.value)} />
        <TextField id="outlined-basic" label="Email" variant="outlined" onChange={(event) => setEmail(event.target.value)} />
        <TextField id="outlined-basic" label="Phone" variant="outlined" onChange={(event) => setPhone(event.target.value)} />
        <TextField id="outlined-basic" label="Image" variant="outlined" onChange={(event) => setImage(event.target.value)} />
        <Button onClick={adddUsers} variant="contained">Add User</Button>
        </div>
    )
}