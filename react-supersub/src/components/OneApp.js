import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import BlurOnIcon from '@mui/icons-material/BlurOn';
import RowItemApp from './RowItemApp';
import WriteForm from './WriteForm';

function OneApp(props) {

    const [board,setBoard]=useState([
        {
            name:'호스기',
            photo:'15',
            blood:'A',
            today:new Date()
        },{
            name:'홍박사',
            photo:'16',
            blood:'AB',
            today:new Date()
        },{
            name:'림차드',
            photo:'18',
            blood:'O',
            today:new Date()
        },{
            name:'시오니',
            photo:'19',
            blood:'B',
            today:new Date()
        }
    ]);

    //데이터 추가 함수이벤트
    //board를 바꾸면 랜더링이 되면서 추가
    const dataSave=(data)=>{
        setBoard(board.concat({
            // name:data.name,
            // photo:data.photo,
            // blood:data.blood,
            ...data,
            today:new Date()
        }));
    }

    const dataDelete=(didx)=>{
        setBoard(board.filter((item,i)=>(i!==didx)));
    }

    return (
        <div>
            <Alert severity="info">OneApp_테이블만들기 <BlurOnIcon/></Alert>

            <WriteForm save={dataSave}/>
            <table className='table table-bordered' style={{width:'500px',marginLeft:'100px'}}>
                <caption align='top'><b>Board 배열출력</b></caption>
                <thead>
                    <tr className='table-success'>
                        <th width='100'>이름</th>
                        <th width='120'>사진</th>
                        <th width='80'>혈액형</th>
                        <th width='160'>현재일</th>
                        <th width='70'>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        //데이터 개수만큼 호출됨..출력은 RowItemApp
                        board.map((row,index)=>(<RowItemApp row={row} idx={index} del={dataDelete}/>))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default OneApp;