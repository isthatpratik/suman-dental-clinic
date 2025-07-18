import Link from 'next/link'

const links = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '#about' },
    { title: 'Services', href: '#services' },
    { title: 'Doctors', href: '#doctors' },
    { title: 'Reviews', href: '#reviews' },
    { title: 'Contact', href: '#contact' },
]

export default function FooterSection() {
    return (
        <footer className="bg-primary py-16 -mt-8">
            <div className="mx-auto max-w-7xl px-6">
                <Link
                    href="/"
                    aria-label="go home"
                    className="mx-auto block text-2xl text-white font-bold size-fit">
                    Suman Dental Clinic
                </Link>

                <div className="my-8 flex flex-wrap justify-center gap-6">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="text-card hover:text-white block duration-150">
                            <span>{link.title}</span>
                        </Link>
                    ))}
                </div>
                <span className="text-muted block text-center text-sm"> © {new Date().getFullYear()} Suman Dental Hospital, All rights reserved</span>
            </div>
        </footer>
    )
}
