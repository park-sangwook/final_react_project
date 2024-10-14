import React from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import FoodSwiper from "./FoodSwiper"
import Footer from "./Footer";
import "../css/restaurant.css"
export default function Restaurant(){
    const {idx} = useParams();
    console.log(idx);
    return(
        <>
        <Header />
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
                <div className="food-item">
                    <div className="food-img"><img src="https://www.yogiyo.co.kr/mobile/image/default_restaurant_logo.png" alt="" /></div>
                    <div className="food-info">
                        <div>☆ 4.8</div>
                        <div>리뷰 11889</div>
                        <div> 사장님 댓글 10929</div>
                    </div>
                </div>
                <div className="food-menu">
                    <div className="food-menu-item food-menu-selected">메뉴</div>
                    <div className="food-menu-item">클린리뷰</div>
                    <div className="food-menu-item">정보</div>
                </div>
                <div className="food-list">
                    <FoodSwiper />
                </div>
            </div>
            <div className="order-sheet"></div>
        </div>
        <Footer />
        </>
    )
}