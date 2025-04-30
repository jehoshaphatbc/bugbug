import Link from "next/link";

export default function Solution() {
    return (
        <>
            <section className="bg-gray-light relative" id="solution">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 px-8 gap-28 sm:gap-8 py-28">
                    {/* Header Section */}
                    <div className="col-span-ful sm:col-span-1 flex items-center">
                        <div>
                            <h2 className="text-5xl">Our Solutions</h2>
                            <p className="mt-8">
                                Bringing precision, simplicity, and sustainability to pest management with advanced AI and eco-friendly design principles for a healthier planet and productive crops.
                            </p>
                            <Link href="/" className="mt-12 rounded-lg bg-primary text-center uppercase text-xs tracking-[3px] px-6 py-4 text-gray-light inline-flex transition duration-150 ease-in-out hover:bg-dark-primary">
                                Discover our solutions
                            </Link>
                        </div>

                    </div>

                    {/* Cards Section */}
                    <div className="col-span-ful sm:col-span-1 flex flex-col gap-6">
                        {/* Card 1 */}
                        <div className="bg-white rounded-xl p-6">
                            <h3 className="text-2xl mb-2">AI-driven Monitoring</h3>
                            <p>
                            Our AI tools deliver real-time, data-driven insights to track and manage insect activity with unparalleled accuracy, helping farmers make informed, timely decisions.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-xl p-6">
                            <h3 className="text-2xl mb-2">Eco-modern Design</h3>
                            <p>
                            Seamlessly integrating technology with natural elements, our tools respect both the environment and the farming process, maintaining a low ecological footprint.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-xl p-6">
                            <h3 className="text-2xl mb-2">Future-ready Agriculture</h3>
                            <p>
                            Built for long-term innovation, Bug Bug tools evolve with agricultural trends, ensuring our clients stay ahead in sustainable pest management.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}