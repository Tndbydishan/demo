import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white shadow-md">
      <div className="container mx-auto px-4 h-16 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tight hover:text-blue-400 transition-colors">
          AutoEvolution
        </Link>
        <div className="flex gap-8">
          <Link href="/" className="text-sm font-medium hover:text-blue-300 transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-blue-300 transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-blue-300 transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}