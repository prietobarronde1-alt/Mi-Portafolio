
import Link from 'next/link';
import { navLinks, heroData } from '@/data';
import { ThemeToggle } from './ThemeToggle';

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full max-w-5xl z-50 flex justify-between items-center py-6 px-6 md:px-0 backdrop-blur-md bg-white/50 dark:bg-zinc-950/50 border-b border-zinc-100 dark:border-zinc-800 lg:border-none lg:bg-transparent">
            <div className="font-bold text-xl tracking-tighter">DAVID PRIETO</div>
            <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-400 items-center">
                {navLinks.map((link) => (
                    <Link key={link.name} href={link.href} className="hover:text-blue-600 transition-colors">
                        {link.name}
                    </Link>
                ))}
            </div>
            <div className="flex gap-4 items-center">
                <ThemeToggle />
                <a
                    href={heroData.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
                >
                    {heroData.buttons.contact}
                </a>
            </div>
        </nav>
    );
}
