import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Nav />
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
