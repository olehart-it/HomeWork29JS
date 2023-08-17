import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>My React App</h1>
      </header>
      <div className="container">
      <nav className="sidebar">
          <h3>Navigation</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Services</li>
            <li>Portfolio</li>
          </ul>
        </nav>
        <main className="main-content">
          <h2>Lorem ipsum!</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nam modi, harum doloremque, vero, impedit rerum aliquam dolorum nostrum distinctio magnam maxime. Quam reprehenderit facilis cupiditate ducimus rerum accusantium. Reprehenderit!</p>
          <h3>Lorem ipsum </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nam modi, harum doloremque, vero, impedit rerum aliquam dolorum nostrum distinctio magnam maxime. Quam reprehenderit facilis cupiditate ducimus rerum accusantium. Reprehenderit!</p>
        </main>
      </div>
    </div>
  );
}

export default App;
