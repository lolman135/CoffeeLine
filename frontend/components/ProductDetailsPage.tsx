import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from './Header';
import { useCart } from '../contexts/CartContext';
import { fetchCoffeeById } from '../src/api/coffees';

interface Drink {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export default function ProductDetailsPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { addItem, showToast } = useCart();
  const [drink, setDrink] = useState<Drink | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    fetchCoffeeById(id)
      .then((d) => { setDrink(d); setError(null); })
      .catch((e) => { setError(e?.message || 'Не вдалося завантажити напій'); })
      .finally(() => setLoading(false));
  }, [id]);

  const handleAddToCart = () => {
    if (!drink) return;
    const item = {
      id: `${drink.id}-${Date.now()}`,
      drinkId: drink.id,
      drinkName: drink.name,
      drinkImage: drink.image,
      size: { id: 'default', name: 'Стандарт', volume: '', price: drink.price },
      addons: [],
      quantity: 1,
      pricePerUnit: drink.price,
      totalPrice: drink.price,
    };
    addItem(item);
    navigate('/cart');
    showToast(`${drink.name} додано до кошика!`);
  };

  if (loading) {
    return (
      <div className="bg-[#fff5e6] min-h-screen w-full pt-[65px]">
        <Header />
        <div className="max-w-[1760px] mx-auto px-4 py-8">
          <p>Завантаження...</p>
        </div>
      </div>
    );
  }
  if (error || !drink) {
    return (
      <div className="bg-[#fff5e6] min-h-screen w-full pt-[65px]">
        <Header />
        <div className="max-w-[1760px] mx-auto px-4 py-8">
          <p>Напій не знайдено</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#fff5e6] min-h-screen w-full pt-[65px]">
      <Header />
      <div className="max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-20 py-6 lg:py-12">
        <button
          onClick={() => navigate('/catalog')}
          className="flex items-center gap-2 mb-6 hover:opacity-70 transition-opacity"
        >
          <span className="font-['Inter:Medium',sans-serif] font-medium text-[#0f0f0f] text-[14px]">
            Назад до каталогу
          </span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12">
          <div className="w-full">
            <div className="aspect-square lg:aspect-[3/4] rounded-[16px] overflow-hidden">
              <img src={drink.image} alt={drink.name} className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="w-full flex flex-col">
            <div className="mb-6">
              <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#0f0f0f] text-[24px] sm:text-[28px] lg:text-[30px] mb-3">
                {drink.name}
              </h1>
              <p className="font-['Inter:Regular',sans-serif] font-normal text-neutral-500 text-[16px]">
                {drink.description}
              </p>
            </div>

            <div className="bg-white rounded-[4px] p-4 mb-6 flex items-center justify-between">
              <div>
                <p className="font-['Inter:Regular',sans-serif] font-normal text-neutral-500 text-[14px] mb-1">
                  Ціна
                </p>
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#0f0f0f] text-[18px]">
                  {drink.price} ₴
                </p>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full bg-gradient-to-b from-[#ff8c00] to-[#ffa500] h-[48px] rounded-[6px] shadow-[0px_4px_6px_-4px_rgba(255,140,0,0.2),0px_10px_15px_-3px_rgba(255,140,0,0.2)] hover:from-[#ff9500] hover:to-[#ffb000] transition-colors flex items-center justify-center"
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