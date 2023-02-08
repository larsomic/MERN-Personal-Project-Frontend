import * as React from 'react';
import { Button, Container, Stack, Typography } from '@mui/material';

const LanguageTag = (props) => {
    return (
        <div className='languageTag'>
            {props.language}
        </div>
  );
};
export default LanguageTag;
