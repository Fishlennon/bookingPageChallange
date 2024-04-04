import styles from './confirmation.module.css'

const Confirmation = ({FinalSelectedServices, schedule}) => {


const handleConfirm = () => {

}
    
    return(
        <div>
            <h2>Selected services:</h2>
                <ul>
                    {FinalSelectedServices.map((service, index) => (
                        <li key={index}>{service}</li>
                    ))}
                </ul>
            <h2>Date: {schedule[0]} </h2>
            <h2>Hour: {schedule[1]}</h2>

            <button onClick={handleConfirm}>Confirm</button>
        </div>
    )
}

export default Confirmation