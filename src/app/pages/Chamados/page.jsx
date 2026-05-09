"use client";

import styles from "./Chamados.module.css";
import Header from "@/components/Header/page.jsx";

export default function Chamados() {
    return (
        <div className={styles.container}>
            <Header />
            <div className="content">
                <h1>Tela para visualizar os chamados</h1>
            </div>
        </div>
    )
}