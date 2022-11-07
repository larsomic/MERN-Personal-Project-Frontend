import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { setUserId } from '../redux/user/userIdSlice'
import { setUserFirstName } from '../redux/user/userFirstNameSlice'
import { setUserLastName } from '../redux/user/userLastNameSlice'
import * as api from '../api';

function NewUserForm () {
  const id = useSelector((state) => state.userId.value)
  const firstName = useSelector((state) => state.userFirstName.value)
  const lastName = useSelector((state) => state.userLastName.value)
  const dispatch = useDispatch()
  // const [id, setId] = React.useState(useParams()['id']);
  
  function clear () {
    dispatch(setUserId(-1))
    dispatch(setUserFirstName(''))
    dispatch(setUserLastName(''))
  };

  async function handleSubmit(e){
    e.preventDefault();
    console.log(id, firstName, lastName)
    if (id === -1) {
      await api.createUser({firstName:firstName, lastName:lastName});
      clear();
    } else {
      await api.updateUser({firstName:firstName, lastName:lastName});
      clear();
    }
  };

  return (
    <Paper>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <p>{id} {firstName} {lastName}</p>
        <Typography variant="h6">{id ? `Editing ${id} ${lastName}` : 'Creating a New User'}</Typography>
        <TextField name="firstName" variant="outlined" label="First Name" fullWidth value={firstName} onChange={(e) => dispatch(setUserFirstName(e.target.value))} />
        <TextField name="lastName" variant="outlined" label="Last Name" fullWidth value={lastName} onChange={(e) => dispatch(setUserLastName(e.target.value))} />
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
        <Button variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
      </form>
    </Paper> 
    );
};

export default NewUserForm;