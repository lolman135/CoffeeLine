import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Plus, Minus } from 'lucide-react';
import Header from './Header';
import { useCart } from '../contexts/CartContext';
import { useDrinks } from '../contexts/DrinksContext';
import imgEspresso from '../src/imgEspresso.jpg';
import imgCappuccino from '../src/imgCappuccino.jpg';
import imgLatte from '../src/imgLatte.jpeg';
import imgAmericano from '../src/imgAmericano.jpg';
import imgIcedLatte from '../src/imgIcedLatte.jpg';
import imgRaf from '../src/imgRaf.jpg';

interface DrinkSize {
  id: string;
  name: string;
  volume: string;
  price: number;
}

interface Addon {
  id: string;
  name: string;
  price: number;
}

interface Drink {
  id: string;
  name: string;
  description: string;
  image: string;
  sizes: DrinkSize[];
  addons: Addon[];
}

// Маппінг ID напоїв до імпортованих картинок
const drinkImages: Record<string, string> = {
  '1': imgEspresso,
  '2': imgCappuccino,
  '3': imgLatte,
  '4': imgAmericano,
  '5': imgIcedLatte,
  '6': imgRaf,
};

export default function ProductDetailsPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { addItem, showToast } = useCart();
  const { getDrinkById } = useDrinks();
  const drink = id ? getDrinkById(id) : null;

  const [selectedSize, setSelectedSize] = useState<string>(drink?.sizes[1]?.id || 'medium');
  const [selectedAddons, setSelectedAddons] = useState<Set<string>>(new Set());
  const [quantity, setQuantity] = useState(1);

  if (!drink) {
    return (
      <div className="bg-[#fff5e6] min-h-screen w-full pt-[65px]">
        <Header />
        <div className="max-w-[1760px] mx-auto px-4 py-8">
          <p>Напій не знайдено</p>
        </div>
      </div>
    );
  }

  const selectedSizeData = drink.sizes.find(s => s.id === selectedSize);
  const basePrice = selectedSizeData?.price || 0;
  
  const addonsPrice = Array.from(selectedAddons).reduce((sum, addonId) => {
    const addon = drink.addons.find(a => a.id === addonId);
    return sum + (addon?.price || 0);
  }, 0);

  const pricePerUnit = basePrice + addonsPrice;
  const totalPrice = pricePerUnit * quantity;

  const toggleAddon = (addonId: string) => {
    const newAddons = new Set(selectedAddons);
    if (newAddons.has(addonId)) {
      newAddons.delete(addonId);
    } else {
      newAddons.add(addonId);
    }
    setSelectedAddons(newAddons);
  };

  const handleAddToCart = () => {
    const selectedSizeData = drink.sizes.find(s => s.id === selectedSize);
    if (!selectedSizeData) return;

    const selectedAddonsData = Array.from(selectedAddons)
      .map(addonId => drink.addons.find(a => a.id === addonId))
      .filter(Boolean) as Array<{ id: string; name: string; price: number }>;

    const cartItem = {
      id: `${drink.id}-${selectedSize}-${Array.from(selectedAddons).sort().join('-')}-${Date.now()}`,
      drinkId: drink.id,
      drinkName: drink.name,
      drinkImage: drink.image,
      size: selectedSizeData,
      addons: selectedAddonsData,
      quantity,
      pricePerUnit,
      totalPrice
    };

    addItem(cartItem);
    navigate('/catalog');
    showToast(`${drink.name} додано до кошика!`);
  };

  return (
    <div className="bg-[#fff5e6] min-h-screen w-full pt-[65px]">
      <Header />

      <div className="max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-20 py-6 lg:py-12">
        {/* Back Button */}
        <button
          onClick={() => navigate('/catalog')}
          className="flex items-center gap-2 mb-6 hover:opacity-70 transition-opacity"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-['Inter:Medium',sans-serif] font-medium text-[#0f0f0f] text-[14px]">
            Назад до каталогу
          </span>
        </button>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12">
          {/* Left Side - Image */}
          <div className="w-full">
            <div className="aspect-square lg:aspect-[3/4] rounded-[16px] overflow-hidden">
              <img
                src={drinkImages[drink.id] || drink.image}
                alt={drink.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - Options */}
          <div className="w-full flex flex-col">
            {/* Header */}
            <div className="mb-6">
              <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#0f0f0f] text-[24px] sm:text-[28px] lg:text-[30px] mb-3">
                {drink.name}
              </h1>
              <p className="font-['Inter:Regular',sans-serif] font-normal text-neutral-500 text-[16px]">
                {drink.description}
              </p>
            </div>

            {/* Options Card */}
            <div className="bg-white rounded-[8px] border border-neutral-200 shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] p-6 mb-6">
              {/* Size Selection */}
              <div className="mb-6 pb-6 border-b border-neutral-200">
                <p className="font-['Inter:Medium',sans-serif] font-medium text-[#0f0f0f] text-[14px] mb-4">
                  Оберіть розмір
                </p>
                <div className="space-y-2">
                  {drink.sizes.map((size) => (
                    <button
                      key={size.id}
                      onClick={() => setSelectedSize(size.id)}
                      className={`w-full h-[46px] px-4 rounded-[4px] flex items-center justify-between transition-all ${
                        selectedSize === size.id
                          ? 'bg-[rgba(255,107,0,0.1)] border-2 border-[#ff6b00]'
                          : 'bg-white border border-neutral-200 hover:border-neutral-300'
                      }`}
                    >
                      <span className={`font-['Inter:${selectedSize === size.id ? 'Medium' : 'Regular'}',sans-serif] text-[#0f0f0f] text-[14px]`}>
                        {size.name} ({size.volume})
                      </span>
                      <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#ff6b00] text-[14px]">
                        {size.price} ₴
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Addons Selection */}
              <div className="mb-6 pb-6 border-b border-neutral-200">
                <p className="font-['Inter:Medium',sans-serif] font-medium text-[#0f0f0f] text-[14px] mb-4">
                  Додатки (необов'язково)
                </p>
                <div className="space-y-4">
                  {drink.addons.map((addon) => (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className="w-full flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-[16px] h-[16px] rounded-[4px] border flex items-center justify-center transition-all ${
                            selectedAddons.has(addon.id)
                              ? 'bg-[#ff6b00] border-[#ff6b00]'
                              : 'bg-white border-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.2)]'
                          }`}
                        >
                          {selectedAddons.has(addon.id) && (
                            <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                              <path
                                d="M2 6L5 9L10 3"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                        </div>
                        <span className="font-['Inter:Medium',sans-serif] font-medium text-[#0f0f0f] text-[14px]">
                          {addon.name}
                        </span>
                      </div>
                      <span className="font-['Inter:Regular',sans-serif] font-normal text-neutral-500 text-[14px]">
                        + {addon.price} ₴
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selection */}
              <div>
                <p className="font-['Inter:Medium',sans-serif] font-medium text-[#0f0f0f] text-[14px] mb-4">
                  Кількість
                </p>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-[36px] h-[36px] bg-white rounded-[2px] border border-neutral-200 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] flex items-center justify-center hover:bg-neutral-50 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <div className="w-[36px] h-[36px] flex items-center justify-center">
                    <span className="font-['Inter:Medium',sans-serif] font-medium text-[#0f0f0f] text-[14px]">
                      {quantity}
                    </span>
                  </div>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-[36px] h-[36px] bg-white rounded-[2px] border border-neutral-200 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] flex items-center justify-center hover:bg-neutral-50 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Price Summary */}
            <div className="bg-white rounded-[4px] p-4 mb-6 flex items-center justify-between">
              <div>
                <p className="font-['Inter:Regular',sans-serif] font-normal text-neutral-500 text-[14px] mb-1">
                  Ціна за одиницю
                </p>
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#0f0f0f] text-[18px]">
                  {pricePerUnit} ₴
                </p>
              </div>
              <div className="text-right">
                <p className="font-['Inter:Regular',sans-serif] font-normal text-neutral-500 text-[14px] mb-1">
                  Загальна ціна
                </p>
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#0f0f0f] text-[18px]">
                  {totalPrice} ₴
                </p>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-gradient-to-b from-[#ff8c00] to-[#ffa500] h-[48px] rounded-[6px] shadow-[0px_2px_4px_-2px_rgba(255,140,0,0.2),0px_4px_6px_-1px_rgba(255,140,0,0.2)] hover:from-[#ff9500] hover:to-[#ffb000] transition-colors flex items-center justify-center"
            >
              <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-white text-[16px]">
                Додати у кошик
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}