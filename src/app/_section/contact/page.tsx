import Image from 'next/image';

export default function Contact() {
    return (
        <div className="relative isolate bg-secondary">
            <div className="mx-auto max-w-7xl px-8 grid grid-cols-1 lg:grid-cols-2">
                <div className="flex flex-col justify-between pt-20 pb-10 sm:py-32 lg:py-48">
                    <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg flex flex-col justify-between h-full">
                        <div>
                            <h2 className="text-pretty text-4xl tracking-widest text-gray-900 sm:text-5xl">
                                Get in Touch
                            </h2>
                            <p className="mt-6 text-md text-gray-900">
                                Have questions or ready to learn more about how Bug Bug Consulting can transform your pest management? We're here to help.
                            </p>
                        </div>
        
                        <div className="flex gap-4 justify-between mt-10">
                            <Image src="/certified.svg" width={100} height={100} alt="" className="w-20 sm:w-80" />
                            <Image src="/certified.svg" width={100} height={100} alt="" className="w-20 sm:w-80" />
                            <Image src="/certified.svg" width={100} height={100} alt="" className="w-20 sm:w-80" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-between pb-20 sm:py-32 lg:py-48">
                    <form action="#" method="POST" className="bg-light p-10 space-y-6 rounded-lg">
                        { /* Name */ }
                        <div>
                            <label className="block text-xs font-semibold uppercase mb-1 tracking-wide">Name</label>
                            <input type="text" placeholder="e.g Alex Taylor" className="w-full border border-gray-400 bg-white px-4 py-2 rounded-lg" />
                            <p className="text-xs text-gray-600 mt-1">Please provide your name so we know how to address you.</p>
                        </div>

                        { /* Email */ }
                        <div>
                            <label className="block text-xs font-semibold uppercase mb-1 tracking-wide">Email Address</label>
                            <input type="email" placeholder="you@example.com" className="w-full border border-gray-400 bg-white px-4 py-2 rounded-lg" />
                            <p className="text-xs text-gray-600 mt-1">Enter a valid email address where we can reach you.</p>
                        </div>

                        { /* Phone */ }
                        <div>
                            <label className="block text-xs font-semibold uppercase mb-1 tracking-wide">Phone Number (Optional)</label>
                            <input type="tel" placeholder="+1 234 567 8901" className="w-full border border-gray-400 bg-white px-4 py-2 rounded-lg" />
                            <p className="text-xs text-gray-600 mt-1">Include your phone number if you'd like us to call you.</p>
                        </div>

                        { /* Subject */ }
                        <div>
                            <label className="block text-xs font-semibold uppercase mb-1 tracking-wide">Subject</label>
                            <select className="w-full border border-gray-400 bg-white px-4 py-2 rounded-lg text-gray-600">
                                <option>Select a subject</option>
                            </select>
                            <p className="text-xs text-gray-600 mt-1">Choose the topic that best matches your inquiry.</p>
                        </div>

                        { /* Message */ }
                        <div>
                            <label className="block text-xs font-semibold uppercase mb-1 tracking-wide">Message</label>
                            <textarea rows={4} placeholder="Type your message here..." className="w-full border border-gray-400 bg-white px-4 py-2 rounded-lg" />
                            <p className="text-xs text-gray-600 mt-1">Share details about your request, question, or feedback.</p>
                        </div>

                        { /* Submit Button */ }
                        <button type="submit" className="bg-primary text-white text-xs py-5 w-full rounded-lg tracking-[3px] uppercase hover:bg-secondary transition duration-150 ease-in-out">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    
    )
}
