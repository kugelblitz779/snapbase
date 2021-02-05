import React, {useState} from 'react'
import ProgressBar from './ProgressBar';
import style from './main.module.css'

const UploadForm = () => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ["image/png", "image/jpeg"];

    const changeHandler = (e) =>{
        let selected = e.target.files[0];

        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError(null);
        }else{
            setFile(null);
            setError("Please select an image file (png / jpeg)");
        }

    }

    return (
        <form className={style.form}>
            <div className={style.uploaddiv}>
                <input type="file" id="takefile" onChange={changeHandler} hidden/>
                
                <label htmlFor="takefile"><div className={style.plus}>+</div></label>
            </div>
            <div className={style.output}>
                {file && <div className="error">{file.name}</div>}
                {error && <div className="fileSelect">{error}</div>}
                {file && <ProgressBar file={file} setFile={setFile}/>}
            </div>
        </form>
    )
}

export default UploadForm
