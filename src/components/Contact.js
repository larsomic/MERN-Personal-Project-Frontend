import * as React from 'react';
import { TextField, Button, Container, Stack } from '@mui/material';
import emailjs from '@emailjs/browser'; 

const Contact = () => {
  const [name, setName] =  React.useState('');
  const [company, setCompany] =  React.useState('');
  const [message, setMessage] =  React.useState('');

  const form = React.useRef();
  const sendEmail = (e) =>{
    e.preventDefault();

    emailjs.sendForm('service_yfa5tc8', 'template_17svx2a', form.current, 'gSzUbMaXOX7Johp8L').then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
    }, function(err) {
      console.log('FAILED...', err);
    });    
  }

  return (
    <form ref={form} onSubmit={sendEmail}>
      <Stack spacing={{ xs: 1, sm: 2}}>
        <TextField fullWidth className='contactTextbox' name="from_name" label="Name" variant="filled" required onChange={(e) => {setName(e.target.value);}}/>
        <TextField fullWidth className='contactTextbox' name="company_name" label="Company" variant="filled" onChange={(e) => {setCompany(e.target.value);}}/>
        <TextField fullWidth className='contactTextbox' name="user_email" label="Email" variant="filled" required type={'email'} onChange={(e) => {setCompany(e.target.value);}}/>
        <TextField fullWidth className='contactTextbox' name="message" label="Message" variant="filled" required minRows={2} maxRows={5} multiline onChange={(e) => {setMessage(e.target.value);}}/>
        <Button className='centeredButton' type="submit" value="Send" variant="contained">Send Email</Button>
      </Stack>
    </form>
  );
};
export default Contact;