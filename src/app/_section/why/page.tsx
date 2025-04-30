import Link from "next/link";
import Image from "next/image";

export default function Why() {
    return (
        <>
            <div className="relative bg-gray-light w-full lg:h-20">
                <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path 
                        d="M0 40C360 80 720 0 1080 40C1260 60 1440 20 1440 20V100H0V40Z" 
                        className="fill-current text-secondary" 
                    />
                </svg>
            </div>
            <section className="relative bg-secondary" id="why">
                <div className="grid grid-cols-1 sm:grid-cols-2 mx-auto max-w-7xl py-36 gap-8 sm:gap-20 px-8">
                    <div className="w-full h-96 col-span-full sm:col-span-1">
                        <Image src="./why.jpg" width={1000} height={1000} alt="alt" className="object-cover rounded-xl h-full w-full"></Image>
                    </div>
                    <div className="col-span-full sm:col-span-1 flex flex-col justify-between">
                        <div>
                            <h1 className="text-5xl text-black">Why Choose Bug Bug?</h1>
                            <p className="mt-8 text-black">At Bug Bug, we prioritize sustainable growth. By merging AI with a respect for natural ecosystems, we provide solutions that enhance agricultural productivity without compromising the earth’s resources. Our commitment to environmental stewardship ensures that every Bug Bug tool not only meets today’s needs but also adapts to tomorrow’s challenges.</p>
                        </div>
                        <div className="mt-4">
                            <Link href="/" className="rounded-lg bg-primary text-center uppercase text-xs tracking-[3px] px-6 py-4 text-gray-light inline-flex transition duration-150 ease-in-out hover:bg-dark-primary">
                                Learn How We Make a Difference
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}