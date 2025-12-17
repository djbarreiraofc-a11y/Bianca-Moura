import { useState } from 'react';
import { Send } from 'lucide-react';

const procedures = [
  { name: 'Volume Brasileiro', price: 'R$165,00' },
  { name: 'Volume Fox', price: 'R$165,00' },
  { name: 'Volume Fox Marrom', price: 'R$165,00' },
  { name: 'Volume Europeu', price: 'R$165,00' },
  { name: 'Mega Volume', price: 'R$180,00' },
  { name: 'Volume Express', price: 'R$165,00' },
  { name: 'Manutenções', price: 'R$110,00' },
  { name: 'Manutenção Mega Volume', price: 'R$120,00' },
];

export default function BookingForm() {
  const [selectedProcedure, setSelectedProcedure] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProcedure) return;

    const message = `Olá Bianca! Quero agendar esse procedimento: ${selectedProcedure}.`;
    const whatsappUrl = `https://wa.me/5531991028853?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-sm font-light tracking-widest text-[#C9A87C] mb-3">
              AGENDE SEU HORÁRIO
            </h2>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#C9A87C] to-transparent mx-auto mb-4"></div>
            <p className="text-3xl font-light text-[#8B7355]">Escolha seu procedimento</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-gradient-to-br from-[#FFF5F0] to-white p-8 rounded-2xl shadow-xl hover-sway">
            <div className="mb-6">
              <label htmlFor="procedure" className="block text-sm font-light text-[#8B7355] mb-3 tracking-wide">
                Selecione o procedimento desejado
              </label>
              <select
                id="procedure"
                value={selectedProcedure}
                onChange={(e) => setSelectedProcedure(e.target.value)}
                className="w-full px-4 py-4 border-2 border-[#E8D5C4] rounded-xl focus:border-[#C9A87C] focus:outline-none transition-colors bg-white text-[#6B5E57] font-light"
                required
              >
                <option value="">Escolha uma opção</option>
                {procedures.map((proc, index) => (
                  <option key={index} value={`${proc.name} ${proc.price}`}>
                    {proc.name} - {proc.price}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-[#2D5F3F] hover:bg-[#3D7F5F] text-white py-4 px-6 rounded-xl font-light text-lg tracking-wide transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Send size={20} />
              Enviar mensagem via WhatsApp
            </button>

            <p className="text-center text-sm text-[#8B7355]/60 mt-4">
              Você será redirecionado para o WhatsApp
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
