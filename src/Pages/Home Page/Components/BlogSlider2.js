import React from 'react'
import img from "../../../Resources/cardimg1.webp";
import '../../../css/Home Page/BlogSlider.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

export default function BlogSlider2() {
    return (
        <>
            <div className="blogslidermaincontainer" >
                <div className="blogsliderheader">
                    Explore Our Articles
                </div>
                <Swiper
                    slidesPerView={2}
                    centeredSlides={false}
                    slidesPerGroupSkip={1}
                    grabCursor={true}
                    keyboard={{
                        enabled: true,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                        },
                    480: {
                            slidesPerView: 2,
                            slidesPerGroup: 1,
                        },
                        950: {
                            slidesPerView: 3,
                            slidesPerGroup: 1,
                        },
                    }}
                    scrollbar={true}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="blogsitem">
                            <div className="blogssection1">
                                <div className="bloglogo">
                                    <img src={img} alt="" />
                                </div>
                                <div className="bloginfo">
                                    <div className="blogtitle">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </div>
                                    <div className="blogpublishdate">Pulished on 7/5/24</div>
                                </div>
                            </div>
                            <div className="blogssection2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Cupiditate ullam id, dolores in eos sit.
                            </div>
                            <div className="blogssection3">By Bernard Blackwood</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="blogsitem">
                            <div className="blogssection1">
                                <div className="bloglogo">
                                    <img src={img} alt="" />
                                </div>
                                <div className="bloginfo">
                                    <div className="blogtitle">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </div>
                                    <div className="blogpublishdate">Pulished on 7/5/24</div>
                                </div>
                            </div>
                            <div className="blogssection2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Cupiditate ullam id, dolores in eos sit.
                            </div>
                            <div className="blogssection3">By Bernard Blackwood</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="blogsitem">
                            <div className="blogssection1">
                                <div className="bloglogo">
                                    <img src={img} alt="" />
                                </div>
                                <div className="bloginfo">
                                    <div className="blogtitle">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </div>
                                    <div className="blogpublishdate">Pulished on 7/5/24</div>
                                </div>
                            </div>
                            <div className="blogssection2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Cupiditate ullam id, dolores in eos sit.
                            </div>
                            <div className="blogssection3">By Bernard Blackwood</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="blogsitem">
                            <div className="blogssection1">
                                <div className="bloglogo">
                                    <img src={img} alt="" />
                                </div>
                                <div className="bloginfo">
                                    <div className="blogtitle">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </div>
                                    <div className="blogpublishdate">Pulished on 7/5/24</div>
                                </div>
                            </div>
                            <div className="blogssection2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Cupiditate ullam id, dolores in eos sit.
                            </div>
                            <div className="blogssection3">By Bernard Blackwood</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="blogsitem">
                            <div className="blogssection1">
                                <div className="bloglogo">
                                    <img src={img} alt="" />
                                </div>
                                <div className="bloginfo">
                                    <div className="blogtitle">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </div>
                                    <div className="blogpublishdate">Pulished on 7/5/24</div>
                                </div>
                            </div>
                            <div className="blogssection2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Cupiditate ullam id, dolores in eos sit.
                            </div>
                            <div className="blogssection3">By Bernard Blackwood</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="blogsitem">
                            <div className="blogssection1">
                                <div className="bloglogo">
                                    <img src={img} alt="" />
                                </div>
                                <div className="bloginfo">
                                    <div className="blogtitle">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </div>
                                    <div className="blogpublishdate">Pulished on 7/5/24</div>
                                </div>
                            </div>
                            <div className="blogssection2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Cupiditate ullam id, dolores in eos sit.
                            </div>
                            <div className="blogssection3">By Bernard Blackwood</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="blogsitem">
                            <div className="blogssection1">
                                <div className="bloglogo">
                                    <img src={img} alt="" />
                                </div>
                                <div className="bloginfo">
                                    <div className="blogtitle">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </div>
                                    <div className="blogpublishdate">Pulished on 7/5/24</div>
                                </div>
                            </div>
                            <div className="blogssection2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Cupiditate ullam id, dolores in eos sit.
                            </div>
                            <div className="blogssection3">By Bernard Blackwood</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="blogsitem">
                            <div className="blogssection1">
                                <div className="bloglogo">
                                    <img src={img} alt="" />
                                </div>
                                <div className="bloginfo">
                                    <div className="blogtitle">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </div>
                                    <div className="blogpublishdate">Pulished on 7/5/24</div>
                                </div>
                            </div>
                            <div className="blogssection2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Cupiditate ullam id, dolores in eos sit.
                            </div>
                            <div className="blogssection3">By Bernard Blackwood</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="blogsitem">
                            <div className="blogssection1">
                                <div className="bloglogo">
                                    <img src={img} alt="" />
                                </div>
                                <div className="bloginfo">
                                    <div className="blogtitle">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </div>
                                    <div className="blogpublishdate">Pulished on 7/5/24</div>
                                </div>
                            </div>
                            <div className="blogssection2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Cupiditate ullam id, dolores in eos sit.
                            </div>
                            <div className="blogssection3">By Bernard Blackwood</div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}
