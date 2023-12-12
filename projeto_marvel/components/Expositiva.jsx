"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { generateMarvelHash } from "@/lib/utils";
import Link from "next/link";
import style from "@/app/expositiva/page.module.css"

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

export default function PersoExpo() {
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
    <div>
      <div className={style.classPersos}>
        <ul className={style.ul}>
          {iron.map((ironCharacter) => (
            <li key={ironCharacter.id}>
              <h3>
                <b>{ironCharacter.name} </b>
              </h3>

              <Image
                src={`${ironCharacter.thumbnail.path}.${ironCharacter.thumbnail.extension}`}
                alt={ironCharacter.name}
                width={200}
                height={200}
              />

              <br />
              <br />
              <br />
              <Link href="/explicativa">
                <button>Saiba mais</button>
              </Link>
            </li>
          ))}
        </ul>

        <br/>

        <ul className={style.ul}>
          {gwen.map((gwenCharacter) => (
            <li key={gwenCharacter.id}>
              <h3>
                <b>{gwenCharacter.name} </b>
              </h3>

              <Image
                src={`${gwenCharacter.thumbnail.path}.${gwenCharacter.thumbnail.extension}`}
                alt={gwenCharacter.name}
                width={200}
                height={200}
              />

              <br />
              <br />
              <br />
              <Link href="/explicativa">
                <button>Saiba mais</button>
              </Link>
            </li>
          ))}
        </ul>

<br/>

        <ul className={style.ul}>
          {tempestade.map((tempestadeCharacter) => (
            <li key={tempestadeCharacter.id}>
              <h3>
                <b>{tempestadeCharacter.name} </b>
              </h3>

              <Image
                src={`${tempestadeCharacter.thumbnail.path}.${tempestadeCharacter.thumbnail.extension}`}
                alt={tempestadeCharacter.name}
                width={200}
                height={200}
              />

              <br />
              <br />
              <br />
              <Link href="/explicativa">
                <button>Saiba mais</button>
              </Link>
            </li>
          ))}
        </ul>

        <br/>

        <ul className={style.ul}>
          {wol.map((wolCharacter) => (
            <li key={wolCharacter.id}>
              <h3>
                <b>{wolCharacter.name} </b>
              </h3>
              <Image
                src={`${wolCharacter.thumbnail.path}.${wolCharacter.thumbnail.extension}`}
                alt={wolCharacter.name}
                width={200}
                height={200}
              />
              <br />
              <br />
              <br />
              <Link href="/explicativa">
                <button>Saiba mais</button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
