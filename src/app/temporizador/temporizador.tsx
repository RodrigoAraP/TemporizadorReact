'use client'
import { useEffect, useState } from "react";
import Modulo from "./modulo";

export default function Temporizador() {
  const [tempo, setTempo] = useState(calculadoraDeTempo())

  function calculadoraDeTempo(){
    const dataFinal = new Date('2025-08-03T00:00:00');
    const dataAtual = new Date();
    const diferenca = dataFinal.getTime() - dataAtual.getTime();

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    return { dias, horas, minutos, segundos };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTempo(calculadoraDeTempo())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className='flex gap-10 m-25'>
      <Modulo titulo="Dias" valor={tempo.dias}/>
      <Modulo titulo="Horas" valor={tempo.horas}/>
      <Modulo titulo="Minutos" valor={tempo.minutos}/>
      <Modulo titulo="Segundos" valor={tempo.segundos}/>
    </div>
  )
}