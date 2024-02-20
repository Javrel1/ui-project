import React from "react";
import style from './style.module.css';
function MainPage(){
    return(
        <div className={style.container}>
                <div className={style.main}>
                    <div className={style.we}>
                        <a>Welcome to Reazers</a>
                    </div>
                    <div className={style.we_can}>
                        <a>We will help you find your</a>
                        <a>place in Programming</a>
                        <a>and make a career!</a>
                    </div>
                    <div className={style.getStarted}>
                        <button className="adaptive-button">Нажми меня</button>
                    </div>
                </div>
        </div>
    )
}
export default MainPage;