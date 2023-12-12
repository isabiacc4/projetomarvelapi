'use client'
import Footer from "@/components/Footer"
import Style from '@/app/page.module.css'

export default function Home() {
  return (
    <section>
      <header>
        {/* <Header /> */}
      </header>


      <div className={Style.parallax}/>
      <div className={Style.centered}> API DA MARVEL</div>

      <br />

    <div className={Style.T1}>
      <h2>O que é API?</h2>
      <hr size="2" width="50%" align="left" color="black"/>
      <br/>
      <br/>
      </div>
      
      <div className={Style.T1}>
      <p className={Style.text} align="justify">
      API, ou Interface de Programação de Aplicações, é um conjunto de regras que possibilita a comunicação entre diferentes softwares. Ela define como componentes de software devem interagir, facilitando a integração de funcionalidades entre sistemas. Essa abordagem modular é fundamental no desenvolvimento de software, permitindo que desenvolvedores utilizem funcionalidades de um serviço sem precisar entender seus detalhes internos. As APIs são amplamente empregadas para acessar serviços web, integrar sistemas e automatizar processos, proporcionando uma comunicação eficiente entre diferentes partes de um software. Em resumo, uma API é uma ponte que facilita a cooperação entre softwares distintos.
        </p>
        </div>
      <div/>
      

      <div className={Style.parallax}/>
      <div className={Style.centered}> API DA MARVEL</div>

      <br />

    <div className={Style.T1}> 
      <h2>Sobre a API da marvel</h2>
      <hr size="2" width="50%" align="left" color="black"/>
      <br/>
      <br/>
      </div>
      <div/>
      
      <div className={Style.T1}>
      <p className={Style.text} align="justify">
      A API da Marvel é uma Interface de Programação de Aplicações oferecida pela Marvel Comics para permitir que desenvolvedores acessem e integrem dados relacionados aos personagens, quadrinhos e eventos do universo Marvel em suas próprias aplicações. Essa API fornece informações como detalhes sobre personagens, criadores, séries de quadrinhos e eventos, permitindo que desenvolvedores incorporem conteúdo da Marvel em seus aplicativos, sites ou serviços. Essa integração possibilita a criação de experiências interativas e personalizadas com base no vasto universo da Marvel, atendendo a fãs e entusiastas da franquia.
        </p>
        </div>

        <br/>
        <br/>
        
      <footer>
        <Footer />
      </footer>
    </section>
  );


}

// gfv