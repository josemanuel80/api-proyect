import React from 'react';
import a11y from '../assets/a11y.svg';
import blueFlagSvg from '../assets/blue-flag.svg';

const Beach = ({ data }) => {
  const disabilityAccess = data.properties.Acceso_dis === 'Sí';
  const blueFlag = data.properties.Bandera_az === 'Sí';

  return (
    <article className="beach-info" key={data.properties.OBJECTID}>
      <h3>{data.properties.Nombre}</h3>
      <div className="icon">
        {blueFlag && (
          <picture>
            <img className="icon" src={blueFlagSvg} alt="blue flag" />
          </picture>
        )}
        {disabilityAccess && (
          <picture>
            <img src={a11y} alt="accesible" />
          </picture>
        )}
      </div>

      <ul>
        <dl>Localidad:</dl>
        <dt>{data.properties.Término_Mu}</dt>
        <dl>Acceso de discapacidad:</dl>
        <dt>{data.properties.Acceso_dis}</dt>
        <dl>Tipo de arena:</dl>
        <dt>{data.properties.Tipo_de_ar}</dt>
        <dl>Bandera azul:</dl>
        <dt>{data.properties.Bandera_az}</dt>
        <dl>Forma de accesso:</dl>
        <dt>{data.properties.Forma_de_a}</dt>
        <dl>Caracteristicas:</dl>
        <dt>{data.properties.Observacio}</dt>
      </ul>
    </article>
  );
};

export default Beach;
