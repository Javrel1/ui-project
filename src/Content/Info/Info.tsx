import React from 'react';
import style from './style.module.css';
import time from '../../sources/time.png';
import star from '../../sources/star.png';
import support from '../../sources/support.png';
import skill from '../../sources/skill.png';
import students from '../../sources/hero_top.jpg';

export function Info(){
    return(
        <div className={style.container}>
            <div className={style.title}>
                <a>Why should you choose us?</a>
            </div>
            <div className={style.fourElements}>
                <div className={style.top}>
                    <div className={style.time}>
                        <div className={style.Img}>
                            <img src={time}/>
                        </div>
                        <div className={style.text}>
                            Time Saving
                        </div>
                    </div>
                    <div className={style.time}>
                        <div className={style.Img}>
                            <img src={star}/>
                        </div>
                        <div className={style.text}>
                            Quality Of Education
                        </div>
                    </div>
                </div>
                <div className={style.bottom}>
                    <div className={style.time}>
                        <div className={style.Img}>
                            <img src={support}/>
                        </div>
                        <div className={style.text}>
                            Support
                        </div>
                    </div>
                    <div className={style.time}>
                        <div className={style.Img}>
                            <img src={skill}/>
                        </div>
                        <div className={style.text}>
                            Experience And Ideas
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}