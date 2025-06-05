const Header = ({ title, subtitle }) => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <h1 className="text-3xl font-bold">{title}</h1>
      {subtitle && <p className="text-sm">{subtitle}</p>}
    </header>
  );
};

export default Header;
