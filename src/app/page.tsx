import Temporizador from "./temporizador/temporizador";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl uppercase">Meu aniversario</h1>
      <Temporizador />
    </div>
  );
}