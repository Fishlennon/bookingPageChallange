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
            <h2>Available Schedule</h2>
            <p>{horas.date}</p>
            <ul >
                {horas.availableTimeslots?.map((hora, index) => (
                    <li key={index} className={styles.timeSlot}>
                        <span onClick={() => handleHoraSeleccionada(hora)}>{hora}</span>
                    </li>
                ))}
            </ul>
            <button  className={styles.navButton} onClick={props.onBack}>Atrás</button>
            {horaSeleccionada && <button className={styles.navButton} onClick={props.onContinue}>Siguiente</button>}
        </div>
    )
   
}

export default Schedule