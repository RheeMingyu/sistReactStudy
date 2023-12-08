import React from 'react';
import Alert from '@mui/material/Alert';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

function FifthApp(props) {
    return (
        <div>
            <h3 className='alert alert-info'>FiveApp입니다</h3>
            <Alert severity="success">배열연습_#5 <AccountBalanceIcon/></Alert>
        </div>
    );
}

export default FifthApp;