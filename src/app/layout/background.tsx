import Image from "next/image";
import Rodape from "./rodape";

export default function Background(props: { children: React.ReactNode }) {
  return (
    <div className=" relative flex flex-col h-screen justify-center 
    bg-gradient-to-b from-[#191a24ff] to-[#1e1f29ff]
    ">
      <main className="flex flex-1">
        <div className="absolute top-0 left-0 w-full h-full z-10">
          <Image
            src={"/background.svg"}
            alt="Background Image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="flex flex-1 items-center justify-center text-center z-10">
          {props.children}
        </div>
      </main>
      <Rodape />
    </div>
  )
}