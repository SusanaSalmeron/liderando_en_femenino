import Image from "next/image";
import { FC } from "react";
import Navbar from "../Navbar";
import style from '../../styles/header.module.css'

interface HeaderProps { }

const Header: FC<HeaderProps> = () => {
    return (
        <header className={style.header}>
            <picture>
                <img alt="logo" src="/images/logo.png" />
            </picture>
            <Navbar />
        </header>
    )
}

export default Header