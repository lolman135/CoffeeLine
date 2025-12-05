import { useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User, LogOut } from 'lucide-react';
import svgPaths from "../imports/svg-tpegvdjy05";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";

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

interface HeaderProps {
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
}

export default function Header({ searchQuery = '', onSearchChange }: HeaderProps) {
  const navigate = useNavigate();
  const { totalItems } = useCart();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white h-[65px] z-50 border-b border-[#dddddd] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]">
      <div className="max-w-[1760px] mx-auto h-full px-4 sm:px-6 lg:px-20 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer flex-shrink-0" 
          onClick={() => navigate('/catalog')}
        >
          <div className="bg-gradient-to-b from-[#ff8c00] to-[#ffa500] rounded-[12px] shadow-[0px_2px_4px_-2px_rgba(255,140,0,0.2),0px_4px_6px_-1px_rgba(255,140,0,0.2)] w-[40px] h-[40px] flex items-center justify-center relative">
            <CoffeeLogo />
          </div>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#333333] text-[20px] hidden sm:block">Coffee Line</p>
        </div>

        {/* Right Side - Search and Icons */}
        <div className="flex items-center gap-3 flex-1 justify-end max-w-[600px]">
          {/* Search Bar */}
          <div className="relative bg-neutral-100 h-[36px] rounded-[8px] border border-[#dddddd] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] flex-1 max-w-[320px] hidden md:flex">
            <div className="absolute left-[12px] top-1/2 -translate-y-1/2 w-[16px] h-[16px]">
              <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                <path d={svgPaths.p1103fe20} stroke="var(--stroke-0, #333333)" strokeWidth="2" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Пошук напоїв..."
              value={searchQuery}
              onChange={(e) => onSearchChange?.(e.target.value)}
              className="w-full h-full pl-10 pr-4 bg-transparent font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#333333] placeholder:text-[#333333] outline-none border-none rounded-[8px]"
            />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-2">
            {/* Cart Icon with Badge */}
            <button 
              onClick={() => navigate('/cart')}
              className="relative h-[32px] w-[40px] rounded-[6px] hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <svg className="w-[20px] h-[20px]" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <g>
                  <path d={svgPaths.p11aa7200} fill="var(--fill-0, #333333)" />
                  <path d={svgPaths.p31d1c680} fill="var(--fill-0, #333333)" />
                  <path d={svgPaths.p2f2f480} fill="var(--fill-0, #333333)" />
                </g>
              </svg>
              {totalItems > 0 && (
                <div className="absolute -top-1 -right-1 bg-[darkorange] rounded-full min-w-[18px] h-[18px] px-1 flex items-center justify-center">
                  <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-white text-[10px]">
                    {totalItems}
                  </span>
                </div>
              )}
            </button>

            {/* User Icon */}
            <button 
              onClick={() => navigate('/profile')}
              className="h-[32px] w-[40px] rounded-[6px] hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <svg className="w-[20px] h-[20px]" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <g>
                  <path d={svgPaths.p1f1c3a00} fill="var(--fill-0, #333333)" />
                  <path d={svgPaths.p191ced00} fill="var(--fill-0, #333333)" />
                </g>
              </svg>
            </button>

            {/* Logout Icon */}
            <button 
              onClick={handleLogout}
              className="h-[32px] w-[40px] rounded-[6px] hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <svg className="w-[20px] h-[20px]" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <g>
                  <path clipRule="evenodd" d={svgPaths.p11b0a900} fill="var(--fill-0, #333333)" fillRule="evenodd" />
                  <path d={svgPaths.p2c345e00} fill="var(--fill-0, #333333)" />
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}