import React from 'react';
import Alert from '@mui/material/Alert';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function SixthApp(props) {
    return (
        <div>
            <h3 className='alert alert-info'>SixApp입니다</h3>
            <Alert severity="info">배열연습_#6 <AddShoppingCartIcon/></Alert>
        </div>
    );
}

export default SixthApp;