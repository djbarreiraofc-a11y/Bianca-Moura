import { Instagram, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#8B7355] to-[#6B5E57] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div>
            <h3 className="text-2xl font-light tracking-wider mb-2">BIANCA MOURA</h3>
            <p className="text-sm text-white/80 font-light tracking-wide">Lash Designer</p>
          </div>

          <div className="flex justify-center gap-8 items-center">
            <a
              href="https://www.instagram.com/bianca.cilioss"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#FFB5A0] transition-colors"
            >
              <Instagram size={20} />
              <span className="text-sm">@bianca.cilioss</span>
            </a>

            <a
              href="https://wa.me/5531991028853"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#FFB5A0] transition-colors"
            >
              <Phone size={20} />
              <span className="text-sm">(31) 99102-8853</span>
            </a>
          </div>

          <div className="pt-6 border-t border-white/20">
            <p className="text-sm text-white/60 font-light">
              © 2025 Bianca Moura Lash Designer. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
