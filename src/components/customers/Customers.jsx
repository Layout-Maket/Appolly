import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';

// Якщо потрібні додаткові ефекти:
import 'swiper/css/pagination';
import 'swiper/css/navigation';



import profile_1 from "../../img/customers-photo/photo-1.png" 


function Customers() {
    return (
        <section className="customers">
            <div className="container">
                <div className="customers__inner">
                    <div className="customers__top">
                        <h6 className="customers__top-title section-title">Our Happy Customers</h6>
                        <p className="customers__top-text section-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
                        </p>
                    </div>
                </div>
                <Swiper className="customers__swiper"
                slidesPerView={3} 
                pagination={{ clickable: true }} 
                initialSlide={1}
                centeredSlides={true} 
                pagination={true}
                modules={[Pagination]}
                >
                    <SwiperSlide className="customers__slider">
                    <div className="customers__slider-card">
                        <img src={profile_1} alt="" />
                        <h3>Ann Lubin</h3>
                        <p>Co-Founder</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</p>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide className="customers__slider">
                    <div className="customers__slider-card">
                        <img src={profile_1} alt="" />
                        
                        <h3>John Doe</h3>
                        <p>Designer</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</p>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide className="customers__slider">
                    <div className="customers__slider-card">
                        <img src={profile_1} alt="" />
                        
                        <h3>Jane Smith</h3>
                        <p>Developer</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</p>
                    </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default Customers
