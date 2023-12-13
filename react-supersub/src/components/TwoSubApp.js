import React from 'react';

function TwoSubApp(props) {

    const setP=(e)=>{
        props.onPho(e.target.value);
    }

    return (
        <div>
            <b>메세지</b>
            <input type='text' className='form-control' onChange={(e)=>{props.onMsg(e.target.value)}}/>
            <br/>
            <b>글자색 변경</b>
            <input type='color' defaultValue='#ffc' className='form-control' onChange={(e)=>{props.onCol(e.target.value)}}/>
            <br/>
            <b>이미지 변경</b>&nbsp;
            <label><input type='radio' name='img' value='15' defaultChecked onClick={setP}/>&nbsp;가오나시</label>&nbsp;&nbsp;
            <label><input type='radio' name='img' value='16' onClick={setP}/>&nbsp;토토로</label>&nbsp;&nbsp;
            <label><input type='radio' name='img' value='18' onClick={setP}/>&nbsp;성신왕자</label>&nbsp;&nbsp;
            <label><input type='radio' name='img' value='19' onClick={setP}/>&nbsp;성신공주</label>&nbsp;&nbsp;
        </div>
    );
}

export default TwoSubApp;