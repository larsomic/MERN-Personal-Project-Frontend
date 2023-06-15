import * as React from 'react';
import { TextField, Button, Container, Stack } from '@mui/material';
import { jsPDF } from "jspdf";
import { Typography } from '@mui/material';

const CoverLetterCreator = (props) => {
    const [yourName, setYourName] =  React.useState('');
    const [yourCity, setYourCity] =  React.useState('');
    const [yourPhoneNumber, setYourPhoneNumber] =  React.useState('');
    const [yourEmail, setYourEmail] =  React.useState('');
    const [yourState, setYourState] =  React.useState('');
    const [careerPage, setCareerPage] =  React.useState('');

    const [yourPersonalPage, setYourPersonalPage] =  React.useState('');
    const [yourLinkedIn, setYourLinkedIn] =  React.useState('');
    
    const [positionName, setPositionName] =  React.useState('');
    const [theirName, setTheirName] =  React.useState('');
    const [companyName, setCompanyName] =  React.useState('');
    const [theirCity, setTheirCity] =  React.useState('');
    const [theirState, setTheirState] =  React.useState('');

    const [date, setDate] =  React.useState('');
    
    const form = React.useRef();
    
    let coverLetter = ` 
    <div style="width:8.5in;height: 10.9in; background-color: white; font-family: Georgia; font-size: medium; letter-spacing: 0.01px;">
        <div id="header"> 
            <div style="font-family: Georgia; padding-top: 0.9in; font-size: 20pt; padding-left: 0.75in; word-spacing: 0.01in;">${yourName}</div>
            <hr style="width: 7in; height:1.5px; color:black; background-color:black; margin-bottom: 3px">
            <div style="padding-left: 0.75in; font-size: medium; ">${yourCity}, ${yourState} | ${yourPhoneNumber} | ${yourEmail} </div>
            ${ yourPersonalPage && yourLinkedIn? `<div style="padding-left: 0.75in; font-size: medium">Personal Page: ${yourPersonalPage} | LinkedIn: ${yourLinkedIn}</div>`: ''}
        </div>
        <div id="body" style="width:7in; height:8in; margin-left: auto; margin-right: auto; word-spacing: 0.01in;">
            <div style="padding-bottom: 20px;padding-top: 20px;">${date}</div>
            <div>${theirName}</div>
            <div>${companyName}</div>
            <div style="padding-bottom: 20px;">${theirCity}, ${theirState}</div>
            <div style="padding-bottom: 20px;">Dear ${theirName},</div>
            <div style="padding-bottom: 20px;">I am writing to express my interest in the role of ${positionName} at ${companyName} that was advertised on ${careerPage}. Having just graduated with a B.S. in Software Engineering from Washington State University in December of 2022, I would love to start my post graduate career at ${companyName} and I feel I would be a perfect fit for the role being offered.</div>
            <div></div>
            <div style="padding-bottom: 20px;">I also have 1.5 years of intern experience which has been amazing. I have gained countless skills and have written production code in Python and JavaScript. These skills include professional skills such as the use of the SCRUM method in a large team. I look forward to bringing my strong technical and analytical skills to ${companyName} and can’t wait to learn more and continue to develop in this role.</div>
            <div style="padding-bottom: 20px;">I have been building towards this opportunity for the past four years by doing:</div>
            <div style="padding-left: 20px;">• 18-months of intern experience with METER Group in Pullman, WA.</div>
            <div style="padding-left: 20px;">• A Bachelor of Science in Software Engineering with a minor in Mathematics from Washington State University.</div>
            <div style="padding-left: 20px;">• Multiple side projects to expand my skills in the previously mentioned skills.</div>
            <div style="padding-top: 20px;">I would greatly appreciate the opportunity to meet with you and further discuss my qualifications and your requirements in detail. Thank you for your consideration, and I look forward to speaking with you soon.</div>
            <div style="padding-top: 20px;">Sincerely,</div>
            <div style="padding-top: 20px;">${yourName}</div>
        </div>
    </div>
    `

    const generatePDF = (e) => {
        e.preventDefault();
        var pdf = new jsPDF('p', 'pt', [792, 612]);
        pdf.html(coverLetter, {
            callback: function(pdf) {
            pdf.save(`${yourName.replace(' ', '-')}-${companyName}.pdf`);
            },
            x: 0,
            y: 0,
            html2canvas: { scale: 0.75 },
            charSpace: '1',
        });

        setTheirName('')
        setCompanyName('')
        setTheirCity('')
        setTheirState('')
        setCareerPage('')
    }


    React.useEffect(()=>{
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        setDate(yyyy + '-' + mm + '-' + dd)
    }, [])

    return (
        <Container className='coverLetterContainer'>
            <form ref={form} onSubmit={generatePDF}>
                <Typography variant='h3' className='coverLetterText'>Cover Letter Generator</Typography>
                <Stack spacing={2}>
                    <TextField name="date" label="The Date" variant="filled" type={'date'} required onChange={(e) => {setDate(e.target.value);}} value={date}/>
                    <hr/>
                    <TextField name="your_name" label="Your Name" variant="filled" required type={'text'} onChange={(e) => {setYourName(e.target.value);}} value={yourName}/>
                    <TextField name="your_city" label="Your City" variant="filled" required type={'text'} onChange={(e) => {setYourCity(e.target.value);}} value={yourCity}/>
                    <TextField name="your_state" label="Your State" variant="filled" required type={'text'} onChange={(e) => {setYourState(e.target.value);}} value={yourState}/>
                    <TextField name="your_phone_number" label="Your Phone Number" variant="filled" required type={'tel'} onChange={(e) => {setYourPhoneNumber(e.target.value);}} value={yourPhoneNumber}/>
                    <TextField name="your_email" label="Your Email" variant="filled" required type={'email'} onChange={(e) => {setYourEmail(e.target.value);}} value={yourEmail}/>
                    <TextField name="your_personal_page" label="Your Personal Page" variant="filled" type={'text'} onChange={(e) => {setYourPersonalPage(e.target.value);}} value={yourPersonalPage}/>
                    <TextField name="your_linkedin" label="Your LinkedIn" variant="filled" type={'text'} onChange={(e) => {setYourLinkedIn(e.target.value);}} value={yourLinkedIn}/>
                    <hr/>
                    <TextField name="career_page" label="Career Page" variant="filled" required type={'text'} onChange={(e) => {setCareerPage(e.target.value);}} value={careerPage}/>
                    <hr/>
                    <TextField name="position_name" label="Position Name" variant="filled" required type={'text'} onChange={(e) => {setPositionName(e.target.value);}} value={positionName}/>
                    <TextField name="recipient_name" label="Recipient Name" variant="filled" required type={'text'} onChange={(e) => {setTheirName(e.target.value);}} value={theirName}/>
                    <TextField name="company_name" label="Company Name" variant="filled" required type={'text'} onChange={(e) => {setCompanyName(e.target.value);}} value={companyName}/>
                    <TextField name="company_city" label="Company City" variant="filled" required type={'text'} onChange={(e) => {setTheirCity(e.target.value);}} value={theirCity}/>
                    <TextField name="company_state" label="Company State" variant="filled" required type={'text'} onChange={(e) => {setTheirState(e.target.value);}} value={theirState}/>
                    <hr/>
                    <Button type="submit">Generate PDF</Button>
                </Stack>
            </form>
        </Container>
  );
};
export default CoverLetterCreator;

