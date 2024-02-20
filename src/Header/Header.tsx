import React from "react";
import style from './style.module.css';
import logo from '../sources/logo.png';

export function Header(){

    return(
        <div className={style.container}>
            <div className={style.header}>
                {/*<div className={style.logo}>*/}
                {/*    <img src={logo}/>*/}
                {/*    <a>people</a>*/}
                {/*</div>*/}
                <div className={style.navigation}>
                    <a>Home</a>
                    <a>Products</a>
                    <a>Support</a>
                </div>
            </div>
        </div>
    )
}