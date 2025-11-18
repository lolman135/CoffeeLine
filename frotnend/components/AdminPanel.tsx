import { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, Plus, Pencil, Trash2, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useOrders, Order, OrderStatus } from '../contexts/OrdersContext';
import { useDrinks } from '../contexts/DrinksContext';
import { Drink } from '../data/drinks';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import svgPaths from "../imports/svg-k4b1fjq95c";
import imgEspresso from "figma:asset/4cdde660d47777025fadcee00ccd217877a36e59.png";
import imgCappuccino from "figma:asset/7da29b9834271414e400699aec7ffe2ec031fb93.png";
import imgLatte from "figma:asset/325f769fc82699baad870ca5ffaea43e92efb7e5.png";
import imgAmericano from "figma:asset/75d54ff1c0c61d1084bd38621ccc695b84284411.png";
import imgIcedLatte from "figma:asset/cacb5bfa3a2c41f2bf01f6b83131c1337e02546b.png";
import imgRaf from "figma:asset/0303b9efc512b515642ae82c8c95ddf5489a1c51.png";

// Маппінг ID напоїв до імпортованих картинок
const drinkImages: Record<string, string> = {
  '1': imgEspresso,
  '2': imgCappuccino,
  '3': imgLatte,
  '4': imgAmericano,
  '5': imgIcedLatte,
  '6': imgRaf,
};

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

