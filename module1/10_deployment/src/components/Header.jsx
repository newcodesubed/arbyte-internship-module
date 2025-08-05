const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full p-5 z-50 bg-black bg-opacity-80 flex justify-between items-center">
      <a href="#home" className="text-3xl font-extrabold text-primary">Subed</a>
      <nav className="space-x-6">
        {['Home', 'Service', 'Skill', 'Education', 'Experience', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-white hover:text-primary border-b-2 border-transparent hover:border-primary"
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;