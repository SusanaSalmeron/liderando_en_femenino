import { FC } from "react";
import style from '../../styles/haveseen.module.css'

interface HaveSeenProps { }
interface Picture {
    title: string,
    image: string
}

const pictures: Picture[] = [
    {
        title: "Woman Times Logo",
        image: "/images/times.png"
    },
    {
        title: "Perfil Logo",
        image: "/images/perfil.png"
    },
    {
        title: "Equipos&Talento Logo",
        image: "/images/equipostalento.png"
    },
    {
        title: "Nokia Logo",
        image: "/images/nokia.png"
    },
    {
        title: "Empresa 360 Logo",
        image: "/images/empresa360.png"

    }
]

const HaveSeen: FC<HaveSeenProps> = () => {

    return (
        <div className={style.blur}>
            <div className={style.container}>
                <h4>ME PUEDES HABER VISTO</h4>
                <div className={style.pictures}>
                    {pictures.map((picture, i) =>
                        <picture
                            className={style.logo}
                            key={i}>
                            <img
                                src={picture.image}
                                alt={picture.title}
                            />
                        </picture>
                    )}
                </div>
            </div>
        </div>
    )

}

export default HaveSeen