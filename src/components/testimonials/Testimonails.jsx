import React from 'react'
import './testimonails.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'

import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials_container"
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={40}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}

            >
                <SwiperSlide className='testimonial'>
                    {/*<img/>*/}
                    <h5 className='name'>Lorem ipsum dolor sit amet.</h5>
                    <small className='review'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae hic libero minima molestiae
                        numquam placeat quo repudiandae totam. Harum, repudiandae?
                    </small>
                </SwiperSlide>
                <SwiperSlide className='testimonial'>
                    {/*<img/>*/}
                    <h5 className='name'>Lorem ipsum dolor sit amet.</h5>
                    <small className='review'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae hic libero minima molestiae
                        numquam placeat quo repudiandae totam. Harum, repudiandae?
                    </small>
                </SwiperSlide>
            </Swiper>

        </section>
    );
}

export default Testimonials;