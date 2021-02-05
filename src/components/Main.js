import React from 'react'
import style from './main.module.css'
import UploadForm from './UploadForm'

const Main = () => {


    return (
        <div className={style.main}>
            <div className={style.desc}>
                <h1>Your Gallery</h1>
            </div>
            <div className={style.gallery}>
                <div className={style.formdiv}>
                    <UploadForm />
                </div>
            </div>            
        </div>
    )
}

export default Main
