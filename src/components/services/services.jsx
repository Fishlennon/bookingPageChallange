import { useEffect, useState } from 'react';
import axios from 'axios';

const Services = () => {

    const [servicios, setServicios] = useState([]);
    const [detalles, setDetalles] = useState([]);

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





return(
    <div>
         <h2>Categorias</h2>
         <ul>
            {servicios.map(servicio =>(
                <li key={servicio.id}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <h3>{servicio.name}</h3>
                            <button onClick={() => mostrarDetalles(servicio.id)}>
                                {detalles[servicio.id] ? '-' : '+'}
                            </button>
                        </div>
                        {detalles[servicio.id] && (
                            <div>
                                <p>{servicio.description}</p>
                                <button>Seleccionar</button>
                            </div>
                        )}
                </li>
            ))}
         </ul>
    </div>
    )
}

export default Services