import Image from "next/image";
import { FC } from "react";
import Navbar from "../Navbar";
import style from '../../styles/header.module.css'

interface HeaderProps { }

const Header: FC<HeaderProps> = () => {
    return (
        <header className={style.header}>
            <figure>
                <Image alt="logo" src="/images/logo.png" width={150} height={80} />
            </figure>
            <Navbar />
        </header>

    )
}

export default Header