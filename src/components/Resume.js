import * as React from 'react';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Header from "./Header.js"
import DownloadIcon from '@mui/icons-material/Download';

const Resume = () => {
    return (
        <div className='fullPage'>
            <Header/>
            <Container maxWidth="m" className='pageContainer'>
                <Paper elevation={24} className='fullPagePaper'>
                    <Grid item style={{'paddingTop':'3%', 'paddingLeft':'3%'}}>
                        <p className='resumeTitle'>Michael Larson</p>
                    </Grid>
                    <Grid item>
                        <div className='personalLinksContainer'>
                            <a href='http://mikelarson.pythonanywhere.com' className='personalLinkNormalText'>Personal Page </a>
                            <a href='http://mikelarson.pythonanywhere.com' className='personalLink'>http://mikelarson.pythonanywhere.com</a>
                        </div>
                        <div className='personalLinksContainerPaddingLeft'>
                            <a href='https://www.linkedin.com/in/larson2/' className='personalLinkNormalText'>LinkedIn </a>
                            <a href='https://www.linkedin.com/in/larson2/' className='personalLink'>https://www.linkedin.com/in/larson2/</a>
                        </div>
                    </Grid>
                    
                    <div style={{'display':'flex'}}>
                        
                    </div>
                    <hr/>
                    
                    <div className='fullPageCard'>
                        <p className='resumeHeader'>Education</p>
                        <div className='titleAndDateLine'>
                            <p className='boldText'>Washington State University</p>
                            <p className='boldTextPaddingRight'>August 2018 to December 2022</p>
                        </div>
                        <div style={{'display': 'flex'}}>
                            <p>&bull; Bachelor of Science in Software Engineering</p>
                            <p className='rightTab'>&bull; Minor in Mathemtics</p>
                        </div>
                        <p>&bull; Member of the Software Engineering and the Association for Computing Machinery club</p>
                        <p className='resumeHeader'>Experience</p>
                        <div className='titleAndDateLine'>    
                            <p className='boldText'>Software Engineering Intern | Meter Group Inc.</p>
                            <p className='boldTextPaddingRight'>April 2021 to Present</p>
                        </div>
                        <p>&bull; Created an automated acceptance testing suite using Robot Framework to reduce testing time at release.</p>
                        <p>&bull; Restructured front end design using JavaScript, CSS, and HTML to fix bugs that effected over 3,000 users.</p>
                        <p>&bull; Redesigned PostgreSQL queries leading to an over 2000% speed up for front end users.</p>
                        <div className='titleAndDateLine'>
                            <p className='boldText'>App Develoment Intern | YumYum Morale</p>
                            <p className='boldTextPaddingRight'>October 2020 to March 2021</p>
                        </div>
                        <p>&bull; Propelled the creation of a deployable website to facilitate the needs of Yum Yum Morale.</p>
                        <p>&bull; Coordinated a team of three interns to develop a web-application using Django and Python.</p>
                        <p>&bull; Shaped the interface of the application by communicating with superiors and implementing their desires.</p>
                        <div className='titleAndDateLine'>
                            <p className='boldText'>Teachers Assistant | Washington State University</p>
                            <p className='boldTextPaddingRight'>August 2019 to May 2020</p>
                        </div>
                        <p>&bull; Guided and facilitated students for both Computer Science 121 and 122.</p>
                        <p>&bull; Operated a weekly lab session, held biweekly office hours, and graded student's homework.</p>
                        <p>&bull; Supervised 10 students a semester to a 92% pass rate.</p>
                        <p className='resumeHeader'>Languages and Skills</p>
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
                        <p className='resumeHeader'>Related Coursework</p>
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
                        <p className='resumeHeader'>Projects</p>
                        <p className='boldText'>AI STOCK MARKET TRADER (PERSONAL PROJECT)</p>
                        <p>Collaborated on a Q-Learning bot that actively trades on the FOREX market. This project was written in python using the Oanda API.</p>
                        <p className='boldText'>MUSIC VIDEO GENERATOR (WSU HACKATHON 2020)</p>
                        <p>Directed a small group designing a program that would parse an audio file into words, utilizing Python and the Google Cloud Text-to-Speech API, then convert that into a lyric video that synced up with the song.</p>
                        <p className='boldText'>MULTITHREADED HASH TABLE (CPT_S 223 PROJECT)</p>
                        <p>Partnered with a classmate to implement a probing hash table with multithreading which led to 200% faster run times. Implemented a custom hash function and table using C++ and OpenMP.</p>
                        <p className='boldText'>DJANGO WEBSITE (PERSONAL PROJECT)</p>
                        <p>Authored a personal website to help find jobs and show off my projects. This project utilized Python and Django web framework. My website is found at http://mikelarson.pythonanywhere.com</p>
                        <div style={{'paddingBottom':'50px'}}></div>
                    </div>
                </Paper>
                <Button variant="contained" className='underFullPagePaper' href={"./../static/MichaelLarsonResume.pdf"} download>Download as Pdf <DownloadIcon/></Button>
            </Container>
        </div>
  );
};
export default Resume;