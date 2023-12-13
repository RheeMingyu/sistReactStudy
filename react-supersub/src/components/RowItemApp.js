import React from 'react';

function RowItemApp(props) {

    let {row,idx,del}=props;

    //삭제이벤트
    const delEvent=()=>{
        del(idx);
    }

    return (
        <tr>
            <td>{row.name}</td>
            <td><img src={`../image/${row.photo}.png`} style={{width:'60px',height:'80px'}}></img></td>
            <td>{row.blood} 형</td>
            <td>{row.today.toLocaleDateString('ko-kr')}</td>
            <td><button type='button' className='btn btn-danger btn-sm' onClick={delEvent}>삭제</button></td>
        </tr>
    );
}

export default RowItemApp;