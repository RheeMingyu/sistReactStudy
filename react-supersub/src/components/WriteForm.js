import React, { useState } from 'react';

function WriteForm(props) {

    const [name,setName]=useState('');
    const [blood,setBlood]=useState('A');
    const [photo,setPhoto]=useState(15);

    const photos=[15,16,18,19];

    //버튼이벤트
    const addDataEvent=()=>{
        //부모컴포넌트에서 만든 save 호출
        props.save({name,photo,blood});
        setName('');
        setBlood('A');
        setPhoto(15);
    }

    return (
        <div>
            <b>이름:</b>
            <input type='text' style={{width:'100px'}} value={name} onChange={(e)=>{setName(e.target.value)}}/>&nbsp;&nbsp;
            <b>혈액형:</b>
            <select value={blood} onChange={(e)=>{setBlood(e.target.value)}}>
                <option>A</option>
                <option>B</option>
                <option>O</option>
                <option>AB</option>
            </select>&nbsp;&nbsp;
            <b>사진:</b>
            <select value={photo} onChange={(e)=>{setPhoto(e.target.value)}}>
                {photos.map((p,idx)=>(<option>{p}</option>))}
            </select>&nbsp;&nbsp;
            <img src={`../image/${photo}.png`} style={{width:'50px',height:'50px'}}></img>&nbsp;&nbsp;
            <button type='button' className='btn btn-info' onClick={addDataEvent}>추가</button>
        </div>
    );
}

export default WriteForm;