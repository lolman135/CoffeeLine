import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from './Header';
import { useCart } from '../contexts/CartContext';
import { useOrders } from '../contexts/OrdersContext';
import { useAuth } from '../contexts/AuthContext';
import svgPaths from "../imports/svg-t35k391vvs";

export default function OrderPlacementPage() {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart } = useCart();
  const { addOrder } = useOrders();
  const { user } = useAuth();
  
  const [formData, setFormData] = useState({
    fullName: 'Петренко Іван Вадимович',
    phone: '+380972004533',
    address: 'вулиця Василя Стуса, 35',
    deliveryMethod: 'delivery' as 'delivery' | 'pickup',
    paymentMethod: 'cash' as 'cash' | 'card'
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    // Створюємо замовлення через context
    const orderId = addOrder({
      customerName: formData.fullName,
      phone: formData.phone,
      address: formData.deliveryMethod === 'delivery' ? formData.address : undefined,
      items: items.map(item => ({
        name: item.drinkName,
        size: item.size.name,
        quantity: item.quantity,
        additions: item.addons.map(addon => addon.name),
        price: item.pricePerUnit
      })),
      deliveryMethod: formData.deliveryMethod,
      paymentMethod: formData.paymentMethod,
      total: totalPrice,
      userId: user?.email // Зберігаємо email користувача для фільтрації
    });
    
    // Очищаємо кошик
    clearCart();
    
    // Переходимо на сторінку статусу замовлення з ID в URL
    navigate(`/order-status/${orderId}`);
  };

  return (
    <div className="bg-[#fff5e6] min-h-screen w-full pt-[65px]">
      <Header />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-20 py-6 lg:py-12">
        {/* Back Button */}
        <button
          onClick={() => navigate('/cart')}
          className="flex items-center gap-2 mb-6 hover:opacity-70 transition-opacity"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-black">
            Назад до кошика
          </span>
        </button>

        {/* Title */}
        <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[24px] text-black tracking-[-0.6px] mb-8">
          Оформлення замовлення
        </h1>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 lg:gap-12">
          {/* Right Side - Order Summary (показується першим на мобільних) */}
          <div className="lg:w-[323px] lg:order-2">
            <div className="bg-white rounded-[8px] border border-[#e0e0e0] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] p-6 lg:sticky lg:top-[81px]">
              <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] text-black mb-6">
                Ваше замовлення
              </h2>

              {/* Order Items */}
              <div className="space-y-3 mb-4">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between items-start">
                    <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#666666] flex-1">
                      {item.drinkName} ({item.size.name}) x{item.quantity}
                    </p>
                    <p className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-black">
                      {item.totalPrice} ₴
                    </p>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px bg-[#e0e0e0] my-4" />

              {/* Total */}
              <div className="flex justify-between items-center">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-black">
                  Всього до сплати
                </p>
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-black">
                  {totalPrice} ₴
                </p>
              </div>

              {/* Info Box */}
              <div className="bg-[#f1f6fc] rounded-[4px] p-4 mt-6 flex gap-3">
                <div className="w-[35px] h-[35px] flex-shrink-0">
                  <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
                    <path d={svgPaths.p1ebc99b0} fill="#155DFC" stroke="#155DFC" />
                  </svg>
                </div>
                <p className="font-['Inter:Regular',sans-serif] text-[12px] text-[#1c398e] leading-[16px]">
                  Після оформлення ви отримаєте унікальний номер замовлення для відстеження
                </p>
              </div>
            </div>
          </div>

          {/* Left Side - Form */}
          <div className="space-y-6 max-w-[739px] lg:order-1">
            {/* Contact Information */}
            <div className="bg-white rounded-[8px] border border-[#e0e0e0] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] p-6 order-1">
              <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] text-black mb-6">
                Контактна інформація
              </h2>

              {/* Full Name */}
              <div className="mb-4">
                <label className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-black mb-2 block">
                  ПІБ
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="w-full h-[36px] px-4 bg-[#f0f0f0] rounded-[2px] border border-[#f0f0f0] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] font-['Inter:Regular',sans-serif] text-[16px] text-[rgba(51,51,51,0.7)] focus:outline-none focus:border-[#ff6b00]"
                />
              </div>

              {/* Phone */}
              <div className="mb-4">
                <label className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-black mb-2 block">
                  Телефон
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full h-[36px] px-4 bg-[#f0f0f0] rounded-[2px] border border-[#f0f0f0] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] font-['Inter:Regular',sans-serif] text-[16px] text-[rgba(51,51,51,0.7)] focus:outline-none focus:border-[#ff6b00]"
                />
              </div>

              {/* Address */}
              <div>
                <label className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-black mb-2 block">
                  Адреса
                </label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  className="w-full h-[36px] px-4 bg-[#f0f0f0] rounded-[2px] border border-[#f0f0f0] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] font-['Inter:Regular',sans-serif] text-[16px] text-[rgba(51,51,51,0.7)] focus:outline-none focus:border-[#ff6b00]"
                />
              </div>
            </div>

            {/* Delivery Method */}
            <div className="bg-white rounded-[8px] border border-[#e0e0e0] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] p-6 order-2">
              <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] text-black mb-6">
                Спосіб отримання
              </h2>

              {/* Delivery Option */}
              <button
                onClick={() => handleInputChange('deliveryMethod', 'delivery')}
                className={`w-full p-4 rounded-[4px] border mb-4 text-left transition-colors ${
                  formData.deliveryMethod === 'delivery'
                    ? 'border-[#e0e0e0] bg-white'
                    : 'border-[#e0e0e0] bg-white hover:bg-gray-50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-[8px] h-[8px] rounded-full mt-2 ${
                    formData.deliveryMethod === 'delivery' ? 'bg-black' : 'border-2 border-[#e0e0e0]'
                  }`} />
                  <div>
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-black mb-1">
                      Доставка
                    </p>
                    <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#666666]">
                      Доставимо кур'єром до вказаної адреси
                    </p>
                  </div>
                </div>
              </button>

              {/* Pickup Option */}
              <button
                onClick={() => handleInputChange('deliveryMethod', 'pickup')}
                className={`w-full p-4 rounded-[4px] border text-left transition-colors ${
                  formData.deliveryMethod === 'pickup'
                    ? 'border-[#e0e0e0] bg-white'
                    : 'border-[#e0e0e0] bg-white hover:bg-gray-50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-[8px] h-[8px] rounded-full mt-2 ${
                    formData.deliveryMethod === 'pickup' ? 'bg-black' : 'border-2 border-[#e0e0e0]'
                  }`} />
                  <div>
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-black mb-1">
                      Самовивіз з кав'ярні
                    </p>
                    <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#666666]">
                      Заберіть своє замовлення у бариста
                    </p>
                  </div>
                </div>
              </button>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-[8px] border border-[#e0e0e0] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] p-6 order-3">
              <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] text-black mb-6">
                Спосіб оплати
              </h2>

              {/* Card Option */}
              <button
                onClick={() => handleInputChange('paymentMethod', 'card')}
                className={`w-full p-4 rounded-[4px] border mb-4 text-left transition-colors ${
                  formData.paymentMethod === 'card'
                    ? 'border-[#e0e0e0] bg-white'
                    : 'border-[#e0e0e0] bg-white hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-[8px] h-[8px] rounded-full ${
                    formData.paymentMethod === 'card' ? 'bg-black' : 'border-2 border-[#e0e0e0]'
                  }`} />
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-black">
                    Карткою
                  </p>
                </div>
              </button>

              {/* Cash Option */}
              <button
                onClick={() => handleInputChange('paymentMethod', 'cash')}
                className={`w-full p-4 rounded-[4px] border text-left transition-colors ${
                  formData.paymentMethod === 'cash'
                    ? 'border-[#e0e0e0] bg-white'
                    : 'border-[#e0e0e0] bg-white hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-[8px] h-[8px] rounded-full ${
                    formData.paymentMethod === 'cash' ? 'bg-black' : 'border-2 border-[#e0e0e0]'
                  }`} />
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-black">
                    Готівкою
                  </p>
                </div>
              </button>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-b from-[#ff8c00] to-[#ffa500] h-[48px] rounded-[6px] shadow-[0px_2px_4px_-2px_rgba(255,140,0,0.2),0px_4px_6px_-1px_rgba(255,140,0,0.2)] hover:from-[#ff9500] hover:to-[#ffb000] transition-colors flex items-center justify-center order-5 lg:order-4"
            >
              <span className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-white">
                Підтвердити замовлення
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}