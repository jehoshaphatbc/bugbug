import Carousel from "@/app/_component/carousel/page";

export default function Testimony() {
    return (
        <>
            <div className="relative bg-secondary w-full lg:h-20">
                <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path 
                        d="M0 40C360 80 720 0 1080 40C1260 60 1440 20 1440 20V100H0V40Z" 
                        className="fill-current text-light" 
                    />
                </svg>
            </div>
            <section className="bg-light relative">
                <div className="mx-auto max-w-7xl py-28 px-8">
                    <div className="text-center mb-10">
                        <h1 className="text-5xl leading-normal tracking-wide">What Our Clients are Saying</h1>
                    </div>
                    <Carousel></Carousel>
                </div>
            </section>
    </>
    )
}
