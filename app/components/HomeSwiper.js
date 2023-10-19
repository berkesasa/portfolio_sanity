"use client"
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import React, { useRef, useState } from 'react';
import GithubProject from './GithubProjects';
import WebProject from './WebProject';
import { Swiper, SwiperSlide } from 'swiper/react';

function HomeSwiper({ github, website }) {

    return (

        <>          
        <Swiper
            className="githubProjects !px-10"
            direction={'vertical'}
            // autoplay={{
            //     delay: 4000,
            //     disableOnInteraction: false,
            // }}
            autoHeight={true}
            pagination={{
                clickable: true,
            }}
            modules={[Autoplay, Pagination]}
        >
            {github?.map((project) => {
                if (project.homepageVisibility === true) {
                    const slicedDesc = project.description.split(' ').slice(0, 10).join(' ') + "..."
                    return (
                        <SwiperSlide key={project._id}>
                            <GithubProject
                                name={project.title}
                                technologies={project.technologies}
                                url={project.link}
                                date={project.date}
                                description={slicedDesc}
                            />
                        </SwiperSlide>
                    );
                }
            })}
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
                {website?.map((project) => {
                    if (project.homepageVisibility === true) {
                        return (
                            <SwiperSlide key={project._id}>
                                <WebProject
                                    name={project.title}
                                    imageSrc={project.imageUrl}
                                    url={project.link}
                                />
                            </SwiperSlide>
                        );
                    }
                })}
            </Swiper>
        </>
    )
}

export default HomeSwiper