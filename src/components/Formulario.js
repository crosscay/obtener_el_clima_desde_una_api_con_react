import React, { useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';


const BotonBuscarClima = styled.input`
    width: 100% !important;
    height: 100% !important;
    /* font-weight: bolder !important; */
    color: #000000 !important;
`; 

const Formulario = ({busqueda, guardarBusqueda, guardarConsultar}) => {

    const [ error, guardarError ] = useState(false);

    // extraer ciudad y pais
    const { ciudad, pais } = busqueda;

    // función que coloca los elementos en el state
    const handleChange = e => {
        // actualizar el state
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value 
        });
    }

    // Cuando el usuario da submit al form
    const handleSubmit = e => {
        e.preventDefault();

        // validar
        if(ciudad.trim() === '' || pais.trim() === '') {
            guardarError(true);
            return;
        }

        guardarError(false);

        // pasarlo al componente principal
        guardarConsultar(true);
    }

    return ( 
        <form
            onSubmit={handleSubmit}
        >
            { error ? <Error mensaje="Ambos campos son obligatorios" /> : null}
            <div className="input-field cold s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={handleChange}
                />
                <label htmlFor="ciudad"> Ciudad: </label>
            </div>
            <div className="input-field cold s12">
                <select
                    name="pais"
                    id="pais"
                    value={pais}
                    onChange={handleChange}
                >
                    <option value="">-- Selecciones un país --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="CL">Chile</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                    <option value="EC">Ecuador</option>
                    <option value="VE">Venezuela</option>
                </select>
                <label htmlFor="pais"> País: </label>
            </div>

            <div className="input-field col s12">
                <BotonBuscarClima
                    type="submit"
                    value="Buscar Clima"
                    // class waves-effect 
                    className="waves-light btn-large btn-block yellow accent-4"
                />
            </div>
        </form>
    );
}
 
Formulario.propTypes = {
    busqueda:  PropTypes.object.isRequired,
    guardarBusqueda:  PropTypes.func.isRequired,
    guardarConsultar:  PropTypes.func.isRequired
}

export default Formulario;