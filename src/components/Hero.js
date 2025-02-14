import React from 'react';

function Hero() {
  return (
    <div className="bg-gray-800 py-20 h-screen px-28">
      <div className="container mx-auto text-start">
        <h1 className="text-[72px] font-bold text-green-600">Большой гамбургер</h1>
        <h1 className="text-[36px] mb-4 text-green-600 my-2">ГОВЯДИНА</h1>
        <p className="text-lg text-white my-16">
          Свежая хрустящая булочка, листики салата, маринованный огурец с луком и небольшая котлета, одобренная майонезом и кетчупом, - таков классический портрет гамбургера, наиболее распространенной «быстрой еды», от которой ежедневно на больничных койках оказываются десятки тысяч американцев.
        </p>
        <span className='bg-green-700 px-14 py-6 text-[60px] text-white rounded-2xl'>14 500</span>
      </div>
    </div>
  );
}

export default Hero;