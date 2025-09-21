import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import MessagePage from "../pages/MessagePage";
import Layout from "../layout/layout";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout wrapper */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />  {/* default route */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="messages" element={<MessagePage />} />
          {/* Removed /profilepanel route since it is now inside MessagePage */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
