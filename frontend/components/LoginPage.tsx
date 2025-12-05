import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import svgPaths from "../imports/svg-vlkv9314um";

function CoffeeLogo() {
  return (
    <div className="absolute left-[20px] size-[40px] top-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g>
          <path clipRule="evenodd" d={svgPaths.padf1000} fill="var(--fill-0, white)" fillRule="evenodd" />
          <path d={svgPaths.p3d1f7600} fill="var(--fill-0, white)" />
          <path clipRule="evenodd" d={svgPaths.p35c4d680} fill="var(--fill-0, white)" fillRule="evenodd" />
        </g>
      </svg>
    </div>
  );
}

function LogoContainer() {
  return (
    <div className="bg-gradient-to-b from-[#ff8c00] rounded-[16px] shadow-[0px_4px_6px_-4px_rgba(255,140,0,0.2),0px_10px_15px_-3px_rgba(255,140,0,0.2)] size-[80px] to-[#ffa500] mx-auto relative">
      <CoffeeLogo />
    </div>
  );
}

function Title() {
  return (
    <div className="w-full text-center mt-4">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] not-italic text-[#333333] text-[24px] tracking-[-0.6px]">Coffee Line</p>
    </div>
  );
}

function Subtitle() {
  return (
    <div className="w-full text-center mt-2">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[#666666] text-[14px]">{`Ласкаво просимо до нашої кав'ярні`}</p>
    </div>
  );
}

function Header() {
  return (
    <div className="w-full mb-8 flex flex-col items-center">
      <LogoContainer />
      <Title />
      <Subtitle />
    </div>
  );
}

function TabButtons() {
  const navigate = useNavigate();

  return (
    <div className="relative h-[40px] w-full mb-6">
      <div className="flex gap-2 w-full">
        <div className="flex-1 bg-[darkorange] h-[40px] rounded-[8px] shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1),0px_4px_6px_-1px_rgba(0,0,0,0.1)] flex items-center justify-center">
          <p className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-center text-white">Авторізація</p>
        </div>
        <button 
          onClick={() => navigate('/register')}
          className="flex-1 bg-[#e0e0e0] h-[40px] rounded-[8px] cursor-pointer hover:bg-[#d0d0d0] transition-colors flex items-center justify-center"
        >
          <p className="font-['Inter:Medium',sans-serif] font-medium text-[#666666] text-[14px] text-center">Реєстрація</p>
        </button>
      </div>
    </div>
  );
}

function LoginForm() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(email, password);
      // Navigate to catalog after login; optionally branch by roles using context.user?.roles
      navigate('/catalog');
    } catch (err: any) {
      setError(err?.message || 'Помилка авторизації');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full">
      {/* Error Message */}
      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-[8px]">
          <p className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-red-600">
            {error}
          </p>
        </div>
      )}

      {/* Email Field */}
      <div className="mb-6">
        <label className="block font-['Inter:Medium',sans-serif] font-medium text-[#333333] text-[14px] mb-2">
          Email
        </label>
        <div className="relative bg-neutral-100 h-[50px] rounded-[8px] border border-[#dddddd]">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full h-full px-4 bg-transparent font-['Inter:Regular',sans-serif] font-normal text-[16px] text-[#333333] placeholder:text-[rgba(51,51,51,0.7)] outline-none border-none rounded-[8px]"
          />
        </div>
      </div>

      {/* Password Field */}
      <div className="mb-6">
        <label className="block font-['Inter:Medium',sans-serif] font-medium text-[#333333] text-[14px] mb-2">
          Пароль
        </label>
        <div className="relative bg-neutral-100 h-[50px] rounded-[8px] border border-[#dddddd]">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full h-full px-4 bg-transparent font-['Inter:Regular',sans-serif] font-normal text-[16px] text-[#333333] placeholder:text-[rgba(51,51,51,0.7)] outline-none border-none rounded-[8px]"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button 
        onClick={handleSubmit}
        disabled={loading}
        className={`w-full ${loading ? 'opacity-70 cursor-not-allowed' : ''} bg-gradient-to-b from-[#ff8c00] h-[48px] rounded-[8px] shadow-[0px_4px_6px_-4px_rgba(255,140,0,0.2),0px_10px_15px_-3px_rgba(255,140,0,0.2)] to-[#ffa500] cursor-pointer hover:from-[#ff9500] hover:to-[#ffb000] transition-colors mb-6 flex items-center justify-center`}
      >
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-center text-white">{loading ? 'Вхід...' : 'Авторизуватися'}</p>
      </button>

      {/* Register Link */}
      <div className="text-center">
        <span className="font-['Inter:Regular',sans-serif] font-normal text-[#666666] text-[14px]">Не маєте акаунту? </span>
        <button 
          onClick={() => navigate('/register')}
          className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[darkorange] cursor-pointer hover:underline"
        >
          Зареєструватися
        </button>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="mt-4 text-center">
      <p className="font-['Inter:Regular',sans-serif] font-normal text-[#666666] text-[12px]">© 2025 Coffee Line. Всі права захищені.</p>
    </div>
  );
}

function FormContainer() {
  return (
    <div className="absolute h-[668px] left-[496px] top-[166px] w-[448px]">
      <div className="absolute bg-white h-[592px] left-0 rounded-[16px] shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] top-0 w-[448px]">
        <Header />
        <TabButtons />
        <LoginForm />
      </div>
      <Footer />
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="bg-[#fff5e6] relative min-h-screen w-full flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-[448px]">
        <div className="bg-white rounded-[16px] shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] p-8">
          <Header />
          <TabButtons />
          <LoginForm />
        </div>
        <Footer />
      </div>
    </div>
  );
}