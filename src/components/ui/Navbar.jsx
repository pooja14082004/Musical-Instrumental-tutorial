export default function Navbar() {
    return (
        <header className="w-full absolute top-0 left-0 z-20">

            <nav className="w-full flex justify-between items-center px-12 py-4 text-white">

                {/* Logo + Tagline */}
                <div>
                    <h2 className="text-xl font-semibold">Sonorous</h2>
                    <p className="text-xs opacity-80">Sound your soul to succeed</p>
                </div>

                {/* Menu */}
                <ul className="flex items-center gap-8 text-sm">

                    <li className="border-b-2 border-white pb-1">Home</li>
                    <li className="hover:opacity-80 cursor-pointer">Music Classes</li>
                    <li className="hover:opacity-80 cursor-pointer">Shop</li>
                    <li className="hover:opacity-80 cursor-pointer">Testimonials</li>
                    <li className="hover:opacity-80 cursor-pointer">Career</li>
                    <li className="hover:opacity-80 cursor-pointer">Contact</li>
                    <li className="hover:opacity-80 cursor-pointer">Bands Registration</li>

                    <li className="hover:opacity-80 cursor-pointer flex items-center gap-1">
                        More ▼
                    </li>

                    <li className="text-lg cursor-pointer">🔍</li>
                    <li className="text-lg cursor-pointer">🛒</li>

                </ul>
            </nav>
        </header>
    );
}
