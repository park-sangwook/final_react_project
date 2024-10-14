import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import "../css/foodswiper.css"
const MySwiper = () => {
    const swiperRef = useRef(null);
  return (
    <div>
        <Swiper navigation={false} modules={[Navigation]} onSwiper={(swiper=>(swiperRef.current = swiper))}className="mySwiper" slidesPerView={4}>
            <SwiperSlide><img src="https://images.yogiyo.co.kr/image/yogiyo/STOCK_IMG/%EC%A4%91%EC%8B%9D/%EC%84%B8%ED%8A%B8/%EC%8A%A4%ED%83%81_20201123_DHK%EB%82%B4%EB%B6%80_%EC%A7%9C%EC%9E%A5%EB%A9%B4-%ED%83%95%EC%88%98%EC%9C%A1_Side01_1080x640_LVJM27.jpg?width=384&height=273&quality=100" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://images.yogiyo.co.kr/image/yogiyo/STOCK_IMG/%EC%A4%91%EC%8B%9D/%EC%84%B8%ED%8A%B8/%EC%8A%A4%ED%83%81_20201124_DHK%EB%82%B4%EB%B6%80_%EC%A7%9C%EC%9E%A5-%EC%A7%AC%EB%BD%95-%ED%83%95%EC%88%98%EC%9C%A1_Top01_1080x640_LXRP27.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://images.yogiyo.co.kr/image/yogiyo/STOCK_IMG/%EC%A4%91%EC%8B%9D/%EB%A9%B4%EB%A5%98/%EC%8A%A4%ED%83%81_20220907_YGY%EB%82%B4%EB%B6%80_%ED%95%B4%EB%AC%BC%EC%9F%81%EB%B0%98%EC%A7%9C%EC%9E%A5_Side01_1080x640_LNJE36.jpg?width=384&height=273&quality=100" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://images.yogiyo.co.kr/image/yogiyo/STOCK_IMG/%EC%A4%91%EC%8B%9D/%EB%A9%B4%EB%A5%98/%EC%8A%A4%ED%83%81_20190701_DHK%EC%B4%AC%EC%98%81_%EC%B0%A8%EB%8F%8C%EB%B0%95%EC%9D%B4%EC%A7%AC%EB%BD%95_Side_01_1080x640.jpg?width=384&height=273&quality=100" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://images.yogiyo.co.kr/image/yogiyo/STOCK_IMG/%EC%A4%91%EC%8B%9D/%EB%B0%98%EB%B0%98/%EC%8A%A4%ED%83%81_20210727_DHK%EC%99%B8%EB%B6%80_%ED%83%95%EC%A7%9C%EB%A9%B4_Side01_1080x640_RPFW61.jpg?width=384&height=273&quality=100" alt="" /></SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
        <div className="swiper-button-next" onClick={() =>  swiperRef.current && swiperRef.current.slideNext()}></div>
        <div className="swiper-button-prev" onClick={() =>  swiperRef.current && swiperRef.current.slidePrev()}></div>
    </div>
  );
};

export default MySwiper;
