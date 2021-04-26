import React from "react";
import PropTypes from 'prop-types';

const PrimeraApp = ({saludo, subtitulo }) => {

    //const saludo = 'Hola Mundo React!';
    /* DECLARACION DE OBJETOS */
    // const saludo = {
    //     nombre: 'Omar',
    //     apellido: "Hdez"
    // }

    /*Obtener datos de props con una destructuracion */
    // console.log(saludo);

  return (
    <>
      <h1>{saludo}</h1>
      {/* IMPRIMIR OBJETO EN PANTALLA DE FORMA BONITA */}
      {/* <pre>{ JSON.stringify(saludo,null,3) }</pre> */}
      <p>{ subtitulo }</p>
    </>
  );
};

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,
};

PrimeraApp.defaultProps = {
    subtitulo: "Soy un subtitulo"
}

export default PrimeraApp;
