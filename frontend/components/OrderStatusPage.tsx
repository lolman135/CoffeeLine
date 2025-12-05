import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from './Header';
import { useOrders } from '../contexts/OrdersContext';
import svgPaths from '../imports/svg-r3to1jj5ar';

export default function OrderStatusPage() {
  const navigate = useNavigate();
  const { orderId } = useParams<{ orderId: string }>();
  const { getOrderById } = useOrders();

  useEffect(() => {
    // Якщо немає orderId, перенаправити на каталог
    if (!orderId) {
      navigate('/catalog');
    }
  }, [orderId, navigate]);

  if (!orderId) {
    return null;
  }

  const order = getOrderById(orderId);

  if (!order) {
    return null;
  }

  const getDeliveryMethodText = (method: string) => {
    return method === 'delivery' ? 'Доставка' : 'Самовивіз';
  };

  const getPaymentMethodText = (method: string) => {
    return method === 'card' ? 'Карткою' : 'Готівкою';
  };

  const getStatusStep = () => {
    switch (order.status) {
      case 'pending':
        return 0; // Жоден крок не підсвічений
      case 'preparing':
        return 1; // Тільки крок 1 "Прийнято" підсвічений
      case 'ready':
        return 2; // Кроки 1 і 2 підсвічені
      case 'completed':
        return 3; // Всі 3 кроки підсвічені
      default:
        return 0;
    }
  };

  const getStatusTitle = () => {
    switch (order.status) {
      case 'pending':
        return 'Очікується підтвердження';
      case 'preparing':
        return 'Готується';
      case 'ready':
        return 'Готово до видачі';
      case 'completed':
        return 'Замовлення завершено';
      case 'cancelled':
        return 'Замовлення скасовано';
      default:
        return 'Очікується підтвердження';
    }
  };

  const currentStep = getStatusStep();

  return (
    <div className="bg-[#fff5e6] min-h-screen w-full pt-[65px]">
      <Header />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-20 py-6 lg:py-12">
        {/* Back Button */}
        <button
          onClick={() => navigate('/catalog')}
          className="flex items-center gap-2 mb-6 hover:opacity-70 transition-opacity"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-black">
            Назад до меню
          </span>
        </button>

        {/* Order Status Card */}
        <div className="max-w-[500px] mx-auto">
          <div className="bg-white rounded-[12px] border border-gray-200 shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] p-8">
            {/* Clock Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-[64px] h-[64px]">
                <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
                  <g>
                    <rect height="59" rx="29.5" stroke="#FF8C00" strokeWidth="5" width="59" x="2.5" y="2.5" />
                    <line stroke="#FF8C00" strokeLinecap="round" strokeWidth="5" x1="30.8281" x2="30.8281" y1="12.5" y2="32.5" />
                    <line stroke="#FF8C00" strokeLinecap="round" strokeWidth="5" x1="45.1251" x2="30.8102" y1="40.6722" y2="33.9846" />
                  </g>
                </svg>
              </div>
            </div>

            {/* Status Title */}
            <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] text-[#101828] text-center mb-2">
              {getStatusTitle()}
            </h1>

            {/* Order Number */}
            <div className="text-center mb-12">
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#6a7282] inline">
                Номер замовлення:{' '}
              </p>
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#ff6900] inline">
                {order.id}
              </p>
            </div>

            {/* Progress Steps */}
            <div className="relative mb-16">
              {/* Steps */}
              <div className="relative flex justify-between">
                {/* Step 1 */}
                <div className="flex flex-col items-center">
                  <div className={`rounded-full w-[32px] h-[32px] flex items-center justify-center mb-1 relative z-10 ${
                    currentStep >= 1 ? 'bg-[#ff6900]' : 'bg-gray-200'
                  }`}>
                    <span className={`font-['Inter:Medium',sans-serif] font-medium text-[14px] ${
                      currentStep >= 1 ? 'text-white' : 'text-[#99a1af]'
                    }`}>
                      1
                    </span>
                  </div>
                  <span className={`font-['Inter:Medium',sans-serif] font-medium text-[12px] mt-1 ${
                    currentStep >= 1 ? 'text-[#ff6900]' : 'text-[#99a1af]'
                  }`}>
                    Прийнято
                  </span>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center">
                  <div
                    className={`rounded-full w-[32px] h-[32px] flex items-center justify-center mb-1 relative z-10 ${
                      currentStep >= 2 ? 'bg-[#ff6900]' : 'bg-gray-200'
                    }`}
                  >
                    <span className={`font-['Inter:Medium',sans-serif] font-medium text-[14px] ${
                      currentStep >= 2 ? 'text-white' : 'text-[#99a1af]'
                    }`}>
                      2
                    </span>
                  </div>
                  <span
                    className={`font-['Inter:Regular',sans-serif] font-normal text-[12px] mt-1 ${
                      currentStep >= 2 ? 'text-[#ff6900]' : 'text-[#99a1af]'
                    }`}
                  >
                    Готується
                  </span>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center">
                  <div
                    className={`rounded-full w-[32px] h-[32px] flex items-center justify-center mb-1 relative z-10 ${
                      currentStep >= 3 ? 'bg-[#ff6900]' : 'bg-gray-200'
                    }`}
                  >
                    <span className={`font-['Inter:Medium',sans-serif] font-medium text-[14px] ${
                      currentStep >= 3 ? 'text-white' : 'text-[#99a1af]'
                    }`}>
                      3
                    </span>
                  </div>
                  <span
                    className={`font-['Inter:Regular',sans-serif] font-normal text-[12px] mt-1 ${
                      currentStep >= 3 ? 'text-[#ff6900]' : 'text-[#99a1af]'
                    }`}
                  >
                    Готово
                  </span>
                </div>
              </div>
              
              {/* Progress Line - positioned after to stay behind circles */}
              <div className="absolute top-[16px] left-[16px] right-[16px] h-[2px] bg-gray-200" />
            </div>

            {/* Order Details */}
            <div className="mb-6">
              <h2 className="font-['Inter:Medium',sans-serif] font-medium text-[16px] text-[#101828] mb-4">
                Деталі замовлення
              </h2>

              {/* Items List */}
              <div className="space-y-2 mb-4">
                {order.items.map((item, index) => (
                  <div key={index} className="flex justify-between items-start">
                    <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#666666] flex-1">
                      {item.name} {item.size && `(${item.size})`} x{item.quantity}
                      {item.additions && item.additions.length > 0 && ` + ${item.additions.join(', ')}`}
                    </p>
                    <p className="font-['Inter:Medium',sans-serif] font-medium text-[16px] text-[#101828]">
                      {item.price * item.quantity} ₴
                    </p>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="pt-4 border-t border-gray-100">
                <div className="flex justify-between items-center">
                  <p className="font-['Inter:Medium',sans-serif] font-medium text-[16px] text-[#101828]">
                    Всього
                  </p>
                  <p className="font-['Inter:Medium',sans-serif] font-medium text-[16px] text-[#101828]">
                    {order.total} ₴
                  </p>
                </div>
              </div>
            </div>

            {/* Delivery & Payment Info */}
            <div className="pt-6 border-t border-gray-100 space-y-4">
              <div className="flex justify-between items-center">
                <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#6a7282]">
                  Спосіб отримання:
                </p>
                <p className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#101828]">
                  {getDeliveryMethodText(order.deliveryMethod)}
                </p>
              </div>

              <div className="flex justify-between items-center">
                <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#6a7282]">
                  Оплата:
                </p>
                <p className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#101828]">
                  {getPaymentMethodText(order.paymentMethod)}
                </p>
              </div>

              <div className="flex justify-between items-center gap-2">
                <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#6a7282] flex-shrink-0">
                  Час створення:
                </p>
                <p className="font-['Inter:Medium',sans-serif] font-medium text-[12px] sm:text-[14px] text-[#101828] text-right">
                  {order.date}, {order.time}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}