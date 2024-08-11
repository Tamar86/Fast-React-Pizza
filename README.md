# Fast React Pizza

This project is a simple pizza ordering application built using React, Redux, React Router, and Vite. The application allows users to browse a menu, add items to a cart, create orders, and view existing orders.

## Features

- **Home Page:** Welcome page for the application.
- **Menu Page:** Displays a list of available pizzas that users can browse and add to their cart.
- **Cart Page:** Shows the items added to the cart by the user.
- **Create Order Page:** Allows users to create a new order based on the items in their cart.
- **Order Details Page:** Displays the details of a specific order using a dynamic route.

## Tech Stack

- **React:** A JavaScript library for building user interfaces.
- **Redux Toolkit:** State management tool.
- **React Router:** Declarative routing for React applications.
- **Tailwind CSS:** A utility-first CSS framework.
- **Vite:** A fast development build tool.
- **ESLint & Prettier:** Code quality and formatting tools.

## Installation

1. Navigate into the project directory:

   ```bash
   cd fast-react-pizza
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

## Running the Application

### Development Server

To start the development server:

```bash
npm run dev
```

This will start the Vite development server and you can view the application at `http://localhost:3000`.

### Building for Production

To build the application for production:

```bash
npm run build
```

This will create an optimized build of the application in the `dist` directory.

### Previewing Production Build

To preview the production build:

```bash
npm run preview
```

This will start a local server to serve the files from the `dist` directory.

## Folder Structure

- `src/`
  - `features/`
    - `cart/` - Cart related components and logic.
    - `menu/` - Menu related components and logic.
    - `order/` - Order related components and logic.
  - `ui/` - Reusable UI components like `AppLayout`, `Home`, and `Error`.
  - `App.jsx` - Main application component that sets up routing.
  - `index.css` - Global CSS styles.
  - `store.js` - Redux store configuration.

## Configuration

- **Tailwind CSS:** Tailwind CSS is used for styling. The configuration can be customized in the `tailwind.config.js` file.
- **ESLint & Prettier:** Code linting and formatting are enforced via ESLint and Prettier. Configuration files include `.eslintrc` and `.prettierrc`.

## Status

🚧 **Work in Progress** 🚧

This project is still under development. New features, improvements, and bug fixes are being added continuously.
