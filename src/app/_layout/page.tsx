'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from 'react'
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { AnimatePresence, motion } from 'framer-motion'

const products = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function Navigation() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <section className="flex justify-center">
            <header className="z-50 max-w-7xl w-full fixed top-0 sm:top-8 bg-primary rounded-none sm:rounded-lg shadow-lg">
                <div className="px-6 sm:px-14 py-6 flex justify-between items-center">
                    <Image
                        src={`/logo.svg`}
                        alt="Logo"
                        width="200"
                        height="32"
                        className="w-40 h-auto"
                    />

                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-light"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="size-6" />
                        </button>
                    </div>

                    <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                        <Link
                            href="/"
                            className="relative uppercase tracking-[3px] py-3 text-xs text-white hover:text-light duration-150 transition ease-in-out group"
                        >
                            About Us
                            <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                        </Link>

                        <Popover className="relative">
                            <PopoverButton className="relative inline-flex items-start uppercase tracking-[3px] py-3 text-xs text-white hover:text-light duration-150 transition ease-in-out group">
                            <div className="flex gap-1 items-center">
                                <span>Solutions</span>
                                <ChevronDownIcon aria-hidden="true" className="size-5 -mt-0.5 flex-none text-gray-400" />
                            </div>
                            <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                            </PopoverButton>

                            <PopoverPanel
                            transition
                            className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                            <div className="p-4">
                                {products.map((item) => (
                                <div
                                    key={item.name}
                                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                                >
                                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                    <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                                    </div>
                                    <div className="flex-auto">
                                    <a href={item.href} className="block font-semibold text-gray-900">
                                        {item.name}
                                        <span className="absolute inset-0" />
                                    </a>
                                    <p className="mt-1 text-gray-600">{item.description}</p>
                                    </div>
                                </div>
                                ))}
                            </div>
                            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                {callsToAction.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                                >
                                    <item.icon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                                    {item.name}
                                </a>
                                ))}
                            </div>
                            </PopoverPanel>
                        </Popover>
                        <Link
                            href="/"
                            className="relative uppercase tracking-[3px] py-3 text-xs text-white hover:text-light duration-150 transition ease-in-out group"
                        >
                            Grants and Collaborations
                            <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                        </Link>

                        <Link
                            href="/"
                            className="relative uppercase tracking-[3px] py-3 text-xs text-white hover:text-light duration-150 transition ease-in-out group"
                        >
                            In The News
                            <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                        </Link>

                        <Link
                            href="/"
                            className="duration-150 transition ease-in-out rounded-lg bg-light p-4 text-primary text-xs uppercase tracking-[3px] border border-light hover:bg-primary/80 hover:text-light"
                        >
                            Contact Us
                        </Link>
                    </PopoverGroup>        

                </div>
                                
                <AnimatePresence>
                    {mobileMenuOpen && (
                    <Dialog static  open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }} 
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/30" 
                        />

                        <div className="fixed inset-0 z-10" />
                        <DialogPanel 
                            className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
                            as={motion.div}
                            initial={{ x: "100%" }}  
                            animate={{ x: "0%" }}      
                            exit={{ x: "100%" }}     
                        >
                            <div className="flex items-center justify-between">
                                <Link href="#" className="-m-1.5 p-1.5">
                                    <span className="sr-only">Your Company</span>
                                    <Image
                                        alt=""
                                        src="/logo.svg"
                                        className="h-8 w-auto"
                                        width={100}
                                        height={100}
                                    />
                                </Link>
                                <button
                                    type="button"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon aria-hidden="true" className="size-6" />
                                </button>
                            </div>
                            <div className="mt-20 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">
                                        <Link
                                            href="#"
                                            className="-mx-3 uppercase tracking-[3px] block rounded-lg px-3 py-2 text-center text-gray-900 hover:bg-gray-50"
                                        >
                                            About Us
                                        </Link>

                                        <Disclosure as="div" className="-mx-3">
                                            <DisclosureButton className="group uppercase tracking-[3px] flex w-full items-center justify-center rounded-lg py-2 pl-3 pr-3.5 text-center text-gray-900 hover:bg-gray-50">
                                                Solutions
                                                <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-[open]:rotate-180" />
                                            </DisclosureButton>
                                            <DisclosurePanel className="mt-2 space-y-2">
                                                {[...products, ...callsToAction].map((item) => (
                                                    <DisclosureButton
                                                    key={item.name}
                                                    as="a"
                                                    href={item.href}
                                                    className="block rounded-lg py-2 pl-6 pr-3 text-sm text-gray-900 hover:bg-gray-50"
                                                    >
                                                    {item.name}
                                                    </DisclosureButton>
                                                ))}
                                            </DisclosurePanel>
                                        </Disclosure>
                                        
                                        <Link
                                            href="#"
                                            className="-mx-3 uppercase tracking-[3px] block rounded-lg px-3 py-2 text-center text-gray-900 hover:bg-gray-50"
                                        >
                                            Grants And Collaborations
                                        </Link>
                                        <Link
                                            href="#"
                                            className="-mx-3 uppercase tracking-[3px] block rounded-lg px-3 py-2 text-center text-gray-900 hover:bg-gray-50"
                                        >
                                            In The News
                                        </Link>
                                        <Link
                                            href="#"
                                            className="-mx-3 uppercase tracking-[3px] block bg-primary text-light rounded-lg px-3 py-2 text-center hover:bg-gray-50"
                                        >
                                            Contact Us
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </DialogPanel>
                    </Dialog>
                    )}
                </AnimatePresence>
            </header>
        </section>
    );
}