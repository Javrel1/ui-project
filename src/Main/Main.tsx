import React from 'react';
import {Header} from "../Header/Header";
import MainPage from "../Content/MainPage/MainPage";
import {Info} from "../Content/Info/Info";
import {Registration} from "../Content/Registration/Registration";

function Main() {
    return (
        <div>
            <Header/>
            <MainPage/>
            <Info/>
            <Registration/>
        </div>
    );
}

export default Main;
