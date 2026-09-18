import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home/Home';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Redirect all unmatched routes back to home page */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
