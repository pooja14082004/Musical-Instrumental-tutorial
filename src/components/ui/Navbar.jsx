export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-20 bg-white shadow-sm">

      <nav className="w-full flex justify-between items-center px-12 py-4">

        {/* Logo */}
        <div>
          <h2 className="text-xl font-semibold text-blue-700">
            Sonorous
          </h2>
          <p className="text-xs text-gray-500">
            Sound your soul to succeed
          </p>
        </div>

        {/* Menu */}
        <ul className="flex items-center gap-8 text-sm text-gray-700">

          <li className="border-b-2 border-blue-600 pb-1 cursor-pointer">
            Home
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            Music Classes
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            Testimonials
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            Contact
          </li>

          {/* LOGIN BUTTON */}
          <li>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Login
            </button>
          </li>

        </ul>
      </nav>
    </header>
  );
}
