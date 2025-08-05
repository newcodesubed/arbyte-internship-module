import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen px-8 pt-20">
      <h2 className="text-4xl font-bold text-primary mb-6">Contact</h2>
      <form className="max-w-lg space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-3 rounded bg-black border border-primary text-white" />
        <input type="email" placeholder="Your Email" className="w-full p-3 rounded bg-black border border-primary text-white" />
        <textarea rows="5" placeholder="Your Message" className="w-full p-3 rounded bg-black border border-primary text-white"></textarea>
        <button type="submit" className="px-6 py-2 bg-primary text-black rounded hover:opacity-90 transition">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;