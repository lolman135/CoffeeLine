import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Toast from './Toast';
import DrinkCard from './DrinkCard';
import { useDrinks } from '../contexts/DrinksContext';
import imgEspresso from "figma:asset/4cdde660d47777025fadcee00ccd217877a36e59.png";
import imgCappuccino from "figma:asset/7da29b9834271414e400699aec7ffe2ec031fb93.png";
import imgLatte from "figma:asset/325f769fc82699baad870ca5ffaea43e92efb7e5.png";
import imgAmericano from "figma:asset/75d54ff1c0c61d1084bd38621ccc695b84284411.png";
import imgIcedLatte from "figma:asset/cacb5bfa3a2c41f2bf01f6b83131c1337e02546b.png";
import imgRaf from "figma:asset/0303b9efc512b515642ae82c8c95ddf5489a1c51.png";

type Category = 'all' | 'hot' | 'cold';

// Маппінг ID напоїв до імпортованих картинок
const drinkImages: Record<string, string> = {
  '1': imgEspresso,
  '2': imgCappuccino,
  '3': imgLatte,
  '4': imgAmericano,
  '5': imgIcedLatte,
  '6': imgRaf,
};

export default function MainPage() {
  const navigate = useNavigate();
  const { drinks } = useDrinks();
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDrinks = drinks.filter(drink => {
    // Фільтр по категорії
    const categoryMatch = selectedCategory === 'all' || drink.category === selectedCategory;
    
    // Фільтр по пошуку
    const searchLower = searchQuery.toLowerCase();
    const searchMatch = searchQuery === '' || 
      drink.name.toLowerCase().includes(searchLower) ||
      drink.description.toLowerCase().includes(searchLower);
    
    return categoryMatch && searchMatch;
  });

  const handleSelectOptions = (id: string) => {
    // Навігація до сторінки деталей напою
    navigate(`/product/${id}`);
  };

  return (
    <div className="bg-[#fff5e6] min-h-screen w-full pt-[65px]">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <Toast />

      <div className="max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-20 py-6 lg:py-12">
        {/* Title Section */}
        <div className="text-center mb-8 lg:mb-12">
          <h1 className="font-['Inter:Bold',sans-serif] font-bold text-[#333333] text-[24px] sm:text-[28px] lg:text-[30px] mb-3">
            Наше меню
          </h1>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[#666666] text-[16px] sm:text-[18px] max-w-2xl mx-auto">
            Оберіть ваш улюблений напій з нашого широкого асортименту
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-8 lg:mb-12">
          <div className="bg-white h-[42px] rounded-[12px] border border-[#dddddd] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] p-[5px] inline-flex gap-1">
            {/* All Button */}
            <button
              onClick={() => setSelectedCategory('all')}
              className={`h-[32px] px-6 rounded-[8px] transition-colors ${
                selectedCategory === 'all' 
                  ? 'bg-[darkorange] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]' 
                  : 'hover:bg-gray-100'
              }`}
            >
              <span className={`font-['Inter:Medium',sans-serif] font-medium text-[14px] whitespace-nowrap ${
                selectedCategory === 'all' ? 'text-white' : 'text-[#666666]'
              }`}>Всі</span>
            </button>

            {/* Hot Button */}
            <button
              onClick={() => setSelectedCategory('hot')}
              className={`h-[32px] px-6 rounded-[8px] transition-colors ${
                selectedCategory === 'hot' 
                  ? 'bg-[darkorange] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]' 
                  : 'hover:bg-gray-100'
              }`}
            >
              <span className={`font-['Inter:Medium',sans-serif] font-medium text-[14px] whitespace-nowrap ${
                selectedCategory === 'hot' ? 'text-white' : 'text-[#666666]'
              }`}>Гаряче</span>
            </button>

            {/* Cold Button */}
            <button
              onClick={() => setSelectedCategory('cold')}
              className={`h-[32px] px-6 rounded-[8px] transition-colors ${
                selectedCategory === 'cold' 
                  ? 'bg-[darkorange] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]' 
                  : 'hover:bg-gray-100'
              }`}
            >
              <span className={`font-['Inter:Medium',sans-serif] font-medium text-[14px] whitespace-nowrap ${
                selectedCategory === 'cold' ? 'text-white' : 'text-[#666666]'
              }`}>Холодне</span>
            </button>
          </div>
        </div>

        {/* Drinks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 lg:gap-6">
          {filteredDrinks.map((drink) => (
            <DrinkCard
              key={drink.id}
              id={drink.id}
              name={drink.name}
              description={drink.description}
              price={drink.price}
              image={drinkImages[drink.id] || drink.image}
              onSelectOptions={handleSelectOptions}
            />
          ))}
        </div>
      </div>
    </div>
  );
}