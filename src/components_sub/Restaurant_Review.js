import { useEffect } from "react";

export default function Restaurant_Review({onSendReview}){
    useEffect(()=>{
        onSendReview({'name':'review','size':200});        
    },[]);
    return(
        <div className="restaurant-review">
            <div className="review-title">asdf</div>
            <div className="review-img"><img src="https://rev-static.yogiyo.co.kr/8da0cd8981453b065d290e022fc31866_tn.jpg" alt="" /></div>
            <div className="review-content">맛 좋고 빠른조리 최고에요</div>
        </div>
    )
}