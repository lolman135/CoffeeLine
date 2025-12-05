interface DrinkCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  onSelectOptions: (id: string) => void;
}

export default function DrinkCard({ id, name, description, price, image, onSelectOptions }: DrinkCardProps) {
  return (
    <div className="bg-white rounded-[12px] border border-[#dddddd] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] overflow-hidden h-full flex flex-col">
      {/* Image */}
      <div className="relative w-full aspect-square overflow-hidden">
        <img 
          alt={name} 
          className="w-full h-full object-cover" 
          src={image} 
        />
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        {/* Name */}
        <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#333333] text-[18px] mb-2">
          {name}
        </h3>
        
        {/* Description */}
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[#666666] text-[14px] leading-[20px] mb-4 flex-1">
          {description}
        </p>

        {/* Price and Button */}
        <div className="flex items-center justify-between gap-3">
          {/* Price */}
          <p className="font-['Inter:Bold',sans-serif] font-bold text-[20px] text-[darkorange] whitespace-nowrap">
            від {price} ₴
          </p>
          
          {/* Button */}
          <button 
            onClick={() => onSelectOptions(id)}
            className="bg-[darkorange] h-[32px] px-4 rounded-[6px] shadow-[0px_2px_4px_-2px_rgba(255,140,0,0.2),0px_4px_6px_-1px_rgba(255,140,0,0.2)] cursor-pointer hover:bg-[#ff9500] transition-colors flex-shrink-0"
          >
            <span className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-white whitespace-nowrap">
              Обрати опції
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}