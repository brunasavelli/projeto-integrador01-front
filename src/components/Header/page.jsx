'use client';

import Image from "next/image";
import styles from "./Header.module.css";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };


    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const pathname = usePathname();
    const isActive = (href) => {
        if (!pathname) return false;
        return pathname === href || pathname.startsWith(href);
    }

    return (
        <div className={`${styles.header} ${isVisible ? styles.visible : styles.hidden}`}>
            <button 
                className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerActive : ''}`}
                onClick={toggleMenu}
                aria-label="Menu"
            >
                <span className={styles.hamburgerLine}></span>
                <span className={styles.hamburgerLine}></span>
                <span className={styles.hamburgerLine}></span>
            </button>

            <div className={styles.logo}>
                <h1>Sistemas de Controle Hospitalar</h1>
            </div>
            
            <nav className={`${styles.links} ${styles.nav} ${isMenuOpen ? styles.navActive: ''}`}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <Link href="/pages/InitialPage" className={`${styles.navLink} ${isActive('/pages/InitialPage') ? styles.active : ''}`} onClick={closeMenu}>
                            Início
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/pages/CadastrarPaciente" className={`${styles.navLink} ${isActive('/pages/CadastrarPaciente') ? styles.active : ''}`} onClick={closeMenu}>
                            Cadastrar Paciente
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/pages/CadastrarMedico" className={`${styles.navLink} ${isActive('/pages/CadastrarMedico') ? styles.active : ''}`} onClick={closeMenu}>
                            Cadastrar Médicos
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/pages/Chamados" className={`${styles.navLink} ${isActive('/pages/Chamados') ? styles.active : ''}`} onClick={closeMenu}>
                            Ver Chamados
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}