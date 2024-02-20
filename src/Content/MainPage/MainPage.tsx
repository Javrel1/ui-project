import React from "react";
import style from './style.module.css';
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function MainPage(){
    return(
        <div className="container">
                <div className={style.main}>
                    <div className={style.we_can}>
                        <a>We will help you find your</a>
                        <a>place in Programming!</a>
                    </div>
                    <div className={style.bigText}>
                        <a>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ducimus</a>
                        <a>illo, inventore omnis quo recusandae sed sit</a>
                        <a>tenetur voluptate voluptatum.</a>
                    </div>
                </div>
        </div>
    )
}
export default MainPage;