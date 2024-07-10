import Image from "next/image";
import style from "./page.module.css";
import Header from "@/components/Header";
import Card from "@/components/Card";
import ColabInfo from "@/components/ColabInfo";

export default function Home() {
  return (
    <>
      <Header />
      <main className={style.container}>
        <Card
          cardClass={style.beatriz}
          imageContainerClass={style.beatrizContainer}
          cardImage="/images/Beatriz-Arias-sin-fondo.png" cardAlt="Beatriz Arias"
          cardText="Me llamo Beatriz Arias y soy experta en transformación de operaciones en entornos internacionales, con más de 20 años de experiencia en Nokia, empresa de telecomunicaciones B2B líder en innovación."
          title="digital mindshaker"
          titleContainerClass={style.mindshakerContainer}
          textContainerClass={style.text}
        />
        <Card
          cardClass={style.experience}
          imageContainerClass={style.vieseContainer}
          cardImage="/images/estudios.png"
          cardAlt="Estudios"
          cardText="Nacida en Australia, viví en Munich y residente en España. Dirijo equipos dispersos remotamente desde 2007, cubriendo Europa, Norteamérica, LATAM, Oriente Medio y África."
          title="experiencia"
          titleContainerClass={style.experienceContainer}
          textContainerClass={style.text}
        />
        <Card
          cardClass={style.studies}
          imageContainerClass={style.flagsContainer}
          cardImage="/images/paises.png"
          cardAlt="Flags"
          cardText="Estudios en el Programa de Alta Dirección de Empresas del IESE (PADE internacional) y Master en Ingeniería de Telecomunicaciones por la Universidad Politécnica de Madrid."
          title="estudios internacionales"
          titleContainerClass={style.studiesContainer}
          textContainerClass={style.text}
        />
        <Card
          cardClass={style.technologie}
          imageContainerClass={style.pictureContainer}
          cardImage=""
          cardAlt=""
          cardText="Lidero la ejecución de numerosos programas para proveedores de servicios globales en su transición de 2G (GSM) a 3G, 4G y evolución final a la virtualización de redes con 5G. He trabajado con una amplia gama de soluciones de telecomunicaciones: Acceso Radio, Acceso Fijo, dispositivos inalámbricos, IP y Redes Ópticas y dominios de Servicios."
          title="tecnologia"
          titleContainerClass={style.techContainer}
          textContainerClass={style.textTech}
        />
        <ColabInfo />
      </main>
    </>
  );
}


