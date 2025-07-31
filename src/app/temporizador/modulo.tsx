export interface ModuloProps {
  titulo: string;
  valor: number;
}

export default function Modulo({ titulo, valor }: ModuloProps){
  return(
    <div className="flex flex-col gap-3">
        <div>
          <div className='bg-[#1e1f29ff] py-9 px-20 -mb-12 rounded-t-sm'/>
          <h2 className="text-8xl text-[#fb6087]">{valor}</h2>
          <div className='
          bg-[#343650ff] py-9 px-20 -mt-12 rounded-b-lg
          border-b-6 border-[#17181d]
          '/>
        </div>
        <span className="text-[#8486a9ff] text-xl">{titulo}</span>
      </div>
  )
}