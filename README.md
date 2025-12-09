# CoffeeLine

## Backend

### Можливості
- **Автентифікація:** Реєстрація (`Sign Up`) та вхід (`Sign In`) за допомогою JWT.
- **Авторизація:** API захищено за допомогою Spring Security з різними ролями (`USER`, `CASHIER`, `ADMIN`).
- **Управління Категоріями:** Повний CRUD для категорій кави (тільки для `ADMIN`).
- **Управління Кавою:** Повний CRUD для кавових продуктів (тільки для `ADMIN`).
- **Управління Замовленнями:** Створення замовлень, перегляд замовлень за статусом або користувачем, зміна статусу замовлень.
- **Управління Користувачами:** Перегляд та керування ролями користувачів (тільки для `ADMIN`).

### Структура Проєкту
```
src/
├── main/
│   ├── java/com/example/CoffeeLine/
│   │   ├── common/             # Спільні класи, enum-и, константи
│   │   ├── config/             # Конфігурації Spring (бінів, безпеки, CORS тощо)
│   │   ├── domain/             # JPA сутності, що представляють таблиці в базі даних
│   │   ├── dto/                # DTO-класи для запитів та відповідей API
│   │   ├── security/           # JWT, UserDetailsService, фільтри, Auth механіка
│   │   ├── service/            # Сервіси та бізнес-логіка
│   │   ├── util/               # Утилітарні класи (хелпери, валідатори)
│   │   └── web/                # REST-контролери, маппери, ендпоінти
│   │
│   └── resources/              # application.yaml, Liquibase, SQL, статичні файли
│
├── test/
│   └── java/com/example/CoffeeLine/
│       ├── dto/                # Unit-тести DTO (якщо потрібні)
│       ├── security/           # Тести безпеки, JWT, фільтрів
│       ├── service/            # Unit-тести сервісів з @MockitoBean / моками
│       └── web/                # Unit-тести контролерів через MockMvc
│       └── CoffeeLineApplicationTests # Smoke-тест на підняття контексту
│
└── integration/
    └── java/com/example/CoffeeLine/
        ├── AuthenticationIT/   # Інтеграційні тести аутентифікації
        ├── BaseIT/             # Базовий клас для всіх інтеграційних тестів (Testcontainers)
        ├── CategoryIT/         # Перевірка CRUD категорій
        ├── CoffeeIT/           # Тести Coffee сервісу / API
        ├── CoffeeLineApplicationTests # Інтеграційний запуск контексту
        ├── OrderIT/            # Інтеграційні тести замовлень
        ├── SecurityIT/         # Інтеграційні тести безпеки
        └── UserIT/             # Інтеграційні тести користувачів
```

## 🛠️ Технологічний стек
- **Версія Java:** 21
- **Фреймворк:** Spring Boot
- **Архітектура:** Багатошарова
- **Безпека:** Spring Security (з автентифікацією JWT)
- **Управління даними:** Spring Data JPA
- **База даних:** PostgreSQL
- **Документація:** Springdoc OpenAPI 3 (Авто-генерація Swagger UI)
- **Build-система:** Gradle

## Frontend

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
### Структура Проєкту
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

## 📝 Примітки

- (Проект використовує **mock-дані** замість реального бекенду) Проект інтегровано з бекендом
- (Всі дані зберігаються в пам'яті браузера (localStorage)) Тепер всі дані зберігаються у БД
- (Авторизаційні дані hardcoded для демонстрації) Підключені реальний Authn та Authz

---

**Розроблено з ❤️ для Coffee Shop**