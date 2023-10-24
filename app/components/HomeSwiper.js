"use client"
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import React, { useEffect ,useRef, useState } from 'react';
import GithubProject from './GithubProjects';
import WebProject from './WebProject';
import { Swiper, SwiperSlide } from 'swiper/react';

function HomeSwiper({ github, website }) {

    const [isVertical, setIsVertical] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            // Ekran genişliği 1024'ten küçükse Swiper'ı dikey yap
            setIsVertical(window.innerWidth > 1280);
        };

        // İlk olarak sayfa yüklendiğinde ekran genişliğini kontrol et
        handleResize();

        // Tarayıcı boyutu değiştiğinde ekran genişliğini kontrol et
        window.addEventListener('resize', handleResize);

        // Event dinlemeyi kaldır
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (

        <>
            <Swiper
                className={`githubProjects  ${isVertical ? 'swiper-vertical !px-10' : 'swiper-horizontal !p-5'}`}
                direction={isVertical ? 'vertical' : 'horizontal'}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                spaceBetween={35}
                autoHeight={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
            >
                {github?.map((project) => {

                    if (project.homepageVisibility === true) {
                        return (
                            <SwiperSlide key={project._id}>
                                <GithubProject
                                    name={project.title}
                                    technologies={project.technologies}
                                    url={project.link}
                                    date={project.date}
                                    description={project.description}
                                />
                            </SwiperSlide>
                        );
                    }
                })}
            </Swiper>
            <Swiper
                className={`websiteProjects  ${isVertical ? 'swiper-vertical !px-10' : 'swiper-horizontal !p-5'}`}
                direction={isVertical ? 'vertical' : 'horizontal'}
                spaceBetween={35}
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