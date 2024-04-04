

const Confirmation = ({FinalSelectedServices, schedule}) => {



    
    return(
        <div>
            <h2>Final Selected Services:</h2>
                <ul>
                    {FinalSelectedServices.map((service, index) => (
                        <li key={index}>{service}</li>
                    ))}
                </ul>
            <h2>{schedule}</h2>
        </div>
    )
}

export default Confirmation