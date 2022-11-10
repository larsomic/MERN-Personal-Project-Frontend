import * as React from 'react';
import { TextField, Button, Snackbar, Stack, Alert} from '@mui/material';
import emailjs from '@emailjs/browser'; 

const Contact = () => {
  const [name, setName] =  React.useState('');
  const [company, setCompany] =  React.useState('');
  const [message, setMessage] =  React.useState('');
  const [email, setEmail] =  React.useState('');
  const [open, setOpen] = React.useState(false);
  const [emailSuccess, setEmailSuccess] = React.useState(true);
  
  const form = React.useRef();

  const handleToClose = (event, reason) => {
    if ("clickaway" === reason) return;
    setOpen(false);
  };

  const sendEmail = (e) =>{
    e.preventDefault();
    setOpen(true)
    emailjs.sendForm('service_yfa5tc8', 'template_17svx2a', form.current, 'gSzUbMaXOX7Johp8L').then(function(response) {
      setEmailSuccess(true)
    }, function(err) {
      setEmailSuccess(false)
    });    

    // Clear form.
    setName('')
    setEmail('')
    setCompany('')
    setMessage('')
  }

  return (
    <form ref={form} onSubmit={sendEmail}>
      <Stack spacing={{ xs: 1, sm: 2}}>
        <TextField fullWidth className='contactTextbox' name="from_name" label="Name" variant="filled" required onChange={(e) => {setName(e.target.value);}} value={name}/>
        <TextField fullWidth className='contactTextbox' name="company_name" label="Company" variant="filled" onChange={(e) => {setCompany(e.target.value);}} value={company}/>
        <TextField fullWidth className='contactTextbox' name="user_email" label="Your Email" variant="filled" required type={'email'} onChange={(e) => {setEmail(e.target.value);}} value={email}/>
        <TextField fullWidth className='contactTextbox' name="message" label="Message" variant="filled" required minRows={2} maxRows={5} multiline onChange={(e) => {setMessage(e.target.value);}} value={message}/>
        <Button className='centeredButton' type="submit" value="Send" variant="contained">Send Email</Button>
      </Stack>
      <Snackbar anchorOrigin={{horizontal: "center", vertical: "top"}} open={open} autoHideDuration={3000} onClose={handleToClose} >
        <Alert onClose={handleToClose} severity={emailSuccess?"success":"error"} sx={{ width: '100%' }}>
          {emailSuccess?"Email sent successfully.":"Email failed to send. Try again or message me on LinkedIn."}
        </Alert>
      </Snackbar>
    </form>
  );
};
export default Contact;