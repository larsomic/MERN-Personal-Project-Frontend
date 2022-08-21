import * as React from 'react';
import Header from "./Header.js"
import Container from '@mui/material/Container';

const UnderConstruction = (props) => {
    let showHeader = null
    let randomNum = Math.floor(Math.random() * 100) % 9 + 1
    let source = './../static/images/construction/'+ randomNum +'.jpg'

    if (props.showHeader !== true){
        showHeader = <Header/>
    }
    return (
        <div className='fullPage'>
            {showHeader}
            <Container maxWidth="lg" className='pageContainer'>
                <img className='centerImage' src={source}></img>
                <div className='underConstructionText'>This page is currently under construction.</div>
                <div className='underConstructionText'>Please check back soon to see this page!</div>
            </Container>
        </div>
  );
};
export default UnderConstruction;