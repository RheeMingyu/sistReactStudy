import React from 'react';
import { useNavigate } from 'react-router-dom';
import ShopForm from './ShopForm';

function Shop(props) {

    const navi=useNavigate(); //이동하는 메서드

    return (
        <div style={{marginLeft:'100px'}}>
            <button type='button' className='btn btn-info' onClick={()=>{navi('/shop/form');}}>상품등록</button>
            <h1>Shop 목록출력..</h1>
        </div>
    );
}

export default Shop;