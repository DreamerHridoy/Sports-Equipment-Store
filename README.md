                                             🏀 Sports Equipment Store 🏐
A full-stack web application for buying and managing sports equipment. Built with React, TailwindCSS, DaisyUI, Firebase, and a backend powered by Express.js, MongoDB, and Node.js.

🚀 Features
User authentication with Firebase
Browse, add, update, and delete sports equipment
User management system
Interactive UI with React & DaisyUI
Backend with Express & MongoDB
API endpoints for CRUD operations
🛠 Tech Stack
Client (Frontend)
React
React Router
React Icons
React Toastify
TailwindCSS
DaisyUI
Swiper (for carousels)
Server (Backend)
Node.js
Express.js
MongoDB
dotenv
cors
📂 Project Structure
bash
Copy
Edit
sports-equipment-store/
│── client/       # React frontend
│── server/       # Node.js backend
│── .env          # Environment variables
│── README.md     # Project documentation
🏗 Setup & Installation
1️⃣ Clone the Repository
sh
Copy
Edit
git clone https://github.com/yourusername/sports-equipment-store.git
cd sports-equipment-store
2️⃣ Client (Frontend) Setup
sh
Copy
Edit
cd client
npm install
npm run dev
3️⃣ Server (Backend) Setup
sh
Copy
Edit
cd server
npm install
npm start
🔑 Environment Variables
Create a .env file in the server/ directory and add:

ini
Copy
Edit
PORT=5000
DB_USER=your_db_username
DB_PASS=your_db_password
📡 API Endpoints
Equipment API
GET /Equipment - Get all equipment
POST /Equipment - Add new equipment
GET /Equipment/:id - Get equipment by ID
PUT /Equipment/:id - Update equipment by ID
DELETE /Equipment/:id - Delete equipment by ID
GET /limitedEquipment?limit=6 - Get limited number of equipment
Users API
GET /users - Get all users
POST /users - Add new user
DELETE /users/:id - Delete user
PATCH /users - Update user sign-in time
🛑 Known Issues / TODOs
Implement authentication & authorization
Add payment gateway
Improve UI with more animations
📜 License
This project is licensed under the MIT License.
