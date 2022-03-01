import React from 'react'
import './testimonails.css'
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react/swiper-react'

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
                    pagination={{clickable: true}}

            >
                <SwiperSlide className='testimonial'>
                    {/*<img/>*/}
                    <h5 className='name'>Sumit Gupta</h5>
                    <small className='designation'>
                        Co-Founder and CTO at GetWork
                    </small>
                    <small className='review'>
                        Harsh is a very quick learner and always keen to learn new things. He almost excels in all the
                        works he is assigned. His learning ability with the ingredient of humble attitude makes him
                        unique in himself which helps him in result driven thoughts which definitely comes with optimum
                        results. He will be a valuable asset for any organisation in future.
                    </small>
                </SwiperSlide>
                <SwiperSlide className='testimonial'>
                    {/*<img/>*/}
                    <h5 className='name'>Niksa Khemka </h5>
                    <small className='designation'>
                        Sustainability Consultant and Program Manager at Green Yatra
                    </small>
                    <small className='review'>
                        The efforts put by him for all the assignments is commendable. He was adaptive, hardworking and
                        punctual.  We wish you the very best for all their future endeavors.
                    </small>
                </SwiperSlide>
            </Swiper>

        </section>
    );
}

export default Testimonials;