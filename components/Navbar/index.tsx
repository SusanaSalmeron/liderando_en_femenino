import { FC } from "react";
import style from "../../styles/navbar.module.css"
import Image from "next/image";

interface NavbarProps { }

const Navbar: FC<NavbarProps> = () => {
    return (
        <nav className={style.navbar}>
            <ul className={style.content}>
                <li>LIBRO</li>
                <li>BLOG</li>
                <li>CONTACTO</li>
            </ul>
        </nav>


    )
}


export default Navbar
