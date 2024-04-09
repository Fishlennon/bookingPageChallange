import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './services.module.css'


const Services = (props) => {

    const [servicios, setServicios] = useState([]);
    const [detalles, setDetalles] = useState([]);
    const [seleccionados, setSeleccionados] = useState([]);

    useEffect(() =>{
        axios.get(`/services.json`)
        .then(({ data }) => {
         if (data.services) {
            setServicios(data.services);
         }
        })
        .catch(error => {
            console.error('error al obtener datos', error);
        });        
}, []);

const mostrarDetalles = (id) => {
    setDetalles(prevState => ({
        ...prevState,
        [id]:!prevState[id]
    }))
}

const selectService = (servicio) => {
    const yaSeleccionado = seleccionados.find(seleccion => seleccion.id === servicio.id);
    if (yaSeleccionado) {
        setSeleccionados(seleccionados.filter(seleccion => seleccion.id !== servicio.id));
    } else {
        setSeleccionados([...seleccionados, servicio]);
    }
    props.FinalSelectedServices(servicio)
  };


return(
    <div className={styles.container}>
         <h2 className={styles.h2}>Categories</h2>
         <ul className={styles.serviceList}>
            {servicios.map(servicio =>(
                <li key={servicio.id} className={styles.serviceItem}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <h3>{servicio.name}</h3>
                            <button  onClick={() => mostrarDetalles(servicio.id)} className={styles.detailButton}>
                                {detalles[servicio.id] ? '-' : '+'}
                            </button>
                        </div>
                        {detalles[servicio.id] && (
                            <div className={styles.serviceItemDetails}>
                                <p>Category: {servicio.category}</p>
                                <p>{servicio.description}</p>
                                <button onClick={() => selectService(servicio)} className={styles.detailButton}>
                                {seleccionados.find(s => s.id === servicio.id) ? 'Deselect' : 'Select'}
                                </button>
                            </div>
                        )}
                </li>
            ))}
         </ul>
         <div className={styles.buttonContainer}>
            {seleccionados.length > 0 && <button className={styles.continueButton} onClick={props.onContinue}>Siguiente</button>}
         </div>
    </div>
    )
}

export default Services