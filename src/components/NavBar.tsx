import { useEffect, useState, useRef } from 'react';
import { Menu, X } from "lucide-react";

export const NavBar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        const handleClickOutside = (event: MouseEvent) => {
            if (
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(event.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white dark:bg-gray-800 shadow-md py-2" : "bg-transparent py-4"}`}>
            <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                <a
                    href="#"
                    className="font-bold hover:text-gray-700 transition-colors"
                    style={{ color: "#00cec9", fontFamily: "'Lilita One', sans-serif" ,fontSize:"30px"}}
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({top: 0, behavior: "smooth"});
                    }}
                >
                    Yehani.
                </a>

                <div className="flex items-center space-x-8">
                    <div className="hidden md:flex space-x-8">
                        {navItems.map(item => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="text-white hover:text-[#00cec9] transition-colors font-[Montserrat]"
                                style={{fontFamily: 'Montserrat, sans-serif',fontWeight: '600'}}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>


                    <button
                        ref={buttonRef}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? <X className="h-6 w-6 text-gray-600"/> :
                            <Menu className="h-6 w-6 text-gray-600"/>}
                    </button>
                </div>
            </div>
            <div
                ref={mobileMenuRef}
                className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
            >
                <div className="container mx-auto px-4 py-4 space-y-4">
                {navItems.map(item => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="block w-full text-left px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
};
