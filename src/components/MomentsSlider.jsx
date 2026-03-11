import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function MomentsSlider() {

const images = [
"/images/g1.jpg",
"/images/g2.jpg",
"/images/g3.jpg",
"/images/g4.jpg",
"/images/g5.jpg",
"/images/g6.jpg",
"/images/g7.jpg",
"/images/g8.jpg",
"/images/g9.jpg",
"/images/couple.jpg",
"/images/couple2.jpg"
];

return (

<section className="moments-section">

<h2 className="moments-title">
❤️ Our Moments
</h2>

<Swiper
modules={[Autoplay, Pagination]}
slidesPerView={1}
autoplay={{ delay: 3000 }}
pagination={{ clickable: true }}
loop={true}
className="moments-swiper"
>

{images.map((img,index)=>(
<SwiperSlide key={index}>
<img src={img} alt="moment"/>
</SwiperSlide>
))}

</Swiper>

</section>

);

}