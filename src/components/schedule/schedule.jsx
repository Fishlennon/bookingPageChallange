import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './schedule.module.css'

const Schedule = (props) => {

    const [horas, setHoras] = useState([]);
    const [horaSeleccionada, setHoraSeleccionada] = useState(null);

    useEffect(() =>{
        axios.get(`/slots.json`)
        .then(({ data }) => {
            
         if (data) {
            setHoras(data);
         }
        })
        .catch(error => {
            console.error('error al obtener datos', error);
        });        
}, []);

    const handleHoraSeleccionada = (hora) => {
        setHoraSeleccionada(hora);
        props.scheduleSelection(horas.date, hora)
    };

    return(
        <div className={styles.scheduleList}>
            <h2 className={styles.h2}>Available Schedule</h2>
            <p  className={styles.h2}>{horas.date}</p>
            <ul >
                {horas.availableTimeslots?.map((hora, index) => (
                    <li key={index} 
                    className={hora === horaSeleccionada ? styles.selected : ''}
                    onClick={() => handleHoraSeleccionada(hora)}>
                        <span>{hora}</span>
                    </li>
                ))}
            </ul>
            <div className={styles.buttonContainer}>
                <button  className={styles.navButton} onClick={props.onBack}>Atrás</button>
                {horaSeleccionada && <button className={styles.navButton} onClick={props.onContinue}>Siguiente</button>}
            </div>
        </div>
    )
   
}

export default Schedule