import { useEffect, useState } from 'react';
import axios from 'axios';

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
        props.scheduleSelection(hora)
    };

    return(
        <div>
            <h2>Available Schedule</h2>
            <p>{horas.date}</p>
            <ul>
                {horas.availableTimeslots?.map((hora, index) => (
                    <li key={index} >
                        <span onClick={() => handleHoraSeleccionada(hora)}>{hora}</span>
                    </li>
                ))}
            </ul>
            <button onClick={props.onBack}>Atrás</button>
            {horaSeleccionada && <button onClick={props.onContinue}>Siguiente</button>}
        </div>
    )
   
}

export default Schedule