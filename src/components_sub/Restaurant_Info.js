import { useEffect } from "react"

export default function Restaurant_Info({onSendReview}){
    useEffect(()=>{
        onSendReview({'name':'info','size':400});    
    },[])
    return (
        <div className="restaurant-info">
            <div className="info-item">
                <div className="info-item-title info-icon">사장님 알림</div>
            </div>
            <div className="info-item">
                <div className="info-item-title info-icon1">업체정보</div>
                <p><i>영업시간</i> <span class="tc ng-binding">09:40 - 20:10</span></p>
                <p><i>전화번호</i> <span class="tc ng-binding">050352860556 (요기요 제공 번호)</span></p>
                <p><i>주소</i> <span class="tc ng-binding">경기도 수원시 팔달구 인계동 1003-27 1층 101호(인계동)</span></p>
            </div>
            <div className="info-item">
                <div className="info-item-title info-icon1">결제정보</div>
                <p><i>최소주문금액</i> <span class="tc ng-binding">11,900원</span></p>
                <p><i>결제수단</i> <span class="tc ng-binding">신용카드, 현금, 요기서 결제</span></p>
            </div>
            <div className="info-item">
                <div className="info-item-title info-icon1">사업자정보</div>
                <p><i>상호명</i> <span class="tc ng-binding">달려라짜장</span></p>
                <p><i>사업자등록번호</i> <span class="tc ng-binding">000-00-00000</span></p>
            </div>
        </div>
    )
}