import React,{useState} from "react";
import FoodSwiper from "../components/FoodSwiper"
import Restaurant_Menu_Detail from "./Restaurant_Menu_Detail";
export default function Restaurant_Menu({onSendData}){
    const [iconOption,setIconOption] = useState(false);
    const [show,setShow] = useState(false);
    const closeHandler = ()=>{
        setShow(false)
    }
    const iconHandler = ()=>{
        setIconOption(!iconOption);
        onSendData({'name':'menu',iconOption});
    }
    return(
        <>
            <div className="food-list">
                    <FoodSwiper />
                {show && <Restaurant_Menu_Detail idx={1} closeHandler={closeHandler} show={show}/>}
            </div>
            <div className="panel-heading">
            <h4 className="panel-title">
            <a className="clearfix">
                <span className="menu-name pull-left ng-binding pop-menu">인기메뉴</span>
                <i className={`pull-right ${iconOption ? 'icon-arr-up':'icon-arr-down'}`} onClick={iconHandler} ></i>
            </a>
                <div style={{display:iconOption?'block':'none'}}>
                    <ul className="popular-menu">
                        <li onClick={()=>setShow(true)}>
                            <div className="menu-text">
                                <div className="menu-text-title">짜장면</div>
                                <div className="menu-text-info">100% 국내산 돼지고기, 양파, 춘장을 볶아 만든 기본에 충실한 짜장면</div>
                                <div className="menu-text-price">7000</div>
                            </div>
                            <div className="popular-menu-img"><img src="https://images.yogiyo.co.kr/image/yogiyo/STOCK_IMG/%EC%A4%91%EC%8B%9D/%EB%A9%B4%EB%A5%98/%EC%8A%A4%ED%83%81_20201123_DHK%EB%82%B4%EB%B6%80_%EC%A7%9C%EC%9E%A5%EB%A9%B4_Side01_1080x640_LUZY56.jpg?width=384&height=273&quality=100" alt="" /></div>
                        </li>
                        <li>
                            <div className="menu-text">
                                <div className="menu-text-title">간짜장</div>
                                <div className="menu-text-info">짜장보단 큼직하게 썰어 넣은 고기와 신선한 양파를 이용해 볶아 만든 식감 좋은 간짜장</div>
                                <div className="menu-text-price">8500</div>
                            </div>
                            <div><img src="https://images.yogiyo.co.kr/image/yogiyo/STOCK_IMG/%EC%A4%91%EC%8B%9D/%EB%A9%B4%EB%A5%98/%EC%8A%A4%ED%83%81_20190701_DHK%EC%B4%AC%EC%98%81_%EA%B0%84%EC%A7%9C%EC%9E%A5_Side_02_1080x640.jpg" alt="" /></div>
                        </li>
                        <li>
                            <div className="menu-text">
                            <div className="menu-text-title">짬뽕</div>
                                <div className="menu-text-info">당일 들어오는 신선한 재료들을 사용해 여러번 볶아 '맛' 없을 수가 없는 짬뽕</div>
                                <div className="menu-text-price">8500</div>
                            </div>
                            <div><img src="https://images.yogiyo.co.kr/image/yogiyo/STOCK_IMG/%EC%A4%91%EC%8B%9D/%EB%A9%B4%EB%A5%98/%EC%8A%A4%ED%83%81_20210726_DHK%EC%99%B8%EB%B6%80_%EC%A7%AC%EB%BD%95_Side01_1080x640_RNMC45.jpg?width=384&height=273&quality=100" alt="" /></div>
                        </li>
                        <li>
                            <div className="menu-text">
                                <div className="menu-text-title">탕짱면</div>
                                <div className="menu-text-info">소스 따로 옵션 미선택시 요청사항에 남겨주셔도 소스 부어서 나갑니다 : )</div>
                                <div className="menu-text-price">12000</div>
                            </div>
                            <div><img src="https://images.yogiyo.co.kr/image/yogiyo/STOCK_IMG/%EC%A4%91%EC%8B%9D/%EB%B0%98%EB%B0%98/%EC%8A%A4%ED%83%81_20210727_DHK%EC%99%B8%EB%B6%80_%ED%83%95%EC%A7%AC%EB%A9%B4_Side01_1080x640_RPGC80.jpg" alt="" /></div>
                        </li>
                        <li onClick={()=>setShow(true)}>
                            <div className="menu-text">
                                <div className="menu-text-title">탕볶밥</div>
                                <div className="menu-text-info">소스 따로 옵션 미선택시 요청사항에 남겨주셔도 소스 부어서 나갑니다 : )</div>
                                <div className="menu-text-price">12000</div>
                            </div>
                            <div><img src="https://images.yogiyo.co.kr/image/yogiyo/STOCK_IMG/%EC%A4%91%EC%8B%9D/%EB%B0%98%EB%B0%98/%EC%8A%A4%ED%83%81_20190701_DHK%EC%B4%AC%EC%98%81_%ED%83%95%EB%B3%B6%EB%B0%A5_Side_02_1080x640.jpg" alt="" /></div>
                            </li>
                        </ul>
                    </div>
                </h4>
            </div>
        </>
    )
}