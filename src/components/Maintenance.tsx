export default function Maintenance() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#FFF5F0] to-[#FAF0E6]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-8">
            <div>
              <h2 className="text-sm font-light tracking-widest text-[#C9A87C] mb-3">
                MANUTENÇÃO
              </h2>
              <div className="w-16 h-px bg-gradient-to-r from-[#C9A87C] to-transparent mb-6"></div>
              <p className="text-3xl font-light text-[#8B7355] mb-8">
                Mantenha seu olhar impecável
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md hover-sway">
                <h3 className="text-xl font-light text-[#8B7355] mb-2">
                  Manutenções dos Volumes
                </h3>
                <p className="text-2xl font-medium text-[#2D5F3F]">R$ 110,00</p>
                <p className="text-sm text-[#8B7355]/70 mt-2">
                  Volume Brasileiro, Fox, Fox Marrom, Europeu e Express
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md hover-sway">
                <h3 className="text-xl font-light text-[#8B7355] mb-2">
                  Manutenção Mega Volume
                </h3>
                <p className="text-2xl font-medium text-[#2D5F3F]">R$ 120,00</p>
                <p className="text-sm text-[#8B7355]/70 mt-2">
                  Cuidado especial para máximo volume
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFB5A0]/20 to-[#C9A87C]/20 rounded-full blur-3xl"></div>
            <img
              src="/images/whatsapp_image_2025-12-16_at_20.45.02.jpeg"
              alt="Manutenção de Cílios"
              className="relative rounded-2xl shadow-2xl w-full h-auto object-cover hover-sway"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
