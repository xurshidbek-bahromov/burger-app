import React from 'react';

function Menu() {
  return (
    <div className="bg-gray-700 mx-auto py-8 px-28 text-white">

      <span className="text-[20px] mr-6 cursor-pointer hover:text-green-800">Гамбургеры</span>
      <span className="text-[20px] m-6 cursor-pointer hover:text-green-800">Хот доги</span>
      <span className="text-[20px] m-6 cursor-pointer hover:text-green-800">Пицца</span>
      <span className="text-[20px] m-6 cursor-pointer hover:text-green-800">Напитки</span>
      <span className="text-[20px] m-6 cursor-pointer hover:text-green-800">Соки</span>

      <div className="text-center mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-gray-800 p-20 shadow-2xl rounded-lg cursor-pointer hover:bg-green-400">
          <h3 className="text-xl font-semibold mb-4 text-start text-green-400">C  ГОВЯДИНОЙ</h3>
          <span className='text-gray-800 text-[20px]'>Добавить в корзину</span>
          <p className="text-green-400 mb-4 text-start">Свежая хрустящая булочка, листики салата, маринованный огурец с луком и небольшая котлета, сдобренная майонезом и кетчупом</p>
        </div>
        <div className="bg-gray-800 p-20 shadow-lg rounded-lg cursor-pointer hover:bg-green-400">
          <h3 className="text-xl font-semibold mb-4 text-start text-green-400">C  ГОВЯДИНОЙ</h3>
          <span className='text-gray-800 text-[20px]'>Добавить в корзину</span>
          <p className="text-green-400 mb-4 text-start">Свежая хрустящая булочка, листики салата, маринованный огурец с луком и небольшая котлета, сдобренная майонезом и кетчупом</p>
        </div>
        <div className="bg-gray-800 p-20 shadow-lg rounded-lg cursor-pointer hover:bg-green-400">
          <h3 className="text-xl font-semibold mb-4 text-start text-green-400">C  ГОВЯДИНОЙ</h3>
          <span className='text-gray-800 text-[20px]'>Добавить в корзину</span>
          <p className="text-green-400 mb-4 text-start">Свежая хрустящая булочка, листики салата, маринованный огурец с луком и небольшая котлета, сдобренная майонезом и кетчупом</p>
        </div>
      </div>
    </div>
  );
}

export default Menu;