const services = [
  {
    name: 'Volume Brasileiro',
    price: 'R$ 165,00',
    image: 'whatsapp_image_2025-12-16_at_20.45.04_(1).jpeg',
  },
  {
    name: 'Volume Fox',
    price: 'R$ 165,00',
    image: 'whatsapp_image_2025-12-16_at_20.45.05.jpeg',
  },
  {
    name: 'Volume Fox Marrom',
    price: 'R$ 165,00',
    image: 'whatsapp_image_2025-12-16_at_20.45.05_(1).jpeg',
  },
  {
    name: 'Volume Europeu',
    price: 'R$ 165,00',
    image: '/images/whatsapp_image_2025-12-16_at_20.45.04_(1).jpeg',
  },
  {
    name: 'Mega Volume',
    price: 'R$ 220,00',
    image: 'whatsapp_image_2025-12-16_at_20.45.06_(1).jpeg',
  },
  {
    name: 'Volume Express',
    price: 'R$ 165,00',
    image: 'whatsapp_image_2025-12-16_at_20.44.16.jpeg',
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-light tracking-widest text-[#C9A87C] mb-3">
            PROCEDIMENTOS
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#C9A87C] to-transparent mx-auto mb-4"></div>
          <p className="text-3xl font-light text-[#8B7355]">Galeria de Serviços</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover-sway bg-white"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-light mb-2">{service.name}</h3>
                <p className="text-2xl font-medium text-[#4CAF50]">{service.price}</p>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-light text-[#8B7355] mb-2">{service.name}</h3>
                <p className="text-xl font-medium text-[#2D5F3F]">{service.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
