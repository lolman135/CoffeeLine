import { useCart } from '../contexts/CartContext';
import { Check } from 'lucide-react';

export default function Toast() {
  const { toast } = useCart();

  if (!toast.show) return null;

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 animate-slide-in-right">
      <div className="bg-white rounded-[12px] shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] border border-neutral-200 px-4 py-3 flex items-center gap-3 min-w-[280px] max-w-[400px]">
        {/* Check Icon */}
        <div className="w-[24px] h-[24px] bg-black rounded-full flex items-center justify-center flex-shrink-0">
          <Check className="w-[14px] h-[14px] text-white" strokeWidth={3} />
        </div>
        
        {/* Message */}
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[#0f0f0f] text-[14px] flex-1">
          {toast.message}
        </p>
      </div>
    </div>
  );
}