// Статистика Tab
function StatisticsTab() {
  const { orders } = useOrders();

  // Обчислення статистики
  const stats = useMemo(() => {
    const today = new Date().toLocaleDateString('uk-UA');
    
    // Статистика за сьогодні
    const todayOrders = orders.filter(o => o.date === today);
    
    const todayRevenue = todayOrders
      .filter(o => o.status === 'completed')
      .reduce((sum, o) => sum + o.total, 0);
    
    const todayTotal = todayOrders.length;
    const todayCompleted = todayOrders.filter(o => o.status === 'completed').length;
    const activeOrders = orders.filter(o => 
      o.status === 'pending' || o.status === 'preparing' || o.status === 'ready'
    ).length;

    // Продажі за останні 7 днів
    const last7Days = Array.from({ length: 7 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (6 - i));
      return date;
    });

    const salesData = last7Days.map(date => {
      const dateStr = date.toLocaleDateString('uk-UA');
      const dayOrders = orders.filter(o => o.date === dateStr && o.status === 'completed');
      const revenue = dayOrders.reduce((sum, o) => sum + o.total, 0);
      return {
        date: `${date.getDate()}.${date.getMonth() + 1}`,
        revenue
      };
    });

    // Популярні товари за останні 7 днів
    const drinkCounts: Record<string, number> = {};
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    const weekAgoStr = weekAgo.toLocaleDateString('uk-UA');
    
    const last7DaysOrders = orders.filter(o => {
      // Порівнюємо дати як рядки
      const orderDateParts = o.date.split('.');
      const weekAgoDateParts = weekAgoStr.split('.');
      
      if (orderDateParts.length === 3 && weekAgoDateParts.length === 3) {
        const orderDate = new Date(
          parseInt(orderDateParts[2]),
          parseInt(orderDateParts[1]) - 1,
          parseInt(orderDateParts[0])
        );
        return orderDate >= weekAgo;
      }
      return false;
    });
    
    last7DaysOrders.forEach(order => {
      order.items.forEach(item => {
        drinkCounts[item.name] = (drinkCounts[item.name] || 0) + item.quantity;
      });
    });
    
    const popularDrinks = Object.entries(drinkCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([name, count]) => ({ name, count }));

    // Розподіл замовлень за статусами (за сьогодні)
    const statusDistribution = [
      { 
        name: 'Очікує', 
        value: todayOrders.filter(o => o.status === 'pending').length,
        color: '#F59E0B'
      },
      { 
        name: 'Готується', 
        value: todayOrders.filter(o => o.status === 'preparing').length,
        color: '#3B82F6'
      },
      { 
        name: 'Готово', 
        value: todayOrders.filter(o => o.status === 'ready').length,
        color: '#10B981'
      },
      { 
        name: 'Завершено', 
        value: todayCompleted,
        color: '#8B5CF6'
      },
      { 
        name: 'Скасовано', 
        value: todayOrders.filter(o => o.status === 'cancelled').length,
        color: '#EF4444'
      },
    ].filter(item => item.value > 0);

    // Кількість замовлень за 7 днів
    const ordersCount = last7Days.map(date => {
      const dateStr = date.toLocaleDateString('uk-UA');
      const count = orders.filter(o => o.date === dateStr).length;
      return {
        date: `${date.getDate()}.${date.getMonth() + 1}`,
        count
      };
    });

    return {
      todayRevenue,
      todayTotal,
      todayCompleted,
      activeOrders,
      salesData,
      popularDrinks,
      statusDistribution,
      ordersCount
    };
  }, [orders]);

  return (
    <div className="space-y-6">
      {/* Stats Cards - 4 блоки */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Загальний дохід */}
        <div className="bg-white rounded-[8px] border border-zinc-200 shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] p-6">
          <div className="flex items-start justify-between mb-2">
            <p className="font-['Inter:Regular',sans-serif] text-[14px] text-zinc-500">Загальний дохід</p>
            <div className="w-[32px] h-[32px] rounded-[6px] bg-green-100 flex items-center justify-center">
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                <path d="M10 3v14M3 10h14" stroke="#16A34A" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[32px] text-black">{stats.todayRevenue} ₴</p>
        </div>

        {/* Всього замовлень */}
        <div className="bg-white rounded-[8px] border border-zinc-200 shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] p-6">
          <div className="flex items-start justify-between mb-2">
            <p className="font-['Inter:Regular',sans-serif] text-[14px] text-zinc-500">Всього замовлень</p>
            <div className="w-[32px] h-[32px] rounded-[6px] bg-blue-100 flex items-center justify-center">
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                <rect x="3" y="3" width="14" height="14" rx="2" stroke="#2563EB" strokeWidth="2" fill="none"/>
              </svg>
            </div>
          </div>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[32px] text-black">{stats.todayTotal}</p>
        </div>

        {/* Завершено */}
        <div className="bg-white rounded-[8px] border border-zinc-200 shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] p-6">
          <div className="flex items-start justify-between mb-2">
            <p className="font-['Inter:Regular',sans-serif] text-[14px] text-zinc-500">Завершено</p>
            <div className="w-[32px] h-[32px] rounded-[6px] bg-purple-100 flex items-center justify-center">
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                <path d="M5 10l3 3 7-7" stroke="#9333EA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[32px] text-black">{stats.todayCompleted}</p>
        </div>

        {/* Активних */}
        <div className="bg-white rounded-[8px] border border-zinc-200 shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] p-6">
          <div className="flex items-start justify-between mb-2">
            <p className="font-['Inter:Regular',sans-serif] text-[14px] text-zinc-500">Активних</p>
            <div className="w-[32px] h-[32px] rounded-[6px] bg-orange-100 flex items-center justify-center">
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="7" stroke="#EA580C" strokeWidth="2" fill="none"/>
                <circle cx="10" cy="10" r="3" fill="#EA580C"/>
              </svg>
            </div>
          </div>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[32px] text-black">{stats.activeOrders}</p>
        </div>
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Продажі за останні 7 днів */}
        <div className="bg-white rounded-[8px] border border-zinc-200 shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] p-6">
          <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] text-black mb-4">
            Продажі за останні 7 днів
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={stats.salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis 
                dataKey="date" 
                tick={{ fontSize: 12, fill: '#6B7280' }}
                axisLine={{ stroke: '#E5E7EB' }}
              />
              <YAxis 
                tick={{ fontSize: 12, fill: '#6B7280' }}
                axisLine={{ stroke: '#E5E7EB' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #E5E7EB',
                  borderRadius: '6px'
                }}
                formatter={(value: number) => `${value} ₴`}
              />
              <Bar dataKey="revenue" fill="#2563EB" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Популярні товари */}
        <div className="bg-white rounded-[8px] border border-zinc-200 shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] p-6">
          <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] text-black mb-4">
            Популярні товари
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={stats.popularDrinks}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: 12, fill: '#6B7280' }}
                axisLine={{ stroke: '#E5E7EB' }}
              />
              <YAxis 
                tick={{ fontSize: 12, fill: '#6B7280' }}
                axisLine={{ stroke: '#E5E7EB' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #E5E7EB',
                  borderRadius: '6px'
                }}
              />
              <Bar dataKey="count" fill="#FF8C00" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Розподіл замовлень за статусами */}
        <div className="bg-white rounded-[8px] border border-zinc-200 shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] p-6">
          <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] text-black mb-4">
            Розподіл замовлень за статусами
          </h3>
          {stats.statusDistribution.length > 0 ? (
            <div className="flex items-center gap-6">
              {/* Legend зліва */}
              <div className="space-y-3 flex-shrink-0">
                {stats.statusDistribution.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div 
                      className="w-[12px] h-[12px] rounded-full flex-shrink-0" 
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="font-['Inter:Regular',sans-serif] text-[14px] text-zinc-600 whitespace-nowrap">
                      {item.name}: {item.value}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Діаграма праворуч */}
              <div className="flex-1 flex items-center justify-center">
                <ResponsiveContainer width="100%" height={220}>
                  <PieChart>
                    <Pie
                      data={stats.statusDistribution}
                      cx="50%"
                      cy="50%"
                      outerRadius={90}
                      dataKey="value"
                      label={false}
                    >
                      {stats.statusDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          ) : (
            <div className="h-[220px] flex items-center justify-center text-zinc-400">
              Немає даних за сьогодні
            </div>
          )}
        </div>

        {/* Кількість замовлень за 7 днів */}
        <div className="bg-white rounded-[8px] border border-zinc-200 shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] p-6">
          <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] text-black mb-4">
            Кількість замовлень за 7 днів
          </h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={stats.ordersCount}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis 
                dataKey="date" 
                tick={{ fontSize: 12, fill: '#6B7280' }}
                axisLine={{ stroke: '#E5E7EB' }}
              />
              <YAxis 
                tick={{ fontSize: 12, fill: '#6B7280' }}
                axisLine={{ stroke: '#E5E7EB' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #E5E7EB',
                  borderRadius: '6px'
                }}
              />
              <Bar dataKey="count" fill="#2563EB" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

