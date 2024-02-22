import React from "react";
import style from './style.module.css';
import team from '../../sources/team.jpg';

export function Registration(){
    return(
        <div className={style.container}>
            <div className={style.main}>
                <div className={style.text}>
                    <div className={style.title}>
                        <a>Leave your details for contact</a>
                    </div>
                </div>
                <div className={style.forms}>
                    <div className={style.input}>
                        <input placeholder={"First Name"} type="text"/>
                    </div>
                    <div className={style.input}>
                        <input placeholder={"Last Name"} type="text"/>
                    </div>
                    <div className={style.input}>
                        <input placeholder={"Email"} type="text"/>
                    </div>
                    <div className={style.input}>
                        <input placeholder={"Phone Number"} type="text"/>
                    </div>
                    <div className={style.selectCountry}>
                        <select name="cars" id="cars">
                            <option value="volvo">USA</option>
                            <option value="saab">Canada</option>
                            <option value="mercedes">International</option>
                        </select>
                    </div>
                </div>
                <div className={style.programmers}>
                    <div className={style.programmersImg}>

                    </div>
                </div>
            </div>
        </div>
    )
}