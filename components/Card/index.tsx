import { FC } from "react";
import style from '../../styles/card.module.css'


interface CardProps {
    imageContainerClass: string,
    cardClass: string;
    cardImage: string,
    cardAlt: string,
    cardText: string,
    title: any,
    titleContainerClass: string,
    textContainerClass: string,
}

const Card: FC<CardProps> = ({ imageContainerClass, cardClass, cardImage, cardAlt, cardText, title, titleContainerClass, textContainerClass }) => {
    return (
        <>
            <div className={cardClass}>
                <picture className={imageContainerClass}>
                    <img
                        alt={cardAlt}
                        src={cardImage}
                    />
                </picture>
                <div className={titleContainerClass}>
                    <h1>{title}</h1>
                </div>
                <div className={textContainerClass}>
                    <p className={style.paragraph}>{cardText}</p>
                </div>
            </div>
        </>
    )
}

export default Card