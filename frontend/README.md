# Coffee Shop - Сайт Кав'ярні

Повнофункціональний сайт кав'ярні на React з авторизацією, каталогом, кошиком, замовленнями та панелями адміністратора/касира.

## 🚀 Швидкий старт

### Вимоги
- Node.js 18+ (рекомендовано версія 18.x або 20.x)
- npm або yarn

### Встановлення та запуск в IntelliJ IDEA

#### Крок 1: Відкриття проекту
1. Відкрийте IntelliJ IDEA
2. Виберіть **File → Open...**
3. Оберіть папку з проектом (ту, де знаходиться файл `package.json`)
4. Натисніть **OK**

#### Крок 2: Встановлення залежностей
Відкрийте вбудований термінал в IntelliJ IDEA (**View → Tool Windows → Terminal** або **Alt+F12**) та виконайте:

```bash
npm install
```

Або якщо використовуєте yarn:
```bash
yarn install
```

#### Крок 3: Запуск проекту
У тому ж терміналі виконайте:

```bash
npm run dev
```

Або з yarn:
```bash
yarn dev
```

Проект автоматично відкриється у браузері за адресою: **http://localhost:3000**

### Альтернативний спосіб запуску через Run Configuration

1. Натисніть **Run → Edit Configurations...**
2. Клацніть **+** та оберіть **npm**
3. Заповніть поля:
   - **Name**: `Coffee Shop Dev`
   - **Command**: `run`
   - **Scripts**: `dev`
4. Натисніть **OK**
5. Тепер можна запускати проект через кнопку **Run** (зелений трикутник) у верхньому правому куті

## 📦 Команди

- `npm run dev` - запуск dev сервера (http://localhost:3000)
- `npm run build` - збірка проекту для продакшну
- `npm run preview` - перегляд продакшн збірки локально
- `npm run lint` - перевірка коду через ESLint

## 🔐 Тестові облікові записи

### Користувач (Customer)
- Email: `user@coffee.com`
- Пароль: `1`

### Касир (Cashier)
- Email: `cashier@coffee.com`
- Пароль: `1`

### Адміністратор (Admin)
- Email: `admin@coffee.com`
- Пароль: `1`

## 🏗️ Структура проекту

```
coffee-shop/
├── src/
│   └── main.tsx              # Точка входу
├── components/               # React компоненти
│   ├── Header.tsx
│   ├── LoginPage.tsx
│   ├── MainPage.tsx
│   ├── CartPage.tsx
│   ├── ProductDetailsPage.tsx
│   ├── OrderPlacementPage.tsx
│   ├── OrderStatusPage.tsx
│   ├── ProfilePage.tsx
│   ├── CashierPanel.tsx
│   ├── AdminPanel.tsx
│   └── ui/                   # UI компоненти
├── contexts/                 # React Context
│   ├── AuthContext.tsx
│   ├── CartContext.tsx
│   ├── DrinksContext.tsx
│   └── OrdersContext.tsx
├── data/
│   └── drinks.ts             # Mock-дані напоїв
├── imports/                  # Figma імпорти
├── styles/
│   └── globals.css           # Глобальні стилі (Tailwind)
├── App.tsx                   # Головний компонент з роутингом
├── package.json              # Залежності проекту
├── vite.config.ts            # Конфігурація Vite
├── tsconfig.json             # Конфігурація TypeScript
└── index.html                # HTML шаблон
```

## 🛠️ Технології

- **React 18** - UI бібліотека
- **TypeScript** - типізація
- **Vite** - збірник та dev сервер
- **React Router** - навігація
- **Tailwind CSS v4** - стилізація
- **Recharts** - графіки та діаграми
- **Lucide React** - іконки
- **Radix UI** - UI примітиви
- **Context API** - управління станом
- **localStorage** - збереження кошика

## ✨ Основні функції

- ✅ Авторизація/реєстрація з різними ролями
- ✅ Каталог напоїв з фільтрацією по категоріях
- ✅ Пошук в реальному часі
- ✅ Картка товару з опціями (розмір, молоко, добавки)
- ✅ Кошик з збереженням у localStorage
- ✅ Оформлення замовлення
- ✅ Відстеження статусу замовлення
- ✅ Історія замовлень в профілі
- ✅ Панель касира для обробки замовлень
- ✅ Панель адміністратора зі статистикою
- ✅ Повна адаптивність під різні роздільні здатності

## 📱 Роздільна здатність

Дизайн оптимізований під **1920x1080**, але повністю адаптивний для всіх пристроїв.

## 🐛 Troubleshooting

### Помилка з портом 3000
Якщо порт 3000 зайнятий, відредагуйте `vite.config.ts`:
```ts
server: {
  port: 3001, // Змініть на інший порт
  open: true,
}
```

### Помилки TypeScript
Переконайтесь що встановлено правильну версію Node.js:
```bash
node --version  # Має бути 18.x або вище
```

### Не завантажуються залежності
Спробуйте очистити кеш та перевстановити:
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📝 Примітки

- (Проект використовує **mock-дані** замість реального бекенду) Проект інтегровано з бекендом
- (Всі дані зберігаються в пам'яті браузера (localStorage)) Тепер всі дані зберігаються у БД
- (Авторизаційні дані hardcoded для демонстрації) Підключені реальний Authn та Authz 

---

**Розроблено з ❤️ для Coffee Shop**
