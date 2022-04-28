import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import useSelectMonedas from '../hooks/useSelectMonedas';
import {monedas} from './data/monedas'
import Error from './Error';
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
const Formulario = ({ setMonedas }) => {

  
    const [cripto, setCriptos] = useState([])
    const [error, setError] = useState(false)

    const [moneda, SelectMonedas] = useSelectMonedas('Elige tu moneda', monedas)
    const [criptomoneda, SelectCriptomoneda] = useSelectMonedas('Elige tu Criptomoneda', cripto)
    //una sola vez[] vacio
    useEffect(() => {
        const consultarAPI = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
            //bloquear porque no sabemos el tiempo que demore
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
            //arreglo con los datos de las 10 crypto creado con map
            const arrayCripto = resultado.Data.map(cripto => {
                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                }
                return objeto;
            })
            setCriptos(arrayCripto)
        }
        consultarAPI()
    }, [])
    const hadleSubmit = (e) => {
        e.preventDefault()
        if ([moneda, criptomoneda].includes('')) {
            setError(true)
            return
        } setError(false)
        setMonedas({moneda, criptomoneda})
    }
    return (
        <>
            {error && <Error>Todos los campos son obligatorios</Error>}
            <form onSubmit={hadleSubmit}>
                <SelectMonedas />
                <SelectCriptomoneda />
                <InputSubmit type="submit" value="cotizar" />
            </form>
        </>
    );
};

export default Formulario;