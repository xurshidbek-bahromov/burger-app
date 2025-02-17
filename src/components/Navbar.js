import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="duration-200 backdrop-blur-2xl text-white px-28 py-3 fixed justify-between w-screen z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold bg-green-800 rounded-[5px] px-6 py-[2px]">Street88</div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <ul className={`${isOpen ? 'block' : 'hidden'} md:flex md:space-x-4`}>
          <li><a href="#home" className="rounded-b-md px-4 py-[19px] hover:bg-green-800">Корзина</a></li>
          <li><a href="#menu" className="rounded-b-md px-4 py-[19px] hover:bg-green-800">Меню</a></li>
          <li><a href="#about" className="rounded-b-md px-4 py-[19px] hover:bg-green-800">О нас</a></li>
          <li><a href="#contact" className="rounded-b-md px-4 py-[19px] hover:bg-green-800">Контакты</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;