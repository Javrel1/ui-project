import React from "react";
import style from './style.module.css';

export function Registration(){
    return(
        <div className={style.container}>
            <div className={style.main}>
                    <div className={style.title}>
                        <a>Leave your details for contact</a>
                    </div>
                <div className={style.forms}>
                    <div className={style.input}>
                        <input placeholder={"First Name"} type="text"/>
                    </div>
                    <div className={style.input}>
                        <input placeholder={"Last Name"} type="text"/>
                    </div>
                    <div className={style.input}>
                        <input placeholder={"Email"} type="email"/>
                    </div>
                    <div className={style.input}>
                        <input placeholder={"Phone Number"} type="text"/>
                    </div>
                    <div className={style.selectCountry}>
                        <div className={style.selectMain}>
                            <select name="cars" id="cars">
                                <option value="usa">USA</option>
                                <option value="canada">Canada</option>
                                <option value="international">International</option>
                            </select>
                        </div>
                        <div className={style.button}>
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}