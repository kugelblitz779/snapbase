import useStorage from '../hooks/useStorage'
import style from './main.module.css'
import {useEffect} from 'react'

const ProgressBar = (props) => {

    const {file, setFile} = props;
    const {progress, url} = useStorage(file);
    console.log(progress, url);

    useEffect(() => {
    
        if(url){
            setFile(null);
        }

    }, [url, setFile])

    return (
        <div className={style.progress} style={{width: progress + '%'}}></div>
    )
}

export default ProgressBar
