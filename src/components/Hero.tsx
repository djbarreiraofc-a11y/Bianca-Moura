export default function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-[#FFF5F0] to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#C9A87C]/20 to-[#FFB5A0]/20 rounded-full blur-3xl"></div>
            <img
              src="whatsapp_image_2025-12-16_at_20.45.02.jpeg"
              alt="Bianca Moura - Lash Designer"
              className="relative rounded-2xl shadow-2xl w-full h-auto object-cover hover-sway"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-sm font-light tracking-widest text-[#C9A87C] mb-2">
                SOBRE MIM
              </h2>
              <div className="w-16 h-px bg-gradient-to-r from-[#C9A87C] to-transparent"></div>
            </div>

            <p className="text-lg leading-relaxed text-[#6B5E57]">
              Sou <span className="font-medium text-[#8B7355]">Bianca Moura</span>, Lash Designer
              especializada em realçar a beleza do olhar com técnica, segurança e personalização.
              Meu objetivo é entregar resultados leves, duradouros e adaptados para cada cliente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
