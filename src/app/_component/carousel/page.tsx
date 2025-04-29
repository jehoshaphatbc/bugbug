'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import required modules
import { Navigation, Pagination } from 'swiper/modules';
import { useRef } from 'react';

const testimonies = [
    { name: 'PHOEBE B.', body: "Bug Bug's AI solutions have transformed our pest management approach, reducing crop loss significantly. It’s technology that finally aligns with nature.", company: 'Organic Farm Owner' },
    { name: 'chappell r.', body: "Since using Bug Bug’s monitoring tools, we’ve seen a noticeable improvement in yield and sustainability. Simple, precise, and eco-friendly.", company: 'Agricultural Consultant' },
    { name: 'HAYLEY W.', body: "Bug Bug Consulting's focus on eco-modern design has been a game-changer for our operation. Their tools not only deliver results but do so in a way that respects the environment.", company: 'Sustainable Agriculture Advocate' },
    { name: 'PHOEBE B.', body: "Bug Bug's AI solutions have transformed our pest management approach, reducing crop loss significantly. It’s technology that finally aligns with nature.", company: 'Organic Farm Owner' },
    { name: 'chappell r.', body: "Since using Bug Bug’s monitoring tools, we’ve seen a noticeable improvement in yield and sustainability. Simple, precise, and eco-friendly.", company: 'Agricultural Consultant' },
    { name: 'HAYLEY W.', body: "Bug Bug Consulting's focus on eco-modern design has been a game-changer for our operation. Their tools not only deliver results but do so in a way that respects the environment.", company: 'Sustainable Agriculture Advocate' },
]


export default function Carousel() {
    // Refs for navigation buttons
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <>
            <div className="relative w-full">
                <button
                    ref={prevRef}
                    className="absolute hidden sm:block top-1/2 -left-20 z-10 transform -translate-y-1/2 border border-black hover:bg-white p-2 rounded-xl hover:shadow-lg transition ease-in-out duration-150"
                >
                    <Image width={100} height={100} alt="" src="/arrow-left.svg" className="w-8 h-8"></Image>
                </button>
                <button
                    ref={nextRef}
                    className="absolute hidden sm:block top-1/2 -right-20 z-10 transform -translate-y-1/2 border border-black hover:bg-white p-2 rounded-xl hover:shadow-lg transition ease-in-out duration-150"
                >
                    <Image width={100} height={100} alt="" src="/arrow-right.svg" className="w-8 h-8"></Image>
                </button>

                <Swiper
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                        el: ".custom-pagination",
                    }}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    onBeforeInit={(swiper) => {
                        // Assign refs to Swiper's navigation elements
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                    modules={[Navigation, Pagination]}
                    className="mySwiper items-stretch"
                >
                        
                        {testimonies.map((item, index) => (
                            <SwiperSlide
                                key={index}
                                className="bg-white rounded-xl p-8 flex flex-col justify-between min-h-96"
                            >
                                <Image src="/quote.svg" width={100} height={100} alt="" className="w-10"></Image>
                                <p className="italic tracking-wide leading-normal mt-6">{item.body}</p>
                                <div className="mt-4">
                                    <p className="uppercase tracking-[3px] text-sm">{item.name}</p>
                                    <p className="uppercase tracking-[3px] text-sm">{item.company}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                </Swiper>
                <div className="custom-pagination"></div>
            </div>
        </>
    );
}
