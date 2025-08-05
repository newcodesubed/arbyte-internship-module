import React from 'react';
import image from '../assets/download.jpeg';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center gap-10 px-8 pt-20">
      <div className="flex-shrink-0 w-80 h-80 rounded-full overflow-hidden shadow-lg">
        <img src={image} alt="Subed" className="w-full h-full object-cover hover:scale-105 transition duration-300" />
      </div>
      <div>
        <h1 className="text-5xl font-bold mb-2">Hi, It's <span className="text-primary">Subed</span></h1>
        <h3 className="text-2xl font-semibold text-primary mb-4">I'm a <span className="typing-text">Software Developer</span></h3>
        <p className="text-lg max-w-xl mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt qui
          a porro hic, error aut nulla consequuntur nam vitae. Eos dignissimos
          veritatis dolorum alias? Temporibus ratione aliquam aut ex quo?
        </p>
        <div className="flex space-x-4 mb-4">
          <a href="#" className="text-2xl"><i className="fa fa-linkedin" /></a>
          <a href="#" className="text-2xl"><i className="fa fa-github" /></a>
          <a href="#" className="text-2xl"><i className="fa fa-twitter" /></a>
          <a href="#" className="text-2xl"><i className="fa fa-instagram" /></a>
        </div>
        <a href="#contact" className="inline-block px-6 py-2 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-black transition">Hire Me</a>
      </div>
    </section>
  );
};

export default Home;