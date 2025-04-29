import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <>
            <section className="relative bg-light" id="about">
                <div className="rounded-xl bg-baby-powder ">

                    <div className="grid grid-cols-1 sm:grid-cols-2 mx-auto max-w-7xl py-28 gap-8 sm:gap-20 px-8">
                        <div className="w-full h-96 col-span-full sm:col-span-1">
                            <Image src="/about.jpg" width={1000} height={1000} alt="alt" className="object-cover rounded-xl h-full w-full"></Image>
                        </div>
                        <div className="col-span-full sm:col-span-1 flex flex-col justify-between">
                            <div>
                                <h1 className="text-5xl">About Us</h1>
                                <p className="mt-8">Bug Bug Consulting pioneers eco-conscious, AI-driven solutions for insect monitoring in agriculture. Our cutting-edge tools blend sophisticated artificial intelligence with an organic, earth-inspired approach, creating sustainable practices that benefit both crop yields and the environment. With a minimalist, eco-modern design philosophy, our tools are crafted to simplify complex challenges, making data accessible, actionable, and aligned with nature’s rhythms.</p>
                            </div>
                            <div className="mt-4">
                                <Link href="/" className="rounded-lg bg-primary text-center uppercase text-xs tracking-[3px] px-6 py-4 text-light inline-flex transition duration-150 ease-in-out hover:bg-dark-primary">
                                    Learn More About Our Vision
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}