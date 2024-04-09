import styles from './confirmation.module.css'

const Confirmation = (props) => {


const handleConfirm = () => {

}
    
    return(
        <div className={styles.container}>
            <h2 className={styles.h2} >Selected services:</h2>
                <ul className={styles.h2}>
                    {props.FinalSelectedServices.map((service, index) => (
                        <li key={index}>{service}</li>
                    ))}
                </ul>
            <h2 className={styles.h2} >Date: {props.schedule[0]} </h2>
            <h2 className={styles.h2} >Hour: {props.schedule[1]}</h2>

            <div className={styles.buttonContainer}>
                <button  className={styles.navButton} onClick={props.onBack}>Back</button>
                <button  className={styles.navButton} onClick={props.onContinue}>Confirm</button>
            </div>
        </div>
    )
}

export default Confirmation