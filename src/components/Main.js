import React, { useContext, useEffect, useRef,useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Cookies from "js-cookie"
import Session from 'react-session-api'
import { Map } from "react-kakao-maps-sdk";
import "../css/main.css"
import axios from "axios";
import { MyContext } from "../context/MyContext";

export default function Main(){
    
    const token = Cookies.get("token")?"Bearer "+Cookies.get("token"):null;
    const mapContainer = useRef(null);
    const [address, setAddress] = useState('');
    const presentPosition = () => {
        alert("hi");
        
    };

    useEffect(()=>{
       
        const item = document.querySelectorAll(".item");
        item.forEach((it,index)=>{
            it.addEventListener("click",function(){
                window.location.assign("/category/"+index);
            })
        })       
        
    },[])
    return (
        <>
        <Header />
        <div className="main-img">
            <div className="input-group">
                <div className="input-group-btn loc">
                    <button className="btn btn-default ico-loc" ref={mapContainer} onClick={presentPosition} type="button">&nbsp;</button>
                    </div>
                    <form action="." className="ng-pristine ng-invalid ng-invalid-required ng-valid-minlength">
                        <input type="search" className="form-control ng-pristine showLocation ng-scope ng-invalid ng-invalid-required ng-valid-minlength ng-touched" name="address_input" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" placeholder="건물명, 도로명, 지번으로 검색하세요." value={address} required="required"/>
                    </form>
                    <span id="button_search_address" className="input-group-btn search-btn show-search-buttons always-show-search-buttons">
                    <button className="btn-search-location-cancel btn-search-location btn btn-default" type="button" ng-click="clear_search_location_input($event)"><span className="searchfield-cancel-button">&nbsp;</span></button>
                    <button className="btn btn-default ico-pick" type="button" ng-click="select_location($event)">검색</button>
                </span>
            </div>
        </div>
        <div className="item-container">
            <div className="item"><div className="category-title">전체보기</div><img src="https://www.yogiyo.co.kr/mobile/image/category-01.png" alt="" /></div>
            <div className="item">
                <div className="category-title">1인분 주문</div>
                <img src="https://www.yogiyo.co.kr/mobile/image/category-onedish.png" alt="" />
            </div>
            <div className="item">
                <div className="category-title">프랜차이즈</div>
                <img src="https://www.yogiyo.co.kr/mobile/image/category-10.png" alt="" />
            </div>
            <div className="item">
                <div className="category-title">치킨</div>
                <img src="https://www.yogiyo.co.kr/mobile/image/category-02.png" alt="" />
            </div>
            <div className="item">
                <div className="category-title">피자/양식</div>
                <img src="https://www.yogiyo.co.kr/mobile/image/category-03.png" alt="" />
            </div>
            <div className="item">
                <div className="category-title">중국집</div>
                <img src="https://www.yogiyo.co.kr/mobile/image/category-04.png" alt="" />
            </div>
            <div className="item">
                <div className="category-title">한식</div>
                <img src="https://www.yogiyo.co.kr/mobile/image/category-05.png" alt="" />
            </div>
            <div className="item">
                <div className="category-title">일식/돈까스</div>
                <img src="https://www.yogiyo.co.kr/mobile/image/category-06.png" alt="" />
            </div>
            <div className="item">
                <div className="category-title">족발/보쌈</div>
                <img src="https://www.yogiyo.co.kr/mobile/image/category-07.png" alt="" />
            </div>
            <div className="item">
                <div className="category-title">야식</div>
                <img src="https://www.yogiyo.co.kr/mobile/image/category-08.png" alt="" />
            </div>
            <div className="item">
                <div className="category-title">분식</div>
                <img src="https://www.yogiyo.co.kr/mobile/image/category-09.png" alt="" />
            </div>
            <div className="item">
                <div className="category-title">카페/디저트</div>
                <img src="https://www.yogiyo.co.kr/mobile/image/category-11.png" alt="" />
            </div>
            <div className="item">
                <div className="category-title">편의점/마트</div>
                <img src="https://www.yogiyo.co.kr/mobile/image/category-convenience-store.png" alt="" />
            </div>
            
        </div>
        <Footer />
        </>
    )
}