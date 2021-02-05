import React from 'react'
import useFirestore from '../hooks/useFirestore'
import style from './main.module.css'

const ImageGrid = () => {

    const {docs} = useFirestore('images')


    return (
        <div className={style.imgrid}>
            {docs && docs.map(doc => (
                <div className={style.image} key={doc.id}>
                    <img src={doc.url} alt="uploaded pic" />
                </div>
            ))}
        </div>
    )
}

export default ImageGrid