// Замовлення Tab
function OrdersTab() {
  const { orders, updateOrderStatus } = useOrders();
  const [sortField, setSortField] = useState<'id' | 'customerName' | 'total' | 'status' | 'time'>('time');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handleSort = (field: typeof sortField) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedOrders = useMemo(() => {
    return [...orders].sort((a, b) => {
      let aValue: any = a[sortField];
      let bValue: any = b[sortField];

      if (sortField === 'total') {
        aValue = Number(aValue);
        bValue = Number(bValue);
      }

      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }, [orders, sortField, sortDirection]);

  // Pagination logic
  const totalPages = Math.ceil(sortedOrders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedOrders = sortedOrders.slice(startIndex, endIndex);

  // Reset to page 1 when items per page changes
  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage]);

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

  const handleStatusChange = (orderId: string, newStatus: OrderStatus) => {
    updateOrderStatus(orderId, newStatus);
  };

  return (
    <div>
      {/* Items per page selector */}
      {sortedOrders.length > 0 && (
        <div className="flex items-center justify-end mb-4">
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
        </div>
      )}

      <div className="bg-white rounded-[8px] border border-zinc-200 shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-zinc-200">
              <tr>
                <th
                  onClick={() => handleSort('id')}
                  className="px-6 py-3 text-left font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-zinc-700 cursor-pointer hover:bg-gray-100"
                >
                  Номер {sortField === 'id' && (sortDirection === 'asc' ? '↑' : '↓')}
                </th>
                <th
                  onClick={() => handleSort('customerName')}
                  className="px-6 py-3 text-left font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-zinc-700 cursor-pointer hover:bg-gray-100"
                >
                  Клієнт {sortField === 'customerName' && (sortDirection === 'asc' ? '↑' : '↓')}
                </th>
                <th className="px-6 py-3 text-left font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-zinc-700">
                  Товари
                </th>
                <th
                  onClick={() => handleSort('total')}
                  className="px-6 py-3 text-left font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-zinc-700 cursor-pointer hover:bg-gray-100"
                >
                  Сума {sortField === 'total' && (sortDirection === 'asc' ? '↑' : '↓')}
                </th>
                <th
                  onClick={() => handleSort('status')}
                  className="px-6 py-3 text-left font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-zinc-700 cursor-pointer hover:bg-gray-100"
                >
                  Статус {sortField === 'status' && (sortDirection === 'asc' ? '↑' : '↓')}
                </th>
                <th
                  onClick={() => handleSort('time')}
                  className="px-6 py-3 text-left font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-zinc-700 cursor-pointer hover:bg-gray-100"
                >
                  Час {sortField === 'time' && (sortDirection === 'asc' ? '↑' : '↓')}
                </th>
                <th className="px-6 py-3 text-left font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-zinc-700">
                  Дії
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedOrders.map((order, index) => {
                const statusConfig = getStatusConfig(order.status);
                return (
                  <tr key={order.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 font-['Inter:Medium',sans-serif] font-medium text-[14px] text-black">
                      #{order.id}
                    </td>
                    <td className="px-6 py-4 font-['Inter:Regular',sans-serif] text-[14px] text-black">
                      <div>{order.customerName}</div>
                      <div className="text-zinc-500">{order.phone}</div>
                    </td>
                    <td className="px-6 py-4 font-['Inter:Regular',sans-serif] text-[14px] text-black">
                      {order.items.map((item, i) => (
                        <div key={i} className="text-sm">
                          {item.name} x{item.quantity}
                        </div>
                      ))}
                    </td>
                    <td className="px-6 py-4 font-['Inter:Medium',sans-serif] font-medium text-[14px] text-black">
                      {order.total} ₴
                    </td>
                    <td className="px-6 py-4">
                      <div
                        className="inline-flex h-[22px] px-[10px] rounded-[6px] items-center justify-center"
                        style={{ backgroundColor: statusConfig.bg }}
                      >
                        <p
                          className="font-['Inter:Medium',sans-serif] font-medium text-[12px]"
                          style={{ color: statusConfig.color }}
                        >
                          {statusConfig.text}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-['Inter:Regular',sans-serif] text-[14px] text-zinc-500">
                      {order.date} {order.time}
                    </td>
                    <td className="px-6 py-4">
                      <select
                        value={order.status}
                        onChange={(e) => handleStatusChange(order.id, e.target.value as OrderStatus)}
                        className="bg-white border border-zinc-300 rounded-[4px] px-2 py-1 text-[14px] font-['Inter:Regular',sans-serif] text-black"
                      >
                        <option value="pending">Очікує</option>
                        <option value="preparing">Готується</option>
                        <option value="ready">Готово</option>
                        <option value="completed">Завершено</option>
                        <option value="cancelled">Скасовано</option>
                      </select>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {paginatedOrders.length === 0 && (
          <div className="p-12 text-center">
            <p className="font-['Inter:Regular',sans-serif] text-[16px] text-zinc-500">
              Немає замовлень
            </p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center mt-6">
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
            {getPageNumbers().map((page, idx) => (
              <button
                key={idx}
                onClick={() => typeof page === 'number' && handlePageChange(page)}
                disabled={typeof page !== 'number'}
                className={`h-[32px] px-4 rounded-[6px] border border-zinc-200 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] transition-colors ${
                  page === currentPage 
                    ? 'bg-[darkorange] text-white border-[darkorange]' 
                    : typeof page === 'number' 
                      ? 'hover:bg-gray-50 cursor-pointer' 
                      : 'cursor-default border-transparent'
                }`}
              >
                <span className={`font-['Inter:Medium',sans-serif] font-medium text-[14px] ${
                  page === currentPage ? 'text-white' : 'text-black'
                }`}>
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
  );
}

// Меню Tab
interface DrinkFormData {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  category: 'hot' | 'cold';
  image: string;
  sizes: Array<{
    id: string;
    name: string;
    volume: string;
    price: number;
  }>;
  addons: Array<{
    id: string;
    name: string;
    price: number;
  }>;
}

// Стандартний список додатків
const standardAddons = [
  { id: 'vanilla', name: 'Ванільний сироп', price: 15 },
  { id: 'caramel', name: 'Карамельний сироп', price: 15 },
  { id: 'hazelnut', name: 'Горіховий сироп', price: 15 },
  { id: 'chocolate', name: 'Шоколадний сироп', price: 15 },
  { id: 'almond', name: 'Мигдальне молоко', price: 20 },
  { id: 'coconut', name: 'Кокосове молоко', price: 20 },
  { id: 'soy', name: 'Соєве молоко', price: 15 },
  { id: 'extra-shot', name: 'Додатковий шот еспресо', price: 20 },
  { id: 'whipped', name: 'Збиті вершки', price: 10 },
];

function MenuTab() {
  const { drinks, addDrink, updateDrink, deleteDrink } = useDrinks();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingDrink, setEditingDrink] = useState<Drink | null>(null);
  const [formData, setFormData] = useState<DrinkFormData>({
    id: '',
    name: '',
    description: '',
    basePrice: 0,
    category: 'hot',
    image: '',
    sizes: [],
    addons: [],
  });

  // Поля для розмірів
  const [volumeSmall, setVolumeSmall] = useState('250');
  const [volumeMedium, setVolumeMedium] = useState('350');
  const [volumeLarge, setVolumeLarge] = useState('450');
  const [priceSmall, setPriceSmall] = useState('0');
  const [priceMedium, setPriceMedium] = useState('0');
  const [priceLarge, setPriceLarge] = useState('0');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const openAddForm = () => {
    setEditingDrink(null);
    setFormData({
      id: `drink-${Date.now()}`,
      name: '',
      description: '',
      basePrice: 0,
      category: 'hot',
      image: 'figma:asset/4cdde660d47777025fadcee00ccd217877a36e59.png',
      sizes: [],
      addons: [],
    });
    setVolumeSmall('250');
    setVolumeMedium('350');
    setVolumeLarge('450');
    setPriceSmall('0');
    setPriceMedium('0');
    setPriceLarge('0');
    setSelectedAddons(standardAddons.map(a => a.id)); // Всі додатки за замовчуванням
    setIsFormOpen(true);
  };

  const openEditForm = (drink: Drink) => {
    setEditingDrink(drink);
    setFormData(drink);
    
    // Заповнюємо поля розмірів
    if (drink.sizes.length >= 3) {
      setVolumeSmall(drink.sizes[0].volume.replace('мл', ''));
      setVolumeMedium(drink.sizes[1].volume.replace('мл', ''));
      setVolumeLarge(drink.sizes[2].volume.replace('мл', ''));
      setPriceSmall(drink.sizes[0].price.toString());
      setPriceMedium(drink.sizes[1].price.toString());
      setPriceLarge(drink.sizes[2].price.toString());
    }
    
    setSelectedAddons(drink.addons.map(a => a.id));
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setEditingDrink(null);
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.description) {
      alert('Будь ласка, заповніть всі обов\'язкові поля');
      return;
    }

    const smallPrice = Number(priceSmall);
    const mediumPrice = Number(priceMedium);
    const largePrice = Number(priceLarge);

    if (smallPrice <= 0 || mediumPrice <= 0 || largePrice <= 0) {
      alert('Будь ласка, вкажіть ціни для всіх розмірів');
      return;
    }

    // Формуємо sizes
    const sizes = [
      { id: 'small', name: 'Малий', volume: `${volumeSmall}мл`, price: smallPrice },
      { id: 'medium', name: 'Середній', volume: `${volumeMedium}мл`, price: mediumPrice },
      { id: 'large', name: 'Великий', volume: `${volumeLarge}мл`, price: largePrice },
    ];

    // Формуємо addons
    const addons = standardAddons.filter(addon => selectedAddons.includes(addon.id));

    const drinkData = {
      ...formData,
      basePrice: smallPrice,
      price: smallPrice,
      sizes,
      addons,
    };

    if (editingDrink) {
      updateDrink(editingDrink.id, drinkData as Drink);
    } else {
      addDrink(drinkData as Drink);
    }
    closeForm();
  };

  const handleDelete = (id: string) => {
    if (confirm('Ви впевнені, що хочете видалити цей напій?')) {
      deleteDrink(id);
    }
  };

  const toggleAddon = (addonId: string) => {
    if (selectedAddons.includes(addonId)) {
      setSelectedAddons(selectedAddons.filter(id => id !== addonId));
    } else {
      setSelectedAddons([...selectedAddons, addonId]);
    }
  };

  return (
    <div>
      {/* Add Button */}
      <div className="mb-6 flex justify-end">
        <button
          onClick={openAddForm}
          className="bg-[darkorange] h-[40px] px-6 rounded-[8px] shadow-[0px_2px_4px_-2px_rgba(255,140,0,0.2),0px_4px_6px_-1px_rgba(255,140,0,0.2)] hover:bg-[#ff9500] transition-colors flex items-center gap-2"
        >
          <Plus className="w-5 h-5 text-white" />
          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-white">
            Додати напій
          </span>
        </button>
      </div>

      {/* Drinks Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {drinks.map((drink) => (
          <div
            key={drink.id}
            className="bg-white rounded-[8px] border border-zinc-200 shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col"
          >
            <img src={drinkImages[drink.id] || drink.image} alt={drink.name} className="w-full h-48 object-cover" />
            <div className="p-4 flex flex-col flex-1">
              <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-black mb-1">
                {drink.name}
              </h3>
              <p className="font-['Inter:Regular',sans-serif] text-[14px] text-zinc-500 mb-2 line-clamp-2 flex-1">
                {drink.description}
              </p>
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] text-[darkorange] mb-4">
                від {drink.basePrice} ₴
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => openEditForm(drink)}
                  className="flex-1 bg-blue-600 h-[32px] rounded-[6px] hover:bg-blue-700 transition-colors flex items-center justify-center gap-1"
                >
                  <Pencil className="w-4 h-4 text-white" />
                  <span className="font-['Inter:Medium',sans-serif] font-medium text-[12px] text-white">
                    Редагувати
                  </span>
                </button>
                <button
                  onClick={() => handleDelete(drink.id)}
                  className="flex-1 bg-red-600 h-[32px] rounded-[6px] hover:bg-red-700 transition-colors flex items-center justify-center gap-1"
                >
                  <Trash2 className="w-4 h-4 text-white" />
                  <span className="font-['Inter:Medium',sans-serif] font-medium text-[12px] text-white">
                    Видалити
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-[12px] max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-zinc-200 px-6 py-4 flex items-center justify-between">
              <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] text-black">
                {editingDrink ? 'Редагувати напій' : 'Додати новий напій'}
              </h2>
              <button
                onClick={closeForm}
                className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center"
              >
                <X className="w-5 h-5 text-black" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              {/* Name */}
              <div>
                <label className="block font-['Inter:Medium',sans-serif] font-medium text-[14px] text-black mb-2">
                  Назва *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-[42px] px-4 bg-neutral-100 rounded-[8px] border border-[#dddddd] font-['Inter:Regular',sans-serif] text-[16px] text-black outline-none"
                  placeholder="Еспресо"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block font-['Inter:Medium',sans-serif] font-medium text-[14px] text-black mb-2">
                  Опис *
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full h-[80px] px-4 py-3 bg-neutral-100 rounded-[8px] border border-[#dddddd] font-['Inter:Regular',sans-serif] text-[16px] text-black outline-none resize-none"
                  placeholder="Класичний міцний еспресо з насиченим смаком"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block font-['Inter:Medium',sans-serif] font-medium text-[14px] text-black mb-2">
                  Категорія *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value as 'hot' | 'cold' })}
                  className="w-full h-[42px] px-4 bg-neutral-100 rounded-[8px] border border-[#dddddd] font-['Inter:Regular',sans-serif] text-[16px] text-black outline-none"
                >
                  <option value="hot">Гаряче</option>
                  <option value="cold">Холодне</option>
                </select>
              </div>

              {/* Sizes */}
              <div>
                <label className="block font-['Inter:Medium',sans-serif] font-medium text-[14px] text-black mb-2">
                  Розміри та ціни *
                </label>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="font-['Inter:Regular',sans-serif] text-[14px] text-black w-[80px]">Малий:</span>
                    <input
                      type="number"
                      value={volumeSmall}
                      onChange={(e) => setVolumeSmall(e.target.value)}
                      className="w-[80px] h-[36px] px-3 bg-neutral-100 rounded-[6px] border border-[#dddddd] font-['Inter:Regular',sans-serif] text-[14px] text-black outline-none"
                      placeholder="250"
                      min="0"
                    />
                    <span className="font-['Inter:Regular',sans-serif] text-[14px] text-zinc-500">мл</span>
                    <input
                      type="number"
                      value={priceSmall}
                      onChange={(e) => setPriceSmall(e.target.value)}
                      className="w-[80px] h-[36px] px-3 bg-neutral-100 rounded-[6px] border border-[#dddddd] font-['Inter:Regular',sans-serif] text-[14px] text-black outline-none"
                      placeholder="45"
                      min="0"
                    />
                    <span className="font-['Inter:Regular',sans-serif] text-[14px] text-zinc-500">₴</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-['Inter:Regular',sans-serif] text-[14px] text-black w-[80px]">Середній:</span>
                    <input
                      type="number"
                      value={volumeMedium}
                      onChange={(e) => setVolumeMedium(e.target.value)}
                      className="w-[80px] h-[36px] px-3 bg-neutral-100 rounded-[6px] border border-[#dddddd] font-['Inter:Regular',sans-serif] text-[14px] text-black outline-none"
                      placeholder="350"
                      min="0"
                    />
                    <span className="font-['Inter:Regular',sans-serif] text-[14px] text-zinc-500">мл</span>
                    <input
                      type="number"
                      value={priceMedium}
                      onChange={(e) => setPriceMedium(e.target.value)}
                      className="w-[80px] h-[36px] px-3 bg-neutral-100 rounded-[6px] border border-[#dddddd] font-['Inter:Regular',sans-serif] text-[14px] text-black outline-none"
                      placeholder="65"
                      min="0"
                    />
                    <span className="font-['Inter:Regular',sans-serif] text-[14px] text-zinc-500">₴</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-['Inter:Regular',sans-serif] text-[14px] text-black w-[80px]">Великий:</span>
                    <input
                      type="number"
                      value={volumeLarge}
                      onChange={(e) => setVolumeLarge(e.target.value)}
                      className="w-[80px] h-[36px] px-3 bg-neutral-100 rounded-[6px] border border-[#dddddd] font-['Inter:Regular',sans-serif] text-[14px] text-black outline-none"
                      placeholder="450"
                      min="0"
                    />
                    <span className="font-['Inter:Regular',sans-serif] text-[14px] text-zinc-500">мл</span>
                    <input
                      type="number"
                      value={priceLarge}
                      onChange={(e) => setPriceLarge(e.target.value)}
                      className="w-[80px] h-[36px] px-3 bg-neutral-100 rounded-[6px] border border-[#dddddd] font-['Inter:Regular',sans-serif] text-[14px] text-black outline-none"
                      placeholder="85"
                      min="0"
                    />
                    <span className="font-['Inter:Regular',sans-serif] text-[14px] text-zinc-500">₴</span>
                  </div>
                </div>
              </div>

              {/* Addons */}
              <div>
                <label className="block font-['Inter:Medium',sans-serif] font-medium text-[14px] text-black mb-2">
                  Додатки (оберіть потрібні)
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {standardAddons.map(addon => (
                    <label key={addon.id} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded-[4px]">
                      <input
                        type="checkbox"
                        checked={selectedAddons.includes(addon.id)}
                        onChange={() => toggleAddon(addon.id)}
                        className="w-4 h-4 rounded-[4px] border border-zinc-300"
                      />
                      <span className="font-['Inter:Regular',sans-serif] text-[14px] text-black">
                        {addon.name} ({addon.price} ₴)
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Image URL */}
              <div>
                <label className="block font-['Inter:Medium',sans-serif] font-medium text-[14px] text-black mb-2">
                  URL зображення
                </label>
                <input
                  type="text"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="w-full h-[42px] px-4 bg-neutral-100 rounded-[8px] border border-[#dddddd] font-['Inter:Regular',sans-serif] text-[16px] text-black outline-none"
                  placeholder="figma:asset/..."
                />
              </div>
            </div>

            <div className="sticky bottom-0 bg-white border-t border-zinc-200 px-6 py-4 flex gap-3">
              <button
                onClick={closeForm}
                className="flex-1 bg-white h-[40px] rounded-[8px] border border-zinc-300 hover:bg-gray-50 transition-colors flex items-center justify-center"
              >
                <span className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-black">
                  Скасувати
                </span>
              </button>
              <button
                onClick={handleSubmit}
                className="flex-1 bg-[darkorange] h-[40px] rounded-[8px] hover:bg-[#ff9500] transition-colors flex items-center justify-center"
              >
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-white">
                  {editingDrink ? 'Зберегти' : 'Додати'}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState<'statistics' | 'orders' | 'menu'>('statistics');

  return (
    <div className="bg-[#fff5e6] min-h-screen">
      <Header />

      <main className="pt-[65px] min-h-screen">
        <div className="max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-20 py-8 md:py-12">
          {/* Page Header */}
          <div className="mb-6">
            <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[24px] text-black tracking-[-0.6px]">
              Панель адміністратора
            </h1>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-8">
            <button
              onClick={() => setActiveTab('statistics')}
              className={`h-[36px] px-6 rounded-[6px] transition-all ${
                activeTab === 'statistics'
                  ? 'bg-[darkorange] shadow-[0px_2px_4px_-2px_rgba(255,140,0,0.2),0px_4px_6px_-1px_rgba(255,140,0,0.2)]'
                  : 'bg-white border border-zinc-200 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:bg-gray-50'
              }`}
            >
              <span
                className={`font-['Inter:Medium',sans-serif] font-medium text-[14px] ${
                  activeTab === 'statistics' ? 'text-white' : 'text-black'
                }`}
              >
                Статистика
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
                Замовлення
              </span>
            </button>
            <button
              onClick={() => setActiveTab('menu')}
              className={`h-[36px] px-6 rounded-[6px] transition-all ${
                activeTab === 'menu'
                  ? 'bg-[darkorange] shadow-[0px_2px_4px_-2px_rgba(255,140,0,0.2),0px_4px_6px_-1px_rgba(255,140,0,0.2)]'
                  : 'bg-white border border-zinc-200 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:bg-gray-50'
              }`}
            >
              <span
                className={`font-['Inter:Medium',sans-serif] font-medium text-[14px] ${
                  activeTab === 'menu' ? 'text-white' : 'text-black'
                }`}
              >
                Меню
              </span>
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'statistics' && <StatisticsTab />}
          {activeTab === 'orders' && <OrdersTab />}
          {activeTab === 'menu' && <MenuTab />}
        </div>
      </main>
    </div>
  );
}