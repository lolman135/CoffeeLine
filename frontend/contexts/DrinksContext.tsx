import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { Drink } from '../data/drinks';
import { fetchCoffees } from '../src/api/coffees';

interface DrinksContextType {
  drinks: Drink[];
  addDrink: (drink: Drink) => void;
  updateDrink: (id: string, drink: Drink) => void;
  deleteDrink: (id: string) => void;
  resetDrinks: () => void;
  getDrinkById: (id: string) => Drink | undefined;
  loading: boolean;
  error: string | null;
}

const DrinksContext = createContext<DrinksContextType | undefined>(undefined);

export function DrinksProvider({ children }: { children: ReactNode }) {
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    fetchCoffees()
      .then((items) => {
        if (!isMounted) return;
        setDrinks(items);
        setError(null);
      })
      .catch((e) => {
        if (!isMounted) return;
        console.error('Failed to load coffees:', e);
        setError(typeof e?.message === 'string' ? e.message : 'Failed to load coffees');
      })
      .finally(() => {
        if (!isMounted) return;
        setLoading(false);
      });
    return () => { isMounted = false; };
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
    // Refetch from API
    setLoading(true);
    fetchCoffees()
      .then((items) => { setDrinks(items); setError(null); })
      .catch((e) => { console.error(e); setError('Failed to reload coffees'); })
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