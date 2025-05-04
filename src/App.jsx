/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App*/
// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';




// Import these pages as you build them
 //import EventsList from './pages/EventsList';
// import EventDetails from './pages/EventDetails';
// import Checkout from './pages/Checkout';
// import UserProfile from './pages/UserProfile';
// import AdminDashboard from './pages/AdminDashboard';
// import Login from './pages/Login';
// import Signup from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add these routes as you build the components */}
            {/* <Route path="/events" element={<EventsList />} /> */}
            {/* <Route path="/events/:id" element={<EventDetails />} /> */}
            {/* <Route path="/checkout/:id" element={<Checkout />} /> */}
            {/* <Route path="/profile" element={<UserProfile />} /> */}
            {/* <Route path="/admin/*" element={<AdminDashboard />} /> */}
             <Route path="/login" element={<Login />} /> 
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p>© 2025 MelodyPass. All rights reserved.</p>
            </div>
          </div>
        </footer>
        
      </div>
      
    </BrowserRouter>
  );
}

export default App;
