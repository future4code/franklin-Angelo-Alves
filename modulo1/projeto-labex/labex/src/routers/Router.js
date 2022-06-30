import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AdminHomePage } from '../pages/AdminHomePage';
import { HomePage } from '../pages/HomePage';
import { ListTripPage } from '../pages/ListTripsPage';
import { LoginPage } from '../pages/LoginPage';
import { TripDetailsPage } from '../pages/TripDetailsPage';
import { CreateTripPage } from '../pages/CreateTripPage';
export const Routers = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='login' element={<LoginPage />} />
          <Route index element={<HomePage />} />
          <Route path="admin" element={<AdminHomePage />} />
          <Route path="/viagens" element={<ListTripPage />} />
          <Route path="admin/trips/00yD1s00AxDbnWKiZjL7" element={<TripDetailsPage />} />
          <Route path="admin/create" element={<CreateTripPage />} />
        </Routes>
      </BrowserRouter>
    );
  };