'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import { generateMarvelHash } from "@/lib/utils";
import style from "./page.module.css";
import Link from "next/link";
import Footer from "@/components/Footer"


const publicKey = "c21a8a84f87707df7b8a9e0c35fb9f58";
const privateKey = "050c401297a2c9904c12cf19110cc6699496a675";

const timestamp = new Date().getTime();
const hash = generateMarvelHash(timestamp, privateKey, publicKey);

const wanda = `https://gateway.marvel.com:443/v1/public/characters?name=Wanda%20Maximoff&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
const pantera = `https://gateway.marvel.com:443/v1/public/characters?name=Black%20Panther&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
const zatanna = `https://gateway.marvel.com:443/v1/public/characters?name=Zatanna&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
const doutor = `https://gateway.marvel.com:443/v1/public/characters?name=Doctor%20Strange&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

const Home = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const resposta = await fetch(apiUrl);
        const data = await resposta.json();
        setCharacters(data.data.results);
      } catch (error) {
        console.error("Erro ao buscar dados da API MArvel: ", error);
      }
    };

    getData();
  }, []);

  return (
   <div>
     <div className="cabecalho">
        <Link href="/" className="link">
          <Image src="/logogrupo.png" alt="Home" width={240} height={50} />
        </Link>

        <div className="nav">
          <Link href="/" className="link">
            Autores
          </Link>
          <Link href="/" className="link">
          Produções
          </Link>

          <Link href="/" className="link">
            <button className="button">EQUIPE</button>
          </Link>
        </div>
      </div>
      <br/>
    <h1 className={style.title}>Personagens do Universo Marvel</h1>
    <p>Selecione um desses personagens para obter informações mais detalhadas sobre eles</p>
    <br/>
    <Footer/>
   </div>
  );
};

export default Home;
