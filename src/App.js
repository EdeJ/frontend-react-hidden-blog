import React from "react";
import { Navigation } from './components/organisms/Navigation';
import { Routes } from './Routes';
import './App.css';

export const App = () => {
  return (
    <div className="App">
      <header>
        <Navigation />
        <span>My blog</span>
      </header>
      <hr />
      <main>
        <Routes />
      </main>
    </div>
  );
}