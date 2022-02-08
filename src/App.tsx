import React from 'react';
import './App.css';
import {AppRouter} from "./App-router";
import {Header} from "./common/components/Header";
import {AppStore} from "./store/app.store";

function App() {
  return (
    <div className="App">
      <AppStore>
        <div className="container">
          <Header/>
          <AppRouter/>
        </div>
      </AppStore>
    </div>
  );
}

export default App;
