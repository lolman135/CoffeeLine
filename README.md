# CoffeeLine

## Backend

### ✨ Features
- **Authentication:** Sign Up and Sign In using JWT.
- **Authorization:** API is protected by Spring Security with different roles (`USER`, `CASHIER`, `ADMIN`).
- **Category Management:** Full CRUD for coffee categories (`ADMIN` only).
- **Coffee Management:** Full CRUD for coffee products (`ADMIN` only).
- **Order Management:** Create orders, view orders by status or user, change order status.
- **User Management:** View and manage user roles (`ADMIN` only).

### 🛠️ Technology stack
- **Java version:** 21
- **Framework:** Spring Boot
- **Architecture:** Multi-layer
- **Security:** Spring Security (with JWT authentication)
- **Data management:** Spring Data JPA
- **Database:** PostgreSQL
- **Documentation:** Springdoc OpenAPI 3 (Auto-generation of Swagger UI)
- **Build system:** Gradle

## Frontend

### Interactive
- You can see the full system workflow using an interactive model developed on Figma.
- https://lung-chaos-53658667.figma.site/#/login
- User
  - Email: user@coffee.com
  - Password: 1
- Cashier
  - Email: cashier@coffee.com
  - Password: 1
- Admin
  - Email: admin@coffee.com
  - Password 1

### ✨Features

- ✅ Authorization/registration with different roles
- ✅ Beverage catalog with filtering by category
- ✅ Real-time search
- ✅ Product card with options (size, milk, additives)
- ✅ Cart with saving in localStorage
- ✅ Order placement
- ✅ Order status tracking
- ✅ Order history in profile
- ✅ Cashier panel for processing orders
- ✅ Admin panel with statistics
- ✅ Full adaptability for different resolutions

## 💻 Resolution
Design optimized for **1920x1080**, but fully responsive for all devices.

## 📸 Screenshots
### Login/Register page
![Знімок екрана 2026-03-16 о 16.25.00.png](docs/%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA%20%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-03-16%20%D0%BE%2016.25.00.png)
### Menu
![Знімок екрана 2026-03-16 о 16.25.34.png](docs/%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA%20%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-03-16%20%D0%BE%2016.25.34.png)
### Profile
![Знімок екрана 2026-03-16 о 16.26.46.png](docs/%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA%20%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-03-16%20%D0%BE%2016.26.46.png)
### Creating order
![Знімок екрана 2026-03-16 о 16.28.05.png](docs/%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA%20%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-03-16%20%D0%BE%2016.28.05.png)
### Cashier panel
![Знімок екрана 2026-03-16 о 16.28.33.png](docs/%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA%20%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-03-16%20%D0%BE%2016.28.33.png)
### Admin panel
![Знімок екрана 2026-03-16 о 16.28.54.png](docs/%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA%20%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-03-16%20%D0%BE%2016.28.54.png)
### All orders table
![Знімок екрана 2026-03-16 о 16.29.01.png](docs/%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA%20%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-03-16%20%D0%BE%2016.29.01.png)

## 🛠️ Technology stack

- **React 18** - UI library
- **TypeScript** - typing
- **Vite** - compilation and dev server
- **React Router** - navigation
- **Tailwind CSS v4** - styling
- **Recharts** - charts and diagrams
- **Lucide React** - icons
- **Radix UI** - UI primitives
- **Context API** - state management
- **localStorage** - saving the cart

## 📝 Notes

- The project is integrated with the backend
- All data is stored in the database
- Real Authn and Authz are connected

---

**Developed with ❤️ for Coffee Shop**