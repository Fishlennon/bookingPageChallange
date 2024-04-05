import styles from './confirmation.module.css'

const Confirmation = (props) => {


const handleConfirm = () => {

}
    
    return(
        <div>
            <h2>Selected services:</h2>
                <ul>
                    {props.FinalSelectedServices.map((service, index) => (
                        <li key={index}>{service}</li>
                    ))}
                </ul>
            <h2>Date: {props.schedule[0]} </h2>
            <h2>Hour: {props.schedule[1]}</h2>
            <button   onClick={props.onBack}>Back</button>
            <button onClick={props.onContinue}>Confirm</button>
        </div>
    )
}

export default Confirmation