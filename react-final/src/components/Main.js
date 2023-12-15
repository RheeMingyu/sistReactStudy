import React from 'react';
import mainimg1 from '../image/mainlogo1.png';
import mainimg2 from '../image/banner1.png';

function Main(props) {
    return (
        <div>
            <img src={mainimg1} className='main'/>
            <img src={mainimg2} className='main'/>
        </div>
    );
}

export default Main;