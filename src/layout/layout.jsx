import React from "react";
import Footer from "../components/Footer";
import Header from "./header/Header";
import { Outlet } from "react-router-dom";
export const Layout = () => {
  return (
    <div className="app">
      <Header />
      <main className="app__content">
        <Outlet />
      </main>
      <Footer />
      <style jsx>{`
        .app {
          font-family: "Arial, sans-serif";
        }
        .app__content {
          padding: 20px;
          background-color: #f9f9f9;
          min-height: calc(100vh - 200px);
        }
        .app__footer {
          padding: 20px;
          background-color: #333;
          color: #fff;
          text-align: center;
        }
      `}</style>
    </div>
  );
};
