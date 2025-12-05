import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { drinks as initialDrinks, Drink } from '../data/drinks';

interface DrinksContextType {
  drinks: Drink[];
  addDrink: (drink: Drink) => void;
  updateDrink: (id: string, drink: Drink) => void;
  deleteDrink: (id: string) => void;
  resetDrinks: () => void;
  getDrinkById: (id: string) => Drink | undefined;
}

const DrinksContext = createContext<DrinksContextType | undefined>(undefined);

const DRINKS_STORAGE_KEY = 'coffee_drinks';
const DRINKS_VERSION_KEY = 'coffee_drinks_version';
const CURRENT_VERSION = '2'; // Збільшуємо версію для оновлення даних

export function DrinksProvider({ children }: { children: ReactNode }) {
  const [drinks, setDrinks] = useState<Drink[]>(() => {
    // Перевіряємо версію даних
    const savedVersion = localStorage.getItem(DRINKS_VERSION_KEY);
    
    // Якщо версія застаріла або відсутня, використовуємо нові дані
    if (savedVersion !== CURRENT_VERSION) {
      localStorage.setItem(DRINKS_STORAGE_KEY, JSON.stringify(initialDrinks));
      localStorage.setItem(DRINKS_VERSION_KEY, CURRENT_VERSION);
      return initialDrinks;
    }
    
    // Завантажити з localStorage при ініціалізації
    const saved = localStorage.getItem(DRINKS_STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (error) {
        console.error('Error loading drinks:', error);
        return initialDrinks;
      }
    }
    return initialDrinks;
  });

  // Зберігати в localStorage при кожній зміні
  useEffect(() => {
    localStorage.setItem(DRINKS_STORAGE_KEY, JSON.stringify(drinks));
  }, [drinks]);

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
    setDrinks(initialDrinks);
    localStorage.setItem(DRINKS_STORAGE_KEY, JSON.stringify(initialDrinks));
  };

  const getDrinkById = (id: string) => {
    return drinks.find(drink => drink.id === id);
  };

  return (
    <DrinksContext.Provider value={{ drinks, addDrink, updateDrink, deleteDrink, resetDrinks, getDrinkById }}>
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