import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../css/category.css"
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
export default function Category(){
    const {idx} = useParams();
    const nav = useNavigate();
    useEffect(()=>{
        const li = document.querySelectorAll(".menu-list li");
        let liIdx = 0;
        li.forEach((item,index)=>{
            item.addEventListener("click",function(){
                li[liIdx].classList.remove("selected");
                this.classList.add("selected");
                liIdx = index;
                nav("/category/"+index);
            })
        })
    })
    return (
        <div className="top">
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
            <div className="list-option">
                <div className="list-option-inner">
                    <select className="form-control ng-pristine ng-valid ng-touched" ng-change="update_order()" ng-model="session_storage.restaurant_list_sort_order" ng-click="select_order_for_ga()">
                        <option value="rank" ng-selected="! session_storage.restaurant_list_sort_order">기본 정렬순</option>
                        <option value="review_avg" ng-selected="session_storage.restaurant_list_sort_order == &quot;review_avg&quot;">별점순</option>
                        <option value="review_count" ng-selected="session_storage.restaurant_list_sort_order == &quot;review_count&quot;">리뷰 많은순</option>
                        <option value="min_order_value" ng-selected="session_storage.restaurant_list_sort_order == &quot;min_order_value&quot;">최소 주문 금액순</option>
                        <option value="distance" ng-selected="session_storage.restaurant_list_sort_order == &quot;distance&quot;" ng-show="session_storage.location &amp;&amp; session_storage.location.point">거리순</option>
                        <option value="estimated_delivery_time" ng-selected="session_storage.restaurant_list_sort_order == &quot;estimated_delivery_time&quot;">배달 시간순</option>
                    </select>
                    <i class="arr-down"></i>
                </div>
            </div>
            <div className="food-container">
                <div className="food-item" onClick={()=>nav("/restaurant/1")}>
                    <div className="food-img"><img src="https://www.yogiyo.co.kr/mobile/image/default_restaurant_logo.png" alt="" /></div>
                    <div className="food-info">
                        <div className="food-title">달려라짜장</div>
                        <div className="food-review">
                            <div>☆ 4.8</div>
                            <div>리뷰 11889</div>
                            <div> 사장님 댓글 10929</div>
                        </div>
                    </div>
                </div>
                <div className="food-item"></div>
                <div className="food-item"></div>
                <div className="food-item"></div>
                <div className="food-item"></div>
                <div className="food-item"></div>
                <div className="food-item"></div>
                <div className="food-item"></div>
                <div className="food-item"></div>
                <div className="food-item"></div>
            </div>
            <Footer />
        </div>
    )
}