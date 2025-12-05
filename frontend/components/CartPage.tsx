import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, Minus, Trash2, ShoppingCart } from 'lucide-react';
import Header from './Header';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { createOrder } from '../src/api/orders';

export default function CartPage() {
  const navigate = useNavigate();
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();
  const { user } = useAuth();

  const handleCheckout = async () => {
    if (!user?.id) {
      navigate('/login');
      return;
    }
    try {
      const orderItems = items.map(i => ({ coffeeId: i.drinkId, quantity: i.quantity }));
      const res = await createOrder({ userId: user.id, orderItems });
      clearCart();
      navigate(`/order-status/${res.id}`);
    } catch (e: any) {
      alert(e?.message || 'Не вдалося створити замовлення');
    }
  };


  const getSizeNameCapitalized = (sizeName: string) => {
    const sizeMap: Record<string, string> = {
      'Малий': 'Малий',
      'Середній': 'Середній',
      'Великий': 'Великий',
      'Small': 'Малий',
      'Medium': 'Середній',
      'Large': 'Великий'
    };
    return sizeMap[sizeName] || sizeName.charAt(0).toUpperCase() + sizeName.slice(1).toLowerCase();
  };

  if (items.length === 0) {
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

          {/* Title */}
          <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#0f0f0f] text-[24px] sm:text-[28px] lg:text-[30px] mb-8">
            Кошик
          </h1>

          {/* Empty State */}
          <div className="flex flex-col items-center justify-center py-12 lg:py-20">
            <div className="w-[120px] h-[120px] mb-6 bg-white rounded-full flex items-center justify-center shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
              <ShoppingCart className="w-[60px] h-[60px] text-neutral-300" />
            </div>
            <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#0f0f0f] text-[20px] mb-3">
              Ваш кошик порожній
            </h2>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-neutral-500 text-[16px] mb-8 text-center max-w-md">
              Додайте напої з нашого меню, щоб оформити замовлення
            </p>
            <button
              onClick={() => navigate('/catalog')}
              className="bg-gradient-to-b from-[#ff8c00] to-[#ffa500] h-[48px] px-8 rounded-[6px] shadow-[0px_2px_4px_-2px_rgba(255,140,0,0.2),0px_4px_6px_-1px_rgba(255,140,0,0.2)] hover:from-[#ff9500] hover:to-[#ffb000] transition-colors flex items-center justify-center"
            >
              <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-white text-[16px]">
                Перейти до меню
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }

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

        {/* Title */}
        <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#0f0f0f] text-[24px] sm:text-[28px] lg:text-[30px] mb-8">
          Кошик
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-[12px] border border-neutral-200 shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] p-4 sm:p-6"
              >
                <div className="flex gap-4">
                  {/* Image */}
                  <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-[8px] overflow-hidden flex-shrink-0">
                    <img
                      src={item.drinkImage}
                      alt={item.drinkName}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    {/* Title and Delete */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1 min-w-0 pr-4">
                        <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#0f0f0f] text-[16px] sm:text-[18px] mb-1 truncate">
                          {item.drinkName}
                        </h3>
                        <p className="font-['Inter:Regular',sans-serif] font-normal text-neutral-500 text-[14px]">
                          {getSizeNameCapitalized(item.size.name)} ({item.size.volume})
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="flex-shrink-0 w-[32px] h-[32px] flex items-center justify-center hover:bg-red-50 rounded-[4px] transition-colors"
                      >
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </button>
                    </div>

                    {/* Addons */}
                    {item.addons.length > 0 && (
                      <div className="mb-3">
                        <p className="font-['Inter:Regular',sans-serif] font-normal text-neutral-400 text-[12px] mb-1">
                          Додатки:
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {item.addons.map((addon) => (
                            <span
                              key={addon.id}
                              className="font-['Inter:Regular',sans-serif] font-normal text-neutral-500 text-[12px] bg-neutral-100 px-2 py-1 rounded-[4px]"
                            >
                              {addon.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Quantity and Price - Full Width Row */}
                <div className="flex items-center justify-between gap-4 mt-4 sm:mt-0 sm:ml-[96px] lg:ml-[116px]">
                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] bg-white rounded-[2px] border border-neutral-200 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] flex items-center justify-center hover:bg-neutral-50 transition-colors"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <div className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] flex items-center justify-center">
                      <span className="font-['Inter:Medium',sans-serif] font-medium text-[#0f0f0f] text-[14px]">
                        {item.quantity}
                      </span>
                    </div>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] bg-white rounded-[2px] border border-neutral-200 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] flex items-center justify-center hover:bg-neutral-50 transition-colors"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Price */}
                  <div className="text-right flex-shrink-0">
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#ff6b00] text-[16px] sm:text-[18px] lg:text-[20px] whitespace-nowrap">
                      {item.totalPrice} ₴
                    </p>
                    <p className="font-['Inter:Regular',sans-serif] font-normal text-neutral-400 text-[12px] whitespace-nowrap">
                      {item.pricePerUnit} ₴ за од.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-[12px] border border-neutral-200 shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] p-6 sticky top-24">
              <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#0f0f0f] text-[18px] mb-6">
                Підсумок замовлення
              </h2>

              {/* Items List */}
              <div className="mb-6 pb-6 border-b border-neutral-200 space-y-3">
                {items.map((item) => (
                  <div key={item.id} className="flex items-start justify-between gap-2">
                    <p className="font-['Inter:Regular',sans-serif] font-normal text-neutral-600 text-[14px] flex-1">
                      {item.drinkName} ({getSizeNameCapitalized(item.size.name)}) x{item.quantity}
                    </p>
                    <p className="font-['Inter:Medium',sans-serif] font-medium text-[#0f0f0f] text-[14px] flex-shrink-0">
                      {item.totalPrice} ₴
                    </p>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#0f0f0f] text-[16px]">
                  Всього до сплати
                </span>
                <span className="font-['Inter:Bold',sans-serif] font-bold text-[#ff6b00] text-[24px]">
                  {totalPrice} ₴
                </span>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                className="w-full bg-gradient-to-b from-[#ff8c00] to-[#ffa500] h-[48px] rounded-[6px] shadow-[0px_2px_4px_-2px_rgba(255,140,0,0.2),0px_4px_6px_-1px_rgba(255,140,0,0.2)] hover:from-[#ff9500] hover:to-[#ffb000] transition-colors flex items-center justify-center"
              >
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-white text-[16px]">
                  Оформити замовлення
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}