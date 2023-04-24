import React from 'react'
import styles from './Titulo.module.css'

export const Titulo = () => {
  return (
    <div className={styles.titulo_container}>
      <div>
        <h1 className={styles.titulo}>Exercícios de PHP</h1>
        <p>Projeto feito em React para apresentar os exercícios da lista de PHP.</p>
      </div>
    </div>
  )
}
