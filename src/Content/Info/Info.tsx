import React from 'react';
import style from './style.module.css';
import time from '../../sources/time.png';
import star from '../../sources/star.png';
import support from '../../sources/support.png';
import skill from '../../sources/skill.png';

export function Info(){
    return(
        <div className={style.container}>
            <div className={style.title}>
                <a>Why should you choose us?</a>
            </div>
            <div className={style.threeElements}>
                <div className={style.time}>
                    <div className={style.timeImg}>
                        <img src={time}/>
                    </div>
                    <div className={style.text}>
                        Time Saving
                    </div>
                </div>
                <div className={style.time}>
                    <div className={style.timeImg}>
                        <img src={star}/>
                    </div>
                    <div className={style.text}>
                        Quality Of Education
                    </div>
                </div>
                <div className={style.time}>
                    <div className={style.timeImg}>
                        <img src={support}/>
                    </div>
                    <div className={style.text}>
                        Support
                    </div>
                </div>
                <div className={style.time}>
                    <div className={style.timeImg}>
                        <img src={skill}/>
                    </div>
                    <div className={style.text}>
                        Experience And Ideas
                    </div>
                </div>
            </div>
        </div>
    )
}