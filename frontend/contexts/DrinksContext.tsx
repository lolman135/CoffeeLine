import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { drinks as initialDrinks, Drink } from '../data/drinks';
import { fetchCoffees } from '@/src/api/coffees';

interface DrinksContextType {
  drinks: Drink[];
  addDrink: (drink: Drink) => void;
  updateDrink: (id: string, drink: Drink) => void;
  deleteDrink: (id: string) => void;
  resetDrinks: () => void;
  getDrinkById: (id: string) => Drink | undefined;
  loading?: boolean;
  error?: string | null;
}

const DrinksContext = createContext<DrinksContextType | undefined>(undefined);

const DRINKS_STORAGE_KEY = 'coffee_drinks_cache';

export function DrinksProvider({ children }: { children: ReactNode }) {
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Helper to adapt API coffee DTOs to local Drink shape
  function adapt(drinksFromApi: { id: string; name: string; description: string; price: number; image?: string; imageUrl?: string; category?: string }[]): Drink[] {
    return drinksFromApi.map(d => {
      const rawCat = d.category || '';
      const catLower = rawCat.toLowerCase();
      const mappedCat: 'hot' | 'cold' = catLower === 'cold' || catLower === 'холодне' ? 'cold' : 'hot';
      return {
        id: d.id,
        name: d.name,
        description: d.description,
        basePrice: d.price,
        price: d.price,
        category: mappedCat,
        rawCategory: rawCat,
        image: d.image || d.imageUrl || '',
        sizes: [],
        addons: [],
      };
    });
  }

  // Helper to build user-facing error message
  function toErrorMessage(err: unknown): string {
    if (typeof err === 'object' && err && 'status' in err) {
      const anyErr = err as { status?: number; message?: string };
      if (anyErr.status === 401) return 'Потрібна авторизація. Увійдіть, будь ласка.';
      return anyErr.message || 'Помилка завантаження даних';
    }
    return 'Unable to load coffees from server';
  }

  // Initial load: try API, fall back to cache or bundled data
  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      setError(null);
      try {
        const items = await fetchCoffees();
        if (!cancelled) {
          setDrinks(adapt(items as any));
          try { localStorage.setItem(DRINKS_STORAGE_KEY, JSON.stringify(adapt(items as any))); } catch {}
        }
      } catch (e: unknown) {
        console.error('Failed to fetch coffees from API, using cache or bundled data', e);
        if (!cancelled) {
          // Try cache
          let cached: Drink[] | null;
          try {
            const saved = localStorage.getItem(DRINKS_STORAGE_KEY);
            cached = saved ? JSON.parse(saved) : null;
          } catch {
            cached = null;
          }
          setDrinks(cached || initialDrinks);
          setError(toErrorMessage(e));
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => { cancelled = true; };
  }, []);

  const addDrink = (drink: Drink) => {
    setDrinks(prev => [...prev, drink]);
  };

  const updateDrink = (id: string, updatedDrink: Drink) => {
    setDrinks(prev => prev.map(drink => drink.id === id ? updatedDrink : drink));
  };

  const deleteDrink = (id: string) => {
    setDrinks(prev => prev.filter(drink => drink.id !== id));
  };

  const resetDrinks = () => {
    setLoading(true);
    setError(null);
    fetchCoffees()
      .then((items) => {
        setDrinks(adapt(items as any));
        try { localStorage.setItem(DRINKS_STORAGE_KEY, JSON.stringify(adapt(items as any))); } catch {}
      })
      .catch((e: unknown) => { console.error(e); setError(toErrorMessage(e)); })
      .finally(() => setLoading(false));
  };

  const getDrinkById = (id: string) => {
    return drinks.find(drink => drink.id === id);
  };

  return (
    <DrinksContext.Provider value={{ drinks, addDrink, updateDrink, deleteDrink, resetDrinks, getDrinkById, loading, error }}>
      {children}
    </DrinksContext.Provider>
  );
}

export function useDrinks() {
  const context = useContext(DrinksContext);
  if (!context) {
    throw new Error('useDrinks must be used within DrinksProvider');
  }
  return context;
}