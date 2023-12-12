"use client";
import style from "./page.module.css";
import Link from "next/link";
import Footer from "@/components/Footer";
import PersoExpo from "@/components/Expositiva";
import Image from "next/image";

export default function Expositiva() {
  return (
    <div className={style.corpo}>
      <div className="cabecalho">
        <Link href="/" className="link">
          <Image src="/logogrupo.png" alt="Home" width={240} height={50} />
        </Link>

        <div className="nav">
          <Link href="/autor" className="link">
            Autores
          </Link>
          <Link href="/producoes" className="link">
            Produções
          </Link>

          <Link href="/equipe" className="link">
            <button className="button">EQUIPE</button>
          </Link>
        </div>
      </div>
      <br />
      <h1 className={style.titulo}>Personagens do Universo Marvel</h1>
      <br />
      <br />
      <p className={style.text}>
        Selecione um desses personagens para obter informações mais detalhadas
        sobre eles
      </p>
      <br />
      <br />
      <div>
        <PersoExpo />
      </div>
      <Footer />
    </div>
    
  );
}
