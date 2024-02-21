import React from 'react';
import {Header} from "./Header/Header";
import MainPage from "./Content/MainPage/MainPage";
import {Info} from "./Content/Info/Info";

function App() {
  return (
    <div className="App">
        <Header/>
        <MainPage/>
        <Info/>
    </div>
  );
}

export default App;
