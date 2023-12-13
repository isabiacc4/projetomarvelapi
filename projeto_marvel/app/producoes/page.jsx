"use client";

import Footer from "@/components/Footer";
import Link from "next/link";
import styles from "@/app/producoes/producoes.module.css";
import Image from "next/image";

function Corpo() {
  return (
    <>
      <div className="cabecalho">
        <Link href="/" className="link">
          <Image src="/logogrupo.png" alt="Home" width={240} height={50} />
        </Link>

        <div className="nav">
          <Link href="/autor" className="link">
            Autores
          </Link>
          <Link href="/expositiva" className="link">
            Personagens
          </Link>

          <Link href="/equipe" className="link">
            <button className="button">EQUIPE</button>
          </Link>
        </div>
      </div>
      <section>
        <div className={styles.priparallax}>
          <div className={styles.filme}>Produções</div>
        </div>
        <div className={styles.textintro}>
          <h2 className={styles.titulo}>Filmes</h2>
          <hr />
          <br />
          <p className={styles.text}>
            Os filmes da Marvel tiveram início com o lançamento de{" "}
            <i>Homem de Ferro</i>, em 2008, marcando o início do Universo
            Cinematográfico Marvel (MCU). A Marvel Studios, liderada por Kevin
            Feige, adotou uma abordagem inovadora ao interligar personagens e
            tramas em um universo compartilhado. O sucesso do MCU estendeu-se
            por vários filmes, culminando em <i>Vingadores: Ultimato(2019)</i>.
            A franquia é conhecida pela combinação de ação, comédia e elementos
            emocionais, além de sua representação diversificada de personagens.
            O MCU influenciou significativamente a produção cinematográfica ao
            criar uma fórmula bem-sucedida para universos compartilhados. Além
            dos filmes, a Marvel expandiu sua narrativa para séries de
            televisão, como as disponíveis no Disney+.{" "}
            <i>Os Vingadores (2012)</i>, dirigido por Joss Whedon, uniu
            super-heróis como Homem de Ferro, Capitão América, Thor e Hulk em
            uma equipe épica. <i>Pantera Negra (2018)</i>, dirigido por Ryan
            Coogler, destacou-se por sua representação cultural e foi aclamado
            mundialmente. <i>Vingadores: Ultimato (2019)</i> encerrou uma
            narrativa de mais de uma década, tornando-se um marco
            cinematográfico.
          </p>
        </div>
      </section>

      <br />

      <section>
        <div className={styles.segparallax}></div>
        <div className={styles.textintro}>
          <h2 className={styles.titulo}>Séries</h2>
          <br />
          <p className={styles.text}>
            As séries da Marvel, uma extensão bem-sucedida do Universo
            Cinematográfico Marvel (MCU), começaram com <i>WandaVision</i>, em
            2021, seguida por <i>Falcão e o Soldado Invernal</i> e <i>Loki</i>.
            Essas produções exploraram de maneira única personagens como Wanda
            Maximoff, Visão, Falcão e Loki, aprofundando tramas e conexões no
            universo Marvel.
            <i>WandaVision</i> introduziu uma narrativa surreal e inovadora em
            janeiro de 2021, enquanto Falcão e o Soldado Invernal continuou a
            história pós-Vingadores: Ultimato. Loki concentrou-se nas
            complexidades temporais, proporcionando uma experiência única aos
            fãs. Além destas, outras séries notáveis incluem{" "}
            <i>Gavião Arqueiro</i>, em novembro de 2021, centrada em Clint
            Barton, e <i>Ms. Marvel</i>, prevista para 2022, que apresentará
            Kamala Khan. Essas séries tornaram-se fundamentais no enriquecimento
            do universo Marvel, oferecendo narrativas mais complexas e
            desenvolvimento de personagens além do que os filmes tradicionais
            permitem. Com o sucesso global no Disney+, as séries da Marvel
            consolidaram ainda mais a influência da franquia no cenário do
            entretenimento contemporâneo.
          </p>
        </div>
      </section>

      <br />

      <section>
        <div className={styles.terparallax}></div>
        <div className={styles.textintro}>
          <h2 className={styles.titulo}>Comics</h2>
          <br />

          <p className={styles.text}>
            O surgimento das comics da Marvel remonta à década de 1930, quando
            Martin Goodman fundou a Timely Publications, a predecessora da
            Marvel Comics. Inicialmente, a empresa focava em gêneros diversos,
            como romance, faroeste e ficção científica. No entanto, com a
            crescente popularidade dos super-heróis, a Timely começou a publicar
            personagens icônicos, como o Tocha Humana e o Namor, o Príncipe
            Submarino, na década de 1940. O verdadeiro ponto de virada ocorreu
            na década de 1960, sob a liderança de figuras como Stan Lee, Jack
            Kirby e Steve Ditko. Foi nessa época que personagens emblemáticos
            como Homem-Aranha, Quarteto Fantástico, X-Men, Thor, Hulk e Homem de
            Ferro foram criados, dando início à Era de Prata dos quadrinhos.
            Esses personagens não apenas se tornaram ícones, mas também
            introduziram complexidades emocionais e conflitos pessoais em suas
            histórias, marcando uma abordagem inovadora nos quadrinhos.
            Destacam-se <i>The Amazing Spider-Man</i>, <i>The Fantastic
            Four</i>, <i>The X-Men</i>, <i>The Avengers</i>, e <i>The Incredible
            Hulk</i>. Essas comics não apenas definiram a Marvel como uma editora
            líder, mas também influenciaram profundamente a cultura popular,
            resultando em adaptações cinematográficas e séries televisivas de
            grande sucesso.
          </p>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
}

export default Corpo;
