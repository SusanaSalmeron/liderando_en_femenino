import style from "./page.module.css";
import Header from "@/components/Header";
import Card from "@/components/Card";
import ColabInfo from "@/components/ColabInfo";
import InfoCard from "@/components/infoCard";

const titles = [<h1 key="1">Coaching</h1>, <h1 key="2">escritora</h1>, <h1 key="3">conferenciante</h1>, <h1 key="4">& ponente</h1>]

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
        <Card
          cardClass={style.coach}
          imageContainerClass={style.photoContainer}
          cardImage="/images/Beatriz-transformacion.png"
          cardAlt="Podcast"
          cardText="Formado y certificado como coach por la Federación  Internacional de Coaching desde 2012 y en 2014 en enfoque sistémico para  retos ejecutivos. Profesor colaborador ocasional de Liderazgo y  habilidades directivas en el Centro de Liderazgo y Tecnología de la  Universidad Politécnica de Madrid.
Conferenciante y ponente en  empresas, universidades y escuelas de negocios. 2023 autor publicado  («¿Síndrome de la impostora? Liderando en femenino») por Editorial  Universitaria Ramón Areces."
          title={titles.map(title => title)}
          titleContainerClass={style.coachContainer}
          textContainerClass={style.textCoach}
        />
        <h3>estrategia operativa y digitalizacion</h3>
        <InfoCard
          title="DEFINICION DEL PLAN DE NEGOCIO Y LOS CUADROS DE MANDO"
          text="Definí el plan de negocio para una unidad 
generadora de ingresos netos de más de 
600 millones de euros, los cuadros de mando 
relacionados con la gobernanza y las métricas 
de rendimiento clave para las estrategias 
operativas y funcionales."
          cardContainer={style.defContainer}
          textClass={style.definition}
        />
        <InfoCard
          title="TRANSFORMACION DE PROCESOS"
          text="Desde 2017 estoy transformando los procesos y herramientas heredados de las operaciones empresariales."
          cardContainer={style.transContainer}
          textClass={style.transformation}
        />
        <InfoCard
          title="IMPLEMENTACION DE MEJORAS DE EFICIENCIA"
          text="Introducción de la automatización, 
el aumento de la analítica de datos y la 
alfabetización de datos en la unidad de 
negocio compuesta por más de 650
empleados."
          cardContainer={style.impleContainer}
          textClass={style.implementation}
        />
      </main>
    </>
  );
}


