"use client";

import styles from "./CadastrarMedico.module.css";
import Header from "@/components/Header/page.jsx";

export default function CadastrarMedico() {
    return (
        <div className={styles.container}>
            <Header />
            <div className="content">
                <h1>Tela para cadastrar Médico</h1>
            </div>
        </div>
    )
}