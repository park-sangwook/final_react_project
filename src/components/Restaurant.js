import React, { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "./Header";
import FoodSwiper from "./FoodSwiper"
import Footer from "./Footer";
import "../css/restaurant.css"
import "../css/restaurant_menu_detail.css"
import Restaurant_Menu from "../components_sub/Restaurant_Menu";
import Restaurant_Review from "../components_sub/Restaurant_Review";
import Restaurant_Info from "../components_sub/Restaurant_Info";
import Restaurant_Menu_Detail from "../components_sub/Restaurant_Menu_Detail";
export default function Restaurant(){
    const [iconOption,setIconOption] = useState(true);
    const [length,setLength] = useState(0);
    const [menu,setMenu] = useState('menu');
    const nav = useNavigate();
    const {idx} = useParams();
    const li = document.querySelectorAll(".menu-list li");
    const ChildData = (data)=>{
        switch(data.name){
            case "menu":
                setIconOption(data.iconOption);
                if(iconOption)setLength(600);
                else setLength(0);
                break;
            case "review":
                setLength(data.size);
                break;
            default:
                setLength(data.size);
        }
    }
    return(
        <>
        <Header />
        <Restaurant_Menu_Detail />
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
                <div className="restaurant-title">달려라 짜장</div>
                <div className="restaurant-item">
                    <div className="food-img"><img src="https://www.yogiyo.co.kr/mobile/image/default_restaurant_logo.png" alt="" /></div>
                    <div className="food-info">
                        <div>☆ 4.8</div>
                        <div>리뷰 11889</div>
                        <div> 사장님 댓글 10929</div>
                    </div>
                </div>
                <div className="food-menu">
                    <div className={`food-menu-item ${menu=='menu'? 'food-menu-selected':''}`} onClick={()=>setMenu("menu")}>메뉴</div>
                    <div className={`food-menu-item ${menu=='review'? 'food-menu-selected':''}`} onClick={()=>setMenu("review")}>클린리뷰</div>
                    <div className={`food-menu-item ${menu=='info'? 'food-menu-selected':''}`} onClick={()=>setMenu("info")}>정보</div>
                </div>
                {menu ==='menu' && <Restaurant_Menu onSendData={ChildData}/> }
                {menu ==='review' && <Restaurant_Review onSendReview={ChildData}/> }
                {menu ==='info' && <Restaurant_Info onSendReview={ChildData}/> }
                
            </div>
            <div className="order-sheet">
                <div className="sub-title">
                    <span>주문표</span>                    
                </div>
                <div className="cart">
                    <div className="cart-empty">
                        주문표에 담긴 메뉴가 없습니다.
                    </div>

                    <div className="order-table-text">
                        배달요금 2,000원 별도
                    </div>

                    <button className="btn btn-lg btn-ygy1 btn-block" >주문하기</button>
                </div>
            </div>
        </div>

        <Footer style={{marginTop:length+'px'}}/>
        </>
    )
}