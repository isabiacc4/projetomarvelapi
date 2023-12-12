'use client'

import Footer from "@/components/Footer";
import style from "../Equipe/page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Autor() {
    return (
        <div>
            <div className="cabecalho">
                <Link href="/" className="link">
                    <Image src="/logogrupo.png" alt="Home" width={240} height={50} />
                </Link>

                <div className="nav">
                    <Link href="/autores" className="link">
                        Autor
                    </Link>
                    <Link href="/producoes" className="link">
                        Produções
                    </Link>
                    <Link href="/expositiva" className="link">
                        Personagens
                    </Link>

                </div>
            </div>

            <div className={style.title}>
                <h2>CONHEÇA A NOSSA EQUIPE</h2>
            </div>

            <div className={style.imagem}>
                <Image src="/FotoDoGrupo.jpeg" alt="Home" width={600} height={400} />
            </div>

            <br />
            <div className={style.texto1}>
                <p>
                    <br/>
                    BIANCA VIEIRA SHUTZ Nº06 <br />
                    <br />
                    GABRIELLY ISADORA AMORIM DOS SANTOS Nº08 <br />
                    <br />
                    ISABELA DA SILVA BIACCA Nº14<br />
                    <br />
                    MONISE CAROLINA BARÃO Nº22 <br />
                    <br />
                    RAFAEL ANDRIOTTI SAMPAIO Nº26<br />
                    <br />
                    THAIS MARTINS DUNDER Nº29<br />
                    <br/>
                </p>
            </div>


            <Footer></Footer>
        </div>
    )
}
