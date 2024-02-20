import React from "react";
import style from './style.module.css';

export function Header(){

    return(
        <div className={style.container}>
            {/*<div className={style.header}>*/}
            {/*    /!*<div className={style.logo}>*!/*/}
            {/*    /!*    <img src={logo}/>*!/*/}
            {/*    /!*    <a>people</a>*!/*/}
            {/*    /!*</div>*!/*/}
            {/*    <div className={style.navigation}>*/}
            {/*        <a>Home</a>*/}
            {/*        <a>Products</a>*/}
            {/*        <a>Support</a>*/}
            {/*    </div>*/}
            {/*</div>*/}

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