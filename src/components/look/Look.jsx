import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



import phone__1 from "../../img/slider-items/phone-1.png" 
import phone__2 from "../../img/slider-items/phone-2.png" 
import phone__3 from "../../img/slider-items/phone-3.png" 
import phone__4 from "../../img/slider-items/phone-4.png" 
import phone__5 from "../../img/slider-items/phone-5.png" 

function Look() {
    return (
        <section className="look" id='screenshot'>
            <div className="container-look">
                <div className="look__top">
                    <h6 className="look__top-title section-title">Checkout Our App Interface Look</h6>
                    <p className="look__top-text section-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</p>
                </div>
                <Swiper className="mySwiper"
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={5}
                    initialSlide={2}
                    spaceBetween={50}
                    // loop={true}
                    navigation={true}
                    // navigation={{  // Навігація
                    //     nextEl: '.swiper-button-next',
                    //     prevEl: '.swiper-button-prev',
                    // }}
                    breakpoints={{
                        // when window width is >= 640px
                        320: {
                        slidesPerView: 1,
                        },
                        // when window width is >= 768px
                        900: {
                        slidesPerView: 3,
                        },
                        1600: {
                        slidesPerView: 5,
                        },
                    }}
                    coverflowEffect={{
                    rotate: 25,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                >
                    <SwiperSlide>
                        <div className="look__slider-item">
                            <img className="look__slider-img" src={phone__5} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="look__slider-item">
                            <img className="look__slider-img" src={phone__4} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="look__slider-item">
                            <img className="look__slider-img" src={phone__1} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="look__slider-item">
                            <img className="look__slider-img" src={phone__2} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="look__slider-item">
                            <img className="look__slider-img" src={phone__3} alt="" />
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </section>
    )
}

export default Look
