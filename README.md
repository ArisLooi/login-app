# Login App

Welcome to the Login App project! This is a React application that demonstrates user authentication and navigation using React Router, Bootstrap, and useLocalStorage.

## Features

- User authentication with email and password
- Protected routes for authenticated users
- Navigation bar with conditional rendering based on authentication status
- Persistent login state using useLocalStorage

## Getting Started

### Prerequisites

To run this project, you need Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ArisLooi/login-app.git
2. Navigate to the project directory:
    ```bash
    cd login-app
3. Install the dependencies:
   ```bash
   npm install

## Usage
1. Start the development server:
   ```bash
   npm start
2. Open your browser and navigate to http://localhost:3000.

## Project Structure
login-app/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── AppNavbar.jsx
│   │   ├── RequireAuth.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Profile.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── AuthContext.js
│   ├── index.css
│   ├── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js

## Functions
- login(): Authenticates the user and sets the token in local storage.
- handleLogout(): Logs out the user by clearing the token from local storage.
- RequireAuth: A higher-order component that redirects unauthenticated users to the login page.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

## Acknowledgments
Thanks to all the developers who have contributed to open-source projects and made learning to code accessible to everyone.

Happy coding! 😊
