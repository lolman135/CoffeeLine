import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RefreshCw, User, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useOrders, Order, OrderStatus } from '../contexts/OrdersContext';
import svgPaths from "../imports/svg-k4b1fjq95c";

function CoffeeLogo() {
  return (
    <div className="absolute left-[10px] size-[20px] top-[10px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g>
          <path clipRule="evenodd" d={svgPaths.p3eb47300} fill="var(--fill-0, white)" fillRule="evenodd" />
          <path d={svgPaths.p1808a500} fill="var(--fill-0, white)" />
          <path clipRule="evenodd" d={svgPaths.p3cbb83f0} fill="var(--fill-0, white)" fillRule="evenodd" />
        </g>
      </svg>
    </div>
  );
}

function Header() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white h-[65px] z-50 border-b border-[#dddddd] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]">
      <div className="max-w-[1760px] mx-auto h-full px-4 sm:px-6 lg:px-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="bg-gradient-to-b from-[#ff8c00] to-[#ffa500] rounded-[12px] shadow-[0px_2px_4px_-2px_rgba(255,140,0,0.2),0px_4px_6px_-1px_rgba(255,140,0,0.2)] w-[40px] h-[40px] flex items-center justify-center relative">
            <CoffeeLogo />
          </div>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#333333] text-[20px] hidden sm:block">Coffee Line</p>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleLogout}
            className="w-[40px] h-[32px] rounded-[6px] hover:bg-gray-100 transition-colors flex items-center justify-center"
            title="Вийти"
          >
            <LogOut className="w-5 h-5 text-[#333333]" />
          </button>
        </div>
      </div>
    </header>
  );
}

interface OrderCardProps {
  order: Order;
  onAccept: (orderId: string) => void;
  onComplete: (orderId: string) => void;
  onIssued: (orderId: string) => void;
  onCancel: (orderId: string) => void;
  showActions: boolean;
}

