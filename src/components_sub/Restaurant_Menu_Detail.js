import { useState } from "react"
import close from "../images/close.svg"
export default function Restaurant_Menu_Detail({idx,closeHandler,show}){
    console.log(idx);
    
    return(
        <div className="menu-detail-container" style={{display:show?'block':'none'}}>
            <div className="detail-header">
                <div className="detail-title">메뉴상세</div>
                <div className="close" onClick={closeHandler}><img src={close} alt="" /></div>
            </div>
            <div className="detail-img"><img src="https://images.yogiyo.co.kr/image/yogiyo/PARTNER_FR_IMG/%EB%91%90%EC%B0%9C/2022-10-21/%EC%A0%9C%ED%9C%B4FR_20221021_%EB%91%90%EC%B0%9C_%EB%8B%AD%EB%B3%B6%EC%9D%8C%ED%83%95_1080x640.jpg?width=384&height=273&quality=100" alt="" /></div>
            <div className="detail-text">닭볶음탕</div>
            <div className="detail-price">
                <strong>가격</strong>
                <div className="ng-binding">28,800원</div>
            </div>
            <div className="detail-wrap">
                <button className="btn-add-cart">주문표에 추가</button>
                <button className="btn-order">주문하기</button>
            </div>
        </div>
    )
}