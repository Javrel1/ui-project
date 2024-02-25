import React from "react";
import style from './style.module.css';
import {Link, Outlet} from "react-router-dom";
export function Header(){

    return(
        <div className={style.container}>
            <div className={style.header}>
                <div className={style.navigation}>
                    <div className={style.logIn}>
                        <Link to={'/log-in'}>
                            <a>Log In</a>
                        </Link>
                    </div>
                    <div className={style.apply}>
                        <a>Apply Now</a>
                    </div>
                </div>
            </div>
            <Outlet/>
        </div>
    )
}