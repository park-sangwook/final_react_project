import React, { useContext, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import "../css/foodswiper.css"
import Restaurant_Menu_Detail from '../components_sub/Restaurant_Menu_Detail';
const MySwiper = ({onSubmitMenu2,menuList}) => {
  const [show,setShow] = useState(false);
  const [idx,setIdx] = useState(1);
  const onSubmitMenu = (data)=>{
    onSubmitMenu2(data);
  }
  const menuClick = (idx)=>{
    setShow(true);
    setIdx(idx);
  }
  const closeHandler = ()=>{
    setShow(false)
  }
  const swiperRef = useRef(null);
  return (
    <div className='food-swiper'>
        <Swiper navigation={false} modules={[Navigation]} onSwiper={(swiper=>(swiperRef.current = swiper))}className="mySwiper" slidesPerView={4}>
          {menuList?menuList.map(item=>(
            <SwiperSlide><div className='restaurant-menu-item' onClick={()=>menuClick(item.idx)}><img src={item.image} alt="" /><div className='restaurant-item-title'>{item.name}</div><div className='restaurant-item-price'>{item.price.toLocaleString()}</div></div></SwiperSlide>

          )):<></>}
            {/* <SwiperSlide><div className='restaurant-menu-item'><img src="https://images.yogiyo.co.kr/image/yogiyo/STOCK_IMG/%EC%A4%91%EC%8B%9D/%EC%84%B8%ED%8A%B8/%EC%8A%A4%ED%83%81_20201124_DHK%EB%82%B4%EB%B6%80_%EC%A7%9C%EC%9E%A5-%EC%A7%AC%EB%BD%95-%ED%83%95%EC%88%98%EC%9C%A1_Top01_1080x640_LXRP27.jpg" alt="" /><div className='restaurant-item-title'>2인 set. 탕수육</div><div className="restaurant-item-price">24000</div></div></SwiperSlide>
            <SwiperSlide><div className='restaurant-menu-item'><img src="https://images.yogiyo.co.kr/image/yogiyo/STOCK_IMG/%EC%A4%91%EC%8B%9D/%EB%A9%B4%EB%A5%98/%EC%8A%A4%ED%83%81_20220907_YGY%EB%82%B4%EB%B6%80_%ED%95%B4%EB%AC%BC%EC%9F%81%EB%B0%98%EC%A7%9C%EC%9E%A5_Side01_1080x640_LNJE36.jpg?width=384&height=273&quality=100" alt="" /><div className='restaurant-item-title'>해물쟁반짜장</div><div className="restaurant-item-price">10000</div></div></SwiperSlide>
            <SwiperSlide><div className='restaurant-menu-item'><img src="https://images.yogiyo.co.kr/image/yogiyo/STOCK_IMG/%EC%A4%91%EC%8B%9D/%EB%A9%B4%EB%A5%98/%EC%8A%A4%ED%83%81_20190701_DHK%EC%B4%AC%EC%98%81_%EC%B0%A8%EB%8F%8C%EB%B0%95%EC%9D%B4%EC%A7%AC%EB%BD%95_Side_01_1080x640.jpg?width=384&height=273&quality=100" alt="" /><div className='restaurant-item-title'>[주문 많은순]</div><div className="restaurant-item-price">12000</div></div></SwiperSlide>
            <SwiperSlide><div className='restaurant-menu-item'><img src="https://images.yogiyo.co.kr/image/yogiyo/STOCK_IMG/%EC%A4%91%EC%8B%9D/%EB%B0%98%EB%B0%98/%EC%8A%A4%ED%83%81_20210727_DHK%EC%99%B8%EB%B6%80_%ED%83%95%EC%A7%9C%EB%A9%B4_Side01_1080x640_RPFW61.jpg?width=384&height=273&quality=100" alt="" /><div className='restaurant-item-title'>탕짜장</div><div className="restaurant-item-price">12000</div></div></SwiperSlide> */}
        </Swiper>
        <div className="swiper-button-next" onClick={() =>  swiperRef.current && swiperRef.current.slideNext()}></div>
        <div className="swiper-button-prev" onClick={() =>  swiperRef.current && swiperRef.current.slidePrev()}></div>
        {show && <Restaurant_Menu_Detail idx={idx} closeHandler={closeHandler} show={show} onSubmitMenu={onSubmitMenu} />}
    </div>
  );
};

export default MySwiper;
