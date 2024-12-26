import Image from 'next/image';

const Header = () => (
  <header className="text-white text-5xl mt-6 ml-40 relative z-10">
    <Image
      src="/Plasmoid_Logo.png"
      alt="Plasmoid Logo"
      width={180}
      height={180}
      className="absolute -mt-6 -ml-44"
    />
    Plasmoid
  </header>
);

export default Header;
