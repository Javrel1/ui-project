import React from "react";
import style from './style.module.css';

export function Header(){

    return(
        <div className={style.container}>
            <div className={style.header}>
                <a className={style.logo}>CompanyLogo</a>
                <div className={style.header_right}>
                    <a className={style.active}>Home</a>
                    {/* Для мобильных устройств скрываем Contact и About */}
                    <div className={style.mobile_menu}>
                        <a>Contact</a>
                        <a>About</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
