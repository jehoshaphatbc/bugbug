'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import required modules
import { Navigation, Pagination } from 'swiper/modules';
import { useRef, useEffect } from 'react';

// Define the type for the testimony
const testimonies = [
    { name: 'PHOEBE B.', body: "Bug Bug's AI solutions have transformed our pest management approach, reducing crop loss significantly. It’s technology that finally aligns with nature.", company: 'Organic Farm Owner' },
    { name: 'chappell r.', body: "Since using Bug Bug’s monitoring tools, we’ve seen a noticeable improvement in yield and sustainability. Simple, precise, and eco-friendly.", company: 'Agricultural Consultant' },
    { name: 'HAYLEY W.', body: "Bug Bug Consulting's focus on eco-modern design has been a game-changer for our operation. Their tools not only deliver results but do so in a way that respects the environment.", company: 'Sustainable Agriculture Advocate' },
    { name: 'PHOEBE B.', body: "Bug Bug's AI solutions have transformed our pest management approach, reducing crop loss significantly. It’s technology that finally aligns with nature.", company: 'Organic Farm Owner' },
    { name: 'chappell r.', body: "Since using Bug Bug’s monitoring tools, we’ve seen a noticeable improvement in yield and sustainability. Simple, precise, and eco-friendly.", company: 'Agricultural Consultant' },
    { name: 'HAYLEY W.', body: "Bug Bug Consulting's focus on eco-modern design has been a game-changer for our operation. Their tools not only deliver results but do so in a way that respects the environment.", company: 'Sustainable Agriculture Advocate' },
];

export default function Carousel() {
    // Refs for navigation buttons
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    
    // Explicitly type swiperRef to Swiper instance
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const swiperRef = useRef<any>(null);

    useEffect(() => {
        if (swiperRef.current) {
            const swiper = swiperRef.current.swiper;
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
        }
    }, []);

    return (
        <>
            <div className="relative w-full">
                <button
                    ref={prevRef}
                    className="absolute hidden sm:block top-1/2 -left-20 z-10 transform -translate-y-1/2 border border-black hover:bg-white p-2 rounded-xl hover:shadow-lg transition ease-in-out duration-150"
                >
                    <Image width={100} height={100} alt="" src="./arrow-left.svg" className="w-8 h-8" />
                </button>
                <button
                    ref={nextRef}
                    className="absolute hidden sm:block top-1/2 -right-20 z-10 transform -translate-y-1/2 border border-black hover:bg-white p-2 rounded-xl hover:shadow-lg transition ease-in-out duration-150"
                >
                    <Image width={100} height={100} alt="" src="./arrow-right.svg" className="w-8 h-8" />
                </button>

                <Swiper
                    ref={swiperRef}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                        el: ".custom-pagination",
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
                    modules={[Navigation, Pagination]}
                    className="mySwiper items-stretch"
                >
                    {testimonies.map((item, index) => (
                        <SwiperSlide
                            key={index}
                            className="bg-white rounded-xl p-8 flex flex-col justify-between min-h-96"
                        >
                            <Image src="./quote.svg" width={100} height={100} alt="" className="w-10" />
                            <p className="italic tracking-wide leading-normal mt-6">{item.body}</p>
                            <div className="mt-4 text-black">
                                <p className="uppercase tracking-[3px] text-sm flex items-center gap-4">
                                    <div className="border-b border-gray-400 w-10"></div>
                                    <span>{item.name}</span>
                                </p>
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
