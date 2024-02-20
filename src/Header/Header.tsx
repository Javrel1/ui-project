import React from "react";
import style from './style.module.css';
export function Header(){

    return(
        <div className={style.container}>
            <div className={style.header}>
                <div className={style.navigation}>
                    <a>Home</a>
                    <a>Products</a>
                    <a>Support</a>
                    <a>Contact</a>
                </div>
            </div>
        </div>
    )
}