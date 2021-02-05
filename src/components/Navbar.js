import React from 'react'
import style from './main.module.css'

const Navbar = () => {
    return (
        <div className={style.nav}>
            <div className={style.label}>
                <span className="fa fa-camera-retro"></span>
                <h3>SnapBase</h3>
            </div>
            <div className={style.util}>
                <div></div>
                <div></div>
                <div className={style.about}>
                    <h3>About</h3>
                </div>
                <div className={style.services}>
                    <h3>Services</h3>
                </div>
                <div className={style.signup}>
                    <h3>Sign Up</h3>
                </div>
                <div className={style.search}>
                    <input type="text" className={style.inp}></input>
                    <button className={style.searchbtn}>Search</button>
                </div>
            </div>
            
        </div>
    )
}

export default Navbar
