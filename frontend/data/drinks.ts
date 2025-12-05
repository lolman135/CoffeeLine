export interface DrinkSize {
  id: string;
  name: string;
  volume: string;
  price: number;
}

export interface Addon {
  id: string;
  name: string;
  price: number;
}

export interface Drink {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  price: number;
  category: 'hot' | 'cold';
  image: string;
  sizes: DrinkSize[];
  addons: Addon[];
}

export const drinks: Drink[] = [
  {
    id: '1',
    name: 'Еспресо',
    description: 'Класичний міцний еспресо з насиченим смаком',
    basePrice: 45,
    price: 45,
    category: 'hot',
    image: '../src/imgEspresso.jpg',
    sizes: [
      { id: 'small', name: 'Малий', volume: '30мл', price: 45 },
      { id: 'medium', name: 'Середній', volume: '60мл', price: 65 },
      { id: 'large', name: 'Великий', volume: '90мл', price: 85 }
    ],
    addons: [
      { id: 'vanilla', name: 'Ванільний сироп', price: 15 },
      { id: 'caramel', name: 'Карамельний сироп', price: 15 },
      { id: 'hazelnut', name: 'Горіховий сироп', price: 15 },
      { id: 'almond', name: 'Мигдальне молоко', price: 20 },
      { id: 'coconut', name: 'Кокосове молоко', price: 20 },
      { id: 'soy', name: 'Соєве молоко', price: 15 },
      { id: 'extra-shot', name: 'Додатковий шот еспресо', price: 20 },
      { id: 'whipped', name: 'Збиті вершки', price: 10 }
    ]
  },
  {
    id: '2',
    name: 'Капучино',
    description: 'Ніжний капучино з пишною молочною піною',
    basePrice: 55,
    price: 55,
    category: 'hot',
    image: '../src/imgCappuccino.jpg',
    sizes: [
      { id: 'small', name: 'Малий', volume: '200мл', price: 55 },
      { id: 'medium', name: 'Середній', volume: '300мл', price: 75 },
      { id: 'large', name: 'Великий', volume: '400мл', price: 90 }
    ],
    addons: [
      { id: 'vanilla', name: 'Ванільний сироп', price: 15 },
      { id: 'caramel', name: 'Карамельний сироп', price: 15 },
      { id: 'hazelnut', name: 'Горіховий сироп', price: 15 },
      { id: 'almond', name: 'Мигдальне молоко', price: 20 },
      { id: 'coconut', name: 'Кокосове молоко', price: 20 },
      { id: 'soy', name: 'Соєве молоко', price: 15 },
      { id: 'extra-shot', name: 'Додатковий шот еспресо', price: 20 },
      { id: 'whipped', name: 'Збиті вершки', price: 10 }
    ]
  },
  {
    id: '3',
    name: 'Латте',
    description: "М'який кавовий напій з великою кількістю молока",
    basePrice: 60,
    price: 60,
    category: 'hot',
    image: '../src/imgLatte.jpeg',
    sizes: [
      { id: 'small', name: 'Малий', volume: '250мл', price: 60 },
      { id: 'medium', name: 'Середній', volume: '350мл', price: 80 },
      { id: 'large', name: 'Великий', volume: '450мл', price: 95 }
    ],
    addons: [
      { id: 'vanilla', name: 'Ванільний сироп', price: 15 },
      { id: 'caramel', name: 'Карамельний сироп', price: 15 },
      { id: 'hazelnut', name: 'Горіховий сироп', price: 15 },
      { id: 'almond', name: 'Мигдальне молоко', price: 20 },
      { id: 'coconut', name: 'Кокосове молоко', price: 20 },
      { id: 'soy', name: 'Соєве молоко', price: 15 },
      { id: 'extra-shot', name: 'Додатковий шот еспресо', price: 20 },
      { id: 'whipped', name: 'Збиті вершки', price: 10 }
    ]
  },
  {
    id: '4',
    name: 'Американо',
    description: 'Еспресо з додаванням гарячої води',
    basePrice: 40,
    price: 40,
    category: 'hot',
    image: '../src/imgAmericano.jpg',
    sizes: [
      { id: 'small', name: 'Малий', volume: '200мл', price: 40 },
      { id: 'medium', name: 'Середній', volume: '300мл', price: 55 },
      { id: 'large', name: 'Великий', volume: '400мл', price: 70 }
    ],
    addons: [
      { id: 'vanilla', name: 'Ванільний сироп', price: 15 },
      { id: 'caramel', name: 'Карамельний сироп', price: 15 },
      { id: 'hazelnut', name: 'Горіховий сироп', price: 15 },
      { id: 'almond', name: 'Мигдальне молоко', price: 20 },
      { id: 'coconut', name: 'Кокосове молоко', price: 20 },
      { id: 'soy', name: 'Соєве молоко', price: 15 },
      { id: 'extra-shot', name: 'Додатковий шот еспресо', price: 20 },
      { id: 'whipped', name: 'Збиті вершки', price: 10 }
    ]
  },
  {
    id: '5',
    name: 'Айс Латте',
    description: 'Охолоджений латте з льодом',
    basePrice: 65,
    price: 65,
    category: 'cold',
    image: '../src/imgIcedLatte.jpg',
    sizes: [
      { id: 'small', name: 'Малий', volume: '250мл', price: 65 },
      { id: 'medium', name: 'Середній', volume: '350мл', price: 85 },
      { id: 'large', name: 'Великий', volume: '450мл', price: 98 }
    ],
    addons: [
      { id: 'vanilla', name: 'Ванільний сироп', price: 15 },
      { id: 'caramel', name: 'Карамельний сироп', price: 15 },
      { id: 'hazelnut', name: 'Горіховий сироп', price: 15 },
      { id: 'almond', name: 'Мигдальне молоко', price: 20 },
      { id: 'coconut', name: 'Кокосове молоко', price: 20 },
      { id: 'soy', name: 'Соєве молоко', price: 15 },
      { id: 'extra-shot', name: 'Додатковий шот еспресо', price: 20 },
      { id: 'whipped', name: 'Збиті вершки', price: 10 }
    ]
  },
  {
    id: '6',
    name: 'Раф',
    description: 'Солодкий кавовий напій зі вершками та ванільним цукром',
    basePrice: 75,
    price: 75,
    category: 'hot',
    image: '../src/imgRaf.jpg',
    sizes: [
      { id: 'small', name: 'Малий', volume: '250мл', price: 75 },
      { id: 'medium', name: 'Середній', volume: '350мл', price: 95 },
      { id: 'large', name: 'Великий', volume: '450мл', price: 110 }
    ],
    addons: [
      { id: 'vanilla', name: 'Ванільний сироп', price: 15 },
      { id: 'caramel', name: 'Карамельний сироп', price: 15 },
      { id: 'hazelnut', name: 'Горіховий сироп', price: 15 },
      { id: 'chocolate', name: 'Шоколадний сироп', price: 15 },
      { id: 'almond', name: 'Мигдальне молоко', price: 20 },
      { id: 'coconut', name: 'Кокосове молоко', price: 20 },
      { id: 'extra-shot', name: 'Додатковий шот еспресо', price: 20 },
      { id: 'whipped', name: 'Збиті вершки', price: 10 }
    ]
  }
];
