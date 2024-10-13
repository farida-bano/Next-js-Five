import Image from 'next/image';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-5 bg-pink-400 text-white">
      <div className="flex items-center">
        <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
        <h1 className="ml-2 text-2xl">My Portfolio</h1>
      </div>
      <nav>
        <a href="#about" className="mx-2 hover:text-gray-300">About</a>
        <a href="#projects" className="mx-2 hover:text-gray-300">Projects</a>
        <a href="#contact" className="mx-2 hover:text-gray-300">Contact</a>
      </nav>
      <div className="flex">
        {/* Social media links */}
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-gray-300">GitHub</a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-gray-300">LinkedIn</a>
        <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-gray-300">Facebook</a>
      </div>

    </header>
  );
};

export default Header;