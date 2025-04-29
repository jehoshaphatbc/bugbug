import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <>
            <section className="sm:sticky w-full top-0 bg-light">
                <div className="max-w-7xl mx-auto h-full grid grid-cols-3 px-8 gap-4 pb-28 sm:py-[20vh]">
                    <div className="h-full col-span-full sm:col-span-2">
                        <span className="text-gray-500 text-xl tracking-wider">AI-powered insect monitoring tools</span>

                        <h1 className="text-4xl sm:text-7xl tracking-widest leading-normal mt-4">
                        Empowering Sustainable Growth Through Precision Insect Monitoring
                        </h1>

                        <div className="flex gap-4 mt-10">
                        <Link href="/" className="rounded-lg bg-primary px-6 py-4 text-light transition duration-150 ease-in-out hover:bg-dark-primary">
                            Learn More
                        </Link>

                        <Link href="/" className="rounded-lg border border-primary px-6 py-4 text-primary transition duration-150 ease-in-out hover:shadow-xl hover:bg-white">
                            Get Started
                        </Link>
                        
                        </div>
                    </div>
                    <div className="h-full col-span-full sm:col-span-1">
                        <Image src="/hero.jpg" quality={100} width={1000} height={1000} alt="alt" className="w-full h-[63vh] rounded-xl object-cover"></Image>
                    </div>

                </div>
            </section>
        </>
    );
}