import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import Header from "./Header";
import FoodSwiper from "./FoodSwiper"
import Footer from "./Footer";
import "../css/restaurant.css"
import close from "../images/close.svg"
import "../css/restaurant_menu_detail.css"
import Restaurant_Menu from "../components_sub/Restaurant_Menu";
import Restaurant_Review from "../components_sub/Restaurant_Review";
import Restaurant_Info from "../components_sub/Restaurant_Info";
import Restaurant_Menu_Detail from "../components_sub/Restaurant_Menu_Detail";
import axios from "axios";
export default function Restaurant(){
    const [iconOption,setIconOption] = useState(true);
    const [length,setLength] = useState(0);
    const [menu,setMenu] = useState('menu');
    const nav = useNavigate();
    const [data,setData] = useState([]);
    const [order,setOrder] = useState([]);
    const [total,setTotal] = useState(0);
    const {idx} = useParams();
    const li = document.querySelectorAll(".menu-list li");

    const onSubmitMenu = (data)=>{
        let flag = false;
        let sum=0;
        for(let i=0;i<order.length;i++){
            if(order[i].name===data.name){
                order[i].count+=data.count;
                flag=true;
            }
        }
        console.log("data ",data);
        if(!flag) {
            setOrder([...order,data]);
        }
        else setOrder([...order]);
        setTotal(total+data.price*data.count);
    }
    const menuDelete = (idx)=>{
        setOrder(prev=>prev.filter((_,i)=>i != idx.index));
        setTotal(total-order[idx.index].price*order[idx.index].count);
    }
    const plusHandler = (idx)=>{
        const count = order[idx.index].count+1;
        setTotal(total+(count-order[idx.index].count)*order[idx.index].price);
        setOrder(prev=>prev.map((item,i)=>i===idx.index?{...item,count}:item));
    }

    const minusHandler = (idx)=>{
        if(order[idx.index].count>1){
            const count = order[idx.index].count-1;
            setOrder(prev=>prev.map((item,i)=>i===idx.index?{...item,count}:item));
            setTotal(total-(order[idx.index].count-count)*order[idx.index].price);
        }
    }
    const ChildData = (data)=>{
        console.log("data : ",data);
        switch(data.name){
            case "menu":
                setIconOption(data.iconOption);
                if(iconOption)setLength(600);
                else setLength(0);
                break;
            case "review":
                setLength(data.size+100);
                console.log("length ",data.size);
                break;
            default:
                setLength(data.size);
        }
    }
    useEffect(()=>{
        axios.get('/restaurant/selectAll/'+idx)
        .then(res=>{
            console.log(res.data);
            setData(res.data);
        }).catch(error=>console.log(error));
    },[]);
    return(
        <>
        <Header />
        <Restaurant_Menu_Detail/>
        <div className="category-img"></div>
        <div className="menu-container">
            <ul className="menu-list">
                <li className="search-icon" style={{height:'30px'}}></li>
                <li>전체보기</li>
                <li>1인분 주문</li>
                <li>프랜차이즈</li>
                <li>치킨</li>
                <li>피자/양식</li>
                <li>중국집</li>
                <li>한식</li>
                <li>일식/돈까스</li>
                <li>족발/보쌈</li>
                <li>야식</li>
                <li>분식</li>
                <li>카페/디저트</li>
                <li>편의점/마트</li>
            </ul>
        </div>
        <div className="restaurant-container">
            <div className="main-item">
                    <div className="restaurant-title">{data.name}</div>
                    <div className="restaurant-item">
                        <div className="food-img"><img src={data.image} alt="" /></div>
                        <div className="food-info">
                            <div>☆ {data.rate}</div>
                            <div>리뷰 11889</div>
                            <div> 사장님 댓글 10929</div>
                        </div>
                    </div>
                    <div className="food-menu">
                        <div className={`food-menu-item ${menu=='menu'? 'food-menu-selected':''}`} onClick={()=>setMenu("menu")}>메뉴</div>
                        <div className={`food-menu-item ${menu=='review'? 'food-menu-selected':''}`} onClick={()=>setMenu("review")}>클린리뷰</div>
                        <div className={`food-menu-item ${menu=='info'? 'food-menu-selected':''}`} onClick={()=>setMenu("info")}>정보</div>
                    </div>
                    {menu ==='menu' && <Restaurant_Menu onSendData={ChildData} onSubmitMenu3={onSubmitMenu} menuList={data.menuList}/> }
                    {menu ==='review' && <Restaurant_Review onSendReview={ChildData} idx={idx}/> }
                    {menu ==='info' && <Restaurant_Info onSendReview={ChildData}/> }
            </div>
            <div className="order-sheet">
                <div className="sub-title">
                    <span>주문표</span>                    
                </div>
                <div className="cart">

                        {order.length>0?(order.map((item,index)=>(
                            <div style={{padding:'20px'}}>
                                <div>{item.name}</div>
                                <div style={{display:'flex',justifyContent:'space-between',paddingTop:'10px'}}>
                                    <div style={{display:'flex',columnGap:'10px'}}>
                                        <button onClick={()=>menuDelete({index})}><img src={close} width={10} alt="" /></button>
                                        <div>{item.price.toLocaleString()}</div>

                                    </div>
                                    <div>
                                        <div style={{display:'flex'}}>
                                            <button onClick={()=>minusHandler({index})}>-</button>
                                            <div style={{width:'20px',textAlign:'center'}}>{item.count}</div>
                                            <button onClick={()=>plusHandler({index})}>+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))):(
                            <div className="cart-empty">
                            주문표에 담긴 메뉴가 없습니다.
                        </div>
                        )}
                        
                    

                    <div className="order-table-text">
                        배달요금 2,000원 별도
                    </div>
                    <div className="order-total">합계 : <span>{total.toLocaleString()}</span>원</div>
                    <Link to={{pathname:"/pay"}} state={{type:order}}><button className="btn btn-lg btn-ygy1 btn-block">주문하기</button></Link>
                </div>
            </div>
        </div>

        <Footer style={{marginTop:length+'px'}}/>
        </>
    )
}