"use client";

import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <p><strong>Integrantes da equipe</strong></p>
            <div className={styles.team}>
                <div className={styles.card}>
                    <p>Bruna Nascimento Savelli</p>
                    <p><b>RA: </b>26001620</p>
                </div>
                <div className={styles.card}>
                    <p>Felipe Veríssimo Oliveira</p>
                    <p><b>RA: </b>00000000</p>
                </div>
                <div className={styles.card}>
                    <p>Rafaela Lorena da Luz Antunes</p>
                    <p><b>RA: </b>26003472</p>
                </div>
                <div className={styles.card}>
                    <p>Raquel Brito Jacomini</p>
                    <p><b>RA: </b>26003037</p>
                </div>
                <div className={styles.card}>
                    <p>Vinicius da Silva Bueno</p>
                    <p><b>RA: </b>26006540</p>
                </div>
            </div>
            <p>&copy; 2024 Sistemas de Controle Hospitalar. Todos os direitos reservados.</p>
        </div>
    );
}