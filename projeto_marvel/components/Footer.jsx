import Image from "next/image";

import style from "@/app/page.module.css";
import Link from "next/link";

function Header() {
  return (
    <div className={style.rodape}>
      <div className={style.rodape_bloco1}>
        
          <Link href="https://www.marvel.com">
          <Image
          src={"/logomarvel.jpg"}
          width={195}
          height={70}
          alt="logomarvel"
          priority
        />
          </Link>
        <div className={style.div_apps}>
          <Link href="https://miro.com">
            <Image src={"/miro.jpg"} alt="miro" width={32} height={32} />
          </Link>

          <Link href="https://react.dev">
            <Image src={"/react.jpg"} alt="react" width={32} height={32} />
          </Link>

          <Link href="https://github.com">
            <Image src={"/github.jpg"} alt="github" width={32} height={32} />
          </Link>

          <Link href="https://trello.com">
            <Image src={"/trello.jpg"} alt="trello" width={32} height={32} />
          </Link>
        </div>
      </div>
      
      <br />
      <br />

      <div className={style.rodape_bloco2}>
        <p><b>Desenvolvimento de Sistemas - SESI/SENAI</b></p>
        <br />
        <p>Prof. Antônio Tupinambá</p>
        <p>Prof. Leandro Grosso</p>
      </div>
    </div>
  );
}
export default Header;
