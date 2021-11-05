import React from 'react';
import Shop from '../core/Shop';
import {
  Routes,
  Route
} from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Shop />} />
    </Routes>
  );
}

export default AppRoutes;
