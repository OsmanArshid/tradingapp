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

    const isLoginOrSignup = pathname === '/login' || pathname === '/signup' || pathname === '/';

    return (
      <BrowserRouter>
      <AuthProvider>
                {!isLoginOrSignup && <Navbar />}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/signup" element={<Signup/>} />
                    <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>} />
                    <Route path="/browse" element={<ProtectedRoute><Browse/></ProtectedRoute>} />
                    <Route path="/mytrade" element={<ProtectedRoute><MyTrade/></ProtectedRoute>} />
                    <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>} />
                    <Route path="/offersent" element={<ProtectedRoute><Offersent/></ProtectedRoute>} />
                    <Route path="/submitoffer" element={<ProtectedRoute><Submitoffer/></ProtectedRoute>} />
                </Routes>
            </AuthProvider>
    </BrowserRouter>
    );
}

export default App;
