import { FC } from "react";
import style from '../../styles/infoCard.module.css';

interface InfoCardProps {
    title: string,
    text: string,
    cardContainer: string,
    textClass: string,
}

const InfoCard: FC<InfoCardProps> = ({ title, text, cardContainer, textClass }) => {
    return (
        <div className={cardContainer}>
            <h4>{title}</h4>
            <div className={textClass}>
                <p>{text}</p>
            </div>
        </div>

    )
}

export default InfoCard