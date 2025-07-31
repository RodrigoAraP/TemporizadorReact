import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function Rodape() {
  return (
    <footer className="relative h-1/5 z-10">
      <div className="absolute top-0 left-0 w-full h-full z-10">
      <Image
        src={"/hills.svg"}
        alt="Hills Image"
        fill
        style={{ objectFit: "cover", objectPosition: "bottom" }}
        />
      </div>
      <div className="relative z-20 
      flex items-center justify-center h-full gap-4 text-[#8486a9ff]
      ">
        <Link href="https://github.com/RodrigoAraP" >
          <IconBrandGithub />
        </Link>
        <Link href="https://www.linkedin.com/in/rodrigoarap/">
          <IconBrandLinkedin />
        </Link>
      </div>
    </footer>
  )
}