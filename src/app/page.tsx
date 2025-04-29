import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="sticky w-full top-0 h-screen bg-light">
        <div className="max-w-7xl mx-auto h-full grid grid-cols-2 gap-0 sm:gap-4 pt-[20vh]">
          <div className="h-full">
            <span className="text-gray-500 text-xl tracking-wider">AI-powered insect monitoring tools</span>

            <h1 className="text-4xl sm:text-7xl tracking-widest leading-normal mt-4">
              Empowering Sustainable Growth Through Precision Insect Monitoring
            </h1>

            <div className="flex gap-4 mt-10">
              <Link href="/" className="rounded-xl bg-primary px-6 py-4 text-light transition duration-150 ease-in-out hover:bg-secondary">
                Learn More
              </Link>

              <Link href="/" className="rounded-xl border border-primary px-6 py-4 text-primary transition duration-150 ease-in-out hover:border-secondary hover:text-secondary">
                Get Started
              </Link>
              
            </div>
          </div>
          <div className="h-full">
            <Image src="/window.svg" width={100} height={800} alt="alt"></Image>
          </div>

        </div>
      </section>
      <section className="relative w-full top-0 h-[80vh] bg-primary">
        <h1>Test</h1>
      </section>
      <section className="relative w-full top-0 h-[80vh] bg-secondary">
        <h1>Test</h1>
      </section>
    </>
  );
}
