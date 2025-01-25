import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="/" className="text-white text-2xl font-bold">BKBCK</a>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-white hover:text-accent transition-colors">Home</a>
            <a href="#" className="text-white hover:text-accent transition-colors">About</a>
            <a href="#" className="text-white hover:text-accent transition-colors">Courses</a>
            <a href="#" className="text-white hover:text-accent transition-colors">Faculty</a>
            <a href="#" className="text-white hover:text-accent transition-colors">Contact</a>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-white hover:text-accent transition-colors">Home</a>
              <a href="#" className="text-white hover:text-accent transition-colors">About</a>
              <a href="#" className="text-white hover:text-accent transition-colors">Courses</a>
              <a href="#" className="text-white hover:text-accent transition-colors">Faculty</a>
              <a href="#" className="text-white hover:text-accent transition-colors">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};