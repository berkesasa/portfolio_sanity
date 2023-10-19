"use client"
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import React, { useRef, useState } from 'react';
import GithubProjects from './GithubProjects';
import WebProject from './WebProject';
import { Swiper, SwiperSlide } from 'swiper/react';

function HomeProjects() {
    return (
        <div className='container'>
            <div>
                <h2>Projects</h2>
            </div>
            <div className='max-lg:mt-7 lg:mt-14'>
                <div className='grid xl:grid-cols-2 max-xl:gap-10 xl:gap-20 !h-auto items-center'>
                    <Swiper
                        className="githubProjects !px-10"
                        direction={'vertical'}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        autoHeight={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay, Pagination]}
                    >
                        <SwiperSlide>
                            <GithubProjects
                                name="Basic Components"
                                technologies="React"
                                url="https://github.com/berkesasa/React-basiccomponents"
                                date="28.08.2023"
                                description="This project is a Next.js application developed to mimic the core functionalities of the Airbnb website. The technologies used in the project include Next.js, React, and Tailwind CSS."
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <GithubProjects
                                name="Basic Components"
                                technologies="React"
                                url="https://github.com/berkesasa/React-basiccomponents"
                                date="28.08.2023"
                                description="This project is a Next.js application developed to mimic the core functionalities of the Airbnb website. The technologies used in the project include Next.js, React, and Tailwind CSS."
                            />
                        </SwiperSlide>
                    </Swiper>
                    <Swiper
                        className="websiteProjects !px-10"
                        direction={'vertical'}
                        pagination={{
                            clickable: true,
                        }}
                        autoHeight={true}
                        modules={[Pagination]}
                    >
                        <SwiperSlide>
                            <WebProject
                                name="Lorem ipsum dolor sit amet."
                                imageSrc="/projectipsum.jpeg"
                                url="lipsum.com"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <WebProject
                                name="Lorem ipsum dolor sit amet."
                                imageSrc="/projectipsum.jpeg"
                                url="lipsum.com"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>

                
            </div>
        </div>
    )
}

export default HomeProjects