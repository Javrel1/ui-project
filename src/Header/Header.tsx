import React from "react";
import style from './style.module.css';

export function Header(){

    return(
        <div className={style.container}>
            <div className={style.header}>
                <a className={style.logo}>CompanyLogo</a>
                <div className={style.header_right}>
                    <a className={style.active}>Home</a>
                    <a>Contact</a>
                    <a>About</a>
                </div>
            </div>
        </div>
    )
}