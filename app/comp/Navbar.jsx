import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white text-black shadow-black container mx-auto">
        <Link href="/" className="flex items-center">
          <h1 className="text-xl font-bold text-red-900">Movieflix</h1>
        </Link>
      <div className="flex space-x-4">
        <Link href="/">
          <p className="text-gray-600 hover:text-gray-800 cursor-pointer">Home</p>
        </Link>
        <Link href="../about">
          <p className="text-gray-600 hover:text-gray-800 cursor-pointer">About</p>
        </Link>
        <Link href="/movie">
          <p className="text-gray-600 hover:text-gray-800 cursor-pointer">Movie</p>
        </Link>
        <Link href="/contact">
          <p className="text-gray-600 hover:text-gray-800 cursor-pointer">Contact</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
