import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-900 text-white">
      <div className="flex items-center">
        <img src="" alt="Logo" className="h-8 mr-4" />
        <Link href="/">
          <h1 className="text-xl font-bold">Home</h1>
        </Link>
      </div>
      <div className="space-x-4">
        <Link href="/home">
          Home
        </Link>
        <Link href="/about">
          About
        </Link>
        <Link href="/movie">
          Movie
        </Link>
        <Link href="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
