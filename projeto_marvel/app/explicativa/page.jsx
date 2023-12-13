"use client";

import style from "../expositiva/page.module.css";
import Link from "next/link";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useEffect, useState } from "react";
import { generateMarvelHash } from "@/lib/utils";

const publicKey = "c21a8a84f87707df7b8a9e0c35fb9f58";
const privateKey = "050c401297a2c9904c12cf19110cc6699496a675";

const iron = "1009368";
const gwen = "1009619";
const tempestade = "1009629";
const wol = "1009718";

const timestamp = new Date().getTime();
const hash = generateMarvelHash(timestamp, privateKey, publicKey);

const urlIron = `https://gateway.marvel.com:443/v1/public/characters/${iron}?&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
const urlGwen = `https://gateway.marvel.com:443/v1/public/characters/${gwen}?&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
const urlTempestade = `https://gateway.marvel.com:443/v1/public/characters/${tempestade}?&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
const urlWol = `https://gateway.marvel.com:443/v1/public/characters/${wol}?&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

function Explicativa() {
  const [iron, setIron] = useState([]);
  const [gwen, setGwen] = useState([]);
  const [tempestade, settempestade] = useState([]);
  const [wol, setWol] = useState([]);

  useEffect(() => {
    const getIron = async () => {
      try {
        const resposta = await fetch(urlIron);
        const data = await resposta.json();
        setIron(data.data.results);
      } catch (error) {
        console.error("Erro ao buscar dados da api: ", error);
      }
    };

    getIron();

    const getGwen = async () => {
      try {
        const resposta = await fetch(urlGwen);
        const data = await resposta.json();
        setGwen(data.data.results);
      } catch (error) {
        console.error("Erro ao buscar dados da api: ", error);
      }
    };

    getGwen();

    const getTempestade = async () => {
      try {
        const resposta = await fetch(urlTempestade);
        const data = await resposta.json();
        settempestade(data.data.results);
      } catch (error) {
        console.error("Erro ao buscar dados da api: ", error);
      }
    };

    getTempestade();

    const getWol = async () => {
      try {
        const resposta = await fetch(urlWol);
        const data = await resposta.json();
        setWol(data.data.results);
      } catch (error) {
        console.error("Erro ao buscar dados da api: ", error);
      }
    };

    getWol();
  }, []);

  return (
    <>
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
        <h1 className={style.titulo}>Personagens do Universo Marvel</h1>

        <div>
          <div className={style.classPersos_exp}>
            
          <div>
            <ul className={style.ul_exp}>
              {iron.map((ironCharacter) => (
                <li key={ironCharacter.id}>
                 

                  <Image
                    src={`${ironCharacter.thumbnail.path}.${ironCharacter.thumbnail.extension}`}
                    alt={ironCharacter.name}
                    width={300}
                    height={300}
                  />

                  <h2>
                    <b>{ironCharacter.name} </b>
                  </h2>
                  <br />
                  <p>{ironCharacter.description}</p>
                  <br />
                  <br />

                  <h3>
                    <b>Comics</b>
                  </h3>
                  <p>
                    Este personagem teve participação em{" "}
                    {ironCharacter.comics.available} comics/HQ's.
                  </p>
                  <br />
                  <h3>
                    <b>Series</b>
                  </h3>
                
                  <p>
                    Este personagem teve participação em{" "}
                    {ironCharacter.series.available} séries.
                  </p>
                  <br />
                  <h3>
                    <b>Stories</b>
                  </h3>
                  <p>
                    Este personagem teve participação em{" "}
                    {ironCharacter.stories.available} histórias.
                  </p>
                </li>
              ))}
            </ul>

              <br />
              <br />
             <br />

          
              <ul className={style.ul_exp_dir}>
                {gwen.map((gwenCharacter) => (
                  <li key={gwenCharacter.id}>
             
                    <Image
                      src={`${gwenCharacter.thumbnail.path}.${gwenCharacter.thumbnail.extension}`}
                      alt={gwenCharacter.name}
                      width={300}
                      height={300}
                    />
                    <h2>
                      <b>{gwenCharacter.name} </b>
                    </h2>
                    <br />
                    <p>{gwenCharacter.description}</p>
                  <br />
                    <br />
                    <h3>
                      <b>Comics</b>
                    </h3>
                    <p>
                      Este personagem teve participação em{" "}
                      {gwenCharacter.comics.available} comics/HQ's.
                    </p>
                    <br />
                    <h3>
                      <b>Series</b>
                    </h3>
                    <p>
                      Este personagem teve participação em{" "}
                      {gwenCharacter.series.available} séries.
                    </p>
                    <br />
                    <h3>
                      <b>Stories</b>
                    </h3>
                    <p>
                      Este personagem teve participação em{" "}
                      {gwenCharacter.stories.available} histórias.
                    </p>
                  </li>
                ))}
              </ul>

              <br />
              <br />
              <br />

              <ul className={style.ul_exp}>
                {tempestade.map((tempestadeCharacter) => (
                  <li key={tempestadeCharacter.id}>
                  
                    <Image
                      src={`${tempestadeCharacter.thumbnail.path}.${tempestadeCharacter.thumbnail.extension}`}
                      alt={tempestadeCharacter.name}
                      width={300}
                      height={300}
                    />
                    <h2>
                      <b>{tempestadeCharacter.name} </b>
                    </h2>
                    <br />
                    <p>{tempestadeCharacter.description}</p>
                  <br />
                    <br />
                    <h3>
                      <b>Comics</b>
                    </h3>
                    <p>
                      Este personagem teve participação em{" "}
                      {tempestadeCharacter.comics.available} comics/HQ's.
                    </p>
                    <br />
                    <h3>
                      <b>Series</b>
                    </h3>
                    <p>
                      Este personagem teve participação em{" "}
                      {tempestadeCharacter.series.available} séries.
                    </p>
                    <br />
                    <h3>
                      <b>Stories</b>
                    </h3>

                    <p>
                      Este personagem teve participação em{" "}
                      {tempestadeCharacter.stories.available} histórias.
                    </p>
                  </li>
                ))}
              </ul>

              <br />
              <br />
              <br />

              <ul className={style.ul_exp_dir}>
                {wol.map((wolCharacter) => (
                  <li key={wolCharacter.id}>
                  

                    <Image
                      src={`${wolCharacter.thumbnail.path}.${wolCharacter.thumbnail.extension}`}
                      alt={wolCharacter.name}
                      width={300}
                      height={300}
                    />

                    <h2>
                      <b>{wolCharacter.name} </b>
                    </h2>
                    <br />
                    <p>{wolCharacter.description}</p>
                  <br />
                    <br />
                    <h3>
                      <b>Comics</b>
                    </h3>
                    <p>
                      Este personagem teve participação em{" "}
                      {wolCharacter.comics.available} comics/HQ's.
                    </p>
                    <br />
                    <h3>
                      <b>Series</b>
                    </h3>
                    <p>
                      Este personagem teve participação em{" "}
                      {wolCharacter.series.available} séries.
                    </p>
                    <br />
                    <h3>
                      <b>Stories</b>
                    </h3>

                    <p>
                      Este personagem teve participação em{" "}
                      {wolCharacter.stories.available} histórias.
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div></div>
        <Footer />
      </div>
    </>
  );
}
export default Explicativa;
