import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import ExtensionIcon from '@mui/icons-material/Extension';
import TwoSubApp from './TwoSubApp';

function TwoApp(props) {

    const [color,setColor]=useState('magenta');
    const [message,setMessage]=useState('오늘은 수요일');
    const [photo,setPhoto]=useState(15);

    //3개의 이벤트 만들어 전달
    const changeMessage=(m)=>{
        setMessage(m);
    }
    const changeColor=(c)=>{
        setColor(c);
    }
    const changePhoto=(p)=>{
        setPhoto(p);
    }

    return (
        <div>
            <Alert severity="success">TwoApp <ExtensionIcon/></Alert>
            <br/>
            <h1 style={{color:color}}>{message}</h1>
            <img src={`../image/${photo}.png`}/>
            <br/>
            <TwoSubApp onMsg={changeMessage} onCol={changeColor} onPho={changePhoto}/>
        </div>
    );
}

export default TwoApp;