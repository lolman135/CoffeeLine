import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import { User, ArrowLeft } from 'lucide-react';
import { useOrders } from '../contexts/OrdersContext';
import { useAuth } from '../contexts/AuthContext';

export default function ProfilePage() {
  const navigate = useNavigate();
  const { orders } = useOrders();
  const { user } = useAuth();
  
  // Mock data - в реальному застосунку це буде з бекенду
  const [fullName, setFullName] = useState('Іванов Іван Іванович');
  const [phone, setPhone] = useState('+380501234567');
  const [address, setAddress] = useState('м. Київ, вул. Хрещатик, 1');
  const [email, setEmail] = useState('ivan.ivanov@email.com');
  const [activeTab, setActiveTab] = useState<'profile' | 'orders'>('profile');

  const [isEdited, setIsEdited] = useState(false);

  const handleChange = () => {
    setIsEdited(true);
  };

  const handleSave = () => {
    // Тут буде логіка збереження даних на бекенді
    console.log('Saving profile:', { fullName, phone, address, email });
    setIsEdited(false);
    
    // Показуємо toast повідомлення (можна додати toast)
    alert('Зміни успішно збережено!');
  };

  // Фільтруємо замовлення користувача
  const userOrders = orders.filter(order => order.userId === user?.email);

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending':
        return 'Очікує';
      case 'preparing':
        return 'Готується';
      case 'ready':
        return 'Готово';
      case 'completed':
        return 'Завершено';
      case 'cancelled':
        return 'Скасовано';
      default:
        return status;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return { bg: '#fef3c6', color: '#973c00' };
      case 'preparing':
        return { bg: '#DBEAFE', color: '#193CB8' };
      case 'ready':
        return { bg: '#DCFCE7', color: '#016630' };
      case 'completed':
        return { bg: '#F3E8FF', color: '#6E11B0' };
      case 'cancelled':
        return { bg: '#FFE2E2', color: '#9F0712' };
      default:
        return { bg: '#F3F4F6', color: '#6B7280' };
    }
  };

  return (
    <div className="min-h-screen bg-[#fff5e6]">
      <Header />
      
      {/* Main Content */}
      <main className="pt-[65px] min-h-screen">
        <div className="max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-20 py-8 md:py-12">
          <div className="max-w-[600px] mx-auto">
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

            {/* Page Header */}
            <div className="mb-8">
              <div className="mb-2">
                <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#333333] text-[28px] md:text-[32px]">
                  Мій профіль
                </h1>
              </div>
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[#666666] text-[14px] md:text-[16px]">
                Тут ви можете переглянути та змінити свої особисті дані
              </p>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setActiveTab('profile')}
                className={`h-[36px] px-6 rounded-[6px] transition-all ${
                  activeTab === 'profile'
                    ? 'bg-[darkorange] shadow-[0px_2px_4px_-2px_rgba(255,140,0,0.2),0px_4px_6px_-1px_rgba(255,140,0,0.2)]'
                    : 'bg-white border border-zinc-200 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:bg-gray-50'
                }`}
              >
                <span
                  className={`font-['Inter:Medium',sans-serif] font-medium text-[14px] ${
                    activeTab === 'profile' ? 'text-white' : 'text-black'
                  }`}
                >
                  Профіль
                </span>
              </button>
              <button
                onClick={() => setActiveTab('orders')}
                className={`h-[36px] px-6 rounded-[6px] transition-all ${
                  activeTab === 'orders'
                    ? 'bg-[darkorange] shadow-[0px_2px_4px_-2px_rgba(255,140,0,0.2),0px_4px_6px_-1px_rgba(255,140,0,0.2)]'
                    : 'bg-white border border-zinc-200 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:bg-gray-50'
                }`}
              >
                <span
                  className={`font-['Inter:Medium',sans-serif] font-medium text-[14px] ${
                    activeTab === 'orders' ? 'text-white' : 'text-black'
                  }`}
                >
                  Історія замовлень ({userOrders.length})
                </span>
              </button>
            </div>

            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <>
                {/* Profile Form */}
                <div className="bg-white rounded-[16px] shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] p-6 md:p-8">
                  {/* Full Name Field */}
                  <div className="mb-6">
                    <label className="block font-['Inter:Medium',sans-serif] font-medium text-[#333333] text-[14px] mb-2">
                      ПІБ
                    </label>
                    <div className="relative bg-neutral-100 h-[50px] rounded-[8px] border border-[#dddddd]">
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => {
                          setFullName(e.target.value);
                          handleChange();
                        }}
                        placeholder="Ваше прізвище, ім'я, по батькові"
                        className="w-full h-full px-4 bg-transparent font-['Inter:Regular',sans-serif] font-normal text-[16px] text-[#333333] placeholder:text-[rgba(51,51,51,0.7)] outline-none border-none rounded-[8px]"
                      />
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div className="mb-6">
                    <label className="block font-['Inter:Medium',sans-serif] font-medium text-[#333333] text-[14px] mb-2">
                      Телефон
                    </label>
                    <div className="relative bg-neutral-100 h-[50px] rounded-[8px] border border-[#dddddd]">
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          handleChange();
                        }}
                        placeholder="+380501234567"
                        className="w-full h-full px-4 bg-transparent font-['Inter:Regular',sans-serif] font-normal text-[16px] text-[#333333] placeholder:text-[rgba(51,51,51,0.7)] outline-none border-none rounded-[8px]"
                      />
                    </div>
                  </div>

                  {/* Address Field */}
                  <div className="mb-6">
                    <label className="block font-['Inter:Medium',sans-serif] font-medium text-[#333333] text-[14px] mb-2">
                      Адреса
                    </label>
                    <div className="relative bg-neutral-100 h-[50px] rounded-[8px] border border-[#dddddd]">
                      <input
                        type="text"
                        value={address}
                        onChange={(e) => {
                          setAddress(e.target.value);
                          handleChange();
                        }}
                        placeholder="Ваша адреса"
                        className="w-full h-full px-4 bg-transparent font-['Inter:Regular',sans-serif] font-normal text-[16px] text-[#333333] placeholder:text-[rgba(51,51,51,0.7)] outline-none border-none rounded-[8px]"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="mb-8">
                    <label className="block font-['Inter:Medium',sans-serif] font-medium text-[#333333] text-[14px] mb-2">
                      Email
                    </label>
                    <div className="relative bg-neutral-100 h-[50px] rounded-[8px] border border-[#dddddd]">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          handleChange();
                        }}
                        placeholder="your@email.com"
                        className="w-full h-full px-4 bg-transparent font-['Inter:Regular',sans-serif] font-normal text-[16px] text-[#333333] placeholder:text-[rgba(51,51,51,0.7)] outline-none border-none rounded-[8px]"
                      />
                    </div>
                  </div>

                  {/* Save Button */}
                  <button 
                    onClick={handleSave}
                    disabled={!isEdited}
                    className={`w-full h-[48px] rounded-[8px] transition-all flex items-center justify-center ${
                      isEdited 
                        ? 'bg-gradient-to-b from-[#ff8c00] to-[#ffa500] shadow-[0px_4px_6px_-4px_rgba(255,140,0,0.2),0px_10px_15px_-3px_rgba(255,140,0,0.2)] cursor-pointer hover:from-[#ff9500] hover:to-[#ffb000]' 
                        : 'bg-gray-300 shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] cursor-not-allowed opacity-60'
                    }`}
                  >
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-center text-white">
                      {isEdited ? 'Зберегти зміни' : 'Немає змін'}
                    </p>
                  </button>

                  {isEdited && (
                    <p className="text-center mt-3 font-['Inter:Regular',sans-serif] font-normal text-[#666666] text-[12px]">
                      У вас є незбережені зміни
                    </p>
                  )}
                </div>

                {/* Account Info */}
                <div className="mt-6 bg-white rounded-[12px] shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1),0px_4px_6px_-1px_rgba(0,0,0,0.1)] p-4">
                  <p className="font-['Inter:Regular',sans-serif] font-normal text-[#666666] text-[12px] text-center">
                    Зареєстровано: Січень 2025
                  </p>
                </div>
              </>
            )}

            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <>
                {/* Orders List */}
                <div className="bg-white rounded-[16px] shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] p-6 md:p-8">
                  {userOrders.length > 0 ? (
                    <div className="space-y-4">
                      {userOrders.map(order => {
                        const statusConfig = getStatusColor(order.status);
                        return (
                          <div 
                            key={order.id} 
                            className="p-4 border border-gray-200 rounded-[8px] hover:border-[darkorange] transition-colors"
                          >
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-[#333333]">
                                  Замовлення #{order.id}
                                </p>
                                <p className="font-['Inter:Regular',sans-serif] text-[12px] text-[#666666] mt-1">
                                  {order.date} {order.time}
                                </p>
                              </div>
                              <div
                                className="inline-flex h-[22px] px-[10px] rounded-[6px] items-center justify-center"
                                style={{ backgroundColor: statusConfig.bg }}
                              >
                                <p
                                  className="font-['Inter:Medium',sans-serif] font-medium text-[12px]"
                                  style={{ color: statusConfig.color }}
                                >
                                  {getStatusText(order.status)}
                                </p>
                              </div>
                            </div>

                            <div className="mb-3">
                              <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#666666]">
                                {order.items.map((item, idx) => (
                                  <span key={idx}>
                                    {item.name} x{item.quantity}
                                    {idx < order.items.length - 1 ? ', ' : ''}
                                  </span>
                                ))}
                              </p>
                            </div>

                            <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-[#333333]">
                                Всього: {order.total} ₴
                              </p>
                              <button
                                onClick={() => navigate(`/order-status/${order.id}`)}
                                className="h-[32px] px-4 bg-[darkorange] rounded-[6px] hover:bg-[#ff9500] transition-colors"
                              >
                                <span className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-white">
                                  Переглянути
                                </span>
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <p className="font-['Inter:Regular',sans-serif] text-[16px] text-[#666666] mb-4">
                        У вас ще немає замовлень
                      </p>
                      <button
                        onClick={() => navigate('/catalog')}
                        className="h-[40px] px-6 bg-[darkorange] rounded-[8px] hover:bg-[#ff9500] transition-colors"
                      >
                        <span className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-white">
                          Перейти до меню
                        </span>
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}