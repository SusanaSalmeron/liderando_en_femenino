import { FC } from "react";
import style from '../../styles/colabInfo.module.css'

interface ColabInfoProps { }

interface Picture {
    title: string,
    image: string
}

const pictures: Picture[] = [
    {
        title: "IE Business School Logo",
        image: "/images/BusinessSchool.png"
    },
    {
        title: "IESE Logo",
        image: "/images/IESE.png"
    },
    {
        title: "RSME Logo",
        image: "/images/RSME.png"
    },
    {
        title: "Stematesella Logo",
        image: "/images/STEMATESELLA.png"
    },
    {
        title: "Woman Times Logo",
        image: "/images/times.png"
    },
    {
        title: "Universidad Politecnica Logo",
        image: "/images/Universidad.png"
    }
]

const ColabInfo: FC<ColabInfoProps> = () => {
    return (
        <div className={style.blur}>
            <div className={style.container}>
                <h4>ORGANIZACIONES CON LAS QUE HE COLABORADO</h4>
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


export default ColabInfo