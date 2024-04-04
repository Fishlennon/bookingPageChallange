import { useEffect, useState } from 'react';
import axios from 'axios';

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
    <div>
         <h2>Categories</h2>
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
                                <p>Category: {servicio.category}</p>
                                <p>{servicio.description}</p>
                                <button onClick={() => selectService(servicio)}>
                                {seleccionados.find(s => s.id === servicio.id) ? 'Deselect' : 'Select'}
                                </button>
                            </div>
                        )}
                </li>
            ))}
         </ul>
         {seleccionados.length > 0 && <button onClick={props.onContinue}>Siguiente</button>}
    </div>
    )
}

export default Services