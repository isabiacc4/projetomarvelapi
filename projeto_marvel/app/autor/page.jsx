import Footer from "@/components/Footer";
import style from "@/app/autor/page.module.css";
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
          <Link href="/producoes" className="link">
            Produções
          </Link>
          <Link href="/expositiva" className="link">
            Personagens
          </Link>

          <Link href="/" className="link">
            <button className="button">EQUIPE</button>
          </Link>
        </div>
      </div>

      <div className={style.title}>
        <h2>QUEM CRIOU A MARVEL?</h2>
      </div>

      <br />
      <div className={style.texto1}>
        <p>
          A <i>Marvel Comics</i>, originalmente conhecida como <i>Timely Publications</i>, foi
          fundada em 1939 pelo editor Martin Goodman. A empresa foi renomeada
          como <i>Marvel Comics</i> na década de 1960, quando iniciou sua era de maior
          sucesso sob a liderança de Stan Lee, Jack Kirby, Steve Ditko e outros
          talentosos criadores.
          <br />
          <br />
        </p>
      </div>

      {/* flip card */}

      <div className={style.cards}>
        <div className={style.flipcard}>
          <div className={style.flipcardinner}>
            <div className={style.flipcardfront}>
              <Image src="/stan.jpg" alt="Avatar" width={300} height={300} />
            </div>
            <div className={style.flipcardback}>
              <h1>STAN LEE</h1>
              <p>
                Co-criador de muitos dos personagens icônicos da Marvel, como
                Homem-Aranha, Quarteto Fantástico, X-Men, Hulk, Homem de Ferro,
                Thor, entre outros. Lee também desempenhou um papel fundamental
                na expansão do universo Marvel.
              </p>
            </div>
          </div>
        </div>
        <br />
        <div className={style.flipcard}>
          <div className={style.flipcardinner}>
            <div className={style.flipcardfront}>
              <Image src="/jack.jpg" alt="Avatar" width={300} height={300} />
            </div>
            <div className={style.flipcardback}>
              <h1>Jack Kirby</h1>
              <p>
                Conhecido como Rei dos quadrinhos, Kirby colaborou com Stan
                Lee na criação de muitos personagens e é amplamente reconhecido
                por seu trabalho inovador e influente nos quadrinhos.
              </p>
            </div>
          </div>
        </div>
        <br />
        <div className={style.flipcard}>
          <div className={style.flipcardinner}>
            <div className={style.flipcardfront}>
              <Image src="/ditko.jpg" alt="Avatar" width={300} height={300} />
            </div>
            <div className={style.flipcardback}>
              <h1>Steve Ditko</h1>
              <p>
                Co-criador do Homem-Aranha e do Doutor Estranho, Ditko
                contribuiu significativamente para a estética visual e narrativa
                dos quadrinhos da Marvel.
              </p>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />

      <div className={style.texto2}>
        <p>
          Além desses criadores, diversos outros artistas, escritores e editores
          contribuíram para a ascensão da Marvel como uma das principais
          editoras de quadrinhos do mundo. A abordagem inovadora da Marvel na
          construção de um universo compartilhado, no qual as histórias dos
          personagens se entrelaçam, foi fundamental para seu sucesso duradouro
          e impacto na cultura popular.
        </p>{" "}
        <br />
        <p>
          A Marvel continuou a evoluir ao longo dos anos, expandindo para outras
          mídias, como cinema e televisão, e continuou a criar novas e diversas
          histórias e personagens que cativam fãs em todo o mundo. A visão e
          criatividade dos envolvidos na criação da Marvel ajudaram a moldar o
          panorama dos quadrinhos e da cultura pop de maneira duradoura.
        </p>
      </div>
      <br />
      <br />
      <figcaption className={style.figcaption}>Confira a seguir um vídeo sobre a história da Marvel</figcaption>
      <br />
      <br />

      <div className={style.video}>
      <iframe
        width="800"
        height="400"
        src="https://www.youtube.com/embed/3PMdtNYihv8"
        title="COMO SURGIU A MARVEL | A HISTÓRIA DA MARVEL"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      />
      
      </div>
    

      <br />
      <Footer />
    </div>
  );
}
