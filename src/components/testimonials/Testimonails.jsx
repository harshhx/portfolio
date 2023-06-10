import React from "react";
import "./testimonails.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Review</h5>
            <h2>Testimonials</h2>

            <Swiper
                className="container testimonials_container"
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={40}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
            >
                <SwiperSlide className="testimonial">
                    {/*<img/>*/}
                    <h5 className="name">Rajprakash Yadav</h5>
                    <small className="designation">
                        Tech Arch Delivery Manager at Accenture
                    </small>
                    <small className="review">
                        Working with Harsh was an absolute pleasure, and I had the
                        opportunity to witness his exceptional skills and work ethic. Harsh
                        is an extremely fast learner who grasps new concepts and
                        technologies with ease. His dedication towards his work is
                        commendable, and he always completes his tasks within the given
                        deadline. Moreover, he is always ready to take up new projects and
                        learn different technologies, which makes him an asset to any
                        organization. His willingness to learn and explore new ideas is
                        truly inspiring, and it reflects in his work. In my opinion, he is a
                        true asset to any organization, and I have no doubt that he has the
                        capability to excel in any domain or company he chooses to work
                        with. I highly recommend Harsh for any role he may seek in the
                        future, and I am confident that he will make a positive contribution
                        to any organization he joins.
                    </small>
                </SwiperSlide>
                <SwiperSlide className="testimonial">
                    {/*<img/>*/}
                    <h5 className="name">Sumit Gupta</h5>
                    <small className="designation">Co-Founder and CTO at GetWork</small>
                    <small className="review">
                        Harsh is a very quick learner and always keen to learn new things.
                        He almost excels in all the works he is assigned. His learning
                        ability with the ingredient of humble attitude makes him unique in
                        himself which helps him in result driven thoughts which definitely
                        comes with optimum results. He will be a valuable asset for any
                        organisation in future.
                    </small>
                </SwiperSlide>
                <SwiperSlide className="testimonial">
                    {/*<img/>*/}
                    <h5 className="name">Niksa Khemka </h5>
                    <small className="designation">
                        Sustainability Consultant and Program Manager at Green Yatra
                    </small>
                    <small className="review">
                        The efforts put by him for all the assignments is commendable. He
                        was adaptive, hardworking and punctual. We wish you the very best
                        for all their future endeavors.
                    </small>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Testimonials;
