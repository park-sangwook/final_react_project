import { useContext, useEffect, useState } from "react"
import {MenuProvider} from "../context/MenuProvider"
import close from "../images/close.svg"
import axios from "axios";
export default function Restaurant_Menu_Detail({idx,closeHandler,show,onSubmitMenu}){
    const [count,setCount] = useState(1);
    const [data,setData] = useState({});
    const minusHandler = ()=>{
        if(count>1){
            setCount(count-1);
        }
    };
    const plusHandler = ()=>{
        setCount(count+1);
    };
    console.log(idx);
    const orderTableInsert = (obj)=>{
        obj.count = count;
        onSubmitMenu(obj);
        closeHandler();
    };    
    useEffect(()=>{
        axios.get('/restaurant/selectByIdx/'+idx)
        .then(res=>{
            setData(res.data);            
        }).catch(error=>console.log(error));
    },[])
    return(
        <div className="menu-detail-container" style={{display:show?'block':'none'}}>
            <div className="wrap-container"></div>
            <div className="detail-header">
                <div className="detail-title">메뉴상세</div>
                <div className="close" onClick={closeHandler}><img src={close} alt="" /></div>
            </div>
            <div className="detail-img"><img src={data.image} alt="" /></div>
            <div className="detail-text">{data.name}</div>
            <div className="detail-price">
                <strong>가격</strong>
                <div className="ng-binding"><span>{Number(data.price).toLocaleString()}</span>원</div>
            </div>
            <div className="quantity-control">
                <strong>수량</strong>
                <div style={{display:'flex'}}>
                    <button onClick={minusHandler}>-</button>
                    <div className="quantity ng-binding">{count}</div>
                    <button onClick={plusHandler}>+</button>
                </div>
            </div>
            <div className="detail-wrap">
                <button className="btn-add-cart" onClick={()=>orderTableInsert(data)}>주문표에 추가</button>
                <button className="btn-order">주문하기</button>
            </div>
        </div>
    )
}