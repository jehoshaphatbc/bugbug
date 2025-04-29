import Image from 'next/image';
import Link from 'next/link';

const navigation = {
    solutions: [
        { name: 'Solution 1', href: '#' },
        { name: 'Solution 2', href: '#' },
        { name: 'Solution 3', href: '#' },
    ],
    legal: [
        { name: 'Terms of service', href: '#' },
        { name: 'Privacy policy', href: '#' },
        { name: 'Sitemap', href: '#' },
    ],
    social: [
        {
            name: 'Facebook',
            href: '#',
        },
        {
            name: 'Instagram',
            href: '#',
        },
        {
            name: 'LinkedIn',
            href: '#',
        },
    ],
}

export default function Footer() {
    return (
        <footer className="bg-primary relative">
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="xl:grid xl:grid-cols-3 gap-8 xl:gap-20">
                    <div className="space-y-8">
                        <Image
                            width={100}
                            height={100}
                            alt="Company name"
                            src="/logo.svg"
                            className="w-80"
                        />
                        <p className="tracking-wider leading-relaxed text-md text-white">
                            At Bug Bug Consulting, we’re shaping the future of sustainable agriculture with AI-powered tools that bring balance between innovation and nature.
                        </p>
                    </div>
                    <div className="mt-16 col-span-full sm:col-span-1 xl:mt-0">
                        <div>
                            <h3 className="text-xl text-secondary border-b border-secondary pb-5">Our Solutions</h3>
                            <ul role="list" className="mt-6 space-y-4">
                                {navigation.solutions.map((item) => (
                                    <li key={item.name}>
                                        <a href={item.href} className="text-md tracking-[3px] uppercase duration-150 transition ease-in-out text-white hover:text-secondary">
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="mt-16 col-span-full sm:col-span-1 xl:mt-0">
                        <div>
                            <h3 className="text-xl text-secondary border-b border-secondary pb-5">Contact Us</h3>
                            <ul role="list" className="mt-6 space-y-4">
                                <li className="text-md tracking-[3px] uppercase duration-150 transition ease-in-out text-white">
                                    456 Innovation Drive,<br/>
                                    Suite 300, San Francisco,<br/>
                                    CA 94105
                                </li>

                                <li className="text-md tracking-[3px] uppercase duration-150 transition ease-in-out text-white">
                                    HELLO@BUGBUG.COM
                                </li>

                                <li className="text-md tracking-[3px] uppercase duration-150 transition ease-in-out text-white">
                                    +1 234 567 8901
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-16 flex justify-between gap-2 flex-col sm:flex-row border-t border-secondary pt-8 sm:mt-20 lg:mt-24">
                    <div className="flex gap-2 flex-col sm:flex-row">
                        {navigation.legal.map((item, index) => (
                            <div key={item.name} className="flex items-center gap-2">
                                <Link href={item.href} className="text-xs tracking-[3px] uppercase duration-150 transition ease-in-out text-white hover:text-secondary">
                                    {item.name}
                                </Link>

                                {index < navigation.legal.length - 1 && <span className="text-xs text-white hidden sm:block">•</span>}
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-2 flex-col sm:flex-row">
                        {navigation.social.map((item, index) => (
                            <div key={item.name} className="flex items-center gap-2">
                                <Link
                                href={item.href}
                                className="text-xs tracking-[3px] uppercase duration-150 transition ease-in-out text-white hover:text-secondary"
                                >
                                {item.name}
                                </Link>
                                {index < navigation.social.length - 1 && <span className="text-xs text-white hidden sm:block">•</span>}
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </footer>
    )
}
