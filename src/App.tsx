import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

import Navbar from './components/navbar';
import Home from './components/home';
import Browse from './components/browse';
import MyTrade from './components/mytrade';
import Profile from './components/profile';
import Offersent from './components/offersent';
import Submitoffer from './components/submitoffer';
import { AuthProvider } from './components/authcontext';
import ProtectedRoute from './components/protectedroute';
import Login from './components/login';
import Signup from './components/signup';

function App() {
    const { pathname } = window.location;

    // Check if the current route is login or signup
    const isLoginOrSignup = pathname === '/login' || pathname === '/signup' || pathname === '/home' || pathname === '/';

    return (
      <BrowserRouter>
      <AuthProvider>
                {!isLoginOrSignup && <Navbar />}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/browse" element={<Browse />} />
                    <Route path="/mytrade" element={<MyTrade />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/offersent" element={<Offersent />} />
                    <Route path="/submitoffer" element={<Submitoffer />} />
                </Routes>
            </AuthProvider>
    </BrowserRouter>
    );
}

export default App;
