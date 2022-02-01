import React from 'react';
import './App.css';
import {AppRouter} from "./App-router";
import {Header} from "./common/components/Header";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header/>
        <AppRouter/>
      </div>
    </div>
  );
}

export default App;
