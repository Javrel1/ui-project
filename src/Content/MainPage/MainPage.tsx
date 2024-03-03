import React from "react";
import style from './style.module.css';

function MainPage(){
    return(
        <div className={style.container}>
                <div className={style.main}>
                    <div className={style.we}>
                        <a>Welcome!</a>
                    </div>
                    <div className={style.we_can}>
                        <a>We will help you find</a>
                        <a>place in Programming</a>
                        <a>and make a career!</a>
                    </div>
                    <div className={style.getStarted}>
                        <button>Let's Go</button>
                    </div>
                    <div className={style.achievements}>
                        <div className={style.xd}>
                            <a className={style.quantity}>10+</a>
                            <a className={style.name}>Our Awards</a>
                        </div>
                        <div className={style.xd}>
                            <a className={style.quantity}>2k+</a>
                            <a className={style.name}>Happy Customers</a>
                        </div>
                        <div className={style.xd}>
                            <a className={style.quantity}>100+</a>
                            <a className={style.name}>Opened Groups</a>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default MainPage;