function OrderCard({ order, onAccept, onComplete, onIssued, onCancel, showActions }: OrderCardProps) {
  const getStatusConfig = (status: OrderStatus) => {
    switch (status) {
      case 'pending':
        return { text: 'Очікує', bg: '#fef3c6', color: '#973c00' };
      case 'preparing':
        return { text: 'Готується', bg: '#DBEAFE', color: '#193CB8' };
      case 'ready':
        return { text: 'Готово', bg: '#DCFCE7', color: '#016630' };
      case 'completed':
        return { text: 'Завершено', bg: '#F3E8FF', color: '#6E11B0' };
      case 'cancelled':
        return { text: 'Скасовано', bg: '#FFE2E2', color: '#9F0712' };
      default:
        return { text: 'Очікує', bg: '#fef3c6', color: '#973c00' };
    }
  };

  const statusConfig = getStatusConfig(order.status);

  const getActionButton = () => {
    if (!showActions) return null;

    if (order.status === 'pending') {
      return (
        <button
          onClick={() => onAccept(order.id)}
          className="bg-blue-600 h-[36px] rounded-[2px] shadow-[0px_4px_6px_-4px_rgba(37,99,235,0.2),0px_10px_15px_-3px_rgba(37,99,235,0.2)] hover:bg-blue-700 transition-colors flex-1 flex items-center justify-center"
        >
          <p className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-white">Прийняти</p>
        </button>
      );
    }

    if (order.status === 'preparing') {
      return (
        <button
          onClick={() => onComplete(order.id)}
          className="bg-green-600 h-[36px] rounded-[2px] shadow-[0px_4px_6px_-4px_rgba(34,197,94,0.2),0px_10px_15px_-3px_rgba(34,197,94,0.2)] hover:bg-green-700 transition-colors flex-1 flex items-center justify-center"
        >
          <p className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-white">Готово</p>
        </button>
      );
    }

    if (order.status === 'ready') {
      return (
        <button
          onClick={() => onIssued(order.id)}
          className="bg-gray-400 h-[36px] rounded-[2px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:bg-gray-500 transition-colors flex-1 flex items-center justify-center"
        >
          <p className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-white">Видано</p>
        </button>
      );
    }

    return null;
  };

  return (
    <div className="bg-white rounded-[8px] border border-zinc-200 shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] p-6">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] text-black mb-2">
            Замовлення #{order.id}
          </h3>
          <div className="flex items-center gap-2 text-[14px] text-zinc-500">
            <span className="font-['Inter:Regular',sans-serif]">{order.customerName}</span>
            <span>•</span>
            <span className="font-['Inter:Regular',sans-serif]">{order.phone}</span>
            {order.address && (
              <>
                <span>•</span>
                <span className="font-['Inter:Regular',sans-serif]">{order.address}</span>
              </>
            )}
          </div>
        </div>
        <div
          className="h-[22px] px-[10px] rounded-[2px] flex items-center justify-center"
          style={{ backgroundColor: statusConfig.bg }}
        >
          <p
            className="font-['Inter:Medium',sans-serif] font-medium text-[12px]"
            style={{ color: statusConfig.color }}
          >
            {statusConfig.text}
          </p>
        </div>
      </div>

      {/* Items */}
      <div className="mb-4">
        {order.items.map((item, index) => (
          <div key={index} className="flex gap-2 mb-1">
            <span className="text-zinc-500 text-[14px]">•</span>
            <span className="font-['Inter:Regular',sans-serif] text-[14px] text-black">
              {item.name} {item.size && `(${item.size})`} {item.quantity > 1 && `x${item.quantity}`}
              {item.additions && item.additions.length > 0 && ` + ${item.additions.join(', ')}`}
            </span>
          </div>
        ))}
      </div>

      {/* Order Info */}
      <div className="flex items-center gap-4 text-[14px] text-zinc-500 mb-6">
        <span className="font-['Inter:Regular',sans-serif]">
          Спосіб: {order.deliveryMethod === 'delivery' ? 'Доставка' : 'Самовивіз'}
        </span>
        <span className="font-['Inter:Regular',sans-serif]">
          Оплата: {order.paymentMethod === 'cash' ? 'Готівкою' : 'Карткою'}
        </span>
        <span className="font-['Inter:Regular',sans-serif]">Сума: {order.total} ₴</span>
        <span className="font-['Inter:Regular',sans-serif]">Час: {order.date} {order.time}</span>
      </div>

      {/* Action Buttons */}
      {showActions && (
        <div className="flex gap-2">
          {getActionButton()}
          {(order.status === 'pending' || order.status === 'preparing') && (
            <button
              onClick={() => onCancel(order.id)}
              className="bg-white h-[36px] rounded-[2px] border border-red-500 hover:bg-red-50 transition-colors flex-1 flex items-center justify-center"
            >
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-red-500">Скасувати</p>
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default function CashierPanel() {
  const { orders, updateOrderStatus } = useOrders();
  const [activeTab, setActiveTab] = useState<'active' | 'all'>('active');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handleAcceptOrder = (orderId: string) => {
    updateOrderStatus(orderId, 'preparing');
  };

  const handleCompleteOrder = (orderId: string) => {
    updateOrderStatus(orderId, 'ready');
  };

  const handleIssuedOrder = (orderId: string) => {
    updateOrderStatus(orderId, 'completed');
  };

  const handleCancelOrder = (orderId: string) => {
    updateOrderStatus(orderId, 'cancelled');
  };

  const handleRefresh = () => {
    // При натисканні "Оновити" React Context автоматично оновиться через storage listener
    console.log('Refreshing orders...');
  };

  const activeOrders = orders.filter(order =>
    order.status === 'pending' || order.status === 'preparing' || order.status === 'ready'
  );

  const displayOrders = activeTab === 'active' ? activeOrders : orders;

  // Pagination logic
  const totalPages = Math.ceil(displayOrders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedOrders = displayOrders.slice(startIndex, endIndex);

  // Reset to page 1 when tab or items per page changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab, itemsPerPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push('...');
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  return (
    <div className="bg-[#fff5e6] min-h-screen">
      <Header />

      <main className="pt-[65px] min-h-screen">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-20 py-8 md:py-12">
          {/* Page Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[24px] text-black tracking-[-0.6px]">
              Панель касира
            </h1>
            <button
              onClick={handleRefresh}
              className="bg-white h-[32px] px-4 rounded-[6px] border border-zinc-200 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:bg-gray-50 transition-colors flex items-center gap-2"
            >
              <RefreshCw className="w-4 h-4 text-black" />
              <span className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-black">
                Оновити
              </span>
            </button>
          </div>

          {/* Tabs */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('active')}
                className={`h-[36px] px-6 rounded-[6px] transition-all ${
                  activeTab === 'active'
                    ? 'bg-[darkorange] shadow-[0px_2px_4px_-2px_rgba(255,140,0,0.2),0px_4px_6px_-1px_rgba(255,140,0,0.2)]'
                    : 'bg-white border border-zinc-200 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:bg-gray-50'
                }`}
              >
                <span
                  className={`font-['Inter:Medium',sans-serif] font-medium text-[14px] ${
                    activeTab === 'active' ? 'text-white' : 'text-black'
                  }`}
                >
                  Активні замовлення
                </span>
              </button>
              <button
                onClick={() => setActiveTab('all')}
                className={`h-[36px] px-6 rounded-[6px] transition-all ${
                  activeTab === 'all'
                    ? 'bg-[darkorange] shadow-[0px_2px_4px_-2px_rgba(255,140,0,0.2),0px_4px_6px_-1px_rgba(255,140,0,0.2)]'
                    : 'bg-white border border-zinc-200 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:bg-gray-50'
                }`}
              >
                <span
                  className={`font-['Inter:Medium',sans-serif] font-medium text-[14px] ${
                    activeTab === 'all' ? 'text-white' : 'text-black'
                  }`}
                >
                  Всі замовлення
                </span>
              </button>
            </div>

            {/* Items per page selector */}
            {activeTab === 'all' && displayOrders.length > 0 && (
              <div className="flex items-center gap-2">
                <span className="font-['Inter:Regular',sans-serif] text-[14px] text-zinc-600">
                  Показати:
                </span>
                <select
                  value={itemsPerPage}
                  onChange={(e) => setItemsPerPage(Number(e.target.value))}
                  className="h-[36px] px-3 bg-white rounded-[6px] border border-zinc-200 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] font-['Inter:Regular',sans-serif] text-[14px] text-black outline-none cursor-pointer"
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={50}>50</option>
                </select>
              </div>
            )}
          </div>

          {/* Orders List */}
          <div className="space-y-4">
            {paginatedOrders.length === 0 ? (
              <div className="bg-white rounded-[8px] border border-zinc-200 shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] p-12 text-center">
                <p className="font-['Inter:Regular',sans-serif] text-[16px] text-zinc-500">
                  {activeTab === 'active' ? 'Немає активних замовлень' : 'Немає замовлень'}
                </p>
              </div>
            ) : (
              paginatedOrders.map(order => (
                <OrderCard
                  key={order.id}
                  order={order}
                  onAccept={handleAcceptOrder}
                  onComplete={handleCompleteOrder}
                  onIssued={handleIssuedOrder}
                  onCancel={handleCancelOrder}
                  showActions={activeTab === 'active'}
                />
              ))
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center mt-8">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                className={`h-[32px] px-4 rounded-[6px] border border-zinc-200 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:bg-gray-50 transition-colors ${
                  currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={currentPage === 1}
              >
                <span className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-black">
                  Назад
                </span>
              </button>
              <div className="flex items-center gap-2 mx-4">
                {getPageNumbers().map(page => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page as number)}
                    className={`h-[32px] px-4 rounded-[6px] border border-zinc-200 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:bg-gray-50 transition-colors ${
                      page === currentPage ? 'bg-[darkorange] text-white' : ''
                    }`}
                  >
                    <span className="font-['Inter:Medium',sans-serif] font-medium text-[14px]">
                      {page}
                    </span>
                  </button>
                ))}
              </div>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                className={`h-[32px] px-4 rounded-[6px] border border-zinc-200 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:bg-gray-50 transition-colors ${
                  currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={currentPage === totalPages}
              >
                <span className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-black">
                  Далі
                </span>
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}