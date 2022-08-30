import * as React from 'react';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Header from "./Header.js"
import DownloadIcon from '@mui/icons-material/Download';
import { Typography } from '@mui/material';

const Resume = () => {
    return (
        <div className='fullPage'>
            <Header/>
            <Container maxWidth="m" className='pageContainer'>
                <Paper elevation={24} className='fullPagePaper' style={{'overflow': 'hidden'}}>
                    <Grid item style={{'paddingTop':'3%', 'paddingLeft':'5%'}}>
                        <Typography variant="h4" className='resumeTitle'>Michael Larson</Typography>
                    </Grid>
                    <Grid item style={{'paddingLeft':'2%'}}>
                        <div className='personalLinksContainer'>
                            <a href='https://mike-larson.me/' className='personalLinkNormalText'>Personal Page</a>
                            <a href='https://mike-larson.me/' className='personalLinkColon'>: </a>
                            <a href='https://mike-larson.me/' className='personalLink'>https://mike-larson.me/</a>
                        </div>
                        <div className='personalLinksContainerPaddingLeft'>
                            <a href='https://www.linkedin.com/in/larson2/' className='personalLinkNormalText'>LinkedIn</a>
                            <a href='https://www.linkedin.com/in/larson2/' className='personalLinkColon'>: </a>
                            <a href='https://www.linkedin.com/in/larson2/' className='personalLink'>https://www.linkedin.com/in/larson2/</a>
                        </div>
                    </Grid>
                    
                    <div style={{'display':'flex'}}>
                        
                    </div>
                    <hr style={{'marginBottom': 0}}/>
                    
                    <div className='fullPageCard'>
                        <Typography className='resumeHeader'>Education</Typography>
                        <div className='titleAndDateLine'>
                            <Typography className='boldText'>Washington State University</Typography>
                            <Typography className='boldTextPaddingRight'>August 2018 to December 2022</Typography>
                        </div>
                        <div style={{'display': 'flex'}}>
                            <Typography>&bull; Bachelor of Science in Software Engineering</Typography>
                            <Typography className='rightTab'>&bull; Minor in Mathemtics</Typography>
                        </div>
                        <Typography>&bull; Member of the Software Engineering Club and the Association for Computing Machinery</Typography>
                        <Typography className='resumeHeader'>Experience</Typography>
                        <div className='titleAndDateLine'>    
                            <Typography className='boldText'>Software Engineering Intern | Meter Group Inc.</Typography>
                            <Typography className='boldTextPaddingRight'>April 2021 to Present</Typography>
                        </div>
                        <Typography>&bull; Created an automated acceptance testing suite using Robot Framework to reduce testing time at release.</Typography>
                        <Typography>&bull; Restructured front end design using JavaScript, CSS, and HTML to fix bugs that affected over 3,000 users.</Typography>
                        <Typography>&bull; Redesigned PostgreSQL queries leading to an over 2000% speed up for front end users.</Typography>
                        <div className='titleAndDateLine'>
                            <Typography className='boldText'>App Develoment Intern | YumYum Morale</Typography>
                            <Typography className='boldTextPaddingRight'>October 2020 to March 2021</Typography>
                        </div>
                        <Typography>&bull; Propelled the creation of a deployable website to facilitate the needs of Yum Yum Morale.</Typography>
                        <Typography>&bull; Coordinated a team of three interns to develop a web-application using Django and Python.</Typography>
                        <Typography>&bull; Shaped the interface of the application by communicating with superiors and implementing their desires.</Typography>
                        <div className='titleAndDateLine'>
                            <Typography className='boldText'>Teachers Assistant | Washington State University</Typography>
                            <Typography className='boldTextPaddingRight'>August 2019 to May 2020</Typography>
                        </div>
                        <Typography>&bull; Guided and facilitated students for both Computer Science 121 and 122.</Typography>
                        <Typography>&bull; Operated a weekly lab session, held biweekly office hours, and graded student's homework.</Typography>
                        <Typography>&bull; Supervised 10 students a semester to a 92% pass rate.</Typography>
                        <Typography className='resumeHeader'>Languages and Skills</Typography>
                        <table className='oneRowTable'>
                            <tbody>
                                <tr className='languageBulletList'>
                                    <td>&bull; Python</td>
                                    <td>&bull; C/C++</td>
                                    <td>&bull; Git</td>
                                    <td>&bull; JavaScript</td>
                                    <td>&bull; HTML</td>
                                    <td>&bull; Linux</td>
                                    <td>&bull; Django</td>
                                </tr>
                            </tbody>
                        </table>
                        <Typography className='resumeHeader'>Related Coursework</Typography>
                        <table className='oneRowTable'>
                            <tbody>
                                <tr>
                                    <td>&bull; CS 360: Systems Programming in C/C++</td>
                                    <td>&bull; CS 321: Object-Oriented Software Principles</td>
                                </tr>
                                <tr>
                                    <td>&bull; CS 355: Programming Language and Design</td>
                                    <td>&bull; CS 350: Design & Analysis of Algorithms</td>
                                </tr>
                            </tbody>
                        </table>
                        <Typography className='resumeHeader'>Projects</Typography>
                        <Typography className='boldText'>AI STOCK MARKET TRADER (PERSONAL PROJECT)</Typography>
                        <Typography>Collaborated on a Q-Learning bot that actively trades on the FOREX market. This project was written in python using the Oanda API.</Typography>
                        <Typography className='boldText'>MUSIC VIDEO GENERATOR (WSU HACKATHON 2020)</Typography>
                        <Typography>Directed a small group designing a program that would parse an audio file into words, utilizing Python and the Google Cloud Text-to-Speech API, then convert that into a lyric video that synced up with the song.</Typography>
                        <Typography className='boldText'>MULTITHREADED HASH TABLE (CPT_S 223 PROJECT)</Typography>
                        <Typography>Partnered with a classmate to implement a probing hash table with multithreading which led to 200% faster run times. Implemented a custom hash function and table using C++ and OpenMP.</Typography>
                        <Typography className='boldText'>DJANGO WEBSITE (PERSONAL PROJECT)</Typography>
                        <Typography>Authored a personal website to help find jobs and show off my projects. This project utilized Python and Django web framework. My website is found at http://mikelarson.pythonanywhere.com</Typography>
                        <div style={{'paddingBottom':'50px'}}></div>
                    </div>
                </Paper>
                <Button variant="contained" className='underFullPagePaper' href={"./../static/MichaelLarsonResume.pdf"} download>Download as Pdf <DownloadIcon/></Button>
            </Container>
        </div>
  );
};
export default Resume;