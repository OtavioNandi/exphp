import React, { useState } from 'react'
import styles from './ToggleVisibility.module.css'

export const ToggleVisibility = ({children}) => {
    const [show, setShow] = useState();

    function toggleShow() {
        setShow(!show);
    }

    return (
        <div className={styles.botao_container}>
            {!show ? (
                <button className={styles.botao_mostrar} onClick={toggleShow}><p className={styles.texto_botao}>Mostrar Exercícios</p></button>
            ) : (
                show, children
            )}
        </div>
    )
}
