import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AdminHomePage } from '../pages/AdminHomePage';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { TripDetailsPage } from '../pages/TripDetailsPage';

export const Routers = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="admin" element={<AdminHomePage />} />
          <Route path="admin/trips/00yD1s00AxDbnWKiZjL7" element={<TripDetailsPage />} />
        </Routes>
      </BrowserRouter>
    );
  };