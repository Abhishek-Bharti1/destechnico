# MERN E-Commerce Application

## Description

This project is a full-stack MERN (MongoDB, Express, React, Node.js) application for an e-commerce platform. It supports user authentication, role-based access control, and allows sellers to manage their products while buyers can search for products and manage their cart.

## How It Works

### **1. User Authentication and Role-Based Access**

- **Sign-Up:**
  - Users can sign up as either a seller or a buyer.
  - Upon successful registration, a JWT (JSON Web Token) is issued for authentication.

- **Login:**
  - Users log in using their credentials.
  - A JWT token is returned upon successful authentication, which must be included in requests to protected routes.

- **Role-Based Access:**
  - **Sellers:** When a seller logs in, they are authenticated and redirected to the Seller Dashboard.
  - **Buyers:** Buyers are authenticated and redirected to the Buyer Dashboard.

### **2. Seller Functionality**

- **Add Products:**
  - After logging in, sellers can add new products by providing details such as name, category, description, price, and discount.

- **Manage Products:**
  - Sellers can view, edit, or delete their own products. They can only perform these actions on products they have created.

### **3. Buyer Functionality**

- **Search Products:**
  - Buyers can search for products by name or category using query parameters in the URL.

- **Manage Cart:**
  - **Add to Cart:** Buyers can add products to their shopping cart.
  - **Remove from Cart:** Buyers can remove products from their cart.
  - **View Cart:** Buyers can view all products currently in their cart.
## Features

- **User Authentication:** Sign-up and login functionality for sellers and buyers.
- **Seller Functionality:**
  - Add products with details: name, category, description, price, discount.
  - Edit or delete products.
- **Buyer Functionality:**
  - Search for products by name or category.
  - Add products to the cart.
  - Remove products from the cart.

## Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Libraries/Tools:** Mongoose, Axios, Validator, Express-validator, Helmet,React-Toastify(for notifications)


## Setup and Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Abhishek-Bharti1/destechnico.git
   cd destechnico
   
## Setup Backend

1. Navigate to the server directory:
    ```bash
    cd server
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the server directory and add your environment variables (e.g., `MONGO_URI`, `JWT_SECRET`, `PORT`).

## Setup Frontend

1. Navigate to the client directory:
    ```bash
    cd client
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

## Run the Application

1. Start the backend server:
    ```bash
    npm start
    ```

2. Start the frontend application:
    ```bash
    npm run dev
    ```

## API Endpoints

### Auth

- **POST** `/api/auth/signup` - Register a new user (seller or buyer)
- **POST** `/api/auth/login` - Login and obtain a JWT token

### Product

- **POST** `/api/products` - Add a new product (seller only)
- **GET** `/api/products` - Get all products
- **GET** `/api/products/:id` - Get a product by ID
- **PUT** `/api/products/:id` - Update a product (seller only)
- **DELETE** `/api/products/:id` - Delete a product (seller only)
- **GET** `/api/products/search` - Search products by name or category

### Cart

- **POST** `/api/cart/add` - Add a product to the cart
- **DELETE** `/api/cart/remove` - Remove a product from the cart
- **GET** `/api/cart` - Get all products in the cart

## Demo vedio link - 
  https://drive.google.com/drive/folders/1uQEpp2cUFJ_A0xT7toCCgs0kRw5JnKs1?usp=sharing

## Contact
For any questions, please reach out to abhishekbharti91550@example.com.

