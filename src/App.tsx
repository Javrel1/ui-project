import React from 'react';
import {Header} from "./Header/Header";
import MainPage from "./Content/MainPage/MainPage";
import {Info} from "./Content/Info/Info";
import {Registration} from "./Content/Registration/Registration";

function App() {
  return (
    <div className="App">
        <Header/>
        <MainPage/>
        <Info/>
        <Registration/>
    </div>
  );
}

export default App;
