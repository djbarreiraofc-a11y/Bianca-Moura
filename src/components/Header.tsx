import { Instagram } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-light tracking-wider text-[#8B7355]">
            BIANCA MOURA
          </span>
          <span className="text-xs text-[#C9A87C] font-light">Lash Designer</span>
        </div>

        <a
          href="https://www.instagram.com/bianca.cilioss"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[#2D5F3F] hover:text-[#3D7F5F] transition-all duration-300 hover:scale-110"
        >
          <Instagram size={24} />
        </a>
      </div>
    </header>
  );
}
