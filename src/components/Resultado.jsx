import React from 'react';

const Resultado = ({resultado}) => {
    //extraer elementos de la api JSON
    const{PRICE,HIGHDAY,LOWDAY,CHANGEPCT24HOURS,IMAGEURL,LASTUPDATE}=resultado
    return (
        <div>
            <p>El precio es de: <span>{PRICE}</span></p>
            <p>El precio más alto del día: <span>{HIGHDAY}</span></p>
            <p>El precio más bajo del día: <span>{LOWDAY}</span></p>
            <p>Variación de las últimas 24 horas: <span>{CHANGEPCT24HOURS}</span></p>
            <p>Última actualización: <span>{LASTUPDATE}</span></p>
            
        </div>
    );
};

export default Resultado;