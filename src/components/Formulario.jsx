import React from 'react';
import styled from '@emotion/styled';
import useSelectMonedas from '../hooks/useSelectMonedas';
const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20x;
    border-radius: 10px;
    transition: background -color .3s ease;
    margin-top: 30px;
    &:hover{
        background-color: #7a7dfe;
        cursor: pointer;
    }
`
const Formulario = () => {
    const monedas = [
        { id: 'USD',nombre:'Dolar de Estados Unidos' },
        { id: 'MXN',nombre:'Peso Mexicano' },
        { id: 'EUR',nombre:'Euro' },
        { id: 'GBP',nombre:'Libra Esterlina' },
        { id: 'ARG',nombre:'Peso Argentino' },

    ]

    const [SelectMonedas] = useSelectMonedas('Elige tu moneda',monedas)

    return (
        <form>
            <SelectMonedas />
            <InputSubmit type="submit" value="cotizar" />
        </form>
    );
};

export default Formulario;