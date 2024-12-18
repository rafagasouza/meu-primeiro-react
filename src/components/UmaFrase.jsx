import styles from './UmaFrase.module.css'

function Frase(texto){
    return(
        <>
            <div className={styles.fraseContainer}>
                 <p className={styles.fraseContent}>Este eh um componente com uma frase</p>
            </div>
        </>
    )
}

export default Frase