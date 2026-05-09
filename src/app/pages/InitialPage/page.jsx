"use client";

import styles from "./InitialPage.module.css";
import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header/page.jsx";

export default function InitialPage() {
    const [showIntro, setShowIntro] = useState(true);

    const handleSkipIntro = () => {
        setShowIntro(false);
    };

    return (
        <div className={styles.container}>
            <Header />
            <div className="content">
                <div className={styles.row}>
                    <section className={styles.leftSide}>
                        <h2>Objetivo do Sistema</h2>
                        <div className={styles.text}>
                            <p>O objetivo do SCH é melhorar a gestão hospitalar, organizando informações de pacientes,
                            médicos e chamados de forma eficiente. O sistema visa otimizar o atendimento, facilitar 
                            a visualização de chamados em espera, em andamento e finalizados, além de listá-los pela
                            urgência de cada caso.
                            </p>
                        </div>
                    </section>
                    <section className={styles.rightSide}>
                        <h2>Integrantes do Grupo</h2>
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
                    </section>
                </div>
            </div>
        </div>
    )
